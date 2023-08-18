import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFeatureShellMobComponent } from './home-feature-shell-mob.component';

describe('HomeFeatureShellMobComponent', () => {
  let component: HomeFeatureShellMobComponent;
  let fixture: ComponentFixture<HomeFeatureShellMobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFeatureShellMobComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFeatureShellMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
