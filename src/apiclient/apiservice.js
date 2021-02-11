import http from "./httpApi";

class DishesApiService {
  static getAllDishes() {
    return http.get("/dishes");
  }
  static deleteDish(id) {
    return http.delete(`/dishes/${id}`);
  }
}

export default DishesApiService;
