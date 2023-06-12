import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-talent-card',
  templateUrl: './talent-card.component.html',
  styleUrls: ['./talent-card.component.css']
})
export class TalentCardComponent {

  @Input() character: Character = {
    id: 0,
    name: '',
    pictureURL: ''
  }

}
