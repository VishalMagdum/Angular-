import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDataFlowComponent } from './component-data-flow.component';

describe('ComponentDataFlowComponent', () => {
  let component: ComponentDataFlowComponent;
  let fixture: ComponentFixture<ComponentDataFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDataFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDataFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
