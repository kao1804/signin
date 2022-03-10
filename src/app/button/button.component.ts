import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: any;
  @Input() word : boolean = false;
  @Input() btn : string = "";

  constructor() {
     
   }
  
  ngOnInit(): void {
  }

}
