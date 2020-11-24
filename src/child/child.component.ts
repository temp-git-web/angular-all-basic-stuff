import { Component, EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() dataFromChild: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  sendData(){
      let data = 'kerak'
    this.dataFromChild.emit(data)
  }
}