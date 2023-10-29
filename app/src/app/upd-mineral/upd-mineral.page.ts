import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MineralsService } from '../services/minerals.service';

@Component({
  selector: 'app-upd-mineral',
  templateUrl: './upd-mineral.page.html',
  styleUrls: ['./upd-mineral.page.scss'],
})
export class UpdMineralPage implements OnInit {

  mineralId: number = 0
  oldMineral: any = {}

  mineralForm!: FormGroup
  newMineralForm!: FormGroup

  constructor(private mineralService: MineralsService, private router: Router, private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder) {
    this.mineralForm = this.formBuilder.group({});
    this.newMineralForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.mineralId = +this.activatedRoute.snapshot.paramMap.get('id')!
    this.mineralService.getMineralById(this.mineralId).subscribe((data) => { this.oldMineral = data })

    this.mineralForm = this.oldMineral;

    this.newMineralForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(45)]],
      material: ['', [Validators.required, Validators.maxLength(45)],]
    });
  }

  updateMineralForm() {
    console.log(this.mineralId)
    console.log(this.newMineralForm.value.nombre)
    console.log(this.newMineralForm.value.material)


    this.mineralService.update(this.mineralId, this.newMineralForm.value).subscribe(() => {
      console.log("funciona")
      this.router.navigateByUrl("/list-minerales")
    });
  }

  goHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyMinerales() {
    this.router.navigateByUrl("/list-minerales");
  }

}
