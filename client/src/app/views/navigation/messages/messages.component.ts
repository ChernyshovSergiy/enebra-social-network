import { Component, OnInit } from '@angular/core';
import { Message } from '../../../model/Message';
import { DataHandlerService } from '../../../service/data-handler.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
    messages: Message[];
    constructor(private dataHandler: DataHandlerService) {}

    ngOnInit(): void {
        this.dataHandler.msgSubject.subscribe((messages) => (this.messages = messages));
    }
}
