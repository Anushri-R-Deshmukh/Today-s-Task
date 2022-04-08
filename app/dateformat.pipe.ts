import { Pipe, PipeTransform } from "@angular/core";
import { Observable, timer } from "rxjs";
import { map } from "rxjs/operators";

@Pipe({
  name: "dateformat",
})
export class DateformatPipe implements PipeTransform {
  transform(value: any): any {
    setInterval((e: any) => {
      var futureDate = new Date(e.target.value).getTime();
      var today = new Date(value).getTime();
      var distance = futureDate - today;
      var days = Math.floor(distance / (100 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (100 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var demo =
        days +
        "Days" +
        "" +
        hours +
        "Hours" +
        "" +
        minutes +
        "Minutes" +
        "" +
        seconds +
        "Seconds";
      console.log(demo);
      return demo;
    }, 1000);
  }
}
