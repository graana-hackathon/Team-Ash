import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material.module';

import { MainService } from './_services/main.service';
import { NotifyService } from './_services/notify.service';
import { ToWordsPipe, MarlaPipe } from './_services/pipes';
import { ChipsSelectComponent } from './components/chips-select/chips-select.component';
import { TagsInputComponent } from './components/tags-input/tags-input.component';
import { DataComponent } from './screens/data/data.screen';
import { HomeScreen } from './screens/home/home.screen';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreen,
    DataComponent,

    ChipsSelectComponent,
    TagsInputComponent,


    ToWordsPipe,
    MarlaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,

    FormsModule, ReactiveFormsModule,
  ],
  providers: [MainService, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
