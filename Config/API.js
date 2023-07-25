import axios from "axios";
import { BASE_URL } from "./BASE_URL";

export const getHeroData = () => {
  return axios.get(`${BASE_URL}/products?populate=*`);
};
export const getAboutData = () => {
  return axios.get(`${BASE_URL}/abouts?populate=*`);
};
export const getModelsData = () => {
  return axios.get(`${BASE_URL}/models?populate=*`);
};
export const getModelsChamberData = () => {
  return axios.get(`${BASE_URL}/mode-chambers?populate=*`);
};
export const getModelsChamberData2 = () => {
  return axios.get(`${BASE_URL}/model-chamber2s?populate=*`);
};
export const getModelsChamberData3 = () => {
  return axios.get(`${BASE_URL}/model-chamber3s?populate=*`);
};
export const getServicesData = () => {
  return axios.get(`${BASE_URL}/services?populate=*`);
};
export const getCertificationsData = () => {
  return axios.get(`${BASE_URL}/certifications`);
};
export const getProductssData = () => {
  return axios.get(`${BASE_URL}/product1s?populate=*`);
};
