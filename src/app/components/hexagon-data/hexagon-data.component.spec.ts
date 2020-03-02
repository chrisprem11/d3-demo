import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonDataComponent } from './hexagon-data.component';

describe('HexagonDataComponent', () => {
  let component: HexagonDataComponent;
  let fixture: ComponentFixture<HexagonDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagonDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
