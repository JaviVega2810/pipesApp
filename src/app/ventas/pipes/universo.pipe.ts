import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'universo'
})


export class UniversoPipe implements PipeTransform{

  transform(value: number): string {

    if(value === 0){
      return 'Marvel';
    }
    else{
      return 'DC';
    }

  }
}
