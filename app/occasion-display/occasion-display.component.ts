import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DateformatPipe } from "../dateformat.pipe";
import { EventService } from "../event.service";
import { OccasionService } from "../occasion.service";

@Component({
  selector: "app-occasion-display",
  templateUrl: "./occasion-display.component.html",
  styleUrls: ["./occasion-display.component.css"],
})
export class OccasionDisplayComponent implements OnInit {
  userData: any;
  id: number;
  name: any;
  date: any;
  occasions: any;
  dateT: any;
  constructor(
    private occasion: OccasionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private pipe: DateformatPipe
  ) {}

  ngOnInit(): void {
    // this.eventService.expiredEvents().subscribe((eventId) => {
    //   console.info("Service - Expired Event:", eventId);
    //   // do something now w/ expired event
    // });
    // this.activatedRoute.params.subscribe((params) => {
    //   this.userData = params;
    //   this.id = params["id"];
    //   this.name = params["name"];
    //   this.date = params["date"];
    //   this.occasion = params["occasion"];
    // });
    this.getAllData();
    this.myTimer(1);
  }
  getAllData() {
    this.occasion.getData().subscribe((res: any) => {
      this.userData = res;
      this.myTimer(1);
    });
  }
  addQueryParam(data: any) {
    this.router.navigate(["/counter", data]);
  }

  dataPipe() {
    setInterval(() => {
      this.dateT = this.pipe.transform(this.userData[0].date);
    }, 1000);
  }
  currentDate: any;
  targetDate: any;
  cDateMillisecs: any;
  tDateMillisecs: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  year: number = 2022;
  month: number = 11;
  months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  day: number = 31;
  myTimer(e: any) {
    this.currentDate = new Date();
    this.targetDate = Math.abs(
      new Date().valueOf() - new Date(e.target.value).valueOf()
    );
    console.log(this.targetDate);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    document.getElementById("days").innerText = this.days;
    document.getElementById("hours").innerText = this.hours;
    document.getElementById("mins").innerText = this.minutes;
    document.getElementById("seconds").innerText = this.seconds;

    setInterval(this.myTimer, 1000);
  }
}
