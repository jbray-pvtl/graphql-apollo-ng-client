import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolloClientComponent } from './apollo-client.component';

describe('ApolloClientComponent', () => {
  let component: ApolloClientComponent;
  let fixture: ComponentFixture<ApolloClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApolloClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
