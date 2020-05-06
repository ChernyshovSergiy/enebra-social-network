import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../service/data-handler.service';

@Component({
    selector: 'app-messanger',
    templateUrl: './messanger.component.html',
    styleUrls: ['./messanger.component.scss'],
})
export class MessangerComponent implements OnInit {
    showMessanger: boolean;
    showDialog: boolean;

    constructor(private dataHandler: DataHandlerService) {
        this.showMessanger = false;
    }

    ngOnInit(): void {
        this.dataHandler.messengerSubject.subscribe(
            (status: boolean) => (this.showMessanger = status),
        );
    }

    closeMessanger() {
        this.dataHandler.showMessenger(false);
    }

    openDialog() {
        this.showDialog = !this.showDialog;
    }

    ClickedOutside() {
        if (this.showDialog) {
            this.showDialog = false;
        }
    }
}
