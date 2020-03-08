import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSort } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ENTER, COMMA, SPACE } from '@angular/cdk/keycodes';

import { Observable, Subject, of } from 'rxjs';

import { MainService } from 'src/app/_services/main.service';






const TASKS = {
  CHOOSE_OPTION: 'choose_option',
  SUBMIT_LOADING: 'submit_loading',
  PRVIEW: 'submit_loading',

}
@Component({
  selector: 'app-data',
  templateUrl: './data.screen.html',
  styleUrls: ['./data.screen.scss']
})
export class DataComponent implements OnInit {














  @Input() ads;

  constructor(private mainService: MainService) {


  }





  ngOnInit(): void {




  }








}



