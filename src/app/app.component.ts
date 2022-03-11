import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  name='jenny';
  imgUrl='https://picsum.photos/seed/picsum/200/300'
  getName(){
    return this.name;
   
  }
}

//all logic goes in here