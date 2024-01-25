import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderMainSectionComponent } from './order-main-section.component';

describe('OrderMainSectionComponent', () => {
  let component: OrderMainSectionComponent;
  let fixture: ComponentFixture<OrderMainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderMainSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
