import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { NieuwsComponent } from "./nieuws-overzicht/nieuws.component";
import { NieuwsToevoegenComponent } from "./nieuws-toevoegen/nieuws-toevoegen.component";
import { NieuwsAanpassenComponent } from "./nieuws-aanpassen/nieuws-aanpassen.component";
import { NieuwsDetailComponent } from "./nieuws-detail/nieuws-detail.component";
import { NieuwsDataService } from "./service/nieuws-data.service";
import { NieuwsberichtResolver } from "./nieuwsbericht-resolver";
import { AdminGuard } from "../../auth/admin.guard";



const nieuwsRoutes: Routes = [
    {path: 'nieuws', 
        component: NieuwsComponent},
    {path: "nieuws/toevoegen", 
        component: NieuwsToevoegenComponent, 
        canActivate: [AdminGuard]},
    {path: 'nieuws/wijzig/:nieuwsberichtID', 
        component: NieuwsAanpassenComponent, 
        canActivate: [AdminGuard],
        resolve: { nieuwsbericht: NieuwsberichtResolver}},
    {path: 'nieuws/:nieuwsberichtID', 
        component: NieuwsDetailComponent, 
        resolve: { nieuwsbericht: NieuwsberichtResolver}}
];

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(nieuwsRoutes)
    ],
    declarations: [
        NieuwsComponent,
        NieuwsToevoegenComponent,
        NieuwsAanpassenComponent,
        NieuwsDetailComponent
      ],
    providers: [
        NieuwsDataService,
        NieuwsberichtResolver,
    ]
  })
export class NieuwsModule {
}
