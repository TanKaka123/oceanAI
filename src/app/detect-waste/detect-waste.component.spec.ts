import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectWasteComponent } from './detect-waste.component';

describe('DetectWasteComponent', () => {
  let component: DetectWasteComponent;
  let fixture: ComponentFixture<DetectWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
