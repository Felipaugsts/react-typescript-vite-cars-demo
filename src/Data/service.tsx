import http from './http-common'
import Cars from "./model";

const fetchCars = () => {
  return http.get<Array<Cars>>("/cars")
};

const postCars = (cars: Cars) => {
  return http.post("/cars", cars);
};

const putCars = (cars: Cars) => {
  return http.put(`/cars/${cars._id}`, cars);
};

const getCar = (id: Number) => {
  return http.get(`/cars/${id}`);
};

const deleteCar = (id: Number) => {
  return http.delete(`/cars/${id}`);
};

export default {fetchCars, deleteCar, putCars, getCar};
