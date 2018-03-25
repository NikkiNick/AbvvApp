import { Component, OnInit } from '@angular/core';
import { NieuwsDataService } from '../../../services/nieuws-data.service';
import { Nieuwsbericht } from '../../../classes/nieuwsbericht';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nieuwsbericht-detail',
  templateUrl: './nieuwsbericht-detail.component.html',
  styleUrls: ['./nieuwsbericht-detail.component.css']
})
export class NieuwsberichtDetailComponent implements OnInit {

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
