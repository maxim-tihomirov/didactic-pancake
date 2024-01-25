import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe-pipe';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HttpClientModule, SafePipe],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {


  constructor() {
  }
  ngOnInit(): void {

  }

}
