import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdMonsterPage } from './upd-monster.page';

describe('UpdMonsterPage', () => {
  let component: UpdMonsterPage;
  let fixture: ComponentFixture<UpdMonsterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdMonsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
