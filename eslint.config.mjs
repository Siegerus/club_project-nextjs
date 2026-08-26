import { createRequire } from "node:module";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import boundaries from "eslint-plugin-boundaries";
import importer from "eslint-plugin-import";

const requireFromFsd = createRequire(import.meta.url);
const { layersLib } = requireFromFsd("@feature-sliced/eslint-config/utils");

const fsSlicedLayersReg = layersLib.getUpperLayers("shared").join("|");
const fsSegmentsReg = [...layersLib.FS_SEGMENTS, ...layersLib.FS_SEGMENTS.map((seg) => `${seg}.*`)].join("|");

const getNotSharedLayersRules = () =>
  layersLib.getUpperLayers("shared").map((layer) => ({
    from: layer,
    allow: layersLib.getLowerLayers(layer),
  }));

const getGodModeRules = () =>
  layersLib.FS_LAYERS.map((layer) => ({
    from: `gm_${layer}`,
    allow: [layer, ...layersLib.getLowerLayers(layer)],
  }));

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      import: importer,
      boundaries,
    },
    settings: {
      "boundaries/elements": [
        ...layersLib.FS_LAYERS.map((layer) => ({
          type: layer,
          pattern: `${layer}/!(_*){,/*}`,
          mode: "folder",
          capture: ["slices"],
        })),
        ...layersLib.FS_LAYERS.map((layer) => ({
          type: `gm_${layer}`,
          pattern: `${layer}/_*`,
          mode: "folder",
          capture: ["slices"],
        })),
      ],
    },
    rules: {
      "import/no-internal-modules": [
        "error",
        {
          allow: [
            `**/*(${fsSlicedLayersReg})/!(${fsSegmentsReg})`,
            `**/*(${fsSlicedLayersReg})/!(${fsSegmentsReg})/!(${fsSegmentsReg})`,
            `**/*shared/*(${fsSegmentsReg})/!(${fsSegmentsReg})`,
            `**/*shared/*(${fsSegmentsReg})`,
            `**/node_modules/**`,
            `**/*shared/_*`,
            `**/*shared/_*/*`,
          ],
        },
      ],
      "import/order": [
        "error",
        {
          alphabetize: { order: "asc", caseInsensitive: true },
          pathGroups: layersLib.FS_LAYERS.map((layer) => ({
            pattern: `**/?(*)${layer}{,/**}`,
            group: "internal",
            position: "after",
          })),
          pathGroupsExcludedImportTypes: ["builtin"],
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        },
      ],
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          message:
            '"${file.type}" is not allowed to import "${dependency.type}" | See rules: https://feature-sliced.design/docs/reference/layers/overview ',
          rules: [...getNotSharedLayersRules(), { from: "shared", allow: "shared" }, ...getGodModeRules()],
        },
      ],
    },
  },
  globalIgnores([
    ".kilo",
    "club_project",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
