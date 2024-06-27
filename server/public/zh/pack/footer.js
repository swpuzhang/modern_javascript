var footer = function(t) {
var e = {};
function n(o) {
if (e[o]) return e[o].exports;
var r = e[o] = {
i: o,
l: !1,
exports: {}
};
return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
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
}), 2 & e && "string" != typeof t) for (var r in t) n.d(o, r, function(e) {
return t[e];
}.bind(null, r));
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
}, n.p = "/pack/", n(n.s = 39);
}({
39: function(t, e, n) {
"use strict";
let o = n(40), r = n(42), l = n(43);
o(), window.devicePixelRatio > 1 && r(), window.addEventListener("scroll", l), l();
},
40: function(t, e, n) {
"use strict";
let o = n(41);
t.exports = function() {
let t = null, e = 8, n = 10;
function r(o) {
let r = o.clientX + e;
r + t.offsetWidth > document.documentElement.clientWidth && (r = Math.max(0, o.clientX - e - t.offsetWidth)), 
t.style.left = r + "px";
let l = o.clientY + n;
l + t.offsetHeight > document.documentElement.clientHeight && (l = Math.max(0, o.clientY - n - t.offsetHeight)), 
t.style.top = l + "px";
}
o("a,[data-tooltip]", function(e) {
if (!e.target.closest) return;
let n = e.target.closest("a, [data-tooltip]");
n && ("A" == n.tagName && n.closest(".toolbar") || ((t = document.createElement("span")).className = "link__type", 
n.getAttribute("data-tooltip") ? t.setAttribute("data-tooltip", n.getAttribute("data-tooltip")) : t.setAttribute("data-url", n.getAttribute("href")), 
document.body.appendChild(t), r(e), document.addEventListener("mousemove", r)));
}, function() {
t && (document.removeEventListener("mousemove", r), t.remove(), t = null);
});
};
},
41: function(t, e, n) {
"use strict";
let o, r, l = 1 / 0, i = 1 / 0, u = Date.now(), c = .2, s = {};
document.addEventListener("mousemove", function(t) {
if (r) return;
if (Math.sqrt(Math.pow(t.pageX - l, 2) + Math.pow(t.pageY - i, 2)) / (Date.now() - u) < c) {
let e = document.elementFromPoint(t.clientX, t.clientY);
if (!e) return;
if (e != o) {
for (let n in s) {
let o = e.closest(n);
o && (r = {
elem: o,
out: s[n].out
}, s[n].over(t));
}
o = e;
}
}
l = t.pageX, i = t.pageY, u = Date.now();
}), document.addEventListener("mouseout", function(t) {
if (!r) return;
let e = t.relatedTarget;
for (;e; ) {
if (e == r.elem) return;
e = e.parentElement;
}
let n = r.out;
r = null, n(t);
}), t.exports = function(t, e, n) {
s[t] = {
over: e,
out: n
};
};
},
42: function(t, e, n) {
"use strict";
t.exports = function() {
let t = document.querySelectorAll('figure img[src$=".png"]');
for (let e = 0; e < t.length; e++) {
let n = t[e];
n.onload = function() {
if (this.onload = null, this.src.match(/@2x.png$/)) return;
let t = new Image();
t.onload = function() {
this.width && this.height && (n.src = this.src);
}, t.src = this.src.replace(".png", "@2x.png");
}, n.complete && n.onload();
}
};
},
43: function(t, e, n) {
"use strict";
function o(t) {
let e = document.createElement("div"), n = getComputedStyle(t);
return e.style.width = t.offsetWidth + "px", e.style.marginLeft = n.marginLeft, 
e.style.marginRight = n.marginRight, e.style.height = t.offsetHeight + "px", e.style.marginBottom = n.marginBottom, 
e.style.marginTop = n.marginTop, e;
}
t.exports = function() {
let t = document.querySelectorAll("[data-sticky]");
for (let e = 0; e < t.length; e++) {
let n = t[e], r = n.dataset.sticky ? document.querySelector(n.dataset.sticky) : document.body;
if (n.getBoundingClientRect().top < 0) {
if (n.style.cssText) return;
let t = n.getBoundingClientRect().left, e = o(n);
n.parentNode.insertBefore(e, n), r.appendChild(n), n.classList.add("sticky"), n.style.position = "fixed", 
n.style.top = 0, n.style.left = t + "px", n.style.zIndex = 101, n.style.background = "white", 
n.style.margin = 0, n.style.width = e.offsetWidth + "px", n.placeholder = e;
} else n.placeholder && n.placeholder.getBoundingClientRect().top > 0 && (n.style.cssText = "", 
n.classList.remove("sticky"), n.placeholder.parentNode.insertBefore(n, n.placeholder), 
n.placeholder.remove(), n.placeholder = null);
}
};
}
});