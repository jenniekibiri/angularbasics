import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  imgUrl='https://picsum.photos/seed/picsum/200/300'

  imgUrlReplace='https://picsum.photos/200/300'
  changeImage(e:Event | any){
    (e)['target']['src']=this.imgUrlReplace;
    console.log((e)['target']['src']);
  }
}
