import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
