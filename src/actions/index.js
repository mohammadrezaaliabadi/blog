import { FETCH_POSTS, ROOT_URL, API_KEY } from "../constants";
import axios from "axios";
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}
