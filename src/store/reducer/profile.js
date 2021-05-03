const initState = {
  profileExists: false,
  info: null,
  profiles: null
};

export const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PROFILE":
      return {
        ...state,
        profileExists: true,
        info: action.payload,
      };
    case "CREATE_PROFILE":
      return {
        ...state,
        profileExists: true,
        info: action.payload
      };
    case "PROFILE_ERROR":
      return {
        ...state,
        info: null,
        profileExists: false,
      };
    case "ALL_PROFILE":
      return {
        ...state,
        profiles: action.payload
      }
    case "PROFILE_LOGOUT":
      return {
        ...state,
        profileExists: false,
        info: null,
      }
    default:
      return state;
  }
};
