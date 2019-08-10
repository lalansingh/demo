import { Routes } from "@angular/router";
import { SettingsComponent } from "../settings/settings.component";
import { SpaceComponent } from "../space/space.component";
import { NoteComponent } from "../space/thinking/note/note.component";
import { AllThinkingComponent } from "../space/thinking/all-thinking/all-thinking.component";
import { VerificationComponent } from "../verification/verification.component";
import { StudioComponent } from "../studio/studio.component";
import { StudioHomeComponent } from "../studio/studio-home/studio-home.component";
import { StudioGuidlineComponent } from "../studio/studio-guidline/studio-guidline.component";
import { ImageSettingsLayoutComponent } from "../studio/photo/image-settings-layout/image-settings-layout.component";
import { UploadPhotoComponent } from "../studio/photo/upload-photo/upload-photo.component";

export const routes: Routes = [
    { path: '', redirectTo: '/space/all-thinking', pathMatch: 'full' },
    {
        path: '', component: SpaceComponent,
        children: [
            { path: 'space/note', component: NoteComponent, pathMatch: 'full' },
            { path: 'space/all-thinking', component: AllThinkingComponent, pathMatch: 'full' }
        ]
    },
    {
        path: 'studio', component: StudioComponent,
        children: [
            { path: 'photo', component: UploadPhotoComponent, pathMatch: 'full', outlet: 'mediaRouter' },
            { path: 'photo-settings', component: ImageSettingsLayoutComponent, outlet: 'mediasettings' },
            { path: 'studio-home', component: StudioHomeComponent, pathMatch: 'full', outlet: 'mediaRouter' },
            { path: 'studio-guidline', component: StudioGuidlineComponent, outlet: 'mediasettings' }
        ]
    },

    { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
    { path: 'space/verification', component: VerificationComponent, pathMatch: 'full' },
    // { path: '**', redirectTo: '/space/all-thinking' }
];
