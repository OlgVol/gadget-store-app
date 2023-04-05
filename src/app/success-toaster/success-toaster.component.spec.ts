import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessToasterComponent } from './success-toaster.component';

describe('SuccessToasterComponent', () => {
  let component: SuccessToasterComponent;
  let fixture: ComponentFixture<SuccessToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessToasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
