import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetPricePage } from './set-price.page';

describe('SetPricePage', () => {
  let component: SetPricePage;
  let fixture: ComponentFixture<SetPricePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
