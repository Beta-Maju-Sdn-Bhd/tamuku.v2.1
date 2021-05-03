const initState = {
  isAuth: false,
  token: null,
  user: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        token: null,
        user: null,
      };
    case "SIGNUP":
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
