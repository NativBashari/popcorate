import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTabsComponent } from './movie-tabs.component';

describe('MovieTabsComponent', () => {
  let component: MovieTabsComponent;
  let fixture: ComponentFixture<MovieTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
