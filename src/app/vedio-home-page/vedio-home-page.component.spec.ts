import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioHomePageComponent } from './vedio-home-page.component';

describe('VedioHomePageComponent', () => {
  let component: VedioHomePageComponent;
  let fixture: ComponentFixture<VedioHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VedioHomePageComponent]
    });
    fixture = TestBed.createComponent(VedioHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
