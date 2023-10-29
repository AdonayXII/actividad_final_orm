import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endpoint = "http://localhost:8080/minerales";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MineralsService {

  constructor(private httpClient: HttpClient) { }

  getMineral(){
    return this.httpClient.get(endpoint);
  }

  getMineralById(id: number) {
    return this.httpClient.get(endpoint + "/" + id);
  }

  add(mineral: any) {
    let body = new URLSearchParams();
    body.append("nombre", mineral.nombre);
    body.append("material", mineral.material);
    let bodyencoded = body.toString();

    return this.httpClient.post(endpoint, bodyencoded, httpOptions)
  }

  update(id: number, mineral: any) {
    let body = new URLSearchParams();
    body.append("nombre", mineral.nombre);
    body.append("material", mineral.material);
    let bodyencoded = body.toString();

    return this.httpClient.put(`${endpoint}/${id}`, bodyencoded, httpOptions);
  }

  delete(id: number) {
    return this.httpClient.delete(endpoint + "/" + id);
  }
}
