(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    87314: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(89990);
        },
      ]);
    },
    57593: function (t, e, n) {
      "use strict";
      n.d(e, {
        H: function () {
          return i;
        },
        l: function () {
          return r;
        },
      });
      let i =
          "https://docs.aperture.finance/docs/technical-docs/api-documentation",
        r =
          "https://opensea.io/collection/aperture-staking?search%5Bowner%5D%5Baddress%5D=";
    },
    89990: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(92228),
        r = n(79570),
        o = n(57593),
        s = n(59426),
        a = n(69987),
        c = n(5632),
        u = n(16405),
        l = n(58694);
      function d() {
        let t = (0, i.Z)([
          "\n  width: 100%;\n  max-width: 840px;\n  min-width: 376px;\n  height: calc(100vh - 189px);\n  min-height: 480px;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (d = function () {
            return t;
          }),
          t
        );
      }
      let p = (0, l.ZP)(a.tuJ).withConfig({ componentId: "sc-35e37534-0" })(
          d()
        ),
        f = () => {
          let t = (0, c.useRouter)(),
            [e, n] = (0, u.useState)(),
            [i, l] = (0, u.useState)(),
            [d, f] = (0, u.useState)();
          return (
            (0, u.useEffect)(() => {
              fetch("".concat((0, s.Yw)(), "getMetricsSinceInception"))
                .then((t) => t.json())
                .then((t) => {
                  n(t.txEnabledCount), l(t.tveUsd), f(t.walletCount);
                })
                .catch((t) => {
                  console.error(t);
                });
            }, []),
            (0, r.jsx)(p, {
              children: (0, r.jsxs)(a.kCb, {
                gap: "lg",
                style: { margin: "auto 0" },
                children: [
                  (0, r.jsxs)(a.tuJ, {
                    gap: "lg",
                    children: [
                      (0, r.jsx)(a.RtU, {
                        title:
                          "ApertureAI’s Intent API: Custom-Defined Workflow Enhancement",
                        description:
                          "Utilize the Aperture API for a streamlined, intent-driven workflow. Tailor your strategy, simplify transactions, and drive success with declarative, user-focused solutions.",
                      }),
                      (0, r.jsx)(a.RtU, {
                        title:
                          "Advanced Liquidity Management with Intent-driven UniV3 Tools",
                        description:
                          "Streamline and elevate your Uniswap and PancakeSwap experience. Effortlessly initiate and manage LP positions, optimize performance through smart rebalancing, strategic fee reinvestment, and effective recurring tactics, all tailored to your investment objectives.",
                      }),
                    ],
                  }),
                  (0, r.jsx)(a.M, {
                    bgImg: "/bg-total.png",
                    totalVolume: i,
                    totalUsers: d,
                    totalTransactions: e,
                  }),
                ],
              }),
            })
          );
        };
      e.default = f;
    },
  },
  function (t) {
    t.O(0, [2888, 179], function () {
      return t((t.s = 87314));
    }),
      (_N_E = t.O());
  },
]);
//# sourceMappingURL=index-6fa3701fd52d02fa.js.map
