import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': '0641f1df-0b03-4c3c-b5c9-f3c2e7c8fa73'},
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

  saveAvatar(avatar) {
    const formData = new FormData();
    formData.append('image', avatar);

    return instance
    .put('/profile/photo/', formData )
    .then((response) => response.data)

  },

}

export const authAPI = {
  getAuthData() {
    return instance
      .get(`auth/me`)
      .then((response) => response.data);
  },

  login(email, password, rememberMe = false) {
    return instance
    .post(`auth/login`, {email, password, rememberMe})
    .then((response) => response.data);
  },

  logout() {
    return instance
    .delete(`auth/login`)
    .then((response) => response.data);
  },

}

