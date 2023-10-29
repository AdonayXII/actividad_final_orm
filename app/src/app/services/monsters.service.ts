import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';


const endpoint = "http://localhost:8080/monsters";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
}

@Injectable({
  providedIn: 'root'
})

export class MonstersService {

  constructor(private httpClient: HttpClient) { }

  getMonsters(){
    return this.httpClient.get(endpoint);
  }

  getMonsterById(id: number) {
    return this.httpClient.get(endpoint + "/" + id);
  }

  add(monster: any) {
    let body = new URLSearchParams();
    body.append("nombre", monster.nombre);
    body.append("tipo", monster.tipo);
    let bodyencoded = body.toString();

    return this.httpClient.post(endpoint, bodyencoded, httpOptions)
  }

  update(id: number, monster: any) {
    let body = new URLSearchParams();
    body.append("nombre", monster.nombre);
    body.append("tipo", monster.tipo);
    let bodyencoded = body.toString();

    return this.httpClient.put(`${endpoint}/${id}`, bodyencoded, httpOptions);
  }

  delete(id: number) {
    return this.httpClient.delete(endpoint + "/" + id);
  }

}
