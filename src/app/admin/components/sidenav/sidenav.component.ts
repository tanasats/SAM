import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  // @Input() isExpanded: boolean | undefined;
  @Input() SidenavLinks:any;
  // @Output() toggleMenu = new EventEmitter();
  public isShowSideNavText=false;

  constructor() { }
  ngOnInit(): void {
  }

}

