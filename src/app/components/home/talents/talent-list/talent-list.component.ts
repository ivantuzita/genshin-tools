import { FetcherService } from 'src/app/services/fetcher.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-talent-list',
  templateUrl: './talent-list.component.html',
  styleUrls: ['./talent-list.component.css']
})
export class TalentListComponent implements OnInit{

  characterList: Character[] = [];

  constructor(private fetcherService: FetcherService){

  }

  ngOnInit(): void {
    console.log(localStorage.getItem('loggedUser'))
    this.fetcherService.getUserCharacters(localStorage.getItem('loggedUser')).subscribe((characterList) =>{
      this.characterList = characterList;
    })
  }

}
