import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { reaction, observable } from 'mobx';

@Component({
  selector: 'time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss']
})
export class TimeSelectorComponent implements OnInit {
  public startTime;
  public selectOption;
  @observable selectedValue;
  @observable status;
  constructor() {
    this.selectedValue = 'Select a value';
    this.status = navigator.onLine;
    this.startTime = moment().startOf('day')
    this.selectOption = this.getDateRange(this.startTime);
    reaction(() => this.status,
      (value) => {
        if(value){
        console.log('online');
        } else {
          console.log('Offline')
        }

      })
  }


  getDateRange = (startTime) => {
    let k = [];
    do {
      var b = startTime;
      k.push(b.format('HH:mm A'));
      var c = b.add(30, 'minutes').format('HH:mm A');
      b = c;
    } while (b != "00:00 AM")
    return k;
  };
  setValue = (value) => {
    this.selectedValue = value;
    console.log(this.selectedValue)
  }


  ngOnInit() {
  }

}
