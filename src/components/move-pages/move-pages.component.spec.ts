import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovePagesComponent } from './move-pages.component';

describe('MovePagesComponent', () => {
  let component: MovePagesComponent;
  let fixture: ComponentFixture<MovePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
