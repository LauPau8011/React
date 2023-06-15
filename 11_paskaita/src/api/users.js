import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post("http://localhost:3000/users", user);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.put(`http://localhost:3000/users/${id}`, user);
  return response.data;
};
