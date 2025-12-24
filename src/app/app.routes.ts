import { Routes } from '@angular/router';
import { GiveawayListComponent } from './pages/giveaway-list/giveaway-list.component';
import { GiveawayDetailComponent } from './pages/giveaway-detail/giveaway-detail.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'giveaways', pathMatch: 'full' },
  { path: 'giveaways', component: HomeComponent },
  { path: 'giveaways/:id', component: GiveawayDetailComponent },
];
