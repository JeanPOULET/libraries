import * as i0 from '@angular/core';
import { Input, Component } from '@angular/core';
import * as i1 from 'primeng/multiselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiSelectBase } from 'base-comp-lib';

class MultiSelectComponent extends MultiSelectBase {
    values = [];
    name = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.4", ngImport: i0, type: MultiSelectComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.4", type: MultiSelectComponent, isStandalone: true, selector: "lib-multi-select", inputs: { values: "values", name: "name" }, usesInheritance: true, ngImport: i0, template: "<p-multi-select [options]=\"values\"  optionLabel=\"name\" placeholder=\"Loading...\" styleClass=\"w-full md:w-80\" >\r\n  <ng-template  let-country #item>\r\n    <div>{{country.name}}</div>\r\n  </ng-template>\r\n\r\n</p-multi-select>\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: MultiSelectModule }, { kind: "component", type: i1.MultiSelect, selector: "p-multiSelect, p-multiselect, p-multi-select", inputs: ["id", "ariaLabel", "style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "fluid", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "variant", "appendTo", "dataKey", "name", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "chipIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "filterBy", "scrollHeight", "lazy", "virtualScroll", "loading", "virtualScrollItemSize", "loadingIcon", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "size", "showClear", "autofocus", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "defaultLabel", "placeholder", "options", "filterValue", "itemSize", "selectAll", "focusOnHover", "filterFields", "selectOnFocus", "autoOptionFocus"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide", "onLazyLoad", "onRemove", "onSelectAllChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.4", ngImport: i0, type: MultiSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-multi-select', imports: [MultiSelectModule], template: "<p-multi-select [options]=\"values\"  optionLabel=\"name\" placeholder=\"Loading...\" styleClass=\"w-full md:w-80\" >\r\n  <ng-template  let-country #item>\r\n    <div>{{country.name}}</div>\r\n  </ng-template>\r\n\r\n</p-multi-select>\r\n" }]
        }], propDecorators: { values: [{
                type: Input
            }], name: [{
                type: Input
            }] } });

/*
 * Public API Surface of gb-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MultiSelectComponent };
//# sourceMappingURL=gb-lib.mjs.map
