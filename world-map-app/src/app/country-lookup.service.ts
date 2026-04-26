import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryLookupService {

  constructor(private http: HttpClient) { 

  }

  getCountryData(countryCode: string): Observable<any> {

    return this.http.get<any>(`https://api.worldbank.org/v2/country/${countryCode}?format=json`).pipe(
      map((response: any) =>{
        const countryData = response[1]?.[0];
        if (countryData) {
          return {
            name: countryData.name,
            capital: countryData.capitalCity,
            region: countryData.region?.value,
            incomeLevel: countryData.incomeLevel?.value,
            longitude: countryData.longitude,
            latitude: countryData.latitude
          };
        }
        return null;
      })
    );
  }
}
