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
  ngOnInit(){

    this.route.paramMap.subscribe(pa => 
      this.nds.getNieuwsbericht(pa.get('nieuwsberichtID')).subscribe(item => this._nieuwsbericht = item));
  }

  verwijderNieuwsbericht(){
    this.nds.verwijderNieuwsbericht(this._nieuwsbericht).subscribe();
  }
  get nieuwsbericht(){
    return this._nieuwsbericht;
  }
}
