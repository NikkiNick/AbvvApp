import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwsComponent } from './nieuws.component';

describe('NieuwsComponent', () => {
  let component: NieuwsComponent;
  let fixture: ComponentFixture<NieuwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
