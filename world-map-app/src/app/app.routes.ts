import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { StatsComponent } from './stats/stats.component';

export const routes: Routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    {path: 'map', component:  MapComponent},
    {path: 'stats', component: StatsComponent}
];
