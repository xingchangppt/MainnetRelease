// JavaScript Document
function switchTab(a, b, c, d, e) {
    try {
        for (i = 0; i < c; i++) {
            var f = document.getElementById("Tab_" + a + "_" + i),
            g = document.getElementById("List_" + a + "_" + i);
            if (i != b) {
                f.className = e;
                g.style.display = "none"
            }
        }
        try {
            for (ind = 0; ind < CachePic[a][b].length; ind++) document.getElementById(a + "_pic_" + b + "_" + ind).src = CachePic[a][b][ind]
        } catch(h) {}
        document.getElementById("Tab_" + a + "_" + b).className = d;
        document.getElementById("List_" + a + "_" + b).style.display = ""
    } catch(j) {}
}
function fAddClass(a, b) {
    if (!b) throw Error("XClass \u4e0d\u80fd\u4e3a\u7a7a!");
    if (a.className != "") {
        a.className = a.className.replace(RegExp("\\b" + b + "\\b\\s*", ""), "");
        var c = a.className.replace(/^\s+|\s+$/g, "");
        a.className = c == "" ? b: c + " " + b
    } else a.className = b
}
function fRemoveClass(a, b) {
    if (!b) throw Error("XClass \u4e0d\u80fd\u4e3a\u7a7a!");
    var c = a.className.replace(/^\s+|\s+$/g, "");
    if (c != "") a.className = c.replace(RegExp("\\b" + b + "\\b\\s*", ""), "")
}
var pre_searchtype = "search";
function changeSearchType(a) {
    if ($("searchType_" + pre_searchtype)) $("searchType_" + pre_searchtype).className = "";
    pre_searchtype = a;
    $("searchType_" + a).className = "currA";
    setResType(a);
    if ($("searchbox1").value == "\u641c\u7d22\u8d85\u8fc710\u4e07\u90e8\u5f71\u89c6\u5185\u5bb9") $("searchbox1").value = "";
    else $("searchbox1").value = $("searchbox1").value + "";
    $("searchbox1").focus()
}
function $(a) {
    return document.getElementById(a)
}
function xlAjax(a, b, c) {
    return document.getElementById("iframe_proxy").contentWindow.pxlAjax(a, b, c)
}
function showRecommend(a) {
    a = eval(a.responseText);
    var b = "";
    for (i = 0; i < a.length; i++) b += '<li><a href="' + a[i].vod_link + '" class="playpic" title="\u70b9\u51fb\u64ad\u653e&#13;' + a[i].title + '"><img src="' + a[i].poster + '" /><em></em></a><a href="' + a[i].vod_link + '" title="\u70b9\u51fb\u64ad\u653e&#13;' + a[i].title + '">' + a[i].title + "</a></li>";
    document.getElementById("kankan_recom").innerHTML = b
}
function getParameter(a) {
    a = RegExp("[?&]" + a + "=([^&]+)", "g").exec(document.location.search);
    var b = null;
    if (null != a) b = decodeURIComponent(a[1]);
    return b
}
var MiniSite = {};
MiniSite.Browser = {
    ie: /msie/.test(window.navigator.userAgent.toLowerCase()),
    moz: /gecko/.test(window.navigator.userAgent.toLowerCase()),
    opera: /opera/.test(window.navigator.userAgent.toLowerCase()),
    safari: /safari/.test(window.navigator.userAgent.toLowerCase())
};
MiniSite.JsLoader = {
    load: function(a, b, c) {
        var d = document.createElement("script");
        d.setAttribute("charset", b);
        d.setAttribute("type", "text/javascript");
        d.setAttribute("src", a);
        document.getElementsByTagName("head")[0].appendChild(d);
        if (MiniSite.Browser.ie) d.onreadystatechange = function() {
            if (this.readyState == "loaded" || this.readyState == "complete") setTimeout(function() {
                try {
                    c()
                } catch(e) {}
            },
            50)
        };
        else if (MiniSite.Browser.moz) d.onload = function() {
            setTimeout(function() {
                try {
                    c()
                } catch(e) {}
            },
            50)
        };
        else setTimeout(function() {
            try {
                c()
            } catch(e) {}
        },
        50)
    }
};
if (typeof deconcept == "undefined") var deconcept = {};
if (typeof deconcept.util == "undefined") deconcept.util = {};
if (typeof deconcept.SWFObjectUtil == "undefined") deconcept.SWFObjectUtil = {};
deconcept.SWFObject = function(a, b, c, d, e, f, g, h, j, k, l) {
    if (document.createElement && document.getElementById) {
        this.DETECT_KEY = l ? l: "detectflash";
        this.skipDetect = true;
        this.params = {};
        this.variables = {};
        this.attributes = [];
        a && this.setAttribute("swf", a);
        b && this.setAttribute("id", b);
        c && this.setAttribute("width", c);
        d && this.setAttribute("height", d);
        e && this.setAttribute("version", new deconcept.PlayerVersion(e.toString().split(".")));
        this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion(this.getAttribute("version"), 
        g);
        f ? this.addParam("bgcolor", f) : this.addParam("wmode", "transparent");
        this.addParam("quality", h ? h: "high");
        this.setAttribute("useExpressInstall", g);
        this.setAttribute("doExpressInstall", false);
        this.setAttribute("xiRedirectUrl", j ? j: window.location);
        this.setAttribute("redirectUrl", "");
        k && this.setAttribute("redirectUrl", k)
    }
};
deconcept.SWFObject.prototype = {
    setAttribute: function(a, b) {
        this.attributes[a] = b
    },
    getAttribute: function(a) {
        return this.attributes[a]
    },
    addParam: function(a, b) {
        this.params[a] = b
    },
    getParams: function() {
        return this.params
    },
    addVariable: function(a, b) {
        this.variables[a] = b
    },
    getVariable: function(a) {
        return this.variables[a]
    },
    getVariables: function() {
        return this.variables
    },
    getVariablePairs: function() {
        var a = [],
        b,
        c = this.getVariables();
        for (b in c) a.push(b + "=" + c[b]);
        return a
    },
    getSWFHTML: function() {
        var a = "";
        if (navigator.plugins && 
        navigator.mimeTypes && navigator.mimeTypes.length) {
            this.getAttribute("doExpressInstall") && this.addVariable("MMplayerType", "PlugIn");
            a = '<embed type="application/x-shockwave-flash" src="' + this.getAttribute("swf") + '" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '"';
            a += ' id="' + this.getAttribute("id") + '" name="' + this.getAttribute("id") + '" ';
            var b = this.getParams(),
            c;
            for (c in b) a += [c] + '="' + b[c] + '" ';
            c = this.getVariablePairs().join("&");
            if (c.length > 0) a += 'flashvars="' + c + '"';
            a += 
            ' pluginspage="http://www.macromedia.com/go/getflashplayer"/>'
        } else {
            this.getAttribute("doExpressInstall") && this.addVariable("MMplayerType", "ActiveX");
            a = '<object id="' + this.getAttribute("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0">';
            a += '<param name="movie" value="' + this.getAttribute("swf") + '" />';
            b = this.getParams();
            for (c in b) a += '<param name="' + c + '" value="' + b[c] + '" />';
            c = this.getVariablePairs().join("&");
            if (c.length > 0) a += '<param name="flashvars" value="' + c + '" />';
            a += "</object>"
        }
        return a
    },
    write: function(a) {
        if (this.getAttribute("useExpressInstall")) if (this.installedVer.versionIsValid(new deconcept.PlayerVersion([6, 0, 65])) && !this.installedVer.versionIsValid(this.getAttribute("version"))) {
            this.setAttribute("doExpressInstall", true);
            this.addVariable("MMredirectURL", escape(this.getAttribute("xiRedirectUrl")));
            document.title = 
            document.title.slice(0, 47) + " - Flash Player Installation";
            this.addVariable("MMdoctitle", document.title)
        }
        if (this.skipDetect || this.getAttribute("doExpressInstall") || this.installedVer.versionIsValid(this.getAttribute("version"))) { (typeof a == "string" ? document.getElementById(a) : a).innerHTML = this.getSWFHTML();
            return true
        } else this.getAttribute("redirectUrl") != "" && document.location.replace(this.getAttribute("redirectUrl"));
        return false
    }
};
deconcept.SWFObjectUtil.getPlayerVersion = function(a, b) {
    var c = new deconcept.PlayerVersion([0, 0, 0]);
    if (navigator.plugins && navigator.mimeTypes.length) {
        var d = navigator.plugins["Shockwave Flash"];
        if (d && d.description) c = new deconcept.PlayerVersion(d.description.replace(/([a-z]|[A-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."))
    } else {
        try {
            d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            for (var e = 15; e > 6; e--) try {
                d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + e);
                c = new deconcept.PlayerVersion([e, 
                0, 0]);
                break
            } catch(f) {}
        } catch(g) {}
        if (a && c.major > a.major) return c;
        if (!a || (a.minor != 0 || a.rev != 0) && c.major == a.major || c.major != 6 || b) try {
            c = new deconcept.PlayerVersion(d.GetVariable("$version").split(" ")[1].split(","))
        } catch(h) {}
    }
    return c
};
deconcept.PlayerVersion = function(a) {
    this.major = parseInt(a[0]) != null ? parseInt(a[0]) : 0;
    this.minor = parseInt(a[1]) || 0;
    this.rev = parseInt(a[2]) || 0
};
deconcept.PlayerVersion.prototype.versionIsValid = function(a) {
    if (this.major < a.major) return false;
    if (this.major > a.major) return true;
    if (this.minor < a.minor) return false;
    if (this.minor > a.minor) return true;
    if (this.rev < a.rev) return false;
    return true
};
deconcept.util = {
    getRequestParameter: function(a) {
        var b = document.location.search || document.location.hash;
        if (b) {
            a = b.indexOf(a + "=");
            var c = b.indexOf("&", a) > -1 ? b.indexOf("&", a) : b.length;
            if (b.length > 1 && a > -1) return b.substring(b.indexOf("=", a) + 1, c)
        }
        return ""
    }
};
if (Array.prototype.push == null) Array.prototype.push = function(a) {
    this[this.length] = a;
    return this.length
};
var getQueryParamValue = deconcept.util.getRequestParameter,
FlashObject = deconcept.SWFObject,
SWFObject = deconcept.SWFObject;
function flv_init() {
    document.getElementById("PlayerCtrl").flv_setPlayeUrl([MediaVideoConfigs.items[0].videoUrl]);
    document.getElementById("PlayerCtrl").flv_setFirstFrame(MediaVideoConfigs.items[0].coverUrl)
}
function flv_onPlayStart() {
    img = new Image;
    img.src = "http://kkpgv.xunlei.com/?u=www_top_video_play"
}
function prestart(a) {
    var b = 0,
    c = 0,
    d = false,
    e = setInterval(function() {
        if (typeof(document.getElementById("PlayerCtrl") == "object")) {
            PLAYCTRL = document.getElementById("PlayerCtrl");
            try {
                if (a == "") flv_init();
                else {
                    document.getElementById("PlayerCtrl").flv_setPlayeUrl([a]);
                    document.getElementById("PlayerCtrl").flv_setFirstFrame(adver.coverUrl)
                }
                clearInterval(e)
            } catch(f) {
                c += 1;
                b += 100;
                b > 1E4 && clearInterval(e);
                if (c > 3 && !d) {
                    printSwf(1);
                    d = true;
                    c = 0
                }
            }
        } else {
            b += 100;
            b > 2E4 && clearInterval(e)
        }
    },
    100)
}
function printSwf(a) {
    a = a == 1 ? new SWFObject("http://images.movie.xunlei.com/www_swf/PlayerCtrlnew.swf?fullscreenbtn=1&id=0&channel=ad&width=267&height=178&autostart=0&refer=www&" + Math.random(), "PlayerCtrl", "267", "178", "7", "#000000") : new SWFObject("http://images.movie.xunlei.com/www_swf/PlayerCtrlnew.swf?fullscreenbtn=1&id=0&channel=ad&width=267&height=178&autostart=0&refer=www", "PlayerCtrl", "267", "178", "7", "#000000");
    a.addParam("allowScriptAccess", "always");
    a.addParam("allowFullScreen", "true");
    a.addParam("quality", 
    "high");
    a.addParam("wmode", "transparent");
    a.write("_player")
}
function showMediaTitle(a, b) {
    document.getElementById("MediaTitle").innerHTML = '<a href="' + a + '" title="' + b + '" class="playad_tt_link">' + b + '</a><a href="' + a + '" title="" class="playad_tt_more">\u8be6\u7ec6&gt;&gt;</a>'
}
function showBanner(a, b) {
    document.getElementById("bannerad").innerHTML = '<a href="' + b + '"><img src="' + a + '" alt="" title="" /></a>'
}
function checkAndShowSeedsVideo() {
    try {
        if (MediaVideoConfigs.items[0].videoUrl && MediaVideoConfigs.items[0].coverUrl && MediaVideoConfigs.items[0].clickUrl && MediaVideoConfigs.items[0].title) {
            printSwf();
            prestart("");
            showMediaTitle(MediaVideoConfigs.items[0].clickUrl, MediaVideoConfigs.items[0].title);
            showBanner(MediaVideoConfigs.items[0].bannerUrl, MediaVideoConfigs.items[0].bannerLink)
        } else {
            printSwf();
            prestart(adver.seedUrl);
            showMediaTitle(adver.clickUrl, adver.adTitle);
            showBanner(adver.adPic, adver.adPicUrl)
        }
    } catch(a) {
        printSwf();
        prestart(adver.seedUrl);
        showMediaTitle(adver.clickUrl, adver.adTitle);
        showBanner(adver.adPic, adver.adPicUrl)
    }
}
function getLen(a) {
    for (var b = 0, c = a.length, d = 0; d < c; d++) {
        b++;
        a.charCodeAt(d) > 256 && b++
    }
    return b
}
function subLen(a, b, c) {
    for (var d = 0, e = 0, f = b; f < a.length; f++) {
        if (a.charCodeAt(f) > 256) {
            d++;
            e++
        } else {
            d++;
            e += 0.5
        }
        if (e >= c - b + 1) break
    }
    return a.substr(b, d)
}
function print_swflogo() {
    var a = new SWFObject("http://images.movie.xunlei.com/www_5_6/swf/logo_new.swf?date=20110214", "swflogo", "290", "99", "7", "");
    a.addParam("movie", "http://images.movie.xunlei.com/www_5_6/swf/logo_new.swf?date=20110214");
    a.addParam("quality", "high");
    a.write("_swflogo")
}
String.prototype.LTrim = function() {
    return LTrim(this)
};
function LTrim(a) {
    var b;
    for (b = 0; b < a.length; b++) if (a.charAt(b) != " " && a.charAt(b) != " ") break;
    return a = a.substring(b, a.length)
}
var g_restype = "search";
function setResType(a) {
    g_restype = a
}
function check() {
    var a;
    a = document.getElementById("searchbox1").value;
    a = strip_tags(a.LTrim());
    if (a == "\u641c\u7d22\u8d85\u8fc710\u4e07\u90e8\u5f71\u89c6\u5185\u5bb9" || a == "") {
        alert("\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57!");
        document.getElementById("searchbox1").value = "";
        document.getElementById("searchbox1").focus();
        return false
    }
    a = encodeURIComponent(a);
    a = "http://search.xunlei.com/search.php?keyword=" + a;
    var b = new Date;
    b = parseInt(b.getHours().toString() + b.getMinutes().toString() + b.getSeconds().toString() / 
    3);
    img = new Image;
    var c = getPeerid(),
    d = encodeURIComponent(document.location.href);
    img.src = c ? "http://kkpgv.xunlei.com/?u=kankansearch&u1=" + d + "&u2=" + c + "&rd=" + (Math.floor(Math.random() * 999999) + 1) : "http://kkpgv.xunlei.com/?u=kankansearch&u1=" + d + "&rd=" + (Math.floor(Math.random() * 999999) + 1);
    window.open(a, "so_" + b)
}
function strip_tags(a) {
    if (arguments.length < 3) a = a.replace(/<\/?(?!\!)[^>]*>/gi, "");
    else {
        var b = arguments[1],
        c = eval("[" + arguments[2] + "]");
        b = b ? "</?(?!(" + c.join("|") + "))\u0008[^>]*>": "</?(" + c.join("|") + ")\u0008[^>]*>";
        a = a.replace(RegExp(b, "gi"), "")
    }
    return a
}
function getPeerid() {
    try {
        var a = new ActiveXObject("DapCtrl.DapCtrl")
    } catch(b) {
        return false
    }
    a = a;
    var c = null;
    try {
        c = 32 == bit ? a.Get("sPeerID32") || null: a.Get("sPeerID") || null
    } catch(d) {} finally {}
    return c
}
function submitToGoogle(a) {
    var b = document.getElementById("searchbox1").value;
    document.gform1.q.value = b;
    document.gform1.channel.value = a;
    document.gform1.submit()
}
function searchWordSbt(a) {
    a.length >= 2 && window.open("http://www.gougou.com/search?search=" + encodeURIComponent(a) + "&id=2")
}
function getSearchUrl() {
    g_suffix = "";
    var a = document.getElementById("searchbox1").value;
    if (g_restype == 8) submitToGoogle("websearch");
    else LTrim(a) != "" && encodeURIComponent(a)
}
var EventUtil = {};
EventUtil.addEventHandler = function(a, b, c) {
    if (a.addEventListener) a.addEventListener(b, c, false);
    else if (a.attachEvent) a.attachEvent("on" + b, c);
    else a["on" + b] = c
};
EventUtil.removeEventHandler = function(a, b, c) {
    if (a.removeEventListener) a.removeEventListener(b, c, false);
    else if (a.detachEvent) a.detachEvent("on" + b, c);
    else a["on" + b] = null
};
ScrollCrossLeft = {
    interval: 0,
    count: 0,
    duration: 0,
    step: 0,
    srcObj: null,
    callback: null
};
ScrollCrossLeft.doit = function(a, b, c, d) {
    var e = ScrollCrossLeft,
    f = function(g, h, j, k) {
        return j * ((g = g / k - 1) * g * g + 1) + h
    } (e.count, b, c, d);
    a.style.marginLeft = f + "px";
    BigNews.currentBegin = f;
    e.count++;
    if (e.count == d) {
        clearInterval(e.interval);
        e.count = 0;
        a.style.marginLeft = b + c + "px";
        BigNews.currentBegin = b + c;
        e.callback()
    }
};
ScrollCrossLeft2 = {
    interval: 0,
    count: 0,
    duration: 0,
    step: 0,
    srcObj: null,
    callback: null
};
ScrollCrossLeft2.doit_2 = function(a, b, c, d) {
    var e = ScrollCrossLeft2;
    a.style.marginLeft = function(f, g, h, j) {
        return h * ((f = f / j - 1) * f * f + 1) + g
    } (e.count, b, c, d) + "px";
    e.count++;
    if (e.count == d) {
        clearInterval(e.interval);
        e.count = 0;
        a.style.marginLeft = b + c + "px";
        e.callback()
    }
};
ScrollCrossLeft2.scroll = function(a, b, c, d, e, f) {
    var g = ScrollCrossLeft2;
    g.duration = f;
    g.callback = e;
    g.interval = setInterval(function() {
        g.doit_2(a, d, b * c, f)
    },
    10)
};
var B = BigNews = {
    current: 0,
    next: 0,
    scrollInterval: 0,
    autoScroller: 0,
    s: {},
    f: {},
    t: {},
    OnScrolling: false,
    preCss: "",
    currentBegin: 0
};
BigNews.turn = function(a, b) {
    if (a == BigNews.current) return false;
    $("showDiv_" + a).style.zIndex++;
    if ($("bigpic_" + a).src == "http://images.movie.xunlei.com/img_default.gif") try {
        setTimeout('$("bigpic_' + a + '").src = ScrollBigPic[' + a + "] ;", 50)
    } catch(c) {}
    BigNews.fadeIn("showDiv_" + a, a, 50, b);
    BigNews.scroll(a, b)
};
BigNews.fadeIn = function(a, b, c, d) {
    try {
        clearInterval(BigNews.f.interval)
    } catch(e) {}
    var f = $(a),
    g = 0;
    BigNews.f.interval = setInterval(function() {
        g += 20;
        f.style.filter = "alpha(opacity=" + g + ")";
        f.style.cssText = f.style.cssText.replace(/;-moz-opacity:.*?;/gi, "") + ";-moz-opacity:" + g * 0.01;
        f.style.cssText = f.style.cssText.replace(/;opacity:.*?;/gi, "") + ";opacity:" + g * 0.01;
        f.style.display = "block";
        if (g == 100) {
            for (var h = 0; h < d.totalcount; h++) {
                $("title_bg_" + h).style.cssText = "position:absolute;left:0;top:221px;float:none;width:694px;height:40px;background:#000;z-index:98;filter:alpha(opacity=60);opacity:0.6;z-index:98;filter:alpha(opacity=0);-moz-opacity:0;opacity:0";
                $("title_" + h).style.cssText = "position:absolute;left:10px;top:232px;font-size:14px;color:#fff;font-weight:normal;z-index:99;filter:alpha(opacity=0);-moz-opacity:0;opacity:0";
                BigNews.showTitles(b, d);
                $("showDiv_" + h).style.cssText = BigNews.preCss;
                if (h == b) $("showDiv_" + h).style.display = "block";
                else $("showDiv_" + h).style.display = "none";
                $("showDiv_" + b).style.zIndex = 0
            }
            BigNews.current = b;
            clearInterval(BigNews.f.interval)
        }
    },
    c)
};
BigNews.showTitles = function(a) {
    try {
        clearInterval(BigNews.t.interval)
    } catch(b) {}
    var c = $("title_" + a),
    d = $("title_bg_" + a),
    e = 0;
    BigNews.t.interval = setInterval(function() {
        e += 10;
        c.style.filter = "alpha(opacity=" + e + ")";
        c.style.cssText = c.style.cssText.replace(/;-moz-opacity:.*?;/gi, "") + ";-moz-opacity:" + e * 0.01;
        c.style.cssText = c.style.cssText.replace(/;opacity:.*?;/gi, "") + ";opacity:" + e * 0.01;
        d.style.filter = "alpha(opacity=" + e * 0.6 + ")";
        d.style.cssText = d.style.cssText.replace(/;-moz-opacity:.*?;/gi, "") + ";-moz-opacity:" + 
        e * 0.01 * 0.6;
        d.style.cssText = d.style.cssText.replace(/;opacity:.*?;/gi, "") + ";opacity:" + e * 0.01 * 0.6;
        e == 100 && clearInterval(BigNews.t.interval)
    },
    50)
};
BigNews.scroll = function(a, b) {
    var c = b.step;
    BigNews.next = a;
    try {
        clearInterval(BigNews.s.interval)
    } catch(d) {}
    $(b.hover);
    BigNews.s.duration = 16;
    BigNews.s.callback = function() {};
    var e = parseInt(BigNews.currentBegin),
    f = a * c - e;
    BigNews.s.interval = setInterval(function() {
        BigNews.s.doit($(b.hover), e, f, 16)
    },
    8)
};
BigNews.auto = function(a) {
    clearInterval(BigNews.autoScroller);
    BigNews.autoScroller = setInterval(function() {
        BigNews.turn(BigNews.current == a.totalcount - 1 ? 0: BigNews.current + 1, a)
    },
    a.autotimeintval)
};
BigNews.pauseSwitch = function() {
    clearTimeout(BigNews.autoScroller)
};
BigNews.showNext = function(a, b) {
    if (a >= MovieRecom.totalcount - 1) return false;
    else {
        BigNews.pauseSwitch();
        BigNews.turn(a + 1, b);
        BigNews.auto(b)
    }
};
BigNews.showPre = function(a, b) {
    if (a <= 0) return false;
    else {
        BigNews.pauseSwitch();
        BigNews.turn(a - 1, b);
        BigNews.auto(b)
    }
};
BigNews.init = function(a) {
    BigNews.s = ScrollCrossLeft;
    BigNews.preCss = a.css;
    EventUtil.addEventHandler($(a.bigpic), "mouseover", new Function("BigNews.pauseSwitch();"));
    EventUtil.addEventHandler($(a.bigpic), "mouseout", new Function("BigNews.auto(" + a.objname + ");"));
    for (i = 0; i < a.totalcount; i++) if (a.smallpic != null && a.smallpic != "") {
        EventUtil.addEventHandler($(a.smallpic + "_" + i), "mouseover", new Function("BigNews.pauseSwitch();BigNews.turn(" + i + "," + a.objname + ");return false;"));
        EventUtil.addEventHandler($(a.smallpic + 
        "_" + i), "mouseout", new Function("BigNews.auto(" + a.objname + ");"))
    }
    BigNews.showTitles(0, a);
    BigNews.auto(a)
};