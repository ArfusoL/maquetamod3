import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutdashComponent } from './logoutdash.component';

describe('LogoutdashComponent', () => {
  let component: LogoutdashComponent;
  let fixture: ComponentFixture<LogoutdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
