import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Commentpost } from './commentpost';

describe('Commentpost', () => {
  let component: Commentpost;
  let fixture: ComponentFixture<Commentpost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Commentpost],
    }).compileComponents();

    fixture = TestBed.createComponent(Commentpost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
