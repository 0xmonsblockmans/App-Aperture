(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6221],
  {
    91389: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                0 > t.indexOf(n) &&
                (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var i = 0, n = Object.getOwnPropertySymbols(e);
                i < n.length;
                i++
              )
                0 > t.indexOf(n[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                  (r[n[i]] = e[n[i]]);
            return r;
          },
        i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CoinbaseWalletProvider = void 0);
      let s = i(r(10161)),
        a = r(60397),
        o = r(65560),
        c = r(67178),
        l = r(95424),
        d = r(22200),
        u = r(75736),
        h = r(25103),
        p = r(99667),
        f = r(2696);
      class g extends s.default {
        constructor(e) {
          var t,
            r,
            { metadata: i } = e,
            s = e.preference,
            { keysUrl: o } = s,
            p = n(s, ["keysUrl"]);
          super(),
            (this.accounts = []),
            (this.handlers = {
              handshake: async (e) => {
                try {
                  if (this.connected)
                    return (
                      this.emit("connect", {
                        chainId: (0, l.hexStringFromIntNumber)(
                          (0, c.IntNumber)(this.chain.id)
                        ),
                      }),
                      this.accounts
                    );
                  let e = await this.requestSignerSelection(),
                    t = this.initSigner(e),
                    r = await t.handshake();
                  return (
                    (this.signer = t),
                    (0, d.storeSignerType)(e),
                    this.emit("connect", {
                      chainId: (0, l.hexStringFromIntNumber)(
                        (0, c.IntNumber)(this.chain.id)
                      ),
                    }),
                    r
                  );
                } catch (e) {
                  throw (this.handleUnauthorizedError(e), e);
                }
              },
              sign: async (e) => {
                if (!this.connected || !this.signer)
                  throw a.standardErrors.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
                try {
                  return await this.signer.request(e);
                } catch (e) {
                  throw (this.handleUnauthorizedError(e), e);
                }
              },
              fetch: (e) => (0, u.fetchRPCRequest)(e, this.chain),
              state: (e) => {
                let t = () => {
                  if (this.connected) return this.accounts;
                  throw a.standardErrors.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
                };
                switch (e.method) {
                  case "eth_chainId":
                    return (0, l.hexStringFromIntNumber)(
                      (0, c.IntNumber)(this.chain.id)
                    );
                  case "net_version":
                    return this.chain.id;
                  case "eth_accounts":
                    return t();
                  case "eth_coinbase":
                    return t()[0];
                  default:
                    return this.handlers.unsupported(e);
                }
              },
              deprecated: ({ method: e }) => {
                throw a.standardErrors.rpc.methodNotSupported(
                  `Method ${e} is deprecated.`
                );
              },
              unsupported: ({ method: e }) => {
                throw a.standardErrors.rpc.methodNotSupported(
                  `Method ${e} is not supported.`
                );
              },
            }),
            (this.isCoinbaseWallet = !0),
            (this.updateListener = {
              onAccountsUpdate: ({ accounts: e, source: t }) => {
                (0, l.areAddressArraysEqual)(this.accounts, e) ||
                  ((this.accounts = e),
                  "storage" !== t &&
                    this.emit("accountsChanged", this.accounts));
              },
              onChainUpdate: ({ chain: e, source: t }) => {
                (e.id !== this.chain.id || e.rpcUrl !== this.chain.rpcUrl) &&
                  ((this.chain = e),
                  "storage" !== t &&
                    this.emit(
                      "chainChanged",
                      (0, l.hexStringFromIntNumber)((0, c.IntNumber)(e.id))
                    ));
              },
            }),
            (this.metadata = i),
            (this.preference = p),
            (this.communicator = new h.Communicator(o)),
            (this.chain = {
              id:
                null !==
                  (r =
                    null === (t = i.appChainIds) || void 0 === t
                      ? void 0
                      : t[0]) && void 0 !== r
                  ? r
                  : 1,
            });
          let f = (0, d.loadSignerType)();
          this.signer = f ? this.initSigner(f) : null;
        }
        get connected() {
          return this.accounts.length > 0;
        }
        async request(e) {
          var t;
          try {
            let r = (0, u.checkErrorForInvalidRequestArgs)(e);
            if (r) throw r;
            let n =
              null !== (t = (0, p.determineMethodCategory)(e.method)) &&
              void 0 !== t
                ? t
                : "fetch";
            return this.handlers[n](e);
          } catch (t) {
            return Promise.reject((0, o.serializeError)(t, e.method));
          }
        }
        handleUnauthorizedError(e) {
          e.code === a.standardErrorCodes.provider.unauthorized &&
            this.disconnect();
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          (this.accounts = []),
            (this.chain = { id: 1 }),
            f.ScopedLocalStorage.clearAll(),
            this.emit(
              "disconnect",
              a.standardErrors.provider.disconnected(
                "User initiated disconnection"
              )
            );
        }
        requestSignerSelection() {
          return (0, d.fetchSignerType)({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
          });
        }
        initSigner(e) {
          return (0, d.createSigner)({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            updateListener: this.updateListener,
          });
        }
      }
      t.CoinbaseWalletProvider = g;
    },
    53029: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CoinbaseWalletSDK = void 0);
      let n = r(50454),
        i = r(91389),
        s = r(2696),
        a = r(53329),
        o = r(95424),
        c = r(75736);
      t.CoinbaseWalletSDK = class {
        constructor(e) {
          (this.metadata = {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || (0, o.getFavicon)(),
            appChainIds: e.appChainIds || [],
          }),
            this.storeLatestVersion();
        }
        makeWeb3Provider(e = { options: "all" }) {
          var t;
          let r = { metadata: this.metadata, preference: e };
          return null !== (t = (0, c.getCoinbaseInjectedProvider)(r)) &&
            void 0 !== t
            ? t
            : new i.CoinbaseWalletProvider(r);
        }
        getCoinbaseWalletLogo(e, t = 240) {
          return (0, n.walletLogo)(e, t);
        }
        storeLatestVersion() {
          let e = new s.ScopedLocalStorage("CBWSDK");
          e.setItem("VERSION", a.LIB_VERSION);
        }
      };
    },
    50454: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.walletLogo = void 0);
      let r = (e, t) => {
        switch (e) {
          case "standard":
          default:
            return `data:image/svg+xml,%3Csvg width='${t}' height='${t}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
          case "circle":
            return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${t}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
          case "text":
            return `data:image/svg+xml,%3Csvg width='${t}' height='${(
              0.1 * t
            ).toFixed(
              2
            )}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
          case "textWithLogo":
            return `data:image/svg+xml,%3Csvg width='${t}' height='${(
              0.25 * t
            ).toFixed(
              2
            )}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
          case "textLight":
            return `data:image/svg+xml,%3Csvg width='${t}' height='${(
              0.1 * t
            ).toFixed(
              2
            )}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
          case "textWithLogoLight":
            return `data:image/svg+xml,%3Csvg width='${t}' height='${(
              0.25 * t
            ).toFixed(
              2
            )}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        }
      };
      t.walletLogo = r;
    },
    25103: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Communicator = void 0);
      let n = r(53329),
        i = r(68489),
        s = r(62480),
        a = r(60397);
      t.Communicator = class {
        constructor(e = s.CB_KEYS_URL) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              let t = await this.waitForPopupLoaded();
              t.postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, r) => {
                let n = (r) => {
                  if (r.origin !== this.url.origin) return;
                  let i = r.data;
                  e(i) &&
                    (t(i),
                    window.removeEventListener("message", n),
                    this.listeners.delete(n));
                };
                window.addEventListener("message", n),
                  this.listeners.set(n, { reject: r });
              })),
            (this.disconnect = () => {
              (0, i.closePopup)(this.popup),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(
                    a.standardErrors.provider.userRejectedRequest(
                      "Request rejected"
                    )
                  ),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (0, i.openPopup)(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: { version: n.LIB_VERSION },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw a.standardErrors.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e));
        }
      };
    },
    68489: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.closePopup = t.openPopup = void 0);
      let n = r(60397);
      (t.openPopup = function (e) {
        let t = (window.innerWidth - 420) / 2 + window.screenX,
          r = (window.innerHeight - 540) / 2 + window.screenY,
          i = window.open(
            e,
            "Smart Wallet",
            `width=420, height=540, left=${t}, top=${r}`
          );
        if ((null == i || i.focus(), !i))
          throw n.standardErrors.rpc.internal("Pop up window failed to open");
        return i;
      }),
        (t.closePopup = function (e) {
          e && !e.closed && e.close();
        });
    },
    62480: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CBW_MOBILE_DEEPLINK_URL = t.WALLETLINK_URL = t.CB_KEYS_URL = void 0),
        (t.CB_KEYS_URL = "https://keys.coinbase.com/connect"),
        (t.WALLETLINK_URL = "https://www.walletlink.org"),
        (t.CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink");
    },
    87886: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.errorValues = t.standardErrorCodes = void 0),
        (t.standardErrorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        }),
        (t.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        });
    },
    50566: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.standardErrors = void 0);
      let n = r(87886),
        i = r(31781);
      function s(e, t) {
        let [r, n] = o(t);
        return new c(e, r || (0, i.getMessageFromCode)(e), n);
      }
      function a(e, t) {
        let [r, n] = o(t);
        return new l(e, r || (0, i.getMessageFromCode)(e), n);
      }
      function o(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: r } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, r];
          }
        }
        return [];
      }
      t.standardErrors = {
        rpc: {
          parse: (e) => s(n.standardErrorCodes.rpc.parse, e),
          invalidRequest: (e) => s(n.standardErrorCodes.rpc.invalidRequest, e),
          invalidParams: (e) => s(n.standardErrorCodes.rpc.invalidParams, e),
          methodNotFound: (e) => s(n.standardErrorCodes.rpc.methodNotFound, e),
          internal: (e) => s(n.standardErrorCodes.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return s(t, e);
          },
          invalidInput: (e) => s(n.standardErrorCodes.rpc.invalidInput, e),
          resourceNotFound: (e) =>
            s(n.standardErrorCodes.rpc.resourceNotFound, e),
          resourceUnavailable: (e) =>
            s(n.standardErrorCodes.rpc.resourceUnavailable, e),
          transactionRejected: (e) =>
            s(n.standardErrorCodes.rpc.transactionRejected, e),
          methodNotSupported: (e) =>
            s(n.standardErrorCodes.rpc.methodNotSupported, e),
          limitExceeded: (e) => s(n.standardErrorCodes.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) =>
            a(n.standardErrorCodes.provider.userRejectedRequest, e),
          unauthorized: (e) => a(n.standardErrorCodes.provider.unauthorized, e),
          unsupportedMethod: (e) =>
            a(n.standardErrorCodes.provider.unsupportedMethod, e),
          disconnected: (e) => a(n.standardErrorCodes.provider.disconnected, e),
          chainDisconnected: (e) =>
            a(n.standardErrorCodes.provider.chainDisconnected, e),
          unsupportedChain: (e) =>
            a(n.standardErrorCodes.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: r, data: n } = e;
            if (!r || "string" != typeof r)
              throw Error('"message" must be a nonempty string');
            return new l(t, r, n);
          },
        },
      };
      class c extends Error {
        constructor(e, t, r) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== r && (this.data = r);
        }
      }
      class l extends c {
        constructor(e, t, r) {
          if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, r);
        }
      }
    },
    60397: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.standardErrors = t.standardErrorCodes = void 0);
      var n = r(87886);
      Object.defineProperty(t, "standardErrorCodes", {
        enumerable: !0,
        get: function () {
          return n.standardErrorCodes;
        },
      });
      var i = r(50566);
      Object.defineProperty(t, "standardErrors", {
        enumerable: !0,
        get: function () {
          return i.standardErrors;
        },
      });
    },
    65560: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serializeError = void 0);
      let n = r(35593),
        i = r(53329),
        s = r(87886),
        a = r(31781);
      t.serializeError = function (e, t) {
        let r = (0, a.serialize)(
            "string" == typeof e
              ? { message: e, code: s.standardErrorCodes.rpc.internal }
              : (0, n.isErrorResponse)(e)
              ? Object.assign(Object.assign({}, e), {
                  message: e.errorMessage,
                  code: e.errorCode,
                  data: { method: e.method },
                })
              : e,
            { shouldIncludeStack: !0 }
          ),
          o = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
        o.searchParams.set("version", i.LIB_VERSION),
          o.searchParams.set("code", r.code.toString());
        let c = (function (e, t) {
          let r = null == e ? void 0 : e.method;
          if (r) return r;
          if (void 0 === t);
          else if ("string" == typeof t) return t;
          else if (!Array.isArray(t)) return t.method;
          else if (t.length > 0) return t[0].method;
        })(r.data, t);
        return (
          c && o.searchParams.set("method", c),
          o.searchParams.set("message", r.message),
          Object.assign(Object.assign({}, r), { docUrl: o.href })
        );
      };
    },
    31781: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serialize =
          t.getErrorCode =
          t.isValidCode =
          t.getMessageFromCode =
          t.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      let n = r(87886),
        i = "Unspecified error message.";
      function s(e, r = i) {
        if (e && Number.isInteger(e)) {
          let r = e.toString();
          if (c(n.errorValues, r)) return n.errorValues[r].message;
          if (e >= -32099 && e <= -32e3) return t.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return r;
      }
      function a(e) {
        if (!Number.isInteger(e)) return !1;
        let t = e.toString();
        return !!(n.errorValues[t] || (e >= -32099 && e <= -32e3));
      }
      function o(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function l(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      (t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (t.getMessageFromCode = s),
        (t.isValidCode = a),
        (t.getErrorCode = function (e) {
          var t;
          return "number" == typeof e
            ? e
            : "object" == typeof e &&
              null !== e &&
              ("number" == typeof e.code || "number" == typeof e.errorCode)
            ? null !== (t = e.code) && void 0 !== t
              ? t
              : e.errorCode
            : void 0;
        }),
        (t.serialize = function (e, { shouldIncludeStack: t = !1 } = {}) {
          let r = {};
          return (
            e &&
            "object" == typeof e &&
            !Array.isArray(e) &&
            c(e, "code") &&
            a(e.code)
              ? ((r.code = e.code),
                e.message && "string" == typeof e.message
                  ? ((r.message = e.message), c(e, "data") && (r.data = e.data))
                  : ((r.message = s(r.code)),
                    (r.data = { originalError: o(e) })))
              : ((r.code = n.standardErrorCodes.rpc.internal),
                (r.message = l(e, "message") ? e.message : i),
                (r.data = { originalError: o(e) })),
            t && (r.stack = l(e, "stack") ? e.stack : void 0),
            r
          );
        });
    },
    99667: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.determineMethodCategory = void 0);
      let r = {
        handshake: ["eth_requestAccounts"],
        sign: [
          "eth_ecRecover",
          "personal_sign",
          "personal_ecRecover",
          "eth_signTransaction",
          "eth_sendTransaction",
          "eth_signTypedData_v1",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_signTypedData",
          "wallet_addEthereumChain",
          "wallet_switchEthereumChain",
          "wallet_watchAsset",
          "wallet_getCapabilities",
          "wallet_sendCalls",
          "wallet_showCallsStatus",
        ],
        state: ["eth_chainId", "eth_accounts", "eth_coinbase", "net_version"],
        deprecated: ["eth_sign", "eth_signTypedData_v2"],
        unsupported: ["eth_subscribe", "eth_unsubscribe"],
        fetch: [],
      };
      t.determineMethodCategory = function (e) {
        for (let t in r) {
          let n = t;
          if (r[n].includes(e)) return n;
        }
      };
    },
    67178: function (e, t) {
      "use strict";
      function r() {
        return (e) => e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RegExpString =
          t.IntNumber =
          t.BigIntString =
          t.AddressString =
          t.HexString =
          t.OpaqueType =
            void 0),
        (t.OpaqueType = r),
        (t.HexString = r()),
        (t.AddressString = r()),
        (t.BigIntString = r()),
        (t.IntNumber = function (e) {
          return Math.floor(e);
        }),
        (t.RegExpString = r());
    },
    95424: function (e, t, r) {
      "use strict";
      var n = r(85763).lW;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.areAddressArraysEqual =
          t.getFavicon =
          t.range =
          t.isBigNumber =
          t.ensureParsedJSONObject =
          t.ensureBigInt =
          t.ensureRegExpString =
          t.ensureIntNumber =
          t.ensureBuffer =
          t.ensureAddressString =
          t.ensureEvenLengthHexString =
          t.ensureHexString =
          t.isHexString =
          t.prepend0x =
          t.strip0x =
          t.has0xPrefix =
          t.hexStringFromIntNumber =
          t.intNumberFromHexString =
          t.bigIntStringFromBigInt =
          t.hexStringFromBuffer =
          t.hexStringToUint8Array =
          t.uint8ArrayToHex =
          t.randomBytesHex =
            void 0);
      let i = r(60397),
        s = r(67178),
        a = /^[0-9]*$/,
        o = /^[a-f0-9]*$/;
      function c(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function l(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function d(e) {
        return l(e) ? e.slice(2) : e;
      }
      function u(e) {
        return l(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function h(e) {
        if ("string" != typeof e) return !1;
        let t = d(e).toLowerCase();
        return o.test(t);
      }
      function p(e, t = !1) {
        if ("string" == typeof e) {
          let r = d(e).toLowerCase();
          if (o.test(r)) return (0, s.HexString)(t ? `0x${r}` : r);
        }
        throw i.standardErrors.rpc.invalidParams(
          `"${String(e)}" is not a hexadecimal string`
        );
      }
      function f(e, t = !1) {
        let r = p(e, !1);
        return (
          r.length % 2 == 1 && (r = (0, s.HexString)(`0${r}`)),
          t ? (0, s.HexString)(`0x${r}`) : r
        );
      }
      function g(e) {
        if ("number" == typeof e && Number.isInteger(e))
          return (0, s.IntNumber)(e);
        if ("string" == typeof e) {
          if (a.test(e)) return (0, s.IntNumber)(Number(e));
          if (h(e)) return (0, s.IntNumber)(Number(BigInt(f(e, !0))));
        }
        throw i.standardErrors.rpc.invalidParams(
          `Not an integer: ${String(e)}`
        );
      }
      function m(e) {
        if (null == e || "function" != typeof e.constructor) return !1;
        let { constructor: t } = e;
        return "function" == typeof t.config && "number" == typeof t.EUCLID;
      }
      (t.randomBytesHex = function (e) {
        return c(crypto.getRandomValues(new Uint8Array(e)));
      }),
        (t.uint8ArrayToHex = c),
        (t.hexStringToUint8Array = function (e) {
          return new Uint8Array(e.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
        }),
        (t.hexStringFromBuffer = function (e, t = !1) {
          let r = e.toString("hex");
          return (0, s.HexString)(t ? `0x${r}` : r);
        }),
        (t.bigIntStringFromBigInt = function (e) {
          return (0, s.BigIntString)(e.toString(10));
        }),
        (t.intNumberFromHexString = function (e) {
          return (0, s.IntNumber)(Number(BigInt(f(e, !0))));
        }),
        (t.hexStringFromIntNumber = function (e) {
          return (0, s.HexString)(`0x${BigInt(e).toString(16)}`);
        }),
        (t.has0xPrefix = l),
        (t.strip0x = d),
        (t.prepend0x = u),
        (t.isHexString = h),
        (t.ensureHexString = p),
        (t.ensureEvenLengthHexString = f),
        (t.ensureAddressString = function (e) {
          if ("string" == typeof e) {
            let t = d(e).toLowerCase();
            if (h(t) && 40 === t.length) return (0, s.AddressString)(u(t));
          }
          throw i.standardErrors.rpc.invalidParams(
            `Invalid Ethereum address: ${String(e)}`
          );
        }),
        (t.ensureBuffer = function (e) {
          if (n.isBuffer(e)) return e;
          if ("string" == typeof e) {
            if (h(e)) {
              let t = f(e, !1);
              return n.from(t, "hex");
            }
            return n.from(e, "utf8");
          }
          throw i.standardErrors.rpc.invalidParams(
            `Not binary data: ${String(e)}`
          );
        }),
        (t.ensureIntNumber = g),
        (t.ensureRegExpString = function (e) {
          if (e instanceof RegExp) return (0, s.RegExpString)(e.toString());
          throw i.standardErrors.rpc.invalidParams(
            `Not a RegExp: ${String(e)}`
          );
        }),
        (t.ensureBigInt = function (e) {
          if (null !== e && ("bigint" == typeof e || m(e)))
            return BigInt(e.toString(10));
          if ("number" == typeof e) return BigInt(g(e));
          if ("string" == typeof e) {
            if (a.test(e)) return BigInt(e);
            if (h(e)) return BigInt(f(e, !0));
          }
          throw i.standardErrors.rpc.invalidParams(
            `Not an integer: ${String(e)}`
          );
        }),
        (t.ensureParsedJSONObject = function (e) {
          if ("string" == typeof e) return JSON.parse(e);
          if ("object" == typeof e) return e;
          throw i.standardErrors.rpc.invalidParams(
            `Not a JSON string or an object: ${String(e)}`
          );
        }),
        (t.isBigNumber = m),
        (t.range = function (e, t) {
          return Array.from({ length: t - e }, (t, r) => e + r);
        }),
        (t.getFavicon = function () {
          let e =
              document.querySelector('link[sizes="192x192"]') ||
              document.querySelector('link[sizes="180x180"]') ||
              document.querySelector('link[rel="icon"]') ||
              document.querySelector('link[rel="shortcut icon"]'),
            { protocol: t, host: r } = document.location,
            n = e ? e.getAttribute("href") : null;
          return !n || n.startsWith("javascript:") || n.startsWith("vbscript:")
            ? null
            : n.startsWith("http://") ||
              n.startsWith("https://") ||
              n.startsWith("data:")
            ? n
            : n.startsWith("//")
            ? t + n
            : `${t}//${r}${n}`;
        }),
        (t.areAddressArraysEqual = function (e, t) {
          return e.length === t.length && e.every((e, r) => e === t[r]);
        });
    },
    16221: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CoinbaseWalletSDK = void 0);
      let n = r(53029);
      t.default = n.CoinbaseWalletSDK;
      var i = r(53029);
      Object.defineProperty(t, "CoinbaseWalletSDK", {
        enumerable: !0,
        get: function () {
          return i.CoinbaseWalletSDK;
        },
      });
    },
    75813: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SCWKeyManager = void 0);
      let n = r(93106),
        i = r(2696),
        s = { storageKey: "ownPrivateKey", keyType: "private" },
        a = { storageKey: "ownPublicKey", keyType: "public" },
        o = { storageKey: "peerPublicKey", keyType: "public" };
      t.SCWKeyManager = class {
        constructor() {
          (this.storage = new i.ScopedLocalStorage("CBWSDK", "SCWKeyManager")),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(o, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(a.storageKey),
            this.storage.removeItem(s.storageKey),
            this.storage.removeItem(o.storageKey);
        }
        async generateKeyPair() {
          let e = await (0, n.generateKeyPair)();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(s, e.privateKey),
            await this.storeKey(a, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(s)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(a)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(o)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await (0, n.deriveSharedSecret)(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? (0, n.importKeyFromHexString)(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let r = await (0, n.exportKeyToHexString)(e.keyType, t);
          this.storage.setItem(e.storageKey, r);
        }
      };
    },
    61042: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SCWSigner = void 0);
      let n = r(75813),
        i = r(17945),
        s = r(60397),
        a = r(95424),
        o = r(93106);
      t.SCWSigner = class {
        constructor(e) {
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.keyManager = new n.SCWKeyManager()),
            (this.stateManager = new i.SCWStateManager({
              appChainIds: this.metadata.appChainIds,
              updateListener: e.updateListener,
            })),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage =
              this.decryptResponseMessage.bind(this));
        }
        async handshake() {
          let e = await this.createRequestMessage({
              handshake: {
                method: "eth_requestAccounts",
                params: this.metadata,
              },
            }),
            t = await this.communicator.postRequestAndWaitForResponse(e);
          if ("failure" in t.content) throw t.content.failure;
          let r = await (0, o.importKeyFromHexString)("public", t.sender);
          await this.keyManager.setPeerPublicKey(r);
          let n = await this.decryptResponseMessage(t);
          this.updateInternalState({ method: "eth_requestAccounts" }, n);
          let i = n.result;
          if ("error" in i) throw i.error;
          return this.stateManager.accounts;
        }
        async request(e) {
          let t = this.tryLocalHandling(e);
          if (void 0 !== t) {
            if (t instanceof Error) throw t;
            return t;
          }
          await this.communicator.waitForPopupLoaded();
          let r = await this.sendEncryptedRequest(e),
            n = await this.decryptResponseMessage(r);
          this.updateInternalState(e, n);
          let i = n.result;
          if ("error" in i) throw i.error;
          return i.value;
        }
        async disconnect() {
          this.stateManager.clear(), await this.keyManager.clear();
        }
        tryLocalHandling(e) {
          var t;
          switch (e.method) {
            case "wallet_switchEthereumChain": {
              let r = e.params;
              if (
                !r ||
                !(null === (t = r[0]) || void 0 === t ? void 0 : t.chainId)
              )
                throw s.standardErrors.rpc.invalidParams();
              let n = (0, a.ensureIntNumber)(r[0].chainId),
                i = this.stateManager.switchChain(n);
              return i ? null : void 0;
            }
            case "wallet_getCapabilities": {
              let e = this.stateManager.walletCapabilities;
              if (!e)
                throw s.standardErrors.provider.unauthorized(
                  "No wallet capabilities found, please disconnect and reconnect"
                );
              return e;
            }
            default:
              return;
          }
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw s.standardErrors.provider.unauthorized(
              "No valid session found, try requestAccounts before other methods"
            );
          let r = await (0, o.encryptContent)(
              { action: e, chainId: this.stateManager.activeChain.id },
              t
            ),
            n = await this.createRequestMessage({ encrypted: r });
          return this.communicator.postRequestAndWaitForResponse(n);
        }
        async createRequestMessage(e) {
          let t = await (0, o.exportKeyToHexString)(
            "public",
            await this.keyManager.getOwnPublicKey()
          );
          return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          let t = e.content;
          if ("failure" in t) throw t.failure;
          let r = await this.keyManager.getSharedSecret();
          if (!r)
            throw s.standardErrors.provider.unauthorized("Invalid session");
          return (0, o.decryptContent)(t.encrypted, r);
        }
        updateInternalState(e, t) {
          var r, n;
          let i = null === (r = t.data) || void 0 === r ? void 0 : r.chains;
          i && this.stateManager.updateAvailableChains(i);
          let s =
            null === (n = t.data) || void 0 === n ? void 0 : n.capabilities;
          s && this.stateManager.updateWalletCapabilities(s);
          let o = t.result;
          if (!("error" in o))
            switch (e.method) {
              case "eth_requestAccounts": {
                let e = o.value;
                this.stateManager.updateAccounts(e);
                break;
              }
              case "wallet_switchEthereumChain": {
                if (null !== o.value) return;
                let t = e.params,
                  r = (0, a.ensureIntNumber)(t[0].chainId);
                this.stateManager.switchChain(r);
              }
            }
        }
      };
    },
    17945: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SCWStateManager = void 0);
      let n = r(2696),
        i = "accounts",
        s = "activeChain",
        a = "availableChains",
        o = "walletCapabilities";
      t.SCWStateManager = class {
        get accounts() {
          return this._accounts;
        }
        get activeChain() {
          return this._activeChain;
        }
        get walletCapabilities() {
          return this._walletCapabilities;
        }
        constructor(e) {
          var t, r;
          (this.storage = new n.ScopedLocalStorage(
            "CBWSDK",
            "SCWStateManager"
          )),
            (this.updateListener = e.updateListener),
            (this.availableChains = this.loadItemFromStorage(a)),
            (this._walletCapabilities = this.loadItemFromStorage(o));
          let c = this.loadItemFromStorage(i),
            l = this.loadItemFromStorage(s);
          c &&
            this.updateListener.onAccountsUpdate({
              accounts: c,
              source: "storage",
            }),
            l &&
              this.updateListener.onChainUpdate({
                chain: l,
                source: "storage",
              }),
            (this._accounts = c || []),
            (this._activeChain = l || {
              id:
                null !==
                  (r =
                    null === (t = e.appChainIds) || void 0 === t
                      ? void 0
                      : t[0]) && void 0 !== r
                  ? r
                  : 1,
            });
        }
        updateAccounts(e) {
          (this._accounts = e),
            this.storeItemToStorage(i, e),
            this.updateListener.onAccountsUpdate({
              accounts: e,
              source: "wallet",
            });
        }
        switchChain(e) {
          var t;
          let r =
            null === (t = this.availableChains) || void 0 === t
              ? void 0
              : t.find((t) => t.id === e);
          return (
            !!r &&
            (r === this._activeChain ||
              ((this._activeChain = r),
              this.storeItemToStorage(s, r),
              this.updateListener.onChainUpdate({ chain: r, source: "wallet" }),
              !0))
          );
        }
        updateAvailableChains(e) {
          if (!e || 0 === Object.keys(e).length) return;
          let t = Object.entries(e).map(([e, t]) => ({
            id: Number(e),
            rpcUrl: t,
          }));
          (this.availableChains = t),
            this.storeItemToStorage(a, t),
            this.switchChain(this._activeChain.id);
        }
        updateWalletCapabilities(e) {
          (this._walletCapabilities = e), this.storeItemToStorage(o, e);
        }
        storeItemToStorage(e, t) {
          this.storage.setItem(e, JSON.stringify(t));
        }
        loadItemFromStorage(e) {
          let t = this.storage.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        clear() {
          this.storage.clear();
        }
      };
    },
    22200: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createSigner =
          t.fetchSignerType =
          t.storeSignerType =
          t.loadSignerType =
            void 0);
      let n = r(61042),
        i = r(85127),
        s = r(60397),
        a = r(75736),
        o = r(2696),
        c = "SignerType",
        l = new o.ScopedLocalStorage("CBWSDK", "SignerConfigurator");
      async function d(e) {
        let { communicator: t, metadata: r } = e;
        u(t, r).catch(() => {});
        let n = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: e.preference,
          },
          { data: i } = await t.postRequestAndWaitForResponse(n);
        return i;
      }
      async function u(e, t) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let r = new i.WalletLinkSigner({ metadata: t });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: r.getSession() },
        }),
          await r.handshake(),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      (t.loadSignerType = function () {
        return l.getItem(c);
      }),
        (t.storeSignerType = function (e) {
          l.setItem(c, e);
        }),
        (t.fetchSignerType = d),
        (t.createSigner = function (e) {
          let {
            signerType: t,
            metadata: r,
            communicator: o,
            updateListener: c,
          } = e;
          switch (t) {
            case "scw":
              return new n.SCWSigner({
                metadata: r,
                updateListener: c,
                communicator: o,
              });
            case "walletlink":
              return new i.WalletLinkSigner({ metadata: r, updateListener: c });
            case "extension": {
              let e = (0, a.getCoinbaseInjectedSigner)();
              if (!e)
                throw s.standardErrors.rpc.internal(
                  "injected signer not found"
                );
              return e;
            }
          }
        });
    },
    85127: function (e, t, r) {
      "use strict";
      var n = r(85763).lW,
        i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkSigner = void 0);
      let s = i(r(19630)),
        a = r(71416),
        o = r(17061),
        c = r(35593),
        l = r(29322),
        d = r(62480),
        u = r(60397),
        h = r(95424),
        p = r(2696),
        f = "DefaultChainId",
        g = "DefaultJsonRpcUrl";
      t.WalletLinkSigner = class {
        constructor(e) {
          var t, r;
          (this._relay = null),
            (this._addresses = []),
            (this.hasMadeFirstChainChangedEmission = !1);
          let { appName: n, appLogoUrl: i } = e.metadata;
          (this._appName = n),
            (this._appLogoUrl = i),
            (this._storage = new p.ScopedLocalStorage(
              "walletlink",
              d.WALLETLINK_URL
            )),
            (this.updateListener = e.updateListener),
            (this._relayEventManager = new o.RelayEventManager()),
            (this._jsonRpcUrlFromOpts = "");
          let s = this._storage.getItem(a.LOCAL_STORAGE_ADDRESSES_KEY);
          if (s) {
            let e = s.split(" ");
            "" !== e[0] &&
              ((this._addresses = e.map((e) => (0, h.ensureAddressString)(e))),
              null === (t = this.updateListener) ||
                void 0 === t ||
                t.onAccountsUpdate({
                  accounts: this._addresses,
                  source: "storage",
                }));
          }
          let c = this._storage.getItem(f);
          c &&
            (null === (r = this.updateListener) ||
              void 0 === r ||
              r.onChainUpdate({
                chain: { id: this.getChainId(), rpcUrl: this.jsonRpcUrl },
                source: "storage",
              }),
            (this.hasMadeFirstChainChangedEmission = !0)),
            this.initializeRelay();
        }
        getSession() {
          let e = this.initializeRelay(),
            { id: t, secret: r } = e.getWalletLinkSession();
          return { id: t, secret: r };
        }
        async handshake() {
          let e = await this.request({ method: "eth_requestAccounts" });
          return e;
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null !== (e = this._storage.getItem(g)) && void 0 !== e
            ? e
            : this._jsonRpcUrlFromOpts;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(g, e);
        }
        updateProviderInfo(e, t) {
          var r;
          this.jsonRpcUrl = e;
          let n = this.getChainId();
          this._storage.setItem(f, t.toString(10));
          let i = (0, h.ensureIntNumber)(t) !== n;
          (i || !this.hasMadeFirstChainChangedEmission) &&
            (null === (r = this.updateListener) ||
              void 0 === r ||
              r.onChainUpdate({
                chain: { id: t, rpcUrl: e },
                source: "wallet",
              }),
            (this.hasMadeFirstChainChangedEmission = !0));
        }
        async watchAsset(e, t, r, n, i, s) {
          let a = this.initializeRelay(),
            o = await a.watchAsset(
              e,
              t,
              r,
              n,
              i,
              null == s ? void 0 : s.toString()
            );
          return !(0, c.isErrorResponse)(o) && !!o.result;
        }
        async addEthereumChain(e, t, r, n, i, s) {
          var a, o;
          if ((0, h.ensureIntNumber)(e) === this.getChainId()) return !1;
          let l = this.initializeRelay();
          this._isAuthorized() || (await l.requestEthereumAccounts());
          let d = await l.addEthereumChain(e.toString(), t, i, r, n, s);
          return (
            !(0, c.isErrorResponse)(d) &&
            ((null === (a = d.result) || void 0 === a
              ? void 0
              : a.isApproved) === !0 && this.updateProviderInfo(t[0], e),
            (null === (o = d.result) || void 0 === o
              ? void 0
              : o.isApproved) === !0)
          );
        }
        async switchEthereumChain(e) {
          let t = this.initializeRelay(),
            r = await t.switchEthereumChain(
              e.toString(10),
              this.selectedAddress || void 0
            );
          if ((0, c.isErrorResponse)(r)) {
            if (!r.errorCode) return;
            if (r.errorCode === u.standardErrorCodes.provider.unsupportedChain)
              throw u.standardErrors.provider.unsupportedChain();
            throw u.standardErrors.provider.custom({
              message: r.errorMessage,
              code: r.errorCode,
            });
          }
          let n = r.result;
          n.isApproved &&
            n.rpcUrl.length > 0 &&
            this.updateProviderInfo(n.rpcUrl, e);
        }
        async disconnect() {
          this._relay && this._relay.resetAndReload(), this._storage.clear();
        }
        async request(e) {
          try {
            return this._request(e).catch((e) => {
              throw e;
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }
        async _request(e) {
          if (!e || "object" != typeof e || Array.isArray(e))
            throw u.standardErrors.rpc.invalidRequest({
              message: "Expected a single, non-array, object argument.",
              data: e,
            });
          let { method: t, params: r } = e;
          if ("string" != typeof t || 0 === t.length)
            throw u.standardErrors.rpc.invalidRequest({
              message: "'args.method' must be a non-empty string.",
              data: e,
            });
          if (
            void 0 !== r &&
            !Array.isArray(r) &&
            ("object" != typeof r || null === r)
          )
            throw u.standardErrors.rpc.invalidRequest({
              message: "'args.params' must be an object or array if provided.",
              data: e,
            });
          let n = this._relayEventManager.makeRequestId(),
            i = await this._sendRequestAsync({
              method: t,
              params: void 0 === r ? [] : r,
              jsonrpc: "2.0",
              id: n,
            });
          return i.result;
        }
        _setAddresses(e, t) {
          var r;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let n = e.map((e) => (0, h.ensureAddressString)(e));
          JSON.stringify(n) !== JSON.stringify(this._addresses) &&
            ((this._addresses = n),
            null === (r = this.updateListener) ||
              void 0 === r ||
              r.onAccountsUpdate({ accounts: n, source: "wallet" }),
            this._storage.setItem(a.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")));
        }
        _sendRequestAsync(e) {
          return new Promise((t, r) => {
            try {
              let r = this._handleSynchronousMethods(e);
              if (void 0 !== r)
                return t({ jsonrpc: "2.0", id: e.id, result: r });
            } catch (e) {
              return r(e);
            }
            this._handleAsynchronousMethods(e)
              .then(
                (r) => r && t(Object.assign(Object.assign({}, r), { id: e.id }))
              )
              .catch((e) => r(e));
          });
        }
        _handleSynchronousMethods(e) {
          let { method: t } = e;
          switch (t) {
            case "eth_accounts":
              return this._eth_accounts();
            case "eth_coinbase":
              return this._eth_coinbase();
            case "net_version":
              return this._net_version();
            case "eth_chainId":
              return this._eth_chainId();
            default:
              return;
          }
        }
        async _handleAsynchronousMethods(e) {
          let { method: t } = e,
            r = e.params || [];
          switch (t) {
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_sign":
              return this._eth_sign(r);
            case "eth_ecRecover":
              return this._eth_ecRecover(r);
            case "personal_sign":
              return this._personal_sign(r);
            case "personal_ecRecover":
              return this._personal_ecRecover(r);
            case "eth_signTransaction":
              return this._eth_signTransaction(r);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(r);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(r);
            case "eth_signTypedData_v1":
              return this._eth_signTypedData_v1(r);
            case "eth_signTypedData_v2":
            default:
              return this._throwUnsupportedMethodError();
            case "eth_signTypedData_v3":
              return this._eth_signTypedData_v3(r);
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this._eth_signTypedData_v4(r);
            case "wallet_addEthereumChain":
              return this._wallet_addEthereumChain(r);
            case "wallet_switchEthereumChain":
              return this._wallet_switchEthereumChain(r);
            case "wallet_watchAsset":
              return this._wallet_watchAsset(r);
          }
        }
        _isKnownAddress(e) {
          try {
            let t = (0, h.ensureAddressString)(e),
              r = this._addresses.map((e) => (0, h.ensureAddressString)(e));
            return r.includes(t);
          } catch (e) {}
          return !1;
        }
        _ensureKnownAddress(e) {
          if (!this._isKnownAddress(e)) throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from
            ? (0, h.ensureAddressString)(e.from)
            : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let r = e.to ? (0, h.ensureAddressString)(e.to) : null,
            i = null != e.value ? (0, h.ensureBigInt)(e.value) : BigInt(0),
            s = e.data ? (0, h.ensureBuffer)(e.data) : n.alloc(0),
            a = null != e.nonce ? (0, h.ensureIntNumber)(e.nonce) : null,
            o = null != e.gasPrice ? (0, h.ensureBigInt)(e.gasPrice) : null,
            c =
              null != e.maxFeePerGas
                ? (0, h.ensureBigInt)(e.maxFeePerGas)
                : null,
            l =
              null != e.maxPriorityFeePerGas
                ? (0, h.ensureBigInt)(e.maxPriorityFeePerGas)
                : null,
            d = null != e.gas ? (0, h.ensureBigInt)(e.gas) : null,
            u = e.chainId
              ? (0, h.ensureIntNumber)(e.chainId)
              : this.getChainId();
          return {
            fromAddress: t,
            toAddress: r,
            weiValue: i,
            data: s,
            nonce: a,
            gasPriceInWei: o,
            maxFeePerGas: c,
            maxPriorityFeePerGas: l,
            gasLimit: d,
            chainId: u,
          };
        }
        _isAuthorized() {
          return this._addresses.length > 0;
        }
        _requireAuthorization() {
          if (!this._isAuthorized())
            throw u.standardErrors.provider.unauthorized({});
        }
        _throwUnsupportedMethodError() {
          throw u.standardErrors.provider.unsupportedMethod({});
        }
        async _signEthereumMessage(e, t, r, n) {
          this._ensureKnownAddress(t);
          try {
            let i = this.initializeRelay(),
              s = await i.signEthereumMessage(e, t, r, n);
            if ((0, c.isErrorResponse)(s)) throw Error(s.errorMessage);
            return { jsonrpc: "2.0", id: 0, result: s.result };
          } catch (e) {
            if (
              "string" == typeof e.message &&
              e.message.match(/(denied|rejected)/i)
            )
              throw u.standardErrors.provider.userRejectedRequest(
                "User denied message signature"
              );
            throw e;
          }
        }
        async _ethereumAddressFromSignedMessage(e, t, r) {
          let n = this.initializeRelay(),
            i = await n.ethereumAddressFromSignedMessage(e, t, r);
          if ((0, c.isErrorResponse)(i)) throw Error(i.errorMessage);
          return { jsonrpc: "2.0", id: 0, result: i.result };
        }
        _eth_accounts() {
          return [...this._addresses];
        }
        _eth_coinbase() {
          return this.selectedAddress || null;
        }
        _net_version() {
          return this.getChainId().toString(10);
        }
        _eth_chainId() {
          return (0, h.hexStringFromIntNumber)(this.getChainId());
        }
        getChainId() {
          let e = this._storage.getItem(f);
          if (!e) return (0, h.ensureIntNumber)(1);
          let t = parseInt(e, 10);
          return (0, h.ensureIntNumber)(t);
        }
        async _eth_requestAccounts() {
          let e;
          if (this._isAuthorized())
            return Promise.resolve({
              jsonrpc: "2.0",
              id: 0,
              result: this._addresses,
            });
          try {
            let t = this.initializeRelay();
            if (
              ((e = await t.requestEthereumAccounts()),
              (0, c.isErrorResponse)(e))
            )
              throw Error(e.errorMessage);
          } catch (e) {
            if (
              "string" == typeof e.message &&
              e.message.match(/(denied|rejected)/i)
            )
              throw u.standardErrors.provider.userRejectedRequest(
                "User denied account authorization"
              );
            throw e;
          }
          if (!e.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(e.result),
            { jsonrpc: "2.0", id: 0, result: this._addresses }
          );
        }
        _eth_sign(e) {
          this._requireAuthorization();
          let t = (0, h.ensureAddressString)(e[0]),
            r = (0, h.ensureBuffer)(e[1]);
          return this._signEthereumMessage(r, t, !1);
        }
        _eth_ecRecover(e) {
          let t = (0, h.ensureBuffer)(e[0]),
            r = (0, h.ensureBuffer)(e[1]);
          return this._ethereumAddressFromSignedMessage(t, r, !1);
        }
        _personal_sign(e) {
          this._requireAuthorization();
          let t = (0, h.ensureBuffer)(e[0]),
            r = (0, h.ensureAddressString)(e[1]);
          return this._signEthereumMessage(t, r, !0);
        }
        _personal_ecRecover(e) {
          let t = (0, h.ensureBuffer)(e[0]),
            r = (0, h.ensureBuffer)(e[1]);
          return this._ethereumAddressFromSignedMessage(t, r, !0);
        }
        async _eth_signTransaction(e) {
          this._requireAuthorization();
          let t = this._prepareTransactionParams(e[0] || {});
          try {
            let e = this.initializeRelay(),
              r = await e.signEthereumTransaction(t);
            if ((0, c.isErrorResponse)(r)) throw Error(r.errorMessage);
            return { jsonrpc: "2.0", id: 0, result: r.result };
          } catch (e) {
            if (
              "string" == typeof e.message &&
              e.message.match(/(denied|rejected)/i)
            )
              throw u.standardErrors.provider.userRejectedRequest(
                "User denied transaction signature"
              );
            throw e;
          }
        }
        async _eth_sendRawTransaction(e) {
          let t = (0, h.ensureBuffer)(e[0]),
            r = this.initializeRelay(),
            n = await r.submitEthereumTransaction(t, this.getChainId());
          if ((0, c.isErrorResponse)(n)) throw Error(n.errorMessage);
          return { jsonrpc: "2.0", id: 0, result: n.result };
        }
        async _eth_sendTransaction(e) {
          this._requireAuthorization();
          let t = this._prepareTransactionParams(e[0] || {});
          try {
            let e = this.initializeRelay(),
              r = await e.signAndSubmitEthereumTransaction(t);
            if ((0, c.isErrorResponse)(r)) throw Error(r.errorMessage);
            return { jsonrpc: "2.0", id: 0, result: r.result };
          } catch (e) {
            if (
              "string" == typeof e.message &&
              e.message.match(/(denied|rejected)/i)
            )
              throw u.standardErrors.provider.userRejectedRequest(
                "User denied transaction signature"
              );
            throw e;
          }
        }
        async _eth_signTypedData_v1(e) {
          this._requireAuthorization();
          let t = (0, h.ensureParsedJSONObject)(e[0]),
            r = (0, h.ensureAddressString)(e[1]);
          this._ensureKnownAddress(r);
          let n = s.default.hashForSignTypedDataLegacy({ data: t }),
            i = JSON.stringify(t, null, 2);
          return this._signEthereumMessage(n, r, !1, i);
        }
        async _eth_signTypedData_v3(e) {
          this._requireAuthorization();
          let t = (0, h.ensureAddressString)(e[0]),
            r = (0, h.ensureParsedJSONObject)(e[1]);
          this._ensureKnownAddress(t);
          let n = s.default.hashForSignTypedData_v3({ data: r }),
            i = JSON.stringify(r, null, 2);
          return this._signEthereumMessage(n, t, !1, i);
        }
        async _eth_signTypedData_v4(e) {
          this._requireAuthorization();
          let t = (0, h.ensureAddressString)(e[0]),
            r = (0, h.ensureParsedJSONObject)(e[1]);
          this._ensureKnownAddress(t);
          let n = s.default.hashForSignTypedData_v4({ data: r }),
            i = JSON.stringify(r, null, 2);
          return this._signEthereumMessage(n, t, !1, i);
        }
        async _wallet_addEthereumChain(e) {
          var t, r, n, i;
          let s = e[0];
          if (
            (null === (t = s.rpcUrls) || void 0 === t ? void 0 : t.length) === 0
          )
            return {
              jsonrpc: "2.0",
              id: 0,
              error: { code: 2, message: "please pass in at least 1 rpcUrl" },
            };
          if (!s.chainName || "" === s.chainName.trim())
            throw u.standardErrors.rpc.invalidParams(
              "chainName is a required field"
            );
          if (!s.nativeCurrency)
            throw u.standardErrors.rpc.invalidParams(
              "nativeCurrency is a required field"
            );
          let a = parseInt(s.chainId, 16),
            o = await this.addEthereumChain(
              a,
              null !== (r = s.rpcUrls) && void 0 !== r ? r : [],
              null !== (n = s.blockExplorerUrls) && void 0 !== n ? n : [],
              s.chainName,
              null !== (i = s.iconUrls) && void 0 !== i ? i : [],
              s.nativeCurrency
            );
          return o
            ? { jsonrpc: "2.0", id: 0, result: null }
            : {
                jsonrpc: "2.0",
                id: 0,
                error: { code: 2, message: "unable to add ethereum chain" },
              };
        }
        async _wallet_switchEthereumChain(e) {
          let t = e[0];
          return (
            await this.switchEthereumChain(parseInt(t.chainId, 16)),
            { jsonrpc: "2.0", id: 0, result: null }
          );
        }
        async _wallet_watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type)
            throw u.standardErrors.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw u.standardErrors.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw u.standardErrors.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw u.standardErrors.rpc.invalidParams("Address is required");
          let r = this.getChainId(),
            { address: n, symbol: i, image: s, decimals: a } = t.options,
            o = await this.watchAsset(t.type, n, i, a, s, r);
          return { jsonrpc: "2.0", id: 0, result: o };
        }
        initializeRelay() {
          if (!this._relay) {
            let e = new l.WalletLinkRelay({
              linkAPIUrl: d.WALLETLINK_URL,
              storage: this._storage,
            });
            e.setAppInfo(this._appName, this._appLogoUrl),
              e.attachUI(),
              e.setAccountsCallback((e, t) => this._setAddresses(e, t)),
              e.setChainCallback((e, t) => {
                this.updateProviderInfo(t, parseInt(e, 10));
              }),
              (this._relay = e);
          }
          return this._relay;
        }
      };
    },
    17061: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RelayEventManager = void 0);
      let n = r(95424);
      t.RelayEventManager = class {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
          let e = this._nextRequestId,
            t = (0, n.prepend0x)(e.toString(16)),
            r = this.callbacks.get(t);
          return r && this.callbacks.delete(t), e;
        }
      };
    },
    29322: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkRelay = void 0);
      let n = r(73602),
        i = r(71416),
        s = r(17061),
        a = r(73806),
        o = r(35593),
        c = r(37679),
        l = r(49982),
        d = r(6099),
        u = r(60397),
        h = r(95424),
        p = r(2696);
      class f {
        constructor(e) {
          (this.accountsCallback = null),
            (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.chainCallback = null),
            (this.dappDefaultChain = 1),
            (this.isMobileWeb = (0, c.isMobileWeb)()),
            (this.appName = ""),
            (this.appLogoUrl = null),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(i.LOCAL_STORAGE_ADDRESSES_KEY);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let r = t.split(" "),
                  n = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === r[0] ||
                  e ||
                  !this._session.linked ||
                  n ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback && this.chainCallback(e, t));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                f.accountRequestCallbackIds.size > 0 &&
                  (Array.from(f.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(
                        Object.assign(
                          Object.assign(
                            {},
                            {
                              type: "WEB3_RESPONSE",
                              id: t,
                              response: {
                                method: "requestEthereumAccounts",
                                result: [e],
                              },
                            }
                          ),
                          { id: t }
                        )
                      );
                    }
                  ),
                  f.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage);
          let { session: t, ui: r, connection: n } = this.subscribe();
          (this._session = t),
            (this.connection = n),
            (this.relayEventManager = new s.RelayEventManager()),
            (this.ui = r);
        }
        subscribe() {
          let e =
              a.WalletLinkSession.load(this.storage) ||
              new a.WalletLinkSession(this.storage).save(),
            { linkAPIUrl: t } = this,
            r = new n.WalletLinkConnection({
              session: e,
              linkAPIUrl: t,
              listener: this,
            }),
            i = this.isMobileWeb
              ? new d.WLMobileRelayUI()
              : new l.WalletLinkRelayUI();
          return r.connect(), { session: e, ui: i, connection: r };
        }
        attachUI() {
          this.ui.attach();
        }
        resetAndReload() {
          Promise.race([
            this.connection.setSessionMetadata("__destroyed", "1"),
            new Promise((e) => setTimeout(() => e(null), 1e3)),
          ])
            .then(() => {
              this.connection.destroy();
              let e = a.WalletLinkSession.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id &&
                p.ScopedLocalStorage.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        setAppInfo(e, t) {
          (this.appName = e), (this.appLogoUrl = t);
        }
        getStorageItem(e) {
          return this.storage.getItem(e);
        }
        setStorageItem(e, t) {
          this.storage.setItem(e, t);
        }
        signEthereumMessage(e, t, r, n) {
          return this.sendRequest({
            method: "signEthereumMessage",
            params: {
              message: (0, h.hexStringFromBuffer)(e, !0),
              address: t,
              addPrefix: r,
              typedDataJson: n || null,
            },
          });
        }
        ethereumAddressFromSignedMessage(e, t, r) {
          return this.sendRequest({
            method: "ethereumAddressFromSignedMessage",
            params: {
              message: (0, h.hexStringFromBuffer)(e, !0),
              signature: (0, h.hexStringFromBuffer)(t, !0),
              addPrefix: r,
            },
          });
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: (0, h.bigIntStringFromBigInt)(e.weiValue),
              data: (0, h.hexStringFromBuffer)(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei
                ? (0, h.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              maxFeePerGas: e.gasPriceInWei
                ? (0, h.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              maxPriorityFeePerGas: e.gasPriceInWei
                ? (0, h.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              gasLimit: e.gasLimit
                ? (0, h.bigIntStringFromBigInt)(e.gasLimit)
                : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: (0, h.bigIntStringFromBigInt)(e.weiValue),
              data: (0, h.hexStringFromBuffer)(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei
                ? (0, h.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              maxFeePerGas: e.maxFeePerGas
                ? (0, h.bigIntStringFromBigInt)(e.maxFeePerGas)
                : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? (0, h.bigIntStringFromBigInt)(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit
                ? (0, h.bigIntStringFromBigInt)(e.gasLimit)
                : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: {
              signedTransaction: (0, h.hexStringFromBuffer)(e, !0),
              chainId: t,
            },
          });
        }
        scanQRCode(e) {
          return this.sendRequest({
            method: "scanQRCode",
            params: { regExp: e },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        genericRequest(e, t) {
          return this.sendRequest({
            method: "generic",
            params: { action: t, data: e },
          });
        }
        sendGenericMessage(e) {
          return this.sendRequest(e);
        }
        sendRequest(e) {
          let t = null,
            r = (0, h.randomBytesHex)(8),
            n = (n) => {
              this.publishWeb3RequestCanceledEvent(r),
                this.handleErrorResponse(r, e.method, n),
                null == t || t();
            };
          return new Promise((i, s) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: n,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(r, (e) => {
                if ((null == t || t(), (0, o.isErrorResponse)(e)))
                  return s(Error(e.errorMessage));
                i(e);
              }),
              this.publishWeb3RequestEvent(r, e);
          });
        }
        setAccountsCallback(e) {
          this.accountsCallback = e;
        }
        setChainCallback(e) {
          this.chainCallback = e;
        }
        setDappDefaultChainCallback(e) {
          this.dappDefaultChain = e;
        }
        publishWeb3RequestEvent(e, t) {
          let r = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", r, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: r.id,
                response: { method: t.method, errorMessage: e.message },
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof d.WLMobileRelayUI)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, r) {
          return this.connection.publishEvent(e, t, r);
        }
        handleWeb3ResponseMessage(e) {
          let { response: t } = e;
          if ("requestEthereumAccounts" === t.method) {
            f.accountRequestCallbackIds.forEach((t) =>
              this.invokeCallback(
                Object.assign(Object.assign({}, e), { id: t })
              )
            ),
              f.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e);
        }
        handleErrorResponse(e, t, r) {
          var n;
          let i =
            null !== (n = null == r ? void 0 : r.message) && void 0 !== n
              ? n
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: e,
            response: { method: t, errorMessage: i },
          });
        }
        invokeCallback(e) {
          let t = this.relayEventManager.callbacks.get(e.id);
          t && (t(e.response), this.relayEventManager.callbacks.delete(e.id));
        }
        requestEthereumAccounts() {
          let e = {
              method: "requestEthereumAccounts",
              params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl || null,
              },
            },
            t = (0, h.randomBytesHex)(8);
          return new Promise((r, n) => {
            this.relayEventManager.callbacks.set(t, (e) => {
              if ((0, o.isErrorResponse)(e)) return n(Error(e.errorMessage));
              r(e);
            }),
              f.accountRequestCallbackIds.add(t),
              this.publishWeb3RequestEvent(t, e);
          });
        }
        watchAsset(e, t, r, n, i, s) {
          let a = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: r, decimals: n, image: i },
                chainId: s,
              },
            },
            c = null,
            l = (0, h.randomBytesHex)(8),
            d = (e) => {
              this.publishWeb3RequestCanceledEvent(l),
                this.handleErrorResponse(l, a.method, e),
                null == c || c();
            };
          return (
            (c = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: d,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(l, (r) => {
                if ((null == c || c(), (0, o.isErrorResponse)(r)))
                  return t(Error(r.errorMessage));
                e(r);
              }),
                this.publishWeb3RequestEvent(l, a);
            })
          );
        }
        addEthereumChain(e, t, r, n, i, s) {
          let a = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: n,
                chainName: i,
                iconUrls: r,
                nativeCurrency: s,
              },
            },
            c = null,
            l = (0, h.randomBytesHex)(8),
            d = (e) => {
              this.publishWeb3RequestCanceledEvent(l),
                this.handleErrorResponse(l, a.method, e),
                null == c || c();
            };
          return (
            (c = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: d,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(l, (r) => {
                if ((null == c || c(), (0, o.isErrorResponse)(r)))
                  return t(Error(r.errorMessage));
                e(r);
              }),
                this.publishWeb3RequestEvent(l, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let r = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            n = (0, h.randomBytesHex)(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(n, (r) =>
              (0, o.isErrorResponse)(r) && r.errorCode
                ? t(
                    u.standardErrors.provider.custom({
                      code: r.errorCode,
                      message:
                        "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                    })
                  )
                : (0, o.isErrorResponse)(r)
                ? t(Error(r.errorMessage))
                : void e(r)
            ),
              this.publishWeb3RequestEvent(n, r);
          });
        }
      }
      (t.WalletLinkRelay = f), (f.accountRequestCallbackIds = new Set());
    },
    52712: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkCipher = void 0);
      let n = r(95424);
      t.WalletLinkCipher = class {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let r = crypto.getRandomValues(new Uint8Array(12)),
            i = await crypto.subtle.importKey(
              "raw",
              (0, n.hexStringToUint8Array)(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            s = new TextEncoder(),
            a = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: r },
              i,
              s.encode(e)
            ),
            o = a.slice(a.byteLength - 16),
            c = a.slice(0, a.byteLength - 16),
            l = new Uint8Array(o),
            d = new Uint8Array(c),
            u = new Uint8Array([...r, ...l, ...d]);
          return (0, n.uint8ArrayToHex)(u);
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((r, i) => {
            !(async function () {
              let s = await crypto.subtle.importKey(
                  "raw",
                  (0, n.hexStringToUint8Array)(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                a = (0, n.hexStringToUint8Array)(e),
                o = a.slice(0, 12),
                c = a.slice(12, 28),
                l = a.slice(28),
                d = new Uint8Array([...l, ...c]),
                u = { name: "AES-GCM", iv: new Uint8Array(o) };
              try {
                let e = await window.crypto.subtle.decrypt(u, s, d),
                  t = new TextDecoder();
                r(t.decode(e));
              } catch (e) {
                i(e);
              }
            })();
          });
        }
      };
    },
    73602: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkConnection = void 0);
      let n = r(71416),
        i = r(52712),
        s = r(59556),
        a = r(60018),
        o = r(67178);
      t.WalletLinkConnection = class {
        constructor({
          session: e,
          linkAPIUrl: t,
          listener: r,
          WebSocketClass: c = WebSocket,
        }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = (0, o.IntNumber)(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              if (!e) return;
              let t = new Map([
                ["__destroyed", this.handleDestroyed],
                ["EthereumAddress", this.handleAccountUpdated],
                ["WalletUsername", this.handleWalletUsernameUpdated],
                ["AppVersion", this.handleAppVersionUpdated],
                [
                  "ChainId",
                  (t) =>
                    e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                ],
              ]);
              t.forEach((t, r) => {
                let n = e[r];
                void 0 !== n && t(n);
              });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e &&
                (null === (t = this.listener) ||
                  void 0 === t ||
                  t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              {
                let r = await this.cipher.decrypt(e);
                null === (t = this.listener) ||
                  void 0 === t ||
                  t.accountUpdated(r);
              }
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var r;
              {
                let n = await this.cipher.decrypt(t);
                null === (r = this.listener) ||
                  void 0 === r ||
                  r.metadataUpdated(e, n);
              }
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated(n.WALLET_USER_NAME_KEY, e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated(n.APP_VERSION_KEY, e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var r;
              {
                let n = await this.cipher.decrypt(e),
                  i = await this.cipher.decrypt(t);
                null === (r = this.listener) ||
                  void 0 === r ||
                  r.chainUpdated(n, i);
              }
            }),
            (this.session = e),
            (this.cipher = new i.WalletLinkCipher(e.secret)),
            (this.listener = r);
          let l = new a.WalletLinkWebSocket(`${t}/rpc`, c);
          l.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case a.ConnectionState.DISCONNECTED:
                if (!this.destroyed) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        l.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case a.ConnectionState.CONNECTED:
                try {
                  await this.authenticate(),
                    this.sendIsLinked(),
                    this.sendGetSessionConfig(),
                    (t = !0);
                } catch (e) {}
                this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect &&
                    this.fetchUnseenEventsAPI();
              case a.ConnectionState.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            l.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null === (t = this.requestResolutions.get(e.id)) ||
                  void 0 === t ||
                  t(e));
            }),
            (this.ws = l),
            (this.http = new s.WalletLinkHTTP(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        destroy() {
          (this.destroyed = !0), this.ws.disconnect(), (this.listener = void 0);
        }
        get isDestroyed() {
          return this.destroyed;
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          var t;
          (this._connected = e),
            e &&
              (null === (t = this.onceConnected) ||
                void 0 === t ||
                t.call(this));
        }
        setOnceConnected(e) {
          return new Promise((t) => {
            this.connected
              ? e().then(t)
              : (this.onceConnected = () => {
                  e().then(t), (this.onceConnected = void 0);
                });
          });
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, r;
          (this._linked = e),
            e &&
              (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
            null === (r = this.listener) || void 0 === r || r.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" === e.type && "Web3Response" === e.event) {
            let r = await this.cipher.decrypt(e.data),
              n = JSON.parse(r);
            if ("WEB3_RESPONSE" !== n.type) return;
            null === (t = this.listener) ||
              void 0 === t ||
              t.handleWeb3ResponseMessage(n);
          }
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          this.shouldFetchUnseenEventsOnConnect = !1;
          let e = await this.http.fetchUnseenEvents();
          e.forEach((e) => this.handleIncomingEvent(e));
        }
        async setSessionMetadata(e, t) {
          let r = {
            type: "SetSessionConfig",
            id: (0, o.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            metadata: { [e]: t },
          };
          return this.setOnceConnected(async () => {
            let e = await this.makeRequest(r);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to set session metadata");
          });
        }
        async publishEvent(e, t, r = !1) {
          let n = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            i = {
              type: "PublishEvent",
              id: (0, o.IntNumber)(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: n,
              callWebhook: r,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(i);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4) {
            this.ws.disconnect();
            return;
          }
          try {
            this.ws.sendData("h");
          } catch (e) {}
        }
        async makeRequest(e, t = 6e4) {
          let r;
          let n = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, i) => {
                r = window.setTimeout(() => {
                  i(Error(`request ${n} timed out`));
                }, t);
              }),
              new Promise((e) => {
                this.requestResolutions.set(n, (t) => {
                  clearTimeout(r), e(t), this.requestResolutions.delete(n);
                });
              }),
            ])
          );
        }
        async authenticate() {
          let e = {
              type: "HostSession",
              id: (0, o.IntNumber)(this.nextReqId++),
              sessionId: this.session.id,
              sessionKey: this.session.key,
            },
            t = await this.makeRequest(e);
          if ("Fail" === t.type)
            throw Error(t.error || "failed to authenticate");
        }
        sendIsLinked() {
          let e = {
            type: "IsLinked",
            id: (0, o.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
          };
          this.sendData(e);
        }
        sendGetSessionConfig() {
          let e = {
            type: "GetSessionConfig",
            id: (0, o.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
          };
          this.sendData(e);
        }
      };
    },
    59556: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkHTTP = void 0),
        (t.WalletLinkHTTP = class {
          constructor(e, t, r) {
            (this.linkAPIUrl = e), (this.sessionId = t);
            let n = `${t}:${r}`;
            this.auth = `Basic ${btoa(n)}`;
          }
          async markUnseenEventsAsSeen(e) {
            return Promise.all(
              e.map((e) =>
                fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                  method: "POST",
                  headers: { Authorization: this.auth },
                })
              )
            ).catch((e) =>
              console.error("Unabled to mark event as failed:", e)
            );
          }
          async fetchUnseenEvents() {
            var e;
            let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
              headers: { Authorization: this.auth },
            });
            if (t.ok) {
              let { events: r, error: n } = await t.json();
              if (n) throw Error(`Check unseen events failed: ${n}`);
              let i =
                null !==
                  (e =
                    null == r
                      ? void 0
                      : r
                          .filter((e) => "Web3Response" === e.event)
                          .map((e) => ({
                            type: "Event",
                            sessionId: this.sessionId,
                            eventId: e.id,
                            event: e.event,
                            data: e.data,
                          }))) && void 0 !== e
                  ? e
                  : [];
              return this.markUnseenEventsAsSeen(i), i;
            }
            throw Error(`Check unseen events failed: ${t.status}`);
          }
        });
    },
    60018: function (e, t) {
      "use strict";
      var r, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkWebSocket = t.ConnectionState = void 0),
        ((n = r || (t.ConnectionState = r = {}))[(n.DISCONNECTED = 0)] =
          "DISCONNECTED"),
        (n[(n.CONNECTING = 1)] = "CONNECTING"),
        (n[(n.CONNECTED = 2)] = "CONNECTED"),
        (t.WalletLinkWebSocket = class {
          setConnectionStateListener(e) {
            this.connectionStateListener = e;
          }
          setIncomingDataListener(e) {
            this.incomingDataListener = e;
          }
          constructor(e, t = WebSocket) {
            (this.WebSocketClass = t),
              (this.webSocket = null),
              (this.pendingData = []),
              (this.url = e.replace(/^http/, "ws"));
          }
          async connect() {
            if (this.webSocket) throw Error("webSocket object is not null");
            return new Promise((e, t) => {
              var n;
              let i;
              try {
                this.webSocket = i = new this.WebSocketClass(this.url);
              } catch (e) {
                t(e);
                return;
              }
              null === (n = this.connectionStateListener) ||
                void 0 === n ||
                n.call(this, r.CONNECTING),
                (i.onclose = (e) => {
                  var n;
                  this.clearWebSocket(),
                    t(Error(`websocket error ${e.code}: ${e.reason}`)),
                    null === (n = this.connectionStateListener) ||
                      void 0 === n ||
                      n.call(this, r.DISCONNECTED);
                }),
                (i.onopen = (t) => {
                  var n;
                  if (
                    (e(),
                    null === (n = this.connectionStateListener) ||
                      void 0 === n ||
                      n.call(this, r.CONNECTED),
                    this.pendingData.length > 0)
                  ) {
                    let e = [...this.pendingData];
                    e.forEach((e) => this.sendData(e)), (this.pendingData = []);
                  }
                }),
                (i.onmessage = (e) => {
                  var t, r;
                  if ("h" === e.data)
                    null === (t = this.incomingDataListener) ||
                      void 0 === t ||
                      t.call(this, { type: "Heartbeat" });
                  else
                    try {
                      let t = JSON.parse(e.data);
                      null === (r = this.incomingDataListener) ||
                        void 0 === r ||
                        r.call(this, t);
                    } catch (e) {}
                });
            });
          }
          disconnect() {
            var e;
            let { webSocket: t } = this;
            if (t) {
              this.clearWebSocket(),
                null === (e = this.connectionStateListener) ||
                  void 0 === e ||
                  e.call(this, r.DISCONNECTED),
                (this.connectionStateListener = void 0),
                (this.incomingDataListener = void 0);
              try {
                t.close();
              } catch (e) {}
            }
          }
          sendData(e) {
            let { webSocket: t } = this;
            if (!t) {
              this.pendingData.push(e), this.connect();
              return;
            }
            t.send(e);
          }
          clearWebSocket() {
            let { webSocket: e } = this;
            e &&
              ((this.webSocket = null),
              (e.onclose = null),
              (e.onerror = null),
              (e.onmessage = null),
              (e.onopen = null));
          }
        });
    },
    71416: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.APP_VERSION_KEY =
          t.LOCAL_STORAGE_ADDRESSES_KEY =
          t.WALLET_USER_NAME_KEY =
            void 0),
        (t.WALLET_USER_NAME_KEY = "walletUsername"),
        (t.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses"),
        (t.APP_VERSION_KEY = "AppVersion");
    },
    73806: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkSession = void 0);
      let n = r(9065),
        i = r(95424),
        s = "session:id",
        a = "session:secret",
        o = "session:linked";
      class c {
        constructor(e, t, r, s) {
          (this._storage = e),
            (this._id = t || (0, i.randomBytesHex)(16)),
            (this._secret = r || (0, i.randomBytesHex)(32)),
            (this._key = new n.sha256()
              .update(`${this._id}, ${this._secret} WalletLink`)
              .digest("hex")),
            (this._linked = !!s);
        }
        static load(e) {
          let t = e.getItem(s),
            r = e.getItem(o),
            n = e.getItem(a);
          return t && n ? new c(e, t, n, "1" === r) : null;
        }
        get id() {
          return this._id;
        }
        get secret() {
          return this._secret;
        }
        get key() {
          return this._key;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this._storage.setItem(s, this._id),
            this._storage.setItem(a, this._secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this._storage.setItem(o, this._linked ? "1" : "0");
        }
      }
      t.WalletLinkSession = c;
    },
    35593: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isErrorResponse = void 0),
        (t.isErrorResponse = function (e) {
          return void 0 !== e.errorMessage;
        });
    },
    6099: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WLMobileRelayUI = void 0);
      let n = r(77626),
        i = r(37679),
        s = r(62480);
      t.WLMobileRelayUI = class {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new n.RedirectDialog());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL(s.CBW_MOBILE_DEEPLINK_URL);
          t.searchParams.append("redirect_url", (0, i.getLocation)().href),
            e && t.searchParams.append("wl_url", e);
          let r = document.createElement("a");
          (r.target = "cbw-opener"),
            (r.href = t.href),
            (r.rel = "noreferrer noopener"),
            r.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      };
    },
    49982: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkRelayUI = void 0);
      let n = r(34809),
        i = r(5789);
      t.WalletLinkRelayUI = class {
        constructor() {
          (this.attached = !1), (this.snackbar = new i.Snackbar());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            (0, n.injectCssReset)();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      };
    },
    34023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default =
          ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}");
    },
    77626: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RedirectDialog = void 0);
      let i = n(r(3949)),
        s = r(33847),
        a = r(34809),
        o = r(5789),
        c = r(37679),
        l = n(r(34023));
      t.RedirectDialog = class {
        constructor() {
          (this.root = null), (this.darkMode = (0, c.isDarkMode)());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            (0, a.injectCssReset)();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, s.render)(null, this.root),
            e &&
              (0, s.render)(
                (0, s.h)(
                  d,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      };
      let d = ({
        title: e,
        buttonText: t,
        darkMode: r,
        onButtonClick: n,
        onDismiss: a,
      }) =>
        (0, s.h)(
          o.SnackbarContainer,
          { darkMode: r },
          (0, s.h)(
            "div",
            { class: "-cbwsdk-redirect-dialog" },
            (0, s.h)("style", null, l.default),
            (0, s.h)("div", {
              class: "-cbwsdk-redirect-dialog-backdrop",
              onClick: a,
            }),
            (0, s.h)(
              "div",
              {
                class: (0, i.default)(
                  "-cbwsdk-redirect-dialog-box",
                  r ? "dark" : "light"
                ),
              },
              (0, s.h)("p", null, e),
              (0, s.h)("button", { onClick: n }, t)
            )
          )
        );
    },
    58437: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default =
          ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}");
    },
    5789: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0);
      let i = n(r(3949)),
        s = r(33847),
        a = r(34619),
        o = r(37679),
        c = n(r(58437));
      t.Snackbar = class {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = (0, o.isDarkMode)());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, s.render)(
              (0, s.h)(
                "div",
                null,
                (0, s.h)(
                  t.SnackbarContainer,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, r]) =>
                    (0, s.h)(
                      t.SnackbarInstance,
                      Object.assign({}, r, { key: e })
                    )
                  )
                )
              ),
              this.root
            );
        }
      };
      let l = (e) =>
        (0, s.h)(
          "div",
          { class: (0, i.default)("-cbwsdk-snackbar-container") },
          (0, s.h)("style", null, c.default),
          (0, s.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
        );
      t.SnackbarContainer = l;
      let d = ({ autoExpand: e, message: t, menuItems: r }) => {
        let [n, o] = (0, a.useState)(!0),
          [c, l] = (0, a.useState)(null != e && e);
        (0, a.useEffect)(() => {
          let e = [
            window.setTimeout(() => {
              o(!1);
            }, 1),
            window.setTimeout(() => {
              l(!0);
            }, 1e4),
          ];
          return () => {
            e.forEach(window.clearTimeout);
          };
        });
        let d = () => {
          l(!c);
        };
        return (0, s.h)(
          "div",
          {
            class: (0, i.default)(
              "-cbwsdk-snackbar-instance",
              n && "-cbwsdk-snackbar-instance-hidden",
              c && "-cbwsdk-snackbar-instance-expanded"
            ),
          },
          (0, s.h)(
            "div",
            { class: "-cbwsdk-snackbar-instance-header", onClick: d },
            (0, s.h)("img", {
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
              class: "-cbwsdk-snackbar-instance-header-cblogo",
            }),
            " ",
            (0, s.h)(
              "div",
              { class: "-cbwsdk-snackbar-instance-header-message" },
              t
            ),
            (0, s.h)(
              "div",
              { class: "-gear-container" },
              !c &&
                (0, s.h)(
                  "svg",
                  {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  (0, s.h)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "12",
                    fill: "#F5F7F8",
                  })
                ),
              (0, s.h)("img", {
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                class: "-gear-icon",
                title: "Expand",
              })
            )
          ),
          r &&
            r.length > 0 &&
            (0, s.h)(
              "div",
              { class: "-cbwsdk-snackbar-instance-menu" },
              r.map((e, t) =>
                (0, s.h)(
                  "div",
                  {
                    class: (0, i.default)(
                      "-cbwsdk-snackbar-instance-menu-item",
                      e.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"
                    ),
                    onClick: e.onClick,
                    key: t,
                  },
                  (0, s.h)(
                    "svg",
                    {
                      width: e.svgWidth,
                      height: e.svgHeight,
                      viewBox: "0 0 10 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    (0, s.h)("path", {
                      "fill-rule": e.defaultFillRule,
                      "clip-rule": e.defaultClipRule,
                      d: e.path,
                      fill: "#AAAAAA",
                    })
                  ),
                  (0, s.h)(
                    "span",
                    {
                      class: (0, i.default)(
                        "-cbwsdk-snackbar-instance-menu-item-info",
                        e.isRed &&
                          "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                      ),
                    },
                    e.info
                  )
                )
              )
            )
        );
      };
      t.SnackbarInstance = d;
    },
    71071: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default =
          '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}');
    },
    34809: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.injectCssReset = void 0);
      let i = n(r(71071));
      t.injectCssReset = function () {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(document.createTextNode(i.default)),
          document.documentElement.appendChild(e);
      };
    },
    37679: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isDarkMode = t.isMobileWeb = t.getLocation = t.createQrUrl = void 0),
        (t.createQrUrl = function (e, t, r, n, i, s) {
          let a = new URLSearchParams({
              [n ? "parent-id" : "id"]: e,
              secret: t,
              server: r,
              v: i,
              chainId: s.toString(),
            }).toString(),
            o = `${r}/#/link?${a}`;
          return o;
        }),
        (t.getLocation = function () {
          try {
            if (
              (function () {
                try {
                  return null !== window.frameElement;
                } catch (e) {
                  return !1;
                }
              })() &&
              window.top
            )
              return window.top.location;
            return window.location;
          } catch (e) {
            return window.location;
          }
        }),
        (t.isMobileWeb = function () {
          var e;
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            null === (e = null == window ? void 0 : window.navigator) ||
              void 0 === e
              ? void 0
              : e.userAgent
          );
        }),
        (t.isDarkMode = function () {
          var e, t;
          return (
            null !==
              (t =
                null === (e = null == window ? void 0 : window.matchMedia) ||
                void 0 === e
                  ? void 0
                  : e.call(window, "(prefers-color-scheme: dark)").matches) &&
            void 0 !== t &&
            t
          );
        });
    },
    2696: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ScopedLocalStorage = void 0);
      class r {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let r = 0; r < localStorage.length; r++) {
            let n = localStorage.key(r);
            "string" == typeof n && n.startsWith(e) && t.push(n);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new r("CBWSDK").clear(), new r("walletlink").clear();
        }
      }
      t.ScopedLocalStorage = r;
    },
    93106: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decryptContent =
          t.encryptContent =
          t.importKeyFromHexString =
          t.exportKeyToHexString =
          t.decrypt =
          t.encrypt =
          t.deriveSharedSecret =
          t.generateKeyPair =
            void 0);
      let n = r(95424);
      async function i() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function s(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function a(e, t) {
        let r = crypto.getRandomValues(new Uint8Array(12)),
          n = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: r },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: r, cipherText: n };
      }
      async function o(e, { iv: t, cipherText: r }) {
        let n = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, r);
        return new TextDecoder().decode(n);
      }
      function c(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function l(e, t) {
        let r = c(e),
          i = await crypto.subtle.exportKey(r, t);
        return (0, n.uint8ArrayToHex)(new Uint8Array(i));
      }
      async function d(e, t) {
        let r = c(e),
          i = (0, n.hexStringToUint8Array)(t).buffer;
        return await crypto.subtle.importKey(
          r,
          i,
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function u(e, t) {
        let r = JSON.stringify(e, (e, t) =>
          t instanceof Error
            ? Object.assign(Object.assign({}, t.code ? { code: t.code } : {}), {
                message: t.message,
              })
            : t
        );
        return a(t, r);
      }
      async function h(e, t) {
        return JSON.parse(await o(t, e));
      }
      (t.generateKeyPair = i),
        (t.deriveSharedSecret = s),
        (t.encrypt = a),
        (t.decrypt = o),
        (t.exportKeyToHexString = l),
        (t.importKeyFromHexString = d),
        (t.encryptContent = u),
        (t.decryptContent = h);
    },
    75736: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.checkErrorForInvalidRequestArgs =
          t.getCoinbaseInjectedProvider =
          t.getCoinbaseInjectedSigner =
          t.fetchRPCRequest =
            void 0);
      let n = r(53329),
        i = r(60397);
      async function s(e, t) {
        if (!t.rpcUrl)
          throw i.standardErrors.rpc.internal("No RPC URL set for chain");
        let r = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          s = await window.fetch(t.rpcUrl, {
            method: "POST",
            body: JSON.stringify(r),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": n.LIB_VERSION,
            },
          }),
          a = await s.json();
        return a.result;
      }
      function a() {
        let e = globalThis;
        return e.coinbaseWalletSigner;
      }
      (t.fetchRPCRequest = s),
        (t.getCoinbaseInjectedSigner = a),
        (t.getCoinbaseInjectedProvider = function ({
          metadata: e,
          preference: t,
        }) {
          var r;
          if ("smartWalletOnly" !== t.options) {
            let t = a();
            if (t) return;
            let n = (function () {
              let e = globalThis;
              return e.coinbaseWalletExtension;
            })();
            if (n) {
              let { appName: t, appLogoUrl: i, appChainIds: s } = e;
              return (
                null === (r = n.setAppInfo) ||
                  void 0 === r ||
                  r.call(n, t, i, s),
                n
              );
            }
          }
          let n = (function () {
            var e, t;
            try {
              let r = globalThis;
              return null !== (e = r.ethereum) && void 0 !== e
                ? e
                : null === (t = r.top) || void 0 === t
                ? void 0
                : t.ethereum;
            } catch (e) {
              return;
            }
          })();
          if (null == n ? void 0 : n.isCoinbaseBrowser) return n;
        }),
        (t.checkErrorForInvalidRequestArgs = function (e) {
          if (!e || "object" != typeof e || Array.isArray(e))
            return i.standardErrors.rpc.invalidParams({
              message: "Expected a single, non-array, object argument.",
              data: e,
            });
          let { method: t, params: r } = e;
          return "string" != typeof t || 0 === t.length
            ? i.standardErrors.rpc.invalidParams({
                message: "'args.method' must be a non-empty string.",
                data: e,
              })
            : void 0 === r ||
              Array.isArray(r) ||
              ("object" == typeof r && null !== r)
            ? void 0
            : i.standardErrors.rpc.invalidParams({
                message:
                  "'args.params' must be an object or array if provided.",
                data: e,
              });
        });
    },
    69322: function (e, t, r) {
      var n = r(85763).lW;
      let i = r(4573);
      function s(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        if ("fixed" === e) return "fixed128x128";
        if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function a(e) {
        return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [parseInt(t[1], 10), parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : parseInt(t[2], 10)) : null;
      }
      function l(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function d(e, t) {
        if ("address" === e) return d("uint160", l(t));
        if ("bool" === e) return d("uint8", t ? 1 : 0);
        if ("string" === e) return d("bytes", new n(t, "utf8"));
        if ((p = e).lastIndexOf("]") === p.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (r = c(e)) && 0 !== r && t.length > r)
            throw Error("Elements exceed array size: " + r);
          for (h in ((u = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            u.push(d(e, t[h]));
          if ("dynamic" === r) {
            var r,
              s,
              u,
              h,
              p,
              f = d("uint256", t.length);
            u.unshift(f);
          }
          return n.concat(u);
        }
        if ("bytes" === e)
          return (
            (t = new n(t)),
            (u = n.concat([d("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (u = n.concat([u, i.zeros(32 - (t.length % 32))])),
            u
          );
        if (e.startsWith("bytes")) {
          if ((r = a(e)) < 1 || r > 32)
            throw Error("Invalid bytes<N> width: " + r);
          return i.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((r = a(e)) % 8 || r < 8 || r > 256)
            throw Error("Invalid uint<N> width: " + r);
          s = l(t);
          let n = i.bitLengthFromBigInt(s);
          if (n > r)
            throw Error("Supplied uint exceeds width: " + r + " vs " + n);
          if (s < 0) throw Error("Supplied uint is negative");
          return i.bufferBEFromBigInt(s, 32);
        } else if (e.startsWith("int")) {
          if ((r = a(e)) % 8 || r < 8 || r > 256)
            throw Error("Invalid int<N> width: " + r);
          s = l(t);
          let n = i.bitLengthFromBigInt(s);
          if (n > r)
            throw Error("Supplied int exceeds width: " + r + " vs " + n);
          let o = i.twosFromBigInt(s, 256);
          return i.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((r = o(e)), (s = l(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return d("uint256", s * BigInt(2) ** BigInt(r[1]));
        } else if (e.startsWith("fixed"))
          return (r = o(e)), d("int256", l(t) * BigInt(2) ** BigInt(r[1]));
        throw Error("Unsupported or invalid type: " + e);
      }
      function u(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var r, o, c = [], d = 0; d < e.length; d++) {
          var u = s(e[d]),
            h = t[d];
          if ("bytes" === u) c.push(h);
          else if ("string" === u) c.push(new n(h, "utf8"));
          else if ("bool" === u) c.push(new n(h ? "01" : "00", "hex"));
          else if ("address" === u) c.push(i.setLength(h, 20));
          else if (u.startsWith("bytes")) {
            if ((r = a(u)) < 1 || r > 32)
              throw Error("Invalid bytes<N> width: " + r);
            c.push(i.setLengthRight(h, r));
          } else if (u.startsWith("uint")) {
            if ((r = a(u)) % 8 || r < 8 || r > 256)
              throw Error("Invalid uint<N> width: " + r);
            o = l(h);
            let e = i.bitLengthFromBigInt(o);
            if (e > r)
              throw Error("Supplied uint exceeds width: " + r + " vs " + e);
            c.push(i.bufferBEFromBigInt(o, r / 8));
          } else if (u.startsWith("int")) {
            if ((r = a(u)) % 8 || r < 8 || r > 256)
              throw Error("Invalid int<N> width: " + r);
            o = l(h);
            let e = i.bitLengthFromBigInt(o);
            if (e > r)
              throw Error("Supplied int exceeds width: " + r + " vs " + e);
            let t = i.twosFromBigInt(o, r);
            c.push(i.bufferBEFromBigInt(t, r / 8));
          } else throw Error("Unsupported or invalid type: " + u);
        }
        return n.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var r = [],
            i = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = s(e[o]),
              u = d(l, t[o]);
            "string" === l || "bytes" === l || "dynamic" === c(l)
              ? (r.push(d("uint256", a)), i.push(u), (a += u.length))
              : r.push(u);
          }
          return n.concat(r.concat(i));
        },
        solidityPack: u,
        soliditySHA3: function (e, t) {
          return i.keccak(u(e, t));
        },
      };
    },
    19630: function (e, t, r) {
      var n = r(85763).lW;
      let i = r(4573),
        s = r(69322),
        a = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        o = {
          encodeData(e, t, r, a = !0) {
            let o = ["bytes32"],
              c = [this.hashType(e, r)];
            if (a) {
              let l = (e, t, o) => {
                if (void 0 !== r[t])
                  return [
                    "bytes32",
                    null == o
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : i.keccak(this.encodeData(t, o, r, a)),
                  ];
                if (void 0 === o)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", i.keccak(o)];
                if ("string" === t)
                  return (
                    "string" == typeof o && (o = n.from(o, "utf8")),
                    ["bytes32", i.keccak(o)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let r = t.slice(0, t.lastIndexOf("[")),
                    n = o.map((t) => l(e, r, t));
                  return [
                    "bytes32",
                    i.keccak(
                      s.rawEncode(
                        n.map(([e]) => e),
                        n.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let n of r[e]) {
                let [e, r] = l(n.name, n.type, t[n.name]);
                o.push(e), c.push(r);
              }
            } else
              for (let s of r[e]) {
                let e = t[s.name];
                if (void 0 !== e) {
                  if ("bytes" === s.type)
                    o.push("bytes32"), (e = i.keccak(e)), c.push(e);
                  else if ("string" === s.type)
                    o.push("bytes32"),
                      "string" == typeof e && (e = n.from(e, "utf8")),
                      (e = i.keccak(e)),
                      c.push(e);
                  else if (void 0 !== r[s.type])
                    o.push("bytes32"),
                      (e = i.keccak(this.encodeData(s.type, e, r, a))),
                      c.push(e);
                  else if (s.type.lastIndexOf("]") === s.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else o.push(s.type), c.push(e);
                }
              }
            return s.rawEncode(o, c);
          },
          encodeType(e, t) {
            let r = "",
              n = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let i of (n = [e].concat(n.sort()))) {
              let e = t[i];
              if (!e) throw Error("No type definition specified: " + i);
              r +=
                i +
                "(" +
                t[i].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return r;
          },
          findTypeDependencies(e, t, r = []) {
            if (((e = e.match(/^\w*/)[0]), r.includes(e) || void 0 === t[e]))
              return r;
            for (let n of (r.push(e), t[e]))
              for (let e of this.findTypeDependencies(n.type, t, r))
                r.includes(e) || r.push(e);
            return r;
          },
          hashStruct(e, t, r, n = !0) {
            return i.keccak(this.encodeData(e, t, r, n));
          },
          hashType(e, t) {
            return i.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let r in a.properties) e[r] && (t[r] = e[r]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let r = this.sanitizeData(e),
              s = [n.from("1901", "hex")];
            return (
              s.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
              "EIP712Domain" !== r.primaryType &&
                s.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
              i.keccak(n.concat(s))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: a,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let r = e.map(function (e) {
                return "bytes" === e.type ? i.toBuffer(e.value) : e.value;
              }),
              n = e.map(function (e) {
                return e.type;
              }),
              a = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return s.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                s.soliditySHA3(Array(e.length).fill("string"), a),
                s.soliditySHA3(n, r),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    4573: function (e, t, r) {
      var n = r(85763).lW;
      let i = r(77270);
      function s(e) {
        return n.allocUnsafe(e).fill(0);
      }
      function a(e, t) {
        let r = e.toString(16);
        r.length % 2 != 0 && (r = "0" + r);
        let i = r.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; i.length < t; ) i.unshift(0);
        return n.from(i);
      }
      function o(e, t, r) {
        let n = s(t);
        return ((e = c(e)), r)
          ? e.length < t
            ? (e.copy(n), n)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(n, t - e.length), n)
          : e.slice(-t);
      }
      function c(e) {
        if (!n.isBuffer(e)) {
          if (Array.isArray(e)) e = n.from(e);
          else if ("string" == typeof e) {
            var t;
            e = l(e)
              ? n.from((t = d(e)).length % 2 ? "0" + t : t, "hex")
              : n.from(e);
          } else if ("number" == typeof e) e = intToBuffer(e);
          else if (null == e) e = n.allocUnsafe(0);
          else if ("bigint" == typeof e) e = a(e);
          else if (e.toArray) e = n.from(e.toArray());
          else throw Error("invalid type");
        }
        return e;
      }
      function l(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function d(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros: s,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: d,
        toBuffer: c,
        bufferToHex: function (e) {
          return "0x" + (e = c(e)).toString("hex");
        },
        keccak: function (e, t) {
          return (
            (e = c(e)),
            t || (t = 256),
            i("keccak" + t)
              .update(e)
              .digest()
          );
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: a,
        twosFromBigInt: function (e, t) {
          let r;
          if (e < 0n) {
            let n = (1n << BigInt(t)) - 1n;
            r = (~e & n) + 1n;
          } else r = e;
          return r & ((1n << BigInt(t)) - 1n);
        },
      };
    },
    53329: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LIB_VERSION = void 0),
        (t.LIB_VERSION = "4.0.4");
    },
    85763: function (e, t, r) {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ let n = r(95766),
        i = r(62333),
        s =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function a(e) {
        if (e > 2147483647)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, o.prototype), t;
      }
      function o(e, t, r) {
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return d(e);
        }
        return c(e, t, r);
      }
      function c(e, t, r) {
        if ("string" == typeof e)
          return (function (e, t) {
            if (
              (("string" != typeof t || "" === t) && (t = "utf8"),
              !o.isEncoding(t))
            )
              throw TypeError("Unknown encoding: " + t);
            let r = 0 | f(e, t),
              n = a(r),
              i = n.write(e, t);
            return i !== r && (n = n.slice(0, i)), n;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (T(e, Uint8Array)) {
              let t = new Uint8Array(e);
              return h(t.buffer, t.byteOffset, t.byteLength);
            }
            return u(e);
          })(e);
        if (null == e)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e
          );
        if (
          T(e, ArrayBuffer) ||
          (e && T(e.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (T(e, SharedArrayBuffer) || (e && T(e.buffer, SharedArrayBuffer))))
        )
          return h(e, t, r);
        if ("number" == typeof e)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        let n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return o.from(n, t, r);
        let i = (function (e) {
          var t;
          if (o.isBuffer(e)) {
            let t = 0 | p(e.length),
              r = a(t);
            return 0 === r.length || e.copy(r, 0, 0, t), r;
          }
          return void 0 !== e.length
            ? "number" != typeof e.length || (t = e.length) != t
              ? a(0)
              : u(e)
            : "Buffer" === e.type && Array.isArray(e.data)
            ? u(e.data)
            : void 0;
        })(e);
        if (i) return i;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof e[Symbol.toPrimitive]
        )
          return o.from(e[Symbol.toPrimitive]("string"), t, r);
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e
        );
      }
      function l(e) {
        if ("number" != typeof e)
          throw TypeError('"size" argument must be of type number');
        if (e < 0)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
      }
      function d(e) {
        return l(e), a(e < 0 ? 0 : 0 | p(e));
      }
      function u(e) {
        let t = e.length < 0 ? 0 : 0 | p(e.length),
          r = a(t);
        for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
        return r;
      }
      function h(e, t, r) {
        let n;
        if (t < 0 || e.byteLength < t)
          throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === t && void 0 === r
                ? new Uint8Array(e)
                : void 0 === r
                ? new Uint8Array(e, t)
                : new Uint8Array(e, t, r)),
            o.prototype
          ),
          n
        );
      }
      function p(e) {
        if (e >= 2147483647)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
          );
        return 0 | e;
      }
      function f(e, t) {
        if (o.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || T(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e
          );
        let r = e.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return N(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return j(e).length;
            default:
              if (i) return n ? -1 : N(e).length;
              (t = ("" + t).toLowerCase()), (i = !0);
          }
      }
      function g(e, t, r) {
        let i = !1;
        if (
          ((void 0 === t || t < 0) && (t = 0),
          t > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (t >>>= 0)))
        )
          return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return (function (e, t, r) {
                let n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                let i = "";
                for (let n = t; n < r; ++n) i += B[e[n]];
                return i;
              })(this, t, r);
            case "utf8":
            case "utf-8":
              return w(this, t, r);
            case "ascii":
              return (function (e, t, r) {
                let n = "";
                r = Math.min(e.length, r);
                for (let i = t; i < r; ++i)
                  n += String.fromCharCode(127 & e[i]);
                return n;
              })(this, t, r);
            case "latin1":
            case "binary":
              return (function (e, t, r) {
                let n = "";
                r = Math.min(e.length, r);
                for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n;
              })(this, t, r);
            case "base64":
              var s, a;
              return (
                (s = t),
                (a = r),
                0 === s && a === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(s, a))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (e, t, r) {
                let n = e.slice(t, r),
                  i = "";
                for (let e = 0; e < n.length - 1; e += 2)
                  i += String.fromCharCode(n[e] + 256 * n[e + 1]);
                return i;
              })(this, t, r);
            default:
              if (i) throw TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (i = !0);
          }
      }
      function m(e, t, r) {
        let n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function y(e, t, r, n, i) {
        var s;
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (s = r = +r) != s && (r = i ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof t && (t = o.from(t, n)), o.isBuffer(t)))
          return 0 === t.length ? -1 : b(e, t, r, n, i);
        if ("number" == typeof t)
          return ((t &= 255), "function" == typeof Uint8Array.prototype.indexOf)
            ? i
              ? Uint8Array.prototype.indexOf.call(e, t, r)
              : Uint8Array.prototype.lastIndexOf.call(e, t, r)
            : b(e, [t], r, n, i);
        throw TypeError("val must be string, number or Buffer");
      }
      function b(e, t, r, n, i) {
        let s,
          a = 1,
          o = e.length,
          c = t.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (a = 2), (o /= 2), (c /= 2), (r /= 2);
        }
        function l(e, t) {
          return 1 === a ? e[t] : e.readUInt16BE(t * a);
        }
        if (i) {
          let n = -1;
          for (s = r; s < o; s++)
            if (l(e, s) === l(t, -1 === n ? 0 : s - n)) {
              if ((-1 === n && (n = s), s - n + 1 === c)) return n * a;
            } else -1 !== n && (s -= s - n), (n = -1);
        } else
          for (r + c > o && (r = o - c), s = r; s >= 0; s--) {
            let r = !0;
            for (let n = 0; n < c; n++)
              if (l(e, s + n) !== l(t, n)) {
                r = !1;
                break;
              }
            if (r) return s;
          }
        return -1;
      }
      function w(e, t, r) {
        r = Math.min(e.length, r);
        let n = [],
          i = t;
        for (; i < r; ) {
          let t = e[i],
            s = null,
            a = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
          if (i + a <= r) {
            let r, n, o, c;
            switch (a) {
              case 1:
                t < 128 && (s = t);
                break;
              case 2:
                (192 & (r = e[i + 1])) == 128 &&
                  (c = ((31 & t) << 6) | (63 & r)) > 127 &&
                  (s = c);
                break;
              case 3:
                (r = e[i + 1]),
                  (n = e[i + 2]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (c = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)) >
                      2047 &&
                    (c < 55296 || c > 57343) &&
                    (s = c);
                break;
              case 4:
                (r = e[i + 1]),
                  (n = e[i + 2]),
                  (o = e[i + 3]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (192 & o) == 128 &&
                    (c =
                      ((15 & t) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & o)) > 65535 &&
                    c < 1114112 &&
                    (s = c);
            }
          }
          null === s
            ? ((s = 65533), (a = 1))
            : s > 65535 &&
              ((s -= 65536),
              n.push(((s >>> 10) & 1023) | 55296),
              (s = 56320 | (1023 & s))),
            n.push(s),
            (i += a);
        }
        return (function (e) {
          let t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          let r = "",
            n = 0;
          for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function v(e, t, r) {
        if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
        if (e + t > r)
          throw RangeError("Trying to access beyond buffer length");
      }
      function E(e, t, r, n, i, s) {
        if (!o.isBuffer(e))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < s)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw RangeError("Index out of range");
      }
      function S(e, t, r, n, i) {
        x(t, n, i, e, r, 7);
        let s = Number(t & BigInt(4294967295));
        (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s);
        let a = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[r++] = a),
          (a >>= 8),
          (e[r++] = a),
          (a >>= 8),
          (e[r++] = a),
          (a >>= 8),
          (e[r++] = a),
          r
        );
      }
      function I(e, t, r, n, i) {
        x(t, n, i, e, r, 7);
        let s = Number(t & BigInt(4294967295));
        (e[r + 7] = s),
          (s >>= 8),
          (e[r + 6] = s),
          (s >>= 8),
          (e[r + 5] = s),
          (s >>= 8),
          (e[r + 4] = s);
        let a = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[r + 3] = a),
          (a >>= 8),
          (e[r + 2] = a),
          (a >>= 8),
          (e[r + 1] = a),
          (a >>= 8),
          (e[r] = a),
          r + 8
        );
      }
      function C(e, t, r, n, i, s) {
        if (r + n > e.length || r < 0) throw RangeError("Index out of range");
      }
      function _(e, t, r, n, s) {
        return (
          (t = +t),
          (r >>>= 0),
          s || C(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(e, t, r, n, 23, 4),
          r + 4
        );
      }
      function k(e, t, r, n, s) {
        return (
          (t = +t),
          (r >>>= 0),
          s || C(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
          i.write(e, t, r, n, 52, 8),
          r + 8
        );
      }
      (t.lW = o),
        (t.h2 = 50),
        (o.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })()),
        o.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(o.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (o.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(o.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (o.isBuffer(this)) return this.byteOffset;
          },
        }),
        (o.poolSize = 8192),
        (o.from = function (e, t, r) {
          return c(e, t, r);
        }),
        Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(o, Uint8Array),
        (o.alloc = function (e, t, r) {
          return (l(e), e <= 0)
            ? a(e)
            : void 0 !== t
            ? "string" == typeof r
              ? a(e).fill(t, r)
              : a(e).fill(t)
            : a(e);
        }),
        (o.allocUnsafe = function (e) {
          return d(e);
        }),
        (o.allocUnsafeSlow = function (e) {
          return d(e);
        }),
        (o.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== o.prototype;
        }),
        (o.compare = function (e, t) {
          if (
            (T(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)),
            T(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)),
            !o.isBuffer(e) || !o.isBuffer(t))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (e === t) return 0;
          let r = e.length,
            n = t.length;
          for (let i = 0, s = Math.min(r, n); i < s; ++i)
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (o.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (o.concat = function (e, t) {
          let r;
          if (!Array.isArray(e))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return o.alloc(0);
          if (void 0 === t)
            for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
          let n = o.allocUnsafe(t),
            i = 0;
          for (r = 0; r < e.length; ++r) {
            let t = e[r];
            if (T(t, Uint8Array))
              i + t.length > n.length
                ? (o.isBuffer(t) || (t = o.from(t)), t.copy(n, i))
                : Uint8Array.prototype.set.call(n, t, i);
            else if (o.isBuffer(t)) t.copy(n, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += t.length;
          }
          return n;
        }),
        (o.byteLength = f),
        (o.prototype._isBuffer = !0),
        (o.prototype.swap16 = function () {
          let e = this.length;
          if (e % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (let t = 0; t < e; t += 2) m(this, t, t + 1);
          return this;
        }),
        (o.prototype.swap32 = function () {
          let e = this.length;
          if (e % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (let t = 0; t < e; t += 4)
            m(this, t, t + 3), m(this, t + 1, t + 2);
          return this;
        }),
        (o.prototype.swap64 = function () {
          let e = this.length;
          if (e % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (let t = 0; t < e; t += 8)
            m(this, t, t + 7),
              m(this, t + 1, t + 6),
              m(this, t + 2, t + 5),
              m(this, t + 3, t + 4);
          return this;
        }),
        (o.prototype.toString = function () {
          let e = this.length;
          return 0 === e
            ? ""
            : 0 == arguments.length
            ? w(this, 0, e)
            : g.apply(this, arguments);
        }),
        (o.prototype.toLocaleString = o.prototype.toString),
        (o.prototype.equals = function (e) {
          if (!o.isBuffer(e)) throw TypeError("Argument must be a Buffer");
          return this === e || 0 === o.compare(this, e);
        }),
        (o.prototype.inspect = function () {
          let e = "",
            r = t.h2;
          return (
            (e = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (e += " ... "),
            "<Buffer " + e + ">"
          );
        }),
        s && (o.prototype[s] = o.prototype.inspect),
        (o.prototype.compare = function (e, t, r, n, i) {
          if (
            (T(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)),
            !o.isBuffer(e))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
          )
            throw RangeError("out of range index");
          if (n >= i && t >= r) return 0;
          if (n >= i) return -1;
          if (t >= r) return 1;
          if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e))
            return 0;
          let s = i - n,
            a = r - t,
            c = Math.min(s, a),
            l = this.slice(n, i),
            d = e.slice(t, r);
          for (let e = 0; e < c; ++e)
            if (l[e] !== d[e]) {
              (s = l[e]), (a = d[e]);
              break;
            }
          return s < a ? -1 : a < s ? 1 : 0;
        }),
        (o.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (o.prototype.indexOf = function (e, t, r) {
          return y(this, e, t, r, !0);
        }),
        (o.prototype.lastIndexOf = function (e, t, r) {
          return y(this, e, t, r, !1);
        }),
        (o.prototype.write = function (e, t, r, n) {
          var i, s, a, o, c, l, d, u;
          if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (n = t), (r = this.length), (t = 0);
          else if (isFinite(t))
            (t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          else
            throw Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          let h = this.length - t;
          if (
            ((void 0 === r || r > h) && (r = h),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          let p = !1;
          for (;;)
            switch (n) {
              case "hex":
                return (function (e, t, r, n) {
                  let i;
                  r = Number(r) || 0;
                  let s = e.length - r;
                  n ? (n = Number(n)) > s && (n = s) : (n = s);
                  let a = t.length;
                  for (n > a / 2 && (n = a / 2), i = 0; i < n; ++i) {
                    let n = parseInt(t.substr(2 * i, 2), 16);
                    if (n != n) break;
                    e[r + i] = n;
                  }
                  return i;
                })(this, e, t, r);
              case "utf8":
              case "utf-8":
                return (i = t), (s = r), U(N(e, this.length - i), this, i, s);
              case "ascii":
              case "latin1":
              case "binary":
                return (
                  (a = t),
                  (o = r),
                  U(
                    (function (e) {
                      let t = [];
                      for (let r = 0; r < e.length; ++r)
                        t.push(255 & e.charCodeAt(r));
                      return t;
                    })(e),
                    this,
                    a,
                    o
                  )
                );
              case "base64":
                return (c = t), (l = r), U(j(e), this, c, l);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (
                  (d = t),
                  (u = r),
                  U(
                    (function (e, t) {
                      let r, n;
                      let i = [];
                      for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
                        (n = (r = e.charCodeAt(s)) >> 8),
                          i.push(r % 256),
                          i.push(n);
                      return i;
                    })(e, this.length - d),
                    this,
                    d,
                    u
                  )
                );
              default:
                if (p) throw TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (p = !0);
            }
        }),
        (o.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (o.prototype.slice = function (e, t) {
          let r = this.length;
          (e = ~~e),
            (t = void 0 === t ? r : ~~t),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e);
          let n = this.subarray(e, t);
          return Object.setPrototypeOf(n, o.prototype), n;
        }),
        (o.prototype.readUintLE = o.prototype.readUIntLE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
            let n = this[e],
              i = 1,
              s = 0;
            for (; ++s < t && (i *= 256); ) n += this[e + s] * i;
            return n;
          }),
        (o.prototype.readUintBE = o.prototype.readUIntBE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
            let n = this[e + --t],
              i = 1;
            for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
            return n;
          }),
        (o.prototype.readUint8 = o.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || v(e, 1, this.length), this[e];
          }),
        (o.prototype.readUint16LE = o.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (o.prototype.readUint16BE = o.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (o.prototype.readUint32LE = o.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
        (o.prototype.readUint32BE = o.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (o.prototype.readBigUInt64LE = D(function (e) {
          R((e >>>= 0), "offset");
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && P(e, this.length - 8);
          let n =
              t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e],
            i = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * r;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (o.prototype.readBigUInt64BE = D(function (e) {
          R((e >>>= 0), "offset");
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && P(e, this.length - 8);
          let n =
              16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
            i = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (o.prototype.readIntLE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
          let n = this[e],
            i = 1,
            s = 0;
          for (; ++s < t && (i *= 256); ) n += this[e + s] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }),
        (o.prototype.readIntBE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
          let n = t,
            i = 1,
            s = this[e + --n];
          for (; n > 0 && (i *= 256); ) s += this[e + --n] * i;
          return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s;
        }),
        (o.prototype.readInt8 = function (e, t) {
          return ((e >>>= 0), t || v(e, 1, this.length), 128 & this[e])
            ? -((255 - this[e] + 1) * 1)
            : this[e];
        }),
        (o.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || v(e, 2, this.length);
          let r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (o.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || v(e, 2, this.length);
          let r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (o.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || v(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (o.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || v(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (o.prototype.readBigInt64LE = D(function (e) {
          R((e >>>= 0), "offset");
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && P(e, this.length - 8);
          let n =
            this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
          return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
              t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e]
            )
          );
        })),
        (o.prototype.readBigInt64BE = D(function (e) {
          R((e >>>= 0), "offset");
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && P(e, this.length - 8);
          let n = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
          return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
              16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r
            )
          );
        })),
        (o.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 4, this.length), i.read(this, e, !0, 23, 4)
          );
        }),
        (o.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 4, this.length), i.read(this, e, !1, 23, 4)
          );
        }),
        (o.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 8, this.length), i.read(this, e, !0, 52, 8)
          );
        }),
        (o.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 8, this.length), i.read(this, e, !1, 52, 8)
          );
        }),
        (o.prototype.writeUintLE = o.prototype.writeUIntLE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              E(this, e, t, r, n, 0);
            }
            let i = 1,
              s = 0;
            for (this[t] = 255 & e; ++s < r && (i *= 256); )
              this[t + s] = (e / i) & 255;
            return t + r;
          }),
        (o.prototype.writeUintBE = o.prototype.writeUIntBE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              E(this, e, t, r, n, 0);
            }
            let i = r - 1,
              s = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
              this[t + i] = (e / s) & 255;
            return t + r;
          }),
        (o.prototype.writeUint8 = o.prototype.writeUInt8 =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || E(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (o.prototype.writeUint16LE = o.prototype.writeUInt16LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || E(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (o.prototype.writeUint16BE = o.prototype.writeUInt16BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || E(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (o.prototype.writeUint32LE = o.prototype.writeUInt32LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || E(this, e, t, 4, 4294967295, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (o.prototype.writeUint32BE = o.prototype.writeUInt32BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || E(this, e, t, 4, 4294967295, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (o.prototype.writeBigUInt64LE = D(function (e, t = 0) {
          return S(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (o.prototype.writeBigUInt64BE = D(function (e, t = 0) {
          return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (o.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            E(this, e, t, r, n - 1, -n);
          }
          let i = 0,
            s = 1,
            a = 0;
          for (this[t] = 255 & e; ++i < r && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1),
              (this[t + i] = (((e / s) >> 0) - a) & 255);
          return t + r;
        }),
        (o.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            E(this, e, t, r, n - 1, -n);
          }
          let i = r - 1,
            s = 1,
            a = 0;
          for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1),
              (this[t + i] = (((e / s) >> 0) - a) & 255);
          return t + r;
        }),
        (o.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || E(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (o.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || E(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (o.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || E(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (o.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || E(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (o.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || E(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (o.prototype.writeBigInt64LE = D(function (e, t = 0) {
          return S(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (o.prototype.writeBigInt64BE = D(function (e, t = 0) {
          return I(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (o.prototype.writeFloatLE = function (e, t, r) {
          return _(this, e, t, !0, r);
        }),
        (o.prototype.writeFloatBE = function (e, t, r) {
          return _(this, e, t, !1, r);
        }),
        (o.prototype.writeDoubleLE = function (e, t, r) {
          return k(this, e, t, !0, r);
        }),
        (o.prototype.writeDoubleBE = function (e, t, r) {
          return k(this, e, t, !1, r);
        }),
        (o.prototype.copy = function (e, t, r, n) {
          if (!o.isBuffer(e)) throw TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === e.length || 0 === this.length)
          )
            return 0;
          if (t < 0) throw RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw RangeError("Index out of range");
          if (n < 0) throw RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          let i = n - r;
          return (
            this === e && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, n)
              : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
            i
          );
        }),
        (o.prototype.fill = function (e, t, r, n) {
          let i;
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof n && !o.isEncoding(n))
              throw TypeError("Unknown encoding: " + n);
            if (1 === e.length) {
              let t = e.charCodeAt(0);
              (("utf8" === n && t < 128) || "latin1" === n) && (e = t);
            }
          } else
            "number" == typeof e
              ? (e &= 255)
              : "boolean" == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r)
            throw RangeError("Out of range index");
          if (r <= t) return this;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (i = t; i < r; ++i) this[i] = e;
          else {
            let s = o.isBuffer(e) ? e : o.from(e, n),
              a = s.length;
            if (0 === a)
              throw TypeError(
                'The value "' + e + '" is invalid for argument "value"'
              );
            for (i = 0; i < r - t; ++i) this[i + t] = s[i % a];
          }
          return this;
        });
      let M = {};
      function A(e, t, r) {
        M[e] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function L(e) {
        let t = "",
          r = e.length,
          n = "-" === e[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      function x(e, t, r, n, i, s) {
        if (e > r || e < t) {
          let n;
          let i = "bigint" == typeof t ? "n" : "";
          throw (
            ((n =
              s > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${i} and < 2${i} ** ${(s + 1) * 8}${i}`
                  : `>= -(2${i} ** ${(s + 1) * 8 - 1}${i}) and < 2 ** ${
                      (s + 1) * 8 - 1
                    }${i}`
                : `>= ${t}${i} and <= ${r}${i}`),
            new M.ERR_OUT_OF_RANGE("value", n, e))
          );
        }
        R(i, "offset"),
          (void 0 === n[i] || void 0 === n[i + s]) && P(i, n.length - (s + 1));
      }
      function R(e, t) {
        if ("number" != typeof e)
          throw new M.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      function P(e, t, r) {
        if (Math.floor(e) !== e)
          throw (
            (R(e, r), new M.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
          );
        if (t < 0) throw new M.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new M.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${t}`,
          e
        );
      }
      A(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        A(
          "ERR_INVALID_ARG_TYPE",
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError
        ),
        A(
          "ERR_OUT_OF_RANGE",
          function (e, t, r) {
            let n = `The value of "${e}" is out of range.`,
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 4294967296
                ? (i = L(String(r)))
                : "bigint" == typeof r &&
                  ((i = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (i = L(i)),
                  (i += "n")),
              (n += ` It must be ${t}. Received ${i}`)
            );
          },
          RangeError
        );
      let O = /[^+/0-9A-Za-z-_]/g;
      function N(e, t) {
        let r;
        t = t || 1 / 0;
        let n = e.length,
          i = null,
          s = [];
        for (let a = 0; a < n; ++a) {
          if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || a + 1 === n) {
                (t -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && s.push(239, 191, 189), (i = r);
              continue;
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536;
          } else i && (t -= 3) > -1 && s.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((t -= 1) < 0) break;
            s.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            s.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            s.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error("Invalid code point");
        }
        return s;
      }
      function j(e) {
        return n.toByteArray(
          (function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(O, "")).length < 2)
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function U(e, t, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i)
          t[i + r] = e[i];
        return i;
      }
      function T(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      let B = (function () {
        let e = "0123456789abcdef",
          t = Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = 16 * r;
          for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
        }
        return t;
      })();
      function D(e) {
        return "undefined" == typeof BigInt ? W : e;
      }
      function W() {
        throw Error("BigInt not supported");
      }
    },
    3949: function (e, t, r) {
      "use strict";
      function n() {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              var r,
                n,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (i && (i += " "), (i += n));
                else for (r in t) t[r] && (i && (i += " "), (i += r));
              }
              return i;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      r.r(t),
        r.d(t, {
          clsx: function () {
            return n;
          },
        }),
        (t.default = n);
    },
  },
]);
//# sourceMappingURL=6221.9fee213e16b54185.js.map
