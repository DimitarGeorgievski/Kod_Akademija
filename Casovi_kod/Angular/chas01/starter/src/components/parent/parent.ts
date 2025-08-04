import { Component } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.scss'
})
export class Parent {
  parentTitle = "I Come From the parent";
  titleFromChild = '';
  onTitleRecieve(newTitle: string) {
    console.log("event recieved from the child");
    this.titleFromChild = newTitle;
  }
}
