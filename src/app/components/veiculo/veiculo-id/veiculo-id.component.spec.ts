import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoIdComponent } from './veiculo-id.component';

describe('VeiculoIdComponent', () => {
  let component: VeiculoIdComponent;
  let fixture: ComponentFixture<VeiculoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
