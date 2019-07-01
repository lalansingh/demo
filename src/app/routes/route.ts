import { Routes } from "@angular/router";
import { SettingsComponent } from "../settings/settings.component";
import { SpaceComponent } from "../space/space.component";
import { AlertComponent } from "../alert/alert.component";
import { NoteComponent } from "../space/thinking/note/note.component";
import { AllThinkingComponent } from "../space/thinking/all-thinking/all-thinking.component";

export const routes: Routes = [
    { path: '', redirectTo: '/all-thinking', pathMatch: 'full' },
    {
        path: '', component: SpaceComponent,
        children: [
            { path: 'note', component: NoteComponent, pathMatch: 'full' },
            { path: 'all-thinking', component: AllThinkingComponent, pathMatch: 'full' }
        ]
    },
    { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
    { path: 'alert', component: AlertComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/all-thinking' }
];
