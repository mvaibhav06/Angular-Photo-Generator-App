import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPhotoGeneratorComponent } from './random-photo-generator.component';

describe('RandomPhotoGeneratorComponent', () => {
  let component: RandomPhotoGeneratorComponent;
  let fixture: ComponentFixture<RandomPhotoGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomPhotoGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomPhotoGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
