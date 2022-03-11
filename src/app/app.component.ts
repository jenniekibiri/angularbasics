import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  name='jenny';
  date = new Date();
  money = 205.89
  imgUrl='https://picsum.photos/seed/picsum/200/300'
  getName(){
    return this.name;
   
  }
  changeImg(e:KeyboardEvent){
  console.log((e.target as HTMLInputElement).value);
  this.imgUrl=(e.target as HTMLInputElement).value;
  }
  
//get data from the image click event
 changeImageOnClick(event:string) {
 console.log(event);
  
}
blueClass=true;
}

//all logic goes in here