import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbaucherComponent } from './dbaucher.component';

describe('DbaucherComponent', () => {
  let component: DbaucherComponent;
  let fixture: ComponentFixture<DbaucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbaucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbaucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
