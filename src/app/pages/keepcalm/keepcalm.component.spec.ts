import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepcalmComponent } from './keepcalm.component';

describe('KeepcalmComponent', () => {
  let component: KeepcalmComponent;
  let fixture: ComponentFixture<KeepcalmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepcalmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepcalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
