import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRecetarioComponent } from './detalle-recetario.component';

describe('DetalleRecetarioComponent', () => {
  let component: DetalleRecetarioComponent;
  let fixture: ComponentFixture<DetalleRecetarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleRecetarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRecetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
