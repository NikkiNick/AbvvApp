import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverzichtGebruikersComponent } from './overzicht-gebruikers.component';

describe('OverzichtGebruikersComponent', () => {
  let component: OverzichtGebruikersComponent;
  let fixture: ComponentFixture<OverzichtGebruikersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverzichtGebruikersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverzichtGebruikersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
