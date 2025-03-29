import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbLibComponent } from './gb-lib.component';

describe('GbLibComponent', () => {
  let component: GbLibComponent;
  let fixture: ComponentFixture<GbLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GbLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GbLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
