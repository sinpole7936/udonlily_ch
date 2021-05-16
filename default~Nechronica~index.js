(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Nechronica~index"],{

/***/ "psV8":
/*!******************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/Nechronica.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./../opal */ "pQ1d");
/* Generated by Opal 1.1.1 */


Opal.modules["bcdice/dice_table/table"] = function (Opal) {
  function $rb_minus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs - rhs : lhs['$-'](rhs);
  }

  var self = Opal.top,
      $nesting = [],
      nil = Opal.nil,
      $$$ = Opal.$$$,
      $$ = Opal.$$,
      $module = Opal.module,
      $klass = Opal.klass,
      $hash2 = Opal.hash2,
      $truthy = Opal.truthy;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'DiceTable');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'Table');
        var $nesting = [self].concat($parent_nesting),
            $Table_from_i18n$1,
            $Table_initialize$2,
            $Table_roll$3,
            $Table_choice$4;
        self.$$prototype.times = self.$$prototype.sides = self.$$prototype.name = self.$$prototype.items = nil;
        Opal.defs(self, '$from_i18n', $Table_from_i18n$1 = function $$from_i18n(key, locale) {
          var self = this,
              table = nil;
          table = $$($nesting, 'I18n').$t(key, $hash2(["locale"], {
            "locale": locale
          }));
          return self.$new(table['$[]']("name"), table['$[]']("type"), table['$[]']("items"));
        }, $Table_from_i18n$1.$$arity = 2);
        Opal.def(self, '$initialize', $Table_initialize$2 = function $$initialize(name, type, items) {
          var self = this,
              m = nil;
          self.name = name;
          self.items = items.$freeze();
          m = /(\d+)D(\d+)/i.$match(type);

          if ($truthy(m)) {} else {
            self.$raise($$($nesting, 'ArgumentError'), "" + "Unexpected table type: " + type);
          }

          ;
          self.times = m['$[]'](1).$to_i();
          return self.sides = m['$[]'](2).$to_i();
        }, $Table_initialize$2.$$arity = 3);
        Opal.def(self, '$roll', $Table_roll$3 = function $$roll(bcdice) {
          var self = this,
              value = nil;
          value = bcdice.$roll_sum(self.times, self.sides);
          return self.$choice(value);
        }, $Table_roll$3.$$arity = 1);
        return (Opal.def(self, '$choice', $Table_choice$4 = function $$choice(value) {
          var self = this,
              index = nil;
          index = $rb_minus(value, self.times);
          return $$($nesting, 'RollResult').$new(self.name, value, self.items['$[]'](index));
        }, $Table_choice$4.$$arity = 1), nil) && 'choice';
      })($nesting[0], null, $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
};
/* Generated by Opal 1.1.1 */


(function (Opal) {
  function $rb_ge(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs >= rhs : lhs['$>='](rhs);
  }

  function $rb_le(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs <= rhs : lhs['$<='](rhs);
  }

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

  var self = Opal.top,
      $nesting = [],
      nil = Opal.nil,
      $$$ = Opal.$$$,
      $$ = Opal.$$,
      $module = Opal.module,
      $klass = Opal.klass,
      $send2 = Opal.send2,
      $send = Opal.send,
      $truthy = Opal.truthy,
      $hash2 = Opal.hash2;
  self.$require("bcdice/dice_table/table");
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'Nechronica');
        var $nesting = [self].concat($parent_nesting),
            $Nechronica_initialize$1,
            $Nechronica_replace_text$2,
            $Nechronica_eval_game_system_specific_command$7,
            $Nechronica_result_nd10$8,
            $Nechronica_result_nd10_text$10,
            $Nechronica_nechronica_check$11,
            $Nechronica_getHitLocation$13;
        self.$$prototype.randomizer = nil;
        Opal.const_set($nesting[0], 'ID', "Nechronica");
        Opal.const_set($nesting[0], 'NAME', "ネクロニカ");
        Opal.const_set($nesting[0], 'SORT_KEY', "ねくろにか");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・判定　(nNC+m)\n" + "　ダイス数n、修正値mで判定ロールを行います。\n" + "　ダイス数が2以上の時のパーツ破損数も表示します。\n" + "・攻撃判定　(nNA+m)\n" + "　ダイス数n、修正値mで攻撃判定ロールを行います。\n" + "　命中部位とダイス数が2以上の時のパーツ破損数も表示します。\n" + "\n" + "表\n" + "・姉妹への未練表 nm\n" + "・中立者への未練表 nmn\n" + "・敵への未練表 nme\n");
        Opal.def(self, '$initialize', $Nechronica_initialize$1 = function $$initialize(command) {
          var $iter = $Nechronica_initialize$1.$$p,
              $yield = $iter || nil,
              self = this;
          if ($iter) $Nechronica_initialize$1.$$p = null;
          $send2(self, Opal.find_super_dispatcher(self, 'initialize', $Nechronica_initialize$1, false, true), 'initialize', [command], null);
          self.sort_add_dice = true;
          self.sort_barabara_dice = true;
          return self.default_target_number = 6;
        }, $Nechronica_initialize$1.$$arity = 1);
        self.$private();
        Opal.def(self, '$replace_text', $Nechronica_replace_text$2 = function $$replace_text(string) {
          var _$$,
              _$$2,
              _$$3,
              _$$4,
              self = this;

          string = $send(string, 'gsub', [/(\d+)NC(10)?([+\-][+\-\d]+)/i], (_$$ = function $$3() {
            var self = _$$.$$s == null ? this : _$$.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R10" + $$($nesting, 'Regexp').$last_match(3) + "[0]";
          }, _$$.$$s = self, _$$.$$arity = 0, _$$));
          string = $send(string, 'gsub', [/(\d+)NC(10)?/i], (_$$2 = function $$4() {
            var self = _$$2.$$s == null ? this : _$$2.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R10[0]";
          }, _$$2.$$s = self, _$$2.$$arity = 0, _$$2));
          string = $send(string, 'gsub', [/(\d+)NA(10)?([+\-][+\-\d]+)/i], (_$$3 = function $$5() {
            var self = _$$3.$$s == null ? this : _$$3.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R10" + $$($nesting, 'Regexp').$last_match(3) + "[1]";
          }, _$$3.$$s = self, _$$3.$$arity = 0, _$$3));
          string = $send(string, 'gsub', [/(\d+)NA(10)?/i], (_$$4 = function $$6() {
            var self = _$$4.$$s == null ? this : _$$4.$$s;
            return "" + $$($nesting, 'Regexp').$last_match(1) + "R10[1]";
          }, _$$4.$$s = self, _$$4.$$arity = 0, _$$4));
          return string;
        }, $Nechronica_replace_text$2.$$arity = 1);
        self.$public();
        Opal.def(self, '$eval_game_system_specific_command', $Nechronica_eval_game_system_specific_command$7 = function $$eval_game_system_specific_command(command) {
          var self = this,
              $ret_or_1 = nil;
          return function () {
            if ($truthy($ret_or_1 = self.$roll_tables(command, $$$(self.$class(), 'TABLES')))) {
              return $ret_or_1;
            } else {
              return self.$nechronica_check(command);
            }

            ;
            return nil;
          }();
        }, $Nechronica_eval_game_system_specific_command$7.$$arity = 1);
        self.$private();
        Opal.def(self, '$result_nd10', $Nechronica_result_nd10$8 = function $$result_nd10(total, _dice_total, dice_list, cmp_op, target) {
          var _$$5,
              self = this,
              fumble = nil,
              break_all_parts = nil;

          if (target['$==']("?")) {
            return $$($nesting, 'Result').$nothing();
          }

          ;

          if (cmp_op['$=='](">=")) {} else {
            return nil;
          }

          ;

          if ($truthy($rb_ge(total, 11))) {
            return $$($nesting, 'Result').$critical(self.$translate("Nechronica.critical"));
          } else if ($truthy($rb_ge(total, target))) {
            return $$($nesting, 'Result').$success(self.$translate("success"));
          } else if ($send(dice_list, 'count', [], (_$$5 = function $$9(i) {
            var self = _$$5.$$s == null ? this : _$$5.$$s;

            if (i == null) {
              i = nil;
            }

            ;
            return $rb_le(i, 1);
          }, _$$5.$$s = self, _$$5.$$arity = 1, _$$5))['$=='](0)) {
            return $$($nesting, 'Result').$failure(self.$translate("failure"));
          } else if ($truthy($rb_gt(dice_list.$size(), 1))) {
            fumble = self.$translate("Nechronica.fumble");
            break_all_parts = self.$translate("Nechronica.break_all_parts");
            return $$($nesting, 'Result').$fumble("" + fumble + " ＞ " + break_all_parts);
          } else {
            return $$($nesting, 'Result').$fumble(self.$translate("Nechronica.fumble"));
          }

          ;
        }, $Nechronica_result_nd10$8.$$arity = 5);
        Opal.def(self, '$result_nd10_text', $Nechronica_result_nd10_text$10 = function $$result_nd10_text(total, dice_list, target) {
          var $a,
              self = this,
              text = nil;
          text = ($a = self.$result_nd10(total, 0, dice_list, ">=", target), $a === nil || $a == null ? nil : $send($a, 'text', []));

          if ($truthy(text['$nil?']())) {
            return "";
          } else {
            return "" + " ＞ " + text;
          }

          ;
        }, $Nechronica_result_nd10_text$10.$$arity = 3);
        Opal.def(self, '$nechronica_check', $Nechronica_nechronica_check$11 = function $$nechronica_check(string) {
          var _$$6,
              self = this,
              dice_n = nil,
              battleMode = nil,
              modText = nil,
              mod = nil,
              isBattleMode = nil,
              diff = nil,
              dice = nil,
              n_max = nil,
              total_n = nil,
              output = nil,
              dice_str = nil,
              hit_loc = nil;

          string = self.$replace_text(string);
          self.$debug("nechronica_check string", string);

          if ($truthy(/(^|\s)S?((\d+)[rR]10([+\-\d]+)?(\[(\d+)\])?)(\s|$)/i['$=~'](string))) {} else {
            return nil;
          }

          ;
          string = $$($nesting, 'Regexp').$last_match(2);
          dice_n = 1;

          if ($truthy($$($nesting, 'Regexp').$last_match(3))) {
            dice_n = $$($nesting, 'Regexp').$last_match(3).$to_i();
          }

          ;
          battleMode = $$($nesting, 'Regexp').$last_match(6).$to_i();
          modText = $$($nesting, 'Regexp').$last_match(4);
          mod = $$($nesting, 'ArithmeticEvaluator').$eval(modText);
          isBattleMode = battleMode['$=='](1);
          self.$debug("nechronica_check string", string);
          self.$debug("isBattleMode", isBattleMode);
          diff = 6;
          dice = self.randomizer.$roll_barabara(dice_n, 10).$sort();
          n_max = dice.$max();
          total_n = $rb_plus(n_max, mod);
          output = "" + "(" + string + ") ＞ [" + dice.$join(",") + "]";

          if ($truthy($rb_lt(mod, 0))) {
            output = $rb_plus(output, mod.$to_s());
          } else if ($truthy($rb_gt(mod, 0))) {
            output = $rb_plus(output, "" + "+" + mod);
          }

          ;
          $send(dice, 'map!', [], (_$$6 = function $$12(i) {
            var self = _$$6.$$s == null ? this : _$$6.$$s;

            if (i == null) {
              i = nil;
            }

            ;
            return $rb_plus(i, mod);
          }, _$$6.$$s = self, _$$6.$$arity = 1, _$$6));
          dice_str = dice.$join(",");
          output = $rb_plus(output, "" + "  ＞ " + total_n + "[" + dice_str + "]");
          output = $rb_plus(output, self.$result_nd10_text(total_n, dice, diff));

          if ($truthy(isBattleMode)) {
            hit_loc = self.$getHitLocation(total_n);

            if ($truthy(hit_loc['$!=']("1"))) {
              output = $rb_plus(output, "" + " ＞ " + hit_loc);
            }

            ;
          }

          ;
          return output;
        }, $Nechronica_nechronica_check$11.$$arity = 1);
        Opal.def(self, '$getHitLocation', $Nechronica_getHitLocation$13 = function $$getHitLocation(dice) {
          var self = this,
              output = nil,
              table = nil,
              index = nil,
              addDamage = nil;
          output = "1";
          self.$debug("getHitLocation dice", dice);

          if ($truthy($rb_le(dice, 5))) {
            return output;
          }

          ;
          table = self.$translate("Nechronica.hit_location.table");
          index = $rb_minus(dice, 6);
          addDamage = "";

          if ($truthy($rb_gt(dice, 10))) {
            index = 5;
            addDamage = self.$translate("Nechronica.hit_location.additional_damage", $hash2(["damage"], {
              "damage": $rb_minus(dice, 10)
            }));
          }

          ;
          output = $rb_plus(table['$[]'](index), addDamage);
          return output;
        }, $Nechronica_getHitLocation$13.$$arity = 1);

        (function (self, $parent_nesting) {
          var $nesting = [self].concat($parent_nesting),
              $translate_tables$14;
          self.$private();
          return (Opal.def(self, '$translate_tables', $translate_tables$14 = function $$translate_tables(locale) {
            var self = this;
            return $hash2(["NM", "NMN", "NME"], {
              "NM": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Nechronica.table.NM", locale),
              "NMN": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Nechronica.table.NMN", locale),
              "NME": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Nechronica.table.NME", locale)
            });
          }, $translate_tables$14.$$arity = 1), nil) && 'translate_tables';
        })(Opal.get_singleton_class(self), $nesting);

        Opal.const_set($nesting[0], 'TABLES', self.$translate_tables("ja_jp"));
        return self.$register_prefix("\\d+NC", "\\d+NA", "\\d+R10", $$($nesting, 'TABLES').$keys());
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~Nechronica~index.js.map