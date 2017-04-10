import { Component, Input } from '@angular/core';

import { News } from '../news';

@Component({
    selector: `news-entry`,
    templateUrl: `./news-entry.component.html`,
    styleUrls: ['./news-entry.component.css'],
})
export class NewsEntryComponent {
    @Input() news: News[];
}