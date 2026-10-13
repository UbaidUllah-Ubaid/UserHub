import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Whatlearn } from './whatlearn';

describe('Whatlearn', () => {
  let component: Whatlearn;
  let fixture: ComponentFixture<Whatlearn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whatlearn],
    }).compileComponents();

    fixture = TestBed.createComponent(Whatlearn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
