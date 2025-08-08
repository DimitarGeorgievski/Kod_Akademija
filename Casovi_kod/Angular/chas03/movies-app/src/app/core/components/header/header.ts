import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  // old school way of injecting dependencies in Anuglar
  // constructor(private loggerService: LoggerService){}
  // New way and preffered on injecting dependencies in Angular
  private loggerService = inject(LoggerService)

  ngOnInit() {
    this.loggerService.logDetails("header");
  }
}
