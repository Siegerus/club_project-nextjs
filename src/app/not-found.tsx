import { type Metadata } from "next";

import { notFoundPage } from "@/entities/company";
import { ErrorPage } from "@/shared/ui";

export const metadata: Metadata = {
  title: "404 Страница не найдена",
  description: notFoundPage.description,
};

const NotFound = () => (
  <ErrorPage
    actionLabel={notFoundPage.actionLabel}
    actionPath={notFoundPage.actionPath}
    description={notFoundPage.description}
    illustration={notFoundPage.illustration}
    title={notFoundPage.title}
  />
);

export default NotFound;
