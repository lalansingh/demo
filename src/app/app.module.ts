import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common/header/header.component';
import { AppLeftMenuComponent } from './common/left-menu/left-menu.component';
import { ThinkingComponent } from './cards/thinking/thinking.component';
import { CardThirdComponent } from './cards/card-third/card-third.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { ApplicationMenuComponent } from './common/header-menu/application-menu/application-menu.component';
import { SocialMenuComponent } from './common/header-menu/social-menu/social-menu.component';
import { MusicMenuComponent } from './common/header-menu/music-menu/music-menu.component';
import { routes } from './routes/route';
import { MatVideoModule } from 'mat-video';
import { TopHeaderComponent } from './common/top-header/top-header.component';
import { LoginFirstComponent } from './cards/login/login.component';
import { CreatingComponent } from './cards/creating/creating.component';
import { StoryComponent } from './cards/story/story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppLeftMenuComponent,
    LoginFirstComponent,
    ThinkingComponent,
    CardThirdComponent,
    SettingsComponent,
    HomeComponent,
    ApplicationMenuComponent,
    SocialMenuComponent,
    MusicMenuComponent,
    TopHeaderComponent,
    CreatingComponent,
    StoryComponent
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
    MatAutocompleteModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
