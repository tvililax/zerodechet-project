import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZerodechetComponent } from './zerodechet.component';

describe('ZerodechetComponent', () => {
  let component: ZerodechetComponent;
  let fixture: ComponentFixture<ZerodechetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZerodechetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerodechetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
