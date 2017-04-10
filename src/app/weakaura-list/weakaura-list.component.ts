import { Component, Input } from '@angular/core';

import { Weakaura } from '../weakaura';

@Component({
    selector: `weakaura-list`,
    templateUrl: `./weakaura-list.component.html`,
    styleUrls: ['./weakaura-list.component.css'],
})
export class WeakauraListComponent {
    @Input() weakauras: Weakaura[];
}