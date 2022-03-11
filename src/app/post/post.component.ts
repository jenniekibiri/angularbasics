import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input('img') postImg:string = ''

  imgUrlReplace = 'https://picsum.photos/200/300';
  changeImage(e: Event | any) {
    e['target']['src'] = this.imgUrlReplace;
  }
}
