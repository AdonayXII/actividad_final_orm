import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMonstersPage } from './list-monsters.page';

describe('ListMonstersPage', () => {
  let component: ListMonstersPage;
  let fixture: ComponentFixture<ListMonstersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListMonstersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
