import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFeatureAboutComponent } from './home-feature-about.component';

describe('HomeFeatureAboutComponent', () => {
  let component: HomeFeatureAboutComponent;
  let fixture: ComponentFixture<HomeFeatureAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFeatureAboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFeatureAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
