import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtdnaComponent } from './ftdna.component';

describe('FtdnaComponent', () => {
  let component: FtdnaComponent;
  let fixture: ComponentFixture<FtdnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtdnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtdnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
