import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineFeatureComponent } from './machine-feature.component';

describe('MachineFeatureComponent', () => {
  let component: MachineFeatureComponent;
  let fixture: ComponentFixture<MachineFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachineFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MachineFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
