import { Component } from '@angular/core';
import {cards} from "../assets/cards"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  currentPage = 0;
  cards = cards;

  checkWindowIndex(index: number) {
      return Math.abs(this.currentPage - index) < 5;
  }

}
