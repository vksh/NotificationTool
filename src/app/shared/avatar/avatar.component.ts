import { Component, OnInit, Input } from '@angular/core';
import { observable } from 'mobx';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @observable activeClass;
  @observable selectedValues;
  constructor() {
    this.activeClass = new Set();
    this.selectedValues = [];
  }
  @Input()
  avatarValues: any;
  ngOnInit() {
  }
  setSelected = (selectedValue) => {
      if(this.activeClass.has(selectedValue.id)) {
        this.selectedValues.pop(selectedValue);
        this.activeClass.delete(selectedValue.id);
      } else{
        this.activeClass.add(selectedValue.id);
        this.selectedValues.push(selectedValue);
      }
    }

}
