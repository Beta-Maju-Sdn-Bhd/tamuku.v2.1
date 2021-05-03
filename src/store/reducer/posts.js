const initState = {
  isThere: false,
  posts: new Array(),
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_POST":
      let post = action.payload.length > 0 ? action.payload : null;
      return {
        ...state,
        isThere: post ? true : false,
        posts: post,
      };
    case "CREATE_POST":
      return {
        ...state,
        isThere: true,
        posts: state.posts.concat(action.payload),
      };

    case "POST_LIKE":
      state.posts.map((elm) => {
        if (elm.id === action.payload.id) {
          // return { ...elm, likes: [...elm.likes, action.payload.uid] };
          if (action.payload.type === "add") {
            elm.likes.push(action.payload.uid);
          }
          if (action.payload.type === "rem") {
            elm.likes = action.payload.likes;
          }
        }
      });
      return {
        ...state,
        posts: state.posts,
      };

    default:
      return state;

    case "POST_COMMENT":
      state.posts.map((elm) => {
        if (elm.id === action.id) {
          // return { ...elm, commments: [...elm.commments, action.payload] };
          elm.comments.concat(action.payload);
        }
      });
      return {
        ...state,
      };
  }
};
