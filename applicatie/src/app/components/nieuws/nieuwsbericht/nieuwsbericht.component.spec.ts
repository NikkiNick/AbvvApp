import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwsberichtComponent } from './nieuwsbericht.component';

describe('NieuwsberichtComponent', () => {
  let component: NieuwsberichtComponent;
  let fixture: ComponentFixture<NieuwsberichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwsberichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwsberichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
