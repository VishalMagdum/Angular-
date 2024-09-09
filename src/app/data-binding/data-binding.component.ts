import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  isDisabled: boolean = false;
  isActive: boolean = false;
  fruitName: string = 'Apple';
  userName: string = 'John Doe';
  userName2: string = '';
  buttonClick() {
    console.log('Button Clicked');
  }
  mouseOver() {
    console.log('Mouse Over');
  }
  onPressed(event: any) {
    console.log('key Pressed', event.keyCode);
    if (event.keyCode == 13) {
      console.log('Enter Key Pressed', event.target.value);
    }
  }
  keyUpFiltering(event: any) {
    console.log('Key Up Filtering', event.target.value);
  }
  TVenter(user: HTMLInputElement) {
    console.log(user.value);
    console.log(user.id);
    console.log(user);
  }
  handleUserName(name: string) {
    this.userName = name;
    console.log(this.userName);
  }
}
