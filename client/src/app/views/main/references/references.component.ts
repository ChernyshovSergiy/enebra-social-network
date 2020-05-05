import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../../service/data-handler.service';
import { Referens } from '../../../model/Reference';
import { AuthenticationService } from '../../../service/authentication.service';

@Component({
    selector: 'app-references',
    templateUrl: './references.component.html',
    styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent implements OnInit {
    lang: string;
    references: Referens[];
    constructor(public auth: AuthenticationService, private DataHandler: DataHandlerService) {}

    ngOnInit(): void {
        this.DataHandler.currentLangSubject.subscribe((lang: string) => (this.lang = lang));
        this.references = this.DataHandler.getReferences();
        console.log(this.references);
    }
}
