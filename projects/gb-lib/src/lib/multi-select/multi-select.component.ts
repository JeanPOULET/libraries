import {Component, Input} from '@angular/core';
import {MultiSelectModule} from 'primeng/multiselect';
import {MultiSelectBase} from 'base-comp-lib';


@Component({
  selector: 'lib-multi-select',
  imports: [MultiSelectModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent<T> extends MultiSelectBase{

  @Input()
  values: T[] = [];

  @Input()
  name: string = '';

  constructor() {
    super();
  }

}
