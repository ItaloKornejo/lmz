import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSessionEditComponent } from './modal-session-edit.component';

describe('ModalSessionEditComponent', () => {
  let component: ModalSessionEditComponent;
  let fixture: ComponentFixture<ModalSessionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSessionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSessionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
