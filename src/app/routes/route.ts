import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { SettingsComponent } from "../settings/settings.component";

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
