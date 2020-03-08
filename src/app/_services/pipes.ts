import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'to_words' })
export class ToWordsPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const lac = 100000;
    if (value < 100 * lac) {
      return `${Math.floor(value / lac)} lac`;
    } else {
      return `${Math.floor(value / (100 * lac))} crore`;
    }
  }

}



@Pipe({ name: 'marla' })
export class MarlaPipe implements PipeTransform {
  transform(value, args: string[]): any {

    if (value < 20) {
      return `${Math.floor(value)} marla`;
    } else {
      return `${Math.floor(value / 20)} kanal`;
    }
  }

}
