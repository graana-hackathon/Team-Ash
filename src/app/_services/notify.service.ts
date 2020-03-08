import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Subject } from 'rxjs';
/// Notify users about errors and other helpful stuff
export interface Msg {
  content: string;
  style: string;
}

@Injectable()
export class NotifyService {

  constructor(public snackBar: MatSnackBar) {

  }

  private _msgSource = new Subject<Msg | null>();

  msg = this._msgSource.asObservable();

  update(content: string, style: 'error' | 'info' | 'success') {
    const msg: Msg = { content, style };
    this._msgSource.next(msg);

    this.snackBar.open(content, null, {
      duration: 2000,
      horizontalPosition: 'right'
    });
  }

  clear() {
    this._msgSource.next(null);
  }
}
