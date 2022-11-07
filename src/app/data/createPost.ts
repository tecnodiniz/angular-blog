
import {dataCache, dataFake}from './dataFake'
export class Card{
  id:number = 0;
  title:string = '';
  description:string = '';
  photo:string = '';

  constructor(id:number,title:string,description:string,photo:string){
    this.id = id;
    this.title = title;
    this.description = description;
    this.photo = photo;

  }

  save(card:Card):void{


    dataCache.splice(0,0,createCard[0])
    createCard.pop();
    createCard.push(card);
    
    console.log(createCard);
  }

}

export const createCard= [{
  'id':1,
  'title':'Yu-Gi-Oh! A Febre do Momento',
  'description':'Yugioh foi lançado a mais de 20 anos e ainda assim faz muito sucesso com seu Card Trade. Todo mundo quer colecionar',
  'photo':'https://macmagazine.com.br/wp-content/uploads/2022/09/05-CROSS-DUEL-jogo.jpeg'
}
];
