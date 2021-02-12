import http from "./httpApi";

class DishesApiService {
  static getAllDishes() {
    return http.get("/dishes");
  }
  static deleteDish(id) {
    return http.delete(`/dishes/${id}`);
  }
  static postDish(dish) {
    return http.post(`/dishes/`, dish);
  }
  static putDish(dish) {
    return http.put(`/dishes/${dish.id}`, dish);
  }
}

export default DishesApiService;
