import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitatsService } from '../services/habitats.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upd-habitat',
  templateUrl: './upd-habitat.page.html',
  styleUrls: ['./upd-habitat.page.scss'],
})
export class UpdHabitatPage implements OnInit {

  habitatId: number = 0
  oldHabitat: any = {}

  habitatForm!: FormGroup
  newHabitatForm!: FormGroup

  constructor(private router:Router, private habitatService: HabitatsService, public formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { 
    this.habitatForm = this.formBuilder.group({});
    this.newHabitatForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.habitatId = +this.activatedRoute.snapshot.paramMap.get('id')!
    this.habitatService.getHabitatById(this.habitatId).subscribe((data) => { this.oldHabitat = data })

    this.habitatForm = this.oldHabitat;

    this.newHabitatForm = this.formBuilder.group({
      nombre: [],
      monstruo_id: [],
      mineral_id: []
    });
  }

  updateHabitatForm() {
    console.log(this.habitatId)
    console.log(this.newHabitatForm.value);

    this.habitatService.update(this.habitatId, this.newHabitatForm.value).subscribe(() => {
      console.log("funciona")
      this.router.navigateByUrl("/list-habitats")
    });
  }

  goHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyHabitats() {
    this.router.navigateByUrl("/list-habitats");
  }


}
