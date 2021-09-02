(this["webpackJsonpnasa-apod"] = this["webpackJsonpnasa-apod"] || []).push([
  [0],
  {
    49: function (e, t, c) {},
    50: function (e, t, c) {},
    60: function (e, t, c) {},
    79: function (e, t, c) {},
    80: function (e, t, c) {},
    81: function (e, t, c) {},
    82: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(0),
        a = c(40),
        s = c.n(a),
        i = (c(49), c(17)),
        r = c(4),
        l = (c(50), c(2)),
        d = function () {
          return Object(l.jsx)(l.Fragment, {
            children: Object(l.jsx)("nav", {
              className: "navbar",
              children: Object(l.jsx)(i.b, {
                className: "navbar-logo",
                to: "/",
                children: Object(l.jsx)("img", {
                  src: "https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg",
                  alt: "nasa logo",
                }),
              }),
            }),
          });
        },
        o = c(16),
        j = (c(60), c(21)),
        u = c.n(j);
      function b() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          c = new Date(e);
        return ""
          .concat(t[c.getDay()], " ")
          .concat(c.getDate(), ", ")
          .concat(c.getFullYear());
      }
      var h = c(19);
      c(79), c(80);
      var O = function (e) {
          var t = Object(n.useRef)(null);
          return (
            Object(n.useEffect)(
              function () {
                if (t.current && e) {
                  var c = { rect: void 0, mouseX: void 0 },
                    n = t.current,
                    a = function (e) {
                      if (n) {
                        c.rect || (c.rect = n.getBoundingClientRect()),
                          (c.mouseX = e.clientX);
                        var t = (c.mouseX - c.rect.left) / c.rect.width;
                        n.style.setProperty("--px", t);
                      }
                    };
                  return (
                    n.addEventListener("mousemove", a),
                    function () {
                      n.removeEventListener("mousemove", a);
                    }
                  );
                }
              },
              [e]
            ),
            t
          );
        },
        x = function (e) {
          return e
            ? "https://image.tmdb.org/t/p/original/".concat(e)
            : "./default.png";
        };
      var f = function (e) {
          var t = e.slide,
            c = e.offset,
            n = 0 === c || null,
            a = O(n);
          return Object(l.jsx)(i.b, {
            to: "/movies/detail/".concat(t.id),
            ref: a,
            className: "slide",
            "data-active": n,
            style: { "--offset": c, "--dir": 0 === c ? 0 : c > 0 ? 1 : -1 },
            children: Object(l.jsxs)("div", {
              className: "slideContent",
              children: [
                Object(l.jsx)("div", {
                  className: "img-container",
                  children: Object(l.jsx)("img", {
                    src: x(t.poster_path),
                    alt: t.title,
                  }),
                }),
                Object(l.jsxs)("div", {
                  className: "slideContentInner",
                  children: [
                    Object(l.jsx)("h2", {
                      className: "slideTitle",
                      children: t.title,
                    }),
                    Object(l.jsx)("h3", {
                      className: "slideSubtitle",
                      children: t.release_date,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        m = c(24),
        v = function (e, t) {
          return "PREV" === t.type
            ? Object(m.a)(
                Object(m.a)({}, e),
                {},
                { slideIndex: (e.slideIndex + 1) % e.slides.length }
              )
            : "NEXT" === t.type
            ? Object(m.a)(
                Object(m.a)({}, e),
                {},
                {
                  slideIndex:
                    0 === e.slideIndex ? e.slides.length - 1 : e.slideIndex - 1,
                }
              )
            : void 0;
        },
        p = { slideIndex: 0 },
        g = function () {
          var e = Object(n.useReducer)(v, p),
            t = Object(o.a)(e, 2),
            c = t[0],
            a = t[1],
            s = Object(n.useState)([]),
            i = Object(o.a)(s, 2),
            r = i[0],
            d = i[1],
            j = !1;
          return (
            Object(n.useEffect)(
              function () {
                return (
                  u.a
                    .get(
                      "https://api.themoviedb.org/3/search/movie?api_key=".concat(
                        "77e65c0891516ee117c6954c49c2997e",
                        "&language=en-US&page=1&include_adult=false&query=nasa"
                      ),
                      {
                        headers: {
                          Authorization:
                            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2U2NWMwODkxNTE2ZWUxMTdjNjk1NGM0OWMyOTk3ZSIsInN1YiI6IjYxMTNkNzgyNWM1NjM0MDA1ZGFlOTMzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4bI-pTdMNGdSFj_iPrQrSNpXjsvcZwY6drBC95r_KTI",
                        },
                      }
                    )
                    .then(function (e) {
                      j || (d(e.data.results), (p.slides = r));
                    })
                    .catch(function (e) {
                      return console.log(e);
                    }),
                  function () {
                    j = !0;
                  }
                );
              },
              [r]
            ),
            Object(l.jsxs)("div", {
              className: "slides",
              children: [
                Object(l.jsx)("button", {
                  onClick: function () {
                    return a({ type: "NEXT" });
                  },
                  children: "\u2039",
                }),
                []
                  .concat(Object(h.a)(r), Object(h.a)(r), Object(h.a)(r))
                  .map(function (e, t) {
                    var n = r.length + (c.slideIndex - t);
                    return Object(l.jsx)(f, { slide: e, offset: n }, t);
                  }),
                Object(l.jsx)("button", {
                  onClick: function () {
                    return a({ type: "PREV" });
                  },
                  children: "\u203a",
                }),
              ],
            })
          );
        },
        N = "https://api.nasa.gov/planetary/apod?api_key=".concat(
          "Iy5dgbvHwFL5D4TBrfoLNk4pGxldO2sdPCDwef3u"
        ),
        y = function () {
          var e = Object(n.useState)({}),
            t = Object(o.a)(e, 2),
            c = t[0],
            a = t[1];
          return (
            Object(n.useEffect)(function () {
              u.a
                .get(N)
                .then(function (e) {
                  a(e.data);
                })
                .catch(console.log);
            }, []),
            Object(l.jsxs)("div", {
              className: "hero-container",
              children: [
                Object(l.jsxs)("div", {
                  className: "date-info",
                  children: ["Picture of the Day: ", b(c.date)],
                }),
                Object(l.jsx)("img", {
                  src: c.url,
                  alt: "Foto de la fecha ".concat(c.date),
                }),
                Object(l.jsx)("h2", {
                  className: "movies-title",
                  children: "MOVIES",
                }),
                Object(l.jsx)(g, {}),
              ],
            })
          );
        },
        I = (c(81), c(95)),
        k = c(96),
        w = c(97),
        E = c(98),
        M = c(100),
        S = c(99),
        T = function () {
          var e = Object(n.useState)({}),
            t = Object(o.a)(e, 2),
            c = t[0],
            a = t[1],
            s = Object(r.e)().id;
          return (
            Object(n.useEffect)(
              function () {
                u.a
                  .get(
                    "https://api.themoviedb.org/3/movie/"
                      .concat(s, "?api_key=")
                      .concat("77e65c0891516ee117c6954c49c2997e")
                  )
                  .then(function (e) {
                    a(e.data);
                  });
              },
              [s]
            ),
            Object(l.jsx)(l.Fragment, {
              children: Object(l.jsxs)("div", {
                className: "container",
                children: [
                  Object(l.jsxs)("div", {
                    className: "app",
                    children: [
                      Object(l.jsx)("div", {
                        className: "left-container",
                        children: Object(l.jsx)("img", {
                          src: x(c.poster_path),
                          alt: c.title,
                        }),
                      }),
                      Object(l.jsxs)("div", {
                        className: "right-container",
                        children: [
                          Object(l.jsx)("div", {
                            className: "movie-title",
                            children: Object(l.jsx)("h2", {
                              children: c.title,
                            }),
                          }),
                          Object(l.jsxs)("div", {
                            className: "about",
                            children: [
                              Object(l.jsx)("h4", {
                                children: "What's the movie about?",
                              }),
                              Object(l.jsx)("div", {
                                className: "info",
                                children: Object(l.jsx)("p", {
                                  children: c.overview,
                                }),
                              }),
                            ],
                          }),
                          Object(l.jsx)("div", {
                            className: "info-table",
                            children: Object(l.jsx)(I.a, {
                              children: Object(l.jsxs)(k.a, {
                                children: [
                                  Object(l.jsx)(w.a, {
                                    children: Object(l.jsxs)(E.a, {
                                      children: [
                                        Object(l.jsx)(M.a, {
                                          children: "Released",
                                        }),
                                        Object(l.jsx)(M.a, {
                                          children: "Status",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(l.jsx)(S.a, {
                                    children: Object(l.jsxs)(E.a, {
                                      children: [
                                        Object(l.jsx)(M.a, {
                                          children: c.release_date,
                                        }),
                                        Object(l.jsx)(M.a, {
                                          children: c.status,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(l.jsx)("div", {
                    className: "back",
                    children: Object(l.jsx)(i.b, {
                      to: "/",
                      children: "Back Home",
                    }),
                  }),
                ],
              }),
            })
          );
        },
        J = function () {
          return Object(l.jsxs)(i.a, {
            children: [
              Object(l.jsx)(d, {}),
              Object(l.jsxs)("main", {
                children: [
                  Object(l.jsx)(r.a, { exact: !0, path: "/", component: y }),
                  Object(l.jsx)(r.a, {
                    path: "/movies/detail/:id",
                    component: T,
                  }),
                ],
              }),
            ],
          });
        };
      s.a.render(Object(l.jsx)(J, {}), document.getElementById("root"));
    },
  },
  [[82, 1, 2]],
]);
//# sourceMappingURL=main.9c3dbcc1.chunk.js.map
