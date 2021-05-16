(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~DarkBlaze~index"],{

/***/ "A0Fm":
/*!*****************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/DarkBlaze.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./../opal */ "pQ1d");
/* Generated by Opal 1.1.1 */


Opal.modules["bcdice/normalize"] = function (Opal) {
  var self = Opal.top,
      $nesting = [],
      nil = Opal.nil,
      $$$ = Opal.$$$,
      $$ = Opal.$$,
      $module = Opal.module;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'Normalize');
      var $nesting = [self].concat($parent_nesting),
          $Normalize_comparison_operator$1,
          $Normalize_target_number$2;
      self.$module_function();
      Opal.def(self, '$comparison_operator', $Normalize_comparison_operator$1 = function $$comparison_operator(op) {
        var self = this,
            $case = nil;
        return function () {
          $case = op;

          if (/<=|=</['$===']($case)) {
            return "<=";
          } else if (/>=|=>/['$===']($case)) {
            return ">=";
          } else if (/<>|!=|=!/['$===']($case)) {
            return "!=";
          } else if (/</['$===']($case)) {
            return "<";
          } else if (/>/['$===']($case)) {
            return ">";
          } else if (/=/['$===']($case)) {
            return "==";
          } else {
            return nil;
          }
        }();
      }, $Normalize_comparison_operator$1.$$arity = 1);
      Opal.def(self, '$target_number', $Normalize_target_number$2 = function $$target_number(val) {
        var self = this;

        if (val['$==']("?")) {
          return val;
        } else {
          return val.$to_i();
        }
      }, $Normalize_target_number$2.$$arity = 1);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
};
/* Generated by Opal 1.1.1 */


Opal.modules["bcdice/format"] = function (Opal) {
  function $rb_gt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs > rhs : lhs['$>'](rhs);
  }

  var self = Opal.top,
      $nesting = [],
      nil = Opal.nil,
      $$$ = Opal.$$$,
      $$ = Opal.$$,
      $module = Opal.module,
      $truthy = Opal.truthy;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'Format');
      var $nesting = [self].concat($parent_nesting),
          $Format_comparison_operator$1,
          $Format_modifier$2;
      self.$module_function();
      Opal.def(self, '$comparison_operator', $Format_comparison_operator$1 = function $$comparison_operator(op) {
        var self = this,
            $case = nil;
        return function () {
          $case = op;

          if ("=="['$===']($case)) {
            return "=";
          } else if ("!="['$===']($case)) {
            return "<>";
          } else if ($$($nesting, 'Symbol')['$===']($case)) {
            return op.$to_s();
          } else {
            return nil;
          }
        }();
      }, $Format_comparison_operator$1.$$arity = 1);
      Opal.def(self, '$modifier', $Format_modifier$2 = function $$modifier(number) {
        var self = this;

        if ($truthy(number['$nil?']())) {
          return nil;
        } else if (number['$=='](0)) {
          return "";
        } else if ($truthy($rb_gt(number, 0))) {
          return "" + "+" + number;
        } else {
          return number.$to_s();
        }
      }, $Format_modifier$2.$$arity = 1);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
};
/* Generated by Opal 1.1.1 */


(function (Opal) {
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

  function $rb_ge(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs >= rhs : lhs['$>='](rhs);
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
      $truthy = Opal.truthy,
      $send = Opal.send;
  self.$require("bcdice/normalize");
  self.$require("bcdice/format");
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'DarkBlaze');
        var $nesting = [self].concat($parent_nesting),
            $DarkBlaze_replace_text$1,
            $DarkBlaze_check_roll$7,
            $DarkBlaze_get_dice$8,
            $DarkBlaze_eval_game_system_specific_command$10,
            $DarkBlaze_get_horidasibukuro_table$11;
        self.$$prototype.randomizer = nil;
        Opal.const_set($nesting[0], 'ID', "DarkBlaze");
        Opal.const_set($nesting[0], 'NAME', "ダークブレイズ");
        Opal.const_set($nesting[0], 'SORT_KEY', "たあくふれいす");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・行為判定　(DBxy#n)\n" + "　行為判定専用のコマンドです。\n" + "　\"DB(能力)(技能)#(修正)\"でロールします。Rコマンド(3R6+n[x,y]>=m mは難易度)に読替をします。\n" + "　クリティカルとファンブルも自動で処理されます。\n" + "　DB@x@y#m と DBx,y#m にも対応しました。\n" + "　例）DB33　　　DB32#-1　　　DB@3@1#1　　　DB3,2　　　DB23#1>=4　　　3R6+1[3,3]>=4\n" + "\n" + "・掘り出し袋表　(BTx)\n" + "　\"BT(ダイス数)\"で掘り出し袋表を自動で振り、結果を表示します。\n" + "　例）BT1　　　BT2　　　BT[1...3]\n");
        self.$register_prefix("DB", "BT", "3R6");
        Opal.def(self, '$replace_text', $DarkBlaze_replace_text$1 = function $$replace_text(string) {
          var _$$,
              _$$2,
              _$$3,
              _$$4,
              _$$5,
              self = this;

          if ($truthy(string['$=~'](/DB/i))) {} else {
            return string;
          }

          ;
          string = $send(string, 'gsub', [/DB(\d),(\d)/], (_$$ = function $$2() {
            var self = _$$.$$s == null ? this : _$$.$$s;
            return "" + "DB" + $$($nesting, 'Regexp').$last_match(1) + $$($nesting, 'Regexp').$last_match(2);
          }, _$$.$$s = self, _$$.$$arity = 0, _$$));
          string = $send(string, 'gsub', [/DB@(\d)@(\d)/], (_$$2 = function $$3() {
            var self = _$$2.$$s == null ? this : _$$2.$$s;
            return "" + "DB" + $$($nesting, 'Regexp').$last_match(1) + $$($nesting, 'Regexp').$last_match(2);
          }, _$$2.$$s = self, _$$2.$$arity = 0, _$$2));
          string = $send(string, 'gsub', [/DB(\d)(\d)(#(\d[+\-\d]*))/], (_$$3 = function $$4() {
            var self = _$$3.$$s == null ? this : _$$3.$$s;
            return "" + "3R6+" + $$($nesting, 'Regexp').$last_match(4) + "[" + $$($nesting, 'Regexp').$last_match(1) + "," + $$($nesting, 'Regexp').$last_match(2) + "]";
          }, _$$3.$$s = self, _$$3.$$arity = 0, _$$3));
          string = $send(string, 'gsub', [/DB(\d)(\d)(#([+\-\d]*))/], (_$$4 = function $$5() {
            var self = _$$4.$$s == null ? this : _$$4.$$s;
            return "" + "3R6" + $$($nesting, 'Regexp').$last_match(4) + "[" + $$($nesting, 'Regexp').$last_match(1) + "," + $$($nesting, 'Regexp').$last_match(2) + "]";
          }, _$$4.$$s = self, _$$4.$$arity = 0, _$$4));
          string = $send(string, 'gsub', [/DB(\d)(\d)/], (_$$5 = function $$6() {
            var self = _$$5.$$s == null ? this : _$$5.$$s;
            return "" + "3R6[" + $$($nesting, 'Regexp').$last_match(1) + "," + $$($nesting, 'Regexp').$last_match(2) + "]";
          }, _$$5.$$s = self, _$$5.$$arity = 0, _$$5));
          return string;
        }, $DarkBlaze_replace_text$1.$$arity = 1);
        Opal.def(self, '$check_roll', $DarkBlaze_check_roll$7 = function $$check_roll(string) {
          var $a,
              $b,
              self = this,
              m = nil,
              mod = nil,
              abl = nil,
              skl = nil,
              signOfInequality = nil,
              diff = nil,
              cmp_op = nil,
              total = nil,
              out_str = nil,
              output = nil;
          string = self.$replace_text(string);

          if ($truthy(m = /(^|\s)S?(3[rR]6([+\-\d]+)?(\[(\d+),(\d+)\])(([>=]+)(\d+))?)(\s|$)/i.$match(string))) {} else {
            return nil;
          }

          ;
          string = m['$[]'](2);
          mod = 0;
          abl = 1;
          skl = 1;
          signOfInequality = "";
          diff = 0;

          if ($truthy(m['$[]'](3))) {
            mod = $$($nesting, 'ArithmeticEvaluator').$eval(m['$[]'](3));
          }

          ;

          if ($truthy(m['$[]'](4))) {
            abl = m['$[]'](5).$to_i();
            skl = m['$[]'](6).$to_i();
          }

          ;

          if ($truthy(m['$[]'](7))) {
            cmp_op = $$($nesting, 'Normalize').$comparison_operator(m['$[]'](8));
            signOfInequality = $$($nesting, 'Format').$comparison_operator(cmp_op);
            diff = m['$[]'](9).$to_i();
          }

          ;
          $b = self.$get_dice(mod, abl, skl), $a = Opal.to_ary($b), total = $a[0] == null ? nil : $a[0], out_str = $a[1] == null ? nil : $a[1], $b;
          output = "" + "(" + string + ") ＞ " + out_str;

          if ($truthy(signOfInequality['$!='](""))) {
            cmp_op = $$($nesting, 'Normalize').$comparison_operator(signOfInequality);
            output = $rb_plus(output, function () {
              if ($truthy(total.$send(cmp_op, diff))) {
                return " ＞ 成功";
              } else {
                return " ＞ 失敗";
              }

              ;
              return nil;
            }());
          }

          ;
          return output;
        }, $DarkBlaze_check_roll$7.$$arity = 1);
        Opal.def(self, '$get_dice', $DarkBlaze_get_dice$8 = function $$get_dice(mod, abl, skl) {
          var _$$6,
              self = this,
              total = nil,
              crit = nil,
              fumble = nil,
              dice_c = nil,
              dice_arr = nil,
              dice_str = nil,
              resultText = nil,
              output = nil;

          total = 0;
          crit = 0;
          fumble = 0;
          dice_c = $rb_plus(3, mod.$abs());
          dice_arr = self.randomizer.$roll_barabara(dice_c, 6).$sort();
          dice_str = dice_arr.$join(",");
          $send(3, 'times', [], (_$$6 = function $$9(i) {
            var self = _$$6.$$s == null ? this : _$$6.$$s,
                ch = nil;

            if (i == null) {
              i = nil;
            }

            ;
            ch = dice_arr['$[]'](i);

            if ($truthy($rb_lt(mod, 0))) {
              ch = dice_arr['$[]']($rb_minus($rb_minus(dice_c, i), 1));
            }

            ;

            if ($truthy($rb_le(ch, abl))) {
              total = $rb_plus(total, 1);
            }

            ;

            if ($truthy($rb_le(ch, skl))) {
              total = $rb_plus(total, 1);
            }

            ;

            if ($truthy($rb_le(ch, 2))) {
              crit = $rb_plus(crit, 1);
            }

            ;

            if ($truthy($rb_ge(ch, 5))) {
              return fumble = $rb_plus(fumble, 1);
            } else {
              return nil;
            }

            ;
          }, _$$6.$$s = self, _$$6.$$arity = 1, _$$6));
          resultText = "";

          if ($truthy($rb_ge(crit, 3))) {
            resultText = " ＞ クリティカル";
            total = $rb_plus(6, skl);
          }

          ;

          if ($truthy($rb_ge(fumble, 3))) {
            resultText = " ＞ ファンブル";
            total = 0;
          }

          ;
          output = "" + total + "[" + dice_str + "]" + resultText;
          return [total, output];
        }, $DarkBlaze_get_dice$8.$$arity = 3);
        Opal.def(self, '$eval_game_system_specific_command', $DarkBlaze_eval_game_system_specific_command$10 = function $$eval_game_system_specific_command(command) {
          var $a,
              self = this,
              m = nil,
              dice = nil,
              $ret_or_1 = nil;

          if ($truthy(m = /^BT(\d)?$/i.$match(command))) {
            dice = function () {
              if ($truthy($ret_or_1 = ($a = m['$[]'](1), $a === nil || $a == null ? nil : $send($a, 'to_i', [])))) {
                return $ret_or_1;
              } else {
                return 1;
              }

              ;
              return nil;
            }();

            return self.$get_horidasibukuro_table(dice);
          }

          ;
          return self.$check_roll(command);
        }, $DarkBlaze_eval_game_system_specific_command$10.$$arity = 1);
        return (Opal.def(self, '$get_horidasibukuro_table', $DarkBlaze_get_horidasibukuro_table$11 = function $$get_horidasibukuro_table(dice) {
          var self = this,
              output = nil,
              material_kind = nil,
              magic_stone = nil,
              num1 = nil,
              num2 = nil,
              magic_stone_result = nil,
              type = nil;
          output = "1";
          material_kind = ["蟲甲", "金属", "金貨", "植物", "獣皮", "竜鱗", "レアモノ", "レアモノ"];
          magic_stone = ["火炎石", "雷撃石", "氷結石"];
          num1 = self.randomizer.$roll_sum(2, 6);
          num2 = self.randomizer.$roll_sum(dice, 6);
          self.$debug("dice", dice);
          self.$debug("num1", num1);
          self.$debug("num2", num2);

          if ($truthy($rb_le(num1, 4))) {
            num2 = self.randomizer.$roll_once(6);
            magic_stone_result = magic_stone['$[]']($rb_minus($rb_divide(num2, 2).$to_i(), 1));
            output = "" + "《" + magic_stone_result + "》を" + dice + "個獲得";
          } else if (num1['$=='](7)) {
            output = "" + "《金貨》を" + num2 + "枚獲得";
          } else {
            type = material_kind['$[]']($rb_minus(num1, 5));

            if ($truthy($rb_le(num2, 3))) {
              output = "" + "《" + type + " I》を1個獲得";
            } else if ($truthy($rb_le(num2, 5))) {
              output = "" + "《" + type + " I》を2個獲得";
            } else if ($truthy($rb_le(num2, 7))) {
              output = "" + "《" + type + " I》を3個獲得";
            } else if ($truthy($rb_le(num2, 9))) {
              output = "" + "《" + type + " II》を1個獲得";
            } else if ($truthy($rb_le(num2, 11))) {
              output = "" + "《" + type + " I》を2個《" + type + " II》を1個獲得";
            } else if ($truthy($rb_le(num2, 13))) {
              output = "" + "《" + type + " I》を2個《" + type + " II》を2個獲得";
            } else if ($truthy($rb_le(num2, 15))) {
              output = "" + "《" + type + " III》を1個獲得";
            } else if ($truthy($rb_le(num2, 17))) {
              output = "" + "《" + type + " II》を2個《" + type + " III》を1個獲得";
            } else {
              output = "" + "《" + type + " II》を2個《" + type + " III》を2個獲得";
            }

            ;
          }

          ;

          if ($truthy(output['$!=']("1"))) {
            output = "" + "掘り出し袋表[" + num1 + "," + num2 + "] ＞ " + output;
          }

          ;
          return output;
        }, $DarkBlaze_get_horidasibukuro_table$11.$$arity = 1), nil) && 'get_horidasibukuro_table';
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~DarkBlaze~index.js.map