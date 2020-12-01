import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterParent'
})
export class FilterParentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
