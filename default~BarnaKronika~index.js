(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BarnaKronika~index"],{

/***/ "UnFL":
/*!********************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/BarnaKronika.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./../opal */ "pQ1d");
/* Generated by Opal 1.1.1 */


(function (Opal) {
  function $rb_plus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs + rhs : lhs['$+'](rhs);
  }

  function $rb_gt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs > rhs : lhs['$>'](rhs);
  }

  function $rb_minus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs - rhs : lhs['$-'](rhs);
  }

  function $rb_times(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs * rhs : lhs['$*'](rhs);
  }

  function $rb_lt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs < rhs : lhs['$<'](rhs);
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
        var self = $klass($base, $super, 'BarnaKronika');
        var $nesting = [self].concat($parent_nesting),
            $BarnaKronika_initialize$1,
            $BarnaKronika_replace_text$2,
            $BarnaKronika_eval_game_system_specific_command$7,
            $BarnaKronika_roll_barna_kronika$8,
            $BarnaKronika_isCriticalCall$12,
            $BarnaKronika_isNomalAttack$13,
            $BarnaKronika_getAttackStringWhenCriticalCall$14,
            $BarnaKronika_getAttackStringWhenNomal$15,
            $BarnaKronika_getAttackHitLocation$16;
        self.$$prototype.isBattleMode = nil;
        Opal.const_set($nesting[0], 'ID', "BarnaKronika");
        Opal.const_set($nesting[0], 'NAME', "バルナ・クロニカ");
        Opal.const_set($nesting[0], 'SORT_KEY', "はるなくろにか");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・通常判定　nBK\n" + "　ダイス数nで判定ロールを行います。\n" + "　セット数が1以上の時はセット数も表示します。\n" + "・攻撃判定　nBA\n" + "　ダイス数nで判定ロールを行い、攻撃値と命中部位も表示します。\n" + "・クリティカルコール　nBKCt　nBACt\n" + "　判定コマンドの後ろに「Ct」を付けるとクリティカルコールです。\n" + "　ダイス数n,コール数tで判定ロールを行います。\n" + "　ダイス数nで判定ロールを行います。\n" + "　セット数が1以上の時はセット数も表示し、攻撃判定の場合は命中部位も表示します。\n");
        self.$register_prefix("\\d+BK", "\\d+BA", "\\d+BKC", "\\d+BAC", "\\d+R6");
        Opal.def(self, '$initialize', $BarnaKronika_initialize$1 = function $$initialize(command) {
          var $iter = $BarnaKronika_initialize$1.$$p,
              $yield = $iter || nil,
              self = this;
          if ($iter) $BarnaKronika_initialize$1.$$p = null;
          $send2(self, Opal.find_super_dispatcher(self, 'initialize', $BarnaKronika_initialize$1, false, true), 'initialize', [command], null);
          self.sort_add_dice = true;
          return self.sort_barabara_dice = true;
        }, $BarnaKronika_initialize$1.$$arity = 1);
        Opal.def(self, '$replace_text', $BarnaKronika_replace_text$2 = function $$replace_text(string) {
          var _$$,
              _$$2,
              _$$3,
              _$$4,
              self = this;

          string = $send(string, 'gsub', [/(\d+)BKC(\d)/], (_$$ = function $$3() {
            var self = _$$.$$s == null ? this : _$$.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R6[0," + $$($nesting, 'Regexp').$last_match(2) + "]";
          }, _$$.$$s = self, _$$.$$arity = 0, _$$));
          string = $send(string, 'gsub', [/(\d+)BAC(\d)/], (_$$2 = function $$4() {
            var self = _$$2.$$s == null ? this : _$$2.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R6[1," + $$($nesting, 'Regexp').$last_match(2) + "]";
          }, _$$2.$$s = self, _$$2.$$arity = 0, _$$2));
          string = $send(string, 'gsub', [/(\d+)BK/], (_$$3 = function $$5() {
            var self = _$$3.$$s == null ? this : _$$3.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R6[0,0]";
          }, _$$3.$$s = self, _$$3.$$arity = 0, _$$3));
          string = $send(string, 'gsub', [/(\d+)BA/], (_$$4 = function $$6() {
            var self = _$$4.$$s == null ? this : _$$4.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R6[1,0]";
          }, _$$4.$$s = self, _$$4.$$arity = 0, _$$4));
          return string;
        }, $BarnaKronika_replace_text$2.$$arity = 1);
        Opal.def(self, '$eval_game_system_specific_command', $BarnaKronika_eval_game_system_specific_command$7 = function $$eval_game_system_specific_command(string) {
          var $a,
              $b,
              self = this,
              option = nil,
              dice_n = nil,
              $ret_or_1 = nil,
              criticalCallDice = nil,
              battleModeText = nil,
              dice_str = nil,
              suc = nil,
              set = nil,
              at_str = nil,
              output = nil;
          string = self.$replace_text(string);

          if ($truthy(/(^|\s)S?((\d+)[rR]6(\[([,\d]+)\])?)(\s|$)/i['$=~'](string))) {} else {
            return nil;
          }

          ;
          string = $$($nesting, 'Regexp').$last_match(2);
          option = $$($nesting, 'Regexp').$last_match(5);
          dice_n = $$($nesting, 'Regexp').$last_match(3);

          dice_n = function () {
            if ($truthy($ret_or_1 = dice_n)) {
              return $ret_or_1;
            } else {
              return 1;
            }

            ;
            return nil;
          }();

          self.isBattleMode = false;
          criticalCallDice = 0;

          if ($truthy(option)) {
            $b = $send(option.$split(","), 'map', [], "to_i".$to_proc()), $a = Opal.to_ary($b), battleModeText = $a[0] == null ? nil : $a[0], criticalCallDice = $a[1] == null ? nil : $a[1], $b;
            self.isBattleMode = battleModeText['$=='](1);
          }

          ;
          self.$debug("@isBattleMode", self.isBattleMode);
          $b = self.$roll_barna_kronika(dice_n, criticalCallDice), $a = Opal.to_ary($b), dice_str = $a[0] == null ? nil : $a[0], suc = $a[1] == null ? nil : $a[1], set = $a[2] == null ? nil : $a[2], at_str = $a[3] == null ? nil : $a[3], $b;
          output = "" + "(" + string + ") ＞ [" + dice_str + "] ＞ ";

          if ($truthy(self.isBattleMode)) {
            output = $rb_plus(output, at_str);
          } else {
            self.$debug("suc", suc);

            if ($truthy($rb_gt(suc, 1))) {
              output = $rb_plus(output, "" + "成功数" + suc);
            } else {
              output = $rb_plus(output, "失敗");
            }

            ;
            self.$debug("set", set);

            if ($truthy($rb_gt(set, 0))) {
              output = $rb_plus(output, "" + ",セット" + set);
            }

            ;
          }

          ;
          return output;
        }, $BarnaKronika_eval_game_system_specific_command$7.$$arity = 1);
        Opal.def(self, '$roll_barna_kronika', $BarnaKronika_roll_barna_kronika$8 = function $$roll_barna_kronika(dice_n, criticalCallDice) {
          var _$$5,
              _$$7,
              self = this,
              output = nil,
              suc = nil,
              set = nil,
              at_str = nil,
              diceCountList = nil,
              c_cnt = nil,
              $ret_or_2 = nil;

          dice_n = dice_n.$to_i();
          output = "";
          suc = 0;
          set = 0;
          at_str = "";
          diceCountList = [0, 0, 0, 0, 0, 0];
          $send(dice_n, 'times', [], (_$$5 = function $$9(_i) {
            var self = _$$5.$$s == null ? this : _$$5.$$s,
                index = nil,
                $writer = nil;
            if (self.randomizer == null) self.randomizer = nil;

            if (_i == null) {
              _i = nil;
            }

            ;
            index = self.randomizer.$roll_index(6);
            $writer = [index, $rb_plus(diceCountList['$[]'](index), 1)];
            $send(diceCountList, '[]=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;

            if ($truthy($rb_gt(diceCountList['$[]'](index), suc))) {
              return suc = diceCountList['$[]'](index);
            } else {
              return nil;
            }

            ;
          }, _$$5.$$s = self, _$$5.$$arity = 1, _$$5));
          $send(6, 'times', [], (_$$7 = function $$10(i) {
            var self = _$$7.$$s == null ? this : _$$7.$$s,
                _$$6,
                diceCount = nil;

            if (i == null) {
              i = nil;
            }

            ;
            diceCount = diceCountList['$[]'](i);

            if (diceCount['$=='](0)) {
              return nil;
            }

            ;
            $send(diceCount, 'times', [], (_$$6 = function $$11(_j) {
              var self = _$$6.$$s == null ? this : _$$6.$$s;

              if (_j == null) {
                _j = nil;
              }

              ;
              return output = $rb_plus(output, "" + $rb_plus(i, 1) + ",");
            }, _$$6.$$s = self, _$$6.$$arity = 1, _$$6));

            if ($truthy(self.$isCriticalCall(i, criticalCallDice))) {
              self.$debug("isCriticalCall");
              at_str = $rb_plus(at_str, self.$getAttackStringWhenCriticalCall(i, diceCount));
            } else if ($truthy(self.$isNomalAttack(criticalCallDice, diceCount))) {
              self.$debug("isNomalAttack");
              at_str = $rb_plus(at_str, self.$getAttackStringWhenNomal(i, diceCount));
            }

            ;

            if ($truthy($rb_gt(diceCount, 1))) {
              return set = $rb_plus(set, 1);
            } else {
              return nil;
            }

            ;
          }, _$$7.$$s = self, _$$7.$$arity = 1, _$$7));

          if ($truthy(criticalCallDice['$!='](0))) {
            c_cnt = diceCountList['$[]']($rb_minus(criticalCallDice, 1));
            suc = $rb_times(c_cnt, 2);

            if ($truthy(c_cnt['$!='](0))) {
              set = 1;
            } else {
              set = 0;
            }

            ;
          }

          ;

          if ($truthy(function () {
            if ($truthy($ret_or_2 = self.isBattleMode)) {
              return $rb_lt(suc, 2);
            } else {
              return $ret_or_2;
            }

            ;
            return nil;
          }())) {
            at_str = "失敗";
          }

          ;
          output = output.$sub(/,$/, "");
          at_str = at_str.$sub(/,$/, "");
          return [output, suc, set, at_str];
        }, $BarnaKronika_roll_barna_kronika$8.$$arity = 2);
        Opal.def(self, '$isCriticalCall', $BarnaKronika_isCriticalCall$12 = function $$isCriticalCall(index, criticalCallDice) {
          var self = this;

          if ($truthy(self.isBattleMode)) {} else {
            return false;
          }

          ;

          if (criticalCallDice['$=='](0)) {
            return false;
          }

          ;
          return criticalCallDice['$==']($rb_plus(index, 1));
        }, $BarnaKronika_isCriticalCall$12.$$arity = 2);
        Opal.def(self, '$isNomalAttack', $BarnaKronika_isNomalAttack$13 = function $$isNomalAttack(criticalCallDice, diceCount) {
          var self = this;

          if ($truthy(self.isBattleMode)) {} else {
            return false;
          }

          ;

          if ($truthy(criticalCallDice['$!='](0))) {
            return false;
          }

          ;
          return $rb_gt(diceCount, 1);
        }, $BarnaKronika_isNomalAttack$13.$$arity = 2);
        Opal.def(self, '$getAttackStringWhenCriticalCall', $BarnaKronika_getAttackStringWhenCriticalCall$14 = function $$getAttackStringWhenCriticalCall(index, diceCount) {
          var self = this,
              hitLocation = nil,
              attackValue = nil,
              result = nil;
          hitLocation = self.$getAttackHitLocation($rb_plus(index, 1));
          attackValue = $rb_times(diceCount, 2);
          result = $rb_plus(hitLocation, "" + ":攻撃値" + attackValue + ",");
          return result;
        }, $BarnaKronika_getAttackStringWhenCriticalCall$14.$$arity = 2);
        Opal.def(self, '$getAttackStringWhenNomal', $BarnaKronika_getAttackStringWhenNomal$15 = function $$getAttackStringWhenNomal(index, diceCount) {
          var self = this,
              hitLocation = nil,
              attackValue = nil,
              result = nil;
          hitLocation = self.$getAttackHitLocation($rb_plus(index, 1));
          attackValue = diceCount;
          result = $rb_plus(hitLocation, "" + ":攻撃値" + attackValue + ",");
          return result;
        }, $BarnaKronika_getAttackStringWhenNomal$15.$$arity = 2);
        return (Opal.def(self, '$getAttackHitLocation', $BarnaKronika_getAttackHitLocation$16 = function $$getAttackHitLocation(num) {
          var self = this,
              table = nil;
          table = [[1, "頭部"], [2, "右腕"], [3, "左腕"], [4, "右脚"], [5, "左脚"], [6, "胴体"]];
          return self.$get_table_by_number(num, table);
        }, $BarnaKronika_getAttackHitLocation$16.$$arity = 1), nil) && 'getAttackHitLocation';
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~BarnaKronika~index.js.map