/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2021
 * @version 2.2.1
 *
 * Additional enhancements for Select2 widget extension for Yii 2.0.
 *
 * Author: Kartik Visweswaran
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */ var initS2ToggleAll = function () {},
  initS2Order = function () {},
  initS2Loading = function () {},
  initS2Change = function () {},
  initS2Unselect = function () {};
!(function (e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof module && module.exports
    ? (module.exports = e(require("jquery")))
    : e(window.jQuery);
})(function (g) {
  "use strict";
  (initS2ToggleAll = function (l) {
    var s,
      o = g("#" + l),
      t = "#s2-togall-" + l,
      i = g(t);
    o.attr("multiple") &&
      ((s = function () {
        i.off(".krajees2").on("click.krajees2", function () {
          var e,
            t,
            n = i.hasClass("s2-togall-select"),
            s = n ? "selectall" : "unselectall";
          g(
            "#select2-" + l + '-results .select2-results__option[role="option"]'
          ).each(function () {
            (e = g(this)
              .attr("id")
              .match(/^select2-\S*-result-.{4}-(.*)$/)).length &&
              e[1] &&
              ((t = e[1]),
              o
                .find('option:not([disabled])[value="' + t + '"]')
                .prop("selected", !!n));
          }),
            o
              .select2("close")
              .trigger("krajeeselect2:" + s)
              .trigger("change");
        });
      }),
      o
        .on("select2:open.krajees2", function () {
          var e = "input.krajees2 keyup.krajees2";
          i.parent().attr("id") !== "parent-" + t &&
            o.attr("multiple") &&
            (g("#select2-" + l + "-results")
              .closest(".select2-dropdown")
              .prepend(i),
            g("#parent-" + t).remove(),
            g(this)
              .parent()
              .find(".select2-search__field")
              .off(e)
              .on(e, function () {
                setTimeout(function () {
                  var e =
                      "#select2-" +
                      l +
                      '-results .select2-results__option[role="option"]',
                    t = e + '[aria-selected="true"]',
                    n = g(e).length;
                  i.removeClass("s2-togall-select s2-togall-unselect"),
                    0 < n && g(t).length === n
                      ? i.addClass("s2-togall-unselect")
                      : i.addClass("s2-togall-select"),
                    s();
                }, 100);
              }));
        })
        .on("change.krajees2", function () {
          var e, t;
          o.attr("multiple") &&
            ((e = 0),
            (t = o.val() ? o.val().length : 0),
            i.removeClass("s2-togall-select s2-togall-unselect"),
            o.find("option:enabled").each(function () {
              g(this).val().length && e++;
            }),
            0 === e || t !== e
              ? i.addClass("s2-togall-select")
              : i.addClass("s2-togall-unselect"),
            s());
        }),
      s());
  }),
    (initS2Change = function (e) {
      e = e || g(this);
      var t,
        n,
        s = g(".select2-container--open"),
        l = e.parents("[class*='has-']");
      if (l.length)
        for (t = l[0].className.split(/\s+/), n = 0; n < t.length; n++)
          t[n].match("has-") &&
            s.removeClass("has-success has-error has-warning").addClass(t[n]);
    }),
    (initS2Unselect = function () {
      var e = g(this),
        t = e.data("select2");
      t &&
        t.options &&
        (t.options.set("disabled", !0),
        setTimeout(function () {
          t.options.set("disabled", !1), e.trigger("krajeeselect2:cleared");
        }, 1));
    }),
    (initS2Order = function (e, t) {
      var n = g("#" + e);
      t &&
        t.length &&
        (g.each(t, function (e, t) {
          n.find('option[value="' + t + '"]').appendTo(n);
        }),
        n.find("option:not(:selected)").appendTo(n));
    }),
    (initS2Loading = function (e, t) {
      var n = window[t] || {},
        s = n.themeCss,
        l = n.sizeCss,
        o = n.doOrder,
        i = n.doReset,
        a = n.doToggle,
        r = g("#" + e),
        c = g(s),
        u = g(".kv-plugin-loading.loading-" + e),
        d = g(".group-" + e);
      r.off(".krajees2"),
        c.length || r.show(),
        d.length &&
          d.removeClass("kv-input-group-hide").removeClass(".group-" + e),
        u.length && u.remove(),
        l && r.next(s).removeClass(l).addClass(l),
        i &&
          r
            .closest("form")
            .off(".krajees2")
            .on("reset.krajees2", function () {
              setTimeout(function () {
                r.trigger("change").trigger("krajeeselect2:reset");
              }, 100);
            }),
        a && initS2ToggleAll(e),
        o &&
          r.on(
            "select2:select.krajees2 select2:unselect.krajees2",
            function (e) {
              var t = g(e.params.data.element);
              t &&
                t.length &&
                (t.detach(),
                r.append(t).find("option:not(:selected)").appendTo(r));
            }
          ),
        r
          .on("change.krajees2", function () {
            setTimeout(initS2Change, 500);
          })
          .on("select2:unselecting.krajees2", initS2Unselect),
        setTimeout(function () {
          r.attr("multiple") &&
            "rtl" === r.attr("dir") &&
            (r
              .parent()
              .find(".select2-search__field")
              .css({ width: "100%", direction: "rtl" }),
            r.parent().find(".select2-search--inline").css({ float: "none" }));
        }, 100);
    });
});

//grab the input
let neededInput = document.querySelector(".field-profileuserdetail-timezone");

//grab the place where to put text
let placeForTest = document.querySelector("#user-profil-container");
let appendHere = placeForTest.children[1];

//check if it contains class
neededInput.classList.contains("has-success");

if (neededInput.classList.contains("has-success")) {
  //if contains > add p to the place
  appendHere.insertAdjacentHTML(
    "afterEnd",
    '<div id="time-zone-confirm-ingo">If your data is correct only click "Save".</div>'
  );
}

window.onload = function () {
  if (document.querySelector("#login-form")) {
    loginAndRegisterTextChange();
  }

  if (document.querySelector(".field-profileuserdetail-timezone")) {
    setTimeout(() => {
      showTextCond();
    }, 300);
  }
};
