// $Id: script.js,v 1.1.8.1 2009/06/19 02:36:38 shannonlucas Exp $

/**
 * @file script.js
 * General JavaScript functions for the theme. A default file is required to
 * get Drupal to automatically load jQuery.
 */
/**
 * jquery.simpletip 1.3.1. A simple tooltip plugin
 * 
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under GPLv3
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Launch  : February 2009
 * Version : 1.3.1
 * Released: February 5, 2009 - 11:04am
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([3-9a-zB-Z]|1\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($){6 Z(f,3){4 7=n;f=b(f);4 5=b(document.createElement(\'div\')).B(3.10).B((3.p)?3.11:\'\').B((3.C)?3.12:\'\').13(3.q).appendTo(f);a(!3.14)5.t();o 5.r();a(!3.C){f.hover(6(c){7.t(c)},6(){7.r()});a(!3.p){f.mousemove(6(c){a(5.D(\'N\')!==\'u\')7.E(c)})}}o{f.click(6(c){a(c.15===f.16(0)){a(5.D(\'N\')!==\'u\')7.r();o 7.t()}});b(v).mousedown(6(c){a(5.D(\'N\')!==\'u\'){4 17=(3.O)?b(c.15).parents(\'.5\').andSelf().filter(6(){d n===5.16(0)}).length:0;a(17===0)7.r()}})};b.18(7,{getVersion:6(){d[1,2,0]},getParent:6(){d f},getTooltip:6(){d 5},getPos:6(){d 5.i()},19:6(8,9){4 e=f.i();a(s 8==\'F\')8=G(8)+e.k;a(s 9==\'F\')9=G(9)+e.l;5.D({k:8,l:9});d 7},t:6(c){3.1a.m(7);7.E((3.p)?P:c);Q(3.1b){g\'H\':5.fadeIn(3.I);h;g\'1c\':5.slideDown(3.I,7.E);h;g\'1d\':3.1e.m(5,3.I);h;w:g\'u\':5.t();h};5.B(3.R);3.1f.m(7);d 7},r:6(){3.1g.m(7);Q(3.1h){g\'H\':5.fadeOut(3.J);h;g\'1c\':5.slideUp(3.J);h;g\'1d\':3.1i.m(5,3.J);h;w:g\'u\':5.r();h};5.removeClass(3.R);3.1j.m(7);d 7},update:6(q){5.13(q);3.q=q;d 7},1k:6(1l,K){3.1m.m(7);5.1k(1l,K,6(){3.1n.m(7)});d 7},L:6(8,9){4 1o=8+5.S();4 1p=9+5.T();4 1q=b(v).width()+b(v).scrollLeft();4 1r=b(v).height()+b(v).scrollTop();d[(1o>=1q),(1p>=1r)]},E:6(c){4 x=5.S();4 y=5.T();a(!c&&3.p){a(3.j.constructor==Array){8=G(3.j[0]);9=G(3.j[1])}o a(b(3.j).attr(\'nodeType\')===1){4 i=b(3.j).i();8=i.k;9=i.l}o{4 e=f.i();4 z=f.S();4 M=f.T();Q(3.j){g\'l\':4 8=e.k-(x/2)+(z/2);4 9=e.l-y;h;g\'bottom\':4 8=e.k-(x/2)+(z/2);4 9=e.l+M;h;g\'k\':4 8=e.k-x;4 9=e.l-(y/2)+(M/2);h;g\'right\':4 8=e.k+z;4 9=e.l-(y/2)+(M/2);h;w:g\'w\':4 8=(z/2)+e.k+20;4 9=e.l;h}}}o{4 8=c.pageX;4 9=c.pageY};a(s 3.j!=\'object\'){8=8+3.i[0];9=9+3.i[1];a(3.L){4 U=7.L(8,9);a(U[0])8=8-(x/2)-(2*3.i[0]);a(U[1])9=9-(y/2)-(2*3.i[1])}}o{a(s 3.j[0]=="F")8=1s(8);a(s 3.j[1]=="F")9=1s(9)};7.19(8,9);d 7}})};b.fn.V=6(3){4 W=b(n).eq(s 3==\'number\'?3:0).K("V");a(W)d W;4 X={q:\'A simple 5\',C:1t,O:1t,14:Y,j:\'w\',i:[0,0],L:Y,p:Y,1b:\'H\',I:1u,1e:P,1h:\'H\',J:1u,1i:P,10:\'5\',R:\'active\',11:\'p\',12:\'C\',focusClass:\'O\',1a:6(){},1f:6(){},1g:6(){},1j:6(){},1m:6(){},1n:6(){}};b.18(X,3);n.each(6(){4 el=new Z(b(n),X);b(n).K("V",el)});d n}})();',[],93,'|||conf|var|tooltip|function|self|posX|posY|if|jQuery|event|return|elemPos|elem|case|break|offset|position|left|top|call|this|else|fixed|content|hide|typeof|show|none|window|default|tooltipWidth|tooltipHeight|elemWidth||addClass|persistent|css|updatePos|string|parseInt|fade|showTime|hideTime|data|boundryCheck|elemHeight|display|focus|null|switch|activeClass|outerWidth|outerHeight|overflow|simpletip|api|defaultConf|true|Simpletip|baseClass|fixedClass|persistentClass|html|hidden|target|get|check|extend|setPos|onBeforeShow|showEffect|slide|custom|showCustom|onShow|onBeforeHide|hideEffect|hideCustom|onHide|load|uri|beforeContentLoad|onContentLoad|newX|newY|windowWidth|windowHeight|String|false|150'.split('|'),0,{}));
$(document).ready(function(){
    $("span.popup").each(function(i){
        //console.log($(this).attr('title'));
        $(this).simpletip({
            content: $(this).attr('title'),
            offset: [0, 18],
            fixed: false,
            showTime: 10,
            hideTime: 10
        }); 
        $(this).attr('title', "");
    });
});

function flip(targetID) {
  $("#"+targetID).toggle();
}

function toggleAll(targetID) {
  $("#"+targetID+" .hidex").toggle("slow");
}
function toggle(targetID) {
  $("#"+targetID+" .toggle").toggle("slow");
}

function toggleSpoilers() {
  $(".spoiler").toggleClass("reveal");
}
//SCRIPTS FOR DISPLAYING A MODEL DIALOG CONTAINING SOUND FILES
function showModal(char) {
    $('#stroke').attr('src','images/hiragana/'+char+'.gif');
    var fmt = '.ogg';
    if (navigator.userAgent.match(/msie/i)) {
        fmt = '.mp3';
    }
    $('#clip').attr('src','audio/'+char+fmt).load();
    $('#basic-modal-content').modal({overlayClose:true});
}
function playClip(char) {
    var fmt = '.ogg';
    if (navigator.userAgent.match(/msie/i)) {
        fmt = '.mp3';
    }
    $('#clip').attr('src','audio/'+char+fmt).load();
    $('#clip')[0].play();
}
function playclip_inline(char) {
    var fmt = '.ogg';
    if (navigator.userAgent.match(/msie/i)) {
        fmt = '.mp3';
    }
    $('#clip_inline').attr('src','audio/'+char+fmt).load();
    $('#clip_inline')[0].play();
}
$(document).ready(function() {
    $('.playIcon').find('img').hover(
        function () {
            if ($(this).attr('src') == 'images/play.png') {
                $(this).attr('src', 'images/play_hover.png');
            }
        },
        function () {
            if ($(this).attr('src') == 'images/play_hover.png') {
                $(this).attr('src', 'images/play.png');
            }
        }
    );

    $('.playIcon').click(
        function () {
            $(this).find('img').attr('src','images/play_pressed.png').addClass('playing');
            playclip_inline($(this).attr('href'));
            return false;
        }
    );

    $('#clip_inline').on("ended", function() {
        $('.playing').attr('src','images/play.png').removeClass('playing'); 
    }, true);

    // 语音相关变量
    var jp_text = null;
    var jp_speaking = false;
    var jp_index = null;

    function initVoice() {
        console.log('loading voice')
        if (jp_text) {
            console.log('voice already loaded')
            return
        }
        var voices = window.speechSynthesis.getVoices();
        for (var i = 0; i < voices.length; i++) {
            var cur = voices[i];
            if (cur.lang == "ja-JP") {
                jp_index = i;
                break;
            }
        }
        if (jp_index === null) {
            return;
        }

        jp_text = new SpeechSynthesisUtterance();
        jp_text.voice = voices[jp_index];
        // 调节音量
        // jp_text.volume = 1;
        // 调节语速
        jp_text.rate = 0.6;
        jp_text.onend = function() {
            // console.log('播放完成');
            jp_speaking = false;
        }
    }

    initVoice();

    // 初始化语音引擎
    window.speechSynthesis.addEventListener("voiceschanged", function() {
        initVoice()
    });


    // 定义函数

    function jp_speak(text) {

        if (jp_text) {
            jp_text.text = text;
            if (jp_speaking) {
                // 再次点击则取消播放
                window.speechSynthesis.cancel();
                jp_speaking = false;
                return;
            }
            window.speechSynthesis.speak(jp_text);
            jp_speaking = true;
            return;
        }
        alert('当前系统不支持日语发音');
    }

    function html2text(html) {
        // 再去掉代码中单词提示
        var reg = /<div\sclass="tooltip.+?<\/div>/gi
        // 外部套上一层div，然后转换取text
        html = html.replaceAll(reg, '');
        return $('<div>' + html + '<div>').text();
    }

    // 绑定事件

    $("ol li, ul li").on('click', function(event) {
        // event.preventDefault();
        /* Act on the event */

        var $this = $(this);

        // console.log(event.target.tagName);

        if (event.target.tagName == 'A' || $this.children('a').length > 0) {
            return;
        }

        if (event.target.tagName == 'SPAN') {
            return;
        }

        var text = $this.text();

        // 单词
        // 先根据“ - ”拆分，然后再删掉“【”和“（”内容
        if (event.target.tagName == 'LI' && text.indexOf(' - ') > -1 && $this.children().length <= 0){

            text = text.split(' - ')[0];

            if(text.indexOf(' 【') > -1 ){
                // 取【】外的发音
                // text = text.split(' 【')[0];
                // 取【】内的发音
                text = text.split('【')[1];
                text = text.split('】')[0];
                text = text.replaceAll('・','');
            }

            if(text.indexOf(' （') > -1 ){            
                text = text.split(' （')[0];
            }

            console.log('单词：' + text);
            jp_speak(text);
            return false;
        }

        // 句子
        var html = $this.html();

        var split_arr = [' = ', '＝', '→'];

        for (var i = 0; i < split_arr.length; i++) {
            var str = split_arr[i];
            if (html.indexOf(str) > -1) {
                var arr = html.split(str);
                // 获取最后一个 → 后面部分
                html = arr[arr.length - 1];
            }
        }

        if (html.indexOf('<br>') > -1) {
            // 去掉br后面的部分
            html = html.split('<br>')[0];
        }

        text = html2text(html);
        console.log('句子：' + text);
        jp_speak(text);
        // 阻止事件继续冒泡
        return false;
    });



    $("p").on('click', function(event) {
        // event.preventDefault();
        /* Act on the event */

        if (event.target.tagName == 'SPAN') {
            return;
        }

        var html = $(this).html();

        if (html.indexOf('<br>') > -1) {

            // 先去掉br后面的部分
            html = html.split('<br>')[0];

            // 再去掉：前面部分
            if (html.indexOf('：') > -1) {
                html = html.split('：')[1];
            }

            // 去掉提示，获取全部文字，播放朗诵语音
            text = html2text(html);
            console.log('句子：' + text);
            jp_speak(text);
            return;
        }

    });

    $("table.table-condensed td").on('click', function(event) {
        // event.preventDefault();
        /* Act on the event */

        var html = $(this).html();

        if (html.indexOf('→') > -1) {
            // 去掉br后面的部分
            html = html.split('→')[1];
        }

        if (html.indexOf('<br>') > -1) {
            // 去掉br后面的部分
            html = html.split('<br>')[0];
        }

        // 掉代码中单词提示
        text = html2text(html);
        console.log('单词：' + text);
        jp_speak(text);
        // 阻止事件继续冒泡
        return false;
    });


    $("span.popup").on('click', function(event) {
        // event.preventDefault();
        /* Act on the event */

        var html = $(this).html();
        // 掉代码中单词提示
        text = html2text(html);
        console.log('单词：' + text);
        jp_speak(text);
        // 阻止事件继续冒泡
        return false;
    });

});


