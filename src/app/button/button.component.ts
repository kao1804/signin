import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: any;
  @Input() disable :boolean = false;
  @Input() btn :string = "";
  type: string=""
  constructor() {
     
   }
   onClick(){
    this.type = "submit"
   };


  ngOnInit(): void {
  }

}
