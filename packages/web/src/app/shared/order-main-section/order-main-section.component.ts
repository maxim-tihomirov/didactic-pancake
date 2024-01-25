import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from '../order-form/order-form.component';

@Component({
  selector: 'app-order-main-section',
  standalone: true,
  imports: [CommonModule, OrderFormComponent],
  templateUrl: './order-main-section.component.html',
  styleUrls: ['./order-main-section.component.scss'],
})
export class OrderMainSectionComponent {}
