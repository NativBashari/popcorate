import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverGenrePageComponent } from './discover-genre-page.component';

describe('DiscoverGenrePageComponent', () => {
  let component: DiscoverGenrePageComponent;
  let fixture: ComponentFixture<DiscoverGenrePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverGenrePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverGenrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
