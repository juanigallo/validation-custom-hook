export const useNotEmpty = (data, requiredFields) => {
  const errors = requiredFields.filter((field) => {
    if (!data[field] || data[field].length <= 0) {
      return field;
    }
  });

  return errors;
};
