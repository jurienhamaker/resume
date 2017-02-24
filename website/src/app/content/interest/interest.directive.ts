import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'interest',
	template: '<i *ngIf="interest" [class]="\'fa \' + interest.icon" mdTooltipPosition="above" [mdTooltip]="interest.name" #tooltip="mdTooltip" (click)="tooltip.toggle();"></i>',
	encapsulation: ViewEncapsulation.None

})
export class InterestDirective {
	@Input('interest') interest:any;

	public constructor() {}
}
