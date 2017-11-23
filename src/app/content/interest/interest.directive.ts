import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'interest',
	template: '<i *ngIf="interest" [class]="\'fa \' + interest.icon" matTooltipPosition="above" [matTooltip]="interest.name" #tooltip="matTooltip" (click)="tooltip.toggle();"></i>',
	encapsulation: ViewEncapsulation.None

})
export class InterestDirective {
	@Input('interest') interest:any;

	public constructor() {}
}
