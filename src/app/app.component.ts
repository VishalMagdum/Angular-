import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ComponentDataFlowComponent } from './component-data-flow/component-data-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppNavbar,
    HeaderComponent,
    DataBindingComponent,
    AngularDirectivesComponent,
    NgIf,
    ComponentDataFlowComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'this loaded dynamically from app component';
  imagUrl: string =
    'https://res.cloudinary.com/dbuztntar/image/upload/v1725862902/Screenshot_2024-07-10_111628_kprtfg.png';
  isUserLoggedIn: boolean = true;
}
