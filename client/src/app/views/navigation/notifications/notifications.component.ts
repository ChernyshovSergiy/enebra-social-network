import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../../service/data-handler.service';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
    menu: boolean;

    constructor(private dataHandler: DataHandlerService) {
        this.menu = false;
    }

    ngOnInit(): void {}
    ClickedOutside() {
        if (this.menu) {
            this.menu = false;
        }
    }
    showMenu() {
        this.menu = !this.menu;
    }
}
