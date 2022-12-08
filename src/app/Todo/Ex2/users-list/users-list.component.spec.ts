import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLISTComponent } from './users-list.component';

describe('UsersLISTComponent', () => {
  let component: UsersLISTComponent;
  let fixture: ComponentFixture<UsersLISTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersLISTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
