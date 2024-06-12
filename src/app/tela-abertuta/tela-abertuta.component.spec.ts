import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAbertutaComponent } from './tela-abertuta.component';

describe('TelaAbertutaComponent', () => {
  let component: TelaAbertutaComponent;
  let fixture: ComponentFixture<TelaAbertutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAbertutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAbertutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
