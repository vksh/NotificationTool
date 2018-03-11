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
      "S",
      "M",
      "T",
      "W",
      "T",
      "F",
      "S",
    ];
   }

  ngOnInit() {
  }

}
