import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {



  Testmessage  = "My name is sanjay ";

  public Check:Boolean ;

  public testChildEvent ="";



  
  ngOnInit() {
  }

  constructor() {
    this.Check= true;       
   }

}
