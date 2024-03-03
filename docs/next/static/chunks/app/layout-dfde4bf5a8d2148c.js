(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    1682: function (e, r, n) {
      Promise.resolve().then(n.t.bind(n, 3385, 23)),
        Promise.resolve().then(n.bind(n, 4848)),
        Promise.resolve().then(n.bind(n, 3730));
    },
    4848: function (e, r, n) {
      "use strict";
      n.r(r);
      var o = n(3827),
        t = n(703),
        c = n(3668),
        i = n.n(c),
        s = n(8792),
        l = n(7907);
      r.default = () => {
        let e = (0, l.usePathname)();
        return (0, o.jsxs)("header", {
          className: i().header,
          children: [
            (0, o.jsx)("div", {
              className: i().logo,
              children: (0, o.jsx)(t.default, {
                src: "/colors/images/kreattix-colors-logo.svg",
                alt: "",
                width: 180,
                height: 24,
              }),
            }),
            (0, o.jsxs)("ul", {
              className: i().navigation,
              children: [
                (0, o.jsx)("li", {
                  children: (0, o.jsx)(s.default, {
                    className: "link ".concat("/colors" === e ? "active" : ""),
                    href: "/colors",
                    children: "Home",
                  }),
                }),
                (0, o.jsx)("li", {
                  children: (0, o.jsx)(s.default, {
                    className: "link ".concat(
                      "/colors/color-picker" === e ? "active" : ""
                    ),
                    href: "/colors/color-picker",
                    children: "Color Picker",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    2103: function (e, r, n) {
      "use strict";
      n.d(r, {
        v: function () {
          return s;
        },
        y: function () {
          return l;
        },
      });
      var o = n(9055),
        t = n(5972);
      let c = { currentColor: o.wL.red[500] },
        i = (0, t.oM)({
          name: "color",
          initialState: c,
          reducers: {
            setColor: (e, r) => {
              e.currentColor = r.payload;
            },
          },
        }),
        { setColor: s } = i.actions,
        l = i.reducer;
    },
    3730: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          ReduxProvider: function () {
            return l;
          },
        });
      var o = n(3827),
        t = n(828),
        c = n(5972),
        i = n(2103);
      let s = (0, c.xC)({ reducer: { colorReducer: i.y } }),
        l = (e) => {
          let { children: r } = e;
          return (0, o.jsx)(t.zt, { store: s, children: r });
        };
    },
    3385: function () {},
    3668: function (e) {
      e.exports = {
        header: "Header_header__TsQ2I",
        logo: "Header_logo___CXuk",
        navigation: "Header_navigation__y0mCG",
      };
    },
  },
  function (e) {
    e.O(0, [178, 134, 971, 69, 744], function () {
      return e((e.s = 1682));
    }),
      (_N_E = e.O());
  },
]);
