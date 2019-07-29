import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) { }

  transform(htmlString: string, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

}
