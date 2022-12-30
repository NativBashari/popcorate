import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGaleryComponent } from './movie-galery.component';

describe('MovieGaleryComponent', () => {
  let component: MovieGaleryComponent;
  let fixture: ComponentFixture<MovieGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieGaleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
