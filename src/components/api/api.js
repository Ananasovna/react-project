import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': 'dd182d82-a56b-4b62-b533-6748f9cec43d'},
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  postFollowing(userId) {
    return instance
      .post(`follow/${userId}`)
      .then((response) => response.data);
  },

  deleteFollowing(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance
      .get(`profile/` + userId)
      .then((response) => response.data);
  },

  getProfileStatus(userId) {
    return instance
    .get('/profile/status/' + userId)
    .then((response) => response.data)
  },

  updateProfileStatus(status) {
    return instance
    .put('/profile/status/', {status})
    .then((response) => response.data)
  },
}

export const authAPI = {
  getAuthData() {
    return instance
      .get(`auth/me`)
      .then((response) => response.data);
  },

  postLoginData(formData) {
    return instance
    .post(`auth/login`)
    .then((response) => console.log(response));
  },
}

