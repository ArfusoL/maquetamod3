import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiondashComponent } from './sectiondash.component';

describe('SectiondashComponent', () => {
  let component: SectiondashComponent;
  let fixture: ComponentFixture<SectiondashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectiondashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectiondashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
