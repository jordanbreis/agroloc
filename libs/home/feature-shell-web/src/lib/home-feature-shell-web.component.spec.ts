import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFeatureShellWebComponent } from './home-feature-shell-web.component';

describe('HomeFeatureShellWebComponent', () => {
  let component: HomeFeatureShellWebComponent;
  let fixture: ComponentFixture<HomeFeatureShellWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFeatureShellWebComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFeatureShellWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
