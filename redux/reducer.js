import { UserTypes, UserActions } from "./acitons";

const initState = {
  isLoading: false,
  page: 0,
  pageSize: 20,
  data: []
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case UserTypes.FETCH_USER: {
      return {
        ...state,
        error: null,
        isLoading: true
      }
    }
    case UserTypes.FETCH_USER_SUCCESSFUL: {
      const { params, data } = action;
      return {
        isLoading: false,
        error: null,
        page: params.page,
        pageSize: params.pageSize,
        data: [...state.data, ...data]
      };
    }
    case UserTypes.FETCH_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    default:
      return state;
  }
}

export default userReducer;