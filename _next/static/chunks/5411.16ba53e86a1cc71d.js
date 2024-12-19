(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5411],
  {
    96279: function (e, t) {
      var n,
        r = "undefined" != typeof self ? self : this,
        o = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = r.DOMException);
          }
          return (e.prototype = r), new e();
        })();
      (n = o),
        (function (e) {
          var t = {
            searchParams: "URLSearchParams" in n,
            iterable: "Symbol" in n && "iterator" in Symbol,
            blob:
              "FileReader" in n &&
              "Blob" in n &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            formData: "FormData" in n,
            arrayBuffer: "ArrayBuffer" in n,
          };
          if (t.arrayBuffer)
            var r = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              o =
                ArrayBuffer.isView ||
                function (e) {
                  return e && r.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function i(e) {
            if (
              ("string" != typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
            )
              throw TypeError("Invalid character in header field name");
            return e.toLowerCase();
          }
          function a(e) {
            return "string" != typeof e && (e = String(e)), e;
          }
          function s(e) {
            var n = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              t.iterable &&
                (n[Symbol.iterator] = function () {
                  return n;
                }),
              n
            );
          }
          function c(e) {
            (this.map = {}),
              e instanceof c
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                  }, this);
          }
          function l(e) {
            if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
            e.bodyUsed = !0;
          }
          function u(e) {
            return new Promise(function (t, n) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  n(e.error);
                });
            });
          }
          function d(e) {
            var t = new FileReader(),
              n = u(t);
            return t.readAsArrayBuffer(e), n;
          }
          function f(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function h() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                if (((this._bodyInit = e), e)) {
                  if ("string" == typeof e) this._bodyText = e;
                  else if (t.blob && Blob.prototype.isPrototypeOf(e))
                    this._bodyBlob = e;
                  else if (t.formData && FormData.prototype.isPrototypeOf(e))
                    this._bodyFormData = e;
                  else if (
                    t.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e)
                  )
                    this._bodyText = e.toString();
                  else {
                    var n;
                    t.arrayBuffer &&
                    t.blob &&
                    (n = e) &&
                    DataView.prototype.isPrototypeOf(n)
                      ? ((this._bodyArrayBuffer = f(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : t.arrayBuffer &&
                        (ArrayBuffer.prototype.isPrototypeOf(e) || o(e))
                      ? (this._bodyArrayBuffer = f(e))
                      : (this._bodyText = e =
                          Object.prototype.toString.call(e));
                  }
                } else this._bodyText = "";
                !this.headers.get("content-type") &&
                  ("string" == typeof e
                    ? this.headers.set(
                        "content-type",
                        "text/plain;charset=UTF-8"
                      )
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : t.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(e) &&
                      this.headers.set(
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      ));
              }),
              t.blob &&
                ((this.blob = function () {
                  var e = l(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (!this._bodyFormData)
                    return Promise.resolve(new Blob([this._bodyText]));
                  throw Error("could not read FormData body as blob");
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? l(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(d);
                })),
              (this.text = function () {
                var e,
                  t,
                  n,
                  r = l(this);
                if (r) return r;
                if (this._bodyBlob)
                  return (
                    (e = this._bodyBlob),
                    (n = u((t = new FileReader()))),
                    t.readAsText(e),
                    n
                  );
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e), n = Array(t.length), r = 0;
                        r < t.length;
                        r++
                      )
                        n[r] = String.fromCharCode(t[r]);
                      return n.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                throw Error("could not read FormData body as text");
              }),
              t.formData &&
                (this.formData = function () {
                  return this.text().then(y);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (c.prototype.append = function (e, t) {
            (e = i(e)), (t = a(t));
            var n = this.map[e];
            this.map[e] = n ? n + ", " + t : t;
          }),
            (c.prototype.delete = function (e) {
              delete this.map[i(e)];
            }),
            (c.prototype.get = function (e) {
              return (e = i(e)), this.has(e) ? this.map[e] : null;
            }),
            (c.prototype.has = function (e) {
              return this.map.hasOwnProperty(i(e));
            }),
            (c.prototype.set = function (e, t) {
              this.map[i(e)] = a(t);
            }),
            (c.prototype.forEach = function (e, t) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
            }),
            (c.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(n);
                }),
                s(e)
              );
            }),
            (c.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                s(e)
              );
            }),
            (c.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                s(e)
              );
            }),
            t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
          var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function m(e, t) {
            var n,
              r,
              o = (t = t || {}).body;
            if (e instanceof m) {
              if (e.bodyUsed) throw TypeError("Already read");
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new c(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                o ||
                  null == e._bodyInit ||
                  ((o = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials =
                t.credentials || this.credentials || "same-origin"),
              (t.headers || !this.headers) && (this.headers = new c(t.headers)),
              (this.method =
                ((r = (n = t.method || this.method || "GET").toUpperCase()),
                p.indexOf(r) > -1 ? r : n)),
              (this.mode = t.mode || this.mode || null),
              (this.signal = t.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && o)
            )
              throw TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(o);
          }
          function y(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split("&")
                .forEach(function (e) {
                  if (e) {
                    var n = e.split("="),
                      r = n.shift().replace(/\+/g, " "),
                      o = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(o));
                  }
                }),
              t
            );
          }
          function b(e, t) {
            t || (t = {}),
              (this.type = "default"),
              (this.status = void 0 === t.status ? 200 : t.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in t ? t.statusText : "OK"),
              (this.headers = new c(t.headers)),
              (this.url = t.url || ""),
              this._initBody(e);
          }
          (m.prototype.clone = function () {
            return new m(this, { body: this._bodyInit });
          }),
            h.call(m.prototype),
            h.call(b.prototype),
            (b.prototype.clone = function () {
              return new b(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new c(this.headers),
                url: this.url,
              });
            }),
            (b.error = function () {
              var e = new b(null, { status: 0, statusText: "" });
              return (e.type = "error"), e;
            });
          var w = [301, 302, 303, 307, 308];
          (b.redirect = function (e, t) {
            if (-1 === w.indexOf(t)) throw RangeError("Invalid status code");
            return new b(null, { status: t, headers: { location: e } });
          }),
            (e.DOMException = n.DOMException);
          try {
            new e.DOMException();
          } catch (t) {
            (e.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var n = Error(e);
              this.stack = n.stack;
            }),
              (e.DOMException.prototype = Object.create(Error.prototype)),
              (e.DOMException.prototype.constructor = e.DOMException);
          }
          function g(n, r) {
            return new Promise(function (o, i) {
              var a = new m(n, r);
              if (a.signal && a.signal.aborted)
                return i(new e.DOMException("Aborted", "AbortError"));
              var s = new XMLHttpRequest();
              function l() {
                s.abort();
              }
              (s.onload = function () {
                var e,
                  t,
                  n = {
                    status: s.status,
                    statusText: s.statusText,
                    headers:
                      ((e = s.getAllResponseHeaders() || ""),
                      (t = new c()),
                      e
                        .replace(/\r?\n[\t ]+/g, " ")
                        .split(/\r?\n/)
                        .forEach(function (e) {
                          var n = e.split(":"),
                            r = n.shift().trim();
                          if (r) {
                            var o = n.join(":").trim();
                            t.append(r, o);
                          }
                        }),
                      t),
                  };
                n.url =
                  "responseURL" in s
                    ? s.responseURL
                    : n.headers.get("X-Request-URL");
                var r = "response" in s ? s.response : s.responseText;
                o(new b(r, n));
              }),
                (s.onerror = function () {
                  i(TypeError("Network request failed"));
                }),
                (s.ontimeout = function () {
                  i(TypeError("Network request failed"));
                }),
                (s.onabort = function () {
                  i(new e.DOMException("Aborted", "AbortError"));
                }),
                s.open(a.method, a.url, !0),
                "include" === a.credentials
                  ? (s.withCredentials = !0)
                  : "omit" === a.credentials && (s.withCredentials = !1),
                "responseType" in s && t.blob && (s.responseType = "blob"),
                a.headers.forEach(function (e, t) {
                  s.setRequestHeader(t, e);
                }),
                a.signal &&
                  (a.signal.addEventListener("abort", l),
                  (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      a.signal.removeEventListener("abort", l);
                  })),
                s.send(void 0 === a._bodyInit ? null : a._bodyInit);
            });
          }
          (g.polyfill = !0),
            n.fetch ||
              ((n.fetch = g),
              (n.Headers = c),
              (n.Request = m),
              (n.Response = b)),
            (e.Headers = c),
            (e.Request = m),
            (e.Response = b),
            (e.fetch = g),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })({}),
        (o.fetch.ponyfill = !0),
        delete o.fetch.polyfill,
        ((t = o.fetch).default = o.fetch),
        (t.fetch = o.fetch),
        (t.Headers = o.Headers),
        (t.Request = o.Request),
        (t.Response = o.Response),
        (e.exports = t);
    },
    37031: function (e) {
      "use strict";
      e.exports = function () {
        throw Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    85411: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return rB;
          },
          getProvider: function () {
            return rN;
          },
        });
      var r,
        o,
        i,
        a,
        s,
        c,
        l,
        u,
        d,
        f = {};
      n.r(f),
        n.d(f, {
          hasBrowserEnv: function () {
            return t5;
          },
          hasStandardBrowserEnv: function () {
            return t8;
          },
          hasStandardBrowserWebWorkerEnv: function () {
            return t6;
          },
          origin: function () {
            return t7;
          },
        });
      var h = n(4362),
        p = n(96279),
        m = n(30686);
      function y(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (e) {
          n(e);
          return;
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function b(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              y(i, r, o, a, s, "next", e);
            }
            function s(e) {
              y(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function w(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              var r, o;
              (r = e),
                (o = n[t]),
                t in r
                  ? Object.defineProperty(r, t, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = o);
            });
        }
        return e;
      }
      function v(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              }),
          e
        );
      }
      function k(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      function E(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      }
      var S = Object.defineProperty,
        C = function (e, t, n) {
          var r, o;
          return (
            (r = e),
            (o =
              (void 0 === t ? "undefined" : k(t)) != "symbol" ? t + "" : t) in r
              ? S(r, o, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (r[o] = n),
            n
          );
        },
        x = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
        },
        O = (function () {
          var e, t;
          function n(e) {
            if (
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, n),
              (this.url = e),
              C(this, "events", new m.v()),
              C(this, "isAvailable", !1),
              C(this, "registering", !1),
              !(0, h.jK)(e))
            )
              throw Error(
                "Provided URL is not compatible with HTTP connection: ".concat(
                  e
                )
              );
            this.url = e;
          }
          return (
            (e = [
              {
                key: "connected",
                get: function () {
                  return this.isAvailable;
                },
              },
              {
                key: "connecting",
                get: function () {
                  return this.registering;
                },
              },
              {
                key: "open",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.url,
                    t = this;
                  return b(function () {
                    return E(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, t.register(e)];
                        case 1:
                          return n.sent(), [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "close",
                value: function () {
                  var e = this;
                  return b(function () {
                    return E(this, function (t) {
                      if (!e.isAvailable)
                        throw Error("Connection already closed");
                      return e.onClose(), [2];
                    });
                  })();
                },
              },
              {
                key: "request",
                value: function (e) {
                  var t = this;
                  return b(function () {
                    var n, r, o, i;
                    return E(this, function (a) {
                      switch (a.label) {
                        case 0:
                          if (
                            (h.cM.debug("HttpClient ~ request ~ payload:", e),
                            t.isAvailable)
                          )
                            return [3, 2];
                          return [4, t.register()];
                        case 1:
                          a.sent(), (a.label = 2);
                        case 2:
                          a.label = 3;
                        case 3:
                          return (
                            a.trys.push([3, 6, , 7]),
                            (n = (0, h.u4)(e)),
                            [4, p(t.url, v(g({}, x), { body: n }))]
                          );
                        case 4:
                          return [4, a.sent().json()];
                        case 5:
                          return (
                            (o =
                              "string" == typeof (r = a.sent())
                                ? (0, h.D6)(r)
                                : r),
                            [
                              2,
                              (h.cM.debug("HttpClient ~ request ~ result:", o),
                              o),
                            ]
                          );
                        case 6:
                          return (i = a.sent()), [2, t.formatError(e.id, i)];
                        case 7:
                          return [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "formatError",
                value: function (e, t) {
                  var n = this.parseError(t),
                    r = n.message || n.toString();
                  return (0, h.RI)(e, r);
                },
              },
              {
                key: "register",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.url,
                    t = this;
                  return b(function () {
                    var n, r, o;
                    return E(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (!(0, h.jK)(e))
                            throw Error(
                              "Provided URL is not compatible with HTTP connection: ".concat(
                                e
                              )
                            );
                          if (t.registering)
                            return [
                              2,
                              new Promise(function (e, n) {
                                t.events.once("register_error", function (e) {
                                  n(e);
                                }),
                                  t.events.once("open", function () {
                                    if (k(t.isAvailable) > "u")
                                      return n(
                                        Error(
                                          "HTTP connection is missing or invalid"
                                        )
                                      );
                                    e();
                                  });
                              }),
                            ];
                          (t.url = e), (t.registering = !0), (i.label = 1);
                        case 1:
                          return (
                            i.trys.push([1, 3, , 4]),
                            (n = (0, h.u4)({
                              id: 1,
                              jsonrpc: "2.0",
                              method: "test",
                              params: [],
                            })),
                            [4, p(e, v(g({}, x), { body: n }))]
                          );
                        case 2:
                          return i.sent(), t.onOpen(), [3, 4];
                        case 3:
                          throw (
                            ((r = i.sent()),
                            (o = t.parseError(r)),
                            t.events.emit("register_error", o),
                            t.onClose(),
                            o)
                          );
                        case 4:
                          return [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "onOpen",
                value: function () {
                  (this.isAvailable = !0),
                    (this.registering = !1),
                    this.events.emit("open");
                },
              },
              {
                key: "onClose",
                value: function () {
                  (this.isAvailable = !1),
                    (this.registering = !1),
                    this.events.emit("open");
                },
              },
              {
                key: "parseError",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.url;
                  return (0, h.CX)(e, t, "HTTP");
                },
              },
            ]),
            w(n.prototype, e),
            t && w(n, t),
            n
          );
        })(),
        A = n(16405),
        R = n(69638),
        _ = Object.defineProperty,
        T = Object.getOwnPropertySymbols,
        I = Object.prototype.hasOwnProperty,
        M = Object.prototype.propertyIsEnumerable,
        P = (e, t, n) =>
          t in e
            ? _(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        N = (e, t) => {
          for (var n in t || (t = {})) I.call(t, n) && P(e, n, t[n]);
          if (T) for (var n of T(t)) M.call(t, n) && P(e, n, t[n]);
          return e;
        },
        B = (e, t) => {
          var n = {};
          for (var r in e) I.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
          if (null != e && T)
            for (var r of T(e))
              0 > t.indexOf(r) && M.call(e, r) && (n[r] = e[r]);
          return n;
        };
      ((e) => {
        let t = class {
            constructor(e, n, r, o) {
              if (
                ((this.version = e),
                (this.errorCorrectionLevel = n),
                (this.modules = []),
                (this.isFunction = []),
                e < t.MIN_VERSION || e > t.MAX_VERSION)
              )
                throw RangeError("Version value out of range");
              if (o < -1 || o > 7) throw RangeError("Mask value out of range");
              this.size = 4 * e + 17;
              let a = [];
              for (let e = 0; e < this.size; e++) a.push(!1);
              for (let e = 0; e < this.size; e++)
                this.modules.push(a.slice()), this.isFunction.push(a.slice());
              this.drawFunctionPatterns();
              let s = this.addEccAndInterleave(r);
              if ((this.drawCodewords(s), -1 == o)) {
                let e = 1e9;
                for (let t = 0; t < 8; t++) {
                  this.applyMask(t), this.drawFormatBits(t);
                  let n = this.getPenaltyScore();
                  n < e && ((o = t), (e = n)), this.applyMask(t);
                }
              }
              i(0 <= o && o <= 7),
                (this.mask = o),
                this.applyMask(o),
                this.drawFormatBits(o),
                (this.isFunction = []);
            }
            static encodeText(n, r) {
              let o = e.QrSegment.makeSegments(n);
              return t.encodeSegments(o, r);
            }
            static encodeBinary(n, r) {
              let o = e.QrSegment.makeBytes(n);
              return t.encodeSegments([o], r);
            }
            static encodeSegments(e, n, o = 1, a = 40, c = -1, l = !0) {
              let u, d;
              if (
                !(t.MIN_VERSION <= o && o <= a && a <= t.MAX_VERSION) ||
                c < -1 ||
                c > 7
              )
                throw RangeError("Invalid value");
              for (u = o; ; u++) {
                let r = 8 * t.getNumDataCodewords(u, n),
                  o = s.getTotalBits(e, u);
                if (o <= r) {
                  d = o;
                  break;
                }
                if (u >= a) throw RangeError("Data too long");
              }
              for (let e of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
                l && d <= 8 * t.getNumDataCodewords(u, e) && (n = e);
              let f = [];
              for (let t of e)
                for (let e of (r(t.mode.modeBits, 4, f),
                r(t.numChars, t.mode.numCharCountBits(u), f),
                t.getData()))
                  f.push(e);
              i(f.length == d);
              let h = 8 * t.getNumDataCodewords(u, n);
              i(f.length <= h),
                r(0, Math.min(4, h - f.length), f),
                r(0, (8 - (f.length % 8)) % 8, f),
                i(f.length % 8 == 0);
              for (let e = 236; f.length < h; e ^= 253) r(e, 8, f);
              let p = [];
              for (; 8 * p.length < f.length; ) p.push(0);
              return (
                f.forEach((e, t) => (p[t >>> 3] |= e << (7 - (7 & t)))),
                new t(u, n, p, c)
              );
            }
            getModule(e, t) {
              return (
                0 <= e &&
                e < this.size &&
                0 <= t &&
                t < this.size &&
                this.modules[t][e]
              );
            }
            getModules() {
              return this.modules;
            }
            drawFunctionPatterns() {
              for (let e = 0; e < this.size; e++)
                this.setFunctionModule(6, e, e % 2 == 0),
                  this.setFunctionModule(e, 6, e % 2 == 0);
              this.drawFinderPattern(3, 3),
                this.drawFinderPattern(this.size - 4, 3),
                this.drawFinderPattern(3, this.size - 4);
              let e = this.getAlignmentPatternPositions(),
                t = e.length;
              for (let n = 0; n < t; n++)
                for (let r = 0; r < t; r++)
                  (0 == n && 0 == r) ||
                    (0 == n && r == t - 1) ||
                    (n == t - 1 && 0 == r) ||
                    this.drawAlignmentPattern(e[n], e[r]);
              this.drawFormatBits(0), this.drawVersion();
            }
            drawFormatBits(e) {
              let t = (this.errorCorrectionLevel.formatBits << 3) | e,
                n = t;
              for (let e = 0; e < 10; e++) n = (n << 1) ^ ((n >>> 9) * 1335);
              let r = ((t << 10) | n) ^ 21522;
              i(r >>> 15 == 0);
              for (let e = 0; e <= 5; e++)
                this.setFunctionModule(8, e, o(r, e));
              this.setFunctionModule(8, 7, o(r, 6)),
                this.setFunctionModule(8, 8, o(r, 7)),
                this.setFunctionModule(7, 8, o(r, 8));
              for (let e = 9; e < 15; e++)
                this.setFunctionModule(14 - e, 8, o(r, e));
              for (let e = 0; e < 8; e++)
                this.setFunctionModule(this.size - 1 - e, 8, o(r, e));
              for (let e = 8; e < 15; e++)
                this.setFunctionModule(8, this.size - 15 + e, o(r, e));
              this.setFunctionModule(8, this.size - 8, !0);
            }
            drawVersion() {
              if (this.version < 7) return;
              let e = this.version;
              for (let t = 0; t < 12; t++) e = (e << 1) ^ ((e >>> 11) * 7973);
              let t = (this.version << 12) | e;
              i(t >>> 18 == 0);
              for (let e = 0; e < 18; e++) {
                let n = o(t, e),
                  r = this.size - 11 + (e % 3),
                  i = Math.floor(e / 3);
                this.setFunctionModule(r, i, n),
                  this.setFunctionModule(i, r, n);
              }
            }
            drawFinderPattern(e, t) {
              for (let n = -4; n <= 4; n++)
                for (let r = -4; r <= 4; r++) {
                  let o = Math.max(Math.abs(r), Math.abs(n)),
                    i = e + r,
                    a = t + n;
                  0 <= i &&
                    i < this.size &&
                    0 <= a &&
                    a < this.size &&
                    this.setFunctionModule(i, a, 2 != o && 4 != o);
                }
            }
            drawAlignmentPattern(e, t) {
              for (let n = -2; n <= 2; n++)
                for (let r = -2; r <= 2; r++)
                  this.setFunctionModule(
                    e + r,
                    t + n,
                    1 != Math.max(Math.abs(r), Math.abs(n))
                  );
            }
            setFunctionModule(e, t, n) {
              (this.modules[t][e] = n), (this.isFunction[t][e] = !0);
            }
            addEccAndInterleave(e) {
              let n = this.version,
                r = this.errorCorrectionLevel;
              if (e.length != t.getNumDataCodewords(n, r))
                throw RangeError("Invalid argument");
              let o = t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],
                a = t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],
                s = Math.floor(t.getNumRawDataModules(n) / 8),
                c = o - (s % o),
                l = Math.floor(s / o),
                u = [],
                d = t.reedSolomonComputeDivisor(a);
              for (let n = 0, r = 0; n < o; n++) {
                let o = e.slice(r, r + l - a + (n < c ? 0 : 1));
                r += o.length;
                let i = t.reedSolomonComputeRemainder(o, d);
                n < c && o.push(0), u.push(o.concat(i));
              }
              let f = [];
              for (let e = 0; e < u[0].length; e++)
                u.forEach((t, n) => {
                  (e != l - a || n >= c) && f.push(t[e]);
                });
              return i(f.length == s), f;
            }
            drawCodewords(e) {
              if (
                e.length != Math.floor(t.getNumRawDataModules(this.version) / 8)
              )
                throw RangeError("Invalid argument");
              let n = 0;
              for (let t = this.size - 1; t >= 1; t -= 2) {
                6 == t && (t = 5);
                for (let r = 0; r < this.size; r++)
                  for (let i = 0; i < 2; i++) {
                    let a = t - i,
                      s = ((t + 1) & 2) == 0,
                      c = s ? this.size - 1 - r : r;
                    !this.isFunction[c][a] &&
                      n < 8 * e.length &&
                      ((this.modules[c][a] = o(e[n >>> 3], 7 - (7 & n))), n++);
                  }
              }
              i(n == 8 * e.length);
            }
            applyMask(e) {
              if (e < 0 || e > 7) throw RangeError("Mask value out of range");
              for (let t = 0; t < this.size; t++)
                for (let n = 0; n < this.size; n++) {
                  let r;
                  switch (e) {
                    case 0:
                      r = (n + t) % 2 == 0;
                      break;
                    case 1:
                      r = t % 2 == 0;
                      break;
                    case 2:
                      r = n % 3 == 0;
                      break;
                    case 3:
                      r = (n + t) % 3 == 0;
                      break;
                    case 4:
                      r = (Math.floor(n / 3) + Math.floor(t / 2)) % 2 == 0;
                      break;
                    case 5:
                      r = ((n * t) % 2) + ((n * t) % 3) == 0;
                      break;
                    case 6:
                      r = (((n * t) % 2) + ((n * t) % 3)) % 2 == 0;
                      break;
                    case 7:
                      r = (((n + t) % 2) + ((n * t) % 3)) % 2 == 0;
                      break;
                    default:
                      throw Error("Unreachable");
                  }
                  !this.isFunction[t][n] &&
                    r &&
                    (this.modules[t][n] = !this.modules[t][n]);
                }
            }
            getPenaltyScore() {
              let e = 0;
              for (let n = 0; n < this.size; n++) {
                let r = !1,
                  o = 0,
                  i = [0, 0, 0, 0, 0, 0, 0];
                for (let a = 0; a < this.size; a++)
                  this.modules[n][a] == r
                    ? 5 == ++o
                      ? (e += t.PENALTY_N1)
                      : o > 5 && e++
                    : (this.finderPenaltyAddHistory(o, i),
                      r ||
                        (e +=
                          this.finderPenaltyCountPatterns(i) * t.PENALTY_N3),
                      (r = this.modules[n][a]),
                      (o = 1));
                e +=
                  this.finderPenaltyTerminateAndCount(r, o, i) * t.PENALTY_N3;
              }
              for (let n = 0; n < this.size; n++) {
                let r = !1,
                  o = 0,
                  i = [0, 0, 0, 0, 0, 0, 0];
                for (let a = 0; a < this.size; a++)
                  this.modules[a][n] == r
                    ? 5 == ++o
                      ? (e += t.PENALTY_N1)
                      : o > 5 && e++
                    : (this.finderPenaltyAddHistory(o, i),
                      r ||
                        (e +=
                          this.finderPenaltyCountPatterns(i) * t.PENALTY_N3),
                      (r = this.modules[a][n]),
                      (o = 1));
                e +=
                  this.finderPenaltyTerminateAndCount(r, o, i) * t.PENALTY_N3;
              }
              for (let n = 0; n < this.size - 1; n++)
                for (let r = 0; r < this.size - 1; r++) {
                  let o = this.modules[n][r];
                  o == this.modules[n][r + 1] &&
                    o == this.modules[n + 1][r] &&
                    o == this.modules[n + 1][r + 1] &&
                    (e += t.PENALTY_N2);
                }
              let n = 0;
              for (let e of this.modules)
                n = e.reduce((e, t) => e + (t ? 1 : 0), n);
              let r = this.size * this.size,
                o = Math.ceil(Math.abs(20 * n - 10 * r) / r) - 1;
              return (
                i(0 <= o && o <= 9),
                i(0 <= (e += o * t.PENALTY_N4) && e <= 2568888),
                e
              );
            }
            getAlignmentPatternPositions() {
              if (1 == this.version) return [];
              {
                let e = Math.floor(this.version / 7) + 2,
                  t =
                    32 == this.version
                      ? 26
                      : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2)),
                  n = [6];
                for (let r = this.size - 7; n.length < e; r -= t)
                  n.splice(1, 0, r);
                return n;
              }
            }
            static getNumRawDataModules(e) {
              if (e < t.MIN_VERSION || e > t.MAX_VERSION)
                throw RangeError("Version number out of range");
              let n = (16 * e + 128) * e + 64;
              if (e >= 2) {
                let t = Math.floor(e / 7) + 2;
                (n -= (25 * t - 10) * t - 55), e >= 7 && (n -= 36);
              }
              return i(208 <= n && n <= 29648), n;
            }
            static getNumDataCodewords(e, n) {
              return (
                Math.floor(t.getNumRawDataModules(e) / 8) -
                t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e] *
                  t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]
              );
            }
            static reedSolomonComputeDivisor(e) {
              if (e < 1 || e > 255) throw RangeError("Degree out of range");
              let n = [];
              for (let t = 0; t < e - 1; t++) n.push(0);
              n.push(1);
              let r = 1;
              for (let o = 0; o < e; o++) {
                for (let e = 0; e < n.length; e++)
                  (n[e] = t.reedSolomonMultiply(n[e], r)),
                    e + 1 < n.length && (n[e] ^= n[e + 1]);
                r = t.reedSolomonMultiply(r, 2);
              }
              return n;
            }
            static reedSolomonComputeRemainder(e, n) {
              let r = n.map((e) => 0);
              for (let o of e) {
                let e = o ^ r.shift();
                r.push(0),
                  n.forEach((n, o) => (r[o] ^= t.reedSolomonMultiply(n, e)));
              }
              return r;
            }
            static reedSolomonMultiply(e, t) {
              if (e >>> 8 != 0 || t >>> 8 != 0)
                throw RangeError("Byte out of range");
              let n = 0;
              for (let r = 7; r >= 0; r--)
                n = (n << 1) ^ ((n >>> 7) * 285) ^ (((t >>> r) & 1) * e);
              return i(n >>> 8 == 0), n;
            }
            finderPenaltyCountPatterns(e) {
              let t = e[1];
              i(t <= 3 * this.size);
              let n =
                t > 0 && e[2] == t && e[3] == 3 * t && e[4] == t && e[5] == t;
              return (
                (n && e[0] >= 4 * t && e[6] >= t ? 1 : 0) +
                (n && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
              );
            }
            finderPenaltyTerminateAndCount(e, t, n) {
              return (
                e && (this.finderPenaltyAddHistory(t, n), (t = 0)),
                (t += this.size),
                this.finderPenaltyAddHistory(t, n),
                this.finderPenaltyCountPatterns(n)
              );
            }
            finderPenaltyAddHistory(e, t) {
              0 == t[0] && (e += this.size), t.pop(), t.unshift(e);
            }
          },
          n = t;
        function r(e, t, n) {
          if (t < 0 || t > 31 || e >>> t != 0)
            throw RangeError("Value out of range");
          for (let r = t - 1; r >= 0; r--) n.push((e >>> r) & 1);
        }
        function o(e, t) {
          return ((e >>> t) & 1) != 0;
        }
        function i(e) {
          if (!e) throw Error("Assertion error");
        }
        (n.MIN_VERSION = 1),
          (n.MAX_VERSION = 40),
          (n.PENALTY_N1 = 3),
          (n.PENALTY_N2 = 3),
          (n.PENALTY_N3 = 40),
          (n.PENALTY_N4 = 10),
          (n.ECC_CODEWORDS_PER_BLOCK = [
            [
              -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24,
              28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
              -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24,
              28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
              28, 28, 28, 28, 28, 28, 28, 28, 28,
            ],
            [
              -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30,
              24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
              -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24,
              30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
          ]),
          (n.NUM_ERROR_CORRECTION_BLOCKS = [
            [
              -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8,
              9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22,
              24, 25,
            ],
            [
              -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14,
              16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38,
              40, 43, 45, 47, 49,
            ],
            [
              -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18,
              21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51,
              53, 56, 59, 62, 65, 68,
            ],
            [
              -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21,
              25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60,
              63, 66, 70, 74, 77, 81,
            ],
          ]),
          (e.QrCode = n);
        let a = class {
            constructor(e, t, n) {
              if (
                ((this.mode = e),
                (this.numChars = t),
                (this.bitData = n),
                t < 0)
              )
                throw RangeError("Invalid argument");
              this.bitData = n.slice();
            }
            static makeBytes(e) {
              let t = [];
              for (let n of e) r(n, 8, t);
              return new a(a.Mode.BYTE, e.length, t);
            }
            static makeNumeric(e) {
              if (!a.isNumeric(e))
                throw RangeError("String contains non-numeric characters");
              let t = [];
              for (let n = 0; n < e.length; ) {
                let o = Math.min(e.length - n, 3);
                r(parseInt(e.substr(n, o), 10), 3 * o + 1, t), (n += o);
              }
              return new a(a.Mode.NUMERIC, e.length, t);
            }
            static makeAlphanumeric(e) {
              let t;
              if (!a.isAlphanumeric(e))
                throw RangeError(
                  "String contains unencodable characters in alphanumeric mode"
                );
              let n = [];
              for (t = 0; t + 2 <= e.length; t += 2) {
                let o = 45 * a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));
                r(
                  (o += a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t + 1))),
                  11,
                  n
                );
              }
              return (
                t < e.length &&
                  r(a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)), 6, n),
                new a(a.Mode.ALPHANUMERIC, e.length, n)
              );
            }
            static makeSegments(e) {
              return "" == e
                ? []
                : a.isNumeric(e)
                ? [a.makeNumeric(e)]
                : a.isAlphanumeric(e)
                ? [a.makeAlphanumeric(e)]
                : [a.makeBytes(a.toUtf8ByteArray(e))];
            }
            static makeEci(e) {
              let t = [];
              if (e < 0) throw RangeError("ECI assignment value out of range");
              if (e < 128) r(e, 8, t);
              else if (e < 16384) r(2, 2, t), r(e, 14, t);
              else if (e < 1e6) r(6, 3, t), r(e, 21, t);
              else throw RangeError("ECI assignment value out of range");
              return new a(a.Mode.ECI, 0, t);
            }
            static isNumeric(e) {
              return a.NUMERIC_REGEX.test(e);
            }
            static isAlphanumeric(e) {
              return a.ALPHANUMERIC_REGEX.test(e);
            }
            getData() {
              return this.bitData.slice();
            }
            static getTotalBits(e, t) {
              let n = 0;
              for (let r of e) {
                let e = r.mode.numCharCountBits(t);
                if (r.numChars >= 1 << e) return 1 / 0;
                n += 4 + e + r.bitData.length;
              }
              return n;
            }
            static toUtf8ByteArray(e) {
              e = encodeURI(e);
              let t = [];
              for (let n = 0; n < e.length; n++)
                "%" != e.charAt(n)
                  ? t.push(e.charCodeAt(n))
                  : (t.push(parseInt(e.substr(n + 1, 2), 16)), (n += 2));
              return t;
            }
          },
          s = a;
        (s.NUMERIC_REGEX = /^[0-9]*$/),
          (s.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
          (s.ALPHANUMERIC_CHARSET =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
          (e.QrSegment = s);
      })(d || (d = {})),
        ((e) => {
          let t = class {
              constructor(e, t) {
                (this.ordinal = e), (this.formatBits = t);
              }
            },
            n = t;
          (n.LOW = new t(0, 1)),
            (n.MEDIUM = new t(1, 0)),
            (n.QUARTILE = new t(2, 3)),
            (n.HIGH = new t(3, 2)),
            (e.Ecc = n);
        })((r = d || (d = {})).QrCode || (r.QrCode = {})),
        ((e) => {
          let t = class {
              constructor(e, t) {
                (this.modeBits = e), (this.numBitsCharCount = t);
              }
              numCharCountBits(e) {
                return this.numBitsCharCount[Math.floor((e + 7) / 17)];
              }
            },
            n = t;
          (n.NUMERIC = new t(1, [10, 12, 14])),
            (n.ALPHANUMERIC = new t(2, [9, 11, 13])),
            (n.BYTE = new t(4, [8, 16, 16])),
            (n.KANJI = new t(8, [8, 10, 12])),
            (n.ECI = new t(7, [0, 0, 0])),
            (e.Mode = n);
        })((o = d || (d = {})).QrSegment || (o.QrSegment = {}));
      var j = d,
        D = {
          L: j.QrCode.Ecc.LOW,
          M: j.QrCode.Ecc.MEDIUM,
          Q: j.QrCode.Ecc.QUARTILE,
          H: j.QrCode.Ecc.HIGH,
        };
      function L(e) {
        let {
            value: t,
            size: n = 128,
            level: r = "L",
            bgColor: o = "#FFFFFF",
            fgColor: i = "#000000",
            includeMargin: a = !1,
            imageSettings: s,
          } = e,
          c = B(e, [
            "value",
            "size",
            "level",
            "bgColor",
            "fgColor",
            "includeMargin",
            "imageSettings",
          ]),
          l = j.QrCode.encodeText(t, D[r]).getModules(),
          u = a ? 4 : 0,
          d = l.length + 2 * u,
          f = (function (e, t, n, r) {
            if (null == r) return null;
            let o = e.length + 2 * (n ? 4 : 0),
              i = Math.floor(0.1 * t),
              a = o / t,
              s = (r.width || i) * a,
              c = (r.height || i) * a,
              l = null == r.x ? e.length / 2 - s / 2 : r.x * a,
              u = null == r.y ? e.length / 2 - c / 2 : r.y * a,
              d = null;
            if (r.excavate) {
              let e = Math.floor(l),
                t = Math.floor(u);
              d = {
                x: e,
                y: t,
                w: Math.ceil(s + l - e),
                h: Math.ceil(c + u - t),
              };
            }
            return { x: l, y: u, h: c, w: s, excavation: d };
          })(l, n, a, s),
          h = null;
        if (null != s && null != f) {
          if (null != f.excavation) {
            var p, m;
            (p = l),
              (m = f.excavation),
              (l = p
                .slice()
                .map((e, t) =>
                  t < m.y || t >= m.y + m.h
                    ? e
                    : e.map((e, t) => (t < m.x || t >= m.x + m.w) && e)
                ));
          }
          h = A.createElement("image", {
            xlinkHref: s.src,
            height: f.h,
            width: f.w,
            x: f.x + u,
            y: f.y + u,
            preserveAspectRatio: "none",
          });
        }
        let y = (function (e, t = 0) {
          let n = [];
          return (
            e.forEach(function (e, r) {
              let o = null;
              e.forEach(function (i, a) {
                if (!i && null !== o) {
                  n.push(`M${o + t} ${r + t}h${a - o}v1H${o + t}z`), (o = null);
                  return;
                }
                if (a === e.length - 1) {
                  if (!i) return;
                  null === o
                    ? n.push(`M${a + t},${r + t} h1v1H${a + t}z`)
                    : n.push(`M${o + t},${r + t} h${a + 1 - o}v1H${o + t}z`);
                  return;
                }
                i && null === o && (o = a);
              });
            }),
            n.join("")
          );
        })(l, u);
        return A.createElement(
          "svg",
          N({ height: n, width: n, viewBox: `0 0 ${d} ${d}` }, c),
          A.createElement("path", {
            fill: o,
            d: `M0,0 h${d}v${d}H0z`,
            shapeRendering: "crispEdges",
          }),
          A.createElement("path", {
            fill: i,
            d: y,
            shapeRendering: "crispEdges",
          }),
          h
        );
      }
      function W(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function F(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (e) {
          n(e);
          return;
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              var r, o;
              (r = e),
                (o = n[t]),
                t in r
                  ? Object.defineProperty(r, t, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = o);
            });
        }
        return e;
      }
      function z(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]);
        }
        return o;
      }
      function H(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              o =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != o) {
              var i = [],
                a = !0,
                s = !1;
              try {
                for (
                  o = o.call(e);
                  !(a = (n = o.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return W(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(n);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return W(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      !(function () {
        try {
          new Path2D().addPath(new Path2D());
        } catch (e) {
          return !1;
        }
      })();
      var q = "\n".concat(
          "#binanceW3W-wrapper :is(.pointer-events-auto) {\n  pointer-events: auto;\n}\n\n#binanceW3W-wrapper :is(.fixed) {\n  position: fixed;\n}\n\n#binanceW3W-wrapper :is(.absolute) {\n  position: absolute;\n}\n\n#binanceW3W-wrapper :is(.relative) {\n  position: relative;\n}\n\n#binanceW3W-wrapper :is(.bottom-0) {\n  bottom: 0px;\n}\n\n#binanceW3W-wrapper :is(.left-0) {\n  left: 0px;\n}\n\n#binanceW3W-wrapper :is(.top-0) {\n  top: 0px;\n}\n\n#binanceW3W-wrapper :is(.m-auto) {\n  margin: auto;\n}\n\n#binanceW3W-wrapper :is(.mx-\\[4px\\]) {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n#binanceW3W-wrapper :is(.mb-4) {\n  margin-bottom: 1rem;\n}\n\n#binanceW3W-wrapper :is(.mb-6) {\n  margin-bottom: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.ml-1) {\n  margin-left: 0.25rem;\n}\n\n#binanceW3W-wrapper :is(.mt-6) {\n  margin-top: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.mt-\\[35px\\]) {\n  margin-top: 35px;\n}\n\n#binanceW3W-wrapper :is(.flex) {\n  display: flex;\n}\n\n#binanceW3W-wrapper :is(.grid) {\n  display: grid;\n}\n\n#binanceW3W-wrapper :is(.h-\\[200px\\]) {\n  height: 200px;\n}\n\n#binanceW3W-wrapper :is(.h-\\[24px\\]) {\n  height: 24px;\n}\n\n#binanceW3W-wrapper :is(.h-\\[40px\\]) {\n  height: 40px;\n}\n\n#binanceW3W-wrapper :is(.h-\\[52px\\]) {\n  height: 52px;\n}\n\n#binanceW3W-wrapper :is(.h-full) {\n  height: 100%;\n}\n\n#binanceW3W-wrapper :is(.w-\\[150px\\]) {\n  width: 150px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[200px\\]) {\n  width: 200px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[20px\\]) {\n  width: 20px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[24px\\]) {\n  width: 24px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[343px\\]) {\n  width: 343px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[60px\\]) {\n  width: 60px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[75px\\]) {\n  width: 75px;\n}\n\n#binanceW3W-wrapper :is(.w-full) {\n  width: 100%;\n}\n\n#binanceW3W-wrapper :is(.transform) {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n#binanceW3W-wrapper :is(.cursor-pointer) {\n  cursor: pointer;\n}\n\n#binanceW3W-wrapper :is(.grid-flow-col) {\n  grid-auto-flow: column;\n}\n\n#binanceW3W-wrapper :is(.grid-cols-2) {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n#binanceW3W-wrapper :is(.items-center) {\n  align-items: center;\n}\n\n#binanceW3W-wrapper :is(.justify-end) {\n  justify-content: flex-end;\n}\n\n#binanceW3W-wrapper :is(.justify-center) {\n  justify-content: center;\n}\n\n#binanceW3W-wrapper :is(.justify-between) {\n  justify-content: space-between;\n}\n\n#binanceW3W-wrapper :is(.gap-x-4) {\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\n\n#binanceW3W-wrapper :is(.gap-y-2) {\n  row-gap: 0.5rem;\n}\n\n#binanceW3W-wrapper :is(.rounded) {\n  border-radius: 0.25rem;\n}\n\n#binanceW3W-wrapper :is(.rounded-2xl) {\n  border-radius: 1rem;\n}\n\n#binanceW3W-wrapper :is(.rounded-lg) {\n  border-radius: 0.5rem;\n}\n\n#binanceW3W-wrapper :is(.rounded-t-2xl) {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n\n#binanceW3W-wrapper :is(.border) {\n  border-width: 1px;\n}\n\n#binanceW3W-wrapper :is(.border-b) {\n  border-bottom-width: 1px;\n}\n\n#binanceW3W-wrapper :is(.border-gray-300) {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n\n#binanceW3W-wrapper :is(.bg-black\\/\\[\\.80\\]) {\n  background-color: rgb(0 0 0 / .80);\n}\n\n#binanceW3W-wrapper :is(.bg-white) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n#binanceW3W-wrapper :is(.p-\\[12px\\]) {\n  padding: 12px;\n}\n\n#binanceW3W-wrapper :is(.px-4) {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n#binanceW3W-wrapper :is(.px-6) {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.py-3) {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n#binanceW3W-wrapper :is(.py-4) {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n#binanceW3W-wrapper :is(.pb-6) {\n  padding-bottom: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.pt-\\[20px\\]) {\n  padding-top: 20px;\n}\n\n#binanceW3W-wrapper :is(.text-center) {\n  text-align: center;\n}\n\n#binanceW3W-wrapper :is(.text-base) {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.font-medium) {\n  font-weight: 500;\n}\n\n#binanceW3W-wrapper :is(.text-\\[\\#1E2329\\]) {\n  --tw-text-opacity: 1;\n  color: rgb(30 35 41 / var(--tw-text-opacity));\n}\n\n#binanceW3W-wrapper :is(.text-\\[\\#929AA5\\]) {\n  --tw-text-opacity: 1;\n  color: rgb(146 154 165 / var(--tw-text-opacity));\n}\n\n#binanceW3W-wrapper :is(.shadow-inner) {\n  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n#binanceW3W-wrapper :is(.duration-300) {\n  transition-duration: 300ms;\n}\n\n#binanceW3W-wrapper :is(.ease-in-out) {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n#binanceW3W-wrapper :is(.will-change-auto) {\n  will-change: auto;\n}\n\n#binanceW3W-wrapper :is(.will-change-transform) {\n  will-change: transform;\n}\n\n.w3w-body3 {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n\n.w3w-subtitle1 {\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n\n.w3w-subtitle3 {\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  /* 150% */\n}\n\n.w3w-caption2 {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n\n.w3w-t-black {\n  color: #0b0e11;\n}\n\n.w3w-t-brand {\n  color: #c99400;\n}\n\n.w3w-t-primary {\n  color: #202630;\n}\n\n.w3w-t-secondary {\n  color: #474d57;\n}\n\n.w3w-bg-primary {\n  background: #fcd535;\n}\n\n@media (min-width: 768px) {\n  .md\\:w3w-subtitle1 {\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 28px;\n  }\n\n  #binanceW3W-wrapper :is(.md\\:w-\\[400px\\]) {\n    width: 400px;\n  }\n\n  #binanceW3W-wrapper :is(.md\\:font-semibold) {\n    font-weight: 600;\n  }\n}\n\n@media (min-width: 1024px) {\n  #binanceW3W-wrapper :is(.lg\\:p-8) {\n    padding: 2rem;\n  }\n\n  #binanceW3W-wrapper :is(.lg\\:pt-6) {\n    padding-top: 1.5rem;\n  }\n\n  #binanceW3W-wrapper :is(.lg\\:text-xl) {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n",
          "\n\n:root {\n  --animation-duration: 300ms;\n}\n\n@keyframes w3w-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes w3w-fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.w3w-animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.w3w-fadeIn {\n  animation-name: w3w-fadeIn;\n}\n\n.w3w-fadeOut {\n  animation-name: w3w-fadeOut;\n}\n\n#binanceW3W-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n"
        ),
        V = (0, A.createContext)({}),
        Q = "binanceW3W-wrapper",
        Z = "binanceW3W-qrcode-modal",
        G = {
          googlePlay:
            "https://app.appsflyer.com/com.binance.dev?pid=https%3A%2F%2Fwww.binance.com%2Fen&c=https%3A%2F%2Fwww.binance.com%2Fen",
          appleStore:
            "https://app.appsflyer.com/id1436799971?pid=https%3A%2F%2Fwww.binance.com%2Fen&c=https%3A%2F%2Fwww.binance.com%2Fen",
        },
        J = "data:image/svg+xml;base64,".concat(
          "PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiByeD0iMTAiIGZpbGw9IiMxNDE1MUEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTIgMjhMMTUuNjEyOSAyNC4zODcxTDE5LjIyNTggMjhMMTUuNjEyOSAzMS42MTI5TDEyIDI4WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMTguMTkzNSAyMS44MDY1TDI4IDEyTDM3LjgwNjUgMjEuODA2NUwzNC4xOTM2IDI1LjQxOTRMMjggMTkuMjI1OEwyMS44MDY1IDI1LjQxOTRMMTguMTkzNSAyMS44MDY1WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMjQuMzg3MSAyOEwyOCAyNC4zODcxTDMxLjYxMjkgMjhMMjggMzEuNjEyOUwyNC4zODcxIDI4WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMjEuODA2NSAzMC41ODA2TDE4LjE5MzUgMzQuMTkzNUwyOCA0NEwzNy44MDY1IDM0LjE5MzVMMzQuMTkzNiAzMC41ODA2TDI4IDM2Ljc3NDJMMjEuODA2NSAzMC41ODA2WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMzYuNzc0MiAyOEw0MC4zODcxIDI0LjM4NzFMNDQgMjhMNDAuMzg3MSAzMS42MTI5TDM2Ljc3NDIgMjhaIiBmaWxsPSIjRjBCOTBCIi8+Cjwvc3ZnPgo="
        ),
        K = function () {
          var e = H((0, A.useState)(), 2),
            t = e[0],
            n = e[1],
            r = H((0, A.useState)(!1), 2),
            o = r[0],
            i = r[1];
          return (
            (0, A.useEffect)(function () {
              var e = (0, h.W7)(),
                t = (0, h.CN)();
              n(e), i(t);
            }, []),
            { isMobile: t, isAndroid: o }
          );
        },
        Y = {
          en: {
            "sdk-download-android": "Download for Android",
            "sdk-connect": "Connect",
            "sdk-download-ios": "Download for iOS",
            "sdk-install": "Install",
            "sdk-modal-instruct-1": "1. Open Binance app",
            "sdk-modal-instruct-2": "2. Tap {{icon}} on Home Screen",
            "sdk-modal-title": "Connect With Binance",
            "sdk-no-app": "Don’t have the Binance app yet?",
          },
          ar: {
            "sdk-download-android": "تنزيل لنظام Android",
            "sdk-connect": "اتصال",
            "sdk-download-ios": "تنزيل لنظام iOS",
            "sdk-install": "تثبيت",
            "sdk-modal-instruct-1": "1. افتح تطبيق Binance",
            "sdk-modal-instruct-2": "2. اضغط {{icon}} على الشاشة الرئيسية",
            "sdk-modal-title": "الربط مع Binance (بينانس)",
            "sdk-no-app": "ليس لديك تطبيق Binance حتّى الآن؟",
          },
          "bg-BG": {
            "sdk-download-android": "Изтегляне за Android",
            "sdk-connect": "Свържи",
            "sdk-download-ios": "Изтегляне за iOS",
            "sdk-install": "Инсталиране",
            "sdk-modal-instruct-1": "1. Отворете приложението Binance",
            "sdk-modal-instruct-2": "2. Докоснете {{icon}} на началния екран",
            "sdk-modal-title": "Свържете се с Binance",
            "sdk-no-app": "Все още нямате приложението Binance?",
          },
          "zh-CN": {
            "sdk-download-android": "下载安卓版",
            "sdk-connect": "关联",
            "sdk-download-ios": "下载iOS版",
            "sdk-install": "安装",
            "sdk-modal-instruct-1": "1.打开币安App",
            "sdk-modal-instruct-2": "2.点击主屏幕的{{icon}}",
            "sdk-modal-title": "关联币安",
            "sdk-no-app": "尚未安装币安App？",
          },
          "zh-TW": {
            "sdk-download-android": "Android 下載",
            "sdk-connect": "連接",
            "sdk-download-ios": "iOS 下載",
            "sdk-install": "安裝",
            "sdk-modal-instruct-1": "1. 開啟幣安 App",
            "sdk-modal-instruct-2": "2. 在首頁畫面上點擊 {{icon}}",
            "sdk-modal-title": "與幣安連接",
            "sdk-no-app": "還沒有幣安 App 嗎？",
          },
          "cs-CZ": {
            "sdk-download-android": "St\xe1hnout pro Android",
            "sdk-connect": "Připojit",
            "sdk-download-ios": "St\xe1hnout pro iOS",
            "sdk-install": "Instalovat",
            "sdk-modal-instruct-1": "1. Otevřete aplikaci Binance",
            "sdk-modal-instruct-2":
              "2. Klepněte na {{icon}} na domovsk\xe9 obrazovce",
            "sdk-modal-title": "Připojit platformu Binance",
            "sdk-no-app": "Ještě nem\xe1te aplikaci Binance?",
          },
          "fr-FR": {
            "sdk-download-android": "T\xe9l\xe9charger pour Android",
            "sdk-connect": "Se connecter",
            "sdk-download-ios": "T\xe9l\xe9charger pour iOS",
            "sdk-install": "Installer",
            "sdk-modal-instruct-1": "1. Ouvrez l’application de Binance",
            "sdk-modal-instruct-2":
              "2. Appuyez sur {{icon}} sur l’\xe9cran d’accueil",
            "sdk-modal-title": "Se connecter \xe0 Binance",
            "sdk-no-app":
              "Vous n’avez pas encore l’application de Binance\xa0?",
          },
          "de-DE": {
            "sdk-download-android": "F\xfcr Android herunterladen",
            "sdk-connect": "Verbinden",
            "sdk-download-ios": "F\xfcr iOS herunterladen",
            "sdk-install": "Installieren",
            "sdk-modal-instruct-1": "1. Binance-App \xf6ffnen",
            "sdk-modal-instruct-2":
              "2. Tippe auf dem Startbildschirm auf {{icon}}",
            "sdk-modal-title": "Mit Binance verkn\xfcpfen",
            "sdk-no-app": "Du hast die Binance-App noch nicht?",
          },
          "el-GR": {
            "sdk-download-android": "Λήψη για Android",
            "sdk-connect": "Συνδεθείτε",
            "sdk-download-ios": "Λήψη για iOS",
            "sdk-install": "Εγκατάσταση",
            "sdk-modal-instruct-1": "1. Ανοίξτε την εφαρμογή Binance",
            "sdk-modal-instruct-2": "2. Πατήστε {{icon}} στην αρχική οθόνη",
            "sdk-modal-title": "Συνδεθείτε με την Binance",
            "sdk-no-app": "Δεν έχετε ακόμα την εφαρμογή Binance;",
          },
          "id-ID": {
            "sdk-download-android": "Unduh untuk Android",
            "sdk-connect": "Terhubung",
            "sdk-download-ios": "Unduh untuk iOS",
            "sdk-install": "Instal",
            "sdk-modal-instruct-1": "1. Buka aplikasi Binance",
            "sdk-modal-instruct-2": "2. Ketuk {{icon}} di Layar Beranda",
            "sdk-modal-title": "Hubungkan dengan Binance",
            "sdk-no-app": "Belum punya aplikasi Binance?",
          },
          "it-IT": {
            "sdk-download-android": "Scarica per Android",
            "sdk-connect": "Collega",
            "sdk-download-ios": "Scarica per iOS",
            "sdk-install": "Installa",
            "sdk-modal-instruct-1": "1. Apri l'app Binance",
            "sdk-modal-instruct-2": "2. Tocca {{icon}} nella homepage",
            "sdk-modal-title": "Collega con Binance",
            "sdk-no-app": "Non hai ancora l'app Binance?",
          },
          "kk-KZ": {
            "sdk-download-android": "Android үшін жүктеп алу",
            "sdk-connect": "Қосылу",
            "sdk-download-ios": "iOS үшін жүктеп алу",
            "sdk-install": "Орнату",
            "sdk-modal-instruct-1": "1. Binance қолданбасын ашыңыз",
            "sdk-modal-instruct-2":
              "2. Басты экрандағы {{icon}} белгішесін түртіңіз",
            "sdk-modal-title": "Binance платформасымен байланыстыру",
            "sdk-no-app": "Сізде әлі Binance қолданбасы жоқ па?",
          },
          "lv-LV": {
            "sdk-download-android": "Lejupielādēt Android ierīcei",
            "sdk-connect": "Savienot",
            "sdk-download-ios": "Lejupielādēt iOS ierīcei",
            "sdk-install": "Instalēt",
            "sdk-modal-instruct-1": "1.\xa0Atver Binance lietotni",
            "sdk-modal-instruct-2":
              "2.\xa0Pieskaries pie {{icon}} sākuma ekrānā",
            "sdk-modal-title": "Savieno ar Binance",
            "sdk-no-app": "Vai tev vēl nav Binance lietotnes?",
          },
          "pl-PL": {
            "sdk-download-android": "Pobierz na Androida",
            "sdk-connect": "Połącz",
            "sdk-download-ios": "Pobierz na iOS",
            "sdk-install": "Zainstaluj",
            "sdk-modal-instruct-1": "1. Otw\xf3rz Aplikację Binance",
            "sdk-modal-instruct-2": "2. Kliknij {{icon}} na ekranie gł\xf3wnym",
            "sdk-modal-title": "Połącz z Binance",
            "sdk-no-app": "Nie masz jeszcze aplikacji Binance?",
          },
          "pt-BR": {
            "sdk-download-android": "Baixar para Android",
            "sdk-connect": "Conecte",
            "sdk-download-ios": "Baixar para iOS",
            "sdk-install": "Instalar",
            "sdk-modal-instruct-1": "1. Abra o Aplicativo da Binance",
            "sdk-modal-instruct-2": "2. Toque em {{icon}} na Tela Inicial",
            "sdk-modal-title": "Conectar com a Binance",
            "sdk-no-app": "Ainda n\xe3o tem o aplicativo da Binance?",
          },
          "pt-PT": {
            "sdk-download-android": "Transferir para Android",
            "sdk-connect": "Associar",
            "sdk-download-ios": "Transferir para iOS",
            "sdk-install": "Instalar",
            "sdk-modal-instruct-1": "1. Abre a aplica\xe7\xe3o Binance",
            "sdk-modal-instruct-2": "2. Toca em {{icon}} no Ecr\xe3 Inicial",
            "sdk-modal-title": "Associa com a Binance",
            "sdk-no-app": "Ainda n\xe3o tens a aplica\xe7\xe3o Binance?",
          },
          "ro-RO": {
            "sdk-download-android": "Descărcați pentru Android",
            "sdk-connect": "Conectare",
            "sdk-download-ios": "Descărcați pentru iOS",
            "sdk-install": "Instalați",
            "sdk-modal-instruct-1": "1. Deschideți aplicația Binance",
            "sdk-modal-instruct-2":
              "2. Atingeți {{icon}} pe ecranul de pornire",
            "sdk-modal-title": "Conectați-vă cu Binance",
            "sdk-no-app": "Nu aveți \xeencă aplicația Binance?",
          },
          "ru-RU": {
            "sdk-download-android": "Скачать для Android",
            "sdk-connect": "Подключить",
            "sdk-download-ios": "Скачать для iOS",
            "sdk-install": "Установить",
            "sdk-modal-instruct-1": "1. Откройте приложение Binance",
            "sdk-modal-instruct-2": "2. Нажмите {{icon}} на главном экране",
            "sdk-modal-title": "Подключить кошелек Binance",
            "sdk-no-app": "У вас еще нет приложения Binance?",
          },
          "sk-SK": {
            "sdk-download-android": "Stiahnuť pre Android",
            "sdk-connect": "Pripojiť",
            "sdk-download-ios": "Stiahnuť pre iOS",
            "sdk-install": "Nainštalovať",
            "sdk-modal-instruct-1": "1. Otvorte aplik\xe1ciu Binance",
            "sdk-modal-instruct-2":
              "2. Klepnite na ikonu {{icon}} na domovskej obrazovke",
            "sdk-modal-title": "Spojte sa s\xa0Binance",
            "sdk-no-app": "Ešte nem\xe1te aplik\xe1ciu Binance?",
          },
          "sl-SI": {
            "sdk-download-android": "Prenos za Android",
            "sdk-connect": "Poveži",
            "sdk-download-ios": "Prenos za iOS",
            "sdk-install": "Namesti",
            "sdk-modal-instruct-1": "1. Odprite aplikacijo Binance",
            "sdk-modal-instruct-2": "2. Tapnite {{icon}} na začetnem zaslonu",
            "sdk-modal-title": "Povežite se s platformo Binance",
            "sdk-no-app": "Še nimate aplikacije Binance?",
          },
          "es-LA": {
            "sdk-download-android": "Descargar para Android",
            "sdk-connect": "Conecta",
            "sdk-download-ios": "Descargar para iOS",
            "sdk-install": "Instala",
            "sdk-modal-instruct-1": "1. Abre la aplicaci\xf3n de Binance",
            "sdk-modal-instruct-2": "2. Toca {{icon}} en la pantalla de inicio",
            "sdk-modal-title": "Conectar con Binance",
            "sdk-no-app": "\xbfA\xfan no tienes la aplicaci\xf3n de Binance?",
          },
          "es-ES": {
            "sdk-download-android": "Descargar para Android",
            "sdk-connect": "Conectar",
            "sdk-download-ios": "Descargar para iOS",
            "sdk-install": "Instalar",
            "sdk-modal-instruct-1": "1. Open Binance app",
            "sdk-modal-instruct-2":
              "2. Pulsa en {{icon}} en la p\xe1gina principal",
            "sdk-modal-title": "Connect With Binance",
            "sdk-no-app": "\xbfA\xfan no tienes la aplicaci\xf3n de Binance?",
          },
          "sv-SE": {
            "sdk-download-android": "Ladda ned f\xf6r Android",
            "sdk-connect": "Anslut",
            "sdk-download-ios": "Ladda ned f\xf6r iOS",
            "sdk-install": "Installera",
            "sdk-modal-instruct-1": "1. \xd6ppna Binance-appen",
            "sdk-modal-instruct-2":
              "2. Tryck p\xe5 {{icon}} p\xe5 startsk\xe4rmen",
            "sdk-modal-title": "Anslut med Binance",
            "sdk-no-app": "Har du inte Binance-appen \xe4nnu?",
          },
          "tr-TR": {
            "sdk-download-android": "Android i\xe7in indir",
            "sdk-connect": "Bağlan",
            "sdk-download-ios": "iOS i\xe7in indir",
            "sdk-install": "Y\xfckle",
            "sdk-modal-instruct-1": "1. Binance Uygulamasını A\xe7ın",
            "sdk-modal-instruct-2": "2. Ana Ekranda {{icon}} simgesine dokunun",
            "sdk-modal-title": "Binance ile Bağlanın",
            "sdk-no-app": "Hen\xfcz Binance uygulamanız yok mu?",
          },
          "uk-UA": {
            "sdk-download-android": "Завантажити для Android",
            "sdk-connect": "Підключитись",
            "sdk-download-ios": "Завантажити для iOS",
            "sdk-install": "Встановити",
            "sdk-modal-instruct-1": "1. Відкрийте застосунок Binance",
            "sdk-modal-instruct-2":
              "2. Торкніться {{icon}} на головному екрані",
            "sdk-modal-title": "Підключіться до Binance",
            "sdk-no-app": "Ще не маєте застосунку Binance?",
          },
          "vi-VN": {
            "sdk-download-android": "Tải xuống cho Android",
            "sdk-connect": "Kết nối",
            "sdk-download-ios": "Tải xuống cho iOS",
            "sdk-install": "C\xe0i đặt",
            "sdk-modal-instruct-1": "1. Mở ứng dụng Binance",
            "sdk-modal-instruct-2":
              "2. Nhấn v\xe0o {{icon}} tr\xean M\xe0n h\xecnh ch\xednh",
            "sdk-modal-title": "Kết nối với Binance",
            "sdk-no-app": "Bạn chưa c\xf3 ứng dụng Binance?",
          },
          "da-DK": {
            "sdk-download-android": "Download til Android",
            "sdk-connect": "Forbind",
            "sdk-download-ios": "Download til iOS",
            "sdk-install": "Installer",
            "sdk-modal-instruct-1": "1. \xc5bn Binance-appen",
            "sdk-modal-instruct-2":
              "2. Tryk p\xe5 {{icon}} p\xe5 startsk\xe6rmen",
            "sdk-modal-title": "Forbind til Binance",
            "sdk-no-app": "Har du ikke Binance-appen endnu?",
          },
          "my-MM": {
            "sdk-download-android": "အန်းဒရွိုက်အတွက် ဒေါင်းလုဒ်လုပ်မည်",
            "sdk-connect": "ချိတ်ဆက်မည်",
            "sdk-download-ios": "iOS အတွက် ဒေါင်းလုဒ်လုပ်မည်",
            "sdk-install": "ထည့်သွင်းမည်",
            "sdk-modal-instruct-1": "1. Open Binance app",
            "sdk-modal-instruct-2": "ပင်မမျက်နှာပြင်မှ {{icon}} ကိုနှိပ်ပါ။",
            "sdk-modal-title": "Connect With Binance",
            "sdk-no-app": "Binance App မရှိသေးဘူးလား။",
          },
          "lo-LA": {
            "sdk-download-android": "ດາວໂຫຼດສໍາລັບ Android",
            "sdk-connect": "ເຊື່ອມຕໍ່",
            "sdk-download-ios": "ດາວໂຫຼດສໍາລັບ iOS",
            "sdk-install": "ຕິດຕັ້ງ",
            "sdk-modal-instruct-1": "1. ເປີດແອັບ Binance",
            "sdk-modal-instruct-2": "2. ແຕະ {{icon}} ໃນໜ້າຈໍຫຼັກ",
            "sdk-modal-title": "ເຊື່ອມຕໍ່ກັບ Binance",
            "sdk-no-app": "ຍັງບໍ່ມີແອັບ Binance ເທື່ອບໍ?",
          },
          "si-LK": {
            "sdk-download-android": "Android සඳහා බාගත කරන්න",
            "sdk-connect": "සම්බන්ධ කරන්න",
            "sdk-download-ios": "iOS සඳහා බාගත කරන්න",
            "sdk-install": "ස්ථාපනය කරන්න",
            "sdk-modal-instruct-1": "1. Binance යෙදුම විවෘත කරන්න",
            "sdk-modal-instruct-2": "2. මුල් තිරයේ {{icon}} මත තට්ටු කරන්න",
            "sdk-modal-title": "Binance සමග සම්බන්ධ වන්න",
            "sdk-no-app": "තවමත් Binance යෙදුම නැති ද?",
          },
        },
        $ = [
          "en",
          "ar",
          "bg-BG",
          "zh-CN",
          "zh-TW",
          "cs-CZ",
          "fr-FR",
          "de-DE",
          "el-GR",
          "id-ID",
          "it-IT",
          "kk-KZ",
          "lv-LV",
          "pl-PL",
          "pt-BR",
          "pt-PT",
          "ro-RO",
          "ru-RU",
          "sk-SK",
          "sl-SI",
          "es-LA",
          "es-ES",
          "sv-SE",
          "tr-TR",
          "uk-UA",
          "vi-VN",
          "da-DK",
          "my-MM",
          "lo-LA",
          "si-LK",
        ].reduce(function (e, t) {
          return (e[t] = Y[t]), e;
        }, {}),
        X = function () {
          var e = (0, A.useContext)(V).lng;
          return (0, A.useCallback)(
            function (t, n) {
              var r, o;
              return (
                (null == $
                  ? void 0
                  : null === (r = $[e]) || void 0 === r
                  ? void 0
                  : r[t]) ||
                (null == $
                  ? void 0
                  : null === (o = $.en) || void 0 === o
                  ? void 0
                  : o[t]) ||
                (null == n ? void 0 : n.default) ||
                t
              );
            },
            [e]
          );
        },
        ee = function (e) {
          var t = e.size,
            n = void 0 === t ? 24 : t,
            r = e.color,
            o = e.className,
            i = e.children,
            a = z(e, ["size", "color", "className", "children"]);
          return A.createElement(
            "svg",
            U(
              {
                width: n,
                height: n,
                fill: void 0 === r ? "currentColor" : r,
                className: o,
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
              },
              a
            ),
            i
          );
        },
        et = function (e) {
          return A.createElement(
            ee,
            U({ size: 24 }, e),
            A.createElement("path", {
              d: "M21.7725 18.7033C21.4062 19.5418 20.9727 20.3136 20.4704 21.0232C19.7857 21.9906 19.2251 22.6602 18.7931 23.032C18.1233 23.6424 17.4058 23.955 16.6374 23.9728C16.0857 23.9728 15.4205 23.8172 14.6461 23.5017C13.8692 23.1876 13.1552 23.032 12.5024 23.032C11.8177 23.032 11.0834 23.1876 10.2979 23.5017C9.51127 23.8172 8.87756 23.9816 8.39305 23.9979C7.65619 24.0291 6.92173 23.7076 6.1886 23.032C5.72069 22.6276 5.13542 21.9343 4.43429 20.9521C3.68203 19.9033 3.06358 18.687 2.57906 17.3004C2.06017 15.8026 1.80005 14.3523 1.80005 12.9482C1.80005 11.3398 2.15076 9.95259 2.85324 8.79011C3.40532 7.85636 4.13979 7.11979 5.05903 6.57906C5.97827 6.03834 6.97151 5.76279 8.04114 5.74516C8.62641 5.74516 9.39391 5.92456 10.3477 6.27715C11.2988 6.63091 11.9095 6.81032 12.1772 6.81032C12.3774 6.81032 13.0558 6.60054 14.2058 6.18233C15.2934 5.79449 16.2113 5.63391 16.9633 5.69716C19.0009 5.86012 20.5317 6.6561 21.5497 8.09013C19.7274 9.18432 18.826 10.7169 18.8439 12.6829C18.8603 14.2142 19.4209 15.4886 20.5227 16.5004C21.022 16.97 21.5796 17.333 22.2001 17.5907C22.0655 17.9774 21.9235 18.3477 21.7725 18.7033ZM17.0993 0.480137C17.0993 1.68041 16.6568 2.8011 15.7748 3.8384C14.7104 5.07155 13.4229 5.78412 12.0268 5.67168C12.009 5.52769 11.9987 5.37614 11.9987 5.21688C11.9987 4.06462 12.5049 2.83147 13.4038 1.82321C13.8526 1.3127 14.4234 0.888228 15.1155 0.549615C15.8062 0.216055 16.4595 0.031589 17.0739 0C17.0918 0.160458 17.0993 0.320926 17.0993 0.480121V0.480137Z",
              fill: "#1E2329",
            })
          );
        },
        en = function (e) {
          return A.createElement(
            ee,
            U({ size: 24 }, e),
            A.createElement("path", {
              d: "M13.5589 11.0874L4.08203 1.59644H4.17441C4.98558 1.59644 5.68614 1.89129 6.81073 2.4993L16.7488 7.88083L13.5589 11.0874Z",
              fill: "#202630",
            }),
            A.createElement("path", {
              d: "M12.6373 12.008L2.90218 21.7203C2.66236 21.3329 2.49658 20.7063 2.49658 19.8034V4.19354C2.49658 3.29078 2.66236 2.66403 2.90218 2.2771L12.6373 12.008Z",
              fill: "#202630",
            }),
            A.createElement("path", {
              d: "M13.5589 12.9124L16.7488 16.1187L6.81073 21.5001C5.68614 22.1083 4.98548 22.4036 4.17441 22.4036H4.08203L13.5589 12.9124Z",
              fill: "#202630",
            }),
            A.createElement("path", {
              d: "M17.9437 8.52563L14.4775 12.0091L17.9437 15.4738L20.0456 14.3309C20.8199 13.9069 22 13.1329 22 12.0091C22 10.8662 20.8199 10.0922 20.0456 9.66821L17.9437 8.52563Z",
              fill: "#202630",
            })
          );
        },
        er = function (e) {
          return A.createElement(
            ee,
            U({ size: 24 }, e),
            A.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.5 4H10.5V7H7.5V10H4.5V7V4H7.5ZM14.5 4H17.5H20.5V7V10H17.5V7H14.5V4ZM10.5 20V17H7.5V14H4.5V17V20H7.5H10.5ZM17.5 20H14.5V17H17.5V14H20.5V17V20H17.5ZM16.5 10.5H8.5V13.5H16.5V10.5Z",
              fill: "#202630",
            })
          );
        },
        eo = function (e) {
          var t = e.value,
            n = z(e, ["value"]),
            r = ei(t).map(function (e) {
              return "string" == typeof e
                ? e
                : A.cloneElement(n[e.key], { key: e.key });
            });
          return A.createElement(A.Fragment, null, r);
        },
        ei = function (e) {
          for (
            var t, n = /{{(.*?)}}/g, r = 0, o = [];
            null !== (t = n.exec(e));

          )
            t.index !== r && o.push(e.substring(r, t.index)),
              o.push({ key: t[1] }),
              (r = n.lastIndex);
          return r !== e.length && o.push(e.substring(r)), o;
        },
        ea = function () {
          var e = X();
          return A.createElement(
            A.Fragment,
            null,
            A.createElement(es, { t: e }),
            A.createElement(ec, { t: e }),
            A.createElement(el, null)
          );
        },
        es = function (e) {
          var t = e.t;
          return A.createElement(
            "div",
            {
              style: { borderBottom: "1px solid #EAECEF" },
              className:
                "grid justify-center gap-y-2 pb-6 w3w-body3 w3w-t-black border-b border-gray-300",
            },
            A.createElement(
              "div",
              null,
              t("sdk-modal-instruct-1", { default: "1. Open Binance app" })
            ),
            A.createElement(
              "div",
              { className: "flex items-center" },
              A.createElement(eo, {
                value: t("sdk-modal-instruct-2", {
                  default: "2. Tap {{icon}} on Home",
                }),
                icon: A.createElement(er, {
                  className: "w-[24px] h-[24px] mx-[4px]",
                }),
              })
            )
          );
        },
        ec = function (e) {
          var t = e.t;
          return A.createElement(
            "div",
            { className: "py-4 w3w-body3 w3w-t-secondary text-center" },
            t("sdk-no-app", { default: "Don't have Binance app yet?" })
          );
        },
        el = function () {
          return A.createElement(
            "div",
            { className: "grid grid-cols-2 gap-x-4" },
            A.createElement(eu, { type: "iOS" }),
            A.createElement(eu, { type: "Android" })
          );
        },
        eu = function (e) {
          var t = e.type,
            n = X();
          return A.createElement(
            "div",
            {
              style: { border: "1px solid #EAECEF" },
              className:
                "p-[12px] rounded-lg grid cursor-pointer w3w-t-secondary grid-flow-col items-center gap-x-4 w-[150px]",
              onClick: function () {
                window.open(
                  "Android" === t ? G.googlePlay : G.appleStore,
                  "_blank"
                );
              },
            },
            "Android" === t
              ? A.createElement(en, { className: "w-[24px] h-[24px] m-auto" })
              : A.createElement(et, { className: "w-[24px] h-[24px] m-auto" }),
            A.createElement(
              "div",
              { className: "w-[75px] w3w-caption2 w3w-t-secondary" },
              n("sdk-download-".concat(t.toLowerCase()), {
                default: "Download for ".concat(t),
              })
            )
          );
        },
        ed = function (e) {
          return A.createElement(
            ee,
            U({}, e),
            A.createElement("path", {
              d: "M6.69708 4.57538L4.57576 6.6967L9.87906 12L4.57576 17.3033L6.69708 19.4246L12.0004 14.1213L17.3037 19.4246L19.425 17.3033L14.1217 12L19.425 6.6967L17.3037 4.57538L12.0004 9.87868L6.69708 4.57538Z",
              fill: "currentColor",
            })
          );
        },
        ef = function (e) {
          var t = e.onClose,
            n = X();
          return A.createElement(
            "div",
            { className: "flex items-center justify-between" },
            A.createElement(
              "p",
              {
                className:
                  "text-base font-medium text-[#1E2329] lg:text-xl md:font-semibold md:w3w-subtitle1",
              },
              n("sdk-modal-title", { default: "Connect with Binance" })
            ),
            A.createElement(
              "div",
              { className: "cursor-pointer text-[#929AA5]", onClick: t },
              A.createElement(ed, null)
            )
          );
        },
        eh = function (e) {
          var t = e.id,
            n = e.onClose,
            r = e.onConnect,
            o = X();
          return A.createElement(
            "div",
            {
              id: t,
              className:
                "w3w-animated w3w-fadeIn pointer-events-auto fixed top-0 left-0 h-full w-full bg-black/[.80] duration-300 ease-in-out will-change-auto",
            },
            A.createElement(
              "div",
              {
                className:
                  "absolute bottom-0 m-auto w-full rounded-t-2xl bg-white px-4 pb-6 shadow-inner duration-300 ease-in-out will-change-transform md:w-[400px]",
              },
              A.createElement(ep, { onClose: n }),
              A.createElement(
                "div",
                { className: "mt-6 mb-4 flex justify-center" },
                A.createElement("img", { className: "w-[60px]", src: J })
              ),
              A.createElement(
                "div",
                { className: "w3w-subtitle1 text-center mb-6 w3w-t-primary" },
                o("sdk-modal-title", { default: "Connect with Binance" })
              ),
              A.createElement(
                "button",
                {
                  onClick: r,
                  style: { borderColor: "transparent" },
                  className:
                    "w-full rounded h-[40px] flex justify-center items-center w3w-bg-primary w3w-t-primary w3w-subtitle3 mb-4",
                },
                o("sdk-connect", { default: "Connect" })
              ),
              A.createElement(
                "div",
                { className: "text-center py-3 w3w-t-secondary" },
                A.createElement(
                  "span",
                  null,
                  o("sdk-no-app", { default: "Don’t have Binance app yet?" })
                ),
                A.createElement(
                  "a",
                  {
                    target: "_blank",
                    href: "https://www.binance.com/en/download",
                    className: "w3w-t-brand ml-1",
                  },
                  o("sdk-install", { default: "Install" })
                )
              )
            )
          );
        },
        ep = function (e) {
          var t = e.onClose;
          return A.createElement(
            "div",
            { className: "flex items-center justify-end h-[52px]" },
            A.createElement(
              "div",
              { className: "cursor-pointer text-[#929AA5]", onClick: t },
              A.createElement(ed, { className: "w-[20px]" })
            )
          );
        },
        em = function (e, t) {
          var n = "visibilitychange",
            r = setTimeout(function () {
              document.hidden || e();
            }, t),
            o = function () {
              document.hidden &&
                (clearTimeout(r), document.removeEventListener(n, o));
            };
          document.addEventListener(n, o, !1);
        },
        ey = function (e) {
          var t = document.createElement("a");
          (t.href = e),
            document.body.appendChild(t),
            em(function () {
              window.location.href = "https://www.binance.com/en/download";
            }, 1e3),
            t.click(),
            document.body.removeChild(t);
        },
        eb = function (e) {
          var t = K(),
            n = t.isAndroid,
            r = t.isMobile;
          return {
            toBinance: function () {
              var t = (0, h.wS)(n, e);
              if (r) {
                if (!n) {
                  var o = document.createElement("a");
                  (o.href = t),
                    document.body.appendChild(o),
                    o.click(),
                    document.body.removeChild(o);
                }
                n && ey(t);
              }
            },
          };
        },
        ew = function (e) {
          var t = eb(e.url).toBinance;
          return A.createElement(
            "div",
            null,
            A.createElement(
              "div",
              { className: "mt-[35px] flex justify-center" },
              A.createElement(
                "div",
                { className: "w-[200px] h-[200px] mb-4", onClick: t },
                e.url &&
                  A.createElement(L, {
                    value: e.url,
                    width: "100%",
                    height: "100%",
                    level: "M",
                    imageSettings: {
                      src: J,
                      height: 32,
                      width: 32,
                      excavate: !1,
                    },
                  })
              )
            )
          );
        },
        eg = function (e) {
          var t = e.onClose,
            n = e.isReady,
            r = K().isMobile,
            o = H((0, A.useState)(""), 2),
            i = o[0],
            a = o[1],
            s = H((0, A.useState)(!1), 2),
            c = s[0],
            l = s[1];
          return ((0, A.useEffect)(
            function () {
              n.then(a).catch(function () {
                return l(!0);
              });
            },
            [n]
          ),
          !1 === r)
            ? A.createElement(
                "div",
                {
                  id: Z,
                  className:
                    "w3w-animated w3w-fadeIn pointer-events-auto fixed top-0 left-0 h-full w-full bg-black/[.80] duration-300 ease-in-out will-change-auto",
                },
                A.createElement(
                  "div",
                  {
                    style: { transform: "translateY(-50%)", top: "50%" },
                    className:
                      "relative m-auto w-[343px] rounded-2xl bg-white px-6 pt-[20px] pb-6 shadow-inner duration-300 ease-in-out will-change-transform md:w-[400px] lg:p-8 lg:pt-6",
                  },
                  A.createElement(ef, { onClose: t }),
                  A.createElement(ew, U({}, { url: i, error: c })),
                  A.createElement(ea, null)
                )
              )
            : r
            ? A.createElement(eh, {
                onConnect: function () {
                  (0, h.jm)(i);
                },
                onClose: t,
                id: Z,
              })
            : void 0;
        },
        ev = {
          order: [
            "querystring",
            "cookie",
            "localStorage",
            "sessionStorage",
            "navigator",
            "htmlTag",
            "path",
            "subdomain",
          ],
          lookupQuerystring: function () {
            var e = window.location.search.match(/lng=([^&]*)/);
            return e && e[1];
          },
          lookupCookie: function () {
            var e = document.cookie.match(/i18next=([^;]*)/);
            return e && e[1];
          },
          lookupLocalStorage: function () {
            return localStorage.getItem("i18nextLng");
          },
          lookupSessionStorage: function () {
            return sessionStorage.getItem("i18nextLng");
          },
          lookupFromNavigator: function () {
            return navigator.language;
          },
          lookupFromHtmlTag: function () {
            return document.documentElement.lang;
          },
          lookupFromPath: function () {
            var e = window.location.pathname.match(/\/([^/]*)/);
            return e && e[1];
          },
          lookupFromSubdomain: function () {
            var e = window.location.hostname.match(/^(.+)\./);
            return e && e[1];
          },
        },
        ek = function () {
          var e = !0,
            t = !1,
            n = void 0;
          try {
            for (
              var r, o = ev.order[Symbol.iterator]();
              !(e = (r = o.next()).done);
              e = !0
            ) {
              var i = r.value;
              try {
                var a = ev["lookup" + i.charAt(0).toUpperCase() + i.slice(1)]();
                if (a) return a;
              } catch (e) {
                console.error(
                  "Error detecting language with method: ".concat(i),
                  e
                );
                continue;
              }
            }
          } catch (e) {
            (t = !0), (n = e);
          } finally {
            try {
              e || null == o.return || o.return();
            } finally {
              if (t) throw n;
            }
          }
          return "en";
        };
      function eE() {
        var e = window.document,
          t = e.getElementById(Z);
        t &&
          ((t.className = t.className.replace("w3w-fadeIn", "w3w-fadeOut")),
          setTimeout(function () {
            var t = e.getElementById(Q);
            t && e.body.removeChild(t);
          }, 300));
      }
      function eS() {
        var e;
        return (
          (e = function (e) {
            var t, n, r, o, i;
            return (function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(i) {
                return function (s) {
                  return (function (i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i;
                            break;
                          case 4:
                            return a.label++, { value: i[1], done: !1 };
                          case 5:
                            a.label++, (r = i[1]), (i = [0]);
                            continue;
                          case 7:
                            (i = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(o =
                                (o = a.trys).length > 0 && o[o.length - 1]) &&
                              (6 === i[0] || 2 === i[0])
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1];
                              break;
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = i);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(i);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        i = t.call(e, a);
                      } catch (e) {
                        (i = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                  })([i, s]);
                };
              }
            })(this, function (a) {
              var s, c, l;
              switch (a.label) {
                case 0:
                  return (
                    (t = e.isReady),
                    (n = e.cb),
                    (r = e.lng),
                    (c = (s = window.document).createElement(
                      "div"
                    )).setAttribute("id", Q),
                    s.body.appendChild(c),
                    (o = (0, R.createRoot)(c)),
                    [4, t]
                  );
                case 1:
                  return (
                    a.sent(),
                    (i = null != r ? r : ek()),
                    o.render(
                      A.createElement(
                        V.Provider,
                        { value: { lng: i } },
                        A.createElement("style", {
                          dangerouslySetInnerHTML: { __html: q },
                        }),
                        A.createElement(eg, {
                          isReady: t,
                          onClose:
                            ((l = n),
                            function () {
                              eE(), l && l();
                            }),
                        })
                      )
                    ),
                    [2]
                  );
              }
            });
          }),
          (eS = function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, o) {
              var i = e.apply(t, n);
              function a(e) {
                F(i, r, o, a, s, "next", e);
              }
              function s(e) {
                F(i, r, o, a, s, "throw", e);
              }
              a(void 0);
            });
          }).apply(this, arguments)
        );
      }
      var eC = function (e) {},
        ex = function () {},
        eO = {
          open: function (e) {
            var t = e.cb,
              n = e.lng,
              r = new Promise(function (e, t) {
                (eC = e), (ex = t);
              });
            (0, h.UG)() ||
              (function (e) {
                eS.apply(this, arguments);
              })({ isReady: r, cb: t, lng: n });
          },
          close: function () {
            (0, h.UG)() || eE();
          },
          ready: function (e) {
            eC(e);
          },
          fail: function () {
            console.log("relay failed...."), ex();
          },
        },
        eA = n(37031);
      function eR(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function e_(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function eT(e) {
        return (eT = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function eI(e, t) {
        return (eI =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function eM(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      var eP = Object.defineProperty,
        eN = function (e, t, n) {
          var r, o;
          return (
            (r = e),
            (o =
              (void 0 === t ? "undefined" : eM(t)) != "symbol" ? t + "" : t) in
            r
              ? eP(r, o, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (r[o] = n),
            n
          );
        },
        eB =
          ("undefined" == typeof window ? "undefined" : eM(window)) < "u"
            ? window.WebSocket
            : eA,
        ej = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && eI(e, t);
          })(i, e);
          var t,
            n,
            r,
            o =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n,
                  r = eT(i);
                if (t) {
                  var o = eT(this).constructor;
                  n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return (e = n) && ("object" === eM(e) || "function" == typeof e)
                  ? e
                  : eR(this);
              });
          function i(e) {
            var t;
            return (
              !(function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, i),
              ((t = o.call(this)).opts = e),
              eN(eR(t), "qs"),
              eN(eR(t), "urls", []),
              eN(eR(t), "url"),
              eN(eR(t), "socket"),
              eN(eR(t), "nextSocket"),
              eN(eR(t), "queue", []),
              eN(eR(t), "subscriptions", []),
              eN(eR(t), "retryIndex", 0),
              (t.socket = null),
              (t.nextSocket = null),
              (t.subscriptions = e.subscriptions || []),
              (t.qs = "env=browser&protocol=wc&version=".concat(e.version)),
              t
            );
          }
          return (
            (n = [
              {
                key: "readyState",
                get: function () {
                  return this.socket ? this.socket.readyState : -1;
                },
                set: function (e) {},
              },
              {
                key: "connecting",
                get: function () {
                  return 0 === this.readyState;
                },
                set: function (e) {},
              },
              {
                key: "connected",
                get: function () {
                  return 1 === this.readyState;
                },
                set: function (e) {},
              },
              {
                key: "retryFailed",
                get: function () {
                  return (
                    this.retryIndex > 0 && this.retryIndex > this.urls.length
                  );
                },
                set: function (e) {},
              },
              {
                key: "open",
                value: function (e) {
                  if (!Array.isArray(e) || 0 === e.length)
                    throw Error("Missing or invalid WebSocket url");
                  (this.urls = e), (this.retryIndex = 0), this.socketCreate();
                },
              },
              {
                key: "close",
                value: function () {
                  this._socketClose();
                },
              },
              {
                key: "send",
                value: function (e, t, n) {
                  if (!t || "string" != typeof t)
                    throw Error("Missing or invalid topic field");
                  this.socketSend({
                    topic: t,
                    type: "pub",
                    payload: e,
                    silent: !!n,
                  });
                },
              },
              {
                key: "subscribe",
                value: function (e) {
                  this.socketSend({
                    topic: e,
                    type: "sub",
                    payload: "",
                    silent: !0,
                  });
                },
              },
              {
                key: "socketCreate",
                value: function () {
                  var e = this;
                  if (!this.nextSocket) {
                    var t = this.url || this.getWsUrl();
                    if (!t)
                      return this.events.emit(
                        "error",
                        Error("Retry limit reached. Can't connect to any url."),
                        t
                      );
                    if (
                      ((this.url = t),
                      (this.nextSocket = new eB(t)),
                      !this.nextSocket)
                    )
                      throw Error("Failed to create socket");
                    (this.nextSocket.onmessage = function (t) {
                      return e.socketReceive(t);
                    }),
                      (this.nextSocket.onopen = function () {
                        return e.socketOpen();
                      }),
                      (this.nextSocket.onerror = function (n) {
                        return e.socketError(n, t);
                      }),
                      (this.nextSocket.onclose = function (t) {
                        (e.nextSocket = null), e.socketCreate();
                      });
                  }
                },
              },
              {
                key: "getWsUrl",
                value: function () {
                  return this.retryIndex >= this.urls.length
                    ? ""
                    : ""
                        .concat(this.urls[this.retryIndex++], "?")
                        .concat(this.qs);
                },
              },
              {
                key: "socketOpen",
                value: function () {
                  this._socketClose(),
                    (this.socket = this.nextSocket),
                    (this.nextSocket = null),
                    this.queueSubscriptions(),
                    this.pushQueue(),
                    this.events.emit("open", this.urls[this.retryIndex - 1]);
                },
              },
              {
                key: "_socketClose",
                value: function () {
                  this.socket &&
                    ((this.socket.onclose = function () {}),
                    this.socket.close(),
                    this.events.emit("close"));
                },
              },
              {
                key: "socketSend",
                value: function (e) {
                  var t = JSON.stringify(e);
                  this.socket && 1 === this.socket.readyState
                    ? this.socket.send(t)
                    : this.setToQueue(e);
                },
              },
              {
                key: "socketReceive",
                value: function (e) {
                  var t;
                  try {
                    t = JSON.parse(e.data);
                  } catch (e) {
                    return;
                  }
                  this.socketSend({
                    topic: t.topic,
                    type: "ack",
                    payload: "",
                    silent: !0,
                  }),
                    this.socket &&
                      1 === this.socket.readyState &&
                      this.events.emit("message", t);
                },
              },
              {
                key: "socketError",
                value: function (e, t) {
                  this.events.emit("error", e, t);
                },
              },
              {
                key: "queueSubscriptions",
                value: function () {
                  var e = this;
                  this.subscriptions.forEach(function (t) {
                    return e.queue.push({
                      topic: t,
                      type: "sub",
                      payload: "",
                      silent: !0,
                    });
                  }),
                    (this.subscriptions = this.opts.subscriptions || []);
                },
              },
              {
                key: "setToQueue",
                value: function (e) {
                  this.queue.push(e);
                },
              },
              {
                key: "pushQueue",
                value: function () {
                  var e = this;
                  this.queue.forEach(function (t) {
                    return e.socketSend(t);
                  }),
                    (this.queue = []);
                },
              },
            ]),
            e_(i.prototype, n),
            r && e_(i, r),
            i
          );
        })(h.zW);
      function eD(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function eL(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function eW(e) {
        return (eW = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function eF(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && eU(e, t);
      }
      function eU(e, t) {
        return (eU =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ez(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      function eH(e) {
        var t = (function () {
          if (
            "undefined" == typeof Reflect ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r,
            o = eW(e);
          if (t) {
            var i = eW(this).constructor;
            r = Reflect.construct(o, arguments, i);
          } else r = o.apply(this, arguments);
          return (n = r) && ("object" === ez(n) || "function" == typeof n)
            ? n
            : eD(this);
        };
      }
      var eq = Object.defineProperty,
        eV = function (e, t, n) {
          var r, o;
          return (
            (r = e),
            (o =
              (void 0 === t ? "undefined" : ez(t)) != "symbol" ? t + "" : t) in
            r
              ? eq(r, o, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (r[o] = n),
            n
          );
        };
      !(function (e) {
        eF(n, e);
        var t = eH(n);
        function n() {
          var e;
          return (
            eL(this, n),
            (e = t.call.apply(
              t,
              [this].concat(Array.prototype.slice.call(arguments))
            )),
            eV(eD(e), "connection"),
            e
          );
        }
      })(
        (function (e) {
          eF(n, e);
          var t = eH(n);
          function n() {
            return eL(this, n), t.apply(this, arguments);
          }
          return n;
        })(function e() {
          eL(this, e), eV(this, "events");
        })
      );
      var eQ =
          (((i = eQ || {})[(i.DisconnectAtWallet = 0)] = "DisconnectAtWallet"),
          (i[(i.DisconnectAtClient = 1)] = "DisconnectAtClient"),
          (i[(i.NetworkError = 2)] = "NetworkError"),
          i),
        eZ = n(99268);
      function eG(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      let { toString: eJ } = Object.prototype,
        { getPrototypeOf: eK } = Object,
        eY =
          ((a = Object.create(null)),
          (e) => {
            let t = eJ.call(e);
            return a[t] || (a[t] = t.slice(8, -1).toLowerCase());
          }),
        e$ = (e) => ((e = e.toLowerCase()), (t) => eY(t) === e),
        eX = (e) => (t) => typeof t === e,
        { isArray: e0 } = Array,
        e1 = eX("undefined"),
        e2 = e$("ArrayBuffer"),
        e3 = eX("string"),
        e4 = eX("function"),
        e5 = eX("number"),
        e8 = (e) => null !== e && "object" == typeof e,
        e6 = (e) => {
          if ("object" !== eY(e)) return !1;
          let t = eK(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        e7 = e$("Date"),
        e9 = e$("File"),
        te = e$("Blob"),
        tt = e$("FileList"),
        tn = (e) => e8(e) && e4(e.pipe),
        tr = (e) => {
          let t;
          return (
            e &&
            (("function" == typeof FormData && e instanceof FormData) ||
              (e4(e.append) &&
                ("formdata" === (t = eY(e)) ||
                  ("object" === t &&
                    e4(e.toString) &&
                    "[object FormData]" === e.toString()))))
          );
        },
        to = e$("URLSearchParams"),
        [ti, ta, ts, tc] = [
          "ReadableStream",
          "Request",
          "Response",
          "Headers",
        ].map(e$),
        tl = (e) =>
          e.trim
            ? e.trim()
            : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      function tu(e, t, { allOwnKeys: n = !1 } = {}) {
        let r, o;
        if (null != e) {
          if (("object" != typeof e && (e = [e]), e0(e)))
            for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
          else {
            let o;
            let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
              a = i.length;
            for (r = 0; r < a; r++) (o = i[r]), t.call(null, e[o], o, e);
          }
        }
      }
      function td(e, t) {
        let n;
        t = t.toLowerCase();
        let r = Object.keys(e),
          o = r.length;
        for (; o-- > 0; ) if (t === (n = r[o]).toLowerCase()) return n;
        return null;
      }
      let tf =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        th = (e) => !e1(e) && e !== tf,
        tp = (e, t, n, { allOwnKeys: r } = {}) => (
          tu(
            t,
            (t, r) => {
              n && e4(t) ? (e[r] = eG(t, n)) : (e[r] = t);
            },
            { allOwnKeys: r }
          ),
          e
        ),
        tm = (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        ty = (e, t, n, r) => {
          (e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: t.prototype }),
            n && Object.assign(e.prototype, n);
        },
        tb = (e, t, n, r) => {
          let o, i, a;
          let s = {};
          if (((t = t || {}), null == e)) return t;
          do {
            for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0; )
              (a = o[i]),
                (!r || r(a, e, t)) && !s[a] && ((t[a] = e[a]), (s[a] = !0));
            e = !1 !== n && eK(e);
          } while (e && (!n || n(e, t)) && e !== Object.prototype);
          return t;
        },
        tw = (e, t, n) => {
          (e = String(e)),
            (void 0 === n || n > e.length) && (n = e.length),
            (n -= t.length);
          let r = e.indexOf(t, n);
          return -1 !== r && r === n;
        },
        tg = (e) => {
          if (!e) return null;
          if (e0(e)) return e;
          let t = e.length;
          if (!e5(t)) return null;
          let n = Array(t);
          for (; t-- > 0; ) n[t] = e[t];
          return n;
        },
        tv =
          ((s = "undefined" != typeof Uint8Array && eK(Uint8Array)),
          (e) => s && e instanceof s),
        tk = (e, t) => {
          let n;
          let r = e && e[Symbol.iterator],
            o = r.call(e);
          for (; (n = o.next()) && !n.done; ) {
            let r = n.value;
            t.call(e, r[0], r[1]);
          }
        },
        tE = (e, t) => {
          let n;
          let r = [];
          for (; null !== (n = e.exec(t)); ) r.push(n);
          return r;
        },
        tS = e$("HTMLFormElement"),
        tC = (e) =>
          e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
            return t.toUpperCase() + n;
          }),
        tx = (
          ({ hasOwnProperty: e }) =>
          (t, n) =>
            e.call(t, n)
        )(Object.prototype),
        tO = e$("RegExp"),
        tA = (e, t) => {
          let n = Object.getOwnPropertyDescriptors(e),
            r = {};
          tu(n, (n, o) => {
            let i;
            !1 !== (i = t(n, o, e)) && (r[o] = i || n);
          }),
            Object.defineProperties(e, r);
        },
        tR = (e) => {
          tA(e, (t, n) => {
            if (e4(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
              return !1;
            let r = e[n];
            if (e4(r)) {
              if (((t.enumerable = !1), "writable" in t)) {
                t.writable = !1;
                return;
              }
              t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                });
            }
          });
        },
        t_ = (e, t) => {
          let n = {};
          return (
            ((e) => {
              e.forEach((e) => {
                n[e] = !0;
              });
            })(e0(e) ? e : String(e).split(t)),
            n
          );
        },
        tT = () => {},
        tI = (e, t) => (null != e && Number.isFinite((e = +e)) ? e : t),
        tM = "abcdefghijklmnopqrstuvwxyz",
        tP = "0123456789",
        tN = { DIGIT: tP, ALPHA: tM, ALPHA_DIGIT: tM + tM.toUpperCase() + tP },
        tB = (e = 16, t = tN.ALPHA_DIGIT) => {
          let n = "",
            { length: r } = t;
          for (; e--; ) n += t[(Math.random() * r) | 0];
          return n;
        },
        tj = (e) => {
          let t = Array(10),
            n = (e, r) => {
              if (e8(e)) {
                if (t.indexOf(e) >= 0) return;
                if (!("toJSON" in e)) {
                  t[r] = e;
                  let o = e0(e) ? [] : {};
                  return (
                    tu(e, (e, t) => {
                      let i = n(e, r + 1);
                      e1(i) || (o[t] = i);
                    }),
                    (t[r] = void 0),
                    o
                  );
                }
              }
              return e;
            };
          return n(e, 0);
        },
        tD = e$("AsyncFunction"),
        tL = (e) => e && (e8(e) || e4(e)) && e4(e.then) && e4(e.catch);
      var tW = {
        isArray: e0,
        isArrayBuffer: e2,
        isBuffer: function (e) {
          return (
            null !== e &&
            !e1(e) &&
            null !== e.constructor &&
            !e1(e.constructor) &&
            e4(e.constructor.isBuffer) &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: tr,
        isArrayBufferView: function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e2(e.buffer);
        },
        isString: e3,
        isNumber: e5,
        isBoolean: (e) => !0 === e || !1 === e,
        isObject: e8,
        isPlainObject: e6,
        isReadableStream: ti,
        isRequest: ta,
        isResponse: ts,
        isHeaders: tc,
        isUndefined: e1,
        isDate: e7,
        isFile: e9,
        isBlob: te,
        isRegExp: tO,
        isFunction: e4,
        isStream: tn,
        isURLSearchParams: to,
        isTypedArray: tv,
        isFileList: tt,
        forEach: tu,
        merge: function e() {
          let { caseless: t } = (th(this) && this) || {},
            n = {},
            r = (r, o) => {
              let i = (t && td(n, o)) || o;
              e6(n[i]) && e6(r)
                ? (n[i] = e(n[i], r))
                : e6(r)
                ? (n[i] = e({}, r))
                : e0(r)
                ? (n[i] = r.slice())
                : (n[i] = r);
            };
          for (let e = 0, t = arguments.length; e < t; e++)
            arguments[e] && tu(arguments[e], r);
          return n;
        },
        extend: tp,
        trim: tl,
        stripBOM: tm,
        inherits: ty,
        toFlatObject: tb,
        kindOf: eY,
        kindOfTest: e$,
        endsWith: tw,
        toArray: tg,
        forEachEntry: tk,
        matchAll: tE,
        isHTMLForm: tS,
        hasOwnProperty: tx,
        hasOwnProp: tx,
        reduceDescriptors: tA,
        freezeMethods: tR,
        toObjectSet: t_,
        toCamelCase: tC,
        noop: tT,
        toFiniteNumber: tI,
        findKey: td,
        global: tf,
        isContextDefined: th,
        ALPHABET: tN,
        generateString: tB,
        isSpecCompliantForm: function (e) {
          return !!(
            e &&
            e4(e.append) &&
            "FormData" === e[Symbol.toStringTag] &&
            e[Symbol.iterator]
          );
        },
        toJSONObject: tj,
        isAsyncFn: tD,
        isThenable: tL,
      };
      function tF(e, t, n, r, o) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          o && (this.response = o);
      }
      tW.inherits(tF, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: tW.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      let tU = tF.prototype,
        tz = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        tz[e] = { value: e };
      }),
        Object.defineProperties(tF, tz),
        Object.defineProperty(tU, "isAxiosError", { value: !0 }),
        (tF.from = (e, t, n, r, o, i) => {
          let a = Object.create(tU);
          return (
            tW.toFlatObject(
              e,
              a,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            tF.call(a, e.message, t, n, r, o),
            (a.cause = e),
            (a.name = e.name),
            i && Object.assign(a, i),
            a
          );
        });
      var tH = n(48834).Buffer;
      function tq(e) {
        return tW.isPlainObject(e) || tW.isArray(e);
      }
      function tV(e) {
        return tW.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function tQ(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = tV(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      let tZ = tW.toFlatObject(tW, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var tG = function (e, t, n) {
        if (!tW.isObject(e)) throw TypeError("target must be an object");
        (t = t || new FormData()),
          (n = tW.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !tW.isUndefined(t[e]);
            }
          ));
        let r = n.metaTokens,
          o = n.visitor || u,
          i = n.dots,
          a = n.indexes,
          s = n.Blob || ("undefined" != typeof Blob && Blob),
          c = s && tW.isSpecCompliantForm(t);
        if (!tW.isFunction(o)) throw TypeError("visitor must be a function");
        function l(e) {
          if (null === e) return "";
          if (tW.isDate(e)) return e.toISOString();
          if (!c && tW.isBlob(e))
            throw new tF("Blob is not supported. Use a Buffer instead.");
          return tW.isArrayBuffer(e) || tW.isTypedArray(e)
            ? c && "function" == typeof Blob
              ? new Blob([e])
              : tH.from(e)
            : e;
        }
        function u(e, n, o) {
          let s = e;
          if (e && !o && "object" == typeof e) {
            if (tW.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else {
              var c;
              if (
                (tW.isArray(e) && ((c = e), tW.isArray(c) && !c.some(tq))) ||
                ((tW.isFileList(e) || tW.endsWith(n, "[]")) &&
                  (s = tW.toArray(e)))
              )
                return (
                  (n = tV(n)),
                  s.forEach(function (e, r) {
                    tW.isUndefined(e) ||
                      null === e ||
                      t.append(
                        !0 === a ? tQ([n], r, i) : null === a ? n : n + "[]",
                        l(e)
                      );
                  }),
                  !1
                );
            }
          }
          return !!tq(e) || (t.append(tQ(o, n, i), l(e)), !1);
        }
        let d = [],
          f = Object.assign(tZ, {
            defaultVisitor: u,
            convertValue: l,
            isVisitable: tq,
          });
        if (!tW.isObject(e)) throw TypeError("data must be an object");
        return (
          !(function e(n, r) {
            if (!tW.isUndefined(n)) {
              if (-1 !== d.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              d.push(n),
                tW.forEach(n, function (n, i) {
                  let a =
                    !(tW.isUndefined(n) || null === n) &&
                    o.call(t, n, tW.isString(i) ? i.trim() : i, r, f);
                  !0 === a && e(n, r ? r.concat(i) : [i]);
                }),
                d.pop();
            }
          })(e),
          t
        );
      };
      function tJ(e) {
        let t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\x00",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function tK(e, t) {
        (this._pairs = []), e && tG(e, this, t);
      }
      let tY = tK.prototype;
      function t$(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function tX(e, t, n) {
        let r;
        if (!t) return e;
        let o = (n && n.encode) || t$,
          i = n && n.serialize;
        if (
          (r = i
            ? i(t, n)
            : tW.isURLSearchParams(t)
            ? t.toString()
            : new tK(t, n).toString(o))
        ) {
          let t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
        }
        return e;
      }
      (tY.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (tY.toString = function (e) {
          let t = e
            ? function (t) {
                return e.call(this, t, tJ);
              }
            : tJ;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      var t0 = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, n) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            tW.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        t1 = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        t2 = "undefined" != typeof URLSearchParams ? URLSearchParams : tK,
        t3 = "undefined" != typeof FormData ? FormData : null,
        t4 = "undefined" != typeof Blob ? Blob : null;
      let t5 = "undefined" != typeof window && "undefined" != typeof document,
        t8 =
          ((c = "undefined" != typeof navigator && navigator.product),
          t5 && 0 > ["ReactNative", "NativeScript", "NS"].indexOf(c)),
        t6 =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts,
        t7 = (t5 && window.location.href) || "http://localhost";
      var t9 = {
          ...f,
          isBrowser: !0,
          classes: { URLSearchParams: t2, FormData: t3, Blob: t4 },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        ne = function (e) {
          if (tW.isFormData(e) && tW.isFunction(e.entries)) {
            let t = {};
            return (
              tW.forEachEntry(e, (e, n) => {
                !(function e(t, n, r, o) {
                  let i = t[o++];
                  if ("__proto__" === i) return !0;
                  let a = Number.isFinite(+i),
                    s = o >= t.length;
                  if (((i = !i && tW.isArray(r) ? r.length : i), s))
                    return (
                      tW.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !a
                    );
                  (r[i] && tW.isObject(r[i])) || (r[i] = []);
                  let c = e(t, n, r[i], o);
                  return (
                    c &&
                      tW.isArray(r[i]) &&
                      (r[i] = (function (e) {
                        let t, n;
                        let r = {},
                          o = Object.keys(e),
                          i = o.length;
                        for (t = 0; t < i; t++) r[(n = o[t])] = e[n];
                        return r;
                      })(r[i])),
                    !a
                  );
                })(
                  tW
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ("[]" === e[0] ? "" : e[1] || e[0])),
                  n,
                  t,
                  0
                );
              }),
              t
            );
          }
          return null;
        };
      let nt = {
        transitional: t1,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function (e, t) {
            let n;
            let r = t.getContentType() || "",
              o = r.indexOf("application/json") > -1,
              i = tW.isObject(e);
            i && tW.isHTMLForm(e) && (e = new FormData(e));
            let a = tW.isFormData(e);
            if (a) return o ? JSON.stringify(ne(e)) : e;
            if (
              tW.isArrayBuffer(e) ||
              tW.isBuffer(e) ||
              tW.isStream(e) ||
              tW.isFile(e) ||
              tW.isBlob(e) ||
              tW.isReadableStream(e)
            )
              return e;
            if (tW.isArrayBufferView(e)) return e.buffer;
            if (tW.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            if (i) {
              if (r.indexOf("application/x-www-form-urlencoded") > -1) {
                var s, c;
                return ((s = e),
                (c = this.formSerializer),
                tG(
                  s,
                  new t9.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (e, t, n, r) {
                        return t9.isNode && tW.isBuffer(e)
                          ? (this.append(t, e.toString("base64")), !1)
                          : r.defaultVisitor.apply(this, arguments);
                      },
                    },
                    c
                  )
                )).toString();
              }
              if (
                (n = tW.isFileList(e)) ||
                r.indexOf("multipart/form-data") > -1
              ) {
                let t = this.env && this.env.FormData;
                return tG(
                  n ? { "files[]": e } : e,
                  t && new t(),
                  this.formSerializer
                );
              }
            }
            return i || o
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (tW.isString(e))
                    try {
                      return (0, JSON.parse)(e), tW.trim(e);
                    } catch (e) {
                      if ("SyntaxError" !== e.name) throw e;
                    }
                  return (0, JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            let t = this.transitional || nt.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (tW.isResponse(e) || tW.isReadableStream(e)) return e;
            if (e && tW.isString(e) && ((n && !this.responseType) || r)) {
              let n = t && t.silentJSONParsing;
              try {
                return JSON.parse(e);
              } catch (e) {
                if (!n && r) {
                  if ("SyntaxError" === e.name)
                    throw tF.from(
                      e,
                      tF.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw e;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: t9.classes.FormData, Blob: t9.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      tW.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        nt.headers[e] = {};
      });
      let nn = tW.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ]);
      var nr = (e) => {
        let t, n, r;
        let o = {};
        return (
          e &&
            e.split("\n").forEach(function (e) {
              (r = e.indexOf(":")),
                (t = e.substring(0, r).trim().toLowerCase()),
                (n = e.substring(r + 1).trim()),
                !t ||
                  (o[t] && nn[t]) ||
                  ("set-cookie" === t
                    ? o[t]
                      ? o[t].push(n)
                      : (o[t] = [n])
                    : (o[t] = o[t] ? o[t] + ", " + n : n));
            }),
          o
        );
      };
      let no = Symbol("internals");
      function ni(e) {
        return e && String(e).trim().toLowerCase();
      }
      function na(e) {
        return !1 === e || null == e
          ? e
          : tW.isArray(e)
          ? e.map(na)
          : String(e);
      }
      let ns = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
      function nc(e, t, n, r, o) {
        if (tW.isFunction(r)) return r.call(this, t, n);
        if ((o && (t = n), tW.isString(t))) {
          if (tW.isString(r)) return -1 !== t.indexOf(r);
          if (tW.isRegExp(r)) return r.test(t);
        }
      }
      class nl {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          let r = this;
          function o(e, t, n) {
            let o = ni(t);
            if (!o) throw Error("header name must be a non-empty string");
            let i = tW.findKey(r, o);
            (i &&
              void 0 !== r[i] &&
              !0 !== n &&
              (void 0 !== n || !1 === r[i])) ||
              (r[i || t] = na(e));
          }
          let i = (e, t) => tW.forEach(e, (e, n) => o(e, n, t));
          if (tW.isPlainObject(e) || e instanceof this.constructor) i(e, t);
          else if (tW.isString(e) && (e = e.trim()) && !ns(e)) i(nr(e), t);
          else if (tW.isHeaders(e)) for (let [t, r] of e.entries()) o(r, t, n);
          else null != e && o(t, e, n);
          return this;
        }
        get(e, t) {
          if ((e = ni(e))) {
            let n = tW.findKey(this, e);
            if (n) {
              let e = this[n];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  let t;
                  let n = Object.create(null),
                    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (t = r.exec(e)); ) n[t[1]] = t[2];
                  return n;
                })(e);
              if (tW.isFunction(t)) return t.call(this, e, n);
              if (tW.isRegExp(t)) return t.exec(e);
              throw TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = ni(e))) {
            let n = tW.findKey(this, e);
            return !!(
              n &&
              void 0 !== this[n] &&
              (!t || nc(this, this[n], n, t))
            );
          }
          return !1;
        }
        delete(e, t) {
          let n = this,
            r = !1;
          function o(e) {
            if ((e = ni(e))) {
              let o = tW.findKey(n, e);
              o && (!t || nc(n, n[o], o, t)) && (delete n[o], (r = !0));
            }
          }
          return tW.isArray(e) ? e.forEach(o) : o(e), r;
        }
        clear(e) {
          let t = Object.keys(this),
            n = t.length,
            r = !1;
          for (; n--; ) {
            let o = t[n];
            (!e || nc(this, this[o], o, e, !0)) && (delete this[o], (r = !0));
          }
          return r;
        }
        normalize(e) {
          let t = this,
            n = {};
          return (
            tW.forEach(this, (r, o) => {
              let i = tW.findKey(n, o);
              if (i) {
                (t[i] = na(r)), delete t[o];
                return;
              }
              let a = e
                ? o
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, t, n) => t.toUpperCase() + n
                    )
                : String(o).trim();
              a !== o && delete t[o], (t[a] = na(r)), (n[a] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let t = Object.create(null);
          return (
            tW.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (t[r] = e && tW.isArray(n) ? n.join(", ") : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([e, t]) => e + ": " + t)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          let n = new this(e);
          return t.forEach((e) => n.set(e)), n;
        }
        static accessor(e) {
          let t = (this[no] = this[no] = { accessors: {} }),
            n = t.accessors,
            r = this.prototype;
          function o(e) {
            let t = ni(e);
            n[t] ||
              (!(function (e, t) {
                let n = tW.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, o) {
                      return this[r].call(this, t, e, n, o);
                    },
                    configurable: !0,
                  });
                });
              })(r, e),
              (n[t] = !0));
          }
          return tW.isArray(e) ? e.forEach(o) : o(e), this;
        }
      }
      function nu(e, t) {
        let n = this || nt,
          r = t || n,
          o = nl.from(r.headers),
          i = r.data;
        return (
          tW.forEach(e, function (e) {
            i = e.call(n, i, o.normalize(), t ? t.status : void 0);
          }),
          o.normalize(),
          i
        );
      }
      function nd(e) {
        return !!(e && e.__CANCEL__);
      }
      function nf(e, t, n) {
        tF.call(this, null == e ? "canceled" : e, tF.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      function nh(e, t, n) {
        let r = n.config.validateStatus;
        !n.status || !r || r(n.status)
          ? e(n)
          : t(
              new tF(
                "Request failed with status code " + n.status,
                [tF.ERR_BAD_REQUEST, tF.ERR_BAD_RESPONSE][
                  Math.floor(n.status / 100) - 4
                ],
                n.config,
                n.request,
                n
              )
            );
      }
      nl.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        tW.reduceDescriptors(nl.prototype, ({ value: e }, t) => {
          let n = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => e,
            set(e) {
              this[n] = e;
            },
          };
        }),
        tW.freezeMethods(nl),
        tW.inherits(nf, tF, { __CANCEL__: !0 });
      var np = function (e, t) {
          let n;
          e = e || 10;
          let r = Array(e),
            o = Array(e),
            i = 0,
            a = 0;
          return (
            (t = void 0 !== t ? t : 1e3),
            function (s) {
              let c = Date.now(),
                l = o[a];
              n || (n = c), (r[i] = s), (o[i] = c);
              let u = a,
                d = 0;
              for (; u !== i; ) (d += r[u++]), (u %= e);
              if (((i = (i + 1) % e) === a && (a = (a + 1) % e), c - n < t))
                return;
              let f = l && c - l;
              return f ? Math.round((1e3 * d) / f) : void 0;
            }
          );
        },
        nm = function (e, t) {
          let n = 0,
            r = 1e3 / t,
            o = null;
          return function () {
            let t = Date.now();
            if (this === !0 || t - n > r)
              return (
                o && (clearTimeout(o), (o = null)),
                (n = t),
                e.apply(null, arguments)
              );
            o ||
              (o = setTimeout(
                () => ((o = null), (n = Date.now()), e.apply(null, arguments)),
                r - (t - n)
              ));
          };
        },
        ny = (e, t, n = 3) => {
          let r = 0,
            o = np(50, 250);
          return nm((n) => {
            let i = n.loaded,
              a = n.lengthComputable ? n.total : void 0,
              s = i - r,
              c = o(s);
            r = i;
            let l = {
              loaded: i,
              total: a,
              progress: a ? i / a : void 0,
              bytes: s,
              rate: c || void 0,
              estimated: c && a && i <= a ? (a - i) / c : void 0,
              event: n,
              lengthComputable: null != a,
            };
            (l[t ? "download" : "upload"] = !0), e(l);
          }, n);
        },
        nb = t9.hasStandardBrowserEnv
          ? (function () {
              let e;
              let t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");
              function r(e) {
                let r = e;
                return (
                  t && (n.setAttribute("href", r), (r = n.href)),
                  n.setAttribute("href", r),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname:
                      "/" === n.pathname.charAt(0)
                        ? n.pathname
                        : "/" + n.pathname,
                  }
                );
              }
              return (
                (e = r(window.location.href)),
                function (t) {
                  let n = tW.isString(t) ? r(t) : t;
                  return n.protocol === e.protocol && n.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        nw = t9.hasStandardBrowserEnv
          ? {
              write(e, t, n, r, o, i) {
                let a = [e + "=" + encodeURIComponent(t)];
                tW.isNumber(n) &&
                  a.push("expires=" + new Date(n).toGMTString()),
                  tW.isString(r) && a.push("path=" + r),
                  tW.isString(o) && a.push("domain=" + o),
                  !0 === i && a.push("secure"),
                  (document.cookie = a.join("; "));
              },
              read(e) {
                let t = document.cookie.match(
                  RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function ng(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? t
            ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
            : e
          : t;
      }
      let nv = (e) => (e instanceof nl ? { ...e } : e);
      function nk(e, t) {
        t = t || {};
        let n = {};
        function r(e, t, n) {
          return tW.isPlainObject(e) && tW.isPlainObject(t)
            ? tW.merge.call({ caseless: n }, e, t)
            : tW.isPlainObject(t)
            ? tW.merge({}, t)
            : tW.isArray(t)
            ? t.slice()
            : t;
        }
        function o(e, t, n) {
          return tW.isUndefined(t)
            ? tW.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function i(e, t) {
          if (!tW.isUndefined(t)) return r(void 0, t);
        }
        function a(e, t) {
          return tW.isUndefined(t)
            ? tW.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function s(n, o, i) {
          return i in t ? r(n, o) : i in e ? r(void 0, n) : void 0;
        }
        let c = {
          url: i,
          method: i,
          data: i,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          withXSRFToken: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          beforeRedirect: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: s,
          headers: (e, t) => o(nv(e), nv(t), !0),
        };
        return (
          tW.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            let i = c[r] || o,
              a = i(e[r], t[r], r);
            (tW.isUndefined(a) && i !== s) || (n[r] = a);
          }),
          n
        );
      }
      var nE = (e) => {
        let t;
        let n = nk({}, e),
          {
            data: r,
            withXSRFToken: o,
            xsrfHeaderName: i,
            xsrfCookieName: a,
            headers: s,
            auth: c,
          } = n;
        if (
          ((n.headers = s = nl.from(s)),
          (n.url = tX(ng(n.baseURL, n.url), e.params, e.paramsSerializer)),
          c &&
            s.set(
              "Authorization",
              "Basic " +
                btoa(
                  (c.username || "") +
                    ":" +
                    (c.password ? unescape(encodeURIComponent(c.password)) : "")
                )
            ),
          tW.isFormData(r))
        ) {
          if (t9.hasStandardBrowserEnv || t9.hasStandardBrowserWebWorkerEnv)
            s.setContentType(void 0);
          else if (!1 !== (t = s.getContentType())) {
            let [e, ...n] = t
              ? t
                  .split(";")
                  .map((e) => e.trim())
                  .filter(Boolean)
              : [];
            s.setContentType([e || "multipart/form-data", ...n].join("; "));
          }
        }
        if (
          t9.hasStandardBrowserEnv &&
          (o && tW.isFunction(o) && (o = o(n)), o || (!1 !== o && nb(n.url)))
        ) {
          let e = i && a && nw.read(a);
          e && s.set(i, e);
        }
        return n;
      };
      let nS = "undefined" != typeof XMLHttpRequest;
      var nC =
        nS &&
        function (e) {
          return new Promise(function (t, n) {
            let r;
            let o = nE(e),
              i = o.data,
              a = nl.from(o.headers).normalize(),
              { responseType: s } = o;
            function c() {
              o.cancelToken && o.cancelToken.unsubscribe(r),
                o.signal && o.signal.removeEventListener("abort", r);
            }
            let l = new XMLHttpRequest();
            function u() {
              if (!l) return;
              let r = nl.from(
                  "getAllResponseHeaders" in l && l.getAllResponseHeaders()
                ),
                o =
                  s && "text" !== s && "json" !== s
                    ? l.response
                    : l.responseText,
                i = {
                  data: o,
                  status: l.status,
                  statusText: l.statusText,
                  headers: r,
                  config: e,
                  request: l,
                };
              nh(
                function (e) {
                  t(e), c();
                },
                function (e) {
                  n(e), c();
                },
                i
              ),
                (l = null);
            }
            l.open(o.method.toUpperCase(), o.url, !0),
              (l.timeout = o.timeout),
              "onloadend" in l
                ? (l.onloadend = u)
                : (l.onreadystatechange = function () {
                    l &&
                      4 === l.readyState &&
                      (0 !== l.status ||
                        (l.responseURL &&
                          0 === l.responseURL.indexOf("file:"))) &&
                      setTimeout(u);
                  }),
              (l.onabort = function () {
                l &&
                  (n(new tF("Request aborted", tF.ECONNABORTED, o, l)),
                  (l = null));
              }),
              (l.onerror = function () {
                n(new tF("Network Error", tF.ERR_NETWORK, o, l)), (l = null);
              }),
              (l.ontimeout = function () {
                let e = o.timeout
                    ? "timeout of " + o.timeout + "ms exceeded"
                    : "timeout exceeded",
                  t = o.transitional || t1;
                o.timeoutErrorMessage && (e = o.timeoutErrorMessage),
                  n(
                    new tF(
                      e,
                      t.clarifyTimeoutError ? tF.ETIMEDOUT : tF.ECONNABORTED,
                      o,
                      l
                    )
                  ),
                  (l = null);
              }),
              void 0 === i && a.setContentType(null),
              "setRequestHeader" in l &&
                tW.forEach(a.toJSON(), function (e, t) {
                  l.setRequestHeader(t, e);
                }),
              tW.isUndefined(o.withCredentials) ||
                (l.withCredentials = !!o.withCredentials),
              s && "json" !== s && (l.responseType = o.responseType),
              "function" == typeof o.onDownloadProgress &&
                l.addEventListener("progress", ny(o.onDownloadProgress, !0)),
              "function" == typeof o.onUploadProgress &&
                l.upload &&
                l.upload.addEventListener("progress", ny(o.onUploadProgress)),
              (o.cancelToken || o.signal) &&
                ((r = (t) => {
                  l &&
                    (n(!t || t.type ? new nf(null, e, l) : t),
                    l.abort(),
                    (l = null));
                }),
                o.cancelToken && o.cancelToken.subscribe(r),
                o.signal &&
                  (o.signal.aborted
                    ? r()
                    : o.signal.addEventListener("abort", r)));
            let d = (function (e) {
              let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
              return (t && t[1]) || "";
            })(o.url);
            if (d && -1 === t9.protocols.indexOf(d)) {
              n(
                new tF("Unsupported protocol " + d + ":", tF.ERR_BAD_REQUEST, e)
              );
              return;
            }
            l.send(i || null);
          });
        };
      let nx = (e, t) => {
          let n,
            r = new AbortController(),
            o = function (e) {
              if (!n) {
                (n = !0), a();
                let t = e instanceof Error ? e : this.reason;
                r.abort(
                  t instanceof tF
                    ? t
                    : new nf(t instanceof Error ? t.message : t)
                );
              }
            },
            i =
              t &&
              setTimeout(() => {
                o(new tF(`timeout ${t} of ms exceeded`, tF.ETIMEDOUT));
              }, t),
            a = () => {
              e &&
                (i && clearTimeout(i),
                (i = null),
                e.forEach((e) => {
                  e &&
                    (e.removeEventListener
                      ? e.removeEventListener("abort", o)
                      : e.unsubscribe(o));
                }),
                (e = null));
            };
          e.forEach(
            (e) => e && e.addEventListener && e.addEventListener("abort", o)
          );
          let { signal: s } = r;
          return (
            (s.unsubscribe = a),
            [
              s,
              () => {
                i && clearTimeout(i), (i = null);
              },
            ]
          );
        },
        nO = function* (e, t) {
          let n,
            r = e.byteLength;
          if (!t || r < t) {
            yield e;
            return;
          }
          let o = 0;
          for (; o < r; ) (n = o + t), yield e.slice(o, n), (o = n);
        },
        nA = async function* (e, t, n) {
          for await (let r of e)
            yield* nO(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
        },
        nR = (e, t, n, r, o) => {
          let i = nA(e, t, o),
            a = 0;
          return new ReadableStream(
            {
              type: "bytes",
              async pull(e) {
                let { done: t, value: o } = await i.next();
                if (t) {
                  e.close(), r();
                  return;
                }
                let s = o.byteLength;
                n && n((a += s)), e.enqueue(new Uint8Array(o));
              },
              cancel: (e) => (r(e), i.return()),
            },
            { highWaterMark: 2 }
          );
        },
        n_ = (e, t) => {
          let n = null != e;
          return (r) =>
            setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
        },
        nT =
          "function" == typeof fetch &&
          "function" == typeof Request &&
          "function" == typeof Response,
        nI = nT && "function" == typeof ReadableStream,
        nM =
          nT &&
          ("function" == typeof TextEncoder
            ? ((l = new TextEncoder()), (e) => l.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
        nP =
          nI &&
          (() => {
            let e = !1,
              t = new Request(t9.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                  return (e = !0), "half";
                },
              }).headers.has("Content-Type");
            return e && !t;
          })(),
        nN =
          nI &&
          !!(() => {
            try {
              return tW.isReadableStream(new Response("").body);
            } catch (e) {}
          })(),
        nB = { stream: nN && ((e) => e.body) };
      nT &&
        ((u = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          nB[e] ||
            (nB[e] = tW.isFunction(u[e])
              ? (t) => t[e]()
              : (t, n) => {
                  throw new tF(
                    `Response type '${e}' is not supported`,
                    tF.ERR_NOT_SUPPORT,
                    n
                  );
                });
        }));
      let nj = async (e) =>
          null == e
            ? 0
            : tW.isBlob(e)
            ? e.size
            : tW.isSpecCompliantForm(e)
            ? (await new Request(e).arrayBuffer()).byteLength
            : tW.isArrayBufferView(e)
            ? e.byteLength
            : (tW.isURLSearchParams(e) && (e += ""), tW.isString(e))
            ? (await nM(e)).byteLength
            : void 0,
        nD = async (e, t) => {
          let n = tW.toFiniteNumber(e.getContentLength());
          return null == n ? nj(t) : n;
        };
      var nL =
        nT &&
        (async (e) => {
          let t,
            n,
            r,
            {
              url: o,
              method: i,
              data: a,
              signal: s,
              cancelToken: c,
              timeout: l,
              onDownloadProgress: u,
              onUploadProgress: d,
              responseType: f,
              headers: h,
              withCredentials: p = "same-origin",
              fetchOptions: m,
            } = nE(e);
          f = f ? (f + "").toLowerCase() : "text";
          let [y, b] = s || c || l ? nx([s, c], l) : [],
            w = () => {
              t ||
                setTimeout(() => {
                  y && y.unsubscribe();
                }),
                (t = !0);
            };
          try {
            if (
              d &&
              nP &&
              "get" !== i &&
              "head" !== i &&
              0 !== (r = await nD(h, a))
            ) {
              let e,
                t = new Request(o, { method: "POST", body: a, duplex: "half" });
              tW.isFormData(a) &&
                (e = t.headers.get("content-type")) &&
                h.setContentType(e),
                t.body && (a = nR(t.body, 65536, n_(r, ny(d)), null, nM));
            }
            tW.isString(p) || (p = p ? "cors" : "omit"),
              (n = new Request(o, {
                ...m,
                signal: y,
                method: i.toUpperCase(),
                headers: h.normalize().toJSON(),
                body: a,
                duplex: "half",
                withCredentials: p,
              }));
            let t = await fetch(n),
              s = nN && ("stream" === f || "response" === f);
            if (nN && (u || s)) {
              let e = {};
              ["status", "statusText", "headers"].forEach((n) => {
                e[n] = t[n];
              });
              let n = tW.toFiniteNumber(t.headers.get("content-length"));
              t = new Response(
                nR(t.body, 65536, u && n_(n, ny(u, !0)), s && w, nM),
                e
              );
            }
            f = f || "text";
            let c = await nB[tW.findKey(nB, f) || "text"](t, e);
            return (
              s || w(),
              b && b(),
              await new Promise((r, o) => {
                nh(r, o, {
                  data: c,
                  headers: nl.from(t.headers),
                  status: t.status,
                  statusText: t.statusText,
                  config: e,
                  request: n,
                });
              })
            );
          } catch (t) {
            if ((w(), t && "TypeError" === t.name && /fetch/i.test(t.message)))
              throw Object.assign(
                new tF("Network Error", tF.ERR_NETWORK, e, n),
                { cause: t.cause || t }
              );
            throw tF.from(t, t && t.code, e, n);
          }
        });
      let nW = { http: null, xhr: nC, fetch: nL };
      tW.forEach(nW, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (e) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      let nF = (e) => `- ${e}`,
        nU = (e) => tW.isFunction(e) || null === e || !1 === e;
      var nz = {
        getAdapter: (e) => {
          let t, n;
          e = tW.isArray(e) ? e : [e];
          let { length: r } = e,
            o = {};
          for (let i = 0; i < r; i++) {
            let r;
            if (
              ((n = t = e[i]),
              !nU(t) && void 0 === (n = nW[(r = String(t)).toLowerCase()]))
            )
              throw new tF(`Unknown adapter '${r}'`);
            if (n) break;
            o[r || "#" + i] = n;
          }
          if (!n) {
            let e = Object.entries(o).map(
                ([e, t]) =>
                  `adapter ${e} ` +
                  (!1 === t
                    ? "is not supported by the environment"
                    : "is not available in the build")
              ),
              t = r
                ? e.length > 1
                  ? "since :\n" + e.map(nF).join("\n")
                  : " " + nF(e[0])
                : "as no adapter specified";
            throw new tF(
              "There is no suitable adapter to dispatch the request " + t,
              "ERR_NOT_SUPPORT"
            );
          }
          return n;
        },
        adapters: nW,
      };
      function nH(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new nf(null, e);
      }
      function nq(e) {
        nH(e),
          (e.headers = nl.from(e.headers)),
          (e.data = nu.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        let t = nz.getAdapter(e.adapter || nt.adapter);
        return t(e).then(
          function (t) {
            return (
              nH(e),
              (t.data = nu.call(e, e.transformResponse, t)),
              (t.headers = nl.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              !nd(t) &&
                (nH(e),
                t &&
                  t.response &&
                  ((t.response.data = nu.call(
                    e,
                    e.transformResponse,
                    t.response
                  )),
                  (t.response.headers = nl.from(t.response.headers)))),
              Promise.reject(t)
            );
          }
        );
      }
      let nV = "1.7.2",
        nQ = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          nQ[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      let nZ = {};
      nQ.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v" +
            nV +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return (n, o, i) => {
          if (!1 === e)
            throw new tF(
              r(o, " has been removed" + (t ? " in " + t : "")),
              tF.ERR_DEPRECATED
            );
          return (
            t &&
              !nZ[o] &&
              ((nZ[o] = !0),
              console.warn(
                r(
                  o,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, o, i)
          );
        };
      };
      var nG = {
        assertOptions: function (e, t, n) {
          if ("object" != typeof e)
            throw new tF("options must be an object", tF.ERR_BAD_OPTION_VALUE);
          let r = Object.keys(e),
            o = r.length;
          for (; o-- > 0; ) {
            let i = r[o],
              a = t[i];
            if (a) {
              let t = e[i],
                n = void 0 === t || a(t, i, e);
              if (!0 !== n)
                throw new tF(
                  "option " + i + " must be " + n,
                  tF.ERR_BAD_OPTION_VALUE
                );
              continue;
            }
            if (!0 !== n)
              throw new tF("Unknown option " + i, tF.ERR_BAD_OPTION);
          }
        },
        validators: nQ,
      };
      let nJ = nG.validators;
      class nK {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new t0(), response: new t0() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (e) {
            if (e instanceof Error) {
              let t;
              Error.captureStackTrace
                ? Error.captureStackTrace((t = {}))
                : (t = Error());
              let n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
              try {
                e.stack
                  ? n &&
                    !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) &&
                    (e.stack += "\n" + n)
                  : (e.stack = n);
              } catch (e) {}
            }
            throw e;
          }
        }
        _request(e, t) {
          let n, r;
          "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = nk(this.defaults, t));
          let { transitional: o, paramsSerializer: i, headers: a } = t;
          void 0 !== o &&
            nG.assertOptions(
              o,
              {
                silentJSONParsing: nJ.transitional(nJ.boolean),
                forcedJSONParsing: nJ.transitional(nJ.boolean),
                clarifyTimeoutError: nJ.transitional(nJ.boolean),
              },
              !1
            ),
            null != i &&
              (tW.isFunction(i)
                ? (t.paramsSerializer = { serialize: i })
                : nG.assertOptions(
                    i,
                    { encode: nJ.function, serialize: nJ.function },
                    !0
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let s = a && tW.merge(a.common, a[t.method]);
          a &&
            tW.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = nl.concat(s, a));
          let c = [],
            l = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) &&
              ((l = l && e.synchronous), c.unshift(e.fulfilled, e.rejected));
          });
          let u = [];
          this.interceptors.response.forEach(function (e) {
            u.push(e.fulfilled, e.rejected);
          });
          let d = 0;
          if (!l) {
            let e = [nq.bind(this), void 0];
            for (
              e.unshift.apply(e, c),
                e.push.apply(e, u),
                r = e.length,
                n = Promise.resolve(t);
              d < r;

            )
              n = n.then(e[d++], e[d++]);
            return n;
          }
          r = c.length;
          let f = t;
          for (d = 0; d < r; ) {
            let e = c[d++],
              t = c[d++];
            try {
              f = e(f);
            } catch (e) {
              t.call(this, e);
              break;
            }
          }
          try {
            n = nq.call(this, f);
          } catch (e) {
            return Promise.reject(e);
          }
          for (d = 0, r = u.length; d < r; ) n = n.then(u[d++], u[d++]);
          return n;
        }
        getUri(e) {
          e = nk(this.defaults, e);
          let t = ng(e.baseURL, e.url);
          return tX(t, e.params, e.paramsSerializer);
        }
      }
      tW.forEach(["delete", "get", "head", "options"], function (e) {
        nK.prototype[e] = function (t, n) {
          return this.request(
            nk(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        tW.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, o) {
              return this.request(
                nk(o || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (nK.prototype[e] = t()), (nK.prototype[e + "Form"] = t(!0));
        });
      class nY {
        constructor(e) {
          let t;
          if ("function" != typeof e)
            throw TypeError("executor must be a function.");
          this.promise = new Promise(function (e) {
            t = e;
          });
          let n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              let r = new Promise((e) => {
                n.subscribe(e), (t = e);
              }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, o) {
              n.reason || ((n.reason = new nf(e, r, o)), t(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          if (this.reason) {
            e(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          let t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        static source() {
          let e;
          let t = new nY(function (t) {
            e = t;
          });
          return { token: t, cancel: e };
        }
      }
      let n$ = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(n$).forEach(([e, t]) => {
        n$[t] = e;
      });
      let nX = (function e(t) {
        let n = new nK(t),
          r = eG(nK.prototype.request, n);
        return (
          tW.extend(r, nK.prototype, n, { allOwnKeys: !0 }),
          tW.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(nk(t, n));
          }),
          r
        );
      })(nt);
      (nX.Axios = nK),
        (nX.CanceledError = nf),
        (nX.CancelToken = nY),
        (nX.isCancel = nd),
        (nX.VERSION = nV),
        (nX.toFormData = tG),
        (nX.AxiosError = tF),
        (nX.Cancel = nX.CanceledError),
        (nX.all = function (e) {
          return Promise.all(e);
        }),
        (nX.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (nX.isAxiosError = function (e) {
          return tW.isObject(e) && !0 === e.isAxiosError;
        }),
        (nX.mergeConfig = nk),
        (nX.AxiosHeaders = nl),
        (nX.formToJSON = (e) => ne(tW.isHTMLForm(e) ? new FormData(e) : e)),
        (nX.getAdapter = nz.getAdapter),
        (nX.HttpStatusCode = n$),
        (nX.default = nX);
      var n0 = n(49431);
      function n1(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function n2(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (e) {
          n(e);
          return;
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function n3(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              n2(i, r, o, a, s, "next", e);
            }
            function s(e) {
              n2(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function n4(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function n5(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function n8(e, t, n) {
        return t && n5(e.prototype, t), n && n5(e, n), e;
      }
      function n6(e) {
        return (n6 = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function n7(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && n9(e, t);
      }
      function n9(e, t) {
        return (n9 =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function re(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      function rt(e) {
        var t = (function () {
          if (
            "undefined" == typeof Reflect ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r,
            o = n6(e);
          if (t) {
            var i = n6(this).constructor;
            r = Reflect.construct(o, arguments, i);
          } else r = o.apply(this, arguments);
          return (n = r) && ("object" === re(n) || "function" == typeof n)
            ? n
            : n1(this);
        };
      }
      function rn(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      }
      var rr = Object.defineProperty,
        ro = function (e, t, n) {
          var r, o;
          return (
            (r = e),
            (o =
              (void 0 === t ? "undefined" : re(t)) != "symbol" ? t + "" : t) in
            r
              ? rr(r, o, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (r[o] = n),
            n
          );
        },
        ri = "connect-session",
        ra = "connect-domains",
        rs = [
          "https://rpc.ankr.com/bsc",
          "https://binance.nodereal.io",
          "https://bscrpc.com",
          "https://bsc-dataseed2.ninicoin.io",
        ],
        rc = (function (e) {
          n7(n, e);
          var t = rt(n);
          function n() {
            return n4(this, n), t.apply(this, arguments);
          }
          return (
            n8(n, [
              {
                key: "getStorageSession",
                value: function () {
                  try {
                    return (0, h.cF)(ri);
                  } catch (e) {}
                  return null;
                },
              },
              {
                key: "setStorageSession",
                value: function () {
                  (0, h.po)(ri, this.session);
                },
              },
              {
                key: "removeStorageSession",
                value: function () {
                  (0, h.Li)(ri);
                },
              },
              {
                key: "manageStorageSession",
                value: function () {
                  this._connected
                    ? this.setStorageSession()
                    : this.removeStorageSession();
                },
              },
            ]),
            n
          );
        })(
          (function (e) {
            n7(n, e);
            var t = rt(n);
            function n() {
              var e;
              return (
                n4(this, n),
                (e = t.call.apply(
                  t,
                  [this].concat(Array.prototype.slice.call(arguments))
                )),
                ro(n1(e), "pending", !1),
                ro(n1(e), "callbacks", new Map()),
                ro(n1(e), "clientMeta"),
                ro(n1(e), "relay"),
                ro(n1(e), "_key", null),
                ro(n1(e), "_clientId", ""),
                ro(n1(e), "_peerId", ""),
                ro(n1(e), "_peerMeta", null),
                ro(n1(e), "_handshakeId", 0),
                ro(n1(e), "_handshakeTopic", ""),
                ro(n1(e), "_connected", !1),
                ro(n1(e), "_accounts", []),
                ro(n1(e), "_chainId", "0x0"),
                e
              );
            }
            return (
              n8(n, [
                {
                  key: "key",
                  get: function () {
                    return this._key ? (0, h.wb)(this._key, !0) : "";
                  },
                  set: function (e) {
                    if (e) {
                      var t = (0, h.y_)(e);
                      this._key = t;
                    }
                  },
                },
                {
                  key: "clientId",
                  get: function () {
                    var e = this._clientId;
                    return (
                      e || (e = this._clientId = (0, h.Vj)()), this._clientId
                    );
                  },
                  set: function (e) {
                    e && (this._clientId = e);
                  },
                },
                {
                  key: "peerId",
                  get: function () {
                    return this._peerId;
                  },
                  set: function (e) {
                    e && (this._peerId = e);
                  },
                },
                {
                  key: "peerMeta",
                  get: function () {
                    return this._peerMeta;
                  },
                  set: function (e) {
                    this._peerMeta = e;
                  },
                },
                {
                  key: "handshakeTopic",
                  get: function () {
                    return this._handshakeTopic;
                  },
                  set: function (e) {
                    e && (this._handshakeTopic = e);
                  },
                },
                {
                  key: "handshakeId",
                  get: function () {
                    return this._handshakeId;
                  },
                  set: function (e) {
                    e && (this._handshakeId = e);
                  },
                },
                {
                  key: "uri",
                  get: function () {
                    return "wc:"
                      .concat(this.handshakeTopic, "@1?bridge=")
                      .concat(this.relay, "&key=")
                      .concat(this.key, "&scene=bid");
                  },
                },
                {
                  key: "chainId",
                  get: function () {
                    return this._chainId;
                  },
                  set: function (e) {
                    this._chainId = e;
                  },
                },
                {
                  key: "accounts",
                  get: function () {
                    return this._accounts;
                  },
                  set: function (e) {
                    this._accounts = e;
                  },
                },
                {
                  key: "connected",
                  get: function () {
                    return this._connected;
                  },
                  set: function (e) {},
                },
                {
                  key: "session",
                  get: function () {
                    return {
                      connected: this.connected,
                      accounts: this.accounts,
                      chainId: this.chainId,
                      relay: this.relay,
                      key: this.key,
                      clientId: this.clientId,
                      clientMeta: this.clientMeta,
                      peerId: this.peerId,
                      peerMeta: this.peerMeta,
                      handshakeId: this.handshakeId,
                      handshakeTopic: this.handshakeTopic,
                    };
                  },
                  set: function (e) {
                    e &&
                      ((this._connected = e.connected),
                      (this.accounts = e.accounts),
                      (this.chainId = e.chainId),
                      (this.relay = e.relay),
                      (this.key = e.key),
                      (this.clientId = e.clientId),
                      (this.clientMeta = e.clientMeta),
                      (this.peerId = e.peerId),
                      (this.peerMeta = e.peerMeta),
                      (this.handshakeId = e.handshakeId),
                      (this.handshakeTopic = e.handshakeTopic));
                  },
                },
              ]),
              n
            );
          })(h.zW)
        );
      function rl() {
        return (rl = n3(function () {
          var e, t;
          return rn(this, function (n) {
            switch (n.label) {
              case 0:
                return [
                  4,
                  Promise.any(
                    rs.map(function (e) {
                      return nX.request({
                        url: e,
                        method: "POST",
                        data: {
                          jsonrpc: "2.0",
                          id: Date.now(),
                          method: "eth_call",
                          params: [
                            {
                              to: "0x76054B318785b588A3164B2A6eA5476F7cBA51e0",
                              data: "0x97b5f450",
                            },
                            "latest",
                          ],
                        },
                      });
                    })
                  ),
                ];
              case 1:
                return (
                  (e = n.sent()),
                  (t = new eZ.vU([
                    "function apiDomains() view returns (string)",
                  ])),
                  [
                    2,
                    (0, n0.Jx)(
                      t.decodeFunctionResult("apiDomains", e.data.result)[0]
                    ).split(","),
                  ]
                );
            }
          });
        })).apply(this, arguments);
      }
      function ru() {
        return (ru = n3(function () {
          return rn(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  (function () {
                    return rl.apply(this, arguments);
                  })(),
                ];
              case 1:
                return [
                  4,
                  Promise.all(
                    e.sent().map(function (e) {
                      var t,
                        n,
                        r = e.split(".").slice(1).join(".");
                      return (
                        (t = "wss://nbstream.".concat(r, "/wallet-connector")),
                        (n = Date.now()),
                        new Promise(function (e) {
                          try {
                            setTimeout(function () {
                              e({ ttl: 0, url: t });
                            }, 5e3);
                            var r = new eB(t);
                            (r.onopen = function () {
                              r.close(), e({ ttl: Date.now() - n, url: t });
                            }),
                              (r.onerror = function () {
                                e({ ttl: 0, url: t });
                              });
                          } catch (n) {
                            e({ ttl: 0, url: t });
                          }
                        })
                      );
                    })
                  ),
                ];
              case 2:
                return [
                  2,
                  e
                    .sent()
                    .filter(function (e) {
                      return e.ttl > 0;
                    })
                    .sort(function (e, t) {
                      return e.ttl - t.ttl;
                    })
                    .map(function (e) {
                      return e.url;
                    }),
                ];
            }
          });
        })).apply(this, arguments);
      }
      var rd = Promise.resolve([]);
      if (!(0, h.UG)()) {
        var rf = (0, h.cF)(ra);
        (rd = Promise.resolve(rf)),
          (rf && 0 !== rf.length) ||
            (rd = (function () {
              return ru.apply(this, arguments);
            })()
              .then(function (e) {
                return (
                  console.log(
                    "\uD83D\uDE80 ~ file: relay.ts:63 ~ .then ~ domains:",
                    e
                  ),
                  (0, h.po)(ra, e),
                  e
                );
              })
              .catch(function () {
                return [];
              }));
      }
      function rh() {
        return (rh = n3(function () {
          var e;
          return rn(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, rd];
              case 1:
                return [
                  2,
                  (0 === (e = t.sent()).length &&
                    e.push("wss://nbstream.binance.com/wallet-connector"),
                  e),
                ];
            }
          });
        })).apply(this, arguments);
      }
      var rp = (function (e) {
        n7(n, e);
        var t = rt(n);
        function n() {
          n4(this, n),
            ro(n1((e = t.call(this))), "transport"),
            ro(n1(e), "lng"),
            (e.clientMeta = (0, h.AN)());
          var e,
            r = e.getStorageSession();
          return (
            r && (e.session = r),
            e.handshakeId && e.subscribeToSessionResponse(e.handshakeId),
            e.initTransport(),
            e.subscribeInternalEvent(),
            e
          );
        }
        return (
          n8(n, [
            {
              key: "request",
              value: function (e) {
                var t = this;
                return n3(function () {
                  return rn(this, function (n) {
                    if (!t.connected)
                      throw new h.zZ(
                        h.rr.PROVIDER_NOT_READY.code,
                        h.rr.PROVIDER_NOT_READY.message
                      );
                    if (0 > h.V7.indexOf(e.method))
                      throw new h.zZ(
                        h.fc.METHOD_NOT_SUPPORT.code,
                        h.fc.METHOD_NOT_SUPPORT.message
                      );
                    switch (e.method) {
                      case "eth_requestAccounts":
                      case "eth_accounts":
                        return [2, t.accounts];
                      case "eth_chainId":
                        return [2, (0, h.uA)(t.chainId)];
                      case "eth_signTransaction":
                      case "eth_sendTransaction":
                      case "eth_sign":
                      case "personal_sign":
                      case "eth_signTypedData":
                      case "eth_signTypedData_v1":
                      case "eth_signTypedData_v2":
                      case "eth_signTypedData_v3":
                      case "eth_signTypedData_v4":
                      case "wallet_switchEthereumChain":
                      case "wallet_watchAsset":
                        return [
                          2,
                          new Promise(function (n, r) {
                            e.id || (e.id = (0, h.o0)()),
                              t.callbacks.set(
                                "response-".concat(e.id),
                                function (e, t) {
                                  e
                                    ? r(
                                        -32050 === e.code ||
                                          -32e3 === e.code ||
                                          1e3 === e.code
                                          ? new h.zZ(
                                              h.fc.REJECT_ERR.code,
                                              h.fc.REJECT_ERR.message
                                            )
                                          : -32603 === e.code
                                          ? new h.zZ(
                                              h.g.INTERNAL_ERR.code,
                                              h.g.INTERNAL_ERR.message
                                            )
                                          : -32600 === e.code ||
                                            -32602 === e.code
                                          ? new h.zZ(
                                              h.fc.INVALID_PARAM.code,
                                              h.fc.INVALID_PARAM.message
                                            )
                                          : e
                                      )
                                    : t
                                    ? n(t.result)
                                    : r(
                                        new h.zZ(
                                          h.fc.MISSING_RESPONSE.code,
                                          h.fc.MISSING_RESPONSE.message
                                        )
                                      );
                                }
                              ),
                              t.sendRequest(e),
                              t.events.emit("call_request_sent");
                          }),
                        ];
                    }
                    return [2];
                  });
                })();
              },
            },
            {
              key: "killSession",
              value: function () {
                if (this.connected) {
                  var e = {
                    id: (0, h.o0)(),
                    method: "wc_sessionUpdate",
                    params: [
                      {
                        approved: !1,
                        chainId: null,
                        networkId: null,
                        accounts: null,
                      },
                    ],
                  };
                  this.sendRequest(e),
                    this.handleSessionDisconnect(eQ.DisconnectAtClient);
                }
              },
            },
            {
              key: "connect",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.chainId,
                  n = e.lng,
                  r = e.showQrCodeModal,
                  o = this;
                return n3(function () {
                  return rn(this, function (e) {
                    return [
                      2,
                      ((o.lng = n),
                      o.connected
                        ? { chainId: o.chainId, accounts: o.accounts }
                        : new Promise(function (e, n) {
                            o.on("modal_closed", function (e) {
                              n(e);
                            }),
                              o.on("session_error", function (e) {
                                n(e);
                              }),
                              o.on("connect", function (t) {
                                e(t);
                              }),
                              o.createSession({
                                chainId: t,
                                showQrCodeModal: r,
                              });
                          })),
                    ];
                  });
                })();
              },
            },
            {
              key: "createSession",
              value: function (e) {
                var t = e.chainId,
                  n = e.showQrCodeModal;
                try {
                  if (this.connected)
                    throw new h.zZ(h.rr.CONNECTED.code, h.rr.CONNECTED.message);
                  if (this.pending || this._handshakeTopic)
                    throw new h.zZ(
                      h.rr.CONNECTING.code,
                      h.rr.CONNECTING.message
                    );
                  (this.pending = !0),
                    (this._key = (0, h.k$)()),
                    (this.handshakeId = (0, h.o0)()),
                    (this.handshakeTopic = (0, h.Vj)());
                  var r = {
                    id: this.handshakeId,
                    method: "wc_sessionRequest",
                    params: [
                      {
                        peerId: this.clientId,
                        peerMeta: this.clientMeta,
                        chainId: t ? Number(t) : null,
                      },
                    ],
                  };
                  this.sendRequest(r, this.handshakeTopic),
                    this.subscribeToSessionResponse(this.handshakeId),
                    this.events.emit("display_uri", { showQrCodeModal: n });
                } catch (e) {
                  this.pending = !1;
                  var o,
                    i = "response-".concat(this.handshakeId);
                  this.callbacks.get(i) && this.callbacks.delete(i);
                  var a = e.message,
                    s = (
                      null != (o = h.zZ) &&
                      "undefined" != typeof Symbol &&
                      o[Symbol.hasInstance]
                        ? !!o[Symbol.hasInstance](e)
                        : e instanceof o
                    )
                      ? e
                      : new h.zZ(
                          h.g.INTERNAL_ERR.code,
                          "".concat(h.g.INTERNAL_ERR.message, ": ").concat(a)
                        );
                  throw (
                    (this.handleRejectSessionConnection(s),
                    h.cM.error(
                      "[binance-w3w] create connection failed: ".concat(a)
                    ),
                    s)
                  );
                }
              },
            },
            {
              key: "initTransport",
              value: function () {
                var e = this;
                return n3(function () {
                  var t, n, r, o;
                  return rn(this, function (i) {
                    switch (i.label) {
                      case 0:
                        (e.transport = new ej({
                          version: 1,
                          subscriptions: [e.clientId],
                        })),
                          e.transport.on("message", function (t) {
                            return e.setIncomingMessages(t);
                          }),
                          e.transport.on("open", function (t) {
                            e.events.emit("transport_open", t);
                          }),
                          e.transport.on("close", function () {
                            e.events.emit("transport_close");
                          }),
                          e.transport.on("error", function (t, n) {
                            e.events.emit("transport_error", t, n);
                          }),
                          (i.label = 1);
                      case 1:
                        if ((i.trys.push([1, 5, , 6]), !e.session.relay))
                          return [3, 2];
                        return e.transport.open([e.session.relay]), [3, 4];
                      case 2:
                        return [
                          4,
                          (function () {
                            return rh.apply(this, arguments);
                          })(),
                        ];
                      case 3:
                        (t = i.sent()), e.transport.open(t), (i.label = 4);
                      case 4:
                        return [3, 6];
                      case 5:
                        throw (
                          ((n = i.sent()),
                          (0, h.Li)(ra),
                          (r = n.message),
                          (o = new h.zZ(
                            h.g.INTERNAL_ERR.code,
                            "".concat(h.g.INTERNAL_ERR.message, ": ").concat(r)
                          )),
                          e.handleRejectSessionConnection(o),
                          o)
                        );
                      case 6:
                        return [2];
                    }
                  });
                })();
              },
            },
            {
              key: "setIncomingMessages",
              value: function (e) {
                if ([this.clientId, this.handshakeTopic].includes(e.topic)) {
                  try {
                    t = JSON.parse(e.payload);
                  } catch (e) {
                    return;
                  }
                  var t,
                    n = this.decrypt(t);
                  if (n) {
                    if ("method" in n && n.method) {
                      this.events.emit(n.method, null, n);
                      return;
                    }
                    var r = n.id,
                      o = "response-".concat(r),
                      i = this.callbacks.get(o);
                    i
                      ? ("error" in n && n.error
                          ? i(new h.zZ(n.error.code, n.error.message), null)
                          : "result" in n && n.result && i(null, n),
                        this.callbacks.delete(o))
                      : h.cM.error(
                          "[binance-w3w] callback id: ".concat(r, " not found")
                        );
                  }
                }
              },
            },
            {
              key: "encrypt",
              value: function (e) {
                var t = this._key;
                return t ? (0, h.HI)(e, t) : null;
              },
            },
            {
              key: "decrypt",
              value: function (e) {
                var t = this._key;
                return t ? (0, h.pe)(e, t) : null;
              },
            },
            {
              key: "sendRequest",
              value: function (e, t) {
                var n = (0, h.sT)(e.method, e.params, e.id),
                  r = this.encrypt(n),
                  o = t || this.peerId,
                  i = JSON.stringify(r);
                this.transport.send(i, o, !0);
              },
            },
            {
              key: "subscribeInternalEvent",
              value: function () {
                var e = this;
                this.on("display_uri", function (t) {
                  !1 !== t.showQrCodeModal &&
                    (eO.open({
                      cb: function () {
                        e.events.emit(
                          "modal_closed",
                          new h.zZ(
                            h.rr.CLOSE_MODAL.code,
                            h.rr.CLOSE_MODAL.message
                          )
                        );
                      },
                      lng: e.lng,
                    }),
                    e.transport.connected
                      ? (e.events.emit("uri_ready", e.uri),
                        e.key && eO.ready(e.uri))
                      : e.transport.retryFailed && eO.fail());
                }),
                  this.on("transport_open", function (t) {
                    (e.relay = t),
                      e.events.emit("uri_ready", e.uri),
                      e.key && eO.ready(e.uri);
                  }),
                  this.on("transport_error", function (e, t) {
                    var n;
                    t
                      ? (function (e) {
                          var t = (0, h.cF)(ra);
                          if (t) {
                            var n = t.filter(function (t) {
                              return t !== e;
                            });
                            (0, h.po)(ra, n);
                          }
                        })((n = t.indexOf("?")) > -1 ? t.slice(0, n) : t)
                      : ((0, h.Li)(ra), eO.fail());
                  }),
                  this.on("modal_closed", function () {
                    var t = "response-".concat(e.handshakeId);
                    e.callbacks.get(t) && e.callbacks.delete(t),
                      e.clearConnectionStatus();
                  }),
                  this.on("connect", function () {
                    (e.pending = !1), eO.close();
                  }),
                  this.on("call_request_sent", function () {
                    (0, h.jm)();
                  }),
                  this.on("wc_sessionUpdate", function (t, n) {
                    if (t) {
                      e.handleSessionResponse();
                      return;
                    }
                    n.params && Array.isArray(n.params)
                      ? e.handleSessionResponse(n.params[0])
                      : n.error && e.handleSessionResponse();
                  });
              },
            },
            {
              key: "subscribeToSessionResponse",
              value: function (e) {
                var t = this;
                this.callbacks.set("response-".concat(e), function (e, n) {
                  if (e) {
                    t.handleSessionResponse();
                    return;
                  }
                  n &&
                    (n.result
                      ? t.handleSessionResponse(n.result)
                      : (n.error && n.error.message,
                        t.handleSessionResponse()));
                });
              },
            },
            {
              key: "handleSessionResponse",
              value: function (e) {
                e
                  ? e.approved
                    ? (this._connected
                        ? (e.chainId && this.setChainId(e.chainId),
                          e.accounts && this.setAddress(e.accounts))
                        : ((this._connected = !0),
                          e.chainId && this.setChainId(e.chainId),
                          e.accounts && this.setAddress(e.accounts),
                          e.peerId && !this.peerId && (this.peerId = e.peerId),
                          e.peerMeta &&
                            !this.peerMeta &&
                            (this.peerMeta = e.peerMeta),
                          this.events.emit("connect", {
                            chainId: this.chainId,
                            accounts: this.accounts,
                          })),
                      this.manageStorageSession())
                    : this.connected
                    ? this.handleSessionDisconnect(eQ.DisconnectAtWallet)
                    : this.handleRejectSessionConnection(
                        new h.zZ(
                          h.rr.REJECT_SESSION.code,
                          h.rr.REJECT_SESSION.message
                        )
                      )
                  : this.handleRejectSessionConnection(
                      new h.zZ(
                        h.rr.REJECT_SESSION.code,
                        h.rr.REJECT_SESSION.message
                      )
                    );
              },
            },
            {
              key: "handleRejectSessionConnection",
              value: function (e) {
                eO.close(),
                  this.clearConnectionStatus(),
                  this.events.emit("session_error", e);
              },
            },
            {
              key: "handleSessionDisconnect",
              value: function (e) {
                this._connected || eO.close(),
                  this.events.emit("disconnect", e),
                  this.clearConnectionStatus();
              },
            },
            {
              key: "clearConnectionStatus",
              value: function () {
                this._connected && (this._connected = !1),
                  this._handshakeId && (this._handshakeId = 0),
                  this._handshakeTopic && (this._handshakeTopic = ""),
                  this._peerId && (this._peerId = ""),
                  this._clientId && (this._clientId = ""),
                  this.pending && (this.pending = !1),
                  this.callbacks.clear(),
                  (this._peerMeta = null),
                  (this._accounts = []),
                  (this._chainId = "0x0"),
                  this.offConnectEvents(),
                  this.removeStorageSession(),
                  this.transport.close();
              },
            },
            {
              key: "offConnectEvents",
              value: function () {
                this.removeListener("connect");
              },
            },
            {
              key: "setChainId",
              value: function (e) {
                var t = (0, h.uA)(e);
                if ("0x0" === t) {
                  this.chainId = t;
                  return;
                }
                "u" > re(this.chainId) &&
                  this.chainId !== t &&
                  this.events.emit("chainChanged", t),
                  (this.chainId = t);
              },
            },
            {
              key: "setAddress",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = e
                    .filter(function (e) {
                      return "string" == typeof e;
                    })
                    .map(function (e) {
                      return e.toLowerCase();
                    })
                    .filter(Boolean);
                JSON.stringify(this.accounts) !== JSON.stringify(t) &&
                  this.events.emit("accountsChanged", t),
                  (this.accounts = t);
              },
            },
          ]),
          n
        );
      })(rc);
      function rm(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ry(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (e) {
          n(e);
          return;
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function rb(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              ry(i, r, o, a, s, "next", e);
            }
            function s(e) {
              ry(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function rw(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function rg(e) {
        return (rg = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function rv(e, t) {
        return (rv =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function rk(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      function rE(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      }
      var rS = Object.defineProperty,
        rC = function (e, t, n) {
          var r, o;
          return (
            (r = e),
            (o =
              (void 0 === t ? "undefined" : rk(t)) != "symbol" ? t + "" : t) in
            r
              ? rS(r, o, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (r[o] = n),
            n
          );
        },
        rx = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && rv(e, t);
          })(i, e);
          var t,
            n,
            r,
            o =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n,
                  r = rg(i);
                if (t) {
                  var o = rg(this).constructor;
                  n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return (e = n) && ("object" === rk(e) || "function" == typeof e)
                  ? e
                  : rm(this);
              });
          function i() {
            var e;
            return (
              !(function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, i),
              rC(rm((e = o.call(this))), "accounts", []),
              rC(rm(e), "coreConnection"),
              e.register(),
              e
            );
          }
          return (
            (n = [
              {
                key: "chainId",
                get: function () {
                  return this.coreConnection
                    ? this.coreConnection.chainId
                    : "0x0";
                },
              },
              {
                key: "connected",
                get: function () {
                  return !!this.coreConnection && this.coreConnection.connected;
                },
              },
              {
                key: "connecting",
                get: function () {
                  return !!this.coreConnection && this.coreConnection.pending;
                },
              },
              {
                key: "open",
                value: function (e) {
                  var t = e.requestChainId,
                    n = e.lng,
                    r = e.showQrCodeModal,
                    o = this;
                  return rb(function () {
                    var e;
                    return rE(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if ((o.register(), o.coreConnection.connected))
                            return [2];
                          return [
                            4,
                            o.coreConnection.connect({
                              chainId: t,
                              lng: n,
                              showQrCodeModal: r,
                            }),
                          ];
                        case 1:
                          return (e = i.sent().accounts), (o.accounts = e), [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "request",
                value: function (e) {
                  var t = this;
                  return rb(function () {
                    return rE(this, function (n) {
                      switch (n.label) {
                        case 0:
                          if (t.connected) return [3, 2];
                          return [4, t.open({})];
                        case 1:
                          n.sent(), (n.label = 2);
                        case 2:
                          return [2, t.coreConnection.request(e)];
                      }
                    });
                  })();
                },
              },
              {
                key: "disconnect",
                value: function () {
                  this.connected &&
                    (this.coreConnection.killSession(),
                    this.onClose(eQ.DisconnectAtClient));
                },
              },
              {
                key: "register",
                value: function () {
                  if (this.coreConnection) return this.coreConnection;
                  (this.coreConnection = new rp()),
                    (this.accounts = this.coreConnection.accounts),
                    this.subscribeEvents();
                },
              },
              {
                key: "subscribeEvents",
                value: function () {
                  var e = this;
                  this.coreConnection.on("chainChanged", function (t) {
                    e.events.emit("chainChanged", t);
                  }),
                    this.coreConnection.on("accountsChanged", function (t) {
                      (e.accounts = t), e.events.emit("accountsChanged", t);
                    }),
                    this.coreConnection.on("uri_ready", function (t) {
                      e.events.emit("uri_ready", t);
                    }),
                    this.coreConnection.on("disconnect", function (t) {
                      e.onClose(t);
                    });
                },
              },
              {
                key: "onClose",
                value: function (e) {
                  (this.coreConnection = null),
                    this.events.emit("disconnect", e);
                },
              },
            ]),
            rw(i.prototype, n),
            r && rw(i, r),
            i
          );
        })(h.zW);
      function rO(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (e) {
          n(e);
          return;
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function rA(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              rO(i, r, o, a, s, "next", e);
            }
            function s(e) {
              rO(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function rR(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function r_(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      function rT(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      }
      var rI = Object.defineProperty,
        rM = function (e, t, n) {
          var r, o;
          return (
            (r = e),
            (o =
              (void 0 === t ? "undefined" : r_(t)) != "symbol" ? t + "" : t) in
            r
              ? rI(r, o, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (r[o] = n),
            n
          );
        },
        rP = (function () {
          var e, t;
          function n(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
              rM(this, "events", new m.Z()),
              rM(this, "signClient"),
              rM(this, "rpc"),
              rM(this, "httpClient"),
              rM(this, "optsChainId"),
              rM(this, "lng"),
              rM(this, "showQrCodeModal"),
              (this.rpc = {
                infuraId: null == e ? void 0 : e.infuraId,
                custom: null == e ? void 0 : e.rpc,
              }),
              (this.lng = (null == e ? void 0 : e.lng) || "en"),
              (this.showQrCodeModal = null == e ? void 0 : e.showQrCodeModal),
              (this.signClient = new rx()),
              (this.optsChainId =
                Number(this.signClient.coreConnection.chainId) ||
                (null == e ? void 0 : e.chainId) ||
                56),
              this.registerEventListeners(),
              (this.httpClient = this.setHttpProvider(this.optsChainId));
          }
          return (
            (e = [
              {
                key: "connected",
                get: function () {
                  return this.signClient.connected;
                },
              },
              {
                key: "connector",
                get: function () {
                  return this.signClient;
                },
              },
              {
                key: "accounts",
                get: function () {
                  return this.signClient.accounts;
                },
              },
              {
                key: "chainId",
                get: function () {
                  return (
                    h.cM.debug("provider get chainId", this.signClient.chainId),
                    this.signClient.chainId
                  );
                },
              },
              {
                key: "rpcUrl",
                get: function () {
                  return this.httpClient.url || "";
                },
              },
              {
                key: "request",
                value: function (e) {
                  var t = this;
                  return rA(function () {
                    var n, r;
                    return rT(this, function (o) {
                      switch (o.label) {
                        case 0:
                          switch (
                            (h.cM.debug("ethereum-provider request", e),
                            e.method)
                          ) {
                            case "eth_requestAccounts":
                              return [3, 1];
                            case "eth_chainId":
                              return [3, 3];
                            case "eth_accounts":
                              return [3, 4];
                            case "wallet_switchEthereumChain":
                              return [3, 5];
                          }
                          return [3, 6];
                        case 1:
                          return [4, t.connect()];
                        case 2:
                          return [2, (o.sent(), t.accounts)];
                        case 3:
                          return [2, t.chainId];
                        case 4:
                          return [2, t.accounts];
                        case 5:
                          return [2, t.switchChain(e)];
                        case 6:
                          return [3, 7];
                        case 7:
                          if (
                            ((n = (0, h.sT)(e.method, e.params || [])),
                            h.V7.includes(e.method))
                          )
                            return [2, t.signClient.request(n)];
                          if (r_(t.httpClient) > "u")
                            throw Error(
                              "Cannot request JSON-RPC method (".concat(
                                e.method,
                                ") without provided rpc url"
                              )
                            );
                          return [4, t.httpClient.request(n)];
                        case 8:
                          if (((r = o.sent()), (0, h.om)(r)))
                            return [2, r.result];
                          throw Error(r.error.message);
                      }
                    });
                  })();
                },
              },
              {
                key: "signMessage",
                value: function (e) {
                  var t = this;
                  return rA(function () {
                    return rT(this, function (n) {
                      switch (n.label) {
                        case 0:
                          if ((h.cM.debug("signMessage", e), t.accounts.length))
                            return [3, 2];
                          return [4, t.enable()];
                        case 1:
                          n.sent(), (n.label = 2);
                        case 2:
                          return [
                            4,
                            t.request({
                              method: "personal_sign",
                              params: [(0, h.OG)(e), t.accounts[0]],
                            }),
                          ];
                        case 3:
                          return [2, n.sent()];
                      }
                    });
                  })();
                },
              },
              {
                key: "sendAsync",
                value: function (e, t) {
                  this.request(e)
                    .then(function (e) {
                      return t(null, e);
                    })
                    .catch(function (e) {
                      return t(e, void 0);
                    });
                },
              },
              {
                key: "setLng",
                value: function (e) {
                  this.lng = e;
                },
              },
              {
                key: "enable",
                value: function (e) {
                  var t = this;
                  return rA(function () {
                    return rT(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, t.connect(e)];
                        case 1:
                          return [2, (n.sent(), t.accounts)];
                      }
                    });
                  })();
                },
              },
              {
                key: "switchChain",
                value: function (e) {
                  var t = this;
                  return rA(function () {
                    var n;
                    return rT(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return (
                            (n = (0, h.sT)(e.method, e.params || [])),
                            [
                              4,
                              Promise.race([
                                t.signClient.request(n),
                                new Promise(function (n) {
                                  return t.on("chainChanged", function (t) {
                                    t === e.params[0].chainId && n(t);
                                  });
                                }),
                              ]),
                            ]
                          );
                        case 1:
                          return [2, r.sent()];
                      }
                    });
                  })();
                },
              },
              {
                key: "connect",
                value: function (e) {
                  var t = this;
                  return rA(function () {
                    var n;
                    return rT(this, function (r) {
                      switch (r.label) {
                        case 0:
                          if (!t.connected) return [3, 1];
                          return h.cM.info("already connected"), [3, 3];
                        case 1:
                          return [
                            4,
                            t.signClient.open({
                              requestChainId:
                                null !==
                                  (n = null == e ? void 0 : e.toString()) &&
                                void 0 !== n
                                  ? n
                                  : t.optsChainId.toString(),
                              lng: t.lng,
                              showQrCodeModal: t.showQrCodeModal,
                            }),
                          ];
                        case 2:
                          r.sent(), (r.label = 3);
                        case 3:
                          return [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "disconnect",
                value: function () {
                  this.connected && this.signClient.disconnect();
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  this.events.on(e, t);
                },
              },
              {
                key: "once",
                value: function (e, t) {
                  this.events.once(e, t);
                },
              },
              {
                key: "removeListener",
                value: function (e, t) {
                  this.events.removeListener(e, t);
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  this.events.off(e, t);
                },
              },
              {
                key: "isWalletConnect",
                get: function () {
                  return !0;
                },
              },
              {
                key: "registerEventListeners",
                value: function () {
                  var e = this;
                  this.signClient.on("accountsChanged", function (t) {
                    e.events.emit("accountsChanged", t);
                  }),
                    this.signClient.on("chainChanged", function (t) {
                      (e.httpClient = e.setHttpProvider((0, h.Jk)(t))),
                        e.events.emit("chainChanged", t);
                    }),
                    this.signClient.on("disconnect", function () {
                      e.events.emit("disconnect");
                    }),
                    this.signClient.on("uri_ready", function (t) {
                      e.events.emit("uri_ready", t);
                    });
                },
              },
              {
                key: "setHttpProvider",
                value: function (e) {
                  var t = (0, h.RM)(e, this.rpc);
                  if (!((void 0 === t ? "undefined" : r_(t)) > "u"))
                    return new O(t);
                },
              },
            ]),
            rR(n.prototype, e),
            t && rR(n, t),
            n
          );
        })(),
        rN = function (e) {
          if ((0, h.bD)()) {
            var t =
              ("undefined" == typeof window ? "undefined" : r_(window)) < "u"
                ? window.ethereum
                : void 0;
            if (t)
              return (
                (t.setLng = function () {}), (t.disconnect = function () {}), t
              );
          }
          return new rP(e);
        },
        rB = rP;
    },
  },
]);
//# sourceMappingURL=5411.16ba53e86a1cc71d.js.map
