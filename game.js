/*
  ________  ___   _  _____    ___  ___  _____  __  __ _________  ____ 
 / ___/ _ \/ _ | / |/ / _ \  / _ \/ _ \/  _/ |/_/ / // / __/ _ \/ __ \
/ /  / , _/ __ |/    / // / / ___/ , _// /_)  (  / _  / _// , _/ /_/ /
\___/_/|_/_/ |_/_/|_/____/ /_/  /_/|_/___/_/|_| /_//_/___/_/|_|\____/ 

Copyright 2016 b10b.com
*/
! function(t) {
  "use strict";

  function e(t, e) {
    function s() {}
    s.prototype = t;
    var i = new s;
    for (var n in e) i[n] = e[n];
    return e.toString !== Object.prototype.toString && (i.toString = e.toString), i
  }

  function s(t) {
    return t instanceof Array ? function() {
      return o.iter(t)
    } : "function" == typeof t.iterator ? i(t, t.iterator) : t.iterator
  }

  function i(t, e) {
    if (null == e) return null;
    null == e.__id__ && (e.__id__ = ni++);
    var s;
    return null == t.hx__closures__ ? t.hx__closures__ = {} : s = t.hx__closures__[e.__id__], null == s && (s = function() {
      return s.method.apply(s.scope, arguments)
    }, s.scope = t, s.method = e, t.hx__closures__[e.__id__] = s), s
  }
  var n = {},
    r = function() {
      return Ls.__string_rec(this, "")
    },
    a = function() {};
  n.DateTools = a, a.__name__ = ["DateTools"], a.delta = function(t, e) {
    var s = t.getTime() + e,
      i = new Date;
    return i.setTime(s), i
  };
  var _ = function(t, e) {
    e = e.split("u").join(""), this.r = new RegExp(t, e)
  };
  n.EReg = _, _.__name__ = ["EReg"], _.prototype = {
    match: function(t) {
      return this.r.global && (this.r.lastIndex = 0), this.r.m = this.r.exec(t), this.r.s = t, null != this.r.m
    },
    matched: function(t) {
      if (null != this.r.m && t >= 0 && t < this.r.m.length) return this.r.m[t];
      throw new Ps("EReg::matched")
    },
    replace: function(t, e) {
      return t.replace(this.r, e)
    },
    __class__: _
  };
  var o = function() {};
  n.HxOverrides = o, o.__name__ = ["HxOverrides"], o.strDate = function(t) {
    var e = t.length;
    switch (e) {
      case 8:
        var s = t.split(":"),
          i = new Date;
        return i.setTime(0), i.setUTCHours(s[0]), i.setUTCMinutes(s[1]), i.setUTCSeconds(s[2]), i;
      case 10:
        var n = t.split("-");
        return new Date(n[0], n[1] - 1, n[2], 0, 0, 0);
      case 19:
        var r = t.split(" "),
          a = r[0].split("-"),
          _ = r[1].split(":");
        return new Date(a[0], a[1] - 1, a[2], _[0], _[1], _[2]);
      default:
        throw new Ps("Invalid date format : " + t)
    }
  }, o.cca = function(t, e) {
    var s = t.charCodeAt(e);
    if (s == s) return s
  }, o.substr = function(t, e, s) {
    return null != e && 0 != e && null != s && 0 > s ? "" : (null == s && (s = t.length), 0 > e ? (e = t.length + e, 0 > e && (e = 0)) : 0 > s && (s = t.length + s - e), t.substr(e, s))
  }, o.indexOf = function(t, e, s) {
    var i = t.length;
    for (0 > s && (s += i, 0 > s && (s = 0)); i > s;) {
      if (t[s] === e) return s;
      s++
    }
    return -1
  }, o.remove = function(t, e) {
    var s = o.indexOf(t, e, 0);
    return -1 == s ? !1 : (t.splice(s, 1), !0)
  }, o.iter = function(t) {
    return {
      cur: 0,
      arr: t,
      hasNext: function() {
        return this.cur < this.arr.length
      },
      next: function() {
        return this.arr[this.cur++]
      }
    }
  };
  var h = function() {};
  n.Lambda = h, h.__name__ = ["Lambda"], h.has = function(t, e) {
    for (var i = s(t)(); i.hasNext();) {
      var n = i.next();
      if (n == e) return !0
    }
    return !1
  }, h.exists = function(t, e) {
    for (var i = s(t)(); i.hasNext();) {
      var n = i.next();
      if (e(n)) return !0
    }
    return !1
  };
  var u = function() {
    this.length = 0
  };
  n.List = u, u.__name__ = ["List"], u.prototype = {
    add: function(t) {
      var e = [t];
      null == this.h ? this.h = e : this.q[1] = e, this.q = e, this.length++
    },
    push: function(t) {
      var e = [t, this.h];
      this.h = e, null == this.q && (this.q = e), this.length++
    },
    remove: function(t) {
      for (var e = null, s = this.h; null != s;) {
        if (s[0] == t) return null == e ? this.h = s[1] : e[1] = s[1], this.q == s && (this.q = e), this.length--, !0;
        e = s, s = s[1]
      }
      return !1
    },
    iterator: function() {
      return new l(this.h)
    },
    __class__: u
  };
  var l = function(t) {
    this.head = t, this.val = null
  };
  n["_List.ListIterator"] = l, l.__name__ = ["_List", "ListIterator"], l.prototype = {
    hasNext: function() {
      return null != this.head
    },
    next: function() {
      return this.val = this.head[0], this.head = this.head[1], this.val
    },
    __class__: l
  }, Math.__name__ = ["Math"];
  var c = function() {};
  n.Reflect = c, c.__name__ = ["Reflect"], c.hasField = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, c.field = function(t, e) {
    try {
      return t[e]
    } catch (s) {
      return s instanceof Ps && (s = s.val), null
    }
  }, c.callMethod = function(t, e, s) {
    return e.apply(t, s)
  }, c.fields = function(t) {
    var e = [];
    if (null != t) {
      var s = Object.prototype.hasOwnProperty;
      for (var i in t) "__id__" != i && "hx__closures__" != i && s.call(t, i) && e.push(i)
    }
    return e
  }, c.isFunction = function(t) {
    return "function" == typeof t && !(t.__name__ || t.__ename__)
  }, c.compareMethods = function(t, e) {
    return t == e ? !0 : c.isFunction(t) && c.isFunction(e) ? t.scope == e.scope && t.method == e.method && null != t.method : !1
  }, c.deleteField = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e) ? (delete t[e], !0) : !1
  };
  var d = function() {};
  n.Std = d, d.__name__ = ["Std"], d.is = function(t, e) {
    return Ls.__instanceof(t, e)
  }, d.string = function(t) {
    return Ls.__string_rec(t, "")
  }, d["int"] = function(t) {
    return 0 | t
  }, d.parseInt = function(t) {
    var e = parseInt(t, 10);
    return 0 != e || 120 != o.cca(t, 1) && 88 != o.cca(t, 1) || (e = parseInt(t)), isNaN(e) ? null : e
  }, d.parseFloat = function(t) {
    return parseFloat(t)
  }, d.random = function(t) {
    return 0 >= t ? 0 : Math.floor(Math.random() * t)
  };
  var g = function() {
    this.b = ""
  };
  n.StringBuf = g, g.__name__ = ["StringBuf"], g.prototype = {
    add: function(t) {
      this.b += d.string(t)
    },
    addSub: function(t, e, s) {
      null == s ? this.b += o.substr(t, e, null) : this.b += o.substr(t, e, s)
    },
    __class__: g
  };
  var p = function() {};
  n.StringTools = p, p.__name__ = ["StringTools"], p.htmlEscape = function(t, e) {
    return t = t.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"), e ? t.split('"').join("&quot;").split("'").join("&#039;") : t
  }, p.isSpace = function(t, e) {
    var s = o.cca(t, e);
    return s > 8 && 14 > s || 32 == s
  }, p.ltrim = function(t) {
    for (var e = t.length, s = 0; e > s && p.isSpace(t, s);) s++;
    return s > 0 ? o.substr(t, s, e - s) : t
  }, p.rtrim = function(t) {
    for (var e = t.length, s = 0; e > s && p.isSpace(t, e - s - 1);) s++;
    return s > 0 ? o.substr(t, 0, e - s) : t
  }, p.trim = function(t) {
    return p.ltrim(p.rtrim(t))
  }, p.replace = function(t, e, s) {
    return t.split(e).join(s)
  }, p.hex = function(t, e) {
    var s = "",
      i = "0123456789ABCDEF";
    do s = i.charAt(15 & t) + s, t >>>= 4; while (t > 0);
    if (null != e)
      for (; s.length < e;) s = "0" + s;
    return s
  }, p.fastCodeAt = function(t, e) {
    return t.charCodeAt(e)
  };
  var f = n.ValueType = {
    __ename__: ["ValueType"],
    __constructs__: ["TNull", "TInt", "TFloat", "TBool", "TObject", "TFunction", "TClass", "TEnum", "TUnknown"]
  };
  f.TNull = ["TNull", 0], f.TNull.toString = r, f.TNull.__enum__ = f, f.TInt = ["TInt", 1], f.TInt.toString = r, f.TInt.__enum__ = f, f.TFloat = ["TFloat", 2], f.TFloat.toString = r, f.TFloat.__enum__ = f, f.TBool = ["TBool", 3], f.TBool.toString = r, f.TBool.__enum__ = f, f.TObject = ["TObject", 4], f.TObject.toString = r, f.TObject.__enum__ = f, f.TFunction = ["TFunction", 5], f.TFunction.toString = r, f.TFunction.__enum__ = f, f.TClass = function(t) {
    var e = ["TClass", 6, t];
    return e.__enum__ = f, e.toString = r, e
  }, f.TEnum = function(t) {
    var e = ["TEnum", 7, t];
    return e.__enum__ = f, e.toString = r, e
  }, f.TUnknown = ["TUnknown", 8], f.TUnknown.toString = r, f.TUnknown.__enum__ = f;
  var E = function() {};
  n.Type = E, E.__name__ = ["Type"], E.getEnum = function(t) {
    return null == t ? null : t.__enum__
  }, E.getClassName = function(t) {
    var e = t.__name__;
    return null == e ? null : e.join(".")
  }, E.getEnumName = function(t) {
    var e = t.__ename__;
    return e.join(".")
  }, E.resolveClass = function(t) {
    var e = n[t];
    return null != e && e.__name__ ? e : null
  }, E.resolveEnum = function(t) {
    var e = n[t];
    return null != e && e.__ename__ ? e : null
  }, E.createEmptyInstance = function(t) {
    function e() {}
    return e.prototype = t.prototype, new e
  }, E.createEnum = function(t, e, s) {
    var i = c.field(t, e);
    if (null == i) throw new Ps("No such constructor " + e);
    if (c.isFunction(i)) {
      if (null == s) throw new Ps("Constructor " + e + " need parameters");
      return c.callMethod(t, i, s)
    }
    if (null != s && 0 != s.length) throw new Ps("Constructor " + e + " does not need parameters");
    return i
  }, E.createEnumIndex = function(t, e, s) {
    var i = t.__constructs__[e];
    if (null == i) throw new Ps(e + " is not a valid enum constructor index");
    return E.createEnum(t, i, s)
  }, E.getEnumConstructs = function(t) {
    var e = t.__constructs__;
    return e.slice()
  }, E["typeof"] = function(t) {
    var e = typeof t;
    switch (e) {
      case "boolean":
        return f.TBool;
      case "string":
        return f.TClass(String);
      case "number":
        return Math.ceil(t) == t % 2147483648 ? f.TInt : f.TFloat;
      case "object":
        if (null == t) return f.TNull;
        var s = t.__enum__;
        if (null != s) return f.TEnum(s);
        var i = Ls.getClass(t);
        return null != i ? f.TClass(i) : f.TObject;
      case "function":
        return t.__name__ || t.__ename__ ? f.TObject : f.TFunction;
      case "undefined":
        return f.TNull;
      default:
        return f.TUnknown
    }
  }, E.enumEq = function(t, e) {
    if (t == e) return !0;
    try {
      if (t[0] != e[0]) return !1;
      for (var s = 2, i = t.length; i > s;) {
        var n = s++;
        if (!E.enumEq(t[n], e[n])) return !1
      }
      var r = t.__enum__;
      if (r != e.__enum__ || null == r) return !1
    } catch (a) {
      return a instanceof Ps && (a = a.val), !1
    }
    return !0
  }, E.enumConstructor = function(t) {
    return t[0]
  }, E.enumParameters = function(t) {
    return t.slice(2)
  };
  var y = function(t) {
    this.nodeType = t, this.children = [], this.attributeMap = new Ns
  };
  n.Xml = y, y.__name__ = ["Xml"], y.parse = function(t) {
    return Os.parse(t)
  }, y.createElement = function(t) {
    var e = new y(y.Element);
    if (e.nodeType != y.Element) throw new Ps("Bad node type, expected Element but found " + e.nodeType);
    return e.nodeName = t, e
  }, y.createPCData = function(t) {
    var e = new y(y.PCData);
    if (e.nodeType == y.Document || e.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + e.nodeType);
    return e.nodeValue = t, e
  }, y.createCData = function(t) {
    var e = new y(y.CData);
    if (e.nodeType == y.Document || e.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + e.nodeType);
    return e.nodeValue = t, e
  }, y.createComment = function(t) {
    var e = new y(y.Comment);
    if (e.nodeType == y.Document || e.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + e.nodeType);
    return e.nodeValue = t, e
  }, y.createDocType = function(t) {
    var e = new y(y.DocType);
    if (e.nodeType == y.Document || e.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + e.nodeType);
    return e.nodeValue = t, e
  }, y.createProcessingInstruction = function(t) {
    var e = new y(y.ProcessingInstruction);
    if (e.nodeType == y.Document || e.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + e.nodeType);
    return e.nodeValue = t, e
  }, y.createDocument = function() {
    return new y(y.Document)
  }, y.prototype = {
    get_nodeValue: function() {
      if (this.nodeType == y.Document || this.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + this.nodeType);
      return this.nodeValue
    },
    set_nodeValue: function(t) {
      if (this.nodeType == y.Document || this.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + this.nodeType);
      return this.nodeValue = t
    },
    get: function(t) {
      if (this.nodeType != y.Element) throw new Ps("Bad node type, expected Element but found " + this.nodeType);
      return this.attributeMap.get(t)
    },
    set: function(t, e) {
      if (this.nodeType != y.Element) throw new Ps("Bad node type, expected Element but found " + this.nodeType);
      this.attributeMap.set(t, e)
    },
    exists: function(t) {
      if (this.nodeType != y.Element) throw new Ps("Bad node type, expected Element but found " + this.nodeType);
      return this.attributeMap.exists(t)
    },
    attributes: function() {
      if (this.nodeType != y.Element) throw new Ps("Bad node type, expected Element but found " + this.nodeType);
      return this.attributeMap.keys()
    },
    elements: function() {
      if (this.nodeType != y.Document && this.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + this.nodeType);
      for (var t, e = [], s = 0, i = this.children; s < i.length;) {
        var n = i[s];
        ++s, n.nodeType == y.Element && e.push(n)
      }
      return t = e, o.iter(t)
    },
    firstElement: function() {
      if (this.nodeType != y.Document && this.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + this.nodeType);
      for (var t = 0, e = this.children; t < e.length;) {
        var s = e[t];
        if (++t, s.nodeType == y.Element) return s
      }
      return null
    },
    addChild: function(t) {
      if (this.nodeType != y.Document && this.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + this.nodeType);
      null != t.parent && t.parent.removeChild(t), this.children.push(t), t.parent = this
    },
    removeChild: function(t) {
      if (this.nodeType != y.Document && this.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + this.nodeType);
      return o.remove(this.children, t) ? (t.parent = null, !0) : !1
    },
    toString: function() {
      return Us.print(this)
    },
    __class__: y
  };
  var v = function() {};
  n["awe6.interfaces.IPauseable"] = v, v.__name__ = ["awe6", "interfaces", "IPauseable"], v.prototype = {
    __class__: v
  };
  var m = function() {};
  n["awe6.interfaces.IDisposable"] = m, m.__name__ = ["awe6", "interfaces", "IDisposable"], m.prototype = {
    __class__: m
  };
  var w = function() {};
  n["awe6.interfaces.IUpdateable"] = w, w.__name__ = ["awe6", "interfaces", "IUpdateable"], w.prototype = {
    __class__: w
  };
  var S = function() {};
  n["awe6.interfaces.IProcess"] = S, S.__name__ = ["awe6", "interfaces", "IProcess"], S.__interfaces__ = [v, m, w];
  var T = function(t) {
    this._kernel = t, this._tools = this._kernel.tools, this._isEntity = Ls.__instanceof(this, R), this._init()
  };
  n["awe6.core.Process"] = T, T.__name__ = ["awe6", "core", "Process"], T.__interfaces__ = [S], T.prototype = {
    _init: function() {
      this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this.isDisposed = !1, this._age = 0, this._updates = 0
    },
    dispose: function() {
      this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer())
    },
    _disposer: function() {},
    getAge: function(t) {
      return null == t && (t = !0), t ? this._age : this._updates
    },
    update: function(t) {
      null == t && (t = 0), this.isActive && !this.isDisposed && (this._age += t, this._updates++, this._updater(t))
    },
    _updater: function(t) {
      null == t && (t = 0)
    },
    set_isActive: function(t) {
      return this.isDisposed ? (this.isActive = !1, !1) : (t != this.isActive && (this._isIsActiveSetterBypassed ? this.isActive = t : t ? this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(se.RESUME, this, !0, !0, !0)) : !this.isActive || this.isDisposed || (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(se.PAUSE, this, !0, !0, !0))), this._isIsActiveSetterBypassed = !1, this.isActive)
    },
    pause: function() {
      this.isActive && !this.isDisposed && (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(se.PAUSE, this, !0, !0, !0))
    },
    _pauser: function() {},
    resume: function() {
      this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(se.RESUME, this, !0, !0, !0))
    },
    _resumer: function() {},
    __class__: T
  };
  var b = function() {};
  n["awe6.interfaces.IAgendaManager"] = b, b.__name__ = ["awe6", "interfaces", "IAgendaManager"], b.prototype = {
    __class__: b
  };
  var C = function() {};
  n["awe6.interfaces.IEntityCollection"] = C, C.__name__ = ["awe6", "interfaces", "IEntityCollection"], C.__interfaces__ = [b], C.prototype = {
    __class__: C
  };
  var A = function() {};
  n["awe6.interfaces.IViewable"] = A, A.__name__ = ["awe6", "interfaces", "IViewable"], A.prototype = {
    __class__: A
  };
  var R = function() {};
  n["awe6.interfaces.IEntity"] = R, R.__name__ = ["awe6", "interfaces", "IEntity"], R.__interfaces__ = [C, A, S], R.prototype = {
    __class__: R
  };
  var I = function(t, e, s) {
    null == this.get_view() && (this.view = new jt(t, s, 0, this)), this.set_id(null == e ? t.tools.createGuid() : e), T.call(this, t)
  };
  n["awe6.core.Entity"] = I, I.__name__ = ["awe6", "core", "Entity"], I.__interfaces__ = [R], I.__super__ = T, I.prototype = e(T.prototype, {
    _init: function() {
      T.prototype._init.call(this), this.agenda = Jt.ALWAYS, this._entityAgendaPairs = new Rs, this._isAgendaDirty = !0, this._cachedEntities = []
    },
    _updater: function(t) {
      null == t && (t = 0), T.prototype._updater.call(this, t), this._isAgendaDirty && (this._cachedEntities = this._getEntities(this.get_agenda()), E.enumEq(this.get_agenda(), Jt.ALWAYS) || (this._cachedEntities = this._cachedEntities.concat(this._getEntities(Jt.ALWAYS))), this._isAgendaDirty = !1);
      for (var e = 0, s = this._cachedEntities; e < s.length;) {
        var i = s[e];
        ++e, i.update(t)
      }
    },
    _disposer: function() {
      this.remove(), this._kernel.messenger.removeSubscribers(this), this._kernel.messenger.removeSubscribers(null, null, null, this, null);
      var t = this._getEntities();
      t.reverse();
      for (var e = 0; e < t.length;) {
        var s = t[e];
        ++e, s.dispose()
      }
      for (var i = this._entityAgendaPairs.iterator(); i.hasNext();) {
        var n = i.next();
        this._entityAgendaPairs.remove(n)
      }
      this.get_view().dispose(), T.prototype._disposer.call(this)
    },
    addEntity: function(t, e, s, i) {
      if (null == i && (i = 0), null == s && (s = !1), this.isDisposed || null == t) return null;
      null == e && (e = Jt.ALWAYS);
      for (var n = this._entityAgendaPairs.iterator(); n.hasNext();) {
        var r = n.next();
        if (r.entity == t && E.enumEq(r.agenda, e)) return t
      }
      if (this._isAgendaDirty = !0, t.get_parent() != this && (t.remove(s), Ls.__instanceof(t, I))) {
        var a = t;
        a._setParent(this)
      }
      var _ = new P(t, e);
      return this._entityAgendaPairs.add(_), s && (E.enumEq(e, this.get_agenda()) || e == Jt.ALWAYS ? this.get_view().addChild(t.get_view(), i) : (t.get_view().set_priority(i), _.isAddedToView = !0)), t
    },
    removeEntity: function(t, e, s) {
      if (null == s && (s = !1), !this.isDisposed && null != t) {
        for (var i = !1, n = this._entityAgendaPairs.iterator(); n.hasNext();) {
          var r = n.next();
          r.entity != t || null != e && !E.enumEq(r.agenda, e) || (this._entityAgendaPairs.remove(r), i = !0)
        }
        if (i) {
          if (this._isAgendaDirty = !0, Ls.__instanceof(t, I)) {
            var a = t;
            a._setParent(null)
          }
          s && t.get_view().remove()
        }
      }
    },
    remove: function(t) {
      null == t && (t = !1), null != this.get_parent() && this.get_parent().removeEntity(this, null, t)
    },
    getEntities: function(t) {
      return this._getEntities(t)
    },
    _getEntities: function(t) {
      if (!this._isAgendaDirty && (null == t || E.enumEq(t, this.get_agenda()))) return this._cachedEntities;
      for (var e = [], s = this._entityAgendaPairs.iterator(); s.hasNext();) {
        var i = s.next();
        (null == t || E.enumEq(t, i.agenda)) && e.push(i.entity)
      }
      return e.reverse(), e
    },
    getEntitiesByClass: function(t, e, s, i, n) {
      if (null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), n && null != this._kernel.scenes.get_scene()) return this._kernel.scenes.get_scene().getEntitiesByClass(t, e, !0);
      for (var r = [], a = this._getEntities(e), _ = 0; _ < a.length;) {
        var o = a[_];
        ++_, Ls.__instanceof(o, t) && r.push(o), s && (r = r.concat(o.getEntitiesByClass(t, e, !0)))
      }
      return i && null != this.get_parent() && (r = r.concat(this.get_parent().getEntitiesByClass(t, e, !1, !0))), r
    },
    setAgenda: function(t) {
      if (null == t && (t = Jt.ALWAYS), E.enumEq(this.get_agenda(), t)) return !1;
      this._isAgendaDirty = !0;
      for (var e = this._entityAgendaPairs.iterator(); e.hasNext();) {
        var s = e.next(),
          i = E.enumEq(this.get_agenda(), s.agenda) && s.entity.get_view().get_parent() == this.get_view();
        i && s.entity.get_view().remove(), s.isAddedToView = s.isAddedToView || i
      }
      this.agenda = t;
      for (var n = this._entityAgendaPairs.iterator(); n.hasNext();) {
        var r = n.next();
        r.isAddedToView && (E.enumEq(Jt.ALWAYS, r.agenda) || E.enumEq(this.get_agenda(), r.agenda)) && this.get_view().addChild(r.entity.get_view())
      }
      return !0
    },
    _setParent: function(t) {
      this.parent = t
    },
    set_id: function(t) {
      return this.id = t, this.id
    },
    get_agenda: function() {
      return this.agenda
    },
    get_parent: function() {
      return this.parent
    },
    get_view: function() {
      return this.view
    },
    __class__: I
  });
  var k = function() {};
  n["awe6.interfaces.IPositionable"] = k, k.__name__ = ["awe6", "interfaces", "IPositionable"], k.prototype = {
    __class__: k
  };
  var N = function(t, e, s, i, n, r, a, _, o, h, u) {
    null == a && (a = 0), null == r && (r = 0), null == n && (n = 20), null == i && (i = 100), this._stateUp = new D(t, e), this._stateOver = new D(t, s), this.x = r, this.y = a, this.set_width(i), this.set_height(n), this._keyType = _, this.onClickCallback = o, this.onRollOverCallback = h, this.onRollOutCallback = u, I.call(this, t)
  };
  n["awe6.core.BasicButton"] = N, N.__name__ = ["awe6", "core", "BasicButton"], N.__interfaces__ = [k], N.__super__ = I, N.prototype = e(I.prototype, {
    _init: function() {
      I.prototype._init.call(this), this.get_view().set_x(this.x), this.get_view().set_y(this.y), this.isOver = !1, this.addEntity(this._stateUp, Jt.SUB_TYPE(x.UP), !0), this.addEntity(this._stateOver, Jt.SUB_TYPE(x.OVER), !0), this.setAgenda(Jt.SUB_TYPE(x.UP))
    },
    _updater: function(t) {
      null == t && (t = 0), I.prototype._updater.call(this, t);
      var e = this._kernel.inputs.mouse,
        s = this._isPointInsideRectangle(e.x + this.get_view().x - this.get_view().globalX, e.y + this.get_view().y - this.get_view().globalY, this.x, this.y, this.width, this.height);
      s && e.set_cursorType(ne.BUTTON), s && !this.isOver && this.onRollOver(), !s && this.isOver && (e.set_cursorType(ne.AUTO), this.onRollOut()), this.isOver = s, this.isOver && e.getIsButtonDown() && this.setAgenda(Jt.SUB_TYPE(x.OVER)), this.isOver && e.getIsButtonRelease() && this.onClick(), null != this._keyType && this._kernel.inputs.keyboard.getIsKeyRelease(this._keyType) && this.onClick()
    },
    _isPointInsideRectangle: function(t, e, s, i, n, r) {
      return s > t ? !1 : i > e ? !1 : t > s + n ? !1 : e > i + r ? !1 : !0
    },
    onClick: function() {
      this.setAgenda(Jt.SUB_TYPE(x.UP)), null != this.onClickCallback && this.onClickCallback()
    },
    onRollOver: function() {
      this.setAgenda(Jt.SUB_TYPE(x.OVER)), null != this.onRollOverCallback && this.onRollOverCallback()
    },
    onRollOut: function() {
      this.setAgenda(Jt.SUB_TYPE(x.UP)), null != this.onRollOutCallback && this.onRollOutCallback()
    },
    setPosition: function(t, e) {
      this.set_x(t), this.set_y(e)
    },
    set_x: function(t) {
      return this.x = t, null != this.get_view() && this.get_view().set_x(this.x), this.x
    },
    set_y: function(t) {
      return this.y = t, null != this.get_view() && this.get_view().set_y(this.y), this.y
    },
    set_width: function(t) {
      return this.width = t, this.width
    },
    set_height: function(t) {
      return this.height = t, this.height
    },
    __class__: N
  });
  var D = function(t, e) {
    I.call(this, t), this.view = e
  };
  n["awe6.core._BasicButton._HelperState"] = D, D.__name__ = ["awe6", "core", "_BasicButton", "_HelperState"], D.__super__ = I, D.prototype = e(I.prototype, {
    __class__: D
  });
  var x = n["awe6.core._BasicButton._HelperEState"] = {
    __ename__: ["awe6", "core", "_BasicButton", "_HelperEState"],
    __constructs__: ["UP", "OVER"]
  };
  x.UP = ["UP", 0], x.UP.toString = r, x.UP.__enum__ = x, x.OVER = ["OVER", 1], x.OVER.toString = r, x.OVER.__enum__ = x;
  var O = function() {};
  n["awe6.interfaces.IEncrypter"] = O, O.__name__ = ["awe6", "interfaces", "IEncrypter"], O.prototype = {
    __class__: O
  };
  var U = function(t) {
    this._defaultSecret = t
  };
  n["awe6.core.Encrypter"] = U, U.__name__ = ["awe6", "core", "Encrypter"], U.__interfaces__ = [O], U.prototype = {
    decrypt: function(t, e) {
      null == e && (e = "");
      var s;
      return s = "" != e ? e : this._defaultSecret, this._xor(t, s)
    },
    _xor: function(t, e) {
      for (var s = Ts.alloc(t.length), i = 0, n = 0, r = s.length; r > n;) {
        var a = n++;
        s.set(a, t.b[a] ^ o.cca(e, i)), i++, i >= e.length && (i = 0)
      }
      return s
    },
    __class__: U
  };
  var P = function(t, e) {
    this.entity = t, this.agenda = e, this.isAddedToView = !1
  };
  n["awe6.core._Entity._HelperEntityAgendaPair"] = P, P.__name__ = ["awe6", "core", "_Entity", "_HelperEntityAgendaPair"], P.prototype = {
    __class__: P
  };
  var L = function() {};
  n["awe6.interfaces.IInputJoypad"] = L, L.__name__ = ["awe6", "interfaces", "IInputJoypad"], L.prototype = {
    __class__: L
  };
  var M = function(t, e, s, i, n, r, a, _, o, h, u, l, c, d) {
    this._kernel = t, null != e ? this._keyUp = e : this._keyUp = ee.UP, null != s ? this._keyRight = s : this._keyRight = ee.RIGHT, null != i ? this._keyDown = i : this._keyDown = ee.DOWN, null != n ? this._keyLeft = n : this._keyLeft = ee.LEFT, null != r ? this._keyPrimary = r : this._keyPrimary = ee.SPACE, null != a ? this._keySecondary = a : this._keySecondary = ee.Z, null != _ ? this._keyUpAlt = _ : this._keyUpAlt = ee.W, null != o ? this._keyRightAlt = o : this._keyRightAlt = ee.D, null != h ? this._keyDownAlt = h : this._keyDownAlt = ee.S, null != u ? this._keyLeftAlt = u : this._keyLeftAlt = ee.A, null != l ? this._keyPrimaryAlt = l : this._keyPrimaryAlt = ee.Q, null != c ? this._keySecondaryAlt = c : this._keySecondaryAlt = ee.E, null != d ? this._joypadTouchType = d : this._joypadTouchType = this._kernel.factory.joypadTouchType, this._isTouchEnabled = this._kernel.factory.joypadTouchType != te.DISABLED, this._joypadStateCache = {
      age: 0,
      isFire: !1,
      isUp: !1,
      isRight: !1,
      isDown: !1,
      isLeft: !1,
      isPrevFire: !1,
      isPrevUp: !1,
      isPrevRight: !1,
      isPrevDown: !1,
      isPrevLeft: !1
    }
  };
  n["awe6.core.InputJoypad"] = M, M.__name__ = ["awe6", "core", "InputJoypad"], M.__interfaces__ = [L], M.prototype = {
    _checkKeyboard: function(t, e) {
      switch (t[1]) {
        case 0:
          return this._checkKeyboard($t.PRIMARY, e) || this._checkKeyboard($t.SECONDARY, e);
        case 1:
          return e(this._keyUp) || e(this._keyUpAlt);
        case 2:
          return e(this._keyRight) || e(this._keyRightAlt);
        case 3:
          return e(this._keyDown) || e(this._keyDownAlt);
        case 4:
          return e(this._keyLeft) || e(this._keyLeftAlt);
        case 5:
          return e(this._keyPrimary) || e(this._keyPrimaryAlt);
        case 6:
          return e(this._keySecondary) || e(this._keySecondaryAlt)
      }
    },
    getIsButtonDown: function(t) {
      return this._checkKeyboard(t, (ii = this._kernel.inputs.keyboard, i(ii, ii.getIsKeyDown))) || this._isTouchEnabled && this._checkTouchIsDown(t)
    },
    getIsButtonPress: function(t) {
      return this._checkKeyboard(t, (ii = this._kernel.inputs.keyboard, i(ii, ii.getIsKeyPress))) || this._isTouchEnabled && this._checkTouchIsPress(t)
    },
    _getTouchButtonPosition: function(t) {
      switch (t[1]) {
        case 1:
          return {
            x: .5 * this._kernel.factory.width,
            y: .25 * this._kernel.factory.height
          };
        case 2:
          return {
            x: .75 * this._kernel.factory.width,
            y: .5 * this._kernel.factory.height
          };
        case 3:
          return {
            x: .5 * this._kernel.factory.width,
            y: .75 * this._kernel.factory.height
          };
        case 4:
          return {
            x: .25 * this._kernel.factory.width,
            y: .5 * this._kernel.factory.height
          };
        case 0:
        case 5:
        case 6:
          return {
            x: .5 * this._kernel.factory.width,
            y: .5 * this._kernel.factory.height
          }
      }
    },
    _getClosestTouchButton: function(t, e) {
      null == t && (t = this._mouse.x), null == e && (e = this._mouse.y);
      for (var s = 99999999, i = $t.FIRE, n = 0, r = [$t.FIRE, $t.UP, $t.RIGHT, $t.DOWN, $t.LEFT, $t.PRIMARY]; n < r.length;) {
        var a = r[n];
        ++n;
        var _ = this._getTouchButtonPosition(a),
          o = this._kernel.tools.distance(t, e, _.x, _.y, !0);
        s > o && (s = o, i = a)
      }
      return i
    },
    _getTouchState: function() {
      if (!(null != this._mouse ? !0 : Ls.__instanceof(this._kernel.inputs.mouse, Mt) ? function(t) {
          var e;
          return t._mouse = Ls.__cast(t._kernel.inputs.mouse, Mt), e = !0
        }(this) : !1) || this._mouse.getAge() == this._joypadStateCache.age) return this._joypadStateCache;
      var t = {
          age: this._mouse.getAge(),
          isFire: !1,
          isUp: !1,
          isRight: !1,
          isDown: !1,
          isLeft: !1,
          isPrevFire: this._joypadStateCache.isFire,
          isPrevUp: this._joypadStateCache.isUp,
          isPrevRight: this._joypadStateCache.isRight,
          isPrevDown: this._joypadStateCache.isDown,
          isPrevLeft: this._joypadStateCache.isLeft
        },
        e = this._joypadTouchType;
      switch (e[1]) {
        case 1:
          var s = this._getClosestTouchButton();
          t.isFire = s == $t.FIRE && this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._mouse.getIsButtonDown() && (t.isUp = s == $t.UP, t.isRight = s == $t.RIGHT, t.isDown = s == $t.DOWN, t.isLeft = s == $t.LEFT);
          break;
        case 2:
          var i = e[2];
          null == i && (i = 20), t.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, t.isUp = this._mouse.getButtonDragHeight() < -i, t.isRight = this._mouse.getButtonDragWidth() > i, t.isDown = this._mouse.getButtonDragHeight() > i, t.isLeft = this._mouse.getButtonDragWidth() < -i;
          break;
        case 3:
          var n = e[2];
          if (t.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._kernel.inputs.mouse.getIsButtonDown()) {
            null == n && (n = 100);
            var r = this._mouse.getDeltaX(),
              a = this._mouse.getDeltaY();
            t.isUp = -n > a, t.isRight = r > n, t.isDown = a > n, t.isLeft = -n > r
          }
      }
      return this._joypadStateCache = t, this._joypadStateCache
    },
    _checkTouchIsDown: function(t) {
      var e = this._getTouchState();
      switch (t[1]) {
        case 1:
          return e.isUp;
        case 2:
          return e.isRight;
        case 3:
          return e.isDown;
        case 4:
          return e.isLeft;
        case 0:
        case 5:
        case 6:
          return e.isFire
      }
    },
    _checkTouchIsPress: function(t) {
      var e = this._getTouchState();
      switch (t[1]) {
        case 1:
          return e.isUp && !e.isPrevUp;
        case 2:
          return e.isRight && !e.isPrevRight;
        case 3:
          return e.isDown && !e.isPrevDown;
        case 4:
          return e.isLeft && !e.isPrevLeft;
        case 0:
        case 5:
        case 6:
          return e.isFire && !e.isPrevFire
      }
    },
    __class__: M
  };
  var B = function() {};
  n["awe6.interfaces.IResettable"] = B, B.__name__ = ["awe6", "interfaces", "IResettable"], B.prototype = {
    __class__: B
  };
  var F = function() {};
  n["awe6.interfaces.IInputManager"] = F, F.__name__ = ["awe6", "interfaces", "IInputManager"], F.__interfaces__ = [B], F.prototype = {
    __class__: F
  };
  var Y = function(t) {
    T.call(this, t)
  };
  n["awe6.core.InputManager"] = Y, Y.__name__ = ["awe6", "core", "InputManager"], Y.__interfaces__ = [F], Y.__super__ = T, Y.prototype = e(T.prototype, {
    _init: function() {
      T.prototype._init.call(this), this.joypad = this.createJoypad(), this.keyboard = this._inputKeyboard = new Lt(this._kernel), this.mouse = this._inputMouse = new Mt(this._kernel)
    },
    _updater: function(t) {
      null == t && (t = 0), T.prototype._updater.call(this, t), this._inputKeyboard.update(t), this._inputMouse.update(t)
    },
    _disposer: function() {
      this._inputKeyboard.dispose(), this._inputMouse.dispose(), T.prototype._disposer.call(this)
    },
    createJoypad: function(t, e, s, i, n, r, a, _, o, h, u, l, c) {
      return new M(this._kernel, t, e, s, i, n, r, a, _, o, h, u, l, c)
    },
    reset: function() {
      return this._inputKeyboard.dispose(), this._inputMouse.dispose(), this._init(), !0
    },
    __class__: Y
  });
  var H = function() {};
  n["awe6.interfaces.IMessageManager"] = H, H.__name__ = ["awe6", "interfaces", "IMessageManager"], H.__interfaces__ = [B], H.prototype = {
    __class__: H
  };
  var G = function(t) {
    T.call(this, t)
  };
  n["awe6.core.MessageManager"] = G, G.__name__ = ["awe6", "core", "MessageManager"], G.__interfaces__ = [H], G.__super__ = T, G.prototype = e(T.prototype, {
    _init: function() {
      T.prototype._init.call(this), this._isVerbose = !1, this._subscriptions = new Rs, this._messageQueue = new u
    },
    addSubscriber: function(t, e, s, i, n, r) {
      null == r && (r = !1);
      var a = new V(t, e, s, i, n, r);
      this._subscriptions.add(a)
    },
    removeSubscribers: function(t, e, s, i, n) {
      for (var r = this._getSubscriptions(t, e, s, i, n, !0), a = r.iterator(); a.hasNext();) {
        var _ = a.next();
        this._subscriptions.remove(_), this._isVerbose && ys.trace("Removing " + d.string(_.sender) + ":" + d.string(_.message), {
          fileName: "MessageManager.hx",
          lineNumber: 80,
          className: "awe6.core.MessageManager",
          methodName: "removeSubscribers"
        })
      }
    },
    sendMessage: function(t, e, s, i, n) {
      null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), this._sendMessage(t, e, e, s, i, n)
    },
    reset: function() {
      return this.removeSubscribers(), this._messageQueue = new u, !0
    },
    _updater: function(t) {
      if (null == t && (t = 0), T.prototype._updater.call(this, t), this._isOkToSendMessage())
        for (var e = this._messageQueue.h, s = null; null != e;) {
          var i;
          i = function(t) {
            var i;
            return s = e[0], e = e[1], i = s
          }(this), this._sendMessage(i.message, i.sender, i.target, i.isBubbleDown, i.isBubbleUp, i.isBubbleEverywhere), this._messageQueue.remove(i)
        }
    },
    _isOkToSendMessage: function() {
      return null != this._kernel.scenes.get_scene()
    },
    _sendMessage: function(t, e, s, i, n, r) {
      if (null == r && (r = !1), null == n && (n = !1), null == i && (i = !1), this._isVerbose && ys.trace("Sending message: " + d.string(t) + " from " + e.id + "(" + d.string(null == e ? null : Ls.getClass(e)) + ") via " + s.id + " (" + d.string(null == s ? null : Ls.getClass(s)) + ")", {
          fileName: "MessageManager.hx",
          lineNumber: 119,
          className: "awe6.core.MessageManager",
          methodName: "_sendMessage"
        }), !this._isOkToSendMessage()) return void this._messageQueue.push(new z(t, e, s, i, n, r));
      if (r) {
        var a = this._kernel.scenes.get_scene().getEntities()[0];
        if (null != a && null != a.get_parent()) return this._sendMessage(t, e, this._kernel.scenes.get_scene().getEntities()[0].get_parent(), !0)
      }
      for (var _ = this._getSubscriptions(s, t, null, e), o = !0, h = _.iterator(); h.hasNext();) {
        var u = h.next();
        if (o = this._send(u, t, e), !o) return
      }
      if (i)
        for (var l = s.getEntities(), c = 0; c < l.length;) {
          var g = l[c];
          ++c, this._sendMessage(t, e, g, !0)
        }
      n && null != s.get_parent() && d.is(s.get_parent(), R) && this._sendMessage(t, e, s.get_parent(), !1, !0)
    },
    _send: function(t, e, s) {
      var i = t.handler.apply(t.subscriber, [e, s]);
      return t.isRemovedAfterFirstSend && this._subscriptions.remove(t), i
    },
    _getSubscriptions: function(t, e, s, i, n, r) {
      null == r && (r = !1);
      for (var a = new Rs, _ = this._subscriptions.iterator(); _.hasNext();) {
        var o = _.next();
        if (null == t || t == o.subscriber || t == o.sender) {
          if (null != e && !Ls.__instanceof(e, o.messageClass)) {
            var h = E["typeof"](e);
            switch (h[1]) {
              case 7:
                h[2];
                if (E.getEnum(e) != E.getEnum(o.message) || e[0] != E.enumConstructor(o.message) || e.slice(2).toString() != E.enumParameters(o.message).toString()) continue;
                break;
              default:
                if (e != o.message) continue
            }
          }
          if (null == s || c.compareMethods(o.handler, s)) {
            if (null != i) {
              if (r) {
                if (null != o.senderClassType) continue;
                if (null == o.sender) continue
              }
              if (null != o.senderClassType && !Ls.__instanceof(i, o.senderClassType)) continue;
              if (null != o.sender && o.sender != i) continue
            }
            a.head = new As(o, a.head)
          }
        }
      }
      return a
    },
    __class__: G
  });
  var V = function(t, e, s, i, n, r) {
    null == r && (r = !1), this.subscriber = t, this.message = e, this.handler = s, this.sender = i, this.senderClassType = n, this.isRemovedAfterFirstSend = r, null == e ? this.messageClass = null : this.messageClass = Ls.getClass(e)
  };
  n["awe6.core._MessageManager._HelperSubscription"] = V, V.__name__ = ["awe6", "core", "_MessageManager", "_HelperSubscription"], V.prototype = {
    __class__: V
  };
  var z = function(t, e, s, i, n, r) {
    null == r && (r = !1), null == n && (n = !1), null == i && (i = !1), this.message = t, this.sender = e, this.target = s, this.isBubbleDown = i, this.isBubbleUp = n, this.isBubbleEverywhere = r
  };
  n["awe6.core._MessageManager._HelperMessage"] = z, z.__name__ = ["awe6", "core", "_MessageManager", "_HelperMessage"], z.prototype = {
    __class__: z
  };
  var j = function() {};
  n["awe6.interfaces.IScene"] = j, j.__name__ = ["awe6", "interfaces", "IScene"], j.__interfaces__ = [A, C, S], j.prototype = {
    __class__: j
  };
  var W = function(t, e, s, i, n) {
    null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), this.type = e, this.isPauseable = s, this.isMuteable = i, this.isSessionSavedOnNext = n, T.call(this, t)
  };
  n["awe6.core.Scene"] = W, W.__name__ = ["awe6", "core", "Scene"], W.__interfaces__ = [j], W.__super__ = T, W.prototype = e(T.prototype, {
    _init: function() {
      T.prototype._init.call(this), this.isDisposable = !0, this._entity = new I(this._kernel), this.view = this._entity.get_view()
    },
    _updater: function(t) {
      null == t && (t = 0), T.prototype._updater.call(this, t), this._entity.update(t)
    },
    _disposer: function() {
      this._entity.dispose(), this.get_view().dispose(), T.prototype._disposer.call(this)
    },
    addEntity: function(t, e, s, i) {
      return null == i && (i = 0), null == s && (s = !1), this._entity.addEntity(t, e, s, i)
    },
    removeEntity: function(t, e, s) {
      null == s && (s = !1), this._entity.removeEntity(t, e, s)
    },
    getEntities: function(t) {
      return this._entity.getEntities(t)
    },
    getEntitiesByClass: function(t, e, s, i, n) {
      return null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), this._entity.getEntitiesByClass(t, e, s, i, !1);
    },
    get_view: function() {
      return this.view
    },
    setAgenda: function(t) {
      return this._entity.setAgenda(t)
    },
    __class__: W
  });
  var X = function() {};
  n["awe6.interfaces.ISceneManager"] = X, X.__name__ = ["awe6", "interfaces", "ISceneManager"], X.prototype = {
    __class__: X
  };
  var K = function(t) {
    T.call(this, t)
  };
  n["awe6.core.SceneManager"] = K, K.__name__ = ["awe6", "core", "SceneManager"], K.__interfaces__ = [X], K.__super__ = T, K.prototype = e(T.prototype, {
    _init: function() {
      T.prototype._init.call(this), this.view = new jt(this._kernel)
    },
    _updater: function(t) {
      null == t && (t = 0), T.prototype._updater.call(this, t), null != this.get_scene() && this.get_scene().update(t), null != this._sceneTransition && this._sceneTransition.update(t)
    },
    _disposer: function() {
      null != this.get_scene() && this.get_scene().dispose(), null != this._sceneTransition && this._sceneTransition.dispose(), this.view.dispose(), T.prototype._disposer.call(this)
    },
    setScene: function(t) {
      var e = null;
      if (null != this.get_scene()) {
        e = this.get_scene().type;
        var s = this._kernel.factory.createSceneTransition(t, e);
        null != this._sceneTransition && this._sceneTransition.dispose(), this._sceneTransition = s, this._kernel.inputs.reset(), this.get_scene().isDisposable && (this.get_scene().dispose(), this._kernel.messenger.reset()), this.scene = null
      }
      this._kernel.overlay.hideButtons(), this.scene = this._kernel.factory.createScene(t), this._kernel.overlay.showButton(re.BACK, null != this._kernel.factory.getBackSceneType(this.get_scene().type)), this._kernel.overlay.showButton(re.MUTE, this.get_scene().isMuteable && !this._kernel.audio.isMute), this._kernel.overlay.showButton(re.UNMUTE, this.get_scene().isMuteable && this._kernel.audio.isMute), this._kernel.overlay.showButton(re.PAUSE, this.get_scene().isPauseable && this._kernel.isActive), this._kernel.overlay.showButton(re.UNPAUSE, this.get_scene().isPauseable && !this._kernel.isActive), this.view.addChild(this.get_scene().get_view()), null != this._sceneTransition && this.get_scene().get_view().addChild(this._sceneTransition.get_view(), this._tools.BIG_NUMBER + 1)
    },
    back: function() {
      var t = this._kernel.factory.getBackSceneType(this.get_scene().type);
      null != t && this.setScene(t)
    },
    next: function() {
      this.get_scene().isSessionSavedOnNext && null != this._kernel.get_session() && this._kernel.get_session().save();
      var t = this._kernel.factory.getNextSceneType(this.get_scene().type);
      null != t && this.setScene(t)
    },
    get_scene: function() {
      return this.scene
    },
    __class__: K
  });
  var Q = function() {};
  n["awe6.interfaces.ITextStyle"] = Q, Q.__name__ = ["awe6", "interfaces", "ITextStyle"], Q.prototype = {
    __class__: Q
  };
  var J = function(t, e, s, i, n, r, a, _, o, h) {
    null == o && (o = 0), null == n && (n = !1), null == i && (i = !1), null != t ? this.font = t : this.font = "_sans", null != e ? this.size = e : this.size = 12, null != s ? this.color = s : this.color = 0, this.isBold = i, this.isItalic = n, null != r ? this.align = r : this.align = _e.LEFT, null != a ? this.spacingHorizontal = a : this.spacingHorizontal = 0, null != _ ? this.spacingVertical = _ : this.spacingVertical = 0, this.thickness = o, this.filters = h
  };
  n["awe6.core.TextStyle"] = J, J.__name__ = ["awe6", "core", "TextStyle"], J.__interfaces__ = [Q], J.prototype = {
    toString: function() {
      return d.string(this.font + "," + this.size + "," + this.color + "," + d.string(this.isBold) + "," + d.string(this.isItalic) + "," + d.string(this.align) + "," + this.spacingHorizontal + "," + this.spacingVertical + "," + this.thickness + "," + d.string(this.filters))
    },
    __class__: J
  };
  var Z = function() {};
  n["awe6.interfaces.ITools"] = Z, Z.__name__ = ["awe6", "interfaces", "ITools"], Z.__interfaces__ = [O], Z.prototype = {
    __class__: Z
  };
  var q = function(t) {
    this._kernel = t, this.BIG_NUMBER = 9999998, this._encrypter = this._kernel.factory.createEncrypter()
  };
  n["awe6.core.Tools"] = q, q.__name__ = ["awe6", "core", "Tools"], q.__interfaces__ = [Z], q.prototype = {
    createGuid: function(t, e) {
      return null == e && (e = ""), null == t && (t = !1), t ? e + function(t) {
        var e, s = t._randomCharacter() + t._randomCharacter() + t._randomCharacter();
        return e = o.substr(s, 0, 10)
      }(this) : e + (this._randomCharacter() + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + this._randomCharacter() + this._randomCharacter())
    },
    _randomCharacter: function() {
      var t = p.hex(0 | d["int"](65536 * (1 + Math.random())), 1);
      return o.substr(t, 1, null)
    },
    ease: function(t, e, s) {
      return t * (1 - s) + e * s
    },
    sortByPriority: function(t, e) {
      var s = t.get_priority(),
        i = e.get_priority();
      return i > s ? -1 : s > i ? 1 : 0
    },
    _isCamelCase: function(t) {
      return t.toUpperCase() == t ? !1 : t.indexOf(" ") > -1 ? !1 : t.indexOf("_") > -1 ? !1 : !0
    },
    _isConstCase: function(t) {
      return t.toUpperCase() != t ? !1 : t.indexOf(" ") > -1 ? !1 : !0
    },
    fromCamelCase: function(t) {
      if (null == t || "" == t) return "";
      for (var e = "", s = t.split(""), i = "", n = 0; n < s.length;) {
        var r = s[n];
        ++n, r.toLowerCase() != r && (e += i), e += r, i = " "
      }
      return e
    },
    toConstCase: function(t) {
      if (null == t || "" == t) return "";
      if (this._isConstCase(t)) return t;
      this._isCamelCase(t) && (t = this.fromCamelCase(t));
      var e = "";
      return t = p.replace(t, "     ", " "), t = p.replace(t, "    ", " "), t = p.replace(t, "   ", " "), t = p.replace(t, "  ", " "), t = p.replace(t, " ", "_"), e = t.toUpperCase()
    },
    limit: function(t, e, s) {
      return t > s ? s : e > t ? e : t
    },
    range: function(t, e, s) {
      var i = s - e;
      if (0 == i) return t;
      var n = t - e;
      return n - Math.floor(n / i) * i + e
    },
    getRandomType: function(t) {
      return E.createEnumIndex(t, d.random(E.getEnumConstructs(t).length))
    },
    distance: function(t, e, s, i, n) {
      null == n && (n = !1);
      var r = s - t,
        a = i - e,
        _ = r * r + a * a;
      return n ? _ : Math.sqrt(_)
    },
    shuffle: function(t) {
      for (var e = t.slice(), s = e.length; s > 1;) {
        var i = d.random(s);
        s--;
        var n = e[s];
        e[s] = e[i], e[i] = n
      }
      return e
    },
    serialize: function(t) {
      return ms.run(t)
    },
    unserialize: function(t) {
      return Ss.run(t)
    },
    decrypt: function(t, e) {
      return null == e && (e = ""), this._encrypter.decrypt(t, e)
    },
    __class__: q
  };
  var $ = function() {};
  n["awe6.interfaces.IAssetManager"] = $, $.__name__ = ["awe6", "interfaces", "IAssetManager"], $.prototype = {
    __class__: $
  };
  var tt = function() {};
  n["awe6.interfaces.IAssetManagerProcess"] = tt, tt.__name__ = ["awe6", "interfaces", "IAssetManagerProcess"], tt.__interfaces__ = [S, $];
  var et = function(t) {
    T.call(this, t)
  };
  n["awe6.core.drivers.AAssetManager"] = et, et.__name__ = ["awe6", "core", "drivers", "AAssetManager"], et.__interfaces__ = [tt], et.__super__ = T, et.prototype = e(T.prototype, {
    _init: function() {
      this._packageId = this._kernel.getConfig("settings.assets.packages.default"), null == this._packageId && (this._packageId = "assets"), T.prototype._init.call(this)
    },
    getAsset: function(t, e, s) {
      return null == e && (e = this._packageId), this._driverGetAsset(t, e, s)
    },
    _driverGetAsset: function(t, e, s) {
      return null
    },
    __class__: et
  });
  var st = function() {};
  n["awe6.interfaces.IAudioManager"] = st, st.__name__ = ["awe6", "interfaces", "IAudioManager"], st.prototype = {
    __class__: st
  };
  var it = function(t) {
    T.call(this, t)
  };
  n["awe6.core.drivers.AAudioManager"] = it, it.__name__ = ["awe6", "core", "drivers", "AAudioManager"], it.__interfaces__ = [st], it.__super__ = T, it.prototype = e(T.prototype, {
    _init: function() {
      T.prototype._init.call(this), this._sounds = [], this._packageId = this._kernel.getConfig("settings.assets.packages.audio"), null == this._packageId && (this._packageId = this._kernel.getConfig("settings.assets.packages.default")), null == this._packageId && (this._packageId = "assets.audio"), this.set_isMute(!1)
    },
    _updater: function(t) {
      null == t && (t = 0), T.prototype._updater.call(this, t);
      for (var e = 0, s = this._sounds; e < s.length;) {
        var i = s[e];
        ++e, i.isDisposed && o.remove(this._sounds, i)
      }
    },
    _disposer: function() {
      for (var t = 0, e = this._sounds; t < e.length;) {
        var s = e[t];
        ++t, s.dispose()
      }
      this.set_isMute(!1), T.prototype._disposer.call(this)
    },
    start: function(t, e, s, i, n, r, a, _) {
      if (null == a && (a = !1), null == r && (r = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), null == e && (e = Zt.DEFAULT), a) {
        var o = this._getSounds(t, e);
        if (0 != o.length) return
      }
      this._sounds.push(this._driverSoundFactory(t, e, s, i, n, r, _))
    },
    _driverSoundFactory: function(t, e, s, i, n, r, a) {
      return null == r && (r = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), new nt(this._kernel, t, this._packageId, e, s, i, n, r, a)
    },
    stop: function(t, e) {
      for (var s = this._getSounds(t, e), i = 0; i < s.length;) {
        var n = s[i];
        ++i, n.stop()
      }
    },
    transform: function(t, e, s, i, n) {
      null == n && (n = !1), null == i && (i = 0), null == s && (s = 1);
      for (var r = this._getSounds(t, e), a = 0; a < r.length;) {
        var _ = r[a];
        ++a, _.transform(s, i, n)
      }
    },
    set_isMute: function(t) {
      return this.isMute = t, this._driverSetIsMute(t), this.isMute
    },
    _driverSetIsMute: function(t) {},
    _getSounds: function(t, e) {
      var s = [];
      if (null == t && null == e) s = this._sounds.slice();
      else if (null == e)
        for (var i = 0, n = this._sounds; i < n.length;) {
          var r = n[i];
          ++i, r.id == t && s.push(r)
        } else if (null == t)
          for (var a = 0, _ = this._sounds; a < _.length;) {
            var o = _[a];
            ++a, E.enumEq(o.audioChannelType, e) && s.push(o)
          } else
            for (var h = 0, u = this._sounds; h < u.length;) {
              var l = u[h];
              ++h, l.id == t && E.enumEq(l.audioChannelType, e) && s.push(l)
            }
        return s
    },
    __class__: it
  });
  var nt = function(t, e, s, i, n, r, a, _, o) {
    null == _ && (_ = 0), null == a && (a = 1), null == r && (r = 0), null == n && (n = 1), this._kernel = t, this.isDisposed = !1, this.id = e, this._packageId = s, null != i ? this.audioChannelType = i : this.audioChannelType = Zt.DEFAULT, -1 == n && (n = this._kernel.tools.BIG_NUMBER), this._loops = n, this._startTime = r, this._volume = a, this._pan = _, this._onCompleteCallback = o, this._init()
  };
  n["awe6.core.drivers._AHelperSound"] = nt, nt.__name__ = ["awe6", "core", "drivers", "_AHelperSound"], nt.__interfaces__ = [m], nt.prototype = {
    _init: function() {
      this._driverInit()
    },
    _driverInit: function() {},
    transform: function(t, e, s) {
      null == s && (s = !1), null == e && (e = 0), null == t && (t = 1), this.isDisposed || (s ? (this._volume = t, this._pan = e) : (this._volume = this._kernel.tools.limit(t, 0, 1), this._pan = this._kernel.tools.limit(e, -1, 1)), this._driverTransform(s))
    },
    _driverTransform: function(t) {
      null == t && (t = !1)
    },
    stop: function() {
      this._driverStop(), this.dispose()
    },
    _driverStop: function() {},
    dispose: function() {
      this.isDisposed || (this.isDisposed = !0, this._driverStop())
    },
    __class__: nt
  };
  var rt = function() {};
  n["awe6.interfaces.IFactory"] = rt, rt.__name__ = ["awe6", "interfaces", "IFactory"], rt.prototype = {
    __class__: rt
  };
  var at = function(t, e, s) {
    null == e && (e = !1), this._context = t, this.isDebug = e, this._config = s, this.config = new Ns, this.id = "awe6", this.version = "0.0.1", this.author = "unknown", this.isDecached = !1, this.isEyeCandyOptionEnabled = !0, this.isFullScreenOptionEnabled = !0, this.isResetSessionsOptionEnabled = !0, this.width = 600, this.height = 400, this.bgColor = 16711680, this.fullScreenType = qt.SCALE_ASPECT_RATIO_PRESERVE, this.joypadTouchType = te.DISABLED, this.secret = "YouMustOverrideThis", this.targetFramerate = 25, this.isFixedUpdates = !0, this.startingSceneType = ae.GAME, this.keyPause = ee.P, this.keyMute = ee.M, this.keyNext = ee.SPACE, this.keyBack = ee.ESCAPE, this.keySpecial = ee.CONTROL, this._configurer(!0), this._driverInit()
  };
  n["awe6.core.drivers.AFactory"] = at, at.__name__ = ["awe6", "core", "drivers", "AFactory"], at.__interfaces__ = [m, rt], at.prototype = {
    _driverInit: function() {
      null != this._config && "<?xml" == o.substr(this._config, 0, 5) && this._traverseElements(y.parse(this._config).firstElement().elements(), ""), this._launchKernel()
    },
    _traverseElements: function(t, e) {
      for (0 != e.length && (e += "."); t.hasNext();) {
        var s, i = t.next();
        if (s = e + function(t) {
            var e;
            if (i.nodeType != y.Element) throw new Ps("Bad node type, expected Element but found " + i.nodeType);
            return e = i.nodeName
          }(this), i.elements().hasNext() && this._traverseElements(i.elements(), s), null != function(t) {
            var e;
            if (i.nodeType != y.Document && i.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + i.nodeType);
            return e = i.children[0]
          }(this) && "<![CDATA[" == function(t) {
            var e, s = function(t) {
              var e;
              if (i.nodeType != y.Document && i.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + i.nodeType);
              return e = i.children[0]
            }(t).toString();
            return e = o.substr(s, 0, 9)
          }(this) && function(t) {
            var e;
            if (i.nodeType != y.Document && i.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + i.nodeType);
            return e = i.children[0]
          }(this).set_nodeValue(function(t) {
            var e;
            if (i.nodeType != y.Document && i.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + i.nodeType);
            return e = i.children[0]
          }(this).toString().split("<![CDATA[").join("").split("]]>").join("")), null == function(t) {
            var e;
            if (i.nodeType != y.Document && i.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + i.nodeType);
            return e = i.children[0]
          }(this)) this.config.set(s, "");
        else {
          var n;
          if (n = function(t) {
              var e;
              if (i.nodeType != y.Document && i.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + i.nodeType);
              return e = i.children[0]
            }(this).nodeType, n != y.Element && n != y.Document) {
            var r;
            r = null == function(t) {
              var e;
              if (i.nodeType != y.Document && i.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + i.nodeType);
              return e = i.children[0]
            }(this) ? "" : function(t) {
              var e;
              if (i.nodeType != y.Document && i.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + i.nodeType);
              return e = i.children[0]
            }(this).get_nodeValue(), this.config.set(s, r)
          } else this.config.set(s, "")
        }
        for (var a = i.attributes(); a.hasNext();) {
          var _ = a.next(),
            h = s + "." + _,
            u = i.get(_);
          this.config.set(h, u)
        }
      }
    },
    _configurer: function(t) {
      null == t && (t = !1)
    },
    _launchKernel: function() {
      null == this._concreteKernel && (this._configurer(!1), this._concreteKernel = new Bt(this, this._context))
    },
    _getAssetUrls: function() {
      for (var t = [], e = 0; 1e3 > e;) {
        var s = e++,
          i = "settings.assets.url" + s;
        this.config.exists(i) && t.push(d.string(this.config.get(i)))
      }
      return t
    },
    onInitComplete: function(t) {
      if (null == this._kernel && null != t) {
        this._kernel = t, this._tools = this._kernel.tools;
        var e = this._tools.toConstCase(p.trim(this.id));
        this.id = o.substr(e, 0, 16);
        var s = p.trim(this.version);
        this.version = o.substr(s, 0, 10);
        var i = p.trim(this.author);
        this.author = o.substr(i, 0, 16)
      }
    },
    createAssetManager: function() {
      return Ls.__instanceof(this._kernel.assets, tt) ? Ls.__cast(this._kernel.assets, tt) : new xt(this._kernel)
    },
    createEncrypter: function() {
      return new U(this.secret)
    },
    createLogger: function() {
      return null
    },
    createOverlay: function() {
      return new Ft(this._kernel)
    },
    createPreloader: function() {
      return new Yt(this._kernel, this._getAssetUrls(), this.isDecached)
    },
    createScene: function(t) {
      return null == t && (t = this.startingSceneType), new W(this._kernel, t)
    },
    createSceneTransition: function(t, e) {
      return new Gt(this._kernel)
    },
    createSession: function(t) {
      return new It(this._kernel, t)
    },
    createTextStyle: function(t) {
      return new J
    },
    getBackSceneType: function(t) {
      return null
    },
    getNextSceneType: function(t) {
      return null
    },
    dispose: function() {
      this.isDisposed || null == this._concreteKernel || (this.isDisposed = !0, this._driverDisposer(), this._concreteKernel.dispose(), this._concreteKernel = null, this._kernel = null, this.config = null)
    },
    _driverDisposer: function() {},
    __class__: at
  };
  var _t = function() {};
  n["awe6.interfaces.IInputKeyboard"] = _t, _t.__name__ = ["awe6", "interfaces", "IInputKeyboard"], _t.prototype = {
    __class__: _t
  };
  var ot = function(t) {
    T.call(this, t)
  };
  n["awe6.core.drivers.AInputKeyboard"] = ot, ot.__name__ = ["awe6", "core", "drivers", "AInputKeyboard"], ot.__interfaces__ = [_t], ot.__super__ = T, ot.prototype = e(T.prototype, {
    _init: function() {
      T.prototype._init.call(this), this._driverInit(), this._reset()
    },
    _driverInit: function() {},
    _updater: function(t) {
      null == t && (t = 0), T.prototype._updater.call(this, t);
      for (var e = new Ns, s = [], i = 0, n = this._buffer; i < n.length;) {
        var r = n[i];
        ++i;
        var a;
        a = null == r.keyCode ? "null" : "" + r.keyCode, (null != li[a] ? e.existsReserved(a) : e.h.hasOwnProperty(a)) ? s.push(r) : r.isDown ? this._keys[r.keyCode].isDown || (this._onDown(r.keyCode), null != li[a] ? e.setReserved(a, !0) : e.h[a] = !0) : this._keys[r.keyCode].isDown && (this._onUp(r.keyCode), null != li[a] ? e.setReserved(a, !0) : e.h[a] = !0)
      }
      this._buffer = s.slice();
      for (var _ = 0, o = this._keys; _ < o.length;) {
        var h = o[_];
        ++_, h.isDown ? h.updatesDown++ : h.updatesUp++, h.isDown ? h.timeDown += t : h.timeUp += t
      }
    },
    _disposer: function() {
      this._keys = null, T.prototype._disposer.call(this)
    },
    _addEvent: function(t, e) {
      this._buffer.push(new ut(t, e))
    },
    _onDown: function(t) {
      var e = this._keys[t];
      e.isUsed = !0, e.isDown = !0, e.timeUpPrevious = e.timeUp, e.updatesUpPrevious = e.updatesUp, e.updatesUp = 0, e.timeUp = 0
    },
    _onUp: function(t) {
      var e = this._keys[t];
      e.isDown = !1, e.timeDownPrevious = e.timeDown, e.updatesDownPrevious = e.updatesDown, e.updatesDown = 0, e.timeDown = 0
    },
    _reset: function(t) {
      this._buffer = [], this._keys = [];
      for (var e = 0; 256 > e;) {
        var s = e++;
        this._keys[s] = new ht(this._kernel)
      }
    },
    getIsKeyDown: function(t) {
      if (null == t) return !1;
      var e = this.getKeyCode(t);
      return this._keys[e].isDown
    },
    getIsKeyPress: function(t) {
      if (null == t) return !1;
      var e = this.getKeyCode(t);
      return 1 == this._keys[e].updatesDown
    },
    getIsKeyRelease: function(t) {
      if (null == t) return !1;
      var e = this.getKeyCode(t);
      return this._keys[e].isUsed && 1 == this._keys[e].updatesUp
    },
    getKeyCode: function(t) {
      switch (t[1]) {
        case 0:
          return 144;
        case 1:
          return 12;
        case 2:
          return 47;
        case 3:
          return 18;
        case 4:
          return 8;
        case 5:
          return 20;
        case 6:
          return 17;
        case 7:
          return 46;
        case 8:
          return 40;
        case 9:
          return 35;
        case 10:
          return 13;
        case 11:
          return 27;
        case 12:
          return 112;
        case 13:
          return 121;
        case 14:
          return 122;
        case 15:
          return 123;
        case 16:
          return 124;
        case 17:
          return 125;
        case 18:
          return 126;
        case 19:
          return 113;
        case 20:
          return 114;
        case 21:
          return 115;
        case 22:
          return 116;
        case 23:
          return 117;
        case 24:
          return 118;
        case 25:
          return 119;
        case 26:
          return 120;
        case 27:
          return 36;
        case 28:
          return 45;
        case 29:
          return 37;
        case 30:
          return 96;
        case 31:
          return 97;
        case 32:
          return 98;
        case 33:
          return 99;
        case 34:
          return 100;
        case 35:
          return 101;
        case 36:
          return 102;
        case 37:
          return 103;
        case 38:
          return 104;
        case 39:
          return 105;
        case 40:
          return 107;
        case 41:
          return 110;
        case 42:
          return 111;
        case 43:
          return 108;
        case 44:
          return 106;
        case 45:
          return 109;
        case 46:
          return 34;
        case 47:
          return 33;
        case 48:
          return 39;
        case 49:
          return 16;
        case 50:
          return 32;
        case 51:
          return 9;
        case 52:
          return 38;
        case 53:
          return 65;
        case 54:
          return 66;
        case 55:
          return 67;
        case 56:
          return 68;
        case 57:
          return 69;
        case 58:
          return 70;
        case 59:
          return 71;
        case 60:
          return 72;
        case 61:
          return 73;
        case 62:
          return 74;
        case 63:
          return 75;
        case 64:
          return 76;
        case 65:
          return 77;
        case 66:
          return 78;
        case 67:
          return 79;
        case 68:
          return 80;
        case 69:
          return 81;
        case 70:
          return 82;
        case 71:
          return 83;
        case 72:
          return 84;
        case 73:
          return 85;
        case 74:
          return 86;
        case 75:
          return 87;
        case 76:
          return 88;
        case 77:
          return 89;
        case 78:
          return 90;
        case 79:
          return 48;
        case 80:
          return 49;
        case 81:
          return 50;
        case 82:
          return 51;
        case 83:
          return 52;
        case 84:
          return 53;
        case 85:
          return 54;
        case 86:
          return 55;
        case 87:
          return 56;
        case 88:
          return 57;
        case 89:
          return 186;
        case 90:
          return 187;
        case 91:
          return 189;
        case 92:
          return 191;
        case 93:
          return 222;
        case 94:
          return 219;
        case 95:
          return 221;
        case 96:
          return 220;
        case 97:
          return 192;
        case 98:
          return 223;
        case 99:
          var e = t[2];
          return d["int"](e)
      }
    },
    getKey: function(t) {
      var e = E.getEnumConstructs(ee);
      e.pop();
      for (var s = 0; s < e.length;) {
        var i = e[s];
        ++s;
        var n = E.createEnum(ee, i);
        if (this.getKeyCode(n) == t) return n
      }
      return ee.SUB_TYPE(t)
    },
    __class__: ot
  });
  var ht = function(t) {
    this.isDown = !1, this.updatesDown = 0, this.updatesUp = t.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = t.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = t.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = t.tools.BIG_NUMBER
  };
  n["awe6.core.drivers._AInputKeyboard._HelperKey"] = ht, ht.__name__ = ["awe6", "core", "drivers", "_AInputKeyboard", "_HelperKey"], ht.prototype = {
    __class__: ht
  };
  var ut = function(t, e) {
    this.keyCode = t, this.isDown = e
  };
  n["awe6.core.drivers._AInputKeyboard._HelperKeyEvent"] = ut, ut.__name__ = ["awe6", "core", "drivers", "_AInputKeyboard", "_HelperKeyEvent"], ut.prototype = {
    __class__: ut
  };
  var lt = function() {};
  n["awe6.interfaces.IInputMouse"] = lt, lt.__name__ = ["awe6", "interfaces", "IInputMouse"], lt.prototype = {
    __class__: lt
  };
  var ct = function(t) {
    T.call(this, t)
  };
  n["awe6.core.drivers.AInputMouse"] = ct, ct.__name__ = ["awe6", "core", "drivers", "AInputMouse"], ct.__interfaces__ = [lt], ct.__super__ = T, ct.prototype = e(T.prototype, {
    _init: function() {
      T.prototype._init.call(this), this._driverInit(), this.x = this.y = this._xPrev = this._yPrev = this._deltaX = this._deltaY = this.scroll = this._deltaScroll = 0, this.relativeX = this.relativeY = this.relativeCentralisedX = this.relativeCentralisedY = 0, this.isMoving = !1, this._buffer = [], this._getPosition(), this.isMoving = !1, this.set_isVisible(!0), this.scroll = 0, this.set_cursorType(ne.AUTO), this._scrollPrev = 0, this._stillUpdates = 0, this._stillDuration = 0, this._reset()
    },
    _driverInit: function() {},
    _updater: function(t) {
      null == t && (t = 0), this._deltaTimePrev = t, T.prototype._updater.call(this, t), this._handleButton(ie.LEFT, this._buffer.length > 0 ? this._buffer.shift() : this._buttonLeft.isDown, t), this._handleButton(ie.MIDDLE, this._isMiddleDown(), t), this._handleButton(ie.RIGHT, this._isRightDown(), t), this._deltaScroll = this.scroll - this._scrollPrev, this._scrollPrev = this.scroll, this._xPrev = this.x, this._yPrev = this.y, this._getPosition(), this._deltaX = this.x - this._xPrev, this._deltaY = this.y - this._yPrev, this.isMoving = this.x != this._xPrev || this.y != this._yPrev, this.isMoving ? this._stillUpdates = this._stillDuration = 0 : (this._stillUpdates++, this._stillDuration += t), this.relativeX = this.x / this._kernel.factory.width, this.relativeY = this.y / this._kernel.factory.height, this.relativeCentralisedX = 2 * (this.relativeX - .5), this.relativeCentralisedY = 2 * (this.relativeY - .5), this.isWithinBounds = this._isWithinBounds()
    },
    _isMiddleDown: function() {
      return !1
    },
    _isRightDown: function() {
      return !1
    },
    _isWithinBounds: function() {
      return !0
    },
    _getPosition: function() {
      this.x = 0, this.y = 0
    },
    _handleButton: function(t, e, s) {
      null == s && (s = 0);
      var i = this._getButton(t);
      e ? (i.isDown || (i.timeUpPrevious = i.timeUp, i.updatesUpPrevious = i.updatesUp, i.timeUp = i.updatesUp = 0, i.clickX = this.x, i.clickY = this.y), i.timeDown += s, i.updatesDown++, i.isDown = !0) : (i.isDown && (i.timeDownPrevious = i.timeDown, i.updatesDownPrevious = i.updatesDown, i.timeDown = i.updatesDown = 0), i.timeUp += s, i.updatesUp++, i.isDown = !1)
    },
    _disposer: function() {
      T.prototype._disposer.call(this)
    },
    _reset: function(t) {
      this._buffer = [], this._buttonLeft = new dt(this._kernel), this._buttonMiddle = new dt(this._kernel), this._buttonRight = new dt(this._kernel)
    },
    _getButton: function(t) {
      switch (null == t && (t = ie.LEFT), t[1]) {
        case 0:
          return this._buttonLeft;
        case 1:
          return this._buttonMiddle;
        case 2:
          return this._buttonRight
      }
    },
    getDeltaX: function(t) {
      null == t && (t = !0);
      var e = this._deltaX;
      return t && (e *= 1e3 / this._deltaTimePrev), Math.round(e)
    },
    getDeltaY: function(t) {
      null == t && (t = !0);
      var e = this._deltaY;
      return t && (e *= 1e3 / this._deltaTimePrev), Math.round(e)
    },
    getIsButtonDown: function(t) {
      var e = this._getButton(t);
      return e.isDown
    },
    getIsButtonRelease: function(t) {
      var e = this._getButton(t);
      return 1 == e.updatesUp
    },
    getButtonDownDuration: function(t, e, s) {
      null == s && (s = !1), null == e && (e = !0);
      var i = this._getButton(t);
      return s ? e ? i.timeDownPrevious : i.updatesDownPrevious : e ? i.timeDown : i.updatesDown
    },
    getButtonUpDuration: function(t, e, s) {
      null == s && (s = !1), null == e && (e = !0);
      var i = this._getButton(t);
      return s ? e ? i.timeUpPrevious : i.updatesUpPrevious : e ? i.timeUp : i.updatesUp
    },
    getButtonDragWidth: function(t) {
      var e = this._getButton(t);
      return e.isDown ? this.x - e.clickX : 0
    },
    getButtonDragHeight: function(t) {
      var e = this._getButton(t);
      return e.isDown ? this.y - e.clickY : 0
    },
    set_isVisible: function(t) {
      return this.isVisible = t, this.isVisible
    },
    set_cursorType: function(t) {
      return this.cursorType = t, this.cursorType
    },
    __class__: ct
  });
  var dt = function(t) {
    this.isDown = !1, this.updatesDown = 0, this.updatesUp = t.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = t.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = t.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = t.tools.BIG_NUMBER
  };
  n["awe6.core.drivers._AInputMouse._HelperButton"] = dt, dt.__name__ = ["awe6", "core", "drivers", "_AInputMouse", "_HelperButton"], dt.prototype = {
    __class__: dt
  };
  var gt = function() {};
  n["awe6.interfaces.ILogger"] = gt, gt.__name__ = ["awe6", "interfaces", "ILogger"], gt.prototype = {
    __class__: gt
  };
  var pt = function() {};
  n["awe6.interfaces.IKernel"] = pt, pt.__name__ = ["awe6", "interfaces", "IKernel"], pt.__interfaces__ = [gt, v], pt.prototype = {
    __class__: pt
  };
  var ft = function(t, e) {
    this.factory = t, this._context = e, this.tools = this._tools = new q(this), T.call(this, this)
  };
  n["awe6.core.drivers.AKernel"] = ft, ft.__name__ = ["awe6", "core", "drivers", "AKernel"], ft.__interfaces__ = [pt], ft.__super__ = T, ft.prototype = e(T.prototype, {
    _init: function() {
      T.prototype._init.call(this), this._view = new jt(this, this._context, 0, this), this._processes = new u, this._helperFramerate = new Et(this.factory.targetFramerate), this._isPreloaded = !1, this.isDebug = this.factory.isDebug, this.isLocal = this._driverGetIsLocal(), this._driverInit(), this.assets = this._assetManagerProcess = new xt(this._kernel), this.audio = this._audioManager = new Ot(this._kernel), this.inputs = this._inputManager = new Y(this._kernel), this.scenes = this._sceneManager = new K(this._kernel), this.messenger = this._messageManager = new G(this._kernel), this._view.addChild(this._sceneManager.view, 1), this._addProcess(this._assetManagerProcess), this._addProcess(this._inputManager), this._addProcess(this._sceneManager), this._addProcess(this._messageManager), this._addProcess(this._audioManager), this.set_isEyeCandy(!0), this.set_isFullScreen(!1), this.factory.onInitComplete(this), this.set_session(this.factory.createSession()), this.get_session().reset(), this._preloader = this.factory.createPreloader(), this._addProcess(this._preloader), this._view.addChild(this._preloader.get_view(), 2)
    },
    _driverGetIsLocal: function() {
      return !1
    },
    _driverInit: function() {},
    _driverDisposer: function() {},
    onPreloaderComplete: function(t) {
      this._isPreloaded = !0, this._removeProcess(this._preloader), this._preloader = null, this._logger = this.factory.createLogger();
      var e = this.factory.createAssetManager();
      e != this._assetManagerProcess && (this._removeProcess(this._assetManagerProcess), this.assets = this._assetManagerProcess = e, this._addProcess(this._assetManagerProcess, !1)), this.overlay = this._overlayProcess = this.factory.createOverlay(), this._addProcess(this._overlayProcess, !0), this._view.addChild(this._overlayProcess.get_view(), 3), this.isDebug && (this._addProcess(this._profiler = new Ht(this)), this._view.addChild(this._profiler.get_view(), this._tools.BIG_NUMBER)), this.scenes.setScene(this.factory.startingSceneType), this.overlay.flash()
    },
    _updater: function(t) {
      null == t && (t = 0), this._helperFramerate.update();
      var e;
      e = this.factory.isFixedUpdates ? 1e3 / this.factory.targetFramerate | 0 : this._helperFramerate.timeInterval, T.prototype._updater.call(this, e);
      for (var s = this._processes.h, i = null; null != s;) {
        var n;
        n = function(t) {
          var e;
          return i = s[0], s = s[1], e = i
        }(this), n.update(e)
      }
      this._view.update(e)
    },
    _disposer: function() {
      for (var t = this._processes.h, e = null; null != t;) {
        var s;
        s = function(s) {
          var i;
          return e = t[0], t = t[1], i = e
        }(this), this._removeProcess(s)
      }
      Ls.__instanceof(this.factory, m) && Ls.__cast(this.factory, m).dispose(), this.factory = null, this._view.dispose(), this._view = null, this._driverDisposer(), this.assets = this._assetManagerProcess = null, this.audio = this._audioManager = null, this.inputs = this._inputManager = null, this.scenes = this._sceneManager = null, this.messenger = this._messageManager = null, this.overlay = this._overlayProcess = null, this.tools = this._tools = null, this._logger = null, this._preloader = null, this.set_session(null), T.prototype._disposer.call(this)
    },
    getConfig: function(t) {
      return this.factory.config.exists(t) ? this.factory.config.get(t) : null
    },
    log: function(t) {
      null != this._logger ? this._logger.log(t) : this.isDebug && ys.trace("LOG: " + d.string(t), {
        fileName: "AKernel.hx",
        lineNumber: 248,
        className: "awe6.core.drivers.AKernel",
        methodName: "log"
      })
    },
    getFramerate: function(t) {
      return null == t && (t = !0), t ? this._helperFramerate.framerate : this.factory.targetFramerate
    },
    _addProcess: function(t, e) {
      null == e && (e = !0), null != t && (e ? this._processes.add(t) : this._processes.push(t))
    },
    _removeProcess: function(t) {
      return null == t ? !1 : (t.dispose(), this._processes.remove(t))
    },
    set_isEyeCandy: function(t) {
      return this.factory.isEyeCandyOptionEnabled ? (this.isEyeCandy = t, this._driverSetIsEyeCandy(t), this.isEyeCandy) : (this.isEyeCandy = !0, this.isEyeCandy)
    },
    _driverSetIsEyeCandy: function(t) {},
    set_isFullScreen: function(t) {
      return !this.factory.isFullScreenOptionEnabled || E.enumEq(this.factory.fullScreenType, qt.DISABLED) ? (this.isFullScreen = !1, this.isFullScreen) : (this.isFullScreen = t, this._driverSetIsFullScreen(t), this.isFullScreen)
    },
    _driverSetIsFullScreen: function(t) {},
    _pauser: function() {
      T.prototype._pauser.call(this), null != this.scenes.get_scene() && this.scenes.get_scene().pause()
    },
    _resumer: function() {
      T.prototype._resumer.call(this), null != this.scenes.get_scene() && this.scenes.get_scene().resume()
    },
    get_session: function() {
      return this.session
    },
    set_session: function(t) {
      return this.session = t, this.get_session()
    },
    __class__: ft
  });
  var Et = function(t) {
    this.framerate = t, this._timeAtLastUpdate = d["int"](1e3 * ws.stamp())
  };
  n["awe6.core.drivers._AKernel._HelperFramerate"] = Et, Et.__name__ = ["awe6", "core", "drivers", "_AKernel", "_HelperFramerate"], Et.prototype = {
    update: function() {
      this.timeInterval = d["int"](1e3 * ws.stamp()) - this._timeAtLastUpdate, this.framerate = 1e3 / this.timeInterval, this._timeAtLastUpdate = d["int"](1e3 * ws.stamp())
    },
    __class__: Et
  };
  var yt = function() {};
  n["awe6.interfaces.IOverlay"] = yt, yt.__name__ = ["awe6", "interfaces", "IOverlay"], yt.prototype = {
    __class__: yt
  };
  var vt = function() {};
  n["awe6.interfaces.IOverlayProcess"] = vt, vt.__name__ = ["awe6", "interfaces", "IOverlayProcess"], vt.__interfaces__ = [A, S, yt];
  var mt = function(t, e, s, i, n, r, a, _, o, h, u, l, c, d, g, p, f) {
    null == f && (f = .35), null == p && (p = 0), null == g && (g = 8), null == s && (s = 30), null == e && (e = 30), null == i && (i = new jt(t)), null == n && (n = new jt(t)), null == r && (r = new jt(t)), null == a && (a = new jt(t)), null == _ && (_ = new jt(t)), null == o && (o = new jt(t)), null == h && (h = new jt(t)), null == u && (u = new jt(t)), null == l && (l = new jt(t)), null == c && (c = new jt(t)), null == d && (d = new jt(t)), this._borderView = i, this._buttonBack = new N(t, n, r, e, s), this._buttonMute = new N(t, a, _, e, s), this._buttonUnmute = new N(t, o, h, e, s), this._buttonPause = new N(t, u, l, e, s), this._buttonUnpause = new N(t, c, d, e, s), this._pauseBlur = g, this._pauseColor = p, this._pauseAlpha = f, this._context = new createjs.Container, I.call(this, t, null, this._context)
  };
  n["awe6.core.drivers.AOverlay"] = mt, mt.__name__ = ["awe6", "core", "drivers", "AOverlay"], mt.__interfaces__ = [vt], mt.__super__ = I, mt.prototype = e(I.prototype, {
    _init: function() {
      I.prototype._init.call(this), this.get_view().addChild(this._borderView, 4), this._wasMute = this._kernel.audio.isMute, this._driverInit(), this._progressView = new jt(this._kernel, this._progressContext), this._progressView.set_isVisible(!1), this._pauseView = new jt(this._kernel, this._pauseContext), this._pauseView.set_isVisible(!1), this._flashView = new jt(this._kernel, this._flashContext), this._flashView.set_isVisible(!1), this._flashStartingAlpha = 1, this._flashAsTime = !0, this._flashDuration = this._flashStartingDuration = 100, this._buttonBack.onClickCallback = function(t, e) {
        return function() {
          t(e)
        }
      }(i(this, this.activateButton), re.BACK), this._buttonMute.onClickCallback = function(t, e) {
        return function() {
          t(e)
        }
      }(i(this, this.activateButton), re.MUTE), this._buttonPause.onClickCallback = function(t, e) {
        return function() {
          t(e)
        }
      }(i(this, this.activateButton), re.PAUSE), this._buttonUnmute.onClickCallback = function(t, e) {
        return function() {
          t(e)
        }
      }(i(this, this.activateButton), re.UNMUTE), this._buttonUnpause.onClickCallback = function(t, e) {
        return function() {
          t(e)
        }
      }(i(this, this.activateButton), re.UNPAUSE), this.get_view().addChild(this._flashView, 1), this.get_view().addChild(this._pauseView, 2), this.get_view().addChild(this._progressView, 3), this.addEntity(this._buttonBack, null, !0, 21), this.addEntity(this._buttonUnmute, null, !0, 22), this.addEntity(this._buttonMute, null, !0, 23), this.addEntity(this._buttonUnpause, null, !0, 24), this.addEntity(this._buttonPause, null, !0, 25);
      var t = this._buttonBack.height,
        e = this._buttonBack.width,
        s = this._kernel.factory.width - 4 * e,
        n = t;
      this.positionButton(re.BACK, s, n), this.positionButton(re.MUTE, s += e, n), this.positionButton(re.UNMUTE, s, n), this.positionButton(re.PAUSE, s += e, n), this.positionButton(re.UNPAUSE, s, n)
    },
    _driverInit: function() {
      this._progressContext = new createjs.Container, this._pauseContext = new createjs.Container, this._flashContext = new createjs.Container
    },
    _updater: function(t) {
      null == t && (t = 0), I.prototype._updater.call(this, t), this._flashDuration > 0 && (this._flashAsTime ? this._flashDuration -= t : this._flashDuration -= 1, this._flashAlpha = this._tools.limit(this._flashStartingAlpha * (this._flashDuration / this._flashStartingDuration), 0, 1)), this._flashView.set_isVisible(this._flashAlpha > 0), null != this._kernel.factory.keyBack && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyBack) && this.activateButton(this._kernel.isActive ? re.BACK : re.UNPAUSE), null != this._kernel.factory.keyPause && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyPause) && this.activateButton(this._kernel.isActive ? re.PAUSE : re.UNPAUSE), null != this._kernel.factory.keyMute && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyMute) && this.activateButton(this._kernel.audio.isMute ? re.UNMUTE : re.MUTE), null == this.get_pauseEntity() || this._kernel.isActive || (this.get_pauseEntity().update(t),
        this._pauseView.update(t))
    },
    _disposer: function() {
      null != this.get_pauseEntity() && this.get_pauseEntity().dispose(), this.get_view().dispose(), I.prototype._disposer.call(this)
    },
    _getButton: function(t) {
      switch (t[1]) {
        case 0:
          return this._buttonBack;
        case 1:
          return this._buttonMute;
        case 2:
          return this._buttonUnmute;
        case 3:
          return this._buttonPause;
        case 4:
          return this._buttonUnpause;
        case 5:
          t[2];
          return null
      }
    },
    showButton: function(t, e) {
      null == e && (e = !0);
      var s = this._getButton(t);
      null != s && (e ? this.addEntity(s, null, !0) : this.removeEntity(s, null, !0))
    },
    positionButton: function(t, e, s, i, n) {
      var r = this._getButton(t);
      null != r && (r.set_x(e), r.set_y(s), null != i && r.set_width(i), null != n && r.set_height(n))
    },
    hideButtons: function() {
      this.showButton(re.BACK, !1), this.showButton(re.MUTE, !1), this.showButton(re.UNMUTE, !1), this.showButton(re.PAUSE, !1), this.showButton(re.UNPAUSE, !1)
    },
    flash: function(t, e, s, i) {
      null == i && (i = 16777215), null == s && (s = 1), null == e && (e = !0), t = null != t ? t : e ? 500 : .5 * this._kernel.factory.targetFramerate, this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e, this._flashAlpha = s > 1 ? this._flashStartingAlpha = 1 : 0 > s ? this._flashStartingAlpha = 0 : this._flashStartingAlpha = s
    },
    activateButton: function(t) {
      switch (t[1]) {
        case 0:
          this._buttonBack.get_view().get_isInViewStack() && (this._kernel.isActive || this.activateButton(re.UNPAUSE), this._drawPause(!1), this._kernel.resume(), this._kernel.scenes.back());
          break;
        case 1:
          this._buttonMute.get_view().get_isInViewStack() && (this.showButton(re.MUTE, !1), this.showButton(re.UNMUTE, !0), this._kernel.audio.set_isMute(!0));
          break;
        case 2:
          this._buttonUnmute.get_view().get_isInViewStack() && !this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(re.MUTE, !0), this.showButton(re.UNMUTE, !1), this._kernel.audio.set_isMute(!1));
          break;
        case 3:
          this._buttonPause.get_view().get_isInViewStack() && (this._kernel.pause(), this._drawPause(!0), this._wasMute = this._kernel.audio.isMute, this.showButton(re.PAUSE, !1), this.showButton(re.UNPAUSE, !0), this.activateButton(re.MUTE));
          break;
        case 4:
          this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(re.PAUSE, !0), this.showButton(re.UNPAUSE, !1), this.activateButton(this._wasMute ? re.MUTE : re.UNMUTE), this._kernel.resume(), this._drawPause(!1));
          break;
        case 5:
          t[2]
      }
    },
    _drawPause: function(t) {
      null == t && (t = !0), this._pauseView.set_isVisible(t)
    },
    get_pauseEntity: function() {
      return this.pauseEntity
    },
    set_pauseEntity: function(t) {
      return null != this.get_pauseEntity() && this.get_pauseEntity().get_view().remove(), this.pauseEntity = t, this._pauseView.addChild(this.get_pauseEntity().get_view()), this.get_pauseEntity()
    },
    __class__: mt
  });
  var wt = function() {};
  n["awe6.interfaces.IProgress"] = wt, wt.__name__ = ["awe6", "interfaces", "IProgress"];
  var St = function() {};
  n["awe6.interfaces.IPreloader"] = St, St.__name__ = ["awe6", "interfaces", "IPreloader"], St.__interfaces__ = [wt, A, S];
  var Tt = function(t, e, s) {
    null == s && (s = !1), this._assets = e, this._isDecached = s, T.call(this, t)
  };
  n["awe6.core.drivers.APreloader"] = Tt, Tt.__name__ = ["awe6", "core", "drivers", "APreloader"], Tt.__interfaces__ = [St], Tt.__super__ = T, Tt.prototype = e(T.prototype, {
    _init: function() {
      T.prototype._init.call(this), this.progress = 0, null == this.get_view() && (this.view = new jt(this._kernel)), this._encrypter = this._tools, this._currentProgress = 0, this._currentAsset = 0, this._isComplete = !1, this._assets.length > 0 && this._next()
    },
    _next: function() {
      if (this._currentAsset++, this._currentAsset > this._assets.length) {
        if (!this._isComplete) {
          try {
            ws.delay(function(t, e) {
              return function() {
                t(e)
              }
            }((ii = this._kernel, i(ii, ii.onPreloaderComplete)), this), 100)
          } catch (t) {
            t instanceof Ps && (t = t.val)
          }
          this._isComplete = !0
        }
      } else this._driverLoad(this._assets[this._currentAsset - 1]), this._currentProgress = 0
    },
    _driverLoad: function(t) {},
    _updater: function(t) {
      null == t && (t = 0), T.prototype._updater.call(this, t), 0 == this._assets.length && this._kernel.onPreloaderComplete(this), this.get_view().set_isVisible(this._age > 100)
    },
    _disposer: function() {
      this.get_view().dispose(), this._driverDisposer(), T.prototype._disposer.call(this)
    },
    _driverDisposer: function() {},
    get_view: function() {
      return this.view
    },
    __class__: Tt
  });
  var bt = function(t) {
    this._context = new createjs.Container, I.call(this, t, null, this._context)
  };
  n["awe6.core.drivers.AProfiler"] = bt, bt.__name__ = ["awe6", "core", "drivers", "AProfiler"], bt.__super__ = I, bt.prototype = e(I.prototype, {
    _init: function() {
      I.prototype._init.call(this), this._marginHeight = 25, this._marginColor = 128, this._backgroundColor = -2147483520, this._fpsColor = 16777215, this._memoryColor = 16744448, this._fpsLabel = "FPS", this._memoryLabel = "MBs", this._width = 60, this._height = 50, this._agePrev = 0
    },
    _updater: function(t) {
      null == t && (t = 0), I.prototype._updater.call(this, t), this._age < this._agePrev + 250 || (this._agePrev = this._age, this._driverUpdate())
    },
    _driverUpdate: function() {},
    __class__: bt
  });
  var Ct = function() {};
  n["awe6.interfaces.ISceneTransition"] = Ct, Ct.__name__ = ["awe6", "interfaces", "ISceneTransition"], Ct.__interfaces__ = [A, wt, S];
  var At = function(t, e) {
    null == e && (e = 500), this._duration = e, this._context = new createjs.Container, I.call(this, t, null, this._context)
  };
  n["awe6.core.drivers.ASceneTransition"] = At, At.__name__ = ["awe6", "core", "drivers", "ASceneTransition"], At.__interfaces__ = [Ct], At.__super__ = I, At.prototype = e(I.prototype, {
    _init: function() {
      I.prototype._init.call(this)
    },
    _updater: function(t) {
      null == t && (t = 0), I.prototype._updater.call(this, t), this._age > this._duration && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
    },
    get_progress: function() {
      return this._tools.limit(this._age / this._duration, 0, 1)
    },
    __class__: At
  });
  var Rt = function() {};
  n["awe6.interfaces.ISession"] = Rt, Rt.__name__ = ["awe6", "interfaces", "ISession"], Rt.prototype = {
    __class__: Rt
  };
  var It = function(t, e) {
    null == e && (e = ""), this._kernel = t, "" == e && (e = "DEBUG_AWE6"), this.id = e, this._tools = this._kernel.tools, this._version = 1, this._init()
  };
  n["awe6.core.drivers.ASession"] = It, It.__name__ = ["awe6", "core", "drivers", "ASession"], It.__interfaces__ = [Rt], It.prototype = {
    _init: function() {
      this._driverLoad();
      var t = c.field(this._savedData, "_____VERSION");
      t != this._version && this._driverReset();
      var e = null != c.field(this._savedData, this.id);
      this._data = {}, this._resetter(), this._setter(), e && (this._data = c.field(this._savedData, this.id), this._getter(), this.loadCount++)
    },
    _driverLoad: function() {
      this._savedData = {}
    },
    _driverSave: function() {},
    _driverReset: function() {
      this._savedData = {}
    },
    _getter: function() {
      this.loadCount = this._data.loadCount, this.saveCount = this._data.saveCount
    },
    _setter: function() {
      this._data.loadCount = this.loadCount, this._data.saveCount = this.saveCount
    },
    _resetter: function() {
      this.loadCount = 0, this.saveCount = 0
    },
    reset: function(t) {
      null == t && (t = !1), this._data = {}, this._resetter(), this._setter(), t && (this.saveCount++, this._setter(), this._savedData._____VERSION = this._version, this._savedData[this.id] = this._data, this._driverSave())
    },
    save: function() {
      this.saveCount++, this._setter(), this._savedData._____VERSION = this._version, this._savedData[this.id] = this._data, this._driverSave()
    },
    __class__: It
  };
  var kt = function() {};
  n["awe6.interfaces.IPriority"] = kt, kt.__name__ = ["awe6", "interfaces", "IPriority"], kt.prototype = {
    __class__: kt
  };
  var Nt = function() {};
  n["awe6.interfaces.IView"] = Nt, Nt.__name__ = ["awe6", "interfaces", "IView"], Nt.__interfaces__ = [w, m, k, kt], Nt.prototype = {
    __class__: Nt
  };
  var Dt = function(t, e, s, i) {
    null == s && (s = 0), this.context = e, this.set_priority(s), this.owner = i, T.call(this, t)
  };
  n["awe6.core.drivers.AView"] = Dt, Dt.__name__ = ["awe6", "core", "drivers", "AView"], Dt.__interfaces__ = [Nt], Dt.__super__ = T, Dt.prototype = e(T.prototype, {
    _init: function() {
      T.prototype._init.call(this), this.globalX = 0, this.globalY = 0, this.set_x(0), this.set_y(0), this.set_isVisible(!0), this._isDirty = !0, this._children = []
    },
    addChild: function(t, e) {
      if (null == e && (e = 0), this.isDisposed || null == t) return null;
      if (t.get_parent() != this && (t.remove(), Ls.__instanceof(t, Dt))) {
        var s = t;
        this._children.push(s), s._setParent(this)
      }
      return 0 != e && t.set_priority(e), this._isDirty = !0, t
    },
    removeChild: function(t) {
      if (!this.isDisposed && null != t) {
        if (Ls.__instanceof(t, Dt)) {
          var e = t;
          if (e.get_parent() != this) return;
          o.remove(this._children, e), e._setParent(null)
        }
        this._isDirty = !0
      }
    },
    remove: function() {
      null != this.get_parent() && this.get_parent().removeChild(this)
    },
    clear: function() {
      for (var t = 0, e = this._children; t < e.length;) {
        var s = e[t];
        ++t, this.removeChild(s)
      }
    },
    _updater: function(t) {
      null == t && (t = 0), T.prototype._updater.call(this, t);
      for (var e = 0, s = this._children; e < s.length;) {
        var i = s[e];
        ++e, !i.isActive || i.isDisposed || (i._age += t, i._updates++, i._updater(t))
      }
      this._isDirty && this._draw(), null == this.get_parent() ? this.globalX = this.x : this.globalX = this.x + this.get_parent().globalX, null == this.get_parent() ? this.globalY = this.y : this.globalY = this.y + this.get_parent().globalY
    },
    _disposer: function() {
      this.remove(), this._driverDisposer(), this.clear(), T.prototype._disposer.call(this)
    },
    _driverDisposer: function() {},
    _draw: function() {
      this.isDisposed || (this._children.sort((ii = this._tools, i(ii, ii.sortByPriority))), this._driverDraw(), this._isDirty = !1)
    },
    _driverDraw: function() {},
    _setParent: function(t) {
      this.parent = t
    },
    get_priority: function() {
      return this.priority
    },
    set_priority: function(t) {
      if (t == this.get_priority()) return this.get_priority();
      if (this.priority = t, d.is(this.get_parent(), Dt)) {
        var e = this.get_parent();
        null != e && (e._isDirty = !0)
      }
      return this.get_priority()
    },
    set_isVisible: function(t) {
      if (t == this.isVisible) return this.isVisible;
      if (this.isVisible = t, d.is(this.get_parent(), Dt)) {
        var e = this.get_parent();
        null != e && e._draw()
      }
      return this.isVisible
    },
    get_parent: function() {
      return this.parent
    },
    get_isInViewStack: function() {
      return this.isVisible ? this.owner == this._kernel ? !0 : null == this.get_parent() ? !1 : this.get_parent().get_isInViewStack() : !1
    },
    set_x: function(t) {
      return this.x = t, null == this.get_parent() ? this.globalX = this.x : this.globalX = this.x + this.get_parent().globalX, this.x
    },
    set_y: function(t) {
      return this.y = t, null == this.get_parent() ? this.globalY = this.y : this.globalY = this.y + this.get_parent().globalY, this.y
    },
    __class__: Dt
  });
  var xt = function(t) {
    et.call(this, t)
  };
  n["awe6.core.drivers.createjs.AssetManager"] = xt, xt.__name__ = ["awe6", "core", "drivers", "createjs", "AssetManager"], xt.__super__ = et, xt.prototype = e(et.prototype, {
    _driverGetAsset: function(t, e, s) {
      var i = null;
      return null != xt.loadQueue && (i = xt.loadQueue.getResult(t)), i
    },
    __class__: xt
  });
  var Ot = function(t) {
    it.call(this, t)
  };
  n["awe6.core.drivers.createjs.AudioManager"] = Ot, Ot.__name__ = ["awe6", "core", "drivers", "createjs", "AudioManager"], Ot.__super__ = it, Ot.prototype = e(it.prototype, {
    _init: function() {
      it.prototype._init.call(this), this._visibilityWasMute = this.isMute, window.document.addEventListener("visibilitychange", i(this, this._onVisibilityChange))
    },
    _disposer: function() {
      window.document.removeEventListener("visibilitychange", i(this, this._onVisibilityChange)), it.prototype._disposer.call(this)
    },
    _driverSoundFactory: function(t, e, s, i, n, r, a) {
      return null == r && (r = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), new Ut(this._kernel, t, this._packageId, e, s, i, n, r, a)
    },
    _driverSetIsMute: function(t) {
      try {
        createjs.Sound.muted = t
      } catch (e) {
        e instanceof Ps && (e = e.val)
      }
      try {
        createjs.Sound.setMute(t)
      } catch (s) {
        s instanceof Ps && (s = s.val)
      }
    },
    _onVisibilityChange: function(t) {
      var e = this._getVisibilityPropery();
      e ? (this._visibilityWasMute = this.isMute, this.set_isMute(!0)) : this.set_isMute(this._visibilityWasMute)
    },
    _getVisibilityPropery: function() {
      for (var t = ["hidden", "mozHidden", "msHidden", "oHidden", "webkitHidden"], e = 0; e < t.length;) {
        var s = t[e];
        if (++e, c.hasField(window.document, s)) return c.field(window.document, s)
      }
      return window.document.hidden
    },
    __class__: Ot
  });
  var Ut = function(t, e, s, i, n, r, a, _, o) {
    null == _ && (_ = 0), null == a && (a = 1), null == r && (r = 0), null == n && (n = 1), nt.call(this, t, e, s, i, 1 == n ? 0 : n, r, a, _, o)
  };
  n["awe6.core.drivers.createjs._HelperSound"] = Ut, Ut.__name__ = ["awe6", "core", "drivers", "createjs", "_HelperSound"], Ut.__super__ = nt, Ut.prototype = e(nt.prototype, {
    _driverInit: function() {
      try {
        this._sound = createjs.Sound.play("assets.audio." + this.id, null, 0, this._startTime, this._loops, this._volume, this._pan)
      } catch (t) {
        t instanceof Ps && (t = t.val)
      }
      return null == this._sound ? this.dispose() : (this._sound.addEventListener("complete", i(this, this._onSoundComplete)), void this._driverTransform())
    },
    _driverTransform: function(t) {
      null == t && (t = !1), null != this._sound && (t && (this._volume *= this._sound.volume, this._pan *= this._sound.pan), this._sound.volume = this._volume, this._sound.pan = this._pan)
    },
    _driverStop: function() {
      if (null != this._sound) try {
        this._sound.stop()
      } catch (t) {
        t instanceof Ps && (t = t.val)
      }
    },
    _onSoundComplete: function(t) {
      null != this._onCompleteCallback && this._onCompleteCallback.apply(this, []), this.dispose()
    },
    __class__: Ut
  });
  var Pt = function(t, e, s) {
    at.call(this, t, e, s)
  };
  n["awe6.core.drivers.createjs.Factory"] = Pt, Pt.__name__ = ["awe6", "core", "drivers", "createjs", "Factory"], Pt.__super__ = at, Pt.prototype = e(at.prototype, {
    _driverInit: function() {
      this.isDebug || (ys.trace = function(t, e) {
        Ls.__trace(t, null)
      });
      var t = new createjs.Container;
      if (this._context.addChild(t), this._context = t, this._countConfigsLoaded = 0, this._countConfigsToLoad = 0, "" != this._config) {
        var e;
        e = null != this._config ? this._config : "assets/__config.xml";
        var s = this._context.getStage().canvas.getAttribute("config");
        null != s && "" != s && (e = s), this._loadConfig(e)
      } else this._launchKernel()
    },
    _launchKernel: function() {
      this._displayCredits();
      var t = !0;
      this.config.exists("settings.nativeExperience") && (t = "true" == this.config.get("settings.nativeExperience"));
      var e = this._context.getStage().canvas.getAttribute("nativeExperience");
      null != e && "" != e && (t = "true" == e), this.isNativeExperience = t, at.prototype._launchKernel.call(this);
      var s = this._concreteKernel.system.isDesktop,
        i = "default";
      this.config.exists("settings.fullScreen") && (i = this.config.get("settings.fullScreen"));
      var n = this._context.getStage().canvas.getAttribute("fullScreen");
      null != n && "" != n && (i = n), this._kernel.set_isFullScreen(s && ("desktop" == i || "all" == i) || !s && ("mobile" == i || "all" == i || "default" == i)), this._kernel.isFullScreen && this.isNativeExperience && !s && (this._concreteKernel.system.requestFullScreen(), this._concreteKernel.system.requestLockScreen())
    },
    _displayCredits: function() {
      ys.trace(this.config.exists("settings.asciiArt") ? this.config.get("settings.asciiArt") : "", {
        fileName: "Factory.hx",
        lineNumber: 126,
        className: "awe6.core.drivers.createjs.Factory",
        methodName: "_displayCredits"
      }), ys.trace(this.id + " v" + this.version + " by " + this.author, {
        fileName: "Factory.hx",
        lineNumber: 127,
        className: "awe6.core.drivers.createjs.Factory",
        methodName: "_displayCredits"
      }), ys.trace("Powered by awe6 (http://awe6.org)", {
        fileName: "Factory.hx",
        lineNumber: 128,
        className: "awe6.core.drivers.createjs.Factory",
        methodName: "_displayCredits"
      }), this.isDecached && ys.trace("Note: decaching is currently enabled", {
        fileName: "Factory.hx",
        lineNumber: 131,
        className: "awe6.core.drivers.createjs.Factory",
        methodName: "_displayCredits"
      }), ys.trace("", {
        fileName: "Factory.hx",
        lineNumber: 133,
        className: "awe6.core.drivers.createjs.Factory",
        methodName: "_displayCredits"
      })
    },
    _loadConfig: function(t) {
      if ("<?xml" == o.substr(t, 0, 5)) this._parseXml(t);
      else {
        this.isDecached && (t += "?dc=" + d.random(99999));
        try {
          var e = new fs(t);
          e.onError = i(this, this._onIOError), e.onData = i(this, this._onComplete), e.request()
        } catch (s) {
          return s instanceof Ps && (s = s.val), void this._onIOError(d.string(s))
        }
        this._countConfigsToLoad++
      }
    },
    _parseXml: function(t) {
      if (this._traverseElements(y.parse(t).firstElement().elements(), ""), this.config.exists("settings.joinXml") && this._countConfigsLoaded < 100) {
        var e = this.config.get("settings.joinXml");
        this.config.remove("settings.joinXml");
        for (var s = e.split(","), i = 0; i < s.length;) {
          var n = s[i];
          ++i, this._loadConfig(n)
        }
      }
      this._countConfigsLoaded == this._countConfigsToLoad && this._launchKernel()
    },
    _onIOError: function(t) {
      ys.trace("IO Errors Occurred During Config Loading:" + t, {
        fileName: "Factory.hx",
        lineNumber: 187,
        className: "awe6.core.drivers.createjs.Factory",
        methodName: "_onIOError"
      }), ys.trace("Double check your Config path.  Cross domain (or local) file loading of Config is a security risk and is, therefore, disabled on this browser.", {
        fileName: "Factory.hx",
        lineNumber: 188,
        className: "awe6.core.drivers.createjs.Factory",
        methodName: "_onIOError"
      }), null != this._config && "<?xml" == o.substr(this._config, 0, 5) ? (ys.trace("Embedded Config detected, using that to continue ...", {
        fileName: "Factory.hx",
        lineNumber: 191,
        className: "awe6.core.drivers.createjs.Factory",
        methodName: "_onIOError"
      }), this._countConfigsLoaded = this._countConfigsToLoad, this._parseXml(this._config)) : (ys.trace("Use a web server (or local server) to run over http and serve all files from the same domain.  Or embed the Config directlty in the code (e.g. as a Resource).", {
        fileName: "Factory.hx",
        lineNumber: 197,
        className: "awe6.core.drivers.createjs.Factory",
        methodName: "_onIOError"
      }), ys.trace("Unable to continue without Config.", {
        fileName: "Factory.hx",
        lineNumber: 198,
        className: "awe6.core.drivers.createjs.Factory",
        methodName: "_onIOError"
      }))
    },
    _onComplete: function(t) {
      if (this._countConfigsLoaded++, "" == t) return this._onIOError(t);
      var e = t;
      "<?xml" != o.substr(e, 0, 5) && (e = this.createEncrypter().decrypt(Ts.ofString(e)).toString()), this._parseXml(e)
    },
    _getAssetUrls: function() {
      for (var t = ["bin/assets/audio/Boost1.m4a", "bin/assets/audio/Boost1.ogg", "bin/assets/audio/Boost2.m4a", "bin/assets/audio/Boost2.ogg", "bin/assets/audio/ButtonOver.m4a", "bin/assets/audio/ButtonOver.ogg", "bin/assets/audio/Coin.m4a", "bin/assets/audio/Coin.ogg", "bin/assets/audio/Collision1.m4a", "bin/assets/audio/Collision1.ogg", "bin/assets/audio/Collision2.m4a", "bin/assets/audio/Collision2.ogg", "bin/assets/audio/Driveby1.m4a", "bin/assets/audio/Driveby1.ogg", "bin/assets/audio/Driveby2.m4a", "bin/assets/audio/Driveby2.ogg", "bin/assets/audio/Driveby3.m4a", "bin/assets/audio/Driveby3.ogg", "bin/assets/audio/Driveby4.m4a", "bin/assets/audio/Driveby4.ogg", "bin/assets/audio/Engines.m4a", "bin/assets/audio/Engines.ogg", "bin/assets/audio/MusicGame.m4a", "bin/assets/audio/MusicGame.ogg", "bin/assets/audio/MusicLose.m4a", "bin/assets/audio/MusicLose.ogg", "bin/assets/audio/MusicMenu.m4a", "bin/assets/audio/MusicMenu.ogg", "bin/assets/audio/MusicWin.m4a", "bin/assets/audio/MusicWin.ogg", "bin/assets/audio/Silence.m4a", "bin/assets/audio/Silence.ogg", "bin/assets/audio/Transition.m4a", "bin/assets/audio/Transition.ogg", "bin/assets/audio/Upgrade.m4a", "bin/assets/audio/Upgrade.ogg", "bin/assets/audio/VocalProgress1.m4a", "bin/assets/audio/VocalProgress1.ogg", "bin/assets/audio/VocalProgress2.m4a", "bin/assets/audio/VocalProgress2.ogg", "bin/assets/audio/VocalProgress3.m4a", "bin/assets/audio/VocalProgress3.ogg", "bin/assets/audio/VocalRankGood.m4a", "bin/assets/audio/VocalRankGood.ogg", "bin/assets/audio/VocalRankOk.m4a", "bin/assets/audio/VocalRankOk.ogg", "bin/assets/audio/VocalRankPoor.m4a", "bin/assets/audio/VocalRankPoor.ogg", "bin/assets/audio/VocalStart.m4a", "bin/assets/audio/VocalStart.ogg", "bin/assets/Blank.png", "bin/assets/fonts/__Roboto-webfont.eot", "bin/assets/fonts/__Roboto-webfont.svg", "bin/assets/fonts/__Roboto-webfont.ttf", "bin/assets/fonts/__Roboto-webfont.woff", "bin/assets/gui/Buttons.png", "bin/assets/gui/Hud.png", "bin/assets/gui/HudProgress.png", "bin/assets/gui/InstructionsA.png", "bin/assets/gui/InstructionsB.png", "bin/assets/gui/LocationPreview.png", "bin/assets/gui/LocationPreviewMask.png", "bin/assets/gui/Logo.png", "bin/assets/gui/LogoShine.png", "bin/assets/gui/SceneBg.png", "bin/assets/gui/SceneBgA.png", "bin/assets/gui/SceneBgB.png", "bin/assets/gui/SceneBgC.jpg", "bin/assets/gui/SceneFgHorizontal.png", "bin/assets/gui/SceneFgVertical.png", "bin/assets/gui/Sponsor.png", "bin/assets/gui/Title.png", "bin/assets/gui/Vignette.png", "bin/assets/location/Boost.png", "bin/assets/location/Cars.png", "bin/assets/location/FinishLine.png", "bin/assets/location/HorizonA.jpg", "bin/assets/location/HorizonB.jpg", "bin/assets/location/HorizonC.jpg", "bin/assets/location/HorizonD.jpg", "bin/assets/location/LensDirt.jpg", "bin/assets/location/LensFlares.jpg", "bin/assets/location/RoadA.jpg", "bin/assets/location/RoadB.jpg", "bin/assets/location/RoadC.jpg", "bin/assets/location/RoadD.jpg", "bin/assets/location/Scenery.png", "bin/assets/__Config.xml", "bin/assets/__Icon128.png", "bin/assets/__Icon196.png", "bin/assets/__Icon256.png", "bin/assets/__PreloaderBg.png", "bin/assets/__PreloaderFg.png"], e = [], s = 0, i = t.length; i > s;) {
        var n = s++;
        t[n] = o.substr(t[n], 4, null), ("__" == o.substr(t[n], 0, 2) || t[n].indexOf("/__") > -1) && e.push(t[n])
      }
      for (var r = 0; r < e.length;) {
        var a = e[r];
        ++r, o.remove(t, a)
      }
      return t
    },
    _driverDisposer: function() {
      null != this._context.parent && this._context.parent.removeChild(this._context)
    },
    preventDefaultForKeys: function(t) {
      this._kernel.inputs.keyboard.preventDefaultForKeys(t)
    },
    allowDefaultForKeys: function(t) {
      this._kernel.inputs.keyboard.allowDefaultForKeys(t)
    },
    __class__: Pt
  });
  var Lt = function(t) {
    ot.call(this, t)
  };
  n["awe6.core.drivers.createjs.InputKeyboard"] = Lt, Lt.__name__ = ["awe6", "core", "drivers", "createjs", "InputKeyboard"], Lt.__super__ = ot, Lt.prototype = e(ot.prototype, {
    _driverInit: function() {
      this._document = window.document, this._preventDefaultKeyCodes = [], this._document.addEventListener("keydown", i(this, this._onKeyDown)), this._document.addEventListener("keyup", i(this, this._onKeyUp))
    },
    _disposer: function() {
      this._document.removeEventListener("keydown", i(this, this._onKeyDown)), this._document.removeEventListener("keyup", i(this, this._onKeyUp)), ot.prototype._disposer.call(this)
    },
    _onKeyDown: function(t) {
      this.isActive && (-1 != o.indexOf(this._preventDefaultKeyCodes, t.keyCode, 0) && t.preventDefault(), this._addEvent(t.keyCode, !0))
    },
    _onKeyUp: function(t) {
      this.isActive && (-1 != o.indexOf(this._preventDefaultKeyCodes, t.keyCode, 0) && t.preventDefault(), this._addEvent(t.keyCode, !1))
    },
    preventDefaultForKeys: function(t) {
      if (null != t)
        for (var e = 0; e < t.length;) {
          var s = t[e];
          ++e;
          var i = this.getKeyCode(s);
          h.has(this._preventDefaultKeyCodes, i) || this._preventDefaultKeyCodes.push(i)
        }
    },
    allowDefaultForKeys: function(t) {
      if (null != t)
        for (var e = 0; e < this._preventDefaultKeyCodes.length;) {
          var s = this.getKey(this._preventDefaultKeyCodes[e]);
          h.has(t, s) ? this._preventDefaultKeyCodes.splice(e, 1) : e++
        }
    },
    __class__: Lt
  });
  var Mt = function(t) {
    ct.call(this, t)
  };
  n["awe6.core.drivers.createjs.InputMouse"] = Mt, Mt.__name__ = ["awe6", "core", "drivers", "createjs", "InputMouse"], Mt.__super__ = ct, Mt.prototype = e(ct.prototype, {
    _driverInit: function() {
      this._stage = this._kernel._stage, this._isTouch = createjs.Touch.isSupported() && !this._kernel.system.isDesktop, this._isTouch ? (createjs.Touch.enable(this._stage, !0), this._touchX = this._touchY = 0, this._stage.canvas.addEventListener("touchstart", i(this, this._onTouchStart)), this._stage.canvas.addEventListener("touchmove", i(this, this._onTouch)), this._stage.canvas.addEventListener("touchend", i(this, this._onTouchEnd))) : (this._stage.addEventListener("stagemousedown", i(this, this._onMouseDown)), this._stage.addEventListener("stagemouseup", i(this, this._onMouseUp))), window.focus()
    },
    _disposer: function() {
      this._isTouch ? (createjs.Touch.disable(this._stage), this._stage.canvas.removeEventListener("touchstart", i(this, this._onTouchStart)), this._stage.canvas.removeEventListener("touchmove", i(this, this._onTouch)), this._stage.canvas.removeEventListener("touchend", i(this, this._onTouchEnd))) : (this._stage.removeEventListener("stagemousedown", i(this, this._onMouseDown)), this._stage.removeEventListener("stagemouseup", i(this, this._onMouseUp))), ct.prototype._disposer.call(this)
    },
    _isWithinBounds: function() {
      return this._stage.mouseInBounds
    },
    _getPosition: function() {
      this._isTouch ? (this.x = this._touchX, this.y = this._touchY) : (this.x = d["int"](this._tools.limit(this._stage.mouseX / this._stage.scaleX, 0, this._kernel.factory.width)), this.y = d["int"](this._tools.limit(this._stage.mouseY / this._stage.scaleY, 0, this._kernel.factory.height))), this.x == this._kernel.factory.width ? this.x = this._xPrev : this.x = this.x, this.y == this._kernel.factory.height ? this.y = this._yPrev : this.y = this.y
    },
    _onTouchStart: function(t) {
      this._onMouseDown(t), this._onTouch(t), this.x = this._touchX, this.y = this._touchY
    },
    _onTouchEnd: function(t) {
      this._onMouseUp(t), this._onTouch(t), Mt._isSoundTriggered || (this._kernel.audio.start("Silence"), Mt._isSoundTriggered = !0, this._kernel.isFullScreen && this._kernel.factory.isNativeExperience && (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen()))
    },
    _onTouch: function(t) {
      try {
        this._touchX = d["int"](this._tools.limit((t.targetTouches[0].pageX - d["int"](this._stage.canvas.offsetLeft)) / this._kernel._scaleX, 0, this._kernel.factory.width)), this._touchY = d["int"](this._tools.limit((t.targetTouches[0].pageY - d["int"](this._stage.canvas.offsetTop)) / this._kernel._scaleY, 0, this._kernel.factory.height))
      } catch (e) {
        e instanceof Ps && (e = e.val)
      }
      this._stage.mouseInBounds && t.preventDefault()
    },
    _onMouseDown: function(t) {
      window.focus(), this.isActive && (this._isTouch || 2 != t.nativeEvent.button) && this._buffer.push(!0)
    },
    _onMouseUp: function(t) {
      this.isActive && (this._isTouch || 2 != t.nativeEvent.button) && this._buffer.push(!1)
    },
    set_isVisible: function(t) {
      return t ? this._stage.cursor = "none" : this._stage.cursor = "auto", ct.prototype.set_isVisible.call(this, t)
    },
    set_cursorType: function(t) {
      switch (t[1]) {
        case 0:
          this._stage.canvas.style.cursor = "crosshair";
          break;
        case 1:
          this._stage.canvas.style.cursor = "auto";
          break;
        case 2:
          this._stage.canvas.style.cursor = "pointer";
          break;
        case 3:
          this._stage.canvas.style.cursor = "pointer";
          break;
        case 4:
          this._stage.canvas.style.cursor = "text";
          break;
        case 5:
          var e = t[2];
          this._stage.canvas.style.cursor = e
      }
      return ct.prototype.set_cursorType.call(this, t)
    },
    __class__: Mt
  });
  var Bt = function(t, e) {
    ft.call(this, t, e)
  };
  n["awe6.core.drivers.createjs.Kernel"] = Bt, Bt.__name__ = ["awe6", "core", "drivers", "createjs", "Kernel"], Bt.__super__ = ft, Bt.prototype = e(ft.prototype, {
    _driverGetIsLocal: function() {
      var t, e = window.location.protocol;
      switch (e) {
        case "http:":
        case "https:":
          t = !1;
          break;
        default:
          t = !0
      }
      return t
    },
    _driverInit: function() {
      this.system = new zt(this), this._scaleX = this._scaleY = 1, this._stage = this._stageDynamic = this._context.getStage(), this._stage.canvas.style.setProperty("-ms-touch-action", "none", ""), this._stage.canvas.style.setProperty("image-rendering", "-o-crisp-edges", ""), this._stage.canvas.style.setProperty("image-rendering", "optimize-contrast", ""), this._stage.canvas.style.setProperty("-ms-interpolation-mode", "nearest-neighbor", ""), this._stage.canvas.style.setProperty("-webkit-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("-moz-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("user-select", "none", ""), this._stage.canvas.style.setProperty("-webkit-touch-callout", "none", ""), this._stage.canvas.style.setProperty("-webkit-user-select", "none", ""), this._stage.canvas.style.setProperty("-moz-user-select", "none", ""), this._stage.canvas.style.setProperty("-ms-user-select", "none", ""), this._stage.tickOnUpdate = !1, this._stage.mouseEnabled = !1, this._stage.canvas.width = this.factory.width, this._stage.canvas.height = this.factory.height;
      var t = new createjs.Shape;
      t.graphics.beginFill("#" + function(t) {
        var e, s = p.hex(t.factory.bgColor, 8);
        return e = o.substr(s, 2, 6)
      }(this)), t.graphics.drawRect(0, 0, this.factory.width, this.factory.height), t.graphics.endFill(), this._stage.addChildAt(t, 0), createjs.Ticker.setFPS(this.factory.targetFramerate), createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED, createjs.Ticker.addEventListener("tick", i(this, this._onEnterFrame)), this._stage.canvas.addEventListener("contextmenu", i(this, this._onContextMenu), !1), window.addEventListener("unload", i(this, this._onUnload))
    },
    _onUnload: function(t) {
      window.removeEventListener("unload", i(this, this._onUnload)), this.get_session().save()
    },
    _onContextMenu: function(t) {
      t.preventDefault(), t.stopImmediatePropagation(), null != this.overlay && ws.delay(function(t, e) {
        return function() {
          t(e)
        }
      }((ii = this.overlay, i(ii, ii.activateButton)), re.PAUSE), 100)
    },
    _driverDisposer: function() {
      this._stage.canvas.removeEventListener("contextmenu", i(this, this._onContextMenu))
    },
    _onEnterFrame: function(t) {
      null != t.paused && 1 == t.paused ? this._stage.tickOnUpdate = !1 : (this._updates++, this._updater(0), this._stage.tickOnUpdate = this.isActive, this._stageDynamic.update(t));
      var e = window.innerWidth + ":" + window.innerHeight;
      this._prevWindowSize != e && this._driverSetIsFullScreen(this.isFullScreen)
    },
    _driverSetIsEyeCandy: function(t) {},
    _driverSetIsFullScreen: function(t) {
      this._prevWindowSize = window.innerWidth + ":" + window.innerHeight, this._scaleX = this._scaleY = 1;
      var e = this.factory.width,
        s = this.factory.height,
        i = window.innerWidth,
        n = window.innerHeight,
        r = s > e,
        a = n > i;
      this.system.isRotated = !this.system.isDesktop && r != a;
      var _ = 0,
        o = 0;
      if (t) {
        var h = Math.min(i / e, n / s),
          u = this.factory.fullScreenType;
        switch (u[1]) {
          case 0:
          case 1:
            break;
          case 2:
            this._scaleX = i / e, this._scaleY = n / s;
            break;
          case 3:
            this._scaleX = this._scaleY = h;
            break;
          case 4:
            h = .5 > h ? .25 : 1 > h ? .5 : Math.floor(h), this._scaleX = this._scaleY = h;
            break;
          case 5:
            var l = u[2];
            if (null != l.bleedWidth && null != l.bleedHeight) {
              var c = e - 2 * d.parseInt(l.bleedWidth),
                g = s - 2 * d.parseInt(l.bleedHeight);
              s / e > n / i ? g / e > n / i ? this._scaleX = this._scaleY = n / g : this._scaleY = this._scaleX = i / e : s / c > n / i ? this._scaleY = this._scaleX = n / s : this._scaleY = this._scaleX = i / c
            }
        }
        _ = Math.round((i - e * this._scaleX) / 2), o = Math.round((n - s * this._scaleY) / 2)
      }
      this._stage.canvas.style.setProperty("width", Math.round(e * this._scaleX) + "px", ""), this._stage.canvas.style.setProperty("height", Math.round(s * this._scaleY) + "px", ""), this._stage.canvas.style.setProperty("margin-left", _ + "px", ""), this._stage.canvas.style.setProperty("margin-top", o + "px", "")
    },
    __class__: Bt
  });
  var Ft = function(t, e, s, i, n, r, a, _, o, h, u, l, c, d, g, p, f) {
    mt.call(this, t, e, s, i, n, r, a, _, o, h, u, l, c, d, g, p, f)
  };
  n["awe6.core.drivers.createjs.Overlay"] = Ft, Ft.__name__ = ["awe6", "core", "drivers", "createjs", "Overlay"], Ft.__super__ = mt, Ft.prototype = e(mt.prototype, {
    _driverInit: function() {
      Ls.__cast(this._borderView, jt).context.mouseEnabled = !1, this._context.mouseEnabled = !1, this._pauseContext = new createjs.Container, this._pauseContext.mouseEnabled = !1;
      var t = new createjs.Shape;
      t.graphics.beginFill("#" + p.hex(this._pauseColor, 6)), t.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), t.alpha = this._pauseAlpha, this._pauseContext.addChild(t), this._flashContext = new createjs.Container, this._flashContext.mouseEnabled = !1
    },
    _updater: function(t) {
      null == t && (t = 0), mt.prototype._updater.call(this, t), this._flashContext.alpha = this._flashAlpha, this._flashContext.visible = 0 != this._flashAlpha
    },
    flash: function(t, e, s, i) {
      null == i && (i = 16777215), null == s && (s = 1), null == e && (e = !0), this._flashContext.removeAllChildren();
      var n = new createjs.Shape;
      n.graphics.beginFill("#" + p.hex(i, 6)), n.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), this._flashContext.addChild(n), t = null != t ? t : e ? 500 : .5 * this._kernel.factory.targetFramerate, this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e, this._flashAlpha = s > 1 ? this._flashStartingAlpha = 1 : 0 > s ? this._flashStartingAlpha = 0 : this._flashStartingAlpha = s
    },
    __class__: Ft
  });
  var Yt = function(t, e, s) {
    Tt.call(this, t, e, s)
  };
  n["awe6.core.drivers.createjs.Preloader"] = Yt, Yt.__name__ = ["awe6", "core", "drivers", "createjs", "Preloader"], Yt.__super__ = Tt, Yt.prototype = e(Tt.prototype, {
    _init: function() {
      this._context = new createjs.Container, this.view = new jt(this._kernel, this._context), Tt.prototype._init.call(this), this._system = this._kernel.system, this._isDesktop = this._system.isDesktop, this._audioHoldDelay = this._getAudioHoldDelay(), this._completedDelay = 0;
      var t;
      t = this._isDecached ? "?dc=" + d.random(999999) : "";
      var e = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
      null != this._proprietaryAudioFormat && "" != this._proprietaryAudioFormat && h.has(e, this._proprietaryAudioFormat) || (this._proprietaryAudioFormat = "mp3");
      var s = [];
      if (this._manifest = [], createjs.Sound.initializeDefaultPlugins()) {
        var n = this._isSoundDisabled || this._system.isAndroid && this._getIsStockAndroidBrowser();
        createjs.Sound.getCapability("ogg") ? this._validSoundFormat = "ogg" : createjs.Sound.getCapability(this._proprietaryAudioFormat) ? this._validSoundFormat = this._proprietaryAudioFormat : this._validSoundFormat = "noValidFormat", this._activePlugin = createjs.Sound.activePlugin;
        for (var r = 0, a = this._assets; r < a.length;) {
          var _ = a[r];
          ++r;
          var u = o.substr(_, -3, null);
          if (h.has(e, u) && (s.push(_), !n && u == this._validSoundFormat)) {
            var l;
            l = "assets.audio." + function(t) {
              var e, s = _.split("/").pop();
              return e = o.substr(s, 0, -4)
            }(this), this._isFastTestMode || this._manifest.push({
              src: _ + t,
              id: l
            })
          }
        }
      }
      for (var c = 0; c < s.length;) {
        var g = s[c];
        ++c, o.remove(this._assets, g);
      }
      for (var p = 0, f = this._assets; p < f.length;) {
        var E = f[p];
        ++p, this._manifest.push({
          src: E + t,
          id: E
        })
      }
      this._loadQueue = new createjs.LoadQueue(!this._kernel.isLocal && !this._isFastTestMode, ""), this._loadQueue.setMaxConnections(10), this._loadQueue.installPlugin(createjs.Sound), this._manifest = this._tools.shuffle(this._manifest), this._loadQueue.addEventListener("complete", i(this, this._onComplete)), this._loadQueue.addEventListener("fileerror", i(this, this._onError)), this._loadQueue.addEventListener("error", i(this, this._onError)), ws.delay(function(t, e) {
        return function() {
          t(e)
        }
      }((ii = this._loadQueue, i(ii, ii.loadManifest)), this._manifest), 200)
    },
    _next: function() {},
    get_progress: function() {
      return this._loadQueue.progress
    },
    _onComplete: function(t) {
      this._isComplete || (this._isComplete = !0, xt.loadQueue = this._loadQueue, this._completedDelay = this._audioHoldDelay, this._loadQueue.removeEventListener("complete", i(this, this._onComplete)), this._loadQueue.removeEventListener("fileerror", i(this, this._onError)), this._loadQueue.removeEventListener("error", i(this, this._onError)), 0 != this._audioHoldDelay && this._showAudioHoldMessage())
    },
    _onError: function(t) {
      ys.trace([t, t.title, t.message, t.data], {
        fileName: "Preloader.hx",
        lineNumber: 147,
        className: "awe6.core.drivers.createjs.Preloader",
        methodName: "_onError"
      })
    },
    _showAudioHoldMessage: function() {},
    _updater: function(t) {
      null == t && (t = 0), Tt.prototype._updater.call(this, t), this._isComplete && (this._completedDelay -= t, (this._audioHoldDelay >= 0 && this._completedDelay <= 0 || this._kernel.inputs.keyboard.getIsKeyRelease(this._kernel.factory.keyNext) || this._kernel.inputs.mouse.getIsButtonRelease()) && (this._assets = []))
    },
    _getIsStockAndroidBrowser: function() {
      var t, e = this._system.userAgent.indexOf("Android") > -1 && this._system.userAgent.indexOf("Mozilla/5.0") > -1 && this._system.userAgent.indexOf("AppleWebKit") > -1,
        s = new _("AppleWebKit/([\\d.]+)", ""),
        i = s.match(this._system.userAgent);
      t = i ? d.parseFloat(s.matched(1)) : 0;
      var n, r = new _("Chrome/([\\d.]+)", ""),
        a = r.match(this._system.userAgent);
      return n = a ? d.parseFloat(r.matched(1)) : 0, e && (i && 537 > t || a && 37 > n)
    },
    _getAudioHoldDelay: function() {
      if (this._isSoundDisabled) return 0;
      if (!this._system.isIos) return 0;
      var t = -1;
      this._kernel.factory.config.exists("settings.audioHoldDelay") && (t = d.parseInt(this._kernel.factory.config.get("settings.audioHoldDelay")));
      try {
        var e = this._kernel.factory._context.getStage().canvas.getAttribute("audioHoldDelay");
        null != e && "" != e && (t = d.parseInt(e))
      } catch (s) {
        s instanceof Ps && (s = s.val)
      }
      return t
    },
    __class__: Yt
  });
  var Ht = function(t) {
    bt.call(this, t)
  };
  n["awe6.core.drivers.createjs.Profiler"] = Ht, Ht.__name__ = ["awe6", "core", "drivers", "createjs", "Profiler"], Ht.__super__ = bt, Ht.prototype = e(bt.prototype, {
    _init: function() {
      bt.prototype._init.call(this), this._isMemoryEnabled = null != window.performance && null != window.performance.memory, this._width = 75, this._height = 24, this._marginHeight = 12;
      var t = new createjs.Shape;
      this._context.addChild(t), t.alpha = .25, this._isMemoryEnabled && (t.graphics.beginFill("#" + p.hex(this._backgroundColor, 6)), t.graphics.drawRect(0, 0, this._width, this._height), t.graphics.endFill()), t.graphics.beginFill("#" + p.hex(this._marginColor, 6)), t.graphics.drawRect(0, 0, this._width, this._marginHeight), t.graphics.endFill(), t.cache(0, 0, this._width, this._height), this._fpsTextField = new createjs.Text("", "", "#" + p.hex(this._fpsColor, 6)), this._context.addChild(this._fpsTextField), this._isMemoryEnabled && (this._memoryTextField = new createjs.Text("", "", "#" + p.hex(this._memoryColor, 6)), this._memoryTextField.y = 12, this._context.addChild(this._memoryTextField))
    },
    _driverUpdate: function() {
      var t = d["int"](this._kernel.getFramerate(!0));
      d["int"](Math.min(this._height, this._height / this._kernel.factory.targetFramerate * t));
      if (this._fpsTextField.text = this._fpsLabel + ": " + t + " / " + this._kernel.factory.targetFramerate, this._isMemoryEnabled && this._updates % this._kernel.factory.targetFramerate == 0) {
        var e = Math.round(window.performance.memory.usedJSHeapSize / 1024 / 1024),
          s = Math.round(window.performance.memory.jsHeapSizeLimit / 1024 / 1024);
        this._memoryTextField.text = this._memoryLabel + ": " + e + " / " + s
      }
    },
    __class__: Ht
  });
  var Gt = function(t, e) {
    At.call(this, t, e)
  };
  n["awe6.core.drivers.createjs.SceneTransition"] = Gt, Gt.__name__ = ["awe6", "core", "drivers", "createjs", "SceneTransition"], Gt.__super__ = At, Gt.prototype = e(At.prototype, {
    _init: function() {
      At.prototype._init.call(this), this._kernel.scenes.get_scene().get_view().context.cache(0, 0, this._kernel.factory.width, this._kernel.factory.height);
      var t = new createjs.Bitmap(this._kernel.scenes.get_scene().get_view().context.cacheCanvas);
      this._kernel.scenes.get_scene().get_view().context.uncache(), this._context.mouseEnabled = !1, this._context.addChild(t)
    },
    _updater: function(t) {
      null == t && (t = 0), At.prototype._updater.call(this, t), this.isDisposed || (this._context.alpha = 1 - this.get_progress())
    },
    __class__: Gt
  });
  var Vt = function(t, e) {
    It.call(this, t, e)
  };
  n["awe6.core.drivers.createjs.Session"] = Vt, Vt.__name__ = ["awe6", "core", "drivers", "createjs", "Session"], Vt.__super__ = It, Vt.prototype = e(It.prototype, {
    _init: function() {
      var t = !0;
      null != this._kernel.getConfig("settings.sessionSaved") && (t = "false" != this._kernel.getConfig("settings.sessionSaved")), t ? this._storage = Ms.getLocalStorage() : this._storage = Ms.getSessionStorage(), It.prototype._init.call(this)
    },
    _driverLoad: function() {
      if (this._savedData = {}, null != window.document.cookie && Bs.exists(this._kernel.factory.id) && (this._savedData = this._tools.unserialize(Bs.get(this._kernel.factory.id)), this._driverSave(), Bs.remove(this._kernel.factory.id)), null != this._storage) try {
        var t = this._storage.getItem(this._kernel.factory.id);
        null != t && (this._savedData = this._tools.unserialize(t))
      } catch (e) {
        e instanceof Ps && (e = e.val)
      }
    },
    _driverReset: function() {
      if (null != this._storage) try {
        this._storage.removeItem(this._kernel.factory.id)
      } catch (t) {
        t instanceof Ps && (t = t.val)
      }
      this._savedData = {}
    },
    _driverSave: function() {
      if (null != this._storage) try {
        this._storage.setItem(this._kernel.factory.id, this._tools.serialize(this._savedData))
      } catch (t) {
        t instanceof Ps && (t = t.val)
      }
    },
    __class__: Vt
  });
  var zt = function(t) {
    this._kernel = t, this.isRotated = !1, this.isAndroid = this.isChromeOs = this.isIos = this.isLinux = this.isMacOs = this.isSilk = this.isWindows = this.isWindowsPhone = this.isDesktop = !1, this.userAgent = window.navigator.userAgent, this.isSilk = new _("Silk", "").match(this.userAgent), this.isCocoonjs = 1 == window.navigator.isCocoonJS, this.isCocoonjs && this._cocoonOverrides(), this.isCrosswalk = new _("Crosswalk", "").match(this.userAgent), this.isCordova = null != window.cordova, new _("Android", "").match(this.userAgent) ? this.isAndroid = !0 : new _("CrOS", "").match(this.userAgent) ? this.isChromeOs = !0 : new _("iP[ao]d|iPhone", "i").match(this.userAgent) ? this.isIos = !0 : new _("Linux", "").match(this.userAgent) ? this.isLinux = !0 : new _("Mac OS", "").match(this.userAgent) ? this.isMacOs = !0 : new _("Windows", "").match(this.userAgent) && (this.isWindows = !0, new _("Windows Phone", "i").match(this.userAgent) && (this.isWindowsPhone = !0)), (this.isWindows || this.isMacOs || this.isLinux && !this.isSilk) && (this.isDesktop = !0), this.isWindowsPhone && (this.isDesktop = !1)
  };
  n["awe6.core.drivers.createjs.System"] = zt, zt.__name__ = ["awe6", "core", "drivers", "createjs", "System"], zt.prototype = {
    _cocoonOverrides: function() {
      Image.prototype.naturalWidth = function() {
        return this.width
      }, Image.prototype.naturalHeight = function() {
        return this.height
      }
    },
    requestFullScreen: function() {
      try {
        var t = window.document.documentElement;
        null != i(t, t.requestFullscreen) ? t.requestFullscreen() : null != t.msRequestFullscreen ? t.msRequestFullscreen() : null != t.mozRequestFullScreen ? t.mozRequestFullScreen() : null != t.webkitRequestFullscreen && t.webkitRequestFullscreen()
      } catch (e) {
        e instanceof Ps && (e = e.val)
      }
    },
    requestExitFullScreen: function() {
      try {
        var t = window.document;
        null != i(t, t.exitFullscreen) ? t.exitFullscreen() : null != t.msExitFullscreen ? t.msExitFullscreen() : null != t.mozCancelFullScreen ? t.mozCancelFullScreen() : null != t.webkitExitFullscreen && t.webkitExitFullscreen()
      } catch (e) {
        e instanceof Ps && (e = e.val)
      }
    },
    requestLockScreen: function() {
      if (!this.isDesktop) try {
        var t;
        t = this._kernel.factory.width < this._kernel.factory.height ? "portrait-primary" : "landscape-primary";
        var e = window.screen;
        null != e.orientation ? null != e.orientation.lock ? e.orientation.lock(t) : null != e.orientation.lockOrientation && e.orientation.lockOrientation(t) : null != e.mozOrientation ? e.mozLockOrientation(t) : null != e.msOrientation && e.msLockOrientation(t)
      } catch (s) {
        s instanceof Ps && (s = s.val)
      }
    },
    __class__: zt
  };
  var jt = function(t, e, s, i) {
    Dt.call(this, t, e, s, i)
  };
  n["awe6.core.drivers.createjs.View"] = jt, jt.__name__ = ["awe6", "core", "drivers", "createjs", "View"], jt.__super__ = Dt, jt.prototype = e(Dt.prototype, {
    _init: function() {
      null == this.context && (this.context = new createjs.Container), Dt.prototype._init.call(this)
    },
    _driverDisposer: function() {
      if (null != this.context && null != this.context.parent) try {
        this.context.parent.removeChild(this.context)
      } catch (t) {
        t instanceof Ps && (t = t.val)
      }
    },
    _driverDraw: function() {
      null != this._container && null != this._container.parent && this._container.parent.removeChild(this._container), this._container = new createjs.Container, this._container.mouseEnabled = !1, this.context.addChild(this._container);
      for (var t = this._children, e = 0; e < t.length;) {
        var s = t[e];
        ++e, s.isVisible && this._container.addChild(s.context)
      }
    },
    set_x: function(t) {
      return this.context.x = t, Dt.prototype.set_x.call(this, t)
    },
    set_y: function(t) {
      return this.context.y = t, Dt.prototype.set_y.call(this, t)
    },
    __class__: jt
  });
  var Wt = function(t, e, s, i) {
    null == i && (i = !0), null == s && (s = 100), null == e && (e = 100), this.isFlippedX = !1, this.isFlippedY = !1, this.width = e, this.height = s, this._context = new createjs.Container, this.setPosition(0, 0), I.call(this, t, null, this._context)
  };
  n["awe6.core.drivers.createjs.extras.gui.GuiEntity"] = Wt, Wt.__name__ = ["awe6", "core", "drivers", "createjs", "extras", "gui", "GuiEntity"], Wt.__interfaces__ = [k], Wt.__super__ = I, Wt.prototype = e(I.prototype, {
    setPosition: function(t, e) {
      this.set_x(t), this.set_y(e)
    },
    set_x: function(t) {
      return this.x = t, this._context.x = this.x, this.x
    },
    set_y: function(t) {
      return this.y = t, this._context.y = this.y, this.y
    },
    __class__: Wt
  });
  var Xt = function(t, e, s, i, n, r, a) {
    null == a && (a = !1), null == r && (r = !1), null == i && (i = ""), this.textStyle = n, this._isMultiline = r, this._isCached = a, Wt.call(this, t, e, s, !1), this.set_text(i)
  };
  n["awe6.core.drivers.createjs.extras.gui.Text"] = Xt, Xt.__name__ = ["awe6", "core", "drivers", "createjs", "extras", "gui", "Text"], Xt.__super__ = Wt, Xt.prototype = e(Wt.prototype, {
    _init: function() {
      Wt.prototype._init.call(this), this._textField = new createjs.Text, this._textField.text = this.text, this._draw(), this._context.addChild(this._textField), this._isDirty = !1, this._prevTextStyle = this.textStyle.toString()
    },
    _updater: function(t) {
      null == t && (t = 0), Wt.prototype._updater.call(this, t), this._isDirty = this._isDirty || this._prevTextStyle != this.textStyle.toString(), this._isDirty && this._draw(), this._prevTextStyle = this.textStyle.toString()
    },
    _draw: function() {
      if (this._textField.lineWidth = this.width, this._prevTextStyle != this.textStyle.toString()) {
        var t = this.textStyle.align;
        switch (t[1]) {
          case 1:
            this._textField.textAlign = "left";
            break;
          case 2:
            this._textField.textAlign = "center", this._textField.x = .5 * this.width;
            break;
          case 3:
            this._textField.textAlign = "right", this._textField.x = this.width;
            break;
          case 0:
            this._textField.textAlign = "left"
        }
        if (this._textField.color = "#" + p.hex(this.textStyle.color, 6), this._textField.font = (this.textStyle.isBold ? "bold " : "") + (this.textStyle.isItalic ? "italic " : "") + this.textStyle.size + "px '" + this.textStyle.font + "'", this._textField.lineHeight = this.textStyle.spacingVertical, null != this.textStyle.filters) {
          var e = this._textField;
          e.shadow = null;
          var s = this.textStyle.filters.slice();
          null != this._textFieldOutline && null != this._textFieldOutline.parent && this._textFieldOutline.parent.removeChild(this._textFieldOutline), this._textFieldOutline = null, (2 == s.length || 6 == s.length) && (this._textFieldOutline = this._textField.clone(), this._textFieldOutline.color = "#" + p.hex(s.shift(), 6), this._textFieldOutline.outline = 2 * s.shift(), this._context.addChildAt(this._textFieldOutline, 0), e = this._textFieldOutline), 4 == s.length && (e.shadow = new createjs.Shadow("#" + p.hex(s[0], 6), s[1], s[2], s[3]))
        }
      }
      this._isCached && this._context.cache(0, 0, this.width, this.height), this._isDirty = !1
    },
    set_text: function(t) {
      return null == t && (t = ""), this.text == t ? this.text : (this.text = t, this._textField.text = this.text, null != this._textFieldOutline && (this._textFieldOutline.text = this.text), this._isDirty = !0, this.text)
    },
    __class__: Xt
  });
  var Kt = function(t, e, s, i) {
    Dt.call(this, t, e, s, i)
  };
  n["awe6.core.drivers.flash.View"] = Kt, Kt.__name__ = ["awe6", "core", "drivers", "flash", "View"], Kt.__super__ = Dt, Kt.prototype = e(Dt.prototype, {
    _init: function() {
      null == this.context && (this.context = new createjs.Container), Dt.prototype._init.call(this)
    },
    _driverDisposer: function() {
      null != this.context.parent && this.context.parent.removeChild(this.context)
    },
    _driverDraw: function() {
      null != this._container && null != this._container.parent && this._container.parent.removeChild(this._container), this._container = new createjs.Container, this._container.mouseEnabled = !1, this.context.addChild(this._container);
      for (var t = this._children, e = 0; e < t.length;) {
        var s = t[e];
        ++e, s.isVisible && this._container.addChild(s.context)
      }
    },
    set_x: function(t) {
      return this.context.x = t, Dt.prototype.set_x.call(this, t)
    },
    set_y: function(t) {
      return this.context.y = t, Dt.prototype.set_y.call(this, t)
    },
    __class__: Kt
  });
  var Qt = function(t, e, s) {
    null == s && (s = 1e3), this._callbackFunction = e, this._duration = s, I.call(this, t)
  };
  n["awe6.extras.Delay"] = Qt, Qt.__name__ = ["awe6", "extras", "Delay"], Qt.__super__ = I, Qt.prototype = e(I.prototype, {
    _updater: function(t) {
      null == t && (t = 0), I.prototype._updater.call(this, t), this._duration -= t, this._duration <= 0 && (null != this._callbackFunction && this._callbackFunction(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
    },
    __class__: Qt
  });
  var Jt = n["awe6.interfaces.EAgenda"] = {
    __ename__: ["awe6", "interfaces", "EAgenda"],
    __constructs__: ["ALWAYS", "BIRTH", "DEATH", "STANDARD", "ATTACK", "DEFEND", "SUB_TYPE"]
  };
  Jt.ALWAYS = ["ALWAYS", 0], Jt.ALWAYS.toString = r, Jt.ALWAYS.__enum__ = Jt, Jt.BIRTH = ["BIRTH", 1], Jt.BIRTH.toString = r, Jt.BIRTH.__enum__ = Jt, Jt.DEATH = ["DEATH", 2], Jt.DEATH.toString = r, Jt.DEATH.__enum__ = Jt, Jt.STANDARD = ["STANDARD", 3], Jt.STANDARD.toString = r, Jt.STANDARD.__enum__ = Jt, Jt.ATTACK = ["ATTACK", 4], Jt.ATTACK.toString = r, Jt.ATTACK.__enum__ = Jt, Jt.DEFEND = ["DEFEND", 5], Jt.DEFEND.toString = r, Jt.DEFEND.__enum__ = Jt, Jt.SUB_TYPE = function(t) {
    var e = ["SUB_TYPE", 6, t];
    return e.__enum__ = Jt, e.toString = r, e
  };
  var Zt = n["awe6.interfaces.EAudioChannel"] = {
    __ename__: ["awe6", "interfaces", "EAudioChannel"],
    __constructs__: ["DEFAULT", "EFFECTS", "INTERFACE", "MUSIC", "SUB_TYPE"]
  };
  Zt.DEFAULT = ["DEFAULT", 0], Zt.DEFAULT.toString = r, Zt.DEFAULT.__enum__ = Zt, Zt.EFFECTS = ["EFFECTS", 1], Zt.EFFECTS.toString = r, Zt.EFFECTS.__enum__ = Zt, Zt.INTERFACE = ["INTERFACE", 2], Zt.INTERFACE.toString = r, Zt.INTERFACE.__enum__ = Zt, Zt.MUSIC = ["MUSIC", 3], Zt.MUSIC.toString = r, Zt.MUSIC.__enum__ = Zt, Zt.SUB_TYPE = function(t) {
    var e = ["SUB_TYPE", 4, t];
    return e.__enum__ = Zt, e.toString = r, e
  };
  var qt = n["awe6.interfaces.EFullScreen"] = {
    __ename__: ["awe6", "interfaces", "EFullScreen"],
    __constructs__: ["DISABLED", "NO_SCALE", "SCALE_ASPECT_RATIO_IGNORE", "SCALE_ASPECT_RATIO_PRESERVE", "SCALE_NEAREST_MULTIPLE", "SUB_TYPE"]
  };
  qt.DISABLED = ["DISABLED", 0], qt.DISABLED.toString = r, qt.DISABLED.__enum__ = qt, qt.NO_SCALE = ["NO_SCALE", 1], qt.NO_SCALE.toString = r, qt.NO_SCALE.__enum__ = qt, qt.SCALE_ASPECT_RATIO_IGNORE = ["SCALE_ASPECT_RATIO_IGNORE", 2], qt.SCALE_ASPECT_RATIO_IGNORE.toString = r, qt.SCALE_ASPECT_RATIO_IGNORE.__enum__ = qt, qt.SCALE_ASPECT_RATIO_PRESERVE = ["SCALE_ASPECT_RATIO_PRESERVE", 3], qt.SCALE_ASPECT_RATIO_PRESERVE.toString = r, qt.SCALE_ASPECT_RATIO_PRESERVE.__enum__ = qt, qt.SCALE_NEAREST_MULTIPLE = ["SCALE_NEAREST_MULTIPLE", 4], qt.SCALE_NEAREST_MULTIPLE.toString = r, qt.SCALE_NEAREST_MULTIPLE.__enum__ = qt, qt.SUB_TYPE = function(t) {
    var e = ["SUB_TYPE", 5, t];
    return e.__enum__ = qt, e.toString = r, e
  };
  var $t = n["awe6.interfaces.EJoypadButton"] = {
    __ename__: ["awe6", "interfaces", "EJoypadButton"],
    __constructs__: ["FIRE", "UP", "RIGHT", "DOWN", "LEFT", "PRIMARY", "SECONDARY"]
  };
  $t.FIRE = ["FIRE", 0], $t.FIRE.toString = r, $t.FIRE.__enum__ = $t, $t.UP = ["UP", 1], $t.UP.toString = r, $t.UP.__enum__ = $t, $t.RIGHT = ["RIGHT", 2], $t.RIGHT.toString = r, $t.RIGHT.__enum__ = $t, $t.DOWN = ["DOWN", 3], $t.DOWN.toString = r, $t.DOWN.__enum__ = $t, $t.LEFT = ["LEFT", 4], $t.LEFT.toString = r, $t.LEFT.__enum__ = $t, $t.PRIMARY = ["PRIMARY", 5], $t.PRIMARY.toString = r, $t.PRIMARY.__enum__ = $t, $t.SECONDARY = ["SECONDARY", 6], $t.SECONDARY.toString = r, $t.SECONDARY.__enum__ = $t;
  var te = n["awe6.interfaces.EJoypadTouch"] = {
    __ename__: ["awe6", "interfaces", "EJoypadTouch"],
    __constructs__: ["DISABLED", "DPAD", "JOYSTICK", "SWIPE"]
  };
  te.DISABLED = ["DISABLED", 0], te.DISABLED.toString = r, te.DISABLED.__enum__ = te, te.DPAD = ["DPAD", 1], te.DPAD.toString = r, te.DPAD.__enum__ = te, te.JOYSTICK = function(t) {
    var e = ["JOYSTICK", 2, t];
    return e.__enum__ = te, e.toString = r, e
  }, te.SWIPE = function(t) {
    var e = ["SWIPE", 3, t];
    return e.__enum__ = te, e.toString = r, e
  };
  var ee = n["awe6.interfaces.EKey"] = {
    __ename__: ["awe6", "interfaces", "EKey"],
    __constructs__: ["NUM_LOCK", "CLEAR", "HELP", "ALT", "BACKSPACE", "CAPS_LOCK", "CONTROL", "DELETE", "DOWN", "END", "ENTER", "ESCAPE", "F1", "F10", "F11", "F12", "F13", "F14", "F15", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "HOME", "INSERT", "LEFT", "NUMPAD_0", "NUMPAD_1", "NUMPAD_2", "NUMPAD_3", "NUMPAD_4", "NUMPAD_5", "NUMPAD_6", "NUMPAD_7", "NUMPAD_8", "NUMPAD_9", "NUMPAD_ADD", "NUMPAD_DECIMAL", "NUMPAD_DIVIDE", "NUMPAD_ENTER", "NUMPAD_MULTIPLY", "NUMPAD_SUBTRACT", "PAGE_DOWN", "PAGE_UP", "RIGHT", "SHIFT", "SPACE", "TAB", "UP", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "NUMBER_0", "NUMBER_1", "NUMBER_2", "NUMBER_3", "NUMBER_4", "NUMBER_5", "NUMBER_6", "NUMBER_7", "NUMBER_8", "NUMBER_9", "COLON", "EQUALS", "HYPHEN", "SLASH", "TILDE", "SQUARELEFT", "SQUARERIGHT", "BACKSLASH", "APOSTROPHE", "TOPLEFT", "SUB_TYPE"]
  };
  ee.NUM_LOCK = ["NUM_LOCK", 0], ee.NUM_LOCK.toString = r, ee.NUM_LOCK.__enum__ = ee, ee.CLEAR = ["CLEAR", 1], ee.CLEAR.toString = r, ee.CLEAR.__enum__ = ee, ee.HELP = ["HELP", 2], ee.HELP.toString = r, ee.HELP.__enum__ = ee, ee.ALT = ["ALT", 3], ee.ALT.toString = r, ee.ALT.__enum__ = ee, ee.BACKSPACE = ["BACKSPACE", 4], ee.BACKSPACE.toString = r, ee.BACKSPACE.__enum__ = ee, ee.CAPS_LOCK = ["CAPS_LOCK", 5], ee.CAPS_LOCK.toString = r, ee.CAPS_LOCK.__enum__ = ee, ee.CONTROL = ["CONTROL", 6], ee.CONTROL.toString = r, ee.CONTROL.__enum__ = ee, ee.DELETE = ["DELETE", 7], ee.DELETE.toString = r, ee.DELETE.__enum__ = ee, ee.DOWN = ["DOWN", 8], ee.DOWN.toString = r, ee.DOWN.__enum__ = ee, ee.END = ["END", 9], ee.END.toString = r, ee.END.__enum__ = ee, ee.ENTER = ["ENTER", 10], ee.ENTER.toString = r, ee.ENTER.__enum__ = ee, ee.ESCAPE = ["ESCAPE", 11], ee.ESCAPE.toString = r, ee.ESCAPE.__enum__ = ee, ee.F1 = ["F1", 12], ee.F1.toString = r, ee.F1.__enum__ = ee, ee.F10 = ["F10", 13], ee.F10.toString = r, ee.F10.__enum__ = ee, ee.F11 = ["F11", 14], ee.F11.toString = r, ee.F11.__enum__ = ee, ee.F12 = ["F12", 15], ee.F12.toString = r, ee.F12.__enum__ = ee, ee.F13 = ["F13", 16], ee.F13.toString = r, ee.F13.__enum__ = ee, ee.F14 = ["F14", 17], ee.F14.toString = r, ee.F14.__enum__ = ee, ee.F15 = ["F15", 18], ee.F15.toString = r, ee.F15.__enum__ = ee, ee.F2 = ["F2", 19], ee.F2.toString = r, ee.F2.__enum__ = ee, ee.F3 = ["F3", 20], ee.F3.toString = r, ee.F3.__enum__ = ee, ee.F4 = ["F4", 21], ee.F4.toString = r, ee.F4.__enum__ = ee, ee.F5 = ["F5", 22], ee.F5.toString = r, ee.F5.__enum__ = ee, ee.F6 = ["F6", 23], ee.F6.toString = r, ee.F6.__enum__ = ee, ee.F7 = ["F7", 24], ee.F7.toString = r, ee.F7.__enum__ = ee, ee.F8 = ["F8", 25], ee.F8.toString = r, ee.F8.__enum__ = ee, ee.F9 = ["F9", 26], ee.F9.toString = r, ee.F9.__enum__ = ee, ee.HOME = ["HOME", 27], ee.HOME.toString = r, ee.HOME.__enum__ = ee, ee.INSERT = ["INSERT", 28], ee.INSERT.toString = r, ee.INSERT.__enum__ = ee, ee.LEFT = ["LEFT", 29], ee.LEFT.toString = r, ee.LEFT.__enum__ = ee, ee.NUMPAD_0 = ["NUMPAD_0", 30], ee.NUMPAD_0.toString = r, ee.NUMPAD_0.__enum__ = ee, ee.NUMPAD_1 = ["NUMPAD_1", 31], ee.NUMPAD_1.toString = r, ee.NUMPAD_1.__enum__ = ee, ee.NUMPAD_2 = ["NUMPAD_2", 32], ee.NUMPAD_2.toString = r, ee.NUMPAD_2.__enum__ = ee, ee.NUMPAD_3 = ["NUMPAD_3", 33], ee.NUMPAD_3.toString = r, ee.NUMPAD_3.__enum__ = ee, ee.NUMPAD_4 = ["NUMPAD_4", 34], ee.NUMPAD_4.toString = r, ee.NUMPAD_4.__enum__ = ee, ee.NUMPAD_5 = ["NUMPAD_5", 35], ee.NUMPAD_5.toString = r, ee.NUMPAD_5.__enum__ = ee, ee.NUMPAD_6 = ["NUMPAD_6", 36], ee.NUMPAD_6.toString = r, ee.NUMPAD_6.__enum__ = ee, ee.NUMPAD_7 = ["NUMPAD_7", 37], ee.NUMPAD_7.toString = r, ee.NUMPAD_7.__enum__ = ee, ee.NUMPAD_8 = ["NUMPAD_8", 38], ee.NUMPAD_8.toString = r, ee.NUMPAD_8.__enum__ = ee, ee.NUMPAD_9 = ["NUMPAD_9", 39], ee.NUMPAD_9.toString = r, ee.NUMPAD_9.__enum__ = ee, ee.NUMPAD_ADD = ["NUMPAD_ADD", 40], ee.NUMPAD_ADD.toString = r, ee.NUMPAD_ADD.__enum__ = ee, ee.NUMPAD_DECIMAL = ["NUMPAD_DECIMAL", 41], ee.NUMPAD_DECIMAL.toString = r, ee.NUMPAD_DECIMAL.__enum__ = ee, ee.NUMPAD_DIVIDE = ["NUMPAD_DIVIDE", 42], ee.NUMPAD_DIVIDE.toString = r, ee.NUMPAD_DIVIDE.__enum__ = ee, ee.NUMPAD_ENTER = ["NUMPAD_ENTER", 43], ee.NUMPAD_ENTER.toString = r, ee.NUMPAD_ENTER.__enum__ = ee, ee.NUMPAD_MULTIPLY = ["NUMPAD_MULTIPLY", 44], ee.NUMPAD_MULTIPLY.toString = r, ee.NUMPAD_MULTIPLY.__enum__ = ee, ee.NUMPAD_SUBTRACT = ["NUMPAD_SUBTRACT", 45], ee.NUMPAD_SUBTRACT.toString = r, ee.NUMPAD_SUBTRACT.__enum__ = ee, ee.PAGE_DOWN = ["PAGE_DOWN", 46], ee.PAGE_DOWN.toString = r, ee.PAGE_DOWN.__enum__ = ee, ee.PAGE_UP = ["PAGE_UP", 47], ee.PAGE_UP.toString = r, ee.PAGE_UP.__enum__ = ee, ee.RIGHT = ["RIGHT", 48], ee.RIGHT.toString = r, ee.RIGHT.__enum__ = ee, ee.SHIFT = ["SHIFT", 49], ee.SHIFT.toString = r, ee.SHIFT.__enum__ = ee, ee.SPACE = ["SPACE", 50], ee.SPACE.toString = r, ee.SPACE.__enum__ = ee, ee.TAB = ["TAB", 51], ee.TAB.toString = r, ee.TAB.__enum__ = ee, ee.UP = ["UP", 52], ee.UP.toString = r, ee.UP.__enum__ = ee, ee.A = ["A", 53], ee.A.toString = r, ee.A.__enum__ = ee, ee.B = ["B", 54], ee.B.toString = r, ee.B.__enum__ = ee, ee.C = ["C", 55], ee.C.toString = r, ee.C.__enum__ = ee, ee.D = ["D", 56], ee.D.toString = r, ee.D.__enum__ = ee, ee.E = ["E", 57], ee.E.toString = r, ee.E.__enum__ = ee, ee.F = ["F", 58], ee.F.toString = r, ee.F.__enum__ = ee, ee.G = ["G", 59], ee.G.toString = r, ee.G.__enum__ = ee, ee.H = ["H", 60], ee.H.toString = r, ee.H.__enum__ = ee, ee.I = ["I", 61], ee.I.toString = r, ee.I.__enum__ = ee, ee.J = ["J", 62], ee.J.toString = r, ee.J.__enum__ = ee, ee.K = ["K", 63], ee.K.toString = r, ee.K.__enum__ = ee, ee.L = ["L", 64], ee.L.toString = r, ee.L.__enum__ = ee, ee.M = ["M", 65], ee.M.toString = r, ee.M.__enum__ = ee, ee.N = ["N", 66], ee.N.toString = r, ee.N.__enum__ = ee, ee.O = ["O", 67], ee.O.toString = r, ee.O.__enum__ = ee, ee.P = ["P", 68], ee.P.toString = r, ee.P.__enum__ = ee, ee.Q = ["Q", 69], ee.Q.toString = r, ee.Q.__enum__ = ee, ee.R = ["R", 70], ee.R.toString = r, ee.R.__enum__ = ee, ee.S = ["S", 71], ee.S.toString = r, ee.S.__enum__ = ee, ee.T = ["T", 72], ee.T.toString = r, ee.T.__enum__ = ee, ee.U = ["U", 73], ee.U.toString = r, ee.U.__enum__ = ee, ee.V = ["V", 74], ee.V.toString = r, ee.V.__enum__ = ee, ee.W = ["W", 75], ee.W.toString = r, ee.W.__enum__ = ee, ee.X = ["X", 76], ee.X.toString = r, ee.X.__enum__ = ee, ee.Y = ["Y", 77], ee.Y.toString = r, ee.Y.__enum__ = ee, ee.Z = ["Z", 78], ee.Z.toString = r, ee.Z.__enum__ = ee, ee.NUMBER_0 = ["NUMBER_0", 79], ee.NUMBER_0.toString = r, ee.NUMBER_0.__enum__ = ee, ee.NUMBER_1 = ["NUMBER_1", 80], ee.NUMBER_1.toString = r, ee.NUMBER_1.__enum__ = ee, ee.NUMBER_2 = ["NUMBER_2", 81], ee.NUMBER_2.toString = r, ee.NUMBER_2.__enum__ = ee, ee.NUMBER_3 = ["NUMBER_3", 82], ee.NUMBER_3.toString = r, ee.NUMBER_3.__enum__ = ee, ee.NUMBER_4 = ["NUMBER_4", 83], ee.NUMBER_4.toString = r, ee.NUMBER_4.__enum__ = ee, ee.NUMBER_5 = ["NUMBER_5", 84], ee.NUMBER_5.toString = r, ee.NUMBER_5.__enum__ = ee, ee.NUMBER_6 = ["NUMBER_6", 85], ee.NUMBER_6.toString = r, ee.NUMBER_6.__enum__ = ee, ee.NUMBER_7 = ["NUMBER_7", 86], ee.NUMBER_7.toString = r, ee.NUMBER_7.__enum__ = ee, ee.NUMBER_8 = ["NUMBER_8", 87], ee.NUMBER_8.toString = r, ee.NUMBER_8.__enum__ = ee, ee.NUMBER_9 = ["NUMBER_9", 88], ee.NUMBER_9.toString = r, ee.NUMBER_9.__enum__ = ee, ee.COLON = ["COLON", 89], ee.COLON.toString = r, ee.COLON.__enum__ = ee, ee.EQUALS = ["EQUALS", 90], ee.EQUALS.toString = r, ee.EQUALS.__enum__ = ee, ee.HYPHEN = ["HYPHEN", 91], ee.HYPHEN.toString = r, ee.HYPHEN.__enum__ = ee, ee.SLASH = ["SLASH", 92], ee.SLASH.toString = r, ee.SLASH.__enum__ = ee, ee.TILDE = ["TILDE", 93], ee.TILDE.toString = r, ee.TILDE.__enum__ = ee, ee.SQUARELEFT = ["SQUARELEFT", 94], ee.SQUARELEFT.toString = r, ee.SQUARELEFT.__enum__ = ee, ee.SQUARERIGHT = ["SQUARERIGHT", 95], ee.SQUARERIGHT.toString = r, ee.SQUARERIGHT.__enum__ = ee, ee.BACKSLASH = ["BACKSLASH", 96], ee.BACKSLASH.toString = r, ee.BACKSLASH.__enum__ = ee, ee.APOSTROPHE = ["APOSTROPHE", 97], ee.APOSTROPHE.toString = r, ee.APOSTROPHE.__enum__ = ee, ee.TOPLEFT = ["TOPLEFT", 98], ee.TOPLEFT.toString = r, ee.TOPLEFT.__enum__ = ee, ee.SUB_TYPE = function(t) {
    var e = ["SUB_TYPE", 99, t];
    return e.__enum__ = ee, e.toString = r, e
  };
  var se = n["awe6.interfaces.EMessage"] = {
    __ename__: ["awe6", "interfaces", "EMessage"],
    __constructs__: ["DISPOSE", "INIT", "PAUSE", "RESUME", "SUB_TYPE"]
  };
  se.DISPOSE = ["DISPOSE", 0], se.DISPOSE.toString = r, se.DISPOSE.__enum__ = se, se.INIT = ["INIT", 1], se.INIT.toString = r, se.INIT.__enum__ = se, se.PAUSE = ["PAUSE", 2], se.PAUSE.toString = r, se.PAUSE.__enum__ = se, se.RESUME = ["RESUME", 3], se.RESUME.toString = r, se.RESUME.__enum__ = se, se.SUB_TYPE = function(t) {
    var e = ["SUB_TYPE", 4, t];
    return e.__enum__ = se, e.toString = r, e
  };
  var ie = n["awe6.interfaces.EMouseButton"] = {
    __ename__: ["awe6", "interfaces", "EMouseButton"],
    __constructs__: ["LEFT", "MIDDLE", "RIGHT"]
  };
  ie.LEFT = ["LEFT", 0], ie.LEFT.toString = r, ie.LEFT.__enum__ = ie, ie.MIDDLE = ["MIDDLE", 1], ie.MIDDLE.toString = r, ie.MIDDLE.__enum__ = ie, ie.RIGHT = ["RIGHT", 2], ie.RIGHT.toString = r, ie.RIGHT.__enum__ = ie;
  var ne = n["awe6.interfaces.EMouseCursor"] = {
    __ename__: ["awe6", "interfaces", "EMouseCursor"],
    __constructs__: ["ARROW", "AUTO", "BUTTON", "HAND", "IBEAM", "SUB_TYPE"]
  };
  ne.ARROW = ["ARROW", 0], ne.ARROW.toString = r, ne.ARROW.__enum__ = ne, ne.AUTO = ["AUTO", 1], ne.AUTO.toString = r, ne.AUTO.__enum__ = ne, ne.BUTTON = ["BUTTON", 2], ne.BUTTON.toString = r, ne.BUTTON.__enum__ = ne, ne.HAND = ["HAND", 3], ne.HAND.toString = r, ne.HAND.__enum__ = ne, ne.IBEAM = ["IBEAM", 4], ne.IBEAM.toString = r, ne.IBEAM.__enum__ = ne, ne.SUB_TYPE = function(t) {
    var e = ["SUB_TYPE", 5, t];
    return e.__enum__ = ne, e.toString = r, e
  };
  var re = n["awe6.interfaces.EOverlayButton"] = {
    __ename__: ["awe6", "interfaces", "EOverlayButton"],
    __constructs__: ["BACK", "MUTE", "UNMUTE", "PAUSE", "UNPAUSE", "SUB_TYPE"]
  };
  re.BACK = ["BACK", 0], re.BACK.toString = r, re.BACK.__enum__ = re, re.MUTE = ["MUTE", 1], re.MUTE.toString = r, re.MUTE.__enum__ = re, re.UNMUTE = ["UNMUTE", 2], re.UNMUTE.toString = r, re.UNMUTE.__enum__ = re, re.PAUSE = ["PAUSE", 3], re.PAUSE.toString = r, re.PAUSE.__enum__ = re, re.UNPAUSE = ["UNPAUSE", 4], re.UNPAUSE.toString = r, re.UNPAUSE.__enum__ = re, re.SUB_TYPE = function(t) {
    var e = ["SUB_TYPE", 5, t];
    return e.__enum__ = re, e.toString = r, e
  };
  var ae = n["awe6.interfaces.EScene"] = {
    __ename__: ["awe6", "interfaces", "EScene"],
    __constructs__: ["SPLASH", "INTRO", "SELECT_SESSION", "SELECT_STORY", "SELECT_LEVEL", "INSTRUCTIONS", "SETTINGS", "MENU", "AVATAR", "SHOP", "REWARDS", "LEADERBOARD", "GAME", "INTERSTITIAL", "CINEMATIC", "RESULTS", "EXIT", "TEST", "SUB_TYPE"]
  };
  ae.SPLASH = ["SPLASH", 0], ae.SPLASH.toString = r, ae.SPLASH.__enum__ = ae, ae.INTRO = ["INTRO", 1], ae.INTRO.toString = r, ae.INTRO.__enum__ = ae, ae.SELECT_SESSION = ["SELECT_SESSION", 2], ae.SELECT_SESSION.toString = r, ae.SELECT_SESSION.__enum__ = ae, ae.SELECT_STORY = ["SELECT_STORY", 3], ae.SELECT_STORY.toString = r, ae.SELECT_STORY.__enum__ = ae, ae.SELECT_LEVEL = ["SELECT_LEVEL", 4], ae.SELECT_LEVEL.toString = r, ae.SELECT_LEVEL.__enum__ = ae, ae.INSTRUCTIONS = ["INSTRUCTIONS", 5], ae.INSTRUCTIONS.toString = r, ae.INSTRUCTIONS.__enum__ = ae, ae.SETTINGS = ["SETTINGS", 6], ae.SETTINGS.toString = r, ae.SETTINGS.__enum__ = ae, ae.MENU = ["MENU", 7], ae.MENU.toString = r, ae.MENU.__enum__ = ae, ae.AVATAR = ["AVATAR", 8], ae.AVATAR.toString = r, ae.AVATAR.__enum__ = ae, ae.SHOP = ["SHOP", 9], ae.SHOP.toString = r, ae.SHOP.__enum__ = ae, ae.REWARDS = ["REWARDS", 10], ae.REWARDS.toString = r, ae.REWARDS.__enum__ = ae, ae.LEADERBOARD = ["LEADERBOARD", 11], ae.LEADERBOARD.toString = r, ae.LEADERBOARD.__enum__ = ae, ae.GAME = ["GAME", 12], ae.GAME.toString = r, ae.GAME.__enum__ = ae, ae.INTERSTITIAL = ["INTERSTITIAL", 13], ae.INTERSTITIAL.toString = r, ae.INTERSTITIAL.__enum__ = ae, ae.CINEMATIC = ["CINEMATIC", 14], ae.CINEMATIC.toString = r, ae.CINEMATIC.__enum__ = ae, ae.RESULTS = ["RESULTS", 15], ae.RESULTS.toString = r, ae.RESULTS.__enum__ = ae, ae.EXIT = ["EXIT", 16], ae.EXIT.toString = r, ae.EXIT.__enum__ = ae, ae.TEST = ["TEST", 17], ae.TEST.toString = r, ae.TEST.__enum__ = ae, ae.SUB_TYPE = function(t) {
    var e = ["SUB_TYPE", 18, t];
    return e.__enum__ = ae, e.toString = r, e
  };
  var _e = n["awe6.interfaces.ETextAlign"] = {
    __ename__: ["awe6", "interfaces", "ETextAlign"],
    __constructs__: ["JUSTIFY", "LEFT", "CENTER", "RIGHT"]
  };
  _e.JUSTIFY = ["JUSTIFY", 0], _e.JUSTIFY.toString = r, _e.JUSTIFY.__enum__ = _e, _e.LEFT = ["LEFT", 1], _e.LEFT.toString = r, _e.LEFT.__enum__ = _e, _e.CENTER = ["CENTER", 2], _e.CENTER.toString = r, _e.CENTER.__enum__ = _e, _e.RIGHT = ["RIGHT", 3], _e.RIGHT.toString = r, _e.RIGHT.__enum__ = _e;
  var oe = n["awe6.interfaces.ETextStyle"] = {
    __ename__: ["awe6", "interfaces", "ETextStyle"],
    __constructs__: ["BUTTON", "BODY", "HEADLINE", "SUBHEAD", "SMALLPRINT", "OVERSIZED", "SUB_TYPE"]
  };
  oe.BUTTON = ["BUTTON", 0], oe.BUTTON.toString = r, oe.BUTTON.__enum__ = oe, oe.BODY = ["BODY", 1], oe.BODY.toString = r, oe.BODY.__enum__ = oe, oe.HEADLINE = ["HEADLINE", 2], oe.HEADLINE.toString = r, oe.HEADLINE.__enum__ = oe, oe.SUBHEAD = ["SUBHEAD", 3], oe.SUBHEAD.toString = r, oe.SUBHEAD.__enum__ = oe, oe.SMALLPRINT = ["SMALLPRINT", 4], oe.SMALLPRINT.toString = r, oe.SMALLPRINT.__enum__ = oe, oe.OVERSIZED = ["OVERSIZED", 5], oe.OVERSIZED.toString = r, oe.OVERSIZED.__enum__ = oe, oe.SUB_TYPE = function(t) {
    var e = ["SUB_TYPE", 6, t];
    return e.__enum__ = oe, e.toString = r, e
  };
  var he = function(t) {
    this._context = new createjs.Container, this._session = t.get_session(), this._assets = t.assets, this._factory = t.factory, this._system = t.system, this._context.mouseChildren = !1, this._context.mouseEnabled = !1, I.call(this, t, null, this._context)
  };
  n["b10gph.AEntity"] = he, he.__name__ = ["b10gph", "AEntity"], he.__super__ = I, he.prototype = e(I.prototype, {
    __class__: he
  });
  var ue = function(t) {
    this._kernel = t, this._tools = this._kernel.tools, this._session = this._kernel.get_session(), this._assets = this._kernel.assets, this._factory = t.factory
  };
  n["b10gph.AVo"] = ue, ue.__name__ = ["b10gph", "AVo"], ue.prototype = {
    __class__: ue
  };
  var le = function(t) {
    xt.call(this, t)
  };
  n["b10gph.AssetManager"] = le, le.__name__ = ["b10gph", "AssetManager"], le.__super__ = xt, le.prototype = e(xt.prototype, {
    _init: function() {
      xt.prototype._init.call(this), this._factory = this._kernel.factory, this.overlayPauseUp = this._createView(ce.OVERLAY_PAUSE_UP), this.overlayPauseOver = this._createView(ce.OVERLAY_PAUSE_OVER)
    },
    get_buttonOver: function() {
      return this._createView(ce.BUTTON_OVER)
    },
    get_buttonUp: function() {
      return this._createView(ce.BUTTON_UP)
    },
    get_buttonTwitterOver: function() {
      return this._createView(ce.BUTTON_TWITTER_OVER)
    },
    get_buttonTwitterUp: function() {
      return this._createView(ce.BUTTON_TWITTER_UP)
    },
    get_buttonFacebookOver: function() {
      return this._createView(ce.BUTTON_FACEBOOK_OVER)
    },
    get_buttonFacebookUp: function() {
      return this._createView(ce.BUTTON_FACEBOOK_UP)
    },
    get_buttonSmallOver: function() {
      return this._createView(ce.BUTTON_SMALL_OVER)
    },
    get_buttonSmallUp: function() {
      return this._createView(ce.BUTTON_SMALL_UP)
    },
    _createView: function(t) {
      var e = new createjs.Container,
        s = new createjs.Bitmap(this.getAsset("assets/gui/Buttons.png"));
      switch (t[1]) {
        case 8:
          s.sourceRect = new createjs.Rectangle(400, 0, 50, 50);
          break;
        case 9:
          s.sourceRect = new createjs.Rectangle(450, 0, 50, 50);
          break;
        case 0:
          s.sourceRect = new createjs.Rectangle(0, 0, 200, 65);
          break;
        case 1:
          s.sourceRect = new createjs.Rectangle(200, 0, 200, 65);
          break;
        case 2:
          s.sourceRect = new createjs.Rectangle(400, 65, 100, 30);
          break;
        case 3:
          s.sourceRect = new createjs.Rectangle(400, 95, 100, 30);
          break;
        case 4:
          s.sourceRect = new createjs.Rectangle(0, 65, 65, 65);
          break;
        case 5:
          s.sourceRect = new createjs.Rectangle(65, 65, 65, 65);
          break;
        case 6:
          s.sourceRect = new createjs.Rectangle(130, 65, 65, 65);
          break;
        case 7:
          s.sourceRect = new createjs.Rectangle(195, 65, 65, 65)
      }
      return s.cache(0, 0, s.sourceRect.width, s.sourceRect.height), e.addChild(s), new jt(this._kernel, e)
    },
    __class__: le
  });
  var ce = n["b10gph.EAsset"] = {
    __ename__: ["b10gph", "EAsset"],
    __constructs__: ["BUTTON_UP", "BUTTON_OVER", "BUTTON_SMALL_UP", "BUTTON_SMALL_OVER", "BUTTON_TWITTER_UP", "BUTTON_TWITTER_OVER", "BUTTON_FACEBOOK_UP", "BUTTON_FACEBOOK_OVER", "OVERLAY_PAUSE_UP", "OVERLAY_PAUSE_OVER"]
  };
  ce.BUTTON_UP = ["BUTTON_UP", 0], ce.BUTTON_UP.toString = r, ce.BUTTON_UP.__enum__ = ce, ce.BUTTON_OVER = ["BUTTON_OVER", 1], ce.BUTTON_OVER.toString = r, ce.BUTTON_OVER.__enum__ = ce, ce.BUTTON_SMALL_UP = ["BUTTON_SMALL_UP", 2], ce.BUTTON_SMALL_UP.toString = r, ce.BUTTON_SMALL_UP.__enum__ = ce, ce.BUTTON_SMALL_OVER = ["BUTTON_SMALL_OVER", 3], ce.BUTTON_SMALL_OVER.toString = r, ce.BUTTON_SMALL_OVER.__enum__ = ce, ce.BUTTON_TWITTER_UP = ["BUTTON_TWITTER_UP", 4], ce.BUTTON_TWITTER_UP.toString = r, ce.BUTTON_TWITTER_UP.__enum__ = ce, ce.BUTTON_TWITTER_OVER = ["BUTTON_TWITTER_OVER", 5], ce.BUTTON_TWITTER_OVER.toString = r, ce.BUTTON_TWITTER_OVER.__enum__ = ce, ce.BUTTON_FACEBOOK_UP = ["BUTTON_FACEBOOK_UP", 6], ce.BUTTON_FACEBOOK_UP.toString = r, ce.BUTTON_FACEBOOK_UP.__enum__ = ce,
    ce.BUTTON_FACEBOOK_OVER = ["BUTTON_FACEBOOK_OVER", 7], ce.BUTTON_FACEBOOK_OVER.toString = r, ce.BUTTON_FACEBOOK_OVER.__enum__ = ce, ce.OVERLAY_PAUSE_UP = ["OVERLAY_PAUSE_UP", 8], ce.OVERLAY_PAUSE_UP.toString = r, ce.OVERLAY_PAUSE_UP.__enum__ = ce, ce.OVERLAY_PAUSE_OVER = ["OVERLAY_PAUSE_OVER", 9], ce.OVERLAY_PAUSE_OVER.toString = r, ce.OVERLAY_PAUSE_OVER.__enum__ = ce;
  var de = function(t, e, s) {
    this.COLOR_GREY = 5789784, this.COLOR_WHITE = 16777215, this.TEXTSTYLE_HUD_COINS = oe.SUB_TYPE("HUD_COINS"), this.TEXTSTYLE_HUD_SCORE = oe.SUB_TYPE("HUD_SCORE"), this.TEXTSTYLE_HUD_MESSAGE = oe.SUB_TYPE("HUD_MESSAGE"), this.MESSAGE_FINISH_LINE = se.SUB_TYPE("FINISH_LINE"), Pt.call(this, t, e, s)
  };
  n["b10gph.Factory"] = de, de.__name__ = ["b10gph", "Factory"], de.__super__ = Pt, de.prototype = e(Pt.prototype, {
    _configurer: function(t) {
      if (null == t && (t = !1), t) {
        this.id = "b10gph";
        var e = "1",
          s = vs.getString("revision");
        null != s && (e = vs.getString("revision").split("\n")[0]), this.version = "1.1." + e + "-kiz", this.author = "b10b.com", this.isDecached = !1, this.width = 720, this.height = 405, this.joypadTouchType = te.JOYSTICK(30), this.bgColor = 1644825, this.startingSceneType = ae.INTRO, this.targetFramerate = 30, this.isFixedUpdates = !0
      }
    },
    _launchKernel: function() {
      Pt.prototype._launchKernel.call(this), this._kernel.set_session(this.createSession("defaultSessionId")), "true" == this._kernel.getConfig("settings.disableEyeCandy") && this._kernel.set_isEyeCandy(!1)
    },
    createAssetManager: function() {
      return null == this._assets && (this._assets = new le(this._kernel)), this._assets
    },
    createLogger: function() {
      var t = d.string(this._kernel.getConfig("settings.googleAnalytics.id"));
      return "" != t ? new ge(this._kernel, t) : Pt.prototype.createLogger.call(this)
    },
    createOverlay: function() {
      var t = new Ze(this._kernel);
      return t
    },
    createPreloader: function() {
      return new fe(this._kernel, this._getAssetUrls(), this.isDecached)
    },
    createScene: function(t) {
      switch (this._kernel.log("scene: " + d.string(t)), t[1]) {
        case 1:
          return new hs(this._kernel, t);
        case 7:
          return new us(this._kernel, t);
        case 5:
          return new _s(this._kernel, t);
        case 4:
          return new ds(this._kernel, t);
        case 12:
          return new as(this._kernel, t);
        case 13:
          return new os(this._kernel, t);
        case 15:
          return new ls(this._kernel, t);
        case 9:
          return new gs(this._kernel, t)
      }
      return Pt.prototype.createScene.call(this, t)
    },
    createSceneTransition: function(t, e) {
      var s = new cs(this._kernel);
      return s
    },
    createSession: function(t) {
      return new Ee(this._kernel, t)
    },
    createTextStyle: function(t) {
      null == t && (t = oe.BODY);
      var e, s = this._kernel.getConfig("settings.font.name"),
        i = [0, 2, 2, 0],
        n = !0;
      if (null != t) switch (t[1]) {
        case 1:
          e = new J(s, 16, this.COLOR_WHITE, !1, n, _e.LEFT, 0, 18, 0, []);
          break;
        case 2:
          e = new J(s, 24, this.COLOR_WHITE, !1, n, _e.LEFT, 0, 0, 0, []);
          break;
        case 3:
          e = new J(s, 18, this.COLOR_WHITE, !1, n, _e.LEFT, 0, 20, 0, []);
          break;
        case 0:
          e = new J(s, 20, this.COLOR_WHITE, !1, n, _e.CENTER, 100, 0, 0, []);
          break;
        case 4:
          e = new J(s, 11, this.COLOR_GREY, !1, n, _e.LEFT, 0, 0, 0, []);
          break;
        case 5:
          e = new J(s, 24, this.COLOR_WHITE, !1, n, _e.RIGHT, 0, 0, 0, []);
          break;
        case 6:
          var r = t[2];
          switch (r) {
            case "PRELOADER":
              e = new J(s, 14, this.COLOR_WHITE, !1, n, _e.CENTER, 0, 0, 0, i);
              break;
            case "HUD_MESSAGE":
              e = new J(s, 30, this.COLOR_WHITE, !1, n, _e.CENTER, 0, 0, 0, []);
              break;
            case "HUD_SCORE":
              e = new J(s, 24, this.COLOR_WHITE, !1, n, _e.LEFT, 0, 0, 0, []);
              break;
            case "HUD_COINS":
              e = new J(s, 24, this.COLOR_WHITE, !1, n, _e.RIGHT, 0, 0, 0, []);
              break;
            default:
              e = null
          }
          break;
        default:
          e = new J(s, 12, 8421504)
      } else e = new J(s, 12, 8421504);
      return e
    },
    getBackSceneType: function(t) {
      switch (t[1]) {
        case 5:
        case 4:
        case 12:
        case 13:
        case 15:
        case 9:
          return ae.MENU
      }
      return Pt.prototype.getBackSceneType.call(this, t)
    },
    getNextSceneType: function(t) {
      switch (t[1]) {
        case 1:
          return ae.MENU;
        case 7:
        case 5:
          return ae.SELECT_LEVEL;
        case 4:
          return ae.GAME;
        case 12:
          return ae.RESULTS;
        case 13:
          return ae.SHOP;
        case 15:
          return ae.SHOP;
        case 9:
          return ae.SELECT_LEVEL
      }
      return Pt.prototype.getNextSceneType.call(this, t)
    },
    createCanvas: function(t, e) {
      var s = window.document.createElement("canvas");
      return s.width = t, s.height = e, s
    },
    __class__: de
  });
  var ge = function(t, e) {
    if (this._kernel = t, this._id = e, this._factory = this._kernel.factory, this._isTrackerEnabled = !t.isLocal && "true" == t.getConfig("settings.googleAnalytics.enabled"), this._isTrackerEnabled) try {
      this._gaLib = ga, this._gaLib("create", this._id, "auto"), this._gaLib("send", "pageview"), ys.trace("Google Analytics enabled with property ID " + this._id, {
        fileName: "LoggerGoogleAnalytics.hx",
        lineNumber: 40,
        className: "b10gph.LoggerGoogleAnalytics",
        methodName: "new"
      })
    } catch (s) {
      s instanceof Ps && (s = s.val), this._isTrackerEnabled = !1, ys.trace("Google Analytics failed with property ID " + this._id, {
        fileName: "LoggerGoogleAnalytics.hx",
        lineNumber: 45,
        className: "b10gph.LoggerGoogleAnalytics",
        methodName: "new"
      })
    }
  };
  n["b10gph.LoggerGoogleAnalytics"] = ge, ge.__name__ = ["b10gph", "LoggerGoogleAnalytics"], ge.__interfaces__ = [gt], ge.prototype = {
    log: function(t) {
      var e = (o.substr(d.string(t), 0, 25), d.string(t).split(": "));
      this._isTrackerEnabled ? this._gaLib("send", {
        hitType: "event",
        eventCategory: e[0],
        eventAction: e[1],
        eventLabel: e[2]
      }) : ys.trace("Logger:" + d.string([e[0], e[1], e[2]]), {
        fileName: "LoggerGoogleAnalytics.hx",
        lineNumber: 65,
        className: "b10gph.LoggerGoogleAnalytics",
        methodName: "log"
      })
    },
    __class__: ge
  };
  var pe = function() {};
  n["b10gph.Main"] = pe, pe.__name__ = ["b10gph", "Main"], pe.main = function() {
    var t = !1,
      e = new createjs.Stage(window.document.getElementById("gameCanvas")),
      s = new createjs.Container;
    e.addChild(s), pe.factory = new de(s, t, vs.getString("config"))
  };
  var fe = function(t, e, s) {
    Yt.call(this, t, e, s)
  };
  n["b10gph.Preloader"] = fe, fe.__name__ = ["b10gph", "Preloader"], fe.__super__ = Yt, fe.prototype = e(Yt.prototype, {
    _init: function() {
      this._factory = this._kernel.factory, this._proprietaryAudioFormat = "m4a";
      var t = new createjs.Bitmap("assets/__PreloaderBg.png");
      Yt.prototype._init.call(this);
      var e = 2,
        s = this._kernel.factory.width - 40,
        i = 10;
      this._bg = new createjs.Shape, this._bg.graphics.beginFill("#ffffff"), this._bg.graphics.drawRoundRect(-e, -e, s + e + e, i + e + e, e + e), this._bg.graphics.endFill(), this._fg = new createjs.Shape, this._fg.graphics.beginFill("#e5bb1f"), this._fg.graphics.drawRoundRect(0, 0, s, i, e + e), this._fg.graphics.endFill(), this._bg.x = this._fg.x = .5 * (this._kernel.factory.width - s), this._bg.y = this._fg.y = this._kernel.factory.height - 20 - i - e, this._context.addChild(t), this._context.addChild(this._bg), this._context.addChild(this._fg);
      var n = {
          images: ["assets/__PreloaderFg.png"],
          frames: {
            width: 150,
            height: 32
          },
          framerate: 10
        },
        r = new createjs.SpriteSheet(n),
        a = new createjs.Sprite(r, 0);
      a.play(), a.x = .5 * (this._kernel.factory.width - 150), a.y = 327, this._context.addChild(a)
    },
    _updater: function(t) {
      null == t && (t = 0), Yt.prototype._updater.call(this, t), this._fg.scaleX = this.get_progress()
    },
    _showAudioHoldMessage: function() {
      var t = new es(this._kernel, this._kernel.factory.width, 20, d.string(this._kernel.getConfig("gui.audioHoldMessage")).toUpperCase(), this._kernel.factory.createTextStyle(oe.SUB_TYPE("PRELOADER")));
      t.setPosition(0, this._bg.y - 10), this.get_view().addChild(t.get_view()), this._context.removeChild(this._bg), this._context.removeChild(this._fg)
    },
    __class__: fe
  });
  var Ee = function(t, e) {
    Vt.call(this, t, e)
  };
  n["b10gph.Session"] = Ee, Ee.__name__ = ["b10gph", "Session"], Ee.__super__ = Vt, Ee.prototype = e(Vt.prototype, {
    _init: function() {
      this._version = 1, Vt.prototype._init.call(this), this._initApi()
    },
    _getter: function() {
      Vt.prototype._getter.call(this), this.level = this._getValidatedInteger(this._data.level), this.upgradeSpeed = this._getValidatedInteger(this._data.upgradeSpeed), this.upgradeSteering = this._getValidatedInteger(this._data.upgradeSteering), this.upgradeAcceleration = this._getValidatedInteger(this._data.upgradeAcceleration), this.upgradeBoost = this._getValidatedInteger(this._data.upgradeBoost), this.scoreLevel0 = this._getValidatedInteger(this._data.scoreLevel0), this.scoreLevel1 = this._getValidatedInteger(this._data.scoreLevel1), this.scoreLevel2 = this._getValidatedInteger(this._data.scoreLevel2), this.scoreLevel3 = this._getValidatedInteger(this._data.scoreLevel3), this.highScore = this._getValidatedInteger(this._data.highScore), this.coins = this._getValidatedInteger(this._data.coins)
    },
    _getValidatedInteger: function(t) {
      return null == t || isNaN(t) ? 0 : t
    },
    _setter: function() {
      Vt.prototype._setter.call(this), this._data.level = this.level, this._data.upgradeSpeed = this.upgradeSpeed, this._data.upgradeSteering = this.upgradeSteering, this._data.upgradeAcceleration = this.upgradeAcceleration, this._data.upgradeBoost = this.upgradeBoost, this._data.scoreLevel0 = this.scoreLevel0, this._data.scoreLevel1 = this.scoreLevel1, this._data.scoreLevel2 = this.scoreLevel2, this._data.scoreLevel3 = this.scoreLevel3, this._data.highScore = this.highScore, this._data.coins = this.coins
    },
    _resetter: function() {
      Vt.prototype._resetter.call(this), this.cache = new ye(this._kernel), this.level = d["int"](this._tools.limit(d.parseInt(this._kernel.getConfig("settings.startingLevel")), 0, 3)), this.highScore = 0, this.upgradeSpeed = 0, this.upgradeSteering = 0, this.upgradeAcceleration = 0, this.upgradeBoost = 0, this.coins = 0, this.resetGame()
    },
    resetGame: function() {
      this.scoreLevel0 = 0, this.scoreLevel1 = 0, this.scoreLevel2 = 0, this.scoreLevel3 = 0
    },
    setScore: function(t, e) {
      switch (t) {
        case 0:
          this.scoreLevel0 = e;
          break;
        case 1:
          this.scoreLevel1 = e;
          break;
        case 2:
          this.scoreLevel2 = e;
          break;
        case 3:
          this.scoreLevel3 = e;
          break;
        default:
          this.scoreLevel3 = e
      }
    },
    getScore: function(t) {
      switch (t) {
        case 0:
          return this.scoreLevel0;
        case 1:
          return this.scoreLevel1;
        case 2:
          return this.scoreLevel2;
        case 3:
          return this.scoreLevel3;
        default:
          return this.scoreLevel3
      }
    },
    setUpgrade: function(t, e) {
      switch (0 > e && (e = 0), e > 4 && (e = 4), t[1]) {
        case 0:
          this.upgradeSpeed = e;
          break;
        case 1:
          this.upgradeSteering = e;
          break;
        case 2:
          this.upgradeAcceleration = e;
          break;
        case 3:
          this.upgradeBoost = e
      }
    },
    getUpgrade: function(t) {
      switch (t[1]) {
        case 0:
          return this.upgradeSpeed;
        case 1:
          return this.upgradeSteering;
        case 2:
          return this.upgradeAcceleration;
        case 3:
          return this.upgradeBoost
      }
    },
    getUpgradeBias: function(t, e, s) {
      var i = s - e,
        n = e + this.getUpgrade(t) / 4 * i;
      return n
    },
    setIsTester: function(t) {
      this._isTester = t
    },
    get_isTester: function() {
      return this._kernel.isDebug || this._isTester
    },
    getPercentageComplete: function() {
      return (this.upgradeSpeed + this.upgradeSteering + this.upgradeAcceleration + this.upgradeBoost) / 16
    },
    _initApi: function() {
      if ("defaultSessionId" == this.id) try {} catch (t) {
        t instanceof Ps && (t = t.val)
      }
    },
    sendApiScore: function(t) {
      ys.trace("sending score: " + t, {
        fileName: "Session.hx",
        lineNumber: 183,
        className: "b10gph.Session",
        methodName: "sendApiScore"
      });
      try {
        Kiz10API.submitStat("score", t)
      } catch (e) {
        e instanceof Ps && (e = e.val)
      }
    },
    __class__: Ee
  });
  var ye = function(t) {
    this._kernel = t, this.totalPlays = 0, this.benchmark = 0, this.debugMessage = ""
  };
  n["b10gph._Session._HelperCache"] = ye, ye.__name__ = ["b10gph", "_Session", "_HelperCache"], ye.prototype = {
    __class__: ye
  };
  var ve = function(t, e) {
    this._trackLength = e, he.call(this, t)
  };
  n["b10gph.game.Camera"] = ve, ve.__name__ = ["b10gph", "game", "Camera"], ve.__super__ = he, ve.prototype = e(he.prototype, {
    _init: function() {
      he.prototype._init.call(this), this.drawDistance = 80, this.fieldOfView = 120, this.fogDensity = 5, this.height = 1440, this.depth = 1 / Math.tan(this.fieldOfView / 2 * Math.PI / 180), this.position = 0, this.angle = .135
    },
    _updater: function(t) {
      null == t && (t = 0), he.prototype._updater.call(this, t), 1 == this._updates && (this.height = 5e3), this.height = .95 * this.height + 72 | 0
    },
    increasePosition: function(t, e) {
      null == e && (e = 0), null == t && (t = 0), this.position += t, this.angle = this._tools.range(this.angle + e, 0, 1)
    },
    __class__: ve
  });
  var me = function(t, e, s, i) {
    this.type = t, this.offset = e, this.z = s, this.speed = i, this.percent = 0, this.steer = 0
  };
  n["b10gph.game.Car"] = me, me.__name__ = ["b10gph", "game", "Car"], me.prototype = {
    __class__: me
  };
  var we = function(t) {
    if (this._kernel = t, this.isEnabled = !1, this.motionRelative = 0, this._parentOrientation = "", this._isIos = new _("iP[ao]d|iPhone", "i").match(window.navigator.userAgent), this._isOrientationApproximation = "true" == this._kernel.getConfig("settings.orientationApproximation"), "true" != this._kernel.getConfig("settings.disableDeviceMotion")) try {
      this._orientation = this._getOrientation(), window.MessageEvent && window.addEventListener("message", i(this, this._onMessage), !1), window.DeviceMotionEvent && window.addEventListener("devicemotion", i(this, this._onDeviceMotion), !1), this.isEnabled = !0
    } catch (e) {
      e instanceof Ps && (e = e.val), this.isEnabled = !1
    }
  };
  n["b10gph.game.DeviceMotion"] = we, we.__name__ = ["b10gph", "game", "DeviceMotion"], we.prototype = {
    dispose: function() {
      this.isEnabled = !1;
      try {
        window.MessageEvent && window.removeEventListener("message", i(this, this._onMessage), !1), window.DeviceMotionEvent && window.removeEventListener("devicemotion", i(this, this._onDeviceMotion), !1)
      } catch (t) {
        t instanceof Ps && (t = t.val)
      }
    },
    _onMessage: function(t) {
      null != t.data.orientation && (this._parentOrientation = t.data.orientation)
    },
    _onDeviceMotion: function(t) {
      this._orientation = this._getOrientation(), this.motionRelative = 0, "landscape" == this._orientation || "landscape-primary" == this._orientation || "90" == this._orientation ? this.motionRelative = t.accelerationIncludingGravity.y : "landscape-secondary" == this._orientation || "-90" == this._orientation ? this.motionRelative = -t.accelerationIncludingGravity.y : "portrait" == this._orientation || "portrait-primary" == this._orientation || "0" == this._orientation ? this.motionRelative = -t.accelerationIncludingGravity.x : "portrait-secondary" == this._orientation || "180" == this._orientation ? this.motionRelative = t.accelerationIncludingGravity.x : this.motionRelative = -t.accelerationIncludingGravity.y, this.motionRelative = Math.max(Math.min(this.motionRelative / 3, 1), -1) * (this._isIos ? -1 : 1)
    },
    _getOrientation: function() {
      var t = "";
      return t = this._getWindowOrientation(window.top), "" == t && (t = "" != this._parentOrientation ? this._parentOrientation : this._isOrientationApproximation ? window.innerWidth > window.innerHeight ? "90" : "0" : this._getWindowOrientation(window)), t
    },
    _getWindowOrientation: function(t) {
      var e = "";
      try {
        null != t.screen.orientation ? (e = t.screen.orientation, null != t.screen.orientation.type && (e = t.screen.orientation.type)) : null != t.screen.mozOrientation ? e = t.screen.mozOrientation : null != t.screen.msOrientation ? e = t.screen.msOrientation : null != t.orientation && (e = t.orientation)
      } catch (s) {
        s instanceof Ps && (s = s.val)
      }
      return e
    },
    __class__: we
  };
  var Se = n["b10gph.game.ECar"] = {
    __ename__: ["b10gph", "game", "ECar"],
    __constructs__: ["CAR_A", "CAR_B", "CAR_C", "CAR_D", "CAR_E"]
  };
  Se.CAR_A = ["CAR_A", 0], Se.CAR_A.toString = r, Se.CAR_A.__enum__ = Se, Se.CAR_B = ["CAR_B", 1], Se.CAR_B.toString = r, Se.CAR_B.__enum__ = Se, Se.CAR_C = ["CAR_C", 2], Se.CAR_C.toString = r, Se.CAR_C.__enum__ = Se, Se.CAR_D = ["CAR_D", 3], Se.CAR_D.toString = r, Se.CAR_D.__enum__ = Se, Se.CAR_E = ["CAR_E", 4], Se.CAR_E.toString = r, Se.CAR_E.__enum__ = Se;
  var Te = n["b10gph.game.EColor"] = {
    __ename__: ["b10gph", "game", "EColor"],
    __constructs__: ["COLOR_FOG", "COLOR_LIGHT", "COLOR_DARK", "COLOR_START", "COLOR_FINISH"]
  };
  Te.COLOR_FOG = ["COLOR_FOG", 0], Te.COLOR_FOG.toString = r, Te.COLOR_FOG.__enum__ = Te, Te.COLOR_LIGHT = ["COLOR_LIGHT", 1], Te.COLOR_LIGHT.toString = r, Te.COLOR_LIGHT.__enum__ = Te, Te.COLOR_DARK = ["COLOR_DARK", 2], Te.COLOR_DARK.toString = r, Te.COLOR_DARK.__enum__ = Te, Te.COLOR_START = ["COLOR_START", 3], Te.COLOR_START.toString = r, Te.COLOR_START.__enum__ = Te, Te.COLOR_FINISH = ["COLOR_FINISH", 4], Te.COLOR_FINISH.toString = r, Te.COLOR_FINISH.__enum__ = Te;
  var be = n["b10gph.game.ELocation"] = {
    __ename__: ["b10gph", "game", "ELocation"],
    __constructs__: ["LOCATION_A", "LOCATION_B", "LOCATION_C", "LOCATION_D"]
  };
  be.LOCATION_A = ["LOCATION_A", 0], be.LOCATION_A.toString = r, be.LOCATION_A.__enum__ = be, be.LOCATION_B = ["LOCATION_B", 1], be.LOCATION_B.toString = r, be.LOCATION_B.__enum__ = be, be.LOCATION_C = ["LOCATION_C", 2], be.LOCATION_C.toString = r, be.LOCATION_C.__enum__ = be, be.LOCATION_D = ["LOCATION_D", 3], be.LOCATION_D.toString = r, be.LOCATION_D.__enum__ = be;
  var Ce = n["b10gph.game.ERoad"] = {
    __ename__: ["b10gph", "game", "ERoad"],
    __constructs__: ["ROAD_NONE", "ROAD_LEFT_SHORT", "ROAD_LEFT_MEDIUM", "ROAD_LEFT_LONG", "ROAD_RIGHT_SHORT", "ROAD_RIGHT_MEDIUM", "ROAD_RIGHT_LONG"]
  };
  Ce.ROAD_NONE = ["ROAD_NONE", 0], Ce.ROAD_NONE.toString = r, Ce.ROAD_NONE.__enum__ = Ce, Ce.ROAD_LEFT_SHORT = ["ROAD_LEFT_SHORT", 1], Ce.ROAD_LEFT_SHORT.toString = r, Ce.ROAD_LEFT_SHORT.__enum__ = Ce, Ce.ROAD_LEFT_MEDIUM = ["ROAD_LEFT_MEDIUM", 2], Ce.ROAD_LEFT_MEDIUM.toString = r, Ce.ROAD_LEFT_MEDIUM.__enum__ = Ce, Ce.ROAD_LEFT_LONG = ["ROAD_LEFT_LONG", 3], Ce.ROAD_LEFT_LONG.toString = r, Ce.ROAD_LEFT_LONG.__enum__ = Ce, Ce.ROAD_RIGHT_SHORT = ["ROAD_RIGHT_SHORT", 4], Ce.ROAD_RIGHT_SHORT.toString = r, Ce.ROAD_RIGHT_SHORT.__enum__ = Ce, Ce.ROAD_RIGHT_MEDIUM = ["ROAD_RIGHT_MEDIUM", 5], Ce.ROAD_RIGHT_MEDIUM.toString = r, Ce.ROAD_RIGHT_MEDIUM.__enum__ = Ce, Ce.ROAD_RIGHT_LONG = ["ROAD_RIGHT_LONG", 6], Ce.ROAD_RIGHT_LONG.toString = r, Ce.ROAD_RIGHT_LONG.__enum__ = Ce;
  var Ae = n["b10gph.game.EScenery"] = {
    __ename__: ["b10gph", "game", "EScenery"],
    __constructs__: ["SCENERY_COIN", "SCENERY_AFTERBURNER", "SCENERY_TIRE_1", "SCENERY_TIRE_2", "SCENERY_BOOST", "SCENERY_TREE_1", "SCENERY_TREE_2", "SCENERY_TREE_3", "SCENERY_TREE_4", "SCENERY_TREE_5", "SCENERY_TREE_6", "SCENERY_TREE_7", "SCENERY_TREE_8", "SCENERY_FLOODLIGHT", "SCENERY_TUNNEL_LEFT", "SCENERY_TUNNEL_RIGHT", "SCENERY_FINISH_LEFT", "SCENERY_FINISH_RIGHT", "SCENERY_SIDING_LEFT", "SCENERY_SIDING_RIGHT", "SCENERY_STADIUM_LEFT", "SCENERY_STADIUM_RIGHT"]
  };
  Ae.SCENERY_COIN = ["SCENERY_COIN", 0], Ae.SCENERY_COIN.toString = r, Ae.SCENERY_COIN.__enum__ = Ae, Ae.SCENERY_AFTERBURNER = ["SCENERY_AFTERBURNER", 1], Ae.SCENERY_AFTERBURNER.toString = r, Ae.SCENERY_AFTERBURNER.__enum__ = Ae, Ae.SCENERY_TIRE_1 = ["SCENERY_TIRE_1", 2], Ae.SCENERY_TIRE_1.toString = r, Ae.SCENERY_TIRE_1.__enum__ = Ae, Ae.SCENERY_TIRE_2 = ["SCENERY_TIRE_2", 3], Ae.SCENERY_TIRE_2.toString = r, Ae.SCENERY_TIRE_2.__enum__ = Ae, Ae.SCENERY_BOOST = ["SCENERY_BOOST", 4], Ae.SCENERY_BOOST.toString = r, Ae.SCENERY_BOOST.__enum__ = Ae, Ae.SCENERY_TREE_1 = ["SCENERY_TREE_1", 5], Ae.SCENERY_TREE_1.toString = r, Ae.SCENERY_TREE_1.__enum__ = Ae, Ae.SCENERY_TREE_2 = ["SCENERY_TREE_2", 6], Ae.SCENERY_TREE_2.toString = r, Ae.SCENERY_TREE_2.__enum__ = Ae, Ae.SCENERY_TREE_3 = ["SCENERY_TREE_3", 7], Ae.SCENERY_TREE_3.toString = r, Ae.SCENERY_TREE_3.__enum__ = Ae, Ae.SCENERY_TREE_4 = ["SCENERY_TREE_4", 8], Ae.SCENERY_TREE_4.toString = r, Ae.SCENERY_TREE_4.__enum__ = Ae, Ae.SCENERY_TREE_5 = ["SCENERY_TREE_5", 9], Ae.SCENERY_TREE_5.toString = r, Ae.SCENERY_TREE_5.__enum__ = Ae, Ae.SCENERY_TREE_6 = ["SCENERY_TREE_6", 10], Ae.SCENERY_TREE_6.toString = r, Ae.SCENERY_TREE_6.__enum__ = Ae, Ae.SCENERY_TREE_7 = ["SCENERY_TREE_7", 11], Ae.SCENERY_TREE_7.toString = r, Ae.SCENERY_TREE_7.__enum__ = Ae, Ae.SCENERY_TREE_8 = ["SCENERY_TREE_8", 12], Ae.SCENERY_TREE_8.toString = r, Ae.SCENERY_TREE_8.__enum__ = Ae, Ae.SCENERY_FLOODLIGHT = ["SCENERY_FLOODLIGHT", 13], Ae.SCENERY_FLOODLIGHT.toString = r, Ae.SCENERY_FLOODLIGHT.__enum__ = Ae, Ae.SCENERY_TUNNEL_LEFT = ["SCENERY_TUNNEL_LEFT", 14], Ae.SCENERY_TUNNEL_LEFT.toString = r, Ae.SCENERY_TUNNEL_LEFT.__enum__ = Ae, Ae.SCENERY_TUNNEL_RIGHT = ["SCENERY_TUNNEL_RIGHT", 15], Ae.SCENERY_TUNNEL_RIGHT.toString = r, Ae.SCENERY_TUNNEL_RIGHT.__enum__ = Ae, Ae.SCENERY_FINISH_LEFT = ["SCENERY_FINISH_LEFT", 16], Ae.SCENERY_FINISH_LEFT.toString = r, Ae.SCENERY_FINISH_LEFT.__enum__ = Ae, Ae.SCENERY_FINISH_RIGHT = ["SCENERY_FINISH_RIGHT", 17], Ae.SCENERY_FINISH_RIGHT.toString = r, Ae.SCENERY_FINISH_RIGHT.__enum__ = Ae, Ae.SCENERY_SIDING_LEFT = ["SCENERY_SIDING_LEFT", 18], Ae.SCENERY_SIDING_LEFT.toString = r, Ae.SCENERY_SIDING_LEFT.__enum__ = Ae, Ae.SCENERY_SIDING_RIGHT = ["SCENERY_SIDING_RIGHT", 19], Ae.SCENERY_SIDING_RIGHT.toString = r, Ae.SCENERY_SIDING_RIGHT.__enum__ = Ae, Ae.SCENERY_STADIUM_LEFT = ["SCENERY_STADIUM_LEFT", 20], Ae.SCENERY_STADIUM_LEFT.toString = r, Ae.SCENERY_STADIUM_LEFT.__enum__ = Ae, Ae.SCENERY_STADIUM_RIGHT = ["SCENERY_STADIUM_RIGHT", 21], Ae.SCENERY_STADIUM_RIGHT.toString = r, Ae.SCENERY_STADIUM_RIGHT.__enum__ = Ae;
  var Re = n["b10gph.game.EUpgrade"] = {
    __ename__: ["b10gph", "game", "EUpgrade"],
    __constructs__: ["UPGRADE_SPEED", "UPGRADE_STEERING", "UPGRADE_ACCELERATION", "UPGRADE_BOOST"]
  };
  Re.UPGRADE_SPEED = ["UPGRADE_SPEED", 0], Re.UPGRADE_SPEED.toString = r, Re.UPGRADE_SPEED.__enum__ = Re, Re.UPGRADE_STEERING = ["UPGRADE_STEERING", 1], Re.UPGRADE_STEERING.toString = r, Re.UPGRADE_STEERING.__enum__ = Re, Re.UPGRADE_ACCELERATION = ["UPGRADE_ACCELERATION", 2], Re.UPGRADE_ACCELERATION.toString = r, Re.UPGRADE_ACCELERATION.__enum__ = Re, Re.UPGRADE_BOOST = ["UPGRADE_BOOST", 3], Re.UPGRADE_BOOST.toString = r, Re.UPGRADE_BOOST.__enum__ = Re;
  var Ie = function(t, e, s, i) {
    null == i && (i = 1), this._kernel = t, this._width = e, this._height = s, this._brightness = i, this._x = 0, this._y = 0, this._dirtAlpha = 0, this._hyp = 1.75 * Math.sqrt(this._width * this._width + this._height * this._height), this._lenses = [];
    for (var n = [.75, 0, .25, .35, .55, .65, .75, .9, 1], r = 0, a = n.length; a > r;) {
      var _ = r++,
        o = new ke;
      o.deviation = n[_], o.sprite = this._getSprite(_), this._lenses.push(o)
    }
    var h = new createjs.Bitmap(this._kernel.assets.getAsset("assets/location/LensFlares.jpg"));
    this._spriteSource = h.image;
    var u = new createjs.Bitmap(this._kernel.assets.getAsset("assets/location/LensDirt.jpg"));
    this._dirtSource = u.image
  };
  n["b10gph.game.Lensflare"] = Ie, Ie.__name__ = ["b10gph", "game", "Lensflare"], Ie.prototype = {
    _getSprite: function(t) {
      var e = {
        x: 0,
        y: 0,
        w: 256,
        h: 256
      };
      switch (t) {
        case 0:
        case 4:
          e.x = 0;
          break;
        case 1:
        case 5:
          e.x = 256;
          break;
        case 2:
        case 6:
          e.x = 512;
          break;
        case 3:
        case 7:
          e.x = 768;
          break;
        default:
          e.x = 0
      }
      switch (t) {
        case 4:
        case 5:
        case 6:
        case 7:
          e.y = 256;
          break;
        default:
          e.y = 0
      }
      return e
    },
    draw: function(t, e, s) {
      this._x = (e + 512) % 1024, this._y = s;
      var i = 2 * (this._x - .5 * this._width),
        n = 2 * (this._y - .5 * this._height),
        r = Math.sqrt(i * i + n * n) / this._hyp,
        a = this._brightness - 2.5 * r * this._brightness;
      if (a > .25 && (a = .25), 0 > a && (a = 0), t.save(), t.globalCompositeOperation = "lighter", a > 0) {
        t.globalAlpha = a;
        for (var _ = 0, o = this._lenses; _ < o.length;) {
          var h = o[_];
          ++_;
          var u = Math.round(this._x + Math.round(h.deviation * -i) - 128),
            l = Math.round(this._y + Math.round(.9 * h.deviation * -n) - 128);
          t.drawImage(this._spriteSource, h.sprite.x, h.sprite.y, h.sprite.w, h.sprite.h, u, l, 256, 256)
        }
      }
      this._dirtAlpha = .5 * this._dirtAlpha + .5 * a, t.globalAlpha = this._dirtAlpha, t.drawImage(this._dirtSource, 0, 0, this._dirtSource.width, this._dirtSource.height, 0, 0, this._width, this._height), t.restore()
    },
    __class__: Ie
  };
  var ke = function() {};
  n["b10gph.game._Lensflare._HelperLens"] = ke, ke.__name__ = ["b10gph", "game", "_Lensflare", "_HelperLens"], ke.prototype = {
    __class__: ke
  };
  var Ne = function(t, e) {
    this.type = e, he.call(this, t)
  };
  n["b10gph.game.Location"] = Ne, Ne.__name__ = ["b10gph", "game", "Location"], Ne.__super__ = he, Ne.prototype = e(he.prototype, {
    _init: function() {
      he.prototype._init.call(this), this.vo = new De(this._kernel, this.type), this.addEntity(this._track = new Me(this._kernel, this.vo)), this.addEntity(this._camera = new ve(this._kernel, this._track.totalDistance)), this.addEntity(this._player = new xe(this._kernel, this._track, this._camera));
      var t;
      t = this._system.isDesktop ? 1 : .7;
      var e = Math.ceil(this._factory.width * t),
        s = Math.ceil(this._factory.height * t);
      this.addEntity(this._renderer = new Ue(this._kernel, this._track, this._camera, this._player, e, s), null, !0), this._renderer._context.scaleX = this._factory.width / e, this._renderer._context.scaleY = this._factory.height / s
    },
    getScore: function() {
      return this._player.score + 1
    },
    getCars: function() {
      for (var t = [], e = 0, s = this._track.cars; e < s.length;) {
        var i = s[e];
        ++e, t.push({
          type: i.type,
          position: i.z / (this._track.maxSegments * this._track.segmentDistance),
          offset: i.offset
        })
      }
      return t.push({
        type: Se.CAR_A,
        position: this._camera.position / (this._track.maxSegments * this._track.segmentDistance),
        offset: this._player.x
      }), t
    },
    __class__: Ne
  });
  var De = function(t, e) {
    ue.call(this, t), this.type = e, this.imageHorizon = this._getImageHorizon(), this.imageRoad = this._getImageRoad(), this.bgColor = this._getBgColor(), this.trees = this._getTrees(), this.sidingDistance = this._getSidingDistance(), this.isBowl = !1, this.title = this._getTitle(), this.altTitle = this._getAltTitle()
  };
  n["b10gph.game.LocationVo"] = De, De.__name__ = ["b10gph", "game", "LocationVo"], De.__super__ = ue, De.prototype = e(ue.prototype, {
    _getImageHorizon: function() {
      return this._assets.getAsset(function(t) {
        var e, s = t.type;
        return e = function(t) {
          var e;
          switch (s[1]) {
            case 0:
              e = "assets/location/HorizonA.jpg";
              break;
            case 1:
              e = "assets/location/HorizonB.jpg";
              break;
            case 2:
              e = "assets/location/HorizonC.jpg";
              break;
            case 3:
              e = "assets/location/HorizonD.jpg"
          }
          return e
        }(t)
      }(this))
    },
    _getImageRoad: function() {
      return this._assets.getAsset(function(t) {
        var e, s = t.type;
        return e = function(t) {
          var e;
          switch (s[1]) {
            case 0:
              e = "assets/location/RoadA.jpg";
              break;
            case 1:
              e = "assets/location/RoadB.jpg";
              break;
            case 2:
              e = "assets/location/RoadC.jpg";
              break;
            case 3:
              e = "assets/location/RoadD.jpg"
          }
          return e
        }(t)
      }(this))
    },
    _getBgColor: function() {
      var t = this.type;
      switch (t[1]) {
        case 0:
          return "#537341";
        case 1:
          return "#7e8368";
        case 2:
          return "#394d36";
        case 3:
          return "#b8ac97"
      }
    },
    _getTrees: function() {
      var t = this.type;
      switch (t[1]) {
        case 0:
          return [Ae.SCENERY_TREE_1, Ae.SCENERY_TREE_2, Ae.SCENERY_TREE_3];
        case 1:
          return [Ae.SCENERY_TREE_1, Ae.SCENERY_TREE_3, Ae.SCENERY_TREE_8];
        case 2:
          return [Ae.SCENERY_TREE_1, Ae.SCENERY_TREE_4, Ae.SCENERY_TREE_8];
        case 3:
          return [Ae.SCENERY_TREE_5, Ae.SCENERY_TREE_6, Ae.SCENERY_TREE_7]
      }
    },
    _getSidingDistance: function() {
      var t = this.type;
      switch (t[1]) {
        case 0:
          return 6;
        case 1:
          return 6;
        case 2:
          return 6;
        case 3:
          return 4
      }
    },
    _getTitle: function() {
      return this._kernel.getConfig(function(t) {
        var e, s = t.type;
        return e = function(t) {
          var e;
          switch (s[1]) {
            case 0:
              e = "gui.locations.a";
              break;
            case 1:
              e = "gui.locations.b";
              break;
            case 2:
              e = "gui.locations.c";
              break;
            case 3:
              e = "gui.locations.d"
          }
          return e
        }(t)
      }(this))
    },
    _getAltTitle: function() {
      return d.string(this._kernel.getConfig(function(t) {
        var e, s = t.type;
        return e = function(t) {
          var e;
          switch (s[1]) {
            case 0:
              e = "gui.locations.a.alt";
              break;
            case 1:
              e = "gui.locations.b.alt";
              break;
            case 2:
              e = "gui.locations.c.alt";
              break;
            case 3:
              e = "gui.locations.d.alt"
          }
          return e
        }(t)
      }(this))) + " " + d.string(this._kernel.getConfig("gui.scenes.selectLevel.altTitle"))
    },
    __class__: De
  });
  var xe = function(t, e, s) {
    this._track = e, this._camera = s, he.call(this, t)
  };
  n["b10gph.game.Player"] = xe, xe.__name__ = ["b10gph", "game", "Player"], xe.__super__ = he, xe.prototype = e(he.prototype, {
    _init: function() {
      he.prototype._init.call(this), this.x = 0, this.y = 0, this.z = this._camera.height * this._camera.depth, this.speedPerc = 0, this.segment = null, this.percent = 0, this._speed = 0, this._boost = 0, this.steer = 0, this._width = .36, this._carsAheadOfPlayer = this._track.cars.length, this._prevQuarter = 0, this._biasSpeed = this._session.getUpgradeBias(Re.UPGRADE_SPEED, .85, 1), this._biasSteering = this._session.getUpgradeBias(Re.UPGRADE_STEERING, .9, 1.1), this._biasAcceleration = this._session.getUpgradeBias(Re.UPGRADE_ACCELERATION, .95, 1.25), this._biasBoost = this._session.getUpgradeBias(Re.UPGRADE_BOOST, .985, 1.02), this._maxSpeed = this._factory.targetFramerate * this._track.segmentDistance * .9 | 0, this._forceAcceleration = this._maxSpeed / 10, this._forceBraking = -this._maxSpeed, this._forceCoasting = -this._maxSpeed / 10, this._forceOffRoadDeceleration = -this._maxSpeed / 1.5, this._forceOffRoadLimit = this._maxSpeed / 2, this._deviceMotion = new we(this._kernel)
    },
    _disposer: function() {
      this._deviceMotion.dispose(), he.prototype._disposer.call(this)
    },
    _updater: function(t) {
      null == t && (t = 0), he.prototype._updater.call(this, t), this._move(t), this._updateCars(t), this._collision(), this._boost *= .925 * this._biasBoost, this._boost < .05 && (this._boost = 0), this._isRaceComplete || (this._camera.position + this.z < this._track.totalDistance ? this.score = this._carsAheadOfPlayer : (this._isRaceComplete = !0, this._kernel.messenger.sendMessage(this._factory.MESSAGE_FINISH_LINE, this, !1, !1, !0)))
    },
    _move: function(t) {
      null == t && (t = 0);
      var e = t / 1e3;
      this.speedPerc = this._speed / this._maxSpeed;
      var s = 3.25 * e * this.speedPerc;
      this._deviceMotion.isEnabled && 0 != this._deviceMotion.motionRelative && !this._kernel.inputs.mouse.getIsButtonDown() && this._kernel.inputs.mouse.getButtonUpDuration() > 1e3 ? this.speedPerc > .05 && (this.steer = .5 * this.steer + .5 * this._deviceMotion.motionRelative) : (this.steer *= .75, this._kernel.inputs.joypad.getIsButtonDown($t.LEFT) ? this.speedPerc > .05 && (this.steer -= .25) : this._kernel.inputs.joypad.getIsButtonDown($t.RIGHT) && this.speedPerc > .05 && (this.steer += .25)), this.x = this.x + s * this._biasSteering * this.steer, this.steer = this._tools.limit(this.steer, -1, 1), this._age > 500 || this._kernel.inputs.joypad.getIsButtonDown($t.UP) ? this._speed = Be.accelerate(this._speed, this._biasAcceleration * this._forceAcceleration, e) : this._kernel.inputs.joypad.getIsButtonDown($t.DOWN) ? this._speed = Be.accelerate(this._speed, this._forceBraking, e) : this._speed = Be.accelerate(this._speed, this._forceCoasting, e), (this.x < -1 || this.x > 1) && this._speed > this._forceOffRoadLimit && (this._speed = Be.accelerate(this._speed, this._forceOffRoadDeceleration, e)), this.x = this.x - s * this.speedPerc * this._track.findSegment(this._camera.position).curve * .05, this.x = this._tools.limit(this.x, -1.25, 1.25), this._speed = this._tools.limit(this._speed, 0, this._biasSpeed * this._maxSpeed), this._speed += (this._boost > 0 ? .1 : 0) * this._maxSpeed, this.segment = this._track.findSegment(this._camera.position + this.z), this.percent = Be.percentRemaining(this._camera.position + this.z, this._track.segmentDistance), this.y = Be.interpolate(this.segment.position1.worldY, this.segment.position2.worldY, this.percent), this._camera.increasePosition(e * this._speed, e * -.04 * this.segment.curve * .25 * this.speedPerc);
      var i = Math.round(3.25 * (this.segment.index + this.percent) / this._track.maxSegments);
      i > this._prevQuarter && (this._kernel.audio.start("VocalProgress" + i, Zt.INTERFACE, 0, 0, 1, 0, !0), this._prevQuarter = i)
    },
    _updateCars: function(t) {
      null == t && (t = 0);
      var e, s = Math.min(this._age / 7e3, 1),
        i = s * t / 1e3,
        n = this._carsAheadOfPlayer;
      this._carsAheadOfPlayer = 0;
      for (var r = 0, a = this._track.cars; r < a.length;) {
        var _ = a[r];
        ++r;
        var h = this._track.findSegment(_.z);
        _.z = Math.round(Math.min(_.z + i * _.speed * this._maxSpeed * .83, this._track.segments.length * this._track.segmentDistance));
        var u = this._track.findSegment(_.z);
        if (h != u && (o.remove(h.cars, _), u.cars.push(_)), h.index - this.segment.index <= this._camera.drawDistance && h.index - this.segment.index > -5 && (_.steer = s * this._tools.ease(_.steer, this._updateCarOffset(_, h), .075), _.offset = this._tools.limit(_.offset + _.steer, -.8, .8), _.percent = Be.percentRemaining(_.z, this._track.segmentDistance), this._kernel.isEyeCandy && h != u))
          for (var l = 0; 4 > l;) {
            var c = l++;
            e = this._track.getNextAfterburner(), e.configure(e.type, _.offset, (c + 1) / 4, 1), h.scenery.push(e)
          }
        _.z > this._camera.position + this.z && this._carsAheadOfPlayer++
      }
      this._carsAheadOfPlayer != n && this._kernel.audio.start("Driveby" + (d.random(4) + 1), Zt.EFFECTS, 0, 0, .5, 0, !1)
    },
    _updateCarOffset: function(t, e) {
      for (var s = 0, i = this._width, n = 10, r = 0, a = null, _ = 1; n > _;) {
        var o = _++;
        if (a = this._track.segments[(e.index + o) % this._track.segments.length], r += a.curve, a == this.segment && t.speed > this.speedPerc && Be.overlap(this.x, i, t.offset, i, 1.2)) return s = this.x > .5 ? -1 : this.x < -.5 ? 1 : t.offset > this.x ? 1 : -1, s * (1 / o) * (t.speed - this.speedPerc);
        for (var h = 0, u = a.cars; h < u.length;) {
          var l = u[h];
          ++h;
          var c = l;
          if (t.speed > c.speed && Be.overlap(t.offset, i, c.offset, i, 1.2)) return s = c.offset > .5 ? -1 : c.offset < -.5 ? 1 : t.offset > c.offset ? 1 : -1, s * (1 / o) * (t.speed - c.speed)
        }
      }
      return 0 > r ? -.01 : .01
    },
    _collision: function() {
      for (var t = this._track.segments[this.segment.index + 1], e = 0, s = t.scenery; e < s.length;) {
        var i = s[e];
        ++e, i.isBoost && (o.remove(t.scenery, i), Math.abs(this.x - i.offset) < .35 && this._activateBoost()), i.isCoin && (o.remove(t.scenery, i), Math.abs(this.x - i.offset) < .165 && this._activateCoin())
      }
      if (this.segment.index < this._track.segments.length - 3) {
        var n = [].concat(this.segment.cars).concat(this._track.segments[this.segment.index + 1].cars);
        if (this.percent > .5)
          for (var r = this._track.segments[this.segment.index + 2], a = 0, _ = r.cars; a < _.length;) {
            var h = _[a];
            ++a, 1 - this.percent + h.percent < .5 && n.push(h)
          }
        for (var u = 0; u < n.length;) {
          var l = n[u];
          ++u;
          var c = Math.abs(this.x - l.offset);
          c < .7 * this._width && (this._speed = Math.min(l.speed * this._maxSpeed * .8, .85 * this._speed), this._boost = 0, this.steer = 0, this._kernel.audio.start("Collision" + (d.random(2) + 1), Zt.EFFECTS, 0, 0, .25 * this.speedPerc, 0, !1))
        }
      }
    },
    _activateBoost: function() {
      this._boost > 0 || (this._kernel.overlay.flash(200, !0, 1, this._factory.COLOR_WHITE), this._boost = 1, this._speed = this._maxSpeed + this._boost * this._maxSpeed * .1, this._kernel.audio.start("Boost" + (d.random(2) + 1), Zt.EFFECTS, 0, 0, .65, 0, !1))
    },
    _activateCoin: function() {
      this._session.coins += 20
    },
    __class__: xe
  });
  var Oe = function(t, e) {
    this.worldX = 0, this.worldY = t, this.worldZ = e, this.cameraX = this.cameraY = this.cameraZ = 0, this.screenScale = 1, this.screenX = this.screenY = 0, this.screenWidth = 1
  };
  n["b10gph.game.Position"] = Oe, Oe.__name__ = ["b10gph", "game", "Position"], Oe.prototype = {
    project: function(t, e, s, i, n, r, a) {
      this.cameraX = this.worldX - t, this.cameraY = this.worldY - e, this.cameraZ = this.worldZ - s, this.screenScale = i / this.cameraZ, this.screenX = Math.round(n / 2 + this.screenScale * this.cameraX * n / 2), this.screenY = Math.round(r / 2 - this.screenScale * this.cameraY * r / 2), this.screenWidth = Math.round(this.screenScale * a * n / 2)
    },
    __class__: Oe
  };
  var Ue = function(t, e, s, i, n, r) {
    this._track = e, this._camera = s, this._player = i, this._width = n, this._height = r, he.call(this, t)
  };
  n["b10gph.game.Renderer"] = Ue,
    Ue.__name__ = ["b10gph", "game", "Renderer"], Ue.__super__ = he, Ue.prototype = e(he.prototype, {
      _init: function() {
        he.prototype._init.call(this), this._context.cache(0, 0, this._width, this._height);
        var t = this._context.cacheCanvas;
        this._context2d = t.getContext("2d", null), this._context2d.imageSmoothingEnabled = !0, this._isDrawImageUsingCanvas = this._session.cache.isDrawImageUsingCanvas, this._imageCars = this._assets.getAsset("assets/location/Cars.png"), this._imageScenery = this._assets.getAsset("assets/location/Scenery.png"), this._imageRoad = this._track.locationVo.imageRoad, this._imageFinishLine = this._assets.getAsset("assets/location/FinishLine.png"), this._imageBoost = this._assets.getAsset("assets/location/Boost.png"), this._imageHorizon = this._track.locationVo.imageHorizon, this._isDrawImageUsingCanvas && (this._canvasCars = this._factory.createCanvas(this._imageCars.width, this._imageCars.height), this._canvasCars.getContext("2d", null).drawImage(this._imageCars, 0, 0), this._imageCars = null, this._canvasScenery = this._factory.createCanvas(this._imageScenery.width, this._imageScenery.height), this._canvasScenery.getContext("2d", null).drawImage(this._imageScenery, 0, 0), this._imageScenery = null, this._canvasRoad = this._factory.createCanvas(this._imageRoad.width, this._imageRoad.height), this._canvasRoad.getContext("2d", null).drawImage(this._imageRoad, 0, 0), this._imageRoad = null, this._canvasFinishLine = this._factory.createCanvas(this._imageFinishLine.width, this._imageFinishLine.height), this._canvasFinishLine.getContext("2d", null).drawImage(this._imageFinishLine, 0, 0), this._imageFinishLine = null, this._canvasBoost = this._factory.createCanvas(this._imageBoost.width, this._imageBoost.height), this._canvasBoost.getContext("2d", null).drawImage(this._imageBoost, 0, 0), this._imageBoost = null, this._canvasHorizon = this._factory.createCanvas(this._imageHorizon.width, this._imageHorizon.height), this._canvasHorizon.getContext("2d", null).drawImage(this._imageHorizon, 0, 0), this._imageHorizon = null), this._framerateBiasTotal = 0, this._roadLanes = 4, this._roadWidth = 2e3, this._resolution = this._height / 480, this._horizonY = 0, this._horizonPattern = this._context2d.createPattern(this._isDrawImageUsingCanvas ? this._canvasHorizon : this._imageHorizon, "repeat"), this._maxScanlines = Math.round(.1 * (this._session.cache.benchmark / 100)), this._blur = 1, this._lensflare = new Ie(this._kernel, this._width, this._height), this._isLensEffectsEnabled = this._maxScanlines > 30, this.c_textureRatio = 512 / this._track.segmentDistance / 16, this._coinSprites = [];
        for (var e = 0; 32 > e;) {
          var s = e++;
          this._coinSprites.push({
            x: s % 32 * 32,
            y: 630,
            w: 32,
            h: 32
          })
        }
      },
      _updater: function(t) {
        if (null == t && (t = 0), he.prototype._updater.call(this, t), this._updates > 10 && (this._framerateBiasTotal += this._kernel.getFramerate(!0), this._age > 1e3)) {
          var e = this._framerateBiasTotal / (this._updates - 10),
            s = e / this._factory.targetFramerate;
          s > .8 ? this._maxScanlines++ : this._maxScanlines = Math.round(.8 * this._maxScanlines)
        }
        this._maxScanlines = d["int"](this._tools.limit(this._maxScanlines, 8, 100)), this._kernel.isEyeCandy ? this._blur = .9 * this._blur + .1 * (1 - (this._player.speedPerc > 1 ? .7 : 0)) : this._blur = 1;
        var i = this._track.findSegment(this._camera.position),
          n = Be.percentRemaining(this._camera.position, this._track.segmentDistance),
          r = this._height,
          a = 0,
          _ = -(i.curve * n);
        this._context2d.globalAlpha = this._blur;
        var h = this._tools.range(this._camera.angle - this._player.x / 50, 0, 1);
        this._drawHorizon(h, this._horizonY);
        for (var u, l = this._camera.position, c = this._camera.drawDistance, g = this._camera.fogDensity, p = -200 * (1 - this._blur), f = 0; c > f;) {
          var E = f++;
          u = this._track.segments[(i.index + E) % this._track.segments.length], u.fog = 1 / Math.pow(Math.exp(1), Math.pow(E / c, 7) * g), u.clip = r, u.position1.project(this._player.x * this._roadWidth - a, this._player.y + this._camera.height + p, l, this._camera.depth, this._width, this._height, this._roadWidth), u.position2.project(this._player.x * this._roadWidth - a - _, this._player.y + this._camera.height + p, l, this._camera.depth, this._width, this._height, this._roadWidth), a += _, _ += u.curve, u.position1.cameraZ <= this._camera.depth || u.position2.screenY >= u.position1.screenY || u.position2.screenY >= r || (r = u.position2.screenY, this._drawSegmentTexture(u.position1.worldZ, u.position2.worldZ, u.position1.screenX, u.position1.screenY, u.position1.screenWidth, u.position2.screenX, u.position2.screenY, u.position2.screenWidth, u.fog * this._blur, u.isFinishLine, u.isBoost, u.boostPosition))
        }
        this._horizonY = r;
        var y, v, m, w = 0,
          S = 0,
          T = 0,
          b = 0,
          C = null;
        m = this._isDrawImageUsingCanvas ? this._canvasScenery : this._imageScenery;
        var A;
        A = this._isDrawImageUsingCanvas ? this._canvasCars : this._imageCars;
        for (var R = 0; c > R;) {
          var I = R++;
          w = c - I, u = this._track.segments[(i.index + w) % this._track.segments.length];
          for (var k = 0, N = u.scenery; k < N.length;) {
            var D = N[k];
            if (++k, S = u.position1.screenScale, T = u.position1.screenX + S * D.offset * this._roadWidth * (.5 * this._width), b = u.position1.screenY, C = D.sprite, v = m, D.isAfterburner) {
              if (!this._isLensEffectsEnabled) continue;
              if (D.life *= .9, D.life < .25) {
                o.remove(u.scenery, D);
                continue
              }
              if (Math.random() > I / c) continue;
              y = Math.pow(D.perc, 1.2), T = Be.interpolate(T, u.position2.screenX + u.position2.screenScale * D.offset * this._roadWidth * (.5 * this._width), y), b = Be.interpolate(u.position1.screenY, u.position2.screenY, y)
            }
            D.isCoin && (v = A, C = this._coinSprites[(this._updates + D.seed) % 32]), D.isBoost || this._drawSprite(v, C, S * D.scale, T, b, -.5, -1, u.clip, u.fog * this._blur, D.isAdd, D.life)
          }
          v = A;
          for (var x = 0, O = u.cars; x < O.length;) {
            var U = O[x];
            ++x, y = Math.pow(U.percent, .8), S = Be.interpolate(u.position1.screenScale, u.position2.screenScale, y), T = Be.interpolate(u.position1.screenX, u.position2.screenX, y) + S * U.offset * this._roadWidth * (.5 * this._width), b = Be.interpolate(u.position1.screenY, u.position2.screenY, y), C = this._getCarSprite(U.type, -(((T - this._width / 2) * S * 4e3 - 5 * u.curve) / (.125 * this._width))), this._drawSprite(v, C, .8 * S, T, b, -.5, -.9, u.clip, u.fog * this._blur)
          }
          u == this._player.segment && this._drawPlayer(v)
        }
        this._isLensEffectsEnabled && this._lensflare.draw(this._context2d, 1024 * h, this._horizonY - 80)
      },
      _drawSegmentTexture: function(t, e, s, i, n, r, a, _, o, h, u, l) {
        null == l && (l = 0), null == u && (u = !1), null == h && (h = !1), this._context2d.globalAlpha = o, a > this._height && (a = this._height), n = 1.3 * n | 0, _ = 1.3 * _ | 0, this.c_startX = s - n, this.c_endX = r - _, this.c_dx = this.c_endX - this.c_startX, this.c_startY = i, this.c_endY = a, this.c_dy = d["int"](Math.abs(this.c_endY - this.c_startY)), this.c_startW = 2 * n, this.c_dw = 2 * (_ - n), this.c_startZ = t, this.c_dz = this._track.segmentDistance, this.c_sourceX = 0, this.c_sourceY = 0, this.c_sourceW = 512, this.c_sourceH = 1, this.c_destX = 0, this.c_destY = this.c_startY, this.c_destW = 1, this.c_destH = 1, this.c_steps = d["int"](Math.min(this.c_dy, this._maxScanlines)), this.c_perc = 0, this.c_destHF = Math.floor(this.c_dy / this.c_steps), this.c_destHC = Math.ceil(this.c_dy / this.c_steps), this.c_mod = 1, this.c_destHC != this.c_destHF && (this.c_mod = Math.round(1 / (this.c_destHC - this.c_dy / this.c_steps))), this.c_destH = this.c_destHC, this._isDrawImageUsingCanvas ? this.c_source = this._canvasRoad : this.c_source = this._imageRoad;
        for (var c = 0, g = this.c_steps; g > c;) {
          var p = c++;
          if (this.c_perc = p / this.c_steps, this.c_sourceY = 511 - Math.floor((t + 150 + this.c_perc * this.c_dz) * this.c_textureRatio) % 512, this.c_destX = this.c_startX + this.c_perc * this.c_dx | 0, this.c_destY -= this.c_destH, this.c_destW = this.c_startW + this.c_perc * this.c_dw | 0, this.c_sourceY > 512 - this.c_destH ? this.c_sourceH = 1 : this.c_sourceH = this.c_destH, this.c_destW > 2048 && (this.c_destX += .5 * (this.c_destW - 2048) | 0, this.c_destW = 2048), this.c_destY < this._height && (this._context2d.drawImage(this.c_source, this.c_sourceX, this.c_sourceY, this.c_sourceW, this.c_sourceH, this.c_destX, this.c_destY, this.c_destW, this.c_destH), h && this._context2d.drawImage(this._isDrawImageUsingCanvas ? this._canvasFinishLine : this._imageFinishLine, this.c_sourceX, (this.c_sourceY + 16) % 64, this.c_sourceW, this.c_sourceH, this.c_destX, this.c_destY, this.c_destW, this.c_destH), u)) {
            var f = this._updates % 8 * 64,
              E = 64,
              y = (this.c_destX + this.c_destW * l + .125 * this.c_destW, this.c_destX + this.c_destW * (.5 + .5 * l) - .125 * this.c_destW),
              v = .25 * this.c_destW;
            this._context2d.drawImage(this._isDrawImageUsingCanvas ? this._canvasBoost : this._imageBoost, f, (this.c_sourceY + 16) % 64, E, this.c_sourceH, y, this.c_destY, v, this.c_destH)
          }
          p % this.c_mod == 0 ? this.c_destH = this.c_destHF : this.c_destH = this.c_destHC
        }
        this.c_destY > this.c_endY && (this.c_destH = this.c_destY - this.c_endY, this.c_destY -= this.c_destH, this._context2d.drawImage(this.c_source, this.c_sourceX, this.c_sourceY, this.c_sourceW, this.c_sourceH, this.c_destX, this.c_destY, this.c_destW, this.c_destH)), this._context2d.globalAlpha = 1
      },
      _drawSprite: function(t, e, s, i, n, r, a, _, o, h, u) {
        null == u && (u = 1), null == h && (h = !1), null == o && (o = 1), null == _ && (_ = 0), null == a && (a = 0), null == r && (r = 0), s > .002 || (this.c_destW = Math.round(e.w * s * this._width * .5 * (.003 * this._roadWidth)), this.c_destH = Math.round(e.h * s * this._width * .5 * (.003 * this._roadWidth)), this.c_destW > 768 || this.c_destH > 768 || (i += this.c_destW * r, n += this.c_destH * a, this.c_clipH = Math.round(Math.max(0, n + this.c_destH - _ - 1)), 0 == _ && (this.c_clipH = 0), this.c_clipH < this.c_destH && (this._context2d.globalAlpha = Math.pow(o, .4) * u, h && (this._context2d.globalCompositeOperation = "lighter"), this._context2d.drawImage(t, e.x, e.y, e.w, e.h - e.h * this.c_clipH / this.c_destH, i, n, this.c_destW, this.c_destH - this.c_clipH), this._context2d.globalAlpha = 1, h && (this._context2d.globalCompositeOperation = "source-over"))))
      },
      _drawHorizon: function(t, e) {
        null == e && (e = 0), null == t && (t = 0);
        var s = Math.round(1024 * t),
          i = Math.round(Math.min(e, 224));
        this._context2d.fillStyle = this._horizonPattern, this._context2d.translate(s, i), this._context2d.fillRect(-s, -i, this._width, i), this._context2d.translate(-s, -i), this._context2d.fillStyle = this._track.locationVo.bgColor, this._context2d.fillRect(0, i, this._width, this._height - i)
      },
      _drawPlayer: function(t) {
        var e, s = this._camera.depth / this._player.z,
          i = .5 * this._width,
          n = .5 * this._height - s * Be.interpolate(this._player.segment.position1.cameraY, this._player.segment.position2.cameraY, this._player.percent) * (.5 * this._height),
          r = this._player.steer;
        e = Math.random() * this._player.speedPerc * this._resolution * (Math.random() < .5 ? -1 : 1), this._drawSprite(t, this._getCarSprite(Se.CAR_A, r), .8 * s, i, n + e, -.5, -1)
      },
      _getCarSprite: function(t, e) {
        var s = {
          x: 0,
          y: 270,
          w: 200,
          h: 90
        };
        switch (-.2 > e && (s.y = 360), -.75 > e && (s.y = 450), e > .2 && (s.y = 180), e > .75 && (s.y = 90), -.95 > e && (s.y = 540), e > .95 && (s.y = 0), t[1]) {
          case 0:
            s.x = 0;
            break;
          case 1:
            s.x = 200;
            break;
          case 2:
            s.x = 400;
            break;
          case 3:
            s.x = 600;
            break;
          case 4:
            s.x = 800
        }
        return s
      },
      __class__: Ue
    });
  var Pe = function(t, e, s, i) {
    null == i && (i = 1), null == s && (s = 0), this.configure(t, e, s, i), this.seed = d.random(32)
  };
  n["b10gph.game.Scenery"] = Pe, Pe.__name__ = ["b10gph", "game", "Scenery"], Pe.prototype = {
    _getWidth: function() {
      return 0
    },
    _getScale: function() {
      var t = this.type;
      switch (t[1]) {
        case 0:
          return 2;
        case 1:
          return 2.2;
        case 2:
          return 1.5;
        case 3:
          return 1.5;
        case 4:
          return 1.25;
        case 5:
          return 4 * Math.pow(Math.random(), .1);
        case 6:
          return 4 * Math.pow(Math.random(), .2);
        case 7:
          return 4 * Math.pow(Math.random(), .2);
        case 8:
          return 4 * Math.pow(Math.random(), .2);
        case 9:
          return 4 * Math.pow(Math.random(), .1);
        case 10:
          return 4 * Math.pow(Math.random(), .2);
        case 11:
          return 4 * Math.pow(Math.random(), .2);
        case 12:
          return 4 * Math.pow(Math.random(), .2);
        case 13:
          return 2;
        case 14:
          return 2.6;
        case 15:
          return 2.6;
        case 16:
          return 2.6;
        case 17:
          return 2.6;
        case 18:
          return 2;
        case 19:
          return 2;
        case 20:
          return 10;
        case 21:
          return 10
      }
    },
    _getSprite: function() {
      var t = this.type;
      switch (t[1]) {
        case 0:
          return {
            x: 0,
            y: 0,
            w: 32,
            h: 42
          };
        case 1:
          return {
            x: 768 + 32 * d.random(4),
            y: 512,
            w: 32,
            h: 32
          };
        case 2:
          return {
            x: 768,
            y: 544,
            w: 64,
            h: 64
          };
        case 3:
          return {
            x: 832,
            y: 544,
            w: 64,
            h: 64
          };
        case 4:
          return {
            x: 896,
            y: 512,
            w: 128,
            h: 128
          };
        case 5:
          return {
            x: 20,
            y: 0,
            w: 196,
            h: 256
          };
        case 6:
          return {
            x: 279,
            y: 0,
            w: 210,
            h: 256
          };
        case 7:
          return {
            x: 512,
            y: 0,
            w: 256,
            h: 256
          };
        case 8:
          return {
            x: 832,
            y: 0,
            w: 128,
            h: 256
          };
        case 9:
          return {
            x: 20,
            y: 256,
            w: 196,
            h: 256
          };
        case 10:
          return {
            x: 279,
            y: 256,
            w: 210,
            h: 256
          };
        case 11:
          return {
            x: 512,
            y: 256,
            w: 256,
            h: 256
          };
        case 12:
          return {
            x: 788,
            y: 256,
            w: 196,
            h: 256
          };
        case 13:
          return {
            x: 18,
            y: 512,
            w: 92,
            h: 512
          };
        case 14:
          return {
            x: 128,
            y: 562,
            w: 256,
            h: 206
          };
        case 15:
          return {
            x: 384,
            y: 562,
            w: 256,
            h: 206
          };
        case 16:
          return {
            x: 128,
            y: 818,
            w: 256,
            h: 206
          };
        case 17:
          return {
            x: 384,
            y: 818,
            w: 256,
            h: 206
          };
        case 18:
          return {
            x: 640,
            y: 512,
            w: 128,
            h: 256
          };
        case 19:
          return {
            x: 640,
            y: 768,
            w: 128,
            h: 256
          };
        case 20:
          return {
            x: 768,
            y: 896,
            w: 128,
            h: 128
          };
        case 21:
          return {
            x: 896,
            y: 896,
            w: 128,
            h: 128
          }
      }
    },
    _getIsAdd: function() {
      return !1
    },
    configure: function(t, e, s, i) {
      null == i && (i = 1), null == s && (s = 0), this.offset = e, this.life = i, this.perc = s, this.type != t && (this.type = t, this.scale = this._getScale(), this.width = this._getWidth(), this.isBoost = this.type == Ae.SCENERY_BOOST, this.isAfterburner = this.type == Ae.SCENERY_AFTERBURNER, this.isCoin = this.type == Ae.SCENERY_COIN, this.isAdd = this._getIsAdd(), this.sprite = this._getSprite())
    },
    __class__: Pe
  };
  var Le = function(t, e, s, i, n, r) {
    this.index = t, this.position1 = e, this.position2 = s, this.curve = i, this.color = n, null != r ? this.scenery = r : this.scenery = [], this.cars = [], this.fog = 0, this.clip = 0, this.isFinishLine = !1, this.isBoost = !1, this.boostPosition = 0
  };
  n["b10gph.game.Segment"] = Le, Le.__name__ = ["b10gph", "game", "Segment"], Le.prototype = {
    setBoost: function(t) {
      this.isBoost = !0, this.boostPosition = t
    },
    __class__: Le
  };
  var Me = function(t, e) {
    this.locationVo = e, he.call(this, t)
  };
  n["b10gph.game.Track"] = Me, Me.__name__ = ["b10gph", "game", "Track"], Me.__super__ = he, Me.prototype = e(he.prototype, {
    _init: function() {
      for (he.prototype._init.call(this), this.maxSegments = 820, this.maxSegments % 2 == 0 && this.maxSegments++, this._kernel.isDebug && (this.maxSegments = 100), this.segmentDistance = 300, this.segments = [], this._addRoad(0, 50, 0, 0, 0); this.segments.length < this.maxSegments;) {
        var t = this._tools.getRandomType(Ce);
        this.locationVo.isBowl && (t = [Ce.ROAD_LEFT_LONG, Ce.ROAD_LEFT_MEDIUM, Ce.ROAD_NONE][d.random(3)]);
        var e = this._getRoadLength(t),
          s = this._getRoadCurve(t),
          i = e * Math.random() * 3;
        this.locationVo.isBowl && (i = .1 * Math.abs(s * e)), this.segments.length + 2 * e < this.maxSegments ? this._addRoad(e, e, e, s, i) : this._addRoad(0, this.maxSegments - this.segments.length, 0, 0, 0)
      }
      this.maxSegments = this.segments.length;
      for (var n = 0; 10 > n;) {
        var r = (n++, 30 * Math.random() * .4);
        this._addRoad(0, 30, 0, 0, r)
      }
      for (var a = 0, _ = this.segments.length; _ > a;) {
        var o = a++;
        if (Math.abs(o - this.maxSegments) > 10) {
          if (o > 50 && o < this.maxSegments - 32 && o % 128 == 8) {
            var h = Math.random() - .5;
            this._addScenery(o, Ae.SCENERY_BOOST, h);
            for (var u = o - 2, l = o + 2; l > u;) {
              var c = u++;
              this.segments[c].setBoost(h)
            }
          }
          o > 25 && o < this.maxSegments + 140 && Math.random() < (o < this.maxSegments ? .03 : .2) && this._addScenery(o, Ae.SCENERY_COIN, 2 * Math.random() - 1)
        }
        this._createDefaultScenery(this.segments[o])
      }
      this._addScenery(30, Ae.SCENERY_TUNNEL_LEFT, -1), this._addScenery(30, Ae.SCENERY_TUNNEL_RIGHT, 1), this._addScenery(this.maxSegments, Ae.SCENERY_FINISH_LEFT, -1), this._addScenery(this.maxSegments, Ae.SCENERY_FINISH_RIGHT, 1), this.segments[this.maxSegments].isFinishLine = !0, this.segments[this.maxSegments + (this.maxSegments % 2 == 0 ? 1 : -1)].isFinishLine = !0, this.totalDistance = this.maxSegments * this.segmentDistance, this._totalCars = 11, this._createCars(), this._createAfterburners()
    },
    findSegment: function(t) {
      return this.segments[Math.floor(t / this.segmentDistance) % this.segments.length]
    },
    _getRoadLength: function(t) {
      switch (t[1]) {
        case 0:
          return 10;
        case 1:
        case 4:
          return 10;
        case 2:
        case 5:
          return 20;
        case 3:
        case 6:
          return 50
      }
    },
    _getRoadCurve: function(t) {
      return Math.round(function(e) {
        var s;
        switch (t[1]) {
          case 0:
            s = 0;
            break;
          case 1:
            s = -10;
            break;
          case 2:
            s = -15;
            break;
          case 3:
            s = -20;
            break;
          case 4:
            s = 10;
            break;
          case 5:
            s = 15;
            break;
          case 6:
            s = 20
        }
        return s
      }(this) * (this._session.level + 2) / 5)
    },
    _addRoad: function(t, e, s, i, n) {
      null == n && (n = 0);
      for (var r = this._getLastY(), a = r + n * this.segmentDistance, _ = t + e + s, o = 0; t > o;) {
        var h = o++;
        this._addSegment(Math.round(Be.easeIn(0, i, h / t)), Be.easeInOut(r, a, h / _))
      }
      for (var u = 0; e > u;) {
        var l = u++;
        this._addSegment(i, Be.easeInOut(r, a, (t + l) / _))
      }
      for (var c = 0; s > c;) {
        var d = c++;
        this._addSegment(Math.round(Be.easeInOut(i, 0, d / s)), Be.easeInOut(r, a, (t + e + d) / _))
      }
    },
    _addSegment: function(t, e) {
      var s = this.segments.length;
      this.segments.push(new Le(s, new Oe(this._getLastY(), s * this.segmentDistance), new Oe(e, (s + 1) * this.segmentDistance), t, Math.floor(s / 2) % 2 == 0 ? Te.COLOR_DARK : Te.COLOR_LIGHT))
    },
    _getLastY: function() {
      return 0 == this.segments.length ? 0 : this.segments[this.segments.length - 1].position2.worldY
    },
    _createDefaultScenery: function(t) {
      var e = t.index;
      if (e % 10 == 0) {
        var s = Math.random();.4 > s && ((t.curve > 2 || e > this.maxSegments || 50 > e) && this._addScenery(e, Ae.SCENERY_STADIUM_LEFT, -7.5), (this.locationVo.isBowl || t.curve < -2 || e > this.maxSegments || 50 > e) && this._addScenery(e, Ae.SCENERY_STADIUM_RIGHT, 7.5))
      }
      e % 2 == 0 && ((this.locationVo.isBowl || t.curve > 2 || e > this.maxSegments || 50 > e) && this._addScenery(e, Ae.SCENERY_SIDING_LEFT, -this.locationVo.sidingDistance), (this.locationVo.isBowl || t.curve < -2 || e > this.maxSegments || 50 > e) && this._addScenery(e, Ae.SCENERY_SIDING_RIGHT, this.locationVo.sidingDistance));
      var i = Math.random();.2 > i && t.curve > 2 && this._addScenery(e, Math.random() < .5 ? Ae.SCENERY_TIRE_2 : Ae.SCENERY_TIRE_1, -1.5);
      var n = Math.random();.2 > n && t.curve < -2 && this._addScenery(e, Math.random() < .5 ? Ae.SCENERY_TIRE_2 : Ae.SCENERY_TIRE_1, 1.5);
      var r = Math.random();
      e > 50 && e % 32 == 0 && .4 > r && (this._addScenery(e, Ae.SCENERY_TUNNEL_LEFT, -1), this._addScenery(e, Ae.SCENERY_TUNNEL_RIGHT, 1)), e % 32 == 8 && this._addScenery(e, Ae.SCENERY_FLOODLIGHT, -2), e % 32 == 24 && this._addScenery(e, Ae.SCENERY_FLOODLIGHT, 2);
      var a = Math.random();
      if (e % 2 == 0 && a < (this._system.isDesktop ? .5 : .2)) {
        var _ = this.locationVo.trees[d.random(this.locationVo.trees.length)];
        null != _ && this._addScenery(e, _, (Math.random() < .5 ? -1 : 1) * (Math.random() + 2.5))
      }
    },
    _addScenery: function(t, e, s) {
      this.segments[t].scenery.push(new Pe(e, s))
    },
    _createCars: function() {
      this.cars = [];
      for (var t = d.random(3) + 2, e = 0, s = this._totalCars; s > e;) {
        var i, n = e++,
          r = 1 - n / this._totalCars,
          a = Math.ceil(50 * r * 2 * this.segmentDistance),
          _ = n % 3;
        switch (_) {
          case 2:
            i = .5;
            break;
          case 0:
            i = 0;
            break;
          default:
            i = -.5
        }
        var o = [Se.CAR_B, Se.CAR_C, Se.CAR_D, Se.CAR_E][d.random(4)],
          h = .9 * Math.pow(Math.random(), Math.max(.1, r)) + .2,
          u = .9 * Math.pow(Math.pow(Math.random(), .5), Math.max(.1, r)) + .275,
          l = this._tools.ease(h, u, this._session.getPercentageComplete());
        n % t == 0 && (l = .7 * Math.pow(r, Math.max(.3, r)) + .3), 0 == n && (l = 1), 1 == n && (l = .99);
        var c = new me(o, i, a, l),
          g = this.findSegment(a);
        g.cars.push(c), this.cars.push(c)
      }
    },
    _createAfterburners: function() {
      this._afterburners = [];
      for (var t = 0; 400 > t;) {
        var e = (t++, new Pe(Ae.SCENERY_AFTERBURNER, 0, 0));
        this._afterburners.push(e)
      }
      this._afterburnerIndex = 0
    },
    getNextAfterburner: function() {
      return this._afterburners[this._afterburnerIndex++ % 400]
    },
    __class__: Me
  });
  var Be = function() {};
  n["b10gph.game.Util"] = Be, Be.__name__ = ["b10gph", "game", "Util"], Be.percentRemaining = function(t, e) {
    return t % e / e
  }, Be.accelerate = function(t, e, s) {
    return t + e * s
  }, Be.interpolate = function(t, e, s) {
    return t + (e - t) * s
  }, Be.easeIn = function(t, e, s) {
    return t + (e - t) * Math.pow(s, 2)
  }, Be.easeInOut = function(t, e, s) {
    return t + (e - t) * (-Math.cos(s * Math.PI) / 2 + .5)
  }, Be.overlap = function(t, e, s, i, n) {
    null == n && (n = 1);
    var r = n / 2,
      a = t - e * r,
      _ = t + e * r,
      o = s - i * r,
      h = s + i * r;
    return !(o > _ || a > h)
  };
  var Fe = function(t, e, s, i) {
    null == i && (i = !0), null == s && (s = 100), null == e && (e = 100), this._assets = Ls.__cast(t.assets, le), this._factory = Ls.__cast(t.factory, de), this._session = Ls.__cast(t.get_session(), Ee), this._system = t.system, Wt.call(this, t, e, s, i)
  };
  n["b10gph.gui.AGuiEntity"] = Fe, Fe.__name__ = ["b10gph", "gui", "AGuiEntity"], Fe.__super__ = Wt, Fe.prototype = e(Wt.prototype, {
    __class__: Fe
  });
  var Ye = function(t, e, s, i) {
    null == i && (i = 1), null == s && (s = !1), this._imageElement = e, this._isAdd = s, Fe.call(this, t, this._imageElement.width, this._imageElement.height, !1), this.set_alpha(i)
  };
  n["b10gph.gui.Image"] = Ye, Ye.__name__ = ["b10gph", "gui", "Image"], Ye.__super__ = Fe, Ye.prototype = e(Fe.prototype, {
    _init: function() {
      Fe.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._imageElement), this._context.addChild(this._bitmap), this._isAdd ? this._bitmap.compositeOperation = "lighter" : this._bitmap.compositeOperation = "source-over"
    },
    set_alpha: function(t) {
      return this._bitmap.alpha = t
    },
    __class__: Ye
  });
  var He = function(t, e) {
    this._imageData = e, Ye.call(this, t, t.assets.getAsset("assets/gui/SceneBg.png"), !1)
  };
  n["b10gph.gui.Bg"] = He, He.__name__ = ["b10gph", "gui", "Bg"], He.__super__ = Ye, He.prototype = e(Ye.prototype, {
    _init: function() {
      Ye.prototype._init.call(this), this._image = new createjs.Bitmap(this._imageData), this._context.addChild(this._image)
    },
    _updater: function(t) {
      null == t && (t = 0), Ye.prototype._updater.call(this, t), this._image.x = -10 + 10 * Math.sin(this._kernel.scenes._age / 1e3)
    },
    __class__: He
  });
  var Ge = function(t, e, s, i, n, r, a, _, o) {
    null == n && (n = 0), null == i && (i = 0);
    var h = new Kt(t),
      u = new Kt(t);
    N.call(this, t, h, u, e, s, i, n, r, a, _, o)
  };
  n["b10gph.gui.BlankButton"] = Ge, Ge.__name__ = ["b10gph", "gui", "BlankButton"], Ge.__super__ = N, Ge.prototype = e(N.prototype, {
    _updater: function(t) {
      null == t && (t = 0);
      var e = this.get_view().context.localToGlobal(0, 0);
      this.get_view().globalX = e.x, this.get_view().globalY = e.y, N.prototype._updater.call(this, t)
    },
    __class__: Ge
  });
  var Ve = function(t, e, s, i, n, r, a, _) {
    null == i && (i = 0), null == s && (s = 0), null == e && (e = ""), this._assets = t.assets, this._factory = t.factory, this._title = e.toUpperCase(), N.call(this, t, this._assets.get_buttonUp(), this._assets.get_buttonOver(), 200, 65, s, i, n, r, a, _)
  };
  n["b10gph.gui.Button"] = Ve, Ve.__name__ = ["b10gph", "gui", "Button"], Ve.__super__ = N, Ve.prototype = e(N.prototype, {
    _init: function() {
      N.prototype._init.call(this);
      var t = 5,
        e = 18,
        s = this.width - 2 * t,
        i = this.height - e,
        n = this._kernel.factory.createTextStyle(oe.BUTTON);
      this._textUp = new es(this._kernel, s, i, this._title, n);
      var r = this._kernel.factory.createTextStyle(oe.BUTTON);
      r.color = this._factory.COLOR_GREY, this._textOver = new es(this._kernel, s, i, this._title, r), this._textUp.set_x(this._textOver.set_x(t)), this._textUp.set_y(this._textOver.set_y(e)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
    },
    onRollOver: function() {
      N.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Zt.INTERFACE, 0, 0, .25)
    },
    __class__: Ve
  });
  var ze = function(t, e, s, i, n, r, a, _) {
    null == i && (i = 0), null == s && (s = 0), null == e && (e = !1), this._isFacebook = e, this._assets = t.assets, this._factory = t.factory, N.call(this, t, this._isFacebook ? this._assets.get_buttonFacebookUp() : this._assets.get_buttonTwitterUp(), this._isFacebook ? this._assets.get_buttonFacebookOver() : this._assets.get_buttonTwitterOver(), 65, 65, s, i, n, r, a, _)
  };
  n["b10gph.gui.ButtonIcon"] = ze, ze.__name__ = ["b10gph", "gui", "ButtonIcon"], ze.__super__ = N, ze.prototype = e(N.prototype, {
    _init: function() {
      N.prototype._init.call(this)
    },
    onRollOver: function() {
      N.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Zt.INTERFACE, 0, 0, .25)
    },
    __class__: ze
  });
  var je = function(t, e, s, i, n, r, a, _) {
    null == i && (i = 0), null == s && (s = 0), null == e && (e = ""), this._assets = t.assets, this._factory = t.factory, N.call(this, t, this._assets.get_buttonSmallUp(), this._assets.get_buttonSmallOver(), 100, 30, s, i, n, r, a, _), this.setTitle(e)
  };
  n["b10gph.gui.ButtonSmall"] = je, je.__name__ = ["b10gph", "gui", "ButtonSmall"], je.__super__ = N, je.prototype = e(N.prototype, {
    _init: function() {
      N.prototype._init.call(this);
      var t = 5,
        e = 7,
        s = this.width - 2 * t,
        i = this.height - e,
        n = this._kernel.factory.createTextStyle(oe.BUTTON);
      n.size = 12, this._textUp = new es(this._kernel, s, i, this._title, n);
      var r = this._kernel.factory.createTextStyle(oe.BUTTON);
      r.size = 12, r.color = this._factory.COLOR_GREY, this._textOver = new es(this._kernel, s, i, this._title, r), this._textUp.set_x(this._textOver.set_x(t)), this._textUp.set_y(this._textOver.set_y(e)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
    },
    _updater: function(t) {
      null == t && (t = 0);
      var e = this.get_view().context.localToGlobal(0, 0);
      this.get_view().globalX = e.x, this.get_view().globalY = e.y, N.prototype._updater.call(this, t)
    },
    setTitle: function(t) {
      this._title = t, this._title = this._title.toUpperCase(), this._textUp.set_text(this._title), this._textOver.set_text(this._title)
    },
    onRollOver: function() {
      N.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Zt.INTERFACE, 0, 0, .25)
    },
    onClick: function() {
      N.prototype.onClick.call(this), this.isOver = !1
    },
    __class__: je
  });
  var We = function(t, e) {
    null == e && (e = !0), this._isAnimated = e, Fe.call(this, t, 120, 32, !1)
  };
  n["b10gph.gui.Coins"] = We, We.__name__ = ["b10gph", "gui", "Coins"], We.__super__ = Fe, We.prototype = e(Fe.prototype, {
    _init: function() {
      var t = this;
      Fe.prototype._init.call(this), this._displayValue = this._prevCoins = this._session.coins, this._isAnimated ? (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/location/Cars.png")), this._bitmap.sourceRect = new createjs.Rectangle(0, 630, 32, 32), this._bitmap.y = 3) : (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/HudProgress.png")), this._bitmap.sourceRect = new createjs.Rectangle(160, 80, 32, 32), this._bitmap.cache(0, 0, 32, 32)), this._bitmap.x = this.width - 32, this._context.addChild(this._bitmap), this._text = new es(this._kernel, this.width - 32 - 5, 35, d.string(this._displayValue), this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_COINS)), this._text.setPosition(.85 * this._text.width - 10, .5 * this._text.height + 1), this._text._context.regX = .85 * this._text.width, this._text._context.regY = .5 * this._text.height, this._session.get_isTester() && this.addEntity(new Ge(this._kernel, 0 | this.width, 0 | this.height, 0, 0, null, function() {
        t._session.coins += 100
      }), null, !0, 10), this.addEntity(this._text, null, !0, 1)
    },
    _updater: function(t) {
      null == t && (t = 0);
      var e = this;
      Fe.prototype._updater.call(this, t), this._isAnimated && (this._bitmap.sourceRect.x = this._updates % 32 * 32), this._age < 3e3 || (this._prevCoins != this._session.coins && (this._kernel.audio.start("Coin", Zt.INTERFACE, 0, 0, .65, null, !1), null != this._tweezer && this._tweezer.dispose(), this.addEntity(this._tweezer = new js(this._kernel, function(t) {
        e._text._context.scaleX = e._text._context.scaleY = t
      }, 1.75, 1, 0, 1e3, null, Gs.EASE_OUT, Vs.QUARTIC))), this._prevCoins = this._session.coins, this._displayValue != this._session.coins && (this._displayValue = Math.round(.8 * this._displayValue + .2 * this._session.coins), Math.abs(this._displayValue - this._session.coins) < 5 && (this._displayValue = this._session.coins), this._text.set_text(d.string(this._displayValue))))
    },
    __class__: We
  });
  var Xe = function(t) {
    Fe.call(this, t, t.factory.width, t.factory.height, !1)
  };
  n["b10gph.gui.Hud"] = Xe, Xe.__name__ = ["b10gph", "gui", "Hud"], Xe.__super__ = Fe, Xe.prototype = e(Fe.prototype, {
    _init: function() {
      var t = this;
      Fe.prototype._init.call(this);
      var e = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png"));
      this._context.addChild(e), this._coins = new We(this._kernel, !1), this.addEntity(this._coins, null, !0, 10), this._coins.setPosition(30, 12), this.addEntity(this._score = new es(this._kernel, 60, 35, "", this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_SCORE), !1, !1, 1), null, !0, 10), this._score.setPosition(.35 * this._score.width + 570, .5 * this._score.height + 13), this._score._context.regX = .35 * this._score.width, this._score._context.regY = .5 * this._score.height, this.addEntity(this._message = new es(this._kernel, this.width, 50, "", this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_MESSAGE), !1, !1, 10), null, !0, 10), this._message.setPosition(0, (this._factory.height + 90) / 2), this._message.get_view().set_isVisible(!1), this.addEntity(this._instructions = new Ye(this._kernel, this._assets.getAsset(this._system.isDesktop ? "assets/gui/InstructionsA.png" : "assets/gui/InstructionsB.png"), !1, this._instructionsAlpha), null, !0, 9), this._instructions.setPosition((this._factory.width - 300) / 2, this._factory.height - 200), this.addEntity(this._progress = new Ke(this._kernel), null, !0, 10), this._progress.setPosition((this._kernel.factory.width - this._progress.width) / 2, 9), this.configureScore(12);
      var s = function(e) {
          t._instructions.set_y(e)
        },
        i = function() {
          t.addEntity(new js(t._kernel, s, t._instructions.y, t._factory.height, 0, 1e3, 0, Gs.EASE_IN, Vs.BACK(), function() {
            t._instructions.get_view().set_isVisible(!1)
          }))
        };
      this.addEntity(new js(this._kernel, s, this._factory.height, this._instructions.y, 0, 1e3, 1e3, Gs.EASE_OUT, Vs.QUARTIC, i)), this.addEntity(new js(this._kernel, function(e) {
        t._progress.set_y(e)
      }, -this._progress.height, this._progress.y, 4e3, 1e3, 0, Gs.EASE_OUT, Vs.QUARTIC)), this.addEntity(new js(this._kernel, function(e) {
        t._score.set_y(e)
      }, -this._progress.height, this._score.y, 4e3, 1e3, 0, Gs.EASE_OUT, Vs.QUARTIC)), this.addEntity(new js(this._kernel, function(e) {
        t._coins.set_y(e)
      }, -this._progress.height, this._coins.y, 4e3, 1e3, 0, Gs.EASE_OUT, Vs.QUARTIC))
    },
    _updater: function(t) {
      null == t && (t = 0), Fe.prototype._updater.call(this, t)
    },
    configureScore: function(t) {
      var e = this;
      if (this._prevScore != t) {
        this._prevScore = t;
        var s;
        switch (t) {
          case 1:
            s = "st";
            break;
          case 2:
            s = "nd";
            break;
          case 3:
            s = "rd";
            break;
          default:
            s = "th"
        }
        var i = t + s;
        i = i.toUpperCase(), this._score.set_text(i), null != this._scoreTweezer && this._scoreTweezer.dispose(), this.addEntity(this._scoreTweezer = new js(this._kernel, function(t) {
          e._score._context.scaleX = e._score._context.scaleY = t
        }, 1.75, 1, 0, 1e3, null, Gs.EASE_OUT, Vs.QUARTIC))
      }
    },
    configureProgress: function(t) {
      this._progress.configure(t)
    },
    configureMessage: function(t) {
      var e = this;
      t = t.toUpperCase(), this.addEntity(new js(this._kernel, function(t) {
        e._message.set_y(t)
      }, this._factory.height, this._message.y, 0, 2e3, 0, Gs.EASE_OUT, Vs.ELASTIC())), this._message.set_text(t), this._message.get_view().set_isVisible(!0)
    },
    __class__: Xe
  });
  var Ke = function(t) {
    Fe.call(this, t, 420, 40, !1)
  };
  n["b10gph.gui.HudProgress"] = Ke, Ke.__name__ = ["b10gph", "gui", "HudProgress"], Ke.__super__ = Fe, Ke.prototype = e(Fe.prototype, {
    _init: function() {
      Fe.prototype._init.call(this), this._context.cache(0, 0, this.width, this.height);
      var t = this._context.cacheCanvas;
      this._context2d = t.getContext("2d", null), this._source = this._assets.getAsset("assets/gui/HudProgress.png")
    },
    _drawNeedle: function(t, e, s) {
      var i;
      switch (t[1]) {
        case 0:
          i = 0;
          break;
        case 1:
          i = 32;
          break;
        case 2:
          i = 64;
          break;
        case 3:
          i = 96;
          break;
        case 4:
          i = 128
      }
      this._context2d.drawImage(this._source, i + 8, 88, 16, 16, this._getX(e) + 74 - 8, Math.round(6 * s) + 12, 16, 16)
    },
    _getX: function(t) {
      return Math.round(Math.min(268 * t, 328))
    },
    configure: function(t) {
      this._context2d.clearRect(0, 0, this.width, this.height), this._context2d.fillStyle = "#cd040b", this._context2d.globalAlpha = .85;
      var e = Math.min(268 * t[t.length - 1].position, 268),
        s = this._context2d.createLinearGradient(74 + e, 0, 74 + e + 10, 3);
      s.addColorStop(0, "rgba(205, 4, 11, 1)"), s.addColorStop(1, "rgba(205, 4, 11, 0)"), this._context2d.fillStyle = s, this._context2d.beginPath(), this._context2d.moveTo(82, 8), this._context2d.lineTo(74 + e + 20, 8), this._context2d.lineTo(74 + e - 5 + 20, 33), this._context2d.lineTo(77, 33), this._context2d.fill(), this._context2d.globalAlpha = 1, this._context2d.drawImage(this._source, 0, 0, 420, 40, 0, 0, 420, 40);
      for (var i = 0; i < t.length;) {
        var n = t[i];
        ++i, this._drawNeedle(n.type, n.position, n.offset)
      }
      this._context2d.drawImage(this._source, 0, 40, 420, 40, 0, 0, 420, 40)
    },
    __class__: Ke
  });
  var Qe = function(t, e, s, i) {
    null == i && (i = !1), null == s && (s = 0), this._type = e, this._isSelected = i, Fe.call(this, t, 200, 405, !1), this.set_x(s)
  };
  n["b10gph.gui.LocationPreview"] = Qe, Qe.__name__ = ["b10gph", "gui", "LocationPreview"], Qe.__super__ = Fe, Qe.prototype = e(Fe.prototype, {
    _init: function() {
      Fe.prototype._init.call(this), this._vo = new De(this._kernel, this._type), this._mask = this._assets.getAsset("assets/gui/LocationPreviewMask.png"), this._image = this._assets.getAsset("assets/gui/LocationPreview.png"), this._bitmap = new createjs.Bitmap(this._mask), this._bitmap.cache(0, 0, this.width, this.height), this._context.addChild(this._bitmap);
      var t = this._factory.createTextStyle(oe.SUBHEAD);
      t.align = _e.CENTER, this._text = new es(this._kernel, 110, 30, this._vo.altTitle.toUpperCase(), t), this._text.setPosition(58, 100), this.addEntity(this._text, null, !0, 10), this._shine = new $e(this._kernel, this._mask), this._draw()
    },
    _draw: function() {
      var t;
      t = (0 | this.width) * function(t) {
        var e, s = t._type;
        return e = function(t) {
          var e;
          switch (s[1]) {
            case 0:
              e = 0;
              break;
            case 1:
              e = 1;
              break;
            case 2:
              e = 2;
              break;
            case 3:
              e = 3
          }
          return e
        }(t)
      }(this);
      var e = this._bitmap.cacheCanvas,
        s = e.getContext("2d", null);
      s.clearRect(0, 0, this.width, this.height), s.globalAlpha = 1, s.globalCompositeOperation = "source-out", s.drawImage(this._mask, 0, 0), s.globalCompositeOperation = "source-in", s.drawImage(this._image, t, 0, this.width, this.height, 0, 0, this.width, this.height), s.globalCompositeOperation = "source-atop", s.fillStyle = "#191919", this._isSelected ? s.globalAlpha = 0 : s.globalAlpha = .85, s.fillRect(0, 0, this.width, this.height), this._text.set_alpha(this._isSelected ? 1 : .15), this._shine.remove(!0), this._isSelected && this.addEntity(this._shine, null, !0, 15)
    },
    configure: function(t) {
      this._isSelected != t && (this._isSelected = t, this._draw()), this._isSelected = t
    },
    __class__: Qe
  });
  var Je = function(t) {
    Fe.call(this, t, 450, 105, !1)
  };
  n["b10gph.gui.Logo"] = Je, Je.__name__ = ["b10gph", "gui", "Logo"], Je.__super__ = Fe, Je.prototype = e(Fe.prototype, {
    _init: function() {
      Fe.prototype._init.call(this), this.addEntity(new $e(this._kernel, this._assets.getAsset("assets/gui/LogoShine.png")), null, !0, 1),
        this._context.addChild(new createjs.Bitmap(this._assets.getAsset("assets/gui/Logo.png")))
    },
    __class__: Je
  });
  var Ze = function(t) {
    this._assetManager = Ls.__cast(t.assets, le), this._buttonSize = 50, Ft.call(this, t, this._buttonSize, this._buttonSize, null, null, null, null, null, null, null, this._assetManager.overlayPauseUp, this._assetManager.overlayPauseOver, null, null, 4, 0, .85)
  };
  n["b10gph.gui.Overlay"] = Ze, Ze.__name__ = ["b10gph", "gui", "Overlay"], Ze.__super__ = Ft, Ze.prototype = e(Ft.prototype, {
    _init: function() {
      Ft.prototype._init.call(this);
      var t = this._kernel.factory.width - this._buttonSize - 5,
        e = 4;
      this.positionButton(re.PAUSE, t, e), this.positionButton(re.UNPAUSE, -this._buttonSize - 10, e), this.positionButton(re.BACK, -this._buttonSize - 10, e), this.positionButton(re.MUTE, -this._buttonSize - 10, e), this.positionButton(re.UNMUTE, -this._buttonSize - 10, e), this._flashView.set_isVisible(!0), this._pauseMenu = new qe(this._kernel), this.set_pauseEntity(this._pauseMenu)
    },
    flash: function(t, e, s, i) {
      null == i && (i = 16777215), null == s && (s = 1), null == e && (e = !0), 0 == i ? this._flashContext.compositeOperation = "source-over" : this._flashContext.compositeOperation = "lighter", Ft.prototype.flash.call(this, t, e, s, i)
    },
    _drawPause: function(t) {
      null == t && (t = !0), Ft.prototype._drawPause.call(this, t), this._pauseMenu.pauseHandler(t)
    },
    __class__: Ze
  });
  var qe = function(t) {
    he.call(this, t)
  };
  n["b10gph.gui.PauseMenu"] = qe, qe.__name__ = ["b10gph", "gui", "PauseMenu"], qe.__super__ = he, qe.prototype = e(he.prototype, {
    _init: function() {
      var t = this;
      he.prototype._init.call(this), this.addEntity(this._debugText = new es(this._kernel, this._factory.width - 20, 20, "", this._factory.createTextStyle(oe.SMALLPRINT), !0, !1, .5), null, !0, 2), this._debugText.setPosition(10, this._factory.height - this._debugText.height);
      var e = (this._kernel.factory.width - 200) / 2,
        s = (this._kernel.factory.height - 260) / 2,
        i = 65;
      this.addEntity(new Ve(this._kernel, this._kernel.getConfig("gui.buttons.unpause"), e, s, null, function() {
        t._kernel.overlay.activateButton(re.UNPAUSE)
      }), Jt.ALWAYS, !0, 1), this.addEntity(new Ve(this._kernel, this._kernel.getConfig("gui.buttons.audio"), e, s += i, null, function() {
        t._kernel.overlay._wasMute = !t._kernel.overlay._wasMute, t._kernel.overlay.activateButton(re.UNPAUSE)
      }), Jt.ALWAYS, !0, 1), this.addEntity(this._fullScreenButton = new Ve(this._kernel, this._kernel.getConfig("gui.buttons.fullScreen"), e, s += i, null, function() {
        t._stageClick(), t._kernel.overlay.activateButton(re.UNPAUSE)
      }), Jt.ALWAYS, !0, 1), this.addEntity(new Ve(this._kernel, this._kernel.getConfig("gui.buttons.back"), e, s += i, null, function() {
        t._kernel.overlay.activateButton(re.UNPAUSE), t._kernel.scenes.back()
      }), Jt.DEFEND, !0, 1), this.addEntity(new Ve(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), e, s, null, function() {
        t._kernel.overlay.activateButton(re.UNPAUSE), t._pressInstructions()
      }), Jt.STANDARD, !0, 1)
    },
    _disposer: function() {
      this._kernel._stage.removeEventListener("click", i(this, this._stageClick), !0), he.prototype._disposer.call(this)
    },
    _pressInstructions: function() {
      try {
        this._kernel.scenes.get_scene()._pressInstructions()
      } catch (t) {
        t instanceof Ps && (t = t.val), this._kernel.scenes.setScene(ae.INSTRUCTIONS)
      }
    },
    _updater: function(t) {
      null == t && (t = 0), he.prototype._updater.call(this, t), this._isFullScreenClicked = !1
    },
    pauseHandler: function(t) {
      var e = this;
      t ? (this._kernel._stage.addEventListener("click", i(this, this._stageClick), !0), this._debugText.set_text(this._factory.id.toLowerCase() + " v" + this._factory.version + " @ " + Math.round(this._kernel.getFramerate()) + "fps : " + this._session.cache.debugMessage), this.addEntity(new js(this._kernel, function(t) {
        e._context.y = t
      }, this._factory.height, 0, 0, 500, null, Gs.EASE_OUT, Vs.QUARTIC))) : this._kernel._stage.removeEventListener("click", i(this, this._stageClick), !0)
    },
    _stageClick: function(t) {
      this._kernel.isActive || this._isFullScreenClicked || this._fullScreenButton.isOver && (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen(), this._isFullScreenClicked = !0, null != t && t.stopPropagation())
    },
    __class__: qe
  });
  var $e = function(t, e, s) {
    null == s && (s = 1), this._context = new createjs.Container, this._alphaMask = e, this._speed = s, I.call(this, t, null, this._context)
  };
  n["b10gph.gui.Shine"] = $e, $e.__name__ = ["b10gph", "gui", "Shine"], $e.__super__ = I, $e.prototype = e(I.prototype, {
    _init: function() {
      I.prototype._init.call(this), this.width = this._alphaMask.width, this.height = this._alphaMask.height, this._context.compositeOperation = "lighter", this._context.cache(0, 0, this.width, this.height), this._canvas = this._context.cacheCanvas, this._context2d = this._canvas.getContext("2d", null), this._context.alpha = .35
    },
    _updater: function(t) {
      null == t && (t = 0), I.prototype._updater.call(this, t), this._draw()
    },
    _draw: function() {
      if (this._kernel.isEyeCandy) {
        this._context2d.clearRect(0, 0, this.width, this.height), this._context2d.globalCompositeOperation = "source-out", this._context2d.drawImage(this._alphaMask, 0, 0);
        var t = this._speed * this._age,
          e = this._rotatePoint(.5 * this.width * Math.sin(t / 900), .5 * this.height, t / 1e3, .5 * this.width, .5 * this.height),
          s = this._rotatePoint(this.width, .5 * this.height + .5 * this.height * Math.sin(t / 1300), t / 1e3, .5 * this.width, .5 * this.height),
          i = this._context2d.createLinearGradient(e.x, e.y, s.x, s.y);
        i.addColorStop(.15, "#000000"), i.addColorStop(.3, "#FFFFFF"), i.addColorStop(.5, "#333333"), i.addColorStop(.78, "#a6a6a6"), i.addColorStop(.82, "#bfbfbf"), i.addColorStop(.86, "#a6a6a6"), i.addColorStop(.88, "#FFFFFF"), i.addColorStop(.98, "#000000"), this._context2d.fillStyle = i, this._context2d.globalCompositeOperation = "source-in", this._context2d.fillRect(0, 0, this.width, this.height)
      }
    },
    _rotatePoint: function(t, e, s, i, n) {
      var r = Math.sin(s),
        a = Math.cos(s);
      t -= i, e -= n;
      var _ = t * a - e * r,
        o = t * r + e * a;
      return _ += i, o += n, {
        x: _,
        y: o
      }
    },
    __class__: $e
  });
  var ts = function(t, e, s, i, n) {
    null == n && (n = ""), null == i && (i = ""), null == s && (s = ""), null == e && (e = 1), this._bgColor = e, Fe.call(this, t, 230, 25, !1), this._column1.set_text(s.toUpperCase()), this._column2.set_text(i.toUpperCase()), this._column3.set_text(n.toUpperCase())
  };
  n["b10gph.gui.TableRow"] = ts, ts.__name__ = ["b10gph", "gui", "TableRow"], ts.__super__ = Fe, ts.prototype = e(Fe.prototype, {
    _init: function() {
      Fe.prototype._init.call(this);
      var t = new createjs.Bitmap(this._assets.getAsset("assets/gui/HudProgress.png"));
      t.sourceRect = new createjs.Rectangle(0, function(t) {
        var e, s = t._bgColor;
        return e = function(t) {
          var e;
          switch (s) {
            case 1:
              e = 112;
              break;
            case 2:
              e = 137;
              break;
            default:
              e = 162
          }
          return e
        }(t)
      }(this), 230, 25), this._context.addChild(t), this._column1 = new es(this._kernel, 110, 20, "", this._factory.createTextStyle(oe.BODY), !1, !1, 1), this._column1.setPosition(7, 2), this.addEntity(this._column1, null, !0, 1);
      var e = this._factory.createTextStyle(oe.BODY);
      e.align = _e.CENTER, this._column2 = new es(this._kernel, 70, 20, "", e, !1, !1, 1), this._column2.setPosition(100, 2), this.addEntity(this._column2, null, !0, 1);
      var s = this._factory.createTextStyle(oe.BODY);
      s.align = _e.RIGHT, this._column3 = new es(this._kernel, 50, 20, "", s, !1, !1, 1), this._column3.setPosition(173, 2), this.addEntity(this._column3, null, !0, 1)
    },
    __class__: ts
  });
  var es = function(t, e, s, i, n, r, a, _) {
    null == _ && (_ = 1), null == a && (a = !1), null == r && (r = !1), null == i && (i = ""), i = p.replace(i, "<BR/>", "\n"), i = p.replace(i, "<br/>", "\n"), Xt.call(this, t, e, s, i, n, r, a), this.set_alpha(_)
  };
  n["b10gph.gui.Text"] = es, es.__name__ = ["b10gph", "gui", "Text"], es.__super__ = Xt, es.prototype = e(Xt.prototype, {
    _init: function() {
      Xt.prototype._init.call(this);
      var t = new _("Firefox", "").match(window.navigator.userAgent);
      t && (this._textField.y += .25 * this.textStyle.size)
    },
    set_alpha: function(t) {
      return this._context.alpha = t
    },
    __class__: es
  });
  var ss = function(t, e) {
    this._title = e, Fe.call(this, t, 470, 100, !1)
  };
  n["b10gph.gui.Title"] = ss, ss.__name__ = ["b10gph", "gui", "Title"], ss.__super__ = Fe, ss.prototype = e(Fe.prototype, {
    _init: function() {
      Fe.prototype._init.call(this), this._context.addChild(new createjs.Bitmap(this._assets.getAsset("assets/gui/Title.png"))), this._text = new es(this._kernel, 460, 30, "", this._factory.createTextStyle(oe.HEADLINE), !1, !1, 1), this._text.setPosition(10, 54), this.addEntity(this._text, null, !0, 1), this.set_x(this._factory.width - this.width), this.configure(this._title)
    },
    configure: function(t) {
      this._title = t, this._title = this._title.toUpperCase(), this._text.set_text(this._title)
    },
    __class__: ss
  });
  var is = function(t, e) {
    this._type = e, Fe.call(this, t, 470, 40, !1)
  };
  n["b10gph.gui.Upgrade"] = is, is.__name__ = ["b10gph", "gui", "Upgrade"], is.__super__ = Fe, is.prototype = e(Fe.prototype, {
    _init: function() {
      Fe.prototype._init.call(this), this._prevCoins = this._session.coins;
      var t = new createjs.Bitmap(this._assets.getAsset("assets/gui/HudProgress.png"));
      t.x = 150, t.sourceRect = new createjs.Rectangle(0, 188, 200, 40), t.cache(0, 0, 200, 40), this._context.addChild(t);
      var e = d.string(this._kernel.getConfig(function(t) {
          var e, s = t._type;
          return e = function(t) {
            var e;
            switch (s[1]) {
              case 0:
                e = "gui.upgrades.speed";
                break;
              case 1:
                e = "gui.upgrades.steering";
                break;
              case 2:
                e = "gui.upgrades.acceleration";
                break;
              case 3:
                e = "gui.upgrades.boost"
            }
            return e
          }(t)
        }(this))).toUpperCase(),
        s = new createjs.Bitmap(this._assets.getAsset("assets/gui/HudProgress.png"));
      s.x = 110;
      var n, r = this._type;
      switch (r[1]) {
        case 0:
          n = 230;
          break;
        case 1:
          n = 270;
          break;
        case 2:
          n = 310;
          break;
        case 3:
          n = 350
      }
      s.sourceRect = new createjs.Rectangle(n, 112, 40, 40), s.cache(0, 0, 40, 40), this._context.addChild(s);
      var a = this._factory.createTextStyle(oe.BODY);
      a.align = _e.RIGHT, this._title = new es(this._kernel, 100, 20, e, a), this._title.setPosition(0, 8), this.addEntity(this._title, null, !0, 1), this._bars = new createjs.Container, this._bars.x = t.x, this._context.addChild(this._bars), this._button = new je(this._kernel, "", 340, 4, null, i(this, this.buy)), this._session.get_isTester() && this.addEntity(new Ge(this._kernel, 173, 25, this._bars.x + 10, 5, null, i(this, this._reduce)), null, !0, 1);
      var _ = this._factory.createTextStyle(oe.BODY);
      _.align = _e.CENTER, this._message = new es(this._kernel, 100, 20, "", _, null, null, .5), this._message.setPosition(340, 8), this.addEntity(this._message, null, !0, 29), this.configure(this._session.getUpgrade(this._type))
    },
    _updater: function(t) {
      null == t && (t = 0), Fe.prototype._updater.call(this, t), this._prevCoins != this._session.coins && (this._prevCoins = this._session.coins, this.configure(this._session.getUpgrade(this._type)))
    },
    _createBar: function(t, e) {
      var s = new createjs.Bitmap(this._assets.getAsset("assets/gui/HudProgress.png"));
      return s.x = e, s.sourceRect = new createjs.Rectangle(230 + 50 * (t - 1), 152, 55, 40), s.cache(0, 0, 55, 40), s
    },
    configure: function(t) {
      this._bars.removeAllChildren();
      var e = this._getPrice(t + 1),
        s = e <= this._session.coins;
      this._button.setTitle(d.string(this._kernel.getConfig("gui.buttons.buy")) + " " + e), 4 == t ? (this._button.remove(!0), this._message.set_text(d.string(this._kernel.getConfig("gui.scenes.shop.maxed")).toUpperCase())) : s ? (this._message.set_text(""), this.addEntity(this._button, null, !0, 30)) : (this._button.remove(!0), this._message.set_text(null == e ? "null" : "" + e));
      for (var i = 0; 4 > i;) {
        var n = i++;
        this._bars.addChild(this._createBar(t > n ? 1 : n == t && s ? 2 : 3, 41 * n + 8))
      }
    },
    _getPrice: function(t) {
      0 > t && (t = 0), t > 4 && (t = 4);
      var e = [0, 100, 300, 600, 1200];
      return e[t]
    },
    buy: function() {
      var t = this._session.getUpgrade(this._type),
        e = this._getPrice(t + 1),
        s = e <= this._session.coins;
      s && (this._session.coins -= e, this._session.setUpgrade(this._type, t + 1), this.configure(this._session.getUpgrade(this._type)), this._kernel.audio.start("Upgrade", Zt.INTERFACE, 0, 0, .5))
    },
    _reduce: function() {
      this._session.setUpgrade(this._type, this._session.getUpgrade(this._type) - 1), this.configure(this._session.getUpgrade(this._type))
    },
    __class__: is
  });
  var ns = function(t, e) {
    null == e && (e = 1), Fe.call(this, t, null, null, !1), this.set_alpha(e)
  };
  n["b10gph.gui.Vignette"] = ns, ns.__name__ = ["b10gph", "gui", "Vignette"], ns.__super__ = Fe, ns.prototype = e(Fe.prototype, {
    _init: function() {
      Fe.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/Vignette.png")), this._context.addChild(this._bitmap)
    },
    set_alpha: function(t) {
      return this._bitmap.alpha = t
    },
    __class__: ns
  });
  var rs = function(t, e, s, i, n) {
    null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), this._session = t.get_session(), this._assets = t.assets, this._factory = t.factory, this._system = t.system, s = !0, W.call(this, t, e, s, i, n)
  };
  n["b10gph.scenes.AScene"] = rs, rs.__name__ = ["b10gph", "scenes", "AScene"], rs.__super__ = W, rs.prototype = e(W.prototype, {
    _init: function() {
      W.prototype._init.call(this), this._easyTweezers = [], this._kernel.overlay.get_pauseEntity().setAgenda(Jt.STANDARD), this._factory.preventDefaultForKeys([ee.SPACE]), this._kernel.audio.start("MusicMenu", Zt.MUSIC, -1, 0, .5, null, !0)
    },
    _disposer: function() {
      this._factory.allowDefaultForKeys([ee.SPACE]), W.prototype._disposer.call(this)
    },
    _pressContinue: function() {
      this._kernel.log("button: continue: " + d.string(this.type));
      var t = this._factory.getNextSceneType(this.type);
      this.type == ae.RESULTS && 4 == this._session.level && (t = ae.INTERSTITIAL), this._kernel.inputs.keyboard.getIsKeyDown(ee.SQUARELEFT) && this._kernel.inputs.keyboard.getIsKeyDown(ee.SQUARERIGHT) && this._session.setIsTester(!this._session.get_isTester()), this._outro(function(t, e) {
        return function() {
          t(e)
        }
      }((ii = this._kernel.scenes, i(ii, ii.setScene)), t))
    },
    _pressReset: function() {
      this._kernel.log("button: reset: " + d.string(this.type)), this._session.reset(null), this._outro(function(t, e) {
        return function() {
          t(e)
        }
      }((ii = this._kernel.scenes, i(ii, ii.setScene)), ae.MENU))
    },
    _pressInstructions: function() {
      this._kernel.log("button: instructions"), this._outro(function(t, e) {
        return function() {
          t(e)
        }
      }((ii = this._kernel.scenes, i(ii, ii.setScene)), ae.INSTRUCTIONS))
    },
    _pressWebsite: function() {
		window.open( '//game24h.vn/', '_blank' )
      /* var t = this;
      this._kernel.log("url: website"), this._kernel.log("button: website"), ws.delay(function() {
        window.top.location.href = d.string(t._kernel.getConfig("settings.urls.website"))
      }, 500) */
    },
    _pressSocial: function(t) {
      null == t && (t = !1), this._kernel.log("button: social");
      var e = this._session.highScore,
        s = window.top.location.href;
      this._kernel.isLocal && (s = this._kernel.getConfig("settings.urls.website"));
      var i = "Can you beat my GRAND PRIX HERO personal best of " + e + "? #gphero",
        n = i + " by @b10bgames - Play in your browser here " + s,
        r = "";
      t ? (r = "http://www.facebook.com/sharer/sharer.php?u=__URL__&t=__MESSAGE__", r = p.replace(r, "__URL__", encodeURIComponent(s)), r = p.replace(r, "__MESSAGE__", encodeURIComponent(i))) : (r = "https://twitter.com/intent/tweet?text=__MESSAGE__", r = p.replace(r, "__MESSAGE__", encodeURIComponent(n))), ws.delay(function() {
        window.top.location.href = r
      }, 500)
    },
    _outro: function(t) {
      this._isOutroCalled || (this._isOutroCalled = !0, null != t && t())
    },
    _addBg: function(t, e, s) {
      null == s && (s = !1), null == e && (e = !0), null == t && (t = 1), this.addEntity(new He(this._kernel, this._assets.getAsset(s ? "assets/gui/SceneBgC.jpg" : e ? "assets/gui/SceneBgA.png" : "assets/gui/SceneBgB.png")), null, !0, t), this.addEntity(new ns(this._kernel, .5), null, !0, t + 1)
    },
    _addFg: function(t, e) {
      null == e && (e = !0), null == t && (t = 100);
      var s = this;
      this._fgHorizontal = new Ye(this._kernel, this._assets.getAsset("assets/gui/SceneFgHorizontal.png")), this._fgVertical = new Ye(this._kernel, this._assets.getAsset("assets/gui/SceneFgVertical.png")), this.addEntity(this._fgVertical, null, !0, t + 1), this.addEntity(new js(this._kernel, function(t) {
        s._fgVertical.set_y(t)
      }, this._factory.height, this._fgVertical.y, 750, 1e3, null, Gs.EASE_OUT, Vs.EXPONENTIAL)), e && (this.addEntity(this._fgHorizontal, null, !0, t), this.addEntity(new js(this._kernel, function(t) {
        s._fgHorizontal.set_x(t)
      }, -this._factory.width, this._fgHorizontal.x, 500, 1e3, null, Gs.EASE_OUT, Vs.EXPONENTIAL)))
    },
    _addButtons: function(t, e, s, i, n) {
      null == n && (n = 0), null == i && (i = 0), null == t && (t = 110);
      var r = this;
      this._buttonRight = e, this._buttonLeft = s, this._buttonRight.setPosition(this._factory.width - 200 - 30, this._factory.height - 65 - 18), this.addEntity(this._buttonRight, null, !0, t), this.addEntity(new js(this._kernel, function(t) {
        r._buttonRight.set_y(t)
      }, this._factory.height + 60, this._buttonRight.y, i + 1200, 2e3, null, Gs.EASE_OUT, Vs.ELASTIC())), null != this._buttonLeft && (this._buttonLeft.setPosition(this._buttonRight.x - 210, this._factory.height - 65 - 18), this.addEntity(this._buttonLeft, null, !0, t + 1), this.addEntity(new js(this._kernel, function(t) {
        r._buttonLeft.set_y(t)
      }, this._factory.height + 60, this._buttonLeft.y, n + 1400, 2e3, null, Gs.EASE_OUT, Vs.ELASTIC())))
    },
    _defaultOutro: function(t) {
      var e = this;
      if (!this._isOutroCalled) {
        this._isOutroCalled = !0;
        for (var s = 0, i = this.getEntitiesByClass(js); s < i.length;) {
          var n = i[s];
          ++s, n.remove()
        }
        return this._easyTweez(!1), null != this._buttonLeft && this.addEntity(new js(this._kernel, function(t) {
          e._buttonLeft.set_y(t)
        }, this._buttonLeft.y, this._factory.height, 0, 1e3, null, Gs.EASE_IN, Vs.BACK())), this.addEntity(new js(this._kernel, function(t) {
          e._buttonRight.set_y(t)
        }, this._buttonRight.y, this._factory.height, 100, 1e3, null, Gs.EASE_IN, Vs.BACK(), t)), this.addEntity(new js(this._kernel, function(t) {
          e._fgHorizontal.set_x(t)
        }, this._fgHorizontal.x, -this._factory.width, 250, 500, null, Gs.EASE_IN, Vs.EXPONENTIAL)), this.addEntity(new js(this._kernel, function(t) {
          e._fgVertical.set_y(t)
        }, this._fgVertical.y, this._factory.height, 500, 500, null, Gs.EASE_IN, Vs.EXPONENTIAL)), this._kernel.audio.start("Transition", Zt.INTERFACE, 0, 0, .25), this._kernel.isDebug ? void t() : void 0
      }
    },
    _easyTweez: function(t) {
      null == t && (t = !0);
      for (var e = 0, s = this._easyTweezers; e < s.length;) {
        var i = [s[e]];
        ++e, t ? i[0].isVerticalIn ? this.addEntity(new js(this._kernel, function(t) {
          return function(e) {
            t[0].guiEntity.set_y(e)
          }
        }(i), -this._factory.height + i[0].guiEntity.y, i[0].guiEntity.y, 500 + 100 * i[0].sequence, 2e3, null, Gs.EASE_OUT, Vs.QUARTIC)) : this.addEntity(new js(this._kernel, function(t) {
          return function(e) {
            t[0].guiEntity.set_x(e)
          }
        }(i), this._factory.width + i[0].guiEntity.x, i[0].guiEntity.x, 500 + 100 * i[0].sequence, 2e3, null, Gs.EASE_OUT, Vs.QUARTIC)) : this.addEntity(new js(this._kernel, function(t) {
          return function(e) {
            t[0].guiEntity.set_x(e)
          }
        }(i), i[0].guiEntity.x, -(1.5 * this._factory.width) + i[0].guiEntity.x, 50 * i[0].sequence, 500, null, Gs.EASE_IN, Vs.BACK()))
      }
    },
    _addEasyTweez: function(t, e, s) {
      null == s && (s = !0), this._easyTweezers.push({
        guiEntity: t,
        sequence: e,
        isVerticalIn: s
      })
    },
    _getLocationType: function(t) {
      return E.createEnumIndex(be, t % E.getEnumConstructs(be).length)
    },
    _getPoints: function(t) {
      var e = [0, 50, 40, 35, 32, 30, 28, 26, 24, 22, 20, 19, 18];
      return e[t % e.length]
    },
    _getRank: function(t) {
      var e;
      switch (t) {
        case 1:
          e = "st";
          break;
        case 2:
          e = "nd";
          break;
        case 3:
          e = "rd";
          break;
        default:
          e = "th"
      }
      switch (t) {
        case 1:
          return {
            rank: "good",
            message: d.string(this._kernel.getConfig("gui.rank.good")),
            ending: e
          };
        case 2:
        case 3:
          return {
            rank: "ok",
            message: d.string(this._kernel.getConfig("gui.rank.ok")),
            ending: e
          };
        default:
          return {
            rank: "poor",
            message: d.string(this._kernel.getConfig("gui.rank.poor")),
            ending: e
          }
      }
    },
    __class__: rs
  });
  var as = function(t, e, s, i, n) {
    null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), rs.call(this, t, e, s, i, n)
  };
  n["b10gph.scenes.Game"] = as, as.__name__ = ["b10gph", "scenes", "Game"], as.__super__ = rs, as.prototype = e(rs.prototype, {
    _init: function() {
      var t = this;
      if (rs.prototype._init.call(this), this.isPauseable = !0, this._kernel.overlay.get_pauseEntity().setAgenda(Jt.DEFEND), this._session.cache.totalPlays++, this.addEntity(this._hud = new Xe(this._kernel), null, !0, 100), this.addEntity(this._location = new Ne(this._kernel, this._getLocationType(this._session.level)), null, !0, 10), this._session.get_isTester()) {
        var e = new Ve(this._kernel, this._kernel.getConfig("gui.buttons.testMode.finish"), .15 * (this._kernel.factory.width - 200), this._kernel.factory.height - 80, null, function(t, e, s) {
            return function() {
              return t(e, s)
            }
          }(i(this, this._handleFinishLine), null, null)),
          s = new Ve(this._kernel, this._kernel.getConfig("gui.buttons.testMode.skip"), .85 * (this._kernel.factory.width - 200), this._kernel.factory.height - 80, null, i(this, this._gameOver));
        this._addButtons(null, s, e, 1e3, 1e3)
      }
      this._kernel.messenger.addSubscriber(this._entity, this._factory.MESSAGE_FINISH_LINE, i(this, this._handleFinishLine), null, null, !0), this._kernel.audio.stop(null, Zt.MUSIC), this._kernel.audio.start("MusicGame", Zt.MUSIC, -1, 0, .05, 0), this._kernel.audio.start("Engines", Zt.EFFECTS, 0, 0, 1, null, !0), this._kernel.audio.start("VocalStart", Zt.INTERFACE, 0, 0, 1, null, !0), this.addEntity(new js(this._kernel, function(e) {
        t._kernel.audio.transform("MusicGame", Zt.MUSIC, e)
      }, .05, .75, 2e3, 8e3)), this._kernel.log((this._session.cache.totalPlays > 1 ? "replay" : "play") + ": " + d.string(this._location.type))
    },
    _createDelay: function(t, e) {
      null == e && (e = 1e3), null == this._delay && this.addEntity(this._delay = new Qt(this._kernel, t, e))
    },
    _handleFinishLine: function(t, e) {
      for (var s = 0, n = this.getEntitiesByClass(Ve); s < n.length;) {
        var r = n[s];
        ++s, r.isDisposed || (r.isDisposed = !0, r.set_isActive(!1), r._disposer())
      }
      var a = this._location.getScore();
      this._hud.configureMessage(this._getRank(a).message), this._session.setScore(this._session.level, a), this._session.level++;
      var _ = this._getRank(a).rank;
      return this._kernel.log("rank: " + _ + ": " + d.string(this._location.type)), this._createDelay(i(this, this._gameOver), 5e3), this._kernel.overlay.flash(500, !0, .5, 16777215), this._kernel.audio.stop("MusicGame", Zt.MUSIC), this._kernel.audio.start("Driveby1", Zt.MUSIC, 1, 0, .5), this._kernel.audio.start("Engines", Zt.EFFECTS, 0, 0, .5), this._kernel.audio.start("VocalRank" + (_.charAt(0).toUpperCase() + o.substr(_, 1, null).toLowerCase()), Zt.INTERFACE, 0, 0, 1, null, !0), this._kernel.audio.start(3 >= a ? "MusicWin" : "MusicLose", Zt.INTERFACE, 1, 0, .5), this.addEntity(new ns(this._kernel, .65), null, !0, 90), !1
    },
    _gameOver: function() {
      this._kernel.scenes.next()
    },
    _updater: function(t) {
      null == t && (t = 0), rs.prototype._updater.call(this, t), this._hud.configureScore(this._location.getScore()), this._hud.configureProgress(this._location.getCars())
    },
    _disposer: function() {
      this._kernel.audio.stop(null, Zt.MUSIC), this._session.save(), rs.prototype._disposer.call(this)
    },
    __class__: as
  });
  var _s = function(t, e, s, i, n) {
    null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), rs.call(this, t, e, s, i, n)
  };
  n["b10gph.scenes.Instructions"] = _s, _s.__name__ = ["b10gph", "scenes", "Instructions"], _s.__super__ = rs, _s.prototype = e(rs.prototype, {
    _init: function() {
      rs.prototype._init.call(this), this._kernel.overlay.get_pauseEntity().setAgenda(Jt.DEFEND), this._kernel.audio.start("MusicMenu", Zt.MUSIC, -1, 0, .15, 0, !0), this._addBg(null, !1), this._addFg();
      var t = new ss(this._kernel, this._kernel.getConfig("gui.scenes.instructions.title"));
      this.addEntity(t, null, !0, 19);
      var e = new Ve(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, this._kernel.factory.keyNext, i(this, this._pressContinue));
      this._addButtons(null, e);
      var s = new Ye(this._kernel, this._assets.getAsset(this._system.isDesktop ? "assets/gui/InstructionsA.png" : "assets/gui/InstructionsB.png"));
      this.addEntity(s, null, !0, 20), s.setPosition((this._factory.width - s.width) / 2, (this._factory.height - s.height) / 2);
      var n = new es(this._kernel, 200, 300, d.string(this._kernel.getConfig("gui.scenes.instructions.message")), this._factory.createTextStyle(oe.BODY), !0, !1, .5);
      n.setPosition(this._kernel.factory.width - n.width - 20, 140), this.addEntity(n, null, !0, 21), this._addEasyTweez(t, 0), this._addEasyTweez(s, 1, !1), this._addEasyTweez(n, 2, !1), this._easyTweez(!0)
    },
    _outro: function(t) {
      this._defaultOutro(t)
    },
    __class__: _s
  });
  var os = function(t, e, s, i, n) {
    null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), rs.call(this, t, e, s, i, n)
  };
  n["b10gph.scenes.Interstitial"] = os, os.__name__ = ["b10gph", "scenes", "Interstitial"], os.__super__ = rs, os.prototype = e(rs.prototype, {
    _init: function() {
      var t = this;
      rs.prototype._init.call(this), this._kernel.audio.stop("MusicMenu", Zt.MUSIC), this._addBg(null, !1, !0), this._addFg(null, !1), this._logo = new Je(this._kernel), this._logo.setPosition(270, 220), this.addEntity(this._logo, null, !0, 100), this.addEntity(new js(this._kernel, function(e) {
        t._logo.set_x(e)
      }, -this._factory.width, this._logo.x, 1e3, 2e3, null, Gs.EASE_OUT, Vs.ELASTIC())), this.addEntity(new Qt(this._kernel, function() {
        t._kernel.audio.start("Driveby2", Zt.EFFECTS, 0, 0, 1)
      }, 1e3));
      var e = new Ve(this._kernel, this._kernel.getConfig("gui.buttons.replay"), 0, 0, this._kernel.factory.keyNext, i(this, this._pressContinue)),
        s = new Ve(this._kernel, this._kernel.getConfig("gui.buttons.website"), 0, 0, null, i(this, this._pressWebsite));
      this._addButtons(null, s, e, 6e3, 8e3), this._buttonTwitter = new ze(this._kernel, !1, 555, 155, null, function(t, e) {
        return function() {
          t(e)
        }
      }(i(this, this._pressSocial), !1)), this.addEntity(this._buttonTwitter, null, !0, 30), this._buttonFacebook = new ze(this._kernel, !0, 625, 155, null, function(t, e) {
        return function() {
          t(e)
        }
      }(i(this, this._pressSocial), !0)), this.addEntity(this._buttonFacebook, null, !0, 30), this.addEntity(new js(this._kernel, function(e) {
        t._buttonTwitter.set_x(e)
      }, this._factory.width, this._buttonTwitter.x, 3e3, 2e3, null, Gs.EASE_OUT, Vs.ELASTIC())), this.addEntity(new js(this._kernel, function(e) {
        t._buttonFacebook.set_x(e)
      }, this._factory.width, this._buttonFacebook.x, 3100, 2e3, null, Gs.EASE_OUT, Vs.ELASTIC()));
      var n = 25,
        r = this._getPoints(this._session.scoreLevel0) + this._getPoints(this._session.scoreLevel1) + this._getPoints(this._session.scoreLevel2) + this._getPoints(this._session.scoreLevel3);
      this._session.sendApiScore(r);
      var a = new es(this._kernel, 270, 300, d.string(d.string(this._kernel.getConfig("gui.scenes.interstitial.total")) + " " + r + " / 200").toUpperCase(), this._factory.createTextStyle(oe.OVERSIZED), !0, !1, 1);
      a.setPosition(this._kernel.factory.width - a.width - 40, 85), this.addEntity(a, null, !0, 21);
      var _ = new es(this._kernel, 270, 300, d.string(d.string(this._kernel.getConfig("gui.scenes.interstitial.personalBest")) + " " + this._session.highScore + " / 200").toUpperCase(), this._factory.createTextStyle(oe.OVERSIZED), !0, !1, 1);
      _.setPosition(this._kernel.factory.width - _.width - 40, a.y + n), this.addEntity(_, null, !0, 21), this._addEasyTweez(a, 3, !1), this._addEasyTweez(_, 4, !1);
      var o = new Ye(this._kernel, this._assets.getAsset("assets/gui/Sponsor.png"));
      o.setPosition(35, 328);
      var h = new Ge(this._kernel, 0 | o.width, 0 | o.height, o.x, o.y, null, i(this, this._pressWebsite));
      this.addEntity(o, null, !0, 120), this.addEntity(h, null, !0, 1), this._easyTweez()
    },
    _outro: function(t) {
      var e = this;
      this._defaultOutro(t), this._kernel.audio.start("Driveby1", Zt.INTERFACE, 0, 0, .5, 0, !0), this.addEntity(new js(this._kernel, function(t) {
        e._logo.set_x(t)
      }, this._logo.x, this._factory.width, 0, 1e3, null, Gs.EASE_IN, Vs.BACK())), this.addEntity(new js(this._kernel, function(t) {
        e._buttonTwitter.set_x(t)
      }, this._buttonTwitter.x, -200, 100, 500, null, Gs.EASE_IN, Vs.BACK())), this.addEntity(new js(this._kernel, function(t) {
        e._buttonFacebook.set_x(t)
      }, this._buttonFacebook.x, -200, 0, 500, null, Gs.EASE_IN, Vs.BACK()))
    },
    __class__: os
  });
  var hs = function(t, e, s, i, n) {
    null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), rs.call(this, t, e, s, i, n)
  };
  n["b10gph.scenes.Intro"] = hs, hs.__name__ = ["b10gph", "scenes", "Intro"], hs.__super__ = rs, hs.prototype = e(rs.prototype, {
    _init: function() {
      rs.prototype._init.call(this);
      var t = this._factory.createCanvas(this._factory.width, this._factory.height);
      this._destinationContext2d = t.getContext("2d", null), this._sourceImage = this._assets.getAsset("assets/location/RoadA.jpg"), this._sourceCanvas = this._factory.createCanvas(this._sourceImage.width, this._sourceImage.height), this._sourceCanvas.getContext("2d", null).drawImage(this._sourceImage, 0, 0)
    },
    _updater: function(t) {
      if (null == t && (t = 0), rs.prototype._updater.call(this, t), 1 == this._updates) {
        var e = this._stressTest(this._sourceImage),
          s = this._stressTest(this._sourceCanvas),
          i = this._stressTest(this._sourceCanvas),
          n = this._stressTest(this._sourceImage),
          r = e + n,
          a = s + i,
          _ = Math.round(100 * r / a) / 100,
          o = 1.7 > _,
          h = Math.round(100 * (o ? a : r) / 300);
        this._session.cache.isDrawImageUsingCanvas = o, this._session.cache.benchmark = Math.round(100 * h), this._session.cache.debugMessage = (null == _ ? "null" : "" + _) + "|" + this._session.cache.benchmark;
        var u = "\n\n\n\nAnd the results are ...\n\n";
        u += "Image1: " + e + "\n", u += "Canvas2: " + s + "\n", u += "Image2: " + n + "\n", u += "Canvas2: " + i + "\n", u += "Ratio: " + _ + "\n", u += "\nTherefore ... isDrawImageUsingCanvas = " + (null == o ? "null" : "" + o), u += "\n\nWith a benchmark of " + h
      }
      this._kernel.scenes.next()
    },
    _stressTest: function(t) {
      var e = 0,
        s = Math.round(1e3 * ws.stamp());
      this._destinationContext2d.restore(), this._destinationContext2d.clearRect(0, 0, this._factory.width, this._factory.height);
      for (var i = s; s + 100 > i;) i = Math.round(1e3 * ws.stamp()), this._destinationContext2d.drawImage(t, 0, 0, 512, 4, 0, d.random(256), 2048, 16), this._destinationContext2d.drawImage(t, 0, 0, 512, 4, 0, d.random(256), 828.416, 6.472), this._destinationContext2d.drawImage(t, 0, 0, 512, 64, 0, d.random(256), 128, 16), this._destinationContext2d.drawImage(t, 0, 0, 512, 64, 0, d.random(256), 316.4400494437577, 39.55500618046971), e++;
      return e
    },
    __class__: hs
  });
  var us = function(t, e, s, i, n) {
    null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), rs.call(this, t, e, s, i, n)
  };
  n["b10gph.scenes.Menu"] = us, us.__name__ = ["b10gph", "scenes", "Menu"], us.__super__ = rs, us.prototype = e(rs.prototype, {
    _init: function() {
      var t = this;
      rs.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Zt.MUSIC, -1, 0, .15, 0, !0), this._kernel.audio.start("Engines", Zt.EFFECTS, 0, 0, .5), this._addBg(null, !0), this._addFg(null, !1), this._logo = new Je(this._kernel), this._logo.setPosition(270, 220), this.addEntity(this._logo, null, !0, 100), this.addEntity(new js(this._kernel, function(e) {
        t._logo.set_x(e)
      }, -this._factory.width, this._logo.x, 2500, 2e3, null, Gs.EASE_OUT, Vs.ELASTIC())), this.addEntity(new Qt(this._kernel, function() {
        t._kernel.audio.start("Driveby2", Zt.EFFECTS, 0, 0, 1)
      }, 2500));
      var e = new Ve(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, this._kernel.factory.keyNext, i(this, this._pressContinue)),
        s = new Ve(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), 0, 0, null, i(this, this._pressInstructions));
      this._addButtons(null, e, s);
      var n = new Ye(this._kernel, this._assets.getAsset("assets/gui/Sponsor.png"));
      n.setPosition(35, 328);
      var r = new Ge(this._kernel, 0 | n.width, 0 | n.height, n.x, n.y, null, i(this, this._pressWebsite));
      this.addEntity(n, null, !0, 120), this.addEntity(r, null, !0, 1), this._easyTweez()
    },
    _outro: function(t) {
      var e = this;
      this._defaultOutro(t), this._kernel.audio.start("Driveby1", Zt.INTERFACE, 0, 0, .5, 0, !0), this.addEntity(new js(this._kernel, function(t) {
        e._logo.set_x(t)
      }, this._logo.x, this._factory.width, 0, 1e3, null, Gs.EASE_IN, Vs.BACK()))
    },
    __class__: us
  });
  var ls = function(t, e, s, i, n) {
    null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), rs.call(this, t, e, s, i, n)
  };
  n["b10gph.scenes.Results"] = ls, ls.__name__ = ["b10gph", "scenes", "Results"], ls.__super__ = rs, ls.prototype = e(rs.prototype, {
    _init: function() {
      rs.prototype._init.call(this), this._isFinished = 4 == this._session.level, this._kernel.audio.start("MusicMenu", Zt.MUSIC, 0, 0, .15, 0, !0), this._addBg(null, !1), this._addFg();
      var t = new ss(this._kernel, p.replace(d.string(this._kernel.getConfig("gui.scenes.results.title")), "__X__", d.string(this._session.level)));
      this.addEntity(t, null, !0, 19);
      var e = new We(this._kernel);
      e.setPosition(585, 53), this.addEntity(e, null, !0, 30);
      var s = new Ve(this._kernel, this._kernel.getConfig(this._isFinished ? "gui.buttons.finished" : "gui.buttons.continue"), 0, 0, this._kernel.factory.keyNext, i(this, this._pressContinue));
      this._addButtons(null, s);
      var n = new ts(this._kernel, 1, this._kernel.getConfig("gui.scenes.results.table.location"), this._kernel.getConfig("gui.scenes.results.table.position"), this._kernel.getConfig("gui.scenes.results.table.points"));
      n.setPosition(260, 110), this.addEntity(n, null, !0, 20);
      var r = this._createTableScoreRow(0, 260, 135);
      this.addEntity(r, null, !0, 20);
      var a = this._createTableScoreRow(1, 260, 160);
      this.addEntity(a, null, !0, 20);
      var _ = this._createTableScoreRow(2, 260, 185);
      this.addEntity(_, null, !0, 20);
      var o = this._createTableScoreRow(3, 260, 210);
      this.addEntity(o, null, !0, 20);
      var h = this._getPoints(this._session.scoreLevel0) + this._getPoints(this._session.scoreLevel1) + this._getPoints(this._session.scoreLevel2) + this._getPoints(this._session.scoreLevel3),
        u = new ts(this._kernel, 1, this._kernel.getConfig("gui.scenes.results.table.total"), "", null == h ? "null" : "" + h);
      u.setPosition(260, 235), this.addEntity(u, null, !0, 20), this._session.level >= 4 && this._session.highScore < h && (this._session.highScore = h), this._session.coins += 10 * this._getPoints(this._session.getScore(this._session.level - 1));
      var l = new ts(this._kernel, 3, this._kernel.getConfig("gui.scenes.results.table.personalBest"), "", d.string(this._session.highScore));
      l.setPosition(260, 260), this.addEntity(l, null, !0, 20);
      var c = this._session.getScore(this._session.level - 1),
        g = this._getRank(c),
        f = this._getPoints(c),
        E = g.message + "<br/><br/>" + p.replace(p.replace(this._kernel.getConfig("gui.scenes.results.message"), "__SCORE__", c + g.ending), "__POINTS__", null == f ? "null" : "" + f),
        y = new es(this._kernel, 180, 300, E, this._factory.createTextStyle(oe.BODY), !0, !1, .5);
      y.setPosition(this._kernel.factory.width - y.width - 20, 140), this.addEntity(y, null, !0, 21), this._addEasyTweez(t, 0), this._addEasyTweez(e, 0), this._addEasyTweez(n, 1, !1),
        this._addEasyTweez(r, 2, !1), this._addEasyTweez(a, 3, !1), this._addEasyTweez(_, 4, !1), this._addEasyTweez(o, 5, !1), this._addEasyTweez(u, 6, !1), this._addEasyTweez(l, 7, !1), this._addEasyTweez(y, 8, !1), this._easyTweez(!0)
    },
    _outro: function(t) {
      this._defaultOutro(t), this._isFinished && (this._kernel.audio.stop(null, Zt.MUSIC), this._kernel.audio.start("MusicWin", Zt.MUSIC, 1, 0, .5))
    },
    _createTableScoreRow: function(t, e, s) {
      var i = this._kernel.getConfig(function(e) {
          var s;
          switch (t) {
            case 0:
              s = "gui.locations.a";
              break;
            case 1:
              s = "gui.locations.b";
              break;
            case 2:
              s = "gui.locations.c";
              break;
            default:
              s = "gui.locations.d"
          }
          return s
        }(this)),
        n = this._session.getScore(t),
        r = n + this._getRank(n).ending,
        a = d.string(this._getPoints(n));
      0 == n && (r = "-", a = "-");
      var _ = new ts(this._kernel, 2, t + 1 + ". " + i, r, a);
      return _.setPosition(e, s), _
    },
    __class__: ls
  });
  var cs = function(t) {
    var e = 500;
    Gt.call(this, t, e)
  };
  n["b10gph.scenes.SceneTransition"] = cs, cs.__name__ = ["b10gph", "scenes", "SceneTransition"], cs.__super__ = Gt, cs.prototype = e(Gt.prototype, {
    _init: function() {
      Gt.prototype._init.call(this)
    },
    __class__: cs
  });
  var ds = function(t, e, s, i, n) {
    null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), rs.call(this, t, e, s, i, n)
  };
  n["b10gph.scenes.SelectLevel"] = ds, ds.__name__ = ["b10gph", "scenes", "SelectLevel"], ds.__super__ = rs, ds.prototype = e(rs.prototype, {
    _init: function() {
      rs.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Zt.MUSIC, -1, 0, .15, 0, !0), this._addBg(null, !1), this._addFg(), this._session.level > 3 && (this._session.level = 0), 0 == this._session.level && this._session.resetGame(), this._title = new ss(this._kernel, ""), this.addEntity(this._title, null, !0, 19);
      var t = 190,
        e = 110;
      this.addEntity(this._locationA = new Qe(this._kernel, be.LOCATION_A, t), null, !0, 25), this.addEntity(this._locationB = new Qe(this._kernel, be.LOCATION_B, t += e), null, !0, 25), this.addEntity(this._locationC = new Qe(this._kernel, be.LOCATION_C, t += e), null, !0, 25), this.addEntity(this._locationD = new Qe(this._kernel, be.LOCATION_D, t += e), null, !0, 25), this._configureLevel(this._session.level);
      var s = !1;
      if (s) {
        var n = 250;
        this.addEntity(new Ge(this._kernel, 70, 220, n, 100, null, function(t, e) {
          return function() {
            t(e)
          }
        }(i(this, this._pressLevelPreview), 0)), null, !0, 10), this.addEntity(new Ge(this._kernel, 70, 220, n += e, 100, null, function(t, e) {
          return function() {
            t(e)
          }
        }(i(this, this._pressLevelPreview), 1)), null, !0, 10), this.addEntity(new Ge(this._kernel, 70, 220, n += e, 100, null, function(t, e) {
          return function() {
            t(e)
          }
        }(i(this, this._pressLevelPreview), 2)), null, !0, 10), this.addEntity(new Ge(this._kernel, 70, 220, n += e, 100, null, function(t, e) {
          return function() {
            t(e)
          }
        }(i(this, this._pressLevelPreview), 3)), null, !0, 10)
      }
      var r = new Ve(this._kernel, this._kernel.getConfig("gui.buttons.selectLevel"), 0, 0, this._kernel.factory.keyNext, i(this, this._pressContinue));
      this._addButtons(null, r), this._addEasyTweez(this._title, 0), this._addEasyTweez(this._locationA, 1, !1), this._addEasyTweez(this._locationB, 2, !1), this._addEasyTweez(this._locationC, 3, !1), this._addEasyTweez(this._locationD, 4, !1), this._easyTweez()
    },
    _updater: function(t) {
      null == t && (t = 0), rs.prototype._updater.call(this, t), this._session.get_isTester() && (this._kernel.inputs.joypad.getIsButtonPress($t.RIGHT) && this._configureLevel(this._session.level + 1), this._kernel.inputs.joypad.getIsButtonPress($t.LEFT) && this._configureLevel(this._session.level - 1))
    },
    _outro: function(t) {
      this._kernel.audio.stop(null, Zt.MUSIC), this._kernel.audio.start("Engines", Zt.EFFECTS, 0, 0, 1), this._defaultOutro(t)
    },
    _configureLevel: function(t) {
      if (!this._isOutroCalled) {
        this._session.level = d["int"](this._tools.range(t, 0, 4));
        var e = this._getLocationType(this._session.level),
          s = p.replace(d.string(this._kernel.getConfig("gui.scenes.selectLevel.title")), "__X__", d.string(this._session.level + 1));
        switch (this._title.configure(s), this._locationA.configure(!1), this._locationB.configure(!1), this._locationC.configure(!1), this._locationD.configure(!1), e[1]) {
          case 0:
            this._locationA.configure(!0);
            break;
          case 1:
            this._locationB.configure(!0);
            break;
          case 2:
            this._locationC.configure(!0);
            break;
          case 3:
            this._locationD.configure(!0)
        }
      }
    },
    _pressLevelPreview: function(t) {
      this._configureLevel(t), this._pressContinue()
    },
    __class__: ds
  });
  var gs = function(t, e, s, i, n) {
    null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), rs.call(this, t, e, s, i, n)
  };
  n["b10gph.scenes.Shop"] = gs, gs.__name__ = ["b10gph", "scenes", "Shop"], gs.__super__ = rs, gs.prototype = e(rs.prototype, {
    _init: function() {
      rs.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Zt.MUSIC, 0, 0, .15, 0, !0), this._addBg(null, !1), this._addFg();
      var t = new ss(this._kernel, this._kernel.getConfig("gui.scenes.shop.title"));
      this.addEntity(t, null, !0, 19);
      var e = new We(this._kernel);
      e.setPosition(585, 53), this.addEntity(e, null, !0, 30);
      var s = new Ve(this._kernel, this._kernel.getConfig("gui.buttons.continue"), 0, 0, this._kernel.factory.keyNext, i(this, this._pressContinue)),
        n = new Ve(this._kernel, this._kernel.getConfig("gui.buttons.reset"), 0, 0, null, i(this, this._pressReset));
      this._addButtons(null, s, 1 == this._session.getPercentageComplete() ? n : null);
      var r = 250,
        a = 130,
        _ = this._createUpgrade(Re.UPGRADE_SPEED, r, a);
      this.addEntity(_, null, !0, 22);
      var o = this._createUpgrade(Re.UPGRADE_STEERING, r, a += 40);
      this.addEntity(o, null, !0, 22);
      var h = this._createUpgrade(Re.UPGRADE_ACCELERATION, r, a += 40);
      this.addEntity(h, null, !0, 22);
      var u = this._createUpgrade(Re.UPGRADE_BOOST, r, a += 40);
      this.addEntity(u, null, !0, 22), this._addEasyTweez(t, 0), this._addEasyTweez(e, 0), this._addEasyTweez(_, 1, !1), this._addEasyTweez(o, 2, !1), this._addEasyTweez(h, 3, !1), this._addEasyTweez(u, 4, !1), this._easyTweez(!0)
    },
    _outro: function(t) {
      this._defaultOutro(t)
    },
    _createUpgrade: function(t, e, s) {
      var i = new is(this._kernel, t);
      return i.setPosition(e, s), i
    },
    __class__: gs
  });
  var ps = function() {};
  n["haxe.IMap"] = ps, ps.__name__ = ["haxe", "IMap"];
  var fs = function(t) {
    this.url = t, this.headers = new u, this.params = new u, this.async = !0
  };
  n["haxe.Http"] = fs, fs.__name__ = ["haxe", "Http"], fs.prototype = {
    request: function(t) {
      var e = this;
      e.responseData = null;
      var s = this.req = Ms.createXMLHttpRequest(),
        i = function(t) {
          if (4 == s.readyState) {
            var i;
            try {
              i = s.status
            } catch (n) {
              n instanceof Ps && (n = n.val), i = null
            }
            if (null != i) {
              var r = window.location.protocol.toLowerCase(),
                a = new _("^(?:about|app|app-storage|.+-extension|file|res|widget):$", ""),
                o = a.match(r);
              o && (i = null != s.responseText ? 200 : 404)
            }
            if (void 0 == i && (i = null), null != i && e.onStatus(i), null != i && i >= 200 && 400 > i) e.req = null, e.onData(e.responseData = s.responseText);
            else if (null == i) e.req = null, e.onError("Failed to connect or resolve host");
            else switch (i) {
              case 12029:
                e.req = null, e.onError("Failed to connect to host");
                break;
              case 12007:
                e.req = null, e.onError("Unknown host");
                break;
              default:
                e.req = null, e.responseData = s.responseText, e.onError("Http Error #" + s.status)
            }
          }
        };
      this.async && (s.onreadystatechange = i);
      var n = this.postData;
      if (null != n) t = !0;
      else
        for (var r = this.params.h, a = null; null != r;) {
          var o;
          o = function(t) {
            var e;
            return a = r[0], r = r[1], e = a
          }(this), null == n ? n = "" : n += "&", n += encodeURIComponent(o.param) + "=" + encodeURIComponent(o.value)
        }
      try {
        if (t) s.open("POST", this.url, this.async);
        else if (null != n) {
          var u = this.url.split("?").length <= 1;
          s.open("GET", this.url + (u ? "?" : "&") + n, this.async), n = null
        } else s.open("GET", this.url, this.async)
      } catch (l) {
        return l instanceof Ps && (l = l.val), e.req = null, void this.onError(l.toString())
      }!h.exists(this.headers, function(t) {
        return "Content-Type" == t.header
      }) && t && null == this.postData && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      for (var c = this.headers.h, d = null; null != c;) {
        var g;
        g = function(t) {
          var e;
          return d = c[0], c = c[1], e = d
        }(this), s.setRequestHeader(g.header, g.value)
      }
      s.send(n), this.async || i(null)
    },
    onData: function(t) {},
    onError: function(t) {},
    onStatus: function(t) {},
    __class__: fs
  };
  var Es = function(t, e) {
    this.high = t, this.low = e
  };
  n["haxe._Int64.___Int64"] = Es, Es.__name__ = ["haxe", "_Int64", "___Int64"], Es.prototype = {
    __class__: Es
  };
  var ys = function() {};
  n["haxe.Log"] = ys, ys.__name__ = ["haxe", "Log"], ys.trace = function(t, e) {
    Ls.__trace(t, e)
  };
  var vs = function() {};
  n["haxe.Resource"] = vs, vs.__name__ = ["haxe", "Resource"], vs.getString = function(t) {
    for (var e = 0, s = vs.content; e < s.length;) {
      var i = s[e];
      if (++e, i.name == t) {
        if (null != i.str) return i.str;
        var n = bs.decode(i.data);
        return n.toString()
      }
    }
    return null
  };
  var ms = function() {
    this.buf = new g, this.cache = [], this.useCache = ms.USE_CACHE, this.useEnumIndex = ms.USE_ENUM_INDEX, this.shash = new Ns, this.scount = 0
  };
  n["haxe.Serializer"] = ms, ms.__name__ = ["haxe", "Serializer"], ms.run = function(t) {
    var e = new ms;
    return e.serialize(t), e.toString()
  }, ms.prototype = {
    toString: function() {
      return this.buf.b
    },
    serializeString: function(t) {
      var e = this.shash.get(t);
      return null != e ? (this.buf.b += "R", void(null == e ? this.buf.b += "null" : this.buf.b += "" + e)) : (this.shash.set(t, this.scount++), this.buf.b += "y", t = encodeURIComponent(t), null == t.length ? this.buf.b += "null" : this.buf.b += "" + t.length, this.buf.b += ":", void(null == t ? this.buf.b += "null" : this.buf.b += "" + t))
    },
    serializeRef: function(t) {
      for (var e = typeof t, s = 0, i = this.cache.length; i > s;) {
        var n = s++,
          r = this.cache[n];
        if (typeof r == e && r == t) return this.buf.b += "r", null == n ? this.buf.b += "null" : this.buf.b += "" + n, !0
      }
      return this.cache.push(t), !1
    },
    serializeFields: function(t) {
      for (var e = 0, s = c.fields(t); e < s.length;) {
        var i = s[e];
        ++e, this.serializeString(i), this.serialize(c.field(t, i))
      }
      this.buf.b += "g"
    },
    serialize: function(t) {
      var e = E["typeof"](t);
      switch (e[1]) {
        case 0:
          this.buf.b += "n";
          break;
        case 1:
          var s = t;
          if (0 == s) return void(this.buf.b += "z");
          this.buf.b += "i", null == s ? this.buf.b += "null" : this.buf.b += "" + s;
          break;
        case 2:
          var i = t;
          isNaN(i) ? this.buf.b += "k" : isFinite(i) ? (this.buf.b += "d", null == i ? this.buf.b += "null" : this.buf.b += "" + i) : 0 > i ? this.buf.b += "m" : this.buf.b += "p";
          break;
        case 3:
          t ? this.buf.b += "t" : this.buf.b += "f";
          break;
        case 6:
          var n = e[2];
          if (n == String) return void this.serializeString(t);
          if (this.useCache && this.serializeRef(t)) return;
          switch (n) {
            case Array:
              var r = 0;
              this.buf.b += "a";
              for (var a = t.length, _ = 0; a > _;) {
                var o = _++;
                null == t[o] ? r++ : (r > 0 && (1 == r ? this.buf.b += "n" : (this.buf.b += "u", null == r ? this.buf.b += "null" : this.buf.b += "" + r), r = 0), this.serialize(t[o]))
              }
              r > 0 && (1 == r ? this.buf.b += "n" : (this.buf.b += "u", null == r ? this.buf.b += "null" : this.buf.b += "" + r)), this.buf.b += "h";
              break;
            case u:
              this.buf.b += "l";
              for (var h = t, l = h.h, p = null; null != l;) {
                var f;
                p = l[0], l = l[1], f = p, this.serialize(f)
              }
              this.buf.b += "h";
              break;
            case Date:
              var y = t;
              this.buf.b += "v", this.buf.add(y.getTime());
              break;
            case Ns:
              this.buf.b += "b";
              for (var v = t, m = v.keys(); m.hasNext();) {
                var w = m.next();
                this.serializeString(w), this.serialize(null != li[w] ? v.getReserved(w) : v.h[w])
              }
              this.buf.b += "h";
              break;
            case Is:
              this.buf.b += "q";
              for (var S = t, T = S.keys(); T.hasNext();) {
                var b = T.next();
                this.buf.b += ":", null == b ? this.buf.b += "null" : this.buf.b += "" + b, this.serialize(S.h[b])
              }
              this.buf.b += "h";
              break;
            case ks:
              this.buf.b += "M";
              for (var C = t, A = C.keys(); A.hasNext();) {
                var R = A.next(),
                  I = c.field(R, "__id__");
                c.deleteField(R, "__id__"), this.serialize(R), R.__id__ = I, this.serialize(C.h[R.__id__])
              }
              this.buf.b += "h";
              break;
            case Ts:
              for (var k = t, N = 0, D = k.length - 2, x = new g, O = ms.BASE64; D > N;) {
                var U = k.get(N++),
                  P = k.get(N++),
                  L = k.get(N++);
                x.add(O.charAt(U >> 2)), x.add(O.charAt(63 & (U << 4 | P >> 4))), x.add(O.charAt(63 & (P << 2 | L >> 6))), x.add(O.charAt(63 & L))
              }
              if (N == D) {
                var M = k.get(N++),
                  B = k.get(N++);
                x.add(O.charAt(M >> 2)), x.add(O.charAt(63 & (M << 4 | B >> 4))), x.add(O.charAt(B << 2 & 63))
              } else if (N == D + 1) {
                var F = k.get(N++);
                x.add(O.charAt(F >> 2)), x.add(O.charAt(F << 4 & 63))
              }
              var Y = x.b;
              this.buf.b += "s", null == Y.length ? this.buf.b += "null" : this.buf.b += "" + Y.length, this.buf.b += ":", null == Y ? this.buf.b += "null" : this.buf.b += "" + Y;
              break;
            default:
              this.useCache && this.cache.pop(), null != t.hxSerialize ? (this.buf.b += "C", this.serializeString(E.getClassName(n)), this.useCache && this.cache.push(t), t.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(E.getClassName(n)), this.useCache && this.cache.push(t), this.serializeFields(t))
          }
          break;
        case 4:
          if (Ls.__instanceof(t, hi)) {
            var H = E.getClassName(t);
            this.buf.b += "A", this.serializeString(H)
          } else if (Ls.__instanceof(t, ui)) this.buf.b += "B", this.serializeString(E.getEnumName(t));
          else {
            if (this.useCache && this.serializeRef(t)) return;
            this.buf.b += "o", this.serializeFields(t)
          }
          break;
        case 7:
          var G = e[2];
          if (this.useCache) {
            if (this.serializeRef(t)) return;
            this.cache.pop()
          }
          this.useEnumIndex ? this.buf.b += "j" : this.buf.b += "w", this.serializeString(E.getEnumName(G)), this.useEnumIndex ? (this.buf.b += ":", this.buf.b += d.string(t[1])) : this.serializeString(t[0]), this.buf.b += ":";
          var V = t.length;
          this.buf.b += d.string(V - 2);
          for (var z = 2; V > z;) {
            var j = z++;
            this.serialize(t[j])
          }
          this.useCache && this.cache.push(t);
          break;
        case 5:
          throw new Ps("Cannot serialize function");
        default:
          throw new Ps("Cannot serialize " + d.string(t))
      }
    },
    __class__: ms
  };
  var ws = function(t) {
    var e = this;
    this.id = setInterval(function() {
      e.run()
    }, t)
  };
  n["haxe.Timer"] = ws, ws.__name__ = ["haxe", "Timer"], ws.delay = function(t, e) {
    var s = new ws(e);
    return s.run = function() {
      s.stop(), t()
    }, s
  }, ws.stamp = function() {
    return (new Date).getTime() / 1e3
  }, ws.prototype = {
    stop: function() {
      null != this.id && (clearInterval(this.id), this.id = null)
    },
    run: function() {},
    __class__: ws
  };
  var Ss = function(t) {
    this.buf = t, this.length = t.length, this.pos = 0, this.scache = [], this.cache = [];
    var e = Ss.DEFAULT_RESOLVER;
    null == e && (e = E, Ss.DEFAULT_RESOLVER = e), this.setResolver(e)
  };
  n["haxe.Unserializer"] = Ss, Ss.__name__ = ["haxe", "Unserializer"], Ss.initCodes = function() {
    for (var t = [], e = 0, s = Ss.BASE64.length; s > e;) {
      var i = e++;
      t[Ss.BASE64.charCodeAt(i)] = i
    }
    return t
  }, Ss.run = function(t) {
    return new Ss(t).unserialize()
  }, Ss.prototype = {
    setResolver: function(t) {
      null == t ? this.resolver = {
        resolveClass: function(t) {
          return null
        },
        resolveEnum: function(t) {
          return null
        }
      } : this.resolver = t
    },
    get: function(t) {
      return this.buf.charCodeAt(t)
    },
    readDigits: function() {
      for (var t = 0, e = !1, s = this.pos;;) {
        var i = this.buf.charCodeAt(this.pos);
        if (i != i) break;
        if (45 != i) {
          if (48 > i || i > 57) break;
          t = 10 * t + (i - 48), this.pos++
        } else {
          if (this.pos != s) break;
          e = !0, this.pos++
        }
      }
      return e && (t *= -1), t
    },
    readFloat: function() {
      for (var t = this.pos;;) {
        var e = this.buf.charCodeAt(this.pos);
        if (!(e >= 43 && 58 > e || 101 == e || 69 == e)) break;
        this.pos++
      }
      return d.parseFloat(o.substr(this.buf, t, this.pos - t))
    },
    unserializeObject: function(t) {
      for (;;) {
        if (this.pos >= this.length) throw new Ps("Invalid object");
        if (103 == this.buf.charCodeAt(this.pos)) break;
        var e = this.unserialize();
        if ("string" != typeof e) throw new Ps("Invalid object key");
        var s = this.unserialize();
        t[e] = s
      }
      this.pos++
    },
    unserializeEnum: function(t, e) {
      if (58 != this.get(this.pos++)) throw new Ps("Invalid enum format");
      var s = this.readDigits();
      if (0 == s) return E.createEnum(t, e);
      for (var i = []; s-- > 0;) i.push(this.unserialize());
      return E.createEnum(t, e, i)
    },
    unserialize: function() {
      var t = this.get(this.pos++);
      switch (t) {
        case 110:
          return null;
        case 116:
          return !0;
        case 102:
          return !1;
        case 122:
          return 0;
        case 105:
          return this.readDigits();
        case 100:
          return this.readFloat();
        case 121:
          var e = this.readDigits();
          if (58 != this.get(this.pos++) || this.length - this.pos < e) throw new Ps("Invalid string length");
          var s = o.substr(this.buf, this.pos, e);
          return this.pos += e, s = decodeURIComponent(s.split("+").join(" ")), this.scache.push(s), s;
        case 107:
          return NaN;
        case 109:
          return -(1 / 0);
        case 112:
          return 1 / 0;
        case 97:
          var i = (this.buf, []);
          for (this.cache.push(i);;) {
            var n = this.buf.charCodeAt(this.pos);
            if (104 == n) {
              this.pos++;
              break
            }
            if (117 == n) {
              this.pos++;
              var r = this.readDigits();
              i[i.length + r - 1] = null
            } else i.push(this.unserialize())
          }
          return i;
        case 111:
          var a = {};
          return this.cache.push(a), this.unserializeObject(a), a;
        case 114:
          var _ = this.readDigits();
          if (0 > _ || _ >= this.cache.length) throw new Ps("Invalid reference");
          return this.cache[_];
        case 82:
          var h = this.readDigits();
          if (0 > h || h >= this.scache.length) throw new Ps("Invalid string reference");
          return this.scache[h];
        case 120:
          throw new Ps(this.unserialize());
        case 99:
          var l = this.unserialize(),
            c = this.resolver.resolveClass(l);
          if (null == c) throw new Ps("Class not found " + l);
          var d = E.createEmptyInstance(c);
          return this.cache.push(d), this.unserializeObject(d), d;
        case 119:
          var g = this.unserialize(),
            f = this.resolver.resolveEnum(g);
          if (null == f) throw new Ps("Enum not found " + g);
          var y = this.unserializeEnum(f, this.unserialize());
          return this.cache.push(y), y;
        case 106:
          var v = this.unserialize(),
            m = this.resolver.resolveEnum(v);
          if (null == m) throw new Ps("Enum not found " + v);
          this.pos++;
          var w = this.readDigits(),
            S = E.getEnumConstructs(m)[w];
          if (null == S) throw new Ps("Unknown enum index " + v + "@" + w);
          var T = this.unserializeEnum(m, S);
          return this.cache.push(T), T;
        case 108:
          var b = new u;
          this.cache.push(b);
          for (this.buf; 104 != this.buf.charCodeAt(this.pos);) b.add(this.unserialize());
          return this.pos++, b;
        case 98:
          var C = new Ns;
          this.cache.push(C);
          for (this.buf; 104 != this.buf.charCodeAt(this.pos);) {
            var A = this.unserialize();
            C.set(A, this.unserialize())
          }
          return this.pos++, C;
        case 113:
          var R = new Is;
          this.cache.push(R);
          for (var I = (this.buf, this.get(this.pos++)); 58 == I;) {
            var k = this.readDigits();
            R.set(k, this.unserialize()), I = this.get(this.pos++)
          }
          if (104 != I) throw new Ps("Invalid IntMap format");
          return R;
        case 77:
          var N = new ks;
          this.cache.push(N);
          for (this.buf; 104 != this.buf.charCodeAt(this.pos);) {
            var D = this.unserialize();
            N.set(D, this.unserialize())
          }
          return this.pos++, N;
        case 118:
          var x;
          if (this.buf.charCodeAt(this.pos) >= 48 && this.buf.charCodeAt(this.pos) <= 57 && this.buf.charCodeAt(this.pos + 1) >= 48 && this.buf.charCodeAt(this.pos + 1) <= 57 && this.buf.charCodeAt(this.pos + 2) >= 48 && this.buf.charCodeAt(this.pos + 2) <= 57 && this.buf.charCodeAt(this.pos + 3) >= 48 && this.buf.charCodeAt(this.pos + 3) <= 57 && 45 == this.buf.charCodeAt(this.pos + 4)) {
            var O = o.substr(this.buf, this.pos, 19);
            x = o.strDate(O), this.pos += 19
          } else {
            var U = this.readFloat(),
              P = new Date;
            P.setTime(U), x = P
          }
          return this.cache.push(x), x;
        case 115:
          var L = this.readDigits(),
            M = this.buf;
          if (58 != this.get(this.pos++) || this.length - this.pos < L) throw new Ps("Invalid bytes length");
          var B = Ss.CODES;
          null == B && (B = Ss.initCodes(), Ss.CODES = B);
          var F, Y = this.pos,
            H = 3 & L;
          F = 3 * (L >> 2) + (H >= 2 ? H - 1 : 0);
          for (var G = Y + (L - H), V = Ts.alloc(F), z = 0; G > Y;) {
            var j = B[p.fastCodeAt(M, Y++)],
              W = B[p.fastCodeAt(M, Y++)];
            V.set(z++, j << 2 | W >> 4);
            var X = B[p.fastCodeAt(M, Y++)];
            V.set(z++, W << 4 | X >> 2);
            var K = B[p.fastCodeAt(M, Y++)];
            V.set(z++, X << 6 | K)
          }
          if (H >= 2) {
            var Q = B[p.fastCodeAt(M, Y++)],
              J = B[p.fastCodeAt(M, Y++)];
            if (V.set(z++, Q << 2 | J >> 4), 3 == H) {
              var Z = B[p.fastCodeAt(M, Y++)];
              V.set(z++, J << 4 | Z >> 2)
            }
          }
          return this.pos += L, this.cache.push(V), V;
        case 67:
          var q = this.unserialize(),
            $ = this.resolver.resolveClass(q);
          if (null == $) throw new Ps("Class not found " + q);
          var tt = E.createEmptyInstance($);
          if (this.cache.push(tt), tt.hxUnserialize(this), 103 != this.get(this.pos++)) throw new Ps("Invalid custom data");
          return tt;
        case 65:
          var et = this.unserialize(),
            st = this.resolver.resolveClass(et);
          if (null == st) throw new Ps("Class not found " + et);
          return st;
        case 66:
          var it = this.unserialize(),
            nt = this.resolver.resolveEnum(it);
          if (null == nt) throw new Ps("Enum not found " + it);
          return nt
      }
      throw this.pos--, new Ps("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos)
    },
    __class__: Ss
  };
  var Ts = function(t) {
    this.length = t.byteLength, this.b = new di(t), this.b.bufferValue = t, t.hxBytes = this, t.bytes = this.b
  };
  n["haxe.io.Bytes"] = Ts, Ts.__name__ = ["haxe", "io", "Bytes"], Ts.alloc = function(t) {
    return new Ts(new ci(t))
  }, Ts.ofString = function(t) {
    for (var e = [], s = 0; s < t.length;) {
      var i = p.fastCodeAt(t, s++);
      i >= 55296 && 56319 >= i && (i = i - 55232 << 10 | 1023 & p.fastCodeAt(t, s++)), 127 >= i ? e.push(i) : 2047 >= i ? (e.push(192 | i >> 6), e.push(128 | 63 & i)) : 65535 >= i ? (e.push(224 | i >> 12), e.push(128 | i >> 6 & 63), e.push(128 | 63 & i)) : (e.push(240 | i >> 18), e.push(128 | i >> 12 & 63), e.push(128 | i >> 6 & 63), e.push(128 | 63 & i))
    }
    return new Ts(new di(e).buffer)
  }, Ts.prototype = {
    get: function(t) {
      return this.b[t]
    },
    set: function(t, e) {
      this.b[t] = 255 & e
    },
    getString: function(t, e) {
      if (0 > t || 0 > e || t + e > this.length) throw new Ps(Ds.OutsideBounds);
      for (var s = "", i = this.b, n = String.fromCharCode, r = t, a = t + e; a > r;) {
        var _ = i[r++];
        if (128 > _) {
          if (0 == _) break;
          s += n(_)
        } else if (224 > _) s += n((63 & _) << 6 | 127 & i[r++]);
        else if (240 > _) {
          var o = i[r++];
          s += n((31 & _) << 12 | (127 & o) << 6 | 127 & i[r++])
        } else {
          var h = i[r++],
            u = i[r++],
            l = (15 & _) << 18 | (127 & h) << 12 | (127 & u) << 6 | 127 & i[r++];
          s += n((l >> 10) + 55232), s += n(1023 & l | 56320)
        }
      }
      return s
    },
    toString: function() {
      return this.getString(0, this.length)
    },
    __class__: Ts
  };
  var bs = function() {};
  n["haxe.crypto.Base64"] = bs, bs.__name__ = ["haxe", "crypto", "Base64"], bs.decode = function(t, e) {
    if (null == e && (e = !0), e)
      for (; 61 == o.cca(t, t.length - 1);) t = o.substr(t, 0, -1);
    return new Cs(bs.BYTES).decodeBytes(Ts.ofString(t))
  };
  var Cs = function(t) {
    for (var e = t.length, s = 1; e > 1 << s;) s++;
    if (s > 8 || e != 1 << s) throw new Ps("BaseCode : base length must be a power of two.");
    this.base = t, this.nbits = s
  };
  n["haxe.crypto.BaseCode"] = Cs, Cs.__name__ = ["haxe", "crypto", "BaseCode"], Cs.prototype = {
    initTable: function() {
      for (var t = [], e = 0; 256 > e;) {
        var s = e++;
        t[s] = -1
      }
      for (var i = 0, n = this.base.length; n > i;) {
        var r = i++;
        t[this.base.b[r]] = r
      }
      this.tbl = t
    },
    decodeBytes: function(t) {
      var e = this.nbits;
      this.base;
      null == this.tbl && this.initTable();
      for (var s = this.tbl, i = t.length * e >> 3, n = Ts.alloc(i), r = 0, a = 0, _ = 0, o = 0; i > o;) {
        for (; 8 > a;) {
          a += e, r <<= e;
          var h = s[t.get(_++)];
          if (-1 == h) throw new Ps("BaseCode : invalid encoded char");
          r |= h
        }
        a -= 8, n.set(o++, r >> a & 255)
      }
      return n
    },
    __class__: Cs
  };
  var As = function(t, e) {
    this.elt = t, this.next = e
  };
  n["haxe.ds.GenericCell"] = As, As.__name__ = ["haxe", "ds", "GenericCell"], As.prototype = {
    __class__: As
  };
  var Rs = function() {};
  n["haxe.ds.GenericStack"] = Rs, Rs.__name__ = ["haxe", "ds", "GenericStack"], Rs.prototype = {
    add: function(t) {
      this.head = new As(t, this.head)
    },
    remove: function(t) {
      for (var e = null, s = this.head; null != s;) {
        if (s.elt == t) {
          null == e ? this.head = s.next : e.next = s.next;
          break
        }
        e = s, s = s.next
      }
      return null != s
    },
    iterator: function() {
      var t = this.head;
      return {
        hasNext: function() {
          return null != t
        },
        next: function() {
          var e = t;
          return t = e.next, e.elt
        }
      }
    },
    __class__: Rs
  };
  var Is = function() {
    this.h = {}
  };
  n["haxe.ds.IntMap"] = Is, Is.__name__ = ["haxe", "ds", "IntMap"], Is.__interfaces__ = [ps], Is.prototype = {
    set: function(t, e) {
      this.h[t] = e
    },
    keys: function() {
      var t = [];
      for (var e in this.h) this.h.hasOwnProperty(e) && t.push(0 | e);
      return o.iter(t)
    },
    __class__: Is
  };
  var ks = function() {
    this.h = {}, this.h.__keys__ = {}
  };
  n["haxe.ds.ObjectMap"] = ks, ks.__name__ = ["haxe", "ds", "ObjectMap"], ks.__interfaces__ = [ps], ks.prototype = {
    set: function(t, e) {
      var s = t.__id__ || (t.__id__ = ++ks.count);
      this.h[s] = e, this.h.__keys__[s] = t
    },
    keys: function() {
      var t = [];
      for (var e in this.h.__keys__) this.h.hasOwnProperty(e) && t.push(this.h.__keys__[e]);
      return o.iter(t)
    },
    __class__: ks
  };
  var Ns = function() {
    this.h = {}
  };
  n["haxe.ds.StringMap"] = Ns, Ns.__name__ = ["haxe", "ds", "StringMap"], Ns.__interfaces__ = [ps], Ns.prototype = {
    set: function(t, e) {
      null != li[t] ? this.setReserved(t, e) : this.h[t] = e
    },
    get: function(t) {
      return null != li[t] ? this.getReserved(t) : this.h[t]
    },
    exists: function(t) {
      return null != li[t] ? this.existsReserved(t) : this.h.hasOwnProperty(t)
    },
    setReserved: function(t, e) {
      null == this.rh && (this.rh = {}), this.rh["$" + t] = e
    },
    getReserved: function(t) {
      return null == this.rh ? null : this.rh["$" + t]
    },
    existsReserved: function(t) {
      return null == this.rh ? !1 : this.rh.hasOwnProperty("$" + t)
    },
    remove: function(t) {
      return null != li[t] ? (t = "$" + t, null != this.rh && this.rh.hasOwnProperty(t) ? (delete this.rh[t], !0) : !1) : this.h.hasOwnProperty(t) ? (delete this.h[t], !0) : !1
    },
    keys: function() {
      var t = this.arrayKeys();
      return o.iter(t)
    },
    arrayKeys: function() {
      var t = [];
      for (var e in this.h) this.h.hasOwnProperty(e) && t.push(e);
      if (null != this.rh)
        for (var e in this.rh) 36 == e.charCodeAt(0) && t.push(e.substr(1));
      return t
    },
    __class__: Ns
  };
  var Ds = n["haxe.io.Error"] = {
    __ename__: ["haxe", "io", "Error"],
    __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
  };
  Ds.Blocked = ["Blocked", 0], Ds.Blocked.toString = r, Ds.Blocked.__enum__ = Ds, Ds.Overflow = ["Overflow", 1], Ds.Overflow.toString = r, Ds.Overflow.__enum__ = Ds, Ds.OutsideBounds = ["OutsideBounds", 2], Ds.OutsideBounds.toString = r, Ds.OutsideBounds.__enum__ = Ds, Ds.Custom = function(t) {
    var e = ["Custom", 3, t];
    return e.__enum__ = Ds, e.toString = r, e
  };
  var xs = function() {};
  n["haxe.io.FPHelper"] = xs, xs.__name__ = ["haxe", "io", "FPHelper"], xs.i32ToFloat = function(t) {
    var e = 1 - (t >>> 31 << 1),
      s = t >>> 23 & 255,
      i = 8388607 & t;
    return 0 == i && 0 == s ? 0 : e * (1 + Math.pow(2, -23) * i) * Math.pow(2, s - 127)
  }, xs.floatToI32 = function(t) {
    if (0 == t) return 0;
    var e;
    e = 0 > t ? -t : t;
    var s = Math.floor(Math.log(e) / .6931471805599453); - 127 > s ? s = -127 : s > 128 && (s = 128);
    var i = 8388607 & Math.round(8388608 * (e / Math.pow(2, s) - 1));
    return (0 > t ? -2147483648 : 0) | s + 127 << 23 | i
  }, xs.i64ToDouble = function(t, e) {
    var s = 1 - (e >>> 31 << 1),
      i = (e >> 20 & 2047) - 1023,
      n = 4294967296 * (1048575 & e) + 2147483648 * (t >>> 31) + (2147483647 & t);
    return 0 == n && -1023 == i ? 0 : s * (1 + Math.pow(2, -52) * n) * Math.pow(2, i)
  }, xs.doubleToI64 = function(t) {
    var e = xs.i64tmp;
    if (0 == t) e.low = 0, e.high = 0;
    else {
      var s;
      s = 0 > t ? -t : t;
      var i, n = Math.floor(Math.log(s) / .6931471805599453),
        r = 4503599627370496 * (s / Math.pow(2, n) - 1);
      i = Math.round(r);
      var a = 0 | i,
        _ = i / 4294967296 | 0;
      e.low = a, e.high = (0 > t ? -2147483648 : 0) | n + 1023 << 20 | _
    }
    return e
  };
  var Os = function() {};
  n["haxe.xml.Parser"] = Os, Os.__name__ = ["haxe", "xml", "Parser"], Os.parse = function(t, e) {
    null == e && (e = !1);
    var s = y.createDocument();
    return Os.doParse(t, e, 0, s), s
  }, Os.doParse = function(t, e, s, i) {
    null == s && (s = 0);
    for (var n = null, r = 1, a = 1, _ = null, h = 0, u = 0, l = 0, c = t.charCodeAt(s), f = new g, E = 1, v = -1; c == c;) {
      switch (r) {
        case 0:
          switch (c) {
            case 10:
            case 13:
            case 9:
            case 32:
              break;
            default:
              r = a;
              continue
          }
          break;
        case 1:
          switch (c) {
            case 60:
              r = 0, a = 2;
              break;
            default:
              h = s, r = 13;
              continue
          }
          break;
        case 13:
          if (60 == c) {
            f.addSub(t, h, s - h);
            var m = y.createPCData(f.b);
            f = new g, i.addChild(m), u++, r = 0, a = 2
          } else 38 == c && (f.addSub(t, h, s - h), r = 18, E = 13, h = s + 1);
          break;
        case 17:
          if (93 == c && 93 == t.charCodeAt(s + 1) && 62 == t.charCodeAt(s + 2)) {
            var w = y.createCData(o.substr(t, h, s - h));
            i.addChild(w), u++, s += 2, r = 1
          }
          break;
        case 2:
          switch (c) {
            case 33:
              if (91 == t.charCodeAt(s + 1)) {
                if (s += 2, "CDATA[" != o.substr(t, s, 6).toUpperCase()) throw new Ps("Expected <![CDATA[");
                s += 5, r = 17, h = s + 1
              } else if (68 == t.charCodeAt(s + 1) || 100 == t.charCodeAt(s + 1)) {
                if ("OCTYPE" != o.substr(t, s + 2, 6).toUpperCase()) throw new Ps("Expected <!DOCTYPE");
                s += 8, r = 16, h = s + 1
              } else {
                if (45 != t.charCodeAt(s + 1) || 45 != t.charCodeAt(s + 2)) throw new Ps("Expected <!--");
                s += 2, r = 15, h = s + 1
              }
              break;
            case 63:
              r = 14, h = s;
              break;
            case 47:
              if (null == i) throw new Ps("Expected node name");
              h = s + 1, r = 0, a = 10;
              break;
            default:
              r = 3, h = s;
              continue
          }
          break;
        case 3:
          if (!(c >= 97 && 122 >= c || c >= 65 && 90 >= c || c >= 48 && 57 >= c || 58 == c || 46 == c || 95 == c || 45 == c)) {
            if (s == h) throw new Ps("Expected node name");
            n = y.createElement(o.substr(t, h, s - h)), i.addChild(n), u++, r = 0, a = 4;
            continue
          }
          break;
        case 4:
          switch (c) {
            case 47:
              r = 11;
              break;
            case 62:
              r = 9;
              break;
            default:
              r = 5, h = s;
              continue
          }
          break;
        case 5:
          if (!(c >= 97 && 122 >= c || c >= 65 && 90 >= c || c >= 48 && 57 >= c || 58 == c || 46 == c || 95 == c || 45 == c)) {
            var S;
            if (h == s) throw new Ps("Expected attribute name");
            if (S = o.substr(t, h, s - h), _ = S, n.exists(_)) throw new Ps("Duplicate attribute");
            r = 0, a = 6;
            continue
          }
          break;
        case 6:
          switch (c) {
            case 61:
              r = 0, a = 7;
              break;
            default:
              throw new Ps("Expected =")
          }
          break;
        case 7:
          switch (c) {
            case 34:
            case 39:
              f = new g, r = 8, h = s + 1, v = c;
              break;
            default:
              throw new Ps('Expected "')
          }
          break;
        case 8:
          switch (c) {
            case 38:
              f.addSub(t, h, s - h), r = 18, E = 8, h = s + 1;
              break;
            case 62:
              if (e) throw new Ps("Invalid unescaped " + String.fromCharCode(c) + " in attribute value");
              if (c == v) {
                f.addSub(t, h, s - h);
                var T = f.b;
                f = new g, n.set(_, T), r = 0, a = 4
              }
              break;
            case 60:
              if (e) throw new Ps("Invalid unescaped " + String.fromCharCode(c) + " in attribute value");
              if (c == v) {
                f.addSub(t, h, s - h);
                var b = f.b;
                f = new g, n.set(_, b), r = 0, a = 4
              }
              break;
            default:
              if (c == v) {
                f.addSub(t, h, s - h);
                var C = f.b;
                f = new g, n.set(_, C), r = 0, a = 4
              }
          }
          break;
        case 9:
          s = Os.doParse(t, e, s, n), h = s, r = 1;
          break;
        case 11:
          switch (c) {
            case 62:
              r = 1;
              break;
            default:
              throw new Ps("Expected >")
          }
          break;
        case 12:
          switch (c) {
            case 62:
              return 0 == u && i.addChild(y.createPCData("")), s;
            default:
              throw new Ps("Expected >")
          }
          break;
        case 10:
          if (!(c >= 97 && 122 >= c || c >= 65 && 90 >= c || c >= 48 && 57 >= c || 58 == c || 46 == c || 95 == c || 45 == c)) {
            if (h == s) throw new Ps("Expected node name");
            var A = o.substr(t, h, s - h);
            if (A != function(t) {
                var e;
                if (i.nodeType != y.Element) throw new Ps("Bad node type, expected Element but found " + i.nodeType);
                return e = i.nodeName
              }(this)) throw new Ps("Expected </" + function(t) {
              var e;
              if (i.nodeType != y.Element) throw "Bad node type, expected Element but found " + i.nodeType;
              return e = i.nodeName
            }(this) + ">");
            r = 0, a = 12;
            continue
          }
          break;
        case 15:
          if (45 == c && 45 == t.charCodeAt(s + 1) && 62 == t.charCodeAt(s + 2)) {
            var R = y.createComment(o.substr(t, h, s - h));
            i.addChild(R), u++, s += 2, r = 1
          }
          break;
        case 16:
          if (91 == c) l++;
          else if (93 == c) l--;
          else if (62 == c && 0 == l) {
            var I = y.createDocType(o.substr(t, h, s - h));
            i.addChild(I), u++, r = 1
          }
          break;
        case 14:
          if (63 == c && 62 == t.charCodeAt(s + 1)) {
            s++;
            var k = o.substr(t, h + 1, s - h - 2),
              N = y.createProcessingInstruction(k);
            i.addChild(N), u++, r = 1
          }
          break;
        case 18:
          if (59 == c) {
            var D = o.substr(t, h, s - h);
            if (35 == D.charCodeAt(0)) {
              var x;
              x = 120 == D.charCodeAt(1) ? d.parseInt("0" + o.substr(D, 1, D.length - 1)) : d.parseInt(o.substr(D, 1, D.length - 1)), f.b += String.fromCharCode(x)
            } else if (Os.escapes.exists(D)) f.add(Os.escapes.get(D));
            else {
              if (e) throw new Ps("Undefined entity: " + D);
              f.b += d.string("&" + D + ";")
            }
            h = s + 1, r = E
          } else if (!(c >= 97 && 122 >= c || c >= 65 && 90 >= c || c >= 48 && 57 >= c || 58 == c || 46 == c || 95 == c || 45 == c) && 35 != c) {
            if (e) throw new Ps("Invalid character in entity: " + String.fromCharCode(c));
            f.b += "&", f.addSub(t, h, s - h), s--, h = s + 1, r = E
          }
      }
      c = p.fastCodeAt(t, ++s)
    }
    if (1 == r && (h = s, r = 13), 13 == r) {
      if (s != h || 0 == u) {
        f.addSub(t, h, s - h);
        var O = y.createPCData(f.b);
        i.addChild(O), u++
      }
      return s
    }
    if (!e && 18 == r && 13 == E) {
      f.b += "&", f.addSub(t, h, s - h);
      var U = y.createPCData(f.b);
      return i.addChild(U), u++, s
    }
    throw new Ps("Unexpected end")
  };
  var Us = function(t) {
    this.output = new g, this.pretty = t
  };
  n["haxe.xml.Printer"] = Us, Us.__name__ = ["haxe", "xml", "Printer"], Us.print = function(t, e) {
    null == e && (e = !1);
    var s = new Us(e);
    return s.writeNode(t, ""), s.output.b
  }, Us.prototype = {
    writeNode: function(t, e) {
      var s = t.nodeType;
      switch (s) {
        case 2:
          this.output.b += d.string(e + "<![CDATA["), this.write(p.trim(function(e) {
            var s;
            if (t.nodeType == y.Document || t.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + t.nodeType);
            return s = t.nodeValue
          }(this))), this.output.b += "]]>", this.pretty && (this.output.b += "");
          break;
        case 3:
          var i;
          if (t.nodeType == y.Document || t.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + t.nodeType);
          i = t.nodeValue, i = new _("[\n\r	]+", "g").replace(i, ""), i = "<!--" + i + "-->", null == e ? this.output.b += "null" : this.output.b += "" + e, this.write(p.trim(i)), this.pretty && (this.output.b += "");
          break;
        case 6:
          for (var n = function(e) {
              var s;
              if (t.nodeType != y.Document && t.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + t.nodeType);
              return s = o.iter(t.children)
            }(this); n.hasNext();) {
            var r = n.next();
            this.writeNode(r, e)
          }
          break;
        case 0:
          this.output.b += d.string(e + "<"), this.write(function(e) {
            var s;
            if (t.nodeType != y.Element) throw new Ps("Bad node type, expected Element but found " + t.nodeType);
            return s = t.nodeName
          }(this));
          for (var a = t.attributes(); a.hasNext();) {
            var h = a.next();
            this.output.b += d.string(" " + h + '="'), this.write(p.htmlEscape(t.get(h), !0)), this.output.b += '"'
          }
          if (this.hasChildren(t)) {
            this.output.b += ">", this.pretty && (this.output.b += "");
            for (var u = function(e) {
                var s;
                if (t.nodeType != y.Document && t.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + t.nodeType);
                return s = o.iter(t.children)
              }(this); u.hasNext();) {
              var l = u.next();
              this.writeNode(l, this.pretty ? e + "	" : e)
            }
            this.output.b += d.string(e + "</"), this.write(function(e) {
              var s;
              if (t.nodeType != y.Element) throw new Ps("Bad node type, expected Element but found " + t.nodeType);
              return s = t.nodeName
            }(this)), this.output.b += ">", this.pretty && (this.output.b += "")
          } else this.output.b += "/>", this.pretty && (this.output.b += "");
          break;
        case 1:
          var c;
          if (t.nodeType == y.Document || t.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + t.nodeType);
          c = t.nodeValue, 0 != c.length && (this.write(e + p.htmlEscape(c)), this.pretty && (this.output.b += ""));
          break;
        case 5:
          this.write("<?" + function(e) {
            var s;
            if (t.nodeType == y.Document || t.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + t.nodeType);
            return s = t.nodeValue
          }(this) + "?>");
          break;
        case 4:
          this.write("<!DOCTYPE " + function(e) {
            var s;
            if (t.nodeType == y.Document || t.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + t.nodeType);
            return s = t.nodeValue
          }(this) + ">")
      }
    },
    write: function(t) {
      null == t ? this.output.b += "null" : this.output.b += "" + t
    },
    hasChildren: function(t) {
      for (var e = function(e) {
          var s;
          if (t.nodeType != y.Document && t.nodeType != y.Element) throw new Ps("Bad node type, expected Element or Document but found " + t.nodeType);
          return s = o.iter(t.children)
        }(this); e.hasNext();) {
        var s = e.next(),
          i = s.nodeType;
        switch (i) {
          case 0:
          case 1:
            return !0;
          case 2:
          case 3:
            if (0 != p.ltrim(function(t) {
                var e;
                if (s.nodeType == y.Document || s.nodeType == y.Element) throw new Ps("Bad node type, unexpected " + s.nodeType);
                return e = s.nodeValue
              }(this)).length) return !0
        }
      }
      return !1
    },
    __class__: Us
  };
  var Ps = function(t) {
    Error.call(this), this.val = t, this.message = String(t), Error.captureStackTrace && Error.captureStackTrace(this, Ps)
  };
  n["js._Boot.HaxeError"] = Ps, Ps.__name__ = ["js", "_Boot", "HaxeError"], Ps.__super__ = Error, Ps.prototype = e(Error.prototype, {
    __class__: Ps
  });
  var Ls = function() {};
  n["js.Boot"] = Ls, Ls.__name__ = ["js", "Boot"],
    Ls.__unhtml = function(t) {
      return t.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;")
    }, Ls.__trace = function(e, s) {
      var i;
      if (i = null != s ? s.fileName + ":" + s.lineNumber + ": " : "", i += Ls.__string_rec(e, ""), null != s && null != s.customParams)
        for (var n = 0, r = s.customParams; n < r.length;) {
          var a = r[n];
          ++n, i += "," + Ls.__string_rec(a, "")
        }
      var _;
      "undefined" != typeof document && null != (_ = document.getElementById("haxe:trace")) ? _.innerHTML += Ls.__unhtml(i) + "<br/>" : "undefined" != typeof t && null != t.log && t.log(i)
    }, Ls.getClass = function(t) {
      if (t instanceof Array && null == t.__enum__) return Array;
      var e = t.__class__;
      if (null != e) return e;
      var s = Ls.__nativeClassName(t);
      return null != s ? Ls.__resolveNativeClass(s) : null
    }, Ls.__string_rec = function(t, e) {
      if (null == t) return "null";
      if (e.length >= 5) return "<...>";
      var s = typeof t;
      switch ("function" == s && (t.__name__ || t.__ename__) && (s = "object"), s) {
        case "object":
          if (t instanceof Array) {
            if (t.__enum__) {
              if (2 == t.length) return t[0];
              var i = t[0] + "(";
              e += "	";
              for (var n = 2, r = t.length; r > n;) {
                var a = n++;
                i += 2 != a ? "," + Ls.__string_rec(t[a], e) : Ls.__string_rec(t[a], e)
              }
              return i + ")"
            }
            var _ = t.length,
              o = "[";
            e += "	";
            for (var h = 0; _ > h;) {
              var u = h++;
              o += (u > 0 ? "," : "") + Ls.__string_rec(t[u], e)
            }
            return o += "]"
          }
          var l;
          try {
            l = t.toString
          } catch (c) {
            return c instanceof Ps && (c = c.val), "???"
          }
          if (null != l && l != Object.toString && "function" == typeof l) {
            var d = t.toString();
            if ("[object Object]" != d) return d
          }
          var g = null,
            p = "{\n";
          e += "	";
          var f = null != t.hasOwnProperty;
          for (var g in t)(!f || t.hasOwnProperty(g)) && "prototype" != g && "__class__" != g && "__super__" != g && "__interfaces__" != g && "__properties__" != g && (2 != p.length && (p += ", \n"), p += e + g + " : " + Ls.__string_rec(t[g], e));
          return e = e.substring(1), p += "\n" + e + "}";
        case "function":
          return "<function>";
        case "string":
          return t;
        default:
          return String(t)
      }
    }, Ls.__interfLoop = function(t, e) {
      if (null == t) return !1;
      if (t == e) return !0;
      var s = t.__interfaces__;
      if (null != s)
        for (var i = 0, n = s.length; n > i;) {
          var r = i++,
            a = s[r];
          if (a == e || Ls.__interfLoop(a, e)) return !0
        }
      return Ls.__interfLoop(t.__super__, e)
    }, Ls.__instanceof = function(t, e) {
      if (null == e) return !1;
      switch (e) {
        case ri:
          return (0 | t) === t;
        case _i:
          return "number" == typeof t;
        case oi:
          return "boolean" == typeof t;
        case String:
          return "string" == typeof t;
        case Array:
          return t instanceof Array && null == t.__enum__;
        case ai:
          return !0;
        default:
          if (null == t) return !1;
          if ("function" == typeof e) {
            if (t instanceof e) return !0;
            if (Ls.__interfLoop(Ls.getClass(t), e)) return !0
          } else if ("object" == typeof e && Ls.__isNativeObj(e) && t instanceof e) return !0;
          return e == hi && null != t.__name__ ? !0 : e == ui && null != t.__ename__ ? !0 : t.__enum__ == e
      }
    }, Ls.__cast = function(t, e) {
      if (Ls.__instanceof(t, e)) return t;
      throw new Ps("Cannot cast " + d.string(t) + " to " + d.string(e))
    }, Ls.__nativeClassName = function(t) {
      var e = Ls.__toStr.call(t).slice(8, -1);
      return "Object" == e || "Function" == e || "Math" == e || "JSON" == e ? null : e
    }, Ls.__isNativeObj = function(t) {
      return null != Ls.__nativeClassName(t)
    }, Ls.__resolveNativeClass = function(t) {
      return Function("return typeof " + t + ' != "undefined" ? ' + t + " : null")()
    };
  var Ms = function() {};
  n["js.Browser"] = Ms, Ms.__name__ = ["js", "Browser"], Ms.getLocalStorage = function() {
    try {
      var t = window.localStorage;
      return t.getItem(""), t
    } catch (e) {
      return e instanceof Ps && (e = e.val), null
    }
  }, Ms.getSessionStorage = function() {
    try {
      var t = window.sessionStorage;
      return t.getItem(""), t
    } catch (e) {
      return e instanceof Ps && (e = e.val), null
    }
  }, Ms.createXMLHttpRequest = function() {
    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
    if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
    throw new Ps("Unable to create XMLHttpRequest object.")
  };
  var Bs = function() {};
  n["js.Cookie"] = Bs, Bs.__name__ = ["js", "Cookie"], Bs.set = function(t, e, s, i, n) {
    var r = t + "=" + encodeURIComponent(e);
    if (null != s) {
      var _ = a.delta(new Date, 1e3 * s);
      r += ";expires=" + _.toGMTString()
    }
    null != i && (r += ";path=" + i), null != n && (r += ";domain=" + n), window.document.cookie = r
  }, Bs.all = function() {
    for (var t = new Ns, e = window.document.cookie.split(";"), s = 0; s < e.length;) {
      var i = e[s];
      ++s, i = p.ltrim(i);
      var n = i.split("=");
      n.length < 2 || t.set(n[0], decodeURIComponent(n[1].split("+").join(" ")))
    }
    return t
  }, Bs.get = function(t) {
    return Bs.all().get(t)
  }, Bs.exists = function(t) {
    return Bs.all().exists(t)
  }, Bs.remove = function(t, e, s) {
    Bs.set(t, "", -10, e, s)
  };
  var Fs = function(t) {
    if (t instanceof Array && null == t.__enum__) this.a = t, this.byteLength = t.length;
    else {
      var e = t;
      this.a = [];
      for (var s = 0; e > s;) {
        var i = s++;
        this.a[i] = 0
      }
      this.byteLength = e
    }
  };
  n["js.html.compat.ArrayBuffer"] = Fs, Fs.__name__ = ["js", "html", "compat", "ArrayBuffer"], Fs.sliceImpl = function(t, e) {
    var s = new di(this, t, null == e ? null : e - t),
      i = new ci(s.byteLength),
      n = new di(i);
    return n.set(s), i
  }, Fs.prototype = {
    slice: function(t, e) {
      return new Fs(this.a.slice(t, e))
    },
    __class__: Fs
  };
  var Ys = function(t, e, s) {
    if (this.buf = t, null == e ? this.offset = 0 : this.offset = e, null == s ? this.length = t.byteLength - this.offset : this.length = s, this.offset < 0 || this.length < 0 || this.offset + this.length > t.byteLength) throw new Ps(Ds.OutsideBounds)
  };
  n["js.html.compat.DataView"] = Ys, Ys.__name__ = ["js", "html", "compat", "DataView"], Ys.prototype = {
    getInt8: function(t) {
      var e = this.buf.a[this.offset + t];
      return e >= 128 ? e - 256 : e
    },
    getUint8: function(t) {
      return this.buf.a[this.offset + t]
    },
    getInt16: function(t, e) {
      var s = this.getUint16(t, e);
      return s >= 32768 ? s - 65536 : s
    },
    getUint16: function(t, e) {
      return e ? this.buf.a[this.offset + t] | this.buf.a[this.offset + t + 1] << 8 : this.buf.a[this.offset + t] << 8 | this.buf.a[this.offset + t + 1]
    },
    getInt32: function(t, e) {
      var s = this.offset + t,
        i = this.buf.a[s++],
        n = this.buf.a[s++],
        r = this.buf.a[s++],
        a = this.buf.a[s++];
      return e ? i | n << 8 | r << 16 | a << 24 : a | r << 8 | n << 16 | i << 24
    },
    getUint32: function(t, e) {
      var s = this.getInt32(t, e);
      return 0 > s ? s + 4294967296 : s
    },
    getFloat32: function(t, e) {
      return xs.i32ToFloat(this.getInt32(t, e))
    },
    getFloat64: function(t, e) {
      var s = this.getInt32(t, e),
        i = this.getInt32(t + 4, e);
      return xs.i64ToDouble(e ? s : i, e ? i : s)
    },
    setInt8: function(t, e) {
      0 > e ? this.buf.a[t + this.offset] = e + 128 & 255 : this.buf.a[t + this.offset] = 255 & e
    },
    setUint8: function(t, e) {
      this.buf.a[t + this.offset] = 255 & e
    },
    setInt16: function(t, e, s) {
      this.setUint16(t, 0 > e ? e + 65536 : e, s)
    },
    setUint16: function(t, e, s) {
      var i = t + this.offset;
      s ? (this.buf.a[i] = 255 & e, this.buf.a[i++] = e >> 8 & 255) : (this.buf.a[i++] = e >> 8 & 255, this.buf.a[i] = 255 & e)
    },
    setInt32: function(t, e, s) {
      this.setUint32(t, e, s)
    },
    setUint32: function(t, e, s) {
      var i = t + this.offset;
      s ? (this.buf.a[i++] = 255 & e, this.buf.a[i++] = e >> 8 & 255, this.buf.a[i++] = e >> 16 & 255, this.buf.a[i++] = e >>> 24) : (this.buf.a[i++] = e >>> 24, this.buf.a[i++] = e >> 16 & 255, this.buf.a[i++] = e >> 8 & 255, this.buf.a[i++] = 255 & e)
    },
    setFloat32: function(t, e, s) {
      this.setUint32(t, xs.floatToI32(e), s)
    },
    setFloat64: function(t, e, s) {
      var i = xs.doubleToI64(e);
      s ? (this.setUint32(t, i.low), this.setUint32(t, i.high)) : (this.setUint32(t, i.high), this.setUint32(t, i.low))
    },
    __class__: Ys
  };
  var Hs = function() {};
  n["js.html.compat.Uint8Array"] = Hs, Hs.__name__ = ["js", "html", "compat", "Uint8Array"], Hs._new = function(t, e, s) {
    var i;
    if ("number" == typeof t) {
      i = [];
      for (var n = 0; t > n;) {
        var r = n++;
        i[r] = 0
      }
      i.byteLength = i.length, i.byteOffset = 0, i.buffer = new Fs(i)
    } else if (Ls.__instanceof(t, Fs)) {
      var a = t;
      null == e && (e = 0), null == s && (s = a.byteLength - e), i = 0 == e ? a.a : a.a.slice(e, e + s), i.byteLength = i.length, i.byteOffset = e, i.buffer = a
    } else {
      if (!(t instanceof Array && null == t.__enum__)) throw new Ps("TODO " + d.string(t));
      i = t.slice(), i.byteLength = i.length, i.byteOffset = 0, i.buffer = new Fs(i)
    }
    return i.subarray = Hs._subarray, i.set = Hs._set, i
  }, Hs._set = function(t, e) {
    var s = this;
    if (Ls.__instanceof(t.buffer, Fs)) {
      var i = t;
      if (t.byteLength + e > s.byteLength) throw new Ps("set() outside of range");
      for (var n = 0, r = t.byteLength; r > n;) {
        var a = n++;
        s[a + e] = i[a]
      }
    } else {
      if (!(t instanceof Array && null == t.__enum__)) throw new Ps("TODO");
      var _ = t;
      if (_.length + e > s.byteLength) throw new Ps("set() outside of range");
      for (var o = 0, h = _.length; h > o;) {
        var u = o++;
        s[u + e] = _[u]
      }
    }
  }, Hs._subarray = function(t, e) {
    var s = this,
      i = Hs._new(s.slice(t, e));
    return i.byteOffset = t, i
  };
  var Gs = n["tweezer.EEase"] = {
    __ename__: ["tweezer", "EEase"],
    __constructs__: ["EASE_IN", "EASE_IN_OUT", "EASE_OUT", "EASE_OUT_IN"]
  };
  Gs.EASE_IN = ["EASE_IN", 0], Gs.EASE_IN.toString = r, Gs.EASE_IN.__enum__ = Gs, Gs.EASE_IN_OUT = ["EASE_IN_OUT", 1], Gs.EASE_IN_OUT.toString = r, Gs.EASE_IN_OUT.__enum__ = Gs, Gs.EASE_OUT = ["EASE_OUT", 2], Gs.EASE_OUT.toString = r, Gs.EASE_OUT.__enum__ = Gs, Gs.EASE_OUT_IN = ["EASE_OUT_IN", 3], Gs.EASE_OUT_IN.toString = r, Gs.EASE_OUT_IN.__enum__ = Gs;
  var Vs = n["tweezer.ETween"] = {
    __ename__: ["tweezer", "ETween"],
    __constructs__: ["BACK", "BOUNCE", "CIRCULAR", "CUBIC", "ELASTIC", "EXPONENTIAL", "LINEAR", "QUADRATIC", "QUARTIC", "QUINTIC", "SINE"]
  };
  Vs.BACK = function(t) {
    var e = ["BACK", 0, t];
    return e.__enum__ = Vs, e.toString = r, e
  }, Vs.BOUNCE = ["BOUNCE", 1], Vs.BOUNCE.toString = r, Vs.BOUNCE.__enum__ = Vs, Vs.CIRCULAR = ["CIRCULAR", 2], Vs.CIRCULAR.toString = r, Vs.CIRCULAR.__enum__ = Vs, Vs.CUBIC = ["CUBIC", 3], Vs.CUBIC.toString = r, Vs.CUBIC.__enum__ = Vs, Vs.ELASTIC = function(t, e) {
    var s = ["ELASTIC", 4, t, e];
    return s.__enum__ = Vs, s.toString = r, s
  }, Vs.EXPONENTIAL = ["EXPONENTIAL", 5], Vs.EXPONENTIAL.toString = r, Vs.EXPONENTIAL.__enum__ = Vs, Vs.LINEAR = ["LINEAR", 6], Vs.LINEAR.toString = r, Vs.LINEAR.__enum__ = Vs, Vs.QUADRATIC = ["QUADRATIC", 7], Vs.QUADRATIC.toString = r, Vs.QUADRATIC.__enum__ = Vs, Vs.QUARTIC = ["QUARTIC", 8], Vs.QUARTIC.toString = r, Vs.QUARTIC.__enum__ = Vs, Vs.QUINTIC = ["QUINTIC", 9], Vs.QUINTIC.toString = r, Vs.QUINTIC.__enum__ = Vs, Vs.SINE = ["SINE", 10], Vs.SINE.toString = r, Vs.SINE.__enum__ = Vs;
  var zs = function() {};
  n["tweezer.TweenFactory"] = zs, zs.__name__ = ["tweezer", "TweenFactory"], zs.createTweenFunction = function(t, e, s, i, n) {
    switch (null == i && (i = Gs.EASE_IN), null == n && (n = Vs.LINEAR), n[1]) {
      case 0:
        var r = n[2];
        switch (null == r && (r = 1.70158), i[1]) {
          case 0:
            return function(i) {
              return Ws.easeIn(i, t, e, s, r)
            };
          case 1:
            return function(i) {
              return Ws.easeInOut(i, t, e, s, r)
            };
          case 2:
            return function(i) {
              return Ws.easeOut(i, t, e, s, r)
            };
          case 3:
            return function(i) {
              return Ws.easeOutIn(i, t, e, s, r)
            }
        }
        break;
      case 1:
        switch (i[1]) {
          case 0:
            return function(i) {
              return Xs.easeIn(i, t, e, s)
            };
          case 1:
            return function(i) {
              return Xs.easeInOut(i, t, e, s)
            };
          case 2:
            return function(i) {
              return Xs.easeOut(i, t, e, s)
            };
          case 3:
            return function(i) {
              return Xs.easeOutIn(i, t, e, s)
            }
        }
        break;
      case 2:
        switch (i[1]) {
          case 0:
            return function(i) {
              return Ks.easeIn(i, t, e, s)
            };
          case 1:
            return function(i) {
              return Ks.easeInOut(i, t, e, s)
            };
          case 2:
            return function(i) {
              return Ks.easeOut(i, t, e, s)
            };
          case 3:
            return function(i) {
              return Ks.easeOutIn(i, t, e, s)
            }
        }
        break;
      case 3:
        switch (i[1]) {
          case 0:
            return function(i) {
              return Qs.easeIn(i, t, e, s)
            };
          case 1:
            return function(i) {
              return Qs.easeInOut(i, t, e, s)
            };
          case 2:
            return function(i) {
              return Qs.easeOut(i, t, e, s)
            };
          case 3:
            return function(i) {
              return Qs.easeOutIn(i, t, e, s)
            }
        }
        break;
      case 4:
        var a = n[3],
          _ = n[2];
        switch (null == _ && (_ = .3 * s * (i == Gs.EASE_IN_OUT ? 1.5 : 1)), null == a && (a = 0), i[1]) {
          case 0:
            return function(i) {
              return Js.easeIn(i, t, e, s, _, a)
            };
          case 1:
            return function(i) {
              return Js.easeInOut(i, t, e, s, _, a)
            };
          case 2:
            return function(i) {
              return Js.easeOut(i, t, e, s, _, a)
            };
          case 3:
            return function(i) {
              return Js.easeOutIn(i, t, e, s, _, a)
            }
        }
        break;
      case 5:
        switch (i[1]) {
          case 0:
            return function(i) {
              return Zs.easeIn(i, t, e, s)
            };
          case 1:
            return function(i) {
              return Zs.easeInOut(i, t, e, s)
            };
          case 2:
            return function(i) {
              return Zs.easeOut(i, t, e, s)
            };
          case 3:
            return function(i) {
              return Zs.easeOutIn(i, t, e, s)
            }
        }
        break;
      case 6:
        return function(i) {
          return qs.ease(i, t, e, s)
        };
      case 7:
        switch (i[1]) {
          case 0:
            return function(i) {
              return $s.easeIn(i, t, e, s)
            };
          case 1:
            return function(i) {
              return $s.easeInOut(i, t, e, s)
            };
          case 2:
            return function(i) {
              return $s.easeOut(i, t, e, s)
            };
          case 3:
            return function(i) {
              return $s.easeOutIn(i, t, e, s)
            }
        }
        break;
      case 8:
        switch (i[1]) {
          case 0:
            return function(i) {
              return ti.easeIn(i, t, e, s)
            };
          case 1:
            return function(i) {
              return ti.easeInOut(i, t, e, s)
            };
          case 2:
            return function(i) {
              return ti.easeOut(i, t, e, s)
            };
          case 3:
            return function(i) {
              return ti.easeOutIn(i, t, e, s)
            }
        }
        break;
      case 9:
        switch (i[1]) {
          case 0:
            return function(i) {
              return ei.easeIn(i, t, e, s)
            };
          case 1:
            return function(i) {
              return ei.easeInOut(i, t, e, s)
            };
          case 2:
            return function(i) {
              return ei.easeOut(i, t, e, s)
            };
          case 3:
            return function(i) {
              return ei.easeOutIn(i, t, e, s)
            }
        }
        break;
      case 10:
        switch (i[1]) {
          case 0:
            return function(i) {
              return si.easeIn(i, t, e, s)
            };
          case 1:
            return function(i) {
              return si.easeInOut(i, t, e, s)
            };
          case 2:
            return function(i) {
              return si.easeOut(i, t, e, s)
            };
          case 3:
            return function(i) {
              return si.easeOutIn(i, t, e, s)
            }
        }
    }
  };
  var js = function(t, e, s, i, n, r, a, _, o, h, u) {
    null == a && (a = 0), null == r && (r = 1e3), null == n && (n = 0), this._updateCallback = e, this._startValue = s, this._endValue = i, this._startDelay = n, this._duration = r, this._endDelay = a, this._easeType = _, this._tweenType = o, this._completeCallback = h, this._isSnap = u, I.call(this, t), this._updater(), this._updates = 0
  };
  n["tweezer.Tweezer"] = js, js.__name__ = ["tweezer", "Tweezer"], js.__super__ = I, js.prototype = e(I.prototype, {
    _init: function() {
      I.prototype._init.call(this), this._tweenFunction = zs.createTweenFunction(this._startValue, this._endValue - this._startValue, this._duration, this._easeType, this._tweenType)
    },
    _updater: function(t) {
      if (null == t && (t = 0), I.prototype._updater.call(this, t), null != this._updateCallback) {
        var e = this._tweenFunction(Math.min(Math.max(0, this._age - this._startDelay), this._duration));
        this._updateCallback(this._isSnap ? Math.round(e) : e)
      }
      this._age >= this._startDelay + this._duration + this._endDelay && (null != this._completeCallback && this._completeCallback(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
    },
    __class__: js
  });
  var Ws = function() {};
  n["tweezer.tweens.Back"] = Ws, Ws.__name__ = ["tweezer", "tweens", "Back"], Ws.easeIn = function(t, e, s, i, n) {
    return s * (t /= i) * t * ((n + 1) * t - n) + e
  }, Ws.easeOut = function(t, e, s, i, n) {
    return s * ((t = t / i - 1) * t * ((n + 1) * t + n) + 1) + e
  }, Ws.easeInOut = function(t, e, s, i, n) {
    return (t /= i / 2) < 1 ? s / 2 * (t * t * (((n *= 1.525) + 1) * t - n)) + e : s / 2 * ((t -= 2) * t * (((n *= 1.525) + 1) * t + n) + 2) + e
  }, Ws.easeOutIn = function(t, e, s, i, n) {
    return i / 2 > t ? Ws.easeOut(2 * t, e, s / 2, i, n) : Ws.easeIn(2 * t - i, e + s / 2, s / 2, i, n)
  };
  var Xs = function() {};
  n["tweezer.tweens.Bounce"] = Xs, Xs.__name__ = ["tweezer", "tweens", "Bounce"], Xs.easeIn = function(t, e, s, i) {
    return s - Xs.easeOut(i - t, 0, s, i) + e
  }, Xs.easeOut = function(t, e, s, i) {
    return (t /= i) < .36363636363636365 ? s * (7.5625 * t * t) + e : .7272727272727273 > t ? s * (7.5625 * (t -= .5454545454545454) * t + .75) + e : .9090909090909091 > t ? s * (7.5625 * (t -= .8181818181818182) * t + .9375) + e : s * (7.5625 * (t -= .9545454545454546) * t + .984375) + e
  }, Xs.easeInOut = function(t, e, s, i) {
    return i / 2 > t ? .5 * Xs.easeIn(2 * t, 0, s, i) + e : .5 * Xs.easeOut(2 * t - i, 0, s, i) + .5 * s + e
  }, Xs.easeOutIn = function(t, e, s, i) {
    return i / 2 > t ? Xs.easeOut(2 * t, e, s / 2, i) : Xs.easeIn(2 * t - i, e + s / 2, s / 2, i)
  };
  var Ks = function() {};
  n["tweezer.tweens.Circular"] = Ks, Ks.__name__ = ["tweezer", "tweens", "Circular"], Ks.easeIn = function(t, e, s, i) {
    return -s * (Math.sqrt(1 - (t /= i) * t) - 1) + e
  }, Ks.easeOut = function(t, e, s, i) {
    return s * Math.sqrt(1 - (t = t / i - 1) * t) + e
  }, Ks.easeInOut = function(t, e, s, i) {
    return (t /= i / 2) < 1 ? -s / 2 * (Math.sqrt(1 - t * t) - 1) + e : s / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
  }, Ks.easeOutIn = function(t, e, s, i) {
    return i / 2 > t ? Ks.easeOut(2 * t, e, s / 2, i) : Ks.easeIn(2 * t - i, e + s / 2, s / 2, i)
  };
  var Qs = function() {};
  n["tweezer.tweens.Cubic"] = Qs, Qs.__name__ = ["tweezer", "tweens", "Cubic"], Qs.easeIn = function(t, e, s, i) {
    return s * (t /= i) * t * t + e
  }, Qs.easeOut = function(t, e, s, i) {
    return s * ((t = t / i - 1) * t * t + 1) + e
  }, Qs.easeInOut = function(t, e, s, i) {
    return (t /= i / 2) < 1 ? s / 2 * t * t * t + e : s / 2 * ((t -= 2) * t * t + 2) + e
  }, Qs.easeOutIn = function(t, e, s, i) {
    return i / 2 > t ? Qs.easeOut(2 * t, e, s / 2, i) : Qs.easeIn(2 * t - i, e + s / 2, s / 2, i)
  };
  var Js = function() {};
  n["tweezer.tweens.Elastic"] = Js, Js.__name__ = ["tweezer", "tweens", "Elastic"], Js.easeIn = function(t, e, s, i, n, r) {
    if (0 == t) return e;
    if (1 == (t /= i)) return e + s;
    var a;
    return 0 == r || r < Math.abs(s) ? (r = s, a = n / 4) : a = n / (2 * Math.PI) * Math.asin(s / r), -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - a) * (2 * Math.PI) / n)) + e
  }, Js.easeOut = function(t, e, s, i, n, r) {
    if (0 == t) return e;
    if (1 == (t /= i)) return e + s;
    var a;
    return 0 == r || r < Math.abs(s) ? (r = s, a = n / 4) : a = n / (2 * Math.PI) * Math.asin(s / r), r * Math.pow(2, -10 * t) * Math.sin((t * i - a) * (2 * Math.PI) / n) + s + e
  }, Js.easeInOut = function(t, e, s, i, n, r) {
    if (0 == t) return e;
    if (2 == (t /= i / 2)) return e + s;
    var a;
    return 0 == r || r < Math.abs(s) ? (r = s, a = n / 4) : a = n / (2 * Math.PI) * Math.asin(s / r), 1 > t ? -.5 * (r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - a) * (2 * Math.PI) / n)) + e : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - a) * (2 * Math.PI) / n) * .5 + s + e
  }, Js.easeOutIn = function(t, e, s, i, n, r) {
    return i / 2 > t ? Js.easeOut(2 * t, e, s / 2, i, n, r) : Js.easeIn(2 * t - i, e + s / 2, s / 2, i, n, r)
  };
  var Zs = function() {};
  n["tweezer.tweens.Exponential"] = Zs, Zs.__name__ = ["tweezer", "tweens", "Exponential"], Zs.easeIn = function(t, e, s, i) {
    return 0 == t ? e : s * Math.pow(2, 10 * (t / i - 1)) + e - .001 * s
  }, Zs.easeOut = function(t, e, s, i) {
    return t == i ? e + s : 1.001 * s * (-Math.pow(2, -10 * t / i) + 1) + e
  }, Zs.easeInOut = function(t, e, s, i) {
    return 0 == t ? e : t == i ? e + s : (t /= i / 2) < 1 ? s / 2 * Math.pow(2, 10 * (t - 1)) + e - 5e-4 * s : s / 2 * 1.0005 * (-Math.pow(2, -10 * --t) + 2) + e
  }, Zs.easeOutIn = function(t, e, s, i) {
    return i / 2 > t ? Zs.easeOut(2 * t, e, s / 2, i) : Zs.easeIn(2 * t - i, e + s / 2, s / 2, i)
  };
  var qs = function() {};
  n["tweezer.tweens.Linear"] = qs, qs.__name__ = ["tweezer", "tweens", "Linear"], qs.ease = function(t, e, s, i) {
    return s * t / i + e
  };
  var $s = function() {};
  n["tweezer.tweens.Quadratic"] = $s, $s.__name__ = ["tweezer", "tweens", "Quadratic"], $s.easeIn = function(t, e, s, i) {
    return s * (t /= i) * t + e
  }, $s.easeOut = function(t, e, s, i) {
    return -s * (t /= i) * (t - 2) + e
  }, $s.easeInOut = function(t, e, s, i) {
    return (t /= i / 2) < 1 ? s / 2 * t * t + e : -s / 2 * (--t * (t - 2) - 1) + e
  }, $s.easeOutIn = function(t, e, s, i) {
    return i / 2 > t ? $s.easeOut(2 * t, e, s / 2, i) : $s.easeIn(2 * t - i, e + s / 2, s / 2, i)
  };
  var ti = function() {};
  n["tweezer.tweens.Quartic"] = ti, ti.__name__ = ["tweezer", "tweens", "Quartic"], ti.easeIn = function(t, e, s, i) {
    return s * (t /= i) * t * t * t + e
  }, ti.easeOut = function(t, e, s, i) {
    return -s * ((t = t / i - 1) * t * t * t - 1) + e
  }, ti.easeInOut = function(t, e, s, i) {
    return (t /= i / 2) < 1 ? s / 2 * t * t * t * t + e : -s / 2 * ((t -= 2) * t * t * t - 2) + e
  }, ti.easeOutIn = function(t, e, s, i) {
    return i / 2 > t ? ti.easeOut(2 * t, e, s / 2, i) : ti.easeIn(2 * t - i, e + s / 2, s / 2, i)
  };
  var ei = function() {};
  n["tweezer.tweens.Quintic"] = ei, ei.__name__ = ["tweezer", "tweens", "Quintic"], ei.easeIn = function(t, e, s, i) {
    return s * (t /= i) * t * t * t * t + e
  }, ei.easeOut = function(t, e, s, i) {
    return s * ((t = t / i - 1) * t * t * t * t + 1) + e
  }, ei.easeInOut = function(t, e, s, i) {
    return (t /= i / 2) < 1 ? s / 2 * t * t * t * t * t + e : s / 2 * ((t -= 2) * t * t * t * t + 2) + e
  }, ei.easeOutIn = function(t, e, s, i) {
    return i / 2 > t ? ei.easeOut(2 * t, e, s / 2, i) : ei.easeIn(2 * t - i, e + s / 2, s / 2, i)
  };
  var si = function() {};
  n["tweezer.tweens.Sine"] = si, si.__name__ = ["tweezer", "tweens", "Sine"], si.easeIn = function(t, e, s, i) {
    return -s * Math.cos(t / i * (Math.PI / 2)) + s + e
  }, si.easeOut = function(t, e, s, i) {
    return s * Math.sin(t / i * (Math.PI / 2)) + e
  }, si.easeInOut = function(t, e, s, i) {
    return -s / 2 * (Math.cos(Math.PI * t / i) - 1) + e
  }, si.easeOutIn = function(t, e, s, i) {
    return i / 2 > t ? si.easeOut(2 * t, e, s / 2, i) : si.easeIn(2 * t - i, e + s / 2, s / 2, i)
  };
  var ii, ni = 0;
  Array.prototype.indexOf && (o.indexOf = function(t, e, s) {
    return Array.prototype.indexOf.call(t, e, s)
  }), n.Math = Math, String.prototype.__class__ = n.String = String, String.__name__ = ["String"], n.Array = Array, Array.__name__ = ["Array"], Date.prototype.__class__ = n.Date = Date, Date.__name__ = ["Date"];
  var ri = n.Int = {
      __name__: ["Int"]
    },
    ai = n.Dynamic = {
      __name__: ["Dynamic"]
    },
    _i = n.Float = Number;
  _i.__name__ = ["Float"];
  var oi = n.Bool = Boolean;
  oi.__ename__ = ["Bool"];
  var hi = n.Class = {
      __name__: ["Class"]
    },
    ui = {};
  vs.content = [{
    name: "revision",
    data: "NjYNCjIwMTYvMDcvMjkgMTM6MjU6NTcNCg"
  }, {
    name: "config",
    data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxkYXRhPg0KCTxzZXR0aW5ncz4NCgkJPGFzc2V0cz4NCgkJCTxwYWNrYWdlcyBkZWZhdWx0PSJhc3NldHMiIGF1ZGlvPSJhc3NldHMuYXVkaW8iIC8+DQoJCTwvYXNzZXRzPg0KCQk8Zm9udCBuYW1lPSJyb2JvdG8td2ViZm9udCIgLz4NCgkJPGFzY2lpQXJ0Pg0KICBfX19fX19fXyAgX19fICAgXyAgX19fX18gICAgX19fICBfX18gIF9fX19fICBfXyAgX18gX19fX19fX19fICBfX19fIA0KIC8gX19fLyBfIFwvIF8gfCAvIHwvIC8gXyBcICAvIF8gXC8gXyBcLyAgXy8gfC9fLyAvIC8vIC8gX18vIF8gXC8gX18gXA0KLyAvICAvICwgXy8gX18gfC8gICAgLyAvLyAvIC8gX19fLyAsIF8vLyAvXykgICggIC8gXyAgLyBfLy8gLCBfLyAvXy8gLw0KXF9fXy9fL3xfL18vIHxfL18vfF8vX19fXy8gL18vICAvXy98Xy9fX18vXy98X3wgL18vL18vX19fL18vfF98XF9fX18vIA0KDQoJCTwvYXNjaWlBcnQ+DQoJCTx1cmxzPg0KCQkJPHdlYnNpdGU+aHR0cDovL2tpejEwLmNvbTwvd2Vic2l0ZT4NCgkJPC91cmxzPg0KCQk8Z29vZ2xlQW5hbHl0aWNzIGlkPSJVQS0yMjQwNjMzNy0xMiIgZW5hYmxlZD0idHJ1ZSIgLz4NCgkJPGF1ZGlvSG9sZERlbGF5PjUwMDA8L2F1ZGlvSG9sZERlbGF5Pg0KCQk8ZGlzYWJsZUV5ZUNhbmR5PmZhbHNlPC9kaXNhYmxlRXllQ2FuZHk+DQoJCTxkaXNhYmxlRGV2aWNlTW90aW9uPmZhbHNlPC9kaXNhYmxlRGV2aWNlTW90aW9uPg0KCQk8b3JpZW50YXRpb25BcHByb3hpbWF0aW9uPmZhbHNlPC9vcmllbnRhdGlvbkFwcHJveGltYXRpb24+DQoJCTxzdGFydGluZ0xldmVsPjA8L3N0YXJ0aW5nTGV2ZWw+DQoJPC9zZXR0aW5ncz4NCgk8Z3VpPg0KCQk8YXVkaW9Ib2xkTWVzc2FnZT5Ub3VjaCB0byBzdGFydDwvYXVkaW9Ib2xkTWVzc2FnZT4NCgkJPGJ1dHRvbnM+DQoJCQk8d2Vic2l0ZT5Nb3JlIGdhbWVzPC93ZWJzaXRlPg0KCQkJPGluc3RydWN0aW9ucz5Ib3cgdG8gcGxheTwvaW5zdHJ1Y3Rpb25zPg0KCQkJPHBsYXk+UGxheSBub3c8L3BsYXk+DQoJCQk8c2VsZWN0TGV2ZWw+U3RhcnQgcmFjZTwvc2VsZWN0TGV2ZWw+DQoJCQk8cmVwbGF5PlBsYXkgYWdhaW48L3JlcGxheT4NCgkJCTxjb250aW51ZT5Db250aW51ZSBnYW1lPC9jb250aW51ZT4NCgkJCTxmaW5pc2hlZD5HYW1lIG92ZXI8L2ZpbmlzaGVkPg0KCQkJPHJlc2V0PlJlc2V0IGdhbWU8L3Jlc2V0Pg0KCQkJPGJ1eT5CdXk8L2J1eT4NCgkJCTxjb3VudGRvd24+QXV0byBzdGFydDwvY291bnRkb3duPg0KCQkJPHVucGF1c2U+UmVzdW1lPC91bnBhdXNlPg0KCQkJPGF1ZGlvPlRvZ2dsZSBzb3VuZDwvYXVkaW8+DQoJCQk8ZnVsbFNjcmVlbj5GdWxsIHNjcmVlbjwvZnVsbFNjcmVlbj4NCgkJCTxiYWNrPlF1aXQgZ2FtZTwvYmFjaz4NCgkJCTx0ZXN0TW9kZT4NCgkJCQk8ZmluaXNoPkZpbmlzaDwvZmluaXNoPg0KCQkJCTxza2lwPlNraXA8L3NraXA+DQoJCQk8L3Rlc3RNb2RlPg0KCQk8L2J1dHRvbnM+DQoJCTxsb2NhdGlvbnM+DQoJCQk8YSBhbHQ9Ikl0YWxpYW4iPkl0YWx5PC9hPg0KCQkJPGIgYWx0PSJCcml0aXNoIj5Ccml0YWluPC9iPg0KCQkJPGMgYWx0PSJKYXBhbmVzZSI+SmFwYW48L2M+DQoJCQk8ZCBhbHQ9Ik1vbmFjbyI+TW9uYWNvPC9kPg0KCQk8L2xvY2F0aW9ucz4NCgkJPHVwZ3JhZGVzPg0KCQkJPHNwZWVkPlRvcCBzcGVlZDwvc3BlZWQ+DQoJCQk8c3RlZXJpbmc+R3JpcDwvc3RlZXJpbmc+DQoJCQk8YWNjZWxlcmF0aW9uPkFjY2VsZXJhdGlvbjwvYWNjZWxlcmF0aW9uPg0KCQkJPGJvb3N0PkJvb3N0PC9ib29zdD4NCgkJPC91cGdyYWRlcz4NCgkJPHJhbms+DQoJCQk8Z29vZD5FeGNlbGxlbnQsIHlvdSBhcmUgdGhlIEdyYW5kIFByaXggSGVybyE8L2dvb2Q+DQoJCQk8b2sgID5XZWxsIGRvbmUsIHlvdSBhcmUgb24gdGhlIHBvZGl1bSE8L29rPg0KCQkJPHBvb3I+QmV0dGVyIGx1Y2sgbmV4dCB0aW1lLCB1cGdyYWRlIHlvdXIgY2FyITwvcG9vcj4NCgkJPC9yYW5rPg0KCQk8c2NlbmVzPg0KCQkJPGluc3RydWN0aW9ucz4NCgkJCQk8dGl0bGU+SG93IHRvIHBsYXk8L3RpdGxlPg0KCQkJCTxtZXNzYWdlPjwhW0NEQVRBW0NvbXBldGUgYWNyb3NzIDQgcmFjZXMgaW4gdGhlIEdyYW5kIFByaXggU2VyaWVzLjxici8+PGJyLz5Eb2RnZSB0cmFmZmljLCBib29zdCwgY29sbGVjdCBjb2lucyBhbmQgdXBncmFkZSB5b3VyIGNhciBmb3IgdGhlIG5leHQgcmFjZS48YnIvPjxici8+QXJlIHlvdSB0aGUgR3JhbmQgUHJpeCBIZXJvP11dPjwvbWVzc2FnZT4NCgkJCTwvaW5zdHJ1Y3Rpb25zPg0KCQkJPHNlbGVjdExldmVsPg0KCQkJCTx0aXRsZT5SYWNlIF9fWF9fIG9mIDQ8L3RpdGxlPg0KCQkJCTxhbHRUaXRsZT5HcmFuZCBQcml4PC9hbHRUaXRsZT4NCgkJCTwvc2VsZWN0TGV2ZWw+DQoJCQk8aW50ZXJzdGl0aWFsPg0KCQkJCTx0b3RhbD5Ub3RhbCBwb2ludHM8L3RvdGFsPg0KCQkJCTxwZXJzb25hbEJlc3Q+UGVyc29uYWwgYmVzdDwvcGVyc29uYWxCZXN0Pg0KCQkJPC9pbnRlcnN0aXRpYWw+DQoJCQk8cmVzdWx0cz4NCgkJCQk8dGl0bGU+UmFjZSBfX1hfXyBvZiA0IGNvbXBsZXRlPC90aXRsZT4NCgkJCQk8dGFibGU+DQoJCQkJCTxsb2NhdGlvbj5SYWNlPC9sb2NhdGlvbj4NCgkJCQkJPHBvc2l0aW9uPlBvc2l0aW9uPC9wb3NpdGlvbj4NCgkJCQkJPHBvaW50cz5Qb2ludHM8L3BvaW50cz4NCgkJCQkJPHRvdGFsPlRvdGFsIHBvaW50czwvdG90YWw+DQoJCQkJCTxwZXJzb25hbEJlc3Q+UGVyc29uYWwgYmVzdDwvcGVyc29uYWxCZXN0Pg0KCQkJCTwvdGFibGU+DQoJCQkJPG1lc3NhZ2U+WW91IGNvbXBsZXRlZCB0aGUgcmFjZSBpbiBfX1NDT1JFX18gcG9zaXRpb24gYW5kIHNjb3JlZCBfX1BPSU5UU19fIHBvaW50cy48L21lc3NhZ2U+DQoJCQk8L3Jlc3VsdHM+DQoJCQk8c2hvcD4NCgkJCQk8dGl0bGU+VXBncmFkZSB5b3VyIGNhcjwvdGl0bGU+DQoJCQkJPG1heGVkPk1heGVkPC9tYXhlZD4NCgkJCQk8aW5zdWZmaWNpZW50PkVhcm4gRnVuZHM8L2luc3VmZmljaWVudD4NCgkJCTwvc2hvcD4NCgkJPC9zY2VuZXM+DQoJPC9ndWk+DQo8L2RhdGE+DQo"
  }];
  var li = {},
    ci = Function("return typeof ArrayBuffer != 'undefined' ? ArrayBuffer : null")() || Fs;
  null == ci.prototype.slice && (ci.prototype.slice = Fs.sliceImpl);
  var di = (Function("return typeof DataView != 'undefined' ? DataView : null")() || Ys, Function("return typeof Uint8Array != 'undefined' ? Uint8Array : null")() || Hs._new);
  y.Element = 0, y.PCData = 1, y.CData = 2, y.Comment = 3, y.DocType = 4, y.ProcessingInstruction = 5, y.Document = 6, ms.USE_CACHE = !1, ms.USE_ENUM_INDEX = !1, ms.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", Ss.DEFAULT_RESOLVER = E, Ss.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", bs.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bs.BYTES = Ts.ofString(bs.CHARS), ks.count = 0, xs.i64tmp = function(t) {
    var e, s = new Es(0, 0);
    return e = s
  }(this), Os.escapes = function(t) {
    var e, s = new Ns;
    return null != li.lt ? s.setReserved("lt", "<") : s.h.lt = "<", null != li.gt ? s.setReserved("gt", ">") : s.h.gt = ">", null != li.amp ? s.setReserved("amp", "&") : s.h.amp = "&", null != li.quot ? s.setReserved("quot", '"') : s.h.quot = '"', null != li.apos ? s.setReserved("apos", "'") : s.h.apos = "'", e = s
  }(this), Ls.__toStr = {}.toString, Hs.BYTES_PER_ELEMENT = 1, pe.main()
}("undefined" != typeof console ? console : {
  log: function() {}
});
