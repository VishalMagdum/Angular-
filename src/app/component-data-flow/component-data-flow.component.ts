import { Component, Input } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
// import ComponentStructureImg from '../../assets/ComponentStructureImg.png';
@Component({
  selector: 'component-data-flow',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './component-data-flow.component.html',
  styleUrl: './component-data-flow.component.css',
})
export class ComponentDataFlowComponent {
  appPostTitle: string = 'Post 1';
  @Input() isUserLoggedIn: boolean = false;
}
