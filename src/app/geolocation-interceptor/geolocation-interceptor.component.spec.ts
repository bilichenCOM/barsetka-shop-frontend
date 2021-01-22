import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationInterceptorComponent } from './geolocation-interceptor.component';

describe('GeolocationInterceptorComponent', () => {
  let component: GeolocationInterceptorComponent;
  let fixture: ComponentFixture<GeolocationInterceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocationInterceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
