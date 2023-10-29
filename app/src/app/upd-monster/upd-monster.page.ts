import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MonstersService } from '../services/monsters.service';

@Component({
  selector: 'app-upd-monster',
  templateUrl: './upd-monster.page.html',
  styleUrls: ['./upd-monster.page.scss'],
})
export class UpdMonsterPage implements OnInit {

  monsterId: number = 0
  oldMonster: any = {}

  monsterForm!: FormGroup
  newMonsterForm!: FormGroup

  constructor(private monstersService: MonstersService, private router: Router, private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder) {
    this.monsterForm = this.formBuilder.group({});
    this.newMonsterForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.monsterId = +this.activatedRoute.snapshot.paramMap.get('id')!
    this.monstersService.getMonsterById(this.monsterId).subscribe((data) => { this.oldMonster = data })

    this.monsterForm = this.oldMonster;

    this.newMonsterForm = this.formBuilder.group({
      nombre: ['',
        [
          Validators.required,
          Validators.maxLength(45)
        ]],
      tipo: [
        '',
        [
          Validators.required,
          Validators.maxLength(45),
        ],
      ],
    });
  }

  updateMonsterForm() {
    console.log(this.monsterId)
    console.log(this.newMonsterForm.value)


    this.monstersService.update(this.monsterId, this.newMonsterForm.value).subscribe(() => {
      console.log("funciona")
      this.router.navigateByUrl("/list-monsters")
    });
  }

  goHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyMonsters() {
    this.router.navigateByUrl("/list-monsters");
  }

}
