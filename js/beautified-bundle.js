! function (e, t)
{
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e)
	{
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (e, t)
{
	"use strict";
	var n = [],
		r = e.document,
		i = Object.getPrototypeOf,
		o = n.slice,
		a = n.concat,
		s = n.push,
		u = n.indexOf,
		l = {},
		c = l.toString,
		f = l.hasOwnProperty,
		p = f.toString,
		d = p.call(Object),
		h = {},
		g = function e(t)
		{
			return "function" == typeof t && "number" != typeof t.nodeType
		},
		y = function e(t)
		{
			return null != t && t === t.window
		},
		v = {
			type: !0,
			src: !0,
			noModule: !0
		};

	function m(e, t, n)
	{
		var i, o = (t = t || r).createElement("script");
		if (o.text = e, n)
			for (i in v) n[i] && (o[i] = n[i]);
		t.head.appendChild(o).parentNode.removeChild(o)
	}

	function x(e)
	{
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
	}
	var b = "3.3.1",
		w = function (e, t)
		{
			return new w.fn.init(e, t)
		},
		T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	w.fn = w.prototype = {
		jquery: "3.3.1",
		constructor: w,
		length: 0,
		toArray: function ()
		{
			return o.call(this)
		},
		get: function (e)
		{
			return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function (e)
		{
			var t = w.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function (e)
		{
			return w.each(this, e)
		},
		map: function (e)
		{
			return this.pushStack(w.map(this, function (t, n)
			{
				return e.call(t, n, t)
			}))
		},
		slice: function ()
		{
			return this.pushStack(o.apply(this, arguments))
		},
		first: function ()
		{
			return this.eq(0)
		},
		last: function ()
		{
			return this.eq(-1)
		},
		eq: function (e)
		{
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function ()
		{
			return this.prevObject || this.constructor()
		},
		push: s,
		sort: n.sort,
		splice: n.splice
	}, w.extend = w.fn.extend = function ()
	{
		var e, t, n, r, i, o, a = arguments[0] ||
			{},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] ||
			{}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n :
				{}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, w.extend(
	{
		expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (e)
		{
			throw new Error(e)
		},
		noop: function () {},
		isPlainObject: function (e)
		{
			var t, n;
			return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
		},
		isEmptyObject: function (e)
		{
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function (e)
		{
			m(e)
		},
		each: function (e, t)
		{
			var n, r = 0;
			if (C(e))
			{
				for (n = e.length; r < n; r++)
					if (!1 === t.call(e[r], r, e[r])) break
			}
			else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		trim: function (e)
		{
			return null == e ? "" : (e + "").replace(T, "")
		},
		makeArray: function (e, t)
		{
			var n = t || [];
			return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
		},
		inArray: function (e, t, n)
		{
			return null == t ? -1 : u.call(t, e, n)
		},
		merge: function (e, t)
		{
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function (e, t, n)
		{
			for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
			return i
		},
		map: function (e, t, n)
		{
			var r, i, o = 0,
				s = [];
			if (C(e))
				for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
			else
				for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
			return a.apply([], s)
		},
		guid: 1,
		support: h
	}), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t)
	{
		l["[object " + t + "]"] = t.toLowerCase()
	});

	function C(e)
	{
		var t = !!e && "length" in e && e.length,
			n = x(e);
		return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	var E = function (e)
	{
		var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
			w = e.document,
			T = 0,
			C = 0,
			E = ae(),
			k = ae(),
			S = ae(),
			D = function (e, t)
			{
				return e === t && (f = !0), 0
			},
			N = {}.hasOwnProperty,
			A = [],
			j = A.pop,
			q = A.push,
			L = A.push,
			H = A.slice,
			O = function (e, t)
			{
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			M = "[\\x20\\t\\r\\n\\f]",
			R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
			W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
			$ = new RegExp(M + "+", "g"),
			B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
			F = new RegExp("^" + M + "*," + M + "*"),
			_ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
			z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
			X = new RegExp(W),
			U = new RegExp("^" + R + "$"),
			V = {
				ID: new RegExp("^#(" + R + ")"),
				CLASS: new RegExp("^\\.(" + R + ")"),
				TAG: new RegExp("^(" + R + "|[*])"),
				ATTR: new RegExp("^" + I),
				PSEUDO: new RegExp("^" + W),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + P + ")$", "i"),
				needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
			},
			G = /^(?:input|select|textarea|button)$/i,
			Y = /^h\d$/i,
			Q = /^[^{]+\{\s*\[native \w/,
			J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			K = /[+~]/,
			Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
			ee = function (e, t, n)
			{
				var r = "0x" + t - 65536;
				return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			},
			te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ne = function (e, t)
			{
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			re = function ()
			{
				p()
			},
			ie = me(function (e)
			{
				return !0 === e.disabled && ("form" in e || "label" in e)
			},
			{
				dir: "parentNode",
				next: "legend"
			});
		try
		{
			L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
		}
		catch (e)
		{
			L = {
				apply: A.length ? function (e, t)
				{
					q.apply(e, H.call(t))
				} : function (e, t)
				{
					var n = e.length,
						r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}

		function oe(e, t, r, i)
		{
			var o, s, l, c, f, h, v, m = t && t.ownerDocument,
				T = t ? t.nodeType : 9;
			if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
			if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g))
			{
				if (11 !== T && (f = J.exec(e)))
					if (o = f[1])
					{
						if (9 === T)
						{
							if (!(l = t.getElementById(o))) return r;
							if (l.id === o) return r.push(l), r
						}
						else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
					}
				else
				{
					if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
					if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
				}
				if (n.qsa && !S[e + " "] && (!y || !y.test(e)))
				{
					if (1 !== T) m = t, v = e;
					else if ("object" !== t.nodeName.toLowerCase())
					{
						(c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
						while (s--) h[s] = "#" + c + " " + ve(h[s]);
						v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
					}
					if (v) try
					{
						return L.apply(r, m.querySelectorAll(v)), r
					}
					catch (e)
					{}
					finally
					{
						c === b && t.removeAttribute("id")
					}
				}
			}
			return u(e.replace(B, "$1"), t, r, i)
		}

		function ae()
		{
			var e = [];

			function t(n, i)
			{
				return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
			}
			return t
		}

		function se(e)
		{
			return e[b] = !0, e
		}

		function ue(e)
		{
			var t = d.createElement("fieldset");
			try
			{
				return !!e(t)
			}
			catch (e)
			{
				return !1
			}
			finally
			{
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function le(e, t)
		{
			var n = e.split("|"),
				i = n.length;
			while (i--) r.attrHandle[n[i]] = t
		}

		function ce(e, t)
		{
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n)
				while (n = n.nextSibling)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function fe(e)
		{
			return function (t)
			{
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}

		function pe(e)
		{
			return function (t)
			{
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function de(e)
		{
			return function (t)
			{
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function he(e)
		{
			return se(function (t)
			{
				return t = +t, se(function (n, r)
				{
					var i, o = e([], n.length, t),
						a = o.length;
					while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function ge(e)
		{
			return e && "undefined" != typeof e.getElementsByTagName && e
		}
		n = oe.support = {}, o = oe.isXML = function (e)
		{
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, p = oe.setDocument = function (e)
		{
			var t, i, a = e ? e.ownerDocument || e : w;
			return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e)
			{
				return e.className = "i", !e.getAttribute("className")
			}), n.getElementsByTagName = ue(function (e)
			{
				return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
			}), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e)
			{
				return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
			}), n.getById ? (r.filter.ID = function (e)
			{
				var t = e.replace(Z, ee);
				return function (e)
				{
					return e.getAttribute("id") === t
				}
			}, r.find.ID = function (e, t)
			{
				if ("undefined" != typeof t.getElementById && g)
				{
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (r.filter.ID = function (e)
			{
				var t = e.replace(Z, ee);
				return function (e)
				{
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}, r.find.ID = function (e, t)
			{
				if ("undefined" != typeof t.getElementById && g)
				{
					var n, r, i, o = t.getElementById(e);
					if (o)
					{
						if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
						i = t.getElementsByName(e), r = 0;
						while (o = i[r++])
							if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
					}
					return []
				}
			}), r.find.TAG = n.getElementsByTagName ? function (e, t)
			{
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
			} : function (e, t)
			{
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e)
				{
					while (n = o[i++]) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, r.find.CLASS = n.getElementsByClassName && function (e, t)
			{
				if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
			}, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e)
			{
				h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
			}), ue(function (e)
			{
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var t = d.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
			})), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e)
			{
				n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
			}), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t)
			{
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function (e, t)
			{
				if (t)
					while (t = t.parentNode)
						if (t === e) return !0;
				return !1
			}, D = t ? function (e, t)
			{
				if (e === t) return f = !0, 0;
				var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
			} : function (e, t)
			{
				if (e === t) return f = !0, 0;
				var n, r = 0,
					i = e.parentNode,
					o = t.parentNode,
					a = [e],
					s = [t];
				if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
				if (i === o) return ce(e, t);
				n = e;
				while (n = n.parentNode) a.unshift(n);
				n = t;
				while (n = n.parentNode) s.unshift(n);
				while (a[r] === s[r]) r++;
				return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
			}, d) : d
		}, oe.matches = function (e, t)
		{
			return oe(e, null, null, t)
		}, oe.matchesSelector = function (e, t)
		{
			if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try
			{
				var r = m.call(e, t);
				if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			}
			catch (e)
			{}
			return oe(t, d, null, [e]).length > 0
		}, oe.contains = function (e, t)
		{
			return (e.ownerDocument || e) !== d && p(e), x(e, t)
		}, oe.attr = function (e, t)
		{
			(e.ownerDocument || e) !== d && p(e);
			var i = r.attrHandle[t.toLowerCase()],
				o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
			return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
		}, oe.escape = function (e)
		{
			return (e + "").replace(te, ne)
		}, oe.error = function (e)
		{
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, oe.uniqueSort = function (e)
		{
			var t, r = [],
				i = 0,
				o = 0;
			if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f)
			{
				while (t = e[o++]) t === e[o] && (i = r.push(o));
				while (i--) e.splice(r[i], 1)
			}
			return c = null, e
		}, i = oe.getText = function (e)
		{
			var t, n = "",
				r = 0,
				o = e.nodeType;
			if (o)
			{
				if (1 === o || 9 === o || 11 === o)
				{
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
				}
				else if (3 === o || 4 === o) return e.nodeValue
			}
			else
				while (t = e[r++]) n += i(t);
			return n
		}, (r = oe.selectors = {
			cacheLength: 50,
			createPseudo: se,
			match: V,
			attrHandle:
			{},
			find:
			{},
			relative:
			{
				">":
				{
					dir: "parentNode",
					first: !0
				},
				" ":
				{
					dir: "parentNode"
				},
				"+":
				{
					dir: "previousSibling",
					first: !0
				},
				"~":
				{
					dir: "previousSibling"
				}
			},
			preFilter:
			{
				ATTR: function (e)
				{
					return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function (e)
				{
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
				},
				PSEUDO: function (e)
				{
					var t, n = !e[6] && e[2];
					return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter:
			{
				TAG: function (e)
				{
					var t = e.replace(Z, ee).toLowerCase();
					return "*" === e ? function ()
					{
						return !0
					} : function (e)
					{
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function (e)
				{
					var t = E[e + " "];
					return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e)
					{
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function (e, t, n)
				{
					return function (r)
					{
						var i = oe.attr(r, e);
						return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
					}
				},
				CHILD: function (e, t, n, r, i)
				{
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === r && 0 === i ? function (e)
					{
						return !!e.parentNode
					} : function (t, n, u)
					{
						var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
							y = t.parentNode,
							v = s && t.nodeName.toLowerCase(),
							m = !u && !s,
							x = !1;
						if (y)
						{
							if (o)
							{
								while (g)
								{
									p = t;
									while (p = p[g])
										if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? y.firstChild : y.lastChild], a && m)
							{
								x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
								while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
									if (1 === p.nodeType && ++x && p === t)
									{
										c[e] = [T, d, x];
										break
									}
							}
							else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
								while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
									if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
							return (x -= i) === r || x % r == 0 && x / r >= 0
						}
					}
				},
				PSEUDO: function (e, t)
				{
					var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
					return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n)
					{
						var r, o = i(e, t),
							a = o.length;
						while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
					}) : function (e)
					{
						return i(e, 0, n)
					}) : i
				}
			},
			pseudos:
			{
				not: se(function (e)
				{
					var t = [],
						n = [],
						r = s(e.replace(B, "$1"));
					return r[b] ? se(function (e, t, n, i)
					{
						var o, a = r(e, null, i, []),
							s = e.length;
						while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function (e, i, o)
					{
						return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
					}
				}),
				has: se(function (e)
				{
					return function (t)
					{
						return oe(e, t).length > 0
					}
				}),
				contains: se(function (e)
				{
					return e = e.replace(Z, ee),
						function (t)
						{
							return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
						}
				}),
				lang: se(function (e)
				{
					return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
						function (t)
						{
							var n;
							do {
								if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
							} while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function (t)
				{
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function (e)
				{
					return e === h
				},
				focus: function (e)
				{
					return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: de(!1),
				disabled: de(!0),
				checked: function (e)
				{
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function (e)
				{
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
				},
				empty: function (e)
				{
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function (e)
				{
					return !r.pseudos.empty(e)
				},
				header: function (e)
				{
					return Y.test(e.nodeName)
				},
				input: function (e)
				{
					return G.test(e.nodeName)
				},
				button: function (e)
				{
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function (e)
				{
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: he(function ()
				{
					return [0]
				}),
				last: he(function (e, t)
				{
					return [t - 1]
				}),
				eq: he(function (e, t, n)
				{
					return [n < 0 ? n + t : n]
				}),
				even: he(function (e, t)
				{
					for (var n = 0; n < t; n += 2) e.push(n);
					return e
				}),
				odd: he(function (e, t)
				{
					for (var n = 1; n < t; n += 2) e.push(n);
					return e
				}),
				lt: he(function (e, t, n)
				{
					for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: he(function (e, t, n)
				{
					for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}).pseudos.nth = r.pseudos.eq;
		for (t in
			{
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) r.pseudos[t] = fe(t);
		for (t in
			{
				submit: !0,
				reset: !0
			}) r.pseudos[t] = pe(t);

		function ye()
		{}
		ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t)
		{
			var n, i, o, a, s, u, l, c = k[e + " "];
			if (c) return t ? 0 : c.slice(0);
			s = e, u = [], l = r.preFilter;
			while (s)
			{
				n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push(
				{
					value: n,
					type: i[0].replace(B, " ")
				}), s = s.slice(n.length));
				for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push(
				{
					value: n,
					type: a,
					matches: i
				}), s = s.slice(n.length));
				if (!n) break
			}
			return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
		};

		function ve(e)
		{
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function me(e, t, n)
		{
			var r = t.dir,
				i = t.next,
				o = i || r,
				a = n && "parentNode" === o,
				s = C++;
			return t.first ? function (t, n, i)
			{
				while (t = t[r])
					if (1 === t.nodeType || a) return e(t, n, i);
				return !1
			} : function (t, n, u)
			{
				var l, c, f, p = [T, s];
				if (u)
				{
					while (t = t[r])
						if ((1 === t.nodeType || a) && e(t, n, u)) return !0
				}
				else
					while (t = t[r])
						if (1 === t.nodeType || a)
							if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
							else
							{
								if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
								if (c[o] = p, p[2] = e(t, n, u)) return !0
							} return !1
			}
		}

		function xe(e)
		{
			return e.length > 1 ? function (t, n, r)
			{
				var i = e.length;
				while (i--)
					if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function be(e, t, n)
		{
			for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
			return n
		}

		function we(e, t, n, r, i)
		{
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
			return a
		}

		function Te(e, t, n, r, i, o)
		{
			return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u)
			{
				var l, c, f, p = [],
					d = [],
					h = a.length,
					g = o || be(t || "*", s.nodeType ? [s] : s, []),
					y = !e || !o && t ? g : we(g, p, e, s, u),
					v = n ? i || (o ? e : h || r) ? [] : a : y;
				if (n && n(y, v, s, u), r)
				{
					l = we(v, d), r(l, [], s, u), c = l.length;
					while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
				}
				if (o)
				{
					if (i || e)
					{
						if (i)
						{
							l = [], c = v.length;
							while (c--)(f = v[c]) && l.push(y[c] = f);
							i(null, v = [], l, u)
						}
						c = v.length;
						while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
					}
				}
				else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
			})
		}

		function Ce(e)
		{
			for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e)
				{
					return e === t
				}, s, !0), f = me(function (e)
				{
					return O(t, e) > -1
				}, s, !0), p = [function (e, n, r)
				{
					var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
					return t = null, i
				}]; u < o; u++)
				if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
				else
				{
					if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b])
					{
						for (i = ++u; i < o; i++)
							if (r.relative[e[i].type]) break;
						return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat(
						{
							value: " " === e[u - 2].type ? "*" : ""
						})).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
					}
					p.push(n)
				} return xe(p)
		}

		function Ee(e, t)
		{
			var n = t.length > 0,
				i = e.length > 0,
				o = function (o, a, s, u, c)
				{
					var f, h, y, v = 0,
						m = "0",
						x = o && [],
						b = [],
						w = l,
						C = o || i && r.find.TAG("*", c),
						E = T += null == w ? 1 : Math.random() || .1,
						k = C.length;
					for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++)
					{
						if (i && f)
						{
							h = 0, a || f.ownerDocument === d || (p(f), s = !g);
							while (y = e[h++])
								if (y(f, a || d, s))
								{
									u.push(f);
									break
								} c && (T = E)
						}
						n && ((f = !y && f) && v--, o && x.push(f))
					}
					if (v += m, n && m !== v)
					{
						h = 0;
						while (y = t[h++]) y(x, b, a, s);
						if (o)
						{
							if (v > 0)
								while (m--) x[m] || b[m] || (b[m] = j.call(u));
							b = we(b)
						}
						L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
					}
					return c && (T = E, l = w), x
				};
			return n ? se(o) : o
		}
		return s = oe.compile = function (e, t)
		{
			var n, r = [],
				i = [],
				o = S[e + " "];
			if (!o)
			{
				t || (t = a(e)), n = t.length;
				while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
				(o = S(e, Ee(i, r))).selector = e
			}
			return o
		}, u = oe.select = function (e, t, n, i)
		{
			var o, u, l, c, f, p = "function" == typeof e && e,
				d = !i && a(e = p.selector || e);
			if (n = n || [], 1 === d.length)
			{
				if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type])
				{
					if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
					p && (t = t.parentNode), e = e.slice(u.shift().value.length)
				}
				o = V.needsContext.test(e) ? 0 : u.length;
				while (o--)
				{
					if (l = u[o], r.relative[c = l.type]) break;
					if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t)))
					{
						if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
						break
					}
				}
			}
			return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
		}, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e)
		{
			return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
		}), ue(function (e)
		{
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || le("type|href|height|width", function (e, t, n)
		{
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), n.attributes && ue(function (e)
		{
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || le("value", function (e, t, n)
		{
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ue(function (e)
		{
			return null == e.getAttribute("disabled")
		}) || le(P, function (e, t, n)
		{
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), oe
	}(e);
	w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
	var k = function (e, t, n)
		{
			var r = [],
				i = void 0 !== n;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType)
				{
					if (i && w(e).is(n)) break;
					r.push(e)
				} return r
		},
		S = function (e, t)
		{
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		D = w.expr.match.needsContext;

	function N(e, t)
	{
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function j(e, t, n)
	{
		return g(t) ? w.grep(e, function (e, r)
		{
			return !!t.call(e, r, e) !== n
		}) : t.nodeType ? w.grep(e, function (e)
		{
			return e === t !== n
		}) : "string" != typeof t ? w.grep(e, function (e)
		{
			return u.call(t, e) > -1 !== n
		}) : w.filter(t, e, n)
	}
	w.filter = function (e, t, n)
	{
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e)
		{
			return 1 === e.nodeType
		}))
	}, w.fn.extend(
	{
		find: function (e)
		{
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(w(e).filter(function ()
			{
				for (t = 0; t < r; t++)
					if (w.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
			return r > 1 ? w.uniqueSort(n) : n
		},
		filter: function (e)
		{
			return this.pushStack(j(this, e || [], !1))
		},
		not: function (e)
		{
			return this.pushStack(j(this, e || [], !0))
		},
		is: function (e)
		{
			return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
		}
	});
	var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(w.fn.init = function (e, t, n)
	{
		var i, o;
		if (!e) return this;
		if (n = n || q, "string" == typeof e)
		{
			if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (i[1])
			{
				if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
					for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
				return this
			}
			return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
	}).prototype = w.fn, q = w(r);
	var H = /^(?:parents|prev(?:Until|All))/,
		O = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	w.fn.extend(
	{
		has: function (e)
		{
			var t = w(e, this),
				n = t.length;
			return this.filter(function ()
			{
				for (var e = 0; e < n; e++)
					if (w.contains(this, t[e])) return !0
			})
		},
		closest: function (e, t)
		{
			var n, r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && w(e);
			if (!D.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e)))
						{
							o.push(n);
							break
						} return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
		},
		index: function (e)
		{
			return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t)
		{
			return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
		},
		addBack: function (e)
		{
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});

	function P(e, t)
	{
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	w.each(
	{
		parent: function (e)
		{
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e)
		{
			return k(e, "parentNode")
		},
		parentsUntil: function (e, t, n)
		{
			return k(e, "parentNode", n)
		},
		next: function (e)
		{
			return P(e, "nextSibling")
		},
		prev: function (e)
		{
			return P(e, "previousSibling")
		},
		nextAll: function (e)
		{
			return k(e, "nextSibling")
		},
		prevAll: function (e)
		{
			return k(e, "previousSibling")
		},
		nextUntil: function (e, t, n)
		{
			return k(e, "nextSibling", n)
		},
		prevUntil: function (e, t, n)
		{
			return k(e, "previousSibling", n)
		},
		siblings: function (e)
		{
			return S((e.parentNode ||
			{}).firstChild, e)
		},
		children: function (e)
		{
			return S(e.firstChild)
		},
		contents: function (e)
		{
			return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
		}
	}, function (e, t)
	{
		w.fn[e] = function (n, r)
		{
			var i = w.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
		}
	});
	var M = /[^\x20\t\r\n\f]+/g;

	function R(e)
	{
		var t = {};
		return w.each(e.match(M) || [], function (e, n)
		{
			t[n] = !0
		}), t
	}
	w.Callbacks = function (e)
	{
		e = "string" == typeof e ? R(e) : w.extend(
		{}, e);
		var t, n, r, i, o = [],
			a = [],
			s = -1,
			u = function ()
			{
				for (i = i || e.once, r = t = !0; a.length; s = -1)
				{
					n = a.shift();
					while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
				}
				e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
			},
			l = {
				add: function ()
				{
					return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n)
					{
						w.each(n, function (n, r)
						{
							g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
						})
					}(arguments), n && !t && u()), this
				},
				remove: function ()
				{
					return w.each(arguments, function (e, t)
					{
						var n;
						while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
					}), this
				},
				has: function (e)
				{
					return e ? w.inArray(e, o) > -1 : o.length > 0
				},
				empty: function ()
				{
					return o && (o = []), this
				},
				disable: function ()
				{
					return i = a = [], o = n = "", this
				},
				disabled: function ()
				{
					return !o
				},
				lock: function ()
				{
					return i = a = [], n || t || (o = n = ""), this
				},
				locked: function ()
				{
					return !!i
				},
				fireWith: function (e, n)
				{
					return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
				},
				fire: function ()
				{
					return l.fireWith(this, arguments), this
				},
				fired: function ()
				{
					return !!r
				}
			};
		return l
	};

	function I(e)
	{
		return e
	}

	function W(e)
	{
		throw e
	}

	function $(e, t, n, r)
	{
		var i;
		try
		{
			e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		}
		catch (e)
		{
			n.apply(void 0, [e])
		}
	}
	w.extend(
	{
		Deferred: function (t)
		{
			var n = [
					["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
					["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
				],
				r = "pending",
				i = {
					state: function ()
					{
						return r
					},
					always: function ()
					{
						return o.done(arguments).fail(arguments), this
					},
					"catch": function (e)
					{
						return i.then(null, e)
					},
					pipe: function ()
					{
						var e = arguments;
						return w.Deferred(function (t)
						{
							w.each(n, function (n, r)
							{
								var i = g(e[r[4]]) && e[r[4]];
								o[r[1]](function ()
								{
									var e = i && i.apply(this, arguments);
									e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					then: function (t, r, i)
					{
						var o = 0;

						function a(t, n, r, i)
						{
							return function ()
							{
								var s = this,
									u = arguments,
									l = function ()
									{
										var e, l;
										if (!(t < o))
										{
											if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
											l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
										}
									},
									c = i ? l : function ()
									{
										try
										{
											l()
										}
										catch (e)
										{
											w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
										}
									};
								t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
							}
						}
						return w.Deferred(function (e)
						{
							n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
						}).promise()
					},
					promise: function (e)
					{
						return null != e ? w.extend(e, i) : i
					}
				},
				o = {};
			return w.each(n, function (e, t)
			{
				var a = t[2],
					s = t[5];
				i[t[1]] = a.add, s && a.add(function ()
				{
					r = s
				}, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function ()
				{
					return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
				}, o[t[0] + "With"] = a.fireWith
			}), i.promise(o), t && t.call(o, o), o
		},
		when: function (e)
		{
			var t = arguments.length,
				n = t,
				r = Array(n),
				i = o.call(arguments),
				a = w.Deferred(),
				s = function (e)
				{
					return function (n)
					{
						r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
					}
				};
			if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
			while (n--) $(i[n], s(n), a.reject);
			return a.promise()
		}
	});
	var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	w.Deferred.exceptionHook = function (t, n)
	{
		e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
	}, w.readyException = function (t)
	{
		e.setTimeout(function ()
		{
			throw t
		})
	};
	var F = w.Deferred();
	w.fn.ready = function (e)
	{
		return F.then(e)["catch"](function (e)
		{
			w.readyException(e)
		}), this
	}, w.extend(
	{
		isReady: !1,
		readyWait: 1,
		ready: function (e)
		{
			(!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
		}
	}), w.ready.then = F.then;

	function _()
	{
		r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
	}
	"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
	var z = function (e, t, n, r, i, o, a)
		{
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === x(n))
			{
				i = !0;
				for (s in n) z(e, t, s, n[s], !0, o, a)
			}
			else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n)
				{
					return l.call(w(e), n)
				})), t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		X = /^-ms-/,
		U = /-([a-z])/g;

	function V(e, t)
	{
		return t.toUpperCase()
	}

	function G(e)
	{
		return e.replace(X, "ms-").replace(U, V)
	}
	var Y = function (e)
	{
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function Q()
	{
		this.expando = w.expando + Q.uid++
	}
	Q.uid = 1, Q.prototype = {
		cache: function (e)
		{
			var t = e[this.expando];
			return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando,
			{
				value: t,
				configurable: !0
			}))), t
		},
		set: function (e, t, n)
		{
			var r, i = this.cache(e);
			if ("string" == typeof t) i[G(t)] = n;
			else
				for (r in t) i[G(r)] = t[r];
			return i
		},
		get: function (e, t)
		{
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
		},
		access: function (e, t, n)
		{
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function (e, t)
		{
			var n, r = e[this.expando];
			if (void 0 !== r)
			{
				if (void 0 !== t)
				{
					n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
					while (n--) delete r[t[n]]
				}(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function (e)
		{
			var t = e[this.expando];
			return void 0 !== t && !w.isEmptyObject(t)
		}
	};
	var J = new Q,
		K = new Q,
		Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		ee = /[A-Z]/g;

	function te(e)
	{
		return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
	}

	function ne(e, t, n)
	{
		var r;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r)))
			{
				try
				{
					n = te(n)
				}
				catch (e)
				{}
				K.set(e, t, n)
			}
		else n = void 0;
		return n
	}
	w.extend(
	{
		hasData: function (e)
		{
			return K.hasData(e) || J.hasData(e)
		},
		data: function (e, t, n)
		{
			return K.access(e, t, n)
		},
		removeData: function (e, t)
		{
			K.remove(e, t)
		},
		_data: function (e, t, n)
		{
			return J.access(e, t, n)
		},
		_removeData: function (e, t)
		{
			J.remove(e, t)
		}
	}), w.fn.extend(
	{
		data: function (e, t)
		{
			var n, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === e)
			{
				if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs")))
				{
					n = a.length;
					while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
					J.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each(function ()
			{
				K.set(this, e)
			}) : z(this, function (t)
			{
				var n;
				if (o && void 0 === t)
				{
					if (void 0 !== (n = K.get(o, e))) return n;
					if (void 0 !== (n = ne(o, e))) return n
				}
				else this.each(function ()
				{
					K.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function (e)
		{
			return this.each(function ()
			{
				K.remove(this, e)
			})
		}
	}), w.extend(
	{
		queue: function (e, t, n)
		{
			var r;
			if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function (e, t)
		{
			t = t || "fx";
			var n = w.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = w._queueHooks(e, t),
				a = function ()
				{
					w.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function (e, t)
		{
			var n = t + "queueHooks";
			return J.get(e, n) || J.access(e, n,
			{
				empty: w.Callbacks("once memory").add(function ()
				{
					J.remove(e, [t + "queue", n])
				})
			})
		}
	}), w.fn.extend(
	{
		queue: function (e, t)
		{
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function ()
			{
				var n = w.queue(this, e, t);
				w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
			})
		},
		dequeue: function (e)
		{
			return this.each(function ()
			{
				w.dequeue(this, e)
			})
		},
		clearQueue: function (e)
		{
			return this.queue(e || "fx", [])
		},
		promise: function (e, t)
		{
			var n, r = 1,
				i = w.Deferred(),
				o = this,
				a = this.length,
				s = function ()
				{
					--r || i.resolveWith(o, [o])
				};
			"string" != typeof e && (t = e, e = void 0), e = e || "fx";
			while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
		oe = ["Top", "Right", "Bottom", "Left"],
		ae = function (e, t)
		{
			return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
		},
		se = function (e, t, n, r)
		{
			var i, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = a[o];
			return i
		};

	function ue(e, t, n, r)
	{
		var i, o, a = 20,
			s = r ? function ()
			{
				return r.cur()
			} : function ()
			{
				return w.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
			c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
		if (c && c[3] !== l)
		{
			u /= 2, l = l || c[3], c = +u || 1;
			while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c *= 2, w.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}
	var le = {};

	function ce(e)
	{
		var t, n = e.ownerDocument,
			r = e.nodeName,
			i = le[r];
		return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
	}

	function fe(e, t)
	{
		for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
		for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
		return e
	}
	w.fn.extend(
	{
		show: function ()
		{
			return fe(this, !0)
		},
		hide: function ()
		{
			return fe(this)
		},
		toggle: function (e)
		{
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function ()
			{
				ae(this) ? w(this).show() : w(this).hide()
			})
		}
	});
	var pe = /^(?:checkbox|radio)$/i,
		de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		he = /^$|^module$|\/(?:java|ecma)script/i,
		ge = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

	function ye(e, t)
	{
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
	}

	function ve(e, t)
	{
		for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
	}
	var me = /<|&#?\w+;/;

	function xe(e, t, n, r, i)
	{
		for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
			if ((o = e[d]) || 0 === o)
				if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
				else if (me.test(o))
		{
			a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
			while (c--) a = a.lastChild;
			w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
		}
		else p.push(t.createTextNode(o));
		f.textContent = "", d = 0;
		while (o = p[d++])
			if (r && w.inArray(o, r) > -1) i && i.push(o);
			else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n)
		{
			c = 0;
			while (o = a[c++]) he.test(o.type || "") && n.push(o)
		}
		return f
	}! function ()
	{
		var e = r.createDocumentFragment().appendChild(r.createElement("div")),
			t = r.createElement("input");
		t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
	}();
	var be = r.documentElement,
		we = /^key/,
		Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Ce = /^([^.]*)(?:\.(.+)|)/;

	function Ee()
	{
		return !0
	}

	function ke()
	{
		return !1
	}

	function Se()
	{
		try
		{
			return r.activeElement
		}
		catch (e)
		{}
	}

	function De(e, t, n, r, i, o)
	{
		var a, s;
		if ("object" == typeof t)
		{
			"string" != typeof n && (r = r || n, n = void 0);
			for (s in t) De(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
		else if (!i) return e;
		return 1 === o && (a = i, (i = function (e)
		{
			return w().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = w.guid++)), e.each(function ()
		{
			w.event.add(this, t, i, r, n)
		})
	}
	w.event = {
		global:
		{},
		add: function (e, t, n, r, i)
		{
			var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
			if (y)
			{
				n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t)
				{
					return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
				}), l = (t = (t || "").match(M) || [""]).length;
				while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] ||
				{}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] ||
				{}, c = w.extend(
				{
					type: d,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && w.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
			}
		},
		remove: function (e, t, n, r, i)
		{
			var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
			if (y && (u = y.events))
			{
				l = (t = (t || "").match(M) || [""]).length;
				while (l--)
					if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d)
					{
						f = w.event.special[d] ||
						{}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
						while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
					}
				else
					for (d in u) w.event.remove(e, d + t[l], n, r, !0);
				w.isEmptyObject(u) && J.remove(e, "handle events")
			}
		},
		dispatch: function (e)
		{
			var t = w.event.fix(e),
				n, r, i, o, a, s, u = new Array(arguments.length),
				l = (J.get(this, "events") ||
				{})[t.type] || [],
				c = w.event.special[t.type] ||
				{};
			for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
			if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t))
			{
				s = w.event.handlers.call(this, t, l), n = 0;
				while ((o = s[n++]) && !t.isPropagationStopped())
				{
					t.currentTarget = o.elem, r = 0;
					while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] ||
					{}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, t), t.result
			}
		},
		handlers: function (e, t)
		{
			var n, r, i, o, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && e.button >= 1))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled))
					{
						for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
						o.length && s.push(
						{
							elem: l,
							handlers: o
						})
					} return l = this, u < t.length && s.push(
			{
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function (e, t)
		{
			Object.defineProperty(w.Event.prototype, e,
			{
				enumerable: !0,
				configurable: !0,
				get: g(t) ? function ()
				{
					if (this.originalEvent) return t(this.originalEvent)
				} : function ()
				{
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function (t)
				{
					Object.defineProperty(this, e,
					{
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function (e)
		{
			return e[w.expando] ? e : new w.Event(e)
		},
		special:
		{
			load:
			{
				noBubble: !0
			},
			focus:
			{
				trigger: function ()
				{
					if (this !== Se() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur:
			{
				trigger: function ()
				{
					if (this === Se() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click:
			{
				trigger: function ()
				{
					if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
				},
				_default: function (e)
				{
					return N(e.target, "a")
				}
			},
			beforeunload:
			{
				postDispatch: function (e)
				{
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, w.removeEvent = function (e, t, n)
	{
		e.removeEventListener && e.removeEventListener(t, n)
	}, w.Event = function (e, t)
	{
		if (!(this instanceof w.Event)) return new w.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
	}, w.Event.prototype = {
		constructor: w.Event,
		isDefaultPrevented: ke,
		isPropagationStopped: ke,
		isImmediatePropagationStopped: ke,
		isSimulated: !1,
		preventDefault: function ()
		{
			var e = this.originalEvent;
			this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function ()
		{
			var e = this.originalEvent;
			this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function ()
		{
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, w.each(
	{
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function (e)
		{
			var t = e.button;
			return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, w.event.addProp), w.each(
	{
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, t)
	{
		w.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function (e)
			{
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), w.fn.extend(
	{
		on: function (e, t, n, r)
		{
			return De(this, e, t, n, r)
		},
		one: function (e, t, n, r)
		{
			return De(this, e, t, n, r, 1)
		},
		off: function (e, t, n)
		{
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e)
			{
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function ()
			{
				w.event.remove(this, e, n, t)
			})
		}
	});
	var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Ae = /<script|<style|<link/i,
		je = /checked\s*(?:[^=]|=\s*.checked.)/i,
		qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Le(e, t)
	{
		return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
	}

	function He(e)
	{
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function Oe(e)
	{
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Pe(e, t)
	{
		var n, r, i, o, a, s, u, l;
		if (1 === t.nodeType)
		{
			if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events))
			{
				delete a.handle, a.events = {};
				for (i in l)
					for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
			}
			K.hasData(e) && (s = K.access(e), u = w.extend(
			{}, s), K.set(t, u))
		}
	}

	function Me(e, t)
	{
		var n = t.nodeName.toLowerCase();
		"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function Re(e, t, n, r)
	{
		t = a.apply([], t);
		var i, o, s, u, l, c, f = 0,
			p = e.length,
			d = p - 1,
			y = t[0],
			v = g(y);
		if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i)
		{
			var o = e.eq(i);
			v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
		});
		if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r))
		{
			for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
			if (u)
				for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
		}
		return e
	}

	function Ie(e, t, n)
	{
		for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
		return e
	}
	w.extend(
	{
		htmlPrefilter: function (e)
		{
			return e.replace(Ne, "<$1></$2>")
		},
		clone: function (e, t, n)
		{
			var r, i, o, a, s = e.cloneNode(!0),
				u = w.contains(e.ownerDocument, e);
			if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
				for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
			if (t)
				if (n)
					for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
				else Pe(e, s);
			return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
		},
		cleanData: function (e)
		{
			for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (Y(n))
				{
					if (t = n[J.expando])
					{
						if (t.events)
							for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
						n[J.expando] = void 0
					}
					n[K.expando] && (n[K.expando] = void 0)
				}
		}
	}), w.fn.extend(
	{
		detach: function (e)
		{
			return Ie(this, e, !0)
		},
		remove: function (e)
		{
			return Ie(this, e)
		},
		text: function (e)
		{
			return z(this, function (e)
			{
				return void 0 === e ? w.text(this) : this.empty().each(function ()
				{
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function ()
		{
			return Re(this, arguments, function (e)
			{
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
			})
		},
		prepend: function ()
		{
			return Re(this, arguments, function (e)
			{
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
				{
					var t = Le(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function ()
		{
			return Re(this, arguments, function (e)
			{
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function ()
		{
			return Re(this, arguments, function (e)
			{
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function ()
		{
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
			return this
		},
		clone: function (e, t)
		{
			return e = null != e && e, t = null == t ? e : t, this.map(function ()
			{
				return w.clone(this, e, t)
			})
		},
		html: function (e)
		{
			return z(this, function (e)
			{
				var t = this[0] ||
					{},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()])
				{
					e = w.htmlPrefilter(e);
					try
					{
						for (; n < r; n++) 1 === (t = this[n] ||
						{}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
						t = 0
					}
					catch (e)
					{}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function ()
		{
			var e = [];
			return Re(this, arguments, function (t)
			{
				var n = this.parentNode;
				w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
			}, e)
		}
	}), w.each(
	{
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, t)
	{
		w.fn[e] = function (e)
		{
			for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
		$e = function (t)
		{
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		},
		Be = new RegExp(oe.join("|"), "i");
	! function ()
	{
		function t()
		{
			if (c)
			{
				l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
				var t = e.getComputedStyle(c);
				i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
			}
		}

		function n(e)
		{
			return Math.round(parseFloat(e))
		}
		var i, o, a, s, u, l = r.createElement("div"),
			c = r.createElement("div");
		c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h,
		{
			boxSizingReliable: function ()
			{
				return t(), o
			},
			pixelBoxStyles: function ()
			{
				return t(), s
			},
			pixelPosition: function ()
			{
				return t(), i
			},
			reliableMarginLeft: function ()
			{
				return t(), u
			},
			scrollboxSize: function ()
			{
				return t(), a
			}
		}))
	}();

	function Fe(e, t, n)
	{
		var r, i, o, a, s = e.style;
		return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function _e(e, t)
	{
		return {
			get: function ()
			{
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}
	var ze = /^(none|table(?!-c[ea]).+)/,
		Xe = /^--/,
		Ue = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ve = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ge = ["Webkit", "Moz", "ms"],
		Ye = r.createElement("div").style;

	function Qe(e)
	{
		if (e in Ye) return e;
		var t = e[0].toUpperCase() + e.slice(1),
			n = Ge.length;
		while (n--)
			if ((e = Ge[n] + t) in Ye) return e
	}

	function Je(e)
	{
		var t = w.cssProps[e];
		return t || (t = w.cssProps[e] = Qe(e) || e), t
	}

	function Ke(e, t, n)
	{
		var r = ie.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function Ze(e, t, n, r, i, o)
	{
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
		return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
	}

	function et(e, t, n)
	{
		var r = $e(e),
			i = Fe(e, t, r),
			o = "border-box" === w.css(e, "boxSizing", !1, r),
			a = o;
		if (We.test(i))
		{
			if (!n) return i;
			i = "auto"
		}
		return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
	}
	w.extend(
	{
		cssHooks:
		{
			opacity:
			{
				get: function (e, t)
				{
					if (t)
					{
						var n = Fe(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber:
		{
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps:
		{},
		style: function (e, t, n, r)
		{
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style)
			{
				var i, o, a, s = G(t),
					u = Xe.test(t),
					l = e.style;
				if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
				"string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
			}
		},
		css: function (e, t, n, r)
		{
			var i, o, a, s = G(t);
			return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), w.each(["height", "width"], function (e, t)
	{
		w.cssHooks[t] = {
			get: function (e, n, r)
			{
				if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function ()
				{
					return et(e, t, r)
				})
			},
			set: function (e, n, r)
			{
				var i, o = $e(e),
					a = "border-box" === w.css(e, "boxSizing", !1, o),
					s = r && Ze(e, t, r, a, o);
				return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
			}
		}
	}), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t)
	{
		if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e,
		{
			marginLeft: 0
		}, function ()
		{
			return e.getBoundingClientRect().left
		})) + "px"
	}), w.each(
	{
		margin: "",
		padding: "",
		border: "Width"
	}, function (e, t)
	{
		w.cssHooks[e + t] = {
			expand: function (n)
			{
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, "margin" !== e && (w.cssHooks[e + t].set = Ke)
	}), w.fn.extend(
	{
		css: function (e, t)
		{
			return z(this, function (e, t, n)
			{
				var r, i, o = {},
					a = 0;
				if (Array.isArray(t))
				{
					for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
			}, e, t, arguments.length > 1)
		}
	});

	function tt(e, t, n, r, i)
	{
		return new tt.prototype.init(e, t, n, r, i)
	}
	w.Tween = tt, tt.prototype = {
		constructor: tt,
		init: function (e, t, n, r, i, o)
		{
			this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
		},
		cur: function ()
		{
			var e = tt.propHooks[this.prop];
			return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
		},
		run: function (e)
		{
			var t, n = tt.propHooks[this.prop];
			return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
		}
	}, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
		_default:
		{
			get: function (e)
			{
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function (e)
			{
				w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
		set: function (e)
		{
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, w.easing = {
		linear: function (e)
		{
			return e
		},
		swing: function (e)
		{
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, w.fx = tt.prototype.init, w.fx.step = {};
	var nt, rt, it = /^(?:toggle|show|hide)$/,
		ot = /queueHooks$/;

	function at()
	{
		rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
	}

	function st()
	{
		return e.setTimeout(function ()
		{
			nt = void 0
		}), nt = Date.now()
	}

	function ut(e, t)
	{
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function lt(e, t, n)
	{
		for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function ct(e, t, n)
	{
		var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
			p = this,
			d = {},
			h = e.style,
			g = e.nodeType && ae(e),
			y = J.get(e, "fxshow");
		n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function ()
		{
			a.unqueued || s()
		}), a.unqueued++, p.always(function ()
		{
			p.always(function ()
			{
				a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
			})
		}));
		for (r in t)
			if (i = t[r], it.test(i))
			{
				if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show"))
				{
					if ("show" !== i || !y || void 0 === y[r]) continue;
					g = !0
				}
				d[r] = y && y[r] || w.style(e, r)
			} if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
		{
			f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function ()
			{
				h.display = l
			}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function ()
			{
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
			})), u = !1;
			for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow",
			{
				display: l
			}), o && (y.hidden = !g), g && fe([e], !0), p.done(function ()
			{
				g || fe([e]), J.remove(e, "fxshow");
				for (r in d) w.style(e, r, d[r])
			})), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
		}
	}

	function ft(e, t)
	{
		var n, r, i, o, a;
		for (n in e)
			if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
			{
				o = a.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			}
		else t[r] = i
	}

	function pt(e, t, n)
	{
		var r, i, o = 0,
			a = pt.prefilters.length,
			s = w.Deferred().always(function ()
			{
				delete u.elem
			}),
			u = function ()
			{
				if (i) return !1;
				for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
				return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
			},
			l = s.promise(
			{
				elem: e,
				props: w.extend(
				{}, t),
				opts: w.extend(!0,
				{
					specialEasing:
					{},
					easing: w.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: nt || st(),
				duration: n.duration,
				tweens: [],
				createTween: function (t, n)
				{
					var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function (t)
				{
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; n < r; n++) l.tweens[n].run(1);
					return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (ft(c, l.opts.specialEasing); o < a; o++)
			if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
		return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u,
		{
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l
	}
	w.Animation = w.extend(pt,
		{
			tweeners:
			{
				"*": [function (e, t)
				{
					var n = this.createTween(e, t);
					return ue(n.elem, e, ie.exec(t), n), n
				}]
			},
			tweener: function (e, t)
			{
				g(e) ? (t = e, e = ["*"]) : e = e.match(M);
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
			},
			prefilters: [ct],
			prefilter: function (e, t)
			{
				t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
			}
		}), w.speed = function (e, t, n)
		{
			var r = e && "object" == typeof e ? w.extend(
			{}, e) :
			{
				complete: n || !n && t || g(e) && e,
				duration: e,
				easing: n && t || t && !g(t) && t
			};
			return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function ()
			{
				g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
			}, r
		}, w.fn.extend(
		{
			fadeTo: function (e, t, n, r)
			{
				return this.filter(ae).css("opacity", 0).show().end().animate(
				{
					opacity: t
				}, e, n, r)
			},
			animate: function (e, t, n, r)
			{
				var i = w.isEmptyObject(e),
					o = w.speed(t, n, r),
					a = function ()
					{
						var t = pt(this, w.extend(
						{}, e), o);
						(i || J.get(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function (e, t, n)
			{
				var r = function (e)
				{
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function ()
				{
					var t = !0,
						i = null != e && e + "queueHooks",
						o = w.timers,
						a = J.get(this);
					if (i) a[i] && a[i].stop && r(a[i]);
					else
						for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
					for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
					!t && n || w.dequeue(this, e)
				})
			},
			finish: function (e)
			{
				return !1 !== e && (e = e || "fx"), this.each(function ()
				{
					var t, n = J.get(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						o = w.timers,
						a = r ? r.length : 0;
					for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), w.each(["toggle", "show", "hide"], function (e, t)
		{
			var n = w.fn[t];
			w.fn[t] = function (e, r, i)
			{
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
			}
		}), w.each(
		{
			slideDown: ut("show"),
			slideUp: ut("hide"),
			slideToggle: ut("toggle"),
			fadeIn:
			{
				opacity: "show"
			},
			fadeOut:
			{
				opacity: "hide"
			},
			fadeToggle:
			{
				opacity: "toggle"
			}
		}, function (e, t)
		{
			w.fn[e] = function (e, n, r)
			{
				return this.animate(t, e, n, r)
			}
		}), w.timers = [], w.fx.tick = function ()
		{
			var e, t = 0,
				n = w.timers;
			for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || w.fx.stop(), nt = void 0
		}, w.fx.timer = function (e)
		{
			w.timers.push(e), w.fx.start()
		}, w.fx.interval = 13, w.fx.start = function ()
		{
			rt || (rt = !0, at())
		}, w.fx.stop = function ()
		{
			rt = null
		}, w.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, w.fn.delay = function (t, n)
		{
			return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r)
			{
				var i = e.setTimeout(n, t);
				r.stop = function ()
				{
					e.clearTimeout(i)
				}
			})
		},
		function ()
		{
			var e = r.createElement("input"),
				t = r.createElement("select").appendChild(r.createElement("option"));
			e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
		}();
	var dt, ht = w.expr.attrHandle;
	w.fn.extend(
	{
		attr: function (e, t)
		{
			return z(this, w.attr, e, t, arguments.length > 1)
		},
		removeAttr: function (e)
		{
			return this.each(function ()
			{
				w.removeAttr(this, e)
			})
		}
	}), w.extend(
	{
		attr: function (e, t, n)
		{
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks:
		{
			type:
			{
				set: function (e, t)
				{
					if (!h.radioValue && "radio" === t && N(e, "input"))
					{
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function (e, t)
		{
			var n, r = 0,
				i = t && t.match(M);
			if (i && 1 === e.nodeType)
				while (n = i[r++]) e.removeAttribute(n)
		}
	}), dt = {
		set: function (e, t, n)
		{
			return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t)
	{
		var n = ht[t] || w.find.attr;
		ht[t] = function (e, t, r)
		{
			var i, o, a = t.toLowerCase();
			return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
		}
	});
	var gt = /^(?:input|select|textarea|button)$/i,
		yt = /^(?:a|area)$/i;
	w.fn.extend(
	{
		prop: function (e, t)
		{
			return z(this, w.prop, e, t, arguments.length > 1)
		},
		removeProp: function (e)
		{
			return this.each(function ()
			{
				delete this[w.propFix[e] || e]
			})
		}
	}), w.extend(
	{
		prop: function (e, t, n)
		{
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks:
		{
			tabIndex:
			{
				get: function (e)
				{
					var t = w.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix:
		{
			"for": "htmlFor",
			"class": "className"
		}
	}), h.optSelected || (w.propHooks.selected = {
		get: function (e)
		{
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function (e)
		{
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function ()
	{
		w.propFix[this.toLowerCase()] = this
	});

	function vt(e)
	{
		return (e.match(M) || []).join(" ")
	}

	function mt(e)
	{
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function xt(e)
	{
		return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
	}
	w.fn.extend(
	{
		addClass: function (e)
		{
			var t, n, r, i, o, a, s, u = 0;
			if (g(e)) return this.each(function (t)
			{
				w(this).addClass(e.call(this, t, mt(this)))
			});
			if ((t = xt(e)).length)
				while (n = this[u++])
					if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ")
					{
						a = 0;
						while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						i !== (s = vt(r)) && n.setAttribute("class", s)
					} return this
		},
		removeClass: function (e)
		{
			var t, n, r, i, o, a, s, u = 0;
			if (g(e)) return this.each(function (t)
			{
				w(this).removeClass(e.call(this, t, mt(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((t = xt(e)).length)
				while (n = this[u++])
					if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ")
					{
						a = 0;
						while (o = t[a++])
							while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
						i !== (s = vt(r)) && n.setAttribute("class", s)
					} return this
		},
		toggleClass: function (e, t)
		{
			var n = typeof e,
				r = "string" === n || Array.isArray(e);
			return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n)
			{
				w(this).toggleClass(e.call(this, n, mt(this), t), t)
			}) : this.each(function ()
			{
				var t, i, o, a;
				if (r)
				{
					i = 0, o = w(this), a = xt(e);
					while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
				}
				else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
			})
		},
		hasClass: function (e)
		{
			var t, n, r = 0;
			t = " " + e + " ";
			while (n = this[r++])
				if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var bt = /\r/g;
	w.fn.extend(
	{
		val: function (e)
		{
			var t, n, r, i = this[0];
			{
				if (arguments.length) return r = g(e), this.each(function (n)
				{
					var i;
					1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e)
					{
						return null == e ? "" : e + ""
					})), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
			}
		}
	}), w.extend(
	{
		valHooks:
		{
			option:
			{
				get: function (e)
				{
					var t = w.find.attr(e, "value");
					return null != t ? t : vt(w.text(e))
				}
			},
			select:
			{
				get: function (e)
				{
					var t, n, r, i = e.options,
						o = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						u = a ? o + 1 : i.length;
					for (r = o < 0 ? u : a ? o : 0; r < u; r++)
						if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup")))
						{
							if (t = w(n).val(), a) return t;
							s.push(t)
						} return s
				},
				set: function (e, t)
				{
					var n, r, i = e.options,
						o = w.makeArray(t),
						a = i.length;
					while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), w.each(["radio", "checkbox"], function ()
	{
		w.valHooks[this] = {
			set: function (e, t)
			{
				if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
			}
		}, h.checkOn || (w.valHooks[this].get = function (e)
		{
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), h.focusin = "onfocusin" in e;
	var wt = /^(?:focusinfocus|focusoutblur)$/,
		Tt = function (e)
		{
			e.stopPropagation()
		};
	w.extend(w.event,
	{
		trigger: function (t, n, i, o)
		{
			var a, s, u, l, c, p, d, h, v = [i || r],
				m = f.call(t, "type") ? t.type : t,
				x = f.call(t, "namespace") ? t.namespace.split(".") : [];
			if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] ||
				{}, o || !d.trigger || !1 !== d.trigger.apply(i, n)))
			{
				if (!o && !d.noBubble && !y(i))
				{
					for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
					u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
				}
				a = 0;
				while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") ||
				{})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
				return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
			}
		},
		simulate: function (e, t, n)
		{
			var r = w.extend(new w.Event, n,
			{
				type: e,
				isSimulated: !0
			});
			w.event.trigger(r, null, t)
		}
	}), w.fn.extend(
	{
		trigger: function (e, t)
		{
			return this.each(function ()
			{
				w.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t)
		{
			var n = this[0];
			if (n) return w.event.trigger(e, t, n, !0)
		}
	}), h.focusin || w.each(
	{
		focus: "focusin",
		blur: "focusout"
	}, function (e, t)
	{
		var n = function (e)
		{
			w.event.simulate(t, e.target, w.event.fix(e))
		};
		w.event.special[t] = {
			setup: function ()
			{
				var r = this.ownerDocument || this,
					i = J.access(r, t);
				i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
			},
			teardown: function ()
			{
				var r = this.ownerDocument || this,
					i = J.access(r, t) - 1;
				i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
			}
		}
	});
	var Ct = e.location,
		Et = Date.now(),
		kt = /\?/;
	w.parseXML = function (t)
	{
		var n;
		if (!t || "string" != typeof t) return null;
		try
		{
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		}
		catch (e)
		{
			n = void 0
		}
		return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
	};
	var St = /\[\]$/,
		Dt = /\r?\n/g,
		Nt = /^(?:submit|button|image|reset|file)$/i,
		At = /^(?:input|select|textarea|keygen)/i;

	function jt(e, t, n, r)
	{
		var i;
		if (Array.isArray(t)) w.each(t, function (t, i)
		{
			n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== x(t)) r(e, t);
		else
			for (i in t) jt(e + "[" + i + "]", t[i], n, r)
	}
	w.param = function (e, t)
	{
		var n, r = [],
			i = function (e, t)
			{
				var n = g(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function ()
		{
			i(this.name, this.value)
		});
		else
			for (n in e) jt(n, e[n], t, i);
		return r.join("&")
	}, w.fn.extend(
	{
		serialize: function ()
		{
			return w.param(this.serializeArray())
		},
		serializeArray: function ()
		{
			return this.map(function ()
			{
				var e = w.prop(this, "elements");
				return e ? w.makeArray(e) : this
			}).filter(function ()
			{
				var e = this.type;
				return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
			}).map(function (e, t)
			{
				var n = w(this).val();
				return null == n ? null : Array.isArray(n) ? w.map(n, function (e)
				{
					return {
						name: t.name,
						value: e.replace(Dt, "\r\n")
					}
				}) :
				{
					name: t.name,
					value: n.replace(Dt, "\r\n")
				}
			}).get()
		}
	});
	var qt = /%20/g,
		Lt = /#.*$/,
		Ht = /([?&])_=[^&]*/,
		Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Mt = /^(?:GET|HEAD)$/,
		Rt = /^\/\//,
		It = {},
		Wt = {},
		$t = "*/".concat("*"),
		Bt = r.createElement("a");
	Bt.href = Ct.href;

	function Ft(e)
	{
		return function (t, n)
		{
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(M) || [];
			if (g(n))
				while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function _t(e, t, n, r)
	{
		var i = {},
			o = e === Wt;

		function a(s)
		{
			var u;
			return i[s] = !0, w.each(e[s] || [], function (e, s)
			{
				var l = s(t, n, r);
				return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
			}), u
		}
		return a(t.dataTypes[0]) || !i["*"] && a("*")
	}

	function zt(e, t)
	{
		var n, r, i = w.ajaxSettings.flatOptions ||
		{};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && w.extend(!0, e, r), e
	}

	function Xt(e, t, n)
	{
		var r, i, o, a, s = e.contents,
			u = e.dataTypes;
		while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (i in s)
				if (s[i] && s[i].test(r))
				{
					u.unshift(i);
					break
				} if (u[0] in n) o = u[0];
		else
		{
			for (i in n)
			{
				if (!u[0] || e.converters[i + " " + u[0]])
				{
					o = i;
					break
				}
				a || (a = i)
			}
			o = o || a
		}
		if (o) return o !== u[0] && u.unshift(o), n[o]
	}

	function Ut(e, t, n, r)
	{
		var i, o, a, s, u, l = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
		o = c.shift();
		while (o)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
				if ("*" === o) o = u;
				else if ("*" !== u && u !== o)
		{
			if (!(a = l[u + " " + o] || l["* " + o]))
				for (i in l)
					if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]]))
					{
						!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
						break
					} if (!0 !== a)
				if (a && e["throws"]) t = a(t);
				else try
				{
					t = a(t)
				}
			catch (e)
			{
				return {
					state: "parsererror",
					error: a ? e : "No conversion from " + u + " to " + o
				}
			}
		}
		return {
			state: "success",
			data: t
		}
	}
	w.extend(
	{
		active: 0,
		lastModified:
		{},
		etag:
		{},
		ajaxSettings:
		{
			url: Ct.href,
			type: "GET",
			isLocal: Pt.test(Ct.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts:
			{
				"*": $t,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents:
			{
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields:
			{
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters:
			{
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": w.parseXML
			},
			flatOptions:
			{
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t)
		{
			return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
		},
		ajaxPrefilter: Ft(It),
		ajaxTransport: Ft(Wt),
		ajax: function (t, n)
		{
			"object" == typeof t && (n = t, t = void 0), n = n ||
			{};
			var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup(
				{}, n),
				g = h.context || h,
				y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
				v = w.Deferred(),
				m = w.Callbacks("once memory"),
				x = h.statusCode ||
				{},
				b = {},
				T = {},
				C = "canceled",
				E = {
					readyState: 0,
					getResponseHeader: function (e)
					{
						var t;
						if (c)
						{
							if (!s)
							{
								s = {};
								while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
							}
							t = s[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function ()
					{
						return c ? a : null
					},
					setRequestHeader: function (e, t)
					{
						return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
					},
					overrideMimeType: function (e)
					{
						return null == c && (h.mimeType = e), this
					},
					statusCode: function (e)
					{
						var t;
						if (e)
							if (c) E.always(e[E.status]);
							else
								for (t in e) x[t] = [x[t], e[t]];
						return this
					},
					abort: function (e)
					{
						var t = e || C;
						return i && i.abort(t), k(0, t), this
					}
				};
			if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain)
			{
				l = r.createElement("a");
				try
				{
					l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
				}
				catch (e)
				{
					h.crossDomain = !0
				}
			}
			if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
			(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
			for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
			if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
			if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E))
			{
				if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
				h.async && h.timeout > 0 && (u = e.setTimeout(function ()
				{
					E.abort("timeout")
				}, h.timeout));
				try
				{
					c = !1, i.send(b, k)
				}
				catch (e)
				{
					if (c) throw e;
					k(-1, e)
				}
			}
			else k(-1, "No Transport");

			function k(t, n, r, s)
			{
				var l, p, d, b, T, C = n;
				c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
			}
			return E
		},
		getJSON: function (e, t, n)
		{
			return w.get(e, t, n, "json")
		},
		getScript: function (e, t)
		{
			return w.get(e, void 0, t, "script")
		}
	}), w.each(["get", "post"], function (e, t)
	{
		w[t] = function (e, n, r, i)
		{
			return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend(
			{
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			}, w.isPlainObject(e) && e))
		}
	}), w._evalUrl = function (e)
	{
		return w.ajax(
		{
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, w.fn.extend(
	{
		wrapAll: function (e)
		{
			var t;
			return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function ()
			{
				var e = this;
				while (e.firstElementChild) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function (e)
		{
			return g(e) ? this.each(function (t)
			{
				w(this).wrapInner(e.call(this, t))
			}) : this.each(function ()
			{
				var t = w(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function (e)
		{
			var t = g(e);
			return this.each(function (n)
			{
				w(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function (e)
		{
			return this.parent(e).not("body").each(function ()
			{
				w(this).replaceWith(this.childNodes)
			}), this
		}
	}), w.expr.pseudos.hidden = function (e)
	{
		return !w.expr.pseudos.visible(e)
	}, w.expr.pseudos.visible = function (e)
	{
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, w.ajaxSettings.xhr = function ()
	{
		try
		{
			return new e.XMLHttpRequest
		}
		catch (e)
		{}
	};
	var Vt = {
			0: 200,
			1223: 204
		},
		Gt = w.ajaxSettings.xhr();
	h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t)
	{
		var n, r;
		if (h.cors || Gt && !t.crossDomain) return {
			send: function (i, o)
			{
				var a, s = t.xhr();
				if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (a in t.xhrFields) s[a] = t.xhrFields[a];
				t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
				for (a in i) s.setRequestHeader(a, i[a]);
				n = function (e)
				{
					return function ()
					{
						n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ?
						{
							binary: s.response
						} :
						{
							text: s.responseText
						}, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function ()
				{
					4 === s.readyState && e.setTimeout(function ()
					{
						n && r()
					})
				}, n = n("abort");
				try
				{
					s.send(t.hasContent && t.data || null)
				}
				catch (e)
				{
					if (n) throw e
				}
			},
			abort: function ()
			{
				n && n()
			}
		}
	}), w.ajaxPrefilter(function (e)
	{
		e.crossDomain && (e.contents.script = !1)
	}), w.ajaxSetup(
	{
		accepts:
		{
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents:
		{
			script: /\b(?:java|ecma)script\b/
		},
		converters:
		{
			"text script": function (e)
			{
				return w.globalEval(e), e
			}
		}
	}), w.ajaxPrefilter("script", function (e)
	{
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), w.ajaxTransport("script", function (e)
	{
		if (e.crossDomain)
		{
			var t, n;
			return {
				send: function (i, o)
				{
					t = w("<script>").prop(
					{
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function (e)
					{
						t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
					}), r.head.appendChild(t[0])
				},
				abort: function ()
				{
					n && n()
				}
			}
		}
	});
	var Yt = [],
		Qt = /(=)\?(?=&|$)|\?\?/;
	w.ajaxSetup(
	{
		jsonp: "callback",
		jsonpCallback: function ()
		{
			var e = Yt.pop() || w.expando + "_" + Et++;
			return this[e] = !0, e
		}
	}), w.ajaxPrefilter("json jsonp", function (t, n, r)
	{
		var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
		if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function ()
		{
			return a || w.error(i + " was not called"), a[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function ()
		{
			a = arguments
		}, r.always(function ()
		{
			void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
		}), "script"
	}), h.createHTMLDocument = function ()
	{
		var e = r.implementation.createHTMLDocument("").body;
		return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
	}(), w.parseHTML = function (e, t, n)
	{
		if ("string" != typeof e) return [];
		"boolean" == typeof t && (n = t, t = !1);
		var i, o, a;
		return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
	}, w.fn.load = function (e, t, n)
	{
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax(
		{
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function (e)
		{
			o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
		}).always(n && function (e, t)
		{
			a.each(function ()
			{
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t)
	{
		w.fn[t] = function (e)
		{
			return this.on(t, e)
		}
	}), w.expr.pseudos.animated = function (e)
	{
		return w.grep(w.timers, function (t)
		{
			return e === t.elem
		}).length
	}, w.offset = {
		setOffset: function (e, t, n)
		{
			var r, i, o, a, s, u, l, c = w.css(e, "position"),
				f = w(e),
				p = {};
			"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend(
			{}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
		}
	}, w.fn.extend(
	{
		offset: function (e)
		{
			if (arguments.length) return void 0 === e ? this : this.each(function (t)
			{
				w.offset.setOffset(this, e, t)
			});
			var t, n, r = this[0];
			if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView,
			{
				top: t.top + n.pageYOffset,
				left: t.left + n.pageXOffset
			}) :
			{
				top: 0,
				left: 0
			}
		},
		position: function ()
		{
			if (this[0])
			{
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
				else
				{
					t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
					while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - w.css(r, "marginTop", !0),
					left: t.left - i.left - w.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function ()
		{
			return this.map(function ()
			{
				var e = this.offsetParent;
				while (e && "static" === w.css(e, "position")) e = e.offsetParent;
				return e || be
			})
		}
	}), w.each(
	{
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, t)
	{
		var n = "pageYOffset" === t;
		w.fn[e] = function (r)
		{
			return z(this, function (e, r, i)
			{
				var o;
				if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
				o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
			}, e, r, arguments.length)
		}
	}), w.each(["top", "left"], function (e, t)
	{
		w.cssHooks[t] = _e(h.pixelPosition, function (e, n)
		{
			if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
		})
	}), w.each(
	{
		Height: "height",
		Width: "width"
	}, function (e, t)
	{
		w.each(
		{
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function (n, r)
		{
			w.fn[r] = function (i, o)
			{
				var a = arguments.length && (n || "boolean" != typeof i),
					s = n || (!0 === i || !0 === o ? "margin" : "border");
				return z(this, function (t, n, i)
				{
					var o;
					return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
				}, t, a ? i : void 0, a)
			}
		})
	}), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t)
	{
		w.fn[t] = function (e, n)
		{
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), w.fn.extend(
	{
		hover: function (e, t)
		{
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), w.fn.extend(
	{
		bind: function (e, t, n)
		{
			return this.on(e, null, t, n)
		},
		unbind: function (e, t)
		{
			return this.off(e, null, t)
		},
		delegate: function (e, t, n, r)
		{
			return this.on(t, e, n, r)
		},
		undelegate: function (e, t, n)
		{
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), w.proxy = function (e, t)
	{
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function ()
		{
			return e.apply(t || this, r.concat(o.call(arguments)))
		}, i.guid = e.guid = e.guid || w.guid++, i
	}, w.holdReady = function (e)
	{
		e ? w.readyWait++ : w.ready(!0)
	}, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e)
	{
		var t = w.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, "function" == typeof define && define.amd && define("jquery", [], function ()
	{
		return w
	});
	var Jt = e.jQuery,
		Kt = e.$;
	return w.noConflict = function (t)
	{
		return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
	}, t || (e.jQuery = e.$ = w), w
});
! function (t, e)
{
	"object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.html")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, g, u)
{
	"use strict";

	function i(t, e)
	{
		for (var n = 0; n < e.length; n++)
		{
			var i = e[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function s(t, e, n)
	{
		return e && i(t.prototype, e), n && i(t, n), t
	}

	function r(o)
	{
		for (var t = 1; t < arguments.length; t++)
		{
			var s = null != arguments[t] ? arguments[t] :
				{},
				e = Object.keys(s);
			"function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function (t)
			{
				return Object.getOwnPropertyDescriptor(s, t).enumerable
			}))), e.forEach(function (t)
			{
				var e, n = o,
					i = s[e = t];
				e in n ? Object.defineProperty(n, e,
				{
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[e] = i
			})
		}
		return o
	}
	g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u;
	var e = "transitionend";
	var _ = {
		TRANSITION_END: "bsTransitionEnd",
		getUID: function (t)
		{
			for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
			return t
		},
		getSelectorFromElement: function (t)
		{
			var e, n = t.getAttribute("data-target");
			n && "#" !== n || (n = (e = t.getAttribute("href")) && "#" !== e ? e.trim() : "");
			try
			{
				return document.querySelector(n) ? n : null
			}
			catch (t)
			{
				return null
			}
		},
		getTransitionDurationFromElement: function (t)
		{
			if (!t) return 0;
			var e = g(t).css("transition-duration"),
				n = g(t).css("transition-delay"),
				i = parseFloat(e),
				o = parseFloat(n);
			return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
		},
		reflow: function (t)
		{
			return t.offsetHeight
		},
		triggerTransitionEnd: function (t)
		{
			g(t).trigger(e)
		},
		supportsTransitionEnd: function ()
		{
			return Boolean(e)
		},
		isElement: function (t)
		{
			return (t[0] || t).nodeType
		},
		typeCheckConfig: function (t, e, n)
		{
			for (var i in n)
				if (Object.prototype.hasOwnProperty.call(n, i))
				{
					var o = n[i],
						s = e[i],
						r = s && _.isElement(s) ? "element" :
						{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
					if (!new RegExp(o).test(r)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + r + '" but expected type "' + o + '".')
				}
		},
		findShadowRoot: function (t)
		{
			if (!document.documentElement.attachShadow) return null;
			if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
			var e = t.getRootNode();
			return e instanceof ShadowRoot ? e : null
		}
	};
	g.fn.emulateTransitionEnd = function (t)
	{
		var e = this,
			n = !1;
		return g(this).one(_.TRANSITION_END, function ()
		{
			n = !0
		}), setTimeout(function ()
		{
			n || _.triggerTransitionEnd(e)
		}, t), this
	}, g.event.special[_.TRANSITION_END] = {
		bindType: e,
		delegateType: e,
		handle: function (t)
		{
			if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
		}
	};
	var n, o = "alert",
		a = "bs.alert",
		l = "." + a,
		c = g.fn[o],
		h = {
			CLOSE: "close" + l,
			CLOSED: "closed" + l,
			CLICK_DATA_API: "click" + l + ".data-api"
		},
		d = ((n = f.prototype).close = function (t)
		{
			var e = this._element;
			t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
		}, n.dispose = function ()
		{
			g.removeData(this._element, a), this._element = null
		}, n._getRootElement = function (t)
		{
			var e = _.getSelectorFromElement(t),
				n = !1;
			return e && (n = document.querySelector(e)), n = n || g(t).closest(".alert")[0]
		}, n._triggerCloseEvent = function (t)
		{
			var e = g.Event(h.CLOSE);
			return g(t).trigger(e), e
		}, n._removeElement = function (e)
		{
			var t, n = this;
			g(e).removeClass("show"), g(e).hasClass("fade") ? (t = _.getTransitionDurationFromElement(e), g(e).one(_.TRANSITION_END, function (t)
			{
				return n._destroyElement(e, t)
			}).emulateTransitionEnd(t)) : this._destroyElement(e)
		}, n._destroyElement = function (t)
		{
			g(t).detach().trigger(h.CLOSED).remove()
		}, f._jQueryInterface = function (n)
		{
			return this.each(function ()
			{
				var t = g(this),
					e = t.data(a);
				e || (e = new f(this), t.data(a, e)), "close" === n && e[n](this)
			})
		}, f._handleDismiss = function (e)
		{
			return function (t)
			{
				t && t.preventDefault(), e.close(this)
			}
		}, s(f, null, [
		{
			key: "VERSION",
			get: function ()
			{
				return "4.3.1"
			}
		}]), f);

	function f(t)
	{
		this._element = t
	}
	g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), g.fn[o] = d._jQueryInterface, g.fn[o].Constructor = d, g.fn[o].noConflict = function ()
	{
		return g.fn[o] = c, d._jQueryInterface
	};
	var m, p = "button",
		v = "bs.button",
		E = "." + v,
		y = ".data-api",
		C = g.fn[p],
		T = "active",
		S = '[data-toggle^="button"]',
		b = ".btn",
		I = {
			CLICK_DATA_API: "click" + E + y,
			FOCUS_BLUR_DATA_API: "focus" + E + y + " blur" + E + y
		},
		D = ((m = w.prototype).toggle = function ()
		{
			var t = !0,
				e = !0,
				n = g(this._element).closest('[data-toggle="buttons"]')[0];
			if (n)
			{
				var i, o = this._element.querySelector('input:not([type="hidden"])');
				if (o)
				{
					if ("radio" === o.type && (o.checked && this._element.classList.contains(T) ? t = !1 : (i = n.querySelector(".active")) && g(i).removeClass(T)), t)
					{
						if (o.hasAttribute("disabled") || n.hasAttribute("disabled") || o.classList.contains("disabled") || n.classList.contains("disabled")) return;
						o.checked = !this._element.classList.contains(T), g(o).trigger("change")
					}
					o.focus(), e = !1
				}
			}
			e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), t && g(this._element).toggleClass(T)
		}, m.dispose = function ()
		{
			g.removeData(this._element, v), this._element = null
		}, w._jQueryInterface = function (e)
		{
			return this.each(function ()
			{
				var t = g(this).data(v);
				t || (t = new w(this), g(this).data(v, t)), "toggle" === e && t[e]()
			})
		}, s(w, null, [
		{
			key: "VERSION",
			get: function ()
			{
				return "4.3.1"
			}
		}]), w);

	function w(t)
	{
		this._element = t
	}
	g(document).on(I.CLICK_DATA_API, S, function (t)
	{
		t.preventDefault();
		var e = t.target;
		g(e).hasClass("btn") || (e = g(e).closest(b)), D._jQueryInterface.call(g(e), "toggle")
	}).on(I.FOCUS_BLUR_DATA_API, S, function (t)
	{
		var e = g(t.target).closest(b)[0];
		g(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
	}), g.fn[p] = D._jQueryInterface, g.fn[p].Constructor = D, g.fn[p].noConflict = function ()
	{
		return g.fn[p] = C, D._jQueryInterface
	};
	var A, N = "carousel",
		O = "bs.carousel",
		k = "." + O,
		P = ".data-api",
		L = g.fn[N],
		j = {
			interval: 5e3,
			keyboard: !0,
			slide: !1,
			pause: "hover",
			wrap: !0,
			touch: !0
		},
		H = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			slide: "(boolean|string)",
			pause: "(string|boolean)",
			wrap: "boolean",
			touch: "boolean"
		},
		R = "next",
		x = "prev",
		F = {
			SLIDE: "slide" + k,
			SLID: "slid" + k,
			KEYDOWN: "keydown" + k,
			MOUSEENTER: "mouseenter" + k,
			MOUSELEAVE: "mouseleave" + k,
			TOUCHSTART: "touchstart" + k,
			TOUCHMOVE: "touchmove" + k,
			TOUCHEND: "touchend" + k,
			POINTERDOWN: "pointerdown" + k,
			POINTERUP: "pointerup" + k,
			DRAG_START: "dragstart" + k,
			LOAD_DATA_API: "load" + k + P,
			CLICK_DATA_API: "click" + k + P
		},
		U = "active",
		W = ".active.carousel-item",
		q = {
			TOUCH: "touch",
			PEN: "pen"
		},
		M = ((A = K.prototype).next = function ()
		{
			this._isSliding || this._slide(R)
		}, A.nextWhenVisible = function ()
		{
			!document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
		}, A.prev = function ()
		{
			this._isSliding || this._slide(x)
		}, A.pause = function (t)
		{
			t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
		}, A.cycle = function (t)
		{
			t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
		}, A.to = function (t)
		{
			var e = this;
			this._activeElement = this._element.querySelector(W);
			var n = this._getItemIndex(this._activeElement);
			if (!(t > this._items.length - 1 || t < 0))
				if (this._isSliding) g(this._element).one(F.SLID, function ()
				{
					return e.to(t)
				});
				else
				{
					if (n === t) return this.pause(), void this.cycle();
					var i = n < t ? R : x;
					this._slide(i, this._items[t])
				}
		}, A.dispose = function ()
		{
			g(this._element).off(k), g.removeData(this._element, O), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
		}, A._getConfig = function (t)
		{
			return t = r(
			{}, j, t), _.typeCheckConfig(N, t, H), t
		}, A._handleSwipe = function ()
		{
			var t, e = Math.abs(this.touchDeltaX);
			e <= 40 || (0 < (t = e / this.touchDeltaX) && this.prev(), t < 0 && this.next())
		}, A._addEventListeners = function ()
		{
			var e = this;
			this._config.keyboard && g(this._element).on(F.KEYDOWN, function (t)
			{
				return e._keydown(t)
			}), "hover" === this._config.pause && g(this._element).on(F.MOUSEENTER, function (t)
			{
				return e.pause(t)
			}).on(F.MOUSELEAVE, function (t)
			{
				return e.cycle(t)
			}), this._config.touch && this._addTouchEventListeners()
		}, A._addTouchEventListeners = function ()
		{
			var t, e, n = this;
			this._touchSupported && (t = function (t)
			{
				n._pointerEvent && q[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
			}, e = function (t)
			{
				n._pointerEvent && q[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t)
				{
					return n.cycle(t)
				}, 500 + n._config.interval))
			}, g(this._element.querySelectorAll(".carousel-item img")).on(F.DRAG_START, function (t)
			{
				return t.preventDefault()
			}), this._pointerEvent ? (g(this._element).on(F.POINTERDOWN, t), g(this._element).on(F.POINTERUP, e), this._element.classList.add("pointer-event")) : (g(this._element).on(F.TOUCHSTART, t), g(this._element).on(F.TOUCHMOVE, function (t)
			{
				var e;
				(e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
			}), g(this._element).on(F.TOUCHEND, e)))
		}, A._keydown = function (t)
		{
			if (!/input|textarea/i.test(t.target.tagName)) switch (t.which)
			{
			case 37:
				t.preventDefault(), this.prev();
				break;
			case 39:
				t.preventDefault(), this.next()
			}
		}, A._getItemIndex = function (t)
		{
			return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
		}, A._getItemByDirection = function (t, e)
		{
			var n = t === R,
				i = t === x,
				o = this._getItemIndex(e),
				s = this._items.length - 1;
			if ((i && 0 === o || n && o === s) && !this._config.wrap) return e;
			var r = (o + (t === x ? -1 : 1)) % this._items.length;
			return -1 == r ? this._items[this._items.length - 1] : this._items[r]
		}, A._triggerSlideEvent = function (t, e)
		{
			var n = this._getItemIndex(t),
				i = this._getItemIndex(this._element.querySelector(W)),
				o = g.Event(F.SLIDE,
				{
					relatedTarget: t,
					direction: e,
					from: i,
					to: n
				});
			return g(this._element).trigger(o), o
		}, A._setActiveIndicatorElement = function (t)
		{
			var e, n;
			this._indicatorsElement && (e = [].slice.call(this._indicatorsElement.querySelectorAll(".active")), g(e).removeClass(U), (n = this._indicatorsElement.children[this._getItemIndex(t)]) && g(n).addClass(U))
		}, A._slide = function (t, e)
		{
			var n, i, o, s, r, a = this,
				l = this._element.querySelector(W),
				c = this._getItemIndex(l),
				h = e || l && this._getItemByDirection(t, l),
				u = this._getItemIndex(h),
				d = Boolean(this._interval),
				f = t === R ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right");
			h && g(h).hasClass(U) ? this._isSliding = !1 : !this._triggerSlideEvent(h, f).isDefaultPrevented() && l && h && (this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(h), o = g.Event(F.SLID,
			{
				relatedTarget: h,
				direction: f,
				from: c,
				to: u
			}), g(this._element).hasClass("slide") ? (g(h).addClass(i), _.reflow(h), g(l).addClass(n), g(h).addClass(n), s = parseInt(h.getAttribute("data-interval"), 10), this._config.interval = s ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, s) : this._config.defaultInterval || this._config.interval, r = _.getTransitionDurationFromElement(l), g(l).one(_.TRANSITION_END, function ()
			{
				g(h).removeClass(n + " " + i).addClass(U), g(l).removeClass(U + " " + i + " " + n), a._isSliding = !1, setTimeout(function ()
				{
					return g(a._element).trigger(o)
				}, 0)
			}).emulateTransitionEnd(r)) : (g(l).removeClass(U), g(h).addClass(U), this._isSliding = !1, g(this._element).trigger(o)), d && this.cycle())
		}, K._jQueryInterface = function (i)
		{
			return this.each(function ()
			{
				var t = g(this).data(O),
					e = r(
					{}, j, g(this).data());
				"object" == typeof i && (e = r(
				{}, e, i));
				var n = "string" == typeof i ? i : e.slide;
				if (t || (t = new K(this, e), g(this).data(O, t)), "number" == typeof i) t.to(i);
				else if ("string" == typeof n)
				{
					if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
					t[n]()
				}
				else e.interval && e.ride && (t.pause(), t.cycle())
			})
		}, K._dataApiClickHandler = function (t)
		{
			var e, n, i, o = _.getSelectorFromElement(this);
			!o || (e = g(o)[0]) && g(e).hasClass("carousel") && (n = r(
			{}, g(e).data(), g(this).data()), (i = this.getAttribute("data-slide-to")) && (n.interval = !1), K._jQueryInterface.call(g(e), n), i && g(e).data(O).to(i), t.preventDefault())
		}, s(K, null, [
		{
			key: "VERSION",
			get: function ()
			{
				return "4.3.1"
			}
		},
		{
			key: "Default",
			get: function ()
			{
				return j
			}
		}]), K);

	function K(t, e)
	{
		this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
	}
	g(document).on(F.CLICK_DATA_API, "[data-slide], [data-slide-to]", M._dataApiClickHandler), g(window).on(F.LOAD_DATA_API, function ()
	{
		for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++)
		{
			var i = g(t[e]);
			M._jQueryInterface.call(i, i.data())
		}
	}), g.fn[N] = M._jQueryInterface, g.fn[N].Constructor = M, g.fn[N].noConflict = function ()
	{
		return g.fn[N] = L, M._jQueryInterface
	};
	var Q, B = "collapse",
		V = "bs.collapse",
		Y = "." + V,
		z = g.fn[B],
		X = {
			toggle: !0,
			parent: ""
		},
		$ = {
			toggle: "boolean",
			parent: "(string|element)"
		},
		G = {
			SHOW: "show" + Y,
			SHOWN: "shown" + Y,
			HIDE: "hide" + Y,
			HIDDEN: "hidden" + Y,
			CLICK_DATA_API: "click" + Y + ".data-api"
		},
		J = "show",
		Z = "collapse",
		tt = "collapsing",
		et = "collapsed",
		nt = '[data-toggle="collapse"]',
		it = ((Q = ot.prototype).toggle = function ()
		{
			g(this._element).hasClass(J) ? this.hide() : this.show()
		}, Q.show = function ()
		{
			var t, e, n, i, o, s, r = this;
			this._isTransitioning || g(this._element).hasClass(J) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t)
			{
				return "string" == typeof r._config.parent ? t.getAttribute("data-parent") === r._config.parent : t.classList.contains(Z)
			})).length && (t = null), t && (e = g(t).not(this._selector).data(V)) && e._isTransitioning) || (n = g.Event(G.SHOW), g(this._element).trigger(n), n.isDefaultPrevented() || (t && (ot._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(V, null)), i = this._getDimension(), g(this._element).removeClass(Z).addClass(tt), this._element.style[i] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(et).attr("aria-expanded", !0), this.setTransitioning(!0), o = "scroll" + (i[0].toUpperCase() + i.slice(1)), s = _.getTransitionDurationFromElement(this._element), g(this._element).one(_.TRANSITION_END, function ()
			{
				g(r._element).removeClass(tt).addClass(Z).addClass(J), r._element.style[i] = "", r.setTransitioning(!1), g(r._element).trigger(G.SHOWN)
			}).emulateTransitionEnd(s), this._element.style[i] = this._element[o] + "px"))
		}, Q.hide = function ()
		{
			var t = this;
			if (!this._isTransitioning && g(this._element).hasClass(J))
			{
				var e = g.Event(G.HIDE);
				if (g(this._element).trigger(e), !e.isDefaultPrevented())
				{
					var n = this._getDimension();
					this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(tt).removeClass(Z).removeClass(J);
					var i = this._triggerArray.length;
					if (0 < i)
						for (var o = 0; o < i; o++)
						{
							var s = this._triggerArray[o],
								r = _.getSelectorFromElement(s);
							null !== r && (g([].slice.call(document.querySelectorAll(r))).hasClass(J) || g(s).addClass(et).attr("aria-expanded", !1))
						}
					this.setTransitioning(!0), this._element.style[n] = "";
					var a = _.getTransitionDurationFromElement(this._element);
					g(this._element).one(_.TRANSITION_END, function ()
					{
						t.setTransitioning(!1), g(t._element).removeClass(tt).addClass(Z).trigger(G.HIDDEN)
					}).emulateTransitionEnd(a)
				}
			}
		}, Q.setTransitioning = function (t)
		{
			this._isTransitioning = t
		}, Q.dispose = function ()
		{
			g.removeData(this._element, V), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
		}, Q._getConfig = function (t)
		{
			return (t = r(
			{}, X, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(B, t, $), t
		}, Q._getDimension = function ()
		{
			return g(this._element).hasClass("width") ? "width" : "height"
		}, Q._getParent = function ()
		{
			var t, n = this;
			_.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
			var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
				i = [].slice.call(t.querySelectorAll(e));
			return g(i).each(function (t, e)
			{
				n._addAriaAndCollapsedClass(ot._getTargetFromElement(e), [e])
			}), t
		}, Q._addAriaAndCollapsedClass = function (t, e)
		{
			var n = g(t).hasClass(J);
			e.length && g(e).toggleClass(et, !n).attr("aria-expanded", n)
		}, ot._getTargetFromElement = function (t)
		{
			var e = _.getSelectorFromElement(t);
			return e ? document.querySelector(e) : null
		}, ot._jQueryInterface = function (i)
		{
			return this.each(function ()
			{
				var t = g(this),
					e = t.data(V),
					n = r(
					{}, X, t.data(), "object" == typeof i && i ? i :
					{});
				if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new ot(this, n), t.data(V, e)), "string" == typeof i)
				{
					if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
					e[i]()
				}
			})
		}, s(ot, null, [
		{
			key: "VERSION",
			get: function ()
			{
				return "4.3.1"
			}
		},
		{
			key: "Default",
			get: function ()
			{
				return X
			}
		}]), ot);

	function ot(e, t)
	{
		this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
		for (var n = [].slice.call(document.querySelectorAll(nt)), i = 0, o = n.length; i < o; i++)
		{
			var s = n[i],
				r = _.getSelectorFromElement(s),
				a = [].slice.call(document.querySelectorAll(r)).filter(function (t)
				{
					return t === e
				});
			null !== r && 0 < a.length && (this._selector = r, this._triggerArray.push(s))
		}
		this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
	}
	g(document).on(G.CLICK_DATA_API, nt, function (t)
	{
		"A" === t.currentTarget.tagName && t.preventDefault();
		var n = g(this),
			e = _.getSelectorFromElement(this),
			i = [].slice.call(document.querySelectorAll(e));
		g(i).each(function ()
		{
			var t = g(this),
				e = t.data(V) ? "toggle" : n.data();
			it._jQueryInterface.call(t, e)
		})
	}), g.fn[B] = it._jQueryInterface, g.fn[B].Constructor = it, g.fn[B].noConflict = function ()
	{
		return g.fn[B] = z, it._jQueryInterface
	};
	var st, rt = "dropdown",
		at = "bs.dropdown",
		lt = "." + at,
		ct = ".data-api",
		ht = g.fn[rt],
		ut = new RegExp("38|40|27"),
		dt = {
			HIDE: "hide" + lt,
			HIDDEN: "hidden" + lt,
			SHOW: "show" + lt,
			SHOWN: "shown" + lt,
			CLICK: "click" + lt,
			CLICK_DATA_API: "click" + lt + ct,
			KEYDOWN_DATA_API: "keydown" + lt + ct,
			KEYUP_DATA_API: "keyup" + lt + ct
		},
		ft = "disabled",
		gt = "show",
		_t = "dropdown-menu-right",
		mt = '[data-toggle="dropdown"]',
		pt = ".dropdown-menu",
		vt = {
			offset: 0,
			flip: !0,
			boundary: "scrollParent",
			reference: "toggle",
			display: "dynamic"
		},
		Et = {
			offset: "(number|string|function)",
			flip: "boolean",
			boundary: "(string|element)",
			reference: "(string|element)",
			display: "string"
		},
		yt = ((st = Ct.prototype).toggle = function ()
		{
			if (!this._element.disabled && !g(this._element).hasClass(ft))
			{
				var t = Ct._getParentFromElement(this._element),
					e = g(this._menu).hasClass(gt);
				if (Ct._clearMenus(), !e)
				{
					var n = {
							relatedTarget: this._element
						},
						i = g.Event(dt.SHOW, n);
					if (g(t).trigger(i), !i.isDefaultPrevented())
					{
						if (!this._inNavbar)
						{
							if (void 0 === u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
							var o = this._element;
							"parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, void 0 !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass("position-static"), this._popper = new u(o, this._menu, this._getPopperConfig())
						}
						"ontouchstart" in document.documentElement && 0 === g(t).closest(".navbar-nav").length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(gt), g(t).toggleClass(gt).trigger(g.Event(dt.SHOWN, n))
					}
				}
			}
		}, st.show = function ()
		{
			var t, e, n;
			this._element.disabled || g(this._element).hasClass(ft) || g(this._menu).hasClass(gt) || (t = {
				relatedTarget: this._element
			}, e = g.Event(dt.SHOW, t), n = Ct._getParentFromElement(this._element), g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(gt), g(n).toggleClass(gt).trigger(g.Event(dt.SHOWN, t))))
		}, st.hide = function ()
		{
			var t, e, n;
			this._element.disabled || g(this._element).hasClass(ft) || !g(this._menu).hasClass(gt) || (t = {
				relatedTarget: this._element
			}, e = g.Event(dt.HIDE, t), n = Ct._getParentFromElement(this._element), g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(gt), g(n).toggleClass(gt).trigger(g.Event(dt.HIDDEN, t))))
		}, st.dispose = function ()
		{
			g.removeData(this._element, at), g(this._element).off(lt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
		}, st.update = function ()
		{
			this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
		}, st._addEventListeners = function ()
		{
			var e = this;
			g(this._element).on(dt.CLICK, function (t)
			{
				t.preventDefault(), t.stopPropagation(), e.toggle()
			})
		}, st._getConfig = function (t)
		{
			return t = r(
			{}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(rt, t, this.constructor.DefaultType), t
		}, st._getMenuElement = function ()
		{
			var t;
			return this._menu || (t = Ct._getParentFromElement(this._element)) && (this._menu = t.querySelector(pt)), this._menu
		}, st._getPlacement = function ()
		{
			var t = g(this._element.parentNode),
				e = "bottom-start";
			return t.hasClass("dropup") ? (e = "top-start", g(this._menu).hasClass(_t) && (e = "top-end")) : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : g(this._menu).hasClass(_t) && (e = "bottom-end"), e
		}, st._detectNavbar = function ()
		{
			return 0 < g(this._element).closest(".navbar").length
		}, st._getOffset = function ()
		{
			var e = this,
				t = {};
			return "function" == typeof this._config.offset ? t.fn = function (t)
			{
				return t.offsets = r(
				{}, t.offsets, e._config.offset(t.offsets, e._element) ||
				{}), t
			} : t.offset = this._config.offset, t
		}, st._getPopperConfig = function ()
		{
			var t = {
				placement: this._getPlacement(),
				modifiers:
				{
					offset: this._getOffset(),
					flip:
					{
						enabled: this._config.flip
					},
					preventOverflow:
					{
						boundariesElement: this._config.boundary
					}
				}
			};
			return "static" === this._config.display && (t.modifiers.applyStyle = {
				enabled: !1
			}), t
		}, Ct._jQueryInterface = function (e)
		{
			return this.each(function ()
			{
				var t = g(this).data(at);
				if (t || (t = new Ct(this, "object" == typeof e ? e : null), g(this).data(at, t)), "string" == typeof e)
				{
					if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
					t[e]()
				}
			})
		}, Ct._clearMenus = function (t)
		{
			if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
				for (var e = [].slice.call(document.querySelectorAll(mt)), n = 0, i = e.length; n < i; n++)
				{
					var o, s, r = Ct._getParentFromElement(e[n]),
						a = g(e[n]).data(at),
						l = {
							relatedTarget: e[n]
						};
					t && "click" === t.type && (l.clickEvent = t), a && (o = a._menu, !g(r).hasClass(gt) || t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(r, t.target) || (s = g.Event(dt.HIDE, l), g(r).trigger(s), s.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(o).removeClass(gt), g(r).removeClass(gt).trigger(g.Event(dt.HIDDEN, l)))))
				}
		}, Ct._getParentFromElement = function (t)
		{
			var e, n = _.getSelectorFromElement(t);
			return n && (e = document.querySelector(n)), e || t.parentNode
		}, Ct._dataApiKeydownHandler = function (t)
		{
			var e, n, i, o, s;
			(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(pt).length) : !ut.test(t.which)) || (t.preventDefault(), t.stopPropagation(), this.disabled || g(this).hasClass(ft)) || (e = Ct._getParentFromElement(this), (n = g(e).hasClass(gt)) && (!n || 27 !== t.which && 32 !== t.which) ? 0 !== (i = [].slice.call(e.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"))).length && (o = i.indexOf(t.target), 38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()) : (27 === t.which && (s = e.querySelector(mt), g(s).trigger("focus")), g(this).trigger("click")))
		}, s(Ct, null, [
		{
			key: "VERSION",
			get: function ()
			{
				return "4.3.1"
			}
		},
		{
			key: "Default",
			get: function ()
			{
				return vt
			}
		},
		{
			key: "DefaultType",
			get: function ()
			{
				return Et
			}
		}]), Ct);

	function Ct(t, e)
	{
		this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
	}
	g(document).on(dt.KEYDOWN_DATA_API, mt, yt._dataApiKeydownHandler).on(dt.KEYDOWN_DATA_API, pt, yt._dataApiKeydownHandler).on(dt.CLICK_DATA_API + " " + dt.KEYUP_DATA_API, yt._clearMenus).on(dt.CLICK_DATA_API, mt, function (t)
	{
		t.preventDefault(), t.stopPropagation(), yt._jQueryInterface.call(g(this), "toggle")
	}).on(dt.CLICK_DATA_API, ".dropdown form", function (t)
	{
		t.stopPropagation()
	}), g.fn[rt] = yt._jQueryInterface, g.fn[rt].Constructor = yt, g.fn[rt].noConflict = function ()
	{
		return g.fn[rt] = ht, yt._jQueryInterface
	};
	var Tt, St = "modal",
		bt = "bs.modal",
		It = "." + bt,
		Dt = g.fn[St],
		wt = {
			backdrop: !0,
			keyboard: !0,
			focus: !0,
			show: !0
		},
		At = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			focus: "boolean",
			show: "boolean"
		},
		Nt = {
			HIDE: "hide" + It,
			HIDDEN: "hidden" + It,
			SHOW: "show" + It,
			SHOWN: "shown" + It,
			FOCUSIN: "focusin" + It,
			RESIZE: "resize" + It,
			CLICK_DISMISS: "click.dismiss" + It,
			KEYDOWN_DISMISS: "keydown.dismiss" + It,
			MOUSEUP_DISMISS: "mouseup.dismiss" + It,
			MOUSEDOWN_DISMISS: "mousedown.dismiss" + It,
			CLICK_DATA_API: "click" + It + ".data-api"
		},
		Ot = "modal-open",
		kt = "fade",
		Pt = "show",
		Lt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
		jt = ".sticky-top",
		Ht = ((Tt = Rt.prototype).toggle = function (t)
		{
			return this._isShown ? this.hide() : this.show(t)
		}, Tt.show = function (t)
		{
			var e, n = this;
			this._isShown || this._isTransitioning || (g(this._element).hasClass(kt) && (this._isTransitioning = !0), e = g.Event(Nt.SHOW,
			{
				relatedTarget: t
			}), g(this._element).trigger(e), this._isShown || e.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(Nt.CLICK_DISMISS, '[data-dismiss="modal"]', function (t)
			{
				return n.hide(t)
			}), g(this._dialog).on(Nt.MOUSEDOWN_DISMISS, function ()
			{
				g(n._element).one(Nt.MOUSEUP_DISMISS, function (t)
				{
					g(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
				})
			}), this._showBackdrop(function ()
			{
				return n._showElement(t)
			})))
		}, Tt.hide = function (t)
		{
			var e, n, i, o = this;
			t && t.preventDefault(), this._isShown && !this._isTransitioning && (e = g.Event(Nt.HIDE), g(this._element).trigger(e), this._isShown && !e.isDefaultPrevented() && (this._isShown = !1, (n = g(this._element).hasClass(kt)) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(Nt.FOCUSIN), g(this._element).removeClass(Pt), g(this._element).off(Nt.CLICK_DISMISS), g(this._dialog).off(Nt.MOUSEDOWN_DISMISS), n ? (i = _.getTransitionDurationFromElement(this._element), g(this._element).one(_.TRANSITION_END, function (t)
			{
				return o._hideModal(t)
			}).emulateTransitionEnd(i)) : this._hideModal()))
		}, Tt.dispose = function ()
		{
			[window, this._element, this._dialog].forEach(function (t)
			{
				return g(t).off(It)
			}), g(document).off(Nt.FOCUSIN), g.removeData(this._element, bt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
		}, Tt.handleUpdate = function ()
		{
			this._adjustDialog()
		}, Tt._getConfig = function (t)
		{
			return t = r(
			{}, wt, t), _.typeCheckConfig(St, t, At), t
		}, Tt._showElement = function (t)
		{
			var e = this,
				n = g(this._element).hasClass(kt);

			function i()
			{
				e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(s)
			}
			this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(Pt), this._config.focus && this._enforceFocus();
			var o, s = g.Event(Nt.SHOWN,
			{
				relatedTarget: t
			});
			n ? (o = _.getTransitionDurationFromElement(this._dialog), g(this._dialog).one(_.TRANSITION_END, i).emulateTransitionEnd(o)) : i()
		}, Tt._enforceFocus = function ()
		{
			var e = this;
			g(document).off(Nt.FOCUSIN).on(Nt.FOCUSIN, function (t)
			{
				document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
			})
		}, Tt._setEscapeEvent = function ()
		{
			var e = this;
			this._isShown && this._config.keyboard ? g(this._element).on(Nt.KEYDOWN_DISMISS, function (t)
			{
				27 === t.which && (t.preventDefault(), e.hide())
			}) : this._isShown || g(this._element).off(Nt.KEYDOWN_DISMISS)
		}, Tt._setResizeEvent = function ()
		{
			var e = this;
			this._isShown ? g(window).on(Nt.RESIZE, function (t)
			{
				return e.handleUpdate(t)
			}) : g(window).off(Nt.RESIZE)
		}, Tt._hideModal = function ()
		{
			var t = this;
			this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function ()
			{
				g(document.body).removeClass(Ot), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(Nt.HIDDEN)
			})
		}, Tt._removeBackdrop = function ()
		{
			this._backdrop && (g(this._backdrop).remove(), this._backdrop = null)
		}, Tt._showBackdrop = function (t)
		{
			var e, n, i = this,
				o = g(this._element).hasClass(kt) ? kt : "";
			if (this._isShown && this._config.backdrop)
			{
				if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", o && this._backdrop.classList.add(o), g(this._backdrop).appendTo(document.body), g(this._element).on(Nt.CLICK_DISMISS, function (t)
					{
						i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
					}), o && _.reflow(this._backdrop), g(this._backdrop).addClass(Pt), !t) return;
				if (!o) return void t();
				var s = _.getTransitionDurationFromElement(this._backdrop);
				g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(s)
			}
			else !this._isShown && this._backdrop ? (g(this._backdrop).removeClass(Pt), e = function ()
			{
				i._removeBackdrop(), t && t()
			}, g(this._element).hasClass(kt) ? (n = _.getTransitionDurationFromElement(this._backdrop), g(this._backdrop).one(_.TRANSITION_END, e).emulateTransitionEnd(n)) : e()) : t && t()
		}, Tt._adjustDialog = function ()
		{
			var t = this._element.scrollHeight > document.documentElement.clientHeight;
			!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
		}, Tt._resetAdjustments = function ()
		{
			this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
		}, Tt._checkScrollbar = function ()
		{
			var t = document.body.getBoundingClientRect();
			this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
		}, Tt._setScrollbar = function ()
		{
			var t, e, n, i, o = this;
			this._isBodyOverflowing && (t = [].slice.call(document.querySelectorAll(Lt)), e = [].slice.call(document.querySelectorAll(jt)), g(t).each(function (t, e)
			{
				var n = e.style.paddingRight,
					i = g(e).css("padding-right");
				g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
			}), g(e).each(function (t, e)
			{
				var n = e.style.marginRight,
					i = g(e).css("margin-right");
				g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
			}), n = document.body.style.paddingRight, i = g(document.body).css("padding-right"), g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")), g(document.body).addClass(Ot)
		}, Tt._resetScrollbar = function ()
		{
			var t = [].slice.call(document.querySelectorAll(Lt));
			g(t).each(function (t, e)
			{
				var n = g(e).data("padding-right");
				g(e).removeData("padding-right"), e.style.paddingRight = n || ""
			});
			var e = [].slice.call(document.querySelectorAll(jt));
			g(e).each(function (t, e)
			{
				var n = g(e).data("margin-right");
				void 0 !== n && g(e).css("margin-right", n).removeData("margin-right")
			});
			var n = g(document.body).data("padding-right");
			g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
		}, Tt._getScrollbarWidth = function ()
		{
			var t = document.createElement("div");
			t.className = "modal-scrollbar-measure", document.body.appendChild(t);
			var e = t.getBoundingClientRect().width - t.clientWidth;
			return document.body.removeChild(t), e
		}, Rt._jQueryInterface = function (n, i)
		{
			return this.each(function ()
			{
				var t = g(this).data(bt),
					e = r(
					{}, wt, g(this).data(), "object" == typeof n && n ? n :
					{});
				if (t || (t = new Rt(this, e), g(this).data(bt, t)), "string" == typeof n)
				{
					if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
					t[n](i)
				}
				else e.show && t.show(i)
			})
		}, s(Rt, null, [
		{
			key: "VERSION",
			get: function ()
			{
				return "4.3.1"
			}
		},
		{
			key: "Default",
			get: function ()
			{
				return wt
			}
		}]), Rt);

	function Rt(t, e)
	{
		this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
	}
	g(document).on(Nt.CLICK_DATA_API, '[data-toggle="modal"]', function (t)
	{
		var e, n = this,
			i = _.getSelectorFromElement(this);
		i && (e = document.querySelector(i));
		var o = g(e).data(bt) ? "toggle" : r(
		{}, g(e).data(), g(this).data());
		"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
		var s = g(e).one(Nt.SHOW, function (t)
		{
			t.isDefaultPrevented() || s.one(Nt.HIDDEN, function ()
			{
				g(n).is(":visible") && n.focus()
			})
		});
		Ht._jQueryInterface.call(g(e), o, this)
	}), g.fn[St] = Ht._jQueryInterface, g.fn[St].Constructor = Ht, g.fn[St].noConflict = function ()
	{
		return g.fn[St] = Dt, Ht._jQueryInterface
	};
	var xt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
		Ft = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
		Ut = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

	function Wt(t, r, e)
	{
		if (0 === t.length) return t;
		if (e && "function" == typeof e) return e(t);
		for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(r), l = [].slice.call(n.body.querySelectorAll("*")), i = function (t, e)
			{
				var n = l[t],
					i = n.nodeName.toLowerCase();
				if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
				var o = [].slice.call(n.attributes),
					s = [].concat(r["*"] || [], r[i] || []);
				o.forEach(function (t)
				{
					! function (t, e)
					{
						var n = t.nodeName.toLowerCase();
						if (-1 !== e.indexOf(n)) return -1 === xt.indexOf(n) || Boolean(t.nodeValue.match(Ft) || t.nodeValue.match(Ut));
						for (var i = e.filter(function (t)
							{
								return t instanceof RegExp
							}), o = 0, s = i.length; o < s; o++)
							if (n.match(i[o])) return 1
					}(t, s) && n.removeAttribute(t.nodeName)
				})
			}, o = 0, s = l.length; o < s; o++) i(o);
		return n.body.innerHTML
	}
	var qt, Mt = "tooltip",
		Kt = "bs.tooltip",
		Qt = "." + Kt,
		Bt = g.fn[Mt],
		Vt = "bs-tooltip",
		Yt = new RegExp("(^|\\s)" + Vt + "\\S+", "g"),
		zt = ["sanitize", "whiteList", "sanitizeFn"],
		Xt = {
			animation: "boolean",
			template: "string",
			title: "(string|element|function)",
			trigger: "string",
			delay: "(number|object)",
			html: "boolean",
			selector: "(string|boolean)",
			placement: "(string|function)",
			offset: "(number|string|function)",
			container: "(string|element|boolean)",
			fallbackPlacement: "(string|array)",
			boundary: "(string|element)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			whiteList: "object"
		},
		$t = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: "right",
			BOTTOM: "bottom",
			LEFT: "left"
		},
		Gt = {
			animation: !0,
			template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			selector: !1,
			placement: "top",
			offset: 0,
			container: !1,
			fallbackPlacement: "flip",
			boundary: "scrollParent",
			sanitize: !0,
			sanitizeFn: null,
			whiteList:
			{
				"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
				a: ["target", "href", "title", "rel"],
				area: [],
				b: [],
				br: [],
				col: [],
				code: [],
				div: [],
				em: [],
				hr: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				i: [],
				img: ["src", "alt", "title", "width", "height"],
				li: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				u: [],
				ul: []
			}
		},
		Jt = "show",
		Zt = {
			HIDE: "hide" + Qt,
			HIDDEN: "hidden" + Qt,
			SHOW: "show" + Qt,
			SHOWN: "shown" + Qt,
			INSERTED: "inserted" + Qt,
			CLICK: "click" + Qt,
			FOCUSIN: "focusin" + Qt,
			FOCUSOUT: "focusout" + Qt,
			MOUSEENTER: "mouseenter" + Qt,
			MOUSELEAVE: "mouseleave" + Qt
		},
		te = "fade",
		ee = "show",
		ne = "hover",
		ie = "focus",
		oe = ((qt = se.prototype).enable = function ()
		{
			this._isEnabled = !0
		}, qt.disable = function ()
		{
			this._isEnabled = !1
		}, qt.toggleEnabled = function ()
		{
			this._isEnabled = !this._isEnabled
		}, qt.toggle = function (t)
		{
			if (this._isEnabled)
				if (t)
				{
					var e = this.constructor.DATA_KEY,
						n = g(t.currentTarget).data(e);
					n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
				}
			else
			{
				if (g(this.getTipElement()).hasClass(ee)) return void this._leave(null, this);
				this._enter(null, this)
			}
		}, qt.dispose = function ()
		{
			clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
		}, qt.show = function ()
		{
			var e = this;
			if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
			var t = g.Event(this.constructor.Event.SHOW);
			if (this.isWithContent() && this._isEnabled)
			{
				g(this.element).trigger(t);
				var n = _.findShadowRoot(this.element),
					i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
				if (t.isDefaultPrevented() || !i) return;
				var o = this.getTipElement(),
					s = _.getUID(this.constructor.NAME);
				o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && g(o).addClass(te);
				var r = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
					a = this._getAttachment(r);
				this.addAttachmentClass(a);
				var l = this._getContainer();
				g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o,
				{
					placement: a,
					modifiers:
					{
						offset: this._getOffset(),
						flip:
						{
							behavior: this.config.fallbackPlacement
						},
						arrow:
						{
							element: ".arrow"
						},
						preventOverflow:
						{
							boundariesElement: this.config.boundary
						}
					},
					onCreate: function (t)
					{
						t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
					},
					onUpdate: function (t)
					{
						return e._handlePopperPlacementChange(t)
					}
				}), g(o).addClass(ee), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
				var c, h = function ()
				{
					e.config.animation && e._fixTransition();
					var t = e._hoverState;
					e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
				};
				g(this.tip).hasClass(te) ? (c = _.getTransitionDurationFromElement(this.tip), g(this.tip).one(_.TRANSITION_END, h).emulateTransitionEnd(c)) : h()
			}
		}, qt.hide = function (t)
		{
			function e()
			{
				i._hoverState !== Jt && o.parentNode && o.parentNode.removeChild(o), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), g(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
			}
			var n, i = this,
				o = this.getTipElement(),
				s = g.Event(this.constructor.Event.HIDE);
			g(this.element).trigger(s), s.isDefaultPrevented() || (g(o).removeClass(ee), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger.click = !1, this._activeTrigger[ie] = !1, this._activeTrigger[ne] = !1, g(this.tip).hasClass(te) ? (n = _.getTransitionDurationFromElement(o), g(o).one(_.TRANSITION_END, e).emulateTransitionEnd(n)) : e(), this._hoverState = "")
		}, qt.update = function ()
		{
			null !== this._popper && this._popper.scheduleUpdate()
		}, qt.isWithContent = function ()
		{
			return Boolean(this.getTitle())
		}, qt.addAttachmentClass = function (t)
		{
			g(this.getTipElement()).addClass(Vt + "-" + t)
		}, qt.getTipElement = function ()
		{
			return this.tip = this.tip || g(this.config.template)[0], this.tip
		}, qt.setContent = function ()
		{
			var t = this.getTipElement();
			this.setElementContent(g(t.querySelectorAll(".tooltip-inner")), this.getTitle()), g(t).removeClass(te + " " + ee)
		}, qt.setElementContent = function (t, e)
		{
			"object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Wt(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
		}, qt.getTitle = function ()
		{
			return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
		}, qt._getOffset = function ()
		{
			var e = this,
				t = {};
			return "function" == typeof this.config.offset ? t.fn = function (t)
			{
				return t.offsets = r(
				{}, t.offsets, e.config.offset(t.offsets, e.element) ||
				{}), t
			} : t.offset = this.config.offset, t
		}, qt._getContainer = function ()
		{
			return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
		}, qt._getAttachment = function (t)
		{
			return $t[t.toUpperCase()]
		}, qt._setListeners = function ()
		{
			var i = this;
			this.config.trigger.split(" ").forEach(function (t)
			{
				var e, n;
				"click" === t ? g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t)
				{
					return i.toggle(t)
				}) : "manual" !== t && (e = t === ne ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = t === ne ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT, g(i.element).on(e, i.config.selector, function (t)
				{
					return i._enter(t)
				}).on(n, i.config.selector, function (t)
				{
					return i._leave(t)
				}))
			}), g(this.element).closest(".modal").on("hide.bs.modal", function ()
			{
				i.element && i.hide()
			}), this.config.selector ? this.config = r(
			{}, this.config,
			{
				trigger: "manual",
				selector: ""
			}) : this._fixTitle()
		}, qt._fixTitle = function ()
		{
			var t = typeof this.element.getAttribute("data-original-title");
			!this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
		}, qt._enter = function (t, e)
		{
			var n = this.constructor.DATA_KEY;
			(e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? ie : ne] = !0), g(e.getTipElement()).hasClass(ee) || e._hoverState === Jt ? e._hoverState = Jt : (clearTimeout(e._timeout), e._hoverState = Jt, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function ()
			{
				e._hoverState === Jt && e.show()
			}, e.config.delay.show) : e.show())
		}, qt._leave = function (t, e)
		{
			var n = this.constructor.DATA_KEY;
			(e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? ie : ne] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function ()
			{
				"out" === e._hoverState && e.hide()
			}, e.config.delay.hide) : e.hide())
		}, qt._isWithActiveTrigger = function ()
		{
			for (var t in this._activeTrigger)
				if (this._activeTrigger[t]) return !0;
			return !1
		}, qt._getConfig = function (t)
		{
			var e = g(this.element).data();
			return Object.keys(e).forEach(function (t)
			{
				-1 !== zt.indexOf(t) && delete e[t]
			}), "number" == typeof (t = r(
			{}, this.constructor.Default, e, "object" == typeof t && t ? t :
			{})).delay && (t.delay = {
				show: t.delay,
				hide: t.delay
			}), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(Mt, t, this.constructor.DefaultType), t.sanitize && (t.template = Wt(t.template, t.whiteList, t.sanitizeFn)), t
		}, qt._getDelegateConfig = function ()
		{
			var t = {};
			if (this.config)
				for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
			return t
		}, qt._cleanTipClass = function ()
		{
			var t = g(this.getTipElement()),
				e = t.attr("class").match(Yt);
			null !== e && e.length && t.removeClass(e.join(""))
		}, qt._handlePopperPlacementChange = function (t)
		{
			var e = t.instance;
			this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
		}, qt._fixTransition = function ()
		{
			var t = this.getTipElement(),
				e = this.config.animation;
			null === t.getAttribute("x-placement") && (g(t).removeClass(te), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
		}, se._jQueryInterface = function (n)
		{
			return this.each(function ()
			{
				var t = g(this).data(Kt),
					e = "object" == typeof n && n;
				if ((t || !/dispose|hide/.test(n)) && (t || (t = new se(this, e), g(this).data(Kt, t)), "string" == typeof n))
				{
					if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
					t[n]()
				}
			})
		}, s(se, null, [
		{
			key: "VERSION",
			get: function ()
			{
				return "4.3.1"
			}
		},
		{
			key: "Default",
			get: function ()
			{
				return Gt
			}
		},
		{
			key: "NAME",
			get: function ()
			{
				return Mt
			}
		},
		{
			key: "DATA_KEY",
			get: function ()
			{
				return Kt
			}
		},
		{
			key: "Event",
			get: function ()
			{
				return Zt
			}
		},
		{
			key: "EVENT_KEY",
			get: function ()
			{
				return Qt
			}
		},
		{
			key: "DefaultType",
			get: function ()
			{
				return Xt
			}
		}]), se);

	function se(t, e)
	{
		if (void 0 === u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
		this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
	}
	g.fn[Mt] = oe._jQueryInterface, g.fn[Mt].Constructor = oe, g.fn[Mt].noConflict = function ()
	{
		return g.fn[Mt] = Bt, oe._jQueryInterface
	};
	var re = "popover",
		ae = "bs.popover",
		le = "." + ae,
		ce = g.fn[re],
		he = "bs-popover",
		ue = new RegExp("(^|\\s)" + he + "\\S+", "g"),
		de = r(
		{}, oe.Default,
		{
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		}),
		fe = r(
		{}, oe.DefaultType,
		{
			content: "(string|element|function)"
		}),
		ge = {
			HIDE: "hide" + le,
			HIDDEN: "hidden" + le,
			SHOW: "show" + le,
			SHOWN: "shown" + le,
			INSERTED: "inserted" + le,
			CLICK: "click" + le,
			FOCUSIN: "focusin" + le,
			FOCUSOUT: "focusout" + le,
			MOUSEENTER: "mouseenter" + le,
			MOUSELEAVE: "mouseleave" + le
		},
		_e = function (t)
		{
			var e, n;

			function i()
			{
				return t.apply(this, arguments) || this
			}
			n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
			var o = i.prototype;
			return o.isWithContent = function ()
			{
				return this.getTitle() || this._getContent()
			}, o.addAttachmentClass = function (t)
			{
				g(this.getTipElement()).addClass(he + "-" + t)
			}, o.getTipElement = function ()
			{
				return this.tip = this.tip || g(this.config.template)[0], this.tip
			}, o.setContent = function ()
			{
				var t = g(this.getTipElement());
				this.setElementContent(t.find(".popover-header"), this.getTitle());
				var e = this._getContent();
				"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
			}, o._getContent = function ()
			{
				return this.element.getAttribute("data-content") || this.config.content
			}, o._cleanTipClass = function ()
			{
				var t = g(this.getTipElement()),
					e = t.attr("class").match(ue);
				null !== e && 0 < e.length && t.removeClass(e.join(""))
			}, i._jQueryInterface = function (n)
			{
				return this.each(function ()
				{
					var t = g(this).data(ae),
						e = "object" == typeof n ? n : null;
					if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(ae, t)), "string" == typeof n))
					{
						if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
						t[n]()
					}
				})
			}, s(i, null, [
			{
				key: "VERSION",
				get: function ()
				{
					return "4.3.1"
				}
			},
			{
				key: "Default",
				get: function ()
				{
					return de
				}
			},
			{
				key: "NAME",
				get: function ()
				{
					return re
				}
			},
			{
				key: "DATA_KEY",
				get: function ()
				{
					return ae
				}
			},
			{
				key: "Event",
				get: function ()
				{
					return ge
				}
			},
			{
				key: "EVENT_KEY",
				get: function ()
				{
					return le
				}
			},
			{
				key: "DefaultType",
				get: function ()
				{
					return fe
				}
			}]), i
		}(oe);
	g.fn[re] = _e._jQueryInterface, g.fn[re].Constructor = _e, g.fn[re].noConflict = function ()
	{
		return g.fn[re] = ce, _e._jQueryInterface
	};
	var me, pe = "scrollspy",
		ve = "bs.scrollspy",
		Ee = "." + ve,
		ye = g.fn[pe],
		Ce = {
			offset: 10,
			method: "auto",
			target: ""
		},
		Te = {
			offset: "number",
			method: "string",
			target: "(string|element)"
		},
		Se = {
			ACTIVATE: "activate" + Ee,
			SCROLL: "scroll" + Ee,
			LOAD_DATA_API: "load" + Ee + ".data-api"
		},
		be = "active",
		Ie = ".nav, .list-group",
		De = ".nav-link",
		we = ".list-group-item",
		Ae = "position",
		Ne = ((me = Oe.prototype).refresh = function ()
		{
			var e = this,
				t = this._scrollElement === this._scrollElement.window ? "offset" : Ae,
				o = "auto" === this._config.method ? t : this._config.method,
				s = o === Ae ? this._getScrollTop() : 0;
			this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t)
			{
				var e, n = _.getSelectorFromElement(t);
				if (n && (e = document.querySelector(n)), e)
				{
					var i = e.getBoundingClientRect();
					if (i.width || i.height) return [g(e)[o]().top + s, n]
				}
				return null
			}).filter(function (t)
			{
				return t
			}).sort(function (t, e)
			{
				return t[0] - e[0]
			}).forEach(function (t)
			{
				e._offsets.push(t[0]), e._targets.push(t[1])
			})
		}, me.dispose = function ()
		{
			g.removeData(this._element, ve), g(this._scrollElement).off(Ee), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
		}, me._getConfig = function (t)
		{
			var e;
			return "string" != typeof (t = r(
			{}, Ce, "object" == typeof t && t ? t :
			{})).target && ((e = g(t.target).attr("id")) || (e = _.getUID(pe), g(t.target).attr("id", e)), t.target = "#" + e), _.typeCheckConfig(pe, t, Te), t
		}, me._getScrollTop = function ()
		{
			return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
		}, me._getScrollHeight = function ()
		{
			return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
		}, me._getOffsetHeight = function ()
		{
			return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
		}, me._process = function ()
		{
			var t = this._getScrollTop() + this._config.offset,
				e = this._getScrollHeight(),
				n = this._config.offset + e - this._getOffsetHeight();
			if (this._scrollHeight !== e && this.refresh(), n <= t)
			{
				var i = this._targets[this._targets.length - 1];
				this._activeTarget !== i && this._activate(i)
			}
			else
			{
				if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
				for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
			}
		}, me._activate = function (e)
		{
			this._activeTarget = e, this._clear();
			var t = this._selector.split(",").map(function (t)
				{
					return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
				}),
				n = g([].slice.call(document.querySelectorAll(t.join(","))));
			n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(be), n.addClass(be)) : (n.addClass(be), n.parents(Ie).prev(De + ", " + we).addClass(be), n.parents(Ie).prev(".nav-item").children(De).addClass(be)), g(this._scrollElement).trigger(Se.ACTIVATE,
			{
				relatedTarget: e
			})
		}, me._clear = function ()
		{
			[].slice.call(document.querySelectorAll(this._selector)).filter(function (t)
			{
				return t.classList.contains(be)
			}).forEach(function (t)
			{
				return t.classList.remove(be)
			})
		}, Oe._jQueryInterface = function (e)
		{
			return this.each(function ()
			{
				var t = g(this).data(ve);
				if (t || (t = new Oe(this, "object" == typeof e && e), g(this).data(ve, t)), "string" == typeof e)
				{
					if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
					t[e]()
				}
			})
		}, s(Oe, null, [
		{
			key: "VERSION",
			get: function ()
			{
				return "4.3.1"
			}
		},
		{
			key: "Default",
			get: function ()
			{
				return Ce
			}
		}]), Oe);

	function Oe(t, e)
	{
		var n = this;
		this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + De + "," + this._config.target + " " + we + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(Se.SCROLL, function (t)
		{
			return n._process(t)
		}), this.refresh(), this._process()
	}
	g(window).on(Se.LOAD_DATA_API, function ()
	{
		for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;)
		{
			var n = g(t[e]);
			Ne._jQueryInterface.call(n, n.data())
		}
	}), g.fn[pe] = Ne._jQueryInterface, g.fn[pe].Constructor = Ne, g.fn[pe].noConflict = function ()
	{
		return g.fn[pe] = ye, Ne._jQueryInterface
	};
	var ke, Pe = "bs.tab",
		Le = "." + Pe,
		je = g.fn.tab,
		He = {
			HIDE: "hide" + Le,
			HIDDEN: "hidden" + Le,
			SHOW: "show" + Le,
			SHOWN: "shown" + Le,
			CLICK_DATA_API: "click" + Le + ".data-api"
		},
		Re = "active",
		xe = ".active",
		Fe = "> li > .active",
		Ue = ((ke = We.prototype).show = function ()
		{
			var t, e, n, i, o, s, r, a, l = this;
			this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Re) || g(this._element).hasClass("disabled") || (e = g(this._element).closest(".nav, .list-group")[0], n = _.getSelectorFromElement(this._element), e && (i = "UL" === e.nodeName || "OL" === e.nodeName ? Fe : xe, o = (o = g.makeArray(g(e).find(i)))[o.length - 1]), s = g.Event(He.HIDE,
			{
				relatedTarget: this._element
			}), r = g.Event(He.SHOW,
			{
				relatedTarget: o
			}), o && g(o).trigger(s), g(this._element).trigger(r), r.isDefaultPrevented() || s.isDefaultPrevented() || (n && (t = document.querySelector(n)), this._activate(this._element, e), a = function ()
			{
				var t = g.Event(He.HIDDEN,
					{
						relatedTarget: l._element
					}),
					e = g.Event(He.SHOWN,
					{
						relatedTarget: o
					});
				g(o).trigger(t), g(l._element).trigger(e)
			}, t ? this._activate(t, t.parentNode, a) : a()))
		}, ke.dispose = function ()
		{
			g.removeData(this._element, Pe), this._element = null
		}, ke._activate = function (t, e, n)
		{
			function i()
			{
				return s._transitionComplete(t, r, n)
			}
			var o, s = this,
				r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(xe) : g(e).find(Fe))[0],
				a = n && r && g(r).hasClass("fade");
			r && a ? (o = _.getTransitionDurationFromElement(r), g(r).removeClass("show").one(_.TRANSITION_END, i).emulateTransitionEnd(o)) : i()
		}, ke._transitionComplete = function (t, e, n)
		{
			var i, o, s;
			e && (g(e).removeClass(Re), (i = g(e.parentNode).find("> .dropdown-menu .active")[0]) && g(i).removeClass(Re), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)), g(t).addClass(Re), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && g(t.parentNode).hasClass("dropdown-menu") && ((o = g(t).closest(".dropdown")[0]) && (s = [].slice.call(o.querySelectorAll(".dropdown-toggle")), g(s).addClass(Re)), t.setAttribute("aria-expanded", !0)), n && n()
		}, We._jQueryInterface = function (n)
		{
			return this.each(function ()
			{
				var t = g(this),
					e = t.data(Pe);
				if (e || (e = new We(this), t.data(Pe, e)), "string" == typeof n)
				{
					if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
					e[n]()
				}
			})
		}, s(We, null, [
		{
			key: "VERSION",
			get: function ()
			{
				return "4.3.1"
			}
		}]), We);

	function We(t)
	{
		this._element = t
	}
	g(document).on(He.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t)
	{
		t.preventDefault(), Ue._jQueryInterface.call(g(this), "show")
	}), g.fn.tab = Ue._jQueryInterface, g.fn.tab.Constructor = Ue, g.fn.tab.noConflict = function ()
	{
		return g.fn.tab = je, Ue._jQueryInterface
	};
	var qe, Me = "toast",
		Ke = "bs.toast",
		Qe = "." + Ke,
		Be = g.fn[Me],
		Ve = {
			CLICK_DISMISS: "click.dismiss" + Qe,
			HIDE: "hide" + Qe,
			HIDDEN: "hidden" + Qe,
			SHOW: "show" + Qe,
			SHOWN: "shown" + Qe
		},
		Ye = "show",
		ze = "showing",
		Xe = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		},
		$e = {
			animation: !0,
			autohide: !0,
			delay: 500
		},
		Ge = ((qe = Je.prototype).show = function ()
		{
			var t, e = this;

			function n()
			{
				e._element.classList.remove(ze), e._element.classList.add(Ye), g(e._element).trigger(Ve.SHOWN), e._config.autohide && e.hide()
			}
			g(this._element).trigger(Ve.SHOW), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), this._element.classList.add(ze), this._config.animation ? (t = _.getTransitionDurationFromElement(this._element), g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(t)) : n()
		}, qe.hide = function (t)
		{
			var e = this;
			this._element.classList.contains(Ye) && (g(this._element).trigger(Ve.HIDE), t ? this._close() : this._timeout = setTimeout(function ()
			{
				e._close()
			}, this._config.delay))
		}, qe.dispose = function ()
		{
			clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Ye) && this._element.classList.remove(Ye), g(this._element).off(Ve.CLICK_DISMISS), g.removeData(this._element, Ke), this._element = null, this._config = null
		}, qe._getConfig = function (t)
		{
			return t = r(
			{}, $e, g(this._element).data(), "object" == typeof t && t ? t :
			{}), _.typeCheckConfig(Me, t, this.constructor.DefaultType), t
		}, qe._setListeners = function ()
		{
			var t = this;
			g(this._element).on(Ve.CLICK_DISMISS, '[data-dismiss="toast"]', function ()
			{
				return t.hide(!0)
			})
		}, qe._close = function ()
		{
			function t()
			{
				n._element.classList.add("hide"), g(n._element).trigger(Ve.HIDDEN)
			}
			var e, n = this;
			this._element.classList.remove(Ye), this._config.animation ? (e = _.getTransitionDurationFromElement(this._element), g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(e)) : t()
		}, Je._jQueryInterface = function (n)
		{
			return this.each(function ()
			{
				var t = g(this),
					e = t.data(Ke);
				if (e || (e = new Je(this, "object" == typeof n && n), t.data(Ke, e)), "string" == typeof n)
				{
					if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
					e[n](this)
				}
			})
		}, s(Je, null, [
		{
			key: "VERSION",
			get: function ()
			{
				return "4.3.1"
			}
		},
		{
			key: "DefaultType",
			get: function ()
			{
				return Xe
			}
		},
		{
			key: "Default",
			get: function ()
			{
				return $e
			}
		}]), Je);

	function Je(t, e)
	{
		this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
	}
	g.fn[Me] = Ge._jQueryInterface, g.fn[Me].Constructor = Ge, g.fn[Me].noConflict = function ()
		{
			return g.fn[Me] = Be, Ge._jQueryInterface
		},
		function ()
		{
			if (void 0 === g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
			var t = g.fn.jquery.split(" ")[0].split(".");
			if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
		}(), t.Util = _, t.Alert = d, t.Button = D, t.Carousel = M, t.Collapse = it, t.Dropdown = yt, t.Modal = Ht, t.Popover = _e, t.Scrollspy = Ne, t.Tab = Ue, t.Toast = Ge, t.Tooltip = oe, Object.defineProperty(t, "__esModule",
		{
			value: !0
		})
});
! function (t, e, o)
{
	"use strict";

	function r(t, s)
	{
		var e = this;
		this.el = t, this.options = {}, Object.keys(i).forEach(function (t)
		{
			e.options[t] = i[t]
		}), Object.keys(s).forEach(function (t)
		{
			e.options[t] = s[t]
		}), this.isInput = "input" === this.el.tagName.toLowerCase(), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.getAttribute(this.attr) : this.el.textContent, this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.fadeOut = this.options.fadeOut, this.fadeOutClass = this.options.fadeOutClass, this.fadeOutDelay = this.options.fadeOutDelay, o && this.options.stringsElement instanceof o ? this.stringsElement = this.options.stringsElement[0] : this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
	}
	r.prototype = {
		constructor: r,
		init: function ()
		{
			var s = this;
			s.timeout = setTimeout(function ()
			{
				for (var t = 0; t < s.strings.length; ++t) s.sequence[t] = t;
				s.shuffle && (s.sequence = s.shuffleArray(s.sequence)), s.typewrite(s.strings[s.sequence[s.arrayPos]], s.strPos)
			}, s.startDelay)
		},
		build: function ()
		{
			var s = this;
			!0 === this.showCursor && (this.cursor = e.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)), this.stringsElement && (this.strings = [], this.stringsElement.style.display = "none", Array.prototype.slice.apply(this.stringsElement.children).forEach(function (t)
			{
				s.strings.push(t.innerHTML)
			})), this.init()
		},
		typewrite: function (r, n)
		{
			var t, a;
			!0 !== this.stop && (this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor.classList.remove(this.fadeOutClass)), t = Math.round(70 * Math.random()) + this.typeSpeed, (a = this).timeout = setTimeout(function ()
			{
				var t, s = 0,
					e = r.substr(n);
				if ("^" === e.charAt(0) && (t = 1, /^\^\d+/.test(e) && (t += (e = /\d+/.exec(e)[0]).length, s = parseInt(e)), r = r.substring(0, n) + r.substring(n + t)), "html" === a.contentType)
				{
					var i = r.substr(n).charAt(0);
					if ("<" === i || "&" === i)
					{
						for (var o = "", o = "<" === i ? ">" : ";"; r.substr(n + 1).charAt(0) !== o && (r.substr(n).charAt(0), !(++n + 1 > r.length)););
						n++, 0
					}
				}
				a.timeout = setTimeout(function ()
				{
					if (n === r.length)
					{
						if (a.options.onStringTyped(a.arrayPos), a.arrayPos === a.strings.length - 1 && (a.options.callback(), a.curLoop++, !1 === a.loop || a.curLoop === a.loopCount)) return;
						a.timeout = setTimeout(function ()
						{
							a.backspace(r, n)
						}, a.backDelay)
					}
					else
					{
						0 === n && a.options.preStringTyped(a.arrayPos);
						var t = r.substr(0, n + 1);
						a.attr ? a.el.setAttribute(a.attr, t) : a.isInput ? a.el.value = t : "html" === a.contentType ? a.el.innerHTML = t : a.el.textContent = t, n++, a.typewrite(r, n)
					}
				}, s)
			}, t))
		},
		backspace: function (s, e)
		{
			var t, i = this;
			!0 !== this.stop && (this.fadeOut ? this.initFadeOut() : (t = Math.round(70 * Math.random()) + this.backSpeed, i.timeout = setTimeout(function ()
			{
				if ("html" === i.contentType && ">" === s.substr(e).charAt(0))
				{
					for (;
						"<" !== s.substr(e - 1).charAt(0) && (s.substr(e).charAt(0), !(--e < 0)););
					e--, 0
				}
				var t = s.substr(0, e);
				i.replaceText(t), e > i.stopNum ? (e--, i.backspace(s, e)) : e <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], e))
			}, t)))
		},
		initFadeOut: function ()
		{
			return (self = this).el.className += " " + this.fadeOutClass, this.cursor.className += " " + this.fadeOutClass, setTimeout(function ()
			{
				self.arrayPos++, self.replaceText(""), self.typewrite(self.strings[self.sequence[self.arrayPos]], 0)
			}, self.fadeOutDelay)
		},
		replaceText: function (t)
		{
			this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
		},
		shuffleArray: function (t)
		{
			var s, e, i = t.length;
			if (i)
				for (; --i;) s = t[e = Math.floor(Math.random() * (i + 1))], t[e] = t[i], t[i] = s;
			return t
		},
		reset: function ()
		{
			clearInterval(this.timeout);
			this.el.getAttribute("id");
			this.el.textContent = "", void 0 !== this.cursor && void 0 !== this.cursor.parentNode && this.cursor.parentNode.removeChild(this.cursor), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
		}
	}, r.new = function (t, i)
	{
		Array.prototype.slice.apply(e.querySelectorAll(t)).forEach(function (t)
		{
			var s = t._typed,
				e = "object" == typeof i && i;
			s && s.reset(), t._typed = s = new r(t, e), "string" == typeof i && s[i]()
		})
	}, o && (o.fn.typed = function (i)
	{
		return this.each(function ()
		{
			var t = o(this),
				s = t.data("typed"),
				e = "object" == typeof i && i;
			s && s.reset(), t.data("typed", s = new r(this, e)), "string" == typeof i && s[i]()
		})
	}), t.Typed = r;
	var i = {
		strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
		stringsElement: null,
		typeSpeed: 0,
		startDelay: 0,
		backSpeed: 0,
		shuffle: !1,
		backDelay: 500,
		fadeOut: !1,
		fadeOutClass: "typed-fade-out",
		fadeOutDelay: 500,
		loop: !1,
		loopCount: !1,
		showCursor: !0,
		cursorChar: "|",
		attr: null,
		contentType: "html",
		callback: function () {},
		preStringTyped: function () {},
		onStringTyped: function () {},
		resetCallback: function () {}
	}
}(window, document, window.jQuery);
! function (t)
{
	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (x)
{
	x.ui = x.ui ||
	{};
	x.ui.version = "1.12.1";
	var n, i = 0,
		r = Array.prototype.slice;
	x.cleanData = (n = x.cleanData, function (t)
	{
		for (var e, i, s = 0; null != (i = t[s]); s++) try
		{
			(e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove")
		}
		catch (t)
		{}
		n(t)
	}), x.widget = function (t, i, e)
	{
		var s, n, o, a = {},
			r = t.split(".")[0],
			h = r + "-" + (t = t.split(".")[1]);
		return e || (e = i, i = x.Widget), x.isArray(e) && (e = x.extend.apply(null, [
		{}].concat(e))), x.expr[":"][h.toLowerCase()] = function (t)
		{
			return !!x.data(t, h)
		}, x[r] = x[r] ||
		{}, s = x[r][t], n = x[r][t] = function (t, e)
		{
			if (!this._createWidget) return new n(t, e);
			arguments.length && this._createWidget(t, e)
		}, x.extend(n, s,
		{
			version: e.version,
			_proto: x.extend(
			{}, e),
			_childConstructors: []
		}), (o = new i).options = x.widget.extend(
		{}, o.options), x.each(e, function (e, s)
		{
			function n()
			{
				return i.prototype[e].apply(this, arguments)
			}

			function o(t)
			{
				return i.prototype[e].apply(this, t)
			}
			x.isFunction(s) ? a[e] = function ()
			{
				var t, e = this._super,
					i = this._superApply;
				return this._super = n, this._superApply = o, t = s.apply(this, arguments), this._super = e, this._superApply = i, t
			} : a[e] = s
		}), n.prototype = x.widget.extend(o,
		{
			widgetEventPrefix: s && o.widgetEventPrefix || t
		}, a,
		{
			constructor: n,
			namespace: r,
			widgetName: t,
			widgetFullName: h
		}), s ? (x.each(s._childConstructors, function (t, e)
		{
			var i = e.prototype;
			x.widget(i.namespace + "." + i.widgetName, n, e._proto)
		}), delete s._childConstructors) : i._childConstructors.push(n), x.widget.bridge(t, n), n
	}, x.widget.extend = function (t)
	{
		for (var e, i, s = r.call(arguments, 1), n = 0, o = s.length; n < o; n++)
			for (e in s[n]) i = s[n][e], s[n].hasOwnProperty(e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend(
			{}, t[e], i) : x.widget.extend(
			{}, i) : t[e] = i);
		return t
	}, x.widget.bridge = function (o, e)
	{
		var a = e.prototype.widgetFullName || o;
		x.fn[o] = function (i)
		{
			var t = "string" == typeof i,
				s = r.call(arguments, 1),
				n = this;
			return t ? this.length || "instance" !== i ? this.each(function ()
			{
				var t, e = x.data(this, a);
				return "instance" === i ? (n = e, !1) : e ? x.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, s)) !== e && void 0 !== t ? (n = t && t.jquery ? n.pushStack(t.get()) : t, !1) : void 0 : x.error("no such method '" + i + "' for " + o + " widget instance") : x.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'")
			}) : n = void 0 : (s.length && (i = x.widget.extend.apply(null, [i].concat(s))), this.each(function ()
			{
				var t = x.data(this, a);
				t ? (t.option(i ||
				{}), t._init && t._init()) : x.data(this, a, new e(i, this))
			})), n
		}
	}, x.Widget = function () {}, x.Widget._childConstructors = [], x.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options:
		{
			classes:
			{},
			disabled: !1,
			create: null
		},
		_createWidget: function (t, e)
		{
			e = x(e || this.defaultElement || this)[0], this.element = x(e), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = x(), this.hoverable = x(), this.focusable = x(), this.classesElementLookup = {}, e !== this && (x.data(e, this.widgetFullName, this), this._on(!0, this.element,
			{
				remove: function (t)
				{
					t.target === e && this.destroy()
				}
			}), this.document = x(e.style ? e.ownerDocument : e.document || e), this.window = x(this.document[0].defaultView || this.document[0].parentWindow)), this.options = x.widget.extend(
			{}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: function ()
		{
			return {}
		},
		_getCreateEventData: x.noop,
		_create: x.noop,
		_init: x.noop,
		destroy: function ()
		{
			var i = this;
			this._destroy(), x.each(this.classesElementLookup, function (t, e)
			{
				i._removeClass(e, t)
			}), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
		},
		_destroy: x.noop,
		widget: function ()
		{
			return this.element
		},
		option: function (t, e)
		{
			var i, s, n, o = t;
			if (0 === arguments.length) return x.widget.extend(
			{}, this.options);
			if ("string" == typeof t)
				if (o = {}, t = (i = t.split(".")).shift(), i.length)
				{
					for (s = o[t] = x.widget.extend(
						{}, this.options[t]), n = 0; n < i.length - 1; n++) s[i[n]] = s[i[n]] ||
					{}, s = s[i[n]];
					if (t = i.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
					s[t] = e
				}
			else
			{
				if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
				o[t] = e
			}
			return this._setOptions(o), this
		},
		_setOptions: function (t)
		{
			var e;
			for (e in t) this._setOption(e, t[e]);
			return this
		},
		_setOption: function (t, e)
		{
			return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
		},
		_setOptionClasses: function (t)
		{
			var e, i, s;
			for (e in t) s = this.classesElementLookup[e], t[e] !== this.options.classes[e] && s && s.length && (i = x(s.get()), this._removeClass(s, e), i.addClass(this._classes(
			{
				element: i,
				keys: e,
				classes: t,
				add: !0
			})))
		},
		_setOptionDisabled: function (t)
		{
			this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
		},
		enable: function ()
		{
			return this._setOptions(
			{
				disabled: !1
			})
		},
		disable: function ()
		{
			return this._setOptions(
			{
				disabled: !0
			})
		},
		_classes: function (n)
		{
			var o = [],
				a = this;

			function t(t, e)
			{
				for (var i, s = 0; s < t.length; s++) i = a.classesElementLookup[t[s]] || x(), i = n.add ? x(x.unique(i.get().concat(n.element.get()))) : x(i.not(n.element).get()), a.classesElementLookup[t[s]] = i, o.push(t[s]), e && n.classes[t[s]] && o.push(n.classes[t[s]])
			}
			return n = x.extend(
			{
				element: this.element,
				classes: this.options.classes ||
				{}
			}, n), this._on(n.element,
			{
				remove: "_untrackClassesElement"
			}), n.keys && t(n.keys.match(/\S+/g) || [], !0), n.extra && t(n.extra.match(/\S+/g) || []), o.join(" ")
		},
		_untrackClassesElement: function (i)
		{
			var s = this;
			x.each(s.classesElementLookup, function (t, e)
			{
				-1 !== x.inArray(i.target, e) && (s.classesElementLookup[t] = x(e.not(i.target).get()))
			})
		},
		_removeClass: function (t, e, i)
		{
			return this._toggleClass(t, e, i, !1)
		},
		_addClass: function (t, e, i)
		{
			return this._toggleClass(t, e, i, !0)
		},
		_toggleClass: function (t, e, i, s)
		{
			s = "boolean" == typeof s ? s : i;
			var n = "string" == typeof t || null === t,
				o = {
					extra: n ? e : i,
					keys: n ? t : e,
					element: n ? this.element : t,
					add: s
				};
			return o.element.toggleClass(this._classes(o), s), this
		},
		_on: function (a, r, t)
		{
			var h, l = this;
			"boolean" != typeof a && (t = r, r = a, a = !1), t ? (r = h = x(r), this.bindings = this.bindings.add(r)) : (t = r, r = this.element, h = this.widget()), x.each(t, function (t, e)
			{
				function i()
				{
					if (a || !0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? l[e] : e).apply(l, arguments)
				}
				"string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
				var s = t.match(/^([\w:-]*)\s*(.*)$/),
					n = s[1] + l.eventNamespace,
					o = s[2];
				o ? h.on(n, o, i) : r.on(n, i)
			})
		},
		_off: function (t, e)
		{
			e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e).off(e), this.bindings = x(this.bindings.not(t).get()), this.focusable = x(this.focusable.not(t).get()), this.hoverable = x(this.hoverable.not(t).get())
		},
		_delay: function (t, e)
		{
			var i = this;
			return setTimeout(function ()
			{
				return ("string" == typeof t ? i[t] : t).apply(i, arguments)
			}, e || 0)
		},
		_hoverable: function (t)
		{
			this.hoverable = this.hoverable.add(t), this._on(t,
			{
				mouseenter: function (t)
				{
					this._addClass(x(t.currentTarget), null, "ui-state-hover")
				},
				mouseleave: function (t)
				{
					this._removeClass(x(t.currentTarget), null, "ui-state-hover")
				}
			})
		},
		_focusable: function (t)
		{
			this.focusable = this.focusable.add(t), this._on(t,
			{
				focusin: function (t)
				{
					this._addClass(x(t.currentTarget), null, "ui-state-focus")
				},
				focusout: function (t)
				{
					this._removeClass(x(t.currentTarget), null, "ui-state-focus")
				}
			})
		},
		_trigger: function (t, e, i)
		{
			var s, n, o = this.options[t];
			if (i = i ||
				{}, (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], n = e.originalEvent)
				for (s in n) s in e || (e[s] = n[s]);
			return this.element.trigger(e, i), !(x.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
		}
	}, x.each(
	{
		show: "fadeIn",
		hide: "fadeOut"
	}, function (o, a)
	{
		x.Widget.prototype["_" + o] = function (e, t, i)
		{
			var s;
			"string" == typeof t && (t = {
				effect: t
			});
			var n = t ? !0 !== t && "number" != typeof t && t.effect || a : o;
			"number" == typeof (t = t ||
			{}) && (t = {
				duration: t
			}), s = !x.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), s && x.effects && x.effects.effect[n] ? e[o](t) : n !== o && e[n] ? e[n](t.duration, t.easing, i) : e.queue(function (t)
			{
				x(this)[o](), i && i.call(e[0]), t()
			})
		}
	});
	var o, k, C, s, a, h, l, c, D;
	x.widget;

	function I(t, e, i)
	{
		return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
	}

	function T(t, e)
	{
		return parseInt(x.css(t, e), 10) || 0
	}
	k = Math.max, C = Math.abs, s = /left|center|right/, a = /top|center|bottom/, h = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, c = /%$/, D = x.fn.position, x.position = {
		scrollbarWidth: function ()
		{
			if (void 0 !== o) return o;
			var t, e, i = x("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
				s = i.children()[0];
			return x("body").append(i), t = s.offsetWidth, i.css("overflow", "scroll"), t === (e = s.offsetWidth) && (e = i[0].clientWidth), i.remove(), o = t - e
		},
		getScrollInfo: function (t)
		{
			var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
				i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
				s = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
			return {
				width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
				height: s ? x.position.scrollbarWidth() : 0
			}
		},
		getWithinInfo: function (t)
		{
			var e = x(t || window),
				i = x.isWindow(e[0]),
				s = !!e[0] && 9 === e[0].nodeType;
			return {
				element: e,
				isWindow: i,
				isDocument: s,
				offset: !i && !s ? x(t).offset() :
				{
					left: 0,
					top: 0
				},
				scrollLeft: e.scrollLeft(),
				scrollTop: e.scrollTop(),
				width: e.outerWidth(),
				height: e.outerHeight()
			}
		}
	}, x.fn.position = function (u)
	{
		if (!u || !u.of) return D.apply(this, arguments);
		u = x.extend(
		{}, u);
		var d, p, f, g, m, t, e, _ = x(u.of),
			v = x.position.getWithinInfo(u.within),
			b = x.position.getScrollInfo(v),
			y = (u.collision || "flip").split(" "),
			w = {},
			i = 9 === (e = (t = _)[0]).nodeType ?
			{
				width: t.width(),
				height: t.height(),
				offset:
				{
					top: 0,
					left: 0
				}
			} : x.isWindow(e) ?
			{
				width: t.width(),
				height: t.height(),
				offset:
				{
					top: t.scrollTop(),
					left: t.scrollLeft()
				}
			} : e.preventDefault ?
			{
				width: 0,
				height: 0,
				offset:
				{
					top: e.pageY,
					left: e.pageX
				}
			} :
			{
				width: t.outerWidth(),
				height: t.outerHeight(),
				offset: t.offset()
			};
		return _[0].preventDefault && (u.at = "left top"), p = i.width, f = i.height, g = i.offset, m = x.extend(
		{}, g), x.each(["my", "at"], function ()
		{
			var t, e, i = (u[this] || "").split(" ");
			1 === i.length && (i = s.test(i[0]) ? i.concat(["center"]) : a.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = s.test(i[0]) ? i[0] : "center", i[1] = a.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], u[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
		}), 1 === y.length && (y[1] = y[0]), "right" === u.at[0] ? m.left += p : "center" === u.at[0] && (m.left += p / 2), "bottom" === u.at[1] ? m.top += f : "center" === u.at[1] && (m.top += f / 2), d = I(w.at, p, f), m.left += d[0], m.top += d[1], this.each(function ()
		{
			var i, t, a = x(this),
				r = a.outerWidth(),
				h = a.outerHeight(),
				e = T(this, "marginLeft"),
				s = T(this, "marginTop"),
				n = r + e + T(this, "marginRight") + b.width,
				o = h + s + T(this, "marginBottom") + b.height,
				l = x.extend(
				{}, m),
				c = I(w.my, a.outerWidth(), a.outerHeight());
			"right" === u.my[0] ? l.left -= r : "center" === u.my[0] && (l.left -= r / 2), "bottom" === u.my[1] ? l.top -= h : "center" === u.my[1] && (l.top -= h / 2), l.left += c[0], l.top += c[1], i = {
				marginLeft: e,
				marginTop: s
			}, x.each(["left", "top"], function (t, e)
			{
				x.ui.position[y[t]] && x.ui.position[y[t]][e](l,
				{
					targetWidth: p,
					targetHeight: f,
					elemWidth: r,
					elemHeight: h,
					collisionPosition: i,
					collisionWidth: n,
					collisionHeight: o,
					offset: [d[0] + c[0], d[1] + c[1]],
					my: u.my,
					at: u.at,
					within: v,
					elem: a
				})
			}), u.using && (t = function (t)
			{
				var e = g.left - l.left,
					i = e + p - r,
					s = g.top - l.top,
					n = s + f - h,
					o = {
						target:
						{
							element: _,
							left: g.left,
							top: g.top,
							width: p,
							height: f
						},
						element:
						{
							element: a,
							left: l.left,
							top: l.top,
							width: r,
							height: h
						},
						horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
						vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle"
					};
				p < r && C(e + i) < p && (o.horizontal = "center"), f < h && C(s + n) < f && (o.vertical = "middle"), k(C(e), C(i)) > k(C(s), C(n)) ? o.important = "horizontal" : o.important = "vertical", u.using.call(this, t, o)
			}), a.offset(x.extend(l,
			{
				using: t
			}))
		})
	}, x.ui.position = {
		fit:
		{
			left: function (t, e)
			{
				var i, s = e.within,
					n = s.isWindow ? s.scrollLeft : s.offset.left,
					o = s.width,
					a = t.left - e.collisionPosition.marginLeft,
					r = n - a,
					h = a + e.collisionWidth - o - n;
				e.collisionWidth > o ? 0 < r && h <= 0 ? (i = t.left + r + e.collisionWidth - o - n, t.left += r - i) : t.left = !(0 < h && r <= 0) && h < r ? n + o - e.collisionWidth : n : 0 < r ? t.left += r : 0 < h ? t.left -= h : t.left = k(t.left - a, t.left)
			},
			top: function (t, e)
			{
				var i, s = e.within,
					n = s.isWindow ? s.scrollTop : s.offset.top,
					o = e.within.height,
					a = t.top - e.collisionPosition.marginTop,
					r = n - a,
					h = a + e.collisionHeight - o - n;
				e.collisionHeight > o ? 0 < r && h <= 0 ? (i = t.top + r + e.collisionHeight - o - n, t.top += r - i) : t.top = !(0 < h && r <= 0) && h < r ? n + o - e.collisionHeight : n : 0 < r ? t.top += r : 0 < h ? t.top -= h : t.top = k(t.top - a, t.top)
			}
		},
		flip:
		{
			left: function (t, e)
			{
				var i, s, n = e.within,
					o = n.offset.left + n.scrollLeft,
					a = n.width,
					r = n.isWindow ? n.scrollLeft : n.offset.left,
					h = t.left - e.collisionPosition.marginLeft,
					l = h - r,
					c = h + e.collisionWidth - a - r,
					u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
					d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
					p = -2 * e.offset[0];
				l < 0 ? ((i = t.left + u + d + p + e.collisionWidth - a - o) < 0 || i < C(l)) && (t.left += u + d + p) : 0 < c && (0 < (s = t.left - e.collisionPosition.marginLeft + u + d + p - r) || C(s) < c) && (t.left += u + d + p)
			},
			top: function (t, e)
			{
				var i, s, n = e.within,
					o = n.offset.top + n.scrollTop,
					a = n.height,
					r = n.isWindow ? n.scrollTop : n.offset.top,
					h = t.top - e.collisionPosition.marginTop,
					l = h - r,
					c = h + e.collisionHeight - a - r,
					u = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
					d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
					p = -2 * e.offset[1];
				l < 0 ? ((s = t.top + u + d + p + e.collisionHeight - a - o) < 0 || s < C(l)) && (t.top += u + d + p) : 0 < c && (0 < (i = t.top - e.collisionPosition.marginTop + u + d + p - r) || C(i) < c) && (t.top += u + d + p)
			}
		},
		flipfit:
		{
			left: function ()
			{
				x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments)
			},
			top: function ()
			{
				x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments)
			}
		}
	};
	x.ui.position, x.extend(x.expr[":"],
	{
		data: x.expr.createPseudo ? x.expr.createPseudo(function (e)
		{
			return function (t)
			{
				return !!x.data(t, e)
			}
		}) : function (t, e, i)
		{
			return !!x.data(t, i[3])
		}
	}), x.fn.extend(
	{
		disableSelection: (t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function ()
		{
			return this.on(t + ".ui-disableSelection", function (t)
			{
				t.preventDefault()
			})
		}),
		enableSelection: function ()
		{
			return this.off(".ui-disableSelection")
		}
	});
	var t, u, d, p, f, e, g, m, _, v, b, y, w, P, M, S, H, z, O, A, N, W, E = "ui-effects-",
		F = "ui-effects-style",
		L = "ui-effects-animated",
		R = x;

	function B(t, e, i)
	{
		var s = _[e.type] ||
		{};
		return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : t < 0 ? 0 : s.max < t ? s.max : t)
	}

	function Y(a)
	{
		var r = g(),
			h = r._rgba = [];
		return a = a.toLowerCase(), y(e, function (t, e)
		{
			var i, s = e.re.exec(a),
				n = s && e.parse(s),
				o = e.space || "rgba";
			if (n) return i = r[o](n), r[m[o].cache] = i[m[o].cache], h = r._rgba = i._rgba, !1
		}), h.length ? ("0,0,0,0" === h.join() && u.extend(h, p.transparent), r) : p[a]
	}

	function j(t, e, i)
	{
		return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
	}

	function q(t)
	{
		var e, i, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
			n = {};
		if (s && s.length && s[0] && s[s[0]])
			for (i = s.length; i--;) "string" == typeof s[e = s[i]] && (n[x.camelCase(e)] = s[e]);
		else
			for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
		return n
	}

	function K(t, e, i, s)
	{
		return x.isPlainObject(t) && (t = (e = t).effect), t = {
			effect: t
		}, null == e && (e = {}), x.isFunction(e) && (s = e, i = null, e = {}), "number" != typeof e && !x.fx.speeds[e] || (s = i, i = e, e = {}), x.isFunction(i) && (s = i, i = null), e && x.extend(t, e), i = i || e.duration, t.duration = x.fx.off ? 0 : "number" == typeof i ? i : i in x.fx.speeds ? x.fx.speeds[i] : x.fx.speeds._default, t.complete = s || e.complete, t
	}

	function U(t)
	{
		return !t || "number" == typeof t || x.fx.speeds[t] || ("string" == typeof t && !x.effects.effect[t] || (x.isFunction(t) || "object" == typeof t && !t.effect))
	}

	function V(t, e)
	{
		var i = e.outerWidth(),
			s = e.outerHeight(),
			n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0];
		return {
			top: parseFloat(n[1]) || 0,
			right: "auto" === n[2] ? i : parseFloat(n[2]),
			bottom: "auto" === n[3] ? s : parseFloat(n[3]),
			left: parseFloat(n[4]) || 0
		}
	}
	x.effects = {
		effect:
		{}
	}, f = /^([\-+])=\s*(\d+\.?\d*)/, e = [
	{
		re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
		parse: function (t)
		{
			return [t[1], t[2], t[3], t[4]]
		}
	},
	{
		re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
		parse: function (t)
		{
			return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
		}
	},
	{
		re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
		parse: function (t)
		{
			return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
		}
	},
	{
		re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
		parse: function (t)
		{
			return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
		}
	},
	{
		re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
		space: "hsla",
		parse: function (t)
		{
			return [t[1], t[2] / 100, t[3] / 100, t[4]]
		}
	}], g = (u = R).Color = function (t, e, i, s)
	{
		return new u.Color.fn.parse(t, e, i, s)
	}, m = {
		rgba:
		{
			props:
			{
				red:
				{
					idx: 0,
					type: "byte"
				},
				green:
				{
					idx: 1,
					type: "byte"
				},
				blue:
				{
					idx: 2,
					type: "byte"
				}
			}
		},
		hsla:
		{
			props:
			{
				hue:
				{
					idx: 0,
					type: "degrees"
				},
				saturation:
				{
					idx: 1,
					type: "percent"
				},
				lightness:
				{
					idx: 2,
					type: "percent"
				}
			}
		}
	}, _ = {
		byte:
		{
			floor: !0,
			max: 255
		},
		percent:
		{
			max: 1
		},
		degrees:
		{
			mod: 360,
			floor: !0
		}
	}, v = g.support = {}, b = u("<p>")[0], y = u.each, b.style.cssText = "background-color:rgba(1,1,1,.5)", v.rgba = -1 < b.style.backgroundColor.indexOf("rgba"), y(m, function (t, e)
	{
		e.cache = "_" + t, e.props.alpha = {
			idx: 3,
			type: "percent",
			def: 1
		}
	}), g.fn = u.extend(g.prototype,
	{
		parse: function (n, t, e, i)
		{
			if (n === d) return this._rgba = [null, null, null, null], this;
			(n.jquery || n.nodeType) && (n = u(n).css(t), t = d);
			var o = this,
				s = u.type(n),
				a = this._rgba = [];
			return t !== d && (n = [n, t, e, i], s = "array"), "string" === s ? this.parse(Y(n) || p._default) : "array" === s ? (y(m.rgba.props, function (t, e)
			{
				a[e.idx] = B(n[e.idx], e)
			}), this) : "object" === s ? (y(m, n instanceof g ? function (t, e)
			{
				n[e.cache] && (o[e.cache] = n[e.cache].slice())
			} : function (t, i)
			{
				var s = i.cache;
				y(i.props, function (t, e)
				{
					if (!o[s] && i.to)
					{
						if ("alpha" === t || null == n[t]) return;
						o[s] = i.to(o._rgba)
					}
					o[s][e.idx] = B(n[t], e, !0)
				}), o[s] && u.inArray(null, o[s].slice(0, 3)) < 0 && (o[s][3] = 1, i.from && (o._rgba = i.from(o[s])))
			}), this) : void 0
		},
		is: function (t)
		{
			var n = g(t),
				o = !0,
				a = this;
			return y(m, function (t, e)
			{
				var i, s = n[e.cache];
				return s && (i = a[e.cache] || e.to && e.to(a._rgba) || [], y(e.props, function (t, e)
				{
					if (null != s[e.idx]) return o = s[e.idx] === i[e.idx]
				})), o
			}), o
		},
		_space: function ()
		{
			var i = [],
				s = this;
			return y(m, function (t, e)
			{
				s[e.cache] && i.push(t)
			}), i.pop()
		},
		transition: function (t, a)
		{
			var e = (l = g(t))._space(),
				i = m[e],
				s = 0 === this.alpha() ? g("transparent") : this,
				r = s[i.cache] || i.to(s._rgba),
				h = r.slice(),
				l = l[i.cache];
			return y(i.props, function (t, e)
			{
				var i = e.idx,
					s = r[i],
					n = l[i],
					o = _[e.type] ||
					{};
				null !== n && (null === s ? h[i] = n : (o.mod && (o.mod / 2 < n - s ? s += o.mod : o.mod / 2 < s - n && (s -= o.mod)), h[i] = B((n - s) * a + s, e)))
			}), this[e](h)
		},
		blend: function (t)
		{
			if (1 === this._rgba[3]) return this;
			var e = this._rgba.slice(),
				i = e.pop(),
				s = g(t)._rgba;
			return g(u.map(e, function (t, e)
			{
				return (1 - i) * s[e] + i * t
			}))
		},
		toRgbaString: function ()
		{
			var t = "rgba(",
				e = u.map(this._rgba, function (t, e)
				{
					return null == t ? 2 < e ? 1 : 0 : t
				});
			return 1 === e[3] && (e.pop(), t = "rgb("), t + e.join() + ")"
		},
		toHslaString: function ()
		{
			var t = "hsla(",
				e = u.map(this.hsla(), function (t, e)
				{
					return null == t && (t = 2 < e ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
				});
			return 1 === e[3] && (e.pop(), t = "hsl("), t + e.join() + ")"
		},
		toHexString: function (t)
		{
			var e = this._rgba.slice(),
				i = e.pop();
			return t && e.push(~~(255 * i)), "#" + u.map(e, function (t)
			{
				return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
			}).join("")
		},
		toString: function ()
		{
			return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
		}
	}), g.fn.parse.prototype = g.fn, m.hsla.to = function (t)
	{
		if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
		var e = t[0] / 255,
			i = t[1] / 255,
			s = t[2] / 255,
			n = t[3],
			o = Math.max(e, i, s),
			a = Math.min(e, i, s),
			r = o - a,
			h = o + a,
			l = .5 * h,
			c = a === o ? 0 : e === o ? 60 * (i - s) / r + 360 : i === o ? 60 * (s - e) / r + 120 : 60 * (e - i) / r + 240,
			u = 0 == r ? 0 : l <= .5 ? r / h : r / (2 - h);
		return [Math.round(c) % 360, u, l, null == n ? 1 : n]
	}, m.hsla.from = function (t)
	{
		if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
		var e = t[0] / 360,
			i = t[1],
			s = t[2],
			n = t[3],
			o = s <= .5 ? s * (1 + i) : s + i - s * i,
			a = 2 * s - o;
		return [Math.round(255 * j(a, o, e + 1 / 3)), Math.round(255 * j(a, o, e)), Math.round(255 * j(a, o, e - 1 / 3)), n]
	}, y(m, function (h, t)
	{
		var i = t.props,
			a = t.cache,
			r = t.to,
			l = t.from;
		g.fn[h] = function (t)
		{
			if (r && !this[a] && (this[a] = r(this._rgba)), t === d) return this[a].slice();
			var e, s = u.type(t),
				n = "array" === s || "object" === s ? t : arguments,
				o = this[a].slice();
			return y(i, function (t, e)
			{
				var i = n["object" === s ? t : e.idx];
				null == i && (i = o[e.idx]), o[e.idx] = B(i, e)
			}), l ? ((e = g(l(o)))[a] = o, e) : g(o)
		}, y(i, function (a, r)
		{
			g.fn[a] || (g.fn[a] = function (t)
			{
				var e, i = u.type(t),
					s = "alpha" === a ? this._hsla ? "hsla" : "rgba" : h,
					n = this[s](),
					o = n[r.idx];
				return "undefined" === i ? o : ("function" === i && (t = t.call(this, o), i = u.type(t)), null == t && r.empty ? this : ("string" === i && (e = f.exec(t)) && (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)), n[r.idx] = t, this[s](n)))
			})
		})
	}), g.hook = function (t)
	{
		var e = t.split(" ");
		y(e, function (t, o)
		{
			u.cssHooks[o] = {
				set: function (t, e)
				{
					var i, s, n = "";
					if ("transparent" !== e && ("string" !== u.type(e) || (i = Y(e))))
					{
						if (e = g(i || e), !v.rgba && 1 !== e._rgba[3])
						{
							for (s = "backgroundColor" === o ? t.parentNode : t;
								("" === n || "transparent" === n) && s && s.style;) try
							{
								n = u.css(s, "backgroundColor"), s = s.parentNode
							}
							catch (t)
							{}
							e = e.blend(n && "transparent" !== n ? n : "_default")
						}
						e = e.toRgbaString()
					}
					try
					{
						t.style[o] = e
					}
					catch (t)
					{}
				}
			}, u.fx.step[o] = function (t)
			{
				t.colorInit || (t.start = g(t.elem, o), t.end = g(t.end), t.colorInit = !0), u.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos))
			}
		})
	}, g.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), u.cssHooks.borderColor = {
		expand: function (i)
		{
			var s = {};
			return y(["Top", "Right", "Bottom", "Left"], function (t, e)
			{
				s["border" + e + "Color"] = i
			}), s
		}
	}, p = u.Color.names = {
		aqua: "#00ffff",
		black: "#000000",
		blue: "#0000ff",
		fuchsia: "#ff00ff",
		gray: "#808080",
		green: "#008000",
		lime: "#00ff00",
		maroon: "#800000",
		navy: "#000080",
		olive: "#808000",
		purple: "#800080",
		red: "#ff0000",
		silver: "#c0c0c0",
		teal: "#008080",
		white: "#ffffff",
		yellow: "#ffff00",
		transparent: [null, null, null, 0],
		_default: "#ffffff"
	}, S = ["add", "remove", "toggle"], H = {
		border: 1,
		borderBottom: 1,
		borderColor: 1,
		borderLeft: 1,
		borderRight: 1,
		borderTop: 1,
		borderWidth: 1,
		margin: 1,
		padding: 1
	}, x.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, e)
	{
		x.fx.step[e] = function (t)
		{
			("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (R.style(t.elem, e, t.end), t.setAttr = !0)
		}
	}), x.fn.addBack || (x.fn.addBack = function (t)
	{
		return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	}), x.effects.animateClass = function (n, t, e, i)
	{
		var o = x.speed(t, e, i);
		return this.queue(function ()
		{
			function t()
			{
				x.each(S, function (t, e)
				{
					n[e] && i[e + "Class"](n[e])
				})
			}
			var i = x(this),
				e = i.attr("class") || "",
				s = (s = o.children ? i.find("*").addBack() : i).map(function ()
				{
					return {
						el: x(this),
						start: q(this)
					}
				});
			t(), s = s.map(function ()
			{
				return this.end = q(this.el[0]), this.diff = function (t, e)
				{
					var i, s, n = {};
					for (i in e) s = e[i], t[i] !== s && (H[i] || !x.fx.step[i] && isNaN(parseFloat(s)) || (n[i] = s));
					return n
				}(this.start, this.end), this
			}), i.attr("class", e), s = s.map(function ()
			{
				var t = this,
					e = x.Deferred(),
					i = x.extend(
					{}, o,
					{
						queue: !1,
						complete: function ()
						{
							e.resolve(t)
						}
					});
				return this.el.animate(this.diff, i), e.promise()
			}), x.when.apply(x, s.get()).done(function ()
			{
				t(), x.each(arguments, function ()
				{
					var e = this.el;
					x.each(this.diff, function (t)
					{
						e.css(t, "")
					})
				}), o.complete.call(i[0])
			})
		})
	}, x.fn.extend(
	{
		addClass: (M = x.fn.addClass, function (t, e, i, s)
		{
			return e ? x.effects.animateClass.call(this,
			{
				add: t
			}, e, i, s) : M.apply(this, arguments)
		}),
		removeClass: (P = x.fn.removeClass, function (t, e, i, s)
		{
			return 1 < arguments.length ? x.effects.animateClass.call(this,
			{
				remove: t
			}, e, i, s) : P.apply(this, arguments)
		}),
		toggleClass: (w = x.fn.toggleClass, function (t, e, i, s, n)
		{
			return "boolean" == typeof e || void 0 === e ? i ? x.effects.animateClass.call(this, e ?
			{
				add: t
			} :
			{
				remove: t
			}, i, s, n) : w.apply(this, arguments) : x.effects.animateClass.call(this,
			{
				toggle: t
			}, e, i, s)
		}),
		switchClass: function (t, e, i, s, n)
		{
			return x.effects.animateClass.call(this,
			{
				add: e,
				remove: t
			}, i, s, n)
		}
	}), x.expr && x.expr.filters && x.expr.filters.animated && (x.expr.filters.animated = (z = x.expr.filters.animated, function (t)
	{
		return !!x(t).data(L) || z(t)
	})), !1 !== x.uiBackCompat && x.extend(x.effects,
	{
		save: function (t, e)
		{
			for (var i = 0, s = e.length; i < s; i++) null !== e[i] && t.data(E + e[i], t[0].style[e[i]])
		},
		restore: function (t, e)
		{
			for (var i, s = 0, n = e.length; s < n; s++) null !== e[s] && (i = t.data(E + e[s]), t.css(e[s], i))
		},
		setMode: function (t, e)
		{
			return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
		},
		createWrapper: function (i)
		{
			if (i.parent().is(".ui-effects-wrapper")) return i.parent();
			var s = {
					width: i.outerWidth(!0),
					height: i.outerHeight(!0),
					float: i.css("float")
				},
				t = x("<div></div>").addClass("ui-effects-wrapper").css(
				{
					fontSize: "100%",
					background: "transparent",
					border: "none",
					margin: 0,
					padding: 0
				}),
				e = {
					width: i.width(),
					height: i.height()
				},
				n = document.activeElement;
			try
			{
				n.id
			}
			catch (t)
			{
				n = document.body
			}
			return i.wrap(t), i[0] !== n && !x.contains(i[0], n) || x(n).trigger("focus"), t = i.parent(), "static" === i.css("position") ? (t.css(
			{
				position: "relative"
			}), i.css(
			{
				position: "relative"
			})) : (x.extend(s,
			{
				position: i.css("position"),
				zIndex: i.css("z-index")
			}), x.each(["top", "left", "bottom", "right"], function (t, e)
			{
				s[e] = i.css(e), isNaN(parseInt(s[e], 10)) && (s[e] = "auto")
			}), i.css(
			{
				position: "relative",
				top: 0,
				left: 0,
				right: "auto",
				bottom: "auto"
			})), i.css(e), t.css(s).show()
		},
		removeWrapper: function (t)
		{
			var e = document.activeElement;
			return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), t[0] !== e && !x.contains(t[0], e) || x(e).trigger("focus")), t
		}
	}), x.extend(x.effects,
	{
		version: "1.12.1",
		define: function (t, e, i)
		{
			return i || (i = e, e = "effect"), x.effects.effect[t] = i, x.effects.effect[t].mode = e, i
		},
		scaledDimensions: function (t, e, i)
		{
			if (0 === e) return {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
			var s = "horizontal" !== i ? (e || 100) / 100 : 1,
				n = "vertical" !== i ? (e || 100) / 100 : 1;
			return {
				height: t.height() * n,
				width: t.width() * s,
				outerHeight: t.outerHeight() * n,
				outerWidth: t.outerWidth() * s
			}
		},
		clipToBox: function (t)
		{
			return {
				width: t.clip.right - t.clip.left,
				height: t.clip.bottom - t.clip.top,
				left: t.clip.left,
				top: t.clip.top
			}
		},
		unshift: function (t, e, i)
		{
			var s = t.queue();
			1 < e && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
		},
		saveStyle: function (t)
		{
			t.data(F, t[0].style.cssText)
		},
		restoreStyle: function (t)
		{
			t[0].style.cssText = t.data(F) || "", t.removeData(F)
		},
		mode: function (t, e)
		{
			var i = t.is(":hidden");
			return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
		},
		getBaseline: function (t, e)
		{
			var i, s;
			switch (t[0])
			{
			case "top":
				i = 0;
				break;
			case "middle":
				i = .5;
				break;
			case "bottom":
				i = 1;
				break;
			default:
				i = t[0] / e.height
			}
			switch (t[1])
			{
			case "left":
				s = 0;
				break;
			case "center":
				s = .5;
				break;
			case "right":
				s = 1;
				break;
			default:
				s = t[1] / e.width
			}
			return {
				x: s,
				y: i
			}
		},
		createPlaceholder: function (t)
		{
			var e, i = t.css("position"),
				s = t.position();
			return t.css(
			{
				marginTop: t.css("marginTop"),
				marginBottom: t.css("marginBottom"),
				marginLeft: t.css("marginLeft"),
				marginRight: t.css("marginRight")
			}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(i) && (i = "absolute", e = x("<" + t[0].nodeName + ">").insertAfter(t).css(
			{
				display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
				visibility: "hidden",
				marginTop: t.css("marginTop"),
				marginBottom: t.css("marginBottom"),
				marginLeft: t.css("marginLeft"),
				marginRight: t.css("marginRight"),
				float: t.css("float")
			}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(E + "placeholder", e)), t.css(
			{
				position: i,
				left: s.left,
				top: s.top
			}), e
		},
		removePlaceholder: function (t)
		{
			var e = E + "placeholder",
				i = t.data(e);
			i && (i.remove(), t.removeData(e))
		},
		cleanUp: function (t)
		{
			x.effects.restoreStyle(t), x.effects.removePlaceholder(t)
		},
		setTransition: function (s, t, n, o)
		{
			return o = o ||
			{}, x.each(t, function (t, e)
			{
				var i = s.cssUnit(e);
				0 < i[0] && (o[e] = i[0] * n + i[1])
			}), o
		}
	}), x.fn.extend(
	{
		effect: function ()
		{
			function t(t)
			{
				var e = x(this),
					i = x.effects.mode(e, r) || o;
				e.data(L, !0), h.push(i), o && ("show" === i || i === o && "hide" === i) && e.show(), o && "none" === i || x.effects.saveStyle(e), x.isFunction(t) && t()
			}
			var s = K.apply(this, arguments),
				n = x.effects.effect[s.effect],
				o = n.mode,
				e = s.queue,
				i = e || "fx",
				a = s.complete,
				r = s.mode,
				h = [];
			if (x.fx.off || !n) return r ? this[r](s.duration, a) : this.each(function ()
			{
				a && a.call(this)
			});

			function l(t)
			{
				var e = x(this);

				function i()
				{
					x.isFunction(a) && a.call(e[0]), x.isFunction(t) && t()
				}
				s.mode = h.shift(), !1 === x.uiBackCompat || o ? "none" === s.mode ? (e[r](), i()) : n.call(e[0], s, function ()
				{
					e.removeData(L), x.effects.cleanUp(e), "hide" === s.mode && e.hide(), i()
				}) : (e.is(":hidden") ? "hide" === r : "show" === r) ? (e[r](), i()) : n.call(e[0], s, i)
			}
			return !1 === e ? this.each(t).each(l) : this.queue(i, t).queue(i, l)
		},
		show: (N = x.fn.show, function (t)
		{
			if (U(t)) return N.apply(this, arguments);
			var e = K.apply(this, arguments);
			return e.mode = "show", this.effect.call(this, e)
		}),
		hide: (A = x.fn.hide, function (t)
		{
			if (U(t)) return A.apply(this, arguments);
			var e = K.apply(this, arguments);
			return e.mode = "hide", this.effect.call(this, e)
		}),
		toggle: (O = x.fn.toggle, function (t)
		{
			if (U(t) || "boolean" == typeof t) return O.apply(this, arguments);
			var e = K.apply(this, arguments);
			return e.mode = "toggle", this.effect.call(this, e)
		}),
		cssUnit: function (t)
		{
			var i = this.css(t),
				s = [];
			return x.each(["em", "px", "%", "pt"], function (t, e)
			{
				0 < i.indexOf(e) && (s = [parseFloat(i), e])
			}), s
		},
		cssClip: function (t)
		{
			return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : V(this.css("clip"), this)
		},
		transfer: function (t, e)
		{
			var i = x(this),
				s = x(t.to),
				n = "fixed" === s.css("position"),
				o = x("body"),
				a = n ? o.scrollTop() : 0,
				r = n ? o.scrollLeft() : 0,
				h = s.offset(),
				l = {
					top: h.top - a,
					left: h.left - r,
					height: s.innerHeight(),
					width: s.innerWidth()
				},
				c = i.offset(),
				u = x("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css(
				{
					top: c.top - a,
					left: c.left - r,
					height: i.innerHeight(),
					width: i.innerWidth(),
					position: n ? "fixed" : "absolute"
				}).animate(l, t.duration, t.easing, function ()
				{
					u.remove(), x.isFunction(e) && e()
				})
		}
	}), x.fx.step.clip = function (t)
	{
		t.clipInit || (t.start = x(t.elem).cssClip(), "string" == typeof t.end && (t.end = V(t.end, t.elem)), t.clipInit = !0), x(t.elem).cssClip(
		{
			top: t.pos * (t.end.top - t.start.top) + t.start.top,
			right: t.pos * (t.end.right - t.start.right) + t.start.right,
			bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
			left: t.pos * (t.end.left - t.start.left) + t.start.left
		})
	}, W = {}, x.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t)
	{
		W[t] = function (t)
		{
			return Math.pow(t, e + 2)
		}
	}), x.extend(W,
	{
		Sine: function (t)
		{
			return 1 - Math.cos(t * Math.PI / 2)
		},
		Circ: function (t)
		{
			return 1 - Math.sqrt(1 - t * t)
		},
		Elastic: function (t)
		{
			return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
		},
		Back: function (t)
		{
			return t * t * (3 * t - 2)
		},
		Bounce: function (t)
		{
			for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
			return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
		}
	}), x.each(W, function (t, e)
	{
		x.easing["easeIn" + t] = e, x.easing["easeOut" + t] = function (t)
		{
			return 1 - e(1 - t)
		}, x.easing["easeInOut" + t] = function (t)
		{
			return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
		}
	});
	x.effects, x.effects.define("blind", "hide", function (t, e)
	{
		var i = {
				up: ["bottom", "top"],
				vertical: ["bottom", "top"],
				down: ["top", "bottom"],
				left: ["right", "left"],
				horizontal: ["right", "left"],
				right: ["left", "right"]
			},
			s = x(this),
			n = t.direction || "up",
			o = s.cssClip(),
			a = {
				clip: x.extend(
				{}, o)
			},
			r = x.effects.createPlaceholder(s);
		a.clip[i[n][0]] = a.clip[i[n][1]], "show" === t.mode && (s.cssClip(a.clip), r && r.css(x.effects.clipToBox(a)), a.clip = o), r && r.animate(x.effects.clipToBox(a), t.duration, t.easing), s.animate(a,
		{
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: e
		})
	}), x.effects.define("bounce", function (t, e)
	{
		var i, s, n, o = x(this),
			a = t.mode,
			r = "hide" === a,
			h = "show" === a,
			l = t.direction || "up",
			c = t.distance,
			u = t.times || 5,
			d = 2 * u + (h || r ? 1 : 0),
			p = t.duration / d,
			f = t.easing,
			g = "up" === l || "down" === l ? "top" : "left",
			m = "up" === l || "left" === l,
			_ = 0,
			v = o.queue().length;
		for (x.effects.createPlaceholder(o), n = o.css(g), c = c || o["top" == g ? "outerHeight" : "outerWidth"]() / 3, h && ((s = {
				opacity: 1
			})[g] = n, o.css("opacity", 0).css(g, m ? 2 * -c : 2 * c).animate(s, p, f)), r && (c /= Math.pow(2, u - 1)), (s = {})[g] = n; _ < u; _++)(i = {})[g] = (m ? "-=" : "+=") + c, o.animate(i, p, f).animate(s, p, f), c = r ? 2 * c : c / 2;
		r && ((i = {
			opacity: 0
		})[g] = (m ? "-=" : "+=") + c, o.animate(i, p, f)), o.queue(e), x.effects.unshift(o, v, 1 + d)
	}), x.effects.define("clip", "hide", function (t, e)
	{
		var i = {},
			s = x(this),
			n = t.direction || "vertical",
			o = "both" === n,
			a = o || "horizontal" === n,
			r = o || "vertical" === n,
			h = s.cssClip();
		i.clip = {
			top: r ? (h.bottom - h.top) / 2 : h.top,
			right: a ? (h.right - h.left) / 2 : h.right,
			bottom: r ? (h.bottom - h.top) / 2 : h.bottom,
			left: a ? (h.right - h.left) / 2 : h.left
		}, x.effects.createPlaceholder(s), "show" === t.mode && (s.cssClip(i.clip), i.clip = h), s.animate(i,
		{
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: e
		})
	}), x.effects.define("drop", "hide", function (t, e)
	{
		var i, s = x(this),
			n = "show" === t.mode,
			o = t.direction || "left",
			a = "up" === o || "down" === o ? "top" : "left",
			r = "up" === o || "left" === o ? "-=" : "+=",
			h = "+=" == r ? "-=" : "+=",
			l = {
				opacity: 0
			};
		x.effects.createPlaceholder(s), i = t.distance || s["top" == a ? "outerHeight" : "outerWidth"](!0) / 2, l[a] = r + i, n && (s.css(l), l[a] = h + i, l.opacity = 1), s.animate(l,
		{
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: e
		})
	}), x.effects.define("explode", "hide", function (t, e)
	{
		var i, s, n, o, a, r, h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
			l = h,
			c = x(this),
			u = "show" === t.mode,
			d = c.show().css("visibility", "hidden").offset(),
			p = Math.ceil(c.outerWidth() / l),
			f = Math.ceil(c.outerHeight() / h),
			g = [];

		function m()
		{
			g.push(this), g.length === h * l && (c.css(
			{
				visibility: "visible"
			}), x(g).remove(), e())
		}
		for (i = 0; i < h; i++)
			for (o = d.top + i * f, r = i - (h - 1) / 2, s = 0; s < l; s++) n = d.left + s * p, a = s - (l - 1) / 2, c.clone().appendTo("body").wrap("<div></div>").css(
			{
				position: "absolute",
				visibility: "visible",
				left: -s * p,
				top: -i * f
			}).parent().addClass("ui-effects-explode").css(
			{
				position: "absolute",
				overflow: "hidden",
				width: p,
				height: f,
				left: n + (u ? a * p : 0),
				top: o + (u ? r * f : 0),
				opacity: u ? 0 : 1
			}).animate(
			{
				left: n + (u ? 0 : a * p),
				top: o + (u ? 0 : r * f),
				opacity: u ? 1 : 0
			}, t.duration || 500, t.easing, m)
	}), x.effects.define("fade", "toggle", function (t, e)
	{
		var i = "show" === t.mode;
		x(this).css("opacity", i ? 0 : 1).animate(
		{
			opacity: i ? 1 : 0
		},
		{
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: e
		})
	}), x.effects.define("fold", "hide", function (e, t)
	{
		var i = x(this),
			s = e.mode,
			n = "show" === s,
			o = "hide" === s,
			a = e.size || 15,
			r = /([0-9]+)%/.exec(a),
			h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
			l = e.duration / 2,
			c = x.effects.createPlaceholder(i),
			u = i.cssClip(),
			d = {
				clip: x.extend(
				{}, u)
			},
			p = {
				clip: x.extend(
				{}, u)
			},
			f = [u[h[0]], u[h[1]]],
			g = i.queue().length;
		r && (a = parseInt(r[1], 10) / 100 * f[o ? 0 : 1]), d.clip[h[0]] = a, p.clip[h[0]] = a, p.clip[h[1]] = 0, n && (i.cssClip(p.clip), c && c.css(x.effects.clipToBox(p)), p.clip = u), i.queue(function (t)
		{
			c && c.animate(x.effects.clipToBox(d), l, e.easing).animate(x.effects.clipToBox(p), l, e.easing), t()
		}).animate(d, l, e.easing).animate(p, l, e.easing).queue(t), x.effects.unshift(i, g, 4)
	}), x.effects.define("highlight", "show", function (t, e)
	{
		var i = x(this),
			s = {
				backgroundColor: i.css("backgroundColor")
			};
		"hide" === t.mode && (s.opacity = 0), x.effects.saveStyle(i), i.css(
		{
			backgroundImage: "none",
			backgroundColor: t.color || "#ffff99"
		}).animate(s,
		{
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: e
		})
	}), x.effects.define("size", function (n, e)
	{
		var t, o, i, s = x(this),
			a = ["fontSize"],
			r = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			l = n.mode,
			c = "effect" !== l,
			u = n.scale || "both",
			d = n.origin || ["middle", "center"],
			p = s.css("position"),
			f = s.position(),
			g = x.effects.scaledDimensions(s),
			m = n.from || g,
			_ = n.to || x.effects.scaledDimensions(s, 0);
		x.effects.createPlaceholder(s), "show" === l && (i = m, m = _, _ = i), o = {
			from:
			{
				y: m.height / g.height,
				x: m.width / g.width
			},
			to:
			{
				y: _.height / g.height,
				x: _.width / g.width
			}
		}, "box" !== u && "both" !== u || (o.from.y !== o.to.y && (m = x.effects.setTransition(s, r, o.from.y, m), _ = x.effects.setTransition(s, r, o.to.y, _)), o.from.x !== o.to.x && (m = x.effects.setTransition(s, h, o.from.x, m), _ = x.effects.setTransition(s, h, o.to.x, _))), "content" !== u && "both" !== u || o.from.y !== o.to.y && (m = x.effects.setTransition(s, a, o.from.y, m), _ = x.effects.setTransition(s, a, o.to.y, _)), d && (t = x.effects.getBaseline(d, g), m.top = (g.outerHeight - m.outerHeight) * t.y + f.top, m.left = (g.outerWidth - m.outerWidth) * t.x + f.left, _.top = (g.outerHeight - _.outerHeight) * t.y + f.top, _.left = (g.outerWidth - _.outerWidth) * t.x + f.left), s.css(m), "content" !== u && "both" !== u || (r = r.concat(["marginTop", "marginBottom"]).concat(a), h = h.concat(["marginLeft", "marginRight"]), s.find("*[width]").each(function ()
		{
			var t = x(this),
				e = x.effects.scaledDimensions(t),
				i = {
					height: e.height * o.from.y,
					width: e.width * o.from.x,
					outerHeight: e.outerHeight * o.from.y,
					outerWidth: e.outerWidth * o.from.x
				},
				s = {
					height: e.height * o.to.y,
					width: e.width * o.to.x,
					outerHeight: e.height * o.to.y,
					outerWidth: e.width * o.to.x
				};
			o.from.y !== o.to.y && (i = x.effects.setTransition(t, r, o.from.y, i), s = x.effects.setTransition(t, r, o.to.y, s)), o.from.x !== o.to.x && (i = x.effects.setTransition(t, h, o.from.x, i), s = x.effects.setTransition(t, h, o.to.x, s)), c && x.effects.saveStyle(t), t.css(i), t.animate(s, n.duration, n.easing, function ()
			{
				c && x.effects.restoreStyle(t)
			})
		})), s.animate(_,
		{
			queue: !1,
			duration: n.duration,
			easing: n.easing,
			complete: function ()
			{
				var t = s.offset();
				0 === _.opacity && s.css("opacity", m.opacity), c || (s.css("position", "static" === p ? "relative" : p).offset(t), x.effects.saveStyle(s)), e()
			}
		})
	}), x.effects.define("scale", function (t, e)
	{
		var i = x(this),
			s = t.mode,
			n = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) || "effect" !== s ? 0 : 100),
			o = x.extend(!0,
			{
				from: x.effects.scaledDimensions(i),
				to: x.effects.scaledDimensions(i, n, t.direction || "both"),
				origin: t.origin || ["middle", "center"]
			}, t);
		t.fade && (o.from.opacity = 1, o.to.opacity = 0), x.effects.effect.size.call(this, o, e)
	}), x.effects.define("puff", "hide", function (t, e)
	{
		var i = x.extend(!0,
		{}, t,
		{
			fade: !0,
			percent: parseInt(t.percent, 10) || 150
		});
		x.effects.effect.scale.call(this, i, e)
	}), x.effects.define("pulsate", "show", function (t, e)
	{
		var i = x(this),
			s = t.mode,
			n = "show" === s,
			o = n || "hide" === s,
			a = 2 * (t.times || 5) + (o ? 1 : 0),
			r = t.duration / a,
			h = 0,
			l = 1,
			c = i.queue().length;
		for (!n && i.is(":visible") || (i.css("opacity", 0).show(), h = 1); l < a; l++) i.animate(
		{
			opacity: h
		}, r, t.easing), h = 1 - h;
		i.animate(
		{
			opacity: h
		}, r, t.easing), i.queue(e), x.effects.unshift(i, c, 1 + a)
	}), x.effects.define("shake", function (t, e)
	{
		var i = 1,
			s = x(this),
			n = t.direction || "left",
			o = t.distance || 20,
			a = t.times || 3,
			r = 2 * a + 1,
			h = Math.round(t.duration / r),
			l = "up" === n || "down" === n ? "top" : "left",
			c = "up" === n || "left" === n,
			u = {},
			d = {},
			p = {},
			f = s.queue().length;
		for (x.effects.createPlaceholder(s), u[l] = (c ? "-=" : "+=") + o, d[l] = (c ? "+=" : "-=") + 2 * o, p[l] = (c ? "-=" : "+=") + 2 * o, s.animate(u, h, t.easing); i < a; i++) s.animate(d, h, t.easing).animate(p, h, t.easing);
		s.animate(d, h, t.easing).animate(u, h / 2, t.easing).queue(e), x.effects.unshift(s, f, 1 + r)
	}), x.effects.define("slide", "show", function (t, e)
	{
		var i, s, n = x(this),
			o = {
				up: ["bottom", "top"],
				down: ["top", "bottom"],
				left: ["right", "left"],
				right: ["left", "right"]
			},
			a = t.mode,
			r = t.direction || "left",
			h = "up" === r || "down" === r ? "top" : "left",
			l = "up" === r || "left" === r,
			c = t.distance || n["top" == h ? "outerHeight" : "outerWidth"](!0),
			u = {};
		x.effects.createPlaceholder(n), i = n.cssClip(), s = n.position()[h], u[h] = (l ? -1 : 1) * c + s, u.clip = n.cssClip(), u.clip[o[r][1]] = u.clip[o[r][0]], "show" === a && (n.cssClip(u.clip), n.css(h, u[h]), u.clip = i, u[h] = s), n.animate(u,
		{
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: e
		})
	});
	!1 !== x.uiBackCompat && x.effects.define("transfer", function (t, e)
	{
		x(this).transfer(t, e)
	});
	x.ui.focusable = function (t, e)
	{
		var i, s, n, o, a, r = t.nodeName.toLowerCase();
		return "area" === r ? (s = (i = t.parentNode).name, !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && (0 < (n = x("img[usemap='#" + s + "']")).length && n.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(r) ? (o = !t.disabled) && (a = x(t).closest("fieldset")[0]) && (o = !a.disabled) : o = "a" === r && t.href || e, o && x(t).is(":visible") && function (t)
		{
			var e = t.css("visibility");
			for (;
				"inherit" === e;) t = t.parent(), e = t.css("visibility");
			return "hidden" !== e
		}(x(t)))
	}, x.extend(x.expr[":"],
	{
		focusable: function (t)
		{
			return x.ui.focusable(t, null != x.attr(t, "tabindex"))
		}
	});
	x.ui.focusable, x.fn.form = function ()
	{
		return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
	}, x.ui.formResetMixin = {
		_formResetHandler: function ()
		{
			var e = x(this);
			setTimeout(function ()
			{
				var t = e.data("ui-form-reset-instances");
				x.each(t, function ()
				{
					this.refresh()
				})
			})
		},
		_bindFormResetHandler: function ()
		{
			var t;
			this.form = this.element.form(), this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t))
		},
		_unbindFormResetHandler: function ()
		{
			var t;
			this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
		}
	};
	"1.7" === x.fn.jquery.substring(0, 3) && (x.each(["Width", "Height"], function (t, i)
	{
		var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
			s = i.toLowerCase(),
			o = {
				innerWidth: x.fn.innerWidth,
				innerHeight: x.fn.innerHeight,
				outerWidth: x.fn.outerWidth,
				outerHeight: x.fn.outerHeight
			};

		function a(t, e, i, s)
		{
			return x.each(n, function ()
			{
				e -= parseFloat(x.css(t, "padding" + this)) || 0, i && (e -= parseFloat(x.css(t, "border" + this + "Width")) || 0), s && (e -= parseFloat(x.css(t, "margin" + this)) || 0)
			}), e
		}
		x.fn["inner" + i] = function (t)
		{
			return void 0 === t ? o["inner" + i].call(this) : this.each(function ()
			{
				x(this).css(s, a(this, t) + "px")
			})
		}, x.fn["outer" + i] = function (t, e)
		{
			return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function ()
			{
				x(this).css(s, a(this, t, !0, e) + "px")
			})
		}
	}), x.fn.addBack = function (t)
	{
		return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	});
	var $, X;
	x.ui.keyCode = {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}, x.ui.escapeSelector = ($ = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, function (t)
	{
		return t.replace($, "\\$1")
	}), x.fn.labels = function ()
	{
		var t, e, i, s, n;
		return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), (i = this.attr("id")) && (n = (t = this.eq(0).parents().last()).add(t.length ? t.siblings() : this.siblings()), e = "label[for='" + x.ui.escapeSelector(i) + "']", s = s.add(n.find(e).addBack(e))), this.pushStack(s))
	}, x.fn.scrollParent = function (t)
	{
		var e = this.css("position"),
			i = "absolute" === e,
			s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
			n = this.parents().filter(function ()
			{
				var t = x(this);
				return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
			}).eq(0);
		return "fixed" !== e && n.length ? n : x(this[0].ownerDocument || document)
	}, x.extend(x.expr[":"],
	{
		tabbable: function (t)
		{
			var e = x.attr(t, "tabindex"),
				i = null != e;
			return (!i || 0 <= e) && x.ui.focusable(t, i)
		}
	}), x.fn.extend(
	{
		uniqueId: (X = 0, function ()
		{
			return this.each(function ()
			{
				this.id || (this.id = "ui-id-" + ++X)
			})
		}),
		removeUniqueId: function ()
		{
			return this.each(function ()
			{
				/^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
			})
		}
	}), x.widget("ui.accordion",
	{
		version: "1.12.1",
		options:
		{
			active: 0,
			animate:
			{},
			classes:
			{
				"ui-accordion-header": "ui-corner-top",
				"ui-accordion-header-collapsed": "ui-corner-all",
				"ui-accordion-content": "ui-corner-bottom"
			},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child, > :not(li):even",
			heightStyle: "auto",
			icons:
			{
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		hideProps:
		{
			borderTopWidth: "hide",
			borderBottomWidth: "hide",
			paddingTop: "hide",
			paddingBottom: "hide",
			height: "hide"
		},
		showProps:
		{
			borderTopWidth: "show",
			borderBottomWidth: "show",
			paddingTop: "show",
			paddingBottom: "show",
			height: "show"
		},
		_create: function ()
		{
			var t = this.options;
			this.prevShow = this.prevHide = x(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t.collapsible || !1 !== t.active && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
		},
		_getCreateEventData: function ()
		{
			return {
				header: this.active,
				panel: this.active.length ? this.active.next() : x()
			}
		},
		_createIcons: function ()
		{
			var t, e, i = this.options.icons;
			i && (t = x("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + i.header), t.prependTo(this.headers), e = this.active.children(".ui-accordion-header-icon"), this._removeClass(e, i.header)._addClass(e, null, i.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
		},
		_destroyIcons: function ()
		{
			this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
		},
		_destroy: function ()
		{
			var t;
			this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
		},
		_setOption: function (t, e)
		{
			"active" !== t ? ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons())) : this._activate(e)
		},
		_setOptionDisabled: function (t)
		{
			this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
		},
		_keydown: function (t)
		{
			if (!t.altKey && !t.ctrlKey)
			{
				var e = x.ui.keyCode,
					i = this.headers.length,
					s = this.headers.index(t.target),
					n = !1;
				switch (t.keyCode)
				{
				case e.RIGHT:
				case e.DOWN:
					n = this.headers[(s + 1) % i];
					break;
				case e.LEFT:
				case e.UP:
					n = this.headers[(s - 1 + i) % i];
					break;
				case e.SPACE:
				case e.ENTER:
					this._eventHandler(t);
					break;
				case e.HOME:
					n = this.headers[0];
					break;
				case e.END:
					n = this.headers[i - 1]
				}
				n && (x(t.target).attr("tabIndex", -1), x(n).attr("tabIndex", 0), x(n).trigger("focus"), t.preventDefault())
			}
		},
		_panelKeyDown: function (t)
		{
			t.keyCode === x.ui.keyCode.UP && t.ctrlKey && x(t.currentTarget).prev().trigger("focus")
		},
		refresh: function ()
		{
			var t = this.options;
			this._processPanels(), !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1, this.active = x()) : !1 === t.active ? this._activate(0) : this.active.length && !x.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = x()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
		},
		_processPanels: function ()
		{
			var t = this.headers,
				e = this.panels;
			this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
		},
		_refresh: function ()
		{
			var i, t = this.options,
				e = t.heightStyle,
				s = this.element.parent();
			this.active = this._findActive(t.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function ()
			{
				var t = x(this),
					e = t.uniqueId().attr("id"),
					i = t.next(),
					s = i.uniqueId().attr("id");
				t.attr("aria-controls", s), i.attr("aria-labelledby", e)
			}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr(
			{
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}).next().attr(
			{
				"aria-hidden": "true"
			}).hide(), this.active.length ? this.active.attr(
			{
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}).next().attr(
			{
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(t.event), "fill" === e ? (i = s.height(), this.element.siblings(":visible").each(function ()
			{
				var t = x(this),
					e = t.css("position");
				"absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
			}), this.headers.each(function ()
			{
				i -= x(this).outerHeight(!0)
			}), this.headers.next().each(function ()
			{
				x(this).height(Math.max(0, i - x(this).innerHeight() + x(this).height()))
			}).css("overflow", "auto")) : "auto" === e && (i = 0, this.headers.next().each(function ()
			{
				var t = x(this).is(":visible");
				t || x(this).show(), i = Math.max(i, x(this).css("height", "").height()), t || x(this).hide()
			}).height(i))
		},
		_activate: function (t)
		{
			var e = this._findActive(t)[0];
			e !== this.active[0] && (e = e || this.active[0], this._eventHandler(
			{
				target: e,
				currentTarget: e,
				preventDefault: x.noop
			}))
		},
		_findActive: function (t)
		{
			return "number" == typeof t ? this.headers.eq(t) : x()
		},
		_setupEvents: function (t)
		{
			var i = {
				keydown: "_keydown"
			};
			t && x.each(t.split(" "), function (t, e)
			{
				i[e] = "_eventHandler"
			}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(),
			{
				keydown: "_panelKeyDown"
			}), this._hoverable(this.headers), this._focusable(this.headers)
		},
		_eventHandler: function (t)
		{
			var e, i, s = this.options,
				n = this.active,
				o = x(t.currentTarget),
				a = o[0] === n[0],
				r = a && s.collapsible,
				h = r ? x() : o.next(),
				l = n.next(),
				c = {
					oldHeader: n,
					oldPanel: l,
					newHeader: r ? x() : o,
					newPanel: h
				};
			t.preventDefault(), a && !s.collapsible || !1 === this._trigger("beforeActivate", t, c) || (s.active = !r && this.headers.index(o), this.active = a ? x() : o, this._toggle(c), this._removeClass(n, "ui-accordion-header-active", "ui-state-active"), s.icons && (e = n.children(".ui-accordion-header-icon"), this._removeClass(e, null, s.icons.activeHeader)._addClass(e, null, s.icons.header)), a || (this._removeClass(o, "ui-accordion-header-collapsed")._addClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.header)._addClass(i, null, s.icons.activeHeader)), this._addClass(o.next(), "ui-accordion-content-active")))
		},
		_toggle: function (t)
		{
			var e = t.newPanel,
				i = this.prevShow.length ? this.prevShow : t.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = i, this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)), i.attr(
			{
				"aria-hidden": "true"
			}), i.prev().attr(
			{
				"aria-selected": "false",
				"aria-expanded": "false"
			}), e.length && i.length ? i.prev().attr(
			{
				tabIndex: -1,
				"aria-expanded": "false"
			}) : e.length && this.headers.filter(function ()
			{
				return 0 === parseInt(x(this).attr("tabIndex"), 10)
			}).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr(
			{
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			})
		},
		_animate: function (t, i, e)
		{
			function s()
			{
				r._toggleComplete(e)
			}
			var n, o, a, r = this,
				h = 0,
				l = t.css("box-sizing"),
				c = t.length && (!i.length || t.index() < i.index()),
				u = this.options.animate ||
				{},
				d = c && u.down || u;
			return "number" == typeof d && (a = d), "string" == typeof d && (o = d), o = o || d.easing || u.easing, a = a || d.duration || u.duration, i.length ? t.length ? (n = t.show().outerHeight(), i.animate(this.hideProps,
			{
				duration: a,
				easing: o,
				step: function (t, e)
				{
					e.now = Math.round(t)
				}
			}), void t.hide().animate(this.showProps,
			{
				duration: a,
				easing: o,
				complete: s,
				step: function (t, e)
				{
					e.now = Math.round(t), "height" !== e.prop ? "content-box" === l && (h += e.now) : "content" !== r.options.heightStyle && (e.now = Math.round(n - i.outerHeight() - h), h = 0)
				}
			})) : i.animate(this.hideProps, a, o, s) : t.animate(this.showProps, a, o, s)
		},
		_toggleComplete: function (t)
		{
			var e = t.oldPanel,
				i = e.prev();
			this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
		}
	}), x.ui.safeActiveElement = function (e)
	{
		var i;
		try
		{
			i = e.activeElement
		}
		catch (t)
		{
			i = e.body
		}
		return (i = i || e.body).nodeName || (i = e.body), i
	}, x.widget("ui.menu",
	{
		version: "1.12.1",
		defaultElement: "<ul>",
		delay: 300,
		options:
		{
			icons:
			{
				submenu: "ui-icon-caret-1-e"
			},
			items: "> *",
			menus: "ul",
			position:
			{
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function ()
		{
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr(
			{
				role: this.options.role,
				tabIndex: 0
			}), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on(
			{
				"mousedown .ui-menu-item": function (t)
				{
					t.preventDefault()
				},
				"click .ui-menu-item": function (t)
				{
					var e = x(t.target),
						i = x(x.ui.safeActiveElement(this.document[0]));
					!this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function (t)
				{
					var e, i;
					this.previousFilter || (e = x(t.target).closest(".ui-menu-item"), i = x(t.currentTarget), e[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i)))
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function (t, e)
				{
					var i = this.active || this.element.find(this.options.items).eq(0);
					e || this.focus(t, i)
				},
				blur: function (t)
				{
					this._delay(function ()
					{
						x.contains(this.element[0], x.ui.safeActiveElement(this.document[0])) || this.collapseAll(t)
					})
				},
				keydown: "_keydown"
			}), this.refresh(), this._on(this.document,
			{
				click: function (t)
				{
					this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
				}
			})
		},
		_destroy: function ()
		{
			var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), t.children().each(function ()
			{
				var t = x(this);
				t.data("ui-menu-submenu-caret") && t.remove()
			})
		},
		_keydown: function (t)
		{
			var e, i, s, n, o = !0;
			switch (t.keyCode)
			{
			case x.ui.keyCode.PAGE_UP:
				this.previousPage(t);
				break;
			case x.ui.keyCode.PAGE_DOWN:
				this.nextPage(t);
				break;
			case x.ui.keyCode.HOME:
				this._move("first", "first", t);
				break;
			case x.ui.keyCode.END:
				this._move("last", "last", t);
				break;
			case x.ui.keyCode.UP:
				this.previous(t);
				break;
			case x.ui.keyCode.DOWN:
				this.next(t);
				break;
			case x.ui.keyCode.LEFT:
				this.collapse(t);
				break;
			case x.ui.keyCode.RIGHT:
				this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
				break;
			case x.ui.keyCode.ENTER:
			case x.ui.keyCode.SPACE:
				this._activate(t);
				break;
			case x.ui.keyCode.ESCAPE:
				this.collapse(t);
				break;
			default:
				o = !1, i = this.previousFilter || "", n = !1, s = 96 <= t.keyCode && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), s === i ? n = !0 : s = i + s, e = this._filterMenuItems(s), (e = n && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || (s = String.fromCharCode(t.keyCode), e = this._filterMenuItems(s)), e.length ? (this.focus(t, e), this.previousFilter = s, this.filterTimer = this._delay(function ()
				{
					delete this.previousFilter
				}, 1e3)) : delete this.previousFilter
			}
			o && t.preventDefault()
		},
		_activate: function (t)
		{
			this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
		},
		refresh: function ()
		{
			var t, e, i, s, n = this,
				o = this.options.icons.submenu,
				a = this.element.find(this.options.menus);
			this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), e = a.filter(":not(.ui-menu)").hide().attr(
			{
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function ()
			{
				var t = x(this),
					e = t.prev(),
					i = x("<span>").data("ui-menu-submenu-caret", !0);
				n._addClass(i, "ui-menu-icon", "ui-icon " + o), e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"))
			}), this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"), (t = a.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function ()
			{
				var t = x(this);
				n._isDivider(t) && n._addClass(t, "ui-menu-divider", "ui-widget-content")
			}), s = (i = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr(
			{
				tabIndex: -1,
				role: this._itemRole()
			}), this._addClass(i, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"), t.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !x.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function ()
		{
			return {
				menu: "menuitem",
				listbox: "option"
			} [this.options.role]
		},
		_setOption: function (t, e)
		{
			var i;
			"icons" === t && (i = this.element.find(".ui-menu-icon"), this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)), this._super(t, e)
		},
		_setOptionDisabled: function (t)
		{
			this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t)
		},
		focus: function (t, e)
		{
			var i, s, n;
			this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function ()
			{
				this._close()
			}, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t,
			{
				item: e
			})
		},
		_scrollIntoView: function (t)
		{
			var e, i, s, n, o, a;
			this._hasScroll() && (e = parseFloat(x.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(x.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - e - i, n = this.activeMenu.scrollTop(), o = this.activeMenu.height(), a = t.outerHeight(), s < 0 ? this.activeMenu.scrollTop(n + s) : o < s + a && this.activeMenu.scrollTop(n + s - o + a))
		},
		blur: function (t, e)
		{
			e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t,
			{
				item: this.active
			}), this.active = null)
		},
		_startOpening: function (t)
		{
			clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function ()
			{
				this._close(), this._open(t)
			}, this.delay))
		},
		_open: function (t)
		{
			var e = x.extend(
			{
				of: this.active
			}, this.options.position);
			clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
		},
		collapseAll: function (e, i)
		{
			clearTimeout(this.timer), this.timer = this._delay(function ()
			{
				var t = i ? this.element : x(e && e.target).closest(this.element.find(".ui-menu"));
				t.length || (t = this.element), this._close(t), this.blur(e), this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = t
			}, this.delay)
		},
		_close: function (t)
		{
			(t = t || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
		},
		_closeOnDocumentClick: function (t)
		{
			return !x(t.target).closest(".ui-menu").length
		},
		_isDivider: function (t)
		{
			return !/[^\-\u2014\u2013\s]/.test(t.text())
		},
		collapse: function (t)
		{
			var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			e && e.length && (this._close(), this.focus(t, e))
		},
		expand: function (t)
		{
			var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
			e && e.length && (this._open(e.parent()), this._delay(function ()
			{
				this.focus(t, e)
			}))
		},
		next: function (t)
		{
			this._move("next", "first", t)
		},
		previous: function (t)
		{
			this._move("prev", "last", t)
		},
		isFirstItem: function ()
		{
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function ()
		{
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function (t, e, i)
		{
			var s;
			this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
		},
		nextPage: function (t)
		{
			var e, i, s;
			this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function ()
			{
				return (e = x(this)).offset().top - i - s < 0
			}), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(t)
		},
		previousPage: function (t)
		{
			var e, i, s;
			this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function ()
			{
				return 0 < (e = x(this)).offset().top - i + s
			}), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first())) : this.next(t)
		},
		_hasScroll: function ()
		{
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function (t)
		{
			this.active = this.active || x(t.target).closest(".ui-menu-item");
			var e = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e)
		},
		_filterMenuItems: function (t)
		{
			var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
				i = new RegExp("^" + e, "i");
			return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function ()
			{
				return i.test(x.trim(x(this).children(".ui-menu-item-wrapper").text()))
			})
		}
	});
	x.widget("ui.autocomplete",
	{
		version: "1.12.1",
		defaultElement: "<input>",
		options:
		{
			appendTo: null,
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position:
			{
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		requestIndex: 0,
		pending: 0,
		_create: function ()
		{
			var i, s, n, t = this.element[0].nodeName.toLowerCase(),
				e = "textarea" === t,
				o = "input" === t;
			this.isMultiLine = e || !o && this._isContentEditable(this.element), this.valueMethod = this.element[e || o ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element,
			{
				keydown: function (t)
				{
					if (this.element.prop("readOnly")) s = n = i = !0;
					else
					{
						s = n = i = !1;
						var e = x.ui.keyCode;
						switch (t.keyCode)
						{
						case e.PAGE_UP:
							i = !0, this._move("previousPage", t);
							break;
						case e.PAGE_DOWN:
							i = !0, this._move("nextPage", t);
							break;
						case e.UP:
							i = !0, this._keyEvent("previous", t);
							break;
						case e.DOWN:
							i = !0, this._keyEvent("next", t);
							break;
						case e.ENTER:
							this.menu.active && (i = !0, t.preventDefault(), this.menu.select(t));
							break;
						case e.TAB:
							this.menu.active && this.menu.select(t);
							break;
						case e.ESCAPE:
							this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(t), t.preventDefault());
							break;
						default:
							s = !0, this._searchTimeout(t)
						}
					}
				},
				keypress: function (t)
				{
					if (i) return i = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || t.preventDefault());
					if (!s)
					{
						var e = x.ui.keyCode;
						switch (t.keyCode)
						{
						case e.PAGE_UP:
							this._move("previousPage", t);
							break;
						case e.PAGE_DOWN:
							this._move("nextPage", t);
							break;
						case e.UP:
							this._keyEvent("previous", t);
							break;
						case e.DOWN:
							this._keyEvent("next", t)
						}
					}
				},
				input: function (t)
				{
					if (n) return n = !1, void t.preventDefault();
					this._searchTimeout(t)
				},
				focus: function ()
				{
					this.selectedItem = null, this.previous = this._value()
				},
				blur: function (t)
				{
					this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), this._change(t))
				}
			}), this._initSource(), this.menu = x("<ul>").appendTo(this._appendTo()).menu(
			{
				role: null
			}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element,
			{
				mousedown: function (t)
				{
					t.preventDefault(), this.cancelBlur = !0, this._delay(function ()
					{
						delete this.cancelBlur, this.element[0] !== x.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
					})
				},
				menufocus: function (t, e)
				{
					var i, s;
					if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function ()
					{
						x(t.target).trigger(t.originalEvent)
					});
					s = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t,
					{
						item: s
					}) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value), (i = e.item.attr("aria-label") || s.value) && x.trim(i).length && (this.liveRegion.children().hide(), x("<div>").text(i).appendTo(this.liveRegion))
				},
				menuselect: function (t, e)
				{
					var i = e.item.data("ui-autocomplete-item"),
						s = this.previous;
					this.element[0] !== x.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function ()
					{
						this.previous = s, this.selectedItem = i
					})), !1 !== this._trigger("select", t,
					{
						item: i
					}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
				}
			}), this.liveRegion = x("<div>",
			{
				role: "status",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window,
			{
				beforeunload: function ()
				{
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function ()
		{
			clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
		},
		_setOption: function (t, e)
		{
			this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
		},
		_isEventTargetInWidget: function (t)
		{
			var e = this.menu.element[0];
			return t.target === this.element[0] || t.target === e || x.contains(e, t.target)
		},
		_closeOnClickOutside: function (t)
		{
			this._isEventTargetInWidget(t) || this.close()
		},
		_appendTo: function ()
		{
			var t = this.options.appendTo;
			return (t = t && (t.jquery || t.nodeType ? x(t) : this.document.find(t).eq(0))) && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
		},
		_initSource: function ()
		{
			var i, s, n = this;
			x.isArray(this.options.source) ? (i = this.options.source, this.source = function (t, e)
			{
				e(x.ui.autocomplete.filter(i, t.term))
			}) : "string" == typeof this.options.source ? (s = this.options.source, this.source = function (t, e)
			{
				n.xhr && n.xhr.abort(), n.xhr = x.ajax(
				{
					url: s,
					data: t,
					dataType: "json",
					success: function (t)
					{
						e(t)
					},
					error: function ()
					{
						e([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function (s)
		{
			clearTimeout(this.searching), this.searching = this._delay(function ()
			{
				var t = this.term === this._value(),
					e = this.menu.element.is(":visible"),
					i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
				t && (!t || e || i) || (this.selectedItem = null, this.search(null, s))
			}, this.options.delay)
		},
		search: function (t, e)
		{
			return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
		},
		_search: function (t)
		{
			this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source(
			{
				term: t
			}, this._response())
		},
		_response: function ()
		{
			var e = ++this.requestIndex;
			return x.proxy(function (t)
			{
				e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
			}, this)
		},
		__response: function (t)
		{
			t = t && this._normalize(t), this._trigger("response", null,
			{
				content: t
			}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
		},
		close: function (t)
		{
			this.cancelSearch = !0, this._close(t)
		},
		_close: function (t)
		{
			this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
		},
		_change: function (t)
		{
			this.previous !== this._value() && this._trigger("change", t,
			{
				item: this.selectedItem
			})
		},
		_normalize: function (t)
		{
			return t.length && t[0].label && t[0].value ? t : x.map(t, function (t)
			{
				return "string" == typeof t ?
				{
					label: t,
					value: t
				} : x.extend(
				{}, t,
				{
					label: t.label || t.value,
					value: t.value || t.label
				})
			})
		},
		_suggest: function (t)
		{
			var e = this.menu.element.empty();
			this._renderMenu(e, t), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), e.position(x.extend(
			{
				of: this.element
			}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document,
			{
				mousedown: "_closeOnClickOutside"
			})
		},
		_resizeMenu: function ()
		{
			var t = this.menu.element;
			t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function (i, t)
		{
			var s = this;
			x.each(t, function (t, e)
			{
				s._renderItemData(i, e)
			})
		},
		_renderItemData: function (t, e)
		{
			return this._renderItem(t, e).data("ui-autocomplete-item", e)
		},
		_renderItem: function (t, e)
		{
			return x("<li>").append(x("<div>").text(e.label)).appendTo(t)
		},
		_move: function (t, e)
		{
			if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e);
			this.search(null, e)
		},
		widget: function ()
		{
			return this.menu.element
		},
		_value: function ()
		{
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function (t, e)
		{
			this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
		},
		_isContentEditable: function (t)
		{
			if (!t.length) return !1;
			var e = t.prop("contentEditable");
			return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
		}
	}), x.extend(x.ui.autocomplete,
	{
		escapeRegex: function (t)
		{
			return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function (t, e)
		{
			var i = new RegExp(x.ui.autocomplete.escapeRegex(e), "i");
			return x.grep(t, function (t)
			{
				return i.test(t.label || t.value || t)
			})
		}
	}), x.widget("ui.autocomplete", x.ui.autocomplete,
	{
		options:
		{
			messages:
			{
				noResults: "No search results.",
				results: function (t)
				{
					return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function (t)
		{
			var e;
			this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), x("<div>").text(e).appendTo(this.liveRegion))
		}
	});
	x.ui.autocomplete;
	var G = /ui-corner-([a-z]){2,6}/g;
	x.widget("ui.controlgroup",
	{
		version: "1.12.1",
		defaultElement: "<div>",
		options:
		{
			direction: "horizontal",
			disabled: null,
			onlyVisible: !0,
			items:
			{
				button: "input[type=button], input[type=submit], input[type=reset], button, a",
				controlgroupLabel: ".ui-controlgroup-label",
				checkboxradio: "input[type='checkbox'], input[type='radio']",
				selectmenu: "select",
				spinner: ".ui-spinner-input"
			}
		},
		_create: function ()
		{
			this._enhance()
		},
		_enhance: function ()
		{
			this.element.attr("role", "toolbar"), this.refresh()
		},
		_destroy: function ()
		{
			this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
		},
		_initWidgets: function ()
		{
			var a = this,
				r = [];
			x.each(this.options.items, function (n, t)
			{
				var e, o = {};
				if (t) return "controlgroupLabel" === n ? ((e = a.element.find(t)).each(function ()
				{
					var t = x(this);
					t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
				}), a._addClass(e, null, "ui-widget ui-widget-content ui-state-default"), void(r = r.concat(e.get()))) : void(x.fn[n] && (o = a["_" + n + "Options"] ? a["_" + n + "Options"]("middle") :
				{
					classes:
					{}
				}, a.element.find(t).each(function ()
				{
					var t, e = x(this),
						i = e[n]("instance"),
						s = x.widget.extend(
						{}, o);
					"button" === n && e.parent(".ui-spinner").length || ((i = i || e[n]()[n]("instance")) && (s.classes = a._resolveClassesValues(s.classes, i)), e[n](s), t = e[n]("widget"), x.data(t[0], "ui-controlgroup-data", i || e[n]("instance")), r.push(t[0]))
				})))
			}), this.childWidgets = x(x.unique(r)), this._addClass(this.childWidgets, "ui-controlgroup-item")
		},
		_callChildMethod: function (e)
		{
			this.childWidgets.each(function ()
			{
				var t = x(this).data("ui-controlgroup-data");
				t && t[e] && t[e]()
			})
		},
		_updateCornerClass: function (t, e)
		{
			var i = this._buildSimpleOptions(e, "label").classes.label;
			this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
		},
		_buildSimpleOptions: function (t, e)
		{
			var i = "vertical" === this.options.direction,
				s = {
					classes:
					{}
				};
			return s.classes[e] = {
				middle: "",
				first: "ui-corner-" + (i ? "top" : "left"),
				last: "ui-corner-" + (i ? "bottom" : "right"),
				only: "ui-corner-all"
			} [t], s
		},
		_spinnerOptions: function (t)
		{
			var e = this._buildSimpleOptions(t, "ui-spinner");
			return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
		},
		_buttonOptions: function (t)
		{
			return this._buildSimpleOptions(t, "ui-button")
		},
		_checkboxradioOptions: function (t)
		{
			return this._buildSimpleOptions(t, "ui-checkboxradio-label")
		},
		_selectmenuOptions: function (t)
		{
			var e = "vertical" === this.options.direction;
			return {
				width: e && "auto",
				classes:
				{
					middle:
					{
						"ui-selectmenu-button-open": "",
						"ui-selectmenu-button-closed": ""
					},
					first:
					{
						"ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
						"ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
					},
					last:
					{
						"ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
						"ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
					},
					only:
					{
						"ui-selectmenu-button-open": "ui-corner-top",
						"ui-selectmenu-button-closed": "ui-corner-all"
					}
				} [t]
			}
		},
		_resolveClassesValues: function (i, s)
		{
			var n = {};
			return x.each(i, function (t)
			{
				var e = s.options.classes[t] || "",
					e = x.trim(e.replace(G, ""));
				n[t] = (e + " " + i[t]).replace(/\s+/g, " ")
			}), n
		},
		_setOption: function (t, e)
		{
			"direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable")
		},
		refresh: function ()
		{
			var n, o = this;
			this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), n = this.childWidgets, this.options.onlyVisible && (n = n.filter(":visible")), n.length && (x.each(["first", "last"], function (t, e)
			{
				var i, s = n[e]().data("ui-controlgroup-data");
				s && o["_" + s.widgetName + "Options"] ? ((i = o["_" + s.widgetName + "Options"](1 === n.length ? "only" : e)).classes = o._resolveClassesValues(i.classes, s), s.element[s.widgetName](i)) : o._updateCornerClass(n[e](), e)
			}), this._callChildMethod("refresh"))
		}
	});
	x.widget("ui.checkboxradio", [x.ui.formResetMixin,
	{
		version: "1.12.1",
		options:
		{
			disabled: null,
			label: null,
			icon: !0,
			classes:
			{
				"ui-checkboxradio-label": "ui-corner-all",
				"ui-checkboxradio-icon": "ui-corner-all"
			}
		},
		_getCreateOptions: function ()
		{
			var t, e, i = this,
				s = this._super() ||
				{};
			return this._readType(), e = this.element.labels(), this.label = x(e[e.length - 1]), this.label.length || x.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function ()
			{
				i.originalLabel += 3 === this.nodeType ? x(this).text() : this.outerHTML
			}), this.originalLabel && (s.label = this.originalLabel), null != (t = this.element[0].disabled) && (s.disabled = t), s
		},
		_create: function ()
		{
			var t = this.element[0].checked;
			this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on(
			{
				change: "_toggleClasses",
				focus: function ()
				{
					this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
				},
				blur: function ()
				{
					this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
				}
			})
		},
		_readType: function ()
		{
			var t = this.element[0].nodeName.toLowerCase();
			this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || x.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
		},
		_enhance: function ()
		{
			this._updateIcon(this.element[0].checked)
		},
		widget: function ()
		{
			return this.label
		},
		_getRadioGroup: function ()
		{
			var t = this.element[0].name,
				e = "input[name='" + x.ui.escapeSelector(t) + "']";
			return t ? (this.form.length ? x(this.form[0].elements).filter(e) : x(e).filter(function ()
			{
				return 0 === x(this).form().length
			})).not(this.element) : x([])
		},
		_toggleClasses: function ()
		{
			var t = this.element[0].checked;
			this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), "radio" === this.type && this._getRadioGroup().each(function ()
			{
				var t = x(this).checkboxradio("instance");
				t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
			})
		},
		_destroy: function ()
		{
			this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
		},
		_setOption: function (t, e)
		{
			if ("label" !== t || e)
			{
				if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e);
				this.refresh()
			}
		},
		_updateIcon: function (t)
		{
			var e = "ui-icon ui-icon-background ";
			this.options.icon ? (this.icon || (this.icon = x("<span>"), this.iconSpace = x("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", e), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
		},
		_updateLabel: function ()
		{
			var t = this.label.contents().not(this.element[0]);
			this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
		},
		refresh: function ()
		{
			var t = this.element[0].checked,
				e = this.element[0].disabled;
			this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions(
			{
				disabled: e
			})
		}
	}]);
	var Q;
	x.ui.checkboxradio;
	x.widget("ui.button",
	{
		version: "1.12.1",
		defaultElement: "<button>",
		options:
		{
			classes:
			{
				"ui-button": "ui-corner-all"
			},
			disabled: null,
			icon: null,
			iconPosition: "beginning",
			label: null,
			showLabel: !0
		},
		_getCreateOptions: function ()
		{
			var t, e = this._super() ||
			{};
			return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
		},
		_create: function ()
		{
			!this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on(
			{
				keyup: function (t)
				{
					t.keyCode === x.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
				}
			})
		},
		_enhance: function ()
		{
			this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
		},
		_updateTooltip: function ()
		{
			this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
		},
		_updateIcon: function (t, e)
		{
			var i = "iconPosition" !== t,
				s = i ? this.options.iconPosition : e,
				n = "top" === s || "bottom" === s;
			this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = x("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), i && this._addClass(this.icon, null, e), this._attachIcon(s), n ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = x("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
		},
		_destroy: function ()
		{
			this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
		},
		_attachIconSpace: function (t)
		{
			this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
		},
		_attachIcon: function (t)
		{
			this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
		},
		_setOptions: function (t)
		{
			var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
				i = void 0 === t.icon ? this.options.icon : t.icon;
			e || i || (t.showLabel = !0), this._super(t)
		},
		_setOption: function (t, e)
		{
			"icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), (this.element[0].disabled = e) && this.element.blur())
		},
		refresh: function ()
		{
			var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
			t !== this.options.disabled && this._setOptions(
			{
				disabled: t
			}), this._updateTooltip()
		}
	}), !1 !== x.uiBackCompat && (x.widget("ui.button", x.ui.button,
	{
		options:
		{
			text: !0,
			icons:
			{
				primary: null,
				secondary: null
			}
		},
		_create: function ()
		{
			this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
		},
		_setOption: function (t, e)
		{
			"text" !== t ? ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", e)
		}
	}), x.fn.button = (Q = x.fn.button, function ()
	{
		return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? Q.apply(this, arguments) : (x.ui.checkboxradio || x.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio(
		{
			icon: !1
		}) : this.checkboxradio.apply(this, arguments))
	}), x.fn.buttonset = function ()
	{
		return x.ui.controlgroup || x.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
			button: arguments[0].items
		}), this.controlgroup.apply(this, arguments))
	});
	var J;
	x.ui.button;

	function Z()
	{
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions:
			{},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, x.extend(this._defaults, this.regional[""]), this.regional.en = x.extend(!0,
		{}, this.regional[""]), this.regional["en-US"] = x.extend(!0,
		{}, this.regional.en), this.dpDiv = tt(x("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}

	function tt(t)
	{
		var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return t.on("mouseout", e, function ()
		{
			x(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && x(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && x(this).removeClass("ui-datepicker-next-hover")
		}).on("mouseover", e, et)
	}

	function et()
	{
		x.datepicker._isDisabledDatepicker(J.inline ? J.dpDiv.parent()[0] : J.input[0]) || (x(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), x(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && x(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && x(this).addClass("ui-datepicker-next-hover"))
	}

	function it(t, e)
	{
		for (var i in x.extend(t, e), e) null == e[i] && (t[i] = e[i]);
		return t
	}
	x.extend(x.ui,
	{
		datepicker:
		{
			version: "1.12.1"
		}
	}), x.extend(Z.prototype,
	{
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function ()
		{
			return this.dpDiv
		},
		setDefaults: function (t)
		{
			return it(this._defaults, t ||
			{}), this
		},
		_attachDatepicker: function (t, e)
		{
			var i, s = t.nodeName.toLowerCase(),
				n = "div" === s || "span" === s;
			t.id || (this.uuid += 1, t.id = "dp" + this.uuid), (i = this._newInst(x(t), n)).settings = x.extend(
			{}, e ||
			{}), "input" === s ? this._connectDatepicker(t, i) : n && this._inlineDatepicker(t, i)
		},
		_newInst: function (t, e)
		{
			return {
				id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
				input: t,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: e,
				dpDiv: e ? tt(x("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function (t, e)
		{
			var i = x(t);
			e.append = x([]), e.trigger = x([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(e), x.data(t, "datepicker", e), e.settings.disabled && this._disableDatepicker(t))
		},
		_attachments: function (t, e)
		{
			var i, s, n, o = this._get(e, "appendText"),
				a = this._get(e, "isRTL");
			e.append && e.append.remove(), o && (e.append = x("<span class='" + this._appendClass + "'>" + o + "</span>"), t[a ? "before" : "after"](e.append)), t.off("focus", this._showDatepicker), e.trigger && e.trigger.remove(), "focus" !== (i = this._get(e, "showOn")) && "both" !== i || t.on("focus", this._showDatepicker), "button" !== i && "both" !== i || (s = this._get(e, "buttonText"), n = this._get(e, "buttonImage"), e.trigger = x(this._get(e, "buttonImageOnly") ? x("<img/>").addClass(this._triggerClass).attr(
			{
				src: n,
				alt: s,
				title: s
			}) : x("<button type='button'></button>").addClass(this._triggerClass).html(n ? x("<img/>").attr(
			{
				src: n,
				alt: s,
				title: s
			}) : s)), t[a ? "before" : "after"](e.trigger), e.trigger.on("click", function ()
			{
				return x.datepicker._datepickerShowing && x.datepicker._lastInput === t[0] ? x.datepicker._hideDatepicker() : (x.datepicker._datepickerShowing && x.datepicker._lastInput !== t[0] && x.datepicker._hideDatepicker(), x.datepicker._showDatepicker(t[0])), !1
			}))
		},
		_autoSize: function (t)
		{
			var e, i, s, n, o, a;
			this._get(t, "autoSize") && !t.inline && (o = new Date(2009, 11, 20), (a = this._get(t, "dateFormat")).match(/[DM]/) && (e = function (t)
			{
				for (n = s = i = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n);
				return s
			}, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length))
		},
		_inlineDatepicker: function (t, e)
		{
			var i = x(t);
			i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv), x.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function (t, e, i, s, n)
		{
			var o, a, r, h, l, c = this._dialogInst;
			return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = x("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), x("body").append(this._dialogInput), (c = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, x.data(this._dialogInput[0], "datepicker", c)), it(c.settings, s ||
			{}), e = e && e.constructor === Date ? this._formatDate(c, e) : e, this._dialogInput.val(e), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, this._pos || (a = document.documentElement.clientWidth, r = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [a / 2 - 100 + h, r / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), x.blockUI && x.blockUI(this.dpDiv), x.data(this._dialogInput[0], "datepicker", c), this
		},
		_destroyDatepicker: function (t)
		{
			var e, i = x(t),
				s = x.data(t, "datepicker");
			i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), x.removeData(t, "datepicker"), "input" === e ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== e && "span" !== e || i.removeClass(this.markerClassName).empty(), J === s && (J = null))
		},
		_enableDatepicker: function (e)
		{
			var t, i, s = x(e),
				n = x.data(e, "datepicker");
			s.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !1, n.trigger.filter("button").each(function ()
			{
				this.disabled = !1
			}).end().filter("img").css(
			{
				opacity: "1.0",
				cursor: ""
			})) : "div" !== t && "span" !== t || ((i = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = x.map(this._disabledInputs, function (t)
			{
				return t === e ? null : t
			}))
		},
		_disableDatepicker: function (e)
		{
			var t, i, s = x(e),
				n = x.data(e, "datepicker");
			s.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !0, n.trigger.filter("button").each(function ()
			{
				this.disabled = !0
			}).end().filter("img").css(
			{
				opacity: "0.5",
				cursor: "default"
			})) : "div" !== t && "span" !== t || ((i = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = x.map(this._disabledInputs, function (t)
			{
				return t === e ? null : t
			}), this._disabledInputs[this._disabledInputs.length] = e)
		},
		_isDisabledDatepicker: function (t)
		{
			if (!t) return !1;
			for (var e = 0; e < this._disabledInputs.length; e++)
				if (this._disabledInputs[e] === t) return !0;
			return !1
		},
		_getInst: function (t)
		{
			try
			{
				return x.data(t, "datepicker")
			}
			catch (t)
			{
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function (t, e, i)
		{
			var s, n, o, a, r = this._getInst(t);
			if (2 === arguments.length && "string" == typeof e) return "defaults" === e ? x.extend(
			{}, x.datepicker._defaults) : r ? "all" === e ? x.extend(
			{}, r.settings) : this._get(r, e) : null;
			s = e ||
			{}, "string" == typeof e && ((s = {})[e] = i), r && (this._curInst === r && this._hideDatepicker(), n = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(r, "min"), a = this._getMinMaxDate(r, "max"), it(r.settings, s), null !== o && void 0 !== s.dateFormat && void 0 === s.minDate && (r.settings.minDate = this._formatDate(r, o)), null !== a && void 0 !== s.dateFormat && void 0 === s.maxDate && (r.settings.maxDate = this._formatDate(r, a)), "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(x(t), r), this._autoSize(r), this._setDate(r, n), this._updateAlternate(r), this._updateDatepicker(r))
		},
		_changeDatepicker: function (t, e, i)
		{
			this._optionDatepicker(t, e, i)
		},
		_refreshDatepicker: function (t)
		{
			var e = this._getInst(t);
			e && this._updateDatepicker(e)
		},
		_setDateDatepicker: function (t, e)
		{
			var i = this._getInst(t);
			i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
		},
		_getDateDatepicker: function (t, e)
		{
			var i = this._getInst(t);
			return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
		},
		_doKeyDown: function (t)
		{
			var e, i, s, n = x.datepicker._getInst(t.target),
				o = !0,
				a = n.dpDiv.is(".ui-datepicker-rtl");
			if (n._keyEvent = !0, x.datepicker._datepickerShowing) switch (t.keyCode)
			{
			case 9:
				x.datepicker._hideDatepicker(), o = !1;
				break;
			case 13:
				return (s = x("td." + x.datepicker._dayOverClass + ":not(." + x.datepicker._currentClass + ")", n.dpDiv))[0] && x.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), (e = x.datepicker._get(n, "onSelect")) ? (i = x.datepicker._formatDate(n), e.apply(n.input ? n.input[0] : null, [i, n])) : x.datepicker._hideDatepicker(), !1;
			case 27:
				x.datepicker._hideDatepicker();
				break;
			case 33:
				x.datepicker._adjustDate(t.target, t.ctrlKey ? -x.datepicker._get(n, "stepBigMonths") : -x.datepicker._get(n, "stepMonths"), "M");
				break;
			case 34:
				x.datepicker._adjustDate(t.target, t.ctrlKey ? +x.datepicker._get(n, "stepBigMonths") : +x.datepicker._get(n, "stepMonths"), "M");
				break;
			case 35:
				(t.ctrlKey || t.metaKey) && x.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
				break;
			case 36:
				(t.ctrlKey || t.metaKey) && x.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
				break;
			case 37:
				(t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, a ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && x.datepicker._adjustDate(t.target, t.ctrlKey ? -x.datepicker._get(n, "stepBigMonths") : -x.datepicker._get(n, "stepMonths"), "M");
				break;
			case 38:
				(t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
				break;
			case 39:
				(t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, a ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && x.datepicker._adjustDate(t.target, t.ctrlKey ? +x.datepicker._get(n, "stepBigMonths") : +x.datepicker._get(n, "stepMonths"), "M");
				break;
			case 40:
				(t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
				break;
			default:
				o = !1
			}
			else 36 === t.keyCode && t.ctrlKey ? x.datepicker._showDatepicker(this) : o = !1;
			o && (t.preventDefault(), t.stopPropagation())
		},
		_doKeyPress: function (t)
		{
			var e, i, s = x.datepicker._getInst(t.target);
			if (x.datepicker._get(s, "constrainInput")) return e = x.datepicker._possibleChars(x.datepicker._get(s, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i)
		},
		_doKeyUp: function (t)
		{
			var e = x.datepicker._getInst(t.target);
			if (e.input.val() !== e.lastVal) try
			{
				x.datepicker.parseDate(x.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, x.datepicker._getFormatConfig(e)) && (x.datepicker._setDateFromField(e), x.datepicker._updateAlternate(e), x.datepicker._updateDatepicker(e))
			}
			catch (t)
			{}
			return !0
		},
		_showDatepicker: function (t)
		{
			var e, i, s, n, o, a, r;
			"input" !== (t = t.target || t).nodeName.toLowerCase() && (t = x("input", t.parentNode)[0]), x.datepicker._isDisabledDatepicker(t) || x.datepicker._lastInput === t || (r = x.datepicker._getInst(t), x.datepicker._curInst && x.datepicker._curInst !== r && (x.datepicker._curInst.dpDiv.stop(!0, !0), r && x.datepicker._datepickerShowing && x.datepicker._hideDatepicker(x.datepicker._curInst.input[0])), !1 !== (i = (e = x.datepicker._get(r, "beforeShow")) ? e.apply(t, [t, r]) :
			{}) && (it(r.settings, i), r.lastVal = null, x.datepicker._lastInput = t, x.datepicker._setDateFromField(r), x.datepicker._inDialog && (t.value = ""), x.datepicker._pos || (x.datepicker._pos = x.datepicker._findPos(t), x.datepicker._pos[1] += t.offsetHeight), s = !1, x(t).parents().each(function ()
			{
				return !(s |= "fixed" === x(this).css("position"))
			}), n = {
				left: x.datepicker._pos[0],
				top: x.datepicker._pos[1]
			}, x.datepicker._pos = null, r.dpDiv.empty(), r.dpDiv.css(
			{
				position: "absolute",
				display: "block",
				top: "-1000px"
			}), x.datepicker._updateDatepicker(r), n = x.datepicker._checkOffset(r, n, s), r.dpDiv.css(
			{
				position: x.datepicker._inDialog && x.blockUI ? "static" : s ? "fixed" : "absolute",
				display: "none",
				left: n.left + "px",
				top: n.top + "px"
			}), r.inline || (o = x.datepicker._get(r, "showAnim"), a = x.datepicker._get(r, "duration"), r.dpDiv.css("z-index", function (t)
			{
				for (var e, i; t.length && t[0] !== document;)
				{
					if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
					t = t.parent()
				}
				return 0
			}(x(t)) + 1), x.datepicker._datepickerShowing = !0, x.effects && x.effects.effect[o] ? r.dpDiv.show(o, x.datepicker._get(r, "showOptions"), a) : r.dpDiv[o || "show"](o ? a : null), x.datepicker._shouldFocusInput(r) && r.input.trigger("focus"), x.datepicker._curInst = r)))
		},
		_updateDatepicker: function (t)
		{
			this.maxRows = 4, (J = t).dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
			var e, i = this._getNumberOfMonths(t),
				s = i[1],
				n = t.dpDiv.find("." + this._dayOverClass + " a");
			0 < n.length && et.apply(n.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < s && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === x.datepicker._curInst && x.datepicker._datepickerShowing && x.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (e = t.yearshtml, setTimeout(function ()
			{
				e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), e = t.yearshtml = null
			}, 0))
		},
		_shouldFocusInput: function (t)
		{
			return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
		},
		_checkOffset: function (t, e, i)
		{
			var s = t.dpDiv.outerWidth(),
				n = t.dpDiv.outerHeight(),
				o = t.input ? t.input.outerWidth() : 0,
				a = t.input ? t.input.outerHeight() : 0,
				r = document.documentElement.clientWidth + (i ? 0 : x(document).scrollLeft()),
				h = document.documentElement.clientHeight + (i ? 0 : x(document).scrollTop());
			return e.left -= this._get(t, "isRTL") ? s - o : 0, e.left -= i && e.left === t.input.offset().left ? x(document).scrollLeft() : 0, e.top -= i && e.top === t.input.offset().top + a ? x(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + s > r && s < r ? Math.abs(e.left + s - r) : 0), e.top -= Math.min(e.top, e.top + n > h && n < h ? Math.abs(n + a) : 0), e
		},
		_findPos: function (t)
		{
			for (var e, i = this._getInst(t), s = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || x.expr.filters.hidden(t));) t = t[s ? "previousSibling" : "nextSibling"];
			return [(e = x(t).offset()).left, e.top]
		},
		_hideDatepicker: function (t)
		{
			var e, i, s, n, o = this._curInst;
			!o || t && o !== x.data(t, "datepicker") || this._datepickerShowing && (e = this._get(o, "showAnim"), i = this._get(o, "duration"), s = function ()
			{
				x.datepicker._tidyDialog(o)
			}, x.effects && (x.effects.effect[e] || x.effects[e]) ? o.dpDiv.hide(e, x.datepicker._get(o, "showOptions"), i, s) : o.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, s), e || s(), this._datepickerShowing = !1, (n = this._get(o, "onClose")) && n.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css(
			{
				position: "absolute",
				left: "0",
				top: "-100px"
			}), x.blockUI && (x.unblockUI(), x("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function (t)
		{
			t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
		},
		_checkExternalClick: function (t)
		{
			var e, i;
			x.datepicker._curInst && (e = x(t.target), i = x.datepicker._getInst(e[0]), (e[0].id === x.datepicker._mainDivId || 0 !== e.parents("#" + x.datepicker._mainDivId).length || e.hasClass(x.datepicker.markerClassName) || e.closest("." + x.datepicker._triggerClass).length || !x.datepicker._datepickerShowing || x.datepicker._inDialog && x.blockUI) && (!e.hasClass(x.datepicker.markerClassName) || x.datepicker._curInst === i) || x.datepicker._hideDatepicker())
		},
		_adjustDate: function (t, e, i)
		{
			var s = x(t),
				n = this._getInst(s[0]);
			this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, e + ("M" === i ? this._get(n, "showCurrentAtPos") : 0), i), this._updateDatepicker(n))
		},
		_gotoToday: function (t)
		{
			var e, i = x(t),
				s = this._getInst(i[0]);
			this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (e = new Date, s.selectedDay = e.getDate(), s.drawMonth = s.selectedMonth = e.getMonth(), s.drawYear = s.selectedYear = e.getFullYear()), this._notifyChange(s), this._adjustDate(i)
		},
		_selectMonthYear: function (t, e, i)
		{
			var s = x(t),
				n = this._getInst(s[0]);
			n["selected" + ("M" === i ? "Month" : "Year")] = n["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
		},
		_selectDay: function (t, e, i, s)
		{
			var n, o = x(t);
			x(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || ((n = this._getInst(o[0])).selectedDay = n.currentDay = x("a", s).html(), n.selectedMonth = n.currentMonth = e, n.selectedYear = n.currentYear = i, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
		},
		_clearDate: function (t)
		{
			var e = x(t);
			this._selectDate(e, "")
		},
		_selectDate: function (t, e)
		{
			var i, s = x(t),
				n = this._getInst(s[0]);
			e = null != e ? e : this._formatDate(n), n.input && n.input.val(e), this._updateAlternate(n), (i = this._get(n, "onSelect")) ? i.apply(n.input ? n.input[0] : null, [e, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.trigger("focus"), this._lastInput = null)
		},
		_updateAlternate: function (t)
		{
			var e, i, s, n = this._get(t, "altField");
			n && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), s = this.formatDate(e, i, this._getFormatConfig(t)), x(n).val(s))
		},
		noWeekends: function (t)
		{
			var e = t.getDay();
			return [0 < e && e < 6, ""]
		},
		iso8601Week: function (t)
		{
			var e, i = new Date(t.getTime());
			return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
		},
		parseDate: function (i, o, t)
		{
			if (null == i || null == o) throw "Invalid arguments";
			if ("" === (o = "object" == typeof o ? o.toString() : o + "")) return null;

			function a(t)
			{
				var e = k + 1 < i.length && i.charAt(k + 1) === t;
				return e && k++, e
			}

			function e(t)
			{
				var e = a(t),
					i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
					s = new RegExp("^\\d{" + ("y" === t ? i : 1) + "," + i + "}"),
					n = o.substring(c).match(s);
				if (!n) throw "Missing number at position " + c;
				return c += n[0].length, parseInt(n[0], 10)
			}

			function s(t, e, i)
			{
				var s = -1,
					n = x.map(a(t) ? i : e, function (t, e)
					{
						return [
							[e, t]
						]
					}).sort(function (t, e)
					{
						return -(t[1].length - e[1].length)
					});
				if (x.each(n, function (t, e)
					{
						var i = e[1];
						if (o.substr(c, i.length).toLowerCase() === i.toLowerCase()) return s = e[0], c += i.length, !1
					}), -1 !== s) return s + 1;
				throw "Unknown name at position " + c
			}

			function n()
			{
				if (o.charAt(c) !== i.charAt(k)) throw "Unexpected literal at position " + c;
				c++
			}
			for (var r, h, l, c = 0, u = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10), p = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort, f = (t ? t.dayNames : null) || this._defaults.dayNames, g = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort, m = (t ? t.monthNames : null) || this._defaults.monthNames, _ = -1, v = -1, b = -1, y = -1, w = !1, k = 0; k < i.length; k++)
				if (w) "'" !== i.charAt(k) || a("'") ? n() : w = !1;
				else switch (i.charAt(k))
				{
				case "d":
					b = e("d");
					break;
				case "D":
					s("D", p, f);
					break;
				case "o":
					y = e("o");
					break;
				case "m":
					v = e("m");
					break;
				case "M":
					v = s("M", g, m);
					break;
				case "y":
					_ = e("y");
					break;
				case "@":
					_ = (l = new Date(e("@"))).getFullYear(), v = l.getMonth() + 1, b = l.getDate();
					break;
				case "!":
					_ = (l = new Date((e("!") - this._ticksTo1970) / 1e4)).getFullYear(), v = l.getMonth() + 1, b = l.getDate();
					break;
				case "'":
					a("'") ? n() : w = !0;
					break;
				default:
					n()
				}
			if (c < o.length && (h = o.substr(c), !/^\s+/.test(h))) throw "Extra/unparsed characters found in date: " + h;
			if (-1 === _ ? _ = (new Date).getFullYear() : _ < 100 && (_ += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (_ <= d ? 0 : -100)), -1 < y)
				for (v = 1, b = y;;)
				{
					if (b <= (r = this._getDaysInMonth(_, v - 1))) break;
					v++, b -= r
				}
			if ((l = this._daylightSavingAdjust(new Date(_, v - 1, b))).getFullYear() !== _ || l.getMonth() + 1 !== v || l.getDate() !== b) throw "Invalid date";
			return l
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
		formatDate: function (i, t, e)
		{
			if (!t) return "";

			function n(t)
			{
				var e = a + 1 < i.length && i.charAt(a + 1) === t;
				return e && a++, e
			}

			function s(t, e, i)
			{
				var s = "" + e;
				if (n(t))
					for (; s.length < i;) s = "0" + s;
				return s
			}

			function o(t, e, i, s)
			{
				return n(t) ? s[e] : i[e]
			}
			var a, r = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
				h = (e ? e.dayNames : null) || this._defaults.dayNames,
				l = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
				c = (e ? e.monthNames : null) || this._defaults.monthNames,
				u = "",
				d = !1;
			if (t)
				for (a = 0; a < i.length; a++)
					if (d) "'" !== i.charAt(a) || n("'") ? u += i.charAt(a) : d = !1;
					else switch (i.charAt(a))
					{
					case "d":
						u += s("d", t.getDate(), 2);
						break;
					case "D":
						u += o("D", t.getDay(), r, h);
						break;
					case "o":
						u += s("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
						break;
					case "m":
						u += s("m", t.getMonth() + 1, 2);
						break;
					case "M":
						u += o("M", t.getMonth(), l, c);
						break;
					case "y":
						u += n("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
						break;
					case "@":
						u += t.getTime();
						break;
					case "!":
						u += 1e4 * t.getTime() + this._ticksTo1970;
						break;
					case "'":
						n("'") ? u += "'" : d = !0;
						break;
					default:
						u += i.charAt(a)
					}
			return u
		},
		_possibleChars: function (i)
		{
			function t(t)
			{
				var e = n + 1 < i.length && i.charAt(n + 1) === t;
				return e && n++, e
			}
			for (var e = "", s = !1, n = 0; n < i.length; n++)
				if (s) "'" !== i.charAt(n) || t("'") ? e += i.charAt(n) : s = !1;
				else switch (i.charAt(n))
				{
				case "d":
				case "m":
				case "y":
				case "@":
					e += "0123456789";
					break;
				case "D":
				case "M":
					return null;
				case "'":
					t("'") ? e += "'" : s = !0;
					break;
				default:
					e += i.charAt(n)
				}
			return e
		},
		_get: function (t, e)
		{
			return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
		},
		_setDateFromField: function (t, e)
		{
			if (t.input.val() !== t.lastVal)
			{
				var i = this._get(t, "dateFormat"),
					s = t.lastVal = t.input ? t.input.val() : null,
					n = this._getDefaultDate(t),
					o = n,
					a = this._getFormatConfig(t);
				try
				{
					o = this.parseDate(i, s, a) || n
				}
				catch (t)
				{
					s = e ? "" : s
				}
				t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
			}
		},
		_getDefaultDate: function (t)
		{
			return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
		},
		_determineDate: function (r, t, e)
		{
			var i, s, n = null == t || "" === t ? e : "string" == typeof t ? function (t)
			{
				try
				{
					return x.datepicker.parseDate(x.datepicker._get(r, "dateFormat"), t, x.datepicker._getFormatConfig(r))
				}
				catch (t)
				{}
				for (var e = (t.toLowerCase().match(/^c/) ? x.datepicker._getDate(r) : null) || new Date, i = e.getFullYear(), s = e.getMonth(), n = e.getDate(), o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, a = o.exec(t); a;)
				{
					switch (a[2] || "d")
					{
					case "d":
					case "D":
						n += parseInt(a[1], 10);
						break;
					case "w":
					case "W":
						n += 7 * parseInt(a[1], 10);
						break;
					case "m":
					case "M":
						s += parseInt(a[1], 10), n = Math.min(n, x.datepicker._getDaysInMonth(i, s));
						break;
					case "y":
					case "Y":
						i += parseInt(a[1], 10), n = Math.min(n, x.datepicker._getDaysInMonth(i, s))
					}
					a = o.exec(t)
				}
				return new Date(i, s, n)
			}(t) : "number" == typeof t ? isNaN(t) ? e : (i = t, (s = new Date).setDate(s.getDate() + i), s) : new Date(t.getTime());
			return (n = n && "Invalid Date" === n.toString() ? e : n) && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
		},
		_daylightSavingAdjust: function (t)
		{
			return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t) : null
		},
		_setDate: function (t, e, i)
		{
			var s = !e,
				n = t.selectedMonth,
				o = t.selectedYear,
				a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
			t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
		},
		_getDate: function (t)
		{
			return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
		},
		_attachHandlers: function (t)
		{
			var e = this._get(t, "stepMonths"),
				i = "#" + t.id.replace(/\\\\/g, "\\");
			t.dpDiv.find("[data-handler]").map(function ()
			{
				var t = {
					prev: function ()
					{
						x.datepicker._adjustDate(i, -e, "M")
					},
					next: function ()
					{
						x.datepicker._adjustDate(i, +e, "M")
					},
					hide: function ()
					{
						x.datepicker._hideDatepicker()
					},
					today: function ()
					{
						x.datepicker._gotoToday(i)
					},
					selectDay: function ()
					{
						return x.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function ()
					{
						return x.datepicker._selectMonthYear(i, this, "M"), !1
					},
					selectYear: function ()
					{
						return x.datepicker._selectMonthYear(i, this, "Y"), !1
					}
				};
				x(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function (t)
		{
			var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date,
				B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
				Y = this._get(t, "isRTL"),
				j = this._get(t, "showButtonPanel"),
				q = this._get(t, "hideIfNoPrevNext"),
				K = this._get(t, "navigationAsDateFormat"),
				U = this._getNumberOfMonths(t),
				V = this._get(t, "showCurrentAtPos"),
				$ = this._get(t, "stepMonths"),
				X = 1 !== U[0] || 1 !== U[1],
				G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
				Q = this._getMinMaxDate(t, "min"),
				J = this._getMinMaxDate(t, "max"),
				Z = t.drawMonth - V,
				tt = t.drawYear;
			if (Z < 0 && (Z += 12, tt--), J)
				for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && e < Q ? Q : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) --Z < 0 && (Z = 11, tt--);
			for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; k < U[0]; k++)
			{
				for (x = "", this.maxRows = 4, C = 0; C < U[1]; C++)
				{
					if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), I = " ui-corner-all", T = "", X)
					{
						if (T += "<div class='ui-datepicker-group", 1 < U[1]) switch (C)
						{
						case 0:
							T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
							break;
						case U[1] - 1:
							T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
							break;
						default:
							T += " ui-datepicker-group-middle", I = ""
						}
						T += "'>"
					}
					for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, tt, Q, J, 0 < k || 0 < C, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) P += "<th scope='col'" + (5 <= (w + c + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M = (w + c) % 7] + "'>" + p[M] + "</span></th>";
					for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X && this.maxRows > z ? this.maxRows : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(tt, Z, 1 - H)), N = 0; N < O; N++)
					{
						for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; w < 7; w++) E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], L = (F = A.getMonth() !== Z) && !v || !E[0] || Q && A < Q || J && J < A, W += "<td class='" + (5 <= (w + c + 6) % 7 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
						T += W + "</tr>"
					}
					11 < ++Z && (Z = 0, tt++), x += T += "</tbody></table>" + (X ? "</div>" + (0 < U[0] && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
				}
				y += x
			}
			return y += l, t._keyEvent = !1, y
		},
		_generateMonthYearHeader: function (t, e, i, s, n, o, a, r)
		{
			var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
				_ = this._get(t, "changeYear"),
				v = this._get(t, "showMonthAfterYear"),
				b = "<div class='ui-datepicker-title'>",
				y = "";
			if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
			else
			{
				for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!h || c >= s.getMonth()) && (!l || c <= n.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
				y += "</select>"
			}
			if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml)
				if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";
				else
				{
					for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function (t)
						{
							var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
							return isNaN(e) ? d : e
						})(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
					t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
				} return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>"
		},
		_adjustInstDate: function (t, e, i)
		{
			var s = t.selectedYear + ("Y" === i ? e : 0),
				n = t.selectedMonth + ("M" === i ? e : 0),
				o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
				a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
			t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t)
		},
		_restrictMinMax: function (t, e)
		{
			var i = this._getMinMaxDate(t, "min"),
				s = this._getMinMaxDate(t, "max"),
				n = i && e < i ? i : e;
			return s && s < n ? s : n
		},
		_notifyChange: function (t)
		{
			var e = this._get(t, "onChangeMonthYear");
			e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
		},
		_getNumberOfMonths: function (t)
		{
			var e = this._get(t, "numberOfMonths");
			return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
		},
		_getMinMaxDate: function (t, e)
		{
			return this._determineDate(t, this._get(t, e + "Date"), null)
		},
		_getDaysInMonth: function (t, e)
		{
			return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
		},
		_getFirstDayOfMonth: function (t, e)
		{
			return new Date(t, e, 1).getDay()
		},
		_canAdjustMonth: function (t, e, i, s)
		{
			var n = this._getNumberOfMonths(t),
				o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
			return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
		},
		_isInRange: function (t, e)
		{
			var i, s, n = this._getMinMaxDate(t, "min"),
				o = this._getMinMaxDate(t, "max"),
				a = null,
				r = null,
				h = this._get(t, "yearRange");
			return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
		},
		_getFormatConfig: function (t)
		{
			var e = this._get(t, "shortYearCutoff");
			return {
				shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
				dayNamesShort: this._get(t, "dayNamesShort"),
				dayNames: this._get(t, "dayNames"),
				monthNamesShort: this._get(t, "monthNamesShort"),
				monthNames: this._get(t, "monthNames")
			}
		},
		_formatDate: function (t, e, i, s)
		{
			e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
			var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
		}
	}), x.fn.datepicker = function (t)
	{
		if (!this.length) return this;
		x.datepicker.initialized || (x(document).on("mousedown", x.datepicker._checkExternalClick), x.datepicker.initialized = !0), 0 === x("#" + x.datepicker._mainDivId).length && x("body").append(x.datepicker.dpDiv);
		var e = Array.prototype.slice.call(arguments, 1);
		return "string" == typeof t && ("isDisabled" === t || "getDate" === t || "widget" === t) || "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? x.datepicker["_" + t + "Datepicker"].apply(x.datepicker, [this[0]].concat(e)) : this.each(function ()
		{
			"string" == typeof t ? x.datepicker["_" + t + "Datepicker"].apply(x.datepicker, [this].concat(e)) : x.datepicker._attachDatepicker(this, t)
		})
	}, x.datepicker = new Z, x.datepicker.initialized = !1, x.datepicker.uuid = (new Date).getTime(), x.datepicker.version = "1.12.1";
	x.datepicker, x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
	var st = !1;
	x(document).on("mouseup", function ()
	{
		st = !1
	});
	x.widget("ui.mouse",
	{
		version: "1.12.1",
		options:
		{
			cancel: "input, textarea, button, select, option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function ()
		{
			var e = this;
			this.element.on("mousedown." + this.widgetName, function (t)
			{
				return e._mouseDown(t)
			}).on("click." + this.widgetName, function (t)
			{
				if (!0 === x.data(t.target, e.widgetName + ".preventClickEvent")) return x.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1
			}), this.started = !1
		},
		_mouseDestroy: function ()
		{
			this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function (t)
		{
			if (!st)
			{
				this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
				var e = this,
					i = 1 === t.which,
					s = !("string" != typeof this.options.cancel || !t.target.nodeName) && x(t.target).closest(this.options.cancel).length;
				return i && !s && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function ()
				{
					e.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === x.data(t.target, this.widgetName + ".preventClickEvent") && x.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t)
				{
					return e._mouseMove(t)
				}, this._mouseUpDelegate = function (t)
				{
					return e._mouseUp(t)
				}, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), st = !0)) : !0
			}
		},
		_mouseMove: function (t)
		{
			if (this._mouseMoved)
			{
				if (x.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
				if (!t.which)
					if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
					else if (!this.ignoreMissingWhich) return this._mouseUp(t)
			}
			return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
		},
		_mouseUp: function (t)
		{
			this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && x.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, st = !1, t.preventDefault()
		},
		_mouseDistanceMet: function (t)
		{
			return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function ()
		{
			return this.mouseDelayMet
		},
		_mouseStart: function () {},
		_mouseDrag: function () {},
		_mouseStop: function () {},
		_mouseCapture: function ()
		{
			return !0
		}
	}), x.ui.plugin = {
		add: function (t, e, i)
		{
			var s, n = x.ui[t].prototype;
			for (s in i) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([e, i[s]])
		},
		call: function (t, e, i, s)
		{
			var n, o = t.plugins[e];
			if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
				for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
		}
	}, x.ui.safeBlur = function (t)
	{
		t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
	};
	x.widget("ui.draggable", x.ui.mouse,
	{
		version: "1.12.1",
		widgetEventPrefix: "drag",
		options:
		{
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function ()
		{
			"original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
		},
		_setOption: function (t, e)
		{
			this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
		},
		_destroy: function ()
		{
			(this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), this._mouseDestroy())
		},
		_mouseCapture: function (t)
		{
			var e = this.options;
			return !(this.helper || e.disabled || 0 < x(t.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(t), !!this.handle && (this._blurActiveElement(t), this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0))
		},
		_blockFrames: function (t)
		{
			this.iframeBlocks = this.document.find(t).map(function ()
			{
				var t = x(this);
				return x("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
			})
		},
		_unblockFrames: function ()
		{
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_blurActiveElement: function (t)
		{
			var e = x.ui.safeActiveElement(this.document[0]);
			x(t.target).closest(e).length || x.ui.safeBlur(e)
		},
		_mouseStart: function (t)
		{
			var e = this.options;
			return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), x.ui.ddmanager && (x.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function ()
			{
				return "fixed" === x(this).css("position")
			}).length, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), x.ui.ddmanager && !e.dropBehaviour && x.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), x.ui.ddmanager && x.ui.ddmanager.dragStart(this, t), !0)
		},
		_refreshOffsets: function (t)
		{
			this.offset = {
				top: this.positionAbs.top - this.margins.top,
				left: this.positionAbs.left - this.margins.left,
				scroll: !1,
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}, this.offset.click = {
				left: t.pageX - this.offset.left,
				top: t.pageY - this.offset.top
			}
		},
		_mouseDrag: function (t, e)
		{
			if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !e)
			{
				var i = this._uiHash();
				if (!1 === this._trigger("drag", t, i)) return this._mouseUp(new x.Event("mouseup", t)), !1;
				this.position = i.position
			}
			return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", x.ui.ddmanager && x.ui.ddmanager.drag(this, t), !1
		},
		_mouseStop: function (t)
		{
			var e = this,
				i = !1;
			return x.ui.ddmanager && !this.options.dropBehaviour && (i = x.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || x.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? x(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function ()
			{
				!1 !== e._trigger("stop", t) && e._clear()
			}) : !1 !== this._trigger("stop", t) && this._clear(), !1
		},
		_mouseUp: function (t)
		{
			return this._unblockFrames(), x.ui.ddmanager && x.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), x.ui.mouse.prototype._mouseUp.call(this, t)
		},
		cancel: function ()
		{
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new x.Event("mouseup",
			{
				target: this.element[0]
			})) : this._clear(), this
		},
		_getHandle: function (t)
		{
			return !this.options.handle || !!x(t.target).closest(this.element.find(this.options.handle)).length
		},
		_setHandleClassName: function ()
		{
			this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
		},
		_removeHandleClassName: function ()
		{
			this._removeClass(this.handleElement, "ui-draggable-handle")
		},
		_createHelper: function (t)
		{
			var e = this.options,
				i = x.isFunction(e.helper),
				s = i ? x(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
			return s.parents("body").length || s.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), i && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
		},
		_setPositionRelative: function ()
		{
			/^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
		},
		_adjustOffsetFromHelper: function (t)
		{
			"string" == typeof t && (t = t.split(" ")), x.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_isRootNode: function (t)
		{
			return /(html|body)/i.test(t.tagName) || t === this.document[0]
		},
		_getParentOffset: function ()
		{
			var t = this.offsetParent.offset(),
				e = this.document[0];
			return "absolute" === this.cssPosition && this.scrollParent[0] !== e && x.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
				top: 0,
				left: 0
			}),
			{
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function ()
		{
			if ("relative" !== this.cssPosition) return {
				top: 0,
				left: 0
			};
			var t = this.element.position(),
				e = this._isRootNode(this.scrollParent[0]);
			return {
				top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
				left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
			}
		},
		_cacheMargins: function ()
		{
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function ()
		{
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function ()
		{
			var t, e, i, s = this.options,
				n = this.document[0];
			this.relativeContainer = null, s.containment ? "window" !== s.containment ? "document" !== s.containment ? s.containment.constructor !== Array ? ("parent" === s.containment && (s.containment = this.helper[0].parentNode), (i = (e = x(s.containment))[0]) && (t = /(scroll|auto)/.test(e.css("overflow")), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e)) : this.containment = s.containment : this.containment = [0, 0, x(n).width() - this.helperProportions.width - this.margins.left, (x(n).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [x(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, x(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, x(window).scrollLeft() + x(window).width() - this.helperProportions.width - this.margins.left, x(window).scrollTop() + (x(window).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
		},
		_convertPositionTo: function (t, e)
		{
			e = e || this.position;
			var i = "absolute" === t ? 1 : -1,
				s = this._isRootNode(this.scrollParent[0]);
			return {
				top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
				left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
			}
		},
		_generatePosition: function (t, e)
		{
			var i, s, n, o, a = this.options,
				r = this._isRootNode(this.scrollParent[0]),
				h = t.pageX,
				l = t.pageY;
			return r && this.offset.scroll || (this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			}), e && (this.containment && (i = this.relativeContainer ? (s = this.relativeContainer.offset(), [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = !i || n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1], o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = !i || o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0]), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)),
			{
				top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
				left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
			}
		},
		_clear: function ()
		{
			this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
		},
		_trigger: function (t, e, i)
		{
			return i = i || this._uiHash(), x.ui.plugin.call(this, t, [e, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), x.Widget.prototype._trigger.call(this, t, e, i)
		},
		plugins:
		{},
		_uiHash: function ()
		{
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), x.ui.plugin.add("draggable", "connectToSortable",
	{
		start: function (e, t, i)
		{
			var s = x.extend(
			{}, t,
			{
				item: i.element
			});
			i.sortables = [], x(i.options.connectToSortable).each(function ()
			{
				var t = x(this).sortable("instance");
				t && !t.options.disabled && (i.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, s))
			})
		},
		stop: function (e, t, i)
		{
			var s = x.extend(
			{}, t,
			{
				item: i.element
			});
			i.cancelHelperRemoval = !1, x.each(i.sortables, function ()
			{
				var t = this;
				t.isOver ? (t.isOver = 0, i.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
					position: t.placeholder.css("position"),
					top: t.placeholder.css("top"),
					left: t.placeholder.css("left")
				}, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
			})
		},
		drag: function (i, s, n)
		{
			x.each(n.sortables, function ()
			{
				var t = !1,
					e = this;
				e.positionAbs = n.positionAbs, e.helperProportions = n.helperProportions, e.offset.click = n.offset.click, e._intersectsWith(e.containerCache) && (t = !0, x.each(n.sortables, function ()
				{
					return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== e && this._intersectsWith(this.containerCache) && x.contains(e.element[0], this.element[0]) && (t = !1), t
				})), t ? (e.isOver || (e.isOver = 1, n._parent = s.helper.parent(), e.currentItem = s.helper.appendTo(e.element).data("ui-sortable-item", !0), e.options._helper = e.options.helper, e.options.helper = function ()
				{
					return s.helper[0]
				}, i.target = e.currentItem[0], e._mouseCapture(i, !0), e._mouseStart(i, !0, !0), e.offset.click.top = n.offset.click.top, e.offset.click.left = n.offset.click.left, e.offset.parent.left -= n.offset.parent.left - e.offset.parent.left, e.offset.parent.top -= n.offset.parent.top - e.offset.parent.top, n._trigger("toSortable", i), n.dropped = e.element, x.each(n.sortables, function ()
				{
					this.refreshPositions()
				}), n.currentItem = n.element, e.fromOutside = n), e.currentItem && (e._mouseDrag(i), s.position = e.position)) : e.isOver && (e.isOver = 0, e.cancelHelperRemoval = !0, e.options._revert = e.options.revert, e.options.revert = !1, e._trigger("out", i, e._uiHash(e)), e._mouseStop(i, !0), e.options.revert = e.options._revert, e.options.helper = e.options._helper, e.placeholder && e.placeholder.remove(), s.helper.appendTo(n._parent), n._refreshOffsets(i), s.position = n._generatePosition(i, !0), n._trigger("fromSortable", i), n.dropped = !1, x.each(n.sortables, function ()
				{
					this.refreshPositions()
				}))
			})
		}
	}), x.ui.plugin.add("draggable", "cursor",
	{
		start: function (t, e, i)
		{
			var s = x("body"),
				n = i.options;
			s.css("cursor") && (n._cursor = s.css("cursor")), s.css("cursor", n.cursor)
		},
		stop: function (t, e, i)
		{
			var s = i.options;
			s._cursor && x("body").css("cursor", s._cursor)
		}
	}), x.ui.plugin.add("draggable", "opacity",
	{
		start: function (t, e, i)
		{
			var s = x(e.helper),
				n = i.options;
			s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
		},
		stop: function (t, e, i)
		{
			var s = i.options;
			s._opacity && x(e.helper).css("opacity", s._opacity)
		}
	}), x.ui.plugin.add("draggable", "scroll",
	{
		start: function (t, e, i)
		{
			i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
		},
		drag: function (t, e, i)
		{
			var s = i.options,
				n = !1,
				o = i.scrollParentNotHidden[0],
				a = i.document[0];
			o !== a && "HTML" !== o.tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + o.offsetHeight - t.pageY < s.scrollSensitivity ? o.scrollTop = n = o.scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (o.scrollTop = n = o.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + o.offsetWidth - t.pageX < s.scrollSensitivity ? o.scrollLeft = n = o.scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (o.scrollLeft = n = o.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - x(a).scrollTop() < s.scrollSensitivity ? n = x(a).scrollTop(x(a).scrollTop() - s.scrollSpeed) : x(window).height() - (t.pageY - x(a).scrollTop()) < s.scrollSensitivity && (n = x(a).scrollTop(x(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - x(a).scrollLeft() < s.scrollSensitivity ? n = x(a).scrollLeft(x(a).scrollLeft() - s.scrollSpeed) : x(window).width() - (t.pageX - x(a).scrollLeft()) < s.scrollSensitivity && (n = x(a).scrollLeft(x(a).scrollLeft() + s.scrollSpeed)))), !1 !== n && x.ui.ddmanager && !s.dropBehaviour && x.ui.ddmanager.prepareOffsets(i, t)
		}
	}), x.ui.plugin.add("draggable", "snap",
	{
		start: function (t, e, i)
		{
			var s = i.options;
			i.snapElements = [], x(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function ()
			{
				var t = x(this),
					e = t.offset();
				this !== i.element[0] && i.snapElements.push(
				{
					item: this,
					width: t.outerWidth(),
					height: t.outerHeight(),
					top: e.top,
					left: e.left
				})
			})
		},
		drag: function (t, e, i)
		{
			for (var s, n, o, a, r, h, l, c, u, d = i.options, p = d.snapTolerance, f = e.offset.left, g = f + i.helperProportions.width, m = e.offset.top, _ = m + i.helperProportions.height, v = i.snapElements.length - 1; 0 <= v; v--) h = (r = i.snapElements[v].left - i.margins.left) + i.snapElements[v].width, c = (l = i.snapElements[v].top - i.margins.top) + i.snapElements[v].height, g < r - p || h + p < f || _ < l - p || c + p < m || !x.contains(i.snapElements[v].item.ownerDocument, i.snapElements[v].item) ? (i.snapElements[v].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, x.extend(i._uiHash(),
			{
				snapItem: i.snapElements[v].item
			})), i.snapElements[v].snapping = !1) : ("inner" !== d.snapMode && (s = Math.abs(l - _) <= p, n = Math.abs(c - m) <= p, o = Math.abs(r - g) <= p, a = Math.abs(h - f) <= p, s && (e.position.top = i._convertPositionTo("relative",
			{
				top: l - i.helperProportions.height,
				left: 0
			}).top), n && (e.position.top = i._convertPositionTo("relative",
			{
				top: c,
				left: 0
			}).top), o && (e.position.left = i._convertPositionTo("relative",
			{
				top: 0,
				left: r - i.helperProportions.width
			}).left), a && (e.position.left = i._convertPositionTo("relative",
			{
				top: 0,
				left: h
			}).left)), u = s || n || o || a, "outer" !== d.snapMode && (s = Math.abs(l - m) <= p, n = Math.abs(c - _) <= p, o = Math.abs(r - f) <= p, a = Math.abs(h - g) <= p, s && (e.position.top = i._convertPositionTo("relative",
			{
				top: l,
				left: 0
			}).top), n && (e.position.top = i._convertPositionTo("relative",
			{
				top: c - i.helperProportions.height,
				left: 0
			}).top), o && (e.position.left = i._convertPositionTo("relative",
			{
				top: 0,
				left: r
			}).left), a && (e.position.left = i._convertPositionTo("relative",
			{
				top: 0,
				left: h - i.helperProportions.width
			}).left)), !i.snapElements[v].snapping && (s || n || o || a || u) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, x.extend(i._uiHash(),
			{
				snapItem: i.snapElements[v].item
			})), i.snapElements[v].snapping = s || n || o || a || u)
		}
	}), x.ui.plugin.add("draggable", "stack",
	{
		start: function (t, e, i)
		{
			var s, n = i.options,
				o = x.makeArray(x(n.stack)).sort(function (t, e)
				{
					return (parseInt(x(t).css("zIndex"), 10) || 0) - (parseInt(x(e).css("zIndex"), 10) || 0)
				});
			o.length && (s = parseInt(x(o[0]).css("zIndex"), 10) || 0, x(o).each(function (t)
			{
				x(this).css("zIndex", s + t)
			}), this.css("zIndex", s + o.length))
		}
	}), x.ui.plugin.add("draggable", "zIndex",
	{
		start: function (t, e, i)
		{
			var s = x(e.helper),
				n = i.options;
			s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
		},
		stop: function (t, e, i)
		{
			var s = i.options;
			s._zIndex && x(e.helper).css("zIndex", s._zIndex)
		}
	});
	x.ui.draggable;
	x.widget("ui.resizable", x.ui.mouse,
	{
		version: "1.12.1",
		widgetEventPrefix: "resize",
		options:
		{
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			classes:
			{
				"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
			},
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_num: function (t)
		{
			return parseFloat(t) || 0
		},
		_isNumber: function (t)
		{
			return !isNaN(parseFloat(t))
		},
		_hasScroll: function (t, e)
		{
			if ("hidden" === x(t).css("overflow")) return !1;
			var i, s = e && "left" === e ? "scrollLeft" : "scrollTop";
			return 0 < t[s] || (t[s] = 1, i = 0 < t[s], t[s] = 0, i)
		},
		_create: function ()
		{
			var t, e = this.options,
				i = this;
			this._addClass("ui-resizable"), x.extend(this,
			{
				_aspectRatio: !!e.aspectRatio,
				aspectRatio: e.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
			}), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(x("<div class='ui-wrapper' style='overflow: hidden;'></div>").css(
			{
				position: this.element.css("position"),
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				top: this.element.css("top"),
				left: this.element.css("left")
			})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, t = {
				marginTop: this.originalElement.css("marginTop"),
				marginRight: this.originalElement.css("marginRight"),
				marginBottom: this.originalElement.css("marginBottom"),
				marginLeft: this.originalElement.css("marginLeft")
			}, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css(
			{
				position: "static",
				zoom: 1,
				display: "block"
			})), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), e.autoHide && x(this.element).on("mouseenter", function ()
			{
				e.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show())
			}).on("mouseleave", function ()
			{
				e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide())
			}), this._mouseInit()
		},
		_destroy: function ()
		{
			this._mouseDestroy();

			function t(t)
			{
				x(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
			}
			var e;
			return this.elementIsWrapper && (t(this.element), e = this.element, this.originalElement.css(
			{
				position: e.css("position"),
				width: e.outerWidth(),
				height: e.outerHeight(),
				top: e.css("top"),
				left: e.css("left")
			}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
		},
		_setOption: function (t, e)
		{
			switch (this._super(t, e), t)
			{
			case "handles":
				this._removeHandles(), this._setupHandles()
			}
		},
		_setupHandles: function ()
		{
			var t, e, i, s, n, o = this.options,
				a = this;
			if (this.handles = o.handles || (x(".ui-resizable-handle", this.element).length ?
				{
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} : "e,s,se"), this._handles = x(), this.handles.constructor === String)
				for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i = this.handles.split(","), this.handles = {}, e = 0; e < i.length; e++) s = "ui-resizable-" + (t = x.trim(i[e])), n = x("<div>"), this._addClass(n, "ui-resizable-handle " + s), n.css(
				{
					zIndex: o.zIndex
				}), this.handles[t] = ".ui-resizable-" + t, this.element.append(n);
			this._renderAxis = function (t)
			{
				var e, i, s, n;
				for (e in t = t || this.element, this.handles) this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = x(this.handles[e]), this._on(this.handles[e],
				{
					mousedown: a._mouseDown
				})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = x(this.handles[e], this.element), n = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), s = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(s, n), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e])
			}, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function ()
			{
				a.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = n && n[1] ? n[1] : "se")
			}), o.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
		},
		_removeHandles: function ()
		{
			this._handles.remove()
		},
		_mouseCapture: function (t)
		{
			var e, i, s = !1;
			for (e in this.handles)(i = x(this.handles[e])[0]) !== t.target && !x.contains(i, t.target) || (s = !0);
			return !this.options.disabled && s
		},
		_mouseStart: function (t)
		{
			var e, i, s, n = this.options,
				o = this.element;
			return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), n.containment && (e += x(n.containment).scrollLeft() || 0, i += x(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: e,
				top: i
			}, this.size = this._helper ?
			{
				width: this.helper.width(),
				height: this.helper.height()
			} :
			{
				width: o.width(),
				height: o.height()
			}, this.originalSize = this._helper ?
			{
				width: o.outerWidth(),
				height: o.outerHeight()
			} :
			{
				width: o.width(),
				height: o.height()
			}, this.sizeDiff = {
				width: o.outerWidth() - o.width(),
				height: o.outerHeight() - o.height()
			}, this.originalPosition = {
				left: e,
				top: i
			}, this.originalMousePosition = {
				left: t.pageX,
				top: t.pageY
			}, this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = x(".ui-resizable-" + this.axis).css("cursor"), x("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0
		},
		_mouseDrag: function (t)
		{
			var e, i, s = this.originalMousePosition,
				n = this.axis,
				o = t.pageX - s.left || 0,
				a = t.pageY - s.top || 0,
				r = this._change[n];
			return this._updatePrevProperties(), r && (e = r.apply(this, [t, o, a]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), x.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges())), !1
		},
		_mouseStop: function (t)
		{
			this.resizing = !1;
			var e, i, s, n, o, a, r, h = this.options,
				l = this;
			return this._helper && (s = (i = (e = this._proportionallyResizeElements).length && /textarea/i.test(e[0].nodeName)) && this._hasScroll(e[0], "left") ? 0 : l.sizeDiff.height, n = i ? 0 : l.sizeDiff.width, o = {
				width: l.helper.width() - n,
				height: l.helper.height() - s
			}, a = parseFloat(l.element.css("left")) + (l.position.left - l.originalPosition.left) || null, r = parseFloat(l.element.css("top")) + (l.position.top - l.originalPosition.top) || null, h.animate || this.element.css(x.extend(o,
			{
				top: r,
				left: a
			})), l.helper.height(l.size.height), l.helper.width(l.size.width), this._helper && !h.animate && this._proportionallyResize()), x("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
		},
		_updatePrevProperties: function ()
		{
			this.prevPosition = {
				top: this.position.top,
				left: this.position.left
			}, this.prevSize = {
				width: this.size.width,
				height: this.size.height
			}
		},
		_applyChanges: function ()
		{
			var t = {};
			return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
		},
		_updateVirtualBoundaries: function (t)
		{
			var e, i, s, n, o = this.options,
				a = {
					minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
					maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
					minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
					maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
				};
			(this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), s > a.minHeight && (a.minHeight = s), i < a.maxWidth && (a.maxWidth = i), n < a.maxHeight && (a.maxHeight = n)), this._vBoundaries = a
		},
		_updateCache: function (t)
		{
			this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
		},
		_updateRatio: function (t)
		{
			var e = this.position,
				i = this.size,
				s = this.axis;
			return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
		},
		_respectSize: function (t)
		{
			var e = this._vBoundaries,
				i = this.axis,
				s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
				n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
				o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
				a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
				r = this.originalPosition.left + this.originalSize.width,
				h = this.originalPosition.top + this.originalSize.height,
				l = /sw|nw|w/.test(i),
				c = /nw|ne|n/.test(i);
			return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
		},
		_getPaddingPlusBorderDimensions: function (t)
		{
			for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
			return {
				height: i[0] + i[2],
				width: i[1] + i[3]
			}
		},
		_proportionallyResize: function ()
		{
			if (this._proportionallyResizeElements.length)
				for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css(
				{
					height: i.height() - this.outerDimensions.height || 0,
					width: i.width() - this.outerDimensions.width || 0
				})
		},
		_renderProxy: function ()
		{
			var t = this.element,
				e = this.options;
			this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || x("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css(
			{
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++e.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change:
		{
			e: function (t, e)
			{
				return {
					width: this.originalSize.width + e
				}
			},
			w: function (t, e)
			{
				var i = this.originalSize;
				return {
					left: this.originalPosition.left + e,
					width: i.width - e
				}
			},
			n: function (t, e, i)
			{
				var s = this.originalSize;
				return {
					top: this.originalPosition.top + i,
					height: s.height - i
				}
			},
			s: function (t, e, i)
			{
				return {
					height: this.originalSize.height + i
				}
			},
			se: function (t, e, i)
			{
				return x.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
			},
			sw: function (t, e, i)
			{
				return x.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
			},
			ne: function (t, e, i)
			{
				return x.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
			},
			nw: function (t, e, i)
			{
				return x.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
			}
		},
		_propagate: function (t, e)
		{
			x.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui())
		},
		plugins:
		{},
		ui: function ()
		{
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), x.ui.plugin.add("resizable", "animate",
	{
		stop: function (e)
		{
			var i = x(this).resizable("instance"),
				t = i.options,
				s = i._proportionallyResizeElements,
				n = s.length && /textarea/i.test(s[0].nodeName),
				o = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
				a = n ? 0 : i.sizeDiff.width,
				r = {
					width: i.size.width - a,
					height: i.size.height - o
				},
				h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
				l = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(x.extend(r, l && h ?
			{
				top: l,
				left: h
			} :
			{}),
			{
				duration: t.animateDuration,
				easing: t.animateEasing,
				step: function ()
				{
					var t = {
						width: parseFloat(i.element.css("width")),
						height: parseFloat(i.element.css("height")),
						top: parseFloat(i.element.css("top")),
						left: parseFloat(i.element.css("left"))
					};
					s && s.length && x(s[0]).css(
					{
						width: t.width,
						height: t.height
					}), i._updateCache(t), i._propagate("resize", e)
				}
			})
		}
	}), x.ui.plugin.add("resizable", "containment",
	{
		start: function ()
		{
			var i, s, t, e, n, o, a, r = x(this).resizable("instance"),
				h = r.options,
				l = r.element,
				c = h.containment,
				u = c instanceof x ? c.get(0) : /parent/.test(c) ? l.parent().get(0) : c;
			u && (r.containerElement = x(u), /document/.test(c) || c === document ? (r.containerOffset = {
				left: 0,
				top: 0
			}, r.containerPosition = {
				left: 0,
				top: 0
			}, r.parentData = {
				element: x(document),
				left: 0,
				top: 0,
				width: x(document).width(),
				height: x(document).height() || document.body.parentNode.scrollHeight
			}) : (i = x(u), s = [], x(["Top", "Right", "Left", "Bottom"]).each(function (t, e)
			{
				s[t] = r._num(i.css("padding" + e))
			}), r.containerOffset = i.offset(), r.containerPosition = i.position(), r.containerSize = {
				height: i.innerHeight() - s[3],
				width: i.innerWidth() - s[1]
			}, t = r.containerOffset, e = r.containerSize.height, n = r.containerSize.width, o = r._hasScroll(u, "left") ? u.scrollWidth : n, a = r._hasScroll(u) ? u.scrollHeight : e, r.parentData = {
				element: u,
				left: t.left,
				top: t.top,
				width: o,
				height: a
			}))
		},
		resize: function (t)
		{
			var e, i, s, n, o = x(this).resizable("instance"),
				a = o.options,
				r = o.containerOffset,
				h = o.position,
				l = o._aspectRatio || t.shiftKey,
				c = {
					top: 0,
					left: 0
				},
				u = o.containerElement,
				d = !0;
			u[0] !== document && /static/.test(u.css("position")) && (c = r), h.left < (o._helper ? r.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - r.left : o.position.left - c.left), l && (o.size.height = o.size.width / o.aspectRatio, d = !1), o.position.left = a.helper ? r.left : 0), h.top < (o._helper ? r.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - r.top : o.position.top), l && (o.size.width = o.size.height * o.aspectRatio, d = !1), o.position.top = o._helper ? r.top : 0), s = o.containerElement.get(0) === o.element.parent().get(0), n = /relative|absolute/.test(o.containerElement.css("position")), s && n ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), e = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left : o.offset.left - r.left)), i = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top : o.offset.top - r.top)), e + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - e, l && (o.size.height = o.size.width / o.aspectRatio, d = !1)), i + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - i, l && (o.size.width = o.size.height * o.aspectRatio, d = !1)), d || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
		},
		stop: function ()
		{
			var t = x(this).resizable("instance"),
				e = t.options,
				i = t.containerOffset,
				s = t.containerPosition,
				n = t.containerElement,
				o = x(t.helper),
				a = o.offset(),
				r = o.outerWidth() - t.sizeDiff.width,
				h = o.outerHeight() - t.sizeDiff.height;
			t._helper && !e.animate && /relative/.test(n.css("position")) && x(this).css(
			{
				left: a.left - s.left - i.left,
				width: r,
				height: h
			}), t._helper && !e.animate && /static/.test(n.css("position")) && x(this).css(
			{
				left: a.left - s.left - i.left,
				width: r,
				height: h
			})
		}
	}), x.ui.plugin.add("resizable", "alsoResize",
	{
		start: function ()
		{
			var t = x(this).resizable("instance").options;
			x(t.alsoResize).each(function ()
			{
				var t = x(this);
				t.data("ui-resizable-alsoresize",
				{
					width: parseFloat(t.width()),
					height: parseFloat(t.height()),
					left: parseFloat(t.css("left")),
					top: parseFloat(t.css("top"))
				})
			})
		},
		resize: function (t, i)
		{
			var e = x(this).resizable("instance"),
				s = e.options,
				n = e.originalSize,
				o = e.originalPosition,
				a = {
					height: e.size.height - n.height || 0,
					width: e.size.width - n.width || 0,
					top: e.position.top - o.top || 0,
					left: e.position.left - o.left || 0
				};
			x(s.alsoResize).each(function ()
			{
				var t = x(this),
					s = x(this).data("ui-resizable-alsoresize"),
					n = {},
					e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
				x.each(e, function (t, e)
				{
					var i = (s[e] || 0) + (a[e] || 0);
					i && 0 <= i && (n[e] = i || null)
				}), t.css(n)
			})
		},
		stop: function ()
		{
			x(this).removeData("ui-resizable-alsoresize")
		}
	}), x.ui.plugin.add("resizable", "ghost",
	{
		start: function ()
		{
			var t = x(this).resizable("instance"),
				e = t.size;
			t.ghost = t.originalElement.clone(), t.ghost.css(
			{
				opacity: .25,
				display: "block",
				position: "relative",
				height: e.height,
				width: e.width,
				margin: 0,
				left: 0,
				top: 0
			}), t._addClass(t.ghost, "ui-resizable-ghost"), !1 !== x.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), t.ghost.appendTo(t.helper)
		},
		resize: function ()
		{
			var t = x(this).resizable("instance");
			t.ghost && t.ghost.css(
			{
				position: "relative",
				height: t.size.height,
				width: t.size.width
			})
		},
		stop: function ()
		{
			var t = x(this).resizable("instance");
			t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
		}
	}), x.ui.plugin.add("resizable", "grid",
	{
		resize: function ()
		{
			var t, e = x(this).resizable("instance"),
				i = e.options,
				s = e.size,
				n = e.originalSize,
				o = e.originalPosition,
				a = e.axis,
				r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
				h = r[0] || 1,
				l = r[1] || 1,
				c = Math.round((s.width - n.width) / h) * h,
				u = Math.round((s.height - n.height) / l) * l,
				d = n.width + c,
				p = n.height + u,
				f = i.maxWidth && i.maxWidth < d,
				g = i.maxHeight && i.maxHeight < p,
				m = i.minWidth && i.minWidth > d,
				_ = i.minHeight && i.minHeight > p;
			i.grid = r, m && (d += h), _ && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(a) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : ((p - l <= 0 || d - h <= 0) && (t = e._getPaddingPlusBorderDimensions(this)), 0 < p - l ? (e.size.height = p, e.position.top = o.top - u) : (p = l - t.height, e.size.height = p, e.position.top = o.top + n.height - p), 0 < d - h ? (e.size.width = d, e.position.left = o.left - c) : (d = h - t.width, e.size.width = d, e.position.left = o.left + n.width - d))
		}
	});
	x.ui.resizable;
	x.widget("ui.dialog",
	{
		version: "1.12.1",
		options:
		{
			appendTo: "body",
			autoOpen: !0,
			buttons: [],
			classes:
			{
				"ui-dialog": "ui-corner-all",
				"ui-dialog-titlebar": "ui-corner-all"
			},
			closeOnEscape: !0,
			closeText: "Close",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position:
			{
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function (t)
				{
					var e = x(this).css(t).offset().top;
					e < 0 && x(this).css("top", t.top - e)
				}
			},
			resizable: !0,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		sizeRelatedOptions:
		{
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		resizableRelatedOptions:
		{
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		},
		_create: function ()
		{
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			}, this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			}, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && x.fn.draggable && this._makeDraggable(), this.options.resizable && x.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
		},
		_init: function ()
		{
			this.options.autoOpen && this.open()
		},
		_appendTo: function ()
		{
			var t = this.options.appendTo;
			return t && (t.jquery || t.nodeType) ? x(t) : this.document.find(t || "body").eq(0)
		},
		_destroy: function ()
		{
			var t, e = this.originalPosition;
			this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
		},
		widget: function ()
		{
			return this.uiDialog
		},
		disable: x.noop,
		enable: x.noop,
		close: function (t)
		{
			var e = this;
			this._isOpen && !1 !== this._trigger("beforeClose", t) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || x.ui.safeBlur(x.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function ()
			{
				e._trigger("close", t)
			}))
		},
		isOpen: function ()
		{
			return this._isOpen
		},
		moveToTop: function ()
		{
			this._moveToTop()
		},
		_moveToTop: function (t, e)
		{
			var i = !1,
				s = this.uiDialog.siblings(".ui-front:visible").map(function ()
				{
					return +x(this).css("z-index")
				}).get(),
				n = Math.max.apply(null, s);
			return n >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", n + 1), i = !0), i && !e && this._trigger("focus", t), i
		},
		open: function ()
		{
			var t = this;
			this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = x(x.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function ()
			{
				t._focusTabbable(), t._trigger("focus")
			}), this._makeFocusTarget(), this._trigger("open"))
		},
		_focusTabbable: function ()
		{
			var t = this._focusedElement;
			(t = t || this.element.find("[autofocus]")).length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
		},
		_keepFocus: function (t)
		{
			function e()
			{
				var t = x.ui.safeActiveElement(this.document[0]);
				this.uiDialog[0] === t || x.contains(this.uiDialog[0], t) || this._focusTabbable()
			}
			t.preventDefault(), e.call(this), this._delay(e)
		},
		_createWrapper: function ()
		{
			this.uiDialog = x("<div>").hide().attr(
			{
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog,
			{
				keydown: function (t)
				{
					if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === x.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
					var e, i, s;
					t.keyCode !== x.ui.keyCode.TAB || t.isDefaultPrevented() || (e = this.uiDialog.find(":tabbable"), i = e.filter(":first"), s = e.filter(":last"), t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function ()
					{
						s.trigger("focus")
					}), t.preventDefault()) : (this._delay(function ()
					{
						i.trigger("focus")
					}), t.preventDefault()))
				},
				mousedown: function (t)
				{
					this._moveToTop(t) && this._focusTabbable()
				}
			}), this.element.find("[aria-describedby]").length || this.uiDialog.attr(
			{
				"aria-describedby": this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar: function ()
		{
			var t;
			this.uiDialogTitlebar = x("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar,
			{
				mousedown: function (t)
				{
					x(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
				}
			}), this.uiDialogTitlebarClose = x("<button type='button'></button>").button(
			{
				label: x("<a>").text(this.options.closeText).html(),
				icon: "ui-icon-closethick",
				showLabel: !1
			}).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose,
			{
				click: function (t)
				{
					t.preventDefault(), this.close(t)
				}
			}), t = x("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t, "ui-dialog-title"), this._title(t), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr(
			{
				"aria-labelledby": t.attr("id")
			})
		},
		_title: function (t)
		{
			this.options.title ? t.text(this.options.title) : t.html("&#160;")
		},
		_createButtonPane: function ()
		{
			this.uiDialogButtonPane = x("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = x("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
		},
		_createButtons: function ()
		{
			var n = this,
				t = this.options.buttons;
			this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), x.isEmptyObject(t) || x.isArray(t) && !t.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (x.each(t, function (t, e)
			{
				var i, s;
				e = x.isFunction(e) ?
				{
					click: e,
					text: t
				} : e, e = x.extend(
				{
					type: "button"
				}, e), i = e.click, s = {
					icon: e.icon,
					iconPosition: e.iconPosition,
					showLabel: e.showLabel,
					icons: e.icons,
					text: e.text
				}, delete e.click, delete e.icon, delete e.iconPosition, delete e.showLabel, delete e.icons, "boolean" == typeof e.text && delete e.text, x("<button></button>", e).button(s).appendTo(n.uiButtonSet).on("click", function ()
				{
					i.apply(n.element[0], arguments)
				})
			}), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog))
		},
		_makeDraggable: function ()
		{
			var n = this,
				o = this.options;

			function a(t)
			{
				return {
					position: t.position,
					offset: t.offset
				}
			}
			this.uiDialog.draggable(
			{
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function (t, e)
				{
					n._addClass(x(this), "ui-dialog-dragging"), n._blockFrames(), n._trigger("dragStart", t, a(e))
				},
				drag: function (t, e)
				{
					n._trigger("drag", t, a(e))
				},
				stop: function (t, e)
				{
					var i = e.offset.left - n.document.scrollLeft(),
						s = e.offset.top - n.document.scrollTop();
					o.position = {
						my: "left top",
						at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= s ? "+" : "") + s,
						of: n.window
					}, n._removeClass(x(this), "ui-dialog-dragging"), n._unblockFrames(), n._trigger("dragStop", t, a(e))
				}
			})
		},
		_makeResizable: function ()
		{
			var o = this,
				a = this.options,
				t = a.resizable,
				e = this.uiDialog.css("position"),
				i = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";

			function r(t)
			{
				return {
					originalPosition: t.originalPosition,
					originalSize: t.originalSize,
					position: t.position,
					size: t.size
				}
			}
			this.uiDialog.resizable(
			{
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: a.maxWidth,
				maxHeight: a.maxHeight,
				minWidth: a.minWidth,
				minHeight: this._minHeight(),
				handles: i,
				start: function (t, e)
				{
					o._addClass(x(this), "ui-dialog-resizing"), o._blockFrames(), o._trigger("resizeStart", t, r(e))
				},
				resize: function (t, e)
				{
					o._trigger("resize", t, r(e))
				},
				stop: function (t, e)
				{
					var i = o.uiDialog.offset(),
						s = i.left - o.document.scrollLeft(),
						n = i.top - o.document.scrollTop();
					a.height = o.uiDialog.height(), a.width = o.uiDialog.width(), a.position = {
						my: "left top",
						at: "left" + (0 <= s ? "+" : "") + s + " top" + (0 <= n ? "+" : "") + n,
						of: o.window
					}, o._removeClass(x(this), "ui-dialog-resizing"), o._unblockFrames(), o._trigger("resizeStop", t, r(e))
				}
			}).css("position", e)
		},
		_trackFocus: function ()
		{
			this._on(this.widget(),
			{
				focusin: function (t)
				{
					this._makeFocusTarget(), this._focusedElement = x(t.target)
				}
			})
		},
		_makeFocusTarget: function ()
		{
			this._untrackInstance(), this._trackingInstances().unshift(this)
		},
		_untrackInstance: function ()
		{
			var t = this._trackingInstances(),
				e = x.inArray(this, t); - 1 !== e && t.splice(e, 1)
		},
		_trackingInstances: function ()
		{
			var t = this.document.data("ui-dialog-instances");
			return t || (t = [], this.document.data("ui-dialog-instances", t)), t
		},
		_minHeight: function ()
		{
			var t = this.options;
			return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
		},
		_position: function ()
		{
			var t = this.uiDialog.is(":visible");
			t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
		},
		_setOptions: function (t)
		{
			var i = this,
				s = !1,
				n = {};
			x.each(t, function (t, e)
			{
				i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
			}), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
		},
		_setOption: function (t, e)
		{
			var i, s, n = this.uiDialog;
			"disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button(
			{
				label: x("<a>").text("" + this.options.closeText).html()
			}), "draggable" === t && ((i = n.is(":data(ui-draggable)")) && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && ((s = n.is(":data(ui-resizable)")) && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || !1 === e || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size: function ()
		{
			var t, e, i, s = this.options;
			this.element.show().css(
			{
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			}), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css(
			{
				height: "auto",
				width: s.width
			}).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css(
			{
				minHeight: e,
				maxHeight: i,
				height: "auto"
			}) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_blockFrames: function ()
		{
			this.iframeBlocks = this.document.find("iframe").map(function ()
			{
				var t = x(this);
				return x("<div>").css(
				{
					position: "absolute",
					width: t.outerWidth(),
					height: t.outerHeight()
				}).appendTo(t.parent()).offset(t.offset())[0]
			})
		},
		_unblockFrames: function ()
		{
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_allowInteraction: function (t)
		{
			return !!x(t.target).closest(".ui-dialog").length || !!x(t.target).closest(".ui-datepicker").length
		},
		_createOverlay: function ()
		{
			var e;
			this.options.modal && (e = !0, this._delay(function ()
			{
				e = !1
			}), this.document.data("ui-dialog-overlays") || this._on(this.document,
			{
				focusin: function (t)
				{
					e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
				}
			}), this.overlay = x("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay,
			{
				mousedown: "_keepFocus"
			}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1))
		},
		_destroyOverlay: function ()
		{
			var t;
			this.options.modal && this.overlay && ((t = this.document.data("ui-dialog-overlays") - 1) ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null)
		}
	}), !1 !== x.uiBackCompat && x.widget("ui.dialog", x.ui.dialog,
	{
		options:
		{
			dialogClass: ""
		},
		_createWrapper: function ()
		{
			this._super(), this.uiDialog.addClass(this.options.dialogClass)
		},
		_setOption: function (t, e)
		{
			"dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
		}
	});
	x.ui.dialog;
	x.widget("ui.droppable",
	{
		version: "1.12.1",
		widgetEventPrefix: "drop",
		options:
		{
			accept: "*",
			addClasses: !0,
			greedy: !1,
			scope: "default",
			tolerance: "intersect",
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function ()
		{
			var t, e = this.options,
				i = e.accept;
			this.isover = !1, this.isout = !0, this.accept = x.isFunction(i) ? i : function (t)
			{
				return t.is(i)
			}, this.proportions = function ()
			{
				if (!arguments.length) return t || (t = {
					width: this.element[0].offsetWidth,
					height: this.element[0].offsetHeight
				});
				t = arguments[0]
			}, this._addToManager(e.scope), e.addClasses && this._addClass("ui-droppable")
		},
		_addToManager: function (t)
		{
			x.ui.ddmanager.droppables[t] = x.ui.ddmanager.droppables[t] || [], x.ui.ddmanager.droppables[t].push(this)
		},
		_splice: function (t)
		{
			for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
		},
		_destroy: function ()
		{
			var t = x.ui.ddmanager.droppables[this.options.scope];
			this._splice(t)
		},
		_setOption: function (t, e)
		{
			var i;
			"accept" === t ? this.accept = x.isFunction(e) ? e : function (t)
			{
				return t.is(e)
			} : "scope" === t && (i = x.ui.ddmanager.droppables[this.options.scope], this._splice(i), this._addToManager(e)), this._super(t, e)
		},
		_activate: function (t)
		{
			var e = x.ui.ddmanager.current;
			this._addActiveClass(), e && this._trigger("activate", t, this.ui(e))
		},
		_deactivate: function (t)
		{
			var e = x.ui.ddmanager.current;
			this._removeActiveClass(), e && this._trigger("deactivate", t, this.ui(e))
		},
		_over: function (t)
		{
			var e = x.ui.ddmanager.current;
			e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(e)))
		},
		_out: function (t)
		{
			var e = x.ui.ddmanager.current;
			e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(e)))
		},
		_drop: function (e, t)
		{
			var i = t || x.ui.ddmanager.current,
				s = !1;
			return !(!i || (i.currentItem || i.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function ()
			{
				var t = x(this).droppable("instance");
				if (t.options.greedy && !t.options.disabled && t.options.scope === i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && nt(i, x.extend(t,
					{
						offset: t.element.offset()
					}), t.options.tolerance, e)) return !(s = !0)
			}), !s && (!!this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(i)), this.element)))
		},
		ui: function (t)
		{
			return {
				draggable: t.currentItem || t.element,
				helper: t.helper,
				position: t.position,
				offset: t.positionAbs
			}
		},
		_addHoverClass: function ()
		{
			this._addClass("ui-droppable-hover")
		},
		_removeHoverClass: function ()
		{
			this._removeClass("ui-droppable-hover")
		},
		_addActiveClass: function ()
		{
			this._addClass("ui-droppable-active")
		},
		_removeActiveClass: function ()
		{
			this._removeClass("ui-droppable-active")
		}
	});
	var nt = x.ui.intersect = function (t, e, i, s)
	{
		if (!e.offset) return !1;
		var n = (t.positionAbs || t.position.absolute).left + t.margins.left,
			o = (t.positionAbs || t.position.absolute).top + t.margins.top,
			a = n + t.helperProportions.width,
			r = o + t.helperProportions.height,
			h = e.offset.left,
			l = e.offset.top,
			c = h + e.proportions().width,
			u = l + e.proportions().height;
		switch (i)
		{
		case "fit":
			return h <= n && a <= c && l <= o && r <= u;
		case "intersect":
			return h < n + t.helperProportions.width / 2 && a - t.helperProportions.width / 2 < c && l < o + t.helperProportions.height / 2 && r - t.helperProportions.height / 2 < u;
		case "pointer":
			return ot(s.pageY, l, e.proportions().height) && ot(s.pageX, h, e.proportions().width);
		case "touch":
			return (l <= o && o <= u || l <= r && r <= u || o < l && u < r) && (h <= n && n <= c || h <= a && a <= c || n < h && c < a);
		default:
			return !1
		}
	};

	function ot(t, e, i)
	{
		return e <= t && t < e + i
	}!(x.ui.ddmanager = {
		current: null,
		droppables:
		{
			default: []
		},
		prepareOffsets: function (t, e)
		{
			var i, s, n = x.ui.ddmanager.droppables[t.options.scope] || [],
				o = e ? e.type : null,
				a = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
			t: for (i = 0; i < n.length; i++)
				if (!(n[i].options.disabled || t && !n[i].accept.call(n[i].element[0], t.currentItem || t.element)))
				{
					for (s = 0; s < a.length; s++)
						if (a[s] === n[i].element[0])
						{
							n[i].proportions().height = 0;
							continue t
						} n[i].visible = "none" !== n[i].element.css("display"), n[i].visible && ("mousedown" === o && n[i]._activate.call(n[i], e), n[i].offset = n[i].element.offset(), n[i].proportions(
					{
						width: n[i].element[0].offsetWidth,
						height: n[i].element[0].offsetHeight
					}))
				}
		},
		drop: function (t, e)
		{
			var i = !1;
			return x.each((x.ui.ddmanager.droppables[t.options.scope] || []).slice(), function ()
			{
				this.options && (!this.options.disabled && this.visible && nt(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, e)))
			}), i
		},
		dragStart: function (t, e)
		{
			t.element.parentsUntil("body").on("scroll.droppable", function ()
			{
				t.options.refreshPositions || x.ui.ddmanager.prepareOffsets(t, e)
			})
		},
		drag: function (o, a)
		{
			o.options.refreshPositions && x.ui.ddmanager.prepareOffsets(o, a), x.each(x.ui.ddmanager.droppables[o.options.scope] || [], function ()
			{
				var t, e, i, s, n;
				this.options.disabled || this.greedyChild || !this.visible || (n = !(s = nt(o, this, this.options.tolerance, a)) && this.isover ? "isout" : s && !this.isover ? "isover" : null) && (this.options.greedy && (e = this.options.scope, (i = this.element.parents(":data(ui-droppable)").filter(function ()
				{
					return x(this).droppable("instance").options.scope === e
				})).length && ((t = x(i[0]).droppable("instance")).greedyChild = "isover" === n)), t && "isover" === n && (t.isover = !1, t.isout = !0, t._out.call(t, a)), this[n] = !0, this["isout" === n ? "isover" : "isout"] = !1, this["isover" === n ? "_over" : "_out"].call(this, a), t && "isout" === n && (t.isout = !1, t.isover = !0, t._over.call(t, a)))
			})
		},
		dragStop: function (t, e)
		{
			t.element.parentsUntil("body").off("scroll.droppable"), t.options.refreshPositions || x.ui.ddmanager.prepareOffsets(t, e)
		}
	}) !== x.uiBackCompat && x.widget("ui.droppable", x.ui.droppable,
	{
		options:
		{
			hoverClass: !1,
			activeClass: !1
		},
		_addActiveClass: function ()
		{
			this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
		},
		_removeActiveClass: function ()
		{
			this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
		},
		_addHoverClass: function ()
		{
			this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
		},
		_removeHoverClass: function ()
		{
			this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
		}
	});
	x.ui.droppable, x.widget("ui.progressbar",
	{
		version: "1.12.1",
		options:
		{
			classes:
			{
				"ui-progressbar": "ui-corner-all",
				"ui-progressbar-value": "ui-corner-left",
				"ui-progressbar-complete": "ui-corner-right"
			},
			max: 100,
			value: 0,
			change: null,
			complete: null
		},
		min: 0,
		_create: function ()
		{
			this.oldValue = this.options.value = this._constrainedValue(), this.element.attr(
			{
				role: "progressbar",
				"aria-valuemin": this.min
			}), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = x("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
		},
		_destroy: function ()
		{
			this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
		},
		value: function (t)
		{
			if (void 0 === t) return this.options.value;
			this.options.value = this._constrainedValue(t), this._refreshValue()
		},
		_constrainedValue: function (t)
		{
			return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
		},
		_setOptions: function (t)
		{
			var e = t.value;
			delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
		},
		_setOption: function (t, e)
		{
			"max" === t && (e = Math.max(this.min, e)), this._super(t, e)
		},
		_setOptionDisabled: function (t)
		{
			this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
		},
		_percentage: function ()
		{
			return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
		},
		_refreshValue: function ()
		{
			var t = this.options.value,
				e = this._percentage();
			this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = x("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr(
			{
				"aria-valuemax": this.options.max,
				"aria-valuenow": t
			}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
		}
	}), x.widget("ui.selectable", x.ui.mouse,
	{
		version: "1.12.1",
		options:
		{
			appendTo: "body",
			autoRefresh: !0,
			distance: 0,
			filter: "*",
			tolerance: "touch",
			selected: null,
			selecting: null,
			start: null,
			stop: null,
			unselected: null,
			unselecting: null
		},
		_create: function ()
		{
			var s = this;
			this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function ()
			{
				s.elementPos = x(s.element[0]).offset(), s.selectees = x(s.options.filter, s.element[0]), s._addClass(s.selectees, "ui-selectee"), s.selectees.each(function ()
				{
					var t = x(this),
						e = t.offset(),
						i = {
							left: e.left - s.elementPos.left,
							top: e.top - s.elementPos.top
						};
					x.data(this, "selectable-item",
					{
						element: this,
						$element: t,
						left: i.left,
						top: i.top,
						right: i.left + t.outerWidth(),
						bottom: i.top + t.outerHeight(),
						startselected: !1,
						selected: t.hasClass("ui-selected"),
						selecting: t.hasClass("ui-selecting"),
						unselecting: t.hasClass("ui-unselecting")
					})
				})
			}, this.refresh(), this._mouseInit(), this.helper = x("<div>"), this._addClass(this.helper, "ui-selectable-helper")
		},
		_destroy: function ()
		{
			this.selectees.removeData("selectable-item"), this._mouseDestroy()
		},
		_mouseStart: function (i)
		{
			var s = this,
				t = this.options;
			this.opos = [i.pageX, i.pageY], this.elementPos = x(this.element[0]).offset(), this.options.disabled || (this.selectees = x(t.filter, this.element[0]), this._trigger("start", i), x(t.appendTo).append(this.helper), this.helper.css(
			{
				left: i.pageX,
				top: i.pageY,
				width: 0,
				height: 0
			}), t.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function ()
			{
				var t = x.data(this, "selectable-item");
				t.startselected = !0, i.metaKey || i.ctrlKey || (s._removeClass(t.$element, "ui-selected"), t.selected = !1, s._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, s._trigger("unselecting", i,
				{
					unselecting: t.element
				}))
			}), x(i.target).parents().addBack().each(function ()
			{
				var t, e = x.data(this, "selectable-item");
				if (e) return t = !i.metaKey && !i.ctrlKey || !e.$element.hasClass("ui-selected"), s._removeClass(e.$element, t ? "ui-unselecting" : "ui-selected")._addClass(e.$element, t ? "ui-selecting" : "ui-unselecting"), e.unselecting = !t, e.selecting = t, (e.selected = t) ? s._trigger("selecting", i,
				{
					selecting: e.element
				}) : s._trigger("unselecting", i,
				{
					unselecting: e.element
				}), !1
			}))
		},
		_mouseDrag: function (s)
		{
			if (this.dragged = !0, !this.options.disabled)
			{
				var t, n = this,
					o = this.options,
					a = this.opos[0],
					r = this.opos[1],
					h = s.pageX,
					l = s.pageY;
				return h < a && (t = h, h = a, a = t), l < r && (t = l, l = r, r = t), this.helper.css(
				{
					left: a,
					top: r,
					width: h - a,
					height: l - r
				}), this.selectees.each(function ()
				{
					var t = x.data(this, "selectable-item"),
						e = !1,
						i = {};
					t && t.element !== n.element[0] && (i.left = t.left + n.elementPos.left, i.right = t.right + n.elementPos.left, i.top = t.top + n.elementPos.top, i.bottom = t.bottom + n.elementPos.top, "touch" === o.tolerance ? e = !(i.left > h || i.right < a || i.top > l || i.bottom < r) : "fit" === o.tolerance && (e = i.left > a && i.right < h && i.top > r && i.bottom < l), e ? (t.selected && (n._removeClass(t.$element, "ui-selected"), t.selected = !1), t.unselecting && (n._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1), t.selecting || (n._addClass(t.$element, "ui-selecting"), t.selecting = !0, n._trigger("selecting", s,
					{
						selecting: t.element
					}))) : (t.selecting && ((s.metaKey || s.ctrlKey) && t.startselected ? (n._removeClass(t.$element, "ui-selecting"), t.selecting = !1, n._addClass(t.$element, "ui-selected"), t.selected = !0) : (n._removeClass(t.$element, "ui-selecting"), t.selecting = !1, t.startselected && (n._addClass(t.$element, "ui-unselecting"), t.unselecting = !0), n._trigger("unselecting", s,
					{
						unselecting: t.element
					}))), t.selected && (s.metaKey || s.ctrlKey || t.startselected || (n._removeClass(t.$element, "ui-selected"), t.selected = !1, n._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, n._trigger("unselecting", s,
					{
						unselecting: t.element
					})))))
				}), !1
			}
		},
		_mouseStop: function (e)
		{
			var i = this;
			return this.dragged = !1, x(".ui-unselecting", this.element[0]).each(function ()
			{
				var t = x.data(this, "selectable-item");
				i._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1, t.startselected = !1, i._trigger("unselected", e,
				{
					unselected: t.element
				})
			}), x(".ui-selecting", this.element[0]).each(function ()
			{
				var t = x.data(this, "selectable-item");
				i._removeClass(t.$element, "ui-selecting")._addClass(t.$element, "ui-selected"), t.selecting = !1, t.selected = !0, t.startselected = !0, i._trigger("selected", e,
				{
					selected: t.element
				})
			}), this._trigger("stop", e), this.helper.remove(), !1
		}
	}), x.widget("ui.selectmenu", [x.ui.formResetMixin,
	{
		version: "1.12.1",
		defaultElement: "<select>",
		options:
		{
			appendTo: null,
			classes:
			{
				"ui-selectmenu-button-open": "ui-corner-top",
				"ui-selectmenu-button-closed": "ui-corner-all"
			},
			disabled: null,
			icons:
			{
				button: "ui-icon-triangle-1-s"
			},
			position:
			{
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			width: !1,
			change: null,
			close: null,
			focus: null,
			open: null,
			select: null
		},
		_create: function ()
		{
			var t = this.element.uniqueId().attr("id");
			this.ids = {
				element: t,
				button: t + "-button",
				menu: t + "-menu"
			}, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = x()
		},
		_drawButton: function ()
		{
			var t, e = this,
				i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
			this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels,
			{
				click: function (t)
				{
					this.button.focus(), t.preventDefault()
				}
			}), this.element.hide(), this.button = x("<span>",
			{
				tabindex: this.options.disabled ? -1 : 0,
				id: this.ids.button,
				role: "combobox",
				"aria-expanded": "false",
				"aria-autocomplete": "list",
				"aria-owns": this.ids.menu,
				"aria-haspopup": "true",
				title: this.element.attr("title")
			}).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), t = x("<span>").appendTo(this.button), this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(i).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function ()
			{
				e._rendered || e._refreshMenu()
			})
		},
		_drawMenu: function ()
		{
			var s = this;
			this.menu = x("<ul>",
			{
				"aria-hidden": "true",
				"aria-labelledby": this.ids.button,
				id: this.ids.menu
			}), this.menuWrap = x("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu(
			{
				classes:
				{
					"ui-menu": "ui-corner-bottom"
				},
				role: "listbox",
				select: function (t, e)
				{
					t.preventDefault(), s._setSelection(), s._select(e.item.data("ui-selectmenu-item"), t)
				},
				focus: function (t, e)
				{
					var i = e.item.data("ui-selectmenu-item");
					null != s.focusIndex && i.index !== s.focusIndex && (s._trigger("focus", t,
					{
						item: i
					}), s.isOpen || s._select(i, t)), s.focusIndex = i.index, s.button.attr("aria-activedescendant", s.menuItems.eq(i.index).attr("id"))
				}
			}).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function ()
			{
				return !1
			}, this.menuInstance._isDivider = function ()
			{
				return !1
			}
		},
		refresh: function ()
		{
			this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") ||
			{})), null === this.options.width && this._resizeButton()
		},
		_refreshMenu: function ()
		{
			var t, e = this.element.find("option");
			this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
		},
		open: function (t)
		{
			this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
		},
		_position: function ()
		{
			this.menuWrap.position(x.extend(
			{
				of: this.button
			}, this.options.position))
		},
		close: function (t)
		{
			this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
		},
		widget: function ()
		{
			return this.button
		},
		menuWidget: function ()
		{
			return this.menu
		},
		_renderButtonItem: function (t)
		{
			var e = x("<span>");
			return this._setText(e, t.label), this._addClass(e, "ui-selectmenu-text"), e
		},
		_renderMenu: function (s, t)
		{
			var n = this,
				o = "";
			x.each(t, function (t, e)
			{
				var i;
				e.optgroup !== o && (i = x("<li>",
				{
					text: e.optgroup
				}), n._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), i.appendTo(s), o = e.optgroup), n._renderItemData(s, e)
			})
		},
		_renderItemData: function (t, e)
		{
			return this._renderItem(t, e).data("ui-selectmenu-item", e)
		},
		_renderItem: function (t, e)
		{
			var i = x("<li>"),
				s = x("<div>",
				{
					title: e.element.attr("title")
				});
			return e.disabled && this._addClass(i, null, "ui-state-disabled"), this._setText(s, e.label), i.append(s).appendTo(t)
		},
		_setText: function (t, e)
		{
			e ? t.text(e) : t.html("&#160;")
		},
		_move: function (t, e)
		{
			var i, s, n = ".ui-menu-item";
			this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s)
		},
		_getSelectedItem: function ()
		{
			return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
		},
		_toggle: function (t)
		{
			this[this.isOpen ? "close" : "open"](t)
		},
		_setSelection: function ()
		{
			var t;
			this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
		},
		_documentClick:
		{
			mousedown: function (t)
			{
				this.isOpen && (x(t.target).closest(".ui-selectmenu-menu, #" + x.ui.escapeSelector(this.ids.button)).length || this.close(t))
			}
		},
		_buttonEvents:
		{
			mousedown: function ()
			{
				var t;
				window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
			},
			click: function (t)
			{
				this._setSelection(), this._toggle(t)
			},
			keydown: function (t)
			{
				var e = !0;
				switch (t.keyCode)
				{
				case x.ui.keyCode.TAB:
				case x.ui.keyCode.ESCAPE:
					this.close(t), e = !1;
					break;
				case x.ui.keyCode.ENTER:
					this.isOpen && this._selectFocusedItem(t);
					break;
				case x.ui.keyCode.UP:
					t.altKey ? this._toggle(t) : this._move("prev", t);
					break;
				case x.ui.keyCode.DOWN:
					t.altKey ? this._toggle(t) : this._move("next", t);
					break;
				case x.ui.keyCode.SPACE:
					this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
					break;
				case x.ui.keyCode.LEFT:
					this._move("prev", t);
					break;
				case x.ui.keyCode.RIGHT:
					this._move("next", t);
					break;
				case x.ui.keyCode.HOME:
				case x.ui.keyCode.PAGE_UP:
					this._move("first", t);
					break;
				case x.ui.keyCode.END:
				case x.ui.keyCode.PAGE_DOWN:
					this._move("last", t);
					break;
				default:
					this.menu.trigger(t), e = !1
				}
				e && t.preventDefault()
			}
		},
		_selectFocusedItem: function (t)
		{
			var e = this.menuItems.eq(this.focusIndex).parent("li");
			e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
		},
		_select: function (t, e)
		{
			var i = this.element[0].selectedIndex;
			this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e,
			{
				item: t
			}), t.index !== i && this._trigger("change", e,
			{
				item: t
			}), this.close(e)
		},
		_setAria: function (t)
		{
			var e = this.menuItems.eq(t.index).attr("id");
			this.button.attr(
			{
				"aria-labelledby": e,
				"aria-activedescendant": e
			}), this.menu.attr("aria-activedescendant", e)
		},
		_setOption: function (t, e)
		{
			var i;
			"icons" === t && (i = this.button.find("span.ui-icon"), this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
		},
		_setOptionDisabled: function (t)
		{
			this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
		},
		_appendTo: function ()
		{
			var t = this.options.appendTo;
			return (t = t && (t.jquery || t.nodeType ? x(t) : this.document.find(t).eq(0))) && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
		},
		_toggleAttr: function ()
		{
			this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
		},
		_resizeButton: function ()
		{
			var t = this.options.width;
			!1 !== t ? (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)) : this.button.css("width", "")
		},
		_resizeMenu: function ()
		{
			this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
		},
		_getCreateOptions: function ()
		{
			var t = this._super();
			return t.disabled = this.element.prop("disabled"), t
		},
		_parseOptions: function (t)
		{
			var i = this,
				s = [];
			t.each(function (t, e)
			{
				s.push(i._parseOption(x(e), t))
			}), this.items = s
		},
		_parseOption: function (t, e)
		{
			var i = t.parent("optgroup");
			return {
				element: t,
				index: e,
				value: t.val(),
				label: t.text(),
				optgroup: i.attr("label") || "",
				disabled: i.prop("disabled") || t.prop("disabled")
			}
		},
		_destroy: function ()
		{
			this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
		}
	}]), x.widget("ui.slider", x.ui.mouse,
	{
		version: "1.12.1",
		widgetEventPrefix: "slide",
		options:
		{
			animate: !1,
			classes:
			{
				"ui-slider": "ui-corner-all",
				"ui-slider-handle": "ui-corner-all",
				"ui-slider-range": "ui-corner-all ui-widget-header"
			},
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		numPages: 5,
		_create: function ()
		{
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
		},
		_refresh: function ()
		{
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
		},
		_createHandles: function ()
		{
			var t, e = this.options,
				i = this.element.find(".ui-slider-handle"),
				s = [],
				n = e.values && e.values.length || 1;
			for (i.length > n && (i.slice(n).remove(), i = i.slice(0, n)), t = i.length; t < n; t++) s.push("<span tabindex='0'></span>");
			this.handles = i.add(x(s.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (t)
			{
				x(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
			})
		},
		_createRange: function ()
		{
			var t = this.options;
			t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : x.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css(
			{
				left: "",
				bottom: ""
			})) : (this.range = x("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== t.range && "max" !== t.range || this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
		},
		_setupEvents: function ()
		{
			this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
		},
		_destroy: function ()
		{
			this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
		},
		_mouseCapture: function (t)
		{
			var e, i, s, n, o, a, r, h = this,
				l = this.options;
			return !l.disabled && (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), e = {
				x: t.pageX,
				y: t.pageY
			}, i = this._normValueFromMouse(e), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t)
			{
				var e = Math.abs(i - h.values(t));
				(e < s || s === e && (t === h._lastChangedValue || h.values(t) === l.min)) && (s = e, n = x(this), o = t)
			}), !1 !== this._start(t, o) && (this._mouseSliding = !0, this._handleIndex = o, this._addClass(n, null, "ui-state-active"), n.trigger("focus"), a = n.offset(), r = !x(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = r ?
			{
				left: 0,
				top: 0
			} :
			{
				left: t.pageX - a.left - n.width() / 2,
				top: t.pageY - a.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(t, o, i), this._animateOff = !0))
		},
		_mouseStart: function ()
		{
			return !0
		},
		_mouseDrag: function (t)
		{
			var e = {
					x: t.pageX,
					y: t.pageY
				},
				i = this._normValueFromMouse(e);
			return this._slide(t, this._handleIndex, i), !1
		},
		_mouseStop: function (t)
		{
			return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
		},
		_detectOrientation: function ()
		{
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function (t)
		{
			var e, i, s, n = "horizontal" === this.orientation ? (e = this.elementSize.width, t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
				o = n / e;
			return 1 < o && (o = 1), o < 0 && (o = 0), "vertical" === this.orientation && (o = 1 - o), i = this._valueMax() - this._valueMin(), s = this._valueMin() + o * i, this._trimAlignValue(s)
		},
		_uiHash: function (t, e, i)
		{
			var s = {
				handle: this.handles[t],
				handleIndex: t,
				value: void 0 !== e ? e : this.value()
			};
			return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
		},
		_hasMultipleValues: function ()
		{
			return this.options.values && this.options.values.length
		},
		_start: function (t, e)
		{
			return this._trigger("start", t, this._uiHash(e))
		},
		_slide: function (t, e, i)
		{
			var s, n = this.value(),
				o = this.values();
			this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
		},
		_stop: function (t, e)
		{
			this._trigger("stop", t, this._uiHash(e))
		},
		_change: function (t, e)
		{
			this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
		},
		value: function (t)
		{
			return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
		},
		values: function (t, e)
		{
			var i, s, n;
			if (1 < arguments.length) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), void this._change(null, t);
			if (!arguments.length) return this._values();
			if (!x.isArray(t)) return this._hasMultipleValues() ? this._values(t) : this.value();
			for (i = this.options.values, s = t, n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(s[n]), this._change(null, n);
			this._refreshValue()
		},
		_setOption: function (t, e)
		{
			var i, s = 0;
			switch ("range" === t && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), x.isArray(this.options.values) && (s = this.options.values.length), this._super(t, e), t)
			{
			case "orientation":
				this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(e), this.handles.css("horizontal" === e ? "bottom" : "left", "");
				break;
			case "value":
				this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
				break;
			case "values":
				for (this._animateOff = !0, this._refreshValue(), i = s - 1; 0 <= i; i--) this._change(null, i);
				this._animateOff = !1;
				break;
			case "step":
			case "min":
			case "max":
				this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
				break;
			case "range":
				this._animateOff = !0, this._refresh(), this._animateOff = !1
			}
		},
		_setOptionDisabled: function (t)
		{
			this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
		},
		_value: function ()
		{
			var t = this.options.value;
			return t = this._trimAlignValue(t)
		},
		_values: function (t)
		{
			var e, i, s;
			if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
			if (this._hasMultipleValues())
			{
				for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
				return i
			}
			return []
		},
		_trimAlignValue: function (t)
		{
			if (t <= this._valueMin()) return this._valueMin();
			if (t >= this._valueMax()) return this._valueMax();
			var e = 0 < this.options.step ? this.options.step : 1,
				i = (t - this._valueMin()) % e,
				s = t - i;
			return 2 * Math.abs(i) >= e && (s += 0 < i ? e : -e), parseFloat(s.toFixed(5))
		},
		_calculateNewMax: function ()
		{
			var t = this.options.max,
				e = this._valueMin(),
				i = this.options.step;
			(t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
		},
		_precision: function ()
		{
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function (t)
		{
			var e = t.toString(),
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_valueMin: function ()
		{
			return this.options.min
		},
		_valueMax: function ()
		{
			return this.max
		},
		_refreshRange: function (t)
		{
			"vertical" === t && this.range.css(
			{
				width: "",
				left: ""
			}), "horizontal" === t && this.range.css(
			{
				height: "",
				bottom: ""
			})
		},
		_refreshValue: function ()
		{
			var e, i, t, s, n, o = this.options.range,
				a = this.options,
				r = this,
				h = !this._animateOff && a.animate,
				l = {};
			this._hasMultipleValues() ? this.handles.each(function (t)
			{
				i = (r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, l["horizontal" === r.orientation ? "left" : "bottom"] = i + "%", x(this).stop(1, 1)[h ? "animate" : "css"](l, a.animate), !0 === r.options.range && ("horizontal" === r.orientation ? (0 === t && r.range.stop(1, 1)[h ? "animate" : "css"](
				{
					left: i + "%"
				}, a.animate), 1 === t && r.range[h ? "animate" : "css"](
				{
					width: i - e + "%"
				},
				{
					queue: !1,
					duration: a.animate
				})) : (0 === t && r.range.stop(1, 1)[h ? "animate" : "css"](
				{
					bottom: i + "%"
				}, a.animate), 1 === t && r.range[h ? "animate" : "css"](
				{
					height: i - e + "%"
				},
				{
					queue: !1,
					duration: a.animate
				}))), e = i
			}) : (t = this.value(), s = this._valueMin(), n = this._valueMax(), i = n !== s ? (t - s) / (n - s) * 100 : 0, l["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](l, a.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"](
			{
				width: i + "%"
			}, a.animate), "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"](
			{
				width: 100 - i + "%"
			}, a.animate), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"](
			{
				height: i + "%"
			}, a.animate), "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"](
			{
				height: 100 - i + "%"
			}, a.animate))
		},
		_handleEvents:
		{
			keydown: function (t)
			{
				var e, i, s, n = x(t.target).data("ui-slider-handle-index");
				switch (t.keyCode)
				{
				case x.ui.keyCode.HOME:
				case x.ui.keyCode.END:
				case x.ui.keyCode.PAGE_UP:
				case x.ui.keyCode.PAGE_DOWN:
				case x.ui.keyCode.UP:
				case x.ui.keyCode.RIGHT:
				case x.ui.keyCode.DOWN:
				case x.ui.keyCode.LEFT:
					if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(x(t.target), null, "ui-state-active"), !1 === this._start(t, n))) return
				}
				switch (s = this.options.step, e = i = this._hasMultipleValues() ? this.values(n) : this.value(), t.keyCode)
				{
				case x.ui.keyCode.HOME:
					i = this._valueMin();
					break;
				case x.ui.keyCode.END:
					i = this._valueMax();
					break;
				case x.ui.keyCode.PAGE_UP:
					i = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages);
					break;
				case x.ui.keyCode.PAGE_DOWN:
					i = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / this.numPages);
					break;
				case x.ui.keyCode.UP:
				case x.ui.keyCode.RIGHT:
					if (e === this._valueMax()) return;
					i = this._trimAlignValue(e + s);
					break;
				case x.ui.keyCode.DOWN:
				case x.ui.keyCode.LEFT:
					if (e === this._valueMin()) return;
					i = this._trimAlignValue(e - s)
				}
				this._slide(t, n, i)
			},
			keyup: function (t)
			{
				var e = x(t.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(t, e), this._change(t, e), this._removeClass(x(t.target), null, "ui-state-active"))
			}
		}
	}), x.widget("ui.sortable", x.ui.mouse,
	{
		version: "1.12.1",
		widgetEventPrefix: "sort",
		ready: !1,
		options:
		{
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_isOverAxis: function (t, e, i)
		{
			return e <= t && t < e + i
		},
		_isFloating: function (t)
		{
			return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
		},
		_create: function ()
		{
			this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
		},
		_setOption: function (t, e)
		{
			this._super(t, e), "handle" === t && this._setHandleClassName()
		},
		_setHandleClassName: function ()
		{
			var t = this;
			this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), x.each(this.items, function ()
			{
				t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
			})
		},
		_destroy: function ()
		{
			this._mouseDestroy();
			for (var t = this.items.length - 1; 0 <= t; t--) this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_mouseCapture: function (t, e)
		{
			var i = null,
				s = !1,
				n = this;
			return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), x(t.target).parents().each(function ()
			{
				if (x.data(this, n.widgetName + "-item") === n) return i = x(this), !1
			}), x.data(t.target, n.widgetName + "-item") === n && (i = x(t.target)), !!i && (!(this.options.handle && !e && (x(this.options.handle, i).find("*").addBack().each(function ()
			{
				this === t.target && (s = !0)
			}), !s)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0))))
		},
		_mouseStart: function (t, e, i)
		{
			var s, n, o = this.options;
			if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				}, x.extend(this.offset,
				{
					click:
					{
						left: t.pageX - this.offset.left,
						top: t.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (n = this.document.find("body"), this.storedCursor = n.css("cursor"), n.css("cursor", o.cursor), this.storedStylesheet = x("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(n)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
				for (s = this.containers.length - 1; 0 <= s; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
			return x.ui.ddmanager && (x.ui.ddmanager.current = this), x.ui.ddmanager && !o.dropBehaviour && x.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(t), !0
		},
		_mouseDrag: function (t)
		{
			var e, i, s, n, o = this.options,
				a = !1;
			for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), !1 !== a && x.ui.ddmanager && !o.dropBehaviour && x.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; 0 <= e; e--)
				if (s = (i = this.items[e]).item[0], (n = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === n ? "next" : "prev"]()[0] === s || x.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && x.contains(this.element[0], s)))
				{
					if (this.direction = 1 === n ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
					this._rearrange(t, i), this._trigger("change", t, this._uiHash());
					break
				} return this._contactContainers(t), x.ui.ddmanager && x.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function (t, e)
		{
			var i, s, n, o;
			if (t) return x.ui.ddmanager && !this.options.dropBehaviour && x.ui.ddmanager.drop(this, t), this.options.revert ? (s = (i = this).placeholder.offset(), o = {}, (n = this.options.axis) && "x" !== n || (o.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), n && "y" !== n || (o.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, x(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function ()
			{
				i._clear(t)
			})) : this._clear(t, e), !1
		},
		cancel: function ()
		{
			if (this.dragging)
			{
				this._mouseUp(new x.Event("mouseup",
				{
					target: null
				})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
				for (var t = this.containers.length - 1; 0 <= t; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), x.extend(this,
			{
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? x(this.domPosition.prev).after(this.currentItem) : x(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function (e)
		{
			var t = this._getItemsAsjQuery(e && e.connected),
				i = [];
			return e = e ||
			{}, x(t).each(function ()
			{
				var t = (x(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]))
			}), !i.length && e.key && i.push(e.key + "="), i.join("&")
		},
		toArray: function (t)
		{
			var e = this._getItemsAsjQuery(t && t.connected),
				i = [];
			return t = t ||
			{}, e.each(function ()
			{
				i.push(x(t.item || this).attr(t.attribute || "id") || "")
			}), i
		},
		_intersectsWith: function (t)
		{
			var e = this.positionAbs.left,
				i = e + this.helperProportions.width,
				s = this.positionAbs.top,
				n = s + this.helperProportions.height,
				o = t.left,
				a = o + t.width,
				r = t.top,
				h = r + t.height,
				l = this.offset.click.top,
				c = this.offset.click.left,
				u = "x" === this.options.axis || r < s + l && s + l < h,
				d = "y" === this.options.axis || o < e + c && e + c < a,
				p = u && d;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < h
		},
		_intersectsWithPointer: function (t)
		{
			var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
				n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
			return !(!s || !n) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
		},
		_intersectsWithSides: function (t)
		{
			var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
				i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
				s = this._getDragVerticalDirection(),
				n = this._getDragHorizontalDirection();
			return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
		},
		_getDragVerticalDirection: function ()
		{
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 != t && (0 < t ? "down" : "up")
		},
		_getDragHorizontalDirection: function ()
		{
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 != t && (0 < t ? "right" : "left")
		},
		refresh: function (t)
		{
			return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
		},
		_connectWith: function ()
		{
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery: function (t)
		{
			var e, i, s, n, o = [],
				a = [],
				r = this._connectWith();
			if (r && t)
				for (e = r.length - 1; 0 <= e; e--)
					for (i = (s = x(r[e], this.document[0])).length - 1; 0 <= i; i--)(n = x.data(s[i], this.widgetFullName)) && n !== this && !n.options.disabled && a.push([x.isFunction(n.options.items) ? n.options.items.call(n.element) : x(n.options.items, n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), n]);

			function h()
			{
				o.push(this)
			}
			for (a.push([x.isFunction(this.options.items) ? this.options.items.call(this.element, null,
				{
					options: this.options,
					item: this.currentItem
				}) : x(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), e = a.length - 1; 0 <= e; e--) a[e][0].each(h);
			return x(o)
		},
		_removeCurrentsFromItems: function ()
		{
			var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = x.grep(this.items, function (t)
			{
				for (var e = 0; e < i.length; e++)
					if (i[e] === t.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function (t)
		{
			this.items = [], this.containers = [this];
			var e, i, s, n, o, a, r, h, l = this.items,
				c = [
					[x.isFunction(this.options.items) ? this.options.items.call(this.element[0], t,
					{
						item: this.currentItem
					}) : x(this.options.items, this.element), this]
				],
				u = this._connectWith();
			if (u && this.ready)
				for (e = u.length - 1; 0 <= e; e--)
					for (i = (s = x(u[e], this.document[0])).length - 1; 0 <= i; i--)(n = x.data(s[i], this.widgetFullName)) && n !== this && !n.options.disabled && (c.push([x.isFunction(n.options.items) ? n.options.items.call(n.element[0], t,
					{
						item: this.currentItem
					}) : x(n.options.items, n.element), n]), this.containers.push(n));
			for (e = c.length - 1; 0 <= e; e--)
				for (o = c[e][1], i = 0, h = (a = c[e][0]).length; i < h; i++)(r = x(a[i])).data(this.widgetName + "-item", o), l.push(
				{
					item: r,
					instance: o,
					width: 0,
					height: 0,
					left: 0,
					top: 0
				})
		},
		refreshPositions: function (t)
		{
			var e, i, s, n;
			for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), e = this.items.length - 1; 0 <= e; e--)(i = this.items[e]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? x(this.options.toleranceElement, i.item) : i.item, t || (i.width = s.outerWidth(), i.height = s.outerHeight()), n = s.offset(), i.left = n.left, i.top = n.top);
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else
				for (e = this.containers.length - 1; 0 <= e; e--) n = this.containers[e].element.offset(), this.containers[e].containerCache.left = n.left, this.containers[e].containerCache.top = n.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
			return this
		},
		_createPlaceholder: function (i)
		{
			var s, n = (i = i || this).options;
			n.placeholder && n.placeholder.constructor !== String || (s = n.placeholder, n.placeholder = {
				element: function ()
				{
					var t = i.currentItem[0].nodeName.toLowerCase(),
						e = x("<" + t + ">", i.document[0]);
					return i._addClass(e, "ui-sortable-placeholder", s || i.currentItem[0].className)._removeClass(e, "ui-sortable-helper"), "tbody" === t ? i._createTrPlaceholder(i.currentItem.find("tr").eq(0), x("<tr>", i.document[0]).appendTo(e)) : "tr" === t ? i._createTrPlaceholder(i.currentItem, e) : "img" === t && e.attr("src", i.currentItem.attr("src")), s || e.css("visibility", "hidden"), e
				},
				update: function (t, e)
				{
					s && !n.forcePlaceholderSize || (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
				}
			}), i.placeholder = x(n.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), n.placeholder.update(i, i.placeholder)
		},
		_createTrPlaceholder: function (t, e)
		{
			var i = this;
			t.children().each(function ()
			{
				x("<td>&#160;</td>", i.document[0]).attr("colspan", x(this).attr("colspan") || 1).appendTo(e)
			})
		},
		_contactContainers: function (t)
		{
			for (var e, i, s, n, o, a, r, h, l, c = null, u = null, d = this.containers.length - 1; 0 <= d; d--)
				if (!x.contains(this.currentItem[0], this.containers[d].element[0]))
					if (this._intersectsWith(this.containers[d].containerCache))
					{
						if (c && x.contains(this.containers[d].element[0], c.element[0])) continue;
						c = this.containers[d], u = d
					}
			else this.containers[d].containerCache.over && (this.containers[d]._trigger("out", t, this._uiHash(this)), this.containers[d].containerCache.over = 0);
			if (c)
				if (1 === this.containers.length) this.containers[u].containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash(this)), this.containers[u].containerCache.over = 1);
				else
				{
					for (i = 1e4, s = null, n = (h = c.floating || this._isFloating(this.currentItem)) ? "left" : "top", o = h ? "width" : "height", l = h ? "pageX" : "pageY", e = this.items.length - 1; 0 <= e; e--) x.contains(this.containers[u].element[0], this.items[e].item[0]) && this.items[e].item[0] !== this.currentItem[0] && (a = this.items[e].item.offset()[n], r = !1, t[l] - a > this.items[e][o] / 2 && (r = !0), Math.abs(t[l] - a) < i && (i = Math.abs(t[l] - a), s = this.items[e], this.direction = r ? "up" : "down"));
					if (!s && !this.options.dropOnEmpty) return;
					if (this.currentContainer === this.containers[u]) return void(this.currentContainer.containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
					s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[u].element, !0), this._trigger("change", t, this._uiHash()), this.containers[u]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[u], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[u]._trigger("over", t, this._uiHash(this)), this.containers[u].containerCache.over = 1
				}
		},
		_createHelper: function (t)
		{
			var e = this.options,
				i = x.isFunction(e.helper) ? x(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
			return i.parents("body").length || x("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), i[0].style.width && !e.forceHelperSize || i.width(this.currentItem.width()), i[0].style.height && !e.forceHelperSize || i.height(this.currentItem.height()), i
		},
		_adjustOffsetFromHelper: function (t)
		{
			"string" == typeof t && (t = t.split(" ")), x.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_getParentOffset: function ()
		{
			this.offsetParent = this.helper.offsetParent();
			var t = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && x.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && x.ui.ie) && (t = {
				top: 0,
				left: 0
			}),
			{
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function ()
		{
			if ("relative" !== this.cssPosition) return {
				top: 0,
				left: 0
			};
			var t = this.currentItem.position();
			return {
				top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
				left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
			}
		},
		_cacheMargins: function ()
		{
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function ()
		{
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function ()
		{
			var t, e, i, s = this.options;
			"parent" === s.containment && (s.containment = this.helper[0].parentNode), "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (t = x(s.containment)[0], e = x(s.containment).offset(), i = "hidden" !== x(t).css("overflow"), this.containment = [e.left + (parseInt(x(t).css("borderLeftWidth"), 10) || 0) + (parseInt(x(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(x(t).css("borderTopWidth"), 10) || 0) + (parseInt(x(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(x(t).css("borderLeftWidth"), 10) || 0) - (parseInt(x(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(x(t).css("borderTopWidth"), 10) || 0) - (parseInt(x(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function (t, e)
		{
			e = e || this.position;
			var i = "absolute" === t ? 1 : -1,
				s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && x.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				n = /(html|body)/i.test(s[0].tagName);
			return {
				top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()) * i,
				left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft()) * i
			}
		},
		_generatePosition: function (t)
		{
			var e, i, s = this.options,
				n = t.pageX,
				o = t.pageY,
				a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && x.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				r = /(html|body)/i.test(a[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), s.grid && (e = this.originalPageY + Math.round((o - this.originalPageY) / s.grid[1]) * s.grid[1], o = !this.containment || e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3] ? e : e - this.offset.click.top >= this.containment[1] ? e - s.grid[1] : e + s.grid[1], i = this.originalPageX + Math.round((n - this.originalPageX) / s.grid[0]) * s.grid[0], n = !this.containment || i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - s.grid[0] : i + s.grid[0])),
			{
				top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : a.scrollTop()),
				left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : a.scrollLeft())
			}
		},
		_rearrange: function (t, e, i, s)
		{
			i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var n = this.counter;
			this._delay(function ()
			{
				n === this.counter && this.refreshPositions(!s)
			})
		},
		_clear: function (t, e)
		{
			this.reverting = !1;
			var i, s = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0])
			{
				for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
				this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
			}
			else this.currentItem.show();

			function n(e, i, s)
			{
				return function (t)
				{
					s._trigger(e, t, i._uiHash(i))
				}
			}
			for (this.fromOutside && !e && s.push(function (t)
				{
					this._trigger("receive", t, this._uiHash(this.fromOutside))
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t)
				{
					this._trigger("update", t, this._uiHash())
				}), this !== this.currentContainer && (e || (s.push(function (t)
				{
					this._trigger("remove", t, this._uiHash())
				}), s.push(function (e)
				{
					return function (t)
					{
						e._trigger("receive", t, this._uiHash(this))
					}
				}.call(this, this.currentContainer)), s.push(function (e)
				{
					return function (t)
					{
						e._trigger("update", t, this._uiHash(this))
					}
				}.call(this, this.currentContainer)))), i = this.containers.length - 1; 0 <= i; i--) e || s.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (s.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e)
			{
				for (i = 0; i < s.length; i++) s[i].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1, !this.cancelHelperRemoval
		},
		_trigger: function ()
		{
			!1 === x.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
		},
		_uiHash: function (t)
		{
			var e = t || this;
			return {
				helper: e.helper,
				placeholder: e.placeholder || x([]),
				position: e.position,
				originalPosition: e.originalPosition,
				offset: e.positionAbs,
				item: e.currentItem,
				sender: t ? t.element : null
			}
		}
	});

	function at(e)
	{
		return function ()
		{
			var t = this.element.val();
			e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
		}
	}
	x.widget("ui.spinner",
	{
		version: "1.12.1",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options:
		{
			classes:
			{
				"ui-spinner": "ui-corner-all",
				"ui-spinner-down": "ui-corner-br",
				"ui-spinner-up": "ui-corner-tr"
			},
			culture: null,
			icons:
			{
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: !0,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function ()
		{
			this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window,
			{
				beforeunload: function ()
				{
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function ()
		{
			var s = this._super(),
				n = this.element;
			return x.each(["min", "max", "step"], function (t, e)
			{
				var i = n.attr(e);
				null != i && i.length && (s[e] = i)
			}), s
		},
		_events:
		{
			keydown: function (t)
			{
				this._start(t) && this._keydown(t) && t.preventDefault()
			},
			keyup: "_stop",
			focus: function ()
			{
				this.previous = this.element.val()
			},
			blur: function (t)
			{
				this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t))
			},
			mousewheel: function (t, e)
			{
				if (e)
				{
					if (!this.spinning && !this._start(t)) return !1;
					this._spin((0 < e ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function ()
					{
						this.spinning && this._stop(t)
					}, 100), t.preventDefault()
				}
			},
			"mousedown .ui-spinner-button": function (t)
			{
				var e;

				function i()
				{
					this.element[0] === x.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = e, this._delay(function ()
					{
						this.previous = e
					}))
				}
				e = this.element[0] === x.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function ()
				{
					delete this.cancelBlur, i.call(this)
				}), !1 !== this._start(t) && this._repeat(null, x(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function (t)
			{
				if (x(t.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(t) && void this._repeat(null, x(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_enhance: function ()
		{
			this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
		},
		_draw: function ()
		{
			this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button(
			{
				classes:
				{
					"ui-button": ""
				}
			}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button(
			{
				icon: this.options.icons.up,
				showLabel: !1
			}), this.buttons.last().button(
			{
				icon: this.options.icons.down,
				showLabel: !1
			}), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height())
		},
		_keydown: function (t)
		{
			var e = this.options,
				i = x.ui.keyCode;
			switch (t.keyCode)
			{
			case i.UP:
				return this._repeat(null, 1, t), !0;
			case i.DOWN:
				return this._repeat(null, -1, t), !0;
			case i.PAGE_UP:
				return this._repeat(null, e.page, t), !0;
			case i.PAGE_DOWN:
				return this._repeat(null, -e.page, t), !0
			}
			return !1
		},
		_start: function (t)
		{
			return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0)
		},
		_repeat: function (t, e, i)
		{
			t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function ()
			{
				this._repeat(40, e, i)
			}, t), this._spin(e * this.options.step, i)
		},
		_spin: function (t, e)
		{
			var i = this.value() || 0;
			this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e,
			{
				value: i
			}) || (this._value(i), this.counter++)
		},
		_increment: function (t)
		{
			var e = this.options.incremental;
			return e ? x.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
		},
		_precision: function ()
		{
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function (t)
		{
			var e = t.toString(),
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_adjustValue: function (t)
		{
			var e = this.options,
				i = null !== e.min ? e.min : 0,
				s = t - i;
			return t = i + (s = Math.round(s / e.step) * e.step), t = parseFloat(t.toFixed(this._precision())), null !== e.max && t > e.max ? e.max : null !== e.min && t < e.min ? e.min : t
		},
		_stop: function (t)
		{
			this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
		},
		_setOption: function (t, e)
		{
			var i, s, n;
			if ("culture" === t || "numberFormat" === t) return i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i));
			"max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e)
		},
		_setOptionDisabled: function (t)
		{
			this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
		},
		_setOptions: at(function (t)
		{
			this._super(t)
		}),
		_parse: function (t)
		{
			return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
		},
		_format: function (t)
		{
			return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
		},
		_refresh: function ()
		{
			this.element.attr(
			{
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		isValid: function ()
		{
			var t = this.value();
			return null !== t && t === this._adjustValue(t)
		},
		_value: function (t, e)
		{
			var i;
			"" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
		},
		_destroy: function ()
		{
			this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
		},
		stepUp: at(function (t)
		{
			this._stepUp(t)
		}),
		_stepUp: function (t)
		{
			this._start() && (this._spin((t || 1) * this.options.step), this._stop())
		},
		stepDown: at(function (t)
		{
			this._stepDown(t)
		}),
		_stepDown: function (t)
		{
			this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
		},
		pageUp: at(function (t)
		{
			this._stepUp((t || 1) * this.options.page)
		}),
		pageDown: at(function (t)
		{
			this._stepDown((t || 1) * this.options.page)
		}),
		value: function (t)
		{
			if (!arguments.length) return this._parse(this.element.val());
			at(this._value).call(this, t)
		},
		widget: function ()
		{
			return this.uiSpinner
		}
	}), !1 !== x.uiBackCompat && x.widget("ui.spinner", x.ui.spinner,
	{
		_enhance: function ()
		{
			this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
		},
		_uiSpinnerHtml: function ()
		{
			return "<span>"
		},
		_buttonHtml: function ()
		{
			return "<a></a><a></a>"
		}
	});
	var rt;
	x.ui.spinner;
	x.widget("ui.tabs",
	{
		version: "1.12.1",
		delay: 300,
		options:
		{
			active: null,
			classes:
			{
				"ui-tabs": "ui-corner-all",
				"ui-tabs-nav": "ui-corner-all",
				"ui-tabs-panel": "ui-corner-bottom",
				"ui-tabs-tab": "ui-corner-top"
			},
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_isLocal: (rt = /#.*$/, function (t)
		{
			var e = t.href.replace(rt, ""),
				i = location.href.replace(rt, "");
			try
			{
				e = decodeURIComponent(e)
			}
			catch (t)
			{}
			try
			{
				i = decodeURIComponent(i)
			}
			catch (t)
			{}
			return 1 < t.hash.length && e === i
		}),
		_create: function ()
		{
			var e = this,
				t = this.options;
			this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, t.collapsible), this._processTabs(), t.active = this._initialActive(), x.isArray(t.disabled) && (t.disabled = x.unique(t.disabled.concat(x.map(this.tabs.filter(".ui-state-disabled"), function (t)
			{
				return e.tabs.index(t)
			}))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(t.active) : this.active = x(), this._refresh(), this.active.length && this.load(t.active)
		},
		_initialActive: function ()
		{
			var i = this.options.active,
				t = this.options.collapsible,
				s = location.hash.substring(1);
			return null === i && (s && this.tabs.each(function (t, e)
			{
				if (x(e).attr("aria-controls") === s) return i = t, !1
			}), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== i && -1 !== i || (i = !!this.tabs.length && 0)), !1 !== i && -1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0), !t && !1 === i && this.anchors.length && (i = 0), i
		},
		_getCreateEventData: function ()
		{
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : x()
			}
		},
		_tabKeydown: function (t)
		{
			var e = x(x.ui.safeActiveElement(this.document[0])).closest("li"),
				i = this.tabs.index(e),
				s = !0;
			if (!this._handlePageNav(t))
			{
				switch (t.keyCode)
				{
				case x.ui.keyCode.RIGHT:
				case x.ui.keyCode.DOWN:
					i++;
					break;
				case x.ui.keyCode.UP:
				case x.ui.keyCode.LEFT:
					s = !1, i--;
					break;
				case x.ui.keyCode.END:
					i = this.anchors.length - 1;
					break;
				case x.ui.keyCode.HOME:
					i = 0;
					break;
				case x.ui.keyCode.SPACE:
					return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
				case x.ui.keyCode.ENTER:
					return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
				default:
					return
				}
				t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, s), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function ()
				{
					this.option("active", i)
				}, this.delay))
			}
		},
		_panelKeydown: function (t)
		{
			this._handlePageNav(t) || t.ctrlKey && t.keyCode === x.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
		},
		_handlePageNav: function (t)
		{
			return t.altKey && t.keyCode === x.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === x.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
		},
		_findNextTab: function (t, e)
		{
			var i = this.tabs.length - 1;
			for (; - 1 !== x.inArray((i < t && (t = 0), t < 0 && (t = i), t), this.options.disabled);) t = e ? t + 1 : t - 1;
			return t
		},
		_focusNextTab: function (t, e)
		{
			return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
		},
		_setOption: function (t, e)
		{
			"active" !== t ? (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)) : this._activate(e)
		},
		_sanitizeSelector: function (t)
		{
			return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function ()
		{
			var t = this.options,
				e = this.tablist.children(":has(a[href])");
			t.disabled = x.map(e.filter(".ui-state-disabled"), function (t)
			{
				return e.index(t)
			}), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !x.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = x()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = x()), this._refresh()
		},
		_refresh: function ()
		{
			this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr(
			{
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}), this.panels.not(this._getPanelForTab(this.active)).hide().attr(
			{
				"aria-hidden": "true"
			}), this.active.length ? (this.active.attr(
			{
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr(
			{
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function ()
		{
			var h = this,
				t = this.tabs,
				e = this.anchors,
				i = this.panels;
			this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (t)
			{
				x(this).is(".ui-state-disabled") && t.preventDefault()
			}).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function ()
			{
				x(this).closest("li").is(".ui-state-disabled") && this.blur()
			}), this.tabs = this.tablist.find("> li:has(a[href])").attr(
			{
				role: "tab",
				tabIndex: -1
			}), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function ()
			{
				return x("a", this)[0]
			}).attr(
			{
				role: "presentation",
				tabIndex: -1
			}), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = x(), this.anchors.each(function (t, e)
			{
				var i, s, n, o = x(e).uniqueId().attr("id"),
					a = x(e).closest("li"),
					r = a.attr("aria-controls");
				h._isLocal(e) ? (n = (i = e.hash).substring(1), s = h.element.find(h._sanitizeSelector(i))) : (i = "#" + (n = a.attr("aria-controls") || x(
				{}).uniqueId()[0].id), (s = h.element.find(i)).length || (s = h._createPanel(n)).insertAfter(h.panels[t - 1] || h.tablist), s.attr("aria-live", "polite")), s.length && (h.panels = h.panels.add(s)), r && a.data("ui-tabs-aria-controls", r), a.attr(
				{
					"aria-controls": n,
					"aria-labelledby": o
				}), s.attr("aria-labelledby", o)
			}), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)))
		},
		_getList: function ()
		{
			return this.tablist || this.element.find("ol, ul").eq(0)
		},
		_createPanel: function (t)
		{
			return x("<div>").attr("id", t).data("ui-tabs-destroy", !0)
		},
		_setOptionDisabled: function (t)
		{
			var e, i, s;
			for (x.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), s = 0; i = this.tabs[s]; s++) e = x(i), !0 === t || -1 !== x.inArray(s, t) ? (e.attr("aria-disabled", "true"), this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"), this._removeClass(e, null, "ui-state-disabled"));
			this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
		},
		_setupEvents: function (t)
		{
			var i = {};
			t && x.each(t.split(" "), function (t, e)
			{
				i[e] = "_eventHandler"
			}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors,
			{
				click: function (t)
				{
					t.preventDefault()
				}
			}), this._on(this.anchors, i), this._on(this.tabs,
			{
				keydown: "_tabKeydown"
			}), this._on(this.panels,
			{
				keydown: "_panelKeydown"
			}), this._focusable(this.tabs), this._hoverable(this.tabs)
		},
		_setupHeightStyle: function (t)
		{
			var i, e = this.element.parent();
			"fill" === t ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function ()
			{
				var t = x(this),
					e = t.css("position");
				"absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
			}), this.element.children().not(this.panels).each(function ()
			{
				i -= x(this).outerHeight(!0)
			}), this.panels.each(function ()
			{
				x(this).height(Math.max(0, i - x(this).innerHeight() + x(this).height()))
			}).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function ()
			{
				i = Math.max(i, x(this).height("").height())
			}).height(i))
		},
		_eventHandler: function (t)
		{
			var e = this.options,
				i = this.active,
				s = x(t.currentTarget).closest("li"),
				n = s[0] === i[0],
				o = n && e.collapsible,
				a = o ? x() : this._getPanelForTab(s),
				r = i.length ? this._getPanelForTab(i) : x(),
				h = {
					oldTab: i,
					oldPanel: r,
					newTab: o ? x() : s,
					newPanel: a
				};
			t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || n && !e.collapsible || !1 === this._trigger("beforeActivate", t, h) || (e.active = !o && this.tabs.index(s), this.active = n ? x() : s, this.xhr && this.xhr.abort(), r.length || a.length || x.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, h))
		},
		_toggle: function (t, e)
		{
			var i = this,
				s = e.newPanel,
				n = e.oldPanel;

			function o()
			{
				i.running = !1, i._trigger("activate", t, e)
			}

			function a()
			{
				i._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), s.length && i.options.show ? i._show(s, i.options.show, o) : (s.show(), o())
			}
			this.running = !0, n.length && this.options.hide ? this._hide(n, this.options.hide, function ()
			{
				i._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a()
			}) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n.hide(), a()), n.attr("aria-hidden", "true"), e.oldTab.attr(
			{
				"aria-selected": "false",
				"aria-expanded": "false"
			}), s.length && n.length ? e.oldTab.attr("tabIndex", -1) : s.length && this.tabs.filter(function ()
			{
				return 0 === x(this).attr("tabIndex")
			}).attr("tabIndex", -1), s.attr("aria-hidden", "false"), e.newTab.attr(
			{
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			})
		},
		_activate: function (t)
		{
			var e, i = this._findActive(t);
			i[0] !== this.active[0] && (i.length || (i = this.active), e = i.find(".ui-tabs-anchor")[0], this._eventHandler(
			{
				target: e,
				currentTarget: e,
				preventDefault: x.noop
			}))
		},
		_findActive: function (t)
		{
			return !1 === t ? x() : this.tabs.eq(t)
		},
		_getIndex: function (t)
		{
			return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + x.ui.escapeSelector(t) + "']"))), t
		},
		_destroy: function ()
		{
			this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function ()
			{
				x.data(this, "ui-tabs-destroy") ? x(this).remove() : x(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
			}), this.tabs.each(function ()
			{
				var t = x(this),
					e = t.data("ui-tabs-aria-controls");
				e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
			}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
		},
		enable: function (i)
		{
			var t = this.options.disabled;
			!1 !== t && (t = void 0 !== i && (i = this._getIndex(i), x.isArray(t) ? x.map(t, function (t)
			{
				return t !== i ? t : null
			}) : x.map(this.tabs, function (t, e)
			{
				return e !== i ? e : null
			})), this._setOptionDisabled(t))
		},
		disable: function (t)
		{
			var e = this.options.disabled;
			if (!0 !== e)
			{
				if (void 0 === t) e = !0;
				else
				{
					if (t = this._getIndex(t), -1 !== x.inArray(t, e)) return;
					e = x.isArray(e) ? x.merge([t], e).sort() : [t]
				}
				this._setOptionDisabled(e)
			}
		},
		load: function (t, s)
		{
			t = this._getIndex(t);

			function n(t, e)
			{
				"abort" === e && o.panels.stop(!1, !0), o._removeClass(i, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === o.xhr && delete o.xhr
			}
			var o = this,
				i = this.tabs.eq(t),
				e = i.find(".ui-tabs-anchor"),
				a = this._getPanelForTab(i),
				r = {
					tab: i,
					panel: a
				};
			this._isLocal(e[0]) || (this.xhr = x.ajax(this._ajaxSettings(e, s, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, i)
			{
				setTimeout(function ()
				{
					a.html(t), o._trigger("load", s, r), n(i, e)
				}, 1)
			}).fail(function (t, e)
			{
				setTimeout(function ()
				{
					n(t, e)
				}, 1)
			})))
		},
		_ajaxSettings: function (t, i, s)
		{
			var n = this;
			return {
				url: t.attr("href").replace(/#.*$/, ""),
				beforeSend: function (t, e)
				{
					return n._trigger("beforeLoad", i, x.extend(
					{
						jqXHR: t,
						ajaxSettings: e
					}, s))
				}
			}
		},
		_getPanelForTab: function (t)
		{
			var e = x(t).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + e))
		}
	}), !1 !== x.uiBackCompat && x.widget("ui.tabs", x.ui.tabs,
	{
		_processTabs: function ()
		{
			this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
		}
	});
	x.ui.tabs;
	x.widget("ui.tooltip",
	{
		version: "1.12.1",
		options:
		{
			classes:
			{
				"ui-tooltip": "ui-corner-all ui-widget-shadow"
			},
			content: function ()
			{
				var t = x(this).attr("title") || "";
				return x("<a>").text(t).html()
			},
			hide: !0,
			items: "[title]:not([disabled])",
			position:
			{
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: !0,
			track: !1,
			close: null,
			open: null
		},
		_addDescribedBy: function (t, e)
		{
			var i = (t.attr("aria-describedby") || "").split(/\s+/);
			i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", x.trim(i.join(" ")))
		},
		_removeDescribedBy: function (t)
		{
			var e = t.data("ui-tooltip-id"),
				i = (t.attr("aria-describedby") || "").split(/\s+/),
				s = x.inArray(e, i); - 1 !== s && i.splice(s, 1), t.removeData("ui-tooltip-id"), (i = x.trim(i.join(" "))) ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
		},
		_create: function ()
		{
			this._on(
			{
				mouseover: "open",
				focusin: "open"
			}), this.tooltips = {}, this.parents = {}, this.liveRegion = x("<div>").attr(
			{
				role: "log",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = x([])
		},
		_setOption: function (t, e)
		{
			var i = this;
			this._super(t, e), "content" === t && x.each(this.tooltips, function (t, e)
			{
				i._updateContent(e.element)
			})
		},
		_setOptionDisabled: function (t)
		{
			this[t ? "_disable" : "_enable"]()
		},
		_disable: function ()
		{
			var s = this;
			x.each(this.tooltips, function (t, e)
			{
				var i = x.Event("blur");
				i.target = i.currentTarget = e.element[0], s.close(i, !0)
			}), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function ()
			{
				var t = x(this);
				if (t.is("[title]")) return t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
			}))
		},
		_enable: function ()
		{
			this.disabledTitles.each(function ()
			{
				var t = x(this);
				t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
			}), this.disabledTitles = x([])
		},
		open: function (t)
		{
			var i = this,
				e = x(t ? t.target : this.element).closest(this.options.items);
			e.length && !e.data("ui-tooltip-id") && (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")), e.data("ui-tooltip-open", !0), t && "mouseover" === t.type && e.parents().each(function ()
			{
				var t, e = x(this);
				e.data("ui-tooltip-open") && ((t = x.Event("blur")).target = t.currentTarget = this, i.close(t, !0)), e.attr("title") && (e.uniqueId(), i.parents[this.id] = {
					element: this,
					title: e.attr("title")
				}, e.attr("title", ""))
			}), this._registerCloseHandlers(t, e), this._updateContent(e, t))
		},
		_updateContent: function (e, i)
		{
			var t, s = this.options.content,
				n = this,
				o = i ? i.type : null;
			if ("string" == typeof s || s.nodeType || s.jquery) return this._open(i, e, s);
			(t = s.call(e[0], function (t)
			{
				n._delay(function ()
				{
					e.data("ui-tooltip-open") && (i && (i.type = o), this._open(i, e, t))
				})
			})) && this._open(i, e, t)
		},
		_open: function (t, e, i)
		{
			var s, n, o, a, r = x.extend(
			{}, this.options.position);

			function h(t)
			{
				r.of = t, n.is(":hidden") || n.position(r)
			}
			i && ((s = this._find(e)) ? s.tooltip.find(".ui-tooltip-content").html(i) : (e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")), s = this._tooltip(e), n = s.tooltip, this._addDescribedBy(e, n.attr("id")), n.find(".ui-tooltip-content").html(i), this.liveRegion.children().hide(), (a = x("<div>").html(n.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), a.removeAttr("id").find("[id]").removeAttr("id"), a.appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document,
			{
				mousemove: h
			}), h(t)) : n.position(x.extend(
			{
				of: e
			}, this.options.position)), n.hide(), this._show(n, this.options.show), this.options.track && this.options.show && this.options.show.delay && (o = this.delayedShow = setInterval(function ()
			{
				n.is(":visible") && (h(r.of), clearInterval(o))
			}, x.fx.interval)), this._trigger("open", t,
			{
				tooltip: n
			})))
		},
		_registerCloseHandlers: function (t, i)
		{
			var e = {
				keyup: function (t)
				{
					var e;
					t.keyCode === x.ui.keyCode.ESCAPE && ((e = x.Event(t)).currentTarget = i[0], this.close(e, !0))
				}
			};
			i[0] !== this.element[0] && (e.remove = function ()
			{
				this._removeTooltip(this._find(i).tooltip)
			}), t && "mouseover" !== t.type || (e.mouseleave = "close"), t && "focusin" !== t.type || (e.focusout = "close"), this._on(!0, i, e)
		},
		close: function (t)
		{
			var e, i = this,
				s = x(t ? t.currentTarget : this.element),
				n = this._find(s);
			n ? (e = n.tooltip, n.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), n.hiding = !0, e.stop(!0), this._hide(e, this.options.hide, function ()
			{
				i._removeTooltip(x(this))
			}), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && x.each(this.parents, function (t, e)
			{
				x(e.element).attr("title", e.title), delete i.parents[t]
			}), n.closing = !0, this._trigger("close", t,
			{
				tooltip: e
			}), n.hiding || (n.closing = !1))) : s.removeData("ui-tooltip-open")
		},
		_tooltip: function (t)
		{
			var e = x("<div>").attr("role", "tooltip"),
				i = x("<div>").appendTo(e),
				s = e.uniqueId().attr("id");
			return this._addClass(i, "ui-tooltip-content"), this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"), e.appendTo(this._appendTo(t)), this.tooltips[s] = {
				element: t,
				tooltip: e
			}
		},
		_find: function (t)
		{
			var e = t.data("ui-tooltip-id");
			return e ? this.tooltips[e] : null
		},
		_removeTooltip: function (t)
		{
			t.remove(), delete this.tooltips[t.attr("id")]
		},
		_appendTo: function (t)
		{
			var e = t.closest(".ui-front, dialog");
			return e.length || (e = this.document[0].body), e
		},
		_destroy: function ()
		{
			var n = this;
			x.each(this.tooltips, function (t, e)
			{
				var i = x.Event("blur"),
					s = e.element;
				i.target = i.currentTarget = s[0], n.close(i, !0), x("#" + t).remove(), s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
			}), this.liveRegion.remove()
		}
	}), !1 !== x.uiBackCompat && x.widget("ui.tooltip", x.ui.tooltip,
	{
		options:
		{
			tooltipClass: null
		},
		_tooltip: function ()
		{
			var t = this._superApply(arguments);
			return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
		}
	});
	x.ui.tooltip
});
var DateFormatter;
! function ()
{
	"use strict";
	var e, t, a, n, r, o, i;
	o = 864e5, i = 3600, e = function (e, t)
	{
		return "string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase()
	}, t = function (e, a, n)
	{
		var r = n || "0",
			o = e.toString();
		return o.length < a ? t(r + o, a) : o
	}, a = function (e)
	{
		var t, n;
		for (e = e ||
			{}, t = 1; t < arguments.length; t++)
			if (n = arguments[t])
				for (var r in n) n.hasOwnProperty(r) && ("object" == typeof n[r] ? a(e[r], n[r]) : e[r] = n[r]);
		return e
	}, n = function (e, t)
	{
		for (var a = 0; a < t.length; a++)
			if (t[a].toLowerCase() === e.toLowerCase()) return a;
		return -1
	}, r = {
		dateSettings:
		{
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			meridiem: ["AM", "PM"],
			ordinal: function (e)
			{
				var t = e % 10,
					a = {
						1: "st",
						2: "nd",
						3: "rd"
					};
				return 1 !== Math.floor(e % 100 / 10) && a[t] ? a[t] : "th"
			}
		},
		separators: /[ \-+\/\.T:@]/g,
		validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
		intParts: /[djwNzmnyYhHgGis]/g,
		tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		tzClip: /[^-+\dA-Z]/g
	}, (DateFormatter = function (e)
	{
		var t = this,
			n = a(r, e);
		t.dateSettings = n.dateSettings, t.separators = n.separators, t.validParts = n.validParts, t.intParts = n.intParts, t.tzParts = n.tzParts, t.tzClip = n.tzClip
	}).prototype = {
		constructor: DateFormatter,
		getMonth: function (e)
		{
			var t, a = this;
			return 0 === (t = n(e, a.dateSettings.monthsShort) + 1) && (t = n(e, a.dateSettings.months) + 1), t
		},
		parseDate: function (t, a)
		{
			var n, r, o, i, s, d, u, l, f, c, m = this,
				h = !1,
				g = !1,
				p = m.dateSettings,
				y = {
					date: null,
					year: null,
					month: null,
					day: null,
					hour: 0,
					min: 0,
					sec: 0
				};
			if (!t) return null;
			if (t instanceof Date) return t;
			if ("U" === a) return (o = parseInt(t)) ? new Date(1e3 * o) : t;
			switch (typeof t)
			{
			case "number":
				return new Date(t);
			case "string":
				break;
			default:
				return null
			}
			if (!(n = a.match(m.validParts)) || 0 === n.length) throw new Error("Invalid date format definition.");
			for (r = t.replace(m.separators, "\0").split("\0"), o = 0; o < r.length; o++) switch (i = r[o], s = parseInt(i), n[o])
			{
			case "y":
			case "Y":
				if (!s) return null;
				f = i.length, y.year = 2 === f ? parseInt((70 > s ? "20" : "19") + i) : s, h = !0;
				break;
			case "m":
			case "n":
			case "M":
			case "F":
				if (isNaN(s))
				{
					if (!((d = m.getMonth(i)) > 0)) return null;
					y.month = d
				}
				else
				{
					if (!(s >= 1 && 12 >= s)) return null;
					y.month = s
				}
				h = !0;
				break;
			case "d":
			case "j":
				if (!(s >= 1 && 31 >= s)) return null;
				y.day = s, h = !0;
				break;
			case "g":
			case "h":
				if (u = n.indexOf("a") > -1 ? n.indexOf("a") : n.indexOf("A") > -1 ? n.indexOf("A") : -1, c = r[u], u > -1) l = e(c, p.meridiem[0]) ? 0 : e(c, p.meridiem[1]) ? 12 : -1, s >= 1 && 12 >= s && l > -1 ? y.hour = s + l - 1 : s >= 0 && 23 >= s && (y.hour = s);
				else
				{
					if (!(s >= 0 && 23 >= s)) return null;
					y.hour = s
				}
				g = !0;
				break;
			case "G":
			case "H":
				if (!(s >= 0 && 23 >= s)) return null;
				y.hour = s, g = !0;
				break;
			case "i":
				if (!(s >= 0 && 59 >= s)) return null;
				y.min = s, g = !0;
				break;
			case "s":
				if (!(s >= 0 && 59 >= s)) return null;
				y.sec = s, g = !0
			}
			if (!0 === h && y.year && y.month && y.day) y.date = new Date(y.year, y.month - 1, y.day, y.hour, y.min, y.sec, 0);
			else
			{
				if (!0 !== g) return null;
				y.date = new Date(0, 0, 0, y.hour, y.min, y.sec, 0)
			}
			return y.date
		},
		guessDate: function (e, t)
		{
			if ("string" != typeof e) return e;
			var a, n, r, o, i, s, d = this,
				u = e.replace(d.separators, "\0").split("\0"),
				l = /^[djmn]/g,
				f = t.match(d.validParts),
				c = new Date,
				m = 0;
			if (!l.test(f[0])) return e;
			for (r = 0; r < u.length; r++)
			{
				if (m = 2, i = u[r], s = parseInt(i.substr(0, 2)), isNaN(s)) return null;
				switch (r)
				{
				case 0:
					"m" === f[0] || "n" === f[0] ? c.setMonth(s - 1) : c.setDate(s);
					break;
				case 1:
					"m" === f[0] || "n" === f[0] ? c.setDate(s) : c.setMonth(s - 1);
					break;
				case 2:
					if (n = c.getFullYear(), a = i.length, m = 4 > a ? a : 4, !(n = parseInt(4 > a ? n.toString().substr(0, 4 - a) + i : i.substr(0, 4)))) return null;
					c.setFullYear(n);
					break;
				case 3:
					c.setHours(s);
					break;
				case 4:
					c.setMinutes(s);
					break;
				case 5:
					c.setSeconds(s)
				}(o = i.substr(m)).length > 0 && u.splice(r + 1, 0, o)
			}
			return c
		},
		parseFormat: function (e, a)
		{
			var n, r = this,
				s = r.dateSettings,
				d = /\\?(.?)/gi,
				u = function (e, t)
				{
					return n[e] ? n[e]() : t
				};
			return n = {
				d: function ()
				{
					return t(n.j(), 2)
				},
				D: function ()
				{
					return s.daysShort[n.w()]
				},
				j: function ()
				{
					return a.getDate()
				},
				l: function ()
				{
					return s.days[n.w()]
				},
				N: function ()
				{
					return n.w() || 7
				},
				w: function ()
				{
					return a.getDay()
				},
				z: function ()
				{
					var e = new Date(n.Y(), n.n() - 1, n.j()),
						t = new Date(n.Y(), 0, 1);
					return Math.round((e - t) / o)
				},
				W: function ()
				{
					var e = new Date(n.Y(), n.n() - 1, n.j() - n.N() + 3),
						a = new Date(e.getFullYear(), 0, 4);
					return t(1 + Math.round((e - a) / o / 7), 2)
				},
				F: function ()
				{
					return s.months[a.getMonth()]
				},
				m: function ()
				{
					return t(n.n(), 2)
				},
				M: function ()
				{
					return s.monthsShort[a.getMonth()]
				},
				n: function ()
				{
					return a.getMonth() + 1
				},
				t: function ()
				{
					return new Date(n.Y(), n.n(), 0).getDate()
				},
				L: function ()
				{
					var e = n.Y();
					return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 1 : 0
				},
				o: function ()
				{
					var e = n.n(),
						t = n.W();
					return n.Y() + (12 === e && 9 > t ? 1 : 1 === e && t > 9 ? -1 : 0)
				},
				Y: function ()
				{
					return a.getFullYear()
				},
				y: function ()
				{
					return n.Y().toString().slice(-2)
				},
				a: function ()
				{
					return n.A().toLowerCase()
				},
				A: function ()
				{
					var e = n.G() < 12 ? 0 : 1;
					return s.meridiem[e]
				},
				B: function ()
				{
					var e = a.getUTCHours() * i,
						n = 60 * a.getUTCMinutes(),
						r = a.getUTCSeconds();
					return t(Math.floor((e + n + r + i) / 86.4) % 1e3, 3)
				},
				g: function ()
				{
					return n.G() % 12 || 12
				},
				G: function ()
				{
					return a.getHours()
				},
				h: function ()
				{
					return t(n.g(), 2)
				},
				H: function ()
				{
					return t(n.G(), 2)
				},
				i: function ()
				{
					return t(a.getMinutes(), 2)
				},
				s: function ()
				{
					return t(a.getSeconds(), 2)
				},
				u: function ()
				{
					return t(1e3 * a.getMilliseconds(), 6)
				},
				e: function ()
				{
					return /\((.*)\)/.exec(String(a))[1] || "Coordinated Universal Time"
				},
				I: function ()
				{
					return new Date(n.Y(), 0) - Date.UTC(n.Y(), 0) != new Date(n.Y(), 6) - Date.UTC(n.Y(), 6) ? 1 : 0
				},
				O: function ()
				{
					var e = a.getTimezoneOffset(),
						n = Math.abs(e);
					return (e > 0 ? "-" : "+") + t(100 * Math.floor(n / 60) + n % 60, 4)
				},
				P: function ()
				{
					var e = n.O();
					return e.substr(0, 3) + ":" + e.substr(3, 2)
				},
				T: function ()
				{
					return (String(a).match(r.tzParts) || [""]).pop().replace(r.tzClip, "") || "UTC"
				},
				Z: function ()
				{
					return 60 * -a.getTimezoneOffset()
				},
				c: function ()
				{
					return "Y-m-d\\TH:i:sP".replace(d, u)
				},
				r: function ()
				{
					return "D, d M Y H:i:s O".replace(d, u)
				},
				U: function ()
				{
					return a.getTime() / 1e3 || 0
				}
			}, u(e, e)
		},
		formatDate: function (e, t)
		{
			var a, n, r, o, i, s = this,
				d = "";
			if ("string" == typeof e && !(e = s.parseDate(e, t))) return null;
			if (e instanceof Date)
			{
				for (r = t.length, a = 0; r > a; a++) "S" !== (i = t.charAt(a)) && "\\" !== i && (a > 0 && "\\" === t.charAt(a - 1) ? d += i : (o = s.parseFormat(i, e), a !== r - 1 && s.intParts.test(i) && "S" === t.charAt(a + 1) && (n = parseInt(o) || 0, o += s.dateSettings.ordinal(n)), d += o));
				return d
			}
			return ""
		}
	}
}();
var datetimepickerFactory = function (e)
{
	"use strict";

	function t(e, t, a)
	{
		this.date = e, this.desc = t, this.style = a
	}
	var a = {
			i18n:
			{
				ar:
				{
					months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
					dayOfWeekShort: ["ن", "ث", "ع", "خ", "ج", "س", "ح"],
					dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
				},
				ro:
				{
					months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
					dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
					dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
				},
				id:
				{
					months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
					dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
					dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
				},
				is:
				{
					months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
					dayOfWeekShort: ["Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"],
					dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
				},
				bg:
				{
					months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
					dayOfWeekShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
				},
				fa:
				{
					months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
					dayOfWeekShort: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
					dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]
				},
				ru:
				{
					months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
					dayOfWeekShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
				},
				uk:
				{
					months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
					dayOfWeekShort: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
					dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
				},
				en:
				{
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
				},
				el:
				{
					months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
					dayOfWeekShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
					dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
				},
				de:
				{
					months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
					dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
					dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
				},
				nl:
				{
					months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
					dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
					dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
				},
				tr:
				{
					months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
					dayOfWeekShort: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
					dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
				},
				fr:
				{
					months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
					dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
					dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
				},
				es:
				{
					months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
					dayOfWeekShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
					dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
				},
				th:
				{
					months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
					dayOfWeekShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
					dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]
				},
				pl:
				{
					months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
					dayOfWeekShort: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"],
					dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
				},
				pt:
				{
					months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
					dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
					dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
				},
				ch:
				{
					months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
					dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"]
				},
				se:
				{
					months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
				},
				km:
				{
					months: ["មករា​", "កុម្ភៈ", "មិនា​", "មេសា​", "ឧសភា​", "មិថុនា​", "កក្កដា​", "សីហា​", "កញ្ញា​", "តុលា​", "វិច្ឆិកា", "ធ្នូ​"],
					dayOfWeekShort: ["អាទិ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហ​​", "សុក្រ​", "សៅរ៍"],
					dayOfWeek: ["អាទិត្យ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហស្បតិ៍​", "សុក្រ​", "សៅរ៍"]
				},
				kr:
				{
					months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
					dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
					dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
				},
				it:
				{
					months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
					dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
					dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
				},
				da:
				{
					months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
					dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
				},
				no:
				{
					months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
					dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
					dayOfWeek: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
				},
				ja:
				{
					months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
					dayOfWeekShort: ["日", "月", "火", "水", "木", "金", "土"],
					dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]
				},
				vi:
				{
					months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
					dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
					dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
				},
				sl:
				{
					months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
					dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
				},
				cs:
				{
					months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
					dayOfWeekShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
				},
				hu:
				{
					months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
					dayOfWeekShort: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"],
					dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
				},
				az:
				{
					months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
					dayOfWeekShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
					dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
				},
				bs:
				{
					months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
					dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
					dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
				},
				ca:
				{
					months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
					dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
					dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
				},
				"en-GB":
				{
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
				},
				et:
				{
					months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
					dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
					dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
				},
				eu:
				{
					months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
					dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
					dayOfWeek: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"]
				},
				fi:
				{
					months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
					dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
					dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
				},
				gl:
				{
					months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
					dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
					dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]
				},
				hr:
				{
					months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
					dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
					dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
				},
				ko:
				{
					months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
					dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
					dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
				},
				lt:
				{
					months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"],
					dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"],
					dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
				},
				lv:
				{
					months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
					dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
					dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
				},
				mk:
				{
					months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
					dayOfWeekShort: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
					dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
				},
				mn:
				{
					months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
					dayOfWeekShort: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"],
					dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
				},
				"pt-BR":
				{
					months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
					dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
					dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
				},
				sk:
				{
					months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
					dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
					dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
				},
				sq:
				{
					months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
					dayOfWeekShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"],
					dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
				},
				"sr-YU":
				{
					months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
					dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"],
					dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
				},
				sr:
				{
					months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
					dayOfWeekShort: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
					dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]
				},
				sv:
				{
					months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
					dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
				},
				"zh-TW":
				{
					months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
					dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
					dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
				},
				zh:
				{
					months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
					dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
					dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
				},
				ug:
				{
					months: ["1-ئاي", "2-ئاي", "3-ئاي", "4-ئاي", "5-ئاي", "6-ئاي", "7-ئاي", "8-ئاي", "9-ئاي", "10-ئاي", "11-ئاي", "12-ئاي"],
					dayOfWeek: ["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"]
				},
				he:
				{
					months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
					dayOfWeekShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
					dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]
				},
				hy:
				{
					months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
					dayOfWeekShort: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"],
					dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
				},
				kg:
				{
					months: ["Үчтүн айы", "Бирдин айы", "Жалган Куран", "Чын Куран", "Бугу", "Кулжа", "Теке", "Баш Оона", "Аяк Оона", "Тогуздун айы", "Жетинин айы", "Бештин айы"],
					dayOfWeekShort: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"],
					dayOfWeek: ["Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"]
				},
				rm:
				{
					months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
					dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
					dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
				},
				ka:
				{
					months: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
					dayOfWeekShort: ["კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"],
					dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
				}
			},
			ownerDocument: document,
			contentWindow: window,
			value: "",
			rtl: !1,
			format: "Y/m/d H:i",
			formatTime: "H:i",
			formatDate: "Y/m/d",
			startDate: !1,
			step: 60,
			monthChangeSpinner: !0,
			closeOnDateSelect: !1,
			closeOnTimeSelect: !0,
			closeOnWithoutClick: !0,
			closeOnInputClick: !0,
			timepicker: !0,
			datepicker: !0,
			weeks: !1,
			defaultTime: !1,
			defaultDate: !1,
			minDate: !1,
			maxDate: !1,
			minTime: !1,
			maxTime: !1,
			minDateTime: !1,
			disabledMinTime: !1,
			disabledMaxTime: !1,
			allowTimes: [],
			opened: !1,
			initTime: !0,
			inline: !1,
			theme: "",
			onSelectDate: function () {},
			onSelectTime: function () {},
			onChangeMonth: function () {},
			onGetWeekOfYear: function () {},
			onChangeYear: function () {},
			onChangeDateTime: function () {},
			onShow: function () {},
			onClose: function () {},
			onGenerate: function () {},
			withoutCopyright: !0,
			inverseButton: !1,
			hours12: !1,
			next: "xdsoft_next",
			prev: "xdsoft_prev",
			dayOfWeekStart: 0,
			parentID: "body",
			timeHeightInTimePicker: 25,
			timepickerScrollbar: !0,
			todayButton: !0,
			prevButton: !0,
			nextButton: !0,
			defaultSelect: !0,
			scrollMonth: !0,
			scrollTime: !0,
			scrollInput: !0,
			lazyInit: !1,
			mask: !1,
			validateOnBlur: !0,
			allowBlank: !0,
			yearStart: 1950,
			yearEnd: 2050,
			monthStart: 0,
			monthEnd: 11,
			style: "",
			id: "",
			fixed: !1,
			roundTime: "round",
			className: "",
			weekends: [],
			highlightedDates: [],
			highlightedPeriods: [],
			allowDates: [],
			allowDateRe: null,
			disabledDates: [],
			disabledWeekDays: [],
			yearOffset: 0,
			beforeShowDay: null,
			enterLikeTab: !0,
			showApplyButton: !1
		},
		n = null,
		r = "en",
		o = {
			meridiem: ["AM", "PM"]
		},
		i = function ()
		{
			var t = a.i18n[r],
				i = {
					days: t.dayOfWeek,
					daysShort: t.dayOfWeekShort,
					months: t.months,
					monthsShort: e.map(t.months, function (e)
					{
						return e.substring(0, 3)
					})
				};
			"function" == typeof DateFormatter && (n = new DateFormatter(
			{
				dateSettings: e.extend(
				{}, o, i)
			}))
		};
	e.datetimepicker = {
		setLocale: function (e)
		{
			var t = a.i18n[e] ? e : "en";
			r !== t && (r = t, i())
		},
		setDateFormatter: function (e)
		{
			n = e
		},
		RFC_2822: "D, d M Y H:i:s O",
		ATOM: "Y-m-dTH:i:sP",
		ISO_8601: "Y-m-dTH:i:sO",
		RFC_822: "D, d M y H:i:s O",
		RFC_850: "l, d-M-y H:i:s T",
		RFC_1036: "D, d M y H:i:s O",
		RFC_1123: "D, d M Y H:i:s O",
		RSS: "D, d M Y H:i:s O",
		W3C: "Y-m-dTH:i:sP"
	}, i(), window.getComputedStyle || (window.getComputedStyle = function (e)
	{
		return this.el = e, this.getPropertyValue = function (t)
		{
			var a = /(-([a-z]))/g;
			return "float" === t && (t = "styleFloat"), a.test(t) && (t = t.replace(a, function (e, t, a)
			{
				return a.toUpperCase()
			})), e.currentStyle[t] || null
		}, this
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t)
	{
		var a, n;
		for (a = t || 0, n = this.length; a < n; a += 1)
			if (this[a] === e) return a;
		return -1
	}), Date.prototype.countDaysInMonth = function ()
	{
		return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
	}, e.fn.xdsoftScroller = function (t, a)
	{
		return this.each(function ()
		{
			var n, r, o, i, s, d = e(this),
				u = function (e)
				{
					var t, a = {
						x: 0,
						y: 0
					};
					return "touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || "touchcancel" === e.type ? (t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], a.x = t.clientX, a.y = t.clientY) : "mousedown" !== e.type && "mouseup" !== e.type && "mousemove" !== e.type && "mouseover" !== e.type && "mouseout" !== e.type && "mouseenter" !== e.type && "mouseleave" !== e.type || (a.x = e.clientX, a.y = e.clientY), a
				},
				l = 100,
				f = !1,
				c = 0,
				m = 0,
				h = 0,
				g = !1,
				p = 0,
				y = function () {};
			"hide" !== a ? (e(this).hasClass("xdsoft_scroller_box") || (n = d.children().eq(0), r = d[0].clientHeight, o = n[0].offsetHeight, i = e('<div class="xdsoft_scrollbar"></div>'), s = e('<div class="xdsoft_scroller"></div>'), i.append(s), d.addClass("xdsoft_scroller_box").append(i), y = function (e)
			{
				var t = u(e).y - c + p;
				t < 0 && (t = 0), t + s[0].offsetHeight > h && (t = h - s[0].offsetHeight), d.trigger("scroll_element.xdsoft_scroller", [l ? t / l : 0])
			}, s.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function (n)
			{
				r || d.trigger("resize_scroll.xdsoft_scroller", [a]), c = u(n).y, p = parseInt(s.css("margin-top"), 10), h = i[0].offsetHeight, "mousedown" === n.type || "touchstart" === n.type ? (t.ownerDocument && e(t.ownerDocument.body).addClass("xdsoft_noselect"), e([t.ownerDocument.body, t.contentWindow]).on("touchend mouseup.xdsoft_scroller", function a()
				{
					e([t.ownerDocument.body, t.contentWindow]).off("touchend mouseup.xdsoft_scroller", a).off("mousemove.xdsoft_scroller", y).removeClass("xdsoft_noselect")
				}), e(t.ownerDocument.body).on("mousemove.xdsoft_scroller", y)) : (g = !0, n.stopPropagation(), n.preventDefault())
			}).on("touchmove", function (e)
			{
				g && (e.preventDefault(), y(e))
			}).on("touchend touchcancel", function ()
			{
				g = !1, p = 0
			}), d.on("scroll_element.xdsoft_scroller", function (e, t)
			{
				r || d.trigger("resize_scroll.xdsoft_scroller", [t, !0]), t = t > 1 ? 1 : t < 0 || isNaN(t) ? 0 : t, s.css("margin-top", l * t), setTimeout(function ()
				{
					n.css("marginTop", -parseInt((n[0].offsetHeight - r) * t, 10))
				}, 10)
			}).on("resize_scroll.xdsoft_scroller", function (e, t, a)
			{
				var u, f;
				r = d[0].clientHeight, o = n[0].offsetHeight, f = (u = r / o) * i[0].offsetHeight, u > 1 ? s.hide() : (s.show(), s.css("height", parseInt(f > 10 ? f : 10, 10)), l = i[0].offsetHeight - s[0].offsetHeight, !0 !== a && d.trigger("scroll_element.xdsoft_scroller", [t || Math.abs(parseInt(n.css("marginTop"), 10)) / (o - r)]))
			}), d.on("mousewheel", function (e)
			{
				var t = Math.abs(parseInt(n.css("marginTop"), 10));
				return (t -= 20 * e.deltaY) < 0 && (t = 0), d.trigger("scroll_element.xdsoft_scroller", [t / (o - r)]), e.stopPropagation(), !1
			}), d.on("touchstart", function (e)
			{
				f = u(e), m = Math.abs(parseInt(n.css("marginTop"), 10))
			}), d.on("touchmove", function (e)
			{
				if (f)
				{
					e.preventDefault();
					var t = u(e);
					d.trigger("scroll_element.xdsoft_scroller", [(m - (t.y - f.y)) / (o - r)])
				}
			}), d.on("touchend touchcancel", function ()
			{
				f = !1, m = 0
			})), d.trigger("resize_scroll.xdsoft_scroller", [a])) : d.find(".xdsoft_scrollbar").hide()
		})
	}, e.fn.datetimepicker = function (o, i)
	{
		var s, d, u = this,
			l = 48,
			f = 57,
			c = 96,
			m = 105,
			h = 17,
			g = 46,
			p = 13,
			y = 27,
			D = 8,
			v = 37,
			b = 38,
			k = 39,
			x = 40,
			T = 9,
			S = 116,
			w = 65,
			M = 67,
			O = 86,
			W = 90,
			_ = 89,
			F = !1,
			C = e.isPlainObject(o) || !o ? e.extend(!0,
			{}, a, o) : e.extend(!0,
			{}, a),
			P = 0,
			A = function (e)
			{
				e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function t()
				{
					e.is(":disabled") || e.data("xdsoft_datetimepicker") || (clearTimeout(P), P = setTimeout(function ()
					{
						e.data("xdsoft_datetimepicker") || s(e), e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", t).trigger("open.xdsoft")
					}, 100))
				})
			};
		return s = function (a)
		{
			function i()
			{
				var e, t = !1;
				return C.startDate ? t = Y.strToDate(C.startDate) : (t = C.value || (a && a.val && a.val() ? a.val() : "")) ? t = Y.strToDateTime(t) : C.defaultDate && (t = Y.strToDateTime(C.defaultDate), C.defaultTime && (e = Y.strtotime(C.defaultTime), t.setHours(e.getHours()), t.setMinutes(e.getMinutes()))), t && Y.isValidDate(t) ? H.data("changed", !0) : t = "", t || 0
			}

			function s(t)
			{
				var n = function (e, t)
					{
						var a = e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
						return new RegExp(a).test(t)
					},
					r = function (e)
					{
						try
						{
							if (t.ownerDocument.selection && t.ownerDocument.selection.createRange) return t.ownerDocument.selection.createRange().getBookmark().charCodeAt(2) - 2;
							if (e.setSelectionRange) return e.selectionStart
						}
						catch (e)
						{
							return 0
						}
					},
					o = function (e, a)
					{
						if (!(e = "string" == typeof e || e instanceof String ? t.ownerDocument.getElementById(e) : e)) return !1;
						if (e.createTextRange)
						{
							var n = e.createTextRange();
							return n.collapse(!0), n.moveEnd("character", a), n.moveStart("character", a), n.select(), !0
						}
						return !!e.setSelectionRange && (e.setSelectionRange(a, a), !0)
					};
				t.mask && a.off("keydown.xdsoft"), !0 === t.mask && ("undefined" != typeof moment ? t.mask = t.format.replace(/Y{4}/g, "9999").replace(/Y{2}/g, "99").replace(/M{2}/g, "19").replace(/D{2}/g, "39").replace(/H{2}/g, "29").replace(/m{2}/g, "59").replace(/s{2}/g, "59") : t.mask = t.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), "string" === e.type(t.mask) && (n(t.mask, a.val()) || (a.val(t.mask.replace(/[0-9]/g, "_")), o(a[0], 0)), a.on("keydown.xdsoft", function (i)
				{
					var s, d, u = this.value,
						C = i.which;
					if (C >= l && C <= f || C >= c && C <= m || C === D || C === g)
					{
						for (s = r(this), d = C !== D && C !== g ? String.fromCharCode(c <= C && C <= m ? C - l : C) : "_", C !== D && C !== g || !s || (s -= 1, d = "_");
							/[^0-9_]/.test(t.mask.substr(s, 1)) && s < t.mask.length && s > 0;) s += C === D || C === g ? -1 : 1;
						if (u = u.substr(0, s) + d + u.substr(s + 1), "" === e.trim(u)) u = t.mask.replace(/[0-9]/g, "_");
						else if (s === t.mask.length) return i.preventDefault(), !1;
						for (s += C === D || C === g ? 0 : 1;
							/[^0-9_]/.test(t.mask.substr(s, 1)) && s < t.mask.length && s > 0;) s += C === D || C === g ? -1 : 1;
						n(t.mask, u) ? (this.value = u, o(this, s)) : "" === e.trim(u) ? this.value = t.mask.replace(/[0-9]/g, "_") : a.trigger("error_input.xdsoft")
					}
					else if (-1 !== [w, M, O, W, _].indexOf(C) && F || -1 !== [y, b, x, v, k, S, h, T, p].indexOf(C)) return !0;
					return i.preventDefault(), !1
				}))
			}
			var d, u, P, A, Y, j, H = e('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
				J = e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
				z = e('<div class="xdsoft_datepicker active"></div>'),
				I = e('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),
				N = e('<div class="xdsoft_calendar"></div>'),
				L = e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
				E = L.find(".xdsoft_time_box").eq(0),
				R = e('<div class="xdsoft_time_variant"></div>'),
				B = e('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
				V = e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
				G = e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
				U = !1,
				q = 0;
			C.id && H.attr("id", C.id), C.style && H.attr("style", C.style), C.weeks && H.addClass("xdsoft_showweeks"), C.rtl && H.addClass("xdsoft_rtl"), H.addClass("xdsoft_" + C.theme), H.addClass(C.className), I.find(".xdsoft_month span").after(V), I.find(".xdsoft_year span").after(G), I.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft", function (t)
			{
				var a, n, r = e(this).find(".xdsoft_select").eq(0),
					o = 0,
					i = 0,
					s = r.is(":visible");
				for (I.find(".xdsoft_select").hide(), Y.currentTime && (o = Y.currentTime[e(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()), r[s ? "hide" : "show"](), a = r.find("div.xdsoft_option"), n = 0; n < a.length && a.eq(n).data("value") !== o; n += 1) i += a[0].offsetHeight;
				return r.xdsoftScroller(C, i / (r.children()[0].offsetHeight - r[0].clientHeight)), t.stopPropagation(), !1
			}), I.find(".xdsoft_select").xdsoftScroller(C).on("touchstart mousedown.xdsoft", function (e)
			{
				e.stopPropagation(), e.preventDefault()
			}).on("touchstart mousedown.xdsoft", ".xdsoft_option", function ()
			{
				void 0 !== Y.currentTime && null !== Y.currentTime || (Y.currentTime = Y.now());
				var t = Y.currentTime.getFullYear();
				Y && Y.currentTime && Y.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](e(this).data("value")), e(this).parent().parent().hide(), H.trigger("xchange.xdsoft"), C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(H, Y.currentTime, H.data("input")), t !== Y.currentTime.getFullYear() && e.isFunction(C.onChangeYear) && C.onChangeYear.call(H, Y.currentTime, H.data("input"))
			}), H.getValue = function ()
			{
				return Y.getCurrentTime()
			}, H.setOptions = function (r)
			{
				var o = {};
				C = e.extend(!0,
				{}, C, r), r.allowTimes && e.isArray(r.allowTimes) && r.allowTimes.length && (C.allowTimes = e.extend(!0, [], r.allowTimes)), r.weekends && e.isArray(r.weekends) && r.weekends.length && (C.weekends = e.extend(!0, [], r.weekends)), r.allowDates && e.isArray(r.allowDates) && r.allowDates.length && (C.allowDates = e.extend(!0, [], r.allowDates)), r.allowDateRe && "[object String]" === Object.prototype.toString.call(r.allowDateRe) && (C.allowDateRe = new RegExp(r.allowDateRe)), r.highlightedDates && e.isArray(r.highlightedDates) && r.highlightedDates.length && (e.each(r.highlightedDates, function (a, r)
				{
					var i, s = e.map(r.split(","), e.trim),
						d = new t(n.parseDate(s[0], C.formatDate), s[1], s[2]),
						u = n.formatDate(d.date, C.formatDate);
					void 0 !== o[u] ? (i = o[u].desc) && i.length && d.desc && d.desc.length && (o[u].desc = i + "\n" + d.desc) : o[u] = d
				}), C.highlightedDates = e.extend(!0, [], o)), r.highlightedPeriods && e.isArray(r.highlightedPeriods) && r.highlightedPeriods.length && (o = e.extend(!0, [], C.highlightedDates), e.each(r.highlightedPeriods, function (a, r)
				{
					var i, s, d, u, l, f, c;
					if (e.isArray(r)) i = r[0], s = r[1], d = r[2], c = r[3];
					else
					{
						var m = e.map(r.split(","), e.trim);
						i = n.parseDate(m[0], C.formatDate), s = n.parseDate(m[1], C.formatDate), d = m[2], c = m[3]
					}
					for (; i <= s;) u = new t(i, d, c), l = n.formatDate(i, C.formatDate), i.setDate(i.getDate() + 1), void 0 !== o[l] ? (f = o[l].desc) && f.length && u.desc && u.desc.length && (o[l].desc = f + "\n" + u.desc) : o[l] = u
				}), C.highlightedDates = e.extend(!0, [], o)), r.disabledDates && e.isArray(r.disabledDates) && r.disabledDates.length && (C.disabledDates = e.extend(!0, [], r.disabledDates)), r.disabledWeekDays && e.isArray(r.disabledWeekDays) && r.disabledWeekDays.length && (C.disabledWeekDays = e.extend(!0, [], r.disabledWeekDays)), !C.open && !C.opened || C.inline || a.trigger("open.xdsoft"), C.inline && (U = !0, H.addClass("xdsoft_inline"), a.after(H).hide()), C.inverseButton && (C.next = "xdsoft_prev", C.prev = "xdsoft_next"), C.datepicker ? z.addClass("active") : z.removeClass("active"), C.timepicker ? L.addClass("active") : L.removeClass("active"), C.value && (Y.setCurrentTime(C.value), a && a.val && a.val(Y.str)), isNaN(C.dayOfWeekStart) ? C.dayOfWeekStart = 0 : C.dayOfWeekStart = parseInt(C.dayOfWeekStart, 10) % 7, C.timepickerScrollbar || E.xdsoftScroller(C, "hide"), C.minDate && /^[\+\-](.*)$/.test(C.minDate) && (C.minDate = n.formatDate(Y.strToDateTime(C.minDate), C.formatDate)), C.maxDate && /^[\+\-](.*)$/.test(C.maxDate) && (C.maxDate = n.formatDate(Y.strToDateTime(C.maxDate), C.formatDate)), C.minDateTime && /^\+(.*)$/.test(C.minDateTime) && (C.minDateTime = Y.strToDateTime(C.minDateTime).dateFormat(C.formatDate)), B.toggle(C.showApplyButton), I.find(".xdsoft_today_button").css("visibility", C.todayButton ? "visible" : "hidden"), I.find("." + C.prev).css("visibility", C.prevButton ? "visible" : "hidden"), I.find("." + C.next).css("visibility", C.nextButton ? "visible" : "hidden"), s(C), C.validateOnBlur && a.off("blur.xdsoft").on("blur.xdsoft", function ()
				{
					if (C.allowBlank && (!e.trim(e(this).val()).length || "string" == typeof C.mask && e.trim(e(this).val()) === C.mask.replace(/[0-9]/g, "_"))) e(this).val(null), H.data("xdsoft_datetime").empty();
					else
					{
						var t = n.parseDate(e(this).val(), C.format);
						if (t) e(this).val(n.formatDate(t, C.format));
						else
						{
							var a = +[e(this).val()[0], e(this).val()[1]].join(""),
								r = +[e(this).val()[2], e(this).val()[3]].join("");
							!C.datepicker && C.timepicker && a >= 0 && a < 24 && r >= 0 && r < 60 ? e(this).val([a, r].map(function (e)
							{
								return e > 9 ? e : "0" + e
							}).join(":")) : e(this).val(n.formatDate(Y.now(), C.format))
						}
						H.data("xdsoft_datetime").setCurrentTime(e(this).val())
					}
					H.trigger("changedatetime.xdsoft"), H.trigger("close.xdsoft")
				}), C.dayOfWeekStartPrev = 0 === C.dayOfWeekStart ? 6 : C.dayOfWeekStart - 1, H.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
			}, H.data("options", C).on("touchstart mousedown.xdsoft", function (e)
			{
				return e.stopPropagation(), e.preventDefault(), G.hide(), V.hide(), !1
			}), E.append(R), E.xdsoftScroller(C), H.on("afterOpen.xdsoft", function ()
			{
				E.xdsoftScroller(C)
			}), H.append(z).append(L), !0 !== C.withoutCopyright && H.append(J), z.append(I).append(N).append(B), e(C.parentID).append(H), Y = new function ()
			{
				var t = this;
				t.now = function (e)
				{
					var a, n, r = new Date;
					return !e && C.defaultDate && (a = t.strToDateTime(C.defaultDate), r.setFullYear(a.getFullYear()), r.setMonth(a.getMonth()), r.setDate(a.getDate())), C.yearOffset && r.setFullYear(r.getFullYear() + C.yearOffset), !e && C.defaultTime && (n = t.strtotime(C.defaultTime), r.setHours(n.getHours()), r.setMinutes(n.getMinutes())), r
				}, t.isValidDate = function (e)
				{
					return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
				}, t.setCurrentTime = function (e, a)
				{
					"string" == typeof e ? t.currentTime = t.strToDateTime(e) : t.isValidDate(e) ? t.currentTime = e : e || a || !C.allowBlank || C.inline ? t.currentTime = t.now() : t.currentTime = null, H.trigger("xchange.xdsoft")
				}, t.empty = function ()
				{
					t.currentTime = null
				}, t.getCurrentTime = function ()
				{
					return t.currentTime
				}, t.nextMonth = function ()
				{
					void 0 !== t.currentTime && null !== t.currentTime || (t.currentTime = t.now());
					var a, n = t.currentTime.getMonth() + 1;
					return 12 === n && (t.currentTime.setFullYear(t.currentTime.getFullYear() + 1), n = 0), a = t.currentTime.getFullYear(), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), n + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(n), C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(H, Y.currentTime, H.data("input")), a !== t.currentTime.getFullYear() && e.isFunction(C.onChangeYear) && C.onChangeYear.call(H, Y.currentTime, H.data("input")), H.trigger("xchange.xdsoft"), n
				}, t.prevMonth = function ()
				{
					void 0 !== t.currentTime && null !== t.currentTime || (t.currentTime = t.now());
					var a = t.currentTime.getMonth() - 1;
					return -1 === a && (t.currentTime.setFullYear(t.currentTime.getFullYear() - 1), a = 11), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), a + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(a), C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(H, Y.currentTime, H.data("input")), H.trigger("xchange.xdsoft"), a
				}, t.getWeekOfYear = function (t)
				{
					if (C.onGetWeekOfYear && e.isFunction(C.onGetWeekOfYear))
					{
						var a = C.onGetWeekOfYear.call(H, t);
						if (void 0 !== a) return a
					}
					var n = new Date(t.getFullYear(), 0, 1);
					return 4 !== n.getDay() && n.setMonth(0, 1 + (4 - n.getDay() + 7) % 7), Math.ceil(((t - n) / 864e5 + n.getDay() + 1) / 7)
				}, t.strToDateTime = function (e)
				{
					var a, r, o = [];
					return e && e instanceof Date && t.isValidDate(e) ? e : ((o = /^([+-]{1})(.*)$/.exec(e)) && (o[2] = n.parseDate(o[2], C.formatDate)), o && o[2] ? (a = o[2].getTime() - 6e4 * o[2].getTimezoneOffset(), r = new Date(t.now(!0).getTime() + parseInt(o[1] + "1", 10) * a)) : r = e ? n.parseDate(e, C.format) : t.now(), t.isValidDate(r) || (r = t.now()), r)
				}, t.strToDate = function (e)
				{
					if (e && e instanceof Date && t.isValidDate(e)) return e;
					var a = e ? n.parseDate(e, C.formatDate) : t.now(!0);
					return t.isValidDate(a) || (a = t.now(!0)), a
				}, t.strtotime = function (e)
				{
					if (e && e instanceof Date && t.isValidDate(e)) return e;
					var a = e ? n.parseDate(e, C.formatTime) : t.now(!0);
					return t.isValidDate(a) || (a = t.now(!0)), a
				}, t.str = function ()
				{
					return n.formatDate(t.currentTime, C.format)
				}, t.currentTime = this.now()
			}, B.on("touchend click", function (e)
			{
				e.preventDefault(), H.data("changed", !0), Y.setCurrentTime(i()), a.val(Y.str()), H.trigger("close.xdsoft")
			}), I.find(".xdsoft_today_button").on("touchend mousedown.xdsoft", function ()
			{
				H.data("changed", !0), Y.setCurrentTime(0, !0), H.trigger("afterOpen.xdsoft")
			}).on("dblclick.xdsoft", function ()
			{
				var e, t, n = Y.getCurrentTime();
				n = new Date(n.getFullYear(), n.getMonth(), n.getDate()), e = Y.strToDate(C.minDate), n < (e = new Date(e.getFullYear(), e.getMonth(), e.getDate())) || (t = Y.strToDate(C.maxDate), n > (t = new Date(t.getFullYear(), t.getMonth(), t.getDate())) || (a.val(Y.str()), a.trigger("change"), H.trigger("close.xdsoft")))
			}), I.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function ()
			{
				var t = e(this),
					a = 0,
					n = !1;
				! function e(r)
				{
					t.hasClass(C.next) ? Y.nextMonth() : t.hasClass(C.prev) && Y.prevMonth(), C.monthChangeSpinner && (n || (a = setTimeout(e, r || 100)))
				}(500), e([C.ownerDocument.body, C.contentWindow]).on("touchend mouseup.xdsoft", function t()
				{
					clearTimeout(a), n = !0, e([C.ownerDocument.body, C.contentWindow]).off("touchend mouseup.xdsoft", t)
				})
			}), L.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function ()
			{
				var t = e(this),
					a = 0,
					n = !1,
					r = 110;
				! function e(o)
				{
					var i = E[0].clientHeight,
						s = R[0].offsetHeight,
						d = Math.abs(parseInt(R.css("marginTop"), 10));
					t.hasClass(C.next) && s - i - C.timeHeightInTimePicker >= d ? R.css("marginTop", "-" + (d + C.timeHeightInTimePicker) + "px") : t.hasClass(C.prev) && d - C.timeHeightInTimePicker >= 0 && R.css("marginTop", "-" + (d - C.timeHeightInTimePicker) + "px"), E.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(R[0].style.marginTop, 10) / (s - i))]), r = r > 10 ? 10 : r - 10, n || (a = setTimeout(e, o || r))
				}(500), e([C.ownerDocument.body, C.contentWindow]).on("touchend mouseup.xdsoft", function t()
				{
					clearTimeout(a), n = !0, e([C.ownerDocument.body, C.contentWindow]).off("touchend mouseup.xdsoft", t)
				})
			}), d = 0, H.on("xchange.xdsoft", function (t)
			{
				clearTimeout(d), d = setTimeout(function ()
				{
					void 0 !== Y.currentTime && null !== Y.currentTime || (Y.currentTime = Y.now());
					for (var t, i, s, d, u, l, f, c, m, h, g = "", p = new Date(Y.currentTime.getFullYear(), Y.currentTime.getMonth(), 1, 12, 0, 0), y = 0, D = Y.now(), v = !1, b = !1, k = !1, x = [], T = !0, S = ""; p.getDay() !== C.dayOfWeekStart;) p.setDate(p.getDate() - 1);
					for (g += "<table><thead><tr>", C.weeks && (g += "<th></th>"), t = 0; t < 7; t += 1) g += "<th>" + C.i18n[r].dayOfWeekShort[(t + C.dayOfWeekStart) % 7] + "</th>";
					for (g += "</tr></thead>", g += "<tbody>", !1 !== C.maxDate && (v = Y.strToDate(C.maxDate), v = new Date(v.getFullYear(), v.getMonth(), v.getDate(), 23, 59, 59, 999)), !1 !== C.minDate && (b = Y.strToDate(C.minDate), b = new Date(b.getFullYear(), b.getMonth(), b.getDate())), !1 !== C.minDateTime && (k = Y.strToDate(C.minDateTime), k = new Date(k.getFullYear(), k.getMonth(), k.getDate(), k.getHours(), k.getMinutes(), k.getSeconds())); y < Y.currentTime.countDaysInMonth() || p.getDay() !== C.dayOfWeekStart || Y.currentTime.getMonth() === p.getMonth();) x = [], y += 1, s = p.getDay(), d = p.getDate(), u = p.getFullYear(), l = p.getMonth(), f = Y.getWeekOfYear(p), h = "", x.push("xdsoft_date"), c = C.beforeShowDay && e.isFunction(C.beforeShowDay.call) ? C.beforeShowDay.call(H, p) : null, C.allowDateRe && "[object RegExp]" === Object.prototype.toString.call(C.allowDateRe) ? C.allowDateRe.test(n.formatDate(p, C.formatDate)) || x.push("xdsoft_disabled") : C.allowDates && C.allowDates.length > 0 ? -1 === C.allowDates.indexOf(n.formatDate(p, C.formatDate)) && x.push("xdsoft_disabled") : !1 !== v && p > v || !1 !== k && p < k || !1 !== b && p < b || c && !1 === c[0] ? x.push("xdsoft_disabled") : -1 !== C.disabledDates.indexOf(n.formatDate(p, C.formatDate)) ? x.push("xdsoft_disabled") : -1 !== C.disabledWeekDays.indexOf(s) ? x.push("xdsoft_disabled") : a.is("[disabled]") && x.push("xdsoft_disabled"), c && "" !== c[1] && x.push(c[1]), Y.currentTime.getMonth() !== l && x.push("xdsoft_other_month"), (C.defaultSelect || H.data("changed")) && n.formatDate(Y.currentTime, C.formatDate) === n.formatDate(p, C.formatDate) && x.push("xdsoft_current"), n.formatDate(D, C.formatDate) === n.formatDate(p, C.formatDate) && x.push("xdsoft_today"), 0 !== p.getDay() && 6 !== p.getDay() && -1 === C.weekends.indexOf(n.formatDate(p, C.formatDate)) || x.push("xdsoft_weekend"), void 0 !== C.highlightedDates[n.formatDate(p, C.formatDate)] && (i = C.highlightedDates[n.formatDate(p, C.formatDate)], x.push(void 0 === i.style ? "xdsoft_highlighted_default" : i.style), h = void 0 === i.desc ? "" : i.desc), C.beforeShowDay && e.isFunction(C.beforeShowDay) && x.push(C.beforeShowDay(p)), T && (g += "<tr>", T = !1, C.weeks && (g += "<th>" + f + "</th>")), g += '<td data-date="' + d + '" data-month="' + l + '" data-year="' + u + '" class="xdsoft_date xdsoft_day_of_week' + p.getDay() + " " + x.join(" ") + '" title="' + h + '"><div>' + d + "</div></td>", p.getDay() === C.dayOfWeekStartPrev && (g += "</tr>", T = !0), p.setDate(d + 1);
					if (g += "</tbody></table>", N.html(g), I.find(".xdsoft_label span").eq(0).text(C.i18n[r].months[Y.currentTime.getMonth()]), I.find(".xdsoft_label span").eq(1).text(Y.currentTime.getFullYear()), S = "", "", l = "", m = function (t, r)
						{
							var o, i, s = Y.now(),
								d = C.allowTimes && e.isArray(C.allowTimes) && C.allowTimes.length;
							s.setHours(t), t = parseInt(s.getHours(), 10), s.setMinutes(r), r = parseInt(s.getMinutes(), 10), (o = new Date(Y.currentTime)).setHours(t), o.setMinutes(r), x = [], !1 !== C.minDateTime && C.minDateTime > o || !1 !== C.maxTime && Y.strtotime(C.maxTime).getTime() < s.getTime() || !1 !== C.minTime && Y.strtotime(C.minTime).getTime() > s.getTime() ? x.push("xdsoft_disabled") : !1 !== C.minDateTime && C.minDateTime > o || !1 !== C.disabledMinTime && s.getTime() > Y.strtotime(C.disabledMinTime).getTime() && !1 !== C.disabledMaxTime && s.getTime() < Y.strtotime(C.disabledMaxTime).getTime() ? x.push("xdsoft_disabled") : a.is("[disabled]") && x.push("xdsoft_disabled"), (i = new Date(Y.currentTime)).setHours(parseInt(Y.currentTime.getHours(), 10)), d || i.setMinutes(Math[C.roundTime](Y.currentTime.getMinutes() / C.step) * C.step), (C.initTime || C.defaultSelect || H.data("changed")) && i.getHours() === parseInt(t, 10) && (!d && C.step > 59 || i.getMinutes() === parseInt(r, 10)) && (C.defaultSelect || H.data("changed") ? x.push("xdsoft_current") : C.initTime && x.push("xdsoft_init_time")), parseInt(D.getHours(), 10) === parseInt(t, 10) && parseInt(D.getMinutes(), 10) === parseInt(r, 10) && x.push("xdsoft_today"), S += '<div class="xdsoft_time ' + x.join(" ") + '" data-hour="' + t + '" data-minute="' + r + '">' + n.formatDate(s, C.formatTime) + "</div>"
						}, C.allowTimes && e.isArray(C.allowTimes) && C.allowTimes.length)
						for (y = 0; y < C.allowTimes.length; y += 1) m(Y.strtotime(C.allowTimes[y]).getHours(), l = Y.strtotime(C.allowTimes[y]).getMinutes());
					else
						for (y = 0, t = 0; y < (C.hours12 ? 12 : 24); y += 1)
							for (t = 0; t < 60; t += C.step) m((y < 10 ? "0" : "") + y, l = (t < 10 ? Y.now().getMinutes() : "") + t);
					for (R.html(S), o = "", y = parseInt(C.yearStart, 10) + C.yearOffset; y <= parseInt(C.yearEnd, 10) + C.yearOffset; y += 1) o += '<div class="xdsoft_option ' + (Y.currentTime.getFullYear() === y ? "xdsoft_current" : "") + '" data-value="' + y + '">' + y + "</div>";
					for (G.children().eq(0).html(o), y = parseInt(C.monthStart, 10), o = ""; y <= parseInt(C.monthEnd, 10); y += 1) o += '<div class="xdsoft_option ' + (Y.currentTime.getMonth() === y ? "xdsoft_current" : "") + '" data-value="' + y + '">' + C.i18n[r].months[y] + "</div>";
					V.children().eq(0).html(o), e(H).trigger("generate.xdsoft")
				}, 10), t.stopPropagation()
			}).on("afterOpen.xdsoft", function ()
			{
				if (C.timepicker)
				{
					var e, t, a, n;
					R.find(".xdsoft_current").length ? e = ".xdsoft_current" : R.find(".xdsoft_init_time").length && (e = ".xdsoft_init_time"), e ? (t = E[0].clientHeight, (a = R[0].offsetHeight) - t < (n = R.find(e).index() * C.timeHeightInTimePicker + 1) && (n = a - t), E.trigger("scroll_element.xdsoft_scroller", [parseInt(n, 10) / (a - t)])) : E.trigger("scroll_element.xdsoft_scroller", [0])
				}
			}), u = 0, N.on("touchend click.xdsoft", "td", function (t)
			{
				t.stopPropagation(), u += 1;
				var n = e(this),
					r = Y.currentTime;
				if (void 0 !== r && null !== r || (Y.currentTime = Y.now(), r = Y.currentTime), n.hasClass("xdsoft_disabled")) return !1;
				r.setDate(1), r.setFullYear(n.data("year")), r.setMonth(n.data("month")), r.setDate(n.data("date")), H.trigger("select.xdsoft", [r]), a.val(Y.str()), C.onSelectDate && e.isFunction(C.onSelectDate) && C.onSelectDate.call(H, Y.currentTime, H.data("input"), t), H.data("changed", !0), H.trigger("xchange.xdsoft"), H.trigger("changedatetime.xdsoft"), (u > 1 || !0 === C.closeOnDateSelect || !1 === C.closeOnDateSelect && !C.timepicker) && !C.inline && H.trigger("close.xdsoft"), setTimeout(function ()
				{
					u = 0
				}, 200)
			}), R.on("touchend click.xdsoft", "div", function (t)
			{
				t.stopPropagation();
				var a = e(this),
					n = Y.currentTime;
				if (void 0 !== n && null !== n || (Y.currentTime = Y.now(), n = Y.currentTime), a.hasClass("xdsoft_disabled")) return !1;
				n.setHours(a.data("hour")), n.setMinutes(a.data("minute")), H.trigger("select.xdsoft", [n]), H.data("input").val(Y.str()), C.onSelectTime && e.isFunction(C.onSelectTime) && C.onSelectTime.call(H, Y.currentTime, H.data("input"), t), H.data("changed", !0), H.trigger("xchange.xdsoft"), H.trigger("changedatetime.xdsoft"), !0 !== C.inline && !0 === C.closeOnTimeSelect && H.trigger("close.xdsoft")
			}), z.on("mousewheel.xdsoft", function (e)
			{
				return !C.scrollMonth || (e.deltaY < 0 ? Y.nextMonth() : Y.prevMonth(), !1)
			}), a.on("mousewheel.xdsoft", function (e)
			{
				return !C.scrollInput || (!C.datepicker && C.timepicker ? ((P = R.find(".xdsoft_current").length ? R.find(".xdsoft_current").eq(0).index() : 0) + e.deltaY >= 0 && P + e.deltaY < R.children().length && (P += e.deltaY), R.children().eq(P).length && R.children().eq(P).trigger("mousedown"), !1) : C.datepicker && !C.timepicker ? (z.trigger(e, [e.deltaY, e.deltaX, e.deltaY]), a.val && a.val(Y.str()), H.trigger("changedatetime.xdsoft"), !1) : void 0)
			}), H.on("changedatetime.xdsoft", function (t)
			{
				if (C.onChangeDateTime && e.isFunction(C.onChangeDateTime))
				{
					var a = H.data("input");
					C.onChangeDateTime.call(H, Y.currentTime, a, t), delete C.value, a.trigger("change")
				}
			}).on("generate.xdsoft", function ()
			{
				C.onGenerate && e.isFunction(C.onGenerate) && C.onGenerate.call(H, Y.currentTime, H.data("input")), U && (H.trigger("afterOpen.xdsoft"), U = !1)
			}).on("click.xdsoft", function (e)
			{
				e.stopPropagation()
			}), P = 0, j = function (e, t)
			{
				do {
					if (!(e = e.parentNode) || !1 === t(e)) break
				} while ("HTML" !== e.nodeName)
			}, A = function ()
			{
				var t, a, n, r, o, i, s, d, u, l, f, c, m;
				if (d = H.data("input"), t = d.offset(), a = d[0], l = "top", n = t.top + a.offsetHeight - 1, r = t.left, o = "absolute", u = e(C.contentWindow).width(), c = e(C.contentWindow).height(), m = e(C.contentWindow).scrollTop(), C.ownerDocument.documentElement.clientWidth - t.left < z.parent().outerWidth(!0))
				{
					var h = z.parent().outerWidth(!0) - a.offsetWidth;
					r -= h
				}
				"rtl" === d.parent().css("direction") && (r -= H.outerWidth() - d.outerWidth()), C.fixed ? (n -= m, r -= e(C.contentWindow).scrollLeft(), o = "fixed") : (s = !1, j(a, function (e)
				{
					return null !== e && ("fixed" === C.contentWindow.getComputedStyle(e).getPropertyValue("position") ? (s = !0, !1) : void 0)
				}), s ? (o = "fixed", n + H.outerHeight() > c + m ? (l = "bottom", n = c + m - t.top) : n -= m) : n + H[0].offsetHeight > c + m && (n = t.top - H[0].offsetHeight + 1), n < 0 && (n = 0), r + a.offsetWidth > u && (r = u - a.offsetWidth)), i = H[0], j(i, function (e)
				{
					if ("relative" === C.contentWindow.getComputedStyle(e).getPropertyValue("position") && u >= e.offsetWidth) return r -= (u - e.offsetWidth) / 2, !1
				}), (f = {
					position: o,
					left: r,
					top: "",
					bottom: ""
				})[l] = n, H.css(f)
			}, H.on("open.xdsoft", function (t)
			{
				var a = !0;
				C.onShow && e.isFunction(C.onShow) && (a = C.onShow.call(H, Y.currentTime, H.data("input"), t)), !1 !== a && (H.show(), A(), e(C.contentWindow).off("resize.xdsoft", A).on("resize.xdsoft", A), C.closeOnWithoutClick && e([C.ownerDocument.body, C.contentWindow]).on("touchstart mousedown.xdsoft", function t()
				{
					H.trigger("close.xdsoft"), e([C.ownerDocument.body, C.contentWindow]).off("touchstart mousedown.xdsoft", t)
				}))
			}).on("close.xdsoft", function (t)
			{
				var a = !0;
				I.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(), C.onClose && e.isFunction(C.onClose) && (a = C.onClose.call(H, Y.currentTime, H.data("input"), t)), !1 === a || C.opened || C.inline || H.hide(), t.stopPropagation()
			}).on("toggle.xdsoft", function ()
			{
				H.is(":visible") ? H.trigger("close.xdsoft") : H.trigger("open.xdsoft")
			}).data("input", a), q = 0, H.data("xdsoft_datetime", Y), H.setOptions(C), Y.setCurrentTime(i()), a.data("xdsoft_datetimepicker", H).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function ()
			{
				a.is(":disabled") || a.data("xdsoft_datetimepicker").is(":visible") && C.closeOnInputClick || (clearTimeout(q), q = setTimeout(function ()
				{
					a.is(":disabled") || (U = !0, Y.setCurrentTime(i(), !0), C.mask && s(C), H.trigger("open.xdsoft"))
				}, 100))
			}).on("keydown.xdsoft", function (t)
			{
				var a, n = t.which;
				return -1 !== [p].indexOf(n) && C.enterLikeTab ? (a = e("input:visible,textarea:visible,button:visible,a:visible"), H.trigger("close.xdsoft"), a.eq(a.index(this) + 1).focus(), !1) : -1 !== [T].indexOf(n) ? (H.trigger("close.xdsoft"), !0) : void 0
			}).on("blur.xdsoft", function ()
			{
				H.trigger("close.xdsoft")
			})
		}, d = function (t)
		{
			var a = t.data("xdsoft_datetimepicker");
			a && (a.data("xdsoft_datetime", null), a.remove(), t.data("xdsoft_datetimepicker", null).off(".xdsoft"), e(C.contentWindow).off("resize.xdsoft"), e([C.contentWindow, C.ownerDocument.body]).off("mousedown.xdsoft touchstart"), t.unmousewheel && t.unmousewheel())
		}, e(C.ownerDocument).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function (e)
		{
			e.keyCode === h && (F = !0)
		}).on("keyup.xdsoftctrl", function (e)
		{
			e.keyCode === h && (F = !1)
		}), this.each(function ()
		{
			var t = e(this).data("xdsoft_datetimepicker");
			if (t)
			{
				if ("string" === e.type(o)) switch (o)
				{
				case "show":
					e(this).select().focus(), t.trigger("open.xdsoft");
					break;
				case "hide":
					t.trigger("close.xdsoft");
					break;
				case "toggle":
					t.trigger("toggle.xdsoft");
					break;
				case "destroy":
					d(e(this));
					break;
				case "reset":
					this.value = this.defaultValue, this.value && t.data("xdsoft_datetime").isValidDate(n.parseDate(this.value, C.format)) || t.data("changed", !1), t.data("xdsoft_datetime").setCurrentTime(this.value);
					break;
				case "validate":
					t.data("input").trigger("blur.xdsoft");
					break;
				default:
					t[o] && e.isFunction(t[o]) && (u = t[o](i))
				}
				else t.setOptions(o);
				return 0
			}
			"string" !== e.type(o) && (!C.lazyInit || C.open || C.inline ? s(e(this)) : A(e(this)))
		}), u
	}, e.fn.datetimepicker.defaults = a
};
! function (e)
{
	"function" == typeof define && define.amd ? define(["jquery", "jquery-mousewheel"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(datetimepickerFactory),
function (e)
{
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e)
{
	function t(t)
	{
		var i = t || window.event,
			s = d.call(arguments, 1),
			u = 0,
			f = 0,
			c = 0,
			m = 0,
			h = 0,
			g = 0;
		if (t = e.event.fix(i), t.type = "mousewheel", "detail" in i && (c = -1 * i.detail), "wheelDelta" in i && (c = i.wheelDelta), "wheelDeltaY" in i && (c = i.wheelDeltaY), "wheelDeltaX" in i && (f = -1 * i.wheelDeltaX), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (f = -1 * c, c = 0), u = 0 === c ? f : c, "deltaY" in i && (u = c = -1 * i.deltaY), "deltaX" in i && (f = i.deltaX, 0 === c && (u = -1 * f)), 0 !== c || 0 !== f)
		{
			if (1 === i.deltaMode)
			{
				var p = e.data(this, "mousewheel-line-height");
				u *= p, c *= p, f *= p
			}
			else if (2 === i.deltaMode)
			{
				var y = e.data(this, "mousewheel-page-height");
				u *= y, c *= y, f *= y
			}
			if (m = Math.max(Math.abs(c), Math.abs(f)), (!o || m < o) && (o = m, n(i, m) && (o /= 40)), n(i, m) && (u /= 40, f /= 40, c /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), f = Math[f >= 1 ? "floor" : "ceil"](f / o), c = Math[c >= 1 ? "floor" : "ceil"](c / o), l.settings.normalizeOffset && this.getBoundingClientRect)
			{
				var D = this.getBoundingClientRect();
				h = t.clientX - D.left, g = t.clientY - D.top
			}
			return t.deltaX = f, t.deltaY = c, t.deltaFactor = o, t.offsetX = h, t.offsetY = g, t.deltaMode = 0, s.unshift(t, u, f, c), r && clearTimeout(r), r = setTimeout(a, 200), (e.event.dispatch || e.event.handle).apply(this, s)
		}
	}

	function a()
	{
		o = null
	}

	function n(e, t)
	{
		return l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
	}
	var r, o, i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		d = Array.prototype.slice;
	if (e.event.fixHooks)
		for (var u = i.length; u;) e.event.fixHooks[i[--u]] = e.event.mouseHooks;
	var l = e.event.special.mousewheel = {
		version: "3.1.12",
		setup: function ()
		{
			if (this.addEventListener)
				for (var a = s.length; a;) this.addEventListener(s[--a], t, !1);
			else this.onmousewheel = t;
			e.data(this, "mousewheel-line-height", l.getLineHeight(this)), e.data(this, "mousewheel-page-height", l.getPageHeight(this))
		},
		teardown: function ()
		{
			if (this.removeEventListener)
				for (var a = s.length; a;) this.removeEventListener(s[--a], t, !1);
			else this.onmousewheel = null;
			e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function (t)
		{
			var a = e(t),
				n = a["offsetParent" in e.fn ? "offsetParent" : "parent"]();
			return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(a.css("fontSize"), 10) || 16
		},
		getPageHeight: function (t)
		{
			return e(t).height()
		},
		settings:
		{
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	e.fn.extend(
	{
		mousewheel: function (e)
		{
			return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
		},
		unmousewheel: function (e)
		{
			return this.unbind("mousewheel", e)
		}
	})
});
! function (i)
{
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (a)
{
	"use strict";
	var s, r = window.Slick ||
	{};
	s = 0, (r = function (i, e)
	{
		var t, o = this;
		o.defaults = {
			accessibility: !0,
			adaptiveHeight: !1,
			appendArrows: a(i),
			appendDots: a(i),
			arrows: !0,
			asNavFor: null,
			prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
			autoplay: !1,
			autoplaySpeed: 3e3,
			centerMode: !1,
			centerPadding: "50px",
			cssEase: "ease",
			customPaging: function (i, e)
			{
				return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(e + 1)
			},
			dots: !1,
			dotsClass: "slick-dots",
			draggable: !0,
			easing: "linear",
			edgeFriction: .35,
			fade: !1,
			focusOnSelect: !1,
			infinite: !0,
			initialSlide: 0,
			lazyLoad: "ondemand",
			mobileFirst: !1,
			pauseOnHover: !0,
			pauseOnFocus: !0,
			pauseOnDotsHover: !1,
			respondTo: "window",
			responsive: null,
			rows: 1,
			rtl: !1,
			slide: "",
			slidesPerRow: 1,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			swipe: !0,
			swipeToSlide: !1,
			touchMove: !0,
			touchThreshold: 5,
			useCSS: !0,
			useTransform: !0,
			variableWidth: !1,
			vertical: !1,
			verticalSwiping: !1,
			waitForAnimate: !0,
			zIndex: 1e3
		}, o.initials = {
			animating: !1,
			dragging: !1,
			autoPlayTimer: null,
			currentDirection: 0,
			currentLeft: null,
			currentSlide: 0,
			direction: 1,
			$dots: null,
			listWidth: null,
			listHeight: null,
			loadIndex: 0,
			$nextArrow: null,
			$prevArrow: null,
			slideCount: null,
			slideWidth: null,
			$slideTrack: null,
			$slides: null,
			sliding: !1,
			slideOffset: 0,
			swipeLeft: null,
			$list: null,
			touchObject:
			{},
			transformsEnabled: !1,
			unslicked: !1
		}, a.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = a(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, t = a(i).data("slick") ||
		{}, o.options = a.extend(
		{}, o.defaults, e, t), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = a.proxy(o.autoPlay, o), o.autoPlayClear = a.proxy(o.autoPlayClear, o), o.autoPlayIterator = a.proxy(o.autoPlayIterator, o), o.changeSlide = a.proxy(o.changeSlide, o), o.clickHandler = a.proxy(o.clickHandler, o), o.selectHandler = a.proxy(o.selectHandler, o), o.setPosition = a.proxy(o.setPosition, o), o.swipeHandler = a.proxy(o.swipeHandler, o), o.dragHandler = a.proxy(o.dragHandler, o), o.keyHandler = a.proxy(o.keyHandler, o), o.instanceUid = s++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
	}).prototype.activateADA = function ()
	{
		this.$slideTrack.find(".slick-active").attr(
		{
			"aria-hidden": "false"
		}).find("a, input, button, select").attr(
		{
			tabindex: "0"
		})
	}, r.prototype.addSlide = r.prototype.slickAdd = function (i, e, t)
	{
		var o = this;
		if ("boolean" == typeof e) t = e, e = null;
		else if (e < 0 || e >= o.slideCount) return !1;
		o.unload(), "number" == typeof e ? 0 === e && 0 === o.$slides.length ? a(i).appendTo(o.$slideTrack) : t ? a(i).insertBefore(o.$slides.eq(e)) : a(i).insertAfter(o.$slides.eq(e)) : !0 === t ? a(i).prependTo(o.$slideTrack) : a(i).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (i, e)
		{
			a(e).attr("data-slick-index", i)
		}), o.$slidesCache = o.$slides, o.reinit()
	}, r.prototype.animateHeight = function ()
	{
		var i, e = this;
		1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (i = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.animate(
		{
			height: i
		}, e.options.speed))
	}, r.prototype.animateSlide = function (i, e)
	{
		var t = {},
			o = this;
		o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (i = -i), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate(
		{
			left: i
		}, o.options.speed, o.options.easing, e) : o.$slideTrack.animate(
		{
			top: i
		}, o.options.speed, o.options.easing, e) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), a(
		{
			animStart: o.currentLeft
		}).animate(
		{
			animStart: i
		},
		{
			duration: o.options.speed,
			easing: o.options.easing,
			step: function (i)
			{
				i = Math.ceil(i), !1 === o.options.vertical ? t[o.animType] = "translate(" + i + "px, 0px)" : t[o.animType] = "translate(0px," + i + "px)", o.$slideTrack.css(t)
			},
			complete: function ()
			{
				e && e.call()
			}
		})) : (o.applyTransition(), i = Math.ceil(i), !1 === o.options.vertical ? t[o.animType] = "translate3d(" + i + "px, 0px, 0px)" : t[o.animType] = "translate3d(0px," + i + "px, 0px)", o.$slideTrack.css(t), e && setTimeout(function ()
		{
			o.disableTransition(), e.call()
		}, o.options.speed))
	}, r.prototype.getNavTarget = function ()
	{
		var i = this.options.asNavFor;
		return i && null !== i && (i = a(i).not(this.$slider)), i
	}, r.prototype.asNavFor = function (e)
	{
		var i = this.getNavTarget();
		null !== i && "object" == typeof i && i.each(function ()
		{
			var i = a(this).slick("getSlick");
			i.unslicked || i.slideHandler(e, !0)
		})
	}, r.prototype.applyTransition = function (i)
	{
		var e = this,
			t = {};
		!1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
	}, r.prototype.autoPlay = function ()
	{
		var i = this;
		i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
	}, r.prototype.autoPlayClear = function ()
	{
		this.autoPlayTimer && clearInterval(this.autoPlayTimer)
	}, r.prototype.autoPlayIterator = function ()
	{
		var i = this,
			e = i.currentSlide + i.options.slidesToScroll;
		i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
	}, r.prototype.buildArrows = function ()
	{
		var i = this;
		!0 === i.options.arrows && (i.$prevArrow = a(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = a(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), !0 !== i.options.infinite && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr(
		{
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, r.prototype.buildDots = function ()
	{
		var i, e, t = this;
		if (!0 === t.options.dots && t.slideCount > t.options.slidesToShow)
		{
			for (t.$slider.addClass("slick-dotted"), e = a("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) e.append(a("<li />").append(t.options.customPaging.call(this, t, i)));
			t.$dots = e.appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, r.prototype.buildOut = function ()
	{
		var i = this;
		i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function (i, e)
		{
			a(e).attr("data-slick-index", i).data("originalStyling", a(e).attr("style") || "")
		}), i.$slider.addClass("slick-slider"), i.$slideTrack = 0 === i.slideCount ? a('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), !0 !== i.options.centerMode && !0 !== i.options.swipeToSlide || (i.options.slidesToScroll = 1), a("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), !0 === i.options.draggable && i.$list.addClass("draggable")
	}, r.prototype.buildRows = function ()
	{
		var i, e, t, o = this,
			s = document.createDocumentFragment(),
			n = o.$slider.children();
		if (1 < o.options.rows)
		{
			for (t = o.options.slidesPerRow * o.options.rows, e = Math.ceil(n.length / t), i = 0; i < e; i++)
			{
				for (var r = document.createElement("div"), l = 0; l < o.options.rows; l++)
				{
					for (var d = document.createElement("div"), a = 0; a < o.options.slidesPerRow; a++)
					{
						var c = i * t + (l * o.options.slidesPerRow + a);
						n.get(c) && d.appendChild(n.get(c))
					}
					r.appendChild(d)
				}
				s.appendChild(r)
			}
			o.$slider.empty().append(s), o.$slider.children().children().children().css(
			{
				width: 100 / o.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, r.prototype.checkResponsive = function (i, e)
	{
		var t, o, s, n = this,
			r = !1,
			l = n.$slider.width(),
			d = window.innerWidth || a(window).width();
		if ("window" === n.respondTo ? s = d : "slider" === n.respondTo ? s = l : "min" === n.respondTo && (s = Math.min(d, l)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive)
		{
			for (t in o = null, n.breakpoints) n.breakpoints.hasOwnProperty(t) && (!1 === n.originalSettings.mobileFirst ? s < n.breakpoints[t] && (o = n.breakpoints[t]) : s > n.breakpoints[t] && (o = n.breakpoints[t]));
			null !== o ? null !== n.activeBreakpoint && o === n.activeBreakpoint && !e || (n.activeBreakpoint = o, "unslick" === n.breakpointSettings[o] ? n.unslick(o) : (n.options = a.extend(
			{}, n.originalSettings, n.breakpointSettings[o]), !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i)), r = o) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = n.originalSettings, !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i), r = o), i || !1 === r || n.$slider.trigger("breakpoint", [n, r])
		}
	}, r.prototype.changeSlide = function (i, e)
	{
		var t, o, s = this,
			n = a(i.currentTarget);
		switch (n.is("a") && i.preventDefault(), n.is("li") || (n = n.closest("li")), t = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, i.data.message)
		{
		case "previous":
			o = 0 == t ? s.options.slidesToScroll : s.options.slidesToShow - t, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, e);
			break;
		case "next":
			o = 0 == t ? s.options.slidesToScroll : t, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, e);
			break;
		case "index":
			var r = 0 === i.data.index ? 0 : i.data.index || n.index() * s.options.slidesToScroll;
			s.slideHandler(s.checkNavigable(r), !1, e), n.children().trigger("focus");
			break;
		default:
			return
		}
	}, r.prototype.checkNavigable = function (i)
	{
		var e = this.getNavigableIndexes(),
			t = 0;
		if (i > e[e.length - 1]) i = e[e.length - 1];
		else
			for (var o in e)
			{
				if (i < e[o])
				{
					i = t;
					break
				}
				t = e[o]
			}
		return i
	}, r.prototype.cleanUpEvents = function ()
	{
		var i = this;
		i.options.dots && null !== i.$dots && a("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", a.proxy(i.interrupt, i, !0)).off("mouseleave.slick", a.proxy(i.interrupt, i, !1)), i.$slider.off("focus.slick blur.slick"), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide)), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), a(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), !0 === i.options.accessibility && i.$list.off("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().off("click.slick", i.selectHandler), a(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), a(window).off("resize.slick.slick-" + i.instanceUid, i.resize), a("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), a(window).off("load.slick.slick-" + i.instanceUid, i.setPosition), a(document).off("ready.slick.slick-" + i.instanceUid, i.setPosition)
	}, r.prototype.cleanUpSlideEvents = function ()
	{
		var i = this;
		i.$list.off("mouseenter.slick", a.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", a.proxy(i.interrupt, i, !1))
	}, r.prototype.cleanUpRows = function ()
	{
		var i;
		1 < this.options.rows && ((i = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(i))
	}, r.prototype.clickHandler = function (i)
	{
		!1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
	}, r.prototype.destroy = function (i)
	{
		var e = this;
		e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), a(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function ()
		{
			a(this).attr("style", a(this).data("originalStyling"))
		}), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, i || e.$slider.trigger("destroy", [e])
	}, r.prototype.disableTransition = function (i)
	{
		var e = {};
		e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(i).css(e)
	}, r.prototype.fadeSlide = function (i, e)
	{
		var t = this;
		!1 === t.cssTransitions ? (t.$slides.eq(i).css(
		{
			zIndex: t.options.zIndex
		}), t.$slides.eq(i).animate(
		{
			opacity: 1
		}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css(
		{
			opacity: 1,
			zIndex: t.options.zIndex
		}), e && setTimeout(function ()
		{
			t.disableTransition(i), e.call()
		}, t.options.speed))
	}, r.prototype.fadeSlideOut = function (i)
	{
		var e = this;
		!1 === e.cssTransitions ? e.$slides.eq(i).animate(
		{
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css(
		{
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}))
	}, r.prototype.filterSlides = r.prototype.slickFilter = function (i)
	{
		var e = this;
		null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
	}, r.prototype.focusHandler = function ()
	{
		var t = this;
		t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i)
		{
			i.stopImmediatePropagation();
			var e = a(this);
			setTimeout(function ()
			{
				t.options.pauseOnFocus && (t.focussed = e.is(":focus"), t.autoPlay())
			}, 0)
		})
	}, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function ()
	{
		return this.currentSlide
	}, r.prototype.getDotCount = function ()
	{
		var i = this,
			e = 0,
			t = 0,
			o = 0;
		if (!0 === i.options.infinite)
			for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
		else if (!0 === i.options.centerMode) o = i.slideCount;
		else if (i.options.asNavFor)
			for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
		else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
		return o - 1
	}, r.prototype.getLeft = function (i)
	{
		var e, t, o, s = this,
			n = 0;
		return s.slideOffset = 0, t = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = t * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll != 0 && i + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (n = i > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (i - s.slideCount)) * s.slideWidth * -1, (s.options.slidesToShow - (i - s.slideCount)) * t * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, s.slideCount % s.options.slidesToScroll * t * -1))) : i + s.options.slidesToShow > s.slideCount && (s.slideOffset = (i + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (i + s.options.slidesToShow - s.slideCount) * t), s.slideCount <= s.options.slidesToShow && (n = s.slideOffset = 0), !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? i * s.slideWidth * -1 + s.slideOffset : i * t * -1 + n, !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (s.$list.width() - o.outerWidth()) / 2)), e
	}, r.prototype.getOption = r.prototype.slickGetOption = function (i)
	{
		return this.options[i]
	}, r.prototype.getNavigableIndexes = function ()
	{
		for (var i = this, e = 0, t = 0, o = [], s = !1 === i.options.infinite ? i.slideCount : (e = -1 * i.options.slidesToScroll, t = -1 * i.options.slidesToScroll, 2 * i.slideCount); e < s;) o.push(e), e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
		return o
	}, r.prototype.getSlick = function ()
	{
		return this
	}, r.prototype.getSlideCount = function ()
	{
		var t, o = this,
			s = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0;
		return !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (i, e)
		{
			if (e.offsetLeft - s + a(e).outerWidth() / 2 > -1 * o.swipeLeft) return t = e, !1
		}), Math.abs(a(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
	}, r.prototype.goTo = r.prototype.slickGoTo = function (i, e)
	{
		this.changeSlide(
		{
			data:
			{
				message: "index",
				index: parseInt(i)
			}
		}, e)
	}, r.prototype.init = function (i)
	{
		var e = this;
		a(e.$slider).hasClass("slick-initialized") || (a(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), i && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
	}, r.prototype.initADA = function ()
	{
		var e = this;
		e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr(
		{
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr(
		{
			tabindex: "-1"
		}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i)
		{
			a(this).attr(
			{
				role: "option",
				"aria-describedby": "slick-slide" + e.instanceUid + i
			})
		}), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (i)
		{
			a(this).attr(
			{
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + e.instanceUid + i,
				id: "slick-slide" + e.instanceUid + i
			})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
	}, r.prototype.initArrowEvents = function ()
	{
		var i = this;
		!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick",
		{
			message: "previous"
		}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick",
		{
			message: "next"
		}, i.changeSlide))
	}, r.prototype.initDotEvents = function ()
	{
		var i = this;
		!0 === i.options.dots && i.slideCount > i.options.slidesToShow && a("li", i.$dots).on("click.slick",
		{
			message: "index"
		}, i.changeSlide), !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && a("li", i.$dots).on("mouseenter.slick", a.proxy(i.interrupt, i, !0)).on("mouseleave.slick", a.proxy(i.interrupt, i, !1))
	}, r.prototype.initSlideEvents = function ()
	{
		var i = this;
		i.options.pauseOnHover && (i.$list.on("mouseenter.slick", a.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", a.proxy(i.interrupt, i, !1)))
	}, r.prototype.initializeEvents = function ()
	{
		var i = this;
		i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick",
		{
			action: "start"
		}, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick",
		{
			action: "move"
		}, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick",
		{
			action: "end"
		}, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick",
		{
			action: "end"
		}, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), a(document).on(i.visibilityChange, a.proxy(i.visibility, i)), !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler), a(window).on("orientationchange.slick.slick-" + i.instanceUid, a.proxy(i.orientationChange, i)), a(window).on("resize.slick.slick-" + i.instanceUid, a.proxy(i.resize, i)), a("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), a(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), a(document).on("ready.slick.slick-" + i.instanceUid, i.setPosition)
	}, r.prototype.initUI = function ()
	{
		var i = this;
		!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
	}, r.prototype.keyHandler = function (i)
	{
		var e = this;
		i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide(
		{
			data:
			{
				message: !0 === e.options.rtl ? "next" : "previous"
			}
		}) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide(
		{
			data:
			{
				message: !0 === e.options.rtl ? "previous" : "next"
			}
		}))
	}, r.prototype.lazyLoad = function ()
	{
		var i, e, o = this;

		function t(i)
		{
			a("img[data-lazy]", i).each(function ()
			{
				var i = a(this),
					e = a(this).attr("data-lazy"),
					t = document.createElement("img");
				t.onload = function ()
				{
					i.animate(
					{
						opacity: 0
					}, 100, function ()
					{
						i.attr("src", e).animate(
						{
							opacity: 1
						}, 200, function ()
						{
							i.removeAttr("data-lazy").removeClass("slick-loading")
						}), o.$slider.trigger("lazyLoaded", [o, i, e])
					})
				}, t.onerror = function ()
				{
					i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, e])
				}, t.src = e
			})
		}!0 === o.options.centerMode ? e = !0 === o.options.infinite ? (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, e = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (0 < i && i--, e <= o.slideCount && e++)), t(o.$slider.find(".slick-slide").slice(i, e)), o.slideCount <= o.options.slidesToShow ? t(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? t(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && t(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
	}, r.prototype.loadSlider = function ()
	{
		var i = this;
		i.setPosition(), i.$slideTrack.css(
		{
			opacity: 1
		}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
	}, r.prototype.next = r.prototype.slickNext = function ()
	{
		this.changeSlide(
		{
			data:
			{
				message: "next"
			}
		})
	}, r.prototype.orientationChange = function ()
	{
		this.checkResponsive(), this.setPosition()
	}, r.prototype.pause = r.prototype.slickPause = function ()
	{
		this.autoPlayClear(), this.paused = !0
	}, r.prototype.play = r.prototype.slickPlay = function ()
	{
		var i = this;
		i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
	}, r.prototype.postSlide = function (i)
	{
		var e = this;
		e.unslicked || (e.$slider.trigger("afterChange", [e, i]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
	}, r.prototype.prev = r.prototype.slickPrev = function ()
	{
		this.changeSlide(
		{
			data:
			{
				message: "previous"
			}
		})
	}, r.prototype.preventDefault = function (i)
	{
		i.preventDefault()
	}, r.prototype.progressiveLazyLoad = function (i)
	{
		i = i || 1;
		var e, t, o, s = this,
			n = a("img[data-lazy]", s.$slider);
		n.length ? (e = n.first(), t = e.attr("data-lazy"), (o = document.createElement("img")).onload = function ()
		{
			e.attr("src", t).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, e, t]), s.progressiveLazyLoad()
		}, o.onerror = function ()
		{
			i < 3 ? setTimeout(function ()
			{
				s.progressiveLazyLoad(i + 1)
			}, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, t]), s.progressiveLazyLoad())
		}, o.src = t) : s.$slider.trigger("allImagesLoaded", [s])
	}, r.prototype.refresh = function (i)
	{
		var e, t = this,
			o = t.slideCount - t.options.slidesToShow;
		!t.options.infinite && t.currentSlide > o && (t.currentSlide = o), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), e = t.currentSlide, t.destroy(!0), a.extend(t, t.initials,
		{
			currentSlide: e
		}), t.init(), i || t.changeSlide(
		{
			data:
			{
				message: "index",
				index: e
			}
		}, !1)
	}, r.prototype.registerBreakpoints = function ()
	{
		var i, e, t, o = this,
			s = o.options.responsive || null;
		if ("array" === a.type(s) && s.length)
		{
			for (i in o.respondTo = o.options.respondTo || "window", s)
				if (t = o.breakpoints.length - 1, e = s[i].breakpoint, s.hasOwnProperty(i))
				{
					for (; 0 <= t;) o.breakpoints[t] && o.breakpoints[t] === e && o.breakpoints.splice(t, 1), t--;
					o.breakpoints.push(e), o.breakpointSettings[e] = s[i].settings
				} o.breakpoints.sort(function (i, e)
			{
				return o.options.mobileFirst ? i - e : e - i
			})
		}
	}, r.prototype.reinit = function ()
	{
		var i = this;
		i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i])
	}, r.prototype.resize = function ()
	{
		var i = this;
		a(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function ()
		{
			i.windowWidth = a(window).width(), i.checkResponsive(), i.unslicked || i.setPosition()
		}, 50))
	}, r.prototype.removeSlide = r.prototype.slickRemove = function (i, e, t)
	{
		var o = this;
		if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
		o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
	}, r.prototype.setCSS = function (i)
	{
		var e, t, o = this,
			s = {};
		!0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled || (!(s = {}) === o.cssTransitions ? s[o.animType] = "translate(" + e + ", " + t + ")" : s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), o.$slideTrack.css(s)
	}, r.prototype.setDimensions = function ()
	{
		var i = this;
		!1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css(
		{
			padding: "0px " + i.options.centerPadding
		}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css(
		{
			padding: i.options.centerPadding + " 0px"
		})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
		var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
		!1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
	}, r.prototype.setFade = function ()
	{
		var t, o = this;
		o.$slides.each(function (i, e)
		{
			t = o.slideWidth * i * -1, !0 === o.options.rtl ? a(e).css(
			{
				position: "relative",
				right: t,
				top: 0,
				zIndex: o.options.zIndex - 2,
				opacity: 0
			}) : a(e).css(
			{
				position: "relative",
				left: t,
				top: 0,
				zIndex: o.options.zIndex - 2,
				opacity: 0
			})
		}), o.$slides.eq(o.currentSlide).css(
		{
			zIndex: o.options.zIndex - 1,
			opacity: 1
		})
	}, r.prototype.setHeight = function ()
	{
		var i, e = this;
		1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (i = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.css("height", i))
	}, r.prototype.setOption = r.prototype.slickSetOption = function ()
	{
		var i, e, t, o, s, n = this,
			r = !1;
		if ("object" === a.type(arguments[0]) ? (t = arguments[0], r = arguments[1], s = "multiple") : "string" === a.type(arguments[0]) && (o = arguments[1], r = arguments[2], "responsive" === (t = arguments[0]) && "array" === a.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) n.options[t] = o;
		else if ("multiple" === s) a.each(t, function (i, e)
		{
			n.options[i] = e
		});
		else if ("responsive" === s)
			for (e in o)
				if ("array" !== a.type(n.options.responsive)) n.options.responsive = [o[e]];
				else
				{
					for (i = n.options.responsive.length - 1; 0 <= i;) n.options.responsive[i].breakpoint === o[e].breakpoint && n.options.responsive.splice(i, 1), i--;
					n.options.responsive.push(o[e])
				} r && (n.unload(), n.reinit())
	}, r.prototype.setPosition = function ()
	{
		var i = this;
		i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
	}, r.prototype.setProps = function ()
	{
		var i = this,
			e = document.body.style;
		i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
	}, r.prototype.setSlideClasses = function (i)
	{
		var e, t, o, s = this,
			n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
		s.$slides.eq(i).addClass("slick-current"), !0 === s.options.centerMode ? (e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e <= i && i <= s.slideCount - 1 - e ? s.$slides.slice(i - e, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (t = s.options.slidesToShow + i, n.slice(t - e + 1, t + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : i === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(i).addClass("slick-center")) : 0 <= i && i <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, t = !0 === s.options.infinite ? s.options.slidesToShow + i : i, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - i < s.options.slidesToShow ? n.slice(t - (s.options.slidesToShow - o), t + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
	}, r.prototype.setupInfinite = function ()
	{
		var i, e, t, o = this;
		if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (e = null, o.slideCount > o.options.slidesToShow))
		{
			for (t = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, i = o.slideCount; i > o.slideCount - t; --i) e = i - 1, a(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
			for (i = 0; i < t; i += 1) e = i, a(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
			o.$slideTrack.find(".slick-cloned").find("[id]").each(function ()
			{
				a(this).attr("id", "")
			})
		}
	}, r.prototype.interrupt = function (i)
	{
		i || this.autoPlay(), this.interrupted = i
	}, r.prototype.selectHandler = function (i)
	{
		var e = this,
			t = a(i.target).is(".slick-slide") ? a(i.target) : a(i.target).parents(".slick-slide"),
			o = (o = parseInt(t.attr("data-slick-index"))) || 0;
		if (e.slideCount <= e.options.slidesToShow) return e.setSlideClasses(o), void e.asNavFor(o);
		e.slideHandler(o)
	}, r.prototype.slideHandler = function (i, e, t)
	{
		var o, s, n, r, l, d, a = this;
		if (e = e || !1, (!0 !== a.animating || !0 !== a.options.waitForAnimate) && !(!0 === a.options.fade && a.currentSlide === i || a.slideCount <= a.options.slidesToShow))
			if (!1 === e && a.asNavFor(i), o = i, l = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function ()
			{
				a.postSlide(o)
			}) : a.postSlide(o));
			else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function ()
		{
			a.postSlide(o)
		}) : a.postSlide(o));
		else
		{
			if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (d = (d = a.getNavTarget()).slick("getSlick")).slideCount <= d.options.slidesToShow && d.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function ()
			{
				a.postSlide(s)
			})) : a.postSlide(s), void a.animateHeight();
			!0 !== t ? a.animateSlide(l, function ()
			{
				a.postSlide(s)
			}) : a.postSlide(s)
		}
	}, r.prototype.startLoad = function ()
	{
		var i = this;
		!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
	}, r.prototype.swipeDirection = function ()
	{
		var i = this,
			e = i.touchObject.startX - i.touchObject.curX,
			t = i.touchObject.startY - i.touchObject.curY,
			o = Math.atan2(t, e),
			s = Math.round(180 * o / Math.PI);
		return s < 0 && (s = 360 - Math.abs(s)), s <= 45 && 0 <= s || s <= 360 && 315 <= s ? !1 === i.options.rtl ? "left" : "right" : 135 <= s && s <= 225 ? !1 === i.options.rtl ? "right" : "left" : !0 === i.options.verticalSwiping ? 35 <= s && s <= 135 ? "down" : "up" : "vertical"
	}, r.prototype.swipeEnd = function (i)
	{
		var e, t, o = this;
		if (o.dragging = !1, o.interrupted = !1, o.shouldClick = !(10 < o.touchObject.swipeLength), void 0 === o.touchObject.curX) return !1;
		if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe)
		{
			switch (t = o.swipeDirection())
			{
			case "left":
			case "down":
				e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
				break;
			case "right":
			case "up":
				e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
			}
			"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
		}
		else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
	}, r.prototype.swipeHandler = function (i)
	{
		var e = this;
		if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action)
		{
		case "start":
			e.swipeStart(i);
			break;
		case "move":
			e.swipeMove(i);
			break;
		case "end":
			e.swipeEnd(i)
		}
	}, r.prototype.swipeMove = function (i)
	{
		var e, t, o, s, n = this,
			r = void 0 !== i.originalEvent ? i.originalEvent.touches : null;
		return !(!n.dragging || r && 1 !== r.length) && (e = n.getLeft(n.currentSlide), n.touchObject.curX = void 0 !== r ? r[0].pageX : i.clientX, n.touchObject.curY = void 0 !== r ? r[0].pageY : i.clientY, n.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(n.touchObject.curX - n.touchObject.startX, 2))), !0 === n.options.verticalSwiping && (n.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(n.touchObject.curY - n.touchObject.startY, 2)))), "vertical" !== (t = n.swipeDirection()) ? (void 0 !== i.originalEvent && 4 < n.touchObject.swipeLength && i.preventDefault(), s = (!1 === n.options.rtl ? 1 : -1) * (n.touchObject.curX > n.touchObject.startX ? 1 : -1), !0 === n.options.verticalSwiping && (s = n.touchObject.curY > n.touchObject.startY ? 1 : -1), o = n.touchObject.swipeLength, (n.touchObject.edgeHit = !1) === n.options.infinite && (0 === n.currentSlide && "right" === t || n.currentSlide >= n.getDotCount() && "left" === t) && (o = n.touchObject.swipeLength * n.options.edgeFriction, n.touchObject.edgeHit = !0), !1 === n.options.vertical ? n.swipeLeft = e + o * s : n.swipeLeft = e + o * (n.$list.height() / n.listWidth) * s, !0 === n.options.verticalSwiping && (n.swipeLeft = e + o * s), !0 !== n.options.fade && !1 !== n.options.touchMove && (!0 === n.animating ? (n.swipeLeft = null, !1) : void n.setCSS(n.swipeLeft))) : void 0)
	}, r.prototype.swipeStart = function (i)
	{
		var e, t = this;
		if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return !(t.touchObject = {});
		void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
	}, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function ()
	{
		var i = this;
		null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
	}, r.prototype.unload = function ()
	{
		var i = this;
		a(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, r.prototype.unslick = function (i)
	{
		this.$slider.trigger("unslick", [this, i]), this.destroy()
	}, r.prototype.updateArrows = function ()
	{
		var i = this;
		Math.floor(i.options.slidesToShow / 2);
		!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode || i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, r.prototype.updateDots = function ()
	{
		var i = this;
		null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, r.prototype.visibility = function ()
	{
		this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
	}, a.fn.slick = function ()
	{
		for (var i, e = this, t = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = e.length, n = 0; n < s; n++)
			if ("object" == typeof t || void 0 === t ? e[n].slick = new r(e[n], t) : i = e[n].slick[t].apply(e[n].slick, o), void 0 !== i) return i;
		return e
	}
});
! function (r, a, s)
{
	"use strict";

	function h()
	{
		return this.init.apply(this, arguments)
	}
	h.prototype = {
		defaults:
		{
			onstatechange: function () {},
			ondragend: function () {},
			onbarclicked: function () {},
			isRange: !1,
			showLabels: !0,
			showScale: !0,
			step: 1,
			format: "%s",
			theme: "theme-green",
			width: 300,
			disable: !1,
			snap: !1
		},
		template: '<div class="slider-container">\t\t\t<div class="back-bar">                <div class="selected-bar"></div>                <div class="pointer low"></div><div class="pointer-label low">123456</div>                <div class="pointer high"></div><div class="pointer-label high">456789</div>                <div class="clickable-dummy"></div>            </div>            <div class="scale"></div>\t\t</div>',
		init: function (t, i)
		{
			this.options = r.extend(
			{}, this.defaults, i), this.inputNode = r(t), this.options.value = this.inputNode.val() || (this.options.isRange ? this.options.from + "," + this.options.from : "" + this.options.from), this.domNode = r(this.template), this.domNode.addClass(this.options.theme), this.inputNode.after(this.domNode), this.domNode.on("change", this.onChange), this.pointers = r(".pointer", this.domNode), this.lowPointer = this.pointers.first(), this.highPointer = this.pointers.last(), this.labels = r(".pointer-label", this.domNode), this.lowLabel = this.labels.first(), this.highLabel = this.labels.last(), this.scale = r(".scale", this.domNode), this.bar = r(".selected-bar", this.domNode), this.clickableBar = this.domNode.find(".clickable-dummy"), this.interval = this.options.to - this.options.from, this.render()
		},
		render: function ()
		{
			0 !== this.inputNode.width() || this.options.width ? (this.options.width = this.options.width || this.inputNode.width(), this.domNode.width(this.options.width), this.inputNode.hide(), this.isSingle() && (this.lowPointer.hide(), this.lowLabel.hide()), this.options.showLabels || this.labels.hide(), this.attachEvents(), this.options.showScale && this.renderScale(), this.setValue(this.options.value)) : console.log("jRange : no width found, returning")
		},
		isSingle: function ()
		{
			return "number" == typeof this.options.value || -1 === this.options.value.indexOf(",") && !this.options.isRange
		},
		attachEvents: function ()
		{
			this.clickableBar.click(r.proxy(this.barClicked, this)), this.pointers.on("mousedown touchstart", r.proxy(this.onDragStart, this)), this.pointers.bind("dragstart", function (t)
			{
				t.preventDefault()
			})
		},
		onDragStart: function (t)
		{
			var i;
			this.options.disable || "mousedown" === t.type && 1 !== t.which || (t.stopPropagation(), t.preventDefault(), i = r(t.target), this.pointers.removeClass("last-active"), i.addClass("focused last-active"), this[(i.hasClass("low") ? "low" : "high") + "Label"].addClass("focused"), r(s).on("mousemove.slider touchmove.slider", r.proxy(this.onDrag, this, i)), r(s).on("mouseup.slider touchend.slider touchcancel.slider", r.proxy(this.onDragEnd, this)))
		},
		onDrag: function (t, i)
		{
			i.stopPropagation(), i.preventDefault(), i.originalEvent.touches && i.originalEvent.touches.length ? i = i.originalEvent.touches[0] : i.originalEvent.changedTouches && i.originalEvent.changedTouches.length && (i = i.originalEvent.changedTouches[0]);
			var s = i.clientX - this.domNode.offset().left;
			this.domNode.trigger("change", [this, t, s])
		},
		onDragEnd: function (t)
		{
			this.pointers.removeClass("focused").trigger("rangeslideend"), this.labels.removeClass("focused"), r(s).off(".slider"), this.options.ondragend.call(this, this.options.value)
		},
		barClicked: function (t)
		{
			var i, s, o, e, n, a, h, l;
			this.options.disable || (i = t.pageX - this.clickableBar.offset().left, this.isSingle() ? this.setPosition(this.pointers.last(), i, !0, !0) : (s = Math.abs(parseFloat(this.pointers.first().css("left"), 10)), o = this.pointers.first().width() / 2, e = Math.abs(parseFloat(this.pointers.last().css("left"), 10)), n = this.pointers.first().width() / 2, l = (a = Math.abs(s - i + o)) == (h = Math.abs(e - i + n)) ? i < s ? this.pointers.first() : this.pointers.last() : a < h ? this.pointers.first() : this.pointers.last(), this.setPosition(l, i, !0, !0)), this.options.onbarclicked.call(this, this.options.value))
		},
		onChange: function (t, i, s, o)
		{
			var e = 0,
				n = i.domNode.width();
			i.isSingle() || (e = s.hasClass("high") ? parseFloat(i.lowPointer.css("left")) + i.lowPointer.width() / 2 : 0, n = s.hasClass("low") ? parseFloat(i.highPointer.css("left")) + i.highPointer.width() / 2 : i.domNode.width());
			var a = Math.min(Math.max(o, e), n);
			i.setPosition(s, a, !0)
		},
		setPosition: function (t, i, s, o)
		{
			var e, n = parseFloat(this.lowPointer.css("left")),
				a = parseFloat(this.highPointer.css("left")) || 0,
				h = this.highPointer.width() / 2;
			if (s || (i = this.prcToPx(i)), this.options.snap)
			{
				var l = this.correctPositionForSnap(i);
				if (-1 === l) return;
				i = l
			}
			t[0] === this.highPointer[0] ? a = Math.round(i - h) : n = Math.round(i - h), t[o ? "animate" : "css"](
			{
				left: Math.round(i - h)
			}), this.isSingle() ? e = 0 : e = n + h;
			var r = Math.round(a + h - e);
			this.bar[o ? "animate" : "css"](
			{
				width: Math.abs(r),
				left: 0 < r ? e : e + r
			}), this.showPointerValue(t, i, o), this.isReadonly()
		},
		correctPositionForSnap: function (t)
		{
			var i = this.positionToValue(t) - this.options.from,
				s = this.options.width / (this.interval / this.options.step),
				o = i / this.options.step * s;
			return t <= o + s / 2 && o - s / 2 <= t ? o : -1
		},
		setValue: function (t)
		{
			var i = t.toString().split(",");
			i[0] = Math.min(Math.max(i[0], this.options.from), this.options.to) + "", 1 < i.length && (i[1] = Math.min(Math.max(i[1], this.options.from), this.options.to) + ""), this.options.value = t;
			var s = this.valuesToPrc(2 === i.length ? i : [0, i[0]]);
			this.isSingle() || this.setPosition(this.lowPointer, s[0]), this.setPosition(this.highPointer, s[1])
		},
		renderScale: function ()
		{
			for (var t = this.options.scale || [this.options.from, this.options.to], i = Math.round(100 / (t.length - 1) * 10) / 10, s = "", o = 0; o < t.length; o++) s += '<span style="left: ' + o * i + '%">' + ("|" != t[o] ? "<ins>" + t[o] + "</ins>" : "") + "</span>";
			this.scale.html(s), r("ins", this.scale).each(function ()
			{
				r(this).css(
				{
					marginLeft: -r(this).outerWidth() / 2
				})
			})
		},
		getBarWidth: function ()
		{
			var t = this.options.value.split(",");
			return 1 < t.length ? parseFloat(t[1]) - parseFloat(t[0]) : parseFloat(t[0])
		},
		showPointerValue: function (t, i, s)
		{
			var o, e, n = r(".pointer-label", this.domNode)[t.hasClass("low") ? "first" : "last"](),
				a = this.positionToValue(i);
			e = r.isFunction(this.options.format) ? (o = this.isSingle() ? void 0 : t.hasClass("low") ? "low" : "high", this.options.format(a, o)) : this.options.format.replace("%s", a);
			var h = n.html(e).width(),
				l = i - h / 2,
				l = Math.min(Math.max(l, 0), this.options.width - h);
			n[s ? "animate" : "css"](
			{
				left: l
			}), this.setInputValue(t, a)
		},
		valuesToPrc: function (t)
		{
			return [100 * (parseFloat(t[0]) - parseFloat(this.options.from)) / this.interval, 100 * (parseFloat(t[1]) - parseFloat(this.options.from)) / this.interval]
		},
		prcToPx: function (t)
		{
			return this.domNode.width() * t / 100
		},
		isDecimal: function ()
		{
			return -1 !== (this.options.value + this.options.from + this.options.to).indexOf(".")
		},
		positionToValue: function (t)
		{
			var i = t / this.domNode.width() * this.interval,
				i = parseFloat(i, 10) + parseFloat(this.options.from, 10);
			if (this.isDecimal())
			{
				var s = Math.round(Math.round(i / this.options.step) * this.options.step * 100) / 100;
				if (0 !== s)
					for (-1 === (s = "" + s).indexOf(".") && (s += "."); s.length - s.indexOf(".") < 3;) s += "0";
				else s = "0.00";
				return s
			}
			return Math.round(i / this.options.step) * this.options.step
		},
		setInputValue: function (t, i)
		{
			var s;
			this.isSingle() ? this.options.value = i.toString() : (s = this.options.value.split(","), t.hasClass("low") ? this.options.value = i + "," + s[1] : this.options.value = s[0] + "," + i), this.inputNode.val() !== this.options.value && (this.inputNode.val(this.options.value).trigger("change"), this.options.onstatechange.call(this, this.options.value))
		},
		getValue: function ()
		{
			return this.options.value
		},
		getOptions: function ()
		{
			return this.options
		},
		getRange: function ()
		{
			return this.options.from + "," + this.options.to
		},
		isReadonly: function ()
		{
			this.domNode.toggleClass("slider-readonly", this.options.disable)
		},
		disable: function ()
		{
			this.options.disable = !0, this.isReadonly()
		},
		enable: function ()
		{
			this.options.disable = !1, this.isReadonly()
		},
		toggleDisable: function ()
		{
			this.options.disable = !this.options.disable, this.isReadonly()
		},
		updateRange: function (t, i)
		{
			var s = t.toString().split(",");
			this.interval = parseInt(s[1]) - parseInt(s[0]), i ? this.setValue(i) : this.setValue(this.getValue())
		}
	};
	var l = "jRange";
	r.fn[l] = function (o)
	{
		var e, n = arguments;
		return this.each(function ()
		{
			var t = r(this),
				i = r.data(this, "plugin_" + l),
				s = "object" == typeof o && o;
			i || (t.data("plugin_" + l, i = new h(this, s)), r(a).resize(function ()
			{
				i.setValue(i.getValue())
			})), "string" == typeof o && (e = i[o].apply(i, Array.prototype.slice.call(n, 1)))
		}), e || this
	}
}(jQuery, window, document);

function newTyped()
{}

function valueChangeds()
{
	$(".termCheck").is(":checked") ? $(".terms").hide() : $(".terms").show()
}
document.addEventListener("DOMContentLoaded", function ()
{
	Typed.new("#typed",
	{
		stringsElement: document.getElementById("typed-strings"),
		typeSpeed: 30,
		backDelay: 2500,
		loop: !1,
		contentType: "html",
		loopCount: null,
		callback: function ()
		{
			foo()
		},
		resetCallback: function ()
		{
			newTyped()
		}
	});
	var e = document.querySelector(".reset");
	e && e.addEventListener("click", function ()
	{
		document.getElementById("typed")._typed.reset()
	})
}), $(function ()
{
	$("#tabs").tabs()
}), $(function ()
{
	$(".datepicker").datetimepicker(
	{
		timepicker: !1,
		format: "d.m.Y"
	}), $(".timepicker").datetimepicker(
	{
		datepicker: !1
	})
}),$(".brandsWrap .images").slick({
    dots: !1,
    infinite: !0,
    speed: 300,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 2e3,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }]
}), $(".testislider").slick(
{
	dots: !1,
	infinite: !0,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: !0,
	autoplaySpeed: 2e3,
	responsive: [
	{
		breakpoint: 700,
		settings:
		{
			slidesToShow: 2,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 600,
		settings:
		{
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
}),$(".categories").slick({
    dots: !1,
    infinite: !0,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 2e3,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }]
}), $(".offerWraps").slick(
{
	dots: !1,
	infinite: !0,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: !0,
	autoplaySpeed: 2e3,
	responsive: [
	{
		breakpoint: 600,
		settings:
		{
			arrows: !1,
			autoplay: !0,
			slidesToShow: 2,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 480,
		settings:
		{
			arrows: !1,
			autoplay: !0,
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
}), $(".zero").click(function (e)
{
	$(".zero").is(":checked") && $(this).parent("label").parent(".fieldWr").siblings(".terms").show()
}), $(".destinations .desticnt").slick(
{
	dots: !1,
	infinite: !0,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplaySpeed: 2e3,
	responsive: [
	{
		breakpoint: 600,
		settings:
		{
			arrows: !1,
			slidesToShow: 2,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 480,
		settings:
		{
			arrows: !1,
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
}), $(".openNav").click(function (e)
{
	e.preventDefault(), $(".header nav").addClass("activeNav")
}), $(".closeNav").click(function (e)
{
	e.preventDefault(), $(".header nav").removeClass("activeNav")
}), $(".videobtn").click(function (e)
{
	e.preventDefault(), $(".videobtn").css("visibility", "hidden"), $(".vedioWrap .loaders").fadeIn(), $(".vimeo-wrapper").html('<video autoplay muted loop><source src="video/video.mp4" type="video/mp4"></video>'), $(".vimeo-wrapper").fadeIn()
}), $(".acrdBtn").click(function (e)
{
	e.preventDefault(), $(".acrdBtn").removeClass("ui-state-active"), $(this).addClass("ui-state-active"), $(".acrdContent").slideUp("slow"), $(this).next(".acrdContent").slideDown("slow")
}), $(".smallImages").slick(
{
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: !0,
	dots: !1,
	focusOnSelect: !0
}), $(".smallImages img").click(function (e)
{
	e.preventDefault();
	var s = $(this).attr("src");
	$(this).parents(".smallImages").siblings(".bigsImages").children(".imgs").children("img").attr("src", s)
}), $(".slider-input").jRange(
{
	from: 0,
	to: 100,
	step: 1,
	scale: [0, 25, 50, 75, 100],
	format: "%s",
	width: 300,
	showLabels: !0,
	isRange: !0
}), $(".smallImagess img").click(function (e)
{
	e.preventDefault();
	var s = $(this).attr("src");
	$(this).parents(".smallImagess").siblings(".bigsImages").children(".imgs").children("img").attr("src", s)
}), $(".lst").click(function (e)
{
	e.preventDefault(), $(".grd").removeClass("act"), $(this).addClass("act"), $(".listView").fadeIn(), $(".girdView").css("display", "none"), $(".smallImagess").slick(
	{
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: !0,
		dots: !1,
		focusOnSelect: !0
	})
}), $(".grd").click(function (e)
{
	e.preventDefault(), $(".lst").removeClass("act"), $(this).addClass("act"), $(".girdView").fadeIn(), $(".listView").css("display", "none")
}), $(".topSlides").slick(
{
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: !1,
	fade: !0,
	asNavFor: ".bottomSlides"
}), $(".bottomSlides").slick(
{
	slidesToShow: 6,
	slidesToScroll: 1,
	asNavFor: ".topSlides",
	dots: !1,
	arrows: !0,
	focusOnSelect: !0
}), $(".brandsWrap a.nexts").hover(function ()
{
	$(".infiniteslide_wrap").addClass("hoverL")
}, function ()
{
	$(".infiniteslide_wrap").removeClass("hoverL")
}), $(".brandsWrap a.prevs").hover(function ()
{
	$(".infiniteslide_wrap").addClass("hoverR")
}, function ()
{
	$(".infiniteslide_wrap").removeClass("hoverR")
});
$('.hiredCarss').slick({dots: false,speed: 300,slidesToShow: 3,slidesToScroll: 3,responsive: [{breakpoint: 700,settings: {slidesToShow: 2,slidesToScroll: 1}},{breakpoint: 480,settings:{slidesToShow: 1,slidesToScroll: 1}}]});