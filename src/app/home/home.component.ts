import {    OnInit,Component,Output } from '@angular/core';
import * as AOS from 'aos';
import Typed from 'typed.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  my_texts= ['AI', 'Full Stack'];

  ngOnInit() {
    AOS.init();
    const options = {
      strings: ['Machine Learning','Deep Learning', 'Web Development'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };

 const typed = new Typed('.typed-element', options);

  // this.my_texts = ['AI', 'Full Stack'];

  const HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];
  }
}
