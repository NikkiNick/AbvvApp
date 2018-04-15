import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nieuwsbericht } from '../../../classes/nieuwsbericht';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NieuwsDataService } from '../service/nieuws-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nieuws-aanpassen',
  templateUrl: './nieuws-aanpassen.component.html',
  styleUrls: ['./nieuws-aanpassen.component.css']
})
export class NieuwsAanpassenComponent implements OnInit {

  private _nieuwsbericht: Nieuwsbericht;
  private _orgineelNieuwsbericht: Nieuwsbericht;
  private nieuwsberichtForm: FormGroup;
  private _aanpassenComplete: Boolean = false;
  
  constructor(private nds: NieuwsDataService, private fb: FormBuilder, private route: ActivatedRoute) { 

  }

  ngOnInit() {

    this.route.data.subscribe(item => 
      this._nieuwsbericht = item['nieuwsbericht']);
    this._orgineelNieuwsbericht = this._nieuwsbericht;

    this.nieuwsberichtForm = this.fb.group({
      titel: [this._nieuwsbericht.titel, [Validators.required]],
      bericht: [this._nieuwsbericht.bericht, [Validators.required]]});
  }
  get nieuwsbericht(){
    return this._nieuwsbericht;
  }
  onSubmit(){
    this._nieuwsbericht.titel = this.nieuwsberichtForm.get('titel').value;
    this._nieuwsbericht.bericht = this.nieuwsberichtForm.get('bericht').value;
    this.nds.pasNieuwsberichtAan(this._nieuwsbericht).subscribe(sub => this._aanpassenComplete = true);

  }
  onReset(){
    this.nieuwsberichtForm.setValue({
      titel: this._orgineelNieuwsbericht.titel,
      bericht: this._orgineelNieuwsbericht.bericht
    });
  }
  verwijderNieuwsbericht(){
    if(window.confirm("Ben je zeker dat u dit nieuwbericht wil verwijderen?")){
      if(window.confirm("Geen weg meer terug hierna...")){
        this.nds.verwijderNieuwsbericht(this._nieuwsbericht).subscribe();
      }
    }
  }
  get aanpassenComplete(){
    return this._aanpassenComplete;
  }
}
