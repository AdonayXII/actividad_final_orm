import { Component, OnInit } from '@angular/core';
import { HabitatsService } from '../services/habitats.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-habitat',
  templateUrl: './add-habitat.page.html',
  styleUrls: ['./add-habitat.page.scss'],
})
export class AddHabitatPage implements OnInit {

  habitatForm!: FormGroup;


  constructor(private habitatService: HabitatsService, private router: Router, public formBuilder: FormBuilder) { 
    this.habitatForm = this.formBuilder.group({});

  }

  ngOnInit() {
    this.habitatForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
      monstruo: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(45)],],
      mineral: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(45)],]
    });
  }

  get errorControl() {
    return this.habitatForm.controls;
  }

  addHabitatForm = () => {
    if (this.habitatForm.valid) {
      let mineral = {
        nombre: this.habitatForm.value.nombre,
        monstruo: this.habitatForm.value.monstruo,
        mineral: this.habitatForm.value.mineral,
      }
      console.log(this.habitatForm.value);
      this.habitatService.add(mineral).subscribe((res) => {
        console.log("funciona");
        this.router.navigateByUrl("/list-habitats");
      });
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

  goHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyHabitats() {
    this.router.navigateByUrl("/list-habitats");
  }


}
