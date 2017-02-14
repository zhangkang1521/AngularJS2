﻿import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
	moduleId: module.id,
	selector: 'hero-form',
	templateUrl: 'hero-form.component.html'
})

export class HeroFormComponent {
	powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Change'];
	model = new Hero(18, 'Andy', this.powers[1], 'Chuck OverStreet');
	submitted: false;
	onSubmit() { this.submitted = true; }
	newHero() {
		this.model = new Hero(42, '', '')
	}
	get diagnostic() { return JSON.stringify(this.model); }
}