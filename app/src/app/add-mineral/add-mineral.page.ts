import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MineralsService } from '../services/minerals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mineral',
  templateUrl: './add-mineral.page.html',
  styleUrls: ['./add-mineral.page.scss'],
})
export class AddMineralPage implements OnInit {

  mineralForm!: FormGroup;

  constructor(public formBuilder: FormBuilder, private mineralService: MineralsService, private router: Router) {
    this.mineralForm = this.formBuilder.group({});

  }

  ngOnInit() {
    this.mineralForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
      material: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)],]
    });
  }

  get errorControl() {
    return this.mineralForm.controls;
  }

  addMineralForm = () => {
    if (this.mineralForm.valid) {
      let mineral = {
        nombre: this.mineralForm.value.nombre,
        material: this.mineralForm.value.material,
      }
      console.log(this.mineralForm.value);
      this.mineralService.add(mineral).subscribe((res) => {
        console.log("funciona");
        this.router.navigateByUrl("/list-minerales");
      });
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

  goHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyMinerales() {
    this.router.navigateByUrl("/list-minerales");
  }

}
