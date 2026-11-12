export const targetValueValidate = (value: string) => {
  if (!value || typeof value !== "string" || Number.isNaN(Date.parse(value)))
    return false;
  return true;
};
