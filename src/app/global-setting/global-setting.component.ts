import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'global-setting',
  templateUrl: './global-setting.component.html',
  styleUrls: ['./global-setting.component.scss']
})
export class GlobalSettingComponent implements OnInit {
  public avatarValues;
  constructor() {
    this.avatarValues = [
      { 'id': '1',
        'value': 'S'
    },
    { 'id': '2',
        'value': 'M'
    },
    { 'id': '3',
        'value': 'T'
    },
    { 'id': '4',
        'value': 'W'
    },
    { 'id': '5',
        'value': 'T'
    },
    { 'id': '6',
        'value': 'F'
    },
    { 'id': '7',
        'value': 'S'
    }
  ];
   }

  ngOnInit() {
  }

}
