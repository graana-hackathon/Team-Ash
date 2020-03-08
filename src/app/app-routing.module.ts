import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreen } from './screens/home/home.screen';

const routes: Routes = [

  { path: '', component: HomeScreen },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
