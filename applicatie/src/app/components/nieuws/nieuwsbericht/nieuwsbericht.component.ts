import { Component, OnInit, Input } from '@angular/core';
import { Nieuwsbericht } from '../../../classes/nieuwsbericht';

@Component({
  selector: 'app-nieuwsbericht',
  templateUrl: './nieuwsbericht.component.html',
  styleUrls: ['./nieuwsbericht.component.css']
})
export class NieuwsberichtComponent implements OnInit {

  @Input() public nieuwsbericht: Nieuwsbericht;
  
  constructor() {
    
   }

  ngOnInit() {
  }

}
