import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usersprofile } from './usersprofile';

describe('Usersprofile', () => {
  let component: Usersprofile;
  let fixture: ComponentFixture<Usersprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usersprofile],
    }).compileComponents();

    fixture = TestBed.createComponent(Usersprofile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
