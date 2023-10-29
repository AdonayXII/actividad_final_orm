import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MineralsService } from '../services/minerals.service';

@Component({
  selector: 'app-list-minerales',
  templateUrl: './list-minerales.page.html',
  styleUrls: ['./list-minerales.page.scss'],
})
export class ListMineralesPage implements OnInit {

  minerales: any = [];

  constructor(private mineralService: MineralsService, private router: Router) { }

  ngOnInit() {
    this.getAllMinerales();
  }
  getAllMinerales() {
    this.mineralService.getMineral().subscribe(response => {
      this.minerales = response;
    });
  }

  goHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyMineralAddPage() {
    this.router.navigateByUrl("/add-mineral")
  }

  gotoMyEditMineralPage(id: number) {
    this.router.navigateByUrl("/upd-mineral/" + id);
  }

  delete(id: number) {
    this.mineralService.delete(id).subscribe(() => {
      this.getAllMinerales();
    })
  }



}
