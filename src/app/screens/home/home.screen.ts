import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSort } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ENTER, COMMA, SPACE } from '@angular/cdk/keycodes';

import { Observable, Subject, of } from 'rxjs';

import { MainService, SearchP } from 'src/app/_services/main.service';





const TASKS = {
  CHOOSE_OPTION: 'choose_option',
  SUBMIT_LOADING: 'submit_loading',
  PRVIEW: 'submit_loading',

}

@Component({
  selector: 'app-home',
  templateUrl: './home.screen.html',
  styleUrls: ['./home.screen.scss']
})
export class HomeScreen implements OnInit {





  loading = false;

  search: SearchP = {
    type: null,
    size: undefined,
    bedrooms: undefined,
    locality: null,
    budget: undefined
  };


  result: any[] = null











  constructor(private mainService: MainService) {


  }





  ngOnInit(): void {




  }



  async _search() {
    this.loading = true;
    this.mainService.fetchData(this.search)
      .then(response => {
        console.log(response);
        this.result = response
        this.loading = false
      })
      .catch(e => console.error(e)
      )
  }







}



