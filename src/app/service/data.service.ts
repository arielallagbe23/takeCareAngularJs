import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) {}

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/all-articles2')
  }

  insertData(data:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/add-ordonance', data);
  }

  insertData1(data1:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/add-rdv', data1);
  }

  insertPaiementeffectue(paiement:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/add-paiementeffectue',paiement);
  }

}
