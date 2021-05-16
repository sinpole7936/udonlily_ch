(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~EmbryoMachine~index"],{

/***/ "GgPt":
/*!*********************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/EmbryoMachine.js ***!
  \*********************************************************************/
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

  function $rb_gt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs > rhs : lhs['$>'](rhs);
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
      $truthy = Opal.truthy;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'EmbryoMachine');
        var $nesting = [self].concat($parent_nesting),
            $EmbryoMachine_initialize$1,
            $EmbryoMachine_replace_text$2,
            $EmbryoMachine_result_nd10$11,
            $EmbryoMachine_checkRoll$12,
            $EmbryoMachine_eval_game_system_specific_command$13,
            $EmbryoMachine_get_hit_location_table$14,
            $EmbryoMachine_get_shoot_fumble_table$15,
            $EmbryoMachine_get_melee_fumble_table$16,
            $EmbryoMachine_get_hit_level_table$17;
        self.$$prototype.randomizer = nil;
        Opal.const_set($nesting[0], 'ID', "EmbryoMachine");
        Opal.const_set($nesting[0], 'NAME', "エムブリオマシンRPG");
        Opal.const_set($nesting[0], 'SORT_KEY', "えむふりおましんRPG");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・判定ロール(EMt+m@c#f)\n" + "　目標値t、修正値m、クリティカル値c(省略時は20)、ファンブル値f(省略時は2)で攻撃判定を行います。\n" + "　命中した場合は命中レベルと命中部位も自動出力します。\n" + "　Rコマンドに読み替えされます。\n" + "・各種表\n" + "　・命中部位表　HLT\n" + "　・白兵攻撃ファンブル表　MFT\n" + "　・射撃攻撃ファンブル表　SFT\n");
        self.$register_prefix("EM", "HLT", "MFT", "SFT", "2R10");
        Opal.def(self, '$initialize', $EmbryoMachine_initialize$1 = function $$initialize(command) {
          var $iter = $EmbryoMachine_initialize$1.$$p,
              $yield = $iter || nil,
              self = this;
          if ($iter) $EmbryoMachine_initialize$1.$$p = null;
          $send2(self, Opal.find_super_dispatcher(self, 'initialize', $EmbryoMachine_initialize$1, false, true), 'initialize', [command], null);
          return self.sort_add_dice = true;
        }, $EmbryoMachine_initialize$1.$$arity = 1);
        Opal.def(self, '$replace_text', $EmbryoMachine_replace_text$2 = function $$replace_text(string) {
          var _$$,
              _$$2,
              _$$3,
              _$$4,
              _$$5,
              _$$6,
              _$$7,
              _$$8,
              self = this;

          return $send($send($send($send($send($send($send($send(string, 'gsub', [/EM(\d+)([+\-][+\-\d]+)(@(\d+))(\#(\d+))/i], (_$$ = function $$3() {
            var self = _$$.$$s == null ? this : _$$.$$s;
            return "" + "2R10" + $$($nesting, 'Regexp').$last_match(2) + ">=" + $$($nesting, 'Regexp').$last_match(1) + "[" + $$($nesting, 'Regexp').$last_match(4) + "," + $$($nesting, 'Regexp').$last_match(6) + "]";
          }, _$$.$$s = self, _$$.$$arity = 0, _$$)), 'gsub', [/EM(\d+)([+\-][+\-\d]+)(\#(\d+))/i], (_$$2 = function $$4() {
            var self = _$$2.$$s == null ? this : _$$2.$$s;
            return "" + "2R10" + $$($nesting, 'Regexp').$last_match(2) + ">=" + $$($nesting, 'Regexp').$last_match(1) + "[20," + $$($nesting, 'Regexp').$last_match(4) + "]";
          }, _$$2.$$s = self, _$$2.$$arity = 0, _$$2)), 'gsub', [/EM(\d+)([+\-][+\-\d]+)(@(\d+))/i], (_$$3 = function $$5() {
            var self = _$$3.$$s == null ? this : _$$3.$$s;
            return "" + "2R10" + $$($nesting, 'Regexp').$last_match(2) + ">=" + $$($nesting, 'Regexp').$last_match(1) + "[" + $$($nesting, 'Regexp').$last_match(4) + ",2]";
          }, _$$3.$$s = self, _$$3.$$arity = 0, _$$3)), 'gsub', [/EM(\d+)([+\-][+\-\d]+)/i], (_$$4 = function $$6() {
            var self = _$$4.$$s == null ? this : _$$4.$$s;
            return "" + "2R10" + $$($nesting, 'Regexp').$last_match(2) + ">=" + $$($nesting, 'Regexp').$last_match(1) + "[20,2]";
          }, _$$4.$$s = self, _$$4.$$arity = 0, _$$4)), 'gsub', [/EM(\d+)(@(\d+))(\#(\d+))/i], (_$$5 = function $$7() {
            var self = _$$5.$$s == null ? this : _$$5.$$s;
            return "" + "2R10>=" + $$($nesting, 'Regexp').$last_match(1) + "[" + $$($nesting, 'Regexp').$last_match(3) + "," + $$($nesting, 'Regexp').$last_match(5) + "]";
          }, _$$5.$$s = self, _$$5.$$arity = 0, _$$5)), 'gsub', [/EM(\d+)(\#(\d+))/i], (_$$6 = function $$8() {
            var self = _$$6.$$s == null ? this : _$$6.$$s;
            return "" + "2R10>=" + $$($nesting, 'Regexp').$last_match(1) + "[20," + $$($nesting, 'Regexp').$last_match(3) + "]";
          }, _$$6.$$s = self, _$$6.$$arity = 0, _$$6)), 'gsub', [/EM(\d+)(@(\d+))/i], (_$$7 = function $$9() {
            var self = _$$7.$$s == null ? this : _$$7.$$s;
            return "" + "2R10>=" + $$($nesting, 'Regexp').$last_match(1) + "[" + $$($nesting, 'Regexp').$last_match(3) + ",2]";
          }, _$$7.$$s = self, _$$7.$$arity = 0, _$$7)), 'gsub', [/EM(\d+)/i], (_$$8 = function $$10() {
            var self = _$$8.$$s == null ? this : _$$8.$$s;
            return "" + "2R10>=" + $$($nesting, 'Regexp').$last_match(1) + "[20,2]";
          }, _$$8.$$s = self, _$$8.$$arity = 0, _$$8));
        }, $EmbryoMachine_replace_text$2.$$arity = 1);
        Opal.def(self, '$result_nd10', $EmbryoMachine_result_nd10$11 = function $$result_nd10(total, dice_total, _dice_list, cmp_op, target) {
          var self = this;

          if (cmp_op['$=='](">=")) {} else {
            return nil;
          }

          ;

          if ($truthy($rb_le(dice_total, 2))) {
            return $$($nesting, 'Result').$fumble("ファンブル");
          } else if ($truthy($rb_ge(dice_total, 20))) {
            return $$($nesting, 'Result').$critical("クリティカル");
          } else if (target['$==']("?")) {
            return $$($nesting, 'Result').$nothing();
          } else if ($truthy($rb_ge(total, target))) {
            return $$($nesting, 'Result').$success("成功");
          } else {
            return $$($nesting, 'Result').$failure("失敗");
          }

          ;
        }, $EmbryoMachine_result_nd10$11.$$arity = 5);
        Opal.def(self, '$checkRoll', $EmbryoMachine_checkRoll$12 = function $$checkRoll(string) {
          var self = this,
              diff = nil,
              crit = nil,
              fumble = nil,
              mod = nil,
              modText = nil,
              dice_arr = nil,
              dice_now = nil,
              dice_str = nil,
              dice_loc = nil,
              big_dice = nil,
              output = nil,
              total_n = nil;
          string = self.$replace_text(string);

          if ($truthy(/(^|\s)S?(2[rR]10([+\-\d]+)?([>=]+(\d+))(\[(\d+),(\d+)\]))(\s|$)/i['$=~'](string))) {} else {
            return nil;
          }

          ;
          string = $$($nesting, 'Regexp').$last_match(2);
          diff = 0;
          crit = 20;
          fumble = 2;
          mod = 0;
          modText = $$($nesting, 'Regexp').$last_match(3);

          if ($truthy($$($nesting, 'Regexp').$last_match(5))) {
            diff = $$($nesting, 'Regexp').$last_match(5).$to_i();
          }

          ;

          if ($truthy($$($nesting, 'Regexp').$last_match(7))) {
            crit = $$($nesting, 'Regexp').$last_match(7).$to_i();
          }

          ;

          if ($truthy($$($nesting, 'Regexp').$last_match(8))) {
            fumble = $$($nesting, 'Regexp').$last_match(8).$to_i();
          }

          ;

          if ($truthy(modText)) {
            mod = $$($nesting, 'ArithmeticEvaluator').$eval(modText);
          }

          ;
          dice_arr = self.randomizer.$roll_barabara(2, 10).$sort();
          dice_now = dice_arr.$sum();
          dice_str = dice_arr.$join(",");
          dice_loc = self.randomizer.$roll_sum(2, 10);
          big_dice = dice_arr['$[]'](1);
          output = "" + dice_now + "[" + dice_str + "]";
          total_n = $rb_plus(dice_now, mod);

          if ($truthy($rb_gt(mod, 0))) {
            output = $rb_plus(output, "" + "+" + mod);
          } else if ($truthy($rb_lt(mod, 0))) {
            output = $rb_plus(output, mod.$to_s());
          }

          ;

          if ($truthy(output['$=~'](/[^\d\[\]]+/))) {
            output = "" + "(" + string + ") ＞ " + output + " ＞ " + total_n;
          } else {
            output = "" + "(" + string + ") ＞ " + output;
          }

          ;

          if ($truthy($rb_le(dice_now, fumble))) {
            output = $rb_plus(output, " ＞ ファンブル");
          } else if ($truthy($rb_ge(dice_now, crit))) {
            output = $rb_plus(output, $rb_plus($rb_plus(" ＞ クリティカル ＞ ", self.$get_hit_level_table(big_dice)), "" + "(ダメージ+10) ＞ [" + dice_loc + "]" + self.$get_hit_location_table(dice_loc)));
          } else if ($truthy($rb_ge(total_n, diff))) {
            output = $rb_plus(output, $rb_plus($rb_plus(" ＞ 成功 ＞ ", self.$get_hit_level_table(big_dice)), "" + " ＞ [" + dice_loc + "]" + self.$get_hit_location_table(dice_loc)));
          } else {
            output = $rb_plus(output, " ＞ 失敗");
          }

          ;
          return output;
        }, $EmbryoMachine_checkRoll$12.$$arity = 1);
        Opal.def(self, '$eval_game_system_specific_command', $EmbryoMachine_eval_game_system_specific_command$13 = function $$eval_game_system_specific_command(command) {
          var self = this,
              result = nil,
              output = nil,
              type = nil,
              number = nil,
              $case = nil;
          self.$debug("eval_game_system_specific_command command", command);

          if ($truthy(result = self.$checkRoll(command))) {
            return result;
          }

          ;
          output = "1";
          type = "";
          number = 0;
          $case = command;

          if (/HLT/i['$===']($case)) {
            type = "命中部位";
            number = self.randomizer.$roll_sum(2, 10);
            output = self.$get_hit_location_table(number);
          } else if (/SFT/i['$===']($case)) {
            type = "射撃ファンブル";
            number = self.randomizer.$roll_sum(2, 10);
            output = self.$get_shoot_fumble_table(number);
          } else if (/MFT/i['$===']($case)) {
            type = "白兵ファンブル";
            number = self.randomizer.$roll_sum(2, 10);
            output = self.$get_melee_fumble_table(number);
          }

          ;

          if ($truthy(output['$!=']("1"))) {
            output = "" + type + "表(" + number + ") ＞ " + output;
          }

          ;
          return output;
        }, $EmbryoMachine_eval_game_system_specific_command$13.$$arity = 1);
        Opal.def(self, '$get_hit_location_table', $EmbryoMachine_get_hit_location_table$14 = function $$get_hit_location_table(num) {
          var self = this,
              table = nil;
          table = [[4, "頭"], [7, "左脚"], [9, "左腕"], [12, "胴"], [14, "右腕"], [17, "右脚"], [20, "頭"]];
          return self.$get_table_by_number(num, table);
        }, $EmbryoMachine_get_hit_location_table$14.$$arity = 1);
        Opal.def(self, '$get_shoot_fumble_table', $EmbryoMachine_get_shoot_fumble_table$15 = function $$get_shoot_fumble_table(num) {
          var self = this,
              output = nil,
              table = nil,
              dc = nil;
          output = "1";
          table = ["暴発した。使用した射撃武器が搭載されている部位に命中レベルAで命中する。", "あまりに無様な誤射をした。パイロットの精神的負傷が2段階上昇する。", "誤射をした。自機に最も近い味方機体に命中レベルAで命中する。", "誤射をした。対象に最も近い味方機体に命中レベルAで命中する。", "武装が暴発した。使用した射撃武器が破損する。ダメージは発生しない。", "転倒した。次のセグメントのアクションが待機に変更される。", "弾詰まりを起こした。使用した射撃武器は戦闘終了まで使用できなくなる。", "砲身が大きく歪んだ。使用した射撃武器による射撃攻撃の命中値が戦闘終了まで-3される。", "熱量が激しく増大した。使用した射撃武器の消費弾薬が戦闘終了まで+3される。", "暴発した。使用した射撃武器が搭載されている部位に命中レベルBで命中する。", "弾薬が劣化した。使用した射撃武器の全てのダメージが戦闘終了まで-2される。", "無様な誤射をした。パイロットの精神的負傷が1段階上昇する。", "誤射をした。対象に最も近い味方機体に命中レベルBで命中する。", "誤射をした。自機に最も近い味方機体に命中レベルBで命中する。", "砲身が歪んだ。使用した射撃武器による射撃攻撃の命中値が戦闘終了まで-2される。", "熱量が増大した。使用した射撃武器の消費弾薬が戦闘終了まで+2される。", "砲身がわずかに歪んだ。使用した射撃武器による射撃攻撃の命中値が戦闘終了まで-1される。", "熱量がやや増大した。使用した射撃武器の消費弾薬が戦闘終了まで+1される。", "何も起きなかった。"];
          dc = 2;

          if ($truthy(table['$[]']($rb_minus(num, dc)))) {
            output = table['$[]']($rb_minus(num, dc));
          }

          ;
          return output;
        }, $EmbryoMachine_get_shoot_fumble_table$15.$$arity = 1);
        Opal.def(self, '$get_melee_fumble_table', $EmbryoMachine_get_melee_fumble_table$16 = function $$get_melee_fumble_table(num) {
          var self = this,
              output = nil,
              table = nil,
              dc = nil;
          output = "1";
          table = ["大振りしすぎた。使用した白兵武器が搭載されている部位の反対の部位(右腕に搭載されているなら左側)に命中レベルAで命中する。", "激しく頭を打った。パイロットの肉体的負傷が2段階上昇する。", "過負荷で部位が爆発した。使用した白兵武器が搭載されている部位が全壊する。ダメージは発生せず、搭載されている武装も破損しない。", "大振りしすぎた。使用した白兵武器が搭載されている部位の反対の部位(右腕に搭載されているなら左側)に命中レベルBで命中する。", "武装が爆発した。使用した白兵武器が破損する。ダメージは発生しない。", "部分的に機能停止した。使用した白兵武器は戦闘終了まで使用できなくなる。", "転倒した。次のセグメントのアクションが待機に変更される。", "激しい刃こぼれを起こした。使用した白兵武器の全てのダメージが戦闘終了まで-3される。", "地面の凹凸にはまった。次の2セグメントは移動を行うことができない。", "刃こぼれを起こした。使用した白兵武器の全てのダメージが戦闘終了まで-2される。", "大振りしすぎた。使用した白兵武器が搭載されている部位の反対の部位(右腕に搭載されているなら左側)に命中レベルCで命中する。", "頭を打った。パイロットの肉体的負傷が1段階上昇する。", "駆動系が損傷した。移動力が戦闘終了まで-2される(最低1)。", "間合いを取り損ねた。隣接している機体(複数の場合は1機をランダムに決定)に激突する。", "機体ごと突っ込んだ。機体が向いている方角へ移動力をすべて消費するまで移動する。", "制御系が損傷した。回避値が戦闘終了まで-1される(最低1)。", "踏み誤った。機体が向いている方角へ移動力の半分を消費するまで移動する。", "たたらを踏んだ。機体が向いている方角へ1の移動力で移動する。", "何も起きなかった。"];
          dc = 2;

          if ($truthy(table['$[]']($rb_minus(num, dc)))) {
            output = table['$[]']($rb_minus(num, dc));
          }

          ;
          return output;
        }, $EmbryoMachine_get_melee_fumble_table$16.$$arity = 1);
        return (Opal.def(self, '$get_hit_level_table', $EmbryoMachine_get_hit_level_table$17 = function $$get_hit_level_table(num) {
          var self = this,
              table = nil;
          table = [[6, "命中レベルC"], [9, "命中レベルB"], [10, "命中レベルA"]];
          return self.$get_table_by_number(num, table);
        }, $EmbryoMachine_get_hit_level_table$17.$$arity = 1), nil) && 'get_hit_level_table';
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~EmbryoMachine~index.js.map