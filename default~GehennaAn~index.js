(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~GehennaAn~index"],{

/***/ "mn6k":
/*!*****************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/GehennaAn.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./../opal */ "pQ1d");
/* Generated by Opal 1.1.1 */


(function (Opal) {
  function $rb_lt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs < rhs : lhs['$<'](rhs);
  }

  function $rb_ge(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs >= rhs : lhs['$>='](rhs);
  }

  function $rb_plus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs + rhs : lhs['$+'](rhs);
  }

  function $rb_gt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs > rhs : lhs['$>'](rhs);
  }

  function $rb_times(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs * rhs : lhs['$*'](rhs);
  }

  function $rb_minus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs - rhs : lhs['$-'](rhs);
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
      $send2 = Opal.send2,
      $send = Opal.send,
      $truthy = Opal.truthy;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'GehennaAn');
        var $nesting = [self].concat($parent_nesting),
            $GehennaAn_initialize$1,
            $GehennaAn_replace_text$2,
            $GehennaAn_eval_game_system_specific_command$7,
            $GehennaAn_getAnastasisBonusText$9,
            $GehennaAn_getTougiBonus$10;
        self.$$prototype.randomizer = nil;
        Opal.const_set($nesting[0], 'ID', "GehennaAn");
        Opal.const_set($nesting[0], 'NAME', "ゲヘナ・アナスタシス");
        Opal.const_set($nesting[0], 'SORT_KEY', "けへなあなすたしす");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "戦闘判定と通常判定に対応。幸運の助け、連撃増加値(戦闘判定)、闘技チット(戦闘判定)を自動表示します。\n" + "・戦闘判定　(nGAt+m)\n" + "　ダイス数n、目標値t、修正値mで戦闘判定を行います。\n" + "　幸運の助け、連撃増加値、闘技チットを自動処理します。\n" + "・通常判定　(nGt+m)\n" + "　ダイス数n、目標値t、修正値mで通常判定を行います。\n" + "　幸運の助けを自動処理します。(連撃増加値、闘技チットを表示抑制します)\n");
        self.$register_prefix("\\d+G\\d+", "\\d+GA\\d+", "\\d+R6");
        Opal.def(self, '$initialize', $GehennaAn_initialize$1 = function $$initialize(command) {
          var $iter = $GehennaAn_initialize$1.$$p,
              $yield = $iter || nil,
              self = this;
          if ($iter) $GehennaAn_initialize$1.$$p = null;
          $send2(self, Opal.find_super_dispatcher(self, 'initialize', $GehennaAn_initialize$1, false, true), 'initialize', [command], null);
          self.sort_add_dice = true;
          return self.sort_barabara_dice = true;
        }, $GehennaAn_initialize$1.$$arity = 1);
        self.$private();
        Opal.def(self, '$replace_text', $GehennaAn_replace_text$2 = function $$replace_text(string) {
          var _$$,
              _$$2,
              _$$3,
              _$$4,
              self = this;

          return $send($send($send($send(string, 'gsub', [/(\d+)GA(\d+)([+\-][+\-\d]+)/], (_$$ = function $$3() {
            var self = _$$.$$s == null ? this : _$$.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R6" + $$($nesting, 'Regexp').$last_match(3) + ">=" + $$($nesting, 'Regexp').$last_match(2) + "[1]";
          }, _$$.$$s = self, _$$.$$arity = 0, _$$)), 'gsub', [/(\d+)GA(\d+)/], (_$$2 = function $$4() {
            var self = _$$2.$$s == null ? this : _$$2.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R6>=" + $$($nesting, 'Regexp').$last_match(2) + "[1]";
          }, _$$2.$$s = self, _$$2.$$arity = 0, _$$2)), 'gsub', [/(\d+)G(\d+)([+\-][+\-\d]+)/], (_$$3 = function $$5() {
            var self = _$$3.$$s == null ? this : _$$3.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R6" + $$($nesting, 'Regexp').$last_match(3) + ">=" + $$($nesting, 'Regexp').$last_match(2) + "[0]";
          }, _$$3.$$s = self, _$$3.$$arity = 0, _$$3)), 'gsub', [/(\d+)G(\d+)/], (_$$4 = function $$6() {
            var self = _$$4.$$s == null ? this : _$$4.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R6>=" + $$($nesting, 'Regexp').$last_match(2) + "[0]";
          }, _$$4.$$s = self, _$$4.$$arity = 0, _$$4));
        }, $GehennaAn_replace_text$2.$$arity = 1);
        self.$public();
        Opal.def(self, '$eval_game_system_specific_command', $GehennaAn_eval_game_system_specific_command$7 = function $$eval_game_system_specific_command(string) {
          var _$$5,
              self = this,
              diceCount = nil,
              modText = nil,
              diff = nil,
              mode = nil,
              mod = nil,
              diceArray = nil,
              diceValue = nil,
              diceText = nil,
              dice_1st = nil,
              isLuck = nil,
              $ret_or_2 = nil,
              output = nil,
              success = nil,
              failed = nil;

          string = self.$replace_text(string);

          if ($truthy(/(^|\s)S?((\d+)[rR]6([+\-\d]+)?([>=]+(\d+))(\[(\d)\]))(\s|$)/i['$=~'](string))) {} else {
            return nil;
          }

          ;
          string = $$($nesting, 'Regexp').$last_match(2);
          diceCount = $$($nesting, 'Regexp').$last_match(3).$to_i();
          modText = $$($nesting, 'Regexp').$last_match(4);
          diff = $$($nesting, 'Regexp').$last_match(6).$to_i();
          mode = $$($nesting, 'Regexp').$last_match(8).$to_i();
          mod = $$($nesting, 'ArithmeticEvaluator').$eval(modText);
          diceArray = self.randomizer.$roll_barabara(diceCount, 6).$sort();
          diceValue = diceArray.$sum();
          diceText = diceArray.$join(",");
          dice_1st = "";
          isLuck = true;
          diceValue = 0;
          $send(diceArray, 'each', [], (_$$5 = function $$8(i) {
            var self = _$$5.$$s == null ? this : _$$5.$$s,
                $ret_or_1 = nil;

            if (i == null) {
              i = nil;
            }

            ;

            if ($truthy(dice_1st['$!='](""))) {
              if ($truthy(function () {
                if ($truthy($ret_or_1 = dice_1st['$!='](i))) {
                  return $ret_or_1;
                } else {
                  return $rb_lt(i, diff);
                }

                ;
                return nil;
              }())) {
                isLuck = false;
              }
            } else {
              dice_1st = i;
            }

            ;

            if ($truthy($rb_ge(i, diff))) {
              return diceValue = $rb_plus(diceValue, 1);
            } else {
              return nil;
            }

            ;
          }, _$$5.$$s = self, _$$5.$$arity = 1, _$$5));

          if ($truthy(function () {
            if ($truthy($ret_or_2 = isLuck)) {
              return $rb_gt(diceCount, 1);
            } else {
              return $ret_or_2;
            }

            ;
            return nil;
          }())) {
            diceValue = $rb_times(diceValue, 2);
          }

          ;
          output = "" + diceValue + "[" + diceText + "]";
          success = $rb_plus(diceValue, mod);

          if ($truthy($rb_lt(success, 0))) {
            success = 0;
          }

          ;
          failed = $rb_minus(diceCount, diceValue);

          if ($truthy($rb_lt(failed, 0))) {
            failed = 0;
          }

          ;

          if ($truthy($rb_gt(mod, 0))) {
            output = $rb_plus(output, "" + "+" + mod);
          } else if ($truthy($rb_lt(mod, 0))) {
            output = $rb_plus(output, mod.$to_s());
          }

          ;

          if ($truthy(/[^\d\[\]]+/['$=~'](output))) {
            output = "" + "(" + string + ") ＞ " + output + " ＞ 成功" + success + "、失敗" + failed;
          } else {
            output = "" + "(" + string + ") ＞ " + output;
          }

          ;
          output = $rb_plus(output, self.$getAnastasisBonusText(mode, success));
          return output;
        }, $GehennaAn_eval_game_system_specific_command$7.$$arity = 1);
        self.$private();
        Opal.def(self, '$getAnastasisBonusText', $GehennaAn_getAnastasisBonusText$9 = function $$getAnastasisBonusText(mode, success) {
          var self = this,
              ma_bonus = nil,
              bonus_str = nil;

          if (mode['$=='](0)) {
            return "";
          }

          ;
          ma_bonus = $rb_divide($rb_minus(success, 1), 2).$to_i();

          if ($truthy($rb_gt(ma_bonus, 7))) {
            ma_bonus = 7;
          }

          ;
          bonus_str = "";

          if ($truthy($rb_gt(ma_bonus, 0))) {
            bonus_str = $rb_plus(bonus_str, "" + "連撃[+" + ma_bonus + "]/");
          }

          ;
          bonus_str = $rb_plus(bonus_str, "" + "闘技[" + self.$getTougiBonus(success) + "]");
          return "" + " ＞ " + bonus_str;
        }, $GehennaAn_getAnastasisBonusText$9.$$arity = 2);
        return (Opal.def(self, '$getTougiBonus', $GehennaAn_getTougiBonus$10 = function $$getTougiBonus(success) {
          var self = this,
              table = nil;
          table = [[6, "1"], [13, "2"], [18, "3"], [22, "4"], [99, "5"]];
          return self.$get_table_by_number(success, table);
        }, $GehennaAn_getTougiBonus$10.$$arity = 1), nil) && 'getTougiBonus';
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~GehennaAn~index.js.map