import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcpDialogComponent } from './pcp-dialog.component';

describe('PcpDialogComponent', () => {
  let component: PcpDialogComponent;
  let fixture: ComponentFixture<PcpDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcpDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
