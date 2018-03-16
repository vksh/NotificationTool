import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TimeSelectorComponent } from './time-selector/time-selector.component';
import { AvatarComponent } from './avatar/avatar.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TimeSelectorComponent, AvatarComponent, CollapsibleComponent],
  exports: [TimeSelectorComponent, AvatarComponent, CollapsibleComponent]
})
export class SharedModule { }
