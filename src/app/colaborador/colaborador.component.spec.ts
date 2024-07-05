import { TestBed } from '@angular/core/testing';
import { ColaboradorComponent} from './colaborador.component';

describe('ColaboradorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ColaboradorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'projeto-final' title`, () => {
    const fixture = TestBed.createComponent(ColaboradorComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('projeto-final');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ColaboradorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, projeto-final');
  });
});
