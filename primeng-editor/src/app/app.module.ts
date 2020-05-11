import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EditorModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        EditorModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
