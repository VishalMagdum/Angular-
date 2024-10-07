import {
  Component,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { NgComponentOutlet } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-angular-lifecycle',
  standalone: true,
  imports: [PostListComponent, NgComponentOutlet, ProfileComponent],
  templateUrl: './angular-lifecycle.component.html',
  styleUrl: './angular-lifecycle.component.css',
})
export class AngularLifecycleComponent {
  // constructor(private viewContainer: ViewContainerRef) {}
  constructor(private render: Renderer2) {}
  @ViewChild('viewContainer', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  loadComponent() {
    // return PostListComponent;
    // this.viewContainer.createComponent(PostListComponent);
    const text = this.render.createText(
      'to show text/component programmatically we are using ngComponentOutlet'
    );
    this.viewContainer.element.nativeElement.appendChild(text);
  }
  removeComponent() {
    // this.viewContainer.clear();
    this.viewContainer.element.nativeElement.innerHTML = '';
  }
  userName: string = 'Vishal';
  changeUserName() {
    this.userName = 'Vishal Magdum';
  }
}
