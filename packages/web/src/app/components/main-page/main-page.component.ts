import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderMainSectionComponent } from '../../shared/order-main-section/order-main-section.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HttpClientModule, OrderMainSectionComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {


  constructor() {
  }
  ngOnInit(): void {

  }

}
