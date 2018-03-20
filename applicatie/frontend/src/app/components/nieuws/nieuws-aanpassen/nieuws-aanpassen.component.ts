import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  private nieuwsbericht: Nieuwsbericht;
  private nieuwsberichtForm: FormGroup;
  
  constructor(private nds: NieuwsDataService, private fb: FormBuilder, private route: ActivatedRoute) { 

    this.route.paramMap.subscribe(pa =>
      this.nds.getNieuwsbericht(pa.get("nieuwsberichtID")).subscribe(item => this.nieuwsbericht=item));
    console.log(this.nieuwsbericht);
    this.nieuwsberichtForm = this.fb.group({
      titel: [this.nieuwsbericht.titel, [Validators.required]],
      bericht: [this.nieuwsbericht.bericht, [Validators.required]]});

  }

  ngOnInit() {

  }

}
