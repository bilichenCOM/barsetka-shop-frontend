import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../app-settings';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	instagramLink: string;

	constructor() {
		this.instagramLink = AppSettings.INSTA_LINK;
	}

	ngOnInit(): void {
	}

}
