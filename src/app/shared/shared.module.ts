import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TimeSelectorComponent } from './time-selector/time-selector.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TimeSelectorComponent, AvatarComponent],
  exports: [TimeSelectorComponent, AvatarComponent]
})
export class SharedModule { }
