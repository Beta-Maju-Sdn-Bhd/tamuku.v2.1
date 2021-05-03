import AsyncStorage from "@react-native-community/async-storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { authReducer } from "./reducer/auth";
import { messagesReducer } from "./reducer/messages";
import { postReducer } from "./reducer/posts";
import { productReducer } from "./reducer/product";
import { profileReducer } from "./reducer/profile";

const persistConfig = {
  //...
  key: "keepaway1147++",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  posts: postReducer,
  messages: messagesReducer,
  products: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
