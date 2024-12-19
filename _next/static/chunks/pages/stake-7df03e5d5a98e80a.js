(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8797],
  {
    15103: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/stake",
        function () {
          return t(87757);
        },
      ]);
    },
    89192: function (e, n, t) {
      "use strict";
      t.d(n, {
        B: function () {
          return C;
        },
        Z: function () {
          return P;
        },
      });
      var i = t(92228),
        a = t(79570),
        r = t(62942),
        o = t(28388),
        u = t(2303),
        s = t(15229),
        l = t(92321);
      async function c(e, n, t, i, a) {
        let r = await e.readContract({
          address: t,
          abi: o.IERC20__factory.abi,
          functionName: "allowance",
          args: [n, a],
        });
        return { allowanceBN: r, allowance: (0, s.b)(r, i) };
      }
      var p = t(21154),
        d = t(25590),
        m = t(59426),
        y = t(17625),
        f = t(69987),
        g = t(44850),
        T = t.n(g),
        h = t(16405),
        b = t(58694),
        k = t(66886);
      function w() {
        let e = (0, i.Z)([
          "\n  width: ",
          "px;\n  height: ",
          "px;\n  > circle {\n    stroke: ",
          ";\n  }\n",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      let x = (0, b.ZP)(y.iO).withConfig({ componentId: "sc-f4be3e47-0" })(
        w(),
        (e) => {
          let { loadingWidth: n } = e;
          return n || 20;
        },
        (e) => {
          let { loadingHeight: n } = e;
          return n || 20;
        },
        (e) => {
          let { loadingColor: n } = e;
          return n || "white";
        }
      );
      function v() {
        let e = (0, i.Z)([
          "\n  ",
          ";\n  cursor: ",
          ';\n  padding: 0;\n  padding-inline: 0;\n  font-family: "Roboto Flex";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n',
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      let I = (0, b.ZP)(f.zxk).withConfig({ componentId: "sc-32974dc8-0" })(
          v(),
          (e) => {
            let { btntype: n, theme: t, disabled: i } = e;
            return "success" == n
              ? "\n    background: "
                  .concat(
                    t.colors.global.background.BG3,
                    " !important;\n    color: "
                  )
                  .concat(
                    t.colors.global.success,
                    " !important;\n    border: 2px solid "
                  )
                  .concat(
                    t.colors.global.background.BG3,
                    " !important;\n    opacity: "
                  )
                  .concat(i ? 0.5 : 1, ";\n    :hover {\n        background: ")
                  .concat(
                    t.colors.global.background.BG3,
                    " !important;\n        opacity: "
                  )
                  .concat(i ? 0.5 : 0.8, "\n    }\n  ")
              : "connect" == n
              ? "\n    background: none !important;\n    color: "
                  .concat(
                    t.colors.global.primary,
                    " !important;\n    border: 2px solid "
                  )
                  .concat(
                    t.colors.global.primary,
                    " !important;\n    opacity: "
                  )
                  .concat(
                    i ? 0.3 : 1,
                    ";\n    :hover {\n        background: none !important;\n        opacity: "
                  )
                  .concat(i ? 0.3 : 0.8, "\n    }\n  ")
              : "\n    background: none !important;\n    color: "
                  .concat(
                    t.colors.global.primary,
                    " !important;\n    border: 2px solid "
                  )
                  .concat(
                    t.colors.global.primary,
                    " !important;\n    opacity: "
                  )
                  .concat(
                    i ? 0.5 : 1,
                    ";\n    :hover {\n        background: none !important;\n        opacity: "
                  )
                  .concat(i ? 0.5 : 0.8, "\n    }\n  ");
          },
          (e) => {
            let { disabled: n } = e;
            return n ? "auto" : "pointer";
          }
        ),
        C = (e) => {
          let {
              token: n,
              contractAddress: t,
              amount: i,
              useSpecificAmount: s = !1,
              canBeZero: g = !1,
              approveOnChange: b,
              variant: w = "contained",
              color: v = "primary",
              style: C,
              useNative: P,
              hidden: A,
              loading: R = !1,
              loadingColor: Z,
              loadingWidth: j,
              loadingHeight: M,
            } = e,
            { isConnected: N, address: S } = (0, l.m)(),
            { isChainSupported: E } = (0, r.L)(),
            { addSnackbar: _ } = (0, k.D)(),
            [B, F] = (0, h.useState)(-1),
            [D, O] = (0, h.useState)(void 0),
            U = null == n ? void 0 : n.address,
            L = (0, h.useMemo)(() => {
              let e = s
                ? T().round(
                    T().multiply(i, 10 ** (null == n ? void 0 : n.decimals)),
                    0,
                    T().RoundingModes.UP
                  )
                : m.fV;
              return {
                from: S,
                to: U,
                data: o.IERC20__factory.createInterface().encodeFunctionData(
                  "approve",
                  [t, e]
                ),
              };
            }, [i, t, null == n ? void 0 : n.decimals, U, s, S]),
            {
              data: z,
              isLoading: H,
              mutate: Y,
            } = (function (e, n, t) {
              var i;
              let { address: a, isConnected: o } = (0, l.m)(),
                { networkId: s, publicClient: p } = (0, r.L)(),
                d =
                  o &&
                  s &&
                  a &&
                  s ===
                    (null === (i = p.chain) || void 0 === i ? void 0 : i.id);
              return (0, u.Z)(
                d
                  ? "user-token-allowance-"
                      .concat(a, "-")
                      .concat(e, "-")
                      .concat(t)
                  : null,
                () => c(p, a, e, n, t)
              );
            })(U, n ? n.decimals : 18, t);
          (0, h.useEffect)(() => {
            !H &&
              z &&
              (0, o.getLogger)().debug("Token.ApprovalData", {
                approvalData: z,
              });
          }, [H, z]);
          let {
              ready: W,
              data: q,
              sendTransaction: G,
              isPending: V,
              isSuccess: X,
            } = (0, d.i)(L),
            { data: J, isError: K, isLoading: $ } = (0, p.B)({ hash: D });
          (0, h.useEffect)(() => {
            Y();
          }, [N, E]),
            (0, h.useEffect)(() => {
              !V && X && F(0);
            }, [V, X]),
            (0, h.useEffect)(() => {
              q &&
                (O(q),
                _("Your approve request has been sent.", "completed", void 0, {
                  hash: q,
                  successMsg: "You have successfully approved ".concat(
                    (null == n ? void 0 : n.ticker) || "token"
                  ),
                  failureMsg: "".concat(
                    (null == n ? void 0 : n.ticker) || "Token",
                    " approval failed"
                  ),
                }));
            }, [q]);
          let Q = (0, h.useRef)(null);
          (0, h.useEffect)(() => {
            !$ &&
              J &&
              "success" === J.status &&
              (Q.current && clearTimeout(Q.current),
              (Q.current = setTimeout(() => {
                Y(), O(void 0), F(1);
              }, 500)));
          }, [J, $]),
            (0, h.useEffect)(() => {
              K && (O(void 0), F(1));
            }, [K]),
            (0, h.useEffect)(() => {
              var e;
              N &&
                b(
                  !!P ||
                    0 >=
                      T().compareTo(
                        i,
                        null !== (e = null == z ? void 0 : z.allowance) &&
                          void 0 !== e
                          ? e
                          : "0"
                      )
                );
            }, [z, P, i, N]);
          let ee = (0, h.useMemo)(() => {
              var e;
              return (
                !N ||
                !E ||
                !z ||
                (g ? 0 > T().compareTo(i, "0") : 0 >= T().compareTo(i, "0")) ||
                0 >=
                  T().compareTo(
                    i,
                    null !== (e = null == z ? void 0 : z.allowance) &&
                      void 0 !== e
                      ? e
                      : "0"
                  ) ||
                H ||
                V ||
                0 === B ||
                !n
              );
            }, [N, E, n, i, z, H, V, B]),
            en = (0, h.useMemo)(() => {
              var e;
              if (!N) return "Connect Wallet";
              if (!E) return "Wrong Network";
              if (!n) return "Select Token";
              if (g ? 0 > T().compareTo(i, "0") : 0 >= T().compareTo(i, "0"))
                return "Input Token Amount";
              if (!z || H)
                return (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(f.$jN, {}), " Loading"],
                });
              if (V || 0 === B)
                return (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(f.$jN, {}), " Approving"],
                });
              if (
                0 >=
                T().compareTo(
                  i,
                  null !== (e = null == z ? void 0 : z.allowance) &&
                    void 0 !== e
                    ? e
                    : "0"
                )
              )
                return (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(y.Ol, { width: 20, height: 20 }),
                    "Approved ",
                    null == n ? void 0 : n.ticker,
                  ],
                });
              else return "Approve ".concat(null == n ? void 0 : n.ticker);
            }, [N, E, n, i, z, H, V, B]),
            et = (0, h.useMemo)(() => {
              var e;
              if (!N) return "connect";
              if (
                !E ||
                !n ||
                (g ? 0 > T().compareTo(i, "0") : 0 >= T().compareTo(i, "0"))
              )
                return "";
              if (!z || H) return "";
              if (V || 0 === B) return "";
              if (
                0 >=
                T().compareTo(
                  i,
                  null !== (e = null == z ? void 0 : z.allowance) &&
                    void 0 !== e
                    ? e
                    : "0"
                )
              )
                return "success";
              else return "";
            }, [N, E, n, i, z, H, V, B]);
          return (0, a.jsx)(a.Fragment, {
            children:
              !(P || A) &&
              (0, a.jsx)(I, {
                variant: w,
                size: "lg",
                width: "100%",
                style: C,
                onClick: () => (null == G ? void 0 : G()),
                disabled: ee,
                btntype: et,
                children: R
                  ? (0, a.jsx)(x, {
                      loadingColor: Z,
                      loadingWidth: j,
                      loadingHeight: M,
                    })
                  : en,
              }),
          });
        };
      var P = C;
    },
    57593: function (e, n, t) {
      "use strict";
      t.d(n, {
        H: function () {
          return i;
        },
        l: function () {
          return a;
        },
      });
      let i =
          "https://docs.aperture.finance/docs/technical-docs/api-documentation",
        a =
          "https://opensea.io/collection/aperture-staking?search%5Bowner%5D%5Baddress%5D=";
    },
    87757: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          STAKE_FEATURE_PAUSED: function () {
            return eS;
          },
          default: function () {
            return eE;
          },
        });
      var i = t(92228),
        a = t(79570),
        r = t(16405),
        o = t(89192),
        u = t(14122),
        s = t(44850),
        l = t.n(s),
        c = t(58694);
      function p() {
        let e = (0, i.Z)([
          "\n  font-size: 14px;\n  line-height: 16px;\n  font-weight: 500;\n  padding-block: 12px;\n  &:disabled {\n    background: ",
          ";\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      let d = (0, c.ZP)(u.zxk).withConfig({ componentId: "sc-b92a4ac7-0" })(
          p(),
          (e) => {
            let { theme: n } = e;
            return "".concat(n.colors.global.background.BG2, " !important");
          },
          (e) => {
            let { theme: n, isError: t } = e;
            return "".concat(
              t ? n.colors.global.error : n.colors.global.text.T3,
              " !important"
            );
          }
        ),
        m = (e) => {
          let {
            stakeToken: n,
            stakeAmount: t,
            isStaking: i,
            isStakeError: r,
            insufficientBalance: o,
            onClick: s,
          } = e;
          return (0, a.jsx)(d, {
            variant: "contained",
            color: "secondary",
            width: "100%",
            size: "circle",
            isError: o && !r,
            disabled: i || r || o || !t || 0 === l().compareTo(t, 0),
            onClick: s,
            children:
              o && !r
                ? "Insufficient Aperture Balance"
                : i
                ? (0, a.jsx)(u.$jN, {})
                : "Stake ".concat(n.ticker),
          });
        },
        y = (e) => {
          let {
              stakeToken: n,
              stakeAmount: t,
              isStakeError: i,
              isSupportedNetwork: u,
              insufficientBalance: s,
              contractAddress: l,
            } = e,
            [c, p] = (0, r.useState)(!1),
            d = n.native,
            y = i || s;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              n &&
                t &&
                u &&
                !y &&
                (0, a.jsx)(o.B, {
                  variant: "contained",
                  color: "secondary",
                  style: { fontSize: "14px", lineHeight: "16px" },
                  token: n,
                  contractAddress: l,
                  amount: null != t ? t : "0",
                  approveOnChange: (e) => {
                    p(e);
                  },
                  useNative: d,
                  hidden: c,
                }),
              (y || !t || !u || c) && (0, a.jsx)(m, { ...e }),
            ],
          });
        },
        f = (0, r.memo)(y);
      var g = t(57593),
        T = t(69758),
        h = t(28388),
        b = t(43210),
        k = JSON.parse(
          '[{"type":"constructor","inputs":[{"name":"_aptrToken","type":"address","internalType":"address"},{"name":"_usdcToken","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"MAX_UINT256","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"ONE_HUNDRED_PERCENT","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"ONE_PERCENT","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"approve","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"aptrToken","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IERC20"}],"stateMutability":"view"},{"type":"function","name":"balanceOf","inputs":[{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"claimRewards","inputs":[{"name":"nftTokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"endStake","inputs":[{"name":"nftTokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"getApproved","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"getStakePeriodInfo","inputs":[{"name":"stakePeriod","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"tuple","internalType":"struct ApertureStakingV1.StakePeriodInfo","components":[{"name":"aptrInterestRate","type":"uint256","internalType":"uint256"},{"name":"usdcInterestRate","type":"uint256","internalType":"uint256"},{"name":"stakedAmount","type":"uint256","internalType":"uint256"},{"name":"stakedAmountCap","type":"uint256","internalType":"uint256"},{"name":"gracePeriod","type":"uint256","internalType":"uint256"}]}],"stateMutability":"view"},{"type":"function","name":"getUserStakeNftInfos","inputs":[{"name":"sendersAddress","type":"address","internalType":"address"}],"outputs":[{"name":"userStakeNftInfos","type":"tuple[]","internalType":"struct ApertureStakingV1.StakeNftInfo[]","components":[{"name":"nftTokenId","type":"uint256","internalType":"uint256"},{"name":"stakeNft","type":"tuple","internalType":"struct ApertureStakingV1.StakeNft","components":[{"name":"principal","type":"uint256","internalType":"uint256"},{"name":"startTime","type":"uint256","internalType":"uint256"},{"name":"stakePeriod","type":"uint256","internalType":"uint256"},{"name":"lastClaimTime","type":"uint256","internalType":"uint256"}]},{"name":"lastStakedTime","type":"uint256","internalType":"uint256"},{"name":"timeUntilRedeem","type":"uint256","internalType":"uint256"},{"name":"aptrRewards","type":"uint256","internalType":"uint256"},{"name":"usdcRewards","type":"uint256","internalType":"uint256"}]}],"stateMutability":"view"},{"type":"function","name":"isApprovedForAll","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"ownerOf","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"renounceOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"safeTransferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"safeTransferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setApprovalForAll","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"approved","type":"bool","internalType":"bool"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setStakePeriodInfos","inputs":[{"name":"stakePeriods","type":"uint256[]","internalType":"uint256[]"},{"name":"aptrInterestRates","type":"uint256[]","internalType":"uint256[]"},{"name":"usdcInterestRates","type":"uint256[]","internalType":"uint256[]"},{"name":"stakedAmountCap","type":"uint256[]","internalType":"uint256[]"},{"name":"gracePeriods","type":"uint256[]","internalType":"uint256[]"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setTerminationTimestamp","inputs":[{"name":"newTerminationTimestamp","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"stakeNfts","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"principal","type":"uint256","internalType":"uint256"},{"name":"startTime","type":"uint256","internalType":"uint256"},{"name":"stakePeriod","type":"uint256","internalType":"uint256"},{"name":"lastClaimTime","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"stakePeriodToAptrInterestRate","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"stakePeriodToGracePeriod","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"stakePeriodToStakedAmount","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"stakePeriodToStakedAmountCap","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"stakePeriodToUsdcInterestRate","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"startStake","inputs":[{"name":"amount","type":"uint256","internalType":"uint256"},{"name":"stakePeriod","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"supportsInterface","inputs":[{"name":"interfaceId","type":"bytes4","internalType":"bytes4"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"terminationTimestamp","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"tokenByIndex","inputs":[{"name":"index","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"tokenOfOwnerByIndex","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"index","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"tokenURI","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"totalTokensStaked","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"transferOwnership","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"usdcToken","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IERC20"}],"stateMutability":"view"},{"type":"function","name":"withdrawAll","inputs":[{"name":"recipient","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"approved","type":"address","indexed":true,"internalType":"address"},{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"approved","type":"bool","indexed":false,"internalType":"bool"}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"AddressEmptyCode","inputs":[{"name":"target","type":"address","internalType":"address"}]},{"type":"error","name":"AddressInsufficientBalance","inputs":[{"name":"account","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721EnumerableForbiddenBatchMint","inputs":[]},{"type":"error","name":"ERC721IncorrectOwner","inputs":[{"name":"sender","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721InsufficientApproval","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC721InvalidApprover","inputs":[{"name":"approver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721InvalidOperator","inputs":[{"name":"operator","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721InvalidOwner","inputs":[{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721InvalidReceiver","inputs":[{"name":"receiver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721InvalidSender","inputs":[{"name":"sender","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721NonexistentToken","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC721OutOfBoundsIndex","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"index","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"FailedInnerCall","inputs":[]},{"type":"error","name":"OwnableInvalidOwner","inputs":[{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"OwnableUnauthorizedAccount","inputs":[{"name":"account","type":"address","internalType":"address"}]},{"type":"error","name":"SafeERC20FailedOperation","inputs":[{"name":"token","type":"address","internalType":"address"}]}]'
        );
      let w = "0xF9bbD81Dd8987A91336778A8CE9C2271f2b2D19B",
        x = (0, T.u)(h.ApertureSupportedChainId.ARBITRUM_MAINNET_CHAIN_ID);
      async function v(e) {
        return x.readContract({
          address: w,
          abi: k,
          functionName: "getStakePeriodInfo",
          args: [e],
        });
      }
      async function I() {
        return x.readContract({
          address: w,
          abi: k,
          functionName: "totalTokensStaked",
        });
      }
      async function C() {
        return x.readContract({
          address: w,
          abi: k,
          functionName: "totalSupply",
        });
      }
      async function P(e, n, t, i) {
        return i.writeContract({
          chain: b.y,
          address: w,
          abi: k,
          functionName: "startStake",
          account: t,
          args: [e, n],
        });
      }
      async function A(e, n, t) {
        return t.writeContract({
          chain: b.y,
          address: w,
          abi: k,
          functionName: "claimRewards",
          account: n,
          args: [e],
        });
      }
      async function R(e, n, t) {
        return t.writeContract({
          chain: b.y,
          address: w,
          abi: k,
          functionName: "endStake",
          account: n,
          args: [e],
        });
      }
      async function Z(e) {
        return x.readContract({
          address: w,
          abi: k,
          functionName: "getUserStakeNftInfos",
          args: [e],
        });
      }
      var j = t(5632),
        M = t(3255),
        N = t(92321),
        S = t(47314),
        E = t(42494),
        _ = t(5112),
        B = t(47574),
        F = t(42732);
      function D() {
        let { address: e, isConnected: n } = (0, N.m)();
        return (0, M.ZP)(n && e ? "token-aptr-".concat(e) : null, () => O(e));
      }
      async function O(e) {
        let n = h.ApertureSupportedChainId.ARBITRUM_MAINNET_CHAIN_ID,
          t = (0, T.u)(n),
          i = new _.Token(n, L.address, L.decimals, L.ticker, "Aperture"),
          a = await (0, F.y)(t, e, i),
          r = await (0, E.jq)(n, i);
        return (0, B.OR)(i, n, [i.address], a, r);
      }
      let U = "0x1C986661170c1834db49C3830130D4038eEeb866",
        L = {
          Icon: (0, S.Y)(
            U,
            "APTAI",
            h.ApertureSupportedChainId.ARBITRUM_MAINNET_CHAIN_ID
          ),
          ticker: "APTAI",
          address: U,
          decimals: 6,
          native: !1,
        };
      function z() {
        let e = (0, j.useRouter)(),
          { address: n, isConnected: t } = (0, N.m)(),
          { data: i } = D(),
          a = t && n && !!i && e.pathname.startsWith("/stake");
        return (0, M.ZP)(a ? "user-stake-info" : null, () => H(i));
      }
      let H = async (e) => {
          let n = Math.floor(Date.now() / 1e3),
            t = await v(2592e3),
            i = await v(5184e3),
            a = await v(7776e3),
            r = l().divide(await I(), 1e6, 6),
            o = await C(),
            u = W(n);
          return {
            stakePeriods: [
              Y(30, t, e.price),
              Y(60, i, e.price),
              Y(90, a, e.price),
            ],
            averageAmount: l().compareTo(o, 0) > 0 ? l().divide(r, o, 6) : "0",
            totalAmount: r,
            liquidityPercentage: l().divide(l().multiply(r, 100), u, 2),
          };
        },
        Y = (e, n, t) => {
          let i =
              l().compareTo(n.stakedAmountCap, 1e15) > 0
                ? 1e15
                : n.stakedAmountCap,
            a = l().divide(l().subtract(i, n.stakedAmount), 1e6, 2);
          return {
            days: e,
            APR: [
              { percent: l().divide(n.aptrInterestRate, 1e6, 0), unit: "APTAI" },
              {
                percent:
                  l().compareTo(t, 0) > 0
                    ? l().divide(l().divide(n.usdcInterestRate, 1e6, 6), t, 0)
                    : "-",
                unit: "USDC",
              },
            ],
            stakeCap: l().compareTo(a, 0) > 0 ? a : "0",
            stakePeriod: 86400 * e,
            gracePeriod: Number(n.gracePeriod),
          };
        },
        W = (e) =>
          e < 1717149600
            ? 0
            : (0.061 +
                (e > 1732701600 ? 0.00475 * ((e - 1732701600) / 2592e3) : 0) +
                0.005000000000000001 +
                (e > 1724925600
                  ? 0.005277777777777778 * ((e - 1724925600) / 2592e3)
                  : 0) +
                0.018850000000000002 +
                0.011938333333333334 * ((e - 1717149600) / 2592e3) +
                0.006 +
                0.0037999999999999996 * ((e - 1717149600) / 2592e3) +
                (e > 1740477600
                  ? (0.2 / 24) * ((e - 1740477600) / 2592e3)
                  : 0)) *
              1e9;
      var q = t(17625);
      function G() {
        let { address: e, isConnected: n } = (0, N.m)(),
          { data: t, isLoading: i } = z(),
          a = (0, j.useRouter)(),
          r = n && e && !i && !!t && a.pathname.startsWith("/stake");
        return (0, M.ZP)(r ? "user-stake-positions-".concat(e) : null, () =>
          V(e, null == t ? void 0 : t.stakePeriods)
        );
      }
      let V = async (e, n) => {
        let t = await Z(e);
        return t.map((e) => ({
          positionId: e.nftTokenId,
          token: {
            Icon: q.B9,
            ticker: "APTAI",
            amount: l().divide(e.stakeNft.principal, 1e6, 6),
          },
          APR: n[Number(e.stakeNft.stakePeriod) / 2592e3 - 1].APR,
          stakeReward: [
            {
              Icon: q.B9,
              ticker: "APTAI",
              amount: l().divide(e.aptrRewards, 1e6, 6),
            },
            {
              Icon: q.nW,
              ticker: "USDC",
              amount: l().divide(e.usdcRewards, 1e6, 6),
            },
          ],
          lastStakedTime: Number(e.lastStakedTime),
          stakePeriod: Number(e.stakeNft.stakePeriod),
          gracePeriod:
            n[Number(e.stakeNft.stakePeriod) / 2592e3 - 1].gracePeriod,
        }));
      };
      var X = t(69987),
        J = t(92467),
        K = t(66886);
      function $() {
        let e = (0, i.Z)([
          "\n  display: flex;\n  margin-top: 16px;\n  gap: ",
          ";\n",
        ]);
        return (
          ($ = function () {
            return e;
          }),
          e
        );
      }
      function Q() {
        let e = (0, i.Z)(["\n  font-size: 16px;\n  line-height: 20px;\n"]);
        return (
          (Q = function () {
            return e;
          }),
          e
        );
      }
      let ee = c.ZP.div.withConfig({ componentId: "sc-7483e7fe-0" })(
          $(),
          (e) => {
            let { theme: n } = e;
            return n.spacing.md;
          }
        ),
        en = (0, c.ZP)(X.zxk).withConfig({ componentId: "sc-7483e7fe-1" })(Q()),
        et = (e) => {
          let {
              token: n,
              days: t,
              APR: i,
              share: o,
              stakeStart: u,
              stakeFinish: s,
              onClose: c,
            } = e,
            { showModal: p } = (0, X.ddY)(),
            { addSnackbar: d } = (0, K.D)(),
            { data: m } = (0, J.p)(),
            { address: y } = (0, N.m)(),
            { mutate: f } = (0, F.u)(),
            { mutate: T } = z(),
            { mutate: h } = G(),
            [b, k] = (0, r.useState)(!1),
            w = (0, r.useRef)(null),
            x = () => {
              k(!0),
                u(),
                P(Number(l().multiply(n.amount, 1e6)), 86400 * t, y, m)
                  .then((e) => {
                    w.current && clearTimeout(w.current),
                      (w.current = setTimeout(async () => {
                        await f(),
                          await T(),
                          await h(),
                          k(!1),
                          s(!0),
                          p(X.x5u, {
                            token: n,
                            bonus: Math.floor(Number(n.amount) / 1e3),
                            bonusLink: g.l + y,
                          });
                      }, 500));
                  })
                  .catch((e) => {
                    d(
                      e.message.includes("reject")
                        ? "User rejected the transaction."
                        : "Failed to stake tokens.",
                      "failed"
                    ),
                      k(!1),
                      s(!1);
                  });
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(X.YT7, { token: n, days: t, APR: i, share: o }),
              (0, a.jsxs)(ee, {
                children: [
                  (0, a.jsx)(en, {
                    width: "100%",
                    variant: "contained",
                    color: "default",
                    size: "lg",
                    onClick: c,
                    children: "Cancel",
                  }),
                  (0, a.jsx)(en, {
                    onClick: x,
                    disabled: b,
                    variant: "contained",
                    color: "secondary",
                    size: "lg",
                    width: "100%",
                    children: b ? (0, a.jsx)(X.$jN, {}) : "Yes, Stake",
                  }),
                ],
              }),
            ],
          });
        };
      var ei = t(90144),
        ea = t(62942),
        er = t(15420),
        eo = t(75282);
      function eu() {
        let e = (0, i.Z)(["\n  width: 532px;\n  gap: ", ";\n"]);
        return (
          (eu = function () {
            return e;
          }),
          e
        );
      }
      function es() {
        let e = (0, i.Z)(["\n  color: ", ";\n"]);
        return (
          (es = function () {
            return e;
          }),
          e
        );
      }
      let el = (0, c.ZP)(X.tuJ).withConfig({ componentId: "sc-b8e29385-0" })(
          eu(),
          (e) => {
            let { theme: n } = e;
            return n.spacing.md;
          }
        ),
        ec = (0, c.ZP)(X.OR8).withConfig({ componentId: "sc-b8e29385-1" })(
          es(),
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T2;
          }
        ),
        ep = (e) => {
          let { positions: n } = e,
            { network: t } = (0, ea.L)(),
            { showModal: i, hideModal: o } = (0, X.ddY)(),
            { addSnackbar: u } = (0, K.D)(),
            { data: s } = (0, J.p)(),
            { address: c } = (0, N.m)(),
            { mutate: p } = z(),
            { mutate: d } = G(),
            [m, y] = (0, r.useState)(-1n),
            [f, g] = (0, r.useState)(-1n),
            [T, b] = (0, r.useState)(-1n),
            { switchChain: k, isError: w, error: x } = (0, eo.o)(),
            v = t === X.HLD.ARBITRUM,
            I = () => {
              i(ei.u, {
                switchToChain: X.HLD.ARBITRUM,
                onclose: () => {
                  o(),
                    null == k ||
                      k({
                        chainId:
                          h.ApertureSupportedChainId.ARBITRUM_MAINNET_CHAIN_ID,
                      });
                },
              });
            };
          (0, r.useEffect)(() => {
            w &&
              (console.log("Failed to switch network", x),
              u("Your switch network request has failed", "failed"));
          }, [w]);
          let C = (e) => {
              y(e.positionId),
                A(e.positionId, c, s)
                  .then(async (n) => {
                    g(e.positionId),
                      y(-1n),
                      u("Reward tokens has been claimed!", "completed");
                  })
                  .catch((e) => {
                    u(
                      e.message.includes("reject")
                        ? "User rejected the transaction."
                        : "Failed to claim reward tokens.",
                      "failed"
                    ),
                      y(-1n);
                  });
            },
            P = (0, r.useRef)(null),
            Z = (e) => {
              b(e.positionId),
                R(e.positionId, c, s)
                  .then((n) => {
                    P.current && clearTimeout(P.current),
                      (P.current = setTimeout(async () => {
                        await p(),
                          await d(),
                          b(-1n),
                          i(X.TFo, {
                            tokens: [
                              {
                                Icon: q.B9,
                                ticker: "APTAI",
                                amount: l().add(
                                  e.token.amount,
                                  e.stakeReward[0].amount
                                ),
                              },
                              {
                                Icon: q.nW,
                                ticker: "USDC",
                                amount: e.stakeReward[1].amount,
                              },
                            ],
                          });
                      }, 500));
                  })
                  .catch((e) => {
                    u(
                      e.message.includes("reject")
                        ? "User rejected the transaction."
                        : "Failed to redeem all tokens.",
                      "failed"
                    ),
                      b(-1n);
                  });
            };
          return (0, a.jsx)(el, {
            children:
              n.length > 0
                ? n.map((e) =>
                    (0, a.jsx)(
                      X.dfx,
                      {
                        isStakePaused: eS,
                        isClaimingRewards: m === e.positionId,
                        isRewardsClaimed: f === e.positionId,
                        isRedeemingAll: T === e.positionId,
                        onClaim: () => (v ? C(e) : I()),
                        onRedeemAll: () => (v ? Z(e) : I()),
                        ...e,
                      },
                      Number(e.positionId)
                    )
                  )
                : (0, a.jsx)(ec, {
                    children: "You have 0 APTAI staked currently.",
                  }),
          });
        };
      var ed = t(80631),
        em = t(88176),
        ey = t(33504);
      function ef() {
        let e = (0, i.Z)([
          "\n  width: 100%;\n  height: calc(100vh - 102px);\n  margin: auto;\n  gap: 24px;\n  align-items: center;\n  justify-content: center;\n  font-family: Roboto Flex;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  color: ",
          ";\n  text-align: center;\n\n  > svg,\n  path {\n    width: 70px;\n    height: 60px;\n    fill: ",
          ";\n  }\n",
        ]);
        return (
          (ef = function () {
            return e;
          }),
          e
        );
      }
      function eg() {
        let e = (0, i.Z)(["\n  margin-top: 30px;\n"]);
        return (
          (eg = function () {
            return e;
          }),
          e
        );
      }
      function eT() {
        let e = (0, i.Z)([
          "\n  flex: 1;\n  width: 100%;\n  height: calc(100vh - 102px);\n  max-width: 1080px;\n  z-index: 1;\n",
        ]);
        return (
          (eT = function () {
            return e;
          }),
          e
        );
      }
      function eh() {
        let e = (0, i.Z)([
          "\n  margin-top: 20px;\n  padding-bottom: 30px;\n  justify-content: center;\n  gap: 80px;\n  width: 100%;\n  max-width: calc(100vw * 0.75);\n",
        ]);
        return (
          (eh = function () {
            return e;
          }),
          e
        );
      }
      function eb() {
        let e = (0, i.Z)(["\n  gap: ", ";\n"]);
        return (
          (eb = function () {
            return e;
          }),
          e
        );
      }
      function ek() {
        let e = (0, i.Z)([
          "\n  font-weight: 500;\n  font-family: Dunbar Tall;\n  color: ",
          ";\n",
        ]);
        return (
          (ek = function () {
            return e;
          }),
          e
        );
      }
      function ew() {
        let e = (0, i.Z)(["\n  padding-top: 24px;\n  max-width: 310px;\n"]);
        return (
          (ew = function () {
            return e;
          }),
          e
        );
      }
      function ex() {
        let e = (0, i.Z)([
          '\n  font-family: "Roboto Flex";\n  font-size: 14px;\n  line-height: 16px;\n  color: ',
          ";\n",
        ]);
        return (
          (ex = function () {
            return e;
          }),
          e
        );
      }
      function ev() {
        let e = (0, i.Z)([
          '\n  font-family: "Roboto Flex";\n  font-size: 14px;\n  line-height: 16px;\n  font-weight: 500;\n  background: ',
          ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: ",
          ";\n",
        ]);
        return (
          (ev = function () {
            return e;
          }),
          e
        );
      }
      let eI = (0, c.ZP)(em.tu).withConfig({ componentId: "sc-6776239e-0" })(
          ef(),
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T1;
          },
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T1;
          }
        ),
        eC = c.ZP.div.withConfig({ componentId: "sc-6776239e-1" })(eg()),
        eP = (0, c.ZP)(em.tu).withConfig({ componentId: "sc-6776239e-2" })(
          eT()
        ),
        eA = (0, c.ZP)(em.kC).withConfig({ componentId: "sc-6776239e-3" })(
          eh()
        ),
        eR = (0, c.ZP)(em.tu).withConfig({ componentId: "sc-6776239e-4" })(
          eb(),
          (e) => {
            let { theme: n } = e;
            return n.spacing.xl;
          }
        ),
        eZ = (0, c.ZP)(u.iHY).withConfig({ componentId: "sc-6776239e-5" })(
          ek(),
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T1;
          }
        ),
        ej = (0, c.ZP)(em.tu).withConfig({ componentId: "sc-6776239e-6" })(
          ew()
        ),
        eM = c.ZP.div.withConfig({ componentId: "sc-6776239e-7" })(
          ex(),
          (e) => {
            let { theme: n, color: t } = e;
            return null != t ? t : n.colors.global.text.T1;
          }
        ),
        eN = c.ZP.div.withConfig({ componentId: "sc-6776239e-8" })(
          ev(),
          (e) => {
            let { theme: n } = e;
            return n.colors.global.background.Gradient2;
          },
          (e) => {
            let { theme: n } = e;
            return n.colors.transparent.transparent;
          }
        ),
        eS = !0;
      function eE() {
        var e, n, t;
        let i = (0, c.Fg)(),
          { showModal: o, hideModal: s } = (0, u.ddY)(),
          { address: p } = (0, N.m)(),
          [d, m] = (0, r.useState)(""),
          [y, g] = (0, r.useState)(0),
          { data: T, isLoading: b } = (0, er.d)(),
          { data: k, isLoading: x } = D(),
          { data: v, isLoading: I } = z(),
          { data: C, isLoading: P } = G(),
          [A, R] = (0, r.useState)(!1),
          { network: Z } = (0, ea.L)(),
          j = Z === ey.HL.ARBITRUM,
          { switchChain: M, isError: S, error: E } = (0, eo.o)(),
          { addSnackbar: _ } = (0, K.D)(),
          B = () => {
            o(ei.u, {
              switchToChain: ey.HL.ARBITRUM,
              onclose: () => {
                s(),
                  null == M ||
                    M({
                      chainId:
                        h.ApertureSupportedChainId.ARBITRUM_MAINNET_CHAIN_ID,
                    });
              },
            });
          };
        (0, r.useEffect)(() => {
          S &&
            (console.log("Failed to switch network", E),
            _("Your switch network request has failed", "failed"));
        }, [S]);
        let F =
            null !==
              (t =
                null == v
                  ? void 0
                  : null === (e = v.stakePeriods) || void 0 === e
                  ? void 0
                  : null === (n = e[y]) || void 0 === n
                  ? void 0
                  : n.stakeCap) && void 0 !== t
              ? t
              : "0",
          O = l().compareTo(d, F) > 0,
          U = l().compareTo(d, null == k ? void 0 : k.amount) > 0,
          H = () => {
            o(u.NMS, {
              padding: 20,
              options:
                null == v
                  ? void 0
                  : v.stakePeriods.map((e, n) => ({
                      ...e,
                      selected: n === y,
                      onClick: () => {
                        g(n), s();
                      },
                    })),
            });
          },
          Y = () => {
            var e;
            let { days: n, APR: t } = null == v ? void 0 : v.stakePeriods[y];
            o(et, {
              padding: 20,
              token: { Icon: q.B9, ticker: "APTAI", amount: d },
              days: n,
              APR: t,
              share: l().divide(
                l().multiply(d, 100),
                l().add(
                  null !== (e = v.totalAmount) && void 0 !== e ? e : 0,
                  d
                ),
                3
              ),
              stakeStart: () => R(!0),
              stakeFinish: (e) => {
                e && m(""), R(!1);
              },
            });
          };
        return (
          !!T &&
          !(null == T ? void 0 : T.isRestricted) &&
          (p
            ? b || x || I || P || !T || !k || !v || !C
              ? (0, a.jsx)(eP, {
                  alignItems: "center",
                  justifyContent: "center",
                  children: (0, a.jsx)(ed.aN, {
                    fill: i.colors.global.text.T1,
                  }),
                })
              : (0, a.jsxs)(eA, {
                  children: [
                    (0, a.jsxs)(eR, {
                      children: [
                        (0, a.jsx)(eZ, { children: "Stake dashboard" }),
                        (0, a.jsx)(ep, { positions: C }),
                      ],
                    }),
                    (0, a.jsxs)(ej, {
                      gap: 20,
                      children: [
                        !eS &&
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsxs)(em.tu, {
                                gap: "md",
                                children: [
                                  (0, a.jsx)(u.zxP, {
                                    title: "Stake Amount",
                                    token: {
                                      Icon: q.B9,
                                      ticker: "APTAI",
                                      amount: null == k ? void 0 : k.amount,
                                      price: null == k ? void 0 : k.price,
                                    },
                                    stakeCap: F,
                                    value: d,
                                    showMax: !0,
                                    showBalance: !0,
                                    onValueChange: (e) => m(e),
                                    isError: U,
                                    errorMsg: O
                                      ? "Staking amount exceeds remaining staking limit of ".concat(
                                          (0, ey.LH)(F, 2),
                                          "."
                                        )
                                      : "",
                                  }),
                                  !O &&
                                    (0, a.jsxs)(em.kC, {
                                      justifyContent: "space-between",
                                      children: [
                                        (0, a.jsx)(eM, {
                                          color: i.colors.global.text.T2,
                                          children: "Remaining Stake Limit",
                                        }),
                                        (0, a.jsxs)(eM, {
                                          children: [(0, ey.LH)(F, 2), " APTAI"],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (null == v ? void 0 : v.stakePeriods) &&
                                (0, a.jsxs)(em.tu, {
                                  gap: "md",
                                  children: [
                                    (0, a.jsxs)(em.kC, {
                                      gap: "sm",
                                      children: [
                                        (0, a.jsx)(eM, {
                                          children: "Stake Period",
                                        }),
                                        (0, a.jsx)(u.Obc, {
                                          content:
                                            "USDC APR is calculated based on the current price of APTAI token.",
                                          iconSize: 14,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)(u.UCz, {
                                      days:
                                        null == v
                                          ? void 0
                                          : v.stakePeriods[y].days,
                                      APR:
                                        null == v
                                          ? void 0
                                          : v.stakePeriods[y].APR,
                                      onClick: H,
                                    }),
                                  ],
                                }),
                              (0, a.jsxs)(em.tu, {
                                gap: "md",
                                children: [
                                  (0, a.jsx)(eN, {
                                    children:
                                      "Stake now to earn a bonus Aperture NFT!",
                                  }),
                                  (0, a.jsx)(f, {
                                    stakeToken: L,
                                    stakeAmount: d,
                                    contractAddress: w,
                                    isStaking: A,
                                    isStakeError: O,
                                    isSupportedNetwork: j,
                                    insufficientBalance: U,
                                    onClick: () => (j ? Y() : B()),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (0, a.jsx)(u.Wp7, {
                          token: {
                            Icon: q.B9,
                            ticker: "APTAI",
                            price: null == k ? void 0 : k.price,
                          },
                          averageAmount: v.averageAmount,
                          totalAmount: v.totalAmount,
                          percentage: v.liquidityPercentage,
                        }),
                      ],
                    }),
                  ],
                })
            : (0, a.jsxs)(eI, {
                children: [
                  (0, a.jsx)(q.jY, {}),
                  (0, a.jsx)(eC, {
                    children: "Connect wallet and select correct network.",
                  }),
                ],
              }))
        );
      }
    },
    80631: function (e, n, t) {
      "use strict";
      t.d(n, {
        AX: function () {
          return z;
        },
        Dx: function () {
          return Z;
        },
        OA: function () {
          return U;
        },
        Rw: function () {
          return O;
        },
        W2: function () {
          return M;
        },
        WA: function () {
          return L;
        },
        Wh: function () {
          return D;
        },
        X2: function () {
          return N;
        },
        _r: function () {
          return B;
        },
        _z: function () {
          return E;
        },
        aN: function () {
          return W;
        },
        c5: function () {
          return Y;
        },
        c_: function () {
          return H;
        },
        cs: function () {
          return _;
        },
        eN: function () {
          return j;
        },
        mK: function () {
          return S;
        },
        rl: function () {
          return F;
        },
        s0: function () {
          return R;
        },
      });
      var i = t(92228),
        a = t(17625),
        r = t(69987),
        o = t(58694),
        u = t(78545);
      function s() {
        let e = (0, i.Z)([
          '\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: "Roboto Flex";\n',
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        let e = (0, i.Z)([
          "\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        let e = (0, i.Z)([
          '\n  width: 100%;\n  font-weight: 500;\n  font-family: "Dunbar Tall";\n  text-align: start;\n  color: ',
          ";\n",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        let e = (0, i.Z)([
          "\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: ",
          ";\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        let e = (0, i.Z)([
          "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        let e = (0, i.Z)([
          "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: ",
          ";\n",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        let e = (0, i.Z)([
          "\n  margin-top: 20px;\n  align-items: center;\n  gap: ",
          ";\n  width: 100%;\n  max-width: calc(100vw * 0.75);\n  padding-bottom: 30px;\n",
        ]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        let e = (0, i.Z)([
          "\n  width: 100%;\n  height: 276px;\n  font-weight: 500;\n  border-radius: ",
          ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: ",
          ";\n  border: 1px solid ",
          ";\n  color: ",
          ";\n  > svg,\n  path {\n    fill: ",
          ";\n  }\n  ",
          "\n",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        let e = (0, i.Z)([
          "\n  padding: ",
          ";\n  background: ",
          ";\n  color: ",
          ";\n  border: ",
          ";\n  border-radius: ",
          ";\n  box-sizing: border-box;\n  ",
          "\n",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function T() {
        let e = (0, i.Z)(["\n  width: 100%;\n"]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        let e = (0, i.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  gap: ",
          ";\n  color: ",
          ";\n",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function b() {
        let e = (0, i.Z)(["\n  color: ", ";\n"]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function k() {
        let e = (0, i.Z)([
          "\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 500;\n  color: ",
          ";\n",
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        let e = (0, i.Z)([
          "\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        let e = (0, i.Z)([
          "\n  width: 160px;\n  align-items: flex-end;\n  justify-content: center;\n  gap: ",
          ";\n  color: ",
          ";\n",
        ]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        let e = (0, i.Z)([
          "\n  height: 1px;\n  width: 100%;\n  background-color: ",
          ";\n  align-self: stretch;\n",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function I() {
        let e = (0, i.Z)([
          '\n  ::after {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    content: "";\n    width: 1px;\n    height: 100%;\n    background-color: ',
          ";\n  }\n",
        ]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function C() {
        let e = (0, i.Z)([
          "\n  text-align: right;\n  color: ",
          ";\n  margin-top: -8px;\n",
        ]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      function P() {
        let e = (0, i.Z)([
          "\n  height: ",
          "px;\n  width: ",
          "px;\n  flex: 1 1 0%;\n  display: flex;\n  align-items: center;\n  gap: ",
          ";\n",
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        let e = (0, i.Z)([
          "\n  height: 80px;\n  width: 80px;\n  animation: rotation infinite 3s linear;\n\n  @keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n\n    to {\n      transform: rotate(360deg);\n    }\n  }\n",
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      let R = (0, o.ZP)(r.huw).withConfig({ componentId: "sc-6102ce51-0" })(
          s()
        ),
        Z = o.ZP.div.withConfig({ componentId: "sc-6102ce51-1" })(l()),
        j = (0, o.ZP)(r.iHY).withConfig({ componentId: "sc-6102ce51-2" })(
          c(),
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T1;
          }
        ),
        M = o.ZP.div.withConfig({ componentId: "sc-6102ce51-3" })(p(), (e) => {
          let { theme: n } = e;
          return n.spacing.xl;
        }),
        N = o.ZP.div.withConfig({ componentId: "sc-6102ce51-4" })(d()),
        S = o.ZP.div.withConfig({ componentId: "sc-6102ce51-5" })(m(), (e) => {
          let { gap: n } = e;
          return n;
        }),
        E = (0, o.ZP)(r.tuJ).withConfig({ componentId: "sc-6102ce51-6" })(
          y(),
          (e) => {
            let { theme: n } = e;
            return n.spacing["3xl"];
          }
        ),
        _ = o.ZP.div.withConfig({ componentId: "sc-6102ce51-7" })(
          f(),
          (e) => {
            let { theme: n } = e;
            return n.radii.md;
          },
          (e) => {
            let { theme: n } = e;
            return n.spacing.lg;
          },
          (e) => {
            let { theme: n } = e;
            return n.colors.global.line.Line1;
          },
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T3;
          },
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T1;
          },
          (0, u.qC)(u.bK, u.Dh)
        ),
        B = o.ZP.div.withConfig({ componentId: "sc-6102ce51-8" })(
          g(),
          (e) => {
            let { padding: n } = e;
            return n || "0";
          },
          (e) => {
            let { theme: n } = e;
            return n.colors.global.background.BG2;
          },
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T1;
          },
          (e) => {
            let { padding: n } = e;
            return n
              ? "1px solid ".concat((e) => {
                  let { theme: n } = e;
                  return n.colors.global.line.Line2;
                }, ";")
              : "none";
          },
          (e) => {
            let { theme: n } = e;
            return n.radii.md;
          },
          u.bK
        );
      (0, o.ZP)(B).withConfig({ componentId: "sc-6102ce51-9" })(T());
      let F = (0, o.ZP)(B).withConfig({ componentId: "sc-6102ce51-10" })(
          h(),
          (e) => {
            let { theme: n, gap: t } = e;
            return null != t ? t : n.spacing.md;
          },
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T1;
          }
        ),
        D = (0, o.ZP)(r.Bpc).withConfig({ componentId: "sc-6102ce51-11" })(
          b(),
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T1;
          }
        ),
        O = (0, o.ZP)(r.Bpc).withConfig({ componentId: "sc-6102ce51-12" })(
          k(),
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T1;
          }
        ),
        U = (0, o.ZP)(O).withConfig({ componentId: "sc-6102ce51-13" })(w()),
        L = (0, o.ZP)(r.tuJ).withConfig({ componentId: "sc-6102ce51-14" })(
          x(),
          (e) => {
            let { theme: n } = e;
            return n.spacing.xl;
          },
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T1;
          }
        ),
        z = o.ZP.div.withConfig({ componentId: "sc-6102ce51-15" })(v(), (e) => {
          let { theme: n } = e;
          return n.colors.global.line.Line2;
        });
      o.ZP.div.withConfig({ componentId: "sc-6102ce51-16" })(I(), (e) => {
        let { theme: n } = e;
        return n.colors.global.line.Line2;
      });
      let H = (0, o.ZP)(r.T59).withConfig({ componentId: "sc-6102ce51-17" })(
          C(),
          (e) => {
            let { theme: n } = e;
            return n.colors.global.text.T3;
          }
        ),
        Y = o.ZP.div.withConfig({ componentId: "sc-6102ce51-18" })(
          P(),
          (e) => {
            let { height: n } = e;
            return n;
          },
          (e) => {
            let { width: n } = e;
            return n;
          },
          (e) => {
            let { theme: n } = e;
            return n.spacing.md;
          }
        ),
        W = (0, o.ZP)(a.An).withConfig({ componentId: "sc-6102ce51-19" })(A());
    },
  },
  function (e) {
    e.O(0, [2467, 2888, 179], function () {
      return e((e.s = 15103));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=stake-7df03e5d5a98e80a.js.map
