(url = 'https://lp-base.pro/?s='),
    (path = window.location.pathname),
    (dir = location.pathname.split('/')[1]);
(link = `${url + dir}&post_type=product`),
    (i = 0),
    (change = document.getElementsByClassName('lp-base-pro-button'));
while (change[i]) {
    change[i].setAttribute('href', link);
    i++;
}

function animateText(id, text, i) {
    document.getElementsByClassName('lp-base-utp').innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) i = 0;
    setTimeout(`animateText('${id}','${text}',${i})`, 100);
}

const script = document.createElement('script');
script.src = 'https://demo.lp-base.pro/body.js';
document.getElementsByTagName('head')[0].appendChild(script);

/*if (location.href.search('demo.lp-base.pro') == -1) document.body.innerHTML = "<div style=\"margin: 0 auto;background: aliceblue;height: 100vh;z-index: 999999;\"><center><h1 style=\"font-size:40px;padding: 100px 10px;\">Сайт скопирован с <a href=\"https://lp-base.pro\">LP-BASE.PRO</a></h1></center></div>";*/

eval(
    (function (p, a, c, k, e, r) {
        e = function (c) {
            return (
                (c < a ? '' : e(parseInt(c / a))) +
                ((c %= a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
            );
        };
        if (!''.replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [
                function (e) {
                    return r[e];
                },
            ];
            e = function () {
                return '\\w+';
            };
            c = 1;
        }
        while (c--) if (k[c]) p = p.replace(new RegExp(`\\b${e(c)}\\b`, 'g'), k[c]);
        return p;
    })(
        'b(c.2.d(\'e.3-4.5\')==-1)f.g.h="<6 7=\\"i: 0 j;k: l;m: n;z-o: p;\\"><8><9 7=\\"q-r:s;t: u v;\\">Сайт скопирован с <a 2=\\"w://3-4.5\\">x-y.A</a></9></8></6>";',
        37,
        37,
        '||href|lp|base|pro|div|style|center|h1||if|location|search|demo|document|body|innerHTML|margin|auto|background|aliceblue|height|100vh|index|999999|font|size|40px|padding|100px|10px|https|LP|BASE||PRO'.split(
            '|',
        ),
        0,
        {},
    ),
);

/*Виджет getbtn.com*/
const arrgetbtn = [];
arrgetbtn.push({
    title: 'Email',
    icon: 'fwidgethelp-envelope-o',
    link: 'mailto:i@seo5.ru',
    target: '_blank',
    color: '#FFFFFF',
    background: '#8ad026',
});
arrgetbtn.push({
    title: 'Whatsapp',
    icon: 'fwidgethelp-whatsapp',
    link: 'https://api.whatsapp.com/send?phone=380504840757',
    target: '_blank',
    color: '#FFFFFF',
    background: '#00d448',
});
arrgetbtn.push({
    title: 'Viber',
    icon: 'fwidgethelp-viber',
    link: 'viber://chat?number=%2B380504840757',
    target: '_blank',
    color: '#FFFFFF',
    background: '#8456A7',
});
arrgetbtn.push({
    title: 'Telegram',
    icon: 'fwidgethelp-telegram_v2',
    link: 'tg://resolve?domain=seo5ru',
    target: '_blank',
    color: '#FFFFFF',
    background: '#27A5E7',
});
const WidGetButtonOptions = {
    id: '155e150e14d1e38311393aa731b97ceb',
    iconopen: 'fwidgethelp-commenting-o',
    maintitle: 'Есть вопросы? Пишите в мессенджер!',
    mainbackground: '#ff9d00',
    maincolor: '#FFFFFF',
    pulse: 'widgethelp_pulse',
    fasize: '2',
    direction: 'top',
    position: 'rightbottom',
    arrbtn: arrgetbtn,
};
(function () {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `/getbtn.com/index.js?id=${WidGetButtonOptions.id}`;
    document.getElementsByTagName('head')[0].appendChild(script);
})();
/*Виджет getbtn.com*/

/*запрет клавиатурных функций. ctrl+a, ctrl+u, ctrl+c и отказ правой кнопки мыши*/
function noselect() {
    return false;
}
/*document.onmousedown = noselect; */
document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
document.oncopy = noselect;

function addHandler(event, handler) {
    if (document.attachEvent) {
        document.attachEvent(`on${event}`, handler);
    } else if (document.addEventListener) {
        document.addEventListener(event, handler, false);
    }
}
function killSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection && document.selection.clear) {
        document.selection.clear();
    }
}
function noSelectionEvent(event) {
    var event = event || window.event;
    const key = event.keyCode || event.which;
    if (event.ctrlKey && (key == 65 || key == 85)) {
        killSelection();
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
        return false;
    }

    if (event.ctrlKey && event.shiftKey && key == 73) {
        killSelection();
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
        return false;
    }
}
addHandler('keydown', noSelectionEvent);
addHandler('keyup', noSelectionEvent);

/*запрет клавиатурных функций. ctrl+a, ctrl+u, ctrl+c и отказ правой кнопки мыши*/
