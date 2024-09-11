import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-directives',
  standalone: true,
  imports: [NgIf],
  templateUrl: './angular-directives.component.html',
  styleUrl: './angular-directives.component.css',
})
export class AngularDirectivesComponent {
  isLogedIn: boolean = false;
  userName: string = 'John Doe';
  countLogin: number = 0;
  userRole: string = 'admin';
  handleLogin() {
    this.countLogin++;
    console.log(this.countLogin);
  }
}
