import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../model/Message';
import { DataHandlerService } from '../../../service/data-handler.service';
import { listAnimation, actionAnimation } from '../../../animations';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
    animations: [listAnimation, actionAnimation],
})
export class MessagesComponent implements OnInit {
    @Input() deviceXs: boolean;
    messages: Message[];
    menu: boolean;

    constructor(private dataHandler: DataHandlerService) {
        this.menu = false;
    }

    ngOnInit(): void {
        this.dataHandler.msgSubject.subscribe((messages) => (this.messages = messages));
        this.messages = this.messages.map((message) => {
            message.state = 'orig';
            return message;
        });
    }
    ClickedOutside() {
        if (this.menu) {
            this.menu = false;
        }
    }
    showMenu() {
        this.menu = !this.menu;
    }

    clickMsg(message) {
        message.state = 'small';
        setTimeout(() => {
            // change value
            message.newMsg = !message.newMsg;
            // back to original state
            message.state = 'orig';
        }, 300);
    }
}
