import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ReferencesComponent } from './views/references/references.component';
import { TimelineNewsFeedsComponent } from './views/timeline-news-feeds/timeline-news-feeds.component';
import { InformationsComponent } from './views/informations/informations.component';
import { TimelineFeedInnovComponent } from './views/timeline-news-feeds/timeline-feed-innov/timeline-feed-innov.component';
import { TimelineFeedInformComponent } from './views/timeline-news-feeds/timeline-feed-inform/timeline-feed-inform.component';
import { TimelineFeedVotesComponent } from './views/timeline-news-feeds/timeline-feed-votes/timeline-feed-votes.component';
import { TimelineFeedTendersComponent } from './views/timeline-news-feeds/timeline-feed-tenders/timeline-feed-tenders.component';

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
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
