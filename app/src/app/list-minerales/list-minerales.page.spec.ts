import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMineralesPage } from './list-minerales.page';

describe('ListMineralesPage', () => {
  let component: ListMineralesPage;
  let fixture: ComponentFixture<ListMineralesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListMineralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
