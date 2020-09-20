import {
  FETCH_POSTS,
  ROOT_URL,
  API_KEY,
  CREATE_POST,
  FETCH_POST,
} from "../constants";
import axios from "axios";
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request,
  };
}
