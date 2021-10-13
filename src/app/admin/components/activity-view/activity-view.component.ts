import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-activity-view',
  templateUrl: './activity-view.component.html',
  styleUrls: ['./activity-view.component.css']
})
export class ActivityViewComponent implements OnInit {
  item:any={};
  constructor(private location:Location) { }

  ngOnInit(): void {
    console.log(this.location.getState());
    this.item=this.location.getState();
  }

}
