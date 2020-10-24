import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../ingredient-list/Ingredient';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input()
  quantity : number;

  @Input()
  max : number;

  @Output()
  quantityChange : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached : EventEmitter<String> = new EventEmitter<String>();
  ngOnInit(): void {
  }

  upQuantity() : void {
    if(this.quantity<this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
    }
    else
    this.maxReached.emit("Se alcanzó el máximo");
  }

  downQuantity() : void {
    if(this.quantity>0)
    this.quantity--
    this.quantityChange.emit(this.quantity);
  }

  changeQuantity(event) : void{
    if((event.key>=0 ||event.key<=9) && event.code!="Space")
    console.log("es numero");
    console.log(event);
    this.quantityChange.emit(this.quantity);

  }
  
}
