import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerdashComponent } from './bannerdash.component';

describe('BannerdashComponent', () => {
  let component: BannerdashComponent;
  let fixture: ComponentFixture<BannerdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
