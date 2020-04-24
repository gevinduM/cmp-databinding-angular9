import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();

  myNumber= 0;
  myVar;
  
  constructor() { }

  ngOnInit(): void {
  }

 
startGame(){
  
    this.myVar = setInterval(()=>{

      this.intervalFired.emit(this.myNumber + 1);
      this.myNumber++;

    }, 1000);
  
  }

  stopGame(){
    clearTimeout(this.myVar)
  }

}
