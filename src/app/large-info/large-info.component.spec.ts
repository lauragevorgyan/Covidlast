import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeInfoComponent } from './large-info.component';

describe('LargeInfoComponent', () => {
  let component: LargeInfoComponent;
  let fixture: ComponentFixture<LargeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
