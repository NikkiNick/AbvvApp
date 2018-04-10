import { Component, OnInit } from '@angular/core';
import { NieuwsDataService } from '../service/nieuws-data.service';
import { Nieuwsbericht } from '../../../classes/nieuwsbericht';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nieuws-detail',
  templateUrl: './nieuws-detail.component.html',
  styleUrls: ['./nieuws-detail.component.css']
})
export class NieuwsDetailComponent implements OnInit {

  private _nieuwsbericht: Nieuwsbericht;

  constructor(private nds: NieuwsDataService, private route: ActivatedRoute) { 

  }
  ngOnInit() {
    this.route.data.subscribe(item => 
      this._nieuwsbericht = item['nieuwsbericht']);
  }

  verwijderNieuwsbericht(){
    if(window.confirm("Ben je zeker dat u dit nieuwbericht wil verwijderen?")){
      if(window.confirm("Geen weg meer terug hierna...")){
        this.nds.verwijderNieuwsbericht(this._nieuwsbericht).subscribe();
      }
    }
  }
  get nieuwsbericht(){
    return this._nieuwsbericht;
  }
}
