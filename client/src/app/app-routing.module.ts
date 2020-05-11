import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { HomeComponent } from './views/main/home.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';

import { PersonalChronicleComponent } from './views/profile/personal-chronicle/personal-chronicle.component';
import { PersonalDataComponent } from './views/profile/personal-data/personal-data.component';
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
import { CitizenshipComponent } from './views/profile/personal-data/data/citizenship/citizenship.component';
import { FamilyComponent } from './views/profile/personal-data/data/family/family.component';
import { GuarantorsComponent } from './views/profile/personal-data/data/guarantors/guarantors.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'my-chronicle',
                component: PersonalChronicleComponent,
                children: [
                    { path: 'innovation-author', component: InnovationAuthorComponent },
                    { path: 'innovation-co-author', component: InnovationCoAuthorComponent },
                    { path: 'information', component: InformationComponent },
                    { path: 'votes', component: VotesComponent },
                ],
            },
            {
                path: 'personal-data',
                component: PersonalDataComponent,
                children: [
                    {
                        path: 'main',
                        component: DataComponent,
                        children: [
                            { path: 'family', component: FamilyComponent },
                            { path: 'guarantors', component: GuarantorsComponent },
                            { path: 'citizenship', component: CitizenshipComponent },
                        ],
                    },
                    { path: 'contact', component: ContactComponent },
                    { path: 'ownership', component: OwnershipComponent },
                    { path: 'hierarchy-of-needs', component: HierarchyOfNeedsComponent },
                    { path: 'server', component: ServerComponent },
                ],
            },
            { path: 'balance', component: PersonalBalanceComponent },
            { path: 'timeline-settings', component: PersonalTinelineSettingsComponent },
            { path: 'create-innovation', component: PersonalCreateInnovationComponent },
            { path: 'create-information', component: PersonalCreateInformationComponent },
            { path: 'blockchain', component: PersonalBlockchainComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
