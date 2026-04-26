import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  @Input() countryName: any;
  @Input() capital: any = null;
  @Input() region: any = null;
  @Input() incomeLevel: any = null;
  @Input() longitude: any = null;
  @Input() latitude: any = null;
}
