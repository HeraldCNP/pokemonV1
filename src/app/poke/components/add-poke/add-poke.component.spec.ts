import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPokeComponent } from './add-poke.component';

describe('AddPokeComponent', () => {
  let component: AddPokeComponent;
  let fixture: ComponentFixture<AddPokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPokeComponent]
    });
    fixture = TestBed.createComponent(AddPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
