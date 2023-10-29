import { Component, OnInit } from '@angular/core';
import { MonstersService } from '../services/monsters.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-monster',
  templateUrl: './add-monster.page.html',
  styleUrls: ['./add-monster.page.scss'],
})
export class AddMonsterPage implements OnInit {
  monsterForm!: FormGroup;

  constructor(private monsterService: MonstersService, private router: Router, public formBuilder: FormBuilder) {
    this.monsterForm = this.formBuilder.group({});

  }

  ngOnInit() {
    this.monsterForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
      tipo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)],]
    });
  }

  get errorControl() {
    return this.monsterForm.controls;
  }

  addMonsterForm = () => {
    if (this.monsterForm.valid) {
      let monster = {
        nombre: this.monsterForm.value.nombre,
        tipo: this.monsterForm.value.tipo,
      }
      console.log(this.monsterForm.value);
      this.monsterService.add(monster).subscribe((res) => {
        console.log("funciona");
        this.router.navigateByUrl("/list-monsters");
      });
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

  goHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyMonsters() {
    this.router.navigateByUrl("/list-monsters");
  }

}
