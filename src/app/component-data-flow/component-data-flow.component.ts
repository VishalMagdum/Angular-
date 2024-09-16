import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
// import ComponentStructureImg from '../../assets/ComponentStructureImg.png';
@Component({
  selector: 'component-data-flow',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './component-data-flow.component.html',
  styleUrl: './component-data-flow.component.css',
})
export class ComponentDataFlowComponent implements AfterViewInit {
  appPostTitle: string = 'Post 1';
  childMessage: string = '';
  childToParentMsg: string = '';
  @Input() isUserLoggedIn: boolean = false;

  // -----child to paraent data flow using @ViewChild-----
  //using ViewChild to get the child component instance
  @ViewChild(PostListComponent) childComp: any;
  constructor() {
    console.log(this.childComp, 'childComp');
  }
  ngAfterViewInit(): void {
    // Accessing the child component instance
    console.log(this.childComp, 'childComp inside ngAfterViewInit');
    this.childMessage = this.childComp.childMessage;
  }
  //----------------------------------------------------

  // -----parent to child data flow using @Output-emitter event-----
  reciveMsg(message: string) {
    console.log('reciveMsg :-', message);
    this.childToParentMsg = message;
  }
  // ----------------------------------------------------
}
