import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  


  @Input() public message:string ;

  @Output() b = new EventEmitter()

  constructor() {
    console.log(this.message);  
   }

   send (event){
     console.log("send");
    this.b.emit("Sanjay");
   }

  ngOnInit() {
  }

}
