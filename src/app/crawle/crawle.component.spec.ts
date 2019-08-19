import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawleComponent } from './crawle.component';

describe('CrawleComponent', () => {
  let component: CrawleComponent;
  let fixture: ComponentFixture<CrawleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
