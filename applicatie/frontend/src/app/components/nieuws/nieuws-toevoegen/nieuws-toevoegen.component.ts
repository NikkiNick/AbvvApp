import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Nieuwsbericht } from '../../../classes/nieuwsbericht';
import { NieuwsDataService } from '../service/nieuws-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../auth/authentication.service';


@Component({
  selector: 'app-nieuws-toevoegen',
  templateUrl: './nieuws-toevoegen.component.html',
  styleUrls: ['./nieuws-toevoegen.component.css'],
  providers: []
})
export class NieuwsToevoegenComponent implements OnInit {

  private nieuwsberichtForm: FormGroup;
  private _toevoegenComplete: Boolean = false;

  constructor(private _nieuwsDataService: NieuwsDataService, private fb: FormBuilder, private authService: AuthenticationService){
  }
  ngOnInit(){
    this.nieuwsberichtForm = this.fb.group({
      titel: ['', [Validators.required]],
      bericht: ['', [Validators.required]]
    });
  }
  onSubmit(){
    const nieuwsbericht = new Nieuwsbericht(this.nieuwsberichtForm.value.titel, this.nieuwsberichtForm.value.bericht, this.authService.user$.getValue());
    this._nieuwsDataService.voegNieuwsberichtToe(nieuwsbericht)
      .subscribe(
        sub => this._toevoegenComplete = true);
  }
  get toevoegenComplete(){
    return this._toevoegenComplete;
  }
}
