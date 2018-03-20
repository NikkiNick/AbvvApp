import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { NieuwsComponent } from "./nieuws.component";
import { NieuwsToevoegenComponent } from "./nieuws-toevoegen/nieuws-toevoegen.component";
import { NieuwsberichtComponent } from "./nieuwsbericht/nieuwsbericht.component";
import { NieuwsAanpassenComponent } from "./nieuws-aanpassen/nieuws-aanpassen.component";
import { NieuwsberichtDetailComponent } from "./nieuwsbericht-detail/nieuwsbericht-detail.component";
import { NieuwsDataService } from "../../services/nieuws-data.service";
import { Routes, RouterModule } from "@angular/router";


const nieuwsRoutes: Routes = [
    {path: 'nieuws', component: NieuwsComponent},
    {path: 'nieuws/wijzig/:nieuwsberichtID', component: NieuwsAanpassenComponent},
    {path: 'nieuws/:nieuwsberichtID', component: NieuwsberichtDetailComponent}
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
        NieuwsberichtComponent,
        NieuwsAanpassenComponent,
        NieuwsberichtDetailComponent
      ],
    providers: [
        NieuwsDataService
    ]
  })
export class NieuwsModule {
}
