import axios from 'axios';

// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = 'https://news-blog-server.onrender.com';
export const fetchPosts = (page) => axios.get(`${API}/api/posts?page=${page}`);
export const fetchPost = (id) => axios.get(`${API}/api/posts/${id}`);

export const fetchPostsBySearch = (searchQuery) =>
  axios.get(`${API}/api/posts/search?searchQuery=${searchQuery || 'none'}`);

export const fetchPostsByCategory = (categoryQuery) =>
  axios.get(`${API}/api/posts/category?categoryQuery=${categoryQuery}`);

export const fetchall = () => axios.get(`${API}/api/posts/all`);

export default API;
