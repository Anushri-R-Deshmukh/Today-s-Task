import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ChangeDetectorRef,
  EventEmitter,
  Output,
} from "@angular/core";
import { NgModel, NgControl } from "@angular/forms";
import { DecimalPipe } from "@angular/common";
import { Subscription } from "rxjs";

@Directive({
  selector: "[appPercent]",
  providers: [DecimalPipe],
})
export class PercentDirective {
  @Input("decimals") decimals: number = 0;
  @Input("digit") digit: number = 1;
  @Output() sharedVarChange = new EventEmitter();
  @Input("greaterThan100")
  greaterThan100: boolean = false;

  private check(value: string, decimals: number, digit: number) {
    if (decimals <= 0) {
      return String(value).match(new RegExp(/^\d+$/));
    } else {
      // `^\\-?(\\d{0,${digit}}(\\.\\d{0,${decimals}})?)$`
      var regExpString = `^\\-?(\\d{0,${digit}}(\\.\\d{0,${decimals}})?)$`;
      return String(value).match(new RegExp(regExpString, "gm"));
    }
  }

  private specialKeys = [
    "Backspace",
    "Tab",
    "End",
    "Home",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
  ];

  constructor(
    private el: ElementRef,
    private decimalPipe: DecimalPipe,
    private cdr: ChangeDetectorRef,
    private model: NgModel
  ) {}
  ss: Subscription = new Subscription();

  ngOnInit() {
    let that = this;
    let toPercent: any;
    let percentStr: string;

    this.model.valueChanges.subscribe((value) => {
      console.log(that.model.control.pristine);
      if (that.model.control.pristine && value) {
        toPercent = value;
        let formattedValue = that.decimalPipe.transform(
          toPercent,
          `1.${that.decimals}-${that.decimals}`
        );
        percentStr = `${toPercent}%`;
        that.model.valueAccessor.writeValue(percentStr);
        // that.model.update.emit(toPercent);
        // that.sharedVarChange.emit(toPercent);
      }
    });
  }

  ngOnDestroy() {
    // this.ss.unsubscribe();
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent): string | any {
    let selectShortcut = event.ctrlKey && event.key == "a";
    let copyShortcut = event.ctrlKey && event.key == "c";
    let pasteShortcut = event.ctrlKey && event.key == "v";
    let undoShortcut = event.ctrlKey && event.key == "z";

    let ifAnyShortcut =
      selectShortcut || copyShortcut || pasteShortcut || undoShortcut;
    // console.log('ifAnyShortcut', ifAnyShortcut);
    if (ifAnyShortcut || this.specialKeys.indexOf(event.key) !== -1) {
      // console.log('ifAnyShortcut', ifAnyShortcut);
      return;
    }

    let current: string = this.el.nativeElement.value;
    let position: number = this.el.nativeElement.selectionStart;
    let next: string = [
      current.slice(0, position),
      event.key,
      current.slice(position),
    ].join("");
    if (next && !this.check(next, this.decimals, this.digit)) {
      // console.log('preventing deafult', event.key);
      event.preventDefault();
      return next;
    }
  }

  @HostListener("blur")
  onBlur() {
    let decimalZeroes = "0".repeat(this.decimals);
    let uiValue: string = `0.${decimalZeroes}`;
    let onBlurValue: string = this.el.nativeElement.value;
    let parsedValue: number = parseFloat(onBlurValue);

    if (!this.greaterThan100 && parsedValue > 100.0) {
      uiValue = `100.${decimalZeroes}`;
    } else if (!isNaN(parsedValue)) {
      // this.model.update.emit(parsedValue);
      uiValue = this.decimalPipe.transform(
        parsedValue,
        "1." + this.decimals + "-" + this.decimals
      );
    }
    this.el.nativeElement.value = uiValue;
    this.model.control.markAsPristine();
  }

  @HostListener("focus")
  onFocus() {
    let next1: string = this.el.nativeElement.value;
    if (next1.indexOf("%") != -1) {
      this.el.nativeElement.value = next1.substring(0, next1.length - 1);
    }
  }
}
