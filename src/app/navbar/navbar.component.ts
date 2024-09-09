import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `<h1>Navbar compo</h1>
    <p>i am paragraph</p>
    <button>Click me</button>`,
  //   styles: `h1{color:red;
  //     background-color:yellow;}
  //     p{color:green;}`,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class AppNavbar {}
