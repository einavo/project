import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    pic1:string;
    pic2:string;
    pic3:string;
    pic4:string;
    pic5:string;
    pic6:string;
    pic7:string;
    pic8:string;
    pic9:string;
  constructor() {
      this.pic1='assets/img/pic1.png'
      this.pic2='assets/img/pic2.png'
      this.pic3='assets/img/pic3.png'
      this.pic4='assets/img/pic4.png'
      this.pic5='assets/img/pic5.png'
      this.pic6='assets/img/pic6.png'
      this.pic7='assets/img/pic7.png'
      this.pic8='assets/img/pic8.png'
      this.pic9='assets/img/pic9.png'
   }


  ngOnInit() {
  }

}
