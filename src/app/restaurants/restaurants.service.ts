import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { api } from "../app.api";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${api}/restaurants`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http
      .get(`${api}/restaurants/${id}`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }
}
