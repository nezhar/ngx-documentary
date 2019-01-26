import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaryComponent } from './documentary.component';

describe('DocumentaryComponent', () => {
  let component: DocumentaryComponent;
  let fixture: ComponentFixture<DocumentaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
