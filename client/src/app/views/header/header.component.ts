import { Component, OnInit } from '@angular/core';
import { LangMenu } from '../../model/LangMenu';
import { AuthenticationService } from '../../service/authentication.service';
import { DataHandlerService } from '../../service/data-handler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    langs: LangMenu[];
    selectLanguage: string;
  constructor(
      public auth: AuthenticationService,
      private dataHandler: DataHandlerService,
  ) { }

  ngOnInit(): void {
      this.dataHandler.currentLangSubject.subscribe((lang) => (this.selectLanguage = lang));
      // this.dataHandler.langsSubject.subscribe((langs: LangMenu[]) => (this.langs = langs));
      this.langs = this.dataHandler.getActiveLanguage();
  }
    langsList(lang): boolean {
        return this.selectLanguage !== lang;
    }
    changeLang(selectLanguage: string) {
        this.dataHandler.fillCurrentLanguage(selectLanguage);
    }

}
