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
import { DropDownOpenDirective } from './directive/drop-down-open.directive';
import { PersonalDataComponent } from './views/profile/personal-data/personal-data.component';
import { PersonalChronicleComponent } from './views/profile/personal-chronicle/personal-chronicle.component';
import { PersonalBalanceComponent } from './views/profile/personal-balance/personal-balance.component';
import { PersonalTinelineSettingsComponent } from './views/profile/personal-tineline-settings/personal-tineline-settings.component';
import { PersonalCreateInnovationComponent } from './views/profile/personal-create-innovation/personal-create-innovation.component';
import { PersonalCreateInformationComponent } from './views/profile/personal-create-information/personal-create-information.component';
import { PersonalBlockchainComponent } from './views/profile/personal-blockchain/personal-blockchain.component';
import { InnovationAuthorComponent } from './views/profile/personal-chronicle/innovation-author/innovation-author.component';
import { InnovationCoAuthorComponent } from './views/profile/personal-chronicle/innovation-co-author/innovation-co-author.component';
import { InformationComponent } from './views/profile/personal-chronicle/information/information.component';
import { VotesComponent } from './views/profile/personal-chronicle/votes/votes.component';
import { DataComponent } from './views/profile/personal-data/data/data.component';
import { ContactComponent } from './views/profile/personal-data/contact/contact.component';
import { OwnershipComponent } from './views/profile/personal-data/ownership/ownership.component';
import { HierarchyOfNeedsComponent } from './views/profile/personal-data/hierarchy-of-needs/hierarchy-of-needs.component';
import { ServerComponent } from './views/profile/personal-data/server/server.component';
import { FamilyComponent } from './views/profile/personal-data/data/family/family.component';
import { GuarantorsComponent } from './views/profile/personal-data/data/guarantors/guarantors.component';
import { CitizenshipComponent } from './views/profile/personal-data/data/citizenship/citizenship.component';

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
        DropDownOpenDirective,
        PersonalDataComponent,
        PersonalChronicleComponent,
        PersonalBalanceComponent,
        PersonalTinelineSettingsComponent,
        PersonalCreateInnovationComponent,
        PersonalCreateInformationComponent,
        PersonalBlockchainComponent,
        InnovationAuthorComponent,
        InnovationCoAuthorComponent,
        InformationComponent,
        VotesComponent,
        DataComponent,
        ContactComponent,
        OwnershipComponent,
        HierarchyOfNeedsComponent,
        ServerComponent,
        FamilyComponent,
        GuarantorsComponent,
        CitizenshipComponent,
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
