import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodydashComponent } from './bodydash.component';

describe('BodydashComponent', () => {
  let component: BodydashComponent;
  let fixture: ComponentFixture<BodydashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodydashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
