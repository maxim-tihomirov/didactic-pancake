import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, TuiInputModule, TuiTextfieldControllerModule, TuiButtonModule, TuiSvgModule],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {}
