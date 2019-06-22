import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppLeftMenuComponent } from './common/left-menu/left-menu.component';
import { CardThirdComponent } from './cards/card-third/card-third.component';
import { SettingsComponent } from './settings/settings.component';
import { routes } from './routes/route';
import { MatVideoModule } from 'mat-video';
import { TopHeaderComponent } from './common/top-header/top-header.component';
import { LoginFirstComponent } from './cards/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpaceComponent } from './space/space.component';
import { SearchComponent } from './common/search/search.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TrendingComponent } from './cards/trending/trending.component';
import { StoryVedioComponent } from './cards/story-vedio/story-vedio.component';
import { NoteComponent } from './cards/note/note.component';
import { UserDetailsFooterComponent } from './cards/user-details-footer/user-details-footer.component';
import { ThoughtComponent } from './cards/thought/thought.component';
import { VedioComponent } from './cards/vedio/vedio.component';
import { PublishedUserComponent } from './cards/published-user/published-user.component';
import { MusicComponent } from './cards/music/music.component';
import { PostcastComponent } from './cards/postcast/postcast.component';
import { LiveComponent } from './cards/live/live.component';
import { ThinkingComponent } from './layout/thinking/thinking.component';
import { CreatingComponent } from './layout/creating/creating.component';
import { StoryComponent } from './layout/story/story.component';
import { ApplicationMenuComponent } from './common/menu/application-menu/application-menu.component';
import { SocialMenuComponent } from './common/menu/social-menu/social-menu.component';
import { MusicMenuComponent } from './common/menu/music-menu/music-menu.component';
import { AlertComponent } from './alert/alert.component';
import { OtpComponent } from './cards/otp/otp.component';
import { SiteInfoMenuComponent } from './common/menu/site-info-menu/site-info-menu.component';
import { PolicyMenuComponent } from './common/menu/policy-menu/policy-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLeftMenuComponent,
    LoginFirstComponent,
    ThinkingComponent,
    CardThirdComponent,
    SettingsComponent,
    ApplicationMenuComponent,
    SocialMenuComponent,
    MusicMenuComponent,
    TopHeaderComponent,
    CreatingComponent,
    StoryComponent,
    SpaceComponent,
    SearchComponent,
    TrendingComponent,
    StoryVedioComponent,
    NoteComponent,
    UserDetailsFooterComponent,
    ThoughtComponent,
    VedioComponent,
    PublishedUserComponent,
    MusicComponent,
    PostcastComponent,
    LiveComponent,
    AlertComponent,
    OtpComponent,
    SiteInfoMenuComponent,
    PolicyMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatVideoModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
