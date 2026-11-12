export const targetValueValidate = (value: string) => {
  if (!value || Number.isNaN(Date.parse(value))) return false;
  return true;
};
