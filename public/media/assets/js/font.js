(window.FontAwesomeKitConfig = {
  asyncLoading: { enabled: !1 },
  autoA11y: { enabled: !0 },
  baseUrl: "https://ka-f.fontawesome.com",
  baseUrlKit: "https://kit.fontawesome.com",
  detectConflictsUntil: null,
  iconUploads: {},
  id: 48138435,
  license: "free",
  method: "css",
  minify: { enabled: !0 },
  token: "8e467ad554",
  v4FontFaceShim: { enabled: !0 },
  v4shim: { enabled: !0 },
  v5FontFaceShim: { enabled: !0 },
  version: "6.4.2",
}),
  (function (t) {
    "function" == typeof define && define.amd ? define("kit-loader", t) : t();
  })(function () {
    "use strict";
    function t(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e &&
          (o = o.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function e(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? t(Object(r), !0).forEach(function (t) {
              o(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : t(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function n(t) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function o(t, e, n) {
      var o, r;
      return (
        (e =
          "symbol" ==
          typeof (r = (function (t, e) {
            if ("object" != typeof t || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(t, e || "default");
              if ("object" != typeof o) return o;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })((o = e), "string"))
            ? r
            : String(r)) in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function r(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
      return o;
    }
    function i(t, e) {
      var n = (e && e.addOn) || "",
        o = (e && e.baseFilename) || t.license + n,
        r = e && e.minify ? ".min" : "",
        i = (e && e.fileSuffix) || t.method,
        a = (e && e.subdir) || t.method;
      return (
        t.baseUrl +
        "/releases/" +
        ("latest" === t.version ? "latest" : "v".concat(t.version)) +
        "/" +
        a +
        "/" +
        o +
        r +
        "." +
        i
      );
    }
    function a(t, e) {
      var n = "." + Array.prototype.join.call(e || ["fa"], ",."),
        o = t.querySelectorAll(n);
      Array.prototype.forEach.call(o, function (e) {
        var n = e.getAttribute("title");
        e.setAttribute("aria-hidden", "true");
        var o =
          !e.nextElementSibling ||
          !e.nextElementSibling.classList.contains("sr-only");
        if (n && o) {
          var r = t.createElement("span");
          (r.innerHTML = n),
            r.classList.add("sr-only"),
            e.parentNode.insertBefore(r, e.nextSibling);
        }
      });
    }
    var c,
      s = function () {},
      f =
        "undefined" != typeof global &&
        void 0 !== global.process &&
        "function" == typeof global.process.emit,
      u = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
      l = [];
    function d() {
      for (var t = 0; t < l.length; t++) l[t][0](l[t][1]);
      (l = []), (c = !1);
    }
    function h(t, e) {
      l.push([t, e]), c || ((c = !0), u(d, 0));
    }
    function v(t) {
      var e = t.owner,
        n = e._state,
        o = e._data,
        r = t[n],
        i = t.then;
      if ("function" == typeof r) {
        n = "fulfilled";
        try {
          o = r(o);
        } catch (a) {
          y(i, a);
        }
      }
      p(i, o) || ("fulfilled" === n && m(i, o), "rejected" === n && y(i, o));
    }
    function p(t, e) {
      var o;
      try {
        if (t === e)
          throw TypeError(
            "A promises callback cannot return that same promise.",
          );
        if (e && ("function" == typeof e || "object" === n(e))) {
          var r = e.then;
          if ("function" == typeof r)
            return (
              r.call(
                e,
                function (n) {
                  o || ((o = !0), e === n ? b(t, n) : m(t, n));
                },
                function (e) {
                  o || ((o = !0), y(t, e));
                },
              ),
              !0
            );
        }
      } catch (i) {
        return o || y(t, i), !0;
      }
      return !1;
    }
    function m(t, e) {
      (t !== e && p(t, e)) || b(t, e);
    }
    function b(t, e) {
      "pending" === t._state &&
        ((t._state = "settled"), (t._data = e), h($, t));
    }
    function y(t, e) {
      "pending" === t._state &&
        ((t._state = "settled"), (t._data = e), h(w, t));
    }
    function g(t) {
      t._then = t._then.forEach(v);
    }
    function $(t) {
      (t._state = "fulfilled"), g(t);
    }
    function w(t) {
      (t._state = "rejected"),
        g(t),
        !t._handled &&
          f &&
          global.process.emit("unhandledRejection", t._data, t);
    }
    function A(t) {
      global.process.emit("rejectionHandled", t);
    }
    function _(t) {
      if ("function" != typeof t)
        throw TypeError("Promise resolver " + t + " is not a function");
      if (this instanceof _ == !1)
        throw TypeError(
          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
        );
      (this._then = []),
        (function (t, e) {
          function n(t) {
            y(e, t);
          }
          try {
            t(function (t) {
              m(e, t);
            }, n);
          } catch (o) {
            n(o);
          }
        })(t, this);
    }
    (_.prototype = {
      constructor: _,
      _state: "pending",
      _then: null,
      _data: void 0,
      _handled: !1,
      then: function (t, e) {
        var n = {
          owner: this,
          then: new this.constructor(s),
          fulfilled: t,
          rejected: e,
        };
        return (
          (!e && !t) ||
            this._handled ||
            ((this._handled = !0),
            "rejected" === this._state && f && h(A, this)),
          "fulfilled" === this._state || "rejected" === this._state
            ? h(v, n)
            : this._then.push(n),
          n.then
        );
      },
      catch: function (t) {
        return this.then(null, t);
      },
    }),
      (_.all = function (t) {
        if (!Array.isArray(t))
          throw TypeError("You must pass an array to Promise.all().");
        return new _(function (e, n) {
          var o = [],
            r = 0;
          function i(t) {
            return (
              r++,
              function (n) {
                (o[t] = n), --r || e(o);
              }
            );
          }
          for (var a, c = 0; c < t.length; c++)
            (a = t[c]) && "function" == typeof a.then
              ? a.then(i(c), n)
              : (o[c] = a);
          r || e(o);
        });
      }),
      (_.race = function (t) {
        if (!Array.isArray(t))
          throw TypeError("You must pass an array to Promise.race().");
        return new _(function (e, n) {
          for (var o, r = 0; r < t.length; r++)
            (o = t[r]) && "function" == typeof o.then ? o.then(e, n) : e(o);
        });
      }),
      (_.resolve = function (t) {
        return t && "object" === n(t) && t.constructor === _
          ? t
          : new _(function (e) {
              e(t);
            });
      }),
      (_.reject = function (t) {
        return new _(function (e, n) {
          n(t);
        });
      });
    var S = "function" == typeof Promise ? Promise : _;
    function F(t, e) {
      var n,
        o = e.fetch,
        r = e.XMLHttpRequest,
        i = e.token,
        a = t;
      return (
        i &&
          !((n = t).indexOf("kit-upload.css") > -1) &&
          ("URLSearchParams" in window
            ? (a = new URL(t)).searchParams.set("token", i)
            : (a = a + "?token=" + encodeURIComponent(i))),
        (a = a.toString()),
        new S(function (t, e) {
          if ("function" == typeof o)
            o(a, { mode: "cors", cache: "default" })
              .then(function (t) {
                if (t.ok) return t.text();
                throw Error("");
              })
              .then(function (e) {
                t(e);
              })
              .catch(e);
          else if ("function" == typeof r) {
            var n = new r();
            n.addEventListener("loadend", function () {
              this.responseText ? t(this.responseText) : e(Error(""));
            }),
              ["abort", "error", "timeout"].map(function (t) {
                n.addEventListener(t, function () {
                  e(Error(""));
                });
              }),
              n.open("GET", a),
              n.send();
          } else e(Error(""));
        })
      );
    }
    function P(t, e) {
      var n = document.createElement("SCRIPT"),
        o = document.createTextNode(t);
      return (
        n.appendChild(o),
        (n.referrerPolicy = "strict-origin"),
        e.id && n.setAttribute("id", e.id),
        e &&
          e.detectingConflicts &&
          e.detectionIgnoreAttr &&
          n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),
        n
      );
    }
    function C(t) {
      var e,
        n = [],
        o = document,
        r = (o.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
          o.readyState,
        );
      r ||
        o.addEventListener(
          "DOMContentLoaded",
          (e = function () {
            for (
              o.removeEventListener("DOMContentLoaded", e), r = 1;
              (e = n.shift());

            )
              e();
          }),
        ),
        r ? setTimeout(t, 0) : n.push(t);
    }
    try {
      if (window.FontAwesomeKitConfig) {
        var U = window.FontAwesomeKitConfig,
          j = {
            detectingConflicts:
              U.detectConflictsUntil &&
              new Date() <= new Date(U.detectConflictsUntil),
            detectionIgnoreAttr: "data-fa-detection-ignore",
            fetch: window.fetch,
            token: U.token,
            XMLHttpRequest: window.XMLHttpRequest,
            document: document,
          },
          O = document.currentScript,
          E = O ? O.parentElement : document.head;
        (function () {
          var t,
            n,
            o,
            c =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return "js" === c.method
            ? ((t = c),
              ((n = s).autoA11y = t.autoA11y.enabled),
              "pro" === t.license &&
                ((n.autoFetchSvg = !0),
                (n.fetchSvgFrom =
                  t.baseUrl +
                  "/releases/" +
                  ("latest" === t.version ? "latest" : "v".concat(t.version)) +
                  "/svgs"),
                (n.fetchUploadedSvgFrom = t.uploadsUrl)),
              (o = []),
              t.v4shim.enabled &&
                o.push(
                  new S(function (o, r) {
                    F(i(t, { addOn: "-v4-shims", minify: t.minify.enabled }), n)
                      .then(function (t) {
                        o(P(t, e(e({}, n), {}, { id: "fa-v4-shims" })));
                      })
                      .catch(r);
                  }),
                ),
              o.push(
                new S(function (o, r) {
                  F(
                    (t.subsetPath && t.baseUrl + "/" + t.subsetPath) ||
                      i(t, { minify: t.minify.enabled }),
                    n,
                  )
                    .then(function (t) {
                      var r, i, a, c;
                      o(
                        ((r = P(t, e(e({}, n), {}, { id: "fa-main" }))),
                        (a =
                          (i = n) && void 0 !== i.autoFetchSvg
                            ? i.autoFetchSvg
                            : void 0),
                        (c = i && void 0 !== i.autoA11y ? i.autoA11y : void 0),
                        void 0 !== c &&
                          r.setAttribute(
                            "data-auto-a11y",
                            c ? "true" : "false",
                          ),
                        a &&
                          (r.setAttributeNode(
                            document.createAttribute("data-auto-fetch-svg"),
                          ),
                          r.setAttribute("data-fetch-svg-from", i.fetchSvgFrom),
                          r.setAttribute(
                            "data-fetch-uploaded-svg-from",
                            i.fetchUploadedSvgFrom,
                          )),
                        r),
                      );
                    })
                    .catch(r);
                }),
              ),
              S.all(o))
            : "css" === c.method
              ? (function t(n, o) {
                  var c =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : function () {},
                    s = o.document || s,
                    f = a.bind(a, s, [
                      "fa",
                      "fab",
                      "fas",
                      "far",
                      "fal",
                      "fad",
                      "fak",
                    ]);
                  n.autoA11y.enabled && c(f);
                  var u = n.subsetPath && n.baseUrl + "/" + n.subsetPath,
                    l = [{ id: "fa-main", addOn: void 0, url: u }];
                  if (
                    (n.v4shim &&
                      n.v4shim.enabled &&
                      l.push({ id: "fa-v4-shims", addOn: "-v4-shims" }),
                    n.v5FontFaceShim &&
                      n.v5FontFaceShim.enabled &&
                      l.push({ id: "fa-v5-font-face", addOn: "-v5-font-face" }),
                    n.v4FontFaceShim &&
                      n.v4FontFaceShim.enabled &&
                      l.push({ id: "fa-v4-font-face", addOn: "-v4-font-face" }),
                    !u && n.customIconsCssPath)
                  ) {
                    var d =
                      (n.customIconsCssPath.indexOf("kit-upload.css") > -1
                        ? n.baseUrlKit
                        : n.baseUrl) +
                      "/" +
                      n.customIconsCssPath;
                    l.push({ id: "fa-kit-upload", url: d });
                  }
                  var h = l.map(function (t) {
                    return new S(function (a, c) {
                      var s =
                          t.url ||
                          i(n, { addOn: t.addOn, minify: n.minify.enabled }),
                        f = { id: t.id },
                        u = n.subset
                          ? f
                          : e(
                              e(e({}, o), f),
                              {},
                              {
                                baseUrl: n.baseUrl,
                                version: n.version,
                                id: t.id,
                                contentFilter: function (t, e) {
                                  var n, o, i, a;
                                  return (
                                    (n = t),
                                    (o = e.baseUrl),
                                    (i = e.version),
                                    (a = n),
                                    [
                                      [
                                        /(url\("?)\.\.\/\.\.\/\.\./g,
                                        function (t, e) {
                                          return "".concat(e).concat(o);
                                        },
                                      ],
                                      [
                                        /(url\("?)\.\.\/webfonts/g,
                                        function (t, e) {
                                          return ""
                                            .concat(e)
                                            .concat(o, "/releases/v")
                                            .concat(i, "/webfonts");
                                        },
                                      ],
                                      [
                                        /(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,
                                        function (t, e) {
                                          return "".concat(e).concat(o);
                                        },
                                      ],
                                    ].forEach(function (t) {
                                      var e,
                                        n =
                                          ((e = t),
                                          (function (t) {
                                            if (Array.isArray(t)) return t;
                                          })(e) ||
                                            (function (t, e) {
                                              var n =
                                                null == t
                                                  ? null
                                                  : ("undefined" !=
                                                      typeof Symbol &&
                                                      t[Symbol.iterator]) ||
                                                    t["@@iterator"];
                                              if (null != n) {
                                                var o,
                                                  r,
                                                  i,
                                                  a,
                                                  c = [],
                                                  s = !0,
                                                  f = !1;
                                                try {
                                                  if (
                                                    ((i = (n = n.call(t)).next),
                                                    0 === e)
                                                  ) {
                                                    if (Object(n) !== n) return;
                                                    s = !1;
                                                  } else
                                                    for (
                                                      ;
                                                      !(s = (o = i.call(n))
                                                        .done) &&
                                                      (c.push(o.value),
                                                      c.length !== e);
                                                      s = !0
                                                    );
                                                } catch (u) {
                                                  (f = !0), (r = u);
                                                } finally {
                                                  try {
                                                    if (
                                                      !s &&
                                                      null != n.return &&
                                                      ((a = n.return()),
                                                      Object(a) !== a)
                                                    )
                                                      return;
                                                  } finally {
                                                    if (f) throw r;
                                                  }
                                                }
                                                return c;
                                              }
                                            })(e, 2) ||
                                            (function (t, e) {
                                              if (t) {
                                                if ("string" == typeof t)
                                                  return r(t, e);
                                                var n =
                                                  Object.prototype.toString
                                                    .call(t)
                                                    .slice(8, -1);
                                                if (
                                                  ("Object" === n &&
                                                    t.constructor &&
                                                    (n = t.constructor.name),
                                                  "Map" === n || "Set" === n)
                                                )
                                                  return Array.from(t);
                                                if (
                                                  "Arguments" === n ||
                                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                    n,
                                                  )
                                                )
                                                  return r(t, e);
                                              }
                                            })(e, 2) ||
                                            (function () {
                                              throw TypeError(
                                                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                              );
                                            })()),
                                        o = n[0],
                                        i = n[1];
                                      a = a.replace(o, i);
                                    }),
                                    a
                                  );
                                },
                              },
                            );
                      F(s, o)
                        .then(function (t) {
                          var e, n, o, r, i;
                          a(
                            ((e = t),
                            (n = u),
                            (o =
                              n.contentFilter ||
                              function (t, e) {
                                return t;
                              }),
                            (r = document.createElement("style")),
                            (i = document.createTextNode(o(e, n))),
                            r.appendChild(i),
                            (r.media = "all"),
                            n.id && r.setAttribute("id", n.id),
                            n &&
                              n.detectingConflicts &&
                              n.detectionIgnoreAttr &&
                              r.setAttributeNode(
                                document.createAttribute(n.detectionIgnoreAttr),
                              ),
                            r),
                          );
                        })
                        .catch(c);
                    });
                  });
                  return S.all(h);
                })(c, s, function (t) {
                  var e;
                  C(t),
                    (e = t),
                    "undefined" != typeof MutationObserver &&
                      new MutationObserver(e).observe(document, {
                        childList: !0,
                        subtree: !0,
                      });
                })
              : void 0;
        })(U, j)
          .then(function (t) {
            t.map(function (t) {
              try {
                E.insertBefore(t, O ? O.nextSibling : null);
              } catch (e) {
                E.appendChild(t);
              }
            }),
              j.detectingConflicts &&
                O &&
                C(function () {
                  O.setAttributeNode(
                    document.createAttribute(j.detectionIgnoreAttr),
                  );
                  var t,
                    e,
                    n,
                    o =
                      ((t = U),
                      (e = j),
                      (n = document.createElement("script")),
                      e &&
                        e.detectionIgnoreAttr &&
                        n.setAttributeNode(
                          document.createAttribute(e.detectionIgnoreAttr),
                        ),
                      (n.src = i(t, {
                        baseFilename: "conflict-detection",
                        fileSuffix: "js",
                        subdir: "js",
                        minify: t.minify.enabled,
                      })),
                      n);
                  document.body.appendChild(o);
                });
          })
          .catch(function (t) {
            console.error("".concat("Font Awesome Kit:", " ").concat(t));
          });
      }
    } catch (k) {
      console.error("".concat("Font Awesome Kit:", " ").concat(k));
    }
  });
