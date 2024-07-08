import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './genres/genres.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';
import { HubComponent } from './hub/hub.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: '/items', pathMatch: 'full'},
    {path: 'items', component: HubComponent},
    {path: 'genres', component: GenresComponent},
    {path: 'series', component: SeriesComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'favorites', component: FavoritesComponent},
    {path: 'settings', component: SettingsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
