import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DhandaLandingComponent } from './dhanda-landing/dhanda-landing.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [{ path:'',component:DhandaLandingComponent},
{path:'privacy-policy', component:PrivacyPolicyComponent},
{path:'t&c',component:TermsAndConditionsComponent},
{ path:'**',redirectTo:''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
