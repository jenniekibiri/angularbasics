import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() postImg:string = ''
  @Output() imgSelected = new EventEmitter<string>()
  //create event emitter that will emit a string on image cclick
  // @Input('img') postImg:string = ''  avoid using alias

}
