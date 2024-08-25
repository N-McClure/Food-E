import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleFooterComponent } from './middle-footer.component';

describe('MiddleFooterComponent', () => {
  let component: MiddleFooterComponent;
  let fixture: ComponentFixture<MiddleFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddleFooterComponent]
    });
    fixture = TestBed.createComponent(MiddleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
