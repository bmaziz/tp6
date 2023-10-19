import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedproductComponent } from './selectedproduct.component';

describe('SelectedproductComponent', () => {
  let component: SelectedproductComponent;
  let fixture: ComponentFixture<SelectedproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedproductComponent]
    });
    fixture = TestBed.createComponent(SelectedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
