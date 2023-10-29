import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMineralPage } from './add-mineral.page';

describe('AddMineralPage', () => {
  let component: AddMineralPage;
  let fixture: ComponentFixture<AddMineralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddMineralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
