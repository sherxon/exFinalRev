import { Component, OnInit } from '@angular/core';
import {DBService} from '../DB';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: number;
  student;
  constructor(private db: DBService, private route: ActivatedRoute) {
    this.db = db;
    route.params.subscribe(s => {
      this.id = s['id'] * 1; this.setStudent();
    });
  }

  private setStudent() {
    for (const key in this.db.getData()) {
      if ( this.db.getData()[key].id === this.id) {
        this.student = this.db.getData()[key];
      }
    }
  }
  ngOnInit() {
  }

}
