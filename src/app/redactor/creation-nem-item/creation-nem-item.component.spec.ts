import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationNemItemComponent } from './creation-nem-item.component';

describe('CreationNemItemComponent', () => {
  let component: CreationNemItemComponent;
  let fixture: ComponentFixture<CreationNemItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationNemItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationNemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
