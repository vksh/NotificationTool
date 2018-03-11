import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { GlobalSettingComponent } from './global-setting/global-setting.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalSettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
