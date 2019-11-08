import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HorizontalListComponent} from './horizontal-list.component';

describe('HorizontalListComponent', () => {
    let component: HorizontalListComponent;
    let fixture: ComponentFixture<HorizontalListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HorizontalListComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HorizontalListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
