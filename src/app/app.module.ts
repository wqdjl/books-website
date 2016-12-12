import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShareModule } from './share/share.module';
import { RootRouter } from './app.router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './404/404.component';

import { MyInMemoryDataApi } from './in-memory-data-server/data.server';

import { HeaderComponent, FooterComponent } from './layout/index';

let imports: any[] = [BrowserModule,ShareModule,RootRouter];
if (process.env && process.env.dev) {//开发环境调用
    imports.push(MyInMemoryDataApi);
}

@NgModule({
    imports: imports,
    declarations: [
        AppComponent,
        NotFoundComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class APPModule {
    constructor() {

    }
}