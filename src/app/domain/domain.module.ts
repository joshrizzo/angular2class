import { MockApiService } from './mock-api.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserRepository } from './api/user-repository.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(MockApiService)
    ],
    providers: [
        UserRepository
    ]
})
export class DomainModule { }
