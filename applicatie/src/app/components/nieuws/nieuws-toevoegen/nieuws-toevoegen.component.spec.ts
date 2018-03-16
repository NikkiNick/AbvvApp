import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwsToevoegenComponent } from './nieuws-toevoegen.component';

describe('NieuwsToevoegenComponent', () => {
  let component: NieuwsToevoegenComponent;
  let fixture: ComponentFixture<NieuwsToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwsToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwsToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
