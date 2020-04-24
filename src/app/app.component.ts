import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  oddArr: number[] =[];
  evenArr: number[] =[];

  onIntervalFired(numberFired:number){
  
    if(numberFired % 2 == 0){
      this.evenArr.push(numberFired);
    }
    else{
      this.oddArr.push(numberFired);
    }
  }



}
