import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWinnerComponent } from './modal-winner.component';

describe('ModalWinnerComponent', () => {
  let component: ModalWinnerComponent;
  let fixture: ComponentFixture<ModalWinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
