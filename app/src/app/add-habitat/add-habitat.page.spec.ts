import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddHabitatPage } from './add-habitat.page';

describe('AddHabitatPage', () => {
  let component: AddHabitatPage;
  let fixture: ComponentFixture<AddHabitatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddHabitatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
