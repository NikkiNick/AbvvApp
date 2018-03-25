import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nieuwsbericht } from '../../../classes/nieuwsbericht';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NieuwsDataService } from '../../../services/nieuws-data.service';
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
  
  constructor(private nds: NieuwsDataService, private fb: FormBuilder, private route: ActivatedRoute) { 

  }

  ngOnInit() {

    document.getElementById("message").style.display = "none";

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
    this.nds.pasNieuwsberichtAan(this._nieuwsbericht).subscribe(sub => {
      document.getElementById("message").style.display = "block"
    });

  }
  onReset(){
    this.nieuwsberichtForm.setValue({
      titel: this._orgineelNieuwsbericht.titel,
      bericht: this._orgineelNieuwsbericht.bericht
    });
  }
  verwijderNieuwsbericht(){
    this.nds.verwijderNieuwsbericht(this._nieuwsbericht).subscribe();
  }
  closeMessage(){
    document.getElementById("message").style.display = "none";
  }
}
