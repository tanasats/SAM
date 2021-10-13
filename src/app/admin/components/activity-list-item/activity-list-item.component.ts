import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.css']
})
export class ActivityListItemComponent implements OnInit {
  @Input() item : any;
  @Output() deleteRequest = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item:any){
    this.deleteRequest.emit(item);
  }

}
