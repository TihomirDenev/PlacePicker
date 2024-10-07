import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { catchError, map, tap, throwError } from "rxjs";

import { Place } from "./place.model";
import { ErrorService } from "../shared/error.service";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private errorService = inject(ErrorService);
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      "http://localhost:3000/places",
      "Something went wrong fetching the available places. Place try again later."
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      "http://localhost:3000/user-places",
      "Something went wrong fetching your favorite places. Place try again later."
    ).pipe(
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();
    if (!prevPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.set([...prevPlaces, place]);
    }

    return this.httpClient
      .put("http://localhost:3000/user-places", {
        placeId: place.id,
      })
      .pipe(
        catchError((error) => {
          this.userPlaces.set(prevPlaces);
          this.errorService.showError("Failed to store selected places.");
          return throwError(
            () => new Error("Failed to store selected places.")
          );
        })
      );
  }

  removeUserPlace(place: Place) {}

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((resData) => resData.places),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
