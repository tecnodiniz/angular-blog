import { Component, OnInit, Input } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  bigCardTitle:string = '';
  @Input()
  bigCardImage:string = '';
  @Input()
  bigCardDesc:string = '';
  @Input()
  Id:number = 0;

  saved:boolean = false;


  constructor() {

  }

  ngOnInit(): void {


    const result = dataFake.filter(value => value.id == this.Id)[0];

    if(!result){
      dataFake.push({
      id: this.Id,
      photo: this.bigCardImage,
      title: this.bigCardTitle,
      description: this.bigCardDesc
    })



    }

    console.log(dataFake);
    



  }

}
