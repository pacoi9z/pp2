import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsspaceComponent } from './kidsspace.component';

describe('KidsspaceComponent', () => {
  let component: KidsspaceComponent;
  let fixture: ComponentFixture<KidsspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
