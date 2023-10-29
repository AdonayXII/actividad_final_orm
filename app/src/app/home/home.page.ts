import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  goToMonstersTable() {
    this.router.navigateByUrl("/list-monsters");
  }

  goToMineralsTable() {
    this.router.navigateByUrl("/list-minerales");
  } 
  
  goToHabitatsTable() {
    this.router.navigateByUrl("/list-habitats");
  }

}
