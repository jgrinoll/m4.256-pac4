import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayCardComponent } from './giveaway-card.component';

describe('GiveawayCardComponent', () => {
  let component: GiveawayCardComponent;
  let fixture: ComponentFixture<GiveawayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveawayCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveawayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
