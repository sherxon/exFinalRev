import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {DBService} from "../DB";

@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.css']
})
export class ExComponent implements OnInit {
  posts;
  constructor(public db: DBService) { }

  ngOnInit() {
  this.db.getPosts().subscribe(s => {
    console.log(s);
    this.posts = s.json(); } );
  }
  search(value: string ) {
    console.log(value);
    for ( const key in this.posts) {
      if( this.posts[key].title.indexOf(value) >= 0  || value.length === 0) {
        this.posts[key].show = true;
      }else{
        this.posts[key].show = false;
      }
    }
  }

}
