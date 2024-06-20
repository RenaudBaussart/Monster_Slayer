import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnjHealthBarComponent } from './pnj-health-bar.component';

describe('PnjHealthBarComponent', () => {
  let component: PnjHealthBarComponent;
  let fixture: ComponentFixture<PnjHealthBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PnjHealthBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PnjHealthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
