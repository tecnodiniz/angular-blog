import { Component, OnInit } from '@angular/core';
import {createCard} from '../../data/createPost';
import {dataCache}from '../../data/dataFake'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = createCard;
  cardsFake = dataCache;
  id:number = 0
  title:string = '';
  description:string = '';
  photo:string ='';


  constructor() { }

  ngOnInit(): void {


  }


}
