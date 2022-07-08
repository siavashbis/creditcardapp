import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control !: FormControl;
  @Input() label !: string;
  constructor() {}

  ngOnInit(): void {}
}
