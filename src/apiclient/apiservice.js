import http from "./httpApi";

class DishesApiService {
  static getAllDishes() {
    return http.get("/dishes");
  }
}

export default DishesApiService;
