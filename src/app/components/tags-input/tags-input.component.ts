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


@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent implements OnInit {



  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagsCtrl = new FormControl();
  filteredTags: Observable<string[]>;

  @Input() tags: string[] = [];
  @Output() tagsChange: EventEmitter<String[]> = new EventEmitter<String[]>();

  @Input() disabled: boolean = false;

  @Input()
  allTags: string[];

  @Input()
  placeholder: string;




  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredTags = this.tagsCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }

  ngOnInit() {

  }

  add(event: MatChipInputEvent): void {
    // Add tag only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our tag
      if ((value || '').trim()) {
        this.tags.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.tagsCtrl.setValue(null);
    }

    this.tagsChange.emit(this.tags)
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }

    this.tagsChange.emit(this.tags)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagsCtrl.setValue(null);

    this.tagsChange.emit(this.tags)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }
}
