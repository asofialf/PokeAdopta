import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalAdoptionComponent } from './final-adoption.component';

describe('FinalAdoptionComponent', () => {
  let component: FinalAdoptionComponent;
  let fixture: ComponentFixture<FinalAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalAdoptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
