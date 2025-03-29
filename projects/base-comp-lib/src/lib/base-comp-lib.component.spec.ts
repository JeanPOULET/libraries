import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompLibComponent } from './base-comp-lib.component';

describe('BaseCompLibComponent', () => {
  let component: BaseCompLibComponent;
  let fixture: ComponentFixture<BaseCompLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseCompLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCompLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
