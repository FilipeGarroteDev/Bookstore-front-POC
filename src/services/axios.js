import axios from "axios";
const BASE_URL = "http://localhost:4000"

export default async function postSignUp(body){
  return axios.post(`${BASE_URL}/signup`, body);
}