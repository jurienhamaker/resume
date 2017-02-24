// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
	production: true,
	theme: 'red',
	photoUrl: '/assets/images/profile-img.jpg',
	title: 'Title',
	name: 'Your Name',
	subTitle: 'Your Sub Title',
	description: 'A story about yourself',
	basicInfo: {
		birthDay: '1995-30-11',
		nationality: 'English',
		languages: 'English (mother tongue)'
	},
	phoneNumbers: [{
		name: 'Work',
		value: '(0) (31) 6 18 17 01 70'
	}],
	emails: [{
		name: 'Work',
		value: 'mail@example.com'
	}],
	address: {
		streetAndNumber: '12th street #12',
		city: 'City, State',
		postcode: '1234AB'
	},
	skills: [{
		name: 'SQL',
		percentage: 55
	}],
	workExperience: [{
		title: 'UI/UX Designer',
		company: 'Academy',
		timespan: 'JAN 2013 - DEC 2013',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}],
	education: [{
		title: 'Art & Multimedia',
		school: 'Oxford University',
		timespan: 'JAN 2013 - DEC 2013',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}],
	interests: [{
		name: "Photography",
		icon: "fa-camera"
	}],
	social: [{
		name: "Facebook",
		icon: "fa-facebook",
		url: "http://facebook.com"
	}],
	extraUrls: ['http://example.com']
};
