import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreDetailPageComponent } from './genre-detail-page.component';

describe('GenreDetailPageComponent', () => {
  let component: GenreDetailPageComponent;
  let fixture: ComponentFixture<GenreDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
