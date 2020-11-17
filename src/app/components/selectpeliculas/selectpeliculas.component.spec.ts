import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpeliculasComponent } from './selectpeliculas.component';

describe('SelectpeliculasComponent', () => {
  let component: SelectpeliculasComponent;
  let fixture: ComponentFixture<SelectpeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectpeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectpeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
