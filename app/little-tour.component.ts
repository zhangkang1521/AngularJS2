import { Component } from '@angular/core';

@Component({
	selector: 'little-tour',
	template: `
		<input #newHero (keyup.enter)="addHero(newHero.value)">
		<button (click)=addHero(newHero.value)>Add</button>
		<ul>
			<li *ngFor="let hero of heros">
				{{hero}}
			</li>
		</ul>
	`
})

export class LittleTourComponent {
	heros = ['苏轼', '欧阳修', '秦观'];
	addHero(hero:string){
		if(hero){
			this.heros.push(hero);
			//newHero.value = '';
		}
	}
}