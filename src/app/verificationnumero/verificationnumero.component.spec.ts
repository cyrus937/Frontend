import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationnumeroComponent } from './verificationnumero.component';

describe('VerificationnumeroComponent', () => {
  let component: VerificationnumeroComponent;
  let fixture: ComponentFixture<VerificationnumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationnumeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationnumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
