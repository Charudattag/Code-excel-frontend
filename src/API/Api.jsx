import axios from "axios";

// Base URL for the API

export const BASE_URL = "http://localhost:8000/api";

export const IMG_URL = "http://localhost:8000";

// Create an axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

// Utility Functions
export const getToken = () => localStorage.getItem("authToken");

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const logoutAPI = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("authToken");
};

// Generalized API Request Function
const apiRequest = async (endpoint, data = null, method = "post") => {
  console.log(endpoint, "endpointendpoint");
  const token = getToken();
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  console.log("Base URL:", api.defaults.baseURL);
  const response = await api.request({
    url: endpoint,
    method,
    data,
    headers,
  });
  return response.data;
};

// Authentication APIs
export const loginAPI = async (payload) => {
  const data = await apiRequest("/users/login", payload);
  if (data?.token) {
    localStorage.setItem("user", JSON.stringify(data.userDetails));
    localStorage.setItem("token", data.token);
  }
  return data;
};

export const registerUserAPI = (userData) =>
  apiRequest("/users/register", userData);

// Add banner
export const addAnnouncementAPI = (userData) =>
  apiRequest("/announcement/create", userData, "post");

export const getAllAnnouncementAPI = (payload) =>
  apiRequest("/announcement/all", payload, "get");

export const updateAnnouncementAPI = (id, formDataToSend) =>
  apiRequest(`/announcement/update/${id}`, formDataToSend, "post");

export const toggleAnnouncementStatusApi = ({ id, status }) =>
  apiRequest(`/announcement/status/${id}`, status, "post");

export const updateProductImageAPI = (data) =>
  apiRequest(`/productimage/updateProductImage`, data, "post");

export const getByBannerIdAPI = (bannerId) =>
  apiRequest(`/productimage/getByBannerId/${bannerId}`, null, "get");

export const deleteBannerAPI = (id) =>
  apiRequest(`/banner/deleteBanner/${id}`, "post");

export const deleteProductImageAPI = (id) =>
  apiRequest(`/productimage/deleteProductImage/${id}`, null, "delete");

export const uploadImageAPI = (userData) =>
  apiRequest("/productimage/addProductImages", userData, "post");

export const getlatestAllRatesAPI = (payload) =>
  apiRequest("/productrate/getAlllatest", payload, "get");

//  ALL Course API
export const addProductAPI = (userData) =>
  apiRequest(`/products/createProduct`, userData, "post");

export const getAllCoursesAPI = (payload) =>
  apiRequest("/courses/getAllCourses", payload, "get");

export const getCourseBySlugAPI = (slug) =>
  apiRequest(`/courses/getCourseBySlug/${slug}`, null, "get");

export const updateProductAPI = ({ id, formData }) =>
  apiRequest(`/products/updateProduct/${id}`, formData, "post");

export const deleteProductAPI = (id) =>
  apiRequest(`/products/deleteProduct/${id}`, null, "post");
