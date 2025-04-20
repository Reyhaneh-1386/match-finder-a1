import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootrrComponent } from './footrr.component';

describe('FootrrComponent', () => {
  let component: FootrrComponent;
  let fixture: ComponentFixture<FootrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootrrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
