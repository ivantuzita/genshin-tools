import { FetcherService } from 'src/app/services/fetcher.service';
import { Weapon } from './../../../../interfaces/weapon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit{

  weaponList: Weapon[] = [];

  constructor(private fetcherService: FetcherService){

  }

  ngOnInit(): void {
    this.fetcherService.getUserWeapons(localStorage.getItem('loggedUser')).subscribe((weaponList) =>{
      this.weaponList = weaponList;
    })
  }

}
