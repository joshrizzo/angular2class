import { PhoneEditorComponent } from './phone-editor/phone-editor.component';
import { DomainModule } from './../domain/domain.module';
import { SharedModule } from './../shared/shared.module';
import { AccountListComponent } from './account-list/account-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AccountEditorComponent } from './account-editor/account-editor.component';

const routes: any = [
    { path: 'accounts', component: AccountListComponent },
    { path: 'accounts/new', component: AccountEditorComponent },
    { path: 'accounts/:id', component: AccountEditorComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(routes),
        SharedModule,
        DomainModule
    ],
    declarations: [
        AccountEditorComponent,
        AccountListComponent,
        PhoneEditorComponent
    ],
})
export class AccountModule { }
