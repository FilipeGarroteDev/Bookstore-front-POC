import axios from "axios";
const BASE_URL = "http://localhost:4000"

export async function postSignUp(body){
  return axios.post(`${BASE_URL}/signup`, body);
}

export async function postLogin(body){
  return axios.post(`${BASE_URL}/signin`, body);
}

export async function postSocialLogin(body){
  return axios.post(`${BASE_URL}/signin/social`, body);
}