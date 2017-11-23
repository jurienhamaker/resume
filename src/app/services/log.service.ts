import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class LogService {

	constructor() {}

	error(err) {
		// console.log('Something weird happened, report this to development@superbuddy.nl', err);
		console.log(err);
	}
}
