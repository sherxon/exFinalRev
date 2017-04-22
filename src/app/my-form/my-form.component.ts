import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  @ViewChild('form') form;
  answer = '';

  constructor() {
  }

  suggestUserName() {
    this.form.setValue({
      userData: {
        username: 'SUperMan',
        email: '',
      },
      secret: 'pet',
    });
    // this.form.form.patchValue();
  }

  ngOnInit() {
  }

  onSubmit(form1: NgForm) {
    console.log(form1);
    console.log(this.form);
  }
}
