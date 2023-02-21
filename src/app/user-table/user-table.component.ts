import { Component, Input, OnInit } from '@angular/core';

import { user } from '../app-interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() users:user[] = [];
}
