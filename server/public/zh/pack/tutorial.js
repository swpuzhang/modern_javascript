var tutorial = function(e) {
var t = {};
function n(r) {
if (t[r]) return t[r].exports;
var i = t[r] = {
i: r,
l: !1,
exports: {}
};
return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
}
return n.m = e, n.c = t, n.d = function(e, t, r) {
n.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: r
});
}, n.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, n.t = function(e, t) {
if (1 & t && (e = n(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var r = Object.create(null);
if (n.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function(t) {
return e[t];
}.bind(null, i));
return r;
}, n.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return n.d(t, "a", t), t;
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.p = "/pack/", n(n.s = 44);
}([ function(e, t, n) {
"use strict";
e.exports = function(e) {
var t = typeof e;
return null != e && ("object" == t || "function" == t);
};
}, function(e, t, n) {
"use strict";
var r = n(10), i = "object" == typeof self && self && self.Object === Object && self, a = r || i || Function("return this")();
e.exports = a;
}, function(e, t, n) {
"use strict";
var r = n(1).Symbol;
e.exports = r;
}, function(e, t, n) {
"use strict";
var r = n(8), i = n(0), a = "Expected a function";
e.exports = function(e, t, n) {
var s = !0, o = !0;
if ("function" != typeof e) throw new TypeError(a);
return i(n) && (s = "leading" in n ? !!n.leading : s, o = "trailing" in n ? !!n.trailing : o), 
r(e, t, {
leading: s,
maxWait: t,
trailing: o
});
};
}, function(e, t, n) {
"use strict";
let r = n(5), i = n(3), a = [];
t.iframe = function(e) {
r.async(e, function(t, n) {
n && (e.style.height = n + "px");
});
}, t.codeTabs = function(e) {
function t() {
let t = e.closest(".code-tabs"), n = (e.closest("[data-code-tabs-content]"), t.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? t.classList.add("code-tabs_scroll") : t.classList.remove("code-tabs_scroll");
}
t(), a.push(t);
}, window.addEventListener("resize", i(function() {
a.forEach(function(e) {
e();
});
}, 200));
}, function(e, t, n) {
"use strict";
let r = n(6);
function i(e, t) {
let n = setTimeout(function() {
t(new Error("timeout"));
}, 500);
function i(e, r) {
clearTimeout(n), t(e, r);
}
try {
(e.contentDocument || e.contentWindow.document).body;
} catch (e) {
!function(e, t) {
throw new Error("Not implemented yet");
}();
}
if (!e.offsetWidth) {
let t = e.cloneNode(!0);
return t.name = "", t.style.height = "50px", t.style.position = "absolute", t.style.display = "block", 
t.style.top = "10000px", t.onload = function() {
let n = r(this.contentDocument);
e.style.display = "block", t.remove(), i(null, n);
}, void document.body.appendChild(t);
}
e.style.display = "block", e.style.height = "1px";
let a = r(e.contentDocument);
e.style.height = "", i(null, a);
}
i.async = function(e, t) {
setTimeout(function() {
i(e, t);
}, 0);
}, e.exports = i;
}, function(e, t, n) {
"use strict";
let r, i = n(7);
e.exports = function(e) {
e = e || document;
let t = Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight);
return e.documentElement.scrollWidth > e.documentElement.clientWidth && (r || (r = i()), 
t += r), t;
};
}, function(e, t, n) {
"use strict";
e.exports = function() {
let e = document.createElement("div");
if (e.style.cssText = "visibility:hidden;height:100px", !document.body) throw new Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(e);
let t = e.offsetWidth;
e.style.overflow = "scroll";
let n = document.createElement("div");
n.style.width = "100%", e.appendChild(n);
let r = n.offsetWidth;
return e.parentNode.removeChild(e), t - r;
};
}, function(e, t, n) {
"use strict";
var r = n(0), i = n(9), a = n(12), s = "Expected a function", o = Math.max, l = Math.min;
e.exports = function(e, t, n) {
var c, u, d, p, f, h, g = 0, E = !1, m = !1, b = !0;
if ("function" != typeof e) throw new TypeError(s);
function T(t) {
var n = c, r = u;
return c = u = void 0, g = t, p = e.apply(r, n);
}
function S(e) {
var n = e - h;
return void 0 === h || n >= t || n < 0 || m && e - g >= d;
}
function A() {
var e = i();
if (S(e)) return y(e);
f = setTimeout(A, function(e) {
var n = t - (e - h);
return m ? l(n, d - (e - g)) : n;
}(e));
}
function y(e) {
return f = void 0, b && c ? T(e) : (c = u = void 0, p);
}
function I() {
var e = i(), n = S(e);
if (c = arguments, u = this, h = e, n) {
if (void 0 === f) return function(e) {
return g = e, f = setTimeout(A, t), E ? T(e) : p;
}(h);
if (m) return clearTimeout(f), f = setTimeout(A, t), T(h);
}
return void 0 === f && (f = setTimeout(A, t)), p;
}
return t = a(t) || 0, r(n) && (E = !!n.leading, d = (m = "maxWait" in n) ? o(a(n.maxWait) || 0, t) : d, 
b = "trailing" in n ? !!n.trailing : b), I.cancel = function() {
void 0 !== f && clearTimeout(f), g = 0, c = h = u = f = void 0;
}, I.flush = function() {
return void 0 === f ? p : y(i());
}, I;
};
}, function(e, t, n) {
"use strict";
var r = n(1);
e.exports = function() {
return r.Date.now();
};
}, function(e, t, n) {
"use strict";
(function(t) {
var n = "object" == typeof t && t && t.Object === Object && t;
e.exports = n;
}).call(this, n(11));
}, function(e, t, n) {
"use strict";
var r;
r = function() {
return this;
}();
try {
r = r || new Function("return this")();
} catch (e) {
"object" == typeof window && (r = window);
}
e.exports = r;
}, function(e, t, n) {
"use strict";
var r = n(13), i = n(0), a = n(15), s = NaN, o = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, c = /^0o[0-7]+$/i, u = parseInt;
e.exports = function(e) {
if ("number" == typeof e) return e;
if (a(e)) return s;
if (i(e)) {
var t = "function" == typeof e.valueOf ? e.valueOf() : e;
e = i(t) ? t + "" : t;
}
if ("string" != typeof e) return 0 === e ? e : +e;
e = r(e);
var n = l.test(e);
return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : o.test(e) ? s : +e;
};
}, function(e, t, n) {
"use strict";
var r = n(14), i = /^\s+/;
e.exports = function(e) {
return e ? e.slice(0, r(e) + 1).replace(i, "") : e;
};
}, function(e, t, n) {
"use strict";
var r = /\s/;
e.exports = function(e) {
for (var t = e.length; t-- && r.test(e.charAt(t)); ) ;
return t;
};
}, function(e, t, n) {
"use strict";
var r = n(16), i = n(19), a = "[object Symbol]";
e.exports = function(e) {
return "symbol" == typeof e || i(e) && r(e) == a;
};
}, function(e, t, n) {
"use strict";
var r = n(2), i = n(17), a = n(18), s = "[object Null]", o = "[object Undefined]", l = r ? r.toStringTag : void 0;
e.exports = function(e) {
return null == e ? void 0 === e ? o : s : l && l in Object(e) ? i(e) : a(e);
};
}, function(e, t, n) {
"use strict";
var r = n(2), i = Object.prototype, a = i.hasOwnProperty, s = i.toString, o = r ? r.toStringTag : void 0;
e.exports = function(e) {
var t = a.call(e, o), n = e[o];
try {
e[o] = void 0;
var r = !0;
} catch (e) {}
var i = s.call(e);
return r && (t ? e[o] = n : delete e[o]), i;
};
}, function(e, t, n) {
"use strict";
var r = Object.prototype.toString;
e.exports = function(e) {
return r.call(e);
};
}, function(e, t, n) {
"use strict";
e.exports = function(e) {
return null != e && "object" == typeof e;
};
}, function(e, t, n) {
"use strict";
e.exports = {
lang: "zh",
lookatCodeUrlBase: "https://lookatcode.com"
};
}, function(e, t, n) {
"use strict";
function r(e, t, n, r, i) {
e.addEventListener(n, function(e) {
let n = function(e, t) {
let n = e.target;
for (;n; ) {
if (n.matches(t)) return n;
if (n == e.currentTarget) break;
n = n.parentElement;
}
return null;
}(e, t);
e.delegateTarget = n, n && r.call(i || this, e);
});
}
r.delegateMixin = function(e) {
e.delegate = function(e, t, n) {
r(this.elem, e, t, n, this);
};
}, e.exports = r;
}, function(e, t, n) {
"use strict";
e.exports = function(e) {
let t, n = 1 + e.split("\n").length, r = new Array(n);
return t = `<span class="line-numbers-rows">${r = r.join("<span></span>")}</span>`;
};
}, function(e, t, n) {
"use strict";
function r(e, t = 0) {
if (null == e) return "null";
if ("function" == typeof e) return function(e, t = 0) {
if (t) return "function " + e.name;
(e = (e = e.toString()).split("\n")).length > 10 && (e = e.slice(0, 10).join("\n") + "\n...");
return e;
}(e, t);
if (Array.isArray(e)) return function(e, t = 0) {
if (t > 2) return "[...]";
let n = 1 == t ? 3 : 10;
e.length > n && (e = e.slice(0, n)).push("...");
return "[" + e.map(e => r(e, t + 1)).join(", ") + "]";
}(e, t);
if ("object" == typeof window) {
if (e instanceof Node) return r(e.outerHTML, t);
if (e instanceof Event) {
let n = [ Symbol.toStringTag, "type", "clientX", "clientY", "key", "code" ], i = {};
for (let t of n) t in e && (i[t] = e[t]);
return r(i, t);
}
}
return "object" == typeof e ? function(e, t = 0) {
let n = e.constructor.name;
"Object" == n && e[Symbol.toStringTag] && (n = e[Symbol.toStringTag]);
if ("Object" != n && e.toString != Object.prototype.toString) return e.toString();
let i = "";
"Object" != n && (i += n + " ");
if (i += "{", t > 1) i += "..."; else {
let n = [];
for (let i in e) e.hasOwnProperty(i) && n.push(`${i}: ${r(e[i], t + 1)}`);
i += n.join(", ");
}
return i += "}";
}(e, t) : "string" == typeof e ? function(e, t = 0) {
let n = 1 == t ? 20 : 60;
e.length > n && (e = e.slice(0, e.limit - 1) + "…");
return JSON.stringify(e);
}(e, t) : JSON.stringify(e);
}
e.exports = function(e) {
return Array.from(e).map(r).join(", ");
};
}, , , , , , , , , , , , , , , , , , , , , function(module, exports, __webpack_require__) {
"use strict";
const delegate = __webpack_require__(21), prism = __webpack_require__(45), ItemSlider = __webpack_require__(83);
function init() {
initTaskButtons(), initFolderList(), initViewMoreButton(), initCoursesSlider(), 
prism.init();
}
function initTaskButtons() {
delegate(document, ".task__solution", "click", function(e) {
e.target.closest(".task").classList.toggle("task_answer_open");
}), delegate(document, ".task__answer-close", "click", function(e) {
e.target.closest(".task").classList.toggle("task_answer_open");
}), delegate(document, ".task__step-show", "click", function(e) {
e.target.closest(".task__step").classList.toggle("task_step_open");
});
}
function initViewMoreButton() {
delegate(document, "a.list-sub__more", "click", function(e) {
e.preventDefault();
const t = e.target;
for (let e of t.closest(".list-sub").querySelectorAll(".list-sub__item_phone_hidden")) e.classList.remove("list-sub__item_phone_hidden");
t.style.display = "none";
});
}
function initFolderList() {
delegate(document, ".lessons-list__lesson_level_1 > .lessons-list__link", "click", function(e) {
let t = e.delegateTarget, n = t.closest(".lessons-list").querySelector(".lessons-list__lesson_open");
n && n !== t.parentNode && n.classList.remove("lessons-list__lesson_open"), t.parentNode.classList.toggle("lessons-list__lesson_open"), 
e.preventDefault();
});
}
function initCoursesSlider() {
const e = document.querySelector("[data-courses-slider]");
e && new ItemSlider({
el: e,
class: "slider_frontpage"
});
}
window.runDemo = function(button) {
let demoElem, parent = button;
for (;(parent = parent.parentElement) && (demoElem = parent.querySelector("[data-demo]"), 
!demoElem); ) ;
demoElem ? eval(demoElem.textContent) : alert("Error, no demo element");
}, init();
}, function(e, t, n) {
"use strict";
(document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop()).setAttribute("data-manual", 1), 
n(46), n(58)(Prism);
let r = n(59), i = n(81), a = n(82);
function s(e) {
if (function(e) {
let t = e.querySelectorAll(".code-example:not([data-prism-highlighted])");
for (let e of t) new r(e), e.setAttribute("data-prism-highlighted", "1");
}(e), function(e) {
let t = e.querySelectorAll("div.code-tabs:not([data-prism-highlighted])");
for (let e of t) new i(e), e.setAttribute("data-prism-highlighted", "1");
}(e), window.ebookType) for (let e of document.querySelectorAll(".line-numbers-rows")) e.remove();
}
t.init = function() {
document.removeEventListener("DOMContentLoaded", Prism.highlightAll), document.addEventListener("DOMContentLoaded", function() {
s(document);
}), a();
}, t.highlight = s;
}, function(e, t, n) {
"use strict";
n(47), n(48), n(49), n(50), n(51), n(52), n(53), n(54), n(55), n(56), n(57), Prism.hooks.add("wrap", function(e) {
"span" === e.tag && (e.tag = "code");
});
}, function(e, t) {
var n = function(e) {
var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, r = {}, i = {
manual: e.Prism && e.Prism.manual,
disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
util: {
encode: function e(t) {
return t instanceof a ? new a(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(e) {
return Object.prototype.toString.call(e).slice(8, -1);
},
objId: function(e) {
return e.__id || Object.defineProperty(e, "__id", {
value: ++n
}), e.__id;
},
clone: function e(t, n) {
var r, a;
switch (n = n || {}, i.util.type(t)) {
case "Object":
if (a = i.util.objId(t), n[a]) return n[a];
for (var s in r = {}, n[a] = r, t) t.hasOwnProperty(s) && (r[s] = e(t[s], n));
return r;

case "Array":
return a = i.util.objId(t), n[a] ? n[a] : (r = [], n[a] = r, t.forEach(function(t, i) {
r[i] = e(t, n);
}), r);

default:
return t;
}
},
getLanguage: function(e) {
for (;e; ) {
var n = t.exec(e.className);
if (n) return n[1].toLowerCase();
e = e.parentElement;
}
return "none";
},
setLanguage: function(e, n) {
e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n);
},
currentScript: function() {
if ("undefined" == typeof document) return null;
if ("currentScript" in document) return document.currentScript;
try {
throw new Error();
} catch (r) {
var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
if (e) {
var t = document.getElementsByTagName("script");
for (var n in t) if (t[n].src == e) return t[n];
}
return null;
}
},
isActive: function(e, t, n) {
for (var r = "no-" + t; e; ) {
var i = e.classList;
if (i.contains(t)) return !0;
if (i.contains(r)) return !1;
e = e.parentElement;
}
return !!n;
}
},
languages: {
plain: r,
plaintext: r,
text: r,
txt: r,
extend: function(e, t) {
var n = i.util.clone(i.languages[e]);
for (var r in t) n[r] = t[r];
return n;
},
insertBefore: function(e, t, n, r) {
var a = (r = r || i.languages)[e], s = {};
for (var o in a) if (a.hasOwnProperty(o)) {
if (o == t) for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
n.hasOwnProperty(o) || (s[o] = a[o]);
}
var c = r[e];
return r[e] = s, i.languages.DFS(i.languages, function(t, n) {
n === c && t != e && (this[t] = s);
}), s;
},
DFS: function e(t, n, r, a) {
a = a || {};
var s = i.util.objId;
for (var o in t) if (t.hasOwnProperty(o)) {
n.call(t, o, t[o], r || o);
var l = t[o], c = i.util.type(l);
"Object" !== c || a[s(l)] ? "Array" !== c || a[s(l)] || (a[s(l)] = !0, e(l, n, o, a)) : (a[s(l)] = !0, 
e(l, n, null, a));
}
}
},
plugins: {},
highlightAll: function(e, t) {
i.highlightAllUnder(document, e, t);
},
highlightAllUnder: function(e, t, n) {
var r = {
callback: n,
container: e,
selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
};
i.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), 
i.hooks.run("before-all-elements-highlight", r);
for (var a, s = 0; a = r.elements[s++]; ) i.highlightElement(a, !0 === t, r.callback);
},
highlightElement: function(t, n, r) {
var a = i.util.getLanguage(t), s = i.languages[a];
i.util.setLanguage(t, a);
var o = t.parentElement;
o && "pre" === o.nodeName.toLowerCase() && i.util.setLanguage(o, a);
var l = {
element: t,
language: a,
grammar: s,
code: t.textContent
};
function c(e) {
l.highlightedCode = e, i.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, 
i.hooks.run("after-highlight", l), i.hooks.run("complete", l), r && r.call(l.element);
}
if (i.hooks.run("before-sanity-check", l), (o = l.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"), 
!l.code) return i.hooks.run("complete", l), void (r && r.call(l.element));
if (i.hooks.run("before-highlight", l), l.grammar) if (n && e.Worker) {
var u = new Worker(i.filename);
u.onmessage = function(e) {
c(e.data);
}, u.postMessage(JSON.stringify({
language: l.language,
code: l.code,
immediateClose: !0
}));
} else c(i.highlight(l.code, l.grammar, l.language)); else c(i.util.encode(l.code));
},
highlight: function(e, t, n) {
var r = {
code: e,
grammar: t,
language: n
};
if (i.hooks.run("before-tokenize", r), !r.grammar) throw new Error('The language "' + r.language + '" has no grammar.');
return r.tokens = i.tokenize(r.code, r.grammar), i.hooks.run("after-tokenize", r), 
a.stringify(i.util.encode(r.tokens), r.language);
},
tokenize: function(e, t) {
var n = t.rest;
if (n) {
for (var r in n) t[r] = n[r];
delete t.rest;
}
var c = new function() {
var e = {
value: null,
prev: null,
next: null
}, t = {
value: null,
prev: e,
next: null
};
e.next = t, this.head = e, this.tail = t, this.length = 0;
}();
return o(c, c.head, e), function e(t, n, r, c, u, d) {
for (var p in r) if (r.hasOwnProperty(p) && r[p]) {
var f = r[p];
f = Array.isArray(f) ? f : [ f ];
for (var h = 0; h < f.length; ++h) {
if (d && d.cause == p + "," + h) return;
var g = f[h], E = g.inside, m = !!g.lookbehind, b = !!g.greedy, T = g.alias;
if (b && !g.pattern.global) {
var S = g.pattern.toString().match(/[imsuy]*$/)[0];
g.pattern = RegExp(g.pattern.source, S + "g");
}
for (var A = g.pattern || g, y = c.next, I = u; y !== n.tail && !(d && I >= d.reach); I += y.value.length, 
y = y.next) {
var O = y.value;
if (n.length > t.length) return;
if (!(O instanceof a)) {
var v, R = 1;
if (b) {
if (!(v = s(A, I, t, m)) || v.index >= t.length) break;
var L = v.index, N = v.index + v[0].length, w = I;
for (w += y.value.length; L >= w; ) y = y.next, w += y.value.length;
if (w -= y.value.length, I = w, y.value instanceof a) continue;
for (var k = y; k !== n.tail && (w < N || "string" == typeof k.value); k = k.next) R++, 
w += k.value.length;
R--, O = t.slice(I, w), v.index -= I;
} else if (!(v = s(A, 0, O, m))) continue;
var L = v.index, F = v[0], C = O.slice(0, L), _ = O.slice(L + F.length), P = I + O.length;
d && P > d.reach && (d.reach = P);
var x = y.prev;
C && (x = o(n, x, C), I += C.length), l(n, x, R);
var D = new a(p, E ? i.tokenize(F, E) : F, T, F);
if (y = o(n, x, D), _ && o(n, y, _), R > 1) {
var U = {
cause: p + "," + h,
reach: P
};
e(t, n, r, y.prev, I, U), d && U.reach > d.reach && (d.reach = U.reach);
}
}
}
}
}
}(e, c, t, c.head, 0), function(e) {
var t = [], n = e.head.next;
for (;n !== e.tail; ) t.push(n.value), n = n.next;
return t;
}(c);
},
hooks: {
all: {},
add: function(e, t) {
var n = i.hooks.all;
n[e] = n[e] || [], n[e].push(t);
},
run: function(e, t) {
var n = i.hooks.all[e];
if (n && n.length) for (var r, a = 0; r = n[a++]; ) r(t);
}
},
Token: a
};
function a(e, t, n, r) {
this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length;
}
function s(e, t, n, r) {
e.lastIndex = t;
var i = e.exec(n);
if (i && r && i[1]) {
var a = i[1].length;
i.index += a, i[0] = i[0].slice(a);
}
return i;
}
function o(e, t, n) {
var r = t.next, i = {
value: n,
prev: t,
next: r
};
return t.next = i, r.prev = i, e.length++, i;
}
function l(e, t, n) {
for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
t.next = r, r.prev = t, e.length -= i;
}
if (e.Prism = i, a.stringify = function e(t, n) {
if ("string" == typeof t) return t;
if (Array.isArray(t)) {
var r = "";
return t.forEach(function(t) {
r += e(t, n);
}), r;
}
var a = {
type: t.type,
content: e(t.content, n),
tag: "span",
classes: [ "token", t.type ],
attributes: {},
language: n
}, s = t.alias;
s && (Array.isArray(s) ? Array.prototype.push.apply(a.classes, s) : a.classes.push(s)), 
i.hooks.run("wrap", a);
var o = "";
for (var l in a.attributes) o += " " + l + '="' + (a.attributes[l] || "").replace(/"/g, "&quot;") + '"';
return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + o + ">" + a.content + "</" + a.tag + ">";
}, !e.document) return e.addEventListener ? (i.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
var n = JSON.parse(t.data), r = n.language, a = n.code, s = n.immediateClose;
e.postMessage(i.highlight(a, i.languages[r], r)), s && e.close();
}, !1), i) : i;
var c = i.util.currentScript();
function u() {
i.manual || i.highlightAll();
}
if (c && (i.filename = c.src, c.hasAttribute("data-manual") && (i.manual = !0)), 
!i.manual) {
var d = document.readyState;
"loading" === d || "interactive" === d && c && c.defer ? document.addEventListener("DOMContentLoaded", u) : window.requestAnimationFrame ? window.requestAnimationFrame(u) : window.setTimeout(u, 16);
}
return i;
}("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
void 0 !== e && e.exports && (e.exports = n), "undefined" != typeof global && (global.Prism = n);
}, function(e, t) {
Prism.languages.markup = {
comment: {
pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
greedy: !0
},
prolog: {
pattern: /<\?[\s\S]+?\?>/,
greedy: !0
},
doctype: {
pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
greedy: !0,
inside: {
"internal-subset": {
pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
lookbehind: !0,
greedy: !0,
inside: null
},
string: {
pattern: /"[^"]*"|'[^']*'/,
greedy: !0
},
punctuation: /^<!|>$|[[\]]/,
"doctype-tag": /^DOCTYPE/i,
name: /[^\s<>'"]+/
}
},
cdata: {
pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
greedy: !0
},
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
greedy: !0,
inside: {
tag: {
pattern: /^<\/?[^\s>\/]+/,
inside: {
punctuation: /^<\/?/,
namespace: /^[^\s>\/:]+:/
}
},
"special-attr": [],
"attr-value": {
pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
inside: {
punctuation: [ {
pattern: /^=/,
alias: "attr-equals"
}, {
pattern: /^(\s*)["']|["']$/,
lookbehind: !0
} ]
}
},
punctuation: /\/?>/,
"attr-name": {
pattern: /[^\s>\/]+/,
inside: {
namespace: /^[^\s>\/:]+:/
}
}
}
},
entity: [ {
pattern: /&[\da-z]{1,8};/i,
alias: "named-entity"
}, /&#x?[\da-f]{1,8};/i ]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, 
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, 
Prism.hooks.add("wrap", function(e) {
"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
value: function(e, t) {
var n = {};
n["language-" + t] = {
pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
lookbehind: !0,
inside: Prism.languages[t]
}, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
var r = {
"included-cdata": {
pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
inside: n
}
};
r["language-" + t] = {
pattern: /[\s\S]+/,
inside: Prism.languages[t]
};
var i = {};
i[e] = {
pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
return e;
}), "i"),
lookbehind: !0,
greedy: !0,
inside: r
}, Prism.languages.insertBefore("markup", "cdata", i);
}
}), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
value: function(e, t) {
Prism.languages.markup.tag.inside["special-attr"].push({
pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
lookbehind: !0,
inside: {
"attr-name": /^[^\s=]+/,
"attr-value": {
pattern: /=[\s\S]+/,
inside: {
value: {
pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
lookbehind: !0,
alias: [ t, "language-" + t ],
inside: Prism.languages[t]
},
punctuation: [ {
pattern: /^=/,
alias: "attr-equals"
}, /"|'/ ]
}
}
}
});
}
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, 
Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), 
Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, 
Prism.languages.rss = Prism.languages.xml;
}, function(e, t) {
!function(e) {
var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
e.languages.css = {
comment: /\/\*[\s\S]*?\*\//,
atrule: {
pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source),
inside: {
rule: /^@[\w-]+/,
"selector-function-argument": {
pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
lookbehind: !0,
alias: "selector"
},
keyword: {
pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
lookbehind: !0
}
}
},
url: {
pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
greedy: !0,
inside: {
function: /^url/i,
punctuation: /^\(|\)$/,
string: {
pattern: RegExp("^" + t.source + "$"),
alias: "url"
}
}
},
selector: {
pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
lookbehind: !0
},
string: {
pattern: t,
greedy: !0
},
property: {
pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
lookbehind: !0
},
important: /!important\b/i,
function: {
pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
lookbehind: !0
},
punctuation: /[(){};:,]/
}, e.languages.css.atrule.inside.rest = e.languages.css;
var n = e.languages.markup;
n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
}(Prism);
}, function(e, t) {
!function(e) {
var t, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
e.languages.css.selector = {
pattern: e.languages.css.selector.pattern,
lookbehind: !0,
inside: t = {
"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
"pseudo-class": /:[-\w]+/,
class: /\.[-\w]+/,
id: /#[-\w]+/,
attribute: {
pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
greedy: !0,
inside: {
punctuation: /^\[|\]$/,
"case-sensitivity": {
pattern: /(\s)[si]$/i,
lookbehind: !0,
alias: "keyword"
},
namespace: {
pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
lookbehind: !0,
inside: {
punctuation: /\|$/
}
},
"attr-name": {
pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
lookbehind: !0
},
"attr-value": [ n, {
pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
lookbehind: !0
} ],
operator: /[|~*^$]?=/
}
},
"n-th": [ {
pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
lookbehind: !0,
inside: {
number: /[\dn]+/,
operator: /[+-]/
}
}, {
pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
lookbehind: !0
} ],
combinator: />|\+|~|\|\|/,
punctuation: /[(),]/
}
}, e.languages.css.atrule.inside["selector-function-argument"].inside = t, e.languages.insertBefore("css", "property", {
variable: {
pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
lookbehind: !0
}
});
var r = {
pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
lookbehind: !0
}, i = {
pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
lookbehind: !0
};
e.languages.insertBefore("css", "function", {
operator: {
pattern: /(\s)[+\-*\/](?=\s)/,
lookbehind: !0
},
hexcode: {
pattern: /\B#[\da-f]{3,8}\b/i,
alias: "color"
},
color: [ {
pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
lookbehind: !0
}, {
pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
inside: {
unit: r,
number: i,
function: /[\w-]+(?=\()/,
punctuation: /[(),]/
}
} ],
entity: /\\[\da-f]{1,8}/i,
unit: r,
number: i
});
}(Prism);
}, function(e, t) {
Prism.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
lookbehind: !0,
greedy: !0
}, {
pattern: /(^|[^\\:])\/\/.*/,
lookbehind: !0,
greedy: !0
} ],
string: {
pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
"class-name": {
pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
lookbehind: !0,
inside: {
punctuation: /[.\\]/
}
},
keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
boolean: /\b(?:false|true)\b/,
function: /\b\w+(?=\()/,
number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
punctuation: /[{}[\];(),.:]/
};
}, function(e, t) {
Prism.languages.javascript = Prism.languages.extend("clike", {
"class-name": [ Prism.languages.clike["class-name"], {
pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
lookbehind: !0
} ],
keyword: [ {
pattern: /((?:^|\})\s*)catch\b/,
lookbehind: !0
}, {
pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
lookbehind: !0
} ],
function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
number: {
pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
lookbehind: !0
},
operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, 
Prism.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
lookbehind: !0,
greedy: !0,
inside: {
"regex-source": {
pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
lookbehind: !0,
alias: "language-regex",
inside: Prism.languages.regex
},
"regex-delimiter": /^\/|\/$/,
"regex-flags": /^[a-z]+$/
}
},
"function-variable": {
pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
alias: "function"
},
parameter: [ {
pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
lookbehind: !0,
inside: Prism.languages.javascript
} ],
constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
hashbang: {
pattern: /^#!.*/,
greedy: !0,
alias: "comment"
},
"template-string": {
pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
greedy: !0,
inside: {
"template-punctuation": {
pattern: /^`|`$/,
alias: "string"
},
interpolation: {
pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
lookbehind: !0,
inside: {
"interpolation-punctuation": {
pattern: /^\$\{|\}$/,
alias: "punctuation"
},
rest: Prism.languages.javascript
}
},
string: /[\s\S]+/
}
},
"string-property": {
pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
lookbehind: !0,
greedy: !0,
alias: "property"
}
}), Prism.languages.insertBefore("javascript", "operator", {
"literal-property": {
pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
lookbehind: !0,
alias: "property"
}
}), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), 
Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), 
Prism.languages.js = Prism.languages.javascript;
}, function(e, t) {
!function(e) {
function t(e) {
return RegExp("(^(?:" + e + "):[ \t]*(?![ \t]))[^]+", "i");
}
e.languages.http = {
"request-line": {
pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
inside: {
method: {
pattern: /^[A-Z]+\b/,
alias: "property"
},
"request-target": {
pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
lookbehind: !0,
alias: "url",
inside: e.languages.uri
},
"http-version": {
pattern: /^(\s)HTTP\/[\d.]+/,
lookbehind: !0,
alias: "property"
}
}
},
"response-status": {
pattern: /^HTTP\/[\d.]+ \d+ .+/m,
inside: {
"http-version": {
pattern: /^HTTP\/[\d.]+/,
alias: "property"
},
"status-code": {
pattern: /^(\s)\d+(?=\s)/,
lookbehind: !0,
alias: "number"
},
"reason-phrase": {
pattern: /^(\s).+/,
lookbehind: !0,
alias: "string"
}
}
},
header: {
pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
inside: {
"header-value": [ {
pattern: t(/Content-Security-Policy/.source),
lookbehind: !0,
alias: [ "csp", "languages-csp" ],
inside: e.languages.csp
}, {
pattern: t(/Public-Key-Pins(?:-Report-Only)?/.source),
lookbehind: !0,
alias: [ "hpkp", "languages-hpkp" ],
inside: e.languages.hpkp
}, {
pattern: t(/Strict-Transport-Security/.source),
lookbehind: !0,
alias: [ "hsts", "languages-hsts" ],
inside: e.languages.hsts
}, {
pattern: t(/[^:]+/.source),
lookbehind: !0
} ],
"header-name": {
pattern: /^[^:]+/,
alias: "keyword"
},
punctuation: /^:/
}
}
};
var n, r = e.languages, i = {
"application/javascript": r.javascript,
"application/json": r.json || r.javascript,
"application/xml": r.xml,
"text/xml": r.xml,
"text/html": r.html,
"text/css": r.css,
"text/plain": r.plain
}, a = {
"application/json": !0,
"application/xml": !0
};
function s(e) {
return "(?:" + e + "|" + ("\\w+/(?:[\\w.-]+\\+)+" + e.replace(/^[a-z]+\//, "") + "(?![+\\w.-])") + ")";
}
for (var o in i) if (i[o]) {
n = n || {};
var l = a[o] ? s(o) : o;
n[o.replace(/\//g, "-")] = {
pattern: RegExp("(" + /content-type:\s*/.source + l + /(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source + ")" + /[^ \t\w-][\s\S]*/.source, "i"),
lookbehind: !0,
inside: i[o]
};
}
n && e.languages.insertBefore("http", "header", n);
}(Prism);
}, function(e, t) {
Prism.languages.scss = Prism.languages.extend("css", {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
lookbehind: !0
},
atrule: {
pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
inside: {
rule: /@[\w-]+/
}
},
url: /(?:[-a-z]+-)?url(?=\()/i,
selector: {
pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
inside: {
parent: {
pattern: /&/,
alias: "important"
},
placeholder: /%[-\w]+/,
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
},
property: {
pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
inside: {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
}
}), Prism.languages.insertBefore("scss", "atrule", {
keyword: [ /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
pattern: /( )(?:from|through)(?= )/,
lookbehind: !0
} ]
}), Prism.languages.insertBefore("scss", "important", {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
"module-modifier": {
pattern: /\b(?:as|hide|show|with)\b/i,
alias: "keyword"
},
placeholder: {
pattern: /%[-\w]+/,
alias: "selector"
},
statement: {
pattern: /\B!(?:default|optional)\b/i,
alias: "keyword"
},
boolean: /\b(?:false|true)\b/,
null: {
pattern: /\bnull\b/,
alias: "keyword"
},
operator: {
pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
lookbehind: !0
}
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
}, function(e, t) {
Prism.languages.sql = {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
lookbehind: !0
},
variable: [ {
pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
greedy: !0
}, /@[\w.$]+/ ],
string: {
pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
greedy: !0,
lookbehind: !0
},
identifier: {
pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
greedy: !0,
lookbehind: !0,
inside: {
punctuation: /^`|`$/
}
},
function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
punctuation: /[;[\]()`,.]/
};
}, function(e, t) {
!function(e) {
var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, r = {
pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
lookbehind: !0,
inside: {
namespace: {
pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
inside: {
punctuation: /\./
}
},
punctuation: /\./
}
};
e.languages.java = e.languages.extend("clike", {
string: {
pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
lookbehind: !0,
greedy: !0
},
"class-name": [ r, {
pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
lookbehind: !0,
inside: r.inside
}, {
pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n + /[A-Z]\w*\b/.source),
lookbehind: !0,
inside: r.inside
} ],
keyword: t,
function: [ e.languages.clike.function, {
pattern: /(::\s*)[a-z_]\w*/,
lookbehind: !0
} ],
number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
operator: {
pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
lookbehind: !0
},
constant: /\b[A-Z][A-Z_\d]+\b/
}), e.languages.insertBefore("java", "string", {
"triple-quoted-string": {
pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
greedy: !0,
alias: "string"
},
char: {
pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
greedy: !0
}
}), e.languages.insertBefore("java", "class-name", {
annotation: {
pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
lookbehind: !0,
alias: "punctuation"
},
generics: {
pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
inside: {
"class-name": r,
keyword: t,
punctuation: /[<>(),.:]/,
operator: /[?&|]/
}
},
import: [ {
pattern: RegExp(/(\bimport\s+)/.source + n + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
lookbehind: !0,
inside: {
namespace: r.inside.namespace,
punctuation: /\./,
operator: /\*/,
"class-name": /\w+/
}
}, {
pattern: RegExp(/(\bimport\s+static\s+)/.source + n + /(?:\w+|\*)(?=\s*;)/.source),
lookbehind: !0,
alias: "static",
inside: {
namespace: r.inside.namespace,
static: /\b\w+$/,
punctuation: /\./,
operator: /\*/,
"class-name": /\w+/
}
} ],
namespace: {
pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
return t.source;
})),
lookbehind: !0,
inside: {
punctuation: /\./
}
}
});
}(Prism);
}, function(e, t) {
!function(e) {
var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n = {
pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
lookbehind: !0,
alias: "punctuation",
inside: null
}, r = {
bash: n,
environment: {
pattern: RegExp("\\$" + t),
alias: "constant"
},
variable: [ {
pattern: /\$?\(\([\s\S]+?\)\)/,
greedy: !0,
inside: {
variable: [ {
pattern: /(^\$\(\([\s\S]+)\)\)/,
lookbehind: !0
}, /^\$\(\(/ ],
number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
punctuation: /\(\(?|\)\)?|,|;/
}
}, {
pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
greedy: !0,
inside: {
variable: /^\$\(|^`|\)$|`$/
}
}, {
pattern: /\$\{[^}]+\}/,
greedy: !0,
inside: {
operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
punctuation: /[\[\]]/,
environment: {
pattern: RegExp("(\\{)" + t),
lookbehind: !0,
alias: "constant"
}
}
}, /\$(?:\w+|[#?*!@$])/ ],
entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
};
e.languages.bash = {
shebang: {
pattern: /^#!\s*\/.*/,
alias: "important"
},
comment: {
pattern: /(^|[^"{\\$])#.*/,
lookbehind: !0
},
"function-name": [ {
pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
lookbehind: !0,
alias: "function"
}, {
pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
alias: "function"
} ],
"for-or-select": {
pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
alias: "variable",
lookbehind: !0
},
"assign-left": {
pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
inside: {
environment: {
pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
lookbehind: !0,
alias: "constant"
}
},
alias: "variable",
lookbehind: !0
},
parameter: {
pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
alias: "variable",
lookbehind: !0
},
string: [ {
pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
lookbehind: !0,
greedy: !0,
inside: r
}, {
pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
lookbehind: !0,
greedy: !0,
inside: {
bash: n
}
}, {
pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
lookbehind: !0,
greedy: !0,
inside: r
}, {
pattern: /(^|[^$\\])'[^']*'/,
lookbehind: !0,
greedy: !0
}, {
pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
greedy: !0,
inside: {
entity: r.entity
}
} ],
environment: {
pattern: RegExp("\\$?" + t),
alias: "constant"
},
variable: r.variable,
function: {
pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
lookbehind: !0
},
keyword: {
pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
lookbehind: !0
},
builtin: {
pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
lookbehind: !0,
alias: "class-name"
},
boolean: {
pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
lookbehind: !0
},
"file-descriptor": {
pattern: /\B&\d\b/,
alias: "important"
},
operator: {
pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
inside: {
"file-descriptor": {
pattern: /^\d/,
alias: "important"
}
}
},
punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
number: {
pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
lookbehind: !0
}
}, n.inside = e.languages.bash;
for (var i = [ "comment", "function-name", "for-or-select", "assign-left", "parameter", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number" ], a = r.variable[1].inside, s = 0; s < i.length; s++) a[i[s]] = e.languages.bash[i[s]];
e.languages.sh = e.languages.bash, e.languages.shell = e.languages.bash;
}(Prism);
}, function(e, t, n) {
"use strict";
e.exports = (e => {
e.languages.sql = {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
lookbehind: !0
},
variable: [ {
pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
greedy: !0
}, /@[\w.$]+/ ],
string: {
pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
greedy: !0,
lookbehind: !0
},
identifier: {
pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
greedy: !0,
lookbehind: !0,
inside: {
punctuation: /^`|`$/
}
},
function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
punctuation: /[;[\]()`,.]/,
error: /^\s*ERROR/
};
});
}, function(e, t, n) {
"use strict";
let r = n(4), i = n(60), a = n(22);
n(61);
const s = n(20);
let o = n(23);
const l = n(62), c = n(20).lang;
l.i18n.add("prism", n(66)("./" + c + ".yml")), e.exports = function(e) {
let t, n = e.querySelector("pre"), c = Array.from(n.childNodes).find(e => "CODE" === e.tagName), u = c.textContent;
e.codeBox = this;
let d = u;
e.hasAttribute("data-async") && (d = `(async () => {\n${u}\n})()`), Prism.highlightElement(c);
let p = a(n.innerHTML);
n.insertAdjacentHTML("afterBegin", p);
let f = JSON.parse(e.getAttribute("data-highlight"));
f && function(e, t) {
let n = e.innerHTML.split(/\n/);
for (let e of t) if (void 0 !== e.end) n[e.start] = '<em class="block-highlight">' + n[e.start], 
n[e.end] += "</em>"; else {
let t = n[e.start], r = e.cols, i = !1, a = -1, s = "";
for (let e = 0; e < t.length; e++) {
if ("<" == t[e] && (i = !0), i) s += t[e]; else {
if (a++, r.find(e => e.start == a) && (s += '<em class="inline-highlight">'), s += t[e], 
"&" == t[e]) {
let n = [ "lt;", "gt;", "amp;", "quot;" ];
for (let r of n) t.slice(e + 1, e + 1 + r.length) == r && (e += r.length, s += r);
}
r.find(e => e.end == a + 1) && (s += "</em>");
}
">" == t[e] && (i = !1);
}
n[e.start] = s;
}
e.innerHTML = n.join("\n");
}(c, f);
let h, g, E, m = n.classList.contains("language-javascript"), b = n.classList.contains("language-markup"), T = +e.getAttribute("data-trusted"), S = !+e.getAttribute("data-no-strict") && m ? '"use strict";' : "", A = `globalThis.__codeBoxId = "${e.id}";`, y = `${S}\n\n${d}`;
d = `${S}${A}\n\n${d}`;
let I = !0;
if (!m && !b) return;
let O = e.querySelector('[data-action="run"]');
O && (O.onclick = function() {
return this.blur(), w(), !1;
});
let v = e.querySelector('[data-action="edit"]');
function R() {
let e = h.contentWindow;
"function" == typeof e.postMessage ? e.postMessage(d, s.lookatCodeUrlBase + "/showjs") : alert("Sorry, your browser is too old");
}
function L() {
if (e.hasAttribute("data-global")) {
g || ((g = document.createElement("iframe")).className = "js-frame", g.style.width = 0, 
g.style.height = 0, g.style.border = "none", g.name = "js-global-frame", document.body.appendChild(g));
let t = document.createElement("form");
t.style.display = "none", t.method = "POST", t.enctype = "multipart/form-data", 
t.action = s.lookatCodeUrlBase + "/showhtml", t.target = "js-global-frame";
let n = e.hasAttribute("data-module") ? ' type="module"' : "", r = document.createElement("textarea");
r.name = "code", r.value = N(`<script${n}>\n${d}\n<\/script>`), t.appendChild(r), 
g.parentNode.insertBefore(t, g.nextSibling), t.submit(), t.remove();
} else if (T) {
if (e.hasAttribute("data-autorun") || e.hasAttribute("data-module")) return void function(e) {
let t = document.createElement("script");
t.type = "module", t.text = e, document.head.append(t), t.remove();
}(d);
try {
window.eval.call(window, d);
} catch (e) {
alert(e.constructor.name + ": " + e.message);
}
} else e.hasAttribute("data-refresh") && h && (h.remove(), h = null), h ? R() : ((h = document.createElement("iframe")).className = "js-frame", 
h.src = s.lookatCodeUrlBase + "/showjs", h.style.width = 0, h.style.height = 0, 
h.style.border = "none", h.onload = function() {
R();
}, document.body.appendChild(h));
}
function N(e) {
if (e.match(/^\s*<!doctype/i)) return e;
let t = e;
return e.match(/<body/i) || (t = `<body>\n${t}\n</body>`), t = "<!doctype html>\n" + t;
}
function w() {
t && (t.remove(), t = null), m ? L() : function() {
let t;
if (E && e.hasAttribute("data-refresh") && (E.remove(), E = null), E || (E = e.querySelector(".code-result")), 
E) t = E.querySelector("iframe"); else {
if ((E = document.createElement("div")).className = "code-result code-example__result", 
(t = document.createElement("iframe")).name = e.id, t.className = "code-result__iframe", 
"0" === e.getAttribute("data-demo-height")) E.style.display = "none"; else if (e.hasAttribute("data-demo-height")) {
let n = +e.getAttribute("data-demo-height");
t.style.height = n + "px";
}
E.appendChild(t), e.appendChild(E);
}
if (T && !t.hasCustomConsoleLog) {
t.hasCustomConsoleLog = !0;
let n = t.contentWindow.console.log.bind(t.contentWindow.console);
t.contentWindow.console.log = function(...t) {
n(...t);
let r = o(t);
window.postMessage({
type: "console-log",
log: r,
codeBoxId: e.id
}, "*");
};
}
if (T) {
let n = t.contentDocument || t.contentWindow.document;
n.open(), n.write(N(u)), n.close(), e.hasAttribute("data-demo-height") || r.iframe(t), 
I && e.hasAttribute("data-autorun") || i(E) || E.scrollIntoView(!1);
} else {
let n = document.createElement("form");
n.style.display = "none", n.method = "POST", n.enctype = "multipart/form-data", 
n.action = s.lookatCodeUrlBase + "/showhtml", n.target = t.name;
let a = document.createElement("textarea");
a.name = "code";
let o = N(u);
o.includes("console.log") && (o = o.replace(/<head>|<body>/im, "$&__LOOKATCODE_SCRIPT__")), 
a.value = o, n.appendChild(a), t.parentNode.insertBefore(n, t.nextSibling), n.submit(), 
n.remove(), I && e.hasAttribute("data-autorun") || (t.onload = function() {
e.hasAttribute("data-demo-height") || r.iframe(t), i(E) || E.scrollIntoView(!1);
});
}
}(), I = !1;
}
v && (v.onclick = function() {
return this.blur(), function() {
let e;
e = b ? N(u) : `<!DOCTYPE html>\n<script>\n${y}\n<\/script>`;
let t = document.createElement("form");
t.action = "https://plnkr.co/edit/?p=preview", t.method = "POST", t.target = "_blank", 
document.body.appendChild(t);
let n = document.createElement("textarea");
n.name = "files[index.html]", n.value = e, t.appendChild(n);
let r = document.createElement("input");
r.name = "description", r.value = "Fork from " + window.location, t.appendChild(r), 
t.submit(), t.remove();
}(), !1;
}), e.hasAttribute("data-autorun") && ("epub" == window.ebookType && "no-epub" == e.getAttribute("data-autorun") ? e.querySelector("iframe").remove() : setTimeout(w, 100)), 
this.consoleLog = function(n) {
if (!t) {
(t = document.createElement("div")).className = "codebox__output", e.append(t);
let n = document.createElement("div");
n.className = "codebox__output-label", n.innerHTML = l("prism.output"), t.append(n);
}
let r = document.createElement("div");
r.className = "codebox__output-line", r.innerHTML = n, t.append(r);
};
};
}, function(e, t, n) {
"use strict";
e.exports = function(e) {
let t = e.getBoundingClientRect(), n = 0;
if (t.top < 0) n = t.bottom; else {
if (!(t.bottom > window.innerHeight)) return !0;
n = window.innerHeight - top;
}
return n > 10;
};
}, function(e, t, n) {
"use strict";
e.exports = function(e) {
if (!e || !e.length) return "";
let t = [];
for (let n of e) {
let e = `<code class="block-highlight${n.cols ? " block-highlight_inline" : ""}" data-start="${n.start}">`;
if (e += "\n".repeat(n.start), n.end) e += `<code class="mask">${"\n".repeat(n.end - n.start + 1)}</code>`; else if (n.cols) for (let t = 0; t < n.cols.length; t++) {
let r = n.cols[t], i = 0 === t ? null : n.cols[t - 1];
e += " ".repeat(i ? r.start - i.end : r.start), e += `<code class="mask-inline">${" ".repeat(r.end - r.start)}</code>`;
}
e += "</code>", t.push(e);
}
return t.join("");
};
}, function(e, t, n) {
"use strict";
const r = new (n(63))("en");
let i = console.error;
function a(e) {
return r.hasPhrase(s, e) || i("No such phrase", e), r.t(s, ...arguments);
}
e.exports = a;
const s = n(20).lang;
"en" !== s && r.setFallback(s, "en"), r.add = ((...e) => r.addPhrase(s, ...e)), 
a.i18n = r;
}, function(e, t, n) {
"use strict";
var r = n(64), i = n(65);
function a(e) {
return Object.prototype.toString.call(e);
}
function s(e) {
return "[object String]" === a(e);
}
function o(e) {
return !isNaN(e) && isFinite(e);
}
function l(e) {
return !0 === e || !1 === e;
}
function c(e) {
return "[object Object]" === a(e);
}
var u = Array.isArray || function(e) {
return "[object Array]" === a(e);
}, d = Array.prototype.forEach;
function p(e, t, n) {
if (null !== e) if (d && e.forEach === d) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, i = e.length; r < i; r += 1) t.call(n, e[r], r, e); else for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(n, e[a], a, e);
}
var f = /%[sdj%]/g;
function h(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(f, function(e) {
if ("%%" === e) return "%";
if (t >= r) return e;
switch (e) {
case "%s":
return String(n[t++]);

case "%d":
return Number(n[t++]);

case "%j":
return JSON.stringify(n[t++]);

default:
return e;
}
});
}
var g = "en";
function E(e) {
var t = {};
return p(e || {}, function(e, n) {
e && "object" == typeof e ? p(E(e), function(e, r) {
t[n + "." + r] = e;
}) : t[n] = e;
}), t;
}
var m = "#@$";
function b(e, t) {
return e + m + t;
}
function T(e, t, n) {
var r = b(t, n), i = e._storage;
if (i.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var a = e._fallbacks_cache;
if (a.hasOwnProperty(r)) return a[r];
for (var s, o = e._fallbacks[t] || [ e._defaultLocale ], l = 0, c = o.length; l < c; l++) if (s = b(o[l], n), 
i.hasOwnProperty(s)) return a[r] = s, a[r];
return a[r] = null, null;
}
function S(e, t, n) {
var r = i.indexOf(e, t);
return -1 === r ? h('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? h('[plural form %d ("%s") not found in translation]', r, i.forms(e)[r]) : n[r];
}
function A(e) {
if (!(this instanceof A)) return new A(e);
this._defaultLocale = e ? String(e) : g, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
A.prototype.addPhrase = function(e, t, n, r) {
var i, a = this;
if (l(r)) i = r ? 1 / 0 : 0; else if (o(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (c(n) && i > 0) return p(n, function(n, r) {
a.addPhrase(e, (t ? t + "." : "") + r, n, i - 1);
}), this;
if (s(n)) this._storage[b(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(u(n) || o(n) || l(n) || 0 === i && c(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[b(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return a._fallbacks_cache = {}, this;
}, A.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = u(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var y = /#\{|\(\(|\\\\/;
A.prototype.translate = function(e, t, n) {
var i, l = T(this, e, t);
return l ? (i = this._storage[l]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(e, t, n) {
var i, a, s, o, l, c;
return y.test(t) ? 1 === (i = r.parse(t)).length && "literal" === i[0].type ? i[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new A(n)), 
c = e._plurals_cache[n], (a = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
a.push("params = flatten(params);"), p(i, function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return s = e.anchor, void a.push(h('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', s, s, s));
if ("plural" !== e.type) throw new Error("Unknown node type");
s = e.anchor, o = {}, p(e.strict, function(t, i) {
var a = r.parse(t);
if (1 === a.length && "literal" === a[0].type) return o[i] = !1, void (e.strict[i] = a[0].text);
o[i] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), l = {}, p(e.forms, function(t, i) {
var a, s = r.parse(t);
if (1 === s.length && "literal" === s[0].type) return a = s[0].text, e.forms[i] = a, 
void (l[a] = !1);
l[t] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), a.push(h("loc = %j;", n)), a.push(h("loc_plzr = %j;", n.split(/[-_]/)[0])), 
a.push(h("anchor = params[%j];", s)), a.push(h("cache = this._plurals_cache[loc];")), 
a.push(h("strict = %j;", e.strict)), a.push(h("strict_exec = %j;", o)), a.push(h("forms = %j;", e.forms)), 
a.push(h("forms_exec = %j;", l)), a.push("if (+(anchor) != anchor) {"), a.push(h('  str += "[invalid plurals amount: %s(" + anchor + ")]";', s)), 
a.push("} else {"), a.push("  if (strict[anchor] !== undefined) {"), a.push("    plrl = strict[anchor];"), 
a.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), a.push("  } else {"), 
a.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), a.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
a.push("  }"), a.push("}");
} else a.push(h("str += %j;", e.text));
}), a.push("return str;"), new Function("params", "flatten", "pluralizer", a.join("\n"))) : t;
}(this, i.translation, i.locale)), "[object Function]" !== a(i.compiled) ? i.compiled : ((o(n) || s(n)) && (n = {
count: n,
value: n
}), i.compiled.call(this, n, E, S))) : e + ": No translation for [" + t + "]";
}, A.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(b(e, t)) : !!T(this, e, t);
}, A.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(b(e, t)) ? e : null;
var r = T(this, e, t);
return r ? r.split(m, 2)[0] : null;
}, A.prototype.t = A.prototype.translate, A.prototype.stringify = function(e) {
var t = this, n = {};
p(this._storage, function(e, t) {
n[t.split(m)[1]] = !0;
});
var r = {};
p(n, function(n, i) {
var a = T(t, e, i);
if (a) {
var s = t._storage[a].locale;
r[s] || (r[s] = {}), r[s][i] = t._storage[a].translation;
}
});
var i = {
fallback: {},
locales: r
}, a = (t._fallbacks[e] || []).slice(0, -1);
return a.length && (i.fallback[e] = a), JSON.stringify(i);
}, A.prototype.load = function(e) {
var t = this;
return s(e) && (e = JSON.parse(e)), p(e.locales, function(e, n) {
p(e, function(e, r) {
t.addPhrase(n, r, e, 0);
});
}), p(e.fallback, function(e, n) {
t.setFallback(n, e);
}), this;
}, e.exports = A;
}, function(e, t, n) {
"use strict";
e.exports = function() {
function e(e, t, n, r, i, a) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = i, 
this.column = a, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n();
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, i = {}, a = {
start: ue
}, s = ue, o = i, l = "((", c = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, p = null, f = function(e, t) {
return {
type: "plural",
forms: function(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}(e),
strict: function(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}(e),
anchor: t || "count"
};
}, h = "|", g = {
type: "literal",
value: "|",
description: '"|"'
}, E = function(e, t) {
return [ e ].concat(t);
}, m = function(e) {
return [ e ];
}, b = "=", T = {
type: "literal",
value: "=",
description: '"="'
}, S = /^[0-9]/, A = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, y = " ", I = {
type: "literal",
value: " ",
description: '" "'
}, O = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, v = function() {
return {
text: se()
};
}, R = "\\", L = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, N = /^[\\|)(]/, w = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, k = function(e) {
return e;
}, F = void 0, C = {
type: "any",
description: "any character"
}, _ = function() {
return se();
}, P = ":", x = {
type: "literal",
value: ":",
description: '":"'
}, D = function(e) {
return e;
}, U = "#{", M = {
type: "literal",
value: "#{",
description: '"#{"'
}, B = "}", G = {
type: "literal",
value: "}",
description: '"}"'
}, H = function(e) {
return {
type: "variable",
anchor: e
};
}, $ = ".", j = {
type: "literal",
value: ".",
description: '"."'
}, W = function() {
return se();
}, X = /^[a-zA-Z_$]/, Y = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, z = /^[a-zA-Z0-9_$]/, q = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, K = function(e) {
return e;
}, V = function(e) {
return {
type: "literal",
text: e.join("")
};
}, Z = /^[\\#()|]/, Q = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, J = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, ie = [], ae = 0;
if ("startRule" in r) {
if (!(r.startRule in a)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
s = a[r.startRule];
}
function se() {
return t.substring(ee, J);
}
function oe(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var i, a;
for (i = n; i < r; i++) "\n" === (a = t.charAt(i)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === a || "\u2028" === a || "\u2029" === a ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function le(e) {
J < re || (J > re && (re = J, ie = []), ie.push(e));
}
function ce(n, r, i) {
var a = oe(i), s = i < t.length ? t.charAt(i) : null;
return null !== r && function(e) {
var t = 1;
for (e.sort(function(e, t) {
return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
}); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}(r), new e(null !== n ? n : function(e, t) {
var n, r = new Array(e.length);
for (n = 0; n < e.length; n++) r[n] = e[n].description;
return "Expected " + (e.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[e.length - 1] : r[0]) + " but " + (t ? '"' + function(e) {
function t(e) {
return e.charCodeAt(0).toString(16).toUpperCase();
}
return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
return "\\x0" + t(e);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
return "\\x" + t(e);
}).replace(/[\u0180-\u0FFF]/g, function(e) {
return "\\u0" + t(e);
}).replace(/[\u1080-\uFFFF]/g, function(e) {
return "\\u" + t(e);
});
}(t) + '"' : "end of input") + " found.";
}(r, s), r, s, i, a.line, a.column);
}
function ue() {
var e, t;
for (e = [], (t = me()) === i && (t = de()) === i && (t = he()); t !== i; ) e.push(t), 
(t = me()) === i && (t = de()) === i && (t = he());
return e;
}
function de() {
var e, n, r, a, s;
return e = J, t.substr(J, 2) === l ? (n = l, J += 2) : (n = i, 0 === ae && le(c)), 
n !== i && (r = function e() {
var n, r, a, s;
return n = J, (r = pe()) !== i ? (124 === t.charCodeAt(J) ? (a = h, J++) : (a = i, 
0 === ae && le(g)), a !== i && (s = e()) !== i ? (ee = n, r = E(r, s), n = r) : (J = n, 
n = o)) : (J = n, n = o), n === i && (n = J, (r = pe()) !== i && (ee = n, r = m(r)), 
n = r), n;
}()) !== i ? (t.substr(J, 2) === u ? (a = u, J += 2) : (a = i, 0 === ae && le(d)), 
a !== i ? ((s = function() {
var e, n, r;
return e = J, 58 === t.charCodeAt(J) ? (n = P, J++) : (n = i, 0 === ae && le(x)), 
n !== i && (r = ge()) !== i ? (ee = e, n = D(r), e = n) : (J = e, e = o), e;
}()) === i && (s = p), s !== i ? (ee = e, e = n = f(r, s)) : (J = e, e = o)) : (J = e, 
e = o)) : (J = e, e = o), e;
}
function pe() {
var e, n, r, a, s, l;
if (e = J, 61 === t.charCodeAt(J) ? (n = b, J++) : (n = i, 0 === ae && le(T)), n !== i) {
if (r = [], S.test(t.charAt(J)) ? (a = t.charAt(J), J++) : (a = i, 0 === ae && le(A)), 
a !== i) for (;a !== i; ) r.push(a), S.test(t.charAt(J)) ? (a = t.charAt(J), J++) : (a = i, 
0 === ae && le(A)); else r = o;
if (r !== i) if (32 === t.charCodeAt(J) ? (a = y, J++) : (a = i, 0 === ae && le(I)), 
a === i && (a = p), a !== i) {
if (s = [], (l = fe()) !== i) for (;l !== i; ) s.push(l), l = fe(); else s = o;
s !== i ? (ee = e, e = n = O(r, s)) : (J = e, e = o);
} else J = e, e = o; else J = e, e = o;
} else J = e, e = o;
if (e === i) {
if (e = J, n = [], (r = fe()) !== i) for (;r !== i; ) n.push(r), r = fe(); else n = o;
n !== i && (ee = e, n = v()), e = n;
}
return e;
}
function fe() {
var e, n, r;
return e = J, 92 === t.charCodeAt(J) ? (n = R, J++) : (n = i, 0 === ae && le(L)), 
n !== i ? (N.test(t.charAt(J)) ? (r = t.charAt(J), J++) : (r = i, 0 === ae && le(w)), 
r !== i ? (ee = e, e = n = k(r)) : (J = e, e = o)) : (J = e, e = o), e === i && (e = J, 
n = J, ae++, 124 === t.charCodeAt(J) ? (r = h, J++) : (r = i, 0 === ae && le(g)), 
r === i && (t.substr(J, 2) === u ? (r = u, J += 2) : (r = i, 0 === ae && le(d))), 
ae--, r === i ? n = F : (J = n, n = o), n !== i ? (t.length > J ? (r = t.charAt(J), 
J++) : (r = i, 0 === ae && le(C)), r !== i ? (ee = e, e = n = _()) : (J = e, e = o)) : (J = e, 
e = o)), e;
}
function he() {
var e, n, r, a;
return e = J, t.substr(J, 2) === U ? (n = U, J += 2) : (n = i, 0 === ae && le(M)), 
n !== i && (r = ge()) !== i ? (125 === t.charCodeAt(J) ? (a = B, J++) : (a = i, 
0 === ae && le(G)), a !== i ? (ee = e, e = n = H(r)) : (J = e, e = o)) : (J = e, 
e = o), e;
}
function ge() {
var e, n, r, a;
if (e = J, Ee() !== i) if (46 === t.charCodeAt(J) ? (n = $, J++) : (n = i, 0 === ae && le(j)), 
n !== i) {
if (r = [], (a = ge()) !== i) for (;a !== i; ) r.push(a), a = ge(); else r = o;
r !== i ? (ee = e, e = W()) : (J = e, e = o);
} else J = e, e = o; else J = e, e = o;
return e === i && (e = Ee()), e;
}
function Ee() {
var e, n, r, a;
if (e = J, X.test(t.charAt(J)) ? (n = t.charAt(J), J++) : (n = i, 0 === ae && le(Y)), 
n !== i) {
for (r = [], z.test(t.charAt(J)) ? (a = t.charAt(J), J++) : (a = i, 0 === ae && le(q)); a !== i; ) r.push(a), 
z.test(t.charAt(J)) ? (a = t.charAt(J), J++) : (a = i, 0 === ae && le(q));
r !== i ? (ee = e, e = n = _()) : (J = e, e = o);
} else J = e, e = o;
return e;
}
function me() {
var e, t, n, r, a;
if (e = J, t = [], n = J, r = J, ae++, (a = de()) === i && (a = he()), ae--, a === i ? r = F : (J = r, 
r = o), r !== i && (a = be()) !== i ? (ee = n, n = r = K(a)) : (J = n, n = o), n !== i) for (;n !== i; ) t.push(n), 
n = J, r = J, ae++, (a = de()) === i && (a = he()), ae--, a === i ? r = F : (J = r, 
r = o), r !== i && (a = be()) !== i ? (ee = n, n = r = K(a)) : (J = n, n = o); else t = o;
return t !== i && (ee = e, t = V(t)), e = t;
}
function be() {
var e, n, r;
return e = J, 92 === t.charCodeAt(J) ? (n = R, J++) : (n = i, 0 === ae && le(L)), 
n !== i ? (Z.test(t.charAt(J)) ? (r = t.charAt(J), J++) : (r = i, 0 === ae && le(Q)), 
r !== i ? (ee = e, e = n = k(r)) : (J = e, e = o)) : (J = e, e = o), e === i && (t.length > J ? (e = t.charAt(J), 
J++) : (e = i, 0 === ae && le(C))), e;
}
if ((n = s()) !== i && J === t.length) return n;
throw n !== i && J < t.length && le({
type: "end",
description: "end of input"
}), ce(null, ie, re);
}
};
}();
}, function(e, t, n) {
"use strict";
var r = {};
function i(e) {
var t;
return r[e] ? e : (t = e.toLowerCase().replace("_", "-"), r[t] ? t : (t = t.split("-")[0], 
r[t] ? t : null));
}
function a(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].cFn) return 0;
var a = String(t), s = a.indexOf(".") < 0 ? "" : a.split(".")[1], o = s.length, l = +t, c = +a.split(".")[0], u = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].cFn(l, c, o, +s, u);
}
function s(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].oFn) return 0;
var a = String(t), s = a.indexOf(".") < 0 ? "" : a.split(".")[1], o = s.length, l = +t, c = +a.split(".")[0], u = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].oFn(l, c, o, +s, u);
}
e.exports = function(e, t) {
var n = i(e);
return n ? r[n].c[a(n, t)] : null;
}, e.exports.indexOf = a, e.exports.forms = function(e) {
var t = i(e);
return r[t] ? r[t].c : null;
}, e.exports.ordinal = function(e, t) {
var n = i(e);
return r[n] ? r[n].o[s(n, t)] : null;
}, e.exports.ordinal.indexOf = s, e.exports.ordinal.forms = function(e) {
var t = i(e);
return r[t] ? r[t].o : null;
};
var o = [ "zero", "one", "two", "few", "many", "other" ];
function l(e) {
return o[e];
}
function c(e, t) {
var n;
for (t.c = t.c ? t.c.map(l) : [ "other" ], t.o = t.o ? t.o.map(l) : [ "other" ], 
n = 0; n < e.length; n++) r[e[n]] = t;
}
function u(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function d(e, t) {
return e.indexOf(t) >= 0;
}
c([ "af", "an", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sd", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ak", "bho", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 1, e) ? 0 : 1;
}
}), c([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
}
}), c([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : u(3, 10, t) ? 3 : u(11, 99, t) ? 4 : 5;
}
}), c([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return d([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "ast", "de", "et", "fi", "fy", "gl", "ia", "io", "ji", "nl", "pt-pt", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), c([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100, i = t % 1e3;
return d([ 1, 2, 5, 7, 8 ], n) || d([ 20, 50, 70, 80 ], r) ? 0 : d([ 3, 4 ], n) || d([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === t || 6 === n || d([ 40, 60, 90 ], r) ? 2 : 3;
}
}), c([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : u(2, 4, t) && !u(12, 14, n) ? 1 : 0 === t || u(5, 9, t) || u(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return d([ 2, 3 ], e % 10) && !d([ 12, 13 ], t) ? 0 : 1;
}
}), c([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "osa", "root", "sah", "ses", "sg", "su", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
c([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || d([ 11, 71, 91 ], n) ? 2 !== t || d([ 12, 72, 92 ], n) ? !u(3, 4, t) && 9 !== t || u(10, 19, n) || u(70, 79, n) || u(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), c([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, a = t % 100, s = r % 10, o = r % 100;
return 0 === n && 1 === i && 11 !== a || 1 === s && 11 !== o ? 0 : 0 === n && u(2, 4, i) && !u(12, 14, a) || u(2, 4, s) && !u(12, 14, o) ? 1 : 2;
}
}), c([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return d([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), c([ "ceb" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, a = r % 10;
return 0 === n && d([ 1, 2, 3 ], t) || 0 === n && !d([ 4, 6, 9 ], i) || 0 !== n && !d([ 4, 6, 9 ], a) ? 0 : 1;
}
}), c([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : u(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), c([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return d([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : d([ 3, 4 ], e) ? 3 : d([ 5, 6 ], e) ? 4 : 5;
}
}), c([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 1 === e || 0 !== i && d([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 100, a = r % 100;
return 0 === n && 1 === i || 1 === a ? 0 : 0 === n && 2 === i || 2 === a ? 1 : 0 === n && u(3, 4, i) || u(3, 4, a) ? 2 : 3;
}
}), c([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : 2 === t && 12 !== n ? 1 : 3 === t && 13 !== n ? 2 : 3;
}
}), c([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return d([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, a = r % 10;
return 0 === n && d([ 1, 2, 3 ], t) || 0 === n && !d([ 4, 6, 9 ], i) || 0 !== n && !d([ 4, 6, 9 ], a) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return d([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : u(3, 6, e) ? 2 : u(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return d([ 1, 11 ], e) ? 0 : d([ 2, 12 ], e) ? 1 : u(3, 10, e) || u(13, 19, e) ? 2 : 3;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return d([ 1, 11 ], e) ? 0 : d([ 2, 12 ], e) ? 1 : d([ 3, 13 ], e) ? 2 : 3;
}
}), c([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && d([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), c([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || u(0, 10, e) || 0 !== r ? 3 : 2;
}
}), c([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return d([ 1, 5 ], e) ? 0 : 1;
}
}), c([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 0 === i && 1 === t % 10 && 11 !== t % 100 || 0 !== i ? 0 : 1;
}
}), c([ "it", "sc", "scn" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return d([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), c([ "iu", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : 2;
}
}), c([ "ka" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e, t) {
var n = t % 100;
return 1 === t ? 0 : 0 === t || u(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), c([ "kk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
var t = e % 10;
return 6 === t || 9 === t || 0 === t && 0 !== e ? 0 : 1;
}
}), c([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2;
}
}), c([ "kw" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100, n = e % 1e3, r = e % 1e5, i = e % 1e6;
return 0 === e ? 0 : 1 === e ? 1 : d([ 2, 22, 42, 62, 82 ], t) || 0 === n && (u(1e3, 2e4, r) || 4e4 === r || 6e4 === r || 8e4 === r) || 0 !== e && 1e5 === i ? 2 : d([ 3, 23, 43, 63, 83 ], t) ? 3 : 1 !== e && d([ 1, 21, 41, 61, 81 ], t) ? 4 : 5;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
var t = e % 100;
return u(1, 4, e) || u(1, 4, t) || u(21, 24, t) || u(41, 44, t) || u(61, 64, t) || u(81, 84, t) ? 0 : 5 === e || 5 === t ? 1 : 2;
}
}), c([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : d([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), c([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, a = e % 100;
return 1 !== i || u(11, 19, a) ? u(2, 9, i) && !u(11, 19, a) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), c([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, a = e % 100, s = r % 100, o = r % 10;
return 0 === i || u(11, 19, a) || 2 === n && u(11, 19, s) ? 0 : 1 === i && 11 !== a || 2 === n && 1 === o && 11 !== s || 2 !== n && 1 === o ? 1 : 2;
}
}), c([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 && 11 !== t % 100 || 1 === r % 10 && 11 !== r % 100 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : d([ 7, 8 ], n) && !d([ 17, 18 ], r) ? 2 : 3;
}
}), c([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || u(2, 19, e % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "mr" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return 1 === e ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), c([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || u(2, 10, t) ? 1 : u(11, 19, t) ? 2 : 3;
}
}), c([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return u(1, 4, e) ? 0 : 1;
}
}), c([ "or" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e || 5 === e || u(7, 9, e) ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 1 !== t && u(0, 1, r) || 0 === n && u(5, 9, r) || 0 === n && u(12, 14, i) ? 2 : 3;
}
}), c([ "pt" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return u(0, 1, t) ? 0 : 1;
}
}), c([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
}
}), c([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : u(2, 10, e) ? 1 : 2;
}
}), c([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return d([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), c([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && u(3, 4, r) || 0 !== n ? 2 : 3;
}
}), c([ "sq" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 4 === e % 10 && 14 !== e % 100 ? 1 : 2;
}
}), c([ "sv" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return d([ 1, 2 ], e % 10) && !d([ 11, 12 ], t) ? 0 : 1;
}
}), c([ "tk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 3, 5 ],
oFn: function(e) {
return d([ 6, 9 ], e % 10) || 10 === e ? 0 : 1;
}
}), c([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 1, e) || u(11, 99, e) ? 0 : 1;
}
}), c([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
}, function(e, t, n) {
var r = {
"./ar.yml": 67,
"./en.yml": 68,
"./es.yml": 69,
"./fa.yml": 70,
"./fr.yml": 71,
"./id.yml": 72,
"./it.yml": 73,
"./ja.yml": 74,
"./ko.yml": 75,
"./ru.yml": 76,
"./tr.yml": 77,
"./uk.yml": 78,
"./uz.yml": 79,
"./zh.yml": 80
};
function i(e) {
var t = a(e);
return n(t);
}
function a(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = a, e.exports = i, i.id = 66;
}, function(e, t) {
e.exports = {
output: "الناتج"
};
}, function(e, t) {
e.exports = {
output: "OUTPUT"
};
}, function(e, t) {
e.exports = {
output: "SALIDA"
};
}, function(e, t) {
e.exports = {
output: "خروجی"
};
}, function(e, t) {
e.exports = {
output: "PRODUCTION"
};
}, function(e, t) {
e.exports = {
output: "OUTPUT"
};
}, function(e, t) {
e.exports = {
output: "OUTPUT"
};
}, function(e, t) {
e.exports = {
output: "出力"
};
}, function(e, t) {
e.exports = {
output: "출력"
};
}, function(e, t) {
e.exports = {
output: "ВЫВОД"
};
}, function(e, t) {
e.exports = {
output: "çıktı"
};
}, function(e, t) {
e.exports = {
output: "ВИВІД"
};
}, function(e, t) {
e.exports = {
output: "CHIQISH"
};
}, function(e, t) {
e.exports = {
output: "输出"
};
}, function(e, t, n) {
"use strict";
let r = n(21), i = n(22);
class a {
constructor(e) {
if (window.ebookType) return;
this.elem = e, this.translateX = 0, this.switchesElem = e.querySelector("[data-code-tabs-switches]"), 
this.switchesElemItems = this.switchesElem.firstElementChild, this.arrowLeft = e.querySelector("[data-code-tabs-left]"), 
this.arrowRight = e.querySelector("[data-code-tabs-right]"), this.arrowLeft.onclick = (e => {
e.preventDefault(), this.translateX = Math.max(0, this.translateX - this.switchesElem.offsetWidth), 
this.renderTranslate();
}), this.arrowRight.onclick = (e => {
e.preventDefault(), this.translateX = Math.min(this.translateX + this.switchesElem.offsetWidth, this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth), 
this.renderTranslate();
});
let t = this.elem.querySelector(".code-tabs__section_current");
t !== t.parentElement.firstElementChild && this.highlightTab(t), this.delegate(".code-tabs__switch", "click", this.onSwitchClick);
}
onSwitchClick(e) {
e.preventDefault();
let t, n = e.delegateTarget.parentNode.children, r = this.elem.querySelector("[data-code-tabs-content]").children;
for (let i = 0; i < n.length; i++) {
let a = n[i], s = r[i];
a === e.delegateTarget ? (t = i, s.classList.add("code-tabs__section_current"), 
a.classList.add("code-tabs__switch_current")) : (s.classList.remove("code-tabs__section_current"), 
a.classList.remove("code-tabs__switch_current"));
}
0 === t ? this.elem.classList.add("code-tabs_result_on") : (this.elem.classList.remove("code-tabs_result_on"), 
this.highlightTab(r[t]));
}
highlightTab(e) {
if (e.highlighted) return;
let t = e.querySelector("pre"), n = t.querySelector("code");
Prism.highlightElement(n), t.insertAdjacentHTML("afterBegin", i(t.innerHTML)), e.highlighted = !0;
}
renderTranslate() {
this.switchesElemItems.style.transform = "translateX(-" + this.translateX + "px)", 
0 === this.translateX ? this.arrowLeft.setAttribute("disabled", "") : this.arrowLeft.removeAttribute("disabled"), 
this.translateX === this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth ? this.arrowRight.setAttribute("disabled", "") : this.arrowRight.removeAttribute("disabled");
}
}
r.delegateMixin(a.prototype), e.exports = a;
}, function(e, t, n) {
"use strict";
let r = n(23);
e.exports = function() {
window.consoleLogNative = window.console.log.bind(console), console.log = function(...e) {
consoleLogNative(...e);
let t = {
type: "console-log",
log: r(e),
codeBoxId: window.__codeBoxId
};
window.postMessage(t, "*");
}, window.addEventListener("message", ({source: e, data: t}) => {
if (e != window && e == window.parent) return;
if ("console-log" != t.type) return;
let n = document.getElementById(t.codeBoxId);
n && n.codeBox.consoleLog(t.log);
});
};
}, function(e, t, n) {
"use strict";
let r = n(3);
e.exports = class {
constructor(e) {
this.slider = e.el, this.list = this.slider.querySelector("ul"), e.class && (this.classList = e.class.split(" ")), 
this.disabled = !1, this.init(), this.bindHandlers();
}
init() {
this.classList && this.classList.length && this.slider.classList.add(...this.classList), 
this.slider.classList.add("slider_disable-left");
const e = document.createElement("div");
e.classList.add("slider__container"), e.appendChild(this.list), this.slider.innerHTML = '<button class="slider__arrow slider__arrow_left"></button><button class="slider__arrow slider__arrow_right"></button>', 
this.slider.appendChild(e), this.innerWidth = this.countInnerWidth(), this.arrowLeft = this.slider.querySelector(".slider__arrow_left"), 
this.arrowRight = this.slider.querySelector(".slider__arrow_right");
}
countInnerWidth() {
return [ ...this.list.querySelectorAll("li") ].reduce((e, t) => {
const n = window.getComputedStyle(t);
return e + (t.offsetWidth + parseFloat(n.marginLeft) + parseFloat(n.marginRight));
}, 0);
}
bindHandlers() {
this.transformX = 0, this.arrowLeft.addEventListener("click", () => {
this.transformX -= this.list.clientWidth, this.transformX < 0 && (this.transformX = 0), 
this.render();
}), this.arrowRight.addEventListener("click", () => {
this.transformX = Math.min(this.transformX + this.list.clientWidth, this.list.scrollWidth - this.list.clientWidth), 
this.render();
}), window.addEventListener("resize", r(() => {
this.onResize();
}, 200)), this.onResize();
}
onResize() {
!this.disabled && this.innerWidth <= this.list.offsetWidth ? (this.slider.classList.add("slider_disabled"), 
this.disabled = !0, this.transformX > 0 && (this.transformX = 0, this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.render())) : this.disabled && this.innerWidth > this.list.offsetWidth && (this.slider.classList.remove("slider_disabled"), 
this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.disabled = !1);
}
render() {
this.list.style.transform = this.transformX > 0 ? `translateX(${-this.transformX}px)` : "translateX(0)", 
0 === this.transformX ? this.slider.classList.add("slider_disable-left") : this.slider.classList.remove("slider_disable-left"), 
this.transformX == this.list.scrollWidth - this.list.clientWidth ? this.slider.classList.add("slider_disable-right") : this.slider.classList.remove("slider_disable-right");
}
};
} ]);