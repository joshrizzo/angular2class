import { RouterModule } from '@angular/router';
import { AccountModule } from './account/account.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

const defaultRoute = 'Accounts';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AccountModule,
    RouterModule.forRoot([
      { path: '', redirectTo: defaultRoute, pathMatch: 'full' }
    ])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
