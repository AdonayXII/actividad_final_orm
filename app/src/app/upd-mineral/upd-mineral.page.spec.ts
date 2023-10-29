import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdMineralPage } from './upd-mineral.page';

describe('UpdMineralPage', () => {
  let component: UpdMineralPage;
  let fixture: ComponentFixture<UpdMineralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdMineralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
