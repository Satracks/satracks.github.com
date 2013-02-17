var lbl_coming, lbl_and, lbl_event_date, lbl_title;
var lbl_days = new Array();
var lbl_hours = new Array();
var lbl_minutes = new Array();
var lbl_seconds = new Array();
var _progress_updated = false;
var txt_text_1, txt_text_2;

function setLanguage(lang)
{
    if (lang == 'ru')
    {
        lbl_coming = 'Запуск через';
        lbl_and = 'и';
        lbl_days[0] = 'дней';
        lbl_days[1] = 'день';
        lbl_days[2] = 'дня';
        lbl_hours[0] = 'часов';
        lbl_hours[1] = 'час';
        lbl_hours[2] = 'часа';
        lbl_minutes[0] = 'минут';
        lbl_minutes[1] = 'минуту';
        lbl_minutes[2] = 'минуты';
        lbl_seconds[0] = 'секунд';
        lbl_seconds[1] = 'секунду';
        lbl_seconds[2] = 'секунды';
        lbl_event_date = "В разработке...";
        lbl_title = "Satracks это свободное расширяемое ПО с открытым кодом для отслеживания положений ИСЗ.";
        txt_text_1 = '<h1>Ученые</h1><p>Satracks это удобный инструмент для физиков, имеющих дело с искусственными спутниками Земли. Satracks позволяет получать данные и положениях спутников в заданные моменты времени или при заданных условиях (значение истинной аномалии, геоцентрических или других  координат и т.п.) в различных системах координат.</p><p>Благодаря тому, что Satracks это программа с открытым исходным кодом и открытой архитектурой, можно расширять ее функционал плагинами. Это позволяет расширять функциональность для дополнительной обработки спутниковых данных.</p><p>Satracks также позволяет сохранять результаты обработки данных в различных форматах: текстовые файлы с заданным форматом, изображения.</p>';
        txt_text_2 = '<h1>Астрономы и радиолюбители</h1><p>Satracks это удобный инструмент для радиолюбителей и астрономов, потому что он позволяет определять координаты спутников в топоцентрических, геоцентрических системах, проецировать орбиту и положение спутника на поверхность Земли, определять положения спутника в географических  координатах, определять находится ли спутник в области радиовидимости и т.д.</p><p>Более того, Satracks позволяет автоматизировать тот или иной функционал. Благодаря тому, что Satracks это ПО с открытым кодом и так называемой открытой архитектурой, возможно расширять и расширять его возможности.</p>';
    } else {
        lbl_coming = 'Coming in';
        lbl_and = 'and';
        lbl_days[0] = 'days';
        lbl_days[1] = 'day';
        lbl_days[2] = 'days';
        lbl_hours[0] = 'hours';
        lbl_hours[1] = 'hour';
        lbl_hours[2] = 'hours';
        lbl_minutes[0] = 'minutes';
        lbl_minutes[1] = 'minut';
        lbl_minutes[2] = 'minutes';
        lbl_seconds[0] = 'seconds';
        lbl_seconds[1] = 'second';
        lbl_seconds[2] = 'seconds';
        lbl_event_date = "Under construction...";
        lbl_title = "Satracks is satellite tracking software. It is free, open source and expandable. It is useful tool for...";
        txt_text_1 = '<h1>Scientists</h1><p>Satracks is useful tool for physicists, who deals with the satellites. Satracks allows to obtain the data set about the satellite positions in the given moments of time or under the given conditions (the value of the true anomaly, the geocentrical or some other coordinates etc.) in the different coordinates systems.</p><p>Due to the fact, that the Satracks is the open source and expandable software, it is possible to expand its functionality with the pulgins. It allows to add some functionality for the additional computing of the data.</p><p>Satracks also allows to save the results of the data computing in the different formats: in the text files with the specified format, in the images.</p>';
        txt_text_2 = '<h1>Astronomers & hams</h1><p>Satracks is useful for hams and astronomers because it allows to determine the coordinates of the satellites in the topocentrical, geocentrical coordinates system, to project the satellite orbit and its position onto the Earth surface, to determine the satellite position in the geographical coordinates, to define whether the satellite selected is in the area of radio visibility and so on.</p><p>Moreover, Satracks allows to automate a lot of the functions. Due to the fact, that Satracks is open source software and the software with so-called open architecture, it is possible to expand and expand its functionality.</p>';
    }
    document.getElementById('timer-line3').innerHTML = lbl_event_date;
    document.getElementById('title').innerHTML = lbl_title;

    document.getElementById('left-column').innerHTML = txt_text_1;
    document.getElementById('right-column').innerHTML = txt_text_2;

    document.getElementById('ru').width = lang == 'ru' ? 70 : 60;
    document.getElementById('en').width = lang == 'en' ? 70 : 60;

    updateTime();
}

var percents = 0;

function updateTime()
{
    /*var box = document.getElementById('timer');
    var box2 = document.getElementById('timer-line2');
    if (!box || !box2) return;

    var curDate = new Date();
    var curSeconds = curDate.getTime();

    var reqDate = new Date(2011,3,12,0,0,0);
    var reqSeconds = reqDate.getTime();

    var diff = (reqSeconds - curSeconds) / 1000;
    updateProgress(1 - diff / (86400 * 2 * 365));

    var sec_per = 365*86400;
    var years = 0;
    while (diff >= sec_per) {years++; diff-=sec_per;}
    var days = 0;
    sec_per = 86400;
    while (diff >= sec_per) {days++; diff-=sec_per;}
    sec_per = 3600;
    var hours = 0;
    while (diff>=sec_per) {hours++; diff-=sec_per;}
    sec_per = 60;
    var minutes = 0;
    while (diff>=sec_per) {minutes++; diff-=sec_per;}
    while (minutes >= 60) {hours++; minutes-=60;}

    var seconds = Math.ceil(diff);
    while (seconds >= 60) { seconds -= 60; minutes++; }

    var _days = days > 0 ? days + " " + lbl_days[get_label_index(days)] + " " : "";
    var _hours = hours > 0 ? hours + " " + lbl_hours[get_label_index(hours)] + " " : "";
    var _minutes = minutes > 0 ? minutes + " " + lbl_minutes[get_label_index(minutes)] : "";
    var _seconds = seconds > 0 ? lbl_and + " " + seconds + " " + lbl_seconds[get_label_index(seconds)] : "&nbsp;";

    box.innerHTML = new String(lbl_coming + " " + _days + " " + _hours + " " + _minutes);
    box2.innerHTML = new String(_seconds);*/

    percents++;// += 100.0 / 24;
    if (percents > 20) percents = 0;
    //alert(percents);
    updateProgress(percents);

    setTimeout('updateTime()', 400);
}

function get_label_index(num)
{
    var hundred = Math.floor(num / 100);
    num -= hundred * 100;
    var dec = Math.floor(num / 10);
    var unit = num - dec * 10;

    var res = 0;

    if (dec == 1) {
        res = 0;
    } else {
        switch (unit) {
            case 1: res = 1;
            break;
            case 2: case 3: case 4: res = 2;
            break;
            default: res = 0;
        }
    }

    return res;
}

function updateProgress(index)
{
    //if (_progress_updated) return;

    var box = document.getElementById('progress-bar');
    box.innerHTML = "";

    for (i=0; i<index; i++)
    {
        _addProgressSegment(0);
    }

    // Additional bar
    /*percents = (100.0 / 24 - percents * 24) / 100;
    if (percents > 1E-2)
        _addProgressSegment(Math.ceil(percents * 80));

    _progress_updated = true;*/
}

function _addProgressSegment(width)
{
    var box = document.getElementById('progress-bar');
    box.innerHTML += '<div class="progress"'+(width>0 ? ' style="width: '+width+'px;"': '')+'></div>';
}

function  getParam(name) {
  var q = document.location.search;
  var i = q.indexOf(name + '=');

  if (i == -1) {
    return false;
  }

  var r = q.substr(i + name.length + 1, q.length - i - name.length - 1);

  i = r.indexOf('&');

  if (i != -1) {
    r = r.substr(0, i);
  }

  return r.replace(/\+/g, ' ');
}

function init()
{
    var _lang = getParam('lang');
    var lang = (_lang != 'ru' && _lang != 'en') ? 'en' : _lang;
    setLanguage(lang);
}
