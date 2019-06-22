import { Routes } from "@angular/router";
import { SettingsComponent } from "../settings/settings.component";
import { SpaceComponent } from "../space/space.component";
import { AlertComponent } from "../alert/alert.component";

export const routes: Routes = [
    { path: '', redirectTo: '/space', pathMatch: 'full' },
    { path: 'space', component: SpaceComponent, pathMatch: 'full' },
    { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
    { path: 'alert', component: AlertComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/space' }
];
