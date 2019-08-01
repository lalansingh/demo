import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule,
  MatCardModule, MatInputModule, MatAutocompleteModule,
  MatTooltipModule, MatMenuModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppLeftMenuComponent } from './common/left-menu/left-menu.component';
import { CardThirdComponent } from './cards/card-third/card-third.component';
import { SettingsComponent } from './settings/settings.component';
import { routes } from './routes/route';
import { MatVideoModule } from 'mat-video';
import { TopHeaderComponent } from './common/top-header/top-header.component';
import { LoginFirstComponent } from './user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpaceComponent } from './space/space.component';
import { SearchComponent } from './common/search/search.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TrendingComponent } from './space/story/trending/trending.component';
import { StoryVedioComponent } from './space/story/story-vedio/story-vedio.component';
import { NoteComponent } from './space/thinking/note/note.component';
import { UserDetailsFooterComponent } from './common/user-details-footer/user-details-footer.component';
import { ThoughtComponent } from './space/thinking/thought/thought.component';
import { VedioComponent } from './space/creating/vedio/vedio.component';
import { PublishedUserComponent } from './common/published-user/published-user.component';
import { MusicComponent } from './space/creating/music/music.component';
import { PostcastComponent } from './space/creating/postcast/postcast.component';
import { LiveComponent } from './space/creating/live/live.component';
import { ThinkingComponent } from './space/thinking/thinking.component';
import { CreatingComponent } from './space/creating/creating.component';
import { StoryComponent } from './space/story/story.component';
import { OtpComponent } from './user/otp/otp.component';
import { SiteInfoMenuComponent } from './common/menu/site-info-menu/site-info-menu.component';
import { PolicyMenuComponent } from './common/menu/policy-menu/policy-menu.component';
import { ComonService } from './common/services/comon-service';
import { ThinkingMenuComponent } from './common/menu/thinking-menu/thinking-menu.component';
import { StoryMenuComponent } from './common/menu/story-menu/story-menu.component';
import { CreatingMenuComponent } from './common/menu/creating-menu/creating-menu.component';
import { AllThinkingComponent } from './space/thinking/all-thinking/all-thinking.component';
import { CarouselComponent, CarouselItemElement } from './common/directives/carousel/carousel.component';
import { CarouselItemDirective } from './common/directives/carousel/carousel-item.directive';
import { ThemeService } from './common/theme/theme.service';
import { MainLayoutComponent } from './layout/main-layout.component';
import { VerificationComponent } from './verification/verification.component';
import { CookiesComponent } from './verification/policies/cookies/cookies.component';
import { ContentGuidlineComponent } from './verification/site-info/content-guidline/content-guidline.component';
import { StudioComponent } from './studio/studio.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLeftMenuComponent,
    LoginFirstComponent,
    ThinkingComponent,
    CardThirdComponent,
    SettingsComponent,
    ThinkingMenuComponent,
    StoryMenuComponent,
    CreatingMenuComponent,
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
    VerificationComponent,
    OtpComponent,
    SiteInfoMenuComponent,
    PolicyMenuComponent,
    CookiesComponent,
    ContentGuidlineComponent,
    AllThinkingComponent,
    CarouselItemElement,
    CarouselComponent,
    CarouselItemDirective,
    MainLayoutComponent,
    StudioComponent
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
    MatTooltipModule,
    MatMenuModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [MatListModule],
  providers: [
    ComonService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
