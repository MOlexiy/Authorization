import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginSuccessComponent } from './loggin-success.component';

describe('LogginSuccessComponent', () => {
  let component: LogginSuccessComponent;
  let fixture: ComponentFixture<LogginSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogginSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogginSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
