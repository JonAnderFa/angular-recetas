import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRecetarioComponent } from './listado-recetario.component';

describe('ListadoRecetarioComponent', () => {
  let component: ListadoRecetarioComponent;
  let fixture: ComponentFixture<ListadoRecetarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRecetarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRecetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
