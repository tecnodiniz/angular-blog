import { Component, OnInit, Input } from '@angular/core';

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
  bigCardDesc:string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
