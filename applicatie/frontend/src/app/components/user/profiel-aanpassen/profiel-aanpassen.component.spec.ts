import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfielAanpassenComponent } from './profiel-aanpassen.component';

describe('ProfielAanpassenComponent', () => {
  let component: ProfielAanpassenComponent;
  let fixture: ComponentFixture<ProfielAanpassenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfielAanpassenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfielAanpassenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
