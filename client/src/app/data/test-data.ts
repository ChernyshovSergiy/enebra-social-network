import { Referens } from '../model/Reference';
import { Point } from '../model/Point';
import { Feed } from '../model/Feed';
import { LangMenu } from '../model/LangMenu';
import { Message } from '../model/Message';

export class TestData {
    static messages: Message[] = [
        {
            avatar: 'user.png',
            fullName: 'Андрей Голубев',
            date: new Date('2020-05-03'),
            guarantyQuery: false,
            myMsgLast: true,
            mySelf: 'Вы',
            msg: 'Да',
        },
        {
            avatar: 'user.png',
            fullName: 'Сергей Чернышов',
            date: new Date('2020-05-02'),
            guarantyQuery: true,
            firstBtnTitle: 'подтвердить',
            lastBtnTitle: 'отклонить',
        },
        {
            avatar: 'user.png',
            fullName: 'Наталья Виниченко',
            date: new Date('2020-05-01'),
            guarantyQuery: false,
            myMsgLast: false,
            msg:
                'Возможно Вас заинтересует моя инновация, я хотел лта лотл лвмлыо ыыышр шыуаыгшрыга лаафог',
        },
    ];
    static langs: LangMenu[] = [
        {
            active: true,
            flagId: 'gb',
            codeLang: 'en',
            langName: 'English',
            ISOLang: 'en-GB',
            langFiles: 'en-GB.js',
        },
        {
            active: true,
            flagId: 'ru',
            codeLang: 'ru',
            langName: 'Русский',
            ISOLang: 'ru-RU',
            langFiles: 'ru-RU.js',
        },
        {
            active: false,
            flagId: 'es',
            codeLang: 'es',
            langName: 'Español',
            ISOLang: 'es-ES',
            langFiles: 'es-ES.js',
        },
        {
            active: false,
            flagId: 'ua',
            codeLang: 'ua',
            langName: 'Український',
            ISOLang: 'uk-UA',
            langFiles: 'uk-UA.js',
        },
        {
            active: false,
            flagId: 'de',
            codeLang: 'de',
            langName: 'Deutsch',
            ISOLang: 'de-DE',
            langFiles: 'de-DE.js',
        },
    ];
    static feeds: Feed[] = [
        {
            href: 'innov',
            title: { ru: 'Инновации', en: 'Innovations' },
            newBlocks: 2,
        },
        {
            href: 'inform',
            title: { ru: 'Информация', en: 'Informations' },
            newBlocks: 3,
        },
        {
            href: 'votes',
            title: { ru: 'Голосования', en: 'Votes' },
            newBlocks: 5,
        },
        {
            href: 'tenders',
            title: { ru: 'Тендеры', en: 'Tenders' },
            newBlocks: 7,
        },
    ];
    static points: Point[] = [
        {
            icon: 'map-icon.png',
            name: { en: 'my balance', ru: 'мой баланс' },
            link: 'profile-balance',
        },
        {
            icon: 'edit.png',
            name: { en: 'edit profile', ru: 'редактировать профиль' },
            link: 'edit-profile',
        },
        {
            icon: 'set.png',
            name: { en: 'timeline setup', ru: 'настройка ленты' },
            link: 'timeline-setup',
        },
        {
            icon: 'edit.png',
            name: { en: 'information', ru: 'информацию' },
            link: 'information',
        },
        {
            icon: 'set.png',
            name: { en: 'innovation', ru: 'инновацию' },
            link: 'innovation',
        },
        {
            icon: 'edit.png',
            name: { en: 'events list', ru: 'список мероприятий' },
            link: 'events-list',
        },
        {
            icon: 'set.png',
            name: { en: 'create events', ru: 'создать мероприятие' },
            link: 'create-events',
        },
    ];
    static referens: Referens[] = [
        {
            sortNum: 1,
            title: { en: 'exchequer', ru: 'ресурсы' },
            ref: [TestData.points[0]],
        },
        {
            sortNum: 2,
            title: { en: 'settings', ru: 'настройки' },
            ref: [TestData.points[1], TestData.points[2]],
        },
        {
            sortNum: 3,
            title: { en: 'create publication', ru: 'создать публикацию' },
            ref: [TestData.points[3], TestData.points[4]],
        },
        {
            sortNum: 3,
            title: { en: 'events', ru: 'мероприятия' },
            ref: [TestData.points[5], TestData.points[6]],
        },
    ];
}
