import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  fruitName = ''

  disabled = true

  condition = true

  color = 'yellow'

  stringCondition = 'no'

  switchColor = 'green'

  array = ['apple', 'mango', 'banana', 'pineapple']

  arrayForTable = [
    {
      name:'Jack',
      age:26,
      email:'jack@xyz.com'
    },
    {
      name:'Rose',
      age:24,
      email:'rose@xyz.com'
    },
    {
      name:'Pooh',
      age:20,
      email:'pooh@xyz.com'
    }
  ]

  colorbind = 'red'

  err = false

  dataForChild = 'bot saara data child k liye'

   arrayForChild = [
    {
      name:'Jack',
      age:26,
      email:'jack@xyz.com'
    },
    {
      name:'Rose',
      age:24,
      email:'rose@xyz.com'
    },
    {
      name:'Pooh',
      age:20,
      email:'pooh@xyz.com'
    }
  ]

  dataFromParent = ''
//$event.target.value html poora likha hua kaam ni krta. isliye $event.target bs html me baaakijo value s a parameter a rhi usko parameter.value krke kam krwa skte hi
  getFruit(fruit){
    console.log(fruit.value)
    this.fruitName = fruit.value
  }
  enable(){
    this.disabled = !this.disabled
  }

  styleBind(){
    if(!this.err){
      this.colorbind = 'yellow'
    }

  }

    // recieving data from child to parent
    dataFromChild(data){
      console.log(data)
      this.dataFromParent = data
    }
}
