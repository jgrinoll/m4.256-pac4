import { Routes } from '@angular/router';
import { AmiiboListComponent } from './pages/amiibo-list/amiibo-list.component';
import { AmiiboDetailComponent } from './pages/amiibo-detail/amiibo-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'amiibos', pathMatch: 'full' },
  { path: 'amiibos', component: AmiiboListComponent },
  { path: 'amiibos/:id', component: AmiiboDetailComponent },
];
