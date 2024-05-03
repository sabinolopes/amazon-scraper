// Function: mapStatusHTTP to map the status to the corresponding HTTP status code
const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  BAD_REQUEST: 400,
  NO_CONTENT: 204,
};

const mapStatusHTTP = (status) => httpErrorMap[status] || 500;

export default mapStatusHTTP;