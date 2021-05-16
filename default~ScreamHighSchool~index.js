(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ScreamHighSchool~index"],{

/***/ "nPUL":
/*!************************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/ScreamHighSchool.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./../opal */ "pQ1d");
/* Generated by Opal 1.1.1 */


Opal.modules["bcdice/game_system/GardenOrder"] = function (Opal) {
  function $rb_divide(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs / rhs : lhs['$/'](rhs);
  }

  function $rb_lt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs < rhs : lhs['$<'](rhs);
  }

  function $rb_le(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs <= rhs : lhs['$<='](rhs);
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
      $hash2 = Opal.hash2;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'GardenOrder');
        var $nesting = [self].concat($parent_nesting),
            $GardenOrder_eval_game_system_specific_command$1,
            $GardenOrder_get_critical_border$2,
            $GardenOrder_check_roll_repeat_attack$3,
            $GardenOrder_check_roll$4,
            $GardenOrder_get_check_result$5,
            $GardenOrder_look_up_damage_chart$6,
            $GardenOrder_get_damage_table_info_by_type$7;
        self.$$prototype.randomizer = nil;
        Opal.const_set($nesting[0], 'ID', "GardenOrder");
        Opal.const_set($nesting[0], 'NAME', "ガーデンオーダー");
        Opal.const_set($nesting[0], 'SORT_KEY', "かあてんおおたあ");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・基本判定\n" + "　GOx/y@z　x：成功率、y：連続攻撃回数（省略可）、z：クリティカル値（省略可）\n" + "　（連続攻撃では1回の判定のみが実施されます）\n" + "　例）GO55　GO100/2　GO70@10　GO155/3@44\n" + "・負傷表\n" + "　DCxxy\n" + "　xx：属性（切断：SL，銃弾：BL，衝撃：IM，灼熱：BR，冷却：RF，電撃：EL）\n" + "　y：ダメージ\n" + "　例）DCSL7　DCEL22\n");
        self.$register_prefix("GO", "DC(SL|BL|IM|BR|RF|EL).+");
        Opal.def(self, '$eval_game_system_specific_command', $GardenOrder_eval_game_system_specific_command$1 = function $$eval_game_system_specific_command(command) {
          var self = this,
              $case = nil,
              success_rate = nil,
              repeat_count = nil,
              $ret_or_1 = nil,
              critical_border_text = nil,
              critical_border = nil,
              type = nil,
              damage_value = nil;
          $case = command;

          if (/GO(-?\d+)(\/(\d+))?(@(\d+))?/i['$===']($case)) {
            success_rate = $$($nesting, 'Regexp').$last_match(1).$to_i();

            repeat_count = function () {
              if ($truthy($ret_or_1 = $$($nesting, 'Regexp').$last_match(3))) {
                return $ret_or_1;
              } else {
                return 1;
              }

              ;
              return nil;
            }().$to_i();

            critical_border_text = $$($nesting, 'Regexp').$last_match(5);
            critical_border = self.$get_critical_border(critical_border_text, success_rate);
            return self.$check_roll_repeat_attack(success_rate, repeat_count, critical_border);
          } else if (/^DC(SL|BL|IM|BR|RF|EL)(\d+)/i['$===']($case)) {
            type = $$($nesting, 'Regexp').$last_match(1);
            damage_value = $$($nesting, 'Regexp').$last_match(2).$to_i();
            return self.$look_up_damage_chart(type, damage_value);
          }

          ;
          return nil;
        }, $GardenOrder_eval_game_system_specific_command$1.$$arity = 1);
        Opal.def(self, '$get_critical_border', $GardenOrder_get_critical_border$2 = function $$get_critical_border(critical_border_text, success_rate) {
          var self = this,
              critical_border = nil;

          if ($truthy(critical_border_text['$nil?']())) {} else {
            return critical_border_text.$to_i();
          }

          ;
          critical_border = [$rb_divide(success_rate, 5), 1].$max().$to_i();
          return critical_border;
        }, $GardenOrder_get_critical_border$2.$$arity = 2);
        Opal.def(self, '$check_roll_repeat_attack', $GardenOrder_check_roll_repeat_attack$3 = function $$check_roll_repeat_attack(success_rate, repeat_count, critical_border) {
          var self = this,
              success_rate_per_one = nil;
          success_rate_per_one = $rb_divide(success_rate, repeat_count).$to_i();
          return self.$check_roll(success_rate_per_one, critical_border);
        }, $GardenOrder_check_roll_repeat_attack$3.$$arity = 3);
        Opal.def(self, '$check_roll', $GardenOrder_check_roll$4 = function $$check_roll(success_rate, critical_border) {
          var self = this,
              fumble_border = nil,
              dice_value = nil,
              result = nil,
              text = nil;

          if ($truthy($rb_lt(success_rate, 0))) {
            success_rate = 0;
          }

          ;

          fumble_border = function () {
            if ($truthy($rb_lt(success_rate, 100))) {
              return 96;
            } else {
              return 99;
            }

            ;
            return nil;
          }();

          dice_value = self.randomizer.$roll_once(100);
          result = self.$get_check_result(dice_value, success_rate, critical_border, fumble_border);
          text = "" + "D100<=" + success_rate + "@" + critical_border + " ＞ " + dice_value + " ＞ " + result;
          return text;
        }, $GardenOrder_check_roll$4.$$arity = 2);
        Opal.def(self, '$get_check_result', $GardenOrder_get_check_result$5 = function $$get_check_result(dice_value, success_rate, critical_border, fumble_border) {
          var self = this;

          if ($truthy($rb_le(dice_value, critical_border))) {
            return "クリティカル";
          }

          ;

          if ($truthy($rb_ge(dice_value, fumble_border))) {
            return "ファンブル";
          }

          ;

          if ($truthy($rb_le(dice_value, success_rate))) {
            return "成功";
          }

          ;
          return "失敗";
        }, $GardenOrder_get_check_result$5.$$arity = 4);
        Opal.def(self, '$look_up_damage_chart', $GardenOrder_look_up_damage_chart$6 = function $$look_up_damage_chart(type, damage_value) {
          var $a,
              $b,
              self = this,
              name = nil,
              table = nil,
              row = nil;
          $b = self.$get_damage_table_info_by_type(type), $a = Opal.to_ary($b), name = $a[0] == null ? nil : $a[0], table = $a[1] == null ? nil : $a[1], $b;
          row = self.$get_table_by_number(damage_value, table, nil);

          if ($truthy(row['$nil?']())) {
            return nil;
          }

          ;
          return "" + "負傷表：" + name + "[" + damage_value + "] ＞ " + row['$[]']("damage") + " ｜ " + row['$[]']("name") + " … " + row['$[]']("text");
        }, $GardenOrder_look_up_damage_chart$6.$$arity = 2);
        Opal.def(self, '$get_damage_table_info_by_type', $GardenOrder_get_damage_table_info_by_type$7 = function $$get_damage_table_info_by_type(type) {
          var self = this,
              data = nil;
          data = $$($nesting, 'DAMAGE_TABLE')['$[]'](type);

          if ($truthy(data['$nil?']())) {
            return nil;
          }

          ;
          return [data['$[]']("name"), data['$[]']("table")];
        }, $GardenOrder_get_damage_table_info_by_type$7.$$arity = 1);
        return Opal.const_set($nesting[0], 'DAMAGE_TABLE', $hash2(["SL", "BL", "IM", "BR", "RF", "EL"], {
          "SL": $hash2(["name", "table"], {
            "name": "切断",
            "table": [[5, $hash2(["name", "text", "damage"], {
              "name": "切り傷",
              "text": "皮膚が切り裂かれる。",
              "damage": "軽傷1"
            })], [10, $hash2(["name", "text", "damage"], {
              "name": "脚部負傷",
              "text": "足が切り裂かれ、思わずひざまずく。",
              "damage": "軽傷２／マヒ"
            })], [13, $hash2(["name", "text", "damage"], {
              "name": "出血",
              "text": "斬り裂かれた傷から出血が続く。",
              "damage": "軽傷３／ＤＯＴ：軽傷1"
            })], [16, $hash2(["name", "text", "damage"], {
              "name": "胴部負傷",
              "text": "胴部に大きな傷を受ける。",
              "damage": "軽傷４"
            })], [19, $hash2(["name", "text", "damage"], {
              "name": "腕部負傷",
              "text": "腕に大きな傷を受ける。",
              "damage": "重傷1／ＤＯＴ：軽傷1"
            })], [22, $hash2(["name", "text", "damage"], {
              "name": "腹部負傷",
              "text": "腹部を深く切り裂かれる。",
              "damage": "重傷２"
            })], [25, $hash2(["name", "text", "damage"], {
              "name": "大量出血",
              "text": "傷は深く、そこから大量に出血する。",
              "damage": "重傷２／ＤＯＴ：軽傷２"
            })], [28, $hash2(["name", "text", "damage"], {
              "name": "裂傷",
              "text": "治りにくい傷をつけられる。",
              "damage": "重傷３"
            })], [31, $hash2(["name", "text", "damage"], {
              "name": "視界不良",
              "text": "頭部に受けた傷から血が流れ、視界がふさがれる。",
              "damage": "重傷３／スタン"
            })], [34, $hash2(["name", "text", "damage"], {
              "name": "胸部負傷",
              "text": "胸から腰にかけて大きく切り裂かれる。",
              "damage": "致命傷1"
            })], [37, $hash2(["name", "text", "damage"], {
              "name": "動脈切断",
              "text": "動脈が切り裂かれ、噴き出るように出血する。",
              "damage": "致命傷1／ＤＯＴ：軽傷３"
            })], [39, $hash2(["name", "text", "damage"], {
              "name": "胸部切断",
              "text": "傷が肺にまで達し、喀血する。",
              "damage": "致命傷２"
            })], [9999, $hash2(["name", "text", "damage"], {
              "name": "脊髄損傷",
              "text": "脊髄が損傷する。",
              "damage": "致命傷２／放心、スタン、マヒ"
            })]]
          }),
          "BL": $hash2(["name", "table"], {
            "name": "銃弾",
            "table": [[5, $hash2(["name", "text", "damage"], {
              "name": "腕部損傷",
              "text": "銃弾が腕をかすめた。",
              "damage": "軽傷２"
            })], [10, $hash2(["name", "text", "damage"], {
              "name": "腕部貫通",
              "text": "銃弾が腕を貫く。痛みはあるが動作に支障はない。",
              "damage": "軽傷３"
            })], [13, $hash2(["name", "text", "damage"], {
              "name": "胴部負傷",
              "text": "胴部に銃弾をくらう。痛みで動きが鈍くなる。",
              "damage": "軽傷４／スロウ：－３"
            })], [16, $hash2(["name", "text", "damage"], {
              "name": "肩負傷",
              "text": "肩を貫かれる。骨が砕けたようだ。",
              "damage": "重傷1"
            })], [19, $hash2(["name", "text", "damage"], {
              "name": "腹部負傷",
              "text": "腹部が貫かれる。かろうじて内臓にダメージはないようだ。",
              "damage": "重傷２"
            })], [22, $hash2(["name", "text", "damage"], {
              "name": "脚部貫通",
              "text": "脚を銃弾に貫かれ、その場でひざまずく。",
              "damage": "重傷２／マヒ"
            })], [25, $hash2(["name", "text", "damage"], {
              "name": "消化器系損傷",
              "text": "胃などの消化器官にダメージを受ける。",
              "damage": "重傷３"
            })], [28, $hash2(["name", "text", "damage"], {
              "name": "盲管銃弾",
              "text": "身体に弾丸が深々と刺さる。激痛が走る。",
              "damage": "重傷３／スロウ：－5"
            })], [31, $hash2(["name", "text", "damage"], {
              "name": "内臓損傷",
              "text": "いくつかの内臓にダメージを受ける。",
              "damage": "致命傷1／スタン"
            })], [34, $hash2(["name", "text", "damage"], {
              "name": "胴部貫通",
              "text": "腹部への攻撃が貫通し、出血する。",
              "damage": "致命傷1／ＤＯＴ：軽傷1"
            })], [37, $hash2(["name", "text", "damage"], {
              "name": "胸部負傷",
              "text": "銃弾で肺を貫かれる。",
              "damage": "致命傷２"
            })], [39, $hash2(["name", "text", "damage"], {
              "name": "致命的な一撃",
              "text": "銃弾が頭部に命中。ショックで意識を飛ばされる。",
              "damage": "致命傷２／放心"
            })], [9999, $hash2(["name", "text", "damage"], {
              "name": "必殺の一撃",
              "text": "銃弾が心臓の近くを貫く。動脈にダメージを受けたようだ。",
              "damage": "致命傷２／ＤＯＴ：重傷1"
            })]]
          }),
          "IM": $hash2(["name", "table"], {
            "name": "衝撃",
            "table": [[5, $hash2(["name", "text", "damage"], {
              "name": "打撲",
              "text": "攻撃を受けた箇所がどす黒く腫れ上がる。",
              "damage": "軽傷1"
            })], [10, $hash2(["name", "text", "damage"], {
              "name": "転倒",
              "text": "衝撃で転倒する。",
              "damage": "軽傷1／マヒ"
            })], [13, $hash2(["name", "text", "damage"], {
              "name": "平衡感覚喪失",
              "text": "衝撃で三半規管にダメージを受ける。",
              "damage": "軽傷２、疲労２"
            })], [16, $hash2(["name", "text", "damage"], {
              "name": "ボディーブロー",
              "text": "腹部に直撃。痛みが継続し、体力を奪う。",
              "damage": "軽傷３／ＤＯＴ：疲労３"
            })], [19, $hash2(["name", "text", "damage"], {
              "name": "痛打",
              "text": "胴部や脚部などに打撃を受ける。",
              "damage": "軽傷４／スタン"
            })], [22, $hash2(["name", "text", "damage"], {
              "name": "頭部痛打",
              "text": "頭部にクリーンヒット。意識がもうろうとする。",
              "damage": "軽傷5／放心"
            })], [25, $hash2(["name", "text", "damage"], {
              "name": "脚部骨折",
              "text": "攻撃が足に命中し、骨折する。",
              "damage": "重傷1／スロウ：－5"
            })], [28, $hash2(["name", "text", "damage"], {
              "name": "大転倒",
              "text": "激しい衝撃によって、負傷すると共に大きく体勢を崩す。",
              "damage": "重傷1／マヒ、スタン"
            })], [31, $hash2(["name", "text", "damage"], {
              "name": "脳震盪",
              "text": "脳が大きく揺さぶられ、意識が飛びそうになる。",
              "damage": "重傷２／放心"
            })], [34, $hash2(["name", "text", "damage"], {
              "name": "複雑骨折",
              "text": "攻撃を受けた部分が大きくひしゃげ、複雑骨折したようだ。",
              "damage": "重傷３／放心、スタン"
            })], [37, $hash2(["name", "text", "damage"], {
              "name": "頭部裂傷",
              "text": "頭部に命中。皮膚が大きく裂ける。",
              "damage": "致命傷1、疲労３"
            })], [39, $hash2(["name", "text", "damage"], {
              "name": "肋骨負傷",
              "text": "折れた肋骨が肺に突き刺さり、まともに呼吸を行なうことができない。",
              "damage": "致命傷1／放心、スタン"
            })], [9999, $hash2(["name", "text", "damage"], {
              "name": "内臓損傷",
              "text": "衝撃が身体の芯まで届き、内臓がいくつか傷ついたようだ。",
              "damage": "致命傷２／ＤＯＴ：重傷1"
            })]]
          }),
          "BR": $hash2(["name", "table"], {
            "name": "灼熱",
            "table": [[5, $hash2(["name", "text", "damage"], {
              "name": "火傷",
              "text": "皮膚に小さな火傷を負う。",
              "damage": "軽傷1"
            })], [10, $hash2(["name", "text", "damage"], {
              "name": "温度上昇",
              "text": "熱によって、怪我だけではなく体力も奪われる。",
              "damage": "軽傷２、疲労1"
            })], [13, $hash2(["name", "text", "damage"], {
              "name": "恐怖",
              "text": "燃え上がる炎に恐怖を感じ、身体がすくんで動きが止まる。",
              "damage": "軽傷３／放心"
            })], [16, $hash2(["name", "text", "damage"], {
              "name": "発火",
              "text": "衣服や身体の一部に火が燃え移る。",
              "damage": "軽傷３／ＤＯＴ：軽傷1"
            })], [19, $hash2(["name", "text", "damage"], {
              "name": "爆発",
              "text": "爆発により吹き飛ばされ、転倒する。",
              "damage": "重傷1／マヒ"
            })], [22, $hash2(["name", "text", "damage"], {
              "name": "大火傷",
              "text": "痕が残るほどの大きな火傷を負う。",
              "damage": "重傷２"
            })], [25, $hash2(["name", "text", "damage"], {
              "name": "熱波",
              "text": "火傷と強力な熱により意識がもうろうとする。",
              "damage": "重傷２／スタン"
            })], [28, $hash2(["name", "text", "damage"], {
              "name": "大爆発",
              "text": "激しい爆発で吹き飛ばされ、ダメージと共に転倒する。",
              "damage": "重傷３／マヒ"
            })], [31, $hash2(["name", "text", "damage"], {
              "name": "大発火",
              "text": "広範囲に火が燃え移る。",
              "damage": "重傷３／ＤＯＴ：軽傷1"
            })], [34, $hash2(["name", "text", "damage"], {
              "name": "炭化",
              "text": "高熱のあまり、焼けた部分が炭化してしまう。",
              "damage": "致命傷1"
            })], [37, $hash2(["name", "text", "damage"], {
              "name": "内臓火傷",
              "text": "高温の空気を吸い込む、気道にも火傷を負ってしまう。",
              "damage": "致命傷1／ＤＯＴ：軽傷1"
            })], [39, $hash2(["name", "text", "damage"], {
              "name": "全身火傷",
              "text": "身体の各所に深い火傷を負う。",
              "damage": "致命傷２"
            })], [9999, $hash2(["name", "text", "damage"], {
              "name": "致命的火傷",
              "text": "身体の大部分に焼けどを負う。",
              "damage": "致命傷２／スタン"
            })]]
          }),
          "RF": $hash2(["name", "table"], {
            "name": "冷却",
            "table": [[5, $hash2(["name", "text", "damage"], {
              "name": "冷気",
              "text": "軽い凍傷を受ける。",
              "damage": "軽傷1"
            })], [10, $hash2(["name", "text", "damage"], {
              "name": "霜の衣",
              "text": "身体が薄い氷で覆われ、動きが鈍る。",
              "damage": "軽傷1／疲労1"
            })], [13, $hash2(["name", "text", "damage"], {
              "name": "凍傷",
              "text": "凍傷により身体が傷つけられる。",
              "damage": "軽傷２"
            })], [16, $hash2(["name", "text", "damage"], {
              "name": "体温低下",
              "text": "冷気によって体温を奪われる。",
              "damage": "軽傷３／ＤＯＴ：疲労1"
            })], [19, $hash2(["name", "text", "damage"], {
              "name": "氷の枷",
              "text": "肘や膝などが氷で覆われ、動きが取りにくくなる。",
              "damage": "重傷1／マヒ"
            })], [22, $hash2(["name", "text", "damage"], {
              "name": "大凍傷",
              "text": "身体の各所に凍傷を受ける。",
              "damage": "重傷1／ＤＯＴ：疲労２"
            })], [25, $hash2(["name", "text", "damage"], {
              "name": "氷の束縛",
              "text": "下半身が凍りつき、動くことができない。",
              "damage": "重傷２／マヒ"
            })], [28, $hash2(["name", "text", "damage"], {
              "name": "視界不良",
              "text": "頭部にも氷が張り、視界がふさがれる。",
              "damage": "重傷２／スタン"
            })], [31, $hash2(["name", "text", "damage"], {
              "name": "腕部凍結",
              "text": "腕が凍りづけになり、動かすことができない。",
              "damage": "重傷３／放心"
            })], [34, $hash2(["name", "text", "damage"], {
              "name": "重度凍傷",
              "text": "さらに体温が低下し、深刻な凍傷を受ける。",
              "damage": "致命傷1"
            })], [37, $hash2(["name", "text", "damage"], {
              "name": "全身凍結",
              "text": "全身が凍りづけになる。",
              "damage": "致命傷1／ＤＯＴ：疲労２"
            })], [39, $hash2(["name", "text", "damage"], {
              "name": "致命的凍傷",
              "text": "身体全身に凍傷を受ける。",
              "damage": "致命傷２"
            })], [9999, $hash2(["name", "text", "damage"], {
              "name": "氷の棺",
              "text": "完全に氷に閉じ込められる。",
              "damage": "致命傷２／スタン、マヒ"
            })]]
          }),
          "EL": $hash2(["name", "table"], {
            "name": "電撃",
            "table": [[5, $hash2(["name", "text", "damage"], {
              "name": "静電気",
              "text": "全身の毛が逆立つ。",
              "damage": "疲労３"
            })], [10, $hash2(["name", "text", "damage"], {
              "name": "電熱傷",
              "text": "電流によって傷つく。",
              "damage": "疲労1、軽傷1"
            })], [13, $hash2(["name", "text", "damage"], {
              "name": "感電",
              "text": "電流で傷つくと共に、身体が軽くしびれる。",
              "damage": "疲労２、軽傷２"
            })], [16, $hash2(["name", "text", "damage"], {
              "name": "閃光",
              "text": "激しい電光により、一時的に視界がふさがれる。",
              "damage": "軽傷３／スタン"
            })], [19, $hash2(["name", "text", "damage"], {
              "name": "脚部感電",
              "text": "電流により脚がしびれ、動けなくなる。",
              "damage": "重傷1／マヒ"
            })], [22, $hash2(["name", "text", "damage"], {
              "name": "大電熱傷",
              "text": "身体の各所が電流によって傷つく。",
              "damage": "疲労２、重傷２"
            })], [25, $hash2(["name", "text", "damage"], {
              "name": "腕部負傷",
              "text": "電流で腕がしびれ、動けなくなる。",
              "damage": "軽傷1、重傷２／放心"
            })], [28, $hash2(["name", "text", "damage"], {
              "name": "大感電",
              "text": "電流によって身体中がしびれ、動けなくなる。",
              "damage": "重傷２／スタン、マヒ"
            })], [31, $hash2(["name", "text", "damage"], {
              "name": "一時心停止",
              "text": "強力な電撃のショックにより、心臓がほんの一瞬だけ止まる。",
              "damage": "疲労３、重傷３"
            })], [34, $hash2(["name", "text", "damage"], {
              "name": "大電流",
              "text": "全身に電流が駆け巡る。",
              "damage": "重傷３／放心、マヒ"
            })], [37, $hash2(["name", "text", "damage"], {
              "name": "致命電熱傷",
              "text": "全身が電流によって傷つく。",
              "damage": "重傷1、致命傷1"
            })], [39, $hash2(["name", "text", "damage"], {
              "name": "心停止",
              "text": "強力な電撃のショックにより、心臓が一時的に止まる。死の淵が見える。",
              "damage": "疲労３、重傷1、致命傷1"
            })], [9999, $hash2(["name", "text", "damage"], {
              "name": "組織炭化",
              "text": "全身が電流で焼かれ、あちこちの組織が炭化する。",
              "damage": "致命傷２／スタン"
            })]]
          })
        }).$freeze());
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
};
/* Generated by Opal 1.1.1 */


(function (Opal) {
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
      $truthy = Opal.truthy;
  self.$require("bcdice/game_system/GardenOrder");
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'ScreamHighSchool');
        var $nesting = [self].concat($parent_nesting),
            $ScreamHighSchool_eval_game_system_specific_command$1,
            $ScreamHighSchool_check_roll_sh$2,
            $ScreamHighSchool_get_supplementary$3;
        self.$$prototype.randomizer = nil;
        Opal.const_set($nesting[0], 'ID', "ScreamHighSchool");
        Opal.const_set($nesting[0], 'NAME', "スクリームハイスクール");
        Opal.const_set($nesting[0], 'SORT_KEY', "すくりいむはいすくうる");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・基本判定\n" + "　SHx/y@z　x：成功率、y：連続攻撃回数（省略可）、z：クリティカル値（省略可）\n" + "　（連続攻撃では1回の判定のみが実施されます）\n" + "　例）SH55　SH(40-20) SH100/2　SH70@10　SH155/3@44\n" + "・感情判定\n" + "　EMx@z　x：成功率、z：クリティカル値（省略可）\n" + "　例）EM50　EM50@15\n" + "・性格傾向判定\n" + "　TRx@z　x：成功率、z：クリティカル値（省略可）\n" + "　例）TR60　TR60@15\n" + "・恐怖判定\n" + "　FEx@z　x：成功率、z：クリティカル値（省略可）\n" + "　例）FE70　FE70@15\n" + "・負傷表\n" + "　DCxxy\n" + "　xx：属性（切断：SL，銃弾：BL，衝撃：IM，灼熱：BR，冷却：RF，電撃：EL）\n" + "　y：ダメージ\n" + "　例）DCSL7　DCEL22\n");
        self.$register_prefix("(SH|SHS)", "(EM|TR|FE)", "DC(SL|BL|IM|BR|RF|EL).+");
        Opal.def(self, '$eval_game_system_specific_command', $ScreamHighSchool_eval_game_system_specific_command$1 = function $$eval_game_system_specific_command(command) {
          var self = this,
              $case = nil,
              command_type = nil,
              success_rate = nil,
              critical_border_text = nil,
              critical_border = nil,
              repeat_count = nil,
              $ret_or_1 = nil,
              type = nil,
              damage_value = nil;
          $case = command;

          if (/(EM|TR|FE)(-?\d+)(@(\d+))?/i['$===']($case)) {
            command_type = $$($nesting, 'Regexp').$last_match(1).$upcase();
            success_rate = $$($nesting, 'Regexp').$last_match(2).$to_i();
            critical_border_text = $$($nesting, 'Regexp').$last_match(4);
            critical_border = self.$get_critical_border(critical_border_text, success_rate);
            return self.$check_roll_sh(success_rate, critical_border, command_type);
          } else if (/(SH|SHS)(-?\d+)(\/(\d+))?(@(\d+))?/i['$===']($case)) {
            success_rate = $$($nesting, 'Regexp').$last_match(2).$to_i();

            repeat_count = function () {
              if ($truthy($ret_or_1 = $$($nesting, 'Regexp').$last_match(4))) {
                return $ret_or_1;
              } else {
                return 1;
              }

              ;
              return nil;
            }().$to_i();

            critical_border_text = $$($nesting, 'Regexp').$last_match(6);
            critical_border = self.$get_critical_border(critical_border_text, success_rate);
            return self.$check_roll_repeat_attack(success_rate, repeat_count, critical_border);
          } else if (/^DC(SL|BL|IM|BR|RF|EL)(\d+)/i['$===']($case)) {
            type = $$($nesting, 'Regexp').$last_match(1);
            damage_value = $$($nesting, 'Regexp').$last_match(2).$to_i();
            return self.$look_up_damage_chart(type, damage_value);
          }

          ;
          return nil;
        }, $ScreamHighSchool_eval_game_system_specific_command$1.$$arity = 1);
        Opal.def(self, '$check_roll_sh', $ScreamHighSchool_check_roll_sh$2 = function $$check_roll_sh(success_rate, critical_border, command_type) {
          var $a,
              $b,
              self = this,
              fumble_border = nil,
              dice_value = nil,
              result = nil,
              title = nil,
              supplementary = nil,
              text = nil;

          if ($truthy($rb_lt(success_rate, 0))) {
            success_rate = 0;
          }

          ;

          fumble_border = function () {
            if ($truthy($rb_lt(success_rate, 100))) {
              return 96;
            } else {
              return 99;
            }

            ;
            return nil;
          }();

          dice_value = self.randomizer.$roll_once(100);
          result = self.$get_check_result(dice_value, success_rate, critical_border, fumble_border);
          $b = self.$get_supplementary(command_type, result), $a = Opal.to_ary($b), title = $a[0] == null ? nil : $a[0], supplementary = $a[1] == null ? nil : $a[1], $b;

          if ($truthy(supplementary['$empty?']())) {} else {
            supplementary = "" + "（" + supplementary + "）";
          }

          ;
          text = "" + title + "判定 D100<=" + success_rate + "@" + critical_border + " ＞ " + dice_value + " ＞ " + result + supplementary;
          return text;
        }, $ScreamHighSchool_check_roll_sh$2.$$arity = 3);
        return (Opal.def(self, '$get_supplementary', $ScreamHighSchool_get_supplementary$3 = function $$get_supplementary(command_type, result) {
          var self = this,
              title = nil,
              supplementary = nil,
              $case = nil;
          title = "";
          supplementary = "";
          $case = command_type;

          if ("EM"['$===']($case)) {
            title = "感情";
            $case = result;

            if ("クリティカル"['$===']($case)) {
              supplementary = "次に行う判定の成功率に+50%";
            } else if ("成功"['$===']($case)) {
              supplementary = "次に行う判定の成功率に+30%";
            } else if ("失敗"['$===']($case)) {
              supplementary = "次に行う判定の成功率に-20%、呪縛+1点";
            } else if ("ファンブル"['$===']($case)) {
              supplementary = "次に行う判定の成功率に-50%、呪縛+1D5点";
            }

            ;
          } else if ("TR"['$===']($case)) {
            title = "性格傾向";
            $case = result;

            if ("失敗"['$===']($case)) {
              supplementary = "反対側の性格傾向で再判定する。あるいは、もしこれがその再判定の結果であればプレイヤーが性格傾向を選択する";
            } else if ("ファンブル"['$===']($case)) {
              supplementary = "反対側の性格傾向に従い、呪縛+1D5点する。あるいは、もしこれが失敗後の再判定の結果だった場合、PCは混乱し行動を放棄するか逃げ出す。呪縛+2点";
            } else {
              supplementary = "判定した性格傾向に従う";
            }

            ;
          } else if ("FE"['$===']($case)) {
            title = "恐怖";
            $case = result;

            if ("成功"['$===']($case)) {
              supplementary = "ショックを受け流した。恐怖判定効果表の成功側の値分、呪縛が上昇する";
            } else if ("失敗"['$===']($case)) {
              supplementary = "ショックを受けた。恐怖判定効果表の失敗側の値分、呪縛が上昇する";
            } else if ("ファンブル"['$===']($case)) {
              supplementary = "深いショックを受けた。恐怖判定効果表の失敗側の値分に加え、さらに1D5点分、呪縛が上昇する";
            } else {
              supplementary = "何もショックを受けなかった";
            }

            ;
          }

          ;
          return [title, supplementary];
        }, $ScreamHighSchool_get_supplementary$3.$$arity = 2), nil) && 'get_supplementary';
      })($nesting[0], $$($nesting, 'GardenOrder'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~ScreamHighSchool~index.js.map