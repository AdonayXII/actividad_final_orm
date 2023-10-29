import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListHabitatsPage } from './list-habitats.page';

describe('ListHabitatsPage', () => {
  let component: ListHabitatsPage;
  let fixture: ComponentFixture<ListHabitatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListHabitatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
