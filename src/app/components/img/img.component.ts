import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  img: string = '';
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>' , this.img)
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault: string = './assets/images/default.png';
  // counter = 0;
  // counterFn: number | undefined;
  constructor(){
    // before render
    // NO async -- Once time
    // console.log('Constructor', 'imgValue =>', this.img);
  }
  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    // console.log('loag hijo');
    this.loaded.emit(this.img);
  }
}
