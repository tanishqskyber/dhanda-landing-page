import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DhandaLandingComponent } from './dhanda-landing/dhanda-landing.component';

const routes: Routes = [{ path:'',component:DhandaLandingComponent},
{ path:'**',redirectTo:''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
