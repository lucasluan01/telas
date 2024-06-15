import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLojistaComponent } from './tela-lojista.component';

describe('TelaLojistaComponent', () => {
  let component: TelaLojistaComponent;
  let fixture: ComponentFixture<TelaLojistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaLojistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaLojistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
