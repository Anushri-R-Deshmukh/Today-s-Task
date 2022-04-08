import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EventService {
  private subject = new Subject<any>();

  expired(eventId: number) {
    this.subject.next(eventId);
  }

  expiredEvents(): Observable<any> {
    return this.subject.asObservable();
  }
  constructor() {}
}
