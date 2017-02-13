import { Component } from '@angular/core';
import { Site } from './site';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <div *ngFor="let stu of stuList">
	{{stu}}
  </div>
  <!-- 对象输出 -->
  <li *ngFor="let site of sites">
	{{site.id}} {{site.name}}
	<span *ngIf="site.name == 'google'">***</span>
  </li>
  <h2>我最喜欢的网站{{mySite}}</h2>
  `
})
export class AppComponent { 
	title = '站点列表';
	stuList = ['zk', 'zy', 'zq'];
	sites = [
		new Site(1, 'google'),
		new Site(2, 'baidu'),
		new Site(3, 'taobao'),
	];
	mySite = this.sites[1].name;
}
