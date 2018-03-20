import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { NieuwsComponent } from "../components/nieuws/nieuws.component";
import { NieuwsToevoegenComponent } from "../components/nieuws/nieuws-toevoegen/nieuws-toevoegen.component";
import { NieuwsberichtComponent } from "../components/nieuws/nieuwsbericht/nieuwsbericht.component";
import { NieuwsAanpassenComponent } from "../components/nieuws/nieuws-aanpassen/nieuws-aanpassen.component";
import { NieuwsberichtDetailComponent } from "../components/nieuws/nieuwsbericht-detail/nieuwsbericht-detail.component";
import { NieuwsDataService } from "../services/nieuws-data.service";


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
export class NieuwsberichtModule {
}
