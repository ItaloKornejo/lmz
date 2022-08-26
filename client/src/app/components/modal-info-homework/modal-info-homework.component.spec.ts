import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoHomeworkComponent } from './modal-info-homework.component';

describe('ModalInfoHomeworkComponent', () => {
  let component: ModalInfoHomeworkComponent;
  let fixture: ComponentFixture<ModalInfoHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInfoHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
