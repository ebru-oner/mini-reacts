import axios from "axios";

export async function loginUser(credentials) {
  // const response = await axios.post("http://login", credentials);
  // return response.data;
  return credentials.username;
}

export async function logoutUser(id) {
  // const response = await axios.get(`http://logout/${id}`);
  // return response.status === 200;
  return true;
}
