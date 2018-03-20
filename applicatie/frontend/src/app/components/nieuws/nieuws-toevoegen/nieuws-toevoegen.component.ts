import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Nieuwsbericht } from '../../../classes/nieuwsbericht';
import { NieuwsDataService } from '../../../services/nieuws-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-nieuws-toevoegen',
  templateUrl: './nieuws-toevoegen.component.html',
  styleUrls: ['./nieuws-toevoegen.component.css'],
  providers: []
})
export class NieuwsToevoegenComponent implements OnInit {

  private nieuwsberichtForm: FormGroup;

  @Output() public nieuwsbericht = new EventEmitter<Nieuwsbericht>();

  constructor(private _nieuwsDataService: NieuwsDataService, private fb: FormBuilder){
    
  }
  ngOnInit(){
    this.nieuwsberichtForm = this.fb.group({
      titel: ['', [Validators.required]],
      bericht: ['', [Validators.required]]
    })
  }
  onSubmit(){
    const nbericht = new Nieuwsbericht(this.nieuwsberichtForm.value.titel, this.nieuwsberichtForm.value.bericht, 'Nick');
    this.nieuwsbericht.emit(nbericht);
  }
}
