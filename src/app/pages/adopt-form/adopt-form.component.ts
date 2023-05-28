import { Component } from '@angular/core';

@Component({
  selector: 'app-adopt-form',
  templateUrl: './adopt-form.component.html',
  styleUrls: ['./adopt-form.component.css']
})
export class AdoptFormComponent {
  checkbox: boolean = false;
  buttonColor: string = 'disabled-button';

  onCheckboxChange(){
    this.buttonColor = this.checkbox ? 'enabled-button' : 'disabled-button';
  }
}
