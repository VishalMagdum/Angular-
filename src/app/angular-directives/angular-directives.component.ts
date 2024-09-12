import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'angular-directives',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, NgFor],
  templateUrl: './angular-directives.component.html',
  styleUrl: './angular-directives.component.css',
})
export class AngularDirectivesComponent {
  isLogedIn: boolean = false;
  userName: string = 'John Doe';
  countLogin: number = 0;
  userRole: string = 'admin';
  usersObj: Array<any> = [
    { id: 1, name: 'John Doe', role: 'admin' },
    { id: 2, name: 'Jane Doe', role: 'user' },
    { id: 3, name: 'John Smith', role: 'admin' },
    { id: 4, name: 'Jane Smith', role: 'user' },
  ];
  users: string[] = ['John Doe', 'Jane Doe', 'John Smith', 'Jane Smith'];
  handleLogin() {
    this.countLogin++;
    console.log(this.countLogin);
  }
  addUser() {
    this.usersObj.push({
      id: this.usersObj.length + 1,
      name: 'Raj Patil',
      role: 'admin',
    });
  }
  deleteUser(index: number) {
    // this.usersObj = this.usersObj.filter((user) => user.id !== userId);

    // let index = this.usersObj.indexOf(user);
    // this.usersObj.splice(index, 1);

    this.usersObj.splice(index, 1);
  }
  constructor() {
    console.log(this.usersObj.length);
  }
}
