(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Torg~index"],{

/***/ "ENSm":
/*!************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/Torg.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./../opal */ "pQ1d");
/* Generated by Opal 1.1.1 */


(function (Opal) {
  function $rb_gt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs > rhs : lhs['$>'](rhs);
  }

  function $rb_plus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs + rhs : lhs['$+'](rhs);
  }

  function $rb_lt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs < rhs : lhs['$<'](rhs);
  }

  function $rb_minus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs - rhs : lhs['$-'](rhs);
  }

  function $rb_le(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs <= rhs : lhs['$<='](rhs);
  }

  function $rb_divide(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs / rhs : lhs['$/'](rhs);
  }

  var self = Opal.top,
      $nesting = [],
      nil = Opal.nil,
      $$$ = Opal.$$$,
      $$ = Opal.$$,
      $module = Opal.module,
      $klass = Opal.klass,
      $send = Opal.send,
      $truthy = Opal.truthy;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'Torg');
        var $nesting = [self].concat($parent_nesting),
            $Torg_replace_text$1,
            $Torg_torg_check$3,
            $Torg_torg_dice$4,
            $Torg_eval_game_system_specific_command$5,
            $Torg_get_torg_success_level$6,
            $Torg_get_torg_interaction_result_intimidate_test$7,
            $Torg_get_torg_interaction_result_taunt_trick$8,
            $Torg_get_torg_interaction_result_maneuver$9,
            $Torg_get_torg_table_result$10,
            $Torg_get_torg_damage_ords$12,
            $Torg_get_torg_damage_posibility$13,
            $Torg_get_torg_damage$14,
            $Torg_get_torg_bonus_text$15,
            $Torg_getTorgBonusOutputTextWhenModDefined$16,
            $Torg_get_torg_bonus$17;
        self.$$prototype.randomizer = nil;
        Opal.const_set($nesting[0], 'ID', "Torg");
        Opal.const_set($nesting[0], 'NAME', "トーグ");
        Opal.const_set($nesting[0], 'SORT_KEY', "とおく");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・判定　(TGm)\n" + "　TORG専用の判定コマンドです。\n" + "　\"TG(技能基本値)\"でロールします。Rコマンドに読替されます。\n" + "　振り足しを自動で行い、20の出目が出たときには技能無し値も並記します。\n" + "・各種表　\"(表コマンド)(数値)\"で振ります。\n" + "　・一般結果表 成功度出力「RTx or RESULTx」\n" + "　・威圧/威嚇 対人行為結果表「ITx or INTIMIDATEx or TESTx」\n" + "　・挑発/トリック 対人行為結果表「TTx or TAUNTx or TRICKx or CTx」\n" + "　・間合い 対人行為結果表「MTx or MANEUVERx」\n" + "　・オーズ（一般人）ダメージ　「ODTx or ORDSx or ODAMAGEx」\n" + "　・ポシビリティー能力者ダメージ「DTx or DAMAGEx」\n" + "　・ボーナス表「BTx+y or BONUSx+y or TOTALx+y」 xは数値, yは技能基本値\n");
        self.$register_prefix("TG", "1R20", "RT", "Result", "IT", "Intimidate", "Test", "TT", "Taunt", "Trick", "CT", "MT", "Maneuver", "ODT", "ords", "odamage", "DT", "damage", "BT", "bonus", "total");
        Opal.def(self, '$replace_text', $Torg_replace_text$1 = function $$replace_text(string) {
          var _$$,
              self = this;

          string = string.$gsub(/Result/i, "RT");
          string = string.$gsub(/(Intimidate|Test)/i, "IT");
          string = string.$gsub(/(Taunt|Trick|CT)/i, "TT");
          string = string.$gsub(/Maneuver/i, "MT");
          string = string.$gsub(/(ords|odamage)/i, "ODT");
          string = string.$gsub(/damage/i, "DT");
          string = string.$gsub(/(bonus|total)/i, "BT");
          string = $send(string, 'gsub', [/TG(\d+)/i], (_$$ = function $$2() {
            var self = _$$.$$s == null ? this : _$$.$$s;
            return "" + "1R20+" + $$($nesting, 'Regexp').$last_match(1);
          }, _$$.$$s = self, _$$.$$arity = 0, _$$));
          string = string.$gsub(/TG/i, "1R20");
          return string;
        }, $Torg_replace_text$1.$$arity = 1);
        Opal.def(self, '$torg_check', $Torg_torg_check$3 = function $$torg_check(string) {
          var $a,
              $b,
              self = this,
              mod = nil,
              skilled = nil,
              unskilled = nil,
              dice_str = nil,
              sk_bonus = nil,
              output = nil;

          if ($truthy(/(^|\s)S?(1R20([+-]\d+)*)(\s|$)/i['$=~'](string))) {} else {
            return nil;
          }

          ;
          string = $$($nesting, 'Regexp').$last_match(2);
          mod = $$($nesting, 'Regexp').$last_match(3);
          self.$debug(mod);

          if ($truthy(mod)) {
            mod = $$($nesting, 'ArithmeticEvaluator').$eval(mod);
          }

          ;
          self.$debug(mod);
          mod = mod.$to_i();
          $b = self.$torg_dice(), $a = Opal.to_ary($b), skilled = $a[0] == null ? nil : $a[0], unskilled = $a[1] == null ? nil : $a[1], dice_str = $a[2] == null ? nil : $a[2], $b;
          sk_bonus = self.$get_torg_bonus(skilled);

          if ($truthy(mod)) {
            if ($truthy($rb_gt(mod, 0))) {
              output = "" + sk_bonus + "[" + dice_str + "]+" + mod;
            } else {
              output = "" + sk_bonus + "[" + dice_str + "]" + mod;
            }
          } else {
            output = "" + sk_bonus + "[" + dice_str + "]";
          }

          ;
          output = $rb_plus(output, $rb_plus(" ＞ ", $rb_plus(sk_bonus, mod).$to_s()));

          if ($truthy(skilled['$!='](unskilled))) {
            output = $rb_plus(output, $rb_plus($rb_plus("(技能無", $rb_plus(self.$get_torg_bonus(unskilled), mod).$to_s()), ")"));
          }

          ;
          output = "" + "(" + string + ") ＞ " + output;
          return output;
        }, $Torg_torg_check$3.$$arity = 1);
        Opal.def(self, '$torg_dice', $Torg_torg_dice$4 = function $$torg_dice() {
          var $a,
              self = this,
              isSkilledCritical = nil,
              isCritical = nil,
              skilled = nil,
              unskilled = nil,
              dice_str = nil,
              dice_n = nil;
          isSkilledCritical = true;
          isCritical = true;
          skilled = 0;
          unskilled = 0;
          dice_str = "";

          while ($truthy(isSkilledCritical)) {
            dice_n = self.randomizer.$roll_once(20);
            skilled = $rb_plus(skilled, dice_n);

            if ($truthy(isCritical)) {
              unskilled = $rb_plus(unskilled, dice_n);
            }

            ;

            if ($truthy(dice_str['$empty?']())) {} else {
              dice_str = $rb_plus(dice_str, ",");
            }

            ;
            dice_str = $rb_plus(dice_str, dice_n.$to_s());

            if (dice_n['$=='](20)) {
              isCritical = false;
            } else if ($truthy(dice_n['$!='](10))) {
              isSkilledCritical = false;
              isCritical = false;
            }

            ;
          }

          ;
          return [skilled, unskilled, dice_str];
        }, $Torg_torg_dice$4.$$arity = 0);
        Opal.def(self, '$eval_game_system_specific_command', $Torg_eval_game_system_specific_command$5 = function $$eval_game_system_specific_command(command) {
          var $a,
              $b,
              self = this,
              string = nil,
              result = nil,
              output = nil,
              ttype = nil,
              value = nil,
              type = nil,
              num = nil,
              $case = nil;
          string = command.$upcase();
          string = self.$replace_text(string);

          if ($truthy(result = self.$torg_check(string))) {
            return result;
          }

          ;
          output = "1";
          ttype = "";
          value = 0;

          if ($truthy(/([RITMDB]T)(\d+([+\-]\d+)*)/i['$=~'](string))) {} else {
            return nil;
          }

          ;
          type = $$($nesting, 'Regexp').$last_match(1);
          num = $$($nesting, 'Regexp').$last_match(2);
          $case = type;

          if ("RT"['$===']($case)) {
            value = $$($nesting, 'ArithmeticEvaluator').$eval(num);
            output = self.$get_torg_success_level(value);
            ttype = "一般結果";
          } else if ("IT"['$===']($case)) {
            value = $$($nesting, 'ArithmeticEvaluator').$eval(num);
            output = self.$get_torg_interaction_result_intimidate_test(value);
            ttype = "威圧/威嚇";
          } else if ("TT"['$===']($case)) {
            value = $$($nesting, 'ArithmeticEvaluator').$eval(num);
            output = self.$get_torg_interaction_result_taunt_trick(value);
            ttype = "挑発/トリック";
          } else if ("MT"['$===']($case)) {
            value = $$($nesting, 'ArithmeticEvaluator').$eval(num);
            output = self.$get_torg_interaction_result_maneuver(value);
            ttype = "間合い";
          } else if ("DT"['$===']($case)) {
            value = $$($nesting, 'ArithmeticEvaluator').$eval(num);

            if ($truthy(string['$=~'](/ODT/i))) {
              output = self.$get_torg_damage_ords(value);
              ttype = "オーズダメージ";
            } else {
              output = self.$get_torg_damage_posibility(value);
              ttype = "ポシビリティ能力者ダメージ";
            }

            ;
          } else if ("BT"['$===']($case)) {
            $b = self.$get_torg_bonus_text(num), $a = Opal.to_ary($b), output = $a[0] == null ? nil : $a[0], value = $a[1] == null ? nil : $a[1], $b;
            ttype = "ボーナス";
          }

          ;

          if ($truthy(ttype['$!='](""))) {
            output = "" + ttype + "表[" + value + "] ＞ " + output;
          }

          ;
          return output;
        }, $Torg_eval_game_system_specific_command$5.$$arity = 1);
        Opal.def(self, '$get_torg_success_level', $Torg_get_torg_success_level$6 = function $$get_torg_success_level(value) {
          var self = this,
              success_table = nil;
          success_table = [[0, "ぎりぎり"], [1, "ふつう"], [3, "まあよい"], [7, "かなりよい"], [12, "すごい"]];
          return self.$get_torg_table_result(value, success_table);
        }, $Torg_get_torg_success_level$6.$$arity = 1);
        Opal.def(self, '$get_torg_interaction_result_intimidate_test', $Torg_get_torg_interaction_result_intimidate_test$7 = function $$get_torg_interaction_result_intimidate_test(value) {
          var self = this,
              interaction_results_table = nil;
          interaction_results_table = [[0, "技能なし"], [5, "萎縮"], [10, "逆転負け"], [15, "モラル崩壊"], [17, "プレイヤーズコール"]];
          return self.$get_torg_table_result(value, interaction_results_table);
        }, $Torg_get_torg_interaction_result_intimidate_test$7.$$arity = 1);
        Opal.def(self, '$get_torg_interaction_result_taunt_trick', $Torg_get_torg_interaction_result_taunt_trick$8 = function $$get_torg_interaction_result_taunt_trick(value) {
          var self = this,
              interaction_results_table = nil;
          interaction_results_table = [[0, "技能なし"], [5, "萎縮"], [10, "逆転負け"], [15, "高揚／逆転負け"], [17, "プレイヤーズコール"]];
          return self.$get_torg_table_result(value, interaction_results_table);
        }, $Torg_get_torg_interaction_result_taunt_trick$8.$$arity = 1);
        Opal.def(self, '$get_torg_interaction_result_maneuver', $Torg_get_torg_interaction_result_maneuver$9 = function $$get_torg_interaction_result_maneuver(value) {
          var self = this,
              interaction_results_table = nil;
          interaction_results_table = [[0, "技能なし"], [5, "疲労"], [10, "萎縮／疲労"], [15, "逆転負け／疲労"], [17, "プレイヤーズコール"]];
          return self.$get_torg_table_result(value, interaction_results_table);
        }, $Torg_get_torg_interaction_result_maneuver$9.$$arity = 1);
        Opal.def(self, '$get_torg_table_result', $Torg_get_torg_table_result$10 = function $$get_torg_table_result(value, table) {
          var _$$2,
              self = this,
              output = nil;

          output = "1";

          (function () {
            var $brk = Opal.new_brk();

            try {
              return $send(table, 'each', [], (_$$2 = function $$11(item) {
                var self = _$$2.$$s == null ? this : _$$2.$$s,
                    item_index = nil;

                if (item == null) {
                  item = nil;
                }

                ;
                item_index = item['$[]'](0);

                if ($truthy($rb_gt(item_index, value))) {
                  Opal.brk(nil, $brk);
                }

                ;
                return output = item['$[]'](1);
              }, _$$2.$$s = self, _$$2.$$brk = $brk, _$$2.$$arity = 1, _$$2));
            } catch (err) {
              if (err === $brk) {
                return err.$v;
              } else {
                throw err;
              }
            }
          })();

          return output;
        }, $Torg_get_torg_table_result$10.$$arity = 2);
        Opal.def(self, '$get_torg_damage_ords', $Torg_get_torg_damage_ords$12 = function $$get_torg_damage_ords(value) {
          var self = this,
              damage_table_ords = nil;
          damage_table_ords = [[0, "1"], [1, "O1"], [2, "K1"], [3, "O2"], [4, "O3"], [5, "K3"], [6, "転倒 K／O4"], [7, "転倒 K／O5"], [8, "1レベル負傷  K／O7"], [9, "1レベル負傷  K／O9"], [10, "1レベル負傷  K／O10"], [11, "2レベル負傷  K／O11"], [12, "2レベル負傷  KO12"], [13, "3レベル負傷  KO13"], [14, "3レベル負傷  KO14"], [15, "4レベル負傷  KO15"]];
          return self.$get_torg_damage(value, 4, "レベル負傷  KO15", damage_table_ords);
        }, $Torg_get_torg_damage_ords$12.$$arity = 1);
        Opal.def(self, '$get_torg_damage_posibility', $Torg_get_torg_damage_posibility$13 = function $$get_torg_damage_posibility(value) {
          var self = this,
              damage_table_posibility = nil;
          damage_table_posibility = [[0, "1"], [1, "1"], [2, "O1"], [3, "K2"], [4, "2"], [5, "O2"], [6, "転倒 O2"], [7, "転倒 K2"], [8, "転倒 K2"], [9, "1レベル負傷  K3"], [10, "1レベル負傷  K4"], [11, "1レベル負傷  O4"], [12, "1レベル負傷  K5"], [13, "2レベル負傷  O4"], [14, "2レベル負傷  KO5"], [15, "3レベル負傷  KO5"]];
          return self.$get_torg_damage(value, 3, "レベル負傷  KO5", damage_table_posibility);
        }, $Torg_get_torg_damage_posibility$13.$$arity = 1);
        Opal.def(self, '$get_torg_damage', $Torg_get_torg_damage$14 = function $$get_torg_damage(value, maxDamage, maxDamageString, damage_table) {
          var self = this,
              table_max_value = nil,
              over_kill_damage = nil;

          if ($truthy($rb_lt(value, 0))) {
            return "1";
          }

          ;
          table_max_value = $rb_minus(damage_table.$length(), 1);

          if ($truthy($rb_le(value, table_max_value))) {
            return self.$get_torg_table_result(value, damage_table);
          }

          ;
          over_kill_damage = $rb_divide($rb_minus(value, table_max_value), 2).$to_i();
          return $rb_plus($rb_plus("", $rb_plus(over_kill_damage, maxDamage).$to_s()), maxDamageString);
        }, $Torg_get_torg_damage$14.$$arity = 4);
        Opal.def(self, '$get_torg_bonus_text', $Torg_get_torg_bonus_text$15 = function $$get_torg_bonus_text(num) {
          var self = this,
              val_arr = nil,
              value = nil,
              mod = nil,
              resultValue = nil,
              output = nil;
          val_arr = num.$split(/\+/);
          value = val_arr.$shift().$to_i();
          mod = $$($nesting, 'ArithmeticEvaluator').$eval(val_arr.$join("+"));
          resultValue = self.$get_torg_bonus(value);
          self.$debug("TORG BT resultValue", resultValue);
          self.$debug("TORG BT mod", mod);

          if (mod['$=='](0)) {
            output = resultValue.$to_s();
          } else {
            output = self.$getTorgBonusOutputTextWhenModDefined(value, resultValue, mod);
            value = "" + value + "+" + mod;
          }

          ;
          return [output, value];
        }, $Torg_get_torg_bonus_text$15.$$arity = 1);
        Opal.def(self, '$getTorgBonusOutputTextWhenModDefined', $Torg_getTorgBonusOutputTextWhenModDefined$16 = function $$getTorgBonusOutputTextWhenModDefined(value, resultValue, mod) {
          var self = this;
          self.$debug("getTorgBonusOutputTextWhenModDefined value, mod", value, mod);

          if ($truthy($rb_gt(mod, 0))) {
            return "" + resultValue + "[" + value + "]+" + mod + " ＞ " + $rb_plus(resultValue, mod);
          } else {
            self.$debug("resultValue", resultValue);
            self.$debug("mod", mod);
            return "" + resultValue + "[" + value + "]" + mod + " ＞ " + $rb_plus(resultValue, mod);
          }

          ;
        }, $Torg_getTorgBonusOutputTextWhenModDefined$16.$$arity = 3);
        return (Opal.def(self, '$get_torg_bonus', $Torg_get_torg_bonus$17 = function $$get_torg_bonus(value) {
          var self = this,
              bonus_table = nil,
              bonus = nil,
              over_value_bonus = nil;
          bonus_table = [[1, -12], [2, -10], [3, -8], [5, -5], [7, -2], [9, -1], [11, 0], [13, 1], [15, 2], [16, 3], [17, 4], [18, 5], [19, 6], [20, 7]];
          bonus = self.$get_torg_table_result(value, bonus_table);

          if ($truthy($rb_gt(value, 20))) {
            over_value_bonus = $rb_plus($rb_divide($rb_minus(value, 21), 5).$to_i(), 1);
            bonus = $rb_plus(bonus, over_value_bonus);
          }

          ;
          return bonus;
        }, $Torg_get_torg_bonus$17.$$arity = 1), nil) && 'get_torg_bonus';
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~Torg~index.js.map