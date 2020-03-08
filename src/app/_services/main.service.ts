import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';





export class SearchP {
  type: 'house' | 'plot';
  bedrooms: number;
  size: number;
  locality: string;
  budget: number;
}

@Injectable({ providedIn: 'root' })
export class MainService {




  constructor() {


  }


  async fetchData(options: SearchP) {
    if (options.type == 'house') {
      return fetch(`https://graana.000webhostapp.com/search-api.php`
        + `?type=house&budget=${options.budget}&bedrooms=${options.bedrooms}&locality=${options.locality}`)
        .then((response) => {
          return response.json();
        })
    }
    else {
      return fetch(`https://graana.000webhostapp.com/search-api.php`
        + `?type=plot&budget=${options.budget}&size=${options.size}&locality=${options.locality}`)
        .then((response) => {
          return response.json();
        })
    }

  }





}
