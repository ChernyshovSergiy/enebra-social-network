import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Select2Module } from 'ng-select2-component';
import { ClickOutsideDirective } from './directive/click-outside.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';

import { RegisterComponent } from './views/auth/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginComponent } from './views/auth/login/login.component';
import { HomeComponent } from './views/main/home.component';
import { ReferencesComponent } from './views/main/references/references.component';
import { TimelineNewsFeedsComponent } from './views/main/timeline-news-feeds/timeline-news-feeds.component';
import { InformationsComponent } from './views/main/informations/informations.component';
import { TimelineFeedInnovComponent } from './views/main/timeline-news-feeds/timeline-feed-innov/timeline-feed-innov.component';
import { TimelineFeedInformComponent } from './views/main/timeline-news-feeds/timeline-feed-inform/timeline-feed-inform.component';
import { TimelineFeedVotesComponent } from './views/main/timeline-news-feeds/timeline-feed-votes/timeline-feed-votes.component';
import { TimelineFeedTendersComponent } from './views/main/timeline-news-feeds/timeline-feed-tenders/timeline-feed-tenders.component';
import { MessagesComponent } from './views/header/messages/messages.component';
import { NotificationsComponent } from './views/header/notifications/notifications.component';
import { HeaderComponent } from './views/header/header.component';
import { MessangerComponent } from './views/messanger/messanger.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        ProfileComponent,
        LoginComponent,
        HomeComponent,
        ReferencesComponent,
        TimelineNewsFeedsComponent,
        InformationsComponent,
        TimelineFeedInnovComponent,
        TimelineFeedInformComponent,
        TimelineFeedVotesComponent,
        TimelineFeedTendersComponent,
        MessagesComponent,
        ClickOutsideDirective,
        NotificationsComponent,
        HeaderComponent,
        MessangerComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        Select2Module,
        FlexLayoutModule,
        MatSelectModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
