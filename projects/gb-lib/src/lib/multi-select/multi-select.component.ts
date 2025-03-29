import {Component, Input} from '@angular/core';
import {MultiSelectModule} from 'primeng/multiselect';

@Component({
  selector: 'lib-multi-select',
  imports: [MultiSelectModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent<T>{

  @Input()
  values: T[] = [];

  @Input()
  name: string ='';


}
