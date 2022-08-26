import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCheckHomeworkComponent } from './modal-check-homework.component';

describe('ModalCheckHomeworkComponent', () => {
  let component: ModalCheckHomeworkComponent;
  let fixture: ComponentFixture<ModalCheckHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCheckHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCheckHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
