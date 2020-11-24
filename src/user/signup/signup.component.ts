import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() dataFromParent
  constructor() { }

  ngOnInit() {
  console.log(this.dataFromParent)
  }
}