import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwsberichtDetailComponent } from './nieuwsbericht-detail.component';

describe('NieuwsberichtDetailComponent', () => {
  let component: NieuwsberichtDetailComponent;
  let fixture: ComponentFixture<NieuwsberichtDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwsberichtDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwsberichtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
