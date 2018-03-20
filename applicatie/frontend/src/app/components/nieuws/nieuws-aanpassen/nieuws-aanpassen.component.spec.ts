import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwsAanpassenComponent } from './nieuws-aanpassen.component';

describe('NieuwsAanpassenComponent', () => {
  let component: NieuwsAanpassenComponent;
  let fixture: ComponentFixture<NieuwsAanpassenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwsAanpassenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwsAanpassenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
