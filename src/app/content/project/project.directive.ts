import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'project',
    template: `
        <a *ngIf="project" [href]="project.url" target="_{{project.name}}">
            <img width="100%" [src]="project.logoUrl" matTooltipPosition="above" [matTooltip]="project.name" #tooltip="matTooltip" (click)="tooltip.toggle();"/>
        </a>
    `,
	encapsulation: ViewEncapsulation.None
})
export class ProjectDirective {
	@Input('project') project:any;

	public constructor() {}
}
