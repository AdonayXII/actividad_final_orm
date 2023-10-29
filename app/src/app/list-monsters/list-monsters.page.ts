import { Component, OnInit } from '@angular/core';
import { MonstersService } from '../services/monsters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-monsters',
  templateUrl: './list-monsters.page.html',
  styleUrls: ['./list-monsters.page.scss'],
})
export class ListMonstersPage implements OnInit {

  monsters: any = [];

  constructor(private monstersService: MonstersService, private router: Router) { }

  ngOnInit() {
    this.getAllMonsters();
  }

  getAllMonsters() {
    this.monstersService.getMonsters().subscribe(response => {
      this.monsters = response;
    });
  }

  goHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyMonsterAddPage() {
    this.router.navigateByUrl("/add-monster")
  }

  gotoMyEditMonsterPage(id: number) {
    this.router.navigateByUrl("/upd-monster/" + id);
  }

  delete(id: number) {
    this.monstersService.delete(id).subscribe(() => {
      this.getAllMonsters();
    })
  }

}
