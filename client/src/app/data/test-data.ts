import { Referens } from '../model/Reference';
import { Point } from '../model/Point';
import { Feed } from '../model/Feed';

export class TestData {
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
