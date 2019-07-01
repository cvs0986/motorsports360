import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NewsComponent } from './admin/news/news.component';
import { SeriesComponent } from './admin/series/series.component';
import { VidoesComponent } from './admin/vidoes/vidoes.component';
import { AudiosComponent } from './admin/audios/audios.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},

  { path: 'admin', component: AdminComponent, children: [
    { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'news', component: NewsComponent},
    { path: 'series', component: SeriesComponent},
    { path: 'vidoes', component: VidoesComponent},
    { path: 'audios', component: AudiosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
