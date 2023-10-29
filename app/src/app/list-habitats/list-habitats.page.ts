import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabitatsService } from '../services/habitats.service';

@Component({
  selector: 'app-list-habitats',
  templateUrl: './list-habitats.page.html',
  styleUrls: ['./list-habitats.page.scss'],
})
export class ListHabitatsPage implements OnInit {

  habitats: any = [];


  constructor(private router:Router, private habitatService: HabitatsService) { }

  ngOnInit() {
    this.getAllHabitats();
  }

  getAllHabitats() {
    this.habitatService.getHabitats().subscribe(response => {
      this.habitats = response;
    });
  }

  goHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyHabitatAddPage() {
    this.router.navigateByUrl("/add-habitat")
  }

  gotoMyEditHabitatPage(id: number) {
    this.router.navigateByUrl("/upd-habitat/" + id);
  }

  delete(id: number) {
    this.habitatService.delete(id).subscribe(() => {
      this.getAllHabitats();
    })
  }

}
