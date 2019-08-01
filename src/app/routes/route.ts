import { Routes } from "@angular/router";
import { SettingsComponent } from "../settings/settings.component";
import { SpaceComponent } from "../space/space.component";
import { NoteComponent } from "../space/thinking/note/note.component";
import { AllThinkingComponent } from "../space/thinking/all-thinking/all-thinking.component";
import { VerificationComponent } from "../verification/verification.component";
import { StudioComponent } from "../studio/studio.component";

export const routes: Routes = [
    { path: '', redirectTo: '/space/all-thinking', pathMatch: 'full' },
    {
        path: '', component: SpaceComponent,
        children: [
            { path: 'space/note', component: NoteComponent, pathMatch: 'full' },
            { path: 'space/all-thinking', component: AllThinkingComponent, pathMatch: 'full' }
        ]
    },
    { path: 'studio', component: StudioComponent, pathMatch: 'full' },
    { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
    { path: 'space/verification', component: VerificationComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/space/all-thinking' }
];
