import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "@kit";

@Component({
  selector: 'app-demo-page',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
})
export class DemoPageComponent {}
