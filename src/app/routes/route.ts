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
import { UploadMusicComponent } from "../studio/music/upload-music/upload-music.component";
import { MusicSettingsLayoutComponent } from "../studio/music/music-settings-layout/music-settings-layout.component";
import { UploadVideoComponent } from "../studio/video/video-photo/upload-video.component";
import { VideoSettingsLayoutComponent } from "../studio/video/video-settings-layout/video-settings-layout.component";
import { UploadPodcastComponent } from "../studio/podcast/upload-podcast/upload-podcast.component";
import { PodcastSettingsLayoutComponent } from "../studio/podcast/podcast-settings-layout/podcast-settings-layout.component";

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
            { path: 'music', component: UploadMusicComponent, pathMatch: 'full', outlet: 'mediaRouter' },
            { path: 'music-settings', component: MusicSettingsLayoutComponent, outlet: 'mediasettings' },
            { path: 'video', component: UploadVideoComponent, pathMatch: 'full', outlet: 'mediaRouter' },
            { path: 'video-settings', component: VideoSettingsLayoutComponent, outlet: 'mediasettings' },
            { path: 'podcast', component: UploadPodcastComponent, pathMatch: 'full', outlet: 'mediaRouter' },
            { path: 'podcast-settings', component: PodcastSettingsLayoutComponent, outlet: 'mediasettings' },
            { path: 'studio-home', component: StudioHomeComponent, pathMatch: 'full', outlet: 'mediaRouter' },
            { path: 'studio-guidline', component: StudioGuidlineComponent, outlet: 'mediasettings' }
        ]
    },

    { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
    { path: 'space/verification', component: VerificationComponent, pathMatch: 'full' },
    // { path: '**', redirectTo: '/space/all-thinking' }
];
