import { Component, OnInit } from '@angular/core';
import {DBService} from "../DB";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = [];
  constructor(private db: DBService) {
    this.students = db.getData();
  }

  ngOnInit() {
  }

}
