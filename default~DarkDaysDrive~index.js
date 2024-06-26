(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~DarkDaysDrive~index"],{

/***/ "1ciI":
/*!*********************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/DarkDaysDrive.js ***!
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

  var self = Opal.top,
      $nesting = [],
      nil = Opal.nil,
      $$$ = Opal.$$$,
      $$ = Opal.$$,
      $module = Opal.module,
      $klass = Opal.klass,
      $send2 = Opal.send2,
      $truthy = Opal.truthy,
      $hash2 = Opal.hash2,
      $hash = Opal.hash;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'DarkDaysDrive');
        var $nesting = [self].concat($parent_nesting),
            $DarkDaysDrive_initialize$1,
            $DarkDaysDrive_result_2d6$2,
            $DarkDaysDrive_eval_game_system_specific_command$3;
        Opal.const_set($nesting[0], 'ID', "DarkDaysDrive");
        Opal.const_set($nesting[0], 'NAME', "ダークデイズドライブ");
        Opal.const_set($nesting[0], 'SORT_KEY', "たあくていすとらいふ");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・判定\n" + "スペシャル／ファンブル／成功／失敗を判定\n" + "・各種表\n" + "RTTn ランダム特技決定表(n：分野番号、省略可能)\n" + "RCT  ランダム分野決定表\n" + "ABRT アビリティ決定表\n" + "DT ダメージ表\n" + "FT 失敗表\n" + "GJT 大成功表\n" + "ITT 移動トラブル表\n" + "NTT 任務トラブル表\n" + "STT 襲撃トラブル表\n" + "HTT 変身トラブル表\n" + "DET ドライブイベント表\n" + "BET ブレイクイベント表\n" + "CT キャンプ表\n" + "KZT 関係属性表\n" + "IA イケメンアクション決定表\n" + " IAA 遠距離\n" + " IAB 移動\n" + " IAC 近距離\n" + " IAD 善人\n" + " IAE 悪人\n" + " IAF 幼い\n" + " IAG バカ\n" + " IAH 渋い\n" + " IAI 賢い\n" + " IAJ 超自然\n" + "・D66ダイスあり\n");
        Opal.def(self, '$initialize', $DarkDaysDrive_initialize$1 = function $$initialize(command) {
          var $iter = $DarkDaysDrive_initialize$1.$$p,
              $yield = $iter || nil,
              self = this;
          if ($iter) $DarkDaysDrive_initialize$1.$$p = null;
          $send2(self, Opal.find_super_dispatcher(self, 'initialize', $DarkDaysDrive_initialize$1, false, true), 'initialize', [command], null);
          return self.d66_sort_type = $$$($$($nesting, 'D66SortType'), 'ASC');
        }, $DarkDaysDrive_initialize$1.$$arity = 1);
        Opal.def(self, '$result_2d6', $DarkDaysDrive_result_2d6$2 = function $$result_2d6(total, dice_total, _dice_list, cmp_op, target) {
          var self = this;

          if (cmp_op['$=='](">=")) {} else {
            return nil;
          }

          ;

          if ($truthy($rb_le(dice_total, 2))) {
            return $$($nesting, 'Result').$fumble("ファンブル(判定失敗。失敗表(FT)を追加で１回振る)");
          } else if ($truthy($rb_ge(dice_total, 12))) {
            return $$($nesting, 'Result').$critical("スペシャル(判定成功。大成功表(GJT)を１回使用可能)");
          } else if (target['$==']("?")) {
            return $$($nesting, 'Result').$nothing();
          } else if ($truthy($rb_ge(total, target))) {
            return $$($nesting, 'Result').$success("成功");
          } else {
            return $$($nesting, 'Result').$failure("失敗");
          }

          ;
        }, $DarkDaysDrive_result_2d6$2.$$arity = 5);
        Opal.def(self, '$eval_game_system_specific_command', $DarkDaysDrive_eval_game_system_specific_command$3 = function $$eval_game_system_specific_command(command) {
          var self = this,
              $ret_or_1 = nil;

          if ($truthy($ret_or_1 = self.$roll_tables(command, $$($nesting, 'TABLES')))) {
            return $ret_or_1;
          } else {
            return $$($nesting, 'RTT').$roll_command(self.$randomizer(), command);
          }
        }, $DarkDaysDrive_eval_game_system_specific_command$3.$$arity = 1);
        Opal.const_set($nesting[0], 'RTT', $$$($$($nesting, 'DiceTable'), 'SaiFicSkillTable').$new([["背景", ["呪い", "絶望", "孤児", "死別", "一般人", "獲物", "憧れ", "友人", "挑戦者", "血縁", "永遠"]], ["仕事", ["脅迫", "捨てる", "拉致", "盗む", "ハッキング", "侵入", "変装", "だます", "隠す", "のぞく", "聞き出す"]], ["捜索", ["トイレ", "食事", "自然", "運動施設", "街", "友愛会", "暗部", "史跡", "文化施設", "温泉", "宿泊"]], ["趣味", ["お酒", "グルメ", "ダンス", "スポーツ", "健康", "ファッション", "恋愛", "フェス", "音楽", "物語", "学問"]], ["雰囲気", ["だらしない", "のんびり", "暖かい", "明るい", "甘い", "普通", "洗練", "渋い", "静か", "真面目", "冷たい"]], ["戦闘法", ["忍術", "古武術", "剣術", "棒術", "拳法", "ケンカ", "総合格闘技", "レスリング", "軍隊格闘術", "射撃", "弓術"]]], $hash2(["rtt_format"], {
          "rtt_format": "ランダム指定特技表(%<category_dice>d,%<row_dice>d) ＞ %<category_name>s《%<skill_name>s》"
        })));
        Opal.const_set($nesting[0], 'TABLES', $hash2(["ABRT", "DT", "FT", "GJT", "ITT", "NTT", "STT", "HTT", "DET", "BET", "CT", "KZT", "IA", "IAA", "IAB", "IAC", "IAD", "IAE", "IAF", "IAG", "IAH", "IAI", "IAJ"], {
          "ABRT": $$$($$($nesting, 'DiceTable'), 'D66Table').$new("アビリティ決定表", $$$($$($nesting, 'D66SortType'), 'ASC'), $hash(11, "インストラクター(P155)", 12, "運送業(P155)", 13, "運転手(P155)", 14, "カフェ店員(P155)", 15, "趣味人(P155)", 16, "ショップ店員(P155)", 22, "正社員(P156)", 23, "大工(P156)", 24, "探偵(P156)", 25, "バイヤー(P156)", 26, "俳優(P156)", 33, "派遣社員(P156)", 34, "犯罪者(P157)", 35, "バンドマン(P157)", 36, "バーテンダー(P157)", 44, "ヒモ(P157)", 45, "ホスト(P157)", 46, "ホテルマン(P157)", 55, "無職(P158)", 56, "用心棒(P158)", 66, "料理人(P158)")),
          "DT": $$$($$($nesting, 'DiceTable'), 'Table').$new("ダメージ表", "1D6", ["疲れ", "痛み", "焦り", "不調", "ショック", "ケガ"]),
          "FT": $$$($$($nesting, 'DiceTable'), 'Table').$new("失敗表", "1D6", ["任意のアイテムを一つ失う", "１ダメージを受ける", "【所持金ランク】が１減少する（最低０）", "２ダメージを受ける", "【所持金ランク】が２減少する（最低０）", "標的レベルが１増加する"]),
          "GJT": $$$($$($nesting, 'DiceTable'), 'Table').$new("大成功表", "1D6", ["主人からお褒めの言葉をいただく", "ダメージを１回復する", "ダメージを１回復する", "関係のチェックを一つ消す", "ダメージを２回復する", "【所持金ランク】が１増加する"]),
          "ITT": $$$($$($nesting, 'DiceTable'), 'Table').$new("移動トラブル表", "1D6", ["検問（P220)", "急な腹痛（P220)", "黒煙（P221)", "蚊（P221)", "落とし物（P222)", "空腹（P222)"]),
          "NTT": $$$($$($nesting, 'DiceTable'), 'Table').$new("任務トラブル表", "1D6", ["通報（P223)", "プレッシャー（P223)", "マナー違反（P224)", "志願者（P224)", "仲間割れ（P225)", "狩人の噂（P225)"]),
          "STT": $$$($$($nesting, 'DiceTable'), 'Table').$new("襲撃トラブル表", "1D6", ["孤独な追跡者（P226)", "地元の若者たち（P226)", "V-FILES（P227)", "チンピラの群れ（P227)", "孤独な狩人（P228)", "狩人の群れ（P228)"]),
          "HTT": $$$($$($nesting, 'DiceTable'), 'D66Table').$new("変身トラブル表", $$$($$($nesting, 'D66SortType'), 'NO_SORT'), $hash(11, "あれを食べたい(P214)", 12, "あれを着たい(P214)", 13, "あれを見たい(P215)", 14, "あれを狩りたい(P215)", 15, "あれを踊りたい(P216)", 16, "あれに入りたい(P216)", 21, "強奪(P217)", 22, "暴行(P217)", 23, "虐殺(P218)", 24, "誘拐(P218)", 25, "無精(P219)", 26, "失踪(P219)", 31, "あれを食べたい(P214)", 32, "あれを着たい(P214)", 33, "あれを見たい(P215)", 34, "あれを狩りたい(P215)", 35, "あれを踊りたい(P216)", 36, "あれに入りたい(P216)", 41, "強奪(P217)", 42, "暴行(P217)", 43, "虐殺(P218)", 44, "誘拐(P218)", 45, "無精(P219)", 46, "失踪(P219)", 51, "あれを食べたい(P214)", 52, "あれを着たい(P214)", 53, "あれを見たい(P215)", 54, "あれを狩りたい(P215)", 55, "あれを踊りたい(P216)", 56, "あれに入りたい(P216)", 61, "強奪(P217)", 62, "暴行(P217)", 63, "虐殺(P218)", 64, "誘拐(P218)", 65, "無精(P219)", 66, "失踪(P219)")),
          "DET": $$$($$($nesting, 'DiceTable'), 'Table').$new("ドライブイベント表", "1D6", ["身の上話をする。目標が背景分野で選択している特技がドライブ判定の指定特技になる。", "スキル自慢をする。目標が仕事分野で選択している特技がドライブ判定の指定特技になる。", "むかし行った場所の話をする。目標が捜索分野で選択している特技がドライブ判定の指定特技になる。", "趣味の話をする。目標が趣味分野で選択している特技がドライブ判定の指定特技になる。", "テーマがない雑談をする。目標が雰囲気分野で選択している特技がドライブ判定の指定特技になる。", "物騒な話をする。目標が戦闘法分野で選択している特技がドライブ判定の指定特技になる。"]),
          "BET": $$$($$($nesting, 'DiceTable'), 'Table').$new("ブレイクイベント表", "1D6", ["イケメンの車は風光明美な場所に到着する。197ページの「観光地」を参照。", "イケメンの車は明るい光に照らされた小さな店に到着する。197ページの「コンビニ」を参照。", "イケメンの車は巨大かつ何でも売っている店に到着する。198ページの「ホームセンター」を参照。", "イケメンの車はドライバーたちの憩いの地に到着する。198ページの「サービスエリア」を参照。", "イケメンの車は大きなサービスエリアのような場所に到着する。199ページの「道の駅」を参照。", "イケメンの車は闇の底に隠された秘密の場所に到着する。199ページの「友愛会支部」を参照。"]),
          "CT": $$$($$($nesting, 'DiceTable'), 'Table').$new("キャンプ表", "1D6", ["無料仮眠所・いい感じの空き地：定員無制限／居住性-2／価格0／発見率2", "カプセルホテル：定員1／居住性-1／価格3／発見率2", "ラブホテル：定員2／居住性0／価格4／発見率1", "ビジネスホテル：定員2／居住性0／価格4／発見率1", "観光ホテル：定員4／居住性1／価格5／発見率1", "高級ホテル：定員4／居住性2／価格6／発見率0"]),
          "KZT": $$$($$($nesting, 'DiceTable'), 'Table').$new("関係属性表", "1D6", ["軽蔑", "反感", "混乱", "興味", "共感", "憧れ"]),
          "IA": $$$($$($nesting, 'DiceTable'), 'D66Table').$new("イケメンアクション決定表", $$$($$($nesting, 'D66SortType'), 'ASC'), $hash(11, "遠距離", 12, "遠距離", 13, "移動", 14, "移動", 15, "近距離", 16, "近距離", 22, "善人", 23, "善人", 24, "悪人", 25, "悪人", 26, "幼い", 33, "幼い", 34, "バカ", 35, "バカ", 36, "渋い", 44, "渋い", 45, "賢い", 46, "賢い", 55, "超自然", 56, "超自然", 66, "振り直しor自由選択")),
          "IAA": $$$($$($nesting, 'DiceTable'), 'Table').$new("イケメンアクション（遠距離）表", "1D6", ["目を合わせて微笑む（かっこよさ：4）", "場所を譲る（かっこよさ：4）", "髪をかきあげる（かっこよさ：5）", "複雑なポーズで座る（かっこよさ：5）", "物憂げな表情で振り返る（かっこよさ：6）", "ものを上に持つ（かっこよさ：6）"]),
          "IAB": $$$($$($nesting, 'DiceTable'), 'Table').$new("イケメンアクション（移動）表", "1D6", ["車道側を歩く（かっこよさ：4）", "乗り物から降りる（かっこよさ：4）", "真剣な表情で近づく（かっこよさ：4）", "馬に乗る（かっこよさ：6）", "ダメージを受けつつ移動（かっこよさ：6）", "瞬間移動（かっこよさ：6）"]),
          "IAC": $$$($$($nesting, 'DiceTable'), 'Table').$new("イケメンアクション（近距離）表", "1D6", ["黙って見つめる（かっこよさ：3）", "ちょっとしたプレゼント（かっこよさ：3）", "顎クイ（かっこよさ：5）", "壁ドン（かっこよさ：5）", "お姫様抱っこ（かっこよさ：7）", "床ドン（かっこよさ：7）"]),
          "IAD": $$$($$($nesting, 'DiceTable'), 'Table').$new("イケメンアクション（善人）表", "1D6", ["手を引いて逃げる（かっこよさ：4）", "毛布を掛ける（かっこよさ：4）", "守る（かっこよさ：5）", "笑って去る（かっこよさ：5）", "全てを捧げる（かっこよさ：6）", "悪堕ち（かっこよさ：6）"]),
          "IAE": $$$($$($nesting, 'DiceTable'), 'Table').$new("イケメンアクション（悪人）表", "1D6", ["攻撃する（かっこよさ：4）", "暗く笑う（かっこよさ：4）", "奪う（かっこよさ：4）", "目論見を口にする（かっこよさ：6）", "罠にかける（かっこよさ：6）", "改心する（かっこよさ：6）"]),
          "IAF": $$$($$($nesting, 'DiceTable'), 'Table').$new("イケメンアクション（幼い）表", "1D6", ["甘える（かっこよさ：3）", "疲れる（かっこよさ：3）", "無邪気な発言（かっこよさ：5）", "おねだり（かっこよさ：5）", "上目遣い（かっこよさ：7）", "抱きつく（かっこよさ：7）"]),
          "IAG": $$$($$($nesting, 'DiceTable'), 'Table').$new("イケメンアクション（バカ）表", "1D6", ["苦悩する（かっこよさ：4）", "屈託のない笑顔（かっこよさ：4）", "転ぶ（かっこよさ：4）", "叫ぶ（かっこよさ：6）", "間違える（かっこよさ：6）", "怖がる（かっこよさ：6）"]),
          "IAH": $$$($$($nesting, 'DiceTable'), 'Table').$new("イケメンアクション（渋い）表", "1D6", ["説教（かっこよさ：4）", "気づかせる（かっこよさ：4）", "見守る（かっこよさ：5）", "残心（かっこよさ：5）", "称える（かっこよさ：6）", "いい位置を取る（かっこよさ：6）"]),
          "IAI": $$$($$($nesting, 'DiceTable'), 'Table').$new("イケメンアクション（賢い）表", "1D6", ["難しい本を読む（かっこよさ：3）", "アドバイスをする（かっこよさ：3）", "眼鏡を持ち上げる（かっこよさ：5）", "状況を解説する（かっこよさ：5）", "計算できなくなる（かっこよさ：7）", "大丈夫だと言う（かっこよさ：7）"]),
          "IAJ": $$$($$($nesting, 'DiceTable'), 'Table').$new("イケメンアクション（超自然）表", "1D6", ["水に濡れる（かっこよさ：4）", "風を纏う（かっこよさ：4）", "地割れ（かっこよさ：5）", "火を放つ（かっこよさ：5）", "闇を生み出す（かっこよさ：6）", "光る（かっこよさ：6）"])
        }).$freeze());
        return self.$register_prefix($$($nesting, 'RTT').$prefixes(), $$($nesting, 'TABLES').$keys());
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~DarkDaysDrive~index.js.map