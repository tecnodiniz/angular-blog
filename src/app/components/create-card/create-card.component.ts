import { Component, OnInit, Input } from '@angular/core';
import { Card} from '../../data/createPost';
import {dataFake} from '../../data/dataFake';


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  @Input()
  title:string = '';
  @Input()
  imgUrl:string = '';
  @Input()
  description:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  salvar(title:string,description:string, imgUrl:string){
    let id:number = dataFake.length + 1;
    const card = new Card(id,title,description,imgUrl);
    card.save(card);

  }

}
