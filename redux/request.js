import axios from "axios";

const fetchUserRequest = (params) => {
  const { page, pageSize } = params;
  const urlAPI = `https://randomuser.me/api/?page=${page}&results=${pageSize}`;
  return axios({
    method: "GET",
    url: urlAPI
  });
}

export default fetchUserRequest