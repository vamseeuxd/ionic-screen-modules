import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HorizontalListPage} from './horizontal-list.page';

describe('HorizontalListPage', () => {
    let component: HorizontalListPage;
    let fixture: ComponentFixture<HorizontalListPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HorizontalListPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HorizontalListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
