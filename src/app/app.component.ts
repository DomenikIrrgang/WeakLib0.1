import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <navbar></navbar>
    <div class="container-fluid">
    <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['app.component.css'],
})
export class AppComponent {
    title: string = 'WeakLib';
}