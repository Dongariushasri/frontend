import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammemberNavbarComponent } from './teammember-navbar.component';

describe('TeammemberNavbarComponent', () => {
  let component: TeammemberNavbarComponent;
  let fixture: ComponentFixture<TeammemberNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeammemberNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeammemberNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
