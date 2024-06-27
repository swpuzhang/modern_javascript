var head = function(t) {
var e = {};
function n(o) {
if (e[o]) return e[o].exports;
var i = e[o] = {
i: o,
l: !1,
exports: {}
};
return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
}
return n.m = t, n.c = e, n.d = function(t, e, o) {
n.o(t, e) || Object.defineProperty(t, e, {
enumerable: !0,
get: o
});
}, n.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, n.t = function(t, e) {
if (1 & e && (t = n(t)), 8 & e) return t;
if (4 & e && "object" == typeof t && t && t.__esModule) return t;
var o = Object.create(null);
if (n.r(o), Object.defineProperty(o, "default", {
enumerable: !0,
value: t
}), 2 & e && "string" != typeof t) for (var i in t) n.d(o, i, function(e) {
return t[e];
}.bind(null, i));
return o;
}, n.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return n.d(e, "a", e), e;
}, n.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, n.p = "/pack/", n(n.s = 24);
}([ function(t, e, n) {
"use strict";
t.exports = function(t) {
var e = typeof t;
return null != t && ("object" == e || "function" == e);
};
}, function(t, e, n) {
"use strict";
var o = n(10), i = "object" == typeof self && self && self.Object === Object && self, r = o || i || Function("return this")();
t.exports = r;
}, function(t, e, n) {
"use strict";
var o = n(1).Symbol;
t.exports = o;
}, function(t, e, n) {
"use strict";
var o = n(8), i = n(0), r = "Expected a function";
t.exports = function(t, e, n) {
var c = !0, s = !0;
if ("function" != typeof t) throw new TypeError(r);
return i(n) && (c = "leading" in n ? !!n.leading : c, s = "trailing" in n ? !!n.trailing : s), 
o(t, e, {
leading: c,
maxWait: e,
trailing: s
});
};
}, function(t, e, n) {
"use strict";
let o = n(5), i = n(3), r = [];
e.iframe = function(t) {
o.async(t, function(e, n) {
n && (t.style.height = n + "px");
});
}, e.codeTabs = function(t) {
function e() {
let e = t.closest(".code-tabs"), n = (t.closest("[data-code-tabs-content]"), e.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? e.classList.add("code-tabs_scroll") : e.classList.remove("code-tabs_scroll");
}
e(), r.push(e);
}, window.addEventListener("resize", i(function() {
r.forEach(function(t) {
t();
});
}, 200));
}, function(t, e, n) {
"use strict";
let o = n(6);
function i(t, e) {
let n = setTimeout(function() {
e(new Error("timeout"));
}, 500);
function i(t, o) {
clearTimeout(n), e(t, o);
}
try {
(t.contentDocument || t.contentWindow.document).body;
} catch (t) {
!function(t, e) {
throw new Error("Not implemented yet");
}();
}
if (!t.offsetWidth) {
let e = t.cloneNode(!0);
return e.name = "", e.style.height = "50px", e.style.position = "absolute", e.style.display = "block", 
e.style.top = "10000px", e.onload = function() {
let n = o(this.contentDocument);
t.style.display = "block", e.remove(), i(null, n);
}, void document.body.appendChild(e);
}
t.style.display = "block", t.style.height = "1px";
let r = o(t.contentDocument);
t.style.height = "", i(null, r);
}
i.async = function(t, e) {
setTimeout(function() {
i(t, e);
}, 0);
}, t.exports = i;
}, function(t, e, n) {
"use strict";
let o, i = n(7);
t.exports = function(t) {
t = t || document;
let e = Math.max(t.body.scrollHeight, t.documentElement.scrollHeight, t.body.offsetHeight, t.documentElement.offsetHeight, t.body.clientHeight, t.documentElement.clientHeight);
return t.documentElement.scrollWidth > t.documentElement.clientWidth && (o || (o = i()), 
e += o), e;
};
}, function(t, e, n) {
"use strict";
t.exports = function() {
let t = document.createElement("div");
if (t.style.cssText = "visibility:hidden;height:100px", !document.body) throw new Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(t);
let e = t.offsetWidth;
t.style.overflow = "scroll";
let n = document.createElement("div");
n.style.width = "100%", t.appendChild(n);
let o = n.offsetWidth;
return t.parentNode.removeChild(t), e - o;
};
}, function(t, e, n) {
"use strict";
var o = n(0), i = n(9), r = n(12), c = "Expected a function", s = Math.max, a = Math.min;
t.exports = function(t, e, n) {
var l, u, d, f, m, p, h = 0, y = !1, v = !1, b = !0;
if ("function" != typeof t) throw new TypeError(c);
function g(e) {
var n = l, o = u;
return l = u = void 0, h = e, f = t.apply(o, n);
}
function E(t) {
var n = t - p;
return void 0 === p || n >= e || n < 0 || v && t - h >= d;
}
function w() {
var t = i();
if (E(t)) return _(t);
m = setTimeout(w, function(t) {
var n = e - (t - p);
return v ? a(n, d - (t - h)) : n;
}(t));
}
function _(t) {
return m = void 0, b && l ? g(t) : (l = u = void 0, f);
}
function x() {
var t = i(), n = E(t);
if (l = arguments, u = this, p = t, n) {
if (void 0 === m) return function(t) {
return h = t, m = setTimeout(w, e), y ? g(t) : f;
}(p);
if (v) return clearTimeout(m), m = setTimeout(w, e), g(p);
}
return void 0 === m && (m = setTimeout(w, e)), f;
}
return e = r(e) || 0, o(n) && (y = !!n.leading, d = (v = "maxWait" in n) ? s(r(n.maxWait) || 0, e) : d, 
b = "trailing" in n ? !!n.trailing : b), x.cancel = function() {
void 0 !== m && clearTimeout(m), h = 0, l = p = u = m = void 0;
}, x.flush = function() {
return void 0 === m ? f : _(i());
}, x;
};
}, function(t, e, n) {
"use strict";
var o = n(1);
t.exports = function() {
return o.Date.now();
};
}, function(t, e, n) {
"use strict";
(function(e) {
var n = "object" == typeof e && e && e.Object === Object && e;
t.exports = n;
}).call(this, n(11));
}, function(t, e, n) {
"use strict";
var o;
o = function() {
return this;
}();
try {
o = o || new Function("return this")();
} catch (t) {
"object" == typeof window && (o = window);
}
t.exports = o;
}, function(t, e, n) {
"use strict";
var o = n(13), i = n(0), r = n(15), c = NaN, s = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
t.exports = function(t) {
if ("number" == typeof t) return t;
if (r(t)) return c;
if (i(t)) {
var e = "function" == typeof t.valueOf ? t.valueOf() : t;
t = i(e) ? e + "" : e;
}
if ("string" != typeof t) return 0 === t ? t : +t;
t = o(t);
var n = a.test(t);
return n || l.test(t) ? u(t.slice(2), n ? 2 : 8) : s.test(t) ? c : +t;
};
}, function(t, e, n) {
"use strict";
var o = n(14), i = /^\s+/;
t.exports = function(t) {
return t ? t.slice(0, o(t) + 1).replace(i, "") : t;
};
}, function(t, e, n) {
"use strict";
var o = /\s/;
t.exports = function(t) {
for (var e = t.length; e-- && o.test(t.charAt(e)); ) ;
return e;
};
}, function(t, e, n) {
"use strict";
var o = n(16), i = n(19), r = "[object Symbol]";
t.exports = function(t) {
return "symbol" == typeof t || i(t) && o(t) == r;
};
}, function(t, e, n) {
"use strict";
var o = n(2), i = n(17), r = n(18), c = "[object Null]", s = "[object Undefined]", a = o ? o.toStringTag : void 0;
t.exports = function(t) {
return null == t ? void 0 === t ? s : c : a && a in Object(t) ? i(t) : r(t);
};
}, function(t, e, n) {
"use strict";
var o = n(2), i = Object.prototype, r = i.hasOwnProperty, c = i.toString, s = o ? o.toStringTag : void 0;
t.exports = function(t) {
var e = r.call(t, s), n = t[s];
try {
t[s] = void 0;
var o = !0;
} catch (t) {}
var i = c.call(t);
return o && (e ? t[s] = n : delete t[s]), i;
};
}, function(t, e, n) {
"use strict";
var o = Object.prototype.toString;
t.exports = function(t) {
return o.call(t);
};
}, function(t, e, n) {
"use strict";
t.exports = function(t) {
return null != t && "object" == typeof t;
};
}, , , , , function(t, e, n) {
"use strict";
n(25);
try {
window.localStorage.testProperty = 1, delete window.localStorage.testProperty;
} catch (t) {
try {
window.localStorage = {};
} catch (t) {}
}
e.Modal = n(31), e.fontTest = n(32), e.resizeOnload = n(4), n(33), n(34), n(35), 
n(37), n(38);
}, function(t, e, n) {
"use strict";
n(26);
}, function(t, e, n) {
"use strict";
function o(t) {
if (t.length) {
if (1 === t.length) return "string" == typeof t[0] ? document.createTextNode(t[0]) : t[0];
for (var e, n = document.createDocumentFragment(), o = t.length, i = -1; ++i < o; ) e = t[i], 
n.appendChild("string" == typeof e ? document.createTextNode(e) : e);
return n;
}
throw new Error("DOM Exception 8");
}
let i = {
matches: Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
replace() {
this.parentNode && this.parentNode.replaceChild(o(arguments), this);
},
prepend() {
this.insertBefore(o(arguments), this.firstChild);
},
append() {
this.appendChild(o(arguments));
},
remove() {
let t = this.parentNode;
if (t) return t.removeChild(this);
},
before: function() {
this.parentNode && this.parentNode.insertBefore(o(arguments), this);
},
after: function() {
this.parentNode && this.parentNode.insertBefore(o(arguments), this.nextSibling);
},
closest: function(t) {
let e = this;
for (;e; ) {
if (e.matches && e.matches(t)) return e;
e = e.parentElement;
}
return null;
}
};
for (let t in i) Element.prototype[t] || (Element.prototype[t] = i[t]);
n(27), n(28), n(29), n(30);
}, function(t, e, n) {
"use strict";
try {
new CustomEvent("IE has CustomEvent, but doesn't support constructor");
} catch (t) {
window.CustomEvent = function(t, e) {
let n;
return e = e || {
bubbles: !1,
cancelable: !1,
detail: void 0
}, (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), 
n;
}, CustomEvent.prototype = Object.create(window.Event.prototype);
}
}, function(t, e, n) {
"use strict";
if (!(document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get)) {
let t = {
enumerable: !0,
get: function() {
let t, e, n, o, i, r, c = this, s = this.attributes, a = s.length, l = function(t) {
return t.charAt(1).toUpperCase();
}, u = function() {
return this;
}, d = function(t, e) {
return void 0 !== e ? this.setAttribute(t, e) : this.removeAttribute(t);
};
try {
({}).__defineGetter__("test", function() {}), e = {};
} catch (t) {
e = document.createElement("div");
}
for (t = 0; t < a; t++) if ((r = s[t]) && r.name && /^data-\w[\w\-]*$/.test(r.name)) {
n = r.value, i = (o = r.name).substr(5).replace(/-./g, l);
try {
Object.defineProperty(e, i, {
enumerable: this.enumerable,
get: u.bind(n || ""),
set: d.bind(c, o)
});
} catch (t) {
e[i] = n;
}
}
return e;
}
};
try {
Object.defineProperty(Element.prototype, "dataset", t);
} catch (e) {
t.enumerable = !1, Object.defineProperty(Element.prototype, "dataset", t);
}
}
}, function(t, e, n) {
"use strict";
void 0 === document.documentElement.hidden && (document.head.insertAdjacentHTML("beforeEnd", "<style> [hidden] { display: none } </style>"), 
Object.defineProperty(Element.prototype, "hidden", {
set: function(t) {
this.setAttribute("hidden", t);
},
get: function() {
return this.getAttribute("hidden");
}
}));
}, function(t, e, n) {
"use strict";
!function() {
let t = 0;
window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
let o = new Date().getTime(), i = Math.max(0, 16 - (o - t)), r = window.setTimeout(function() {
e(o + i);
}, i);
return t = o + i, r;
}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
clearTimeout(t);
});
}();
}, function(t, e, n) {
"use strict";
function o(t) {
t = t || {}, this.render(), this.setHasClose(void 0 === t.hasClose || t.hasClose), 
this.onClick = this.onClick.bind(this), this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), 
this.elem.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onDocumentKeyDown);
}
o.prototype.setHasClose = function(t) {
this._hasClose = t, this._hasClose ? this.elem.classList.add("modal__has-close") : this.elem.classList.remove("modal__has-close");
}, o.prototype.render = function() {
document.body.insertAdjacentHTML("beforeEnd", '<div class="modal"><div class="modal__dialog"><button class="close-button modal__close" title="закрыть"></button><div class="modal__content"></div></div></div>'), 
document.body.classList.add("paranja-open"), this.elem = document.body.lastChild, 
this.contentElem = this.elem.querySelector(".modal__content");
}, o.prototype.onClick = function(t) {
t.target.classList.contains("modal__close") && (this.remove(), t.preventDefault());
}, o.prototype.onDocumentKeyDown = function(t) {
27 == t.keyCode && (t.preventDefault(), this.remove());
}, o.prototype.showOverlay = function() {
this.contentElem.classList.add("modal-overlay_light");
}, o.prototype.hideOverlay = function() {
this.contentElem.classList.remove("modal-overlay_light");
}, o.prototype.setContent = function(t) {
"string" == typeof t ? this.contentElem.innerHTML = t : (this.contentElem.innerHTML = "", 
this.contentElem.appendChild(t));
let e = this.contentElem.querySelector("[data-modal-autofocus],[autofocus]");
e && e.focus();
}, o.prototype.remove = function() {
document.body.classList.remove("paranja-open"), document.body.removeChild(this.elem), 
document.removeEventListener("keydown", this.onDocumentKeyDown), this.elem.dispatchEvent(new CustomEvent("modal-remove"));
}, t.exports = o;
}, function(t, e, n) {
"use strict";
t.exports = function() {
let t = document.createElement("span");
document.body.appendChild(t), t.className = "font-test", t.style.fontFamily = "serif";
let e = t.offsetWidth;
t.style.fontFamily = "", function n() {
e != t.offsetWidth ? document.body.classList.remove("no-icons") : setTimeout(n, 100);
}();
};
}, function(t, e, n) {
"use strict";
let o;
let i = 840;
!function() {
function t() {
o || (o = window.requestAnimationFrame(function() {
!function() {
let t = document.querySelector(".sitetoolbar-light");
if (!t) return;
let e = document.querySelector(".sidebar");
e && (e.style.top = Math.max(t.getBoundingClientRect().bottom, 0) + "px", function() {
let t = document.querySelector(".sidebar"), e = t.querySelector(".sidebar__content"), n = t.querySelector(".sidebar__inner"), o = t.classList.contains("sidebar_sticky-footer");
if (t.classList.contains("sidebar_compact")) {
let n;
(n = o ? e.lastElementChild.getBoundingClientRect().top - e.lastElementChild.previousElementSibling.getBoundingClientRect().bottom : e.getBoundingClientRect().bottom - e.lastElementChild.getBoundingClientRect().bottom) > 150 && t.classList.remove("sidebar_compact");
} else n.scrollHeight, n.clientHeight, n.scrollHeight > n.clientHeight && t.classList.add("sidebar_compact");
}());
!function() {
let t = document.documentElement.clientWidth <= i, e = document.querySelector('meta[name="viewport"]').content;
e = e.replace(/user-scalable=\w+/, "user-scalable=" + (t ? "yes" : "no")), document.querySelector('meta[name="viewport"]').content = e;
}();
}(), o = null;
}));
}
window.addEventListener("scroll", t), window.addEventListener("resize", t), document.addEventListener("DOMContentLoaded", t);
}();
}, function(t, e, n) {
"use strict";
function o() {
let t = document.querySelector(".page-wrapper");
document.querySelector(".page").classList.toggle("page_sidebar_on"), t && t.classList.toggle("page-wrapper_sidebar_on"), 
document.querySelector(".page").classList.contains("page_sidebar_on") ? delete localStorage.noSidebar : localStorage.noSidebar = 1;
}
document.addEventListener("click", function(t) {
if (!t.target.hasAttribute("data-sidebar-toggle")) return;
o();
}), document.addEventListener("keydown", function(t) {
if (document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) return;
if (t.keyCode != "S".charCodeAt(0)) return;
if (~navigator.userAgent.toLowerCase().indexOf("mac os x")) {
if (!t.metaKey || !t.altKey) return;
} else if (!t.altKey) return;
o(), t.preventDefault();
}), function() {
function t() {
let t = document.getElementsByClassName("sidebar__navigation-link_active");
t[0] && t[0].classList.remove("sidebar__navigation-link_active");
let e, n = document.getElementsByTagName("h2");
for (e = 0; e < n.length; e++) {
let t = n[e];
if (t.getBoundingClientRect().top > 1) break;
}
if (--e >= 0) {
let t = n[e].firstElementChild && n[e].firstElementChild.getAttribute("href"), o = document.querySelector('.sidebar__navigation-link a[href="' + t + '"]');
t && o && o.classList.add("sidebar__navigation-link_active");
}
}
document.addEventListener("DOMContentLoaded", function() {
t(), window.addEventListener("scroll", t);
});
}();
}, function(t, e, n) {
"use strict";
let o = n(36), i = ~navigator.userAgent.toLowerCase().indexOf("mac os x") ? "ctrl" : "alt";
o(document, {
onRight: function() {
let t = document.querySelector('link[rel="prev"]');
t && (document.location = t.href);
},
onLeft: function() {
let t = document.querySelector('link[rel="next"]');
t && (document.location = t.href);
}
}), document.addEventListener("keydown", function(t) {
if (document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) return;
if (!t[i + "Key"]) return;
let e = null;
switch (t.keyCode) {
case 37:
e = "prev";
break;

case 39:
e = "next";
break;

default:
return;
}
let n = document.querySelector('link[rel="' + e + '"]');
n && (document.location = n.href, t.preventDefault());
}), document.addEventListener("DOMContentLoaded", function() {
let t, e = i[0].toUpperCase() + i.slice(1), n = document.querySelector('link[rel="next"]');
n && ((t = document.querySelector('a[href="' + n.getAttribute("href") + '"] .page__nav-text-shortcut')).innerHTML = e + ' + <span class="page__nav-text-arr">→</span>');
let o = document.querySelector('link[rel="prev"]');
o && ((t = document.querySelector('a[href="' + o.getAttribute("href") + '"] .page__nav-text-shortcut')).innerHTML = e + ' + <span class="page__nav-text-arr">←</span>');
});
}, function(t, e, n) {
"use strict";
t.exports = function(t, e) {
let n, o, i, r, c, s = (e = e || {}).onRight || function() {}, a = e.onLeft || function() {}, l = e.tolerance || 50, u = e.threshold || 150, d = e.allowedTime || 500;
t.addEventListener("touchstart", function(t) {
let e = t.changedTouches[0];
i = 0, n = e.pageX, o = e.pageY, c = Date.now();
}), t.addEventListener("touchend", function(t) {
let e = t.changedTouches[0];
if (i = e.pageX - n, r = Date.now() - c, Math.abs(e.pageY - o) > l) return;
if (r > d) return;
let f = !1, m = t.target;
for (;m != document.body; ) {
if (m.scrollWidth > m.clientWidth) {
f = !0;
break;
}
m = m.parentElement;
}
f || (i > u && s(t), i < -u && a(t));
});
};
}, function(t, e, n) {
"use strict";
let o;
document.addEventListener("mouseover", function(t) {
let e = t.target.closest("[data-add-class-on-hover]") || t.target.closest(".button");
e && (o = e, e.classList.add("hover"));
}), document.addEventListener("touchend", function(t) {
setTimeout(function() {
o && (o.classList.remove("hover"), o = null);
}, 500);
}), document.addEventListener("mouseout", function(t) {
o && (o.contains(t.relatedTarget) || (o.classList.remove("hover"), o = null));
}), navigator.userAgent.match(/(iPad|iPhone|iPod)/g) || document.documentElement.classList.add("working-hover");
}, function(t, e, n) {
"use strict";
let o = window.location.host;
document.addEventListener("click", function(t) {
if (1 != t.which) return;
if (t.defaultPrevented) return;
let e = t.target.closest && t.target.closest("a");
if (!e || o == e.host && !e.hasAttribute("data-track-outbound")) return;
if (!~[ "_self", "_top", "_parent" ].indexOf(e.target)) return;
if (t.shiftKey || t.ctrlKey || t.altKey) return;
t.preventDefault();
let n = e.href;
function i() {
document.location = n;
}
window.ga("send", "event", "outbound", "click", n, {
hitCallback: i
}), setTimeout(i, 500);
});
} ]);