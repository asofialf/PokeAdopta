import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InAdoptionComponent } from './in-adoption.component';

describe('InAdoptionComponent', () => {
  let component: InAdoptionComponent;
  let fixture: ComponentFixture<InAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InAdoptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
