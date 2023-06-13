import { FetcherService } from './../../services/fetcher.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  characterList: Character[] = [];
  weekDay = new Date().toLocaleString('en-US', {  weekday: 'long' })
  username = localStorage.getItem('username');

  constructor(private fetcherService: FetcherService){
  }

  ngOnInit(): void {

  }

}
