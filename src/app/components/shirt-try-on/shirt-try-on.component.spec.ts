import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtTryOnComponent } from './shirt-try-on.component';

describe('ShirtTryOnComponent', () => {
  let component: ShirtTryOnComponent;
  let fixture: ComponentFixture<ShirtTryOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShirtTryOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShirtTryOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
