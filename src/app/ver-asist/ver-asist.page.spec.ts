import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerAsistPage } from './ver-asist.page';

describe('VerAsistPage', () => {
  let component: VerAsistPage;
  let fixture: ComponentFixture<VerAsistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerAsistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
