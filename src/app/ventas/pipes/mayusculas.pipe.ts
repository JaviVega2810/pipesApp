import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform{

  transform(value: string, ref: boolean = true): string {

    return (ref) ? value.toUpperCase() : value.toLowerCase();

  }

}
