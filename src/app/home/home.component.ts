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
      strings: ['Generative AI', 'Software Engineering to build them', 'and MLOps to deploy them'],
      typeSpeed: 80,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };

 const typed = new Typed('.typed-element', options);

  // this.my_texts = ['AI', 'Full Stack'];


  }
}
