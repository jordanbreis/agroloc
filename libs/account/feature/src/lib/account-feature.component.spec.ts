import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountFeatureComponent } from './account-feature.component';

describe('AccountFeatureComponent', () => {
  let component: AccountFeatureComponent;
  let fixture: ComponentFixture<AccountFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
