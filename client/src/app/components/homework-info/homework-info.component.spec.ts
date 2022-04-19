import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkInfoComponent } from './homework-info.component';

describe('HomeworkInfoComponent', () => {
  let component: HomeworkInfoComponent;
  let fixture: ComponentFixture<HomeworkInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
