import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverzichtGebruikersComponent } from './overzicht-gebruikers/overzicht-gebruikers.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './../../auth/admin.guard';

const adminRoutes: Routes = [
  {path: 'admin/overzicht-gebruikers', component: OverzichtGebruikersComponent, canActivate: [AdminGuard]}
];


@NgModule({
  imports: [    
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    OverzichtGebruikersComponent
  ],
  providers: [AdminGuard]
})
export class AdminModule { 

}
