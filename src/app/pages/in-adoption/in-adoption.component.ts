import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-in-adoption',
  templateUrl: './in-adoption.component.html',
  styleUrls: ['./in-adoption.component.css']
})
export class InAdoptionComponent {
  cardsData: any[] = ['position', 'image', 'name'];
}
