(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Kamigakari~index"],{

/***/ "S+zv":
/*!******************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/Kamigakari.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./../opal */ "pQ1d");
/* Generated by Opal 1.1.1 */


(function (Opal) {
  function $rb_plus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs + rhs : lhs['$+'](rhs);
  }

  function $rb_lt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs < rhs : lhs['$<'](rhs);
  }

  function $rb_gt(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs > rhs : lhs['$>'](rhs);
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
      $hash2 = Opal.hash2;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'Kamigakari');
        var $nesting = [self].concat($parent_nesting),
            $Kamigakari_initialize$1,
            $Kamigakari_eval_game_system_specific_command$2,
            $Kamigakari_getGetMaterialTableResult$3,
            $Kamigakari_getMaterialEffect$4,
            $Kamigakari_getMaterialEffectNomal$5,
            $Kamigakari_getMaterialEffectPower$6,
            $Kamigakari_getMaterialEffectRare$7,
            $Kamigakari_getAttribute$8,
            $Kamigakari_getPrice$9;
        self.$$prototype.randomizer = nil;
        Opal.const_set($nesting[0], 'ID', "Kamigakari");
        Opal.const_set($nesting[0], 'NAME', "神我狩");
        Opal.const_set($nesting[0], 'SORT_KEY', "かみかかり");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・各種表\n" + " ・感情表(ET)\n" + " ・霊紋消費の代償表(RT)\n" + " ・伝奇名字・名前決定表(NT)\n" + " ・魔境臨界表(KT)\n" + " ・獲得素材チャート(MTx xは［法則障害］の［強度］。省略時は１)\n" + "　　例） MT　MT3　MT9\n" + "・D66ダイスあり\n");
        Opal.def(self, '$initialize', $Kamigakari_initialize$1 = function $$initialize(command) {
          var $iter = $Kamigakari_initialize$1.$$p,
              $yield = $iter || nil,
              self = this;
          if ($iter) $Kamigakari_initialize$1.$$p = null;
          $send2(self, Opal.find_super_dispatcher(self, 'initialize', $Kamigakari_initialize$1, false, true), 'initialize', [command], null);
          self.sort_add_dice = true;
          return self.d66_sort_type = $$$($$($nesting, 'D66SortType'), 'NO_SORT');
        }, $Kamigakari_initialize$1.$$arity = 1);
        Opal.def(self, '$eval_game_system_specific_command', $Kamigakari_eval_game_system_specific_command$2 = function $$eval_game_system_specific_command(command) {
          var $a,
              $b,
              self = this,
              tableName = nil,
              result = nil,
              $case = nil,
              rank = nil,
              $ret_or_1 = nil,
              number = nil,
              text = nil;
          tableName = "";
          result = "";
          self.$debug("eval_game_system_specific_command command", command);
          $case = command.$upcase();

          if (/^MT(\d*)$/['$===']($case)) {
            rank = $$($nesting, 'Regexp').$last_match(1);

            rank = function () {
              if ($truthy($ret_or_1 = rank)) {
                return $ret_or_1;
              } else {
                return 1;
              }

              ;
              return nil;
            }();

            rank = rank.$to_i();
            $b = self.$getGetMaterialTableResult(rank), $a = Opal.to_ary($b), tableName = $a[0] == null ? nil : $a[0], result = $a[1] == null ? nil : $a[1], number = $a[2] == null ? nil : $a[2], $b;
          } else {
            return self.$roll_tables(command, $$$(self.$class(), 'TABLES'));
          }

          ;

          if ($truthy(result['$empty?']())) {
            return "";
          }

          ;
          text = "" + tableName + "(" + number + ") ＞ " + result;
          return text;
        }, $Kamigakari_eval_game_system_specific_command$2.$$arity = 1);
        Opal.def(self, '$getGetMaterialTableResult', $Kamigakari_getGetMaterialTableResult$3 = function $$getGetMaterialTableResult(rank) {
          var $a,
              $b,
              self = this,
              tableName = nil,
              table = nil,
              result = nil,
              number = nil,
              effect = nil,
              number2 = nil,
              price = nil;
          tableName = self.$translate("Kamigakari.MT.name");
          table = self.$translate("Kamigakari.MT.items");
          $b = self.$get_table_by_d66(table), $a = Opal.to_ary($b), result = $a[0] == null ? nil : $a[0], number = $a[1] == null ? nil : $a[1], $b;
          $b = self.$getMaterialEffect(rank), $a = Opal.to_ary($b), effect = $a[0] == null ? nil : $a[0], number2 = $a[1] == null ? nil : $a[1], $b;
          number = "" + number + "," + number2;
          price = self.$getPrice(effect);
          result = self.$translate("Kamigakari.MT.result_format", $hash2(["material", "effect"], {
            "material": result,
            "effect": effect
          }));

          if ($truthy(price['$nil?']())) {} else {
            result = $rb_plus(result, "" + "：" + price);
          }

          ;
          return [tableName, result, number];
        }, $Kamigakari_getGetMaterialTableResult$3.$$arity = 1);
        Opal.def(self, '$getMaterialEffect', $Kamigakari_getMaterialEffect$4 = function $$getMaterialEffect(rank) {
          var $a,
              $b,
              self = this,
              number = nil,
              result = nil,
              type = nil,
              number2 = nil;
          number = self.randomizer.$roll_once(6);
          result = "";
          type = "";

          if ($truthy($rb_lt(number, 6))) {
            $b = self.$getMaterialEffectNomal(rank), $a = Opal.to_ary($b), result = $a[0] == null ? nil : $a[0], number2 = $a[1] == null ? nil : $a[1], $b;
            type = self.$translate("Kamigakari.MT.common_material.name");
          } else {
            $b = self.$getMaterialEffectRare(), $a = Opal.to_ary($b), result = $a[0] == null ? nil : $a[0], number2 = $a[1] == null ? nil : $a[1], $b;
            type = self.$translate("Kamigakari.MT.rare_material.name");
          }

          ;
          result = "" + type + "：" + result;
          number = "" + number + "," + number2;
          return [result, number];
        }, $Kamigakari_getMaterialEffect$4.$$arity = 1);
        Opal.def(self, '$getMaterialEffectNomal', $Kamigakari_getMaterialEffectNomal$5 = function $$getMaterialEffectNomal(rank) {
          var $a,
              $b,
              self = this,
              table = nil,
              number = nil,
              result = nil,
              power = nil,
              number2 = nil;
          table = self.$translate("Kamigakari.MT.common_material.items");
          number = self.randomizer.$roll_d66($$$($$($nesting, 'D66SortType'), 'NO_SORT'));
          result = self.$get_table_by_number(number, table);
          self.$debug("getMaterialEffectNomal result", result);

          if ($truthy(result['$=~'](/\+n/))) {
            $b = self.$getMaterialEffectPower(rank), $a = Opal.to_ary($b), power = $a[0] == null ? nil : $a[0], number2 = $a[1] == null ? nil : $a[1], $b;
            result = result.$sub(/\+n/, "" + "+" + power);
            number = "" + number + "," + number2;
          }

          ;
          return [result, number];
        }, $Kamigakari_getMaterialEffectNomal$5.$$arity = 1);
        Opal.def(self, '$getMaterialEffectPower', $Kamigakari_getMaterialEffectPower$6 = function $$getMaterialEffectPower(rank) {
          var $a,
              $b,
              self = this,
              table = nil,
              rankTable = nil,
              power = nil,
              number = nil;
          table = [[4, [1, 1, 1, 2, 2, 3]], [8, [1, 1, 2, 2, 3, 3]], [9, [1, 2, 3, 3, 4, 5]]];

          if ($truthy($rb_gt(rank, 9))) {
            rank = 9;
          }

          ;
          rankTable = self.$get_table_by_number(rank, table);
          $b = self.$get_table_by_1d6(rankTable), $a = Opal.to_ary($b), power = $a[0] == null ? nil : $a[0], number = $a[1] == null ? nil : $a[1], $b;
          return [power, number];
        }, $Kamigakari_getMaterialEffectPower$6.$$arity = 1);
        Opal.def(self, '$getMaterialEffectRare', $Kamigakari_getMaterialEffectRare$7 = function $$getMaterialEffectRare() {
          var $a,
              $b,
              self = this,
              table = nil,
              number = nil,
              result = nil,
              attribute = nil,
              number2 = nil;
          table = [[3, $rb_plus("**", self.$translate("Kamigakari.MT.rare_material.give_attribute"))], [5, $rb_plus("**", self.$translate("Kamigakari.MT.rare_material.halve_damage"))], [6, self.$translate("Kamigakari.MT.rare_material.optional_by_GM")]];
          number = self.randomizer.$roll_once(6);
          result = self.$get_table_by_number(number, table);
          self.$debug("getMaterialEffectRare result", result);

          if ($truthy(result['$include?']("**"))) {
            $b = self.$getAttribute(), $a = Opal.to_ary($b), attribute = $a[0] == null ? nil : $a[0], number2 = $a[1] == null ? nil : $a[1], $b;
            result = result.$sub("**", attribute.$to_s());
            number = "" + number + "," + number2;
          }

          ;
          return [result, number];
        }, $Kamigakari_getMaterialEffectRare$7.$$arity = 0);
        Opal.def(self, '$getAttribute', $Kamigakari_getAttribute$8 = function $$getAttribute() {
          var self = this,
              table = nil,
              number = nil,
              result = nil;
          table = self.$translate("Kamigakari.MT.attribute");
          number = self.randomizer.$roll_d66($$$($$($nesting, 'D66SortType'), 'NO_SORT'));
          result = self.$get_table_by_number(number, table);
          return [result, number];
        }, $Kamigakari_getAttribute$8.$$arity = 0);
        Opal.def(self, '$getPrice', $Kamigakari_getPrice$9 = function $$getPrice(effect) {
          var self = this,
              power = nil,
              m = nil,
              table = nil,
              price = nil;

          power = function () {
            if ($truthy(m = effect.$match(/\+(\d+)/))) {
              return m['$[]'](1).$to_i();
            } else if ($truthy(effect['$include?'](self.$translate("Kamigakari.MT.rare_material.give_attribute")))) {
              return 3;
            } else if ($truthy(effect['$include?'](self.$translate("Kamigakari.MT.rare_material.halve_damage")))) {
              return 4;
            } else {
              return 0;
            }

            ;
            return nil;
          }();

          table = [nil, "" + "500G(" + self.$translate("Kamigakari.MT.effect_power") + ":1)", "" + "1000G(" + self.$translate("Kamigakari.MT.effect_power") + ":2)", "" + "1500G(" + self.$translate("Kamigakari.MT.effect_power") + ":3)", "" + "2000G(" + self.$translate("Kamigakari.MT.effect_power") + ":4)", "" + "3000G(" + self.$translate("Kamigakari.MT.effect_power") + ":5)"];
          price = table['$[]'](power);
          return price;
        }, $Kamigakari_getPrice$9.$$arity = 1);

        (function (self, $parent_nesting) {
          var $nesting = [self].concat($parent_nesting),
              $translate_tables$10;
          self.$private();
          return (Opal.def(self, '$translate_tables', $translate_tables$10 = function $$translate_tables(locale) {
            var self = this;
            return $hash2(["RT", "ET", "KT", "NT"], {
              "RT": $$$($$($nesting, 'DiceTable'), 'Table').$from_i18n("Kamigakari.table.RT", locale),
              "ET": $$$($$($nesting, 'DiceTable'), 'D66Table').$from_i18n("Kamigakari.table.ET", locale),
              "KT": $$$($$($nesting, 'DiceTable'), 'D66Table').$from_i18n("Kamigakari.table.KT", locale),
              "NT": $$$($$($nesting, 'DiceTable'), 'D66Table').$from_i18n("Kamigakari.table.NT", locale)
            });
          }, $translate_tables$10.$$arity = 1), nil) && 'translate_tables';
        })(Opal.get_singleton_class(self), $nesting);

        Opal.const_set($nesting[0], 'TABLES', self.$translate_tables("ja_jp"));
        return self.$register_prefix("MT", $$($nesting, 'TABLES').$keys());
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~Kamigakari~index.js.map