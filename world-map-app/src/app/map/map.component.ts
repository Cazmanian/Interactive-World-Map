import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

  countryName: string | null = null;

  @Output() countrySelected = new EventEmitter<string>();


  onSvgMouseOver(event: MouseEvent) {
    const target = event.target as SVGPathElement;
    if (target && target.id) {
      this.countryName = target.id;
      this.countrySelected.emit(target.id);
      console.log('Selected country:', target.id);
    }
  }
}