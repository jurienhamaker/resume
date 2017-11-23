import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// dependencies
import * as _ from 'lodash';
import * as moment from 'moment';

// environment
import { environment } from '../../../environments/environment';

@Component({
	selector: 'base',
	templateUrl: './base.component.html',
	encapsulation: ViewEncapsulation.None

})
export class BaseComponent implements OnInit {
	public environment = environment;

	public constructor(private _title:Title) {}

	ngOnInit() {
		this._title.setTitle(environment.title);
	}
}
