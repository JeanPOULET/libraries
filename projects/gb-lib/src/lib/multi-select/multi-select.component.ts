import {Component, Input} from '@angular/core';
import {MultiSelectModule} from 'primeng/multiselect';
import {TranslateDirective, TranslatePipe} from '@ngx-translate/core';


@Component({
  selector: 'lib-multi-select',
  imports: [MultiSelectModule, TranslatePipe, TranslateDirective],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent<T>{

  @Input()
  values: T[] = [];

  @Input()
  name: string = '';

}
