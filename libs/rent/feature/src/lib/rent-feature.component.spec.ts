import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentFeatureComponent } from './rent-feature.component';

describe('RentFeatureComponent', () => {
  let component: RentFeatureComponent;
  let fixture: ComponentFixture<RentFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
