import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredPostsComponent } from './starred-posts.component';

describe('StarredPostsComponent', () => {
  let component: StarredPostsComponent;
  let fixture: ComponentFixture<StarredPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarredPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarredPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
