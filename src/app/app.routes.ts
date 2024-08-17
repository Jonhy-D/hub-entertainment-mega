import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HubComponent } from './hub/hub.component';
import { sessionGuard } from './auth/guards/session.guard';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        component: HubComponent,
        loadChildren:() => import('./app.module').then(m => m.AppModule),
        canActivate:[sessionGuard]
    },
    {
        path:'series',
        component: SeriesComponent,
        canActivate:[sessionGuard]
    },
    {
        path:'movies',
        component: MoviesComponent,
        canActivate:[sessionGuard]
    },
    {
        path:'favorites',
        component: FavoritesComponent,
        canActivate:[sessionGuard]
    },
    {
        path:'settings',
        component: SettingsComponent,
        canActivate:[sessionGuard]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
