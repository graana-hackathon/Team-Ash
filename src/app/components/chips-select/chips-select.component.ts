import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ENTER, COMMA, SPACE } from '@angular/cdk/keycodes';

import { Observable, Subject, of } from 'rxjs';

import { Options } from 'selenium-webdriver/chrome';

import { startWith, map } from 'rxjs/operators';
import { Tags } from 'src/app/_schema/src/tags';

@Component({
  selector: 'app-chips-select',
  templateUrl: './chips-select.component.html',
  styleUrls: ['./chips-select.component.scss']
})
export class ChipsSelectComponent implements OnInit {



  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagsCtrl = new FormControl();
  filteredTags: Observable<string[]>;

  @Input() tags: Tags;
  @Output() tagsChange: EventEmitter<Tags> = new EventEmitter<Tags>();




  @Input()
  placeholder: string;






  constructor() {

  }

  ngOnInit() {


  }

  _toggle(key: string) {
    this.tags[key] = !this.tags[key];
    this.tagsChange.emit(this.tags);
  }


}
