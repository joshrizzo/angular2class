import { AccountEditorComponent } from './account-editor/account-editor.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AccountEditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
