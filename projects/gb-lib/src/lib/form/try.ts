import {AfterViewInit, Optional, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';

export class MyComponent implements AfterViewInit, ControlValueAccessor  {

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      ngControl.valueAccessor = this;
    }
  }

  ngAfterContentInit(): void {
    const control = this.ngControl && this.ngControl.control;
    if (control) {
      // FormControl should be available here
    }
  }
}
