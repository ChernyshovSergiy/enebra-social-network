export class LangMenu {
    active: boolean;
    flagId: string;
    codeLang: string;
    langName: string;
    ISOLang?: string;
    langFiles?: string;

    constructor(
        active: boolean = false,
        flagId: string,
        codeLang: string,
        langName: string,
        ISOLang?: string,
        langFiles?: string,
    ) {
        this.active = active;
        this.flagId = flagId;
        this.codeLang = codeLang;
        this.langName = langName;
        this.ISOLang = ISOLang;
        this.langFiles = langFiles;
    }
}
