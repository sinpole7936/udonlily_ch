(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Cthulhu_ChineseTraditional~index"],{

/***/ "Jgqp":
/*!**********************************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/Cthulhu_ChineseTraditional.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./../opal */ "pQ1d");
/* Generated by Opal 1.1.1 */


Opal.modules["bcdice/arithmetic_evaluator"] = function (Opal) {
  var self = Opal.top,
      $nesting = [],
      nil = Opal.nil,
      $$$ = Opal.$$$,
      $$ = Opal.$$,
      $module = Opal.module,
      $hash2 = Opal.hash2,
      $truthy = Opal.truthy;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'ArithmeticEvaluator');
      var $nesting = [self].concat($parent_nesting);

      (function (self, $parent_nesting) {
        var $nesting = [self].concat($parent_nesting),
            $eval$1;
        return (Opal.def(self, '$eval', $eval$1 = function $eval$1(expr, $kwargs) {
          var round_type,
              self = this,
              $ret_or_1 = nil;

          if ($kwargs == null) {
            $kwargs = $hash2([], {});
          } else if (!$kwargs.$$is_hash) {
            throw Opal.ArgumentError.$new('expected kwargs');
          }

          ;
          round_type = $kwargs.$$smap["round_type"];

          if (round_type == null) {
            round_type = $$$($$($nesting, 'RoundType'), 'FLOOR');
          }

          ;

          if ($truthy(expr)) {} else {
            return 0;
          }

          ;

          if ($truthy($ret_or_1 = $$($nesting, 'Arithmetic').$eval(expr, round_type))) {
            return $ret_or_1;
          } else {
            return 0;
          }

          ;
        }, $eval$1.$$arity = -2), nil) && 'eval';
      })(Opal.get_singleton_class(self), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
};
/* Generated by Opal 1.1.1 */


Opal.modules["bcdice/game_system/Cthulhu"] = function (Opal) {
  function $rb_le(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs <= rhs : lhs['$<='](rhs);
  }

  function $rb_gt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs > rhs : lhs['$>'](rhs);
  }

  function $rb_plus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs + rhs : lhs['$+'](rhs);
  }

  function $rb_minus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs - rhs : lhs['$-'](rhs);
  }

  function $rb_divide(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs / rhs : lhs['$/'](rhs);
  }

  function $rb_times(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs * rhs : lhs['$*'](rhs);
  }

  function $rb_lt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs < rhs : lhs['$<'](rhs);
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
      $send2 = Opal.send2,
      $truthy = Opal.truthy,
      $send = Opal.send;
  self.$require("bcdice/arithmetic_evaluator");
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'Cthulhu');
        var $nesting = [self].concat($parent_nesting),
            $Cthulhu_initialize$1,
            $Cthulhu_eval_game_system_specific_command$2,
            $Cthulhu_getCheckResult$3,
            $Cthulhu_compare$9,
            $Cthulhu_getRegistResult$10,
            $Cthulhu_getCombineRoll$12;
        self.$$prototype.randomizer = self.$$prototype.locale = self.$$prototype.special_percentage = self.$$prototype.critical_percentage = self.$$prototype.fumble_percentage = nil;
        Opal.const_set($nesting[0], 'ID', "Cthulhu");
        Opal.const_set($nesting[0], 'NAME', "クトゥルフ神話TRPG");
        Opal.const_set($nesting[0], 'SORT_KEY', "くとうるふしんわTRPG");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "c=クリティカル値 ／ f=ファンブル値 ／ s=スペシャル\n" + "\n" + "1d100<=n    c・f・sすべてオフ（単純な数値比較判定のみ行います）\n" + "\n" + "・cfs判定付き判定コマンド\n" + "\n" + "CC\t 1d100ロールを行う c=1、f=100\n" + "CCB  同上、c=5、f=96\n" + "\n" + "例：CC<=80  （技能値80で行為判定。1%ルールでcf適用）\n" + "例：CCB<=55 （技能値55で行為判定。5%ルールでcf適用）\n" + "\n" + "・組み合わせロールについて\n" + "\n" + "CBR(x,y)\tc=1、f=100\n" + "CBRB(x,y)\tc=5、f=96\n" + "\n" + "・抵抗表ロールについて\n" + "RES(x-y)\tc=1、f=100\n" + "RESB(x-y)\tc=5、f=96\n" + "\n" + "※故障ナンバー判定\n" + "\n" + "・CC(x) c=1、f=100\n" + "x=故障ナンバー。出目x以上が出た上で、ファンブルが同時に発生した場合、共に出力する（テキスト「ファンブル＆故障」）\n" + "ファンブルでない場合、成功・失敗に関わらずテキスト「故障」のみを出力する（成功・失敗を出力せず、上書きしたものを出力する形）\n" + "\n" + "・CCB(x) c=5、f=96\n" + "同上\n" + "\n");
        self.$register_prefix("CCB?", "RESB?", "CBRB?");
        Opal.def(self, '$initialize', $Cthulhu_initialize$1 = function $$initialize(command) {
          var $iter = $Cthulhu_initialize$1.$$p,
              $yield = $iter || nil,
              self = this;
          if ($iter) $Cthulhu_initialize$1.$$p = null;
          $send2(self, Opal.find_super_dispatcher(self, 'initialize', $Cthulhu_initialize$1, false, true), 'initialize', [command], null);
          self.special_percentage = 20;
          self.critical_percentage = 1;
          return self.fumble_percentage = 1;
        }, $Cthulhu_initialize$1.$$arity = 1);
        Opal.def(self, '$eval_game_system_specific_command', $Cthulhu_eval_game_system_specific_command$2 = function $$eval_game_system_specific_command(command) {
          var self = this,
              $case = nil;
          $case = command;

          if (/CCB/i['$===']($case)) {
            self.critical_percentage = 5;
            self.fumble_percentage = 5;
            return self.$getCheckResult(command);
          } else if (/CC/i['$===']($case)) {
            self.critical_percentage = 1;
            self.fumble_percentage = 1;
            return self.$getCheckResult(command);
          } else if (/RESB/i['$===']($case)) {
            self.critical_percentage = 5;
            self.fumble_percentage = 5;
            return self.$getRegistResult(command);
          } else if (/CBRB/i['$===']($case)) {
            self.critical_percentage = 5;
            self.fumble_percentage = 5;
            return self.$getCombineRoll(command);
          } else if (/RES/i['$===']($case)) {
            self.critical_percentage = 1;
            self.fumble_percentage = 1;
            return self.$getRegistResult(command);
          } else if (/CBR/i['$===']($case)) {
            self.critical_percentage = 1;
            self.fumble_percentage = 1;
            return self.$getCombineRoll(command);
          }

          ;
          return nil;
        }, $Cthulhu_eval_game_system_specific_command$2.$$arity = 1);
        self.$private();
        Opal.def(self, '$getCheckResult', $Cthulhu_getCheckResult$3 = function $$getCheckResult(command) {
          var _$$,
              self = this,
              m = nil,
              broken_num = nil,
              diff = nil,
              total = nil,
              expr = nil,
              compare_result = nil;

          m = /^CCB?(\d+)?(?:<=([+-\/*\d]+))?$/i.$match(command);

          if ($truthy(m)) {} else {
            return nil;
          }

          ;
          broken_num = m['$[]'](1).$to_i();
          diff = $$($nesting, 'ArithmeticEvaluator').$eval(m['$[]'](2));

          if ($truthy($rb_le(diff, 0))) {
            total = self.randomizer.$roll_once(100);
            return $$($nesting, 'Result').$new("" + "(1D100) ＞ " + total);
          }

          ;
          expr = "" + "(1D100<=" + diff + ")";

          if ($truthy($rb_gt(broken_num, 0))) {
            expr = $rb_plus(expr, "" + " " + self.$translate("Cthulhu.broken_number") + "[" + broken_num + "]");
          }

          ;
          total = self.randomizer.$roll_once(100);
          compare_result = self.$compare(total, diff, broken_num);
          return $send(compare_result.$to_result(), 'tap', [], (_$$ = function $$4(r) {
            var self = _$$.$$s == null ? this : _$$.$$s,
                $writer = nil;

            if (r == null) {
              r = nil;
            }

            ;
            $writer = ["" + expr + " ＞ " + total + " ＞ " + compare_result.$text()];
            $send(r, 'text=', Opal.to_a($writer));
            return $writer[$rb_minus($writer["length"], 1)];
          }, _$$.$$s = self, _$$.$$arity = 1, _$$));
        }, $Cthulhu_getCheckResult$3.$$arity = 1);

        (function ($base, $super, $parent_nesting) {
          var self = $klass($base, $super, 'CompareResult');
          var $nesting = [self].concat($parent_nesting),
              $CompareResult_initialize$5,
              $CompareResult_text$6,
              $CompareResult_to_result$7;
          self.$include($$($nesting, 'Translate'));
          self.$attr_accessor("success", "failure", "critical", "fumble", "special", "broken");
          Opal.def(self, '$initialize', $CompareResult_initialize$5 = function $$initialize(locale) {
            var self = this;
            self.locale = locale;
            self.success = false;
            self.failure = false;
            self.critical = false;
            self.fumble = false;
            self.special = false;
            return self.broke = false;
          }, $CompareResult_initialize$5.$$arity = 1);
          Opal.def(self, '$text', $CompareResult_text$6 = function $$text() {
            var self = this,
                $ret_or_1 = nil,
                $ret_or_2 = nil;

            if ($truthy(function () {
              if ($truthy($ret_or_1 = self.$critical())) {
                return self.$special();
              } else {
                return $ret_or_1;
              }

              ;
              return nil;
            }())) {
              return self.$translate("Cthulhu.critical_special");
            } else if ($truthy(self.$critical())) {
              return self.$translate("Cthulhu.critical");
            } else if ($truthy(self.$special())) {
              return self.$translate("Cthulhu.special");
            } else if ($truthy(self.$success())) {
              return self.$translate("success");
            } else if ($truthy(function () {
              if ($truthy($ret_or_2 = self.$broken())) {
                return self.$fumble();
              } else {
                return $ret_or_2;
              }

              ;
              return nil;
            }())) {
              return "" + self.$translate("Cthulhu.fumble") + "/" + self.$translate("Cthulhu.broken");
            } else if ($truthy(self.$broken())) {
              return self.$translate("Cthulhu.broken");
            } else if ($truthy(self.$fumble())) {
              return self.$translate("Cthulhu.fumble");
            } else if ($truthy(self.$failure())) {
              return self.$translate("failure");
            } else {
              return nil;
            }
          }, $CompareResult_text$6.$$arity = 0);
          return (Opal.def(self, '$to_result', $CompareResult_to_result$7 = function $$to_result() {
            var _$$2,
                self = this;

            return $send($$($nesting, 'Result').$new(), 'tap', [], (_$$2 = function $$8(r) {
              var self = _$$2.$$s == null ? this : _$$2.$$s,
                  $writer = nil;

              if (r == null) {
                r = nil;
              }

              ;
              $writer = [self.$success()];
              $send(r, 'success=', Opal.to_a($writer));
              $writer[$rb_minus($writer["length"], 1)];
              ;
              $writer = [self.$failure()];
              $send(r, 'failure=', Opal.to_a($writer));
              $writer[$rb_minus($writer["length"], 1)];
              ;
              $writer = [self.$critical()];
              $send(r, 'critical=', Opal.to_a($writer));
              $writer[$rb_minus($writer["length"], 1)];
              ;
              $writer = [self.$fumble()];
              $send(r, 'fumble=', Opal.to_a($writer));
              return $writer[$rb_minus($writer["length"], 1)];
              ;
            }, _$$2.$$s = self, _$$2.$$arity = 1, _$$2));
          }, $CompareResult_to_result$7.$$arity = 0), nil) && 'to_result';
        })($nesting[0], null, $nesting);

        Opal.def(self, '$compare', $Cthulhu_compare$9 = function $$compare(total, target, broken_number) {
          var self = this,
              result = nil,
              target_special = nil,
              $ret_or_3 = nil,
              $writer = nil,
              $ret_or_4 = nil;

          if (broken_number == null) {
            broken_number = 0;
          }

          ;
          result = $$($nesting, 'CompareResult').$new(self.locale);
          target_special = $rb_divide($rb_times(target, self.special_percentage), 100).$to_i().$clamp(1, 100);

          if ($truthy(function () {
            if ($truthy($ret_or_3 = $rb_le(total, target))) {
              return $rb_lt(total, 100);
            } else {
              return $ret_or_3;
            }

            ;
            return nil;
          }())) {
            $writer = [true];
            $send(result, 'success=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
            $writer = [$rb_le(total, target_special)];
            $send(result, 'special=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
            $writer = [$rb_le(total, self.critical_percentage)];
            $send(result, 'critical=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
          } else {
            $writer = [true];
            $send(result, 'failure=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
            $writer = [$rb_ge(total, $rb_minus(101, self.fumble_percentage))];
            $send(result, 'fumble=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
          }

          ;

          if ($truthy(function () {
            if ($truthy($ret_or_4 = $rb_gt(broken_number, 0))) {
              return $rb_ge(total, broken_number);
            } else {
              return $ret_or_4;
            }

            ;
            return nil;
          }())) {
            $writer = [true];
            $send(result, 'broken=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
            $writer = [true];
            $send(result, 'failure=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
            $writer = [false];
            $send(result, 'success=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
            $writer = [false];
            $send(result, 'special=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
            $writer = [false];
            $send(result, 'critical=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
          }

          ;
          return result;
        }, $Cthulhu_compare$9.$$arity = -3);
        Opal.def(self, '$getRegistResult', $Cthulhu_getRegistResult$10 = function $$getRegistResult(command) {
          var _$$3,
              self = this,
              m = nil,
              value = nil,
              target = nil,
              total_n = nil,
              compare_result = nil;

          m = /^RES(B)?([-\d]+)$/i.$match(command);

          if ($truthy(m)) {} else {
            return nil;
          }

          ;
          value = m['$[]'](2).$to_i();
          target = $rb_plus($rb_times(value, 5), 50);

          if ($truthy($rb_lt(target, 5))) {
            return $$($nesting, 'Result').$failure("" + "(1d100<=" + target + ") ＞ " + self.$translate("Cthulhu.automatic_failure"));
          }

          ;

          if ($truthy($rb_gt(target, 95))) {
            return $$($nesting, 'Result').$success("" + "(1d100<=" + target + ") ＞ " + self.$translate("Cthulhu.automatic_success"));
          }

          ;
          total_n = self.randomizer.$roll_once(100);
          compare_result = self.$compare(total_n, target);
          return $send(compare_result.$to_result(), 'tap', [], (_$$3 = function $$11(r) {
            var self = _$$3.$$s == null ? this : _$$3.$$s,
                $writer = nil;

            if (r == null) {
              r = nil;
            }

            ;
            $writer = ["" + "(1d100<=" + target + ") ＞ " + total_n + " ＞ " + compare_result.$text()];
            $send(r, 'text=', Opal.to_a($writer));
            return $writer[$rb_minus($writer["length"], 1)];
          }, _$$3.$$s = self, _$$3.$$arity = 1, _$$3));
        }, $Cthulhu_getRegistResult$10.$$arity = 1);
        return (Opal.def(self, '$getCombineRoll', $Cthulhu_getCombineRoll$12 = function $$getCombineRoll(command) {
          var _$$4,
              self = this,
              m = nil,
              diff_1 = nil,
              diff_2 = nil,
              total = nil,
              result_1 = nil,
              result_2 = nil,
              rank = nil,
              $ret_or_5 = nil,
              $ret_or_6 = nil;

          m = /^CBR(B)?\((\d+),(\d+)\)$/i.$match(command);

          if ($truthy(m)) {} else {
            return nil;
          }

          ;
          diff_1 = m['$[]'](2).$to_i();
          diff_2 = m['$[]'](3).$to_i();
          total = self.randomizer.$roll_once(100);
          result_1 = self.$compare(total, diff_1);
          result_2 = self.$compare(total, diff_2);

          rank = function () {
            if ($truthy(function () {
              if ($truthy($ret_or_5 = result_1.$success())) {
                return result_2.$success();
              } else {
                return $ret_or_5;
              }

              ;
              return nil;
            }())) {
              return self.$translate("success");
            } else if ($truthy(function () {
              if ($truthy($ret_or_6 = result_1.$success())) {
                return $ret_or_6;
              } else {
                return result_2.$success();
              }

              ;
              return nil;
            }())) {
              return self.$translate("Cthulhu.partial_success");
            } else {
              return self.$translate("failure");
            }

            ;
            return nil;
          }();

          return $send($$($nesting, 'Result').$new(), 'tap', [], (_$$4 = function $$13(r) {
            var self = _$$4.$$s == null ? this : _$$4.$$s,
                $writer = nil,
                $ret_or_7 = nil,
                $ret_or_8 = nil,
                $ret_or_9 = nil;

            if (r == null) {
              r = nil;
            }

            ;
            $writer = ["" + "(1d100<=" + diff_1 + "," + diff_2 + ") ＞ " + total + "[" + result_1.$text() + "," + result_2.$text() + "] ＞ " + rank];
            $send(r, 'text=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
            $writer = [function () {
              if ($truthy($ret_or_7 = result_1.$critical())) {
                return $ret_or_7;
              } else {
                return result_2.$critical();
              }

              ;
              return nil;
            }()];
            $send(r, 'critical=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
            $writer = [function () {
              if ($truthy($ret_or_8 = result_1.$fumble())) {
                return $ret_or_8;
              } else {
                return result_2.$fumble();
              }

              ;
              return nil;
            }()];
            $send(r, 'fumble=', Opal.to_a($writer));
            $writer[$rb_minus($writer["length"], 1)];
            ;
            $writer = [function () {
              if ($truthy($ret_or_9 = result_1.$success())) {
                return $ret_or_9;
              } else {
                return result_2.$success();
              }

              ;
              return nil;
            }()];
            $send(r, 'condition=', Opal.to_a($writer));
            return $writer[$rb_minus($writer["length"], 1)];
            ;
          }, _$$4.$$s = self, _$$4.$$arity = 1, _$$4));
        }, $Cthulhu_getCombineRoll$12.$$arity = 1), nil) && 'getCombineRoll';
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
};
/* Generated by Opal 1.1.1 */


(function (Opal) {
  var self = Opal.top,
      $nesting = [],
      nil = Opal.nil,
      $$$ = Opal.$$$,
      $$ = Opal.$$,
      $module = Opal.module,
      $klass = Opal.klass,
      $send2 = Opal.send2;
  self.$require("bcdice/game_system/Cthulhu");
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'Cthulhu_ChineseTraditional');
        var $nesting = [self].concat($parent_nesting),
            $Cthulhu_ChineseTraditional_initialize$1;
        Opal.const_set($nesting[0], 'ID', "Cthulhu:ChineseTraditional");
        Opal.const_set($nesting[0], 'NAME', "克蘇魯神話");
        Opal.const_set($nesting[0], 'SORT_KEY', "国際化:Chinese Traditional:克蘇魯神話");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "c=爆擊率 ／ f=大失敗值 ／ s=特殊\n" + "\n" + "1d100<=n    c・f・s全關閉（只進行單純數值比較判定）\n" + "\n" + "・cfs付註判定指令\n" + "\n" + "CC\t 1d100擲骰 c=1、f=100\n" + "CCB  同上、c=5、f=96\n" + "\n" + "例：CC<=80  （以技能值80來判定。cf適用於1%規則）\n" + "例：CCB<=55 （以技能值55來判定。cf適用於5%規則）\n" + "\n" + "・關於組合骰組\n" + "\n" + "CBR(x,y)\tc=1、f=100\n" + "CBRB(x,y)\tc=5、f=96\n" + "\n" + "・關於對抗骰\n" + "RES(x-y)\tc=1、f=100\n" + "RESB(x-y)\tc=5、f=96\n" + "\n" + "※故障率判定\n" + "\n" + "・CC(x) c=1、f=100\n" + "x=故障率。擲出骰值x以上時、需在大失敗發生同時輸出（參照「大失敗＆故障」）\n" + "沒有大失敗時，無論成功或失敗只需參考[故障]來輸出(並非成功或失敗來輸出，而是覆蓋上去並對其輸出)\n" + "\n" + "・CCB(x) c=5、f=96\n" + "同上\n" + "\n");
        self.$register_prefix_from_super_class();
        return (Opal.def(self, '$initialize', $Cthulhu_ChineseTraditional_initialize$1 = function $$initialize(command) {
          var $iter = $Cthulhu_ChineseTraditional_initialize$1.$$p,
              $yield = $iter || nil,
              self = this;
          if ($iter) $Cthulhu_ChineseTraditional_initialize$1.$$p = null;
          $send2(self, Opal.find_super_dispatcher(self, 'initialize', $Cthulhu_ChineseTraditional_initialize$1, false, true), 'initialize', [command], null);
          return self.locale = "zh_hant";
        }, $Cthulhu_ChineseTraditional_initialize$1.$$arity = 1), nil) && 'initialize';
      })($nesting[0], $$($nesting, 'Cthulhu'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~Cthulhu_ChineseTraditional~index.js.map