import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Postuser } from './postuser';

describe('Postuser', () => {
  let component: Postuser;
  let fixture: ComponentFixture<Postuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postuser],
    }).compileComponents();

    fixture = TestBed.createComponent(Postuser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
