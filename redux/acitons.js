const FETCH_USER = "FETCH_USER";
const FETCH_USER_SUCCESSFUL = "FETCH_USER_SUCCESSFUL";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const fetchUser = ({ page = 1, pageSize = 20 }) => {
  return {
    type: FETCH_USER,
    params: { page, pageSize }
  };
};
const fetchUserSuccessful = (params, data) => {
  return {
    type: FETCH_USER_SUCCESSFUL,
    params,
    data
  };
};
const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    error: error
  };
};
const UserTypes = { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESSFUL };
const UserActions = { fetchUser, fetchUserError, fetchUserSuccessful };
export { UserTypes, UserActions };
