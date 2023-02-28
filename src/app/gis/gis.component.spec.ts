import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GISComponent } from './gis.component';

describe('GISComponent', () => {
  let component: GISComponent;
  let fixture: ComponentFixture<GISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GISComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
