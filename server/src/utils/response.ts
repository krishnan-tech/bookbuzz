export const custom_response = (
  OK: 0 | 1,
  error: boolean,
  message: string,
  data: any
) => {
  let response = {
    OK,
    error,
    message,
    data,
  };
  return response;
};
