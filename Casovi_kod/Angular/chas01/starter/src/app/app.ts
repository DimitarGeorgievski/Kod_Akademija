import { Component } from '@angular/core';
import { Person } from './models/person.model';
import { Parent } from "../components/parent/parent";

// const test = "random string"
enum Course {
  REACT = 'REACT',
  ANGULAR = 'ANGULAR',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Parent],
})
export class App {
  title = 'Starter';
  year = 2025;
  person: Person = {
    firstName: 'John',
    lastName: 'Johnsky',
    age: 19,
    country: 'Macedonia',
  };
  backgroundColor = 'lightblue';
  imageSrc = 'slika';
  isBtnDisabled = true;
  inputValue = '';
  isHeadingShown = true;
  fruits = ['apples', 'oranges', 'pears', 'Cherries'];
  course = Course.ANGULAR;
  printFullName(firstName: string, lastName: string) {
    console.log(`The Person's full name is ${firstName} ${lastName}`);
  }
  onChangeCourse() {
    this.course =
      this.course === Course.ANGULAR ? Course.REACT : Course.ANGULAR;
    console.log(this.course);
  }
  onInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.inputValue = target.value;
  }
}
