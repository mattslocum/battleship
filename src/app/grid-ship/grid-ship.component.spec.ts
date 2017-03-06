import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridShipComponent } from './grid-ship.component';

describe('GridShipComponent', () => {
  let component: GridShipComponent;
  let fixture: ComponentFixture<GridShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
