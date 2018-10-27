import { Component, ViewChild, OnInit } from '@angular/core';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
audio;
constructor() {
  this.audio = new Audio();
  this.audio.src = './star1.mp3';
  this.audio.load();
  this.audio.play();
}
}
