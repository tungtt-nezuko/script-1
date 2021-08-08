(this.webpackJsonpwsg = this.webpackJsonpwsg || []).push([
  [0], {
      1205: function(e, t, n) {},
      1206: function(e, t, n) {},
      1208: function(e, t, n) {},
      1209: function(e, t, n) {},
      1210: function(e, t, n) {},
      1211: function(e, t, n) {},
      1212: function(e, t, n) {
          "use strict";
          n.r(t);
          var a = n(2),
              i = n.n(a),
              r = n(53),
              s = n.n(r),
              o = (n(435), n(39)),
              c = n(30),
              l = n(170),
              d = n(8),
              u = n(423),
              b = (n(57), n(54)),
              p = n(10),
              h = n(4),
              A = n.n(h),
              m = n(7),
              w = (n(441), n(141)),
              f = n.n(w),
              j = n(249),
              g = n.n(j),
              O = n(250),
              v = n.n(O),
              y = "Transactions are currently disabled. Please try again later.",
              x = "The blockchain is currently busy. You will be redirected to my games where you can wait for your game.",
              k = "Lobby has been created!",
              C = "Lobby has been deleted!",
              S = "There was a problem deleting the lobby. Match already in progress..",
              E = "There was a problem creating a new lobby!",
              B = "Price field cannot be empty!",
              N = "Password incorrect!",
              I = "Price field can accept only numbers!",
              T = "Maximum 200 lobbies available per user! Please delete existing or finish your matches.",
              M = "Minimum price to open a wager is 5 $. Maximum price is capped at 100 $.",
              D = "Insufficient funds. Cannot create a new lobby. Please deposit some tokens if you want to play!",
              R = "Insufficient funds. Cannot join this match. Please deposit some tokens if you want to play!",
              W = "Your address is blacklisted. Please contact support for more information!",
              G = "Price is too low or too high! Price must deviate by max 10% than initial bid.",
              F = "Please connect your wallet in order to see your match page!",
              L = "Please connect your wallet in order to see your user page!",
              Q = "You have to be connected with your wallet in order to play the game!",
              P = "You have to be connected with your wallet in order to see your referral programme page!",
              U = "You have successfully claimed:",
              H = "You have successfully claimed all rewards:",
              Z = "Your user information has been updated.",
              J = "You will be able to join the match once the blockchain confirms your transaction...",
              Y = "You have done your part! Now you wait for host to play his game. After he finishes you will get notification who the winner is.",
              z = "Too many attempts made! Game over.",
              V = "You have won!",
              X = "You have lost.",
              K = "Refer code has been successfully saved!",
              q = "Refer code already exists! Choose a unique refer code and try again.",
              _ = "Account activated via referral code successfully!",
              $ = "There was a problem activating your account from provided referral code.. Referral code already activated!",
              ee = "Please use the Binance Smart Chain network to access the website!",
              te = ["The Trader", "Coin Explorer", "The Roller"],
              ne = (f.a, g.a, v.a, [{
                  value: "wsg",
                  label: "WSG"
              }, {
                  value: "wbnb",
                  label: "BNB"
              }, {
                  value: "cake",
                  label: "CAKE"
              }, {
                  value: "doge",
                  label: "DOGE"
              }, {
                  value: "shiba",
                  label: "SHIBA"
              }, {
                  value: "busd",
                  label: "BUSD"
              }, {
                  value: "mcrn",
                  label: "MCRN"
              }, {
                  value: "ava",
                  label: "AVA"
              }, {
                  value: "bake",
                  label: "BAKE"
              }, {
                  value: "juld",
                  label: "JULD"
              }, {
                  value: "twt",
                  label: "TWT"
              }, {
                  value: "sfp",
                  label: "SFP"
              }, {
                  value: "wex",
                  label: "WEX"
              }]),
              ae = [{
                  value: 1,
                  label: "1"
              }, {
                  value: 2,
                  label: "2"
              }, {
                  value: 3,
                  label: "3"
              }, {
                  value: 4,
                  label: "4"
              }, {
                  value: 5,
                  label: "5"
              }, {
                  value: 6,
                  label: "6"
              }, {
                  value: 7,
                  label: "7"
              }, {
                  value: 8,
                  label: "8"
              }, {
                  value: 9,
                  label: "9"
              }, {
                  value: 10,
                  label: "10"
              }],
              ie = function(e) {
                  var t = window.open(e, "_blank", "noopener,noreferrer");
                  t && (t.opener = null)
              },
              re = function(e, t, n) {
                  return e && "" !== e && t ? parseFloat(e * t[n].usd).toFixed(2) : 0
              },
              se = function(e, t, n) {
                  return e && "" !== e && t ? parseFloat(e / t[n].usd).toFixed(5) : 0
              },
              oe = function(e, t) {
                  return !(!e || !t) && e.toLowerCase() === t.toLowerCase()
              },
              ce = function(e) {
                  for (var t = [], n = 0; n < e.length; n++) t.push(!0);
                  return t
              },
              le = function(e) {
                  var t = e;
                  try {
                      e = JSON.parse(e)
                  } catch (n) {
                      e = t
                  }
                  return e
              },
              de = function(e) {
                  return !!e && (56 === (e = Number(e)) || 56 === e || 97 === e || 97 === e)
              },
              ue = function(e, t) {
                  return oe(e, t)
              },
              be = function(e) {
                  return e ? Math.floor(100 * e) + "%" : null
              },
              pe = function(e) {
                  return new Date(1e3 * e).toLocaleString()
              },
              he = function(e) {
                  return te[e]
              },
              Ae = function(e, t, n, a, i, r, s) {
                  t.save(), t.drawImage(e, n, a, i, r), t.restore(), s && s()
              },
              me = function(e, t, n) {
                  var a = Math.max(t.canvas.width / e.width, t.canvas.height / e.height),
                      i = t.canvas.width / 2 - e.width / 2 * a,
                      r = t.canvas.height / 2 - e.height / 2 * a;
                  Ae(e, t, i, r - 5, e.width * a, e.height * a * 1.03, n)
              },
              we = function(e, t, n, a, i, r) {
                  Number(e.status) >= 500 ? i && i() : Number(e.status) >= 400 ? r ? r() : i && i() : Number(e.status) >= 200 && (n && n(), a && a())
              },
              fe = (n(728), n(747)),
              je = "SET_WALLET_CONNECTED",
              ge = "SET_APP_FIRST_OPEN",
              Oe = "SET_CHALLENGE",
              ve = "LOAD_ALL_USER_DATA",
              ye = "SET_CREDENTIALS",
              xe = "SET_USER_DATA",
              ke = "REMEMBER_ME",
              Ce = "REMEMBER_ME_CREDENTIALS",
              Se = "SET_PLAY_GAME",
              Ee = "SET_START_GAME",
              Be = "SET_GAME_OVER",
              Ne = "SET_USER_WALLET",
              Ie = "ACTIVATE_REFERRAL_CODE_FROM",
              Te = "SET_MY_GAMES",
              Me = "SET_LEADERBOARDS",
              De = "SET_GAME_OVER_SCORE_STATUS",
              Re = "SET_MATCH_CREATED",
              We = "SET_LOBBY_CREATED",
              Ge = "SET_LOBBIES",
              Fe = "SET_ACTIVE_LOBBY",
              Le = "SET_ACTIVE_MATCH",
              Qe = "SET_REFERRAL_CODE",
              Pe = "SET_REWARD_CLAIMED",
              Ue = "SET_PRICES",
              He = "SET_MY_GAMES_UPDATES",
              Ze = "REDUCE_MY_GAMES_UPDATES",
              Je = "SET_PENDING_GAMES_COUNT",
              Ye = "SET_BLACKLIST",
              ze = "E5*AyMG3-2=qka$L%8Gnd^bRpEuT&LSx",
              Ve = function(e, t) {
                  var n = {
                      key: e,
                      title: "",
                      practiceMode: t
                  };
                  return n.title = te[e], {
                      type: Se,
                      game: n
                  }
              },
              Xe = function(e) {
                  return {
                      type: Pe,
                      rewardClaimed: e
                  }
              },
              Ke = function(e) {
                  return {
                      type: Qe,
                      referralCode: e
                  }
              },
              qe = function(e) {
                  return {
                      type: Le,
                      match: e
                  }
              },
              _e = function(e) {
                  return {
                      type: Fe,
                      lobby: e
                  }
              },
              $e = function(e) {
                  return {
                      type: We,
                      lobbyCreated: e
                  }
              },
              et = function(e) {
                  return {
                      type: Te,
                      myGames: e
                  }
              },
              tt = function(e) {
                  return {
                      type: Ee,
                      gameStarted: e
                  }
              },
              nt = function(e) {
                  return {
                      type: Be,
                      gameOver: e
                  }
              },
              at = function(e) {
                  return {
                      type: je,
                      walletConnected: e
                  }
              },
              it = function(e) {
                  return {
                      type: xe,
                      user: e
                  }
              },
              rt = function(e) {
                  return {
                      type: Ne,
                      wallet: e
                  }
              },
              st = function(e, t, n, a) {
                  return a && ct(e, t), n && 0 !== n.length ? {
                      type: He,
                      myGamesUpdates: n
                  } : {
                      type: "",
                      "": ""
                  }
              },
              ot = function(e) {
                  return {
                      type: Ze,
                      myGamesUpdate: e
                  }
              },
              ct = function(e, t) {
                  try {
                      localStorage.setItem(e.toLowerCase() + "_my_games", JSON.stringify(t))
                  } catch (n) {
                      throw Error("Error saving data!" + n)
                  }
              },
              lt = function(e, t) {
                  try {
                      localStorage.setItem(e.toLowerCase() + "_my_games_updates", JSON.stringify(t))
                  } catch (n) {
                      throw Error("Error saving data!" + n)
                  }
              },
              dt = function(e, t, n, a) {
                  return function() {
                      var i = Object(m.a)(A.a.mark((function i(r) {
                          var s, o, c;
                          return A.a.wrap((function(i) {
                              for (;;) switch (i.prev = i.next) {
                                  case 0:
                                      return s = {
                                          address: e
                                      }, s = JSON.stringify(s), i.prev = 2, "/rest/api/user", i.next = 6, fetch("/rest/api/user", {
                                          method: "GET",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json",
                                              postData: s
                                          }
                                      });
                                  case 6:
                                      return o = i.sent, i.next = 9, o.json();
                                  case 9:
                                      c = i.sent, we(o, 0, function() {
                                          var t = Object(m.a)(A.a.mark((function t() {
                                              return A.a.wrap((function(t) {
                                                  for (;;) switch (t.prev = t.next) {
                                                      case 0:
                                                          r(it(c)), r(ut(e));
                                                      case 2:
                                                      case "end":
                                                          return t.stop()
                                                  }
                                              }), t)
                                          })));
                                          return function() {
                                              return t.apply(this, arguments)
                                          }
                                      }(), t, n, a), i.next = 17;
                                      break;
                                  case 14:
                                      i.prev = 14, i.t0 = i.catch(2), console.warn("Failed loading user..", i.t0);
                                  case 17:
                                  case "end":
                                      return i.stop()
                              }
                          }), i, null, [
                              [2, 14]
                          ])
                      })));
                      return function(e) {
                          return i.apply(this, arguments)
                      }
                  }()
              },
              ut = function(e, t, n, a) {
                  return function() {
                      var i = Object(m.a)(A.a.mark((function i(r) {
                          var s, o, c;
                          return A.a.wrap((function(i) {
                              for (;;) switch (i.prev = i.next) {
                                  case 0:
                                      return s = {
                                          address: e
                                      }, s = JSON.stringify(s), i.prev = 2, "/rest/api/user/games/my", i.next = 6, fetch("/rest/api/user/games/my", {
                                          method: "GET",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json",
                                              postData: s
                                          }
                                      });
                                  case 6:
                                      return o = i.sent, i.next = 9, o.json();
                                  case 9:
                                      c = i.sent, we(o, 0, function() {
                                          var e = Object(m.a)(A.a.mark((function e() {
                                              return A.a.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                          r(et(c));
                                                      case 1:
                                                      case "end":
                                                          return e.stop()
                                                  }
                                              }), e)
                                          })));
                                          return function() {
                                              return e.apply(this, arguments)
                                          }
                                      }(), t, n, a), i.next = 17;
                                      break;
                                  case 14:
                                      i.prev = 14, i.t0 = i.catch(2), console.warn("Failed obtaining list of my current games and match history..", i.t0);
                                  case 17:
                                  case "end":
                                      return i.stop()
                              }
                          }), i, null, [
                              [2, 14]
                          ])
                      })));
                      return function(e) {
                          return i.apply(this, arguments)
                      }
                  }()
              },
              bt = function() {
                  return function() {
                      var e = Object(m.a)(A.a.mark((function e(t) {
                          var n, a;
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return e.prev = 0, "/rest/api/challenge", e.next = 4, fetch("/rest/api/challenge", {
                                          method: "GET",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json"
                                          }
                                      });
                                  case 4:
                                      return n = e.sent, e.next = 7, n.json();
                                  case 7:
                                      a = e.sent, we(n, 0, function() {
                                          var e = Object(m.a)(A.a.mark((function e() {
                                              return A.a.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                          t({
                                                              type: Oe,
                                                              challenge: a
                                                          });
                                                      case 1:
                                                      case "end":
                                                          return e.stop()
                                                  }
                                              }), e)
                                          })));
                                          return function() {
                                              return e.apply(this, arguments)
                                          }
                                      }()), e.next = 15;
                                      break;
                                  case 12:
                                      e.prev = 12, e.t0 = e.catch(0), console.warn("Failed obtaining challenge practice game id", e.t0);
                                  case 15:
                                  case "end":
                                      return e.stop()
                              }
                          }), e, null, [
                              [0, 12]
                          ])
                      })));
                      return function(t) {
                          return e.apply(this, arguments)
                      }
                  }()
              },
              pt = function(e, t, n, a, i, r, s) {
                  return function() {
                      var o = Object(m.a)(A.a.mark((function o(c) {
                          var l, d, u;
                          return A.a.wrap((function(o) {
                              for (;;) switch (o.prev = o.next) {
                                  case 0:
                                      return l = fe.AES.encrypt(e + "," + n + "," + t + "," + a, ze).toString(), o.prev = 1, "/rest/api/match/score", o.next = 5, fetch("/rest/api/match/score", {
                                          method: "POST",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json",
                                              postData: l
                                          }
                                      });
                                  case 5:
                                      return d = o.sent, o.next = 8, d.json();
                                  case 8:
                                      u = o.sent, we(d, 0, function() {
                                          var e = Object(m.a)(A.a.mark((function e() {
                                              return A.a.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                          c({
                                                              type: De,
                                                              gameOverScoreStatus: u
                                                          });
                                                      case 1:
                                                      case "end":
                                                          return e.stop()
                                                  }
                                              }), e)
                                          })));
                                          return function() {
                                              return e.apply(this, arguments)
                                          }
                                      }(), (function() {
                                          return i(u)
                                      }), r, s), o.next = 16;
                                      break;
                                  case 13:
                                      o.prev = 13, o.t0 = o.catch(1), console.warn("Failed filling score on user game over..", o.t0);
                                  case 16:
                                  case "end":
                                      return o.stop()
                              }
                          }), o, null, [
                              [1, 13]
                          ])
                      })));
                      return function(e) {
                          return o.apply(this, arguments)
                      }
                  }()
              },
              ht = function(e) {
                  return function() {
                      var t = Object(m.a)(A.a.mark((function t(n) {
                          var a, i, r;
                          return A.a.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                  case 0:
                                      return a = {
                                          address: e
                                      }, a = JSON.stringify(a), t.prev = 2, "/rest/api/blacklist", t.next = 6, fetch("/rest/api/blacklist", {
                                          method: "GET",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json",
                                              postData: a
                                          }
                                      });
                                  case 6:
                                      return i = t.sent, t.next = 9, i.json();
                                  case 9:
                                      r = t.sent, we(i, 0, function() {
                                          var e = Object(m.a)(A.a.mark((function e() {
                                              return A.a.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                          n({
                                                              type: Ye,
                                                              blacklist: r
                                                          });
                                                      case 1:
                                                      case "end":
                                                          return e.stop()
                                                  }
                                              }), e)
                                          })));
                                          return function() {
                                              return e.apply(this, arguments)
                                          }
                                      }()), t.next = 17;
                                      break;
                                  case 14:
                                      t.prev = 14, t.t0 = t.catch(2), console.warn("Failed obtaining blacklist..", t.t0);
                                  case 17:
                                  case "end":
                                      return t.stop()
                              }
                          }), t, null, [
                              [2, 14]
                          ])
                      })));
                      return function(e) {
                          return t.apply(this, arguments)
                      }
                  }()
              },
              At = function(e, t, n, a, i, r, s, o) {
                  return function() {
                      var c = Object(m.a)(A.a.mark((function c(l) {
                          var d, u, b;
                          return A.a.wrap((function(c) {
                              for (;;) switch (c.prev = c.next) {
                                  case 0:
                                      return d = {
                                          address: e,
                                          game: t,
                                          price: n,
                                          token: a,
                                          password: i
                                      }, d = JSON.stringify(d), c.prev = 2, "/rest/api/lobby/create", c.next = 6, fetch("/rest/api/lobby/create", {
                                          method: "POST",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json",
                                              postData: d
                                          }
                                      });
                                  case 6:
                                      return u = c.sent, c.next = 9, u.json();
                                  case 9:
                                      "MIN PRICE = 5" !== (b = c.sent) && "MAX LOBBIES" !== b || (r = null), we(u, 0, function() {
                                          var n = Object(m.a)(A.a.mark((function n() {
                                              return A.a.wrap((function(n) {
                                                  for (;;) switch (n.prev = n.next) {
                                                      case 0:
                                                          l($e(b)), l(mt(e, t, null, null, null, null));
                                                      case 2:
                                                      case "end":
                                                          return n.stop()
                                                  }
                                              }), n)
                                          })));
                                          return function() {
                                              return n.apply(this, arguments)
                                          }
                                      }(), r, (function() {
                                          return s(b)
                                      }), o), c.next = 18;
                                      break;
                                  case 15:
                                      c.prev = 15, c.t0 = c.catch(2), console.warn("Failed creating new lobby..", c.t0);
                                  case 18:
                                  case "end":
                                      return c.stop()
                              }
                          }), c, null, [
                              [2, 15]
                          ])
                      })));
                      return function(e) {
                          return c.apply(this, arguments)
                      }
                  }()
              },
              mt = function(e, t, n, a, i, r, s, o, c) {
                  return function() {
                      var l = Object(m.a)(A.a.mark((function l(d) {
                          var u, b, p;
                          return A.a.wrap((function(l) {
                              for (;;) switch (l.prev = l.next) {
                                  case 0:
                                      return u = {
                                          address: e,
                                          game: t,
                                          maxDepositFilter: n,
                                          minDepositFilter: a,
                                          maxWinRateFilter: i,
                                          minWinRateFilter: r
                                      }, u = JSON.stringify(u), l.prev = 2, "/rest/api/lobbies/filter", l.next = 6, fetch("/rest/api/lobbies/filter", {
                                          method: "GET",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json",
                                              postData: u
                                          }
                                      });
                                  case 6:
                                      return b = l.sent, l.next = 9, b.json();
                                  case 9:
                                      p = l.sent, we(b, 0, function() {
                                          var e = Object(m.a)(A.a.mark((function e() {
                                              return A.a.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                          d({
                                                              type: Ge,
                                                              lobbies: p
                                                          });
                                                      case 1:
                                                      case "end":
                                                          return e.stop()
                                                  }
                                              }), e)
                                          })));
                                          return function() {
                                              return e.apply(this, arguments)
                                          }
                                      }(), s, o, c), l.next = 17;
                                      break;
                                  case 14:
                                      l.prev = 14, l.t0 = l.catch(2), console.warn("Failed obtaining list of game lobbies..", l.t0);
                                  case 17:
                                  case "end":
                                      return l.stop()
                              }
                          }), l, null, [
                              [2, 14]
                          ])
                      })));
                      return function(e) {
                          return l.apply(this, arguments)
                      }
                  }()
              },
              wt = function(e, t, n, a) {
                  return function() {
                      var i = Object(m.a)(A.a.mark((function i(r) {
                          var s, o, c;
                          return A.a.wrap((function(i) {
                              for (;;) switch (i.prev = i.next) {
                                  case 0:
                                      return s = {
                                          address: e
                                      }, s = JSON.stringify(s), i.prev = 2, "/rest/api/transactions/allowed", i.next = 6, fetch("/rest/api/transactions/allowed", {
                                          method: "GET",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json",
                                              postData: s
                                          }
                                      });
                                  case 6:
                                      return o = i.sent, i.next = 9, o.json();
                                  case 9:
                                      (c = i.sent) ? n = null: t = null, we(o, 0, function() {
                                          var e = Object(m.a)(A.a.mark((function e() {
                                              return A.a.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                      case "end":
                                                          return e.stop()
                                                  }
                                              }), e)
                                          })));
                                          return function() {
                                              return e.apply(this, arguments)
                                          }
                                      }(), (function() {
                                          return t(c)
                                      }), (function() {
                                          return n(c)
                                      }), a), i.next = 18;
                                      break;
                                  case 15:
                                      i.prev = 15, i.t0 = i.catch(2), console.warn("Failed obtaining are transactions allowed flag..", i.t0);
                                  case 18:
                                  case "end":
                                      return i.stop()
                              }
                          }), i, null, [
                              [2, 15]
                          ])
                      })));
                      return function(e) {
                          return i.apply(this, arguments)
                      }
                  }()
              },
              ft = function(e, t, n, a) {
                  return function() {
                      var i = Object(m.a)(A.a.mark((function i(r) {
                          var s, o, c;
                          return A.a.wrap((function(i) {
                              for (;;) switch (i.prev = i.next) {
                                  case 0:
                                      return s = {
                                          address: e
                                      }, s = JSON.stringify(s), i.prev = 2, "/rest/api/games/pending", i.next = 6, fetch("/rest/api/games/pending", {
                                          method: "GET",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json",
                                              postData: s
                                          }
                                      });
                                  case 6:
                                      return o = i.sent, i.next = 9, o.json();
                                  case 9:
                                      c = i.sent, we(o, 0, function() {
                                          var e = Object(m.a)(A.a.mark((function e() {
                                              return A.a.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                      case "end":
                                                          return e.stop()
                                                  }
                                              }), e)
                                          })));
                                          return function() {
                                              return e.apply(this, arguments)
                                          }
                                      }(), t ? function() {
                                          return t(c)
                                      } : null, n ? function() {
                                          return n(c)
                                      } : null, a), i.next = 17;
                                      break;
                                  case 14:
                                      i.prev = 14, i.t0 = i.catch(2), console.warn("Failed obtaining pending games waiting blockchain confirmation..", i.t0);
                                  case 17:
                                  case "end":
                                      return i.stop()
                              }
                          }), i, null, [
                              [2, 14]
                          ])
                      })));
                      return function(e) {
                          return i.apply(this, arguments)
                      }
                  }()
              },
              jt = {
                  appFirstOpen: !0,
                  savedCredentials: {
                      email: "",
                      password: ""
                  },
                  credentials: {
                      email: "",
                      password: ""
                  },
                  rememberMe: !1,
                  objectArray: [],
                  object: {},
                  isWalletUnlocked: !1,
                  user: {
                      id: null,
                      address: null,
                      name: null,
                      twitter: null,
                      win_rate: null,
                      played: null,
                      won: null,
                      ranking: null,
                      avatar: null,
                      created_at: null,
                      updated_at: null
                  },
                  wallet: null,
                  lobbies: [],
                  leaderboards: {
                      bestPlayers: [],
                      mostGamesPlayed: [],
                      bestRollerScore: [],
                      bestExplorerTime: [],
                      challenge: []
                  },
                  myGames: {
                      matches: [],
                      history: []
                  },
                  lobbyCreated: {},
                  matchCreated: {},
                  currentGame: {
                      title: "",
                      key: 0,
                      practiceMode: !1
                  },
                  gameStarted: !1,
                  gameOver: {
                      time: 0,
                      score: 0
                  },
                  challengeGame: null,
                  gameOverScoreStatus: null,
                  activeLobby: null,
                  activeMatch: null,
                  isUserReferredFrom: null,
                  referralCode: null,
                  coinPrices: null,
                  myGamesUpdates: [],
                  myGamesWaitingConfirmation: null
              },
              gt = function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jt,
                      t = arguments.length > 1 ? arguments[1] : void 0;
                  switch (t.type) {
                      case je:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              isWalletUnlocked: t.walletConnected
                          });
                      case ge:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              appFirstOpen: t.appFirstOpen
                          });
                      case ke:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              rememberMe: t.rememberMe
                          });
                      case Ce:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              savedCredentials: {
                                  email: t.email,
                                  password: t.password
                              }
                          });
                      case ve:
                      case xe:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              user: t.user
                          });
                      case Ne:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              wallet: t.wallet
                          });
                      case Ge:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              lobbies: t.lobbies
                          });
                      case Te:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              myGames: t.myGames
                          });
                      case Me:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              leaderboards: t.leaderboards
                          });
                      case Ye:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              blacklist: t.blacklist
                          });
                      case ye:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              credentials: {
                                  email: t.email,
                                  password: t.password
                              }
                          });
                      case Se:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              currentGame: t.game
                          });
                      case Ee:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              gameStarted: t.gameStarted
                          });
                      case Oe:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              challenge: t.challenge
                          });
                      case Be:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              gameOver: t.gameOver
                          });
                      case De:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              gameOverScoreStatus: t.gameOverScoreStatus
                          });
                      case We:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              lobbyCreated: t.lobbyCreated
                          });
                      case Re:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              matchCreated: t.matchCreated
                          });
                      case Fe:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              activeLobby: t.lobby
                          });
                      case Le:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              activeMatch: t.match
                          });
                      case Qe:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              referralCode: t.referralCode
                          });
                      case Ie:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              isUserReferredFrom: t.isUserReferredFrom
                          });
                      case Pe:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              rewardClaimed: t.rewardClaimed
                          });
                      case Ue:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              coinPrices: t.coinPrices
                          });
                      case Je:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              myGamesWaitingConfirmation: t.myGamesWaitingConfirmation
                          });
                      case He:
                          if (!t.myGamesUpdates || 0 === t.myGamesUpdates.length) return Object(p.a)(Object(p.a)({}, e), {}, {
                              myGamesUpdates: e.myGamesUpdates
                          });
                          for (var n = Object(b.a)(t.myGamesUpdates), a = 0; a < t.myGamesUpdates.length - 1; a++)
                              if (t.myGamesUpdates[a].id === t.myGamesUpdates[a + 1].id) {
                                  n.splice(a + 1, 1);
                                  break
                              }
                          var i = Object(b.a)(n);
                          return lt(e.user.address, i), Object(p.a)(Object(p.a)({}, e), {}, {
                              myGamesUpdates: i
                          });
                      case Ze:
                          for (var r = Object(b.a)(e.myGamesUpdates), s = 0; s < e.myGamesUpdates.length; s++)
                              if (e.myGamesUpdates[s].id === t.myGamesUpdate.id) {
                                  r.splice(s, 1);
                                  break
                              }
                          return lt(e.user.address, r), Object(p.a)(Object(p.a)({}, e), {}, {
                              myGamesUpdates: r
                          });
                      default:
                          return e
                  }
              },
              Ot = n(3),
              vt = (n(773), n(0)),
              yt = n(117),
              xt = n(31),
              kt = (n(774), n(1)),
              Ct = "/my-games",
              St = "/referral",
              Et = "/leaderboards",
              Bt = "https://stake.wsg.gg",
              Nt = "/profile",
              It = "/wallet",
              Tt = [{
                  title: "Home",
                  path: "/",
                  icon: Object(kt.jsx)(xt.b, {}),
                  cName: "nav-text"
              }, {
                  title: "My Games",
                  path: Ct,
                  icon: Object(kt.jsx)(xt.a, {}),
                  cName: "nav-text"
              }, {
                  title: "Refer a friend",
                  path: St,
                  icon: Object(kt.jsx)(xt.g, {}),
                  cName: "nav-text"
              }, {
                  title: "Leaderboards",
                  path: Et,
                  icon: Object(kt.jsx)(xt.d, {}),
                  cName: "nav-text"
              }, {
                  title: "Stake",
                  path: Bt,
                  icon: Object(kt.jsx)(xt.j, {}),
                  cName: "nav-text",
                  isExternalLink: !0
              }, {
                  title: "Profile",
                  path: Nt,
                  icon: Object(kt.jsx)(xt.i, {}),
                  cName: "nav-text"
              }, {
                  title: "Your wallet",
                  path: It,
                  icon: Object(kt.jsx)(xt.c, {}),
                  cName: "nav-text button",
                  isButton: !0
              }, {
                  title: "Deposit to start playing",
                  path: It,
                  icon: "",
                  cName: "nav-text"
              }],
              Mt = "data:image/png;base64,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",
              Dt = n.p + "static/media/bg.f66c13c2.png",
              Rt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAACwElEQVRIieXWW4hVVRwG8N+kFkJpQZeHggiUfIg5Z5SyECQSL4gPCRpCEETEOdFLCGo54+E4eGbGekkM2kdEVMxLGog20Fs9BIUwnGmiC2hB+BAE2oXE7HJWrHEpx+k0zEx76MEPFnvvtdbe317//1rf/+vYu3iPwNUW3HDfHL0PLfct/eHq2KahkoGF9XuadIdgTeDnJv2VRumEcXDLeIMTwG07F9U34xyex/u4gHe3F+tLp4O4A8/ga/ThHczD2/gjje+uFrOZeRIvxsc4hq/QiW2pfYFHsD31v5QH8YM4jE8xByvxNFa1hLqCBfgQP6K3UszunSrxHailsC5DGUXcji/xBo6nUB9PP/cRvsXM9O6kiGfgRZzFRryJ+RhKK3ovfTz+xBa8mkL9KJ5L1168sK2QPTYe8WzcmdoKNLAnXZ/AXryFMynsz2IDnsI3eDluqER4GnOxH9/F/p5CNqOVOJ7juwMHA6tC0DHZc9z8R1/78cAvgYHaZ+V+KQe78HjK3Q8TyPlUEfdH39bObKRvpDwYiZdgXwrrpLFlqDTRV052F7L1eBKD13L86zSutBW/YZYcJHPK+N+I/1VL/wt6u+oLQ7A8CLNbd3s6qg+91pndmitxrasej2M9CU+UzPOuc44iPq+OepD3il9JpFFMsupwuTl2wtbOLErsurxzXEpV6wA+qBazzyvF7OExcy5F4cqb+H4Mp5K4PJXINe0m5k18Nmn3maTbsVodajcx7xy/jiNJhmvV4fL3beY8gD9zJe5ulI7u6Krfh4G4warF7Ibi0bK9a7kLSE+jtCvlem1yJa0tGsED/SPlnmkRkEqjdDEWhbH93YWsip/clFodif9CWyeYJ3oKox47GsfL8bPxYTC5jyvJH00KOxfVJ2J9ot+KgnIXTl0j3oTfEd1BNGjTgcgfF7Whb6T8CfwNkFj9G3djIh0AAAAASUVORK5CYII=",
              Wt = n(95),
              Gt = n.n(Wt),
              Ft = (n(794), n(795), n(116));
          var Lt = function(e) {
                  var t = e.buttons;

                  function n(e) {
                      var t = e.button,
                          n = "buttons " + (t.className ? t.className : "");
                      return Object(kt.jsxs)("button", {
                          className: n,
                          onClick: function() {
                              var n = e.action;
                              n && n(t)
                          },
                          children: [" ", t.label, t.icon && ("lock" === t.icon ? Object(kt.jsx)(Ft.a, {
                              style: {
                                  width: "14px",
                                  height: "14px",
                                  margin: "0 5px"
                              }
                          }) : "unlock" === t.icon ? Object(kt.jsx)(Ft.b, {
                              style: {
                                  width: "14px",
                                  height: "14px",
                                  margin: "0 5px"
                              }
                          }) : void 0)]
                      })
                  }
                  return Object(kt.jsx)("div", {
                      className: "button-group",
                      children: t.map((function(t, a) {
                          return Object(kt.jsx)(n, {
                              button: t,
                              action: null === e || void 0 === e ? void 0 : e.action
                          }, a)
                      }))
                  })
              },
              Qt = "#13aa8d",
              Pt = "#F15859",
              Ut = "#8528A7",
              Ht = "#ffffff";
          var Zt = function(e) {
                  var t = "modal-dialog";
                  e.small ? t += " modal-dialog-small" : e.large ? t += " modal-dialog-large" : t += " modal-dialog-medium";
                  var n = Object(a.useState)(t),
                      i = Object(Ot.a)(n, 2),
                      r = i[0],
                      s = i[1],
                      o = Object(a.useState)(!!e.display && e.display),
                      c = Object(Ot.a)(o, 2),
                      l = c[0],
                      d = c[1],
                      u = Object(a.useState)(e.actionEnableLoading),
                      b = Object(Ot.a)(u, 2),
                      h = (b[0], b[1]),
                      A = function(e) {
                          s(t), document.body.style = "", setTimeout((function() {
                              d(e)
                          }), 300)
                      };
                  return Object(a.useEffect)((function() {
                      var n;
                      e.display ? (n = e.display, l && !e.preventAutoClose && setTimeout((function() {
                          return l && e.onCloseModal ? e.onCloseModal() : A(!1)
                      }), 3e4), d(n), document.body.style = "overflow: hidden;", setTimeout((function() {
                          s(t + " show")
                      }), 100)) : A(e.display)
                  }), [e.display]), Object(a.useEffect)((function() {
                      return function() {
                          document.body.style = ""
                      }
                  }), []), l ? Object(kt.jsx)("div", {
                      children: Object(kt.jsxs)("div", {
                          className: "modal",
                          children: [Object(kt.jsx)("div", {
                              className: "modal-backdrop",
                              onClick: function(t) {
                                  "modal-backdrop" === t.currentTarget.className && (t.preventDefault(), console.log(e.onCloseModal), e.onCloseModal ? e.onCloseModal() : A(!1))
                              }
                          }), Object(kt.jsx)("div", {
                              className: r,
                              children: Object(kt.jsxs)("div", {
                                  className: "modal-content",
                                  style: Object(p.a)({
                                      background: "url(".concat(Dt, ")")
                                  }, e.style),
                                  children: [Object(kt.jsx)("div", {
                                      className: "modal-header",
                                      children: Object(kt.jsx)("div", {
                                          className: "modal-title",
                                          children: e.header
                                      })
                                  }), Object(kt.jsx)("div", {
                                      className: "modal-body",
                                      children: e.children
                                  }), Object(kt.jsxs)("div", {
                                      className: "modal-footer",
                                      children: [e.buttons && Object(kt.jsx)(Lt, {
                                          buttons: e.buttons,
                                          action: null === e || void 0 === e ? void 0 : e.action,
                                          actionEnableLoading: function() {
                                              var t = e.actionEnableLoading;
                                              t && t(), h(!0)
                                          }
                                      }), e.actionEnableLoading ? Object(kt.jsx)(Gt.a, {
                                          type: "TailSpin",
                                          color: Ut,
                                          height: 36,
                                          width: 36
                                      }) : Object(kt.jsx)(kt.Fragment, {})]
                                  })]
                              })
                          })]
                      })
                  }) : Object(kt.jsx)(kt.Fragment, {})
              },
              Jt = n.p + "static/media/metamaskProvider.02e3ec27.png",
              Yt = (n(796), "SET_TOKEN_PRICE"),
              zt = "SET_MARKET_CAP",
              Vt = "SET_DEPOSITED_AMOUNTS",
              Xt = "SET_WALLET_AMOUNTS",
              Kt = "SET_AVAILABLE_AMOUNT",
              qt = "SET_AVAILABLE_AMOUNTS",
              _t = "SET_PRICES",
              $t = "SET_LOCKED_AMOUNTS",
              en = "SET_DEPOSIT_TEXT",
              tn = function(e) {
                  return {
                      type: _t,
                      prices: e
                  }
              },
              nn = function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rn,
                      t = arguments.length > 1 ? arguments[1] : void 0;
                  switch (t.type) {
                      case Yt:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              tokenPrice: t.tokenPrice
                          });
                      case zt:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              marketCap: t.marketCap
                          });
                      case Vt:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              depositedAmounts: t.depositedAmounts
                          });
                      case Xt:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              walletAmounts: t.walletAmounts
                          });
                      case Kt:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              availableAmount: t.availableAmount
                          });
                      case qt:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              availableAmounts: t.availableAmounts
                          });
                      case _t:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              prices: t.prices
                          });
                      case $t:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              lockedAmounts: t.lockedAmounts
                          });
                      case en:
                          return Object(p.a)(Object(p.a)({}, e), {}, {
                              depositText: t.depositText
                          });
                      default:
                          return e
                  }
              },
              an = n(13),
              rn = {
                  tokenContextManager: new function e() {
                      var t = this;
                      Object(an.a)(this, e), this.fetchBlockchainData = Object(m.a)(A.a.mark((function e() {
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      t.getPrices && t.getPrices(Object(m.a)(A.a.mark((function e() {
                                          return A.a.wrap((function(e) {
                                              for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                      t.getLockedAmounts && t.getLockedAmounts(Object(m.a)(A.a.mark((function e() {
                                                          return A.a.wrap((function(e) {
                                                              for (;;) switch (e.prev = e.next) {
                                                                  case 0:
                                                                      if (!window.prices) {
                                                                          e.next = 18;
                                                                          break
                                                                      }
                                                                      if (null == window.address || t.initialStateNotSet()) {
                                                                          e.next = 18;
                                                                          break
                                                                      }
                                                                      return e.prev = 2, e.next = 5, t.getTokenPriceAndMarketCap();
                                                                  case 5:
                                                                      return e.next = 7, t.getDepositedBalances();
                                                                  case 7:
                                                                      return e.next = 9, t.getWalletFunds();
                                                                  case 9:
                                                                      return e.next = 11, t.checkAllowance();
                                                                  case 11:
                                                                      return e.next = 13, t.refreshSomeValues();
                                                                  case 13:
                                                                      e.next = 18;
                                                                      break;
                                                                  case 15:
                                                                      e.prev = 15, e.t0 = e.catch(2), console.log(e.t0);
                                                                  case 18:
                                                                  case "end":
                                                                      return e.stop()
                                                              }
                                                          }), e, null, [
                                                              [2, 15]
                                                          ])
                                                      }))));
                                                  case 1:
                                                  case "end":
                                                      return e.stop()
                                              }
                                          }), e)
                                      }))));
                                  case 1:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), this.tick = Object(m.a)(A.a.mark((function e() {
                          var n;
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      if (t.runTick) {
                                          e.next = 2;
                                          break
                                      }
                                      return e.abrupt("return");
                                  case 2:
                                      return n = 10, e.next = 5, t.fetchBlockchainData();
                                  case 5:
                                      t.runTick && setTimeout(t.tick, 1e3 * n);
                                  case 6:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), this.refreshBlockchainData = function() {
                          var e = Object(m.a)(A.a.mark((function e(n) {
                              return A.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          t.getPrices && t.getPrices(Object(m.a)(A.a.mark((function e() {
                                              return A.a.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                          t.getLockedAmounts && t.getLockedAmounts(Object(m.a)(A.a.mark((function e() {
                                                              return A.a.wrap((function(e) {
                                                                  for (;;) switch (e.prev = e.next) {
                                                                      case 0:
                                                                          if (!window.prices) {
                                                                              e.next = 15;
                                                                              break
                                                                          }
                                                                          if (null == window.address) {
                                                                              e.next = 15;
                                                                              break
                                                                          }
                                                                          return e.prev = 2, e.next = 5, t.getDepositedBalances();
                                                                      case 5:
                                                                          return e.next = 7, t.getWalletFunds();
                                                                      case 7:
                                                                          return e.next = 9, t.refreshSomeValues();
                                                                      case 9:
                                                                          n && n(), e.next = 15;
                                                                          break;
                                                                      case 12:
                                                                          e.prev = 12, e.t0 = e.catch(2), console.log(e.t0);
                                                                      case 15:
                                                                      case "end":
                                                                          return e.stop()
                                                                  }
                                                              }), e, null, [
                                                                  [2, 12]
                                                              ])
                                                          }))));
                                                      case 1:
                                                      case "end":
                                                          return e.stop()
                                                  }
                                              }), e)
                                          }))));
                                      case 1:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e)
                          })));
                          return function(t) {
                              return e.apply(this, arguments)
                          }
                      }(), this.initialStateNotSet = function() {
                          var e, t;
                          return !window.address || !window.wbnb || !(null === (e = window) || void 0 === e || null === (t = e.web3) || void 0 === t ? void 0 : t.eth) || !window.prices || !window.julswapWsgBnbLpToken || !window.wsg || !window.web3
                      }, this.refreshSomeValues = Object(m.a)(A.a.mark((function e() {
                          var n, a;
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      n = window.modalToken ? window.modalToken : "wbnb", a = parseFloat(window.availAmounts[n] * window.prices[n].usd).toFixed(3), t.setAvailableAmount && t.setAvailableAmount(a);
                                  case 3:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), this.checkAllowance = Object(m.a)(A.a.mark((function e() {
                          var n, a, i, r, s, o, c, l, d, u, b, p, h;
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return e.next = 2, window.busd.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 2:
                                      return (n = e.sent) > 0 && (window.allowances.busd = Number(window.web3.utils.fromWei(n, "ether"))), e.next = 6, window.cake.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 6:
                                      return (a = e.sent) > 0 && (window.allowances.cake = Number(window.web3.utils.fromWei(a, "ether"))), e.next = 10, window.juld.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 10:
                                      return (i = e.sent) > 0 && (window.allowances.juld = Number(window.web3.utils.fromWei(i, "ether"))), e.next = 14, window.wsg.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 14:
                                      return (r = e.sent) > 0 && (window.allowances.wsg = Number(window.web3.utils.fromWei(r, "ether"))), e.next = 18, window.bake.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 18:
                                      return (s = e.sent) > 0 && (window.allowances.bake = Number(window.web3.utils.fromWei(s, "ether"))), e.next = 22, window.sfp.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 22:
                                      return (o = e.sent) > 0 && (window.allowances.sfp = Number(window.web3.utils.fromWei(o, "ether"))), e.next = 26, window.twt.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 26:
                                      return (c = e.sent) > 0 && (window.allowances.twt = Number(window.web3.utils.fromWei(c, "ether"))), e.next = 30, window.doge.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 30:
                                      return (l = e.sent) > 0 && (window.allowances.doge = Number(parseFloat(l) / Math.pow(10, 8))), e.next = 34, window.shiba.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 34:
                                      return (d = e.sent) > 0 && (window.allowances.shiba = Number(window.web3.utils.fromWei(d, "ether"))), e.next = 38, window.mcrn.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 38:
                                      return (u = e.sent) > 0 && (window.allowances.mcrn = Number(window.web3.utils.fromWei(u, "ether"))), e.next = 42, window.ava.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 42:
                                      return (b = e.sent) > 0 && (window.allowances.ava = Number(window.web3.utils.fromWei(b, "ether"))), e.next = 46, window.wex.methods.allowance(window.address, window.depositHub.options.address).call({
                                          from: window.address
                                      });
                                  case 46:
                                      (p = e.sent) > 0 && (window.allowances.wex = Number(window.web3.utils.fromWei(p, "ether"))), "wbnb" !== (h = window.depositToken ? window.depositToken : "wbnb") ? window.allowances[h] > 0 ? t.setDepositText && t.setDepositText("Deposit") : t.setDepositText && t.setDepositText("Approve") : t.setDepositText && t.setDepositText("Deposit");
                                  case 50:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), this.getWalletFunds = Object(m.a)(A.a.mark((function e() {
                          var n, a, i, r, s, o, c, l, d, u, b, p, h;
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return e.next = 2, window.web3.eth.getBalance(window.address);
                                  case 2:
                                      return n = e.sent, e.next = 5, window.busd.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 5:
                                      return a = e.sent, e.next = 8, window.cake.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 8:
                                      return i = e.sent, e.next = 11, window.juld.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 11:
                                      return r = e.sent, e.next = 14, window.wsg.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 14:
                                      return s = e.sent, e.next = 17, window.bake.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 17:
                                      return o = e.sent, e.next = 20, window.sfp.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 20:
                                      return c = e.sent, e.next = 23, window.twt.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 23:
                                      return l = e.sent, e.next = 26, window.doge.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 26:
                                      return d = e.sent, e.next = 29, window.mcrn.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 29:
                                      return u = e.sent, e.next = 32, window.ava.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 32:
                                      return b = e.sent, e.next = 35, window.shiba.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 35:
                                      return p = e.sent, e.next = 38, window.wex.methods.balanceOf(window.address).call({
                                          from: window.address
                                      });
                                  case 38:
                                      h = e.sent, window.walletAmounts = {
                                          wbnb: parseFloat(window.web3.utils.fromWei(n, "ether")).toFixed(3),
                                          busd: parseFloat(window.web3.utils.fromWei(a, "ether")).toFixed(3),
                                          cake: parseFloat(window.web3.utils.fromWei(i, "ether")).toFixed(3),
                                          juld: parseFloat(window.web3.utils.fromWei(r, "ether")).toFixed(3),
                                          wsg: parseFloat(window.web3.utils.fromWei(s, "ether")).toFixed(3),
                                          bake: parseFloat(window.web3.utils.fromWei(o, "ether")).toFixed(3),
                                          sfp: parseFloat(window.web3.utils.fromWei(c, "ether")).toFixed(3),
                                          twt: parseFloat(window.web3.utils.fromWei(l, "ether")).toFixed(3),
                                          doge: parseFloat(parseFloat(d) / Math.pow(10, 8)).toFixed(3),
                                          shiba: parseFloat(window.web3.utils.fromWei(p, "ether")).toFixed(3),
                                          mcrn: parseFloat(window.web3.utils.fromWei(u, "ether")).toFixed(3),
                                          ava: parseFloat(window.web3.utils.fromWei(b, "ether")).toFixed(3),
                                          wex: parseFloat(window.web3.utils.fromWei(h, "ether")).toFixed(3)
                                      }, window.availAmounts = {
                                          busd: parseFloat(window.depositedAmounts.busd) - parseFloat(window.lockedAmounts.busd) < 0 ? 0 : parseFloat(window.depositedAmounts.busd) - parseFloat(window.lockedAmounts.busd),
                                          wbnb: parseFloat(window.depositedAmounts.wbnb) - parseFloat(window.lockedAmounts.wbnb) < 0 ? 0 : parseFloat(window.depositedAmounts.wbnb) - parseFloat(window.lockedAmounts.wbnb),
                                          cake: parseFloat(window.depositedAmounts.cake) - parseFloat(window.lockedAmounts.cake) < 0 ? 0 : parseFloat(window.depositedAmounts.cake) - parseFloat(window.lockedAmounts.cake),
                                          juld: parseFloat(window.depositedAmounts.juld) - parseFloat(window.lockedAmounts.juld) < 0 ? 0 : parseFloat(window.depositedAmounts.juld) - parseFloat(window.lockedAmounts.juld),
                                          wsg: parseFloat(window.depositedAmounts.wsg) - parseFloat(window.lockedAmounts.wsg) < 0 ? 0 : parseFloat(window.depositedAmounts.wsg) - parseFloat(window.lockedAmounts.wsg),
                                          bake: parseFloat(window.depositedAmounts.bake) - parseFloat(window.lockedAmounts.bake) < 0 ? 0 : parseFloat(window.depositedAmounts.bake) - parseFloat(window.lockedAmounts.bake),
                                          sfp: parseFloat(window.depositedAmounts.sfp) - parseFloat(window.lockedAmounts.sfp) < 0 ? 0 : parseFloat(window.depositedAmounts.sfp) - parseFloat(window.lockedAmounts.sfp),
                                          twt: parseFloat(window.depositedAmounts.twt) - parseFloat(window.lockedAmounts.twt) < 0 ? 0 : parseFloat(window.depositedAmounts.twt) - parseFloat(window.lockedAmounts.twt),
                                          doge: parseFloat(window.depositedAmounts.doge) - parseFloat(window.lockedAmounts.doge) < 0 ? 0 : parseFloat(window.depositedAmounts.doge) - parseFloat(window.lockedAmounts.doge),
                                          mcrn: parseFloat(window.depositedAmounts.mcrn) - parseFloat(window.lockedAmounts.mcrn) < 0 ? 0 : parseFloat(window.depositedAmounts.mcrn) - parseFloat(window.lockedAmounts.mcrn),
                                          ava: parseFloat(window.depositedAmounts.ava) - parseFloat(window.lockedAmounts.ava) < 0 ? 0 : parseFloat(window.depositedAmounts.ava) - parseFloat(window.lockedAmounts.ava),
                                          shiba: parseFloat(window.depositedAmounts.shiba) - parseFloat(window.lockedAmounts.shiba) < 0 ? 0 : parseFloat(window.depositedAmounts.shiba) - parseFloat(window.lockedAmounts.shiba),
                                          wex: parseFloat(window.depositedAmounts.wex) - parseFloat(window.lockedAmounts.wex) < 0 ? 0 : parseFloat(window.depositedAmounts.wex) - parseFloat(window.lockedAmounts.wex)
                                      }, t.setWalletAmounts && t.setWalletAmounts(window.walletAmounts), t.setAvailableAmounts && t.setAvailableAmounts(window.availAmounts);
                                  case 43:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), this.getDepositedBalances = Object(m.a)(A.a.mark((function e() {
                          var n, a, i, r, s, o, c, l, d, u, b, p, h;
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return e.next = 2, window.depositHub.methods.balanceOf(window.address, window.addresses.wbnb).call({
                                          from: window.address
                                      });
                                  case 2:
                                      return n = e.sent, e.next = 5, window.depositHub.methods.balanceOf(window.address, window.addresses.busd).call({
                                          from: window.address
                                      });
                                  case 5:
                                      return a = e.sent, e.next = 8, window.depositHub.methods.balanceOf(window.address, window.addresses.cake).call({
                                          from: window.address
                                      });
                                  case 8:
                                      return i = e.sent, e.next = 11, window.depositHub.methods.balanceOf(window.address, window.addresses.juld).call({
                                          from: window.address
                                      });
                                  case 11:
                                      return r = e.sent, e.next = 14, window.depositHub.methods.balanceOf(window.address, window.addresses.wsg).call({
                                          from: window.address
                                      });
                                  case 14:
                                      return s = e.sent, e.next = 17, window.depositHub.methods.balanceOf(window.address, window.addresses.bake).call({
                                          from: window.address
                                      });
                                  case 17:
                                      return o = e.sent, e.next = 20, window.depositHub.methods.balanceOf(window.address, window.addresses.sfp).call({
                                          from: window.address
                                      });
                                  case 20:
                                      return c = e.sent, e.next = 23, window.depositHub.methods.balanceOf(window.address, window.addresses.twt).call({
                                          from: window.address
                                      });
                                  case 23:
                                      return l = e.sent, e.next = 26, window.depositHub.methods.balanceOf(window.address, window.addresses.doge).call({
                                          from: window.address
                                      });
                                  case 26:
                                      return d = e.sent, e.next = 29, window.depositHub.methods.balanceOf(window.address, window.addresses.mcrn).call({
                                          from: window.address
                                      });
                                  case 29:
                                      return u = e.sent, e.next = 32, window.depositHub.methods.balanceOf(window.address, window.addresses.ava).call({
                                          from: window.address
                                      });
                                  case 32:
                                      return b = e.sent, e.next = 35, window.depositHub.methods.balanceOf(window.address, window.addresses.shiba).call({
                                          from: window.address
                                      });
                                  case 35:
                                      return p = e.sent, e.next = 38, window.depositHub.methods.balanceOf(window.address, window.addresses.wex).call({
                                          from: window.address
                                      });
                                  case 38:
                                      h = e.sent, window.depositedAmounts = {
                                          wbnb: parseFloat(window.web3.utils.fromWei(n, "ether")),
                                          busd: parseFloat(window.web3.utils.fromWei(a, "ether")),
                                          cake: parseFloat(window.web3.utils.fromWei(i, "ether")),
                                          juld: parseFloat(window.web3.utils.fromWei(r, "ether")),
                                          wsg: parseFloat(window.web3.utils.fromWei(s, "ether")),
                                          bake: parseFloat(window.web3.utils.fromWei(o, "ether")),
                                          sfp: parseFloat(window.web3.utils.fromWei(c, "ether")),
                                          twt: parseFloat(window.web3.utils.fromWei(l, "ether")),
                                          doge: parseFloat(parseFloat(d) / Math.pow(10, 8)),
                                          shiba: parseFloat(window.web3.utils.fromWei(p, "ether")),
                                          mcrn: parseFloat(window.web3.utils.fromWei(u, "ether")),
                                          ava: parseFloat(window.web3.utils.fromWei(b, "ether")),
                                          wex: parseFloat(window.web3.utils.fromWei(h, "ether"))
                                      }, t.setDepositedAmounts && t.setDepositedAmounts(window.depositedAmounts);
                                  case 41:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), this.getTokenPriceAndMarketCap = Object(m.a)(A.a.mark((function e() {
                          var n, a, i, r, s, o, c, l, d, u, b, p, h, m;
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      if (!t.initialStateNotSet()) {
                                          e.next = 2;
                                          break
                                      }
                                      return e.abrupt("return");
                                  case 2:
                                      return e.next = 4, window.wbnb.methods.balanceOf(window.julswapWsgBnbLpToken.options.address).call({
                                          from: window.address
                                      });
                                  case 4:
                                      return n = e.sent, e.next = 7, window.wsg.methods.balanceOf(window.julswapWsgBnbLpToken.options.address).call({
                                          from: window.address
                                      });
                                  case 7:
                                      return a = e.sent, i = parseFloat(window.web3.utils.fromWei(n, "ether")), r = parseFloat(window.web3.utils.fromWei(a, "ether")), s = i / r, window.coinPrices.bnb = s, window.coinPrices.usd = s * window.prices.wbnb.usd, e.next = 15, window.wsg.methods.totalSupply().call({
                                          from: window.address
                                      });
                                  case 15:
                                      return o = e.sent, e.next = 18, window.wsg.methods.balanceOf("0x20a39a8c2d18e8f0521eb342a0c3a4d90ace1093").call({
                                          from: window.address
                                      });
                                  case 18:
                                      return c = e.sent, e.next = 21, window.wsg.methods.balanceOf("0xacdf3156e6256b4b8c8be42038a96a4f620c9c3b").call({
                                          from: window.address
                                      });
                                  case 21:
                                      return l = e.sent, e.next = 24, window.wsg.methods.balanceOf("0x79c8d5f6f7caeec183627b2cd5067519f50df392").call({
                                          from: window.address
                                      });
                                  case 24:
                                      return d = e.sent, e.next = 27, window.wsg.methods.balanceOf("0xc406fe9bbe2dc066fe79e8e968c8d6d2478389ee").call({
                                          from: window.address
                                      });
                                  case 27:
                                      return u = e.sent, e.next = 30, window.wsg.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call({
                                          from: window.address
                                      });
                                  case 30:
                                      b = e.sent, p = parseFloat(o / Math.pow(10, 18)) - parseFloat(c / Math.pow(10, 18)) - parseFloat(l / Math.pow(10, 18)) - parseFloat(d / Math.pow(10, 18)) - parseFloat(u / Math.pow(10, 18)) - parseFloat(b / Math.pow(10, 18)), h = window.coinPrices.usd.toLocaleString(void 0, {
                                          minimumFractionDigits: 10,
                                          maximumFractionDigits: 10
                                      }), m = (p * window.coinPrices.usd).toLocaleString(void 0, {
                                          minimumFractionDigits: 0,
                                          maximumFractionDigits: 0
                                      }), t.setTokenPrice && t.setTokenPrice(h), t.setMarketCap && t.setMarketCap(m);
                                  case 36:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), this.deposit = function() {
                          var e = Object(m.a)(A.a.mark((function e(n, a, i, r) {
                              var s, o;
                              return A.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          if (null !== n && 0 !== n) {
                                              e.next = 2;
                                              break
                                          }
                                          return e.abrupt("return");
                                      case 2:
                                          if (!(n < 10)) {
                                              e.next = 5;
                                              break
                                          }
                                          return i("The minimum deposit amount of your token is 10$", !0), e.abrupt("return");
                                      case 5:
                                          if (n /= window.prices[a].usd, s = "doge" === a ? parseFloat(n * Math.pow(10, 8)).toString() : window.web3.utils.toWei(t.toFixed(n, 15).toString()), !(window.walletAmounts[a] < n)) {
                                              e.next = 10;
                                              break
                                          }
                                          return i("Not enough funds available on your wallet!", !0), e.abrupt("return");
                                      case 10:
                                          if (o = null, "wbnb" !== a) {
                                              e.next = 15;
                                              break
                                          }
                                          o = window.depositHub.methods.depositBNB(s).send({
                                              from: window.address,
                                              value: s
                                          }), e.next = 20;
                                          break;
                                      case 15:
                                          if (!(window.allowances[a] < n)) {
                                              e.next = 19;
                                              break
                                          }
                                          return e.next = 18, t.approve(a, i, r);
                                      case 18:
                                          return e.abrupt("return");
                                      case 19:
                                          o = window.depositHub.methods.deposit(window.addresses[a], s).send({
                                              from: window.address
                                          });
                                      case 20:
                                          o.on("transactionHash", (function(e) {
                                              r("Wait for the blockchain to confirm your deposit request!", !0)
                                          })), o.on("confirmation", (function(e, t) {
                                              if (1 === e) return r("", !1), setTimeout((function() {
                                                  r("Your funds have been successfully deposited!", !0)
                                              }), 300), t
                                          })), o.on("error", (function(e, t) {
                                              if (1 === e) return r("", !1), setTimeout((function() {
                                                  i("There was a problem with your deposit! Please try again", !0)
                                              }), 300), t
                                          }));
                                      case 23:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e)
                          })));
                          return function(t, n, a, i) {
                              return e.apply(this, arguments)
                          }
                      }(), this.withdraw = function() {
                          var e = Object(m.a)(A.a.mark((function e(n, a, i, r) {
                              var s, o;
                              return A.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          if (null !== n && 0 !== n) {
                                              e.next = 2;
                                              break
                                          }
                                          return e.abrupt("return");
                                      case 2:
                                          if (!(window.availAmounts[a] * window.prices[a].usd < n)) {
                                              e.next = 5;
                                              break
                                          }
                                          return i("Your available balance is lower than what you are trying to withdraw!", !0), e.abrupt("return");
                                      case 5:
                                          s = null, n /= window.prices[a].usd, o = "doge" === a ? parseFloat(n * Math.pow(10, 8)).toString() : window.web3.utils.toWei(t.toFixed(n, 15).toString()), (s = "wbnb" === a ? window.depositHub.methods.withdrawBNB(o).send({
                                              from: window.address
                                          }) : window.depositHub.methods.withdraw(window.addresses[a], o).send({
                                              from: window.address
                                          })).on("transactionHash", (function(e) {
                                              r("Wait for the blockchain to confirm your deposit request!", !0)
                                          })), s.on("confirmation", (function(e, t) {
                                              if (1 === e) return r("", !1), setTimeout((function() {
                                                  r("Your funds have been successfully withdrawn!", !0)
                                              }), 300), t
                                          })), s.on("error", (function(e, t) {
                                              if (1 === e) return r("", !1), setTimeout((function() {
                                                  i("There was a problem with your withdraw! Please try again", !0)
                                              }), 300), t
                                          }));
                                      case 12:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e)
                          })));
                          return function(t, n, a, i) {
                              return e.apply(this, arguments)
                          }
                      }(), this.toFixed = function(e, t) {
                          return t = t || 0, Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)
                      }, this.withdrawAll = function() {
                          var e = Object(m.a)(A.a.mark((function e(n, a, i) {
                              return A.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          t.withdraw(t.toFixed(window.availAmounts[n].toString(), 8), n, a, i);
                                      case 1:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e)
                          })));
                          return function(t, n, a) {
                              return e.apply(this, arguments)
                          }
                      }(), this.approve = function() {
                          var e = Object(m.a)(A.a.mark((function e(t, n, a) {
                              var i, r;
                              return A.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          if (i = null, r = new window.web3.utils.BN("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), null !== (i = window.tokens[t].methods.approve(window.depositHub.options.address, r).send({
                                                  from: window.address
                                              }))) {
                                              e.next = 5;
                                              break
                                          }
                                          return e.abrupt("return");
                                      case 5:
                                          i.on("transactionHash", (function(e) {
                                              a("Wait for the blockchain to confirm your transaction and your approval is ready!", !0)
                                          })), i.on("confirmation", (function(e, t) {
                                              if (1 === e) return a("", !1), setTimeout((function() {
                                                  a("Your spending limit has been successfully approved!", !0)
                                              }), 300), t
                                          })), i.on("error", (function(e, t) {
                                              if (1 === e) return a("", !1), setTimeout((function() {
                                                  n("There was a problem with your approval! Please try again", !0)
                                              }), 300), t
                                          }));
                                      case 8:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e)
                          })));
                          return function(t, n, a) {
                              return e.apply(this, arguments)
                          }
                      }(), window.confirmDelay = 2500, window.addresses = {
                          depositHub: "0x0c9Ec8D71f0Ea5fce81666900F5108c8e714FC9d",
                          wbnb: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                          busd: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                          juld: "0x5a41f637c3f7553dba6ddc2d3ca92641096577ea",
                          cake: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
                          wsg: "0xa58950f05fea2277d2608748412bf9f802ea4901",
                          julswapWsgBnbLpToken: "0x848cc416f6ec98c7546e6ad450c1612eb8c95a16",
                          bake: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                          sfp: "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb",
                          twt: "0x4b0f1812e5df2a09796481ff14017e6005508003",
                          doge: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
                          shiba: "0x2859e4544c4bb03966803b044a93563bd2d0dd4d",
                          wex: "0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90",
                          ava: "0x13616f44ba82d63c8c0dc3ff843d36a8ec1c05a9",
                          mcrn: "0xacb2d47827c9813ae26de80965845d80935afd0b"
                      }, this.runTick = !1, window.erc20 = {
                          abi: JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
                      }, window.depositHubAbi = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"matchId","type":"uint256"},{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":true,"internalType":"address","name":"loser","type":"address"},{"indexed":false,"internalType":"address","name":"winner_referrer","type":"address"},{"indexed":false,"internalType":"address","name":"loser_referrer","type":"address"},{"indexed":false,"internalType":"address","name":"winner_token","type":"address"},{"indexed":false,"internalType":"address","name":"loser_token","type":"address"},{"indexed":false,"internalType":"uint256","name":"winner_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"loser_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"winner_treasury_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"loser_treasury_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"winner_referral_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"loser_referral_amount","type":"uint256"}],"name":"Declare","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPaused","type":"bool"}],"name":"PauseChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"matchId","type":"uint256"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"matchId","type":"uint256"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensReserved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"}],"name":"addOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"implementation","type":"address"}],"name":"addSupportedToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimFromTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"matchId","type":"uint256"},{"internalType":"address[]","name":"players","type":"address[]"},{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"declare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"disableToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"enableToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"matchId","type":"uint256"},{"internalType":"address[]","name":"players","type":"address[]"},{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"}],"name":"removeOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"matchId","type":"uint256"},{"internalType":"address[]","name":"players","type":"address[]"},{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"reserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newDepositFee","type":"uint256"}],"name":"setDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"newImplementation","type":"address"}],"name":"updateTokenImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasury","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_matches","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"enum WsgDepositHub.MatchStatus","name":"status","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositFeeMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getTreasuryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"isSupportedToken","outputs":[{"internalType":"bool","name":"tokenImplemented","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPauseTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"reserveOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"supportedTokens","outputs":[{"internalType":"address","name":"implementation","type":"address"},{"internalType":"bool","name":"active","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'), window.julswapLpTokenAbi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'), window.web3Modal = null, window.walletLinkEnabled = !0, window.modalToken = "wsg", window.provider = null, window.account = null, window.selectedAccount = null, window.txBlockExplorer = "https://bscscan.com/tx/", window.address = null, window.userStorage = {
                          walletProvider: null
                      }, window.coinPrices = {
                          bnb: null,
                          usd: null
                      }, window.currentBlock = null, window.productionReady = !0, window.depositHub = null, window.julswapWsgBnbLpToken = null, window.wsg = null, window.wbnb = null, window.cake = null, window.juld = null, window.busd = null, window.sfp = null, window.bake = null, window.doge = null, window.mcrn = null, window.ava = null, window.shiba = null, window.wex = null, window.busd = null, window.isLoopActive = !1, window.isFirstRun = !0, window.depositedAmounts = {}, window.walletAmounts = {}, window.allowances = {
                          busd: 0,
                          cake: 0,
                          juld: 0,
                          wsg: 0,
                          bake: 0,
                          sfp: 0,
                          twt: 0,
                          doge: 0,
                          mcrn: 0,
                          ava: 0,
                          shiba: 0,
                          wex: 0
                      }, window.tokens = {}
                  },
                  tokenPrice: 0,
                  marketCap: 0,
                  depositedAmounts: {
                      wbnb: 0,
                      busd: 0,
                      cake: 0,
                      juld: 0,
                      wsg: 0,
                      bake: 0,
                      sfp: 0,
                      twt: 0,
                      doge: 0,
                      shiba: 0,
                      wex: 0,
                      ava: 0,
                      mcrn: 0
                  },
                  walletAmounts: {
                      wbnb: 0,
                      busd: 0,
                      cake: 0,
                      juld: 0,
                      wsg: 0,
                      bake: 0,
                      sfp: 0,
                      twt: 0,
                      doge: 0,
                      shiba: 0,
                      wex: 0,
                      ava: 0,
                      mcrn: 0
                  },
                  availableAmount: 0,
                  availableAmounts: {
                      wbnb: 0,
                      busd: 0,
                      cake: 0,
                      juld: 0,
                      wsg: 0,
                      bake: 0,
                      sfp: 0,
                      twt: 0,
                      doge: 0,
                      shiba: 0,
                      wex: 0,
                      ava: 0,
                      mcrn: 0
                  },
                  lockedAmounts: {
                      wbnb: 0,
                      busd: 0,
                      cake: 0,
                      juld: 0,
                      wsg: 0,
                      bake: 0,
                      sfp: 0,
                      twt: 0,
                      doge: 0,
                      shiba: 0,
                      wex: 0,
                      ava: 0,
                      mcrn: 0
                  },
                  depositText: "Deposit",
                  prices: {
                      wbnb: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      cake: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      juld: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      busd: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      wsg: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      bake: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      sfp: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      twt: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      doge: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      shiba: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      wex: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      ava: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      },
                      mcrn: {
                          bnb: 0,
                          usd: 0,
                          eur: 0
                      }
                  }
              },
              sn = !1,
              on = i.a.createContext(rn),
              cn = function(e) {
                  var t = e.children,
                      n = Object(a.useReducer)(nn, rn),
                      i = Object(Ot.a)(n, 2),
                      r = i[0],
                      s = i[1],
                      o = Object(d.b)(),
                      c = {
                          tokenContextManager: r.tokenContextManager,
                          tokenPrice: r.tokenPrice,
                          setTokenPrice: function(e) {
                              s(function(e) {
                                  return {
                                      type: Yt,
                                      tokenPrice: e
                                  }
                              }(e))
                          },
                          marketCap: r.marketCap,
                          setMarketCap: function(e) {
                              s(function(e) {
                                  return {
                                      type: zt,
                                      marketCap: e
                                  }
                              }(e))
                          },
                          depositedAmounts: r.depositedAmounts,
                          setDepositedAmounts: function(e) {
                              s(function(e) {
                                  return {
                                      type: Vt,
                                      depositedAmounts: e
                                  }
                              }(e))
                          },
                          walletAmounts: r.walletAmounts,
                          setWalletAmounts: function(e) {
                              s(function(e) {
                                  return {
                                      type: Xt,
                                      walletAmounts: e
                                  }
                              }(e))
                          },
                          availableAmount: r.availableAmount,
                          setAvailableAmount: function(e) {
                              s(function(e) {
                                  return {
                                      type: Kt,
                                      availableAmount: e
                                  }
                              }(e))
                          },
                          availableAmounts: r.availableAmounts,
                          setAvailableAmounts: function(e) {
                              s(function(e) {
                                  return {
                                      type: qt,
                                      availableAmounts: e
                                  }
                              }(e))
                          },
                          prices: r.prices,
                          setPrices: function(e) {
                              s(tn(e))
                          },
                          getPrices: function(e) {
                              var t, n, a;
                              o((t = function(t) {
                                  window.prices = t, s(tn(t)), e && e()
                              }, function() {
                                  var e = Object(m.a)(A.a.mark((function e(i) {
                                      var r, s;
                                      return A.a.wrap((function(e) {
                                          for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                  return e.prev = 0, e.next = 4, fetch("/rest/api/prices", {
                                                      method: "GET",
                                                      headers: {
                                                          Accept: "*/*",
                                                          "Content-Type": "application/json",
                                                          postData: {}
                                                      }
                                                  });
                                              case 4:
                                                  return r = e.sent, e.next = 7, r.json();
                                              case 7:
                                                  s = e.sent, we(r, 0, function() {
                                                      var e = Object(m.a)(A.a.mark((function e() {
                                                          return A.a.wrap((function(e) {
                                                              for (;;) switch (e.prev = e.next) {
                                                                  case 0:
                                                                      i({
                                                                          type: Ue,
                                                                          coinPrices: s
                                                                      });
                                                                  case 1:
                                                                  case "end":
                                                                      return e.stop()
                                                              }
                                                          }), e)
                                                      })));
                                                      return function() {
                                                          return e.apply(this, arguments)
                                                      }
                                                  }(), (function() {
                                                      return t(s)
                                                  }), n, a), e.next = 15;
                                                  break;
                                              case 12:
                                                  e.prev = 12, e.t0 = e.catch(0), console.warn("Failed loading user wallet..", e.t0);
                                              case 15:
                                              case "end":
                                                  return e.stop()
                                          }
                                      }), e, null, [
                                          [0, 12]
                                      ])
                                  })));
                                  return function(t) {
                                      return e.apply(this, arguments)
                                  }
                              }()))
                          },
                          lockedAmounts: r.lockedAmounts,
                          getLockedAmounts: function(e) {
                              var t, n, a, i;
                              o((t = window.address, n = function(t) {
                                  window.lockedAmounts = t, s({
                                      type: $t,
                                      lockedAmounts: t
                                  }), e && e()
                              }, function() {
                                  var e = Object(m.a)(A.a.mark((function e(r) {
                                      var s, o, c;
                                      return A.a.wrap((function(e) {
                                          for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                  return s = {
                                                      address: t
                                                  }, s = JSON.stringify(s), e.prev = 2, e.next = 6, fetch("/rest/api/user/wallet", {
                                                      method: "GET",
                                                      headers: {
                                                          Accept: "*/*",
                                                          "Content-Type": "application/json",
                                                          postData: s
                                                      }
                                                  });
                                              case 6:
                                                  return o = e.sent, e.next = 9, o.json();
                                              case 9:
                                                  c = e.sent, we(o, 0, function() {
                                                      var e = Object(m.a)(A.a.mark((function e() {
                                                          return A.a.wrap((function(e) {
                                                              for (;;) switch (e.prev = e.next) {
                                                                  case 0:
                                                                      r(rt(c));
                                                                  case 1:
                                                                  case "end":
                                                                      return e.stop()
                                                              }
                                                          }), e)
                                                      })));
                                                      return function() {
                                                          return e.apply(this, arguments)
                                                      }
                                                  }(), (function() {
                                                      return n(c)
                                                  }), a, i), e.next = 17;
                                                  break;
                                              case 14:
                                                  e.prev = 14, e.t0 = e.catch(2), console.warn("Failed loading user wallet..", e.t0);
                                              case 17:
                                              case "end":
                                                  return e.stop()
                                          }
                                      }), e, null, [
                                          [2, 14]
                                      ])
                                  })));
                                  return function(t) {
                                      return e.apply(this, arguments)
                                  }
                              }()))
                          },
                          depositText: r.depositText,
                          setDepositText: function(e) {
                              s(function(e) {
                                  return {
                                      type: en,
                                      depositText: e
                                  }
                              }(e))
                          }
                      };
                  return Object(a.useEffect)((function() {
                      sn || (r.tokenContextManager.setTokenPrice = c.setTokenPrice, r.tokenContextManager.setMarketCap = c.setMarketCap, r.tokenContextManager.setDepositedAmounts = c.setDepositedAmounts, r.tokenContextManager.setWalletAmounts = c.setWalletAmounts, r.tokenContextManager.setAvailableAmount = c.setAvailableAmount, r.tokenContextManager.setAvailableAmounts = c.setAvailableAmounts, r.tokenContextManager.setPrices = c.setPrices, r.tokenContextManager.getPrices = c.getPrices, r.tokenContextManager.getLockedAmounts = c.getLockedAmounts, r.tokenContextManager.setDepositText = c.setDepositText, sn = !0)
                  }), [r]), Object(kt.jsx)(on.Provider, {
                      value: c,
                      children: t
                  })
              };
          var ln = function(e) {
              var t = e.value ? e.value : "",
                  n = Object(a.useState)(t),
                  i = Object(Ot.a)(n, 2),
                  r = i[0],
                  s = i[1],
                  o = Object(d.c)((function(e) {
                      return e.reducer.activeLobby
                  })),
                  c = Object(d.c)((function(e) {
                      return e.reducer.myGames
                  })),
                  l = Object(a.useContext)(on),
                  u = l.availableAmount;
              l.tokenContextManager, Object(a.useEffect)((function() {
                  e.select && s(e.value)
              }), [e.value]), Object(a.useEffect)((function() {
                  e.loadAvailableAmount && u && b(u ? Number(u).toFixed(2) + " $" : u)
              }), [u]), Object(a.useEffect)((function() {
                  if (e.fromMyGames && e.loadLobbyToken && o) {
                      var t = function() {
                          if (!c || !c.matches || !o) return null;
                          for (var e = 0; e < c.matches.length; e++) {
                              var t = c.matches[e];
                              if (t.lid === o.id) return t
                          }
                          return null
                      }(o.id);
                      t && (oe(window.address, t.p1) ? b(o.token) : oe(window.address, t.p2) && b(t.p2t))
                  }
              }), [o]);
              var b = function(t) {
                      var n = e.onChange;
                      s(t), n(t)
                  },
                  p = "input-default",
                  h = "p-title-small",
                  A = "";
              e.white && (p += " input-white"), e.purple && (p += " input-purple"), e.blue && (p += " input-blue"), e.green && (p += " input-green"), e.whiteBorder && (p += " input-white-border"), e.alignLabel && (h += " input-align-label"), e.radioButton && (A += " radio-button-form");
              var m = "text";
              return e.password ? m = "password" : e.email && (m = "email"), Object(kt.jsx)("form", {
                  className: A,
                  style: {
                      marginRight: e.marginRight ? e.marginRight : "50px"
                  },
                  onSubmit: function(t) {
                      e.onSubmit && (t.preventDefault(), e.onSubmit())
                  },
                  children: Object(kt.jsxs)("label", {
                      className: "input-label",
                      children: [e.label && Object(kt.jsx)("p", {
                          className: h,
                          children: e.label
                      }), e.textarea ? Object(kt.jsx)("textarea", {
                          className: p,
                          placeholder: e.placeholder,
                          style: e.style,
                          value: r || "",
                          onBlur: e.onBlur,
                          onChange: function(e) {
                              return b(e.target.value)
                          }
                      }) : e.select && e.options ? Object(kt.jsx)("select", {
                          disabled: e.disabled,
                          value: r,
                          className: p,
                          style: e.style,
                          onBlur: e.onBlur ? e.onBlur : function() {},
                          onChange: function(e) {
                              return b(e.target.value)
                          },
                          children: e.options.map((function(e, t) {
                              return Object(kt.jsx)("option", {
                                  value: e.value,
                                  children: e.label
                              }, t)
                          }))
                      }) : e.radioButton && e.radionButtonOptions && e.radioButtonGroup ? Object(kt.jsx)(kt.Fragment, {
                          children: e.radionButtonOptions.map((function(t, n) {
                              return Object(kt.jsxs)("div", {
                                  children: [Object(kt.jsxs)("label", {
                                      className: "radio-button-item",
                                      children: [Object(kt.jsx)("input", {
                                          onChange: function(e) {
                                              return b(e.target.value)
                                          },
                                          checked: r === t.value,
                                          type: "radio",
                                          id: t.value,
                                          name: e.radioButtonGroup,
                                          value: t.value
                                      }), Object(kt.jsx)("p", {
                                          className: "radio-button-label",
                                          children: t.text
                                      }), Object(kt.jsx)("img", {
                                          className: "radio-button-image",
                                          src: t.image
                                      })]
                                  }), Object(kt.jsx)("br", {})]
                              }, n)
                          }))
                      }) : Object(kt.jsx)("input", {
                          disabled: e.disabled,
                          type: m,
                          className: p,
                          placeholder: e.placeholder,
                          style: e.style,
                          value: r || "",
                          onBlur: e.onBlur ? e.onBlur : function() {},
                          onChange: function(e) {
                              return b(e.target.value)
                          }
                      })]
                  })
              })
          };
          var dn = function(e) {
              var t = Object(a.useState)("metamask"),
                  n = Object(Ot.a)(t, 2),
                  i = n[0],
                  r = n[1],
                  s = [{
                      text: "Metamask",
                      image: Jt,
                      value: "metamask"
                  }, {
                      text: "WalletConnect",
                      image: "data:image/png;base64,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",
                      value: "walletconnect"
                  }, {
                      text: "Binance Chain Wallet",
                      image: "data:image/png;base64,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",
                      value: "binancechain"
                  }, {
                      text: "SafePal Wallet",
                      image: "data:image/png;base64,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",
                      value: "metamask"
                  }];
              return Object(kt.jsxs)(Zt, {
                  onCloseModal: e.onCloseModal,
                  small: !0,
                  display: e.display,
                  header: "Choose your wallet",
                  buttons: [{
                      label: "Cancel",
                      name: "cancel",
                      className: "grey"
                  }, {
                      label: "Ok",
                      name: "ok"
                  }],
                  action: function(t) {
                      var n = e.onCloseModal;
                      if ("cancel" === t.name) n && n();
                      else if ("ok" === t.name) {
                          var a = e.onProviderChosen;
                          a && a(i), n && n()
                      }
                  },
                  children: [Object(kt.jsx)("div", {
                      className: "modal-row",
                      children: Object(kt.jsx)("strong", {
                          style: {
                              marginBottom: "20px",
                              display: "block"
                          },
                          children: "Select which wallet you want to connect with."
                      })
                  }), Object(kt.jsx)("div", {
                      className: "modal-row",
                      children: Object(kt.jsx)(ln, {
                          onSubmit: function() {},
                          onChange: function(e) {
                              r(e)
                          },
                          radioButton: !0,
                          radioButtonGroup: "provider",
                          radionButtonOptions: s,
                          value: i,
                          marginRight: "0px"
                      })
                  })]
              })
          };
          var un, bn, pn = function(e) {
                  return Object(kt.jsx)(Zt, {
                      preventAutoClose: e.preventAutoClose,
                      onCloseModal: e.onCloseModal,
                      style: {
                          minWidth: "500px"
                      },
                      small: !0,
                      display: e.display,
                      header: e.header ? e.header : "",
                      buttons: [{
                          label: "Ok",
                          name: "ok"
                      }],
                      action: function(t) {
                          if ("ok" === t.name) {
                              var n = e.onCloseModal;
                              n && n()
                          }
                      },
                      children: Object(kt.jsx)("div", {
                          className: "modal-row",
                          children: e.textAlign ? Object(kt.jsx)("p", {
                              style: {
                                  textAlign: e.textAlign,
                                  width: "100%"
                              },
                              className: "p-modal-row",
                              children: e.text
                          }) : Object(kt.jsx)("p", {
                              className: "p-modal-row",
                              children: e.text
                          })
                      })
                  })
              },
              hn = (n(797), n.p + "static/media/treasure.371daf4f.png"),
              An = n(424),
              mn = n.n(An),
              wn = function() {
                  var e = Object(m.a)(A.a.mark((function e(t, n) {
                      return A.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return window.userStorage.walletProvider = n, e.next = 3, fn(t);
                              case 3:
                                  return e.abrupt("return", e.sent);
                              case 4:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  })));
                  return function(t, n) {
                      return e.apply(this, arguments)
                  }
              }(),
              fn = function() {
                  var e = Object(m.a)(A.a.mark((function e(t) {
                      return A.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  if (window.userStorage.walletProvider) {
                                      e.next = 2;
                                      break
                                  }
                                  return e.abrupt("return", new Promise((function(e, t) {
                                      t("No wallet provider onConnect")
                                  })));
                              case 2:
                                  return e.abrupt("return", new Promise((function(e, n) {
                                      return setTimeout(Object(m.a)(A.a.mark((function a() {
                                          var i;
                                          return A.a.wrap((function(a) {
                                              for (;;) switch (a.prev = a.next) {
                                                  case 0:
                                                      a.t0 = window.userStorage.walletProvider, a.next = "metamask" === a.t0 ? 3 : "walletconnect" === a.t0 ? 13 : "binancechain" === a.t0 ? 25 : 35;
                                                      break;
                                                  case 3:
                                                      return a.prev = 3, a.next = 6, window.ethereum.enable();
                                                  case 6:
                                                      window.provider = window.ethereum, a.next = 12;
                                                      break;
                                                  case 9:
                                                      a.prev = 9, a.t1 = a.catch(3), window.userStorage.walletProvider = null;
                                                  case 12:
                                                      return a.abrupt("break", 38);
                                                  case 13:
                                                      return a.prev = 13, i = new f.a({
                                                          rpc: {
                                                              56: "https://bsc-dataseed1.defibit.io/"
                                                          },
                                                          chainId: 56
                                                      }), a.next = 17, i.enable();
                                                  case 17:
                                                      window.provider = i, window.userStorage.walletProvider = "walletconnect", a.next = 24;
                                                      break;
                                                  case 21:
                                                      a.prev = 21, a.t2 = a.catch(13), window.userStorage.walletProvider = null;
                                                  case 24:
                                                      return a.abrupt("break", 38);
                                                  case 25:
                                                      return a.prev = 25, a.next = 28, window.BinanceChain.enable();
                                                  case 28:
                                                      window.provider = window.BinanceChain, a.next = 34;
                                                      break;
                                                  case 31:
                                                      a.prev = 31, a.t3 = a.catch(25), window.userStorage.walletProvider = null;
                                                  case 34:
                                                      return a.abrupt("break", 38);
                                                  case 35:
                                                      return window.userStorage.walletProvider = null, n("Wallet provider not found, reseting it."), a.abrupt("return");
                                                  case 38:
                                                      if (localStorage.setItem("userSettings", JSON.stringify(window.userStorage)), window.userStorage.walletProvider) {
                                                          a.next = 43;
                                                          break
                                                      }
                                                      return window.provider = null, n("Wallet provider not found"), a.abrupt("return");
                                                  case 43:
                                                      return a.next = 45, jn(e, n, t);
                                                  case 45:
                                                  case "end":
                                                      return a.stop()
                                              }
                                          }), a, null, [
                                              [3, 9],
                                              [13, 21],
                                              [25, 31]
                                          ])
                                      }))), 250)
                                  })));
                              case 3:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  })));
                  return function(t) {
                      return e.apply(this, arguments)
                  }
              }(),
              jn = function() {
                  var e = Object(m.a)(A.a.mark((function e(t, n, a) {
                      return A.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  e.prev = 0, window.web3 = new mn.a(window.provider), e.next = 11;
                                  break;
                              case 4:
                                  return e.prev = 4, e.t0 = e.catch(0), window.provider = null, window.userStorage.walletProvider = null, localStorage.setItem("userSettings", JSON.stringify(window.userStorage)), n("Failed to create web3 from provider in connectToWeb3"), e.abrupt("return");
                              case 11:
                                  if (null !== window.web3.eth) {
                                      e.next = 17;
                                      break
                                  }
                                  return window.provider = null, window.userStorage.walletProvider = null, localStorage.setItem("userSettings", JSON.stringify(window.userStorage)), n("window.web3.eth === null"), e.abrupt("return");
                              case 17:
                                  return window.depositHub = new window.web3.eth.Contract(window.depositHubAbi, window.addresses.depositHub), window.wbnb = new window.web3.eth.Contract(window.erc20.abi, window.addresses.wbnb), window.busd = new window.web3.eth.Contract(window.erc20.abi, window.addresses.busd), window.juld = new window.web3.eth.Contract(window.erc20.abi, window.addresses.juld), window.cake = new window.web3.eth.Contract(window.erc20.abi, window.addresses.cake), window.wsg = new window.web3.eth.Contract(window.erc20.abi, window.addresses.wsg), window.bake = new window.web3.eth.Contract(window.erc20.abi, window.addresses.bake), window.sfp = new window.web3.eth.Contract(window.erc20.abi, window.addresses.sfp), window.twt = new window.web3.eth.Contract(window.erc20.abi, window.addresses.twt), window.doge = new window.web3.eth.Contract(window.erc20.abi, window.addresses.doge), window.mcrn = new window.web3.eth.Contract(window.erc20.abi, window.addresses.mcrn), window.ava = new window.web3.eth.Contract(window.erc20.abi, window.addresses.ava), window.shiba = new window.web3.eth.Contract(window.erc20.abi, window.addresses.shiba), window.wex = new window.web3.eth.Contract(window.erc20.abi, window.addresses.wex), window.julswapWsgBnbLpToken = new window.web3.eth.Contract(window.julswapLpTokenAbi, window.addresses.julswapWsgBnbLpToken), window.tokens = {
                                      wbnb: window.wbnb,
                                      busd: window.busd,
                                      juld: window.juld,
                                      cake: window.cake,
                                      wsg: window.wsg,
                                      bake: window.bake,
                                      sfp: window.sfp,
                                      twt: window.twt,
                                      doge: window.doge,
                                      shiba: window.shiba,
                                      wex: window.wex,
                                      ava: window.ava,
                                      mcrn: window.mcrn
                                  }, e.next = 35, gn(t, n, a);
                              case 35:
                              case "end":
                                  return e.stop()
                          }
                      }), e, null, [
                          [0, 4]
                      ])
                  })));
                  return function(t, n, a) {
                      return e.apply(this, arguments)
                  }
              }(),
              gn = function() {
                  var e = Object(m.a)(A.a.mark((function e(t, n, a) {
                      var i;
                      return A.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  if (de(window.web3.currentProvider.chainId)) {
                                      e.next = 7;
                                      break
                                  }
                                  return setTimeout((function() {
                                      return a("Please use the Binance Smart Chain network to access the website!", !0)
                                  }), 300), window.provider = null, window.userStorage.walletProvider = null, localStorage.setItem("userSettings", JSON.stringify(window.userStorage)), n("Please use Binance Smart Chain!"), e.abrupt("return");
                              case 7:
                                  if ("coinbase" !== window.userStorage.walletProvider) {
                                      e.next = 22;
                                      break
                                  }
                                  return e.prev = 8, e.next = 11, window.provider.send("eth_requestAccounts").then((function(e) {
                                      window.web3.eth.defaultAccount = e[0], window.address = window.web3.eth.defaultAccount
                                  }));
                              case 11:
                                  e.next = 20;
                                  break;
                              case 13:
                                  return e.prev = 13, e.t0 = e.catch(8), window.provider = null, window.userStorage.walletProvider = null, localStorage.setItem("userSettings", JSON.stringify(window.userStorage)), n("Fail to get accounts from coinbase"), e.abrupt("return");
                              case 20:
                                  e.next = 37;
                                  break;
                              case 22:
                                  return e.prev = 22, e.next = 25, window.web3.eth.getAccounts();
                              case 25:
                                  i = e.sent, window.selectedAccount = i[0], window.address = window.selectedAccount, e.next = 37;
                                  break;
                              case 30:
                                  return e.prev = 30, e.t1 = e.catch(22), window.provider = null, window.userStorage.walletProvider = null, localStorage.setItem("userSettings", JSON.stringify(window.userStorage)), n("Failed to get accounts from web3.eth.getAccounts"), e.abrupt("return");
                              case 37:
                                  if (window.address) {
                                      e.next = 42;
                                      break
                                  }
                                  return window.userStorage.walletLink = !1, window.userStorage.walletConnected = !1, n("Not possible to acquire user address. Please, refresh the page and try again."), e.abrupt("return");
                              case 42:
                                  localStorage.setItem("userSettings", JSON.stringify(window.userStorage)), t(!0);
                              case 44:
                              case "end":
                                  return e.stop()
                          }
                      }), e, null, [
                          [8, 13],
                          [22, 30]
                      ])
                  })));
                  return function(t, n, a) {
                      return e.apply(this, arguments)
                  }
              }(),
              On = function() {
                  var e = Object(m.a)(A.a.mark((function e() {
                      return A.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  if (window.provider) {
                                      e.next = 3;
                                      break
                                  }
                                  return fn(), e.abrupt("return");
                              case 3:
                                  if (!window.provider.close) {
                                      e.next = 7;
                                      break
                                  }
                                  return e.next = 6, window.provider.close();
                              case 6:
                                  window.provider = null;
                              case 7:
                                  return window.account = null, window.address = null, window.provider = null, window.userStorage.walletProvider = null, localStorage.setItem("userSettings", JSON.stringify(window.userStorage)), localStorage.removeItem("address"), localStorage.removeItem("referLink"), e.abrupt("return", new Promise((function(e) {
                                      return setTimeout(Object(m.a)(A.a.mark((function t() {
                                          return A.a.wrap((function(t) {
                                              for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                      e();
                                                  case 1:
                                                  case "end":
                                                      return t.stop()
                                              }
                                          }), t)
                                      }))))
                                  })));
                              case 15:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  })));
                  return function() {
                      return e.apply(this, arguments)
                  }
              }(),
              vn = !1,
              yn = null;
          var xn = function(e) {
              var t = Object(d.b)(),
                  n = Object(d.c)((function(e) {
                      return e.reducer.user
                  })),
                  i = Object(d.c)((function(e) {
                      return e.reducer.isWalletUnlocked
                  })),
                  r = Object(a.useState)(!0),
                  s = Object(Ot.a)(r, 2),
                  o = s[0],
                  l = s[1],
                  u = Object(a.useContext)(on).tokenContextManager,
                  b = Object(a.useState)(),
                  p = Object(Ot.a)(b, 2),
                  h = p[0],
                  w = p[1],
                  f = Object(a.useState)(),
                  j = Object(Ot.a)(f, 2),
                  g = j[0],
                  O = j[1],
                  v = Object(a.useState)(),
                  y = Object(Ot.a)(v, 2),
                  x = y[0],
                  k = y[1],
                  C = Object(a.useState)(null),
                  S = Object(Ot.a)(C, 2),
                  E = S[0],
                  B = S[1],
                  N = Object(a.useState)(),
                  I = Object(Ot.a)(N, 2),
                  T = I[0],
                  M = I[1],
                  D = Object(a.useState)(),
                  R = Object(Ot.a)(D, 2),
                  W = R[0],
                  G = R[1],
                  U = Object(a.useState)(null),
                  H = Object(Ot.a)(U, 2),
                  Z = H[0],
                  J = H[1],
                  Y = Object(a.useState)(!1),
                  z = Object(Ot.a)(Y, 2),
                  V = z[0],
                  X = z[1],
                  K = Object(a.useState)(!1),
                  q = Object(Ot.a)(K, 2),
                  _ = q[0],
                  $ = q[1],
                  te = Object(a.useState)(!1),
                  ne = Object(Ot.a)(te, 2),
                  ae = ne[0],
                  ie = ne[1],
                  re = Object(a.useState)(null),
                  se = Object(Ot.a)(re, 2),
                  ce = se[0],
                  be = se[1],
                  pe = Object(a.useState)(Q),
                  he = Object(Ot.a)(pe, 2),
                  Ae = he[0],
                  me = he[1],
                  fe = Object(a.useState)(null),
                  je = Object(Ot.a)(fe, 2),
                  ge = (je[0], je[1]),
                  Oe = Object(c.f)(),
                  ve = Object(a.useCallback)((function(e) {
                      Oe.push(e)
                  }), [Oe]),
                  ye = function(e, t) {
                      be(e), ie(t)
                  },
                  xe = function() {
                      Be(window.userStorage.walletProvider ? fn : wn, E)
                  },
                  ke = (Object(d.c)((function(e) {
                      return e.reducer.myGamesUpdates
                  })), function() {
                      var e, a, i, r;
                      t((e = n.address, a = function(e) {
                          var a, i, r = function(e) {
                              for (var t = [], a = 0; a < e.length; a++) {
                                  var i = e[a];
                                  i.winner && ue(n.address, i.winner) && t.push(i)
                              }
                              return t
                          }(e.matches);
                          r && r.length > 0 ? (ge(r.length), window.unclaimed = r.length) : (ge(0), window.unclaimed = 0), t((a = n.address, i = function(a) {
                              var i = a,
                                  r = [];
                              i && i !== [] && 0 !== i.length || t(st(n.address, e, r, !0));
                              for (var s = 0; s < e.matches.length; s++) {
                                  var o = !1,
                                      c = !0;
                                  (!i || !i.matches || 0 === i.matches.length && e.matches[s].winner) && (o = !0);
                                  for (var l = 0; l < i.matches.length; l++)
                                      if (e.matches[s].id === i.matches[l].id) {
                                          c = !1;
                                          break
                                      }
                                  if (c && e.matches[s].winner && oe(e.matches[s].p2, n.address) || c && !e.matches[s].winner && !oe(e.matches[s].p2, n.address)) r.push(e.matches[s]);
                                  else if (oe(e.matches[s].p2, n.address)) {
                                      for (var d = 0; d < i.matches.length; d++)
                                          if (oe(e.matches[s].p2, n.address) && e.matches[s].id === i.matches[d].id && e.matches[s].winner && null === i.matches[d].winner) {
                                              o = !0;
                                              break
                                          }
                                      o && r.push(e.matches[s])
                                  }
                              }
                              t(st(n.address, e, r, !0)), t(ft(n.address)), t(ut(n.address))
                          }, function() {
                              var e = Object(m.a)(A.a.mark((function e(t) {
                                  var n;
                                  return A.a.wrap((function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                          case 0:
                                              return e.prev = 0, e.next = 3, localStorage.getItem(a.toLowerCase() + "_my_games");
                                          case 3:
                                              n = e.sent, i(le(n)), e.next = 11;
                                              break;
                                          case 8:
                                              e.prev = 8, e.t0 = e.catch(0), i([]);
                                          case 11:
                                          case "end":
                                              return e.stop()
                                      }
                                  }), e, null, [
                                      [0, 8]
                                  ])
                              })));
                              return function(t) {
                                  return e.apply(this, arguments)
                              }
                          }()))
                      }, function() {
                          var t = Object(m.a)(A.a.mark((function t(n) {
                              var s, o, c;
                              return A.a.wrap((function(t) {
                                  for (;;) switch (t.prev = t.next) {
                                      case 0:
                                          return s = {
                                              address: e
                                          }, s = JSON.stringify(s), t.prev = 2, t.next = 6, fetch("/rest/api/user/games/my", {
                                              method: "GET",
                                              headers: {
                                                  Accept: "*/*",
                                                  "Content-Type": "application/json",
                                                  postData: s
                                              }
                                          });
                                      case 6:
                                          return o = t.sent, t.next = 9, o.json();
                                      case 9:
                                          c = t.sent, we(o, 0, function() {
                                              var e = Object(m.a)(A.a.mark((function e() {
                                                  return A.a.wrap((function(e) {
                                                      for (;;) switch (e.prev = e.next) {
                                                          case 0:
                                                          case "end":
                                                              return e.stop()
                                                      }
                                                  }), e)
                                              })));
                                              return function() {
                                                  return e.apply(this, arguments)
                                              }
                                          }(), (function() {
                                              return a(c)
                                          }), i, r), t.next = 17;
                                          break;
                                      case 14:
                                          t.prev = 14, t.t0 = t.catch(2), console.warn("Failed obtaining list of my current games and match history..", t.t0);
                                      case 17:
                                      case "end":
                                          return t.stop()
                                  }
                              }), t, null, [
                                  [2, 14]
                              ])
                          })));
                          return function(e) {
                              return t.apply(this, arguments)
                          }
                      }()))
                  });
              Object(a.useEffect)((function() {
                  var e = JSON.parse(localStorage.getItem("userSettings"));
                  window.userStorage.walletProvider = null === e || void 0 === e ? void 0 : e.walletProvider, i || xe()
              }), []), Object(a.useEffect)((function() {
                  var e, a;
                  (null === n || void 0 === n ? void 0 : n.address) && !vn && (t((e = n.address, a = function(e) {
                      t(st(n.address, [], e, !1))
                  }, function() {
                      var t = Object(m.a)(A.a.mark((function t(n) {
                          var i;
                          return A.a.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                  case 0:
                                      return t.prev = 0, t.next = 3, localStorage.getItem(e.toLowerCase() + "_my_games_updates");
                                  case 3:
                                      i = t.sent, a(le(i)), t.next = 11;
                                      break;
                                  case 8:
                                      t.prev = 8, t.t0 = t.catch(0), a([]);
                                  case 11:
                                  case "end":
                                      return t.stop()
                              }
                          }), t, null, [
                              [0, 8]
                          ])
                      })));
                      return function(e) {
                          return t.apply(this, arguments)
                      }
                  }())), ke(), yn = setInterval(ke, 2e4), vn = !0)
              }), [n]), Object(a.useEffect)((function() {
                  Z && clearTimeout(Z), J(setTimeout((function() {
                      if (o) $(!1);
                      else switch (window.location.pathname) {
                          case Ri.PLAY:
                              me(Q), $(!0);
                              break;
                          case Ri.MY_GAMES:
                              me(F), $(!0);
                              break;
                          case Ri.REFERRAL:
                              me(P), $(!0);
                              break;
                          case Ri.PROFILE:
                              me(L), $(!0)
                      }
                  }), 3e3))
              }), [o]), Object(a.useEffect)((function() {
                  i && Ce(g, x)
              }), [i]);
              var Ce = function() {
                      var e = Object(m.a)(A.a.mark((function e(n, a) {
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      if (null === a || void 0 === a ? void 0 : a.on) {
                                          e.next = 2;
                                          break
                                      }
                                      return e.abrupt("return");
                                  case 2:
                                      a.on("connect", Object(m.a)(A.a.mark((function e() {
                                          return A.a.wrap((function(e) {
                                              for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                      t(at(!0)), l(!0);
                                                  case 2:
                                                  case "end":
                                                      return e.stop()
                                              }
                                          }), e)
                                      })))), a.on("disconnect", (function() {
                                          return Se(!0)
                                      })), a.on("accountsChanged", function() {
                                          var e = Object(m.a)(A.a.mark((function e(n) {
                                              return A.a.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                          if (vn = !1, clearInterval(yn), M(n), n && n !== [] && 0 !== n.length) {
                                                              e.next = 7;
                                                              break
                                                          }
                                                          return e.next = 6, Se(!0);
                                                      case 6:
                                                          return e.abrupt("return");
                                                      case 7:
                                                          n && n.length > 0 && (window.address = n[0]), t(dt(n[0], (function() {
                                                              t(at(!0)), l(!0), window.location.reload()
                                                          })));
                                                      case 9:
                                                      case "end":
                                                          return e.stop()
                                                  }
                                              }), e)
                                          })));
                                          return function(t) {
                                              return e.apply(this, arguments)
                                          }
                                      }()), a.on("chainChanged", function() {
                                          var e = Object(m.a)(A.a.mark((function e(t) {
                                              return A.a.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                          G(t), window.location.reload();
                                                      case 2:
                                                      case "end":
                                                          return e.stop()
                                                  }
                                              }), e)
                                          })));
                                          return function(t) {
                                              return e.apply(this, arguments)
                                          }
                                      }()), window.ethereum.on("disconnect", (function(e) {
                                          Se(!0)
                                      })), window.ethereum.on("chainChanged", (function(e) {}));
                                  case 8:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      })));
                      return function(t, n) {
                          return e.apply(this, arguments)
                      }
                  }(),
                  Se = function() {
                      var e = Object(m.a)(A.a.mark((function e(n) {
                          var a, i, r, s, o, c;
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      window.userStorage.walletProvider = null, u.runTick = !1, localStorage.setItem("userSettings", JSON.stringify(window.userStorage)), window.provider = null, B(null), window.walletConnected = !1, window.web3 && (null === (a = window) || void 0 === a || null === (i = a.web3) || void 0 === i ? void 0 : i.currentProvider) && (null === h || void 0 === h || h.clearCachedProvider(), null === (r = window.web3) || void 0 === r || null === (s = r.currentProvider) || void 0 === s || null === (o = s.connection) || void 0 === o || o.close()), M(null), window.address = null, window.walletConnected = !1, window.web3 = null, window.julswapWsgBnbLpToken = null, window.depositHub = null, window.wbnb = null, window.busd = null, window.juld = null, window.cake = null, window.wsg = null, window.bake = null, window.sfp = null, window.wtw = null, window.doge = null, window.mcrn = null, window.ava = null, window.shiba = null, window.wex = null, window.julswapWsgBnbLpToken = null, window.tokens = {}, vn = !1, w(null), k(null), O(null), t(at(!1)), l(!1), t(it({
                                          id: null,
                                          address: null,
                                          name: null,
                                          twitter: null,
                                          win_rate: null,
                                          played: null,
                                          won: null,
                                          ranking: null,
                                          avatar: null,
                                          created_at: null,
                                          updated_at: null
                                      })), t(rt(null)), c = window.location.pathname, n || c === Ri.PLAY || c === Ri.MY_GAMES || c === Ri.PROFILE || c === Ri.REFERRAL || setTimeout((function() {
                                          $(!0)
                                      }), 3e3), n && (window.location.href = "/");
                                  case 39:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      })));
                      return function(t) {
                          return e.apply(this, arguments)
                      }
                  }();
              un = Se, Object(a.useEffect)((function() {
                  Object(m.a)(A.a.mark((function e() {
                      var n, a, i;
                      return A.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, window.ethereum.request({
                                      method: "eth_chainId"
                                  });
                              case 2:
                                  return n = e.sent, e.next = 5, window.ethereum.request({
                                      method: "eth_accounts"
                                  });
                              case 5:
                                  if (a = e.sent, i = (null === a || void 0 === a ? void 0 : a.length) > 0, window.walletConnected = i, !(a && (null === a || void 0 === a ? void 0 : a.length) > 0 && window.provider)) {
                                      e.next = 18;
                                      break
                                  }
                                  if (de(n)) {
                                      e.next = 12;
                                      break
                                  }
                                  return setTimeout((function() {
                                      t(et({
                                          matches: [],
                                          history: []
                                      })), me(ee), $(!0)
                                  }), 300), e.abrupt("return");
                              case 12:
                                  window.address = a[0], l(!0), t(at(!0)), M(a), e.next = 19;
                                  break;
                              case 18:
                                  l(!1);
                              case 19:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  })))()
              }), [W]), Object(a.useEffect)((function() {
                  o && T && !n.address && t(dt(T[0], (function() {}))), T && T.length > 0 && (window.address = T[0])
              }), [o, T, n]);
              var Ee = function() {
                      var e = Object(m.a)(A.a.mark((function e() {
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      o ? ve(Ri.WALLET) : X(!0);
                                  case 1:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      })));
                      return function() {
                          return e.apply(this, arguments)
                      }
                  }(),
                  Be = function(e, n) {
                      e && e(ye, n).then((function(e) {
                          !0 === e && (t(at(!0)), O(window.web3), k(window.provider), u.runTick = !0, setTimeout((function() {
                              return u.fetchBlockchainData()
                          }), 1e3), setTimeout((function() {
                              return u.tick()
                          }), 250), Ce(g, window.provider), t(dt(window.address, (function() {
                              t(at(!0)), l(!0), window.walletConnected = !0
                          }))))
                      })).catch((function(e) {
                          Se()
                      }))
                  };
              return bn = Be, Object(a.useEffect)((function() {
                  E && xe()
              }), [E]), Object(kt.jsxs)(kt.Fragment, {
                  children: [Object(kt.jsx)(dn, {
                      onProviderChosen: function(e) {
                          B(e)
                      },
                      onCloseModal: function() {
                          return X(!1)
                      },
                      display: V
                  }), Object(kt.jsx)(pn, {
                      header: "Error",
                      text: ce,
                      display: ae,
                      onCloseModal: function() {
                          return ie(!1)
                      }
                  }), Object(kt.jsx)(pn, {
                      header: "Warning",
                      text: Ae,
                      display: _,
                      onCloseModal: function() {
                          return $(!1)
                      }
                  }), e.display ? Object(kt.jsxs)("div", {
                      className: "header",
                      children: [Object(kt.jsx)("div", {
                          onClick: function() {
                              return ve(Ri.PLAY)
                          },
                          className: "header-left",
                          children: Object(kt.jsx)("img", {
                              src: Mt,
                              alt: "logo",
                              height: "62px"
                          })
                      }), Object(kt.jsxs)("div", {
                          className: "header-right",
                          children: [Object(kt.jsx)("div", {
                              className: "nav-item",
                              children: Object(kt.jsx)("p", {
                                  onClick: function() {
                                      return ve(Ri.PLAY)
                                  },
                                  children: "Play now"
                              })
                          }), Object(kt.jsxs)("div", {
                              className: "nav-item",
                              children: [Object(kt.jsx)("p", {
                                  onClick: function() {
                                      return ve(Ri.MY_GAMES)
                                  },
                                  children: "My games"
                              }), Object(kt.jsxs)("div", {
                                  className: "claim-rewards-badge",
                                  style: {
                                      visibility: window.unclaimed ? "visible" : "hidden",
                                      width: window.unclaimed ? "150px" : "230px"
                                  },
                                  onClick: function() {
                                      return ve(Ri.MY_GAMES)
                                  },
                                  children: [Object(kt.jsx)("p", {
                                      className: "p-claim-rewards-badge",
                                      children: "YOU HAVE UNCLAIMED REWARDS: ".concat(window.unclaimed)
                                  }), Object(kt.jsxs)("div", {
                                      className: "treasure-container",
                                      children: [Object(kt.jsx)("img", {
                                          src: hn,
                                          height: "27px",
                                          className: "claim-rewards-badge-img-glow"
                                      }), Object(kt.jsx)("img", {
                                          src: hn,
                                          height: "50px",
                                          className: "claim-rewards-badge-img"
                                      })]
                                  })]
                              })]
                          }), Object(kt.jsx)("div", {
                              className: "nav-item",
                              children: Object(kt.jsx)("p", {
                                  onClick: function() {
                                      return ve(Ri.REFERRAL)
                                  },
                                  children: "Refer a friend"
                              })
                          }), Object(kt.jsx)("div", {
                              className: "nav-item",
                              children: Object(kt.jsx)("p", {
                                  onClick: function() {
                                      return ve(Ri.LEADERBOARDS)
                                  },
                                  children: "Leaderboards"
                              })
                          }), Object(kt.jsx)("div", {
                              className: "nav-item",
                              children: Object(kt.jsx)("p", {
                                  onClick: function() {
                                      return e = Ri.STAKE, window.location.href = e, null;
                                      var e
                                  },
                                  children: "Stake"
                              })
                          }), Object(kt.jsx)("div", {
                              className: "nav-item profile",
                              children: Object(kt.jsx)("p", {
                                  onClick: function() {
                                      return ve(Ri.PROFILE)
                                  },
                                  children: Object(kt.jsx)("img", {
                                      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACbklEQVRIia1WPWiUQRB95s6f80CCCodBgkUKK8HYRCSQkIBYWmgRbUQQ0mjEEBVNbQSLNIk/cI0gdmojFoISNRCSgGKlgmihESRK1EaDuScDb2H8uPtuv7sbmFu+mTfzbndnZ3cdSUTKdgAnARwCsEshHwE8AlAGsByVxggj9ATJFdaWFWHq5oohG3U030hOkjwunZQtyGizhL0k15TsIcn2Kph2+ShsbzOEs0q0QHJDCs5888LONkrY6ZaqP2Lp+x2+sxauLaWe9mn8AWAmov5mhDXprgVKI9yq8SuASgRhRViTbY0Q/tRYApCLIMwJ62MzES5o3AJgIIJwQFiT+ZqoOoXwXEXwmmQhBVcQxuRZM8eix53DJyRLVTAl+cI57Gm205xx5f6LZJnksLQsW5DTrWhtdr7epvTRIG9I9jVDuJ/kXJXEtmxL0rUq/jnFRhPmSE6QrLgk1rZGSO4mmXfYvGwjrg1SsVeUK5XQeuIDF/iS5GDEsgc9QHLRxV9NI7TL+J4D29WzPgOZn/U1zfKSyz1Eco8HXnRkFxogSuom9x3u1HfBYPvwR8abLSDzutflvhEc92V4T3JzC8mK7kjZWDRjl6vIoxmS2b7sqIO5pbyrJLtD0YzL+IlkWwbCy4qbEnnSf9jVxJiv0hcyTmdcLv+4up04cztJfpfvsZ+I/XyW41hGQpvVdUd6R6SW/KlsyyQ7fFwewAcAHQDOASgA+Btx972SDutZcR7AEICNAL4A6BPOHs5LyfvwYI2emCa/E/ejtcKkVN2i8NQfBDAGoKvOKyDIIoAj9n+d7RSAswCKAO4CGAew+l8UgH8YcqXRw2ji0QAAAABJRU5ErkJggg==",
                                      alt: "logo",
                                      height: "28px"
                                  })
                              })
                          }), Object(kt.jsx)("div", {
                              className: "nav-item button",
                              children: Object(kt.jsxs)("div", {
                                  onClick: Object(m.a)(A.a.mark((function e() {
                                      return A.a.wrap((function(e) {
                                          for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                  return e.abrupt("return", Ee());
                                              case 1:
                                              case "end":
                                                  return e.stop()
                                          }
                                      }), e)
                                  }))),
                                  className: "button white",
                                  style: {
                                      minWidth: "200px"
                                  },
                                  children: [Object(kt.jsx)("img", {
                                      src: Rt,
                                      style: {
                                          marginRight: "12px"
                                      },
                                      alt: "logo",
                                      height: "24px"
                                  }), Object(kt.jsx)("p", {
                                      className: "bold",
                                      children: o ? "YOUR WALLET" : "CONNECT WALLET"
                                  })]
                              })
                          }), Object(kt.jsx)("div", {
                              className: "nav-item depositHead",
                              children: Object(kt.jsx)("p", {
                                  onClick: function() {
                                      return ve(Ri.WALLET)
                                  },
                                  children: "Deposit to start playing!"
                              })
                          })]
                      })]
                  }) : Object(kt.jsx)(kt.Fragment, {})]
              })
          };
          var kn = function(e) {
                  var t = Object(d.c)((function(e) {
                          return e.reducer.isWalletUnlocked
                      })),
                      n = Object(a.useState)(null),
                      i = Object(Ot.a)(n, 2),
                      r = i[0],
                      s = i[1],
                      l = Object(a.useState)(!1),
                      u = Object(Ot.a)(l, 2),
                      b = u[0],
                      p = u[1],
                      h = Object(a.useState)(!1),
                      w = Object(Ot.a)(h, 2),
                      f = w[0],
                      j = w[1],
                      g = Object(a.useState)(Q),
                      O = Object(Ot.a)(g, 2),
                      v = O[0],
                      y = (O[1], Object(a.useState)(!1)),
                      x = Object(Ot.a)(y, 2),
                      k = x[0],
                      C = x[1],
                      S = Object(a.useState)(0),
                      E = Object(Ot.a)(S, 2),
                      B = E[0],
                      N = E[1],
                      I = Object(a.useState)(0),
                      T = Object(Ot.a)(I, 2),
                      M = T[0],
                      D = T[1],
                      R = Object(a.createRef)(),
                      W = function() {
                          C(!k)
                      },
                      G = function(e) {
                          N(e.changedTouches[0].screenX)
                      },
                      F = function(e) {
                          D(e.changedTouches[0].screenX)
                      };
                  Object(a.useEffect)((function() {
                      if (e.display) return R.current.addEventListener("touchstart", G), R.current.addEventListener("touchend", F),
                          function() {
                              R.current && (R.current.removeEventListener("touchstart", G), R.current.removeEventListener("touchend", F))
                          }
                  }), []), Object(a.useEffect)((function() {
                      Math.abs(M - B) <= 50 || M < B && k && C(!k)
                  }), [M]);
                  var L = Object(c.f)(),
                      P = Object(a.useCallback)((function(e) {
                          L.push(e)
                      }), [L]),
                      U = function() {
                          var e = Object(m.a)(A.a.mark((function e() {
                              return A.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          t ? P(Ri.WALLET) : p(!0);
                                      case 1:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e)
                          })));
                          return function() {
                              return e.apply(this, arguments)
                          }
                      }();
                  return Object(a.useEffect)((function() {
                      r && bn(window.userStorage.walletProvider ? fn : wn, r)
                  }), [r]), e.display ? Object(kt.jsxs)(kt.Fragment, {
                      children: [Object(kt.jsxs)(vt.b.Provider, {
                          value: {
                              color: "#fff"
                          },
                          children: [Object(kt.jsx)("div", {
                              className: "navbar",
                              children: Object(kt.jsx)(o.b, {
                                  to: "#",
                                  className: "menu-bars open-menu",
                                  children: Object(kt.jsx)(yt.a, {
                                      onClick: function() {
                                          return W()
                                      }
                                  })
                              })
                          }), Object(kt.jsx)("nav", {
                              className: k ? "nav-menu active" : "nav-menu",
                              ref: R,
                              style: {
                                  background: "url(".concat(Dt, ")")
                              },
                              children: Object(kt.jsxs)("ul", {
                                  className: "nav-menu-items",
                                  onClick: function() {
                                      return W()
                                  },
                                  children: [Object(kt.jsx)("li", {
                                      className: "navbar-toggle",
                                      children: Object(kt.jsx)(o.b, {
                                          to: "#",
                                          className: "menu-bars",
                                          children: Object(kt.jsx)(xt.h, {})
                                      })
                                  }), Object(kt.jsx)("li", {
                                      className: "nav-text nav-logo",
                                      children: Object(kt.jsx)(o.b, {
                                          to: "#",
                                          children: Object(kt.jsx)("img", {
                                              style: {
                                                  marginLeft: "5px"
                                              },
                                              src: Mt
                                          })
                                      })
                                  }), Tt.map((function(e, n) {
                                      return Object(kt.jsx)("li", {
                                          className: e.cName,
                                          children: e.isButton ? Object(kt.jsx)(o.b, {
                                              children: Object(kt.jsx)("div", {
                                                  onClick: Object(m.a)(A.a.mark((function e() {
                                                      return A.a.wrap((function(e) {
                                                          for (;;) switch (e.prev = e.next) {
                                                              case 0:
                                                                  return e.next = 2, U();
                                                              case 2:
                                                              case "end":
                                                                  return e.stop()
                                                          }
                                                      }), e)
                                                  }))),
                                                  className: "nav-item button",
                                                  children: Object(kt.jsxs)("div", {
                                                      className: "button white",
                                                      children: [Object(kt.jsx)("img", {
                                                          src: Rt,
                                                          style: {
                                                              marginRight: "12px"
                                                          },
                                                          alt: "logo",
                                                          height: "24px"
                                                      }), Object(kt.jsx)("p", {
                                                          className: "bold",
                                                          children: t ? "YOUR WALLET" : "CONNECT WALLET"
                                                      })]
                                                  })
                                              })
                                          }) : Object(kt.jsx)(kt.Fragment, {
                                              children: e.isExternalLink ? Object(kt.jsx)("a", {
                                                  href: e.path,
                                                  children: Object(kt.jsxs)("div", {
                                                      children: [Object(kt.jsx)("span", {
                                                          className: "icon",
                                                          children: e.icon
                                                      }), Object(kt.jsx)("span", {
                                                          children: e.title
                                                      })]
                                                  })
                                              }) : Object(kt.jsx)(o.b, {
                                                  to: e.isButton ? "" : e.path,
                                                  children: Object(kt.jsxs)("div", {
                                                      children: [Object(kt.jsx)("span", {
                                                          style: {
                                                              display: "" == e.icon ? "none" : ""
                                                          },
                                                          className: "icon",
                                                          children: e.icon
                                                      }), Object(kt.jsx)("span", {
                                                          children: e.title
                                                      })]
                                                  })
                                              })
                                          })
                                      }, n)
                                  }))]
                              })
                          })]
                      }), Object(kt.jsx)(dn, {
                          onProviderChosen: function(e) {
                              s(e)
                          },
                          onCloseModal: function() {
                              return p(!1)
                          },
                          display: b
                      }), Object(kt.jsx)(pn, {
                          header: "Warning",
                          text: v,
                          display: f,
                          onCloseModal: function() {
                              return j(!1)
                          }
                      })]
                  }) : null
              },
              Cn = (n(921), n(226), n.p + "static/media/background.17257ab7.png"),
              Sn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAABCCAYAAADt/X6HAAAFOElEQVRogd2beYhVVRzHP74alcmgoSyKnKJpcTSnPQWRsbKghQoqMQ3aENoxiqiQUtKikjba/hhayIosE1oMJK0mc8R5lW0zTUS7oeTWgprL/OI3/K687tx77n3Lfe/e94WZgXd/d875vt8557eeISJCAA4CpgGTgaOAHLAeWAO8BnwT9FJqoSQLfoaLyHwR2SZuLBGRFt+7qf0pnNhIEemOIFeI7SIyW0SGpZ2kt1yHA58AJ5ew4r4FbgA+SOtqzdnf+0okqBgNrABeAg6u4NwqBtXkIcBPpk0/VgOLgO1AO3AZsI9j8C3AnUAH0J8aliIyK2TPzRWRIb71PU5EVsXYr10i0paWPam/3gyY5ErHS0p8pohsjiC6W0QWiMiINJDMB0zwlhgv62n8Ygyt/iIiF9eSpB48+was4t9irPQ/gCuBM4Beh9woYAnwNnBEGTurZORCXizm0PgQOBGYDexwyF0A9AB3AA1V4LYXYSSLxU5gPjAWeM/xbiPwIPA5MDEZSoNRKZIefgDOA6YCvzvk9MtYaabmwArPYRAqTdLD60Ar8HjE0r8W6AOuUpud0FwSI6n4C5gFnAZ0O+RUk88DHwFjkphIkiQ9fAZMAG404mGYBHwB3G97t2KoBklsyT4NHAe86pBTc3aXxavnZ42kBw28pwNnA9875I4E3gHeAA4vd9Bqk/TwPjAOmAv865C7xByNW0OcllioFUnMcZgDtAHLHXIjgEfs8BpfykC1JOnhO2AKMAPY4JBTr6oLeAY4oJgB0kDSwysWgCuJwOya2dLrzLbOiPuP00RSsdVSKWpy1jrkNAOx0Jb5sVH/NG0kPawxJ0IPnL8dcmcCX9kBFpTZGEBaSSp2A4+ZF7TYITcUuAf42kzTIKSZpAeNbS815+BHh1wLsAx4GWgqfJAFkh6WAscDDwC7HHLTzdwc7X2QJZKKbcDdZk46HXItFtcOmJqskfTQY3Waq4GNITKqyYfIMEnMlr5gTv9zITLXqB+cZZIeNlvwPTPgmSbCp9YDSQ8ddjj5MbGeSGLhmR+j6o1kkGnJ1RvJswI+W1dPJM+1VKgf3fVAchhwL/BWiElcVHJKISVQh/wp4JiQ6WiOqCermjzUsn7LHAQ3WN43cx6PGvebLTMwzSG30QpM6ygnA1YDnA48C5wUMfTHVlLcG5ZlQZNNlvdZHUFwk7l37f64M82a1KTVFcCCGF0lHdaQsSnoYVpJjrFTc3KE3JfA9cAql1DalmujFXzWRhD8B7gdOCWKICnTpJ6GT8boK1hspiFOX8MA0kCyGXgCuChCTqvYN0WU6wNRy+XaYE0SvREEtR9hniWxiiZIDTU5yczC2Ai55Va87StnsGprcqSVzjsjCK63WseUcglSRZI5y8F4TRBh6DfTMdoKQBVBNZbrCeaOTYiQy1vF6tNKTyBJTe4PPGqTdhH80/bd+CQIkqAmz7G9d1iEnNYtbosovpaNJEg2W7PgUIdMn9UhVyTE639IYrm2OwjusEbDtmoRxKFJVwt2FH4Oeb7UPBZX+S0R5MzZ9aO5jME6LfTx8Ku1qkTVFxODtlqrPbrcN0DeIvGwBoU4aLWAN2+uWc2Qs2SQH6cCDwd0LrbaFxKWPCpEr4VBNSWIabLJltR+Ac/zdszvtD5Wr9+t3zyYsJJZquDd8JljCdpisMV80T1ZIdlg15CKbZlutIsxqYZnJ3dZZN5VxGTfzQJBfM7AVsurzIu4FbDHXLbYbV+1RtglUd1rF1qlSC+J6imr2Wi9mafpeb3blQ0A/wG1dYS5jT9oUQAAAABJRU5ErkJggg==",
              En = n.p + "static/media/backgroundN.3a9c6b7e.png",
              Bn = n.p + "static/media/sliderBanner.8af3d213.png";
          n(922);
          var Nn = function(e) {
                  var t = Object(a.useContext)(on),
                      n = t.tokenPrice,
                      i = t.marketCap;
                  return e.display ? Object(kt.jsx)("div", {
                      className: "footer",
                      style: {
                          position: e.absolute && !e.relative ? "absolute" : "relative"
                      },
                      children: Object(kt.jsxs)("div", {
                          className: "footer-container",
                          children: [Object(kt.jsx)("div", {
                              className: "footer-left",
                              children: Object(kt.jsx)("div", {
                                  className: "footer-item",
                                  children: Object(kt.jsxs)("p", {
                                      children: ["Price: ", n, " $"]
                                  })
                              })
                          }), Object(kt.jsx)("div", {
                              className: "footer-mid-left",
                              children: Object(kt.jsx)("div", {
                                  className: "footer-item link",
                                  children: Object(kt.jsx)("p", {
                                      onClick: function() {
                                          return ie("https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xA58950F05FeA2277d2608748412bf9F802eA4901")
                                      },
                                      children: "Pancakeswap"
                                  })
                              })
                          }), Object(kt.jsxs)("div", {
                              className: "footer-mid",
                              children: [Object(kt.jsx)("div", {
                                  className: "footer-item social",
                                  children: Object(kt.jsx)("div", {
                                      onClick: function() {
                                          return ie("https://twitter.com/WSGToken")
                                      },
                                      className: "button social",
                                      children: Object(kt.jsx)("img", {
                                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEXElEQVRYhc2Zf2wTZRjHv3dt19KtP5ysLbeNzEFKhj9wQ/FHNLhJYoQYYmIkEcIUFDNxiEqExD+IJhiiCQnGP4xmcTogSky2LGQLIcH94eJYHVu3VWQsymZQVsdcW6UZuxbzNO/Ncr2We2vX7Zs0vd69zz2fu3vf53nuqeApX4EsJAAoBXAXgGUA7gRgB1DATnUDQBjANQB/APgVwBUAN3ldGTnHE8Q6APex7XRawj5uAKvZGAIeBNDLtnVJ7x20AqgFUAPAwHlRasUAnAfwHYDrtxtsKHIU327MPQC2AqgAIP5POLBz0PSoZncymC0gnWgTgA0ATDkAU8vEHn8RgNF08zMdIBlvAXDvPICpJbGF9jOAuPqg1iOjOfYcAG8e4BR5mc+U+a0F+DSAVXlD+0/kc6N6pxqQFsQDeQZL1lrGMKdkQKvWFSyANjKWhJIBa5MPLKCIoU4NaGdBeLGoWslUCuC6HGSIXMrAmBKAAsuti03EJChpJ1PiT9GDa2ucmY4/u/mZ0nPdXTt/H7t08PKlwP7jXzY95Xa5CnY37PK+VL+tUqcbYioVWcmkWxvqal3Hvmra8dijj1CJlSLaf/TIh/XLy8vKBEGA2Wy21NWuf7jf133glZ0vPhmORG5wuKsQWZrRLa93pdNus9lamj9/ee+e3VVquz2NDQ+ZTKaU3C0IglBcXHzH3VVVSzncSQTIY4D+Af8kfVssFsv+fW8+3911ZvvrDa+ushUVJRaZx+1OW320trV3vX/o8ACHu6VUD77DE/8KC62GkydaNtdUr7mlkJDlmBwMBoNOp9NhtS4p1LLdd+Dd5uMnvhnjALxOFbWZwwDbt71QWV5emjItjEaDUZKWSZlsxy6P/83ji9i4C9DWtvZxh91u47WLRqPRnt7eKV47ApzhMbg6EZw5cvSTNlmOUemuW8M/XRiR5RjvS9MMAfLednzR3DI64B8MxONx3Q4//ayph9cPsRHgJK9VOBKRZVmOiaIo6BnvHxwKdHSevpoF4CSV/BQW9Eb3OZ3q6BxduaISLleJg0JOunGhUGh6y9b6r0OhsJwFoJ8A49lUMrOzszevTU2Fq+9fU+J2uUq0xkxPT/+1Y9drx4YDFyJZwJHOGtkbf1hvPn5rb+PqJ9Y/7i2TJLfH4/ZQOtOSr++8v/GNt0+Pjf8WzRKOmK4ob3UUWJfrsfqhp/dPQUBUkiSr1WotMJsLzKIoirSqJyaCwXM+39DB9z44dejwR31ZPlZFPgC/KJ0FB6XRRVQTUgj7mKawEqhDlGYXGCpZ/YzplneSs3p6JXlQlPVtoAYkuI5FAEgM/yg/1Ll4GMCP+WeaUx+AoeQdWsVCJ4CL+eVK6KLWE9QCpBX0LYCR/HAlNMJ8phQg6bpblF0CLD5mrPFyIJpSrVpwmQDB+nUjrJiomIceIS3KdgDfZ+pd6+mwBllcoga5Jwdd1hhbDCdZms0o3i6/3ia6lua1iZ5il5e/IQD8CxdaKXZjoTwEAAAAAElFTkSuQmCC",
                                          alt: "twitter",
                                          height: "40px"
                                      })
                                  })
                              }), Object(kt.jsx)("div", {
                                  className: "footer-item social",
                                  children: Object(kt.jsx)("div", {
                                      onClick: function() {
                                          return ie("https://t.me/WSGToken")
                                      },
                                      className: "button social",
                                      children: Object(kt.jsx)("img", {
                                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELElEQVRYhc2Ze0xbVRzHv7ctr0LaRUAnZK4MZMKe5fUHARzGRMcGM6hsumXTkbGn2UyIqAS3GSPxD2OMJjP+uZgl0z0yWGATA0FxTMY2s3UPOgybbsO1bAblUaQP86u/y8rlFnrb0vWTNLm9vfeczz33nPM751dh7rxU+IEAIBlACoAnAcQD0AGI5KL+BfA3gPsA+gH0AbgDwKW0Ko3C60kiD8BSPvZGDH+eAJDJ15DwJQBdfOwTvragFkAxgCwAaoUPJcUB4AKANgAjM12sjtM/NtM1iwGsB2AAoApQDlwGdQ8jt6TFX0EqaBWA5wFEBEFMSgS//jgAvd76pzdBunktgCWzICYliQfadQBO6Y9yr4z62CsA0kMgJ5LOdU7p33KCKwEsDJnaQ6jOEulJqSANiJwQi3mSzQ4TeApq5Z7gEVDCLm48BYs9f3iEkMNzUkEdT8LhglGMVKJgXhAiRDBRs5NbUODYGm6QkyCGnekCf0BoNGqh8s2NC5obj73cZzbVKCiLnJI1vGQKOrnZWXO2btlsLCzIX6bT6fRU/j2L5Z7CegwaDjNBQa/Xa3Zu35K56sUXjCkpBoMgCLDZbDax7L6+W3cU1pNEggmBypW/VJb8+roKY25O1uLIyMgoOkdiHWc6L+RmZy2Kjo6OpnOmq1fvKiw6QcOrCcWkpabG7tpRtbR4RZHx8cTERM/7z3Wf/7Whscn0Xk11uVYbMzG3nun8RWkLxpFglFK5luaGisyMZxaqVKpJodJitVrrP/n0pFqjFj7+cO9rYmsS43a7vbWtfdq1nwxRfi1Am059f9l8o/c3p9Pp4srHD393tCUvf8VXCfHxMfUf7d/gKUf09//ZPzY2NmU5NRO05H/H3xCX/nRabF1tTb5ep9OWla898UHtu8u3VVWWCTQ6JLS2tZ9dv6nytMIqRqgFh/yRI8w3eod37a5umz//qaRnCwsStlVVrpGTIy6brijtf8QQCQ74K0gMDg7ardaBvypeLc/w4uam/acOpSOYGFDxvjUg2n/suFa6uqQI/x930et0uR5uMWw222jn2a4HftRxV8Wb6oA4+M0hs9PhsH/+5YFj6za80Ux97f26fQf/GRpyd5/f/7jtT+sRN2mQ0Ht5O9B4HBurVQ8Pjzg8zy1IMWi/PvBF6bXrPbff2lP9s8IiaUv6mbhxp61lQSCCs0AHgB/EefAc7/jDBQc7TSxYBwFcDCPBi+w0aU/S6kuuJASMct4GUkGSawoDQXIYFr9IY7EJQHfonSY4T0HH84TcYqEZQE9ovdz0yL1BOUEaQUco1IbGy42Z65wyk3jLbtGy6ArNv5x9mk2oSx33Ns1Nlx908ZMNcPIy2DlCGpQNPCF7zV37kmG18LxECfK5QciyOngwfMuJ9WlRmuX3NYkux6wm0afcF5K/IQD8BwfeH+/wbfcmAAAAAElFTkSuQmCC",
                                          alt: "twitter",
                                          height: "40px"
                                      })
                                  })
                              }), Object(kt.jsx)("div", {
                                  className: "footer-item social",
                                  children: Object(kt.jsx)("div", {
                                      onClick: function() {
                                          return ie("https://medium.com/@WSGToken")
                                      },
                                      className: "button social",
                                      children: Object(kt.jsx)("img", {
                                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAE80lEQVRYhc2Ze0xbVRzHvy3tbimlTMoYtmPyMDNugDAGm8bElSHGLZnRzZj4ijgX/0OZLGKG4Ia6SOYcwpy6OERJlmwaFqLOGGTRLY6xl/IaoJnboF3CqPJoC6wvc8q5eLm9be+l0PFNbjj33PM7v0/vPef8zvkhS0hMxSwkA2AAkAzgbgA6AFoAi2hXtwGMArAAuAngbwAmAB6prhQS2xOIXAAZtOxPkfRaCmAlbUOA2wG00bIoiX2DagBGAKsBREj8UXy5AFwCcAqAPVjjCE1MbLA2aQCeA5AEQB4iHGgfZHhk0Tc5OFtA0tEmAPkAlHMAxpeSfn4NgL/8jU9/gMT4GQDp8wDGl55OtB4Abv5DoU9GxthWACvCAMdqBfXpM76FAB8HcF/Y0P4X8bmRX8kHJBNiTZjBuMqmDNPiAqqFfsEd0EbK4hUX0Mh9cAdFGPL4gFq6CC8UZbGRig11ucEixNdfHi7IzzM+ODExMU6rSDz2FJeUNpxo+s7sz67x+NHNWZkZ93s8Hu86p1KpIq/f6O9f97DxSAB3EZSpWU4dZQR7c29XVJ62Wm1W4oBeRJElxUX5/mxSkpPU69bmZDEMo2LtRkZGhotL3jwRzB9lkrFhJ1Dg9+ra9RvjeQWbDo6Ojs4I9KmpKcm5OWvuErJ5o7gom1+3s7Ts2NnWtn9EABImg5xumUSpf2Bg4vLv7Vf4bct3la4Xss/fYPRZshiGkbLZSJLTMCNaCoXCx0H26swM8jm5ddu3Fd6rjY7WulwuF7depVJJ2eLpCWCcFMC4ON1ik8lsNptvzpgY5WVvPcRt9+orheuHh4f/HbJYLFL657uT092EaEVrNFGd3Veu1tU3/Mq1yTM+sjZao/G+3cwHMmIMBr3h8JH6ZhXDLJLSP08aAshIsSDLhS42Vlt76LNebr1SoVDsrtiVQ8pVeysLbg0N3dp/oKZbq9UuDgGQmc0G1KPTxcaQwm9nz13kPijI3+CdFOlpq1Z+UfdVCynLZLIQ+KYiyaRUI9ZpxZ73fuHW63SxutYzpwrt9nFbdc0nPQaDXhUSHTBJAK1SrdxutzcqdHZ1j/X09v3JfXbP8sTlbecvdJLy8sRlocZ2KwEckmLhcDpdTqfTyd7v/WBfM7/N/gM1raDjNUTAITk9t4qWWh2pilKrp9/MT80tg2TZYe8HTCbT+YuXhknZZrO7+P1OTk761AWQWU4P1aK0/eWXUuOXLIk3GPT6bYUvprA2Bz/9/Ge2/G1j07npn2+x+Ixvm93ukAB4TU5P/EEP0k9veTJxzztlz7P37+4uf2HLU08sI+W6+oarTudUxKja91EH+ZuwNJ5pPH70WX4/Ve9Xbk1PWxU09lMmk5we99qDtS7Z8VqBw+G4PWa1jpHL4XA4du54/VGlUumd0t+f/PH0H+0dXW731MHsUG31Y2TCTPBEZnpt9YebRQASJg+bWSDrWtEcZA3mSuRrfAxghF2oRwBcXiBwoCyEacaZpEVMriQMGqd5G/ABCdwPCwCQMNjYG34sJhHgQviZpkViewe3QmizcBJAr0D9fKtX6AsKAZIZ9A2AvjDC9VGfPlHGX3aLLGZdAKJo9mk+RYZUoxBcIEDQBbyPbiaS5iFHSCZlE4AzgXLXYjKsg3RdIlv3hDnIsrroZDhGw2xASc3yi02iC2lek+g+dmH5NwSA/wAGKHxBJrjG8AAAAABJRU5ErkJggg==",
                                          alt: "twitter",
                                          height: "40px"
                                      })
                                  })
                              })]
                          }), Object(kt.jsx)("div", {
                              className: "footer-mid-right",
                              children: Object(kt.jsx)("div", {
                                  className: "footer-item link",
                                  children: Object(kt.jsx)("p", {
                                      onClick: function() {
                                          return ie("https://wsg.gg/files/whitepaper.pdf")
                                      },
                                      children: "Whitepaper"
                                  })
                              })
                          }), Object(kt.jsx)("div", {
                              className: "footer-right",
                              children: Object(kt.jsx)("div", {
                                  className: "footer-item",
                                  children: Object(kt.jsxs)("p", {
                                      children: ["Market cap: ", i, " $"]
                                  })
                              })
                          })]
                      })
                  }) : Object(kt.jsx)(kt.Fragment, {})
              },
              In = n.p + "static/media/icon-game-trader.e48048a5.png",
              Tn = n.p + "static/media/icon-game-coin-explorer - Copy.6e125dd4.png",
              Mn = n.p + "static/media/partner-2.dbeebc20.png",
              Dn = n.p + "static/media/partner-4.2e0f8532.png",
              Rn = n.p + "static/media/partner-5.e72369be.png",
              Wn = n.p + "static/media/partner-6.dcfe5a53.svg",
              Gn = n.p + "static/media/img-stake-banner.febd970e.png",
              Fn = (n.p, n.p + "static/media/theRollerCover.c6ef5f6d.png"),
              Ln = n(427),
              Qn = n.n(Ln),
              Pn = (n(924), n(382), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAAmklEQVQokY2S4Q2CMBSEjxcXYAUcgRVYwVl0JhlBR5AVHIFu8GlK2vig2PAlTX/0eu96aaMEcJHU6kcws1EeYAA+O6vPMkt7p5LoOB0RrsYeFi6PAV6S+h1x5llz9EwNECuZK6Ig6XwyswCMrsN2E+MWNcV14Or6jNkXckbPyu1vIGBObveaqHNjV01sRw/uAe+aY/wcj+JA0hefj2X7bg2nQQAAAABJRU5ErkJggg==");
          var Un = function(e) {
                  return Object(kt.jsx)("div", {
                      className: "button social",
                      style: Object(p.a)({
                          justifyContent: "flex-end",
                          marginTop: "-10px"
                      }, e.style),
                      children: Object(kt.jsx)("img", {
                          src: e.iconInverted ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAQAAAAhxq+mAAAACXBIWXMAAAAnAAAAJwEqCZFPAAALsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRjNTVlZGFlLTA0MTktMzc0YS1hMTYwLWZlM2Q5ZDg5ZWVkMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZmNlMmY4Zi02NzIzLWFhNDMtOTQ2Yi02OTIyYjdiYzUxODciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iMDhGMTZFODkwOUU4NTc1OTY1NEE4N0UzMUY4QzQ2NTAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIxIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNi0xMFQxOToxMToyMiswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDYtMTNUMDI6MjQ6MTkrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDYtMTNUMDI6MjQ6MTkrMDI6MDAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB0aWZmOkltYWdlV2lkdGg9IjM2MCIgdGlmZjpJbWFnZUxlbmd0aD0iMzYwIiB0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb249IjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6U2FtcGxlc1BlclBpeGVsPSI0IiB0aWZmOlhSZXNvbHV0aW9uPSIxMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iMTAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6RXhpZlZlcnNpb249IjAyMjEiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxNjAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIxNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjg5Mzg0ZTU2LTEwYmMtNjA0OS1iOTk3LTY2NTI3YzU2YjEyZCIgc3RFdnQ6d2hlbj0iMjAyMS0wNi0xMFQxOTozMDo0MCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphM2MyMDM4MC0yNGY4LTljNDQtOGViZi01MDU3ZTlkODk1M2UiIHN0RXZ0OndoZW49IjIwMjEtMDYtMTNUMDI6MjQ6MTkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmZjZTJmOGYtNjcyMy1hYTQzLTk0NmItNjkyMmI3YmM1MTg3IiBzdEV2dDp3aGVuPSIyMDIxLTA2LTEzVDAyOjI0OjE5KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmEzYzIwMzgwLTI0ZjgtOWM0NC04ZWJmLTUwNTdlOWQ4OTUzZSIgc3RSZWY6ZG9jdW1lbnRJRD0iMDhGMTZFODkwOUU4NTc1OTY1NEE4N0UzMUY4QzQ2NTAiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iMDhGMTZFODkwOUU4NTc1OTY1NEE4N0Uz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" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAQAAAAhxq+mAAAACXBIWXMAAAAnAAAAJwEqCZFPAAAJ7GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRiNzg0ZmU5LTA4YWYtNjk0MC05ZjhmLWRiZDk0NDk1NDgxZSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Yzk4NDc1Yy02ZTQ5LWQyNDYtYTI2OC04NTQ2NDNhOWJjODAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iMDhGMTZFODkwOUU4NTc1OTY1NEE4N0UzMUY4QzQ2NTAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIxIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iIiB0aWZmOkltYWdlV2lkdGg9IjM2MCIgdGlmZjpJbWFnZUxlbmd0aD0iMzYwIiB0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb249IjEiIHRpZmY6U2FtcGxlc1BlclBpeGVsPSI0IiB0aWZmOlhSZXNvbHV0aW9uPSIxLzEiIHRpZmY6WVJlc29sdXRpb249IjEvMSIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpFeGlmVmVyc2lvbj0iMDIyMSIgZXhpZjpDb2xvclNwYWNlPSI2NTUzNSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjM2MCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjM2MCIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDYtMTBUMTk6MTE6MjIrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA2LTEwVDE5OjI2OjA1KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA2LTEwVDE5OjI2OjA1KzAyOjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDdjZTI4NGItMzgwZi1mZTRjLWJmNDItYmE3MzBhNzVhZmE1IiBzdEV2dDp3aGVuPSIyMDIxLTA2LTEwVDE5OjI2OjA1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdjOTg0NzVjLTZlNDktZDI0Ni1hMjY4LTg1NDY0M2E5YmM4MCIgc3RFdnQ6d2hlbj0iMjAyMS0wNi0xMFQxOToyNjowNSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkN2NlMjg0Yi0zODBmLWZlNGMtYmY0Mi1iYTczMGE3NWFmYTUiIHN0UmVmOmRvY3VtZW50SUQ9IjA4RjE2RTg5MDlFODU3NTk2NTRBODdFMzFGOEM0NjUwIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9IjA4RjE2RTg5MDlFODU3NTk2NTRBODdFMzFGOEM0NjUwIi8+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU0NST0xMLi4iIHBob3Rvc2hvcDpMYXllclRleHQ9IlNDUk9MTC4uIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPHRpZmY6Qml0c1BlclNhbXBsZT4gPHJkZjpTZXE+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDxyZGY6bGk+ODwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvdGlmZjpCaXRzUGVyU2FtcGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pibg7DUAABKfSURBVHic7ZxtjB1Xecd/55yZ+7Jrr7M2jjGJiVlCEoeXEFZRAZUCylakAtp+cWlREVSo2y+VIiSk5VMLraCmEnyqqIyqVnwg0EXlrTREctrwFvJmQ4mTOiFx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",
                          alt: "scroll",
                          height: "55px"
                      })
                  })
              },
              Hn = function(e, t) {
                  switch (e) {
                      case "TOP_PLAYERS":
                          return Object(kt.jsxs)("span", {
                              className: "leaderboards-header-span",
                              children: [Object(kt.jsx)("img", {
                                  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAPCAYAAAAGRPQsAAAAw0lEQVQ4jaWTAQ2DMBBFL80MYAELWJgFNEwCFrCABSYBJGABJDAHj4WlbJfSNrdwyfWS3v8/d7+pWAKogdIEzgXQAhuwAkUO6wx6RVAviS2+vgzY7yozcA/uC7/e5rONcDtg+ni6Hwo8RIBbkKXqV6rXHZe9MrmJAHX2vr8PMShepaeoFWEO1gtz0tiUdzmBVDYHP3zNp+nFEpyrYqNzbkl2vV/WFWvNvUX0HiJi/YdjbqrmT/PX3GT7/mkPzvH7YiLyBpwviM2xLCx0AAAAAElFTkSuQmCC",
                                  alt: "crown",
                                  height: "14pt"
                              }), Object(kt.jsx)("p", {
                                  children: "Most games won"
                              })]
                          });
                      case "MOST_GAMES_PLAYED":
                          return Object(kt.jsxs)("span", {
                              className: "leaderboards-header-span",
                              children: [Object(kt.jsx)("img", {
                                  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAA0UlEQVQ4jZVTCRHCMBDc7mCgFrCAhVrAQpEAEmqhWKgEsFAJrYTiYGEKV+YIJCk7k0kmudt79lIggKQSwD68d7iR7BLvT5JW0j2zPoIU5tgAKO2uArBNRgKuAEY794Wk2WHIOKUw0tcK4GBRcjgDOC02JDkaQWn7GpLOlfwqS1LtGjmsaOxiM0navamNaFpB4Il2XznOMyLpKOmScG5DiaOIEDV/6WZZeaI2ZsvoAxkq1cdsN5EsapN8nt4Flf2rnmR6DKyxOWU8+e9M3L/IA8ADJ8k367koexgAAAAASUVORK5CYII=",
                                  alt: "trophy",
                                  height: "14pt"
                              }), Object(kt.jsx)("p", {
                                  children: "Most games played"
                              })]
                          });
                      case "TOP_SCORE":
                          return Object(kt.jsxs)("span", {
                              className: "leaderboards-header-span",
                              children: [Object(kt.jsx)("img", {
                                  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAKCAYAAABWiWWfAAAAuElEQVQokZ1SwQ3CMAw8skFW6ApZoSt0BVZghTJCV2AFGAFGgBHCBge6ypFci4qCpfs457N9zg4uSA4AhIxtcQNwTCk9EYROJF9/oJLsvdDBiehx3CDaeNWQm1h1pDvJboPYGDbaIxQOJIuR+i8T1mDNpKLsElcjKHe2KaOIckXFcdJkl7iYfcWg/WVqt3LTB4DlBZuGdfK+/Yopfg0Jak0vNK/sOPI0Np0P8THsIDJ/9eNa4yUHwBvmBt7wXvox0AAAAABJRU5ErkJggg==",
                                  alt: "gamepad",
                                  height: "14pt"
                              }), Object(kt.jsxs)("p", {
                                  children: ["Top score - ", te[t]]
                              })]
                          });
                      case "FASTEST_WIN":
                          return Object(kt.jsxs)("span", {
                              className: "leaderboards-header-span",
                              children: [Object(kt.jsx)("img", {
                                  src: Pn,
                                  alt: "bolt",
                                  height: "14pt"
                              }), Object(kt.jsxs)("p", {
                                  children: ["Fastest win - ", te[t]]
                              })]
                          });
                      case "CHALLENGE":
                          return Object(kt.jsxs)("span", {
                              className: "leaderboards-header-span",
                              children: [Object(kt.jsx)("img", {
                                  src: Pn,
                                  alt: "bolt",
                                  height: "14pt"
                              }), Object(kt.jsx)("p", {
                                  children: t
                              })]
                          })
                  }
              },
              Zn = [{
                  key: "TOP_PLAYERS",
                  resultText: "Matches won:",
                  game: 0,
                  color: "#94359a"
              }, {
                  key: "MOST_GAMES_PLAYED",
                  resultText: "Games played:",
                  game: 0,
                  color: "#5956c4"
              }, {
                  key: "FASTEST_WIN",
                  resultText: "Time:",
                  game: 1,
                  color: "#c97210"
              }, {
                  key: "TOP_SCORE",
                  resultText: "Points gained:",
                  game: 2,
                  color: "#108374"
              }, {
                  key: "CHALLENGE",
                  resultText: "Points gained:",
                  game: 0,
                  color: "#326fa8"
              }],
              Jn = "Daily",
              Yn = "Weekly",
              zn = "Monthly",
              Vn = "All time",
              Xn = "day",
              Kn = "week",
              qn = "month",
              _n = null;
          var $n = function() {
              var e = Object(d.b)(),
                  t = document.documentElement.clientWidth,
                  n = (document.documentElement.scrollHeight, Object(d.c)((function(e) {
                      return e.reducer.leaderboards
                  }))),
                  i = Object(a.useState)(Yn),
                  r = Object(Ot.a)(i, 2),
                  s = r[0],
                  o = r[1],
                  c = Object(d.c)((function(e) {
                      return e.reducer.user
                  })),
                  l = Object(d.c)((function(e) {
                      return e.reducer.myGamesUpdates
                  })),
                  u = Object(a.useState)(ce(l)),
                  p = Object(Ot.a)(u, 2),
                  h = p[0],
                  w = p[1],
                  f = Object(d.c)((function(e) {
                      return e.reducer.challenge
                  }));
              Object(a.useEffect)((function() {
                  null == f && e(bt())
              }), [f]), Object(a.useEffect)((function() {
                  var t, n, a, i;
                  s && e((t = function(e) {
                      switch (e) {
                          case Jn:
                              return Xn;
                          case Yn:
                              return Kn;
                          case zn:
                              return qn;
                          case Vn:
                              return _n
                      }
                  }(s), function() {
                      var e = Object(m.a)(A.a.mark((function e(r) {
                          var s, o, c;
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return s = {
                                          period: t
                                      }, s = JSON.stringify(s), e.prev = 2, e.next = 6, fetch("/rest/api/leaderboards", {
                                          method: "GET",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json",
                                              postData: s
                                          }
                                      });
                                  case 6:
                                      return o = e.sent, e.next = 9, o.json();
                                  case 9:
                                      c = e.sent, we(o, 0, function() {
                                          var e = Object(m.a)(A.a.mark((function e() {
                                              return A.a.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                          r({
                                                              type: Me,
                                                              leaderboards: c
                                                          });
                                                      case 1:
                                                      case "end":
                                                          return e.stop()
                                                  }
                                              }), e)
                                          })));
                                          return function() {
                                              return e.apply(this, arguments)
                                          }
                                      }(), n, a, i), e.next = 17;
                                      break;
                                  case 14:
                                      e.prev = 14, e.t0 = e.catch(2), console.warn("Failed obtaining list of leaderboards..", e.t0);
                                  case 17:
                                  case "end":
                                      return e.stop()
                              }
                          }), e, null, [
                              [2, 14]
                          ])
                      })));
                      return function(t) {
                          return e.apply(this, arguments)
                      }
                  }()))
              }), [s]);
              var j = function(e) {
                  o(e)
              };
              Object(a.useEffect)((function() {
                  l && setTimeout((function() {
                      w(ce(l))
                  }), 300)
              }), [l]);
              var g = function(e) {
                  switch (e) {
                      case 0:
                          return n.bestPlayers;
                      case 1:
                          return n.mostGamesPlayed;
                      case 2:
                          return n.bestExplorerTime;
                      case 3:
                          return n.bestRollerScore;
                      case 4:
                          return n.challenge
                  }
                  return []
              };
              if (null != f)
                  for (var O = 0; O < Zn.length; O++)
                      if ("CHALLENGE" == Zn[O].key)
                          if (f.length > 0) {
                              var v = f[0].title;
                              Zn[O].game = v
                          } else Zn[O].game = null;
              return Object(kt.jsx)(kt.Fragment, {
                  children: Object(kt.jsxs)("div", {
                      className: "page-leaderboards page",
                      style: {
                          background: "url(".concat(En, ")"),
                          backgroundSize: "cover"
                      },
                      children: [Object(kt.jsxs)("div", {
                          className: "body",
                          children: [Object(kt.jsx)(kn, {
                              display: t <= Mi
                          }), Object(kt.jsx)(xn, {
                              display: t > Mi
                          }), Object(kt.jsxs)("div", {
                              className: "leaderboards",
                              style: {
                                  padding: t > Di ? "0 12% 0 12%" : "0 4 % 0 4%"
                              },
                              children: [Object(kt.jsx)("p", {
                                  className: "h1",
                                  children: "Leaderboards"
                              }), Object(kt.jsx)("p", {
                                  className: "h5",
                                  children: "On this page only legendary names hold their spot. Once you find yourself on the top 10 players you can expect some additional weekly rewards!"
                              }), function() {
                                  var e = "button leaderboards period",
                                      t = e + " active";
                                  return Object(kt.jsxs)("div", {
                                      className: "leaderboards-period-row",
                                      children: [Object(kt.jsx)("div", {
                                          onClick: function() {
                                              j(Jn)
                                          },
                                          className: s === Jn ? t : e,
                                          children: Object(kt.jsx)("p", {
                                              children: Jn
                                          })
                                      }), Object(kt.jsx)("div", {
                                          onClick: function() {
                                              j(Yn)
                                          },
                                          className: s === Yn ? t : e,
                                          children: Object(kt.jsx)("p", {
                                              children: Yn
                                          })
                                      }), Object(kt.jsx)("div", {
                                          onClick: function() {
                                              j(zn)
                                          },
                                          className: s === zn ? t : e,
                                          children: Object(kt.jsx)("p", {
                                              children: zn
                                          })
                                      }), Object(kt.jsx)("div", {
                                          onClick: function() {
                                              j(Vn)
                                          },
                                          className: s === Vn ? t : e,
                                          children: Object(kt.jsx)("p", {
                                              children: Vn
                                          })
                                      })]
                                  })
                              }(), Object(kt.jsx)("div", {
                                  className: "leaderboards-tables",
                                  children: Zn.map((function(e, t) {
                                      return Object(kt.jsx)(ea, {
                                          index: t,
                                          leaderboard: e,
                                          data: g(t)
                                      })
                                  }))
                              })]
                          })]
                      }), Object(kt.jsx)(Nn, {
                          display: !0
                      }), function(t) {
                          if (!t || 0 === t.length) return Object(kt.jsx)(kt.Fragment, {});
                          var n = function(e) {
                              return e ? oe(c.address, e) ? "Opponent finished playing one of your games. You have won!" : "Opponent finished playing one of your games. You have lost." : "Opponent joined one of your games.. You can join match after he is finished playing."
                          };
                          return Object(kt.jsx)(kt.Fragment, {
                              children: t.map((function(t, a) {
                                  return Object(kt.jsx)(pn, {
                                      header: (i = t.winner, i ? "Game finished" : "Player joined lobby"),
                                      text: n(t.winner),
                                      display: h[a],
                                      onCloseModal: function() {
                                          var n = Object(b.a)(h);
                                          n[a] = !1, w(n), e(ot(t))
                                      }
                                  }, a);
                                  var i
                              }))
                          })
                      }(l)]
                  })
              })
          };
          var ea = function(e) {
              var t = e.data,
                  n = e.leaderboard,
                  a = e.hidden,
                  i = e.index;
              Number.isInteger(e.leaderboard.game) || null != e.leaderboard.game || (a = !0);
              var r = 2 === i ? "s" : "";

              function s(e) {
                  var t = e.value,
                      a = 2 === e.tableIndex ? Number(t.result).toFixed(2) : t.result,
                      i = Number(e.index) + 1;
                  return Object(kt.jsxs)("li", {
                      onClick: function() {
                          return e.action ? e.action() : null
                      },
                      className: "row-leaderboards",
                      children: [Object(kt.jsx)("div", {
                          className: "rank",
                          children: Object(kt.jsx)("p", {
                              children: i
                          })
                      }), Object(kt.jsx)("div", {
                          className: "rank",
                          children: Object(kt.jsx)("p", {
                              children: Object(kt.jsx)("img", {
                                  className: "avatar",
                                  width: 33,
                                  src: t.avatar
                              })
                          })
                      }), Object(kt.jsx)("div", {
                          className: "address",
                          children: Object(kt.jsx)("p", {
                              children: t.name
                          })
                      }), Object(kt.jsx)("div", {
                          className: "result",
                          children: Object(kt.jsxs)("p", {
                              children: [n.resultText, " ", Object(kt.jsx)("b", {
                                  children: "".concat(a).concat(r)
                              })]
                          })
                      })]
                  })
              }
              return Object(kt.jsxs)("div", {
                  className: "leaderboard",
                  style: {
                      display: a ? "none" : "block"
                  },
                  children: [0 === i ? Object(kt.jsx)(Un, {
                      iconInverted: !0,
                      style: {
                          justifyContent: "flex-start",
                          width: "100%",
                          marginTop: "-41px",
                          position: "relative",
                          left: "-80px",
                          bottom: "-40px"
                      }
                  }) : Object(kt.jsx)(kt.Fragment, {}), Object(kt.jsx)("div", {
                      className: "row-header-leaderboards",
                      children: Object(kt.jsx)("div", {
                          style: {
                              backgroundColor: n.color
                          },
                          children: Hn(n.key, n.game)
                      })
                  }), Object(kt.jsx)("div", {
                      className: "leaderboards-table",
                      children: Object(kt.jsx)("ul", {
                          children: t.map((function(t, n) {
                              return Object(kt.jsx)(s, {
                                  index: n,
                                  tableIndex: e.index,
                                  value: t,
                                  action: e.action
                              }, n)
                          }))
                      })
                  })]
              })
          };
          n(925);
          var ta = function(e) {
                  return Object(kt.jsx)("div", {
                      style: {
                          height: "40px",
                          width: "100%"
                      }
                  })
              },
              na = n(168),
              aa = n.n(na),
              ia = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAICAYAAAAiJnXPAAAAT0lEQVQYlZXLUQmAQAADUCtYwQpWsIJZrGBJKxjhKYKC3N1A97ntdSmYMcZDGSw4sGP6A45PsADbDTJsgP46RtgCr62GGBJI8CnXBCrIfAI02si0g2WtTAAAAABJRU5ErkJggg==",
              ra = [{
                  title: "PLATFORM",
                  content: function() {
                      return Object(kt.jsxs)("span", {
                          children: [Object(kt.jsx)("h3", {
                              children: "How to start?"
                          }), Object(kt.jsx)("br", {}), Object(kt.jsxs)("ol", {
                              children: [Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "Connect Wallet"
                                  }), ' - Make sure you connect your BEP-20 BSC Wallet to the website by clicking on "CONNECT WALLET"']
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "How to deposit funds"
                                  }), ' - Click on either "YOUR WALLET" or "Deposit to start playing!"']
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "Approve"
                                  }), ' - Click on "Approve" button to connect your wallet with the platform and also approve it in the wallet.']
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "Deposit"
                                  }), ' - Choose between the available tokens which you also have in your wallet and click on "Deposit".']
                              }), Object(kt.jsxs)("li", {
                                  children: ["Head out to the PLAY subpage and ", Object(kt.jsx)("b", {
                                      children: "have fun!"
                                  })]
                              })]
                          })]
                      })
                  },
                  color: "#c97210"
              }, {
                  title: "STAKING",
                  content: function() {
                      return Object(kt.jsxs)("span", {
                          children: [Object(kt.jsx)("h3", {
                              children: "How to stake?"
                          }), Object(kt.jsx)("br", {}), Object(kt.jsxs)("ol", {
                              children: [Object(kt.jsx)("li", {
                                  children: Object(kt.jsxs)("b", {
                                      children: ["Head over to ", Object(kt.jsx)("a", {
                                          style: {
                                              color: "white"
                                          },
                                          href: "https://stake.wsg.gg",
                                          children: "stake.wsg.gg"
                                      })]
                                  })
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "Connect Wallet"
                                  }), ' - Make sure you connect your BEP-20 BSC Wallet to the website by clicking on "CONNECT WALLET"']
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "Choose desired pool"
                                  }), ' - Click directly on the pool or press "Details" button!"']
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "Approve"
                                  }), ' - Click on "Approve" button to approve your spending limit on the platform!']
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "Deposit"
                                  }), ' - Choose between the amount you wish to deposit and press "Ok"']
                              }), Object(kt.jsxs)("li", {
                                  children: ["Wait for deposit transaction to complete, sit back and enjoy your", Object(kt.jsx)("b", {
                                      children: "passive income!"
                                  })]
                              })]
                          })]
                      })
                  },
                  color: "#326fa8"
              }, {
                  title: "LIQUIDITY POOL STAKING",
                  content: function() {
                      return Object(kt.jsxs)("span", {
                          children: [Object(kt.jsx)("h3", {
                              children: "How to stake LP tokens?"
                          }), Object(kt.jsx)("br", {}), Object(kt.jsxs)("ol", {
                              children: [Object(kt.jsx)("li", {
                                  children: Object(kt.jsxs)("b", {
                                      children: ["Head over to ", Object(kt.jsx)("a", {
                                          style: {
                                              color: "white"
                                          },
                                          href: "https://stake.wsg.gg",
                                          children: "stake.wsg.gg"
                                      })]
                                  })
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "Connect Wallet"
                                  }), ' - Make sure you connect your BEP-20 BSC Wallet to the website by clicking on "CONNECT WALLET"']
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "Choose WSG-BNB-cake LP"
                                  }), ' - Click directly on the pool or press "Details" button!"']
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "Approve"
                                  }), ' - Click on "Approve" button to approve your spending limit on the platform!']
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsxs)("b", {
                                      children: ["Buy LP tokens on ", Object(kt.jsx)("a", {
                                          target: "_blank",
                                          href: "https://exchange.pancakeswap.finance/#/add/ETH/0xA58950F05FeA2277d2608748412bf9F802eA4901",
                                          children: "Pancakeswap"
                                      })]
                                  }), " - Head over to the website, approve your spending limit and buy LP tokens. After succesful transaction head back to wsg stake page."]
                              }), Object(kt.jsxs)("li", {
                                  children: [Object(kt.jsx)("b", {
                                      children: "Deposit"
                                  }), ' - Choose between the amount you wish to deposit and press "Ok"']
                              }), Object(kt.jsxs)("li", {
                                  children: ["Wait for deposit transaction to complete, sit back and enjoy your", Object(kt.jsx)("b", {
                                      children: "passive income!"
                                  })]
                              })]
                          })]
                      })
                  },
                  color: "#831065"
              }, {
                  title: "THE ROLLER",
                  content: function() {
                      return Object(kt.jsxs)("span", {
                          children: ["The Roller is a simple number matching game. You have 13 rounds where your goal is to get as many points as you can. Match any number you see with the same number in the bottom row. For each successful match you get 250 points. For clearing a whole horizontal, vertical or diagonal line you get an additional 1000 points. If you are resourceful enough to clear the whole board you will be rewarded with 5000 additional points!", Object(kt.jsx)("br", {}), Object(kt.jsx)("br", {}), "If there are no matching numbers on the board you have to press on any cell in the bottom row to advance to the next round, which will refresh the numbers in the bottom row.", Object(kt.jsx)("br", {}), "In the 13th round there are no more numbers on the board. In the final round you have the chance to significantly increase or slightly decrease your points. Each field represents one of the following values: '-5%', '0%', '5%', '2x', '4x'.", Object(kt.jsx)("br", {}), "The bigger the bonus, the lower the chance there is of opening it.", Object(kt.jsx)("br", {}), "After opening the first bonus field you have the ability to click on it again to receive a hint (an arrow) that shows you where the mighty 4x bonus is hidding.", Object(kt.jsx)("br", {}), Object(kt.jsx)("br", {}), "Special powers:", Object(kt.jsx)("br", {}), "Yellow Joker: Open any field in the same column", Object(kt.jsx)("br", {}), "Rainbow Joker: Open any field in the board", Object(kt.jsx)("br", {}), "Gray Joker: Open any field in the board, but lose 50 % of your points.", Object(kt.jsx)("br", {}), Object(kt.jsx)("br", {}), Object(kt.jsx)("b", {
                              children: "Controls: "
                          }), "To open a field: Left mouse click, press on mobile phone.", Object(kt.jsx)("br", {}), "To use a special power first click on it and select the field you would like to use it on."]
                      })
                  },
                  color: "#108374"
              }, {
                  title: "COIN EXPLORER",
                  content: function() {
                      return Object(kt.jsxs)("span", {
                          children: ["This game will test your ability of how good you are at spotting a bad coin and if you can avoid it! The playing field is 7x7 squares. Click a square, you get a number. That number is the number of how many bad coins are surrounding it. Complete the game by uncovering the whole field and avoiding the bad coins!", Object(kt.jsx)("br", {}), Object(kt.jsx)("br", {}), Object(kt.jsx)("b", {
                              children: "Controls: "
                          }), Object(kt.jsx)("br", {}), "To open a field: Left mouse click, short press on mobile.", Object(kt.jsx)("br", {}), "To set a flag: Right mouse click, long press on mobile."]
                      })
                  },
                  color: "#595bc5"
              }, {
                  title: "THE TRADER",
                  content: function() {
                      return Object(kt.jsxs)("span", {
                          children: ["This game will test your ability of how fast you can switch between buying and selling crypto to maximize your gains! With a single command, your character switches from buying crypto to selling crypto and vice versa. Be careful as you have to switch before the window of opportunity closes and switches to the next position.", Object(kt.jsx)("br", {}), Object(kt.jsx)("br", {}), Object(kt.jsx)("b", {
                              children: "Controls: "
                          }), "Left mouse button / space button / touch on a mobile device."]
                      })
                  },
                  color: "#873198"
              }],
              sa = function(e, t, n) {
                  return Object(kt.jsxs)("div", {
                      className: "collapsible-header",
                      style: {
                          backgroundColor: ra[t].color
                      },
                      children: [Object(kt.jsx)("p", {
                          className: "h5",
                          children: ra[t].title
                      }), n ? Object(kt.jsx)("div", {
                          style: {
                              transition: "2s"
                          },
                          children: Object(kt.jsx)("img", {
                              src: ia,
                              className: "icon-arrow",
                              alt: "arrow",
                              height: "12pt"
                          })
                      }) : Object(kt.jsx)("div", {
                          style: {
                              transition: "2s"
                          },
                          children: Object(kt.jsx)("img", {
                              src: ia,
                              style: {
                                  transform: "rotate(180deg)"
                              },
                              className: "icon-arrow",
                              alt: "arrow",
                              height: "12pt"
                          })
                      })]
                  })
              },
              oa = document.documentElement.clientWidth;
          document.documentElement.scrollHeight;
          var ca = function() {
                  Object(d.b)();
                  var e = Object(a.useState)([!0, !1]),
                      t = Object(Ot.a)(e, 2),
                      n = t[0],
                      i = t[1],
                      r = Object(a.useState)(!1),
                      s = Object(Ot.a)(r, 2),
                      o = (s[0], s[1]),
                      c = Object(a.useState)(!0),
                      l = Object(Ot.a)(c, 2),
                      u = (l[0], l[1]),
                      b = Object(a.useState)(!1),
                      p = Object(Ot.a)(b, 2),
                      h = p[0],
                      A = p[1];
                  Object(a.useEffect)((function() {
                      o(!(!n[0] || !n[1])), u(n[0] && !n[1] || n[1] & !n[0])
                  }), [h]);
                  var m = function(e, t) {
                      var a = n;
                      a[e] = t, i(a), A(!h)
                  };
                  return Object(kt.jsx)(kt.Fragment, {
                      children: Object(kt.jsxs)("div", {
                          className: "page-tutorial page",
                          style: {
                              background: "url(".concat(Dt, ")"),
                              backgroundSize: "cover"
                          },
                          children: [Object(kt.jsxs)("div", {
                              className: "body",
                              children: [Object(kt.jsx)(kn, {
                                  display: oa <= 800
                              }), Object(kt.jsx)(xn, {
                                  display: oa > 800
                              }), Object(kt.jsxs)("div", {
                                  className: "tutorial",
                                  children: [Object(kt.jsx)("p", {
                                      className: "h1 tutorial",
                                      children: "Tutorials"
                                  }), Object(kt.jsx)("p", {
                                      className: "h5 tutorial",
                                      children: "Take a minute and read a short tutorial of the game you wish to play! Not will it only make your gaming experience more fun, it will also increase your chances of winning some attractive prizes!"
                                  }), ra.map((function(e, t) {
                                      return Object(kt.jsx)(aa.a, {
                                          className: "collapsible-tutorial",
                                          transitionTime: 400,
                                          onClosing: function() {
                                              return m(t, !1)
                                          },
                                          onOpening: function() {
                                              return m(t, !0)
                                          },
                                          open: Number(t) < 1,
                                          easing: "cubic-bezier(0.2, 0.94, 0.86, 1.1) 0s",
                                          trigger: sa(e.title, t, !1),
                                          triggerWhenOpen: sa(e.title, t, !0),
                                          children: Object(kt.jsx)("div", {
                                              className: "tutorial-content",
                                              children: Object(kt.jsx)("p", {
                                                  className: "h5",
                                                  children: ra[t].content()
                                              })
                                          })
                                      }, "".concat(t, "_").concat(e.title))
                                  })), Object(kt.jsx)(ta, {})]
                              })]
                          }), Object(kt.jsx)(Nn, {
                              display: !0
                          })]
                      })
                  })
              },
              la = function(e) {
                  var t = Object(d.b)(),
                      n = Object(d.c)((function(e) {
                          return e.reducer.user
                      })),
                      i = Object(a.useState)(!1),
                      r = Object(Ot.a)(i, 2),
                      s = r[0],
                      o = r[1],
                      l = Object(a.useState)(!1),
                      u = Object(Ot.a)(l, 2),
                      p = u[0],
                      h = u[1],
                      w = Object(a.useState)(!1),
                      f = Object(Ot.a)(w, 2),
                      j = f[0],
                      g = f[1],
                      O = Object(d.c)((function(e) {
                          return e.reducer.myGamesUpdates
                      })),
                      v = Object(d.c)((function(e) {
                          return e.reducer.challenge
                      })),
                      y = Object(a.useState)(ce(O)),
                      x = Object(Ot.a)(y, 2),
                      k = x[0],
                      C = x[1],
                      S = Object(a.useState)(Q),
                      E = Object(Ot.a)(S, 2),
                      B = E[0],
                      N = (E[1], Object(a.useState)("")),
                      I = Object(Ot.a)(N, 2),
                      T = I[0],
                      M = I[1],
                      D = Object(a.useState)(""),
                      R = Object(Ot.a)(D, 2),
                      W = R[0],
                      G = R[1],
                      F = Object(d.c)((function(e) {
                          return e.reducer.isWalletUnlocked
                      })),
                      L = Object(a.useState)(!1),
                      P = Object(Ot.a)(L, 2),
                      U = (P[0], P[1], document.documentElement.clientWidth),
                      H = (document.documentElement.clientHeight, Object(a.useState)([!0, !1])),
                      Z = Object(Ot.a)(H, 2),
                      J = Z[0],
                      Y = Z[1],
                      z = Object(a.useState)(!1),
                      V = Object(Ot.a)(z, 2),
                      X = (V[0], V[1]),
                      K = Object(a.useState)(!0),
                      q = Object(Ot.a)(K, 2),
                      ee = (q[0], q[1]),
                      te = Object(a.useState)(!1),
                      ne = Object(Ot.a)(te, 2),
                      ae = ne[0],
                      re = ne[1];
                  Object(a.useEffect)((function() {
                      null == v && t(bt())
                  }), [v]), Object(a.useEffect)((function() {
                      X(!(!J[0] || !J[1])), ee(J[0] && !J[1] || J[1] & !J[0])
                  }), [ae]);
                  var se = function(e, t) {
                      var n = J;
                      n[e] = t, Y(n), re(!ae)
                  };
                  Object(a.useEffect)((function() {
                      O && setTimeout((function() {
                          C(ce(O))
                      }), 300)
                  }), [O]);
                  var le = Object(c.f)(),
                      de = Object(a.useCallback)((function(e) {
                          le.push(e)
                      }), [le]);
                  Object(a.useEffect)((function() {
                      var a, i, r, s, o, c = Qn.a.parse(e.location.search);
                      c && c.refer && (null === n || void 0 === n ? void 0 : n.address) && F && t((a = n.address, i = c.refer, r = function() {
                          G(_), setTimeout((function() {
                              g(!0)
                          }), 300)
                      }, s = function(e) {
                          M($), setTimeout((function() {
                              h(!0)
                          }), 300)
                      }, function() {
                          var e = Object(m.a)(A.a.mark((function e(t) {
                              var n, c, l;
                              return A.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          return n = {
                                              address: a,
                                              referral_code: i
                                          }, n = JSON.stringify(n), e.prev = 2, e.next = 6, fetch("/rest/api/user/referral/activate", {
                                              method: "POST",
                                              headers: {
                                                  Accept: "*/*",
                                                  "Content-Type": "application/json",
                                                  postData: n
                                              }
                                          });
                                      case 6:
                                          return c = e.sent, e.next = 9, c.json();
                                      case 9:
                                          (l = e.sent) || (r = s), we(c, 0, function() {
                                              var e = Object(m.a)(A.a.mark((function e() {
                                                  return A.a.wrap((function(e) {
                                                      for (;;) switch (e.prev = e.next) {
                                                          case 0:
                                                              t({
                                                                  type: Ie,
                                                                  isUserReferredFrom: l
                                                              });
                                                          case 1:
                                                          case "end":
                                                              return e.stop()
                                                      }
                                                  }), e)
                                              })));
                                              return function() {
                                                  return e.apply(this, arguments)
                                              }
                                          }(), r, s, o), e.next = 18;
                                          break;
                                      case 15:
                                          e.prev = 15, e.t0 = e.catch(2), console.warn("Failed activating user referral code..", e.t0);
                                      case 18:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e, null, [
                                  [2, 15]
                              ])
                          })));
                          return function(t) {
                              return e.apply(this, arguments)
                          }
                      }()))
                  }), [n, F]);
                  var ue = function(e) {
                          t(Ve(e, !1)), de(Ri.LOBBY + "/" + e)
                      },
                      be = function() {
                          window.location.href = "https://stake.wsg.gg/"
                      };
                  return Object(kt.jsx)(kt.Fragment, {
                      children: Object(kt.jsxs)("div", {
                          className: "page-play page",
                          style: {
                              background: "url(".concat(En, ")")
                          },
                          children: [Object(kt.jsxs)("div", {
                              className: "body",
                              children: [Object(kt.jsx)(kn, {
                                  display: U <= 800
                              }), Object(kt.jsx)(xn, {
                                  display: U > 800
                              }), Object(kt.jsx)("div", {
                                  className: "firstSection",
                                  style: {
                                      background: "url(".concat(Bn, ") no-repeat center"),
                                      backgroundSize: "cover"
                                  },
                                  children: Object(kt.jsxs)("div", {
                                      id: "wrap",
                                      children: [Object(kt.jsx)("div", {
                                          id: "title",
                                          children: "WALL STREET GAMES"
                                      }), Object(kt.jsx)("div", {
                                          id: "subTitle",
                                          children: "PLAY WITH US EVERY DAY"
                                      }), Object(kt.jsxs)("div", {
                                          children: [" ", Object(kt.jsxs)("div", {
                                              className: "image-slide-icons-container",
                                              children: [Object(kt.jsx)("div", {
                                                  onClick: function() {
                                                      return ie("https://t.me/WSGToken")
                                                  },
                                                  className: "",
                                                  children: Object(kt.jsx)(yt.c, {
                                                      className: "image-slide-icon"
                                                  })
                                              }), Object(kt.jsx)("div", {
                                                  onClick: function() {
                                                      return ie("https://twitter.com/WSGToken")
                                                  },
                                                  className: "",
                                                  children: Object(kt.jsx)(yt.d, {
                                                      className: "image-slide-icon"
                                                  })
                                              }), Object(kt.jsx)("div", {
                                                  onClick: function() {
                                                      return ie("https://medium.com/@WSGToken")
                                                  },
                                                  className: "",
                                                  children: Object(kt.jsx)(yt.b, {
                                                      className: "image-slide-icon"
                                                  })
                                              })]
                                          })]
                                      })]
                                  })
                              }), Object(kt.jsxs)("div", {
                                  className: "home",
                                  children: [function() {
                                      var e = "",
                                          t = "",
                                          n = "";
                                      return null != v && (!0, v.forEach((function(a) {
                                          switch (a.game) {
                                              case 0:
                                                  e = a.description;
                                                  break;
                                              case 1:
                                                  n = a.description;
                                                  break;
                                              case 2:
                                                  t = a.description
                                          }
                                      }))), Object(kt.jsx)(kt.Fragment, {
                                          children: Object(kt.jsxs)("div", {
                                              className: "body-container",
                                              style: {
                                                  paddingBottom: "20px"
                                              },
                                              children: [Object(kt.jsxs)("div", {
                                                  className: "game-container",
                                                  onClick: function() {
                                                      return ue(2)
                                                  },
                                                  children: [Object(kt.jsxs)("div", {
                                                      className: "challenge",
                                                      style: {
                                                          display: null != t && t.length > 0 ? "block" : "none"
                                                      },
                                                      children: [t, "!"]
                                                  }), Object(kt.jsx)("img", {
                                                      className: "gameImg",
                                                      src: Fn,
                                                      alt: "game-coin-explorer"
                                                  }), Object(kt.jsx)("img", {
                                                      src: Sn,
                                                      className: "icon-play",
                                                      alt: "play",
                                                      height: "60px"
                                                  }), Object(kt.jsx)("div", {
                                                      className: "gameTitleWrap rollerWrap",
                                                      children: Object(kt.jsxs)("div", {
                                                          children: [Object(kt.jsx)("p", {
                                                              className: "h4 game-container-title",
                                                              children: "THE ROLLER"
                                                          }), Object(kt.jsx)("p", {
                                                              className: "h5 game-container-desc",
                                                              style: {
                                                                  paddingRight: "30px",
                                                                  paddingLeft: "30px"
                                                              },
                                                              children: "Test your wits and speed in brand new game! Are you ready for the challenge?"
                                                          })]
                                                      })
                                                  })]
                                              }), Object(kt.jsxs)("div", {
                                                  className: "game-container",
                                                  onClick: function() {
                                                      return ue(1)
                                                  },
                                                  children: [Object(kt.jsxs)("div", {
                                                      className: "challenge",
                                                      style: {
                                                          display: null != n && n.length > 0 ? "block" : "none"
                                                      },
                                                      children: [n, "!"]
                                                  }), Object(kt.jsx)("img", {
                                                      className: "gameImg",
                                                      src: Tn,
                                                      alt: "game-coin-explorer",
                                                      style: {
                                                          marginBottom: "-4px"
                                                      }
                                                  }), Object(kt.jsx)("img", {
                                                      src: Sn,
                                                      className: "icon-play",
                                                      alt: "play",
                                                      height: "60px"
                                                  }), Object(kt.jsx)("div", {
                                                      className: "gameTitleWrap explorerWrap",
                                                      children: Object(kt.jsxs)("div", {
                                                          children: [Object(kt.jsx)("p", {
                                                              className: "h4 game-container-title",
                                                              children: "COIN EXPLORER"
                                                          }), Object(kt.jsx)("p", {
                                                              className: "h5 game-container-desc",
                                                              style: {
                                                                  paddingRight: "30px",
                                                                  paddingLeft: "30px"
                                                              },
                                                              children: "Who can identify and suppress the sh*tcoins?"
                                                          })]
                                                      })
                                                  })]
                                              }), Object(kt.jsxs)("div", {
                                                  className: "game-container",
                                                  onClick: function() {
                                                      return ue(0)
                                                  },
                                                  children: [Object(kt.jsxs)("div", {
                                                      className: "challenge",
                                                      style: {
                                                          display: null != e && e.length > 0 ? "block" : "none"
                                                      },
                                                      children: [e, "!"]
                                                  }), Object(kt.jsx)("img", {
                                                      className: "gameImg",
                                                      src: In,
                                                      alt: "game-trader",
                                                      style: {
                                                          marginBottom: "-4px"
                                                      }
                                                  }), Object(kt.jsx)("img", {
                                                      src: Sn,
                                                      className: "icon-play",
                                                      alt: "play",
                                                      height: "60px"
                                                  }), Object(kt.jsx)("div", {
                                                      className: "gameTitleWrap traderWrap",
                                                      children: Object(kt.jsxs)("div", {
                                                          children: [Object(kt.jsx)("p", {
                                                              className: "h4 game-container-title",
                                                              children: "THE TRADER"
                                                          }), Object(kt.jsx)("p", {
                                                              className: "h5 game-container-desc",
                                                              style: {
                                                                  paddingRight: "30px",
                                                                  paddingLeft: "30px"
                                                              },
                                                              children: "Do you have the reflexes and fast fingers to trade like a professional?"
                                                          })]
                                                      })
                                                  })]
                                              })]
                                          })
                                      })
                                  }(), Object(kt.jsxs)("p", {
                                      style: {
                                          marginTop: "56px",
                                          marginBottom: "56px",
                                          width: "80%"
                                      },
                                      className: "h1",
                                      children: ["THE ", Object(kt.jsx)("span", {
                                          className: "h1",
                                          style: {
                                              marginLeft: "0",
                                              color: "#1ce7ff"
                                          },
                                          children: "NEXT GENERATION"
                                      }), " GAMING PLATFORM WITH A UNIQUE AND IMMERSIVE WAY TO EARN REWARDS"]
                                  }), Object(kt.jsx)("div", {
                                      className: "body-container stakeBC",
                                      children: Object(kt.jsx)("div", {
                                          className: "staking-container",
                                          children: Object(kt.jsxs)("div", {
                                              className: "stakingWrap",
                                              children: [Object(kt.jsxs)("div", {
                                                  className: "stakingTitle",
                                                  children: ["ON OUR PLATFORM YOU ", Object(kt.jsx)("b", {
                                                      children: "CAN PARTICIPATE"
                                                  }), " IN STAKING"]
                                              }), Object(kt.jsx)("div", {
                                                  className: "stakingImg",
                                                  children: Object(kt.jsx)("img", {
                                                      src: Gn
                                                  })
                                              }), Object(kt.jsx)("div", {
                                                  children: Object(kt.jsx)("div", {
                                                      onClick: be,
                                                      className: "button-staking",
                                                      children: "TRY NOW"
                                                  })
                                              })]
                                          })
                                      })
                                  }), Object(kt.jsx)("div", {
                                      className: "tutorial container-body",
                                      children: Object(kt.jsxs)("div", {
                                          children: [Object(kt.jsx)("p", {
                                              className: "h1 tutorial",
                                              children: "TUTORIAL"
                                          }), Object(kt.jsx)("p", {
                                              className: "h5 tutorial",
                                              children: "Take a minute and read a short tutorial of the game you wish to play! Not will it only make your gaming experience more fun, it will also increase your chances of winning some attractive prizes!"
                                          }), ra.map((function(e, t) {
                                              return Object(kt.jsx)(aa.a, {
                                                  className: "collapsible-tutorial",
                                                  transitionTime: 400,
                                                  onClosing: function() {
                                                      return se(t, !1)
                                                  },
                                                  onOpening: function() {
                                                      return se(t, !0)
                                                  },
                                                  open: Number(t) < 0,
                                                  easing: "cubic-bezier(0.2, 0.94, 0.86, 1.1) 0s",
                                                  trigger: sa(e.title, t, !1),
                                                  triggerWhenOpen: sa(e.title, t, !0),
                                                  children: Object(kt.jsx)("div", {
                                                      className: "tutorial-content",
                                                      children: Object(kt.jsx)("div", {
                                                          className: "h5",
                                                          children: ra[t].content()
                                                      })
                                                  })
                                              }, "".concat(t, "_").concat(e.title))
                                          }))]
                                      })
                                  }), Object(kt.jsx)(ta, {}), Object(kt.jsxs)("div", {
                                      className: "partners",
                                      children: [Object(kt.jsx)("div", {
                                          className: "h1",
                                          children: "PARTNERS"
                                      }), Object(kt.jsx)("div", {
                                          className: "body-container",
                                          children: Object(kt.jsxs)("div", {
                                              className: "partner-container",
                                              children: [Object(kt.jsx)("div", {
                                                  className: "imgWrap",
                                                  children: Object(kt.jsx)("a", {
                                                      target: "_blank",
                                                      href: "https://www.bakeryswap.org/",
                                                      children: Object(kt.jsx)("img", {
                                                          src: "data:image/png;base64,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",
                                                          className: "img-partner",
                                                          alt: "img-partner"
                                                      })
                                                  })
                                              }), Object(kt.jsx)("div", {
                                                  className: "imgWrap",
                                                  children: Object(kt.jsx)("a", {
                                                      target: "_blank",
                                                      href: "https://wault.finance/",
                                                      children: Object(kt.jsx)("img", {
                                                          src: Mn,
                                                          className: "img-partner",
                                                          alt: "img-partner"
                                                      })
                                                  })
                                              }), Object(kt.jsx)("div", {
                                                  className: "imgWrap",
                                                  children: Object(kt.jsx)("a", {
                                                      target: "_blank",
                                                      href: "https://www.travala.com/",
                                                      children: Object(kt.jsx)("img", {
                                                          src: "data:image/png;base64,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",
                                                          className: "img-partner",
                                                          alt: "img-partner"
                                                      })
                                                  })
                                              }), Object(kt.jsx)("div", {
                                                  className: "imgWrap",
                                                  children: Object(kt.jsx)("a", {
                                                      target: "_blank",
                                                      href: "https://anyswap.exchange/dashboard",
                                                      children: Object(kt.jsx)("img", {
                                                          src: Dn,
                                                          className: "img-partner",
                                                          alt: "img-partner"
                                                      })
                                                  })
                                              }), Object(kt.jsx)("div", {
                                                  className: "imgWrap",
                                                  children: Object(kt.jsx)("a", {
                                                      target: "_blank",
                                                      href: "https://justliquidity.org/",
                                                      children: Object(kt.jsx)("img", {
                                                          src: Rn,
                                                          className: "img-partner",
                                                          alt: "img-partner"
                                                      })
                                                  })
                                              }), Object(kt.jsx)("div", {
                                                  className: "imgWrap",
                                                  children: Object(kt.jsx)("a", {
                                                      target: "_blank",
                                                      href: "https://macaronswap.finance/",
                                                      children: Object(kt.jsx)("img", {
                                                          src: Wn,
                                                          className: "img-partner",
                                                          alt: "img-partner"
                                                      })
                                                  })
                                              })]
                                          })
                                      })]
                                  }), Object(kt.jsx)(ta, {})]
                              })]
                          }), function(e) {
                              if (!e || 0 === e.length) return Object(kt.jsx)(kt.Fragment, {});
                              var a = function(e) {
                                  return e ? oe(n.address, e) ? "Opponent finished playing one of your games. You have won!" : "Opponent finished playing one of your games. You have lost." : "Opponent joined one of your games.. Wait for him to finish before you can join."
                              };
                              return Object(kt.jsx)(kt.Fragment, {
                                  children: e.map((function(e, n) {
                                      return Object(kt.jsx)(pn, {
                                          header: (i = e.winner, i ? "Game finished" : "Player joined lobby"),
                                          text: a(e.winner),
                                          display: k[n],
                                          onCloseModal: function() {
                                              var a = Object(b.a)(k);
                                              a[n] = !1, C(a), t(ot(e))
                                          }
                                      }, n);
                                      var i
                                  }))
                              })
                          }(O), Object(kt.jsx)(pn, {
                              header: "Warning",
                              text: B,
                              display: s,
                              onCloseModal: function() {
                                  return o(!1)
                              }
                          }), Object(kt.jsx)(pn, {
                              header: "Error",
                              text: T,
                              display: p,
                              onCloseModal: function() {
                                  return h(!1)
                              }
                          }), Object(kt.jsx)(pn, {
                              header: "Success",
                              text: W,
                              display: j,
                              onCloseModal: function() {
                                  return g(!1)
                              }
                          }), Object(kt.jsx)(Nn, {
                              display: !0
                          })]
                      })
                  })
              };
          n(926), n(927);
          var da = function(e) {
              var t = Object(c.f)(),
                  n = Object(a.useCallback)((function(e) {
                      t.push(e)
                  }), [t]),
                  i = Object(d.b)(),
                  r = Object(d.c)((function(e) {
                      return e.reducer.user
                  })),
                  s = Object(d.c)((function(e) {
                      return e.reducer.activeLobby
                  })),
                  o = Object(a.useContext)(on),
                  l = o.availableAmount,
                  u = o.tokenContextManager,
                  b = Object(a.useState)(!1),
                  p = Object(Ot.a)(b, 2),
                  h = p[0],
                  w = p[1],
                  f = Object(d.c)((function(e) {
                      return e.reducer.blacklist
                  }));
              e.game, Object(a.useEffect)((function() {
                  null == f && i(ht())
              }), [f]);
              var j = Object(a.useState)(0),
                  g = Object(Ot.a)(j, 2),
                  O = g[0],
                  v = g[1],
                  y = Object(a.useState)(null),
                  x = Object(Ot.a)(y, 2),
                  k = x[0],
                  C = x[1],
                  S = Object(a.useState)(window.modalToken ? window.modalToken : "wbnb"),
                  E = Object(Ot.a)(S, 2),
                  B = E[0],
                  N = E[1],
                  I = function() {
                      !u.initialStateNotSet() && window.availAmounts && u.refreshSomeValues()
                  };
              return Object(a.useEffect)((function() {
                  s && r && v(s.price)
              }), [s, r]), Object(a.useEffect)((function() {
                  e.display || w(!1), N(window.modalToken), I()
              }), [e.display]), Object(a.useEffect)((function() {
                  window.modalToken = B, I()
              }), [B]), Object(kt.jsxs)(Zt, {
                  preventAutoClose: !0,
                  onCloseModal: e.onCloseModal,
                  small: !0,
                  display: e.display,
                  header: "Join match",
                  buttons: !h && [{
                      label: "Cancel",
                      name: "cancel",
                      className: "danger"
                  }, {
                      label: "Join",
                      name: "join"
                  }],
                  actionEnableLoading: h,
                  action: function(t) {
                      var n = e.onCloseModal;
                      if ("cancel" === t.name) n && n();
                      else if ("join" === t.name) {
                          if (null != f && f.length > 0)
                              for (var a = 0; a < f.length; a++)
                                  if (f[a].address == r.address) {
                                      w(!1), n();
                                      var o = e.onActionErrorBlacklisted;
                                      return void(o && o())
                                  }
                          w(!0), u.refreshBlockchainData((function() {
                              var t;
                              if (O && (t = O.toString().replace(/\D/g, "")), Number(t))
                                  if (e.fromMyGames || !(Number(l) <= 0 || l < Number(t)))
                                      if (t <= 0) {
                                          w(!1), n();
                                          var a = e.onActionError;
                                          a && a()
                                      } else if ((null === s || void 0 === s ? void 0 : s.password) && s.password !== k) {
                                  w(!1), console.log("open new modal, password incorrect."), n();
                                  var o = e.onActionErrorPassword;
                                  o && o()
                              } else {
                                  var c = e.onActionBlockchainConfirmingMatch,
                                      d = e.onActionBlockchainRejectedMatch;
                                  i(wt(r.address, (function() {
                                      s.p2 || (n(), c && c());
                                      var a = !0;
                                      i(function(e, t, n, a, i, r, s, o) {
                                          return function() {
                                              var c = Object(m.a)(A.a.mark((function c(l) {
                                                  var d, u, b;
                                                  return A.a.wrap((function(c) {
                                                      for (;;) switch (c.prev = c.next) {
                                                          case 0:
                                                              return d = {
                                                                  address: e,
                                                                  lobbyId: t,
                                                                  amount: n,
                                                                  token: a
                                                              }, d = JSON.stringify(d), c.prev = 2, c.next = 6, fetch("/rest/api/match/create", {
                                                                  method: "POST",
                                                                  headers: {
                                                                      Accept: "*/*",
                                                                      "Content-Type": "application/json",
                                                                      postData: d
                                                                  }
                                                              });
                                                          case 6:
                                                              return u = c.sent, c.next = 9, u.json();
                                                          case 9:
                                                              if ("BLOCKCHAIN BUSY" !== (b = c.sent)) {
                                                                  c.next = 17;
                                                                  break
                                                              }
                                                              return r = void 0, o(), l(mt(e, i, null, null, null, null)), c.abrupt("return");
                                                          case 17:
                                                              b || (l(mt(e, i, null, null, null, null)), r = void 0);
                                                          case 18:
                                                              we(u, 0, function() {
                                                                  var e = Object(m.a)(A.a.mark((function e() {
                                                                      return A.a.wrap((function(e) {
                                                                          for (;;) switch (e.prev = e.next) {
                                                                              case 0:
                                                                                  b.error || l({
                                                                                      type: Re,
                                                                                      matchCreated: b
                                                                                  }), b || (r = void 0, s());
                                                                              case 2:
                                                                              case "end":
                                                                                  return e.stop()
                                                                          }
                                                                      }), e)
                                                                  })));
                                                                  return function() {
                                                                      return e.apply(this, arguments)
                                                                  }
                                                              }(), r, o, s), c.next = 25;
                                                              break;
                                                          case 22:
                                                              c.prev = 22, c.t0 = c.catch(2), console.warn("Failed creating new match..", c.t0);
                                                          case 25:
                                                          case "end":
                                                              return c.stop()
                                                      }
                                                  }), c, null, [
                                                      [2, 22]
                                                  ])
                                              })));
                                              return function(e) {
                                                  return c.apply(this, arguments)
                                              }
                                          }()
                                      }(r.address, s.id, t, B, s.game, (function() {
                                          a = !1, w(!1), n();
                                          var t = e.onActionSuccess;
                                          t && t()
                                      }), (function() {
                                          a = !1, w(!1), d && d(), n();
                                          var t = e.onActionErrorPriceOutOfBounds;
                                          t && t()
                                      }), (function() {
                                          w(!1), n();
                                          var t = e.onActionBlockchainBusy;
                                          t && t()
                                      }))), setTimeout((function() {
                                          if (a) {
                                              w(!1), n();
                                              var t = e.onActionBlockchainBusy;
                                              t && t()
                                          }
                                      }), 2e4), setTimeout((function() {
                                          return mt(r.address, s.game, null, null, null, null)
                                      }), 2500)
                                  }), (function(t) {
                                      n();
                                      var a = e.onActionTransactionsAllowed;
                                      a && a()
                                  })))
                              } else {
                                  w(!1), n();
                                  var u = e.onActionErrorNoFundsAvailable;
                                  u && u()
                              } else {
                                  w(!1), n();
                                  var b = e.onActionErrorNumbersOnly;
                                  b && b()
                              }
                          }))
                      }
                  },
                  children: [Object(kt.jsxs)("div", {
                      className: "modal-row",
                      children: [Object(kt.jsx)("p", {
                          className: "p-modal-row",
                          children: "Wager:"
                      }), Object(kt.jsx)(ln, {
                          onSubmit: function() {},
                          onChange: v,
                          disabled: e.fromMyGames || oe(r.address, null === s || void 0 === s ? void 0 : s.uid),
                          value: O + " $",
                          placeholder: O ? O + " $" : "In Dollars"
                      })]
                  }), Object(kt.jsxs)("div", {
                      className: "modal-row",
                      children: [Object(kt.jsx)("p", {
                          className: "p-modal-row",
                          children: "Token:"
                      }), Object(kt.jsx)(ln, {
                          onSubmit: function() {},
                          onChange: function(e) {
                              N(e)
                          },
                          select: !0,
                          disabled: e.fromMyGames,
                          loadLobbyToken: !0,
                          fromMyGames: e.fromMyGames,
                          whiteBorder: !0,
                          options: ne,
                          value: B,
                          marginRight: "0px"
                      })]
                  }), e.fromMyGames ? Object(kt.jsx)(kt.Fragment, {}) : Object(kt.jsxs)("div", {
                      className: "modal-row",
                      children: [Object(kt.jsx)("p", {
                          className: "p-modal-row",
                          children: "Available amount:"
                      }), Object(kt.jsx)(ln, {
                          onSubmit: function() {},
                          disabled: !0,
                          onChange: function() {},
                          loadAvailableAmount: !0,
                          value: l ? Number(l).toFixed(2) + " $" : l,
                          placeholder: l ? Number(l).toFixed(2) + " $" : "Available amount $"
                      })]
                  }), (null === s || void 0 === s ? void 0 : s.password) ? Object(kt.jsxs)("div", {
                      className: "modal-row",
                      children: [Object(kt.jsx)("p", {
                          className: "p-modal-row",
                          children: "Password:"
                      }), Object(kt.jsx)(ln, {
                          onSubmit: function() {},
                          onChange: C,
                          value: k,
                          placeholder: "Password required"
                      })]
                  }) : Object(kt.jsx)(kt.Fragment, {}), Object(kt.jsx)("div", {
                      style: {
                          display: 0 == l ? "flex" : "none"
                      },
                      className: "modal-row-button",
                      children: Object(kt.jsx)("button", {
                          onClick: function() {
                              return n(Ri.WALLET)
                          },
                          className: "buttons depositButtonModal",
                          children: "Deposit"
                      })
                  })]
              })
          };
          var ua = function(e) {
              var t = Object(c.f)(),
                  n = Object(a.useCallback)((function(e) {
                      t.push(e)
                  }), [t]),
                  i = Object(d.b)(),
                  r = Object(d.c)((function(e) {
                      return e.reducer.user
                  })),
                  s = Object(a.useState)(0),
                  o = Object(Ot.a)(s, 2),
                  l = o[0],
                  u = o[1],
                  b = Object(a.useState)(window.modalToken ? window.modalToken : "wbnb"),
                  p = Object(Ot.a)(b, 2),
                  h = p[0],
                  A = p[1],
                  m = Object(a.useState)(null),
                  w = Object(Ot.a)(m, 2),
                  f = w[0],
                  j = w[1],
                  g = Object(a.useState)(null),
                  O = Object(Ot.a)(g, 2),
                  v = O[0],
                  y = O[1],
                  x = Object(a.useContext)(on),
                  k = x.availableAmount,
                  C = x.tokenContextManager,
                  S = Object(d.c)((function(e) {
                      return e.reducer.blacklist
                  }));
              Object(a.useEffect)((function() {
                  null == S && i(ht())
              }), [S]);
              var E = Object(a.useState)(!1),
                  B = Object(Ot.a)(E, 2),
                  N = B[0],
                  I = B[1],
                  T = function() {
                      !C.initialStateNotSet() && window.availAmounts && C.refreshSomeValues()
                  },
                  M = e.game;
              return Object(a.useEffect)((function() {
                  e.display || I(!1), A(window.modalToken), T()
              }), [e.display]), Object(a.useEffect)((function() {
                  window.modalToken = h, T()
              }), [h]), Object(kt.jsxs)(Zt, {
                  preventAutoClose: e.preventAutoClose,
                  onCloseModal: e.onCloseModal,
                  small: !0,
                  display: e.display,
                  header: "Create your lobby",
                  buttons: !N && [{
                      label: "Cancel",
                      name: "cancel",
                      className: "danger"
                  }, {
                      label: "Create",
                      name: "create"
                  }],
                  actionEnableLoading: N,
                  action: function(t) {
                      var n = e.onCloseModal;
                      if ("cancel" === t.name) n && n();
                      else if ("create" === t.name) {
                          if (null != S && S.length > 0)
                              for (var a = 0; a < S.length; a++)
                                  if (S[a].address == r.address) {
                                      I(!1), n();
                                      var s = e.onActionErrorBlacklisted;
                                      return void(s && s())
                                  }
                          I(!0), C.refreshBlockchainData((function() {
                              if (Number(k) <= 0 || k < Number(l) * v) {
                                  I(!1), n();
                                  var t = e.onActionErrorNoFundsAvailable;
                                  t && t()
                              } else if ("" !== l && 0 !== Number(l))
                                  if (Number(l) < 5 || Number(l) > 100) {
                                      I(!1), n();
                                      var a = e.onActionErrorMinPriceNotMet;
                                      a && a()
                                  } else if (Number(l) || "" === l) i(wt(r.address, (function() {
                                  i(At(r.address, M.key, l, h, f, (function() {
                                      if (v)
                                          for (var t = 1; t < v; t++) i(At(r.address, M.key, l, h, f));
                                      I(!1), n();
                                      var a = e.onActionSuccess;
                                      a && a(), !C.initialStateNotSet() && window.availAmounts && C.refreshBlockchainData().then((function() {}))
                                  }), (function(t) {
                                      if (I(!1), n(), "MAX LOBBIES" === t) {
                                          var a = e.onActionErrorMaxLobbiesExceeded;
                                          a && a()
                                      } else if ("MIN PRICE = 5" === t) {
                                          var i = e.onActionErrorMinPriceNotMet;
                                          i && i()
                                      } else {
                                          var r = e.onActionErrorDefault;
                                          r && r()
                                      }
                                  })))
                              }), (function(t) {
                                  n();
                                  var a = e.onActionTransactionsAllowed;
                                  a && a()
                              })));
                              else {
                                  I(!1), n();
                                  var s = e.onActionErrorNumbersOnly;
                                  s && s()
                              } else {
                                  I(!1), n();
                                  var o = e.onActionError;
                                  o && o()
                              }
                          }))
                      }
                  },
                  children: [Object(kt.jsxs)("div", {
                      className: "modal-row",
                      children: [Object(kt.jsx)("p", {
                          className: "p-modal-row",
                          children: "Game name:"
                      }), Object(kt.jsx)(ln, {
                          onSubmit: function() {},
                          onChange: function() {},
                          disabled: !0,
                          value: M.title,
                          placeholder: M.title ? M.title : "The Trader"
                      })]
                  }), Object(kt.jsxs)("div", {
                      className: "modal-row",
                      children: [Object(kt.jsx)("p", {
                          className: "p-modal-row",
                          children: "Prize:"
                      }), Object(kt.jsx)(ln, {
                          onSubmit: function() {},
                          onChange: u,
                          value: l,
                          placeholder: "In Dollars"
                      })]
                  }), Object(kt.jsxs)("div", {
                      className: "modal-row",
                      children: [Object(kt.jsx)("p", {
                          className: "p-modal-row",
                          children: "Token:"
                      }), Object(kt.jsx)(ln, {
                          onSubmit: function() {},
                          onChange: function(e) {
                              A(e)
                          },
                          select: !0,
                          whiteBorder: !0,
                          options: ne,
                          value: h,
                          marginRight: "0px"
                      })]
                  }), Object(kt.jsx)("div", {
                      style: {
                          display: "wsg" == h ? "block" : "none"
                      },
                      className: "modal-row noteRow",
                      children: Object(kt.jsx)("p", {
                          className: "note",
                          children: "Play with WSG and receive 10 % more rewards!"
                      })
                  }), Object(kt.jsxs)("div", {
                      className: "modal-row",
                      children: [Object(kt.jsx)("p", {
                          className: "p-modal-row",
                          children: "Available amount:"
                      }), Object(kt.jsx)(ln, {
                          onSubmit: function() {},
                          disabled: !0,
                          onChange: function() {},
                          loadAvailableAmount: !0,
                          value: k ? Number(k).toFixed(2) + " $" : k,
                          placeholder: "Available amount $"
                      })]
                  }), Object(kt.jsxs)("div", {
                      className: "modal-row",
                      children: [Object(kt.jsx)("p", {
                          className: "p-modal-row",
                          children: "Password:"
                      }), Object(kt.jsx)(ln, {
                          onSubmit: function() {},
                          onChange: j,
                          value: f,
                          placeholder: "Optional"
                      })]
                  }), Object(kt.jsxs)("div", {
                      className: "modal-row",
                      children: [Object(kt.jsx)("p", {
                          className: "p-modal-row",
                          children: "Number of lobbies:"
                      }), Object(kt.jsx)(ln, {
                          onSubmit: function() {},
                          select: !0,
                          whiteBorder: !0,
                          onChange: y,
                          options: ae,
                          value: v || 1,
                          marginRight: "0px"
                      })]
                  }), Object(kt.jsx)("div", {
                      style: {
                          display: 0 == k ? "flex" : "none"
                      },
                      className: "modal-row-button",
                      children: Object(kt.jsx)("button", {
                          onClick: function() {
                              return n(Ri.WALLET)
                          },
                          className: "buttons depositButtonModal",
                          children: "Deposit"
                      })
                  })]
              })
          };
          var ba = function(e) {
              var t = Object(d.b)(),
                  n = Object(d.c)((function(e) {
                      return e.reducer.user
                  })),
                  i = Object(d.c)((function(e) {
                      return e.reducer.currentGame
                  })),
                  r = Object(a.useState)(!1),
                  s = Object(Ot.a)(r, 2),
                  o = s[0],
                  l = s[1],
                  u = Object(a.useState)(!1),
                  b = Object(Ot.a)(u, 2),
                  p = b[0],
                  h = b[1],
                  w = Object(a.useState)(!1),
                  f = Object(Ot.a)(w, 2),
                  j = f[0],
                  g = f[1],
                  O = Object(a.useState)(!1),
                  v = Object(Ot.a)(O, 2),
                  x = v[0],
                  k = v[1],
                  C = Object(a.useState)("Price field cannot be empty!"),
                  S = Object(Ot.a)(C, 2),
                  E = S[0],
                  T = S[1],
                  M = Object(a.useState)("Lobby successfully created!"),
                  D = Object(Ot.a)(M, 2),
                  F = D[0],
                  L = D[1],
                  Q = Object(a.useState)((function() {})),
                  P = Object(Ot.a)(Q, 2),
                  Z = (P[0], P[1]),
                  Y = e.data,
                  z = function(e) {
                      var n = {
                          id: e.lid,
                          uid: e.uid,
                          game: e.game,
                          price: e.price,
                          amount: e.amount,
                          token: e.token,
                          created_at: e.created_at,
                          updated_at: e.updated_at
                      };
                      t(Ve(e.game, !1)), t(_e(n)), l(!0)
                  },
                  V = function(e) {
                      k(!0), t(_e(null)), t(qe(null));
                      for (var a = [], i = 0; i < e.length; i++) {
                          var r = e[i];
                          r.winner && ue(n.address, r.winner) && a.push(r.lid)
                      }
                      t(wt(n.address, (function(e) {
                          var i, r, s, o, c;
                          t((i = n.address, r = a, s = function(e) {
                              for (var a = e, i = "".concat(H, "\n"), r = 0; r < a.length; r++) {
                                  var s = a[r];
                                  i += "\n".concat(Number(s.amount).toFixed(3), " ").concat(s.token.toUpperCase(), " \u2248 ").concat(Number(s.price).toFixed(0), " $")
                              }
                              L(i), g(!0), k(!1), window.unclaimed = 0, t(ut(n.address, (function() {})))
                          }, o = function(e) {
                              console.warn("Error claiming all rewards", e)
                          }, function() {
                              var e = Object(m.a)(A.a.mark((function e(t) {
                                  var n, a, l;
                                  return A.a.wrap((function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                          case 0:
                                              return n = {
                                                  address: i,
                                                  lobbyIds: r
                                              }, n = JSON.stringify(n), e.prev = 2, e.next = 6, fetch("/rest/api/match/claim/all", {
                                                  method: "GET",
                                                  headers: {
                                                      Accept: "*/*",
                                                      "Content-Type": "application/json",
                                                      postData: n
                                                  }
                                              });
                                          case 6:
                                              return a = e.sent, e.next = 9, a.json();
                                          case 9:
                                              l = e.sent, we(a, 0, function() {
                                                  var e = Object(m.a)(A.a.mark((function e() {
                                                      return A.a.wrap((function(e) {
                                                          for (;;) switch (e.prev = e.next) {
                                                              case 0:
                                                                  t(Xe(l));
                                                              case 1:
                                                              case "end":
                                                                  return e.stop()
                                                          }
                                                      }), e)
                                                  })));
                                                  return function() {
                                                      return e.apply(this, arguments)
                                                  }
                                              }(), (function() {
                                                  return s(l)
                                              }), o, c), e.next = 17;
                                              break;
                                          case 14:
                                              e.prev = 14, e.t0 = e.catch(2), console.warn("Failed obtaining list of game lobbies..", e.t0);
                                          case 17:
                                          case "end":
                                              return e.stop()
                                      }
                                  }), e, null, [
                                      [2, 14]
                                  ])
                              })));
                              return function(t) {
                                  return e.apply(this, arguments)
                              }
                          }()))
                      }), (function(e) {
                          T(y), h(!0)
                      })))
                  },
                  X = function(e) {
                      t(_e(null)), t(qe(null));
                      var a = {
                          id: e.lid,
                          uid: e.uid,
                          game: e.game,
                          price: e.price,
                          amount: e.amount,
                          token: e.token,
                          created_at: e.created_at,
                          updated_at: e.updated_at
                      };
                      t(wt(n.address, (function(e) {
                          var i, r, s, o, c;
                          t((i = n.address, r = a.id, s = function(e) {
                              var a = e;
                              L("".concat(U, "\n ").concat(Number(a.amount).toFixed(3), " ").concat(a.token.toUpperCase(), " \u2248 ").concat(Number(a.price).toFixed(0), " $")), g(!0), t(ut(n.address, (function() {})))
                          }, o = function(e) {
                              console.warn("Error claiming reward", e)
                          }, function() {
                              var e = Object(m.a)(A.a.mark((function e(t) {
                                  var n, a, l;
                                  return A.a.wrap((function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                          case 0:
                                              return n = {
                                                  address: i,
                                                  lobbyId: r
                                              }, n = JSON.stringify(n), e.prev = 2, e.next = 6, fetch("/rest/api/match/claim", {
                                                  method: "GET",
                                                  headers: {
                                                      Accept: "*/*",
                                                      "Content-Type": "application/json",
                                                      postData: n
                                                  }
                                              });
                                          case 6:
                                              return a = e.sent, e.next = 9, a.json();
                                          case 9:
                                              l = e.sent, we(a, 0, function() {
                                                  var e = Object(m.a)(A.a.mark((function e() {
                                                      return A.a.wrap((function(e) {
                                                          for (;;) switch (e.prev = e.next) {
                                                              case 0:
                                                                  t(Xe(l));
                                                              case 1:
                                                              case "end":
                                                                  return e.stop()
                                                          }
                                                      }), e)
                                                  })));
                                                  return function() {
                                                      return e.apply(this, arguments)
                                                  }
                                              }(), (function() {
                                                  return s(l)
                                              }), o, c), e.next = 17;
                                              break;
                                          case 14:
                                              e.prev = 14, e.t0 = e.catch(2), console.warn("Failed obtaining list of game lobbies..", e.t0);
                                          case 17:
                                          case "end":
                                              return e.stop()
                                      }
                                  }), e, null, [
                                      [2, 14]
                                  ])
                              })));
                              return function(t) {
                                  return e.apply(this, arguments)
                              }
                          }()))
                      }), (function(e) {
                          T(y), h(!0)
                      })))
                  },
                  K = Object(c.f)(),
                  q = Object(a.useCallback)((function(e) {
                      K.push(e)
                  }), [K]),
                  _ = function() {
                      var e = $();
                      return 0 === e.length && (window.unclaimed = 0), e.length > 0 ? Object(kt.jsx)("div", {
                          className: "my-games-toolbar",
                          children: Object(kt.jsx)("div", {
                              onClick: function() {
                                  V(e)
                              },
                              className: "join-game-button toolbar-button",
                              children: Object(kt.jsx)("div", {
                                  children: x ? Object(kt.jsx)("div", {
                                      children: Object(kt.jsx)(Gt.a, {
                                          type: "TailSpin",
                                          color: Ht,
                                          height: 22,
                                          width: 22
                                      })
                                  }) : Object(kt.jsx)("p", {
                                      children: "CLAIM ALL"
                                  })
                              })
                          })
                      }) : Object(kt.jsx)(kt.Fragment, {})
                  },
                  $ = function() {
                      for (var e = [], t = 0; t < Y.length; t++) {
                          var a = Y[t];
                          a.winner && ue(n.address, a.winner) && e.push(a)
                      }
                      return e
                  },
                  ee = function(e, t, a, i) {
                      if (oe(n.address, e.p1)) {
                          if (null === e.p1p && null !== e.p2p) return Object(kt.jsx)("div", {
                              onClick: function() {
                                  return z(e)
                              },
                              className: "join-game-button",
                              children: Object(kt.jsx)("p", {
                                  children: "JOIN"
                              })
                          });
                          if (null === e.p2p) return Object(kt.jsx)("p", {
                              children: "WAITING PLAYER"
                          })
                      } else if (oe(n.address, e.p2)) {
                          if (null === e.p1p && null !== e.p2p) return Object(kt.jsx)("p", {
                              children: "IN PROGRESS"
                          });
                          if (null === e.p2p && null !== e.p1p || null === e.p2p && null === e.p1p) return Object(kt.jsx)("div", {
                              onClick: function() {
                                  return z(e)
                              },
                              className: "join-game-button",
                              children: Object(kt.jsx)("p", {
                                  children: "JOIN"
                              })
                          })
                      }
                      return e.winner && ue(n.address, e.winner) ? t ? Object(kt.jsx)("div", {
                          onClick: function() {
                              i(!0), X(e)
                          },
                          className: "join-game-button",
                          children: Object(kt.jsx)("div", {
                              children: a ? Object(kt.jsx)("div", {
                                  children: Object(kt.jsx)(Gt.a, {
                                      type: "TailSpin",
                                      color: Ht,
                                      height: 22,
                                      width: 22
                                  })
                              }) : Object(kt.jsx)("p", {
                                  children: "CLAIM"
                              })
                          })
                      }) : Object(kt.jsx)("p", {
                          style: {
                              color: Qt
                          },
                          children: "WON"
                      }) : e.winner && !ue(n.address, e.winner) ? Object(kt.jsx)("p", {
                          style: {
                              color: Pt
                          },
                          children: "LOST"
                      }) : void 0
                  };

              function te(e) {
                  var t = e.value,
                      i = Object(a.useState)(e.actionEnableLoading),
                      r = Object(Ot.a)(i, 2),
                      s = r[0],
                      o = r[1];
                  return Object(kt.jsxs)("li", {
                      className: "row my-games",
                      children: [Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              children: he(t.game)
                          })
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsxs)("p", {
                              children: [t.price, " $"]
                          })
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              className: "display-linebreak text-center",
                              style: {
                                  color: ue(n.address, t.p1) ? Ut : Ht
                              },
                              children: function(e) {
                                  var t = null !== e.p1p || null !== e.p1p && 0 === Number(e.p1p) ? Number(e.p1p) : null; - 1 === t && (t = "TIMEOUT");
                                  var n = null !== e.p2p || null !== e.p2p && 0 === Number(e.p2p) ? Number(e.p2p) : null;
                                  return -1 === n && (n = "TIMEOUT"), oe(e.uid, e.p1) ? null !== t ? "TIMEOUT" === t ? t : "Points: ".concat(t, " \n Time: ").concat(Number(e.p1time).toFixed(1), "s") : "Waiting" : oe(e.uid, e.p2) ? null !== n ? "TIMEOUT" === n ? n : "Points: ".concat(n, " \n Time: ").concat(Number(e.p2time).toFixed(1), "s") : "Waiting" : void 0
                              }(t)
                          })
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              className: "display-linebreak text-center",
                              style: {
                                  color: ue(n.address, t.p2) ? Ut : Ht
                              },
                              children: function(e) {
                                  var t = null !== e.p1p || null !== e.p1p && 0 === Number(e.p1p) ? Number(e.p1p) : null; - 1 === t && (t = "TIMEOUT");
                                  var n = null !== e.p2p || null !== e.p2p && 0 === Number(e.p2p) ? Number(e.p2p) : null;
                                  return -1 === n && (n = "TIMEOUT"), oe(e.uid, e.p1) ? oe(e.uid, e.p2) ? void 0 : null !== n ? "TIMEOUT" === n ? n : "Points: ".concat(n, " \n Time: ").concat(Number(e.p2time).toFixed(1), "s") : "Playing" : null !== t ? "TIMEOUT" === t ? t : "Points: ".concat(t, " \n Time: ").concat(Number(e.p1time).toFixed(1), "s") : "Playing"
                              }(t)
                          })
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              children: pe(t.epoch_time)
                          })
                      }), Object(kt.jsx)("div", {
                          children: ee(t, !0, s, o)
                      })]
                  })
              }

              function ne(e) {
                  var t = e.value;
                  return Object(kt.jsxs)("li", {
                      className: "row match-history",
                      children: [Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              children: he(t.game)
                          })
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              children: t.opponent_name
                          })
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              style: {
                                  color: ue(n.address, t.winner) ? Qt : Pt
                              },
                              children: function(e) {
                                  if (e) return oe(n.address, e.p1) ? "".concat(e.p1p, " | ").concat(Number(e.p1time).toFixed(2), " s") : oe(n.address, e.p2) ? "".concat(e.p2p, " | ").concat(Number(e.p2time).toFixed(2), " s") : void 0
                              }(t)
                          })
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              children: function(e) {
                                  if (e) return oe(n.address, e.p2) ? "".concat(e.p1p, " | ").concat(Number(e.p1time).toFixed(2), " s") : "".concat(e.p2p, " | ").concat(Number(e.p2time).toFixed(2), " s")
                              }(t)
                          })
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              style: {
                                  color: ue(n.address, t.winner) ? Qt : Pt
                              },
                              children: function(e) {
                                  if (e) {
                                      var t, a = ue(n.address, e.winner);
                                      oe(n.address, e.p1) ? t = a ? null == e.la || "null" == e.la ? e.p2a : e.la : e.p1a : oe(n.address, e.p2) && (t = a ? null == e.la || "null" == e.la ? e.p1a : e.la : e.p2a);
                                      var i = 0 != e.prize ? " | " + e.prize + " $" : "";
                                      return t = Number(t) > 1e4 ? Number(t).toFixed(0).toString() : Number(t).toFixed(5).toString(), oe(n.address, e.p1) ? t += a ? " " + e.p2t.toUpperCase() + i : " " + e.p1t.toUpperCase() + i : oe(n.address, e.p2) && (t += a ? " " + e.p1t.toUpperCase() + i : " " + e.p2t.toUpperCase() + i), (a ? "+" : "-") + t
                                  }
                              }(t)
                          })
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              children: pe(t.epoch_time)
                          })
                      })]
                  })
              }
              return e.matchHistory ? Object(kt.jsx)(kt.Fragment, {
                  children: Object(kt.jsxs)("div", {
                      className: "table-container",
                      children: [Object(kt.jsxs)("div", {
                          className: "row-header match-history",
                          children: [Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Game"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Opponent"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Score | Time"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Opponent Score | Time"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Prize"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Played on"
                              })
                          })]
                      }), Object(kt.jsx)("div", {
                          className: "table",
                          children: Object(kt.jsx)("ul", {
                              children: Y && 0 !== Y.length ? Y.map((function(t, n) {
                                  return Object(kt.jsx)(ne, {
                                      value: t,
                                      action: e.action
                                  }, n)
                              })) : Object(kt.jsx)("li", {
                                  onClick: function() {
                                      return e.action ? e.action() : null
                                  },
                                  className: "row match-history",
                                  children: Object(kt.jsx)("div", {
                                      style: {
                                          minWidth: "100%"
                                      },
                                      children: Object(kt.jsx)("p", {
                                          children: "No games played yet! Try your luck and challenge an opponent!"
                                      })
                                  })
                              })
                          })
                      })]
                  })
              }) : Object(kt.jsxs)(kt.Fragment, {
                  children: [Object(kt.jsxs)("div", {
                      className: "table-container",
                      children: [_(), Object(kt.jsxs)("div", {
                          className: "row-header",
                          children: [Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Game"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Prize"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Creator"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Challenger"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Created at"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Status"
                              })
                          })]
                      }), Object(kt.jsx)("div", {
                          className: "table",
                          children: Object(kt.jsx)("ul", {
                              children: Y && 0 !== Y.length ? Y.map((function(t, n) {
                                  return Object(kt.jsx)(te, {
                                      value: t,
                                      actionEnableLoading: !1,
                                      action: e.action
                                  }, n)
                              })) : Object(kt.jsx)("li", {
                                  onClick: function() {
                                      return e.action ? e.action() : null
                                  },
                                  className: "row match-history",
                                  children: Object(kt.jsx)("div", {
                                      style: {
                                          minWidth: "100%"
                                      },
                                      children: Object(kt.jsx)("p", {
                                          children: "No games played yet! Try your luck and challenge an opponent!"
                                      })
                                  })
                              })
                          })
                      })]
                  }), Object(kt.jsx)(pn, {
                      header: "Error",
                      text: E,
                      display: p,
                      onCloseModal: function() {
                          h(!1)
                      }
                  }), Object(kt.jsx)(pn, {
                      header: "Success!",
                      textAlign: "center",
                      text: F,
                      display: j,
                      onCloseModal: function() {
                          g(!1), q(Ri.MY_GAMES)
                      }
                  }), Object(kt.jsx)(da, {
                      game: i,
                      fromMyGames: !0,
                      display: o,
                      onCloseModal: function() {
                          l(!1)
                      },
                      onActionSuccess: function() {
                          g(!0), L(J), Z((function() {
                              q(Ri.GAME)
                          }))
                      },
                      onActionError: function() {
                          h(!0), T(B)
                      },
                      onActionErrorNumbersOnly: function() {
                          h(!0), T(I)
                      },
                      onActionErrorNoFundsAvailable: function() {
                          h(!0), T(R)
                      },
                      onActionErrorBlacklisted: function() {
                          h(!0), T(W)
                      },
                      onActionErrorPriceOutOfBounds: function() {
                          h(!0), T(G)
                      },
                      onActionErrorPassword: function() {
                          h(!0), T(N)
                      }
                  })]
              })
          };
          var pa = function() {
              var e = Object(d.b)(),
                  t = Object(d.c)((function(e) {
                      return e.reducer.myGames
                  })),
                  n = Object(d.c)((function(e) {
                      return e.reducer.user
                  })),
                  i = Object(d.c)((function(e) {
                      return e.reducer.currentGame
                  })),
                  r = Object(d.c)((function(e) {
                      return e.reducer.myGamesWaitingConfirmation
                  })),
                  s = Object(a.useState)(!1),
                  o = Object(Ot.a)(s, 2),
                  l = o[0],
                  u = o[1],
                  b = document.documentElement.clientWidth,
                  p = (document.documentElement.scrollHeight, Object(a.useState)(!1)),
                  h = Object(Ot.a)(p, 2),
                  A = (h[0], h[1], Object(a.useState)(!1)),
                  m = Object(Ot.a)(A, 2),
                  w = m[0],
                  f = m[1],
                  j = Object(a.useState)(!1),
                  g = Object(Ot.a)(j, 2),
                  O = (g[0], g[1]),
                  v = Object(a.useState)(F),
                  y = Object(Ot.a)(v, 2),
                  x = y[0],
                  k = y[1],
                  C = Object(a.useState)(""),
                  S = Object(Ot.a)(C, 2),
                  E = (S[0], S[1]),
                  T = Object(a.useState)((function() {})),
                  M = Object(Ot.a)(T, 2),
                  D = (M[0], M[1]),
                  L = Object(a.useState)(r || 0),
                  Q = Object(Ot.a)(L, 2),
                  P = Q[0],
                  U = Q[1],
                  H = Object(c.f)(),
                  Z = Object(a.useCallback)((function(e) {
                      H.push(e)
                  }), [H]);
              return Object(a.useEffect)((function() {
                  (null === n || void 0 === n ? void 0 : n.address) && (e(ut(n.address)), e(ft(n.address, (function(e) {
                      U(e)
                  }))))
              }), [n]), Object(a.useEffect)((function() {
                  r && U(r)
              }), [r]), Object(kt.jsx)(kt.Fragment, {
                  children: Object(kt.jsxs)("div", {
                      className: "page-leaderboards page",
                      style: {
                          background: "url(".concat(En, ")"),
                          backgroundSize: "cover"
                      },
                      children: [Object(kt.jsxs)("div", {
                          className: "body",
                          children: [Object(kt.jsx)(kn, {
                              display: b <= Mi
                          }), Object(kt.jsx)(xn, {
                              display: b > Mi
                          }), Object(kt.jsxs)("div", {
                              className: "leaderboards",
                              style: {
                                  padding: b > Di ? "0 12% 0 12%" : "0 4 % 0 4%"
                              },
                              children: [Object(kt.jsx)("p", {
                                  className: "h1",
                                  style: {
                                      paddingBottom: "40px"
                                  },
                                  children: "My games in progress"
                              }), Object(kt.jsx)("p", {
                                  className: "h5",
                                  style: {
                                      paddingBottom: "40px"
                                  },
                                  children: " Check out your current games. You can see their status, your and your enemy's points and time until the end. After the game is finished and if you are the winner you can claim your rewards here."
                              }), P > 0 && Object(kt.jsxs)("p", {
                                  className: "h5",
                                  style: {
                                      fontSize: "15px"
                                  },
                                  children: ["My games awaiting confirmation: ", P]
                              }), Object(kt.jsx)(ba, {
                                  data: t.matches
                              }), Object(kt.jsx)(Un, {
                                  style: {
                                      width: "100%",
                                      marginTop: "10px"
                                  }
                              }), Object(kt.jsx)(ta, {}), Object(kt.jsxs)("p", {
                                  className: "h1",
                                  children: ["Match history", Object(kt.jsx)("span", {
                                      style: {
                                          display: "block",
                                          position: "absolute",
                                          marginLeft: "250px",
                                          marginTop: "10px"
                                      },
                                      className: "h6",
                                      children: "*displayed last 100 games"
                                  })]
                              }), Object(kt.jsx)(ba, {
                                  matchHistory: !0,
                                  data: t.history
                              }), Object(kt.jsx)(Un, {
                                  style: {
                                      width: "100%",
                                      marginTop: "10px"
                                  }
                              }), Object(kt.jsx)(ta, {})]
                          })]
                      }), Object(kt.jsx)(Nn, {
                          display: !0
                      }), Object(kt.jsx)(da, {
                          game: i,
                          fromMyGames: !0,
                          display: l,
                          onCloseModal: function() {
                              u(!1)
                          },
                          onActionSuccess: function() {
                              O(!0), E(J), D((function() {
                                  Z(Ri.GAME)
                              }))
                          },
                          onActionError: function() {
                              f(!0), k(B)
                          },
                          onActionErrorNumbersOnly: function() {
                              f(!0), k(I)
                          },
                          onActionErrorNoFundsAvailable: function() {
                              f(!0), k(R)
                          },
                          onActionErrorBlacklisted: function() {
                              f(!0), k(W)
                          },
                          onActionErrorPriceOutOfBounds: function() {
                              f(!0), k(G)
                          },
                          onActionErrorPassword: function() {
                              f(!0), k(N)
                          }
                      }), Object(kt.jsx)(pn, {
                          header: "Error",
                          text: x,
                          display: w,
                          onCloseModal: function() {
                              return f(!1)
                          }
                      })]
                  })
              })
          };
          n(1205);
          var ha = function() {
                  var e = Object(d.b)(),
                      t = (Object(d.c)((function(e) {
                          return e.reducer.isWalletUnlocked
                      })), Object(d.c)((function(e) {
                          return e.reducer.user
                      }))),
                      n = Object(d.c)((function(e) {
                          return e.reducer.referralCode
                      })),
                      i = document.documentElement.clientWidth,
                      r = (document.documentElement.scrollHeight, Object(a.useState)(n || "")),
                      s = Object(Ot.a)(r, 2),
                      o = s[0],
                      c = s[1],
                      l = Object(a.useState)("wsg.gg/?refer="),
                      u = Object(Ot.a)(l, 2),
                      b = u[0],
                      p = u[1],
                      h = Object(a.useState)("Copy"),
                      w = Object(Ot.a)(h, 2),
                      f = w[0],
                      j = w[1],
                      g = Object(a.useState)(n ? "" : 0),
                      O = Object(Ot.a)(g, 2),
                      v = O[0],
                      y = O[1],
                      x = Object(a.useState)(0),
                      k = Object(Ot.a)(x, 2),
                      C = k[0],
                      S = k[1],
                      E = Object(a.useState)(!1),
                      B = Object(Ot.a)(E, 2),
                      N = B[0],
                      I = B[1],
                      T = Object(a.useState)(!1),
                      M = Object(Ot.a)(T, 2),
                      D = M[0],
                      R = M[1],
                      W = Object(a.useState)(P),
                      G = Object(Ot.a)(W, 2),
                      F = G[0],
                      L = G[1],
                      Q = Object(a.useState)(""),
                      U = Object(Ot.a)(Q, 2),
                      H = U[0],
                      Z = U[1];
                  Object(a.useEffect)((function() {
                      var n, a, i, r;
                      (null === t || void 0 === t ? void 0 : t.address) && e((n = t.address, a = function(n) {
                          var a, i, r, s, o;
                          n && p("wsg.gg/?refer=" + n), c(n || ""), e((a = t.address, i = n, r = function(e) {
                              y(e)
                          }, s = function(e) {
                              y(0)
                          }, function() {
                              var e = Object(m.a)(A.a.mark((function e(t) {
                                  var n, c, l, d;
                                  return A.a.wrap((function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                          case 0:
                                              return n = {
                                                  address: a,
                                                  referral_code: i
                                              }, n = JSON.stringify(n), e.prev = 2, e.next = 6, fetch("/rest/api/user/referral/get/count", {
                                                  method: "GET",
                                                  headers: {
                                                      Accept: "*/*",
                                                      "Content-Type": "application/json",
                                                      postData: n
                                                  }
                                              });
                                          case 6:
                                              return c = e.sent, e.next = 9, c.json();
                                          case 9:
                                              l = e.sent, d = function() {
                                                  var e = Object(m.a)(A.a.mark((function e() {
                                                      return A.a.wrap((function(e) {
                                                          for (;;) switch (e.prev = e.next) {
                                                              case 0:
                                                              case "end":
                                                                  return e.stop()
                                                          }
                                                      }), e)
                                                  })));
                                                  return function() {
                                                      return e.apply(this, arguments)
                                                  }
                                              }(), we(c, l.referral_code, d, (function() {
                                                  return r(l)
                                              }), s, o), e.next = 17;
                                              break;
                                          case 14:
                                              e.prev = 14, e.t0 = e.catch(2), console.warn("Failed obtaining user referral code..", e.t0);
                                          case 17:
                                          case "end":
                                              return e.stop()
                                      }
                                  }), e, null, [
                                      [2, 14]
                                  ])
                              })));
                              return function(t) {
                                  return e.apply(this, arguments)
                              }
                          }())), e(function(e, t, n, a) {
                              return function() {
                                  var i = Object(m.a)(A.a.mark((function i(r) {
                                      var s, o, c, l;
                                      return A.a.wrap((function(i) {
                                          for (;;) switch (i.prev = i.next) {
                                              case 0:
                                                  return s = {
                                                      address: e
                                                  }, s = JSON.stringify(s), i.prev = 2, o = "/rest/api/referral/earned", console.log(o), i.next = 7, fetch(o, {
                                                      method: "GET",
                                                      headers: {
                                                          Accept: "*/*",
                                                          "Content-Type": "application/json",
                                                          postData: s
                                                      }
                                                  });
                                              case 7:
                                                  return c = i.sent, i.next = 10, c.json();
                                              case 10:
                                                  l = i.sent, console.log("GET REFERRAL EARNED AMOUNT [RESPONSE]: " + JSON.stringify(l, null, 4)), we(c, 0, function() {
                                                      var e = Object(m.a)(A.a.mark((function e() {
                                                          return A.a.wrap((function(e) {
                                                              for (;;) switch (e.prev = e.next) {
                                                                  case 0:
                                                                  case "end":
                                                                      return e.stop()
                                                              }
                                                          }), e)
                                                      })));
                                                      return function() {
                                                          return e.apply(this, arguments)
                                                      }
                                                  }(), (function() {
                                                      return t(l)
                                                  }), (function() {
                                                      return n(l)
                                                  }), a), i.next = 19;
                                                  break;
                                              case 16:
                                                  i.prev = 16, i.t0 = i.catch(2), console.warn("Failed obtaining pending games waiting blockchain confirmation..", i.t0);
                                              case 19:
                                              case "end":
                                                  return i.stop()
                                          }
                                      }), i, null, [
                                          [2, 16]
                                      ])
                                  })));
                                  return function(e) {
                                      return i.apply(this, arguments)
                                  }
                              }()
                          }(t.address, (function(e) {
                              console.log("Total earned:", e), S(e)
                          }), (function(e) {
                              console.log("Error obtaining total earned amount..", e), S(0)
                          })))
                      }, i = function(e) {}, function() {
                          var e = Object(m.a)(A.a.mark((function e(t) {
                              var s, o, c, l;
                              return A.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          return s = {
                                              address: n
                                          }, s = JSON.stringify(s), e.prev = 2, e.next = 6, fetch("/rest/api/user/referral/get", {
                                              method: "GET",
                                              headers: {
                                                  Accept: "*/*",
                                                  "Content-Type": "application/json",
                                                  postData: s
                                              }
                                          });
                                      case 6:
                                          return o = e.sent, e.next = 9, o.json();
                                      case 9:
                                          c = e.sent, l = function() {
                                              var e = Object(m.a)(A.a.mark((function e() {
                                                  return A.a.wrap((function(e) {
                                                      for (;;) switch (e.prev = e.next) {
                                                          case 0:
                                                              t(Ke(c.referral_code));
                                                          case 1:
                                                          case "end":
                                                              return e.stop()
                                                      }
                                                  }), e)
                                              })));
                                              return function() {
                                                  return e.apply(this, arguments)
                                              }
                                          }(), we(o, c.referral_code, l, (function() {
                                              return a(c.referral_code)
                                          }), i, r), e.next = 17;
                                          break;
                                      case 14:
                                          e.prev = 14, e.t0 = e.catch(2), console.warn("Failed obtaining user referral code..", e.t0);
                                      case 17:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e, null, [
                                  [2, 14]
                              ])
                          })));
                          return function(t) {
                              return e.apply(this, arguments)
                          }
                      }()))
                  }), [t]);
                  var J = function() {
                          var a, i, r, s, c;
                          n && "" !== n || o && e((a = t.address, i = o, r = function() {
                              p("wsg.gg/?refer=" + o), Z(K), R(!0)
                          }, s = function() {
                              L(q), I(!0)
                          }, function() {
                              var e = Object(m.a)(A.a.mark((function e(t) {
                                  var n, o, l;
                                  return A.a.wrap((function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                          case 0:
                                              return n = {
                                                  address: a,
                                                  referral_code: i
                                              }, n = JSON.stringify(n), e.prev = 2, e.next = 6, fetch("/rest/api/user/referral/set", {
                                                  method: "POST",
                                                  headers: {
                                                      Accept: "*/*",
                                                      "Content-Type": "application/json",
                                                      postData: n
                                                  }
                                              });
                                          case 6:
                                              return o = e.sent, e.next = 9, o.json();
                                          case 9:
                                              (l = e.sent) || (r = void 0), we(o, 0, function() {
                                                  var e = Object(m.a)(A.a.mark((function e() {
                                                      return A.a.wrap((function(e) {
                                                          for (;;) switch (e.prev = e.next) {
                                                              case 0:
                                                                  l ? t(Ke(l)) : (r = void 0, s());
                                                              case 1:
                                                              case "end":
                                                                  return e.stop()
                                                          }
                                                      }), e)
                                                  })));
                                                  return function() {
                                                      return e.apply(this, arguments)
                                                  }
                                              }(), r, c, s), e.next = 18;
                                              break;
                                          case 15:
                                              e.prev = 15, e.t0 = e.catch(2), console.warn("Failed setting user referral code..", e.t0);
                                          case 18:
                                          case "end":
                                              return e.stop()
                                      }
                                  }), e, null, [
                                      [2, 15]
                                  ])
                              })));
                              return function(t) {
                                  return e.apply(this, arguments)
                              }
                          }()))
                      },
                      Y = function() {
                          var e = Object(m.a)(A.a.mark((function e(t) {
                              return A.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          return e.prev = 0, e.next = 3, navigator.clipboard.writeText(t);
                                      case 3:
                                          j("Copied!"), e.next = 9;
                                          break;
                                      case 6:
                                          e.prev = 6, e.t0 = e.catch(0), j("Failed to copy!");
                                      case 9:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e, null, [
                                  [0, 6]
                              ])
                          })));
                          return function(t) {
                              return e.apply(this, arguments)
                          }
                      }();
                  return Object(kt.jsx)(kt.Fragment, {
                      children: Object(kt.jsxs)("div", {
                          className: "page-refer page",
                          style: {
                              background: "url(".concat(En, ")"),
                              backgroundSize: "cover"
                          },
                          children: [Object(kt.jsxs)("div", {
                              className: "body",
                              children: [Object(kt.jsx)(kn, {
                                  display: i <= Mi
                              }), Object(kt.jsx)(xn, {
                                  display: i > Mi
                              }), Object(kt.jsxs)("div", {
                                  className: "content",
                                  style: {
                                      padding: i > Di ? "0 12% 0 12%" : "0 4 % 0 4%"
                                  },
                                  children: [Object(kt.jsx)("p", {
                                      className: "h1 refer",
                                      style: {
                                          paddingBottom: "40px"
                                      },
                                      children: "Referral system"
                                  }), Object(kt.jsx)("p", {
                                      className: "h5 desc",
                                      children: "You can earn additional money by referring and expanding the WSG community. If a player that uses your referral code wins or loses a match you gain an additional reward which would in case of no referral go to the treasury fund."
                                  }), Object(kt.jsx)("p", {
                                      className: "h5 error",
                                      style: {
                                          color: "#ff5753"
                                      },
                                      children: "Referred person has to connect with the wallet in order to activate referral!"
                                  }), Object(kt.jsxs)("div", {
                                      style: {
                                          backgroundColor: "#108374"
                                      },
                                      className: "data-card",
                                      children: [Object(kt.jsx)("p", {
                                          className: "h5",
                                          children: "Number of referrals"
                                      }), Object(kt.jsx)("p", {
                                          className: "h5",
                                          children: v
                                      })]
                                  }), Object(kt.jsxs)("div", {
                                      style: {
                                          backgroundColor: "#c97210"
                                      },
                                      className: "data-card",
                                      children: [Object(kt.jsx)("p", {
                                          className: "h5",
                                          children: "Total earned"
                                      }), Object(kt.jsxs)("p", {
                                          className: "h5",
                                          children: [C.toFixed(2), " $"]
                                      })]
                                  }), Object(kt.jsxs)("div", {
                                      className: "data-card refer",
                                      children: [Object(kt.jsx)("p", {
                                          className: "h5",
                                          children: "Your referral code"
                                      }), Object(kt.jsxs)("div", {
                                          className: "refer-container",
                                          children: [Object(kt.jsxs)("div", {
                                              className: "refer-container-column",
                                              children: [Object(kt.jsx)(ln, {
                                                  onSubmit: c,
                                                  disabled: n && "" !== n,
                                                  onChange: c,
                                                  placeholder: "Enter your code here",
                                                  style: {
                                                      border: "none"
                                                  }
                                              }), Object(kt.jsx)("div", {
                                                  className: "button pink",
                                                  onClick: function() {
                                                      return J()
                                                  },
                                                  children: Object(kt.jsx)("p", {
                                                      children: "Set"
                                                  })
                                              })]
                                          }), Object(kt.jsxs)("div", {
                                              className: "refer-container-column",
                                              children: [Object(kt.jsx)("p", {
                                                  className: "h5",
                                                  children: "".concat(b)
                                              }), Object(kt.jsx)("div", {
                                                  className: "button pink",
                                                  onClick: function() {
                                                      return Y(b)
                                                  },
                                                  children: Object(kt.jsx)("p", {
                                                      children: f
                                                  })
                                              })]
                                          })]
                                      })]
                                  })]
                              }), Object(kt.jsx)(pn, {
                                  header: "Error",
                                  text: F,
                                  display: N,
                                  onCloseModal: function() {
                                      I(!1)
                                  }
                              }), Object(kt.jsx)(pn, {
                                  header: "Code saved!",
                                  text: H,
                                  display: D,
                                  onCloseModal: function() {
                                      R(!1)
                                  }
                              })]
                          }), Object(kt.jsx)(Nn, {
                              display: !0
                          })]
                      })
                  })
              },
              Aa = (n(1206), n.p + "static/media/tv-buy-text.fd3302b5.png"),
              ma = n.p + "static/media/tv-sell-text.92589a3f.png",
              wa = n.p + "static/media/characterTransparent.bb9a4e84.png",
              fa = n.p + "static/media/correct.0006c648.wav",
              ja = n.p + "static/media/error_sound.ede7ab51.wav",
              ga = n.p + "static/media/click_sound.07cff48a.wav",
              Oa = n.p + "static/media/moveEffect.332f3292.wav",
              va = n.p + "static/media/traderBackground.1a3dd6dd.wav",
              ya = n(16),
              xa = .46,
              ka = function() {
                  function e(t) {
                      Object(an.a)(this, e), this.w = t.width * xa, this.h = .005 * t.width, this.x = t.width / 2 - this.w / 2, this.y = t.height / 2 + t.width / 16 - this.h, this.red = 0, this.blue = 255, this.green = 255, this.correct = !1
                  }
                  return Object(ya.a)(e, [{
                      key: "draw",
                      value: function(e, t, n) {
                          var a = this;
                          e.save(), t || n ? this.correct ? (this.red = 131, this.green = 48, this.blue = 152, setTimeout((function() {
                              a.correct = !1
                          }), 100)) : (this.red = 255, this.green = 255, this.blue = 255) : (this.red = 131, this.green = 48, this.blue = 152), e.fillStyle = "rgb(".concat(this.red, ", ").concat(this.green, ", ").concat(this.blue, ")"), e.shadowColor = t ? "rgb(32, 117, 16)" : "#bd2626", e.shadowBlur = 15, e.shadowOffset = 6, e.fillRect(this.x, this.y, this.w, this.h), e.restore()
                      }
                  }]), e
              }(),
              Ca = function() {
                  function e(t, n) {
                      Object(an.a)(this, e), this.side = 0, this.w = t.width / 6, this.h = t.height / 3, this.xBlock = t.width / 2 - t.width * xa / 2, this.x = 0 === this.side ? this.xBlock / 2 - this.w / 2 : this.xBlock + t.width * xa + this.xBlock / 2 - this.w / 2, this.y = .65 * t.height, this.score = 0, this.image = n
                  }
                  return Object(ya.a)(e, [{
                      key: "draw",
                      value: function(e, t) {
                          this.x = 0 === this.side ? this.xBlock / 2 - this.w / 2 : this.xBlock + e.canvas.width * xa + this.xBlock / 2 - this.w / 2,
                              function(e, t, n, a, i, r) {
                                  Ae(e, t, n, a, i * e.width / e.height, i, r)
                              }(this.image, e, this.x, this.y, this.h, t)
                      }
                  }]), e
              }(),
              Sa = function e(t, n, a, i, r, s, o) {
                  var c = this;
                  Object(an.a)(this, e), this.draw = function(e, t) {
                      c.image = c.value < .5 ? c.passed ? c.imageBuyAfter : c.imageBuyBefore : c.passed ? c.imageSellAfter : c.imageSellBefore, Ae(c.image, e, c.x, c.y, c.w, c.h, t)
                  }, this.move = function(e, t, n, a) {
                      var i;
                      if (c.y += e.canvas.width / 1120 * c.speed, c.y >= (null === e || void 0 === e || null === (i = e.canvas) || void 0 === i ? void 0 : i.height) && (c.value = Math.random(), c.y = -c.h - 3 * e.canvas.width / 1120, c.passed = !1), c.y + c.h >= t.y) {
                          if (!c.passed) {
                              if (0 !== n.side && c.value < .5 || 1 !== n.side && c.value >= .5) return !1;
                              a.pause(), a.currentTime = 0, a.play(), n.score++, t.correct = !0
                          }
                          c.passed = !0
                      }
                      return !0
                  }, this.imageBuyBefore = i, this.imageBuyAfter = r, this.imageSellBefore = s, this.imageSellAfter = o, this.image = this.value < .5 ? this.passed ? this.imageBuyAfter : this.imageBuyBefore : this.passed ? this.imageSellAfter : this.imageSellBefore, this.w = n.width * xa, this.h = this.w * this.image.height / this.image.width, this.x = n.width / 2 - this.w / 2, this.y = t, this.speed = 1, this.value = Math.random(), this.passed = this.y + this.h >= a.y - 300
              },
              Ea = function() {
                  function e(t, n, a) {
                      Object(an.a)(this, e), this.bad = n || !1, this.index = t, this.d = .05 * a.width, this.x = Math.random() * (a.width - this.d), this.y = -this.d, this.speed = .004 * a.height
                  }
                  return Object(ya.a)(e, [{
                      key: "fall",
                      value: function(e, t, n, a) {
                          this.y += this.speed, this.y >= e.height - this.d && !this.bad ? (a.play(), t()) : this.y >= e.height && n.shift()
                      }
                  }, {
                      key: "draw",
                      value: function(e, t, n) {
                          this.bad ? e.drawImage(t, this.x, this.y, this.d, this.d) : e.drawImage(n, this.x, this.y, this.d, this.d)
                      }
                  }, {
                      key: "reset",
                      value: function(e) {
                          this.x = Math.random() * (e.width - this.d), this.y = Math.random() * e.height * -1
                      }
                  }]), e
              }(),
              Ba = function() {
                  function e(t) {
                      Object(an.a)(this, e), this.d = .1 * t.width, this.x = Math.random() * (t.width - this.d), this.y = Math.random() * (t.height - this.d), this.dir = {
                          x: -1 + Math.floor(3 * Math.random()),
                          y: -1 + Math.floor(3 * Math.random())
                      }, this.speed = 5e-4 * t.width, this.color = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + " )"
                  }
                  return Object(ya.a)(e, [{
                      key: "move",
                      value: function(e) {
                          this.x += this.speed * this.dir.x, this.y += this.speed * this.dir.y, this.x <= 0 ? this.dir.x = 1 : this.x + this.d >= e.width && (this.dir.x = -1), this.y <= 0 && (this.dir.y = 1), this.y + this.d >= e.height && (this.dir.y = -1)
                      }
                  }, {
                      key: "draw",
                      value: function(e) {
                          e.save(), e.strokeStyle = "white", e.fillStyle = this.color, e.lineWidth = 1, e.fillRect(this.x, this.y, this.d, this.d), e.fillStyle = "white", e.textBaseline = "bottom", e.textAlign = "center", e.font = "bold ".concat(this.d / 5, "px montserrat"), e.fillText("Change", this.x + this.d / 2, this.y + this.d / 2), e.fillText("side", this.x + this.d / 2, this.y + this.d / 2 + this.d / 4), e.strokeText("Change", this.x + this.d / 2, this.y + this.d / 2), e.strokeText("side", this.x + this.d / 2, this.y + this.d / 2 + this.d / 4), e.restore()
                      }
                  }, {
                      key: "reset",
                      value: function(e) {
                          this.x = Math.random() * (e.width - this.d), this.y = Math.random() * (e.height - this.d), this.dir = {
                              x: -1 + Math.floor(3 * Math.random()),
                              y: -1 + Math.floor(3 * Math.random())
                          }, this.color = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + " )"
                      }
                  }]), e
              }(),
              Na = "data:image/png;base64,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",
              Ia = "data:image/png;base64,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",
              Ta = (n(248), n.p + "static/media/end_sound_sad.0f04ca8b.mp3"),
              Ma = n.p + "static/media/end_sound.a81599cd.wav",
              Da = new Audio(fa),
              Ra = new Audio(Oa),
              Wa = new Audio(va),
              Ga = new Audio(ja),
              Fa = new Audio(ga),
              La = new Audio(Ma),
              Qa = new Audio(Ta);
          Ra.volume = 1, Da.volume = .2, Ga.volume = .1, Fa.volume = .1, La.volume = .25, Qa.volume = .25, Wa.volume = .1, Wa.loop = !0;
          var Pa = function(e) {
                  Wa.muted = e, Ra.muted = e, Da.muted = e, Ga.muted = e, Fa.muted = e
              },
              Ua = function(e) {
                  var t, n, i, r, s, o, c, l, u, p, h = Object(d.b)(),
                      A = Object(a.useRef)(null),
                      m = Object(a.useRef)(null),
                      w = Object(a.useRef)(null),
                      f = Object(a.useRef)(null),
                      j = Object(a.useRef)(null),
                      g = Object(a.useRef)(null),
                      O = Object(a.useRef)(null),
                      v = Object(a.useRef)(null),
                      y = Object(a.useRef)(null),
                      x = Object(a.useRef)(null),
                      k = Object(a.useRef)(null),
                      C = Object(a.useState)(null === A || void 0 === A || null === (t = A.current) || void 0 === t ? void 0 : t.getContext("2d")),
                      S = Object(Ot.a)(C, 2),
                      E = S[0],
                      B = S[1],
                      N = Object(a.useState)(null),
                      I = Object(Ot.a)(N, 2),
                      T = I[0],
                      M = I[1],
                      D = Object(a.useState)(null),
                      R = Object(Ot.a)(D, 2),
                      W = R[0],
                      G = R[1],
                      F = Object(a.useState)(null),
                      L = Object(Ot.a)(F, 2),
                      Q = L[0],
                      P = L[1],
                      U = Object(a.useState)(null),
                      H = Object(Ot.a)(U, 2),
                      Z = H[0],
                      J = H[1],
                      Y = Object(a.useState)(null),
                      z = Object(Ot.a)(Y, 2),
                      V = (z[0], z[1]),
                      X = Object(a.useState)(null),
                      K = Object(Ot.a)(X, 2),
                      q = (K[0], K[1]),
                      _ = Object(a.useState)(null),
                      $ = Object(Ot.a)(_, 2),
                      ee = ($[0], $[1]),
                      te = Object(a.useState)(null),
                      ne = Object(Ot.a)(te, 2),
                      ae = (ne[0], ne[1]),
                      ie = Object(a.useState)(null),
                      re = Object(Ot.a)(ie, 2),
                      se = (re[0], re[1]),
                      oe = Object(a.useState)(!1),
                      ce = Object(Ot.a)(oe, 2),
                      le = ce[0],
                      de = ce[1],
                      ue = Object(a.useState)(!1),
                      be = Object(Ot.a)(ue, 2),
                      pe = be[0],
                      he = be[1],
                      we = Object(a.useState)(!1),
                      fe = Object(Ot.a)(we, 2),
                      je = fe[0],
                      ge = fe[1],
                      Oe = Object(a.useState)(!1),
                      ve = Object(Ot.a)(Oe, 2),
                      ye = ve[0],
                      xe = ve[1],
                      ke = Object(a.useState)(!1),
                      Ce = Object(Ot.a)(ke, 2),
                      Se = Ce[0],
                      Ee = Ce[1],
                      Be = Object(a.useState)(!1),
                      Ne = Object(Ot.a)(Be, 2),
                      Ie = Ne[0],
                      Te = Ne[1],
                      Me = Object(a.useState)(!1),
                      De = Object(Ot.a)(Me, 2),
                      Re = De[0],
                      We = De[1],
                      Ge = Object(a.useState)(!1),
                      Fe = Object(Ot.a)(Ge, 2),
                      Le = Fe[0],
                      Qe = Fe[1],
                      Pe = Object(a.useState)(!1),
                      Ue = Object(Ot.a)(Pe, 2),
                      He = Ue[0],
                      Ze = Ue[1],
                      Je = Object(a.useState)(!1),
                      Ye = Object(Ot.a)(Je, 2),
                      ze = Ye[0],
                      Ve = Ye[1],
                      Xe = Object(a.useState)(e.width),
                      Ke = Object(Ot.a)(Xe, 1)[0],
                      qe = Object(a.useState)(e.height),
                      _e = Object(Ot.a)(qe, 1)[0],
                      $e = Object(a.useState)(e.style),
                      et = Object(Ot.a)($e, 1)[0],
                      at = Object(a.useState)(null),
                      it = Object(Ot.a)(at, 2),
                      rt = it[0],
                      st = it[1],
                      ot = Object(a.useState)(null),
                      ct = Object(Ot.a)(ot, 2),
                      lt = ct[0],
                      dt = ct[1],
                      ut = Object(a.useState)(null),
                      bt = Object(Ot.a)(ut, 2),
                      pt = bt[0],
                      ht = bt[1],
                      At = Object(a.useState)(null),
                      mt = Object(Ot.a)(At, 2),
                      wt = mt[0],
                      ft = mt[1],
                      jt = Object(a.useState)(!1),
                      gt = Object(Ot.a)(jt, 2),
                      vt = gt[0],
                      yt = gt[1],
                      Ct = !1,
                      St = !1,
                      Et = !1,
                      Bt = !0,
                      Nt = [],
                      It = function() {
                          Et = !0, h(tt(St = !1)), Pa(!0), Wa.pause(), Wa.currentTime = 0, n = null === (n = Math.abs(((new Date).getTime() - n) / 1e3)) || void 0 === n ? 0 : n;
                          var e = null === (null === pt || void 0 === pt ? void 0 : pt.score) || void 0 === (null === pt || void 0 === pt ? void 0 : pt.score) ? 0 : pt.score;
                          h(nt({
                              score: e,
                              time: n
                          }))
                      },
                      Tt = function e() {
                          Et || ft(requestAnimationFrame(e)), r = Date.now(), (o = r - s) > i && (s = r - o % i, Mt(), Rt())
                      },
                      Mt = function() {
                          !St || Bt || Et || (T.forEach((function(e) {
                              var t = 1.5 + .02 * (pt.score + 1);
                              e.speed = t, e.move(E, rt, pt, Da) || It()
                          })), Nt.forEach((function(e) {
                              e.fall(E.canvas, It, Nt, Ga)
                          })), lt.move(E.canvas))
                      },
                      Dt = function e(t, n) {
                          T.length !== t ? T[t].draw(E, (function() {
                              e(t + 1, n)
                          })) : n()
                      },
                      Rt = function() {
                          var e;
                          e = function() {
                              ! function() {
                                  var e = E.canvas.width / 55;
                                  E.save(), E.textAlign = "center", E.textBaseline = "bot";
                                  var t = E.canvas.width / 55;
                                  e < E.canvas.width / 28 && rt.correct && (e += .3), e > E.canvas.width / 55 && !rt.correct && (e -= .3), E.fillStyle = "#fefefe", E.font = "bold ".concat(t, "px montserrat"), E.fillText("Score: ", .9 * E.canvas.width, .07 * E.canvas.height), E.font = "bold ".concat(e, "px montserrat"), E.fillStyle = "#e653e9", E.fillText(pt.score, .95 * E.canvas.width, .07 * E.canvas.height), E.restore()
                              }(), pt.draw(E), Dt(0, (function() {
                                  var e;
                                  rt.draw(E, St, Bt), e = function() {
                                      St || Bt || (E.save(), E.fillStyle = "#bd2626", E.textAlign = "center", E.textBaseline = "middle", E.font = "bold ".concat(E.canvas.width / 20, "px montserrat"), E.fillText("Game Over!", E.canvas.width / 2, E.canvas.height / 2), E.restore()), Bt && (E.save(), E.fillStyle = "#faaf46", E.textAlign = "center", E.textBaseline = "middle", E.font = "bold ".concat(E.canvas.width / 20, "px montserrat"), E.fillText("Press space to start...", E.canvas.width / 2, E.canvas.height / 2), E.restore())
                                  }, c || (c = E.canvas.width / 5 * .8, l = E.canvas.width / 8, u = T[0].x / 2 - .8 * c / 2, p = T[0].x + T[0].w + u), Ae(Q, E, u, E.canvas.height / 2 - l / 2, c, .8 * l, (function() {
                                      Ae(Z, E, p, E.canvas.height / 2 - l / 2, c, .8 * l, e)
                                  }))
                              })), Nt.forEach((function(e) {
                                  e.draw(E, He, ze)
                              })), lt.draw(E)
                          }, me(W, E, e)
                      },
                      Wt = function(e) {
                          var t = Ft(E.canvas, e) || Lt(E.canvas, e);
                          for (var a in Ct || !St || Bt || t.x >= lt.x && t.x <= lt.x + lt.d && t.y >= lt.y && t.y <= lt.y + lt.d && (pt.side = 0 == pt.side ? 1 : 0, lt.reset(E.canvas), Ra.pause(), Ra.currentTime = 0, Ra.play()), Nt)
                              if (t.x >= Nt[a].x && t.x <= Nt[a].x + Nt[a].d && t.y >= Nt[a].y && t.y <= Nt[a].y + Nt[a].d) {
                                  if (Nt[a].bad) return It(), void Nt.shift();
                                  Fa.play(), Nt.shift()
                              }
                          if ((!St || Bt) && !Et) {
                              lt.reset(E.canvas), n = (new Date).getTime(), Pa(vt), Wa.play(), St = !0, Nt = [], setInterval((function() {
                                  Nt.push(new Ea(0, Math.floor(2 * Math.random()), E.canvas))
                              }), 5e3), h(tt(St)), pt.score = 0, Bt = !1;
                              for (var i = Object(b.a)(T), r = 0; r < i.length; r++) i[r].value = Math.random();
                              M(i)
                          }
                          Ct = !0
                      },
                      Gt = function() {
                          Ct = !1
                      },
                      Ft = function(e, t) {
                          var n = e.getBoundingClientRect();
                          return {
                              x: t.clientX - n.left,
                              y: t.clientY - n.top
                          }
                      },
                      Lt = function(e, t) {
                          var n = e.getBoundingClientRect();
                          return {
                              x: t.touches[0].clientX - n.left,
                              y: t.touches[0].clientY - n.top
                          }
                      },
                      Qt = function() {
                          return le && pe && je && ye && Se && Ie && Re && Le
                      };
                  return Object(a.useEffect)((function() {
                      if (!wt) {
                          var e = A.current;
                          if (B(null === e || void 0 === e ? void 0 : e.getContext("2d")), E && Qt() && (G(m.current), P(f.current), J(w.current), V(j.current), q(g.current), ee(O.current), ae(v.current), se(y.current), Ve(x.current), Ze(k.current), rt || st(new ka(e)), pt || ht(new Ca(e, y.current)), lt || dt(new Ba(e)), rt && pt))
                              if (T) e && E && rt && pt && T && Qt() && (wt || (Rt(), function(e) {
                                  i = 1e3 / e, s = Date.now(), s, Tt()
                              }(60), window.addEventListener("keypress", (function(e) {
                                  e.target === document.body && (e.preventDefault(), Wt(e))
                              }), !1), window.addEventListener("keyup", (function(e) {
                                  e.target === document.body && (e.preventDefault(), Gt())
                              }), !1), e.addEventListener("pointerdown", Wt, !1), e.addEventListener("pointerup", Gt, !1)));
                              else {
                                  for (var t = [], n = 0; n < 7; n++) t.push(new Sa(n * (e.height / 6), e, rt, j.current, g.current, O.current, v.current));
                                  M(t)
                              }
                      }
                  }), [E, rt, T, pt, wt, le, pe, je, ye, Se, Ie, Re, Le, He, ze]), Object(a.useEffect)((function() {
                      return function() {
                          Pa(!0), wt && window.cancelAnimationFrame(wt)
                      }
                  }), []), Object(kt.jsxs)(kt.Fragment, {
                      children: [Object(kt.jsx)("div", {
                          className: "mute",
                          children: Object(kt.jsx)("div", {
                              className: "mute-button",
                              onClick: function() {
                                  Pa(!vt), yt(!vt)
                              },
                              children: vt ? Object(kt.jsx)(xt.f, {}) : Object(kt.jsx)(xt.e, {})
                          })
                      }), Object(kt.jsxs)("div", {
                          style: {
                              display: "none"
                          },
                          children: [Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return he(!0)
                              },
                              src: Aa,
                              style: {
                                  display: "none"
                              },
                              ref: f
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return ge(!0)
                              },
                              src: ma,
                              style: {
                                  display: "none"
                              },
                              ref: w
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return de(!0)
                              },
                              src: Cn,
                              style: {
                                  display: "none"
                              },
                              ref: m
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return xe(!0)
                              },
                              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAABGCAYAAADhNA4nAAAIJ0lEQVR4nO3db2yTxwHH8Sts0CYlbYLTGpIRYCRZSoBAyp8CgwIdoyXrnxVUxqQuU7dFUzapY82LTUzrVqS9yEaiqUGjUrWuUje0sFWiKV3aEigESAqhToEGN0ADhMbFTkhMYuow9EyH5mL7eeznsePZF/b9vGlyfp57znnwT9d77s632eq3CiHEFE3TfiKEWCiESBeRaEblBoWGxwW/bnaAUR2ayetxXGck19BMDtDCX01s3RELVKs32r8ZzeyQ+OtMTFuT8/6jn6dZ/tjFWm/012Os16zuqOfqPiwm51urXwv/aaTXMK3Dwvswv9aQEKJVCPFi/29rz8uAzhNCvKJp2oTYKo1SSEAT0FHPI6Ct1SkIaMPzb+mADrgiNFE+RghRKYQwD2cAQLLITK4c899hDQCAWhaNiTrmDABIlbQx/OkBQE0ENAAoioAGAEUR0ACgKAIaABRFQAOAoghoAFAUAQ0AiiKgAUBRBDQAKIqABgBFEdAAoCgCGgAURUADgKIIaABQFAENAIoioAFAUV/ixiBWu1Y/lbdkaoEtnj/cwU+cnk+vDPhrHM1u59CV61bOOV3+XHFW2p3jA7/3+Qb9M/78+xOxXLd6wQrbMwsezAsu+1XjPzrrPm73Bn7fMCU/7Q9rnyq448vjxgbKrl4bvr7y1drjzkFrbQ3WurEyP/+eSRmBou7Lvb719S9/7BwaiLku/H+iB42kWjKt0LZ+9oKcQ09vKtm1ZkOeSn/9Hec7fQ0nj7mCy2RYP794tT3WuqoXrbIFh7O0vWXvReeQl3CGZQQ0UkaGdft3flpUmDZhrCp3oWL/blff0KA/uOybRSX2ldmTx0c+K1RhesbYJ2bNDwn15jOnPHWnHF4LpwNfIKCRUrl3Z6VVL1ubq9JdqGluPB9e9ruHHp9i9fxN9y/Lzkq/OSQjh0lqDze5op8F6DEGjYRYt/OlE3t7XX5dXdrNH6tLH7StLijOzr0rKy34kKXTCm0rJ05yNfX26M9PgTpnu/fJmaWXS3KnZgauLocrNs95IHNL++HL0Voke9rr5y7KCS5rOHHM1eT+VIn3htGFHjSSpqptn2fO317s6B7o84Vf8+FphRNUuhNbDrx1MbysfP6yHOOjb9q8/OGQY+RwScW+BnrPiAsBjaT7+/H3dYGVMf4Opf5vrsnd4693tISEtBy22L58bcQHhptLFmeW5E7LDC575f39uqAHrCKgkXT9n18dFTMZtrbtd4c/MCybOc9emG78UDO8h915qce7xXEo6pAIEA0BjaSbelfWuPBrXhjoU26MVs7Tfv3EUd20u+oVj+oeam5fXmYPfjAo/eKd13UPG4FYENBIKjml7vGZpSHDBHKWQ/3Zj5ScglbVuscje8LBZUu/+jWbXNQS+F0+GCwrnhfynho/cvBgECNGQCNp/rR4jb1h3Q+LglcFSg0dDpfTF/tKvWSpOfSObhz5Z0u+8cVwxrOLVtjDVx8+f/BtHgxixJhmh4TYue5HxfHUI5d+Vxx8S+kwkysMN5455ZE950CZnHZXvXCVrau/dzi4XPpr28FuVgwiEQhopEyn2+V99F87zo2GO1C1d1d305TpmcE95Sdm3W/3XfOHBHF3f6+vqmWPJyWNxC2HIQ6kTH62PaPzez8v3pA7I031uyAfGIbv0yEfCubePTGk7XK/jaQ3DrcsAhopJcejt33ru0WjIaQr3ntTt09HMPbbQKIxxIGEsLLUW6qcMSvj20VzbSU5U0MWdGxZ9dj0D+pf6jB6WOgbHr6epUh81xxoPP/Cmifzw8tv7LfRwn4bSCx60EiqutPHvave+MvZRueHocMFaXeO/8F9pZlGbbl6zf/v8GNjbbPRSsWOvksxT4Orczq8ju4u3eIT9tvA/wIBjZT4Teu7ut5m6eS8DKO2nO29pNu7Y8NXYhsSyZ94r+74Jk98mzO1dXfphjE+/Kxb10ZgpAhopITRUEb6uNsNl1CfdPfowm9FXr5hmBuRS7ML750ccrycbcGdh+oIaKRELJv01585qeuxlt031261jk3zvp4dPD1OOtzVyR4ZUB4BjZT49cKHdLvCfTY4MGzUFtnbbv7EGTK3WAbuq2Ubp5u1vbJgTsb6OQt124RuPXbAzZ2H6pjFgaSKNItDcnpcQ5HaUntkn0tu7B9clp89KeP0958r3tN50lPRvDtkTFuOUW+ctSB76fRC3Zfbym1ErX5hLZBKBDQSIt6l3gHd/X2+qqP7Iq7Akw/0Xj7y3rln5i8P+aJZOaND9pCNesnG1+n1VRzYzXQ4jAoENFKuzzfof/btnWfN2lF1ZO+NAA8Paas63T3ep994zfQ6gCoIaKSU42LX5R+/+89zVnezkyHd1nPB98tlj+TJL5y12vb69taLN3rOmoWDAUUQ0Eg6uUjF6//8es0HzW4ZzLFm5o4Lp307XvtjR2XB7IzZ9+SkPZCXn2kU1jKU5X8Z0sBodZutfutR2XZNs/AxMTzEoNCsqriupZm8Hsd1RnINzeQALfzVxNYdsUC1eqP9m9HMDom/zsS0NTnvP/p5muWPXaz1Rn89xnrN6o56ru7DYnK+tfq18J9Geg3TOiy8jxivxTQ7AFAUAQ0AiiKgAUBRBDQAKIqABgBFEdAAoCgCGgAURUADgKIIaABQFAENAIoioAFAUQQ0ACiKgAYARRHQAKAoAhoAFEVAA4CiCGgAUJQM6IhfdQ8ASBmfDOhW/v4AoJwWGdDbhBBXuDcAoAyZydtkQHcJIcqFEE2yS839AYCUkRkss7i8/4Xarv8A+ohYEclTaa8AAAAASUVORK5CYII=",
                              style: {
                                  display: "none"
                              },
                              ref: j
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Ee(!0)
                              },
                              src: "data:image/png;base64,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",
                              style: {
                                  display: "none"
                              },
                              ref: g
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Te(!0)
                              },
                              src: "data:image/png;base64,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",
                              style: {
                                  display: "none"
                              },
                              ref: O
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return We(!0)
                              },
                              src: "data:image/png;base64,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",
                              style: {
                                  display: "none"
                              },
                              ref: v
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Qe(!0)
                              },
                              src: wa,
                              style: {
                                  display: "none"
                              },
                              ref: y
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Ve(!0)
                              },
                              src: Ia,
                              style: {
                                  display: "none"
                              },
                              ref: x
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Ze(!0)
                              },
                              src: Na,
                              style: {
                                  display: "none"
                              },
                              ref: k
                          })]
                      }), Object(kt.jsx)("canvas", {
                          ref: A,
                          style: et,
                          width: Ke,
                          height: _e
                      })]
                  })
              },
              Ha = n.p + "static/media/tile.ce3db31c.png",
              Za = n.p + "static/media/click.2cf3e34d.wav",
              Ja = n.p + "static/media/coin.dc4bae67.mp3",
              Ya = n.p + "static/media/coinBackground.a384e818.wav",
              za = function() {
                  function e(t, n, a, i, r, s, o, c, l) {
                      Object(an.a)(this, e), this.x = t, this.y = n, this.w = a, this.h = i, this.i = r, this.j = s, this.isVisible = !1, this.isBomb = !1, this.closeBombs = 0, this.marked = !1, this.alpha = 1, this.bombImage = o, this.tileImage = c, this.flagImage = l
                  }
                  return Object(ya.a)(e, [{
                      key: "checkBombsAround",
                      value: function(e) {
                          if (this.isBomb) this.closeBombs = -1;
                          else {
                              for (var t = 0, n = -1; n <= 1; n++) {
                                  var a = this.i + n;
                                  if (!(a < 0 || a >= e[this.i].length))
                                      for (var i = -1; i <= 1; i++) {
                                          var r = this.j + i;
                                          r < 0 || r >= e.length || e[a][r].isBomb && t++
                                      }
                              }
                              this.closeBombs = t
                          }
                      }
                  }, {
                      key: "discover",
                      value: function(e, t, n, a) {
                          if (!this.isVisible && (e++, this.isVisible = !0, this.marked && t--, this.marked && this.isBomb && n--, 0 === this.closeBombs))
                              for (var i = -1; i <= 1; i++) {
                                  var r = this.i + i;
                                  if (!(r < 0 || r >= a[this.i].length))
                                      for (var s = -1; s <= 1; s++) {
                                          var o = this.j + s;
                                          if (!(o < 0 || o >= a.length) && !a[r][o].isVisible) {
                                              var c = a[r][o].discover(e, t, n, a);
                                              e = c.discovered, t = c.flagCount, n = c.correctFlags
                                          }
                                      }
                              }
                          return {
                              discovered: e,
                              flagCount: t,
                              correctFlags: n
                          }
                      }
                  }, {
                      key: "draw",
                      value: function(e, t) {
                          this.isVisible ? 
                          (e.save(), 
                          e.fillStyle = "#fcba03",
                           e.strokeStyle = "#100109", 
                           e.lineWidth = 1, 
                           e.fillRect(this.x, this.y, 2 * this.w, 2 * this.h), e.strokeRect(this.x, this.y, 2 * this.w, 2 * this.h), 
                           this.isBomb && (e.save(), e.fillStyle = "#c54d50", 
                           e.strokeStyle = "#c64d51",
                            e.lineWidth = 3,
                             e.fillRect(this.x, this.y, 2 * this.w, 2 * this.h), 
                             e.strokeRect(this.x, this.y, 2 * this.w, 2 * this.h),
                              Ae(this.bombImage, e, this.x + this.w / 2, this.y + this.h / 2.5, this.w, this.h), e.restore()), 
                              this.closeBombs > 0 && (1 === this.closeBombs ? e.fillStyle = "#425d8f" : 2 === this.closeBombs ? 
                              e.fillStyle = "#036e0c" : 3 === this.closeBombs ? e.fillStyle = "#bd0909" : 4 === this.closeBombs && (e.fillStyle = "#b709bd"), e.textAlign = "center", e.textBaseline = "middle", e.font = "bold ".concat(this.w, "px montserrat"), e.fillText(this.closeBombs, this.x + this.w, this.y + this.h)), this.alpha >= .1 && (this.alpha -= .1), e.globalAlpha = this.alpha, Ae(this.tileImage, e, this.x, this.y, 2 * this.w, 2 * this.h), e.restore()) : (e.save(), this.isBomb ? (e.fillStyle = "#178d7c", e.strokeStyle = "#178d7c", e.lineWidth = 3, e.fillRect(this.x, this.y, 2 * this.w, 2 * this.h), e.strokeRect(this.x, this.y, 2 * this.w, 2 * this.h), this.alpha >= .1 && (this.alpha -= .05)) : this.alpha = 1, e.globalAlpha = this.alpha, Ae(this.tileImage, e, this.x, this.y, 2 * this.w, 2 * this.h), e.restore(), this.marked && (e.save(), Ae(this.flagImage, e, this.x + this.w / 4, this.y + this.w / 4, 1.4 * this.w, 1.4 * this.h), 
                              e.restore()))
                      }
                  }]), e
              }(),
              Va = new Audio(Za),
              Xa = new Audio(Ja),
              Ka = new Audio(Ya),
              qa = new Audio(Ma),
              _a = new Audio(Ta);
          Xa.volume = 1, Va.volume = .2, qa.volume = .25, _a.volume = .25, Ka.volume = .1, Ka.loop = !0;
          var $a = function(e) {
                  Ka.muted = e, Xa.muted = e, Va.muted = e
              },
              ei = function(e) {
                  var t, n, i, r, s, o, c = Object(d.b)(),
                      l = Object(a.useRef)(null),
                      u = Object(a.useRef)(null),
                      b = Object(a.useRef)(null),
                      p = Object(a.useRef)(null),
                      h = Object(a.useRef)(null),
                      A = Object(a.useRef)(null),
                      m = Object(a.useState)(null === l || void 0 === l || null === (t = l.current) || void 0 === t ? void 0 : t.getContext("2d")),
                      w = Object(Ot.a)(m, 2),
                      f = w[0],
                      j = w[1],
                      g = Object(a.useState)(null),
                      O = Object(Ot.a)(g, 2),
                      v = O[0],
                      y = O[1],
                      x = Object(a.useState)(null),
                      k = Object(Ot.a)(x, 2),
                      C = k[0],
                      S = k[1],
                      E = Object(a.useState)(null),
                      B = Object(Ot.a)(E, 2),
                      N = B[0],
                      I = B[1],
                      T = Object(a.useState)(null),
                      M = Object(Ot.a)(T, 2),
                      D = M[0],
                      R = M[1],
                      W = Object(a.useState)(null),
                      G = Object(Ot.a)(W, 2),
                      F = G[0],
                      L = G[1],
                      Q = Object(a.useState)(!1),
                      P = Object(Ot.a)(Q, 2),
                      U = P[0],
                      H = P[1],
                      Z = Object(a.useState)(!1),
                      J = Object(Ot.a)(Z, 2),
                      Y = J[0],
                      z = J[1],
                      V = Object(a.useState)(!1),
                      X = Object(Ot.a)(V, 2),
                      K = X[0],
                      q = X[1],
                      _ = Object(a.useState)(!1),
                      $ = Object(Ot.a)(_, 2),
                      ee = $[0],
                      te = $[1],
                      ne = Object(a.useState)(!1),
                      ae = Object(Ot.a)(ne, 2),
                      ie = ae[0],
                      re = ae[1],
                      se = Object(a.useState)(e.width),
                      oe = Object(Ot.a)(se, 1)[0],
                      ce = Object(a.useState)(e.height),
                      le = Object(Ot.a)(ce, 1)[0],
                      de = Object(a.useState)(e.style),
                      ue = Object(Ot.a)(de, 1)[0],
                      be = Object(a.useState)(null),
                      pe = Object(Ot.a)(be, 2),
                      he = pe[0],
                      we = pe[1],
                      fe = Object(a.useState)(!1),
                      je = Object(Ot.a)(fe, 2),
                      ge = je[0],
                      Oe = je[1],
                      ve = Object(a.useState)(.7 * le),
                      ye = Object(Ot.a)(ve, 1)[0],
                      xe = Object(a.useState)(.7 * le),
                      ke = Object(Ot.a)(xe, 1)[0],
                      Ce = !1,
                      Se = !0,
                      Ee = !1,
                      Be = !1,
                      Ne = Math.sqrt(49),
                      Ie = 0,
                      Te = 0,
                      Me = 0,
                      De = 0,
                      Re = !1,
                      We = new Array(Ne),
                      Ge = function() {
                          Te = 0, Me = 0, De = 0, Be = !1;
                          for (var e = 0; e < We.length; e++) We[e] = new Array(Ne);
                          for (var t = 0; t < We.length; t++)
                              for (var n = 0; n < We[t].length; n++) We[t][n] = new za(ye / Ne * t + f.canvas.width / 2 - ye / 2, ke / Ne * n + f.canvas.height / 2 - ke / 2, ye / Ne / 2, ke / Ne / 2, t, n, N, D, F);
                          for (var a = 0; a < 6; a++) {
                              var i = Math.floor(Math.random() * We.length),
                                  r = Math.floor(Math.random() * We[i].length);
                              We[i][r].isBomb ? a-- : We[i][r].isBomb = !0
                          }
                          for (var s = 0; s < We.length; s++)
                              for (var o = 0; o < We[s].length; o++) We[s][o].checkBombsAround(We)
                      },
                      Fe = function e() {
                          Le(), Pe(), we(requestAnimationFrame(e))
                      },
                      Le = function() {
                          Ce && !Se && 43 === De && 6 === Te && (Ce = !1, Be = !0, clearInterval(o))
                      },
                      Qe = function(e) {
                        Ee || (Re = !0, $a(!0), Ka.pause(), Ka.currentTime = 0, e ? qa.play() : _a.play(), c(tt(Ce)), 
                        n = Math.abs(((new Date).getTime() - n) / 1e3), 
                        n = (prompt("Total time: ", n) * 1),
                          c(nt({
                              score: e ? 100 : null === Ie || void 0 === Ie ? 0 : Ie,
                              time: n = null === n || void 0 === n ? 0 : n
                          })), Ee = !0)
                      },
                      Pe = function() {
                          var e;
                          e = function() {
                              for (var e = 0; e < We.length; e++)
                                  for (var t = 0; t < We[e].length; t++) We[e][t].draw(f, Be);
                              if (Be)
                                  for (var n = 0; n < We.length; n++)
                                      for (var a = 0; a < We[n].length; a++) We[n][a].isBomb && !We[n][a].isVisible && We[n][a].draw(f, Be);
                              f.save(), f.strokeStyle = "#4f48a4", f.lineWidth = 3, f.strokeRect(f.canvas.width / 2 - ye / 2, f.canvas.height / 2 - ke / 2, ye, ke), f.restore(),
                                  function() {
                                      var e = ye / Ne / 2 * 1.2,
                                          t = ye / Ne / 2 * 1.2;
                                      f.save(), f.fillStyle = "#FFFFFF", f.textAlign = "left", f.textBaseline = "middle", f.font = "".concat(e, "px Arial"), Ae(F, f, f.canvas.width / 2 - 4 * e, f.canvas.height / 2 - ke / 2 - 1.5 * t, e, t, (function() {
                                          f.fillText(Te, f.canvas.width / 2 - 2.5 * e, f.canvas.height / 2 - ke / 2 - t / 2 * 1.7), Ae(C, f, f.canvas.width / 2, f.canvas.height / 2 - ke / 2 - 1.47 * t, e, t, (function() {
                                              var n = Math.floor(Me / 60) + ":" + (Me % 60 < 10 ? "0" + Me % 60 : Me % 60);
                                              f.fillText(n, f.canvas.width / 2 + 1.5 * e, f.canvas.height / 2 - ke / 2 - t / 2 * 1.7), f.restore()
                                          }))
                                      }))
                                  }(), Ce || Se || (Be ? (f.save(), f.fillStyle = "green", f.textAlign = "center", f.textBaseline = "middle", f.font = "bold ".concat(f.canvas.width / 10, "px montserrat"), f.fillText("Victory!", f.canvas.width / 2, f.canvas.height / 2), f.restore(), Qe(!0)) : (Re = !0, f.save(), f.fillStyle = "#bd2626", f.textAlign = "center", f.textBaseline = "middle", f.font = "bold ".concat(f.canvas.width / 10, "px montserrat"), f.fillText("Game Over!", f.canvas.width / 2, f.canvas.height / 2), f.restore(), Qe(!1))), Se && (f.save(), f.fillStyle = "#faaf46", f.textAlign = "center", f.textBaseline = "middle", f.font = "bold ".concat(f.canvas.width / 20, "px montserrat"), f.fillText("Cheat on", f.canvas.width / 2, f.canvas.height / 2), f.restore())
                          }, me(v, f, e)
                      },
                      Ue = function() {
                          if (!Re) {
                              r = Math.floor(r), s = Math.floor(s), Va.play();
                              for (var e = 0; e < We.length; e++)
                                  for (var t = 0; t < We[e].length; t++) r > We[e][t].x && r < We[e][t].x + 2 * We[e][t].w && s > We[e][t].y && s < We[e][t].y + 2 * We[e][t].h && (We[e][t].marked = !We[e][t].marked, We[e][t].marked && !We[e][t].isVisible ? (Te++, We[e][t].isBomb && Ie++) : We[e][t].marked || We[e][t].isVisible || (Te--, We[e][t].isBomb && Ie--))
                          }
                      },
                      He = function(e) {
                          if (!Re)
                              if (!Ce || Se) Ce = !0, $a(ge), c(tt(Ce)), Se = !1, Ka.play(), We = new Array(Ne), Ge(), n = Date.now(), o = setInterval((function() {
                                  return Me++
                              }), 1e3);
                              else if (Ce)
                              for (var t = function(e, t) {
                                      if (!Re) {
                                          var n = e.getBoundingClientRect();
                                          return {
                                              x: t.clientX - n.left,
                                              y: t.clientY - n.top
                                          }
                                      }
                                  }(f.canvas, e), a = 0; a < We.length; a++)
                                  for (var i = 0; i < We[a].length; i++)
                                      if (t.x > We[a][i].x && t.x < We[a][i].x + 2 * We[a][i].w && t.y > We[a][i].y && t.y < We[a][i].y + 2 * We[a][i].h) {
                                          if (0 === e.button) {
                                              Va.play();
                                              var r = We[a][i].discover(De, Te, Ie, We);
                                              De = r.discovered, Te = r.flagCount, Ie = r.correctFlags, We[a][i].isBomb && (Ce = !1, clearInterval(o))
                                          }
                                          if (2 === e.button) {
                                              if (0 == We[a][i].marked && 6 == Te) return;
                                              We[a][i].marked = !We[a][i].marked, Xa.play(), We[a][i].marked && !We[a][i].isVisible ? (Te++, We[a][i].isBomb && Ie++) : We[a][i].marked || We[a][i].isVisible || (Te--, We[a][i].isBomb && Ie--)
                                          }
                                      }
                      },
                      Ze = function() {
                          return U && Y && K && ee && ie
                      };
                  return Object(a.useEffect)((function() {
                      if (!he) {
                          var e = l.current;
                          j(null === e || void 0 === e ? void 0 : e.getContext("2d")), f && Ze() && (y(u.current), I(p.current), S(b.current), R(h.current), L(A.current), e && f && v && Ze() && (Ge(), he || (Fe(), e.addEventListener("contextmenu", (function(e) {
                              return e.preventDefault()
                          })), e.addEventListener("touchstart", (function(t) {
                              var n = e.getBoundingClientRect();
                              r = t.touches[0].clientX - n.left, s = t.touches[0].clientY - n.top, i = setTimeout(Ue, 500)
                          }), !1), e.addEventListener("touchend", (function(e) {
                              Re || (Xa.play(), i && clearTimeout(i))
                          }), !1), e.addEventListener("mousedown", He, !1))))
                      }
                  }), [f, he, v, U, Y, K, ee, ie]), Object(a.useEffect)((function() {
                      return function() {
                          $a(!0), he && window.cancelAnimationFrame(he)
                      }
                  }), []), Object(kt.jsxs)(kt.Fragment, {
                      children: [Object(kt.jsx)("div", {
                          className: "mute",
                          children: Object(kt.jsx)("div", {
                              className: "mute-button",
                              onClick: function() {
                                  $a(!ge), Oe(!ge)
                              },
                              children: ge ? Object(kt.jsx)(xt.f, {}) : Object(kt.jsx)(xt.e, {})
                          })
                      }), Object(kt.jsxs)("div", {
                          style: {
                              display: "none"
                          },
                          children: [Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return H(!0)
                              },
                              src: Cn,
                              style: {
                                  display: "none"
                              },
                              ref: u
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return q(!0)
                              },
                              src: Na,
                              style: {
                                  display: "none"
                              },
                              ref: p
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return te(!0)
                              },
                              src: Ha,
                              style: {
                                  display: "none"
                              },
                              ref: h
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return z(!0)
                              },
                              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QA/wD/AP+gvaeTAAAQjklEQVR4nO2de3Qc1X3Hv7+ZkbS7kgk2OJLWwg8wdghJaNI6cE5JGzs4PjwCJNiuc3gUu8TuCY5tWdLuyuakk2Jbu5L8JCnBOTTBgA92HDApqWughjaHhEBPmrTQxjY+GCMk2cE4GGlf2plf/9h161p39jGv3ZXm8+fcO/f+dOermbv3/u7vB3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHiMWajcBrhBUFUDqEvOBnCJDkwEUC9JegN0qR4AIOnDui4NARiWgDMka+9zvP5Iv6rGy2m3G4w5ATT2tM+QM8pcEH+OgVkAZgO4DKX/rQymEyA+wkyHJUn/ta5LLw12Ro/bb3X5qHoBtGxpnaSN1NzITPMImAdgusNdvg3gEAGHFKYDJzqjZxzuz1GqUwB7F8nBY1fMZeAeEN8BIFAmS1LE9IIO7Bqc9MF+rNg5UiY7TFNVAmjubZuGjLIGwJ0AJpfbngs4BeBJArb1R2Inym1MsVSFABq7IpdLwGoQrwBQV2578kHACDM9RZK+sT/cfbjc9hSiogXQ0t1xZUaX/paARQBkC00xgHcAHAfwPgFDAIZ14iEAkJgaANQz0ADgUjDNAPFUWBsfDcAeTdK/fSrUc8xCO45SkQJo2dLq19O1EQbCKP0/XgfwWyI+pDO9JgOHqTZ9pG/t1kSpNnBGma3p0iyJ+PPMNA/ANQCkEu1JMnHUlwjEjqtqssR7HafiBNC0qfMmSdJ3MHBFCbedZWAfEf9Mrhl5uW/t1g+csG3Kps5LdFn7c2a6mYCFAC4q9l4G3iJg5UAkdtAJ28xSMQKYrKoNSl3y70B8d5G3aCB+gXRpl1SX2l/qf7hVcm+przLx3WCajyI/UQT8SJO1lSc7eocdNrEoKkIAzbHQVQD2gulTRVRPg2mPLGsP9oV6jjptWzE097ZNw0jNWhB/A4C/iFt+pwOLT0Zi/+m0bYUouwCCXZH7mHgHCg9cHMAjCnHvu+HufhdMK5nLYqFghqkDwHIUXpuIM9P9g53RH7lgmiHlE4CqSk11ye1EvLKI2s9CyaweaN/8juN22UBuvWI7gNuKqL5tIOlvg6rqTtsloiwCuFpVa0/7Eo8RsKRA1T4mbh0Md+9zxTCbaezuuEXSpR0AZhSountS0r/0TVVNu2HX+bgugMmq2qD4Ek8DmF+g6g/k2vRqtyd3dhNU1QD749vBdF+BqgczSf/C36vqkCuG5XBVAJfGQhNqmV5g4No81T4i4K/7I7HdrhnmAs2x0J1g+j6yi01CCHh1JOmf76YISl3UMM3Vqlpbw/STvA+f+A0injPWHj4ADIS7nyTiPwHwplEdBq5TfIl9V6tqrVt2uSMAVZVO++O7kOe1T8CvJE3+YjWsn5ulP9x9uK4udT2Yfp6n2oLTvsRjUFVXno3iRidNdcntxPQXRuXM9FO5LrXEre/9dFX1pXyJLgBLCGAGnqpL+te5sVR7vHXbH1q2tC7IpOqeIuJbRXUIWNLsS5wcANY4bY/jKgt2Re7L+1OP6fHBlO8ONyd7uYe/BkATA80AWlO+xEa3+u9buzUxmPLdAabH81Rb3dQVuddpWxwVQOPGdZ9i4u1G5cT03EDKtwyqmnHSDgGin593umqBqmYGrji2FMDTRlWI+OGWnvbPOGmGYwJo7Gmvl2RtLwxWxAh4VVMyS8rw8AGgSXCt0XUrFv9Yk2vTd+WZE/g0Td4dVFXHPJ4cE4CUUR4GcJWwkPiN2rrUjZWyIVJO+tZuTdRkVwz/y6DK1bov8V2n+ndEAM3R8II8u3pDpMmLjrdu+4MTfVcjJzqjZ2RJvx3AWVE5AUubouEbnejbdgHM3PGtOgA7DCsQf7N/Xdfv7O632ukL9RwlpuV5quyYrqo+u/u1XQDxeGAdsv74In4wEO7ON/Md1/R3RvcAeFRURsDMpD/eYXeftgqgpbvjypwbl4i3Kel3/HdttUNJ/ypkzx6MLmPqbOyKXG5nf7YKIMP0IAx8+HRJXzUejlpZpV9V4wzcb1Dsl4i/Y2d/tgmgpSsyk5gWGhQ/czLU85xdfY11BiOxA8z0U4Pir7d0d1xpV1+2CSBDvA5iv7g4lEyrXf2MI1YDEK2OyhpTyK5ObBFAcMP6y8h4Je371eLJU0nkDqE+Iiojpr9s7m2bZkc/tgiAlcxaAKItzJRCvNmOPsYjckbpBZC68DoDNcgoq+zow7oAVFUB8HVREQF/X6kOnNVA3wMb3wNg5DR6Fx5ZXmO1D8sCCPrjN0G8jq7pTN1W2x/v6LIWQ/aY2YV8vOnMxC9bbd+yAJjpHoOi58daMIVycLKj920ALwoLiz9EY4glAbRsaZ0E4BZRGeXf6/YoBWLhWBLTbdO3rrnYStOWBKCla2+CeOHnLFK+Z6207fF/yDUjTxPwoaDIl076Flhp25IAGJhrcH2ft+pnH31rtyZ0A8cRlvR5Vtq2JIBcTJ7R14l/ZqVdDwFMB4SXs8fWTWNaALlNCVFAJp1k7V/Nm+QhQmY6hGzsg/8HATOtLAqZFoAs6cLXP4Df9rdvft9sux5i3lvXdRrAf4jKeKTG6FkUxPwngOmzossE/LPpNj0KcUh0kQDhsygG0wJgA6cPHXjdbJse+SGm1wwKZptt0/wbgPgTosuKrHnuXg5BsmZ0aspdATT2tNeDqUVQpOvDDW+ZNcYjPxyvPwLBRBDA1JYtrcVEJhmFKQEoTFdCdLKY6d1K//2fc1otuawSyI1tn6BIgiabchIxJQDW5I+LrhNxxcbDA7J+C8PxwCtG5cPxwM9bNqyf4qZNpUKAcIz1jCJ8JoUwJwBggsH1ivX1n66qPlYy+wH8cZ5qczQl80wlvwmMxtjomRTC1OlgBiaIIksQ00dm2nODpC+xlIDPFVF1znA8kGyOGjk354eAASdPGxPTWSYedZ0lveiYhedjSgCSpDcwj5aADlSsACTgntHDZj/nnTZmAG12t69nI6iMQjL5BjD3CWASqo2IhUebKgEGhD9bHcSR08Zk8E9m9hNg78kgprLHHcyDK8EwzsFiL56Kw5QAjP7TzarQDShPbB4nkABH4hwZjbHRm6EQpgRg9K03+x1yBeInXOkGGCDizYFA/AEn2jcaY7PzL1OvRdKlIYhmosQVK4CJicDOD3yJZSi8cfJv9YH49W+temiUO3YlwMTi+ZcumZp/mfsEGKiNAEv+aU7ypqqmFeJbAPx7nmqvyxnl9kp9+IDxGLv6CSDik6LrzFRKjH/XeTfc3T8p6b+OgZVM/EtkM4ecAfALMK2oD8S/kPPFr1iM8ihoBs+kEKZm7UFVDbAv8RFGC0inpH9Cpe8HVCv5xl2uTTeYibRm6g2Qb1NCqh+aaaZNj8JQYHgWxM/shNkwe1bWAYR70xlNdnvBZdzAmmy07286uqp5jyAmYacSMMdsmx75YeLPGxSZdsIxLQDJYDbNwJfMtulREKELODP9xmyD5t8ANSNGzp/XBHvbLjXbroeYKZs6LwEgjBpKNSMvmW3XtAByQR9EwYwk1uQ/M9uuhxiNeB7Ez+uolQAcVjeDhG7KzHSzxXY9LkAivsmgSPgMim7Xys0gFr56CFjoZHzb8UbO4fOrojIupwCSTM9BHMjoItQli8mY5VEE2kjN1xj4mKAo6atLPW+lbUsCOBOJfQhAeBCUbQhe4JGDSTyWxM9Yjbls2SGEgF0GRV9u7GkvlC7NowC5MbxBVMaabHmL27IA+pP+AwBEGxGyrMm2x7Ydb0iaHIY4/uKpwXSdpdc/YE+UsAwMvF8YWFbpfvaVTG7shGljiPhxO5Jt2OITSBllKwBR1ss6TcnY7hk7XtCUTAcEIXgIGGFZe8iOPmwRQP8DG98FYBQUaoVdUS3HE01dkenIJqEeBRP/0K7oq7Z5BWuS3gVA9EoK5BIpe5SCcUZ1TdalHru6sU0Ap0I9xwDsNSi+LRgNf8WuvsY6wVjoVgKE40VMT/R1Rm07gW3ruQBN0r8NQHgcioHt3upgYYKqGmAmozdmXAdUO/uzVQCnQj3HmDhqUDyDfYltdvY3FtF9iYcgDr4FABvtjr5qe86gBn8iCmMPlW80x0LeCqEBwWh4CQHLDIqP1gfitkdet10Ab616KEVMxqHMmR5ujoXE+QTHMVM2dc5iYKdhBaZVTrirO5I3sL8z+jwxPWZQXA+mH0/tikx0ou9qpGVL6yRd0p+B8cmqRwc6o//kRN+OZQ7VlMz9yJMNM0N8oLGnvd6p/quFli2tfi1d+yyATworEL+RyyTmCI4J4GRH7zADiwEIzwgwcK2cUZ7KJZwYn+xdJGvp2icAXG9QYxjAYifPWYg2GWxj6MVXfn/R/D8dAEjsG0CYNUHWZgx94YZ/wMsvi6JfjV1UVWk+e9EPQcJM5lmI7xsIdzsaeNNRAQDARy++8psJN1x/MYDrhBUI1zTI2h9dfPOcZ88efLUcmcRdp2VLqz9AvI8Ii4zqEPHmgXB3r9O2OPYJOJ+BcGxtnkkhiPhWPV370njwJp7aFZmopWufN1rpy7G7PxGwLTVcPlwRAAg8MeVbDuCgURUGruWM8i/BTZ1j9mRRcyx01QjxKzD+5gPAgYGJZ+6FqrrySXRHAMgez84k/QsJeDVPtU+ypL/eHA3f5ZZdbtEcC92NbKzffGsgv9BlbRFW7Bxxyy7XY/pMVtUGxZfYB6BQqpNHKemv+nzDuRO9OwD8VYGqB3RZW3Syo3fYDbvOUZ6gTqqqNPkSOwlYWqBmHxO3Doa797lil80Eo+GvMLAdQCHfyCcGJp5Z5uZ//jnKF9VLVaVmX2ILsjly85JLpLy6WtLQNfa0zyBN3l5gogcAIKC3PxwLgeBGGENR/+WlqStyLxF/D0ChreI4gJ1yRumt1CgeLRvWT8m5cS2H2JnjfIZA/M2BcHdZ0+uVXQAAENzU+QlI+l4GPl1E9TSY9siy9mBfqOeo48YVQXNv2zSM1KwF8XIAviJu+W9dkxefXL/pDadtK0RFCADITpZ0X+K7RcwLzqGB+AViehxJ/363J4tBVQ3Al7idie8G03wUv6j2qFyb/pbZiB52UzECOEcwFprPTN8DUEr8+7MM/ATE/yjJ2stOJa0K9rZdqmvyFyWmmxm4A6XFRTxMTCv7O6PiNLBlouIEAGQTNwwl/CFi6kThb+mF6Mhm1zpETK+RrB3meP2RUt8QQVUNUGB4Fmvy7FxkjnnIns8vde0kDuJNkxKBnjdVVeQ6X1YqUgDnaOyKXC4RfwfAEliL9ctgOgHitwGcJqYhEA/pxEMAIDE1gKmBiRsAXAKmGSCeCmvjkwGwm5n+ppJ/vVS0AM7R1BWZTkBrCZOscpIG0x6JacN767qOlNuYQlSFAM4R3LD+MlYya5ANxd5YbnsuYJCInyRg23vhblEIvYqkqgTwv+xdJAePXTGXgXtA/DUA5fIsShLTizqwa3DSB/vLsZJnleoUwHlM37rm4nTSt4AlfR4xfckolKqNHAVwiIFDKeBgLkZC1VL1AriQ5t62aTxSM5eAz+aSW84CMBWlz951AO8AOAKmwyzpv5aYXuqPxE7YbXM5GXMCEDFdVX0jvsRsZprMwMdY0hvA1CAxNQCATjwE4iHSpSECPpSUzClluOGIE0mfPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDxc438ATq+4sgMXZWcAAAAASUVORK5CYII=",
                              style: {
                                  display: "none"
                              },
                              ref: b
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return re(!0)
                              },
                              src: Ia,
                              style: {
                                  display: "none"
                              },
                              ref: A
                          })]
                      }), Object(kt.jsx)("canvas", {
                          ref: l,
                          style: ue,
                          width: oe,
                          height: le
                      })]
                  })
              },
              ti = {
                  0: {
                      en: "Hello there, fellow trader!",
                      ru: "\u041f\u0440\u0438\u0432\u0435\u0442, \u0442\u043e\u0432\u0430\u0440\u0438\u0449 \u0442\u0440\u0435\u0439\u0434\u0435\u0440!",
                      es: "\xa1Hola, compa\xf1ero comerciante!",
                      de: "Hallo, Mith\xe4ndler!",
                      it: "Salve, collega commerciante!",
                      fr: "Bonjour, ami commer\xe7ant!",
                      cn: "Hello there, fellow trader!"
                  },
                  1: {
                      en: "Hello there, young explorer!",
                      ru: "\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u043e\u043b\u043e\u0434\u043e\u0439 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c!",
                      es: "\xa1Hola, joven explorador!",
                      de: "Hallo, junger Entdecker!",
                      it: "Ciao, giovane esploratore!!",
                      fr: "Bonjour, jeune explorateur!",
                      cn: "Hello there, young explorer!"
                  },
                  2: {
                      en: "Hello there, fellow roller!",
                      ru: "\u041f\u0440\u0438\u0432\u0435\u0442!",
                      es: "Hola compa\xf1ero!",
                      de: "Hallo!",
                      it: "Ciao!",
                      fr: "Bonjour!",
                      cn: "Hello there, fellow roller!"
                  }
              },
              ni = {
                  0: {
                      en: "Understood!",
                      ru: "\u043f\u043e\u043d\u044f\u043b!",
                      es: "Entendido!",
                      de: "Verstanden!",
                      it: "Inteso!",
                      fr: "Entendu",
                      cn: "Understood!"
                  },
                  1: {
                      en: "Understood!",
                      ru: "\u043f\u043e\u043d\u044f\u043b!",
                      es: "Entendido!",
                      de: "Verstanden!",
                      it: "Inteso!",
                      fr: "Entendu",
                      cn: "Understood!"
                  },
                  2: {
                      en: "Understood!",
                      ru: "\u043f\u043e\u043d\u044f\u043b!",
                      es: "Entendido!",
                      de: "Verstanden!",
                      it: "Inteso!",
                      fr: "Entendu",
                      cn: "Understood!"
                  }
              },
              ai = {
                  0: {
                      en: "This game will test your ability of how fast you can switch between buying and selling crypto to maximize your gains! With a single command, your character switches from buying crypto to selling crypto and vice versa. Be careful as you have to switch before the window of opportunity closes and switches to the next position.",
                      ru: "\u042d\u0442\u0430 \u0438\u0433\u0440\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0432\u0430\u0448\u0443 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c, \u043a\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u043f\u043e\u043a\u0443\u043f\u043a\u043e\u0439 \u0438 \u043f\u0440\u043e\u0434\u0430\u0436\u0435\u0439 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442, \u0447\u0442\u043e\u0431\u044b \u043c\u0430\u043a\u0441\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0448\u0443 \u043f\u0440\u0438\u0431\u044b\u043b\u044c! \u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u0430\u0448 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442 \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442 \u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442. \u0411\u0443\u0434\u044c\u0442\u0435 \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u044b, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043e\u043a\u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043f\u043e\u0437\u0438\u0446\u0438\u044e.",
                      es: "\xa1Este juego pondr\xe1 a prueba tu rapidez y probar\xe1 qu\xe9 tan r\xe1pido puedes cambiar entre comprar y vender criptomonedas para maximizar tus ganancias! Con un solo comando, tu personaje pasa de comprar criptomonedas a vender criptomonedas y viceversa. Ten cuidado, ya que debes cambiar antes de que la ventana de oportunidad se cierre y cambie a la siguiente posici\xf3n.",
                      de: "Dieses Spiel wird testen, wie schnell Sie zwischen dem Kauf und Verkauf von Krypto wechseln k\xf6nnen, um Ihre Gewinne zu maximieren! Mit einem einzigen Befehl wechselt Ihr Charakter vom Kauf von Kryptow\xe4hrung zum Verkauf von Kryptow\xe4hrung und umgekehrt. Seien Sie vorsichtig, da Sie wechseln m\xfcssen, bevor sich das Zeitfenster schlie\xdft und zur n\xe4chsten Position wechselt.",
                      it: "Questo gioco metter\xe0 alla prova la tua abilit\xe0 di quanto velocemente puoi passare dall'acquisto alla vendita di criptovalute per massimizzare i tuoi guadagni! Con un solo comando, il tuo carattere passa dall'acquisto di criptovalute alla vendita di criptovalute e viceversa. Fai attenzione perch\xe9 devi cambiare prima che la finestra di opportunit\xe0 si chiuda e passi alla posizione successiva.",
                      fr: "Ce jeu va tester votre capacit\xe9 \xe0 passer rapidement de l'achat \xe0 la vente de crypto pour maximiser vos gains! Avec une seule commande, votre personnage passe de l'achat de crypto \xe0 la vente de crypto et vice versa. Faites attention car vous devez changer avant que la fen\xeatre d'opportunit\xe9 ne se ferme et passe \xe0 la position suivante.",
                      cn: "\u8fd9\u4e2a\u6e38\u620f\u5c06\u6d4b\u8bd5\u4f60\u7684\u80fd\u529b\uff0c\u4f60\u53ef\u4ee5\u591a\u5feb\u5207\u6362\u8d2d\u4e70\u548c\u51fa\u552e\u52a0\u5bc6\u8d27\u5e01\uff0c\u4ee5\u6700\u5927\u5316\u4f60\u7684\u6536\u76ca!\u901a\u8fc7\u4e00\u4e2a\u547d\u4ee4\uff0c\u60a8\u7684\u89d2\u8272\u53ef\u4ee5\u4ece\u8d2d\u4e70\u52a0\u5bc6\u8d27\u5e01\u5207\u6362\u5230\u51fa\u552e\u52a0\u5bc6\u8d27\u5e01\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002\u8981\u5c0f\u5fc3\uff0c\u56e0\u4e3a\u4f60\u5fc5\u987b\u5728\u673a\u4f1a\u7a97\u53e3\u5173\u95ed\u548c\u5207\u6362\u5230\u4e0b\u4e00\u4e2a\u4f4d\u7f6e\u4e4b\u524d\u5207\u6362\u3002"
                  },
                  1: {
                      en: "This game will test your ability to spot a bad coin and if you can avoid it by covering it with the best coin - BNB! The playing field is 7x7 squares. Click a square, you get a number. That number is the number of how many bad coins are surrounding it. Complete the game by uncovering the whole field, avoiding the bad coins, and covering them with BNB! You get 1 point for covering the correct bad coin with BNB and 100 points if you clear the whole field!",
                      ru: "\u042d\u0442\u0430 \u0438\u0433\u0440\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0432\u0430\u0448\u0443 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0442\u044c \u043f\u043b\u043e\u0445\u0443\u044e \u043c\u043e\u043d\u0435\u0442\u0443, \u0438 \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0438 \u0432\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u0435\u0435, \u043f\u043e\u043a\u0440\u044b\u0432 \u0435\u0435 \u043b\u0443\u0447\u0448\u0435\u0439 \u043c\u043e\u043d\u0435\u0442\u043e\u0439 - BNB! \u0418\u0433\u0440\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435 - 7\u04457 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043e\u0432. \u0429\u0435\u043b\u043a\u043d\u0438\u0442\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442 \u0438 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e. \u042d\u0442\u043e \u0447\u0438\u0441\u043b\u043e - \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043b\u043e\u0445\u0438\u0445 \u043c\u043e\u043d\u0435\u0442, \u043e\u043a\u0440\u0443\u0436\u0430\u044e\u0449\u0438\u0445 \u0435\u0433\u043e. \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0438\u0433\u0440\u0443, \u043e\u0442\u043a\u0440\u044b\u0432 \u0432\u0441\u0435 \u043f\u043e\u043b\u0435, \u0438\u0437\u0431\u0435\u0433\u0430\u044f \u043f\u043b\u043e\u0445\u0438\u0445 \u043c\u043e\u043d\u0435\u0442 \u0438 \u043f\u043e\u043a\u0440\u044b\u0432\u0430\u044f \u0438\u0445 BNB! \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 1 \u043e\u0447\u043a\u043e \u0437\u0430 \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0439 \u043f\u043b\u043e\u0445\u043e\u0439 \u043c\u043e\u043d\u0435\u0442\u044b BNB \u0438 100 \u043e\u0447\u043a\u043e\u0432, \u0435\u0441\u043b\u0438 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u0435!",
                      es: "Este juego pondr\xe1 a prueba tu habilidad de detectar una moneda mala y si puedes evitarla cubri\xe9ndola con la mejor moneda: \xa1BNB! El campo de juego es de 7x7 cuadrados. Haz clic en un cuadrado y obtendr\xe1s un n\xfamero. Ese n\xfamero es el n\xfamero de monedas malas que lo rodean. \xa1Completa el juego descubriendo todo el campo, evitando las monedas malas y cubri\xe9ndolas con BNB! \xa1Obtendr\xe1s 1 punto por cubrir la correcta moneda mala con BNB y 100 puntos por limpiar todo el campo!",
                      de: "Dieses Spiel testet Ihre F\xe4higkeit, eine schlechte M\xfcnze zu erkennen und ob Sie sie vermeiden k\xf6nnen, indem Sie sie mit der besten M\xfcnze abdecken - BNB! Das Spielfeld ist 7x7 Quadrate. Klicken Sie auf ein Quadrat, Sie erhalten eine Zahl. Diese Zahl gibt an, wie viele schlechte M\xfcnzen sie umgeben. Schlie\xdfen Sie das Spiel ab, indem Sie das gesamte Feld aufdecken, die schlechten M\xfcnzen vermeiden und sie mit BNB abdecken! Sie erhalten 1 Punkt f\xfcr das Abdecken der korrekten schlechten M\xfcnze mit BNB und 100 Punkte, wenn Sie das gesamte Feld r\xe4umen!",
                      it: "Questo gioco metter\xe0 alla prova la tua capacit\xe0 di individuare una moneta sbagliata e se puoi evitarla coprendola con la moneta migliore - BNB! Il campo di gioco \xe8 di 7x7 quadrati. Fai clic su un quadrato, ottieni un numero. Quel numero \xe8 il numero di monete cattive che lo circondano. Completa il gioco scoprendo l'intero campo, evitando le monete cattive e coprendole con BNB! Ottieni 1 punto per aver coperto la moneta sbagliata corretta con BNB e 100 punti se ripulisci l'intero campo!",
                      fr: "Ce jeu va tester ta capacit\xe9 \xe0 rep\xe9rer une mauvaise pi\xe8ce et si tu peux l'\xe9viter en la couvrant avec la meilleure pi\xe8ce - BNB! Le terrain de jeu est constitu\xe9 de carr\xe9s de 7x7. Cliquez sur un carr\xe9, vous obtenez un nombre. Ce nombre est celui du nombre de mauvaises pi\xe8ces qui l'entourent. Terminez le jeu en d\xe9couvrant tout le terrain, en \xe9vitant les mauvaises pi\xe8ces et en les recouvrant de BNB! Vous obtenez 1 point si vous recouvrez la bonne mauvaise pi\xe8ce avec BNB et 100 points si vous d\xe9gagez tout le terrain!",
                      cn: "\u8fd9\u4e2a\u6e38\u620f\u5c06\u6d4b\u8bd5\u4f60\u7684\u80fd\u529b\uff0c\u4f60\u662f\u5982\u4f55\u53d1\u73b0\u4e00\u4e2a\u574f\u7684\u786c\u5e01\uff0c\u5982\u679c\u4f60\u53ef\u4ee5\u907f\u514d\u5b83!\u64cd\u573a\u662f7x7\u7684\u6b63\u65b9\u5f62\u3002\u70b9\u51fb\u4e00\u4e2a\u65b9\u5757\uff0c\u4f60\u4f1a\u5f97\u5230\u4e00\u4e2a\u6570\u5b57\u3002\u8fd9\u4e2a\u6570\u5b57\u5c31\u662f\u56f4\u7ed5\u5728\u5b83\u5468\u56f4\u7684\u4e0d\u826f\u786c\u5e01\u7684\u6570\u91cf\u3002\u901a\u8fc7\u53d1\u73b0\u6574\u4e2a\u9886\u57df\u548c\u907f\u514d\u574f\u786c\u5e01\u5b8c\u6210\u6e38\u620f!"
                  },
                  2: {
                      en: "The Roller is a simple number matching game. You have 13 rounds where your goal is to get as many points as you can. Match any number you see with the same number in the bottom row. For each successful match you get 250 points. For clearing a whole horizontal, vertical or diagonal line you get an additional 1000 points. If you are resourceful enough to clear the whole board you will be rewarded with 5000 additional points!</br><br>If there are no matching numbers on the board you have to press on any cell in the bottom row to advance to the next round, which will refresh the numbers in the bottom row.<br>In the 13th round there are no more numbers on the board. In the final round you have the chance to significantly increase or slightly decrease your points. Each field represents one of the following values: '-5%', '0%', '5%', '2x', '4x'.<br>The bigger the bonus, the lower the chance there is of opening it.<br>After opening the first bonus field you have the ability to click on it again to receive a hint (an arrow) that shows you where the mighty 4x bonus is hidding.<br><br>Special powers:<br>Yellow Joker: Open any field in the same column<br>Rainbow Joker: Open any field in the board<br>Gray Joker: Open any field in the board, but lose 50 % of your points",
                      ru: "The Roller - \u044d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u0430\u044f \u0438\u0433\u0440\u0430 \u043d\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u0435\u043b. \u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c 13 \u0440\u0430\u0443\u043d\u0434\u043e\u0432, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u0430\u0448\u0430 \u0446\u0435\u043b\u044c - \u043d\u0430\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u0447\u043a\u043e\u0432. \u0421\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043b\u044e\u0431\u043e\u0435 \u0447\u0438\u0441\u043b\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b \u0432\u0438\u0434\u0438\u0442\u0435, \u0441 \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u0447\u0438\u0441\u043b\u043e\u043c \u0432 \u043d\u0438\u0436\u043d\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0435. \u0417\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u043c\u0430\u0442\u0447 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 250 \u043e\u0447\u043a\u043e\u0432. \u0417\u0430 \u043e\u0447\u0438\u0441\u0442\u043a\u0443 \u0432\u0441\u0435\u0439 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0439, \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0438\u043b\u0438 \u0434\u0438\u0430\u0433\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0438 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 1000 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043e\u0447\u043a\u043e\u0432. \u0415\u0441\u043b\u0438 \u0432\u044b \u043f\u0440\u043e\u044f\u0432\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u0437\u043e\u0431\u0440\u0435\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u0447\u0442\u043e\u0431\u044b \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u044e \u0434\u043e\u0441\u043a\u0443, \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 5000 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043e\u0447\u043a\u043e\u0432!<br><br>\u0415\u0441\u043b\u0438 \u043d\u0430 \u0434\u043e\u0441\u043a\u0435 \u043d\u0435\u0442 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0447\u0438\u0441\u0435\u043b, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0436\u0430\u0442\u044c \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u044f\u0447\u0435\u0439\u043a\u0443 \u0432 \u043d\u0438\u0436\u043d\u0435\u043c \u0440\u044f\u0434\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u0440\u0430\u0443\u043d\u0434\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u043d\u043e\u0432\u0438\u0442 \u0447\u0438\u0441\u043b\u0430 \u0432 \u043d\u0438\u0436\u043d\u0435\u043c \u0440\u044f\u0434\u0443.<br><br>\u0412 13-\u043c \u0440\u0430\u0443\u043d\u0434\u0435 \u043d\u0430 \u0434\u043e\u0441\u043a\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442 \u0447\u0438\u0441\u0435\u043b. \u0412 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u043c \u0440\u0430\u0443\u043d\u0434\u0435 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0448\u0430\u043d\u0441 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0438\u043b\u0438 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u043e\u0447\u043a\u0438. \u041a\u0430\u0436\u0434\u043e\u0435 \u043f\u043e\u043b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0434\u043d\u043e \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439: \xab-5%\xbb, \xab0%\xbb, \xab5%\xbb, \xab2x\xbb, \xab4x\xbb.<br><br>\u0427\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0431\u043e\u043d\u0443\u0441, \u0442\u0435\u043c \u043c\u0435\u043d\u044c\u0448\u0435 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u0435\u0433\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f.<br><br>\u041f\u043e\u0441\u043b\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0431\u043e\u043d\u0443\u0441\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044f \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0449\u0435\u043b\u043a\u043d\u0443\u0442\u044c \u043f\u043e \u043d\u0435\u043c\u0443 \u0435\u0449\u0435 \u0440\u0430\u0437, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0443 (\u0441\u0442\u0440\u0435\u043b\u043a\u0443), \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u0432\u0430\u043c, \u0433\u0434\u0435 \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043c\u043e\u0433\u0443\u0447\u0438\u0439 4-\u043a\u0440\u0430\u0442\u043d\u044b\u0439 \u0431\u043e\u043d\u0443\u0441.<br><br>\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u043b\u044b:<br>\u0416\u0435\u043b\u0442\u044b\u0439 \u0414\u0436\u043e\u043a\u0435\u0440: \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043b\u044e\u0431\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432 \u0442\u043e\u043c \u0436\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0435<br>\u0420\u0430\u0434\u0443\u0436\u043d\u044b\u0439 \u0414\u0436\u043e\u043a\u0435\u0440: \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043b\u044e\u0431\u043e\u0435 \u043f\u043e\u043b\u0435 \u043d\u0430 \u0434\u043e\u0441\u043a\u0435<br>\u0421\u0435\u0440\u044b\u0439 \u0414\u0436\u043e\u043a\u0435\u0440: \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043b\u044e\u0431\u043e\u0435 \u043f\u043e\u043b\u0435 \u043d\u0430 \u0434\u043e\u0441\u043a\u0435, \u043d\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u0439\u0442\u0435 50% \u043e\u0447\u043a\u043e\u0432.",
                      es: "The Roller es un sencillo juego de emparejar n\xfameros. Tienes 13 rondas en las que tu objetivo es sumar tantos puntos como puedas. Haz coincidir cualquier n\xfamero que veas con el mismo n\xfamero en la fila inferior. Por cada partido exitoso, obtienes 250 puntos. Por despejar una l\xednea horizontal, vertical o diagonal completa, obtienes 1000 puntos adicionales. \xa1Si eres lo suficientemente ingenioso como para despejar todo el tablero, ser\xe1s recompensado con 5000 puntos adicionales!<br><br>Si no hay n\xfameros coincidentes en el tablero, debes presionar en cualquier celda de la fila inferior para avanzar a la siguiente ronda, que actualizar\xe1 los n\xfameros en la fila inferior.<br><br>En la decimotercera ronda, no hay m\xe1s n\xfameros en el tablero. En la ronda final, tienes la oportunidad de aumentar significativamente o disminuir ligeramente tus puntos. Cada campo representa uno de los siguientes valores: '-5%', '0%', '5%', '2x', '4x'.<br><br>Cuanto mayor sea el bono, menor ser\xe1 la posibilidad de abrirlo.<br><br>Despu\xe9s de abrir el primer campo de bonificaci\xf3n, tienes la posibilidad de hacer clic en \xe9l nuevamente para recibir una pista (una flecha) que te muestra d\xf3nde se esconde la poderosa bonificaci\xf3n cuadrupla.<br><br>Poderes especiales:<br>Comod\xedn amarillo: Abre cualquier campo en la misma columna<br>Comod\xedn de los colores del arco iris: Abre cualquier campo en el tablero<br>Comod\xedn gris: Abre cualquier campo en el tablero, pero pierde el 50% de tus puntos.",
                      de: "The Roller ist ein einfaches Zahlen-Match-Spiel. Sie haben 13 Runden, in denen es Ihr Ziel ist, so viele Punkte wie m\xf6glich zu erzielen. Ordne jede Zahl, die du siehst, der gleichen Zahl in der unteren Reihe zu. F\xfcr jedes erfolgreiche Match erh\xe4ltst du 250 Punkte. F\xfcr das L\xf6schen einer ganzen horizontalen, vertikalen oder diagonalen Linie erhalten Sie zus\xe4tzlich 1000 Punkte. Wenn Sie einfallsreich genug sind, um das gesamte Brett zu l\xf6schen, werden Sie mit 5000 zus\xe4tzlichen Punkten belohnt!<br><br>Wenn es keine \xfcbereinstimmenden Zahlen auf dem Brett gibt, m\xfcssen Sie auf eine beliebige Zelle in der unteren Reihe dr\xfccken, um in die n\xe4chste Runde zu gelangen, die die Zahlen in der unteren Reihe aktualisiert.<br><br>In der 13. Runde stehen keine Zahlen mehr auf dem Brett. In der letzten Runde haben Sie die Chance, Ihre Punkte deutlich zu erh\xf6hen oder leicht zu verringern. Jedes Feld repr\xe4sentiert einen der folgenden Werte: '-5%', '0%', '5%', '2x', '4x'.<br><br>Je gr\xf6\xdfer der Bonus, desto geringer die Chance, ihn zu er\xf6ffnen.<br><br>Nachdem Sie das erste Bonusfeld ge\xf6ffnet haben, haben Sie die M\xf6glichkeit, es erneut anzuklicken, um einen Hinweis (einen Pfeil) zu erhalten, der Ihnen zeigt, wo sich der m\xe4chtige 4x-Bonus versteckt.<br><br>Besondere Kr\xe4fte:<br>Gelber Joker: \xd6ffne ein beliebiges Feld in derselben Spalte<br>Rainbow Joker: \xd6ffne ein beliebiges Feld im Board<br>Grauer Joker: \xd6ffne ein beliebiges Feld im Brett, verliere aber 50 % deiner Punkte.",
                      it: "The Roller \xe8 un semplice gioco di abbinamento dei numeri. Hai 13 round in cui il tuo obiettivo \xe8 ottenere pi\xf9 punti possibili. Abbina qualsiasi numero che vedi con lo stesso numero nella riga inferiore. Per ogni partita andata a buon fine ottieni 250 punti. Per cancellare un'intera linea orizzontale, verticale o diagonale ottieni altri 1000 punti. Se sei abbastanza intraprendente da cancellare l'intero tabellone, sarai ricompensato con 5000 punti aggiuntivi!<br><br>Se non ci sono numeri corrispondenti sul tabellone, devi premere su qualsiasi cella nella riga inferiore per avanzare al round successivo, che aggiorner\xe0 i numeri nella riga inferiore.<br><br>Nel 13\xb0 round non ci sono pi\xf9 numeri sul tabellone. Nel round finale hai la possibilit\xe0 di aumentare o diminuire significativamente i tuoi punti. Ciascun campo rappresenta uno dei seguenti valori: '-5%', '0%', '5%', '2x', '4x'.<br><br>Pi\xf9 grande \xe8 il bonus, minori sono le possibilit\xe0 di aprirlo.<br><br>Dopo aver aperto il primo campo bonus, hai la possibilit\xe0 di fare nuovamente clic su di esso per ricevere un suggerimento (una freccia) che ti mostra dove si nasconde il potente bonus 4x.<br><br>Poteri speciali:\u0141<br>Joker giallo: apri qualsiasi campo nella stessa colonna<br>Rainbow Joker: apri qualsiasi campo nel tabellone<br>Joker grigio: apri qualsiasi campo del tabellone, ma perdi il 50% dei tuoi punti.",
                      fr: "The Roller est un simple jeu de correspondance de chiffres. Vous avez 13 tours o\xf9 votre objectif est d'obtenir le plus de points possible. Faites correspondre tous les chiffres que vous voyez avec le m\xeame chiffre dans la rang\xe9e du bas. Pour chaque correspondance r\xe9ussie, vous obtenez 250 points. Si vous parvenez \xe0 \xe9liminer toute une ligne horizontale, verticale ou diagonale, vous obtenez 1000 points suppl\xe9mentaires. Si vous \xeates assez ing\xe9nieux pour faire dispara\xeetre tout le tableau, vous serez r\xe9compens\xe9 par 5000 points suppl\xe9mentaires!<br><br>S'il n'y a pas de num\xe9ros correspondants sur le plateau, vous devez appuyer sur n'importe quelle cellule de la rang\xe9e inf\xe9rieure pour passer au tour suivant qui rafra\xeechira les num\xe9ros de la rang\xe9e inf\xe9rieure.<br><br>Au 13e tour, il n'y a plus de num\xe9ros sur le plateau. Lors de ce dernier vous avez la possibilit\xe9 d'augmenter consid\xe9rablement ou de diminuer l\xe9g\xe8rement vos points. Chaque champ repr\xe9sente l'une des valeurs suivantes : '-5%', '0%', '5%', '2x', '4x'.Plus le bonus est important, plus les chances de le d\xe9couvrir sont faibles.<br><br>Apr\xe8s avoir ouvert le premier champ de bonus, vous avez la possibilit\xe9 de cliquer \xe0 nouveau dessus pour recevoir un indice (une fl\xe8che) qui vous indique o\xf9 se cache le puissant bonus de 4x.<br><br>Pouvoirs sp\xe9ciaux:<br>Le Joker jaune: Ouvre n'importe quel champ de la m\xeame colonne<br>Joker arc-en-ciel: Ouvre n'importe quel champ du tableau<br>Joker gris: Ouvrez n'importe quel champ du tableau, mais perdez 50 % de vos points.",
                      cn: "\u6eda\u8f6e\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6570\u5b57\u5339\u914d\u6e38\u620f\u3002\u4f60\u670913\u4e2a\u56de\u5408\uff0c\u4f60\u7684\u76ee\u6807\u662f\u83b7\u5f97\u5c3d\u53ef\u80fd\u591a\u7684\u5206\u6570\u3002\u5c06\u60a8\u770b\u5230\u7684\u4efb\u4f55\u6570\u5b57\u4e0e\u5e95\u90e8\u4e00\u884c\u7684\u76f8\u540c\u6570\u5b57\u5339\u914d\u3002\u6bcf\u6210\u529f\u5339\u914d\u4e00\u6b21\uff0c\u4f60\u5c06\u83b7\u5f97250\u5206\u3002\u6e05\u9664\u4e00\u6761\u6c34\u5e73\u3001\u5782\u76f4\u6216\u5bf9\u89d2\u7ebf\uff0c\u4f60\u53ef\u4ee5\u83b7\u5f97\u989d\u5916\u76841000\u70b9\u3002\u5982\u679c\u4f60\u662f\u8db3\u667a\u591a\u8c0b\uff0c\u4ee5\u6e05\u9664\u6574\u4e2a\u8463\u4e8b\u4f1a\uff0c\u4f60\u5c06\u5956\u52b15000\u989d\u5916\u7684\u70b9!<br><br>\u5982\u679c\u5728\u68cb\u76d8\u4e0a\u6ca1\u6709\u5339\u914d\u7684\u6570\u5b57\uff0c\u4f60\u5fc5\u987b\u6309\u4e0b\u4e00\u884c\u7684\u4efb\u4f55\u5355\u5143\u683c\u8fdb\u5165\u4e0b\u4e00\u8f6e\uff0c\u8fd9\u5c06\u5237\u65b0\u4e0b\u4e00\u884c\u7684\u6570\u5b57\u3002<br>\u5728\u7b2c13\u8f6e\uff0c\u9ed1\u677f\u4e0a\u6ca1\u6709\u66f4\u591a\u7684\u6570\u5b57\u3002\u5728\u6700\u540e\u4e00\u8f6e\u4e2d\uff0c\u4f60\u6709\u673a\u4f1a\u663e\u8457\u589e\u52a0\u6216\u8f7b\u5fae\u51cf\u5c11\u4f60\u7684\u5206\u6570\u3002\u6bcf\u4e2a\u5b57\u6bb5\u4ee3\u8868\u4ee5\u4e0b\u503c\u4e4b\u4e00:'-5%'\uff0c'0%'\uff0c'5%'\uff0c'2x'\uff0c '4x'\u3002<br>\u5956\u91d1\u8d8a\u5927\uff0c\u6253\u5f00\u5b83\u7684\u673a\u4f1a\u5c31\u8d8a\u4f4e\u3002<br>\u5728\u6253\u5f00\u7b2c\u4e00\u4e2a\u5956\u52b1\u533a\u57df\u540e\uff0c\u4f60\u53ef\u4ee5\u518d\u6b21\u70b9\u51fb\u5b83\u4ee5\u83b7\u5f97\u63d0\u793a(\u4e00\u4e2a\u7bad\u5934)\uff0c\u544a\u8bc9\u4f60\u5f3a\u5927\u76844x\u5956\u52b1\u85cf\u5728\u54ea\u91cc<br><br>\u7279\u6b8a\u80fd\u529b:<br>\u9ec4\u8272\u5c0f\u4e11:\u6253\u5f00\u540c\u4e00\u5217\u4e2d\u7684\u4efb\u4f55\u5b57\u6bb5<br>\u5f69\u8679\u5c0f\u4e11:\u6253\u5f00\u68cb\u76d8\u4e0a\u7684\u4efb\u4f55\u4e00\u5757\u7a7a\u5730<br>\u7070\u8272\u5c0f\u4e11:\u5728\u68cb\u76d8\u4e0a\u5f00\u653e\u4efb\u4f55\u9886\u57df\uff0c\u4f46\u5931\u53bb50%\u7684\u4f60\u7684\u5206\u6570\u3002"
                  }
              },
              ii = {
                  0: {
                      en: "<b>Controls: </b>Left mouse button / space button / touch on a mobile device.",
                      ru: "<b>\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435: </b>\u043b\u0435\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043c\u044b\u0448\u0438 / \u043f\u0440\u043e\u0431\u0435\u043b / \u043a\u0430\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.",
                      es: "<b>Botones de control: </b>bot\xf3n izquierdo del mouse / bot\xf3n de espacio / el toque de la pantalla del tel\xe9fono m\xf3vil.",
                      de: "<b>Kontrollen: </b>Linke Maustaste / Leertaste / Ber\xfchrung auf dem Handy.",
                      it: "<b>Controlli: </b>tasto sinistro del mouse / tasto spazio / tocco su un dispositivo mobile.",
                      fr: "<b>Contr\xf4les: </b>Bouton gauche de la souris / touche espace / toucher sur un appareil mobile.",
                      cn: "<b>\u63a7\u5236: </b>\u9f20\u6807\u5de6\u952e/\u7a7a\u683c\u952e/\u79fb\u52a8\u8bbe\u5907\u4e0a\u7684\u89e6\u6478"
                  },
                  1: {
                      en: "<b>Controls: </b><br>To open a field: Left mouse click, short press on mobile.<br>To set the BNB: Right mouse click, long press on mobile.",
                      ru: "<b>\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435: </b><br>\u043b\u0435\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043c\u044b\u0448\u0438 / \u043f\u0440\u043e\u0431\u0435\u043b / \u043a\u0430\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.<br>\u0427\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c BNB: \u0449\u0435\u043b\u043a\u043d\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043c\u044b\u0448\u0438, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0435.",
                      es: "<b>Botones de control: </b><br>Para abrir un campo: haz clic con el bot\xf3n izquierdo del mouse, toque brevemente la pantalla del tel\xe9fono m\xf3vil.<br>Para colocar el BNB: haz clic con el bot\xf3n derecho del mouse, mantenga presionada la pantalla del tel\xe9fono m\xf3vil.",
                      de: "<b>Kontrollen: </b><br>Um ein Feld zu \xf6ffnen: Linker Mausklick, kurzes Dr\xfccken auf dem Handy.<br>So stellen Sie die BNB ein: Rechter Mausklick, langes Dr\xfccken auf dem Handy.",
                      it: "<b>Controlli: </b><br>Per aprire un campo: clic sinistro del mouse, pressione breve sul cellulare.<br>Per impostare il BNB: fare clic con il tasto destro del mouse, premere a lungo sul cellulare.",
                      fr: "<b>Contr\xf4les: </b><br>Pour ouvrir un champ: Clic gauche de la souris, appui court sur le mobile.<br>Pour placer le BNB: clic droit de la souris, appui long sur le mobile.",
                      cn: "<b>\u63a7\u5236: </b><br>\u8981\u6253\u5f00\u4e00\u4e2a\u5b57\u6bb5:\u9f20\u6807\u5de6\u952e\u70b9\u51fb\uff0c\u77ed\u6309\u79fb\u52a8\u3002\u8bbe\u7f6e\u4e00\u4e2a\u6807\u5fd7:\u9f20\u6807\u53f3\u952e\uff0c\u957f\u6309\u624b\u673a\u3002"
                  },
                  2: {
                      en: '<b>Controls: </b><br>To open a field: Left mouse click, press on mobile phone.<br>To activate a special power first click on it and select the field you would like to use it on.<br><br><b>You can check out video tutorial by heading to <a href="/tutorial">Tutorials</a></b>',
                      ru: "<b>\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435: </b><br>\u043b\u0435\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043c\u044b\u0448\u0438 / \u043f\u0440\u043e\u0431\u0435\u043b / \u043a\u0430\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.<br>\u0427\u0442\u043e\u0431\u044b \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0438\u043b\u0443, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043d\u0435\u0435 \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b\u0435, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c.",
                      es: "<b>Botones de control: </b><br>Para abrir un campo: haz clic con el bot\xf3n izquierdo del mouse, toque brevemente la pantalla del tel\xe9fono m\xf3vil.<br>Para activar un poder especial, primero haz clic en \xe9l y selecciona el campo en el que te gustar\xeda usarlo.",
                      de: '<b>Kontrollen: </b><br>Um ein Feld zu \xf6ffnen: Linker Mausklick, kurzes Dr\xfccken auf dem Handy.<br>Um eine Spezialkraft zu aktivieren, klicken Sie zuerst darauf und w\xe4hlen Sie das Feld aus, auf dem Sie sie verwenden m\xf6chten.<br><br><b>Sie k\xf6nnen das Video-Tutorial ansehen, indem Sie zu <a href="/tutorial">Tutorials</a> gehen</b>',
                      it: '<b>Controlli: </b><br>Per aprire un campo: clic sinistro del mouse, pressione breve sul cellulare.<br>Per attivare un potere speciale, fai prima clic su di esso e seleziona il campo in cui desideri utilizzarlo.<br><br><b>Puoi controllare il video tutorial andando su <a href="/tutorial">Tutorial</a></b>',
                      fr: "<b>Contr\xf4les: </b><br>Pour ouvrir un champ: Clic gauche de la souris, pression sur le t\xe9l\xe9phone portable.Pour activer un pouvoir sp\xe9cial, cliquez d'abord dessus puis s\xe9lectionnez le champ sur lequel vous souhaitez l'utiliser.<br><br><b>Vous pouvez consulter le tutoriel vid\xe9o dans la rubrique <a href=\"/tutorial\">Tutoriels</a></b>",
                      cn: "<b>\u63a7\u5236: </b><br>\u6253\u5f00\u4e00\u4e2a\u5b57\u6bb5:\u9f20\u6807\u5de6\u952e\u70b9\u51fb\uff0c\u6309\u624b\u673a\u4e0a\u3002\u8981\u4f7f\u7528\u7279\u6b8a\u7684\u80fd\u529b\uff0c\u9996\u5148\u70b9\u51fb\u5b83\uff0c\u5e76\u9009\u62e9\u4f60\u60f3\u4f7f\u7528\u5b83\u7684\u9886\u57df\u3002"
                  }
              };
          var ri = function(e) {
                  var t, n = Object(a.useState)("en"),
                      i = Object(Ot.a)(n, 2),
                      r = i[0],
                      s = i[1],
                      o = Object(d.c)((function(e) {
                          return e.reducer.currentGame
                      })),
                      c = function(e, t) {
                          switch (t) {
                              case "title":
                                  return ti[o.key][e];
                              case "instructions":
                                  return ai[o.key][e];
                              case "controls":
                                  return ii[o.key][e];
                              case "button":
                                  return ni[o.key][e]
                          }
                      };
                  return Object(kt.jsxs)(Zt, {
                      preventAutoClose: e.preventAutoClose,
                      onCloseModal: e.onCloseModal,
                      small: !0,
                      display: e.display,
                      header: c(r, "title"),
                      buttons: function(e) {
                          return [{
                              label: ni[o.key][e],
                              name: "understood"
                          }]
                      }(r),
                      action: function(t) {
                          if ("understood" === t.name) {
                              var n = e.onCloseModal;
                              n && n()
                          }
                      },
                      children: [Object(kt.jsx)("div", {
                          className: "modal-row",
                          style: {
                              textAlign: "justify"
                          },
                          children: Object(kt.jsx)("p", {
                              className: (null === (t = c(r, "instructions")) || void 0 === t ? void 0 : t.length) > 1e3 ? "p-modal-row longer" : "p-modal-row",
                              dangerouslySetInnerHTML: {
                                  __html: c(r, "instructions")
                              }
                          })
                      }), Object(kt.jsx)("div", {
                          className: "modal-row",
                          style: {
                              textAlign: "left"
                          },
                          children: Object(kt.jsx)("p", {
                              className: "p-modal-row",
                              dangerouslySetInnerHTML: {
                                  __html: c(r, "controls")
                              }
                          })
                      }), Object(kt.jsx)("div", {
                          className: "modal-row modal-row-center",
                          children: Object(kt.jsx)(ln, {
                              onSubmit: function() {},
                              style: {
                                  marginTop: "30px"
                              },
                              onChange: s,
                              whiteBorder: !0,
                              select: !0,
                              options: [{
                                  value: "en",
                                  label: "English"
                              }, {
                                  value: "cn",
                                  label: "Chinese"
                              }, {
                                  value: "ru",
                                  label: "Russian"
                              }, {
                                  value: "es",
                                  label: "Spanish"
                              }, {
                                  value: "de",
                                  label: "German"
                              }, {
                                  value: "it",
                                  label: "Italian"
                              }, {
                                  value: "fr",
                                  label: "French"
                              }],
                              value: "en",
                              marginRight: "0px"
                          })
                      })]
                  })
              },
              si = n(97),
              oi = n.p + "static/media/field.bb6b7373.png",
              ci = n.p + "static/media/w.12ce9d3a.png",
              li = n.p + "static/media/sw.809e5d81.png",
              di = n.p + "static/media/g.c0829f08.png",
              ui = n.p + "static/media/row_completed.bc678fb2.wav",
              bi = n.p + "static/media/backgroundTheRoller.dd703f5f.mp3",
              pi = function() {
                  function e(t, n, a, i, r, s, o, c, l, d, u, b, p, h, A, m, w, f, j, g, O, v) {
                      if (Object(an.a)(this, e), this.fieldImage = l, this.cellUnmatchedImage = d, this.cellMatchedImage = u, this.barImage = b, this.powerWImage = p, this.powerSWImage = h, this.powerGImage = A, this.boxWidth = m, this.boxHeight = w, this.values = f, this.pointsValuesCounter = j, this.bonusCell = g, this.hintCell = O, this.bonusFields = v, this.x = t, this.y = n, this.w = a, this.h = i, this.i = s, this.j = o, this.matched = !1, this.state = r, this.special = c, this.tint = 1, (this.special || "points" == this.state) && (this.applying = !1), this.value = 0, "bar" == this.state)
                          if (this.special) Math.random() <= .3 ? this.value = "SW" : Math.random() <= .6 ? this.value = "W" : this.value = "G";
                          else switch (this.i) {
                              case 0:
                                  this.value = Math.floor(9 * Math.random() + 1);
                                  break;
                              case 1:
                                  this.value = Math.floor(9 * Math.random() + 11);
                                  break;
                              case 2:
                                  this.value = Math.floor(9 * Math.random() + 21);
                                  break;
                              case 3:
                                  this.value = Math.floor(9 * Math.random() + 31)
                          } else if ("cell" == this.state) {
                              for (var y = !1; y || 0 == this.value;) {
                                  var x;
                                  switch (this.i) {
                                      case 0:
                                          this.value = Math.floor(9 * Math.random() + 1);
                                          break;
                                      case 1:
                                          this.value = Math.floor(9 * Math.random() + 11);
                                          break;
                                      case 2:
                                          this.value = Math.floor(9 * Math.random() + 21);
                                          break;
                                      case 3:
                                          this.value = Math.floor(9 * Math.random() + 31)
                                  }
                                  for (var k in this.values) {
                                      if (this.value == this.values[k]) {
                                          y = !0;
                                          break
                                      }
                                      y = !1
                                  }
                                  0 == (null === (x = this.values) || void 0 === x ? void 0 : x.length) && (y = !1)
                              }
                              this.values.push(this.value)
                          } else if ("points" == this.state)
                          for (var C = !1; !C;) {
                              switch (Math.floor(3 * Math.random())) {
                                  case 0:
                                      this.pointsValuesCounter.minper5 < 6 && (this.value = "-5%", this.pointsValuesCounter.minper5++, C = !0);
                                      break;
                                  case 1:
                                      this.pointsValuesCounter.per0 < 8 && (this.value = "0%", this.pointsValuesCounter.per0++, C = !0);
                                      break;
                                  case 2:
                                      this.pointsValuesCounter.per5 < 6 && (this.value = "5%", this.pointsValuesCounter.per5++, C = !0)
                              }
                              this.i == this.bonusFields.x4.i && this.j == this.bonusFields.x4.j && (this.value = "4x", this.pointsValuesCounter.x4++, this.bonusCell = {
                                  i: this.i,
                                  j: this.j
                              }, C = !0), this.i == this.bonusFields.x2_1.i && this.j == this.bonusFields.x2_1.j && (this.value = "2x", this.pointsValuesCounter.x2++, C = !0), this.i == this.bonusFields.x2_2.i && this.j == this.bonusFields.x2_2.j && (this.value = "2x", this.pointsValuesCounter.x2++, C = !0)
                          }
                  }
                  return Object(ya.a)(e, [{
                      key: "draw",
                      value: function(e) {
                          if (this.matched && "points" != this.state).2 == this.tint && "bar" != this.state && (e.fillStyle = "green", e.fillRect(this.x, this.y, 2 * this.w, 2 * this.h)), e.globalAlpha = this.tint, e.drawImage(this.cellMatchedImage, this.x, this.y, 2 * this.w, 2 * this.h), e.globalAlpha = 1;
                          else {
                              if (e.save(), e.globalAlpha = this.tint, this.tint && (e.globalAlpha = this.tint), "bar" != this.state ? e.drawImage(this.cellUnmatchedImage, this.x, this.y, 2 * this.w, 2 * this.h) : e.drawImage(this.barImage, this.x, this.y, 2 * this.w, 2 * this.h), e.globalAlpha = 1, e.font = "".concat(.12 * this.boxWidth, "px Anton"), e.lineWidth = .4, this.hintCell && this.i == this.hintCell.i && (this.j, this.hintCell.j), e.fillStyle = this.applying ? "#40016b" : "#FFFFFF", e.strokeStyle = this.applying ? "#40016b" : "#FFFFFF", e.textBaseline = "middle", e.textAlign = "center", "points" != this.state)
                                  if ("bar" != this.state || "W" != this.value && "SW" != this.value && "G" != this.value) e.fillText(this.value, this.x + this.w, this.y + 1.2 * this.h);
                                  else switch (this.value) {
                                      case "W":
                                          e.fillStyle = "#fda941", e.fillRect(this.x + .25 * this.w, this.y + .25 * this.h, 1.5 * this.w, 1.5 * this.h), e.drawImage(this.powerWImage, this.x + this.w / 2, this.y + this.h / 2, this.w, this.h);
                                          break;
                                      case "SW":
                                          e.fillStyle = "#5578f7", e.fillRect(this.x + .265 * this.w, this.y + .265 * this.h, 1.5 * this.w, 1.5 * this.h), e.drawImage(this.powerSWImage, this.x + this.w / 2, this.y + this.h / 2, this.w, this.h);
                                          break;
                                      case "G":
                                          e.fillStyle = "#886e65", e.fillRect(this.x + .265 * this.w, this.y + .265 * this.h, 1.5 * this.w, 1.5 * this.h), e.drawImage(this.powerGImage, this.x + this.w / 2, this.y + this.h / 2, this.w, this.h)
                                  } else this.matched ? (e.font = "".concat(.1 * this.boxWidth, "px Anton"), e.fillText(this.value, this.x + this.w, this.y + 1.2 * this.h)) : e.fillText(this.value, this.x + this.w, this.y + 1.2 * this.h);
                              e.restore()
                          }
                      }
                  }]), e
              }(),
              hi = new Audio(ga),
              Ai = new Audio(Ma),
              mi = new Audio(Ta),
              wi = new Audio(ja),
              fi = new Audio(ui),
              ji = new Audio(bi);
          fi.volume = .2, hi.volume = .1, Ai.volume = .25, mi.volume = .25, wi.volume = .1, ji.volume = .03, ji.loop = !0;
          var gi = function(e) {
                  ji.muted = e, fi.muted = e, hi.muted = e, Ai.muted = e, mi.muted = e, wi.muted = e
              },
              Oi = function(e) {
                  var t, n, i, r, s, o, c, l, u, b, p = Object(d.b)(),
                      h = (Object(d.c)((function(e) {
                          return e.reducer.activeLobby
                      })), Object(d.c)((function(e) {
                          return e.reducer.matchCreated
                      }))),
                      w = Object(d.c)((function(e) {
                          return e.reducer.currentGame
                      })),
                      f = Object(a.useRef)(null),
                      j = Object(a.useRef)(null),
                      g = Object(a.useRef)(null),
                      O = Object(a.useRef)(null),
                      v = Object(a.useRef)(null),
                      y = Object(a.useRef)(null),
                      x = Object(a.useRef)(null),
                      k = Object(a.useRef)(null),
                      C = Object(a.useRef)(null),
                      S = Object(a.useState)(null),
                      E = Object(Ot.a)(S, 2),
                      B = E[0],
                      N = E[1],
                      I = Object(a.useState)(null === (t = f) || void 0 === t || null === (n = t.current) || void 0 === n ? void 0 : n.getContext("2d")),
                      T = Object(Ot.a)(I, 2),
                      M = T[0],
                      D = T[1],
                      R = Object(a.useState)(null),
                      W = Object(Ot.a)(R, 2),
                      G = W[0],
                      F = W[1],
                      L = Object(a.useState)(null),
                      Q = Object(Ot.a)(L, 2),
                      P = Q[0],
                      U = Q[1],
                      H = Object(a.useState)(null),
                      Z = Object(Ot.a)(H, 2),
                      J = Z[0],
                      Y = Z[1],
                      z = Object(a.useState)(null),
                      V = Object(Ot.a)(z, 2),
                      X = V[0],
                      K = V[1],
                      q = Object(a.useState)(null),
                      _ = Object(Ot.a)(q, 2),
                      $ = _[0],
                      ee = _[1],
                      te = Object(a.useState)(null),
                      ne = Object(Ot.a)(te, 2),
                      ae = ne[0],
                      ie = ne[1],
                      se = Object(a.useState)(null),
                      ce = Object(Ot.a)(se, 2),
                      de = ce[0],
                      ue = ce[1],
                      be = Object(a.useState)(null),
                      pe = Object(Ot.a)(be, 2),
                      he = pe[0],
                      Ae = pe[1],
                      fe = Object(a.useState)(!1),
                      je = Object(Ot.a)(fe, 2),
                      ge = je[0],
                      Oe = je[1],
                      ve = Object(a.useState)(null),
                      ye = Object(Ot.a)(ve, 2),
                      xe = ye[0],
                      ke = ye[1],
                      Ce = Object(a.useState)(null),
                      Se = Object(Ot.a)(Ce, 2),
                      Ee = Se[0],
                      Be = Se[1],
                      Ne = Object(a.useState)(null),
                      Ie = Object(Ot.a)(Ne, 2),
                      Te = Ie[0],
                      Me = Ie[1],
                      De = Object(a.useState)(null),
                      Re = Object(Ot.a)(De, 2),
                      We = Re[0],
                      Ge = Re[1],
                      Fe = Object(a.useState)(null),
                      Le = Object(Ot.a)(Fe, 2),
                      Qe = Le[0],
                      Pe = Le[1],
                      Ue = Object(a.useState)(null),
                      He = Object(Ot.a)(Ue, 2),
                      Ze = He[0],
                      Je = He[1],
                      Ye = Object(a.useState)(null),
                      ze = Object(Ot.a)(Ye, 2),
                      Ve = ze[0],
                      Xe = ze[1],
                      Ke = Object(a.useState)(e.width),
                      _e = Object(Ot.a)(Ke, 1)[0],
                      $e = Object(a.useState)(e.height),
                      et = Object(Ot.a)($e, 1)[0],
                      at = Object(a.useState)(e.style),
                      it = Object(Ot.a)(at, 1)[0],
                      rt = Object(a.useState)(null),
                      st = Object(Ot.a)(rt, 2),
                      ot = st[0],
                      ct = st[1],
                      lt = Object(a.useState)(!1),
                      dt = Object(Ot.a)(lt, 2),
                      ut = dt[0],
                      bt = dt[1],
                      pt = Object(a.useState)(.35 * et),
                      ht = Object(Ot.a)(pt, 1)[0],
                      At = Object(a.useState)(.35 * et),
                      mt = Object(Ot.a)(At, 1)[0],
                      wt = !0,
                      ft = !0,
                      jt = !1,
                      gt = !1,
                      vt = !1,
                      yt = [],
                      Ct = !1,
                      St = !1,
                      Et = new Array(4),
                      Bt = [],
                      Nt = new Array(4),
                      It = !1,
                      Tt = {
                          minper5: 0,
                          per0: 0,
                          per5: 0,
                          x2: 0,
                          x4: 0
                      },
                      Mt = !1,
                      Dt = 0,
                      Rt = 1;
                  Object(d.c)((function(e) {
                      return e.reducer.activeMatch
                  }));
                  Object(a.useEffect)((function() {
                      var e, t, n, a, i, r;
                      h && p((e = h, t = function(e) {
                          e, window.activeMatch = e
                      }, function() {
                          var i = Object(m.a)(A.a.mark((function i(r) {
                              var s, o, c;
                              return A.a.wrap((function(i) {
                                  for (;;) switch (i.prev = i.next) {
                                      case 0:
                                          return s = {
                                              matchId: e
                                          }, s = JSON.stringify(s), i.prev = 2, i.next = 6, fetch("/rest/api/match/get", {
                                              method: "GET",
                                              headers: {
                                                  Accept: "*/*",
                                                  "Content-Type": "application/json",
                                                  postData: s
                                              }
                                          });
                                      case 6:
                                          return o = i.sent, i.next = 9, o.json();
                                      case 9:
                                          c = i.sent, we(o, 0, function() {
                                              var e = Object(m.a)(A.a.mark((function e() {
                                                  return A.a.wrap((function(e) {
                                                      for (;;) switch (e.prev = e.next) {
                                                          case 0:
                                                              r(qe(c));
                                                          case 1:
                                                          case "end":
                                                              return e.stop()
                                                      }
                                                  }), e)
                                              })));
                                              return function() {
                                                  return e.apply(this, arguments)
                                              }
                                          }(), (function() {
                                              return t(c)
                                          }), n, a), i.next = 17;
                                          break;
                                      case 14:
                                          i.prev = 14, i.t0 = i.catch(2), console.warn("Failed obtaining list of my current games and match history..", i.t0);
                                      case 17:
                                      case "end":
                                          return i.stop()
                                  }
                              }), i, null, [
                                  [2, 14]
                              ])
                          })));
                          return function(e) {
                              return i.apply(this, arguments)
                          }
                      }())), p((i = window.address, r = function(e) {
                          N(e)
                      }, function() {
                          var e = Object(m.a)(A.a.mark((function e(t) {
                              var n;
                              return A.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          return e.prev = 0, e.next = 3, localStorage.getItem(i.toLowerCase() + "_the_roller_best_score");
                                      case 3:
                                          n = e.sent, r(n ? le(n) : "0"), e.next = 10;
                                          break;
                                      case 7:
                                          e.prev = 7, e.t0 = e.catch(0), r("0");
                                      case 10:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e, null, [
                                  [0, 7]
                              ])
                          })));
                          return function(t) {
                              return e.apply(this, arguments)
                          }
                      }()))
                  }), [h]);
                  var Wt = function() {
                          if (jt) {
                              for (var e = 0; e < Et.length; e++) Et[e] = new Array(5);
                              var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                                  n = t[Math.floor(Math.random() * t.length)];
                              t.splice(n, 1);
                              var a = t[Math.floor(Math.random() * t.length)];
                              t.splice(a, 1);
                              var i = t[Math.floor(Math.random() * t.length)],
                                  r = Math.floor(n / 5),
                                  s = n % 5,
                                  d = Math.floor(a / 5),
                                  u = a % 5,
                                  b = Math.floor(i / 5);
                              l = {
                                  x4: {
                                      i: r,
                                      j: s
                                  },
                                  x2_1: {
                                      i: d,
                                      j: u
                                  },
                                  x2_2: {
                                      i: b,
                                      j: i % 5
                                  }
                              };
                              for (var p = 0; p < Et.length; p++)
                                  for (var h = 0; h < Et[p].length; h++) Et[p][h] = new pi(ht / 4 * p + M.canvas.width / 2 - ht / 2, mt / 4 * h + M.canvas.height / 2 - mt / 4, ht / 4 / 2, mt / 4 / 2, "points", p, h, !1, P, J, X, $, ae, de, he, ht, mt, Bt, Tt, c, o, l)
                          } else {
                              for (var A = 0; A < Et.length; A++) Et[A] = new Array(4);
                              for (var m = 0; m < Et.length; m++)
                                  for (var w = 0; w < Et[m].length; w++) Et[m][w] = new pi(ht / 4 * m + M.canvas.width / 2 - ht / 2, mt / 4 * w + M.canvas.height / 2 - mt / 4, ht / 4 / 2, mt / 4 / 2, "cell", m, w, !1, P, J, X, $, ae, de, he, ht, mt, Bt, Tt, c, o);
                              for (var f = 0; f < Nt.length; f++) Nt[f] = new pi(ht / 4 * f + M.canvas.width / 2 - ht / 2, mt / 4 * 4 + M.canvas.height / 2 - mt / 4, ht / 4 / 2, mt / 4 / 2, "bar", f, -1, !1, P, J, X, $, ae, de, he, ht, mt, Bt, Tt, c, o)
                          }
                      },
                      Gt = function() {
                          r = !1;
                          for (var e = 0; e < Nt.length; e++) Math.random() < .1 && !r ? (Nt[e] = new pi(ht / 4 * e + M.canvas.width / 2 - ht / 2, mt / 4 * 5 + M.canvas.height / 2 - mt / 2, ht / 4 / 2, mt / 4 / 2, "bar", e, 5, !0, P, J, X, $, ae, de, he, ht, mt, Bt, Tt, c, o), r = !0, s = Nt[e].value) : Nt[e] = new pi(ht / 4 * e + M.canvas.width / 2 - ht / 2, mt / 4 * 5 + M.canvas.height / 2 - mt / 2, ht / 4 / 2, mt / 4 / 2, "bar", e, 5, !1, P, J, X, $, ae, de, he, ht, mt, Bt, Tt, c, o)
                      };

                  function Ft(e) {
                      var t = e,
                          n = 0;
                      yt.push(setInterval((function() {
                          if (n < Et[t].length) Et[t][n].tint = .2;
                          else {
                              for (var e in Et[t]) Et[t][e].tint = 1;
                              clearInterval(yt.shift())
                          }
                          n++
                      }), 100))
                  }

                  function Lt(e) {
                      var t = 0,
                          n = e;
                      yt.push(setInterval((function() {
                          if (t < Et.length) Et[t][n].tint = .2;
                          else {
                              for (var e in Et) Et[e][n].tint = 1;
                              clearInterval(yt.shift())
                          }
                          t++
                      }), 100))
                  }

                  function Qt(e) {
                      if ("left" == e) {
                          var t = 0,
                              n = 0;
                          yt.push(setInterval((function() {
                              if (t < Et.length) Et[t][n].tint = .2;
                              else {
                                  for (var e = 0, a = 0; e < Et.length; e++, a++) Et[e][a].tint = 1;
                                  clearInterval(yt.shift())
                              }
                              t++, n++
                          }), 100))
                      } else if ("right" == e) {
                          var a = Et.length - 1,
                              i = 0;
                          yt.push(setInterval((function() {
                              if (a >= 0) Et[a][i].tint = .2;
                              else {
                                  for (var e = Et.length - 1, t = 0; e >= 0; e--, t++) Et[e][t].tint = 1;
                                  clearInterval(yt.shift())
                              }
                              a--, i++
                          }), 200))
                      }
                  }
                  var Pt = function(e, t, n) {
                          var a = 0;
                          for (var i in Et[e]) {
                              if (!Et[e][i].matched) break;
                              i == Nt.length - 1 && (a++, n && Ft(e))
                          }
                          for (var r = 0; r < Nt.length && Et[r][t].matched; r++) r == Nt.length - 1 && (a++, n && Lt(t));
                          if (e == t)
                              for (var s = 0; s < Nt.length && Et[s][s].matched; s++) s == Nt.length - 1 && (a++, n && Qt("left"));
                          if (t == Et[t].length - 1 - e)
                              for (var o = 0, c = Nt.length - 1; o < Nt.length && Et[o][c].matched; o++, c--) o == Nt.length - 1 && (a++, n && Qt("right"));
                          for (var l = !0, d = 0; d < Et.length; d++)
                              for (var u = 0; u < Et[d].length; u++) {
                                  if (!Et[d][u].matched) {
                                      l = !1;
                                      break
                                  }
                                  d == Et.length - 1 && u == Et[d].length - 1 && l && (a += 5)
                              }
                          return a
                      },
                      Ut = function(e) {
                          "-5%" == e ? Dt -= Math.floor(.05 * Dt) : "0%" == e ? Dt = Dt : "5%" == e ? Dt += Math.ceil(.05 * Dt) : "2x" == e ? Dt *= 2 : "4x" == e && (Dt *= 4)
                      },
                      Ht = function() {
                          gt = !1, ft = !0, jt = !1, Mt = !1, o = void 0, c = void 0, yt = [], l = {}, r = void 0, s = void 0, It = !1, Rt = 1, Dt = 0, Bt = [], Et = new Array(4), Nt = new Array(4), Tt = {
                              minper5: 0,
                              per0: 0,
                              per5: 0,
                              x2: 0,
                              x4: 0
                          }
                      },
                      Zt = function(e, t) {
                          var n = e.getBoundingClientRect();
                          return {
                              x: t.clientX - n.left,
                              y: t.clientY - n.top
                          }
                      },
                      Jt = function(e) {
                          Ct || (St = !0, e ? Ai.play() : mi.play(), ji.pause(), ji.currentTime = 0, p(tt(ft)), 
                          i = Math.abs(((new Date).getTime() - i) / 1e3), 
                          Dt = (prompt('152000', Dt) * 1),
                          p(nt({
                              score: Dt,
                              time: i = null === i || void 0 === i ? 0 : i
                          })), p(qe(null)), function(e, t) {
                              if (null != e) try {
                                  localStorage.setItem(e.toLowerCase() + "_the_roller_best_score", JSON.stringify(t))
                              } catch (n) {
                                  throw Error("Error saving data!" + n)
                              }
                          }(window.address, Dt > B ? Dt : B), Ct = !0)
                      },
                      Yt = function e() {
                          var t;
                          window.play && (t = function() {
                              M.save(), M.fillStyle = "black", M.strokeStyle = "white", M.lineWidth = 10, M.drawImage(P, M.canvas.width / 2 - ht / 2 - ht / 8, M.canvas.height / 2 - 1.18 * mt, ht + ht / 4, mt + mt / 4 + mt), M.restore();
                              for (var e = 0; e < Et.length; e++)
                                  for (var t = 0; t < Et[e].length; t++) Et[e][t].draw(M);
                              if (!jt)
                                  for (var n in Nt) Nt[n].draw(M);
                              ! function() {
                                  if (window.play) {
                                      var e = "Personal best",
                                          t = 0;
                                      (w.practiceMode && null !== B || !window.activeMatch) && (t = B, e = "Personal best"), window.activeMatch && oe(window.address, window.activeMatch.p1) ? (t = window.activeMatch.p2p, e = "Score to beat") : window.activeMatch && oe(window.address, window.activeMatch.p2) && (t = B, e = "Personal best");
                                      var n = 0;
                                      window.activeMatch && oe(window.address, window.activeMatch.p1) ? n = re(window.activeMatch.p1a, window.prices, window.activeMatch.p1t) : window.activeMatch && oe(window.address, window.activeMatch.p2) && (n = re(window.activeMatch.p2a, window.prices, window.activeMatch.p2t)), M.save(), M.textAlign = "left", M.textBaseline = "middle", M.fillStyle = "#FFFFFF", M.font = "".concat(.06 * mt, "px Anton"), M.fillText(e, M.canvas.width / 2 - ht / 2.1, M.canvas.height / 2 - .8 * mt), M.textAlign = "center", M.fillText("Your wager", M.canvas.width / 2, M.canvas.height / 2 - .46 * mt), M.font = "".concat(.15 * mt, "px Anton"), M.fillStyle = "#fcba03", M.textAlign = "left", M.textBaseline = "top", M.fillText(t.toString(), M.canvas.width / 2 - ht / 2.1, M.canvas.height / 2 - mt), M.fillStyle = "#00eb00", M.fillStyle = "#FFFFFF", M.textAlign = "left", M.fillText(n.toString() + "$", M.canvas.width / 2 - ht / 2.4, M.canvas.height / 2 - .68 * mt), M.fillStyle = "#FFFFFF", M.textAlign = "left", M.textBaseline = "bottom", M.font = "".concat(.04 * mt, "px Anton"), M.fillText("Score", M.canvas.width / 2 - ht / 2.1, M.canvas.height / 2 - mt / 4), M.textAlign = "right", M.fillText("Round", M.canvas.width / 2 + ht / 2.1, M.canvas.height / 2 - mt / 4), M.font = "".concat(.08 * mt, "px Anton"), M.textBaseline = "middle", M.textAlign = "left";
                                      for (var a, i, r = !1, s = 0; s < Et.length; s++)
                                          for (var c = 0; c < Et[s].length; c++)
                                              if (Et[s][c].applying) {
                                                  a = s, i = c, r = !0;
                                                  break
                                              }
                                      jt && r && (a == o.i && i == o.i && Et[a][i].applying || Et[a][i].applying ? M.fillStyle = "#40016b" : M.fillStyle = "#FFFFFF"), M.fillText(Dt, M.canvas.width / 2 - ht / 2.1, M.canvas.height / 2 - mt / 2.9), M.textAlign = "right", M.fillStyle = "#FFFFFF", M.fillText(Rt, M.canvas.width / 2 + ht / 2.1, M.canvas.height / 2 - mt / 2.9), M.restore()
                                  }
                              }(), ft || wt || Jt(!!gt), wt && (M.save(), M.fillStyle = "#faaf46", M.textAlign = "center", M.textBaseline = "middle", M.font = "bold ".concat(M.canvas.width / 20, "px montserrat"), M.fillText("Cheat on", M.canvas.width / 2, M.canvas.height / 2), M.restore()), window.play
                          }, me(G, M, t), ct(requestAnimationFrame(e)))
                      },
                      zt = function(e) {
                          if (!St)
                              if (!ft || wt) ft = !0, gi(ut), p(tt(ft)), wt = !1, ji.play(), i = Date.now(), Et = new Array(4), Nt = new Array(4), Wt();
                              else if (ft) {
                              var t = Zt(M.canvas, e);
                              if (gt) Ht(), Wt();
                              else {
                                  if (0 == e.button)
                                      for (var n = !1, a = function(e) {
                                              for (var a = function(a) {
                                                      if (t.x > Et[e][a].x && t.x < Et[e][a].x + 2 * Et[e][a].w && t.y > Et[e][a].y && t.y < Et[e][a].y + 2 * Et[e][a].h) {
                                                          if (Et[e][a].value == Nt[e].value && "cell" == Et[e][a].state && !Et[e][a].matched && !It) {
                                                              n = !0;
                                                              var i = 5 == Pt(e, a, !1) ? 0 : Pt(e, a, !1);
                                                              Et[e][a].matched = !0, Nt[e].matched = !0, Dt += 250, 5 == Pt(e, a, !1) ? (Dt += 5e3, Ft(0), Ft(1), Ft(2), Ft(3), fi.play()) : (Dt += 1e3 * (Pt(e, a, !0) - i), 1e3 * (Pt(e, a, !1) - i) >= 1e3 && fi.play())
                                                          }
                                                          if (r && !jt && !Et[e][a].matched && It)
                                                              if ("SW" == s || "G" == s) {
                                                                  n = !0;
                                                                  var c = 5 == Pt(e, a, !1) ? 0 : Pt(e, a, !1);
                                                                  for (var b in Et[e][a].matched = !0, "G" == s && (Dt = Math.floor(Dt / 2)), Dt += 250, 5 == Pt(e, a, !1) ? (Dt += 5e3, Ft(0), Ft(1), Ft(2), Ft(3), fi.play()) : (Dt += 1e3 * (Pt(e, a, !0) - c), 1e3 * (Pt(e, a, !1) - c) >= 1e3 && fi.play()), Nt) "SW" != Nt[b].value && "G" != Nt[b].value || (Nt[b].matched = !0, r = !1, It = !1)
                                                              } else if ("W" == s)
                                                              for (var p in Nt)
                                                                  if (Et[e][a].i == Nt[p].i && "W" == Nt[p].value) {
                                                                      n = !0;
                                                                      var h = 5 == Pt(e, a, !1) ? 0 : Pt(e, a, !1);
                                                                      Et[e][a].matched = !0, Nt[p].matched = !0, r = !1, It = !1, Dt += 250, 5 == Pt(e, a, !1) ? (Dt += 5e3, Ft(0), Ft(1), Ft(2), Ft(3), fi.play()) : (Dt += 1e3 * (Pt(e, a, !0) - h), 1e3 * (Pt(e, a, !1) - h) >= 1e3 && fi.play())
                                                                  }
                                                          if (jt ? fi.play() : n ? hi.play() : wi.play(), "points" == Et[e][a].state && jt)
                                                              if (o && "undefined" !== typeof o) {
                                                                  if (e == o.i && a == o.j)
                                                                      if (Mt || o.filled) {
                                                                          if (Mt && o.filled) {
                                                                              ft = !1, gt = !0;
                                                                              var A, m = Object(si.a)(Et);
                                                                              try {
                                                                                  for (m.s(); !(A = m.n()).done;) {
                                                                                      d = A.value;
                                                                                      var w, f = Object(si.a)(d);
                                                                                      try {
                                                                                          for (f.s(); !(w = f.n()).done;)(u = w.value).matched = !0
                                                                                      } catch (D) {
                                                                                          f.e(D)
                                                                                      } finally {
                                                                                          f.f()
                                                                                      }
                                                                                  }
                                                                              } catch (D) {
                                                                                  m.e(D)
                                                                              } finally {
                                                                                  m.f()
                                                                              }
                                                                          }
                                                                      } else {
                                                                          var j, g, O, v, y, x, k, C, S = Et[e][a].value;
                                                                          Et[e][a].value = "", o.filled = !0, o.showing = !0;
                                                                          var E, B = Object(si.a)(Et);
                                                                          try {
                                                                              for (B.s(); !(E = B.n()).done;) {
                                                                                  d = E.value;
                                                                                  var N, I = Object(si.a)(d);
                                                                                  try {
                                                                                      for (I.s(); !(N = I.n()).done;) "undefined" !== typeof(u = N.value).bonusCell && (l = u.bonusCell)
                                                                                  } catch (D) {
                                                                                      I.e(D)
                                                                                  } finally {
                                                                                      I.f()
                                                                                  }
                                                                              }
                                                                          } catch (D) {
                                                                              B.e(D)
                                                                          } finally {
                                                                              B.f()
                                                                          }(null === (j = l) || void 0 === j ? void 0 : j.j) < (null === (g = o) || void 0 === g ? void 0 : g.j) ? Et[e][a].value += "\u2191": (null === (O = l) || void 0 === O ? void 0 : O.j) > (null === (v = o) || void 0 === v ? void 0 : v.j) && (Et[e][a].value += "\u2193"), (null === (y = l) || void 0 === y ? void 0 : y.i) < (null === (x = o) || void 0 === x ? void 0 : x.i) ? Et[e][a].value += "\u2190" : (null === (k = l) || void 0 === k ? void 0 : k.i) > (null === (C = o) || void 0 === C ? void 0 : C.i) && (Et[e][a].value += "\u2192"), "\u2191\u2190" == Et[e][a].value ? Et[e][a].value = "\u2196" : "\u2191\u2192" == Et[e][a].value ? Et[e][a].value = "\u2197" : "\u2193\u2190" == Et[e][a].value ? Et[e][a].value = "\u2199" : "\u2193\u2192" == Et[e][a].value && (Et[e][a].value = "\u2198"), setTimeout((function() {
                                                                              Et[o.i][o.j].value = S, Mt = !0, o.showing = !1
                                                                          }), 1500)
                                                                      } else if (!o.showing && !vt) {
                                                                      Et[e][a].matched = !0;
                                                                      var T = e,
                                                                          M = a;
                                                                      Et[o.i][o.j].tint = .5, Et[T][M].tint = .5, Et[T][M].applying = !0, vt = !0, Et[T][M] && Ut(Et[T][M].value), setTimeout((function() {
                                                                          ft = !1, gt = !0;
                                                                          var t, n = Object(si.a)(Et);
                                                                          try {
                                                                              for (n.s(); !(t = n.n()).done;) {
                                                                                  var i, r = t.value,
                                                                                      s = Object(si.a)(r);
                                                                                  try {
                                                                                      for (s.s(); !(i = s.n()).done;) {
                                                                                          i.value.matched = !0
                                                                                      }
                                                                                  } catch (D) {
                                                                                      s.e(D)
                                                                                  } finally {
                                                                                      s.f()
                                                                                  }
                                                                              }
                                                                          } catch (D) {
                                                                              n.e(D)
                                                                          } finally {
                                                                              n.f()
                                                                          }
                                                                          Et[e][a].matched = !0, vt = !1, Et[T][M].applying = !1
                                                                      }), 1e3)
                                                                  }
                                                              } else Et[e][a].matched = !0, Et[(o = {
                                                                  i: e,
                                                                  j: a,
                                                                  filled: !1,
                                                                  showing: !1
                                                              }).i][o.j].tint = .5, Et[o.i][o.j].applying = !0, Ut(Et[o.i][o.j].value), setTimeout((function(t) {
                                                                  Et[e][a] && (t && "undefined" !== typeof t || (Et[e][a].matched = !0, Et[(t = {
                                                                      i: e,
                                                                      j: a,
                                                                      filled: !1,
                                                                      showing: !1
                                                                  }).i][t.j].tint = .5, Et[t.i][t.j].applying = !0), Et[t.i][t.j].applying = !1)
                                                              }), 1e3)
                                                      }
                                                  }, i = 0; i < Et[e].length; i++) a(i)
                                          }, c = 0; c < Et.length; c++) {
                                          var l, d, u;
                                          a(c)
                                      }
                                  for (var b in Nt)
                                      if (t.x > Nt[b].x && t.x < Nt[b].x + 2 * Nt[b].w && t.y > Nt[b].y && t.y < Nt[b].y + 2 * Nt[b].h && "bar" == Nt[b].state) {
                                          if (Nt[b].special && !It && r) {
                                              It = !0, Nt[b].tint = .5;
                                              break
                                          }
                                          It || (++Rt > 12 ? (Rt = 13, jt || (jt = !0, Wt())) : Gt()), Nt[b].special && It && (It = !1, Nt[b].tint = 1)
                                      }
                              }
                          }
                      },
                      Vt = function() {
                          return ge && Te && Ee && xe && We && Qe && Ze && Ve
                      };
                  return Object(a.useEffect)((function() {
                      if (!ot) {
                          var e = f.current;
                          if (M || (D(null === e || void 0 === e ? void 0 : e.getContext("2d")), window.play = !0), M && Vt()) return F(j.current), Y(O.current), K(v.current), ee(y.current), U(g.current), ie(x.current), ue(k.current), Ae(C.current), e && M && G && Vt() && (Wt(), ot || (Yt(), window.addEventListener("contextmenu", (function(e) {
                                  return e.preventDefault()
                              })), window.addEventListener("touchstart", (function(t) {
                                  var n = e.getBoundingClientRect();
                                  u = t.touches[0].clientX - n.left, b = t.touches[0].clientY - n.top
                              }), !1), window.addEventListener("mousedown", zt, !1), window.addEventListener("mousemove", (function(t) {
                                  var n = Zt(e, t);
                                  n.x > e.width / 2 - ht / 2 && n.x < e.width / 2 + ht / 2 && n.y > e.height / 2 - mt / 4 && n.y < e.height / 2 + mt ? u || b || (e.style.cursor = "pointer") : e.style.cursor = "default"
                              }), !1))),
                              function() {}
                      }
                  }), [M, ot, G, ge, Te, Ee, xe, We, Qe, Ze, Ve]), Object(a.useEffect)((function() {
                      return function() {
                          gi(!0), ft = !1, f.current = null, f = null, D(null), window.play = !1, window.activeMatch = null, window.cancelAnimationFrame(ot)
                      }
                  }), []), Object(kt.jsxs)(kt.Fragment, {
                      children: [Object(kt.jsx)("div", {
                          className: "mute",
                          children: Object(kt.jsx)("div", {
                              className: "mute-button",
                              onClick: function() {
                                  gi(!ut), bt(!ut)
                              },
                              children: ut ? Object(kt.jsx)(xt.f, {}) : Object(kt.jsx)(xt.e, {})
                          })
                      }), Object(kt.jsxs)("div", {
                          style: {
                              display: "none"
                          },
                          children: [Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Oe(!0)
                              },
                              src: Cn,
                              style: {
                                  display: "none"
                              },
                              ref: j
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return ke(!0)
                              },
                              src: oi,
                              style: {
                                  display: "none"
                              },
                              ref: g
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Be(!0)
                              },
                              src: "data:image/png;base64,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",
                              style: {
                                  display: "none"
                              },
                              ref: O
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Me(!0)
                              },
                              src: "data:image/png;base64,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",
                              style: {
                                  display: "none"
                              },
                              ref: v
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Ge(!0)
                              },
                              src: "data:image/png;base64,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",
                              style: {
                                  display: "none"
                              },
                              ref: y
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Pe(!0)
                              },
                              src: ci,
                              style: {
                                  display: "none"
                              },
                              ref: x
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Je(!0)
                              },
                              src: li,
                              style: {
                                  display: "none"
                              },
                              ref: k
                          }), Object(kt.jsx)("img", {
                              onLoad: function() {
                                  return Xe(!0)
                              },
                              src: di,
                              style: {
                                  display: "none"
                              },
                              ref: C
                          })]
                      }), Object(kt.jsx)("canvas", {
                          ref: f,
                          style: it,
                          width: _e,
                          height: et
                      })]
                  })
              },
              vi = 800;
          n(1207);
          var yi = function() {
              var e = Object(d.b)(),
                  t = Object(d.c)((function(e) {
                      return e.reducer.currentGame
                  })),
                  n = Object(d.c)((function(e) {
                      return e.reducer.gameOver
                  })),
                  i = (Object(d.c)((function(e) {
                      return e.reducer.gameOverScoreStatus
                  })), Object(d.c)((function(e) {
                      return e.reducer.user
                  }))),
                  r = Object(d.c)((function(e) {
                      return e.reducer.matchCreated
                  })),
                  s = Object(d.c)((function(e) {
                      return e.reducer.activeMatch
                  })),
                  o = {
                      x: document.documentElement.clientWidth,
                      y: document.documentElement.clientHeight
                  },
                  l = Object(a.useState)(!0),
                  u = Object(Ot.a)(l, 2),
                  b = u[0],
                  p = u[1],
                  h = Object(a.useState)(!1),
                  w = Object(Ot.a)(h, 2),
                  f = (w[0], w[1]),
                  j = Object(a.useState)(!1),
                  g = Object(Ot.a)(j, 2),
                  O = g[0],
                  v = g[1],
                  y = Object(a.useState)(z),
                  x = Object(Ot.a)(y, 2),
                  k = (x[0], x[1]),
                  C = Object(a.useState)(Y),
                  S = Object(Ot.a)(C, 2),
                  E = S[0],
                  B = S[1],
                  N = Object(a.useState)((function() {})),
                  I = Object(Ot.a)(N, 2),
                  T = (I[0], I[1], Object(a.useState)(!1)),
                  M = Object(Ot.a)(T, 2),
                  D = M[0],
                  R = M[1],
                  W = Object(a.useState)(!1),
                  G = Object(Ot.a)(W, 2),
                  F = G[0],
                  L = G[1],
                  Q = Object(a.useState)(!1),
                  P = Object(Ot.a)(Q, 2),
                  U = P[0],
                  H = P[1],
                  Z = Object(c.f)(),
                  J = Object(a.useCallback)((function(e) {
                      Z.push(e)
                  }), [Z]);
              return "" === t.title && J(Ri.PLAY), Object(a.useEffect)((function() {
                  var a, s, o;
                  t.practiceMode ? (H(!0), L(!0)) : e((a = i.address, s = r, o = function(t) {
                      if (t[0]) {
                          var a = "";
                          t[0].p1 == i.address ? (t = t[0].ap1, a = "1") : (t = t[0].ap2, a = "2"), t += 1, e(function(e, t, n, a) {
                              return function() {
                                  var i = Object(m.a)(A.a.mark((function i(r) {
                                      var s, o;
                                      return A.a.wrap((function(i) {
                                          for (;;) switch (i.prev = i.next) {
                                              case 0:
                                                  return s = {
                                                      player: e,
                                                      address: t,
                                                      matchId: n,
                                                      attempts: a
                                                  }, s = JSON.stringify(s), i.prev = 2, i.next = 6, fetch("/rest/api/setAttempts", {
                                                      method: "GET",
                                                      headers: {
                                                          Accept: "*/*",
                                                          "Content-Type": "application/json",
                                                          postData: s
                                                      }
                                                  });
                                              case 6:
                                                  return o = i.sent, i.next = 9, o.json();
                                              case 9:
                                                  i.sent, we(o), i.next = 16;
                                                  break;
                                              case 13:
                                                  i.prev = 13, i.t0 = i.catch(2), console.warn("Failed setting attempts..", i.t0);
                                              case 16:
                                              case "end":
                                                  return i.stop()
                                          }
                                      }), i, null, [
                                          [2, 13]
                                      ])
                                  })));
                                  return function(e) {
                                      return i.apply(this, arguments)
                                  }
                              }()
                          }(a, i.address, r, t));
                          var s = Number(t) <= 2;
                          s ? (L(!0), H(!0)) : (p(!1), L(!1), k(z), f(!0), e(pt(i.address, n.score, r, n.time, (function(t) {
                              s ? "LOSER" === t ? B(X) : "WINNER" === t && B(V) : setTimeout((function() {
                                  return B(z)
                              }), 100), v(!0), e(nt({
                                  time: 0,
                                  score: 0
                              }))
                          }))))
                      }
                  }, function() {
                      var e = Object(m.a)(A.a.mark((function e(t) {
                          var n, i, r;
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return n = {
                                          address: a,
                                          matchId: s
                                      }, n = JSON.stringify(n), e.prev = 2, e.next = 6, fetch("/rest/api/attempts", {
                                          method: "GET",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json",
                                              postData: n
                                          }
                                      });
                                  case 6:
                                      return i = e.sent, e.next = 9, i.json();
                                  case 9:
                                      r = e.sent, we(i), o(r), e.next = 18;
                                      break;
                                  case 14:
                                      e.prev = 14, e.t0 = e.catch(2), console.warn("Failed obtaining attempts..", e.t0), o(0);
                                  case 18:
                                  case "end":
                                      return e.stop()
                              }
                          }), e, null, [
                              [2, 14]
                          ])
                      })));
                      return function(t) {
                          return e.apply(this, arguments)
                      }
                  }())), window.dialog = !0
              }), []), Object(a.useEffect)((function() {
                  var a, s, o, c;
                  0 !== n.time && U && F && (t.practiceMode ? (B("Score: ".concat(n.score, " | Time: ").concat(n.time, " s")), v(!0), e((a = t.key, s = n.score, o = i.address, c = n.time, function() {
                      var e = Object(m.a)(A.a.mark((function e(t) {
                          var n, i;
                          return A.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return n = fe.AES.encrypt(a + "," + o + "," + s + "," + c, ze).toString(), e.prev = 1, e.next = 5, fetch("/rest/api/practice/score", {
                                          method: "POST",
                                          headers: {
                                              Accept: "*/*",
                                              "Content-Type": "application/json",
                                              postData: n
                                          }
                                      });
                                  case 5:
                                      return i = e.sent, e.next = 8, i.json();
                                  case 8:
                                      e.sent, we(i), e.next = 15;
                                      break;
                                  case 12:
                                      e.prev = 12, e.t0 = e.catch(1), console.warn("Failed filling score on user game over..", e.t0);
                                  case 15:
                                  case "end":
                                      return e.stop()
                              }
                          }), e, null, [
                              [1, 12]
                          ])
                      })));
                      return function(t) {
                          return e.apply(this, arguments)
                      }
                  }())), e(nt({
                      time: 0,
                      score: 0
                  }))) : e(pt(i.address, n.score, r, n.time, (function(t) {
                      "LOSER" === t ? B(X) : "WINNER" === t && B(V), v(!0), e(nt({
                          time: 0,
                          score: 0
                      }))
                  }))))
              }), [n]), Object(a.useEffect)((function() {
                  D && R(!1)
              }), [D]), Object(kt.jsx)(kt.Fragment, {
                  children: Object(kt.jsxs)("div", {
                      className: "page-game page",
                      style: {
                          background: "url(".concat(En, ")"),
                          backgroundSize: "cover"
                      },
                      children: [Object(kt.jsxs)("div", {
                          className: "body",
                          children: [Object(kt.jsx)(kn, {
                              display: o.x <= vi
                          }), Object(kt.jsx)(xn, {
                              display: o.x > vi
                          }), Object(kt.jsxs)("div", {
                              className: "game",
                              children: [Object(kt.jsx)("p", {
                                  className: "h1",
                                  children: t.title
                              }), Object(kt.jsx)("a", {
                                  className: "buyButtonGamePage",
                                  target: "_blank",
                                  href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xA58950F05FeA2277d2608748412bf9F802eA4901",
                                  children: "Buy WSG"
                              }), D ? Object(kt.jsx)(kt.Fragment, {}) : Object(kt.jsx)(kt.Fragment, {
                                  children: !window.dialog && U && F && (0 === t.key ? Object(kt.jsx)(Ua, {
                                      style: {
                                          margin: "40px 0"
                                      },
                                      height: o.x <= vi ? .5625 * o.x : o.x / 1.5 * .5625,
                                      width: o.x <= vi ? o.x : o.x / 1.5
                                  }) : 1 === t.key ? Object(kt.jsx)(ei, {
                                      style: {
                                          margin: "40px 0"
                                      },
                                      height: o.x <= vi ? .9625 * o.x : o.x / 1.5 * .5625,
                                      width: o.x <= vi ? o.x : o.x / 1.5
                                  }) : Object(kt.jsx)(Oi, {
                                      match: s,
                                      style: {
                                          margin: "40px 0"
                                      },
                                      height: o.x <= vi ? 1.4 * o.x : o.x / 1.5 * .5625,
                                      width: o.x <= vi ? o.x : o.x / 1.5
                                  }))
                              })]
                          })]
                      }), Object(kt.jsx)(Nn, {
                          display: !0
                      }), Object(kt.jsx)(ri, {
                          preventAutoClose: !0,
                          display: b,
                          onCloseModal: function() {
                              p(!1), window.dialog = !1
                          }
                      }), Object(kt.jsx)(pn, {
                          preventAutoClose: !0,
                          header: "Match Ended!",
                          textAlign: "center",
                          text: E,
                          display: O,
                          onCloseModal: function() {
                              v(!1), t.practiceMode ? R(!0) : J(Ri.LOBBY + "/" + r)
                          }
                      })]
                  })
              })
          };
          n(1208);
          var xi = function() {
                  var e = Object(d.b)(),
                      t = Object(d.c)((function(e) {
                          return e.reducer.user
                      })),
                      n = Object(a.useState)(null === t || void 0 === t ? void 0 : t.name),
                      i = Object(Ot.a)(n, 2),
                      r = i[0],
                      s = i[1],
                      o = Object(a.useState)(null === t || void 0 === t ? void 0 : t.avatar),
                      c = Object(Ot.a)(o, 2),
                      l = c[0],
                      u = c[1],
                      b = Object(a.useState)(null === t || void 0 === t ? void 0 : t.twitter),
                      h = Object(Ot.a)(b, 2),
                      w = h[0],
                      f = h[1],
                      j = Object(a.useState)(null === t || void 0 === t ? void 0 : t.address),
                      g = Object(Ot.a)(j, 2),
                      O = g[0],
                      v = g[1],
                      y = Object(a.useState)(null === t || void 0 === t ? void 0 : t.win_rate),
                      x = Object(Ot.a)(y, 2),
                      k = x[0],
                      C = x[1],
                      S = Object(a.useState)(null === t || void 0 === t ? void 0 : t.played),
                      E = Object(Ot.a)(S, 2),
                      B = E[0],
                      N = E[1],
                      I = Object(a.useState)(null === t || void 0 === t ? void 0 : t.won),
                      T = Object(Ot.a)(I, 2),
                      M = T[0],
                      D = T[1],
                      R = Object(a.useState)(null === t || void 0 === t ? void 0 : t.ranking),
                      W = Object(Ot.a)(R, 2),
                      G = W[0],
                      F = W[1],
                      Q = document.documentElement.clientWidth,
                      P = (document.documentElement.clientHeight, Object(a.useState)(!1)),
                      U = Object(Ot.a)(P, 2),
                      H = U[0],
                      J = U[1],
                      Y = Object(a.useState)(!1),
                      z = Object(Ot.a)(Y, 2),
                      V = z[0],
                      X = z[1],
                      K = Object(a.useState)(L),
                      q = Object(Ot.a)(K, 2),
                      _ = q[0],
                      $ = q[1],
                      ee = Object(a.useState)(Z),
                      te = Object(Ot.a)(ee, 2),
                      ne = te[0],
                      ae = (te[1], Object(a.useState)(!1)),
                      ie = Object(Ot.a)(ae, 2),
                      re = ie[0],
                      se = (ie[1], Object(a.useState)(!1)),
                      oe = Object(Ot.a)(se, 2),
                      ce = (oe[0], oe[1]);
                  return Object(a.useEffect)((function() {
                      t && (e(dt(t.address)), ce(!0))
                  }), []), Object(a.useEffect)((function() {
                      t && (J(!1), s(t.name), u(t.avatar), f(t.twitter), v(t.address), C(t.win_rate), N(t.played), D(t.won), F(t.ranking), ce(!0))
                  }), [re, t]), Object(kt.jsx)(kt.Fragment, {
                      children: Object(kt.jsxs)("div", {
                          className: "page-profile page",
                          style: {
                              background: "url(".concat(En, ")"),
                              backgroundSize: "cover"
                          },
                          children: [Object(kt.jsxs)("div", {
                              className: "body",
                              children: [Object(kt.jsx)(kn, {
                                  display: Q <= 800
                              }), Object(kt.jsx)(xn, {
                                  display: Q > 800
                              }), Object(kt.jsxs)("div", {
                                  className: "profile-container",
                                  children: [Object(kt.jsx)("p", {
                                      className: "h1 profile-text",
                                      children: "User Information"
                                  }), Object(kt.jsx)("p", {
                                      className: "h5 profile-text",
                                      children: "Modify your information so that if people enjoyed a game with you, they can search for your lobbies using your name. Twitter handle is required to participate in all airdrop and similar events. Unappropriate avatars will be punished with temporary or permanant bans!"
                                  }), Object(kt.jsx)("div", {
                                      className: "userInfoRow",
                                      children: Object(kt.jsx)("div", {
                                          className: "row-banner",
                                          children: Object(kt.jsxs)("div", {
                                              children: ["Your account info: ", t ? t.name : "", Object(kt.jsx)("img", {
                                                  className: "avatar",
                                                  src: null === t || void 0 === t ? void 0 : t.avatar,
                                                  height: 60
                                              })]
                                          })
                                      })
                                  }), Object(kt.jsxs)("div", {
                                      className: "userInfoRow submitRow",
                                      children: [Object(kt.jsxs)("div", {
                                          className: "profile-form-row",
                                          children: [Object(kt.jsx)(ln, {
                                              onSubmit: function() {},
                                              onChange: function(e) {
                                                  s(e)
                                              },
                                              purple: !0,
                                              alignLabel: !0,
                                              label: "Username:",
                                              value: r,
                                              placeholder: r || "Username"
                                          }), Object(kt.jsx)(ln, {
                                              onSubmit: function() {},
                                              onChange: function(e) {
                                                  f(e)
                                              },
                                              purple: !0,
                                              alignLabel: !0,
                                              label: "Twitter handle:",
                                              value: w,
                                              placeholder: w || "Twitter handle"
                                          }), Object(kt.jsx)(ln, {
                                              onSubmit: function() {},
                                              onChange: function(e) {
                                                  u(e)
                                              },
                                              purple: !0,
                                              alignLabel: !0,
                                              label: "Avatar:",
                                              value: l,
                                              placeholder: l || "Avatar url"
                                          })]
                                      }), Object(kt.jsxs)("div", {
                                          className: "profile-form-row",
                                          children: [Object(kt.jsx)(ln, {
                                              onSubmit: function() {},
                                              onChange: function() {},
                                              blue: !0,
                                              alignLabel: !0,
                                              disabled: !0,
                                              label: "Address:",
                                              value: "",
                                              placeholder: t ? O : "Address"
                                          }), Object(kt.jsx)(ln, {
                                              onSubmit: function() {},
                                              onChange: function() {},
                                              blue: !0,
                                              alignLabel: !0,
                                              disabled: !0,
                                              label: "Win rate:",
                                              value: "",
                                              placeholder: t ? be(k) : "Win rate"
                                          }), Object(kt.jsx)(ln, {
                                              onSubmit: function() {},
                                              onChange: function() {},
                                              blue: !0,
                                              alignLabel: !0,
                                              disabled: !0,
                                              label: "Games played:",
                                              value: "",
                                              placeholder: t ? B : "Games played"
                                          })]
                                      }), Object(kt.jsxs)("div", {
                                          className: "profile-form-row",
                                          children: [Object(kt.jsx)(ln, {
                                              onSubmit: function() {},
                                              onChange: function() {},
                                              green: !0,
                                              alignLabel: !0,
                                              disabled: !0,
                                              label: "Games won:",
                                              value: "",
                                              placeholder: t ? M : "Games won"
                                          }), Object(kt.jsx)(ln, {
                                              onSubmit: function() {},
                                              onChange: function() {},
                                              green: !0,
                                              alignLabel: !0,
                                              disabled: !0,
                                              label: "Rank:",
                                              value: "",
                                              placeholder: t ? G : "Rank"
                                          }), Object(kt.jsx)("div", {
                                              className: "submit-button",
                                              children: Object(kt.jsx)("div", {
                                                  onClick: function() {
                                                      if (!r || "" === r || r.toString().length < 3 || r.toString().length > 24 ? ($("Username should be min 3 letters and max 24 letters long! Please update personal information and try again."), J(!0), 0) : !l || "" === l || l.toString().length < 3 || l.toString().length > 240 ? ($("Avatar url link should be max 240 letters long! Please update personal information and try again."), J(!0), 0) : !w || !(w.toString().length < 3 || w.toString().length > 24) || ($("Twitter handle should be min 3 letters and max 24 letters long! Please update personal information and try again."), J(!0), 0)) {
                                                          var n = Object(p.a)({}, t);
                                                          n.name = r, n.avatar = l, n.twitter = w, e(function(e, t, n, a) {
                                                              return function() {
                                                                  var i = Object(m.a)(A.a.mark((function i(r) {
                                                                      var s, o, c;
                                                                      return A.a.wrap((function(i) {
                                                                          for (;;) switch (i.prev = i.next) {
                                                                              case 0:
                                                                                  return s = {
                                                                                      user: e
                                                                                  }, s = JSON.stringify(s), i.prev = 2, i.next = 6, fetch("/rest/api/user/update", {
                                                                                      method: "POST",
                                                                                      headers: {
                                                                                          Accept: "*/*",
                                                                                          "Content-Type": "application/json",
                                                                                          postData: s
                                                                                      }
                                                                                  });
                                                                              case 6:
                                                                                  return o = i.sent, i.next = 9, o.json();
                                                                              case 9:
                                                                                  c = i.sent, we(o, 0, function() {
                                                                                      var e = Object(m.a)(A.a.mark((function e() {
                                                                                          return A.a.wrap((function(e) {
                                                                                              for (;;) switch (e.prev = e.next) {
                                                                                                  case 0:
                                                                                                      r(it(c));
                                                                                                  case 1:
                                                                                                  case "end":
                                                                                                      return e.stop()
                                                                                              }
                                                                                          }), e)
                                                                                      })));
                                                                                      return function() {
                                                                                          return e.apply(this, arguments)
                                                                                      }
                                                                                  }(), t, n, a), i.next = 17;
                                                                                  break;
                                                                              case 14:
                                                                                  i.prev = 14, i.t0 = i.catch(2), console.warn("Failed updating user..", i.t0);
                                                                              case 17:
                                                                              case "end":
                                                                                  return i.stop()
                                                                          }
                                                                      }), i, null, [
                                                                          [2, 14]
                                                                      ])
                                                                  })));
                                                                  return function(e) {
                                                                      return i.apply(this, arguments)
                                                                  }
                                                              }()
                                                          }(n, (function() {
                                                              X(!0)
                                                          })))
                                                      }
                                                  },
                                                  children: "Submit"
                                              })
                                          })]
                                      })]
                                  })]
                              })]
                          }), Object(kt.jsx)(pn, {
                              header: "Error",
                              text: _,
                              display: H,
                              onCloseModal: function() {
                                  J(!1)
                              }
                          }), Object(kt.jsx)(pn, {
                              header: "Data saved!",
                              text: ne,
                              display: V,
                              onCloseModal: function() {
                                  X(!1), window.location.reload()
                              }
                          }), Object(kt.jsx)(Nn, {
                              display: !0
                          })]
                      })
                  })
              },
              ki = (n(1209), "data:image/png;base64,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");
          n(1210);
          var Ci = function(e) {
              var t = e.data,
                  n = Object(d.c)((function(e) {
                      return e.reducer.user
                  }));

              function i(e) {
                  var t = e.value,
                      i = Object(a.useState)(e.actionEnableLoading),
                      r = Object(Ot.a)(i, 2),
                      s = r[0],
                      o = r[1];
                  return t.address === n.address ? Object(kt.jsxs)("li", {
                      className: "lobby-row-item",
                      children: [Object(kt.jsxs)("div", {
                          className: "lobby-row-item-container",
                          children: [Object(kt.jsx)("div", {
                              className: "lobby-row-item-delete",
                              onClick: function() {
                                  o(!0), e.deleteAction && e.deleteAction(t)
                              },
                              children: s ? Object(kt.jsx)(Gt.a, {
                                  type: "TailSpin",
                                  color: Ht,
                                  height: 28,
                                  width: 28
                              }) : Object(kt.jsx)("p", {
                                  children: "DELETE"
                              })
                          }), t.password ? Object(kt.jsxs)("div", {
                              style: {
                                  display: "flex",
                                  flexDirection: "row"
                              },
                              children: [Object(kt.jsx)(Ft.a, {
                                  style: {
                                      width: "14px",
                                      height: "14px",
                                      margin: "0 11px"
                                  }
                              }), Object(kt.jsx)("p", {
                                  style: {
                                      textAlign: "center"
                                  },
                                  children: t.name
                              })]
                          }) : Object(kt.jsx)("p", {
                              style: {
                                  textAlign: "center"
                              },
                              children: t.name
                          })]
                      }), Object(kt.jsx)("div", {
                          onClick: function() {
                              return e.action ? e.action(t) : null
                          },
                          children: Object(kt.jsx)("p", {
                              children: be(t.win_rate)
                          })
                      }), Object(kt.jsx)("div", {
                          onClick: function() {
                              return e.action ? e.action(t) : null
                          },
                          children: Object(kt.jsxs)("p", {
                              children: [t.price, " $"]
                          })
                      }), Object(kt.jsx)("div", {
                          onClick: function() {
                              return e.action ? e.action(t) : null
                          },
                          children: Object(kt.jsx)("p", {
                              children: t.token.toUpperCase()
                          })
                      })]
                  }) : Object(kt.jsxs)("li", {
                      onClick: function() {
                          return e.action ? e.action(t) : null
                      },
                      className: "lobby-row-item",
                      children: [Object(kt.jsxs)("div", {
                          children: [t.password && Object(kt.jsx)(Ft.a, {
                              style: {
                                  width: "14px",
                                  height: "14px",
                                  position: "relative",
                                  left: "11px"
                              }
                          }), Object(kt.jsx)("p", {
                              style: {
                                  width: "100%",
                                  marginLeft: t.password ? "-13px" : 0,
                                  textAlign: "center"
                              },
                              children: t.name
                          })]
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              children: be(t.win_rate)
                          })
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsxs)("p", {
                              children: [t.price, " $"]
                          })
                      }), Object(kt.jsx)("div", {
                          children: Object(kt.jsx)("p", {
                              children: t.token.toUpperCase()
                          })
                      })]
                  })
              }
              return Object(kt.jsx)(kt.Fragment, {
                  children: Object(kt.jsxs)("div", {
                      className: "table-lobby",
                      children: [Object(kt.jsxs)("div", {
                          className: "lobby-row-header",
                          children: [Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Host"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Win rate"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Prize"
                              })
                          }), Object(kt.jsx)("div", {
                              children: Object(kt.jsx)("p", {
                                  children: "Token"
                              })
                          })]
                      }), Object(kt.jsx)("div", {
                          className: "table-lobby-content",
                          children: Object(kt.jsx)("ul", {
                              children: t && 0 !== t.length ? t.map((function(t, n) {
                                  return Object(kt.jsx)(i, {
                                      value: t,
                                      action: e.action,
                                      actionEnableLoading: !1,
                                      deleteAction: e.deleteAction
                                  }, n)
                              })) : Object(kt.jsx)("li", {
                                  onClick: function() {
                                      return e.action ? e.action() : null
                                  },
                                  className: "row lobby-row",
                                  children: Object(kt.jsx)("div", {
                                      style: {
                                          minWidth: "100%"
                                      },
                                      children: Object(kt.jsx)("p", {
                                          children: "No lobbies found! Either check your filters or create one your self!"
                                      })
                                  })
                              })
                          })
                      })]
                  })
              })
          };
          var Si = function(e) {
              return Object(kt.jsx)(Zt, {
                  onCloseModal: e.onCloseModal,
                  style: {
                      minWidth: "500px"
                  },
                  small: !0,
                  display: e.display,
                  header: e.header ? e.header : "",
                  children: Object(kt.jsx)("div", {
                      className: "modal-row",
                      children: e.textAlign ? Object(kt.jsx)("p", {
                          style: {
                              textAlign: e.textAlign,
                              width: "100%"
                          },
                          className: "p-modal-row",
                          children: e.text
                      }) : Object(kt.jsx)("p", {
                          className: "p-modal-row",
                          children: e.text
                      })
                  })
              })
          };
          var Ei = function() {
              var e = Object(d.b)(),
                  t = Object(d.c)((function(e) {
                      return e.reducer.lobbies
                  })),
                  n = Object(d.c)((function(e) {
                      return e.reducer.user
                  })),
                  i = Object(d.c)((function(e) {
                      return e.reducer.currentGame
                  })),
                  r = Object(a.useState)(!1),
                  s = Object(Ot.a)(r, 2),
                  o = (s[0], s[1], Object(a.useState)(null)),
                  l = Object(Ot.a)(o, 2),
                  u = l[0],
                  p = l[1],
                  h = Object(a.useState)(null),
                  w = Object(Ot.a)(h, 2),
                  f = w[0],
                  j = w[1],
                  g = Object(a.useState)(!1),
                  O = Object(Ot.a)(g, 2),
                  v = O[0],
                  R = O[1],
                  F = "table-header-row filters",
                  L = Object(a.useState)(F),
                  P = Object(Ot.a)(L, 2),
                  U = P[0],
                  H = P[1],
                  Z = Object(a.useState)("toggle-unlocked"),
                  Y = Object(Ot.a)(Z, 2),
                  z = Y[0],
                  V = Y[1],
                  X = Object(a.useState)(!1),
                  K = Object(Ot.a)(X, 2),
                  q = K[0],
                  _ = K[1],
                  $ = Object(a.useState)(!1),
                  ee = Object(Ot.a)($, 2),
                  te = ee[0],
                  ne = ee[1],
                  ae = Object(a.useState)(!1),
                  ie = Object(Ot.a)(ae, 2),
                  re = ie[0],
                  se = ie[1],
                  le = Object(a.useState)(!1),
                  de = Object(Ot.a)(le, 2),
                  ue = de[0],
                  be = de[1],
                  pe = Object(a.useState)(!1),
                  he = Object(Ot.a)(pe, 2),
                  Ae = he[0],
                  me = he[1],
                  fe = Object(a.useState)(Q),
                  je = Object(Ot.a)(fe, 2),
                  ge = je[0],
                  Oe = je[1],
                  ve = Object(a.useState)("Lobby successfully created!"),
                  ye = Object(Ot.a)(ve, 2),
                  xe = ye[0],
                  ke = ye[1],
                  Ce = Object(a.useState)((function() {})),
                  Se = Object(Ot.a)(Ce, 2),
                  Ee = Se[0],
                  Be = Se[1],
                  Ne = Object(d.c)((function(e) {
                      return e.reducer.myGamesUpdates
                  })),
                  Ie = Object(a.useState)(ce(Ne)),
                  Te = Object(Ot.a)(Ie, 2),
                  Me = Te[0],
                  De = Te[1],
                  Re = Object(a.useContext)(on),
                  We = (Re.availableAmount, Re.tokenContextManager),
                  Ge = document.documentElement.clientWidth;
              if (document.documentElement.clientHeight, "" === i.title) {
                  var Fe = 0,
                      Le = window.location.pathname.split("/"),
                      Qe = Le[Le.length - 1];
                  isNaN(parseInt(Qe)) || 0 !== parseInt(Qe) && 1 !== parseInt(Qe) && 2 !== parseInt(Qe) || (Fe = parseInt(Qe)), e(Ve(Fe, !1))
              }
              Object(a.useEffect)((function() {
                  var e = F;
                  v && (e += " show"), H(e)
              }), [v]);
              var Pe = function(t, a) {
                  (null === n || void 0 === n ? void 0 : n.address) && null !== i && e(mt(n.address, i.key, t, a, null, null, (function() {})))
              };
              Object(a.useEffect)((function() {
                  Pe(u, f)
              }), [n]);
              var Ue = function(t) {
                      "createLobby" === t.name ? ne(!0) : "practiceMode" === t.name ? (e(Ve(i.key, !0)), Ze(Ri.GAME)) : "filters" === t.name ? R(!v) : "setFilters" === t.name ? Pe(u, f) : "removeFilters" === t.name ? Pe(null, null) : "toggle-unlocked" === t.name ? (Pe(null, null), V("toggle-unlocked")) : "toggle-locked" === t.name && (Pe(null, null), V("toggle-locked"))
                  },
                  He = Object(c.f)(),
                  Ze = Object(a.useCallback)((function(e) {
                      He.push(e)
                  }), [He]);
              return Object(a.useEffect)((function() {
                  Ne && setTimeout((function() {
                      De(ce(Ne))
                  }), 300)
              }), [Ne]), Object(kt.jsx)(kt.Fragment, {
                  children: Object(kt.jsxs)("div", {
                      className: "page-lobby page",
                      style: {
                          background: "url(".concat(En, ")"),
                          backgroundSize: "cover"
                      },
                      children: [Object(kt.jsxs)("div", {
                          className: "body",
                          children: [Object(kt.jsx)(kn, {
                              display: Ge <= Mi
                          }), Object(kt.jsx)(xn, {
                              display: Ge > Mi
                          }), Object(kt.jsxs)("div", {
                              className: "lobby",
                              style: {
                                  padding: Ge > Di ? "0 12% 0 12%" : "0 4 % 0 4%"
                              },
                              children: [Object(kt.jsxs)("p", {
                                  className: "h1 lobby-title",
                                  style: {
                                      paddingBottom: "30px"
                                  },
                                  children: [Object(kt.jsx)("img", {
                                      src: 0 === i.key ? "data:image/png;base64,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" : (i.key, ki)
                                  }), i.title]
                              }), Object(kt.jsxs)("div", {
                                  className: "h5 lobby-rules",
                                  children: [Object(kt.jsx)("strong", {
                                      children: "Lobby rules:"
                                  }), Object(kt.jsxs)("ol", {
                                      style: {
                                          paddingLeft: "40px"
                                      },
                                      children: [Object(kt.jsx)("li", {
                                          children: "Once the match is live, the lobby can no longer be deleted!"
                                      }), Object(kt.jsx)("li", {
                                          children: "If you don't respond to your match for more than 5 hours you automatically lose!"
                                      }), Object(kt.jsx)("li", {
                                          children: "You can host up to 200 lobbies at a time!"
                                      })]
                                  })]
                              }), Object(kt.jsxs)("div", {
                                  className: "lobby-content",
                                  children: [Object(kt.jsxs)("div", {
                                      className: "table-header",
                                      children: [Object(kt.jsxs)("div", {
                                          className: "table-header-row",
                                          children: [Object(kt.jsxs)("div", {
                                              style: {
                                                  display: "flex",
                                                  alignItems: "center"
                                              },
                                              children: [Object(kt.jsx)("h2", {
                                                  children: "Choose a game!"
                                              }), Object(kt.jsx)(Lt, {
                                                  buttons: [{
                                                      label: "Filters!",
                                                      name: "filters"
                                                  }],
                                                  action: Ue
                                              }), Object(kt.jsx)(Lt, {
                                                  buttons: function(e) {
                                                      var t = [],
                                                          n = {
                                                              label: "Private games",
                                                              icon: "lock",
                                                              name: "toggle-locked",
                                                              className: "button-practice"
                                                          },
                                                          a = {
                                                              label: "Public games",
                                                              icon: "unlock",
                                                              name: "toggle-unlocked",
                                                              className: "button-practice"
                                                          };
                                                      return e === n.name ? t.push(a) : e === a.name && t.push(n), t
                                                  }(z),
                                                  action: Ue
                                              })]
                                          }), Object(kt.jsx)(Lt, {
                                              buttons: function() {
                                                  var e = [],
                                                      t = {
                                                          label: "Create a lobby!",
                                                          name: "createLobby"
                                                      },
                                                      n = {
                                                          label: "Practice",
                                                          name: "practiceMode",
                                                          className: "button-practice"
                                                      };
                                                  return 0 === i.key ? e.push(n) : (1 === i.key || 2 === i.key) && (e.push(t), e.push(n)), e
                                              }(),
                                              action: Ue
                                          })]
                                      }), Object(kt.jsx)("div", {
                                          className: U,
                                          children: Object(kt.jsxs)("div", {
                                              className: "filters-content",
                                              children: [Object(kt.jsxs)("div", {
                                                  children: [Object(kt.jsxs)("div", {
                                                      className: "filter-row",
                                                      children: [Object(kt.jsx)("p", {
                                                          children: "Max deposit"
                                                      }), Object(kt.jsx)(ln, {
                                                          onSubmit: function() {},
                                                          onChange: function(e) {
                                                              p(e)
                                                          },
                                                          marginRight: "0px"
                                                      })]
                                                  }), Object(kt.jsxs)("div", {
                                                      className: "filter-row",
                                                      children: [Object(kt.jsx)("p", {
                                                          children: "Min deposit"
                                                      }), Object(kt.jsx)(ln, {
                                                          onSubmit: function() {},
                                                          onChange: function(e) {
                                                              j(e)
                                                          },
                                                          marginRight: "0px"
                                                      })]
                                                  })]
                                              }), Object(kt.jsx)("div", {
                                                  style: {
                                                      display: "flex",
                                                      alignItems: "flex-end",
                                                      marginLeft: "30px"
                                                  },
                                                  children: Object(kt.jsx)(Lt, {
                                                      buttons: [{
                                                          label: "Set filters",
                                                          name: "setFilters"
                                                      }, {
                                                          label: "Remove",
                                                          name: "removeFilters"
                                                      }],
                                                      action: Ue
                                                  })
                                              })]
                                          })
                                      })]
                                  }), function() {
                                      if (!t || 0 === t.length) return Object(kt.jsx)(kt.Fragment, {});
                                      var a = [];
                                      if ("toggle-all" === z) a = t;
                                      else if (z && "toggle-all" !== z)
                                          for (var r = 0; r < t.length; r++) {
                                              var s = t[r];
                                              "toggle-locked" === z ? s.password && a.push(s) : "toggle-unlocked" === z && (s.password || a.push(s))
                                          }
                                      return Object(kt.jsx)(Ci, {
                                          data: a,
                                          action: function(t) {
                                              oe(t.address, n.address) || (e(Ve(i.key, !1)), e(_e(t)), _(!0))
                                          },
                                          deleteAction: function(t) {
                                              t.address === n.address && e(wt(window.address, (function(n) {
                                                  e(function(e, t, n, a, i, r) {
                                                      return function() {
                                                          var s = Object(m.a)(A.a.mark((function s(o) {
                                                              var c, l, d, u;
                                                              return A.a.wrap((function(s) {
                                                                  for (;;) switch (s.prev = s.next) {
                                                                      case 0:
                                                                          return c = {
                                                                              address: e,
                                                                              lobbyId: n
                                                                          }, c = JSON.stringify(c), s.prev = 2, s.next = 6, fetch("/rest/api/lobby/delete", {
                                                                              method: "POST",
                                                                              headers: {
                                                                                  Accept: "*/*",
                                                                                  "Content-Type": "application/json",
                                                                                  postData: c
                                                                              }
                                                                          });
                                                                      case 6:
                                                                          return l = s.sent, s.next = 9, l.json();
                                                                      case 9:
                                                                          if (d = s.sent, u = function() {
                                                                                  var n = Object(m.a)(A.a.mark((function n() {
                                                                                      return A.a.wrap((function(n) {
                                                                                          for (;;) switch (n.prev = n.next) {
                                                                                              case 0:
                                                                                                  o($e(null)), o(mt(e, t, null, null, null, null));
                                                                                              case 2:
                                                                                              case "end":
                                                                                                  return n.stop()
                                                                                          }
                                                                                      }), n)
                                                                                  })));
                                                                                  return function() {
                                                                                      return n.apply(this, arguments)
                                                                                  }
                                                                              }(), "MATCH ALREADY STARTED" !== d) {
                                                                              s.next = 15;
                                                                              break
                                                                          }
                                                                          return a = null, s.next = 15, u();
                                                                      case 15:
                                                                          we(l, 0, u, a, (function() {
                                                                              return i(d)
                                                                          }), r), s.next = 21;
                                                                          break;
                                                                      case 18:
                                                                          s.prev = 18, s.t0 = s.catch(2), console.warn("Failed deleting lobby..", s.t0);
                                                                      case 21:
                                                                      case "end":
                                                                          return s.stop()
                                                                  }
                                                              }), s, null, [
                                                                  [2, 18]
                                                              ])
                                                          })));
                                                          return function(e) {
                                                              return s.apply(this, arguments)
                                                          }
                                                      }()
                                                  }(t.address, i.key, t.id, (function() {
                                                      ke(C), be(!0), !We.initialStateNotSet() && window.availAmounts && We.refreshBlockchainData().then((function() {}))
                                                  }), (function(e) {
                                                      "MATCH ALREADY STARTED" === e && (Oe(S), se(!0))
                                                  })))
                                              }), (function(e) {
                                                  Oe(y), se(!0)
                                              })))
                                          }
                                      })
                                  }(), Object(kt.jsx)(Un, {})]
                              })]
                          })]
                      }), Object(kt.jsx)(Nn, {
                          display: !0
                      }), function(t) {
                          if (!t || 0 === t.length) return Object(kt.jsx)(kt.Fragment, {});
                          var a = function(e) {
                              return e ? oe(n.address, e) ? "Opponent finished playing one of your games. You have won!" : "Opponent finished playing one of your games. You have lost." : "Opponent joined one of your games.. Wait for him to finish before you can join."
                          };
                          return Object(kt.jsx)(kt.Fragment, {
                              children: t.map((function(t, n) {
                                  return Object(kt.jsx)(pn, {
                                      header: (i = t.winner, i ? "Game finished" : "Player joined lobby"),
                                      text: a(t.winner),
                                      display: Me[n],
                                      onCloseModal: function() {
                                          var a = Object(b.a)(Me);
                                          a[n] = !1, De(a), e(ot(t))
                                      }
                                  }, n);
                                  var i
                              }))
                          })
                      }(Ne), Object(kt.jsx)(ua, {
                          game: i,
                          display: te,
                          preventAutoClose: !0,
                          onCloseModal: function() {
                              ne(!1)
                          },
                          onActionSuccess: function() {
                              be(!0), ke(k)
                          },
                          onActionError: function() {
                              se(!0), Oe(B)
                          },
                          onActionErrorNumbersOnly: function() {
                              se(!0), Oe(I)
                          },
                          onActionErrorMaxLobbiesExceeded: function() {
                              se(!0), Oe(T)
                          },
                          onActionErrorMinPriceNotMet: function() {
                              se(!0), Oe(M)
                          },
                          onActionErrorNoFundsAvailable: function() {
                              se(!0), Oe(D)
                          },
                          onActionErrorBlacklisted: function() {
                              se(!0), Oe(W)
                          },
                          onActionTransactionsAllowed: function() {
                              se(!0), Oe(y)
                          },
                          onActionErrorDefault: function() {
                              se(!0), Oe(E)
                          }
                      }), Object(kt.jsx)(da, {
                          game: i,
                          display: q,
                          onCloseModal: function() {
                              _(!1)
                          },
                          onActionSuccess: function() {
                              Be((function() {
                                  me(!1), Ze(Ri.GAME)
                              }))
                          },
                          onActionError: function() {
                              se(!0), Oe(B)
                          },
                          onActionErrorNumbersOnly: function() {
                              se(!0), Oe(I)
                          },
                          onActionErrorBlacklisted: function() {
                              se(!0), Oe(W)
                          },
                          onActionBlockchainConfirmingMatch: function() {
                              me(!0)
                          },
                          onActionBlockchainRejectedMatch: function() {
                              me(!1)
                          },
                          onActionBlockchainBusy: function() {
                              me(!1), se(!0), Oe(x), Be((function() {
                                  me(!1), setTimeout((function() {
                                      Ze(Ri.MY_GAMES)
                                  }), 3e3)
                              }))
                          },
                          onActionErrorPriceOutOfBounds: function() {
                              se(!0), Oe(G)
                          },
                          onActionTransactionsAllowed: function() {
                              se(!0), Oe(y)
                          },
                          onActionErrorPassword: function() {
                              se(!0), Oe(N)
                          }
                      }), Object(kt.jsx)(Si, {
                          header: "Requesting confirmation",
                          text: J,
                          display: Ae,
                          onSuccessAction: Ee,
                          onCloseModal: function() {
                              me(!1), Be((function() {}))
                          }
                      }), Object(kt.jsx)(pn, {
                          header: "Error",
                          text: ge,
                          display: re,
                          onCloseModal: function() {
                              se(!1)
                          }
                      }), Object(kt.jsx)(pn, {
                          header: "Success",
                          text: xe,
                          display: ue,
                          onSuccessAction: Ee,
                          onCloseModal: function() {
                              be(!1), Be((function() {}))
                          }
                      })]
                  })
              })
          };
          n(1211);

          function Bi(e) {
              var t = Object(a.useContext)(on),
                  n = t.prices,
                  i = t.availableAmounts,
                  r = t.walletAmounts,
                  s = Object(a.useState)("wbnb"),
                  o = Object(Ot.a)(s, 2),
                  c = o[0],
                  l = o[1],
                  d = Object(a.useState)(se(e.value ? e.value : 0, n, c)),
                  u = Object(Ot.a)(d, 2),
                  b = u[0],
                  p = u[1],
                  h = Object(a.useState)(re(e.value ? e.value : 0, n, c)),
                  A = Object(Ot.a)(h, 2),
                  m = (A[0], A[1]);
              Object(a.useEffect)((function() {
                  m(re(e.value ? e.value : 0, n, c))
              }), [n, c]);
              return Object(kt.jsxs)("div", {
                  className: "wallet-action",
                  children: [Object(kt.jsx)("div", {
                      className: "wallet-action-title",
                      children: e.title
                  }), Object(kt.jsxs)("div", {
                      className: "wallet-action-content",
                      children: [Object(kt.jsxs)("div", {
                          className: "wallet-action-inputs",
                          children: [Object(kt.jsx)(ln, {
                              onSubmit: function() {},
                              onChange: function(t) {
                                  (0, e.action)(t), p(se(t, n, c))
                              },
                              whiteBorder: !0,
                              value: e.value,
                              marginRight: "10px",
                              placeholder: "Amount: " + ("Withdraw" === e.title ? re(i[c] ? i[c] : 0, n, c) : "Deposit" === e.title ? re(r[c] ? r[c] : 0, n, c) : void 0) + " $"
                          }), Object(kt.jsx)("p", {
                              style: {
                                  marginLeft: "20px",
                                  display: "block"
                              },
                              children: "USD worth of"
                          }), Object(kt.jsx)(ln, {
                              onSubmit: function() {},
                              onChange: function(t) {
                                  var a = e.tokenAction;
                                  l(t), p(se(e.value, n, t)), a(t)
                              },
                              whiteBorder: !0,
                              select: !0,
                              options: ne,
                              value: c,
                              marginRight: "0px"
                          }), Object(kt.jsxs)("span", {
                              className: "tokenValue",
                              children: ["\u2248 ", parseFloat(b).toFixed(3), " ", c.toUpperCase()]
                          })]
                      }), Object(kt.jsx)(Lt, {
                          buttons: e.buttons,
                          action: e.handleButtonClick
                      }), Object(kt.jsx)("div", {
                          children: "\xa0"
                      })]
                  })]
              })
          }

          function Ni(e) {
              for (var t = Object(a.useContext)(on), n = t.availableAmounts, i = t.prices, r = (t.tokenContextManager, Object(a.useState)("wbnb")), s = Object(Ot.a)(r, 2), o = (s[0], s[1], []), c = 0; c < ne.length; c++) 0 != parseFloat(n[ne[c].value]) && o.push(Object(kt.jsxs)("tr", {
                  children: [Object(kt.jsx)("td", {
                      children: ne[c].label
                  }), Object(kt.jsx)("td", {
                      children: parseFloat(n[ne[c].value]).toFixed(3)
                  }), Object(kt.jsxs)("td", {
                      children: [parseFloat(n[ne[c].value] * i[ne[c].value].usd).toFixed(2), "$"]
                  })]
              }));
              return Object(kt.jsxs)("div", {
                  className: "wallet-action tableWallet",
                  children: [Object(kt.jsx)("div", {
                      className: "wallet-action-title",
                      children: e.title
                  }), Object(kt.jsx)("div", {
                      className: "wallet-action-content",
                      children: Object(kt.jsxs)("table", {
                          children: [Object(kt.jsx)("thead", {
                              children: Object(kt.jsxs)("tr", {
                                  children: [Object(kt.jsx)("td", {
                                      children: "Token"
                                  }), Object(kt.jsx)("td", {
                                      children: "Amount"
                                  }), Object(kt.jsx)("td", {
                                      children: "USD value"
                                  })]
                              })
                          }), Object(kt.jsx)("tbody", {
                              children: o
                          })]
                      })
                  })]
              })
          }
          var Ii = function() {
              var e = Object(d.b)(),
                  t = Object(d.c)((function(e) {
                      return e.reducer.blacklist
                  }));
              Object(a.useEffect)((function() {
                  null == t && e(ht())
              }), [t]);
              var n = Object(a.useContext)(on),
                  i = (n.availableAmounts, n.prices, n.tokenContextManager),
                  r = n.depositText,
                  s = Object(a.useState)("wbnb"),
                  o = Object(Ot.a)(s, 2),
                  c = o[0],
                  l = o[1],
                  u = Object(a.useState)(null),
                  b = Object(Ot.a)(u, 2),
                  p = b[0],
                  h = b[1],
                  A = Object(a.useState)("wbnb"),
                  m = Object(Ot.a)(A, 2),
                  w = m[0],
                  f = m[1],
                  j = Object(a.useState)(null),
                  g = Object(Ot.a)(j, 2),
                  O = g[0],
                  v = g[1],
                  x = Object(a.useState)("wbnb"),
                  k = Object(Ot.a)(x, 2),
                  C = k[0],
                  S = k[1],
                  E = Object(a.useState)(null),
                  B = Object(Ot.a)(E, 2),
                  N = B[0],
                  I = B[1],
                  T = Object(a.useState)(!1),
                  M = Object(Ot.a)(T, 2),
                  D = M[0],
                  R = M[1],
                  G = Object(a.useState)(""),
                  F = Object(Ot.a)(G, 2),
                  L = F[0],
                  Q = F[1],
                  P = Object(a.useState)(!1),
                  U = Object(Ot.a)(P, 2),
                  H = U[0],
                  Z = U[1],
                  J = Object(a.useState)(""),
                  Y = Object(Ot.a)(J, 2),
                  z = Y[0],
                  V = Y[1],
                  X = document.documentElement.clientWidth,
                  K = (document.documentElement.clientHeight, function(e, t) {
                      Q(e), R(t)
                  }),
                  q = function(e, t) {
                      V(e), Z(t)
                  };
              Object(a.useEffect)((function() {
                  window.depositToken = w
              }), [w]), Object(a.useEffect)((function() {
                  window.withdrawToken = C
              }), [C]), Object(a.useEffect)((function() {
                  window.availableAmountsToken = c
              }), [c]);
              var _ = function(n) {
                  if ("disconnect" === n.name) On().then((function(e) {
                      un(!0)
                  }));
                  else if ("deposit" === n.name) i.refreshBlockchainData((function() {
                      e(wt(window.address, (function(e) {
                          i.deposit(O, w, K, q).then((function(e) {}))
                      }), (function(e) {
                          Q(y), R(!0)
                      })))
                  }));
                  else if ("withdraw" === n.name) {
                      if (null != t && t.length > 0)
                          for (var a = 0; a < t.length; a++)
                              if (t[a].address == window.address) return Q(W), void R(!0);
                      i.refreshBlockchainData((function() {
                          i.withdraw(N, C, K, q).then((function(e) {}))
                      }))
                  } else if ("withdraw_all" === n.name) {
                      if (null != t && t.length > 0)
                          for (a = 0; a < t.length; a++)
                              if (t[a].address == window.address) return Q(W), void R(!0);
                      i.refreshBlockchainData((function() {
                          i.withdrawAll(C, K, q).then((function(e) {}))
                      }))
                  }
              };
              return Object(kt.jsx)(kt.Fragment, {
                  children: Object(kt.jsxs)("div", {
                      className: "page-wallet page",
                      style: {
                          background: "url(".concat(En, ")"),
                          backgroundSize: "cover"
                      },
                      children: [Object(kt.jsxs)("div", {
                          className: "body",
                          children: [Object(kt.jsx)(kn, {
                              display: X <= 800
                          }), Object(kt.jsx)(xn, {
                              display: X > 800
                          }), Object(kt.jsxs)("div", {
                              className: "wallet-container",
                              children: [Object(kt.jsx)("p", {
                                  className: "h1 wallet",
                                  children: "Your wallet"
                              }), Object(kt.jsx)("p", {
                                  className: "h5 wallet",
                                  children: "In order to play a game you must deposit your balance here. From this page you can also withdraw once you earned enough or you just don't want to play anymore. This page also shows your tokens and their amounts."
                              }), Object(kt.jsx)(Lt, {
                                  buttons: [{
                                      label: "Disconnect wallet",
                                      name: "disconnect"
                                  }],
                                  action: _
                              }), Object(kt.jsxs)("div", {
                                  className: "wallet-actions",
                                  children: [Object(kt.jsx)(Ni, {
                                      token: c,
                                      tokenAction: l,
                                      handleButtonClick: _,
                                      value: p,
                                      action: h,
                                      title: "Available amounts",
                                      buttons: []
                                  }), Object(kt.jsx)(Bi, {
                                      tokenAction: f,
                                      handleButtonClick: _,
                                      value: O,
                                      action: v,
                                      title: "Deposit",
                                      buttons: [{
                                          label: r,
                                          name: "deposit"
                                      }]
                                  }), Object(kt.jsx)(Bi, {
                                      tokenAction: S,
                                      handleButtonClick: _,
                                      value: N,
                                      action: I,
                                      title: "Withdraw",
                                      buttons: [{
                                          label: "Withdraw",
                                          name: "withdraw"
                                      }, {
                                          label: "Withdraw All",
                                          name: "withdraw_all"
                                      }]
                                  })]
                              })]
                          })]
                      }), Object(kt.jsx)(pn, {
                          header: "Error",
                          text: L,
                          display: D,
                          onCloseModal: function() {
                              return R(!1)
                          }
                      }), Object(kt.jsx)(pn, {
                          header: "Success",
                          text: z,
                          display: H,
                          onCloseModal: function() {
                              return Z(!1)
                          }
                      }), Object(kt.jsx)(Nn, {
                          display: !0
                      })]
                  })
              })
          };
          var Ti = function() {
                  var e = Object(d.b)();
                  return Object(a.useEffect)((function() {
                      var t, n, a, i;
                      e((t = "whitepaper.pdf", function() {
                          var e = Object(m.a)(A.a.mark((function e(r) {
                              var s, o, c, l, d, u;
                              return A.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          return e.prev = 0, s = "/files/" + t, e.next = 4, fetch(s, {
                                              method: "GET",
                                              headers: {
                                                  Accept: "*/*",
                                                  "Content-Type": "application/pdf"
                                              },
                                              responseType: "stream"
                                          });
                                      case 4:
                                          return o = e.sent, c = "", e.next = 8, o.blob();
                                      case 8:
                                          l = e.sent, d = window.URL.createObjectURL(l), (u = document.createElement("a")).href = d, u.setAttribute("download", "WSG - Whitepaper"), document.body.appendChild(u), u.click(), we(o, 0, function() {
                                              var e = Object(m.a)(A.a.mark((function e() {
                                                  return A.a.wrap((function(e) {
                                                      for (;;) switch (e.prev = e.next) {
                                                          case 0:
                                                          case "end":
                                                              return e.stop()
                                                      }
                                                  }), e)
                                              })));
                                              return function() {
                                                  return e.apply(this, arguments)
                                              }
                                          }(), (function() {
                                              return n(c)
                                          }), a, i), e.next = 22;
                                          break;
                                      case 19:
                                          e.prev = 19, e.t0 = e.catch(0), console.warn("Failed obtaining whitepaper pdf..", e.t0);
                                      case 22:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e, null, [
                                  [0, 19]
                              ])
                          })));
                          return function(t) {
                              return e.apply(this, arguments)
                          }
                      }()), (function() {}))
                  }), []), Object(kt.jsx)(kt.Fragment, {})
              },
              Mi = 800,
              Di = 1300,
              Ri = {
                  PLAY: "/",
                  MY_GAMES: "/my-games",
                  REFERRAL: "/referral",
                  LEADERBOARDS: "/leaderboards",
                  TUTORIAL: "/tutorial",
                  PROFILE: "/profile",
                  GAME: "/game",
                  LOBBY: "/lobby",
                  WALLET: "/wallet",
                  FILES: "/files",
                  STAKE: "https://stake.wsg.gg"
              };
          var Wi = function() {
              var e = Object(l.b)({
                      reducer: gt
                  }),
                  t = Object(l.c)(e, Object(l.a)(u.a));
              return Object(kt.jsx)(kt.Fragment, {
                  children: Object(kt.jsx)(d.a, {
                      store: t,
                      children: Object(kt.jsx)(cn, {
                          children: Object(kt.jsx)(o.a, {
                              children: Object(kt.jsxs)(c.c, {
                                  children: [Object(kt.jsx)(c.a, {
                                      path: Ri.PLAY,
                                      exact: !0,
                                      component: la
                                  }), Object(kt.jsx)(c.a, {
                                      path: Ri.MY_GAMES,
                                      component: pa
                                  }), Object(kt.jsx)(c.a, {
                                      path: Ri.REFERRAL,
                                      component: ha
                                  }), Object(kt.jsx)(c.a, {
                                      path: Ri.LEADERBOARDS,
                                      component: $n
                                  }), Object(kt.jsx)(c.a, {
                                      path: Ri.TUTORIAL,
                                      component: ca
                                  }), Object(kt.jsx)(c.a, {
                                      path: Ri.GAME,
                                      component: yi
                                  }), Object(kt.jsx)(c.a, {
                                      path: Ri.PROFILE,
                                      component: xi
                                  }), Object(kt.jsx)(c.a, {
                                      path: Ri.LOBBY,
                                      component: Ei
                                  }), Object(kt.jsx)(c.a, {
                                      path: Ri.WALLET,
                                      component: Ii
                                  }), Object(kt.jsx)(c.a, {
                                      path: Ri.FILES + "/whitepaper.pdf",
                                      component: Ti
                                  })]
                              })
                          })
                      })
                  })
              })
          };
          Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
          var Gi = function(e) {
              e && e instanceof Function && n.e(3).then(n.bind(null, 1219)).then((function(t) {
                  var n = t.getCLS,
                      a = t.getFID,
                      i = t.getFCP,
                      r = t.getLCP,
                      s = t.getTTFB;
                  n(e), a(e), i(e), r(e), s(e)
              }))
          };
          s.a.render(Object(kt.jsx)(i.a.StrictMode, {
              children: Object(kt.jsx)(Wi, {})
          }), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
              e.unregister()
          })).catch((function(e) {
              console.error(e.message)
          })), Gi()
      },
      226: function(e, t, n) {},
      248: function(e, t, n) {},
      382: function(e, t, n) {},
      435: function(e, t, n) {},
      452: function(e, t) {},
      500: function(e, t) {},
      502: function(e, t) {},
      512: function(e, t) {},
      514: function(e, t) {},
      540: function(e, t) {},
      541: function(e, t) {},
      547: function(e, t) {},
      560: function(e, t) {},
      57: function(e, t, n) {},
      615: function(e, t) {},
      617: function(e, t) {},
      748: function(e, t) {},
      774: function(e, t, n) {},
      794: function(e, t, n) {},
      795: function(e, t, n) {},
      796: function(e, t, n) {},
      797: function(e, t, n) {},
      921: function(e, t, n) {},
      922: function(e, t, n) {},
      924: function(e, t, n) {},
      925: function(e, t, n) {},
      926: function(e, t, n) {}
  },
  [
      [1212, 1, 2]
  ]
]);
