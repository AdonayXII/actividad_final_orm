import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endpoint = "http://localhost:8080/habitats";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HabitatsService {

  constructor(private httpClient: HttpClient) { }

  getHabitats(){
    return this.httpClient.get(endpoint);
  }

  getHabitatById(id: number) {
    return this.httpClient.get(endpoint + "/" + id);
  }

  add(habitat: any) {
    let body = new URLSearchParams();
    body.append("nombre", habitat.nombre);
    body.append("monstruo", habitat.monstruo);
    body.append("mineral", habitat.mineral);
    let bodyencoded = body.toString();

    return this.httpClient.post(endpoint, bodyencoded, httpOptions)
  }

  update(id: number, habitat: any) {
    let body = new URLSearchParams();
    body.append("nombre", habitat.nombre);
    body.append("monstruo", habitat.monstruo_id);
    body.append("mineral", habitat.mineral_id);

    let bodyencoded = body.toString();

    return this.httpClient.put(`${endpoint}/${id}`, bodyencoded, httpOptions);
  }

  delete(id: number) {
    return this.httpClient.delete(endpoint + "/" + id);
  }
}
