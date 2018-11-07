import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaceAddService {

  private endpoint  = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/facelists/ucc/persistedFaces';

  constructor( private _httpClient: HttpClient ) { }

  httpPost() {

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', '75d50f59332f4867b2ac1af7d6e85d62');

    this._httpClient.post(this.endpoint,
      {
        'url': 'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/45558768_516544352148269_3405346583926013952_o.jpg?_nc_cat' +
        '=103&_nc_ht=scontent.feoh3-1.fna&oh=d5a1de0227e75f16dc36ee4ef9497d6d&oe=5C426296'
    }, {headers})
    .subscribe(
        (val) => {
            console.log('POST call successful value returned in body',
                        val);
        },
        response => {
            console.log('POST call in error', response);
        },
        () => {
            console.log('The POST observable is now completed.');
        });

  }

}
