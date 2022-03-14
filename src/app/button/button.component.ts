import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.css'],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() title: any;
  @Input() disable: boolean = false;
  @Input() type: string = 'submit';
  @Output() actionClick: EventEmitter<any> = new EventEmitter();
  @Input() class: string = '';

  constructor() {}
  onClick() {
    this.actionClick.emit();
  }

  ngOnInit(): void {}
}
