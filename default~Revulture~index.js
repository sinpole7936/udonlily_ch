(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Revulture~index"],{

/***/ "+bs6":
/*!*****************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/Revulture.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./../opal */ "pQ1d");
/* Generated by Opal 1.1.1 */


(function (Opal) {
  function $rb_le(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs <= rhs : lhs['$<='](rhs);
  }

  function $rb_plus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs + rhs : lhs['$+'](rhs);
  }

  function $rb_gt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs > rhs : lhs['$>'](rhs);
  }

  function $rb_minus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs - rhs : lhs['$-'](rhs);
  }

  function $rb_ge(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs >= rhs : lhs['$>='](rhs);
  }

  var self = Opal.top,
      $nesting = [],
      nil = Opal.nil,
      $$$ = Opal.$$$,
      $$ = Opal.$$,
      $module = Opal.module,
      $klass = Opal.klass,
      $truthy = Opal.truthy,
      $hash2 = Opal.hash2,
      $send = Opal.send;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'Revulture');
        var $nesting = [self].concat($parent_nesting),
            $Revulture_eval_game_system_specific_command$1,
            $Revulture_roll_attack$2,
            $Revulture_make_command_text$5,
            $Revulture_calc_damage$6,
            $Revulture_parse_additional_damage_rules$8,
            $Revulture_make_additional_damage_condition$10;
        self.$$prototype.randomizer = nil;
        Opal.const_set($nesting[0], 'ID', "Revulture");
        Opal.const_set($nesting[0], 'NAME', "光砕のリヴァルチャー");
        Opal.const_set($nesting[0], 'SORT_KEY', "こうさいのりうあるちやあ");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "■アタック判定（ xAT, xATK, xATTACK ）\n" + "x: ダイス数（加算 + と除算 / を使用可能）\n" + "例） 3AT, 4ATK, 5+6ATTACK, 15/2AT\n" + "\n" + "□アタック判定　目標値つき（ xAT<=y, xATK<=y, xATTACK<=y ）\n" + "x: ダイス数（加算 + と除算 / を使用可能）\n" + "y: 目標値（ 1 以上 6 以下。加算 + を使用可能）\n" + "例） 3AT<=4, 3AT<=2+1\n" + "\n" + "□アタック判定　目標値＆追加ダメージつき（ xAT<=y[>=a:+b], xATK<=y[>=a:+b], xATTACK<=y[z] ）\n" + "x: ダイス数（加算 + と除算 / を使用可能）\n" + "y: 目標値（ 1 以上 6 以下。加算 + を使用可能）\n" + "z: 追加ダメージの規則（詳細は後述）（※複数同時に指定可能）\n" + "\n" + "▽追加ダメージの規則 [a:+b]\n" + "a: ヒット数が a なら\n" + "　=a　（ヒット数が a に等しい）\n" + "　>=a　（ヒット数が a 以上）\n" + "b: ダメージを b 点追加\n" + "\n" + "例） 3AT<=4[>=2:+3] #ルールブックp056「グレングラントAR」\n" + "例） 2AT<=4[=1:+5][>=2:+8] #ルールブックp067「ファーボル・ドラゴンブレス」\n");
        Opal.const_set($nesting[0], 'ATTACK_ROLL_REG', /^(\d+([+\/]\d+)*)?AT(TACK|K)?(<=([1-6](\+\d)*))?((\[>?=\d+:\+\d+\])+)?/i.$freeze());
        self.$register_prefix("\\d+([+\\/]\\d+)*AT");
        Opal.def(self, '$eval_game_system_specific_command', $Revulture_eval_game_system_specific_command$1 = function $$eval_game_system_specific_command(command) {
          var self = this,
              m = nil;

          if ($truthy(m = $$($nesting, 'ATTACK_ROLL_REG').$match(command))) {
            return self.$roll_attack(m['$[]'](1), m['$[]'](5), m['$[]'](7));
          } else {
            return nil;
          }
        }, $Revulture_eval_game_system_specific_command$1.$$arity = 1);
        self.$private();
        Opal.def(self, '$roll_attack', $Revulture_roll_attack$2 = function $$roll_attack(dice_count_expression, border_expression, additional_damage_rules) {
          var _$$,
              _$$2,
              self = this,
              dice_count = nil,
              border = nil,
              command = nil,
              $ret_or_1 = nil,
              dices = nil,
              critical_hit_count = nil,
              hit_count = nil,
              damage = nil,
              message_elements = nil;

          dice_count = $$($nesting, 'Arithmetic').$eval(dice_count_expression, $hash2(["round_type"], {
            "round_type": $$$($$($nesting, 'RoundType'), 'FLOOR')
          }));

          if ($truthy(border_expression)) {
            border = $$($nesting, 'Arithmetic').$eval(border_expression, $hash2(["round_type"], {
              "round_type": $$$($$($nesting, 'RoundType'), 'FLOOR')
            })).$clamp(1, 6);
          }

          ;
          command = self.$make_command_text(dice_count, border, additional_damage_rules);

          if ($truthy($rb_le(dice_count, 0))) {
            return "" + command + " ＞ ダイス数が 0 です";
          } else if ($truthy(function () {
            if ($truthy($ret_or_1 = border['$nil?']())) {
              return additional_damage_rules;
            } else {
              return $ret_or_1;
            }

            ;
            return nil;
          }())) {
            return "" + command + " ＞ 目標値が指定されていないため、追加ダメージを算出できません";
          }

          ;
          dices = self.randomizer.$roll_barabara(dice_count, 6).$sort();
          critical_hit_count = dices.$count(1);

          if ($truthy(border)) {
            hit_count = $rb_plus($send(dices, 'count', [], (_$$ = function $$3(dice) {
              var self = _$$.$$s == null ? this : _$$.$$s;

              if (dice == null) {
                dice = nil;
              }

              ;
              return $rb_le(dice, border);
            }, _$$.$$s = self, _$$.$$arity = 1, _$$)), critical_hit_count);
          }

          ;
          damage = self.$calc_damage(hit_count, additional_damage_rules);
          message_elements = [];
          message_elements['$<<'](command);
          message_elements['$<<'](dices.$join(","));

          if ($truthy($rb_gt(critical_hit_count, 0))) {
            message_elements['$<<']("" + "クリティカル " + critical_hit_count);
          }

          ;

          if ($truthy(hit_count)) {
            message_elements['$<<']("" + "ヒット数 " + hit_count);
          }

          ;

          if ($truthy(damage)) {
            message_elements['$<<']("" + "ダメージ " + damage);
          }

          ;
          return $send($$($nesting, 'Result').$new(message_elements.$join(" ＞ ")), 'tap', [], (_$$2 = function $$4(r) {
            var self = _$$2.$$s == null ? this : _$$2.$$s,
                $writer = nil;

            if (r == null) {
              r = nil;
            }

            ;

            if ($truthy(hit_count)) {
              $writer = [$rb_gt(hit_count, 0)];
              $send(r, 'condition=', Opal.to_a($writer));
              $writer[$rb_minus($writer["length"], 1)];
            }

            ;
            $writer = [$rb_gt(critical_hit_count, 0)];
            $send(r, 'critical=', Opal.to_a($writer));
            return $writer[$rb_minus($writer["length"], 1)];
            ;
          }, _$$2.$$s = self, _$$2.$$arity = 1, _$$2));
        }, $Revulture_roll_attack$2.$$arity = 3);
        Opal.def(self, '$make_command_text', $Revulture_make_command_text$5 = function $$make_command_text(dice_count, border, additional_damage_rules) {
          var self = this,
              command = nil;
          command = "" + dice_count + "attack";

          if ($truthy(border)) {
            command = $rb_plus(command, "" + "<=" + border);
          }

          ;

          if ($truthy(additional_damage_rules)) {
            command = $rb_plus(command, additional_damage_rules);
          }

          ;
          return "" + "(" + command + ")";
        }, $Revulture_make_command_text$5.$$arity = 3);
        Opal.def(self, '$calc_damage', $Revulture_calc_damage$6 = function $$calc_damage(hit_count, additional_damage_rules) {
          var _$$3,
              self = this,
              damage = nil;

          if ($truthy(additional_damage_rules)) {} else {
            return nil;
          }

          ;
          damage = hit_count;
          $send(self.$parse_additional_damage_rules(additional_damage_rules), 'each', [], (_$$3 = function $$7(rule) {
            var self = _$$3.$$s == null ? this : _$$3.$$s;

            if (rule == null) {
              rule = nil;
            }

            ;

            if ($truthy(rule['$[]']("condition").$call(hit_count))) {
              return damage = $rb_plus(damage, rule['$[]']("additinal_damage"));
            } else {
              return nil;
            }

            ;
          }, _$$3.$$s = self, _$$3.$$arity = 1, _$$3));
          return damage;
        }, $Revulture_calc_damage$6.$$arity = 2);
        Opal.def(self, '$parse_additional_damage_rules', $Revulture_parse_additional_damage_rules$8 = function $$parse_additional_damage_rules(source) {
          var _$$4,
              self = this;

          return $send(source.$scan(/\[(>?=)(\d+):\+(\d+)\]/), 'map', [], (_$$4 = function $$9(matched) {
            var self = _$$4.$$s == null ? this : _$$4.$$s;

            if (matched == null) {
              matched = nil;
            }

            ;
            return $hash2(["condition", "additinal_damage"], {
              "condition": self.$make_additional_damage_condition(matched['$[]'](0), matched['$[]'](1).$to_i()),
              "additinal_damage": matched['$[]'](2).$to_i()
            });
          }, _$$4.$$s = self, _$$4.$$arity = 1, _$$4));
        }, $Revulture_parse_additional_damage_rules$8.$$arity = 1);
        return (Opal.def(self, '$make_additional_damage_condition', $Revulture_make_additional_damage_condition$10 = function $$make_additional_damage_condition(comparer, comparing_target) {
          var self = this,
              $case = nil;
          return function () {
            $case = comparer;

            if ("="['$===']($case)) {
              return $send(self, 'lambda', [], ($$11 = function (_$$5) {
                function $$11(_x) {
                  return _$$5.apply(this, arguments);
                }

                $$11.toString = function () {
                  return _$$5.toString();
                };

                return $$11;
              }(function (hit_count) {
                var self = $$11.$$s == null ? this : $$11.$$s;

                if (hit_count == null) {
                  hit_count = nil;
                }

                ;
                return hit_count['$=='](comparing_target);
              }), $$11.$$s = self, $$11.$$arity = 1, $$11));
            } else if (">="['$===']($case)) {
              return $send(self, 'lambda', [], ($$12 = function (_$$6) {
                function $$12(_x2) {
                  return _$$6.apply(this, arguments);
                }

                $$12.toString = function () {
                  return _$$6.toString();
                };

                return $$12;
              }(function (hit_count) {
                var self = $$12.$$s == null ? this : $$12.$$s;

                if (hit_count == null) {
                  hit_count = nil;
                }

                ;
                return $rb_ge(hit_count, comparing_target);
              }), $$12.$$s = self, $$12.$$arity = 1, $$12));
            } else {
              return nil;
            }
          }();
        }, $Revulture_make_additional_damage_condition$10.$$arity = 2), nil) && 'make_additional_damage_condition';
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~Revulture~index.js.map