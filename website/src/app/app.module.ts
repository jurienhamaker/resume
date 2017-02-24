import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

// routes
import { AppRoutes }  from './app.routes';

// services
import { ValidationService,
		LogService } from './services';

// pipes
import { ShortenNumberPipe } from './pipes'

// dependencies
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// components
import { AppComponent } from './app.component';
import { BaseComponent } from './content/base/base.component';

@NgModule({
	entryComponents: [
	],
	declarations: [
		// dependencies

		// pipes
		ShortenNumberPipe,

		// components
		AppComponent,
		BaseComponent
	],
	imports: [
		// angular
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		RouterModule,
		HttpModule,
		JsonpModule,

		// dependencies
		MaterialModule,

		// additional routes, load in last. (Inccludes 404 for any additional weird page)
		RouterModule.forRoot(AppRoutes)
	],
	providers: [
		// dependencies

		// services
		ValidationService,
		LogService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
