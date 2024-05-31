import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagerNavbarComponent } from './projectmanager-navbar.component';

describe('ProjectmanagerNavbarComponent', () => {
  let component: ProjectmanagerNavbarComponent;
  let fixture: ComponentFixture<ProjectmanagerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectmanagerNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectmanagerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
