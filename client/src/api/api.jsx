import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Admin Endpoints
export const fetchAdmins = () => API.get('/api/admin/get-admin');
export const createAdmin = (adminData) => API.post('/api/admin/create-admin', adminData);
export const updateAdmins = (id, updatedAdmin) => API.put(`/api/admin/update-admin/${id}`, updatedAdmin);
export const deleteAdmin = (id) => API.delete(`/api/admin/delete-admin/${id}`);





// Post Endpoints => recent activities
export const fetchPosts = () => API.get('/api/post/get-posts');
export const createPost = (postData) => API.post('/api/post/create-post', postData);
export const updatePostApi = (id, updatedPost) => API.put(`/api/post/update/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/api/post/delete/${id}`);






//News Bulletines Endpoints
export const fetchNewsPosts = () => API.get('/api/post/get-newspost');
export const createNewsPosts = (postData) => API.post('/api/post/create-newspost', postData);
export const updateNewsPostsApi = (id, updatedPost) => API.put(`/api/post/update-news-post/${id}`, updatedPost);
export const deleteNewsPosts = (id) => API.delete(`/api/post/delete-news-post/${id}`);