import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadedashComponent } from './acercadedash.component';

describe('AcercadedashComponent', () => {
  let component: AcercadedashComponent;
  let fixture: ComponentFixture<AcercadedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadedashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercadedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
