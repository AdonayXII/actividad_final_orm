import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdHabitatPage } from './upd-habitat.page';

describe('UpdHabitatPage', () => {
  let component: UpdHabitatPage;
  let fixture: ComponentFixture<UpdHabitatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdHabitatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
