import { AfterViewInit, Component, input, OnDestroy, OnInit, output } from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ticket-details',
  imports: [NgClass],
  templateUrl: './ticket-details.html',
  styleUrl: './ticket-details.scss',
})
export class TicketDetails implements OnInit,OnDestroy, AfterViewInit{
  selectedTicket = input<Ticket>(null);
  hideOutput = output();
  constructor() {
    console.log('constructor called');
  }
  ngOnInit() {
    console.log('on init called');
    console.log(this.selectedTicket())
  }
  ngOnDestroy(){
    console.log("on destroy called")
  }
  ngAfterViewInit(){
    console.log("after view init called")
  }
  onClearClick() {
    this.hideOutput.emit();
  }
}
