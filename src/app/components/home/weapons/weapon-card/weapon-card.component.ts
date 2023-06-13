import { Weapon } from './../../../../interfaces/weapon';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weapon-card',
  templateUrl: './weapon-card.component.html',
  styleUrls: ['./weapon-card.component.css']
})
export class WeaponCardComponent {

  @Input() weapon: Weapon = {
    id: 0,
    name: '',
    pictureURL: ''
  }

}
