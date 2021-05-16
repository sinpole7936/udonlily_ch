(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Insane~index"],{

/***/ "ukuD":
/*!**************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/Insane.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./../opal */ "pQ1d");
/* Generated by Opal 1.1.1 */


(function (Opal) {
  function $rb_le(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs <= rhs : lhs['$<='](rhs);
  }

  function $rb_ge(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs >= rhs : lhs['$>='](rhs);
  }

  function $rb_plus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs + rhs : lhs['$+'](rhs);
  }

  var self = Opal.top,
      $nesting = [],
      nil = Opal.nil,
      $$$ = Opal.$$$,
      $$ = Opal.$$,
      $module = Opal.module,
      $klass = Opal.klass,
      $send2 = Opal.send2,
      $truthy = Opal.truthy,
      $send = Opal.send,
      $hash2 = Opal.hash2;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'Insane');
        var $nesting = [self].concat($parent_nesting),
            $Insane_initialize$1,
            $Insane_result_2d6$2,
            $Insane_eval_game_system_specific_command$3,
            $Insane_get_badend_table$4,
            $Insane_get_interim_reference_number$7;
        self.$$prototype.randomizer = nil;
        Opal.const_set($nesting[0], 'ID', "Insane");
        Opal.const_set($nesting[0], 'NAME', "インセイン");
        Opal.const_set($nesting[0], 'SORT_KEY', "いんせいん");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・判定（スペシャル／ファンブル／成功／失敗を判定）\n" + "・各種表\n" + "シーン表　ST\n" + "　本当は怖い現代日本シーン表 HJST／狂騒の二〇年代シーン表 MTST\n" + "　暗黒のヴィクトリアシーン表 DVST\n" + "形容表 DT／本体表 BT／部位表 PT\n" + "感情表　　　　　　FT\n" + "職業表　　　　　　JT\n" + "バッドエンド表　　BET\n" + "ランダム分野表　　RCT\n" + "ランダム特技表　　RTTn(n：分野番号、省略可能)\n" + "  1暴力(TVT)、2情動(TET)、3知覚(TPT)\n" + "  4技術(TST)、5知識(TKT)、6怪異(TMT)\n" + "ホラースケープ表\n" + "  会話(CHT)    ／街中(VHT)　　／不意訪問(IHT)\n" + "  廃墟遭遇(RHT)／野外遭遇(MHT)／情報潜在(LHT)\n" + "遭遇表　都市(ECT)／山林(EMT)／海辺(EAT)／反応表　RET\n" + "残業ホラースケープ表(OHT)　 ／残業電話表(OPT)／残業シーン表(OWT)\n" + "社名決定表1(CNT1)／社名決定表2(CNT2)／社名決定表3(CNT3)\n" + "暫定整理番号作成表(IRN)\n" + "・D66ダイスあり\n");
        Opal.def(self, '$initialize', $Insane_initialize$1 = function $$initialize(command) {
          var $iter = $Insane_initialize$1.$$p,
              $yield = $iter || nil,
              self = this;
          if ($iter) $Insane_initialize$1.$$p = null;
          $send2(self, Opal.find_super_dispatcher(self, 'initialize', $Insane_initialize$1, false, true), 'initialize', [command], null);
          self.sort_add_dice = true;
          self.sort_barabara_dice = true;
          return self.d66_sort_type = $$$($$($nesting, 'D66SortType'), 'ASC');
        }, $Insane_initialize$1.$$arity = 1);
        Opal.def(self, '$result_2d6', $Insane_result_2d6$2 = function $$result_2d6(total, dice_total, _dice_list, cmp_op, target) {
          var self = this;

          if (cmp_op['$=='](">=")) {} else {
            return nil;
          }

          ;

          if ($truthy($rb_le(dice_total, 2))) {
            return $$($nesting, 'Result').$fumble(self.$translate("Insane.fumble"));
          } else if ($truthy($rb_ge(dice_total, 12))) {
            return $$($nesting, 'Result').$critical(self.$translate("Insane.special"));
          } else if (target['$==']("?")) {
            return $$($nesting, 'Result').$nothing();
          } else if ($truthy($rb_ge(total, target))) {
            return $$($nesting, 'Result').$success(self.$translate("success"));
          } else {
            return $$($nesting, 'Result').$failure(self.$translate("failure"));
          }

          ;
        }, $Insane_result_2d6$2.$$arity = 5);
        Opal.def(self, '$eval_game_system_specific_command', $Insane_eval_game_system_specific_command$3 = function $$eval_game_system_specific_command(command) {
          var $a,
              $b,
              self = this,
              $case = nil,
              type = nil,
              output = nil,
              total_n = nil,
              $ret_or_1 = nil;
          $case = command;

          if ("BET"['$===']($case)) {
            type = self.$translate("Insane.BET.name");
            $b = self.$get_badend_table(), $a = Opal.to_ary($b), output = $a[0] == null ? nil : $a[0], total_n = $a[1] == null ? nil : $a[1], $b;
          } else if ("IRN"['$===']($case)) {
            type = self.$translate("Insane.IRN.name");
            $b = self.$get_interim_reference_number(), $a = Opal.to_ary($b), output = $a[0] == null ? nil : $a[0], total_n = $a[1] == null ? nil : $a[1], $b;
          } else {
            return function () {
              if ($truthy($ret_or_1 = $$$(self.$class(), 'RTT').$roll_command(self.randomizer, command))) {
                return $ret_or_1;
              } else {
                return self.$roll_tables(command, $$$(self.$class(), 'TABLES'));
              }

              ;
              return nil;
            }();
          }

          ;
          return "" + type + "(" + total_n + ") ＞ " + output;
        }, $Insane_eval_game_system_specific_command$3.$$arity = 1);
        self.$private();
        Opal.def(self, '$get_badend_table', $Insane_get_badend_table$4 = function $$get_badend_table() {
          var self = this,
              table = nil;
          table = [self.$translate("Insane.BET.items.2"), $send(self, 'lambda', [], ($$5 = function (_$$) {
            function $$5() {
              return _$$.apply(this, arguments);
            }

            $$5.toString = function () {
              return _$$.toString();
            };

            return $$5;
          }(function () {
            var self = $$5.$$s == null ? this : $$5.$$s;
            if (self.randomizer == null) self.randomizer = nil;
            return self.$translate("Insane.BET.items.3", $hash2(["skill"], {
              "skill": $$$(self.$class(), 'RTT').$roll_skill(self.randomizer)
            }));
          }), $$5.$$s = self, $$5.$$arity = 0, $$5)), self.$translate("Insane.BET.items.4"), self.$translate("Insane.BET.items.5"), self.$translate("Insane.BET.items.6"), self.$translate("Insane.BET.items.7"), self.$translate("Insane.BET.items.8"), self.$translate("Insane.BET.items.9"), self.$translate("Insane.BET.items.10"), $send(self, 'lambda', [], ($$6 = function (_$$2) {
            function $$6() {
              return _$$2.apply(this, arguments);
            }

            $$6.toString = function () {
              return _$$2.toString();
            };

            return $$6;
          }(function () {
            var self = $$6.$$s == null ? this : $$6.$$s;
            if (self.randomizer == null) self.randomizer = nil;
            return self.$translate("Insane.BET.items.11", $hash2(["skill"], {
              "skill": $$$(self.$class(), 'RTT').$roll_skill(self.randomizer)
            }));
          }), $$6.$$s = self, $$6.$$arity = 0, $$6)), self.$translate("Insane.BET.items.12")];
          return self.$get_table_by_2d6(table);
        }, $Insane_get_badend_table$4.$$arity = 0);
        Opal.def(self, '$get_interim_reference_number', $Insane_get_interim_reference_number$7 = function $$get_interim_reference_number() {
          var _$$3,
              self = this,
              table = nil,
              number = nil,
              total_n = nil,
              counts = nil,
              output = nil;

          table = [[11, "1"], [12, "2"], [13, "3"], [14, "4"], [15, "5"], [16, "6"], [22, "G"], [23, "I"], [24, "J"], [25, "K"], [26, "O"], [33, "P"], [34, "Q"], [35, "S"], [36, "T"], [44, "U"], [45, "V"], [46, "X"], [55, "Y"], [56, "Z"], [66, "-"]];
          number = self.randomizer.$roll_once(6);
          total_n = number.$to_s();
          counts = 3;

          if ($truthy($rb_le(number, 4))) {
            counts = $rb_plus(number, 5);
          } else if (number['$=='](5)) {
            counts = 4;
          }

          ;
          output = "";
          $send(counts, 'times', [], (_$$3 = function $$8() {
            var self = _$$3.$$s == null ? this : _$$3.$$s,
                $a,
                $b,
                character = nil;
            $b = self.$get_table_by_d66_swap(table), $a = Opal.to_ary($b), character = $a[0] == null ? nil : $a[0], number = $a[1] == null ? nil : $a[1], $b;
            output = $rb_plus(output, character);
            return total_n = $rb_plus(total_n, "" + "," + number);
          }, _$$3.$$s = self, _$$3.$$arity = 0, _$$3));
          return [output, total_n];
        }, $Insane_get_interim_reference_number$7.$$arity = 0);

        (function (self, $parent_nesting) {
          var $nesting = [self].concat($parent_nesting),
              $translate_tables$9,
              $translate_rtt$10;
          self.$private();
          Opal.def(self, '$translate_tables', $translate_tables$9 = function $$translate_tables(locale) {
            var self = this;
            return $hash2(["ST", "HJST", "MTST", "DVST", "DT", "BT", "PT", "FT", "JT", "CHT", "VHT", "IHT", "RHT", "MHT", "LHT", "ECT", "EMT", "EAT", "OHT", "OPT", "OWT", "CNT1", "CNT2", "CNT3", "RET"], {
              "ST": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.ST", locale),
              "HJST": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.HJST", locale),
              "MTST": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.MTST", locale),
              "DVST": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.DVST", locale),
              "DT": $$$($$($nesting, 'DiceTable'), 'D66Table').$from_i18n("Insane.table.DT", locale),
              "BT": $$$($$($nesting, 'DiceTable'), 'D66Table').$from_i18n("Insane.table.BT", locale),
              "PT": $$$($$($nesting, 'DiceTable'), 'D66Table').$from_i18n("Insane.table.PT", locale),
              "FT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.FT", locale),
              "JT": $$$($$($nesting, 'DiceTable'), 'D66Table').$from_i18n("Insane.table.JT", locale),
              "CHT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.CHT", locale),
              "VHT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.VHT", locale),
              "IHT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.IHT", locale),
              "RHT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.RHT", locale),
              "MHT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.MHT", locale),
              "LHT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.LHT", locale),
              "ECT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.ECT", locale),
              "EMT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.EMT", locale),
              "EAT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.EAT", locale),
              "OHT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.OHT", locale),
              "OPT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.OPT", locale),
              "OWT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.OWT", locale),
              "CNT1": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.CNT1", locale),
              "CNT2": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.CNT2", locale),
              "CNT3": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.CNT3", locale),
              "RET": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Insane.table.RET", locale)
            });
          }, $translate_tables$9.$$arity = 1);
          return (Opal.def(self, '$translate_rtt', $translate_rtt$10 = function $$translate_rtt(locale) {
            var self = this;
            return $$$($$($nesting, 'DiceTable'), 'SaiFicSkillTable').$from_i18n("Insane.RTT", locale, $hash2(["rttn"], {
              "rttn": ["TVT", "TET", "TPT", "TST", "TKT", "TMT"]
            }));
          }, $translate_rtt$10.$$arity = 1), nil) && 'translate_rtt';
        })(Opal.get_singleton_class(self), $nesting);

        Opal.const_set($nesting[0], 'TABLES', self.$translate_tables("ja_jp"));
        Opal.const_set($nesting[0], 'RTT', self.$translate_rtt("ja_jp"));
        return self.$register_prefix("BET", "IRN", $$($nesting, 'RTT').$prefixes(), $$($nesting, 'TABLES').$keys());
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~Insane~index.js.map