import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { StatsComponent } from './stats/stats.component';
import { CountryLookupService } from './country-lookup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, StatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Interactive World Map';

  selectedCountry: any = null;

  constructor(private countryService: CountryLookupService) {

  }
  
  getCountryDetails(event: any){
    const countryCode = event;
    this.countryService.getCountryData(countryCode).subscribe(data => {
      this.selectedCountry = data;
    })
  }
}
