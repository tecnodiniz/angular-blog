import { Component, OnInit,Input } from '@angular/core';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  cardImage:string = '';
  @Input()
  cardTitle:string = '';
  @Input()
  description:string = '';
  @Input()
  Id:number = 0;

  constructor() { }

  ngOnInit(): void {
    const result = dataFake.filter(value => value.id == this.Id)[0];

    if(!result){
      dataFake.push({
        id: this.Id,
        photo: this.cardImage,
        title: this.cardTitle,
        description: this.description
      })



    }


  }

}
