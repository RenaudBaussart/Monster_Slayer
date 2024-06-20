import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnjComponent } from './pnj.component';

describe('PnjComponent', () => {
  let component: PnjComponent;
  let fixture: ComponentFixture<PnjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PnjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PnjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
