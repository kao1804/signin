import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.css'],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() text: any;
  @Input() disable :boolean = false;
  @Input() btn :string = "submit";
  @Output() actionButton: EventEmitter<any> = new EventEmitter;


  constructor() {
     
   }
   addACtion(){
     this.actionButton.emit()
   };

  ngOnInit(): void {
  }

}
