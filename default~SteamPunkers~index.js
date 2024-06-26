(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~SteamPunkers~index"],{

/***/ "WqKD":
/*!********************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/SteamPunkers.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./../opal */ "pQ1d");
/* Generated by Opal 1.1.1 */


Opal.modules["bcdice/dice_table/d66_range_table"] = function (Opal) {
  function $rb_plus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs + rhs : lhs['$+'](rhs);
  }

  function $rb_times(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs * rhs : lhs['$*'](rhs);
  }

  var self = Opal.top,
      $nesting = [],
      nil = Opal.nil,
      $$$ = Opal.$$$,
      $$ = Opal.$$,
      $module = Opal.module,
      $klass = Opal.klass,
      $send = Opal.send;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'DiceTable');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'D66RangeTable');
        var $nesting = [self].concat($parent_nesting),
            $D66RangeTable_initialize$1,
            $D66RangeTable_roll$2;
        self.$$prototype.items = self.$$prototype.name = nil;
        Opal.def(self, '$initialize', $D66RangeTable_initialize$1 = function $$initialize(name, items) {
          var self = this;
          self.name = name;
          return self.items = items.$freeze();
        }, $D66RangeTable_initialize$1.$$arity = 2);
        return (Opal.def(self, '$roll', $D66RangeTable_roll$2 = function $$roll(randomizer) {
          var _$$,
              self = this,
              dice1 = nil,
              dice2 = nil,
              key = nil,
              chosen = nil;

          dice1 = randomizer.$roll_once(6);
          dice2 = randomizer.$roll_once(6);
          key = $rb_plus($rb_times(dice1, 10), dice2);
          chosen = $send(self.items, 'find', [], (_$$ = function $$3(row) {
            var self = _$$.$$s == null ? this : _$$.$$s;

            if (row == null) {
              row = nil;
            }

            ;
            return row['$[]'](0)['$include?'](key);
          }, _$$.$$s = self, _$$.$$arity = 1, _$$));
          return $$($nesting, 'RollResult').$new(self.name, key, chosen['$[]'](1));
        }, $D66RangeTable_roll$2.$$arity = 1), nil) && 'roll';
      })($nesting[0], null, $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
};
/* Generated by Opal 1.1.1 */


(function (Opal) {
  function $rb_plus(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs + rhs : lhs['$+'](rhs);
  }

  function $rb_times(lhs, rhs) {
    return typeof lhs === 'number' && typeof rhs === 'number' ? lhs * rhs : lhs['$*'](rhs);
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
      $send = Opal.send,
      $send2 = Opal.send2,
      $range = Opal.range,
      $hash2 = Opal.hash2;
  self.$require("bcdice/dice_table/d66_range_table");
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'SteamPunkers');
        var $nesting = [self].concat($parent_nesting),
            $SteamPunkers_eval_game_system_specific_command$1,
            $SteamPunkers_roll_sp$2;
        self.$$prototype.randomizer = nil;
        Opal.const_set($nesting[0], 'ID', "SteamPunkers");
        Opal.const_set($nesting[0], 'NAME', "スチームパンカーズ");
        Opal.const_set($nesting[0], 'SORT_KEY', "すちいむはんかあす");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・判定コマンド (SPn)\n" + "  SP(判定ダイス数)>=(目標値)\n" + "  SP4>=3のように入力し、5が出たらヒット数1，6が出たらヒット数2として成功数を数えます。\n" + "  ≪スチームパンク！≫による振り直しのため、出力には失敗ダイス数を表示します。\n" + "  目標値は省略可能です。\n" + "  例：(SP4>=3) ＞ [3,4,1,6] ＞ 成功数:2, 失敗数:3 ＞ 失敗\n" + "  例：(SP4) ＞ [3,4,1,6] ＞ 成功数:2, 失敗数:3\n" + "・表\n" + "  ・プロフ(Profile)：年齢表 PAT, 性別表 PST, 国籍表 PCT\n" + "  ・名前表(Name)：イギリス NIT, アメリカ NAT, フランス NFT, ドイツ NGT, ソビエト NST, 日本表 NJT\n" + "  ・過去表(Past)：トゥルース PTT, ガーディアン PGT, ノーブル PNT, デヴォート PDT, エセティック PET, チャレンジ PCT\n" + "  ・経緯表(Background)：ギガントアームズ BGT, アーマードリム BAT, エッジモービル BET, クロノウェポン BCT, スパイテック BST, スチームウェア BWT\n" + "  ・特徴表(Feature)：特徴表S FST, 特徴表P FPT\n" + "  ・関係性表(Relationship)：関係性表S RST, 関係性表P RPT\n" + "  ・感情表(Emotion)：感情表S EST, 感情表P EPT\n" + "  ・その他(Other)；災厄表 ODT, 場面表 OST, 交流表 OIT, 激憤表 OFT\n");
        Opal.def(self, '$eval_game_system_specific_command', $SteamPunkers_eval_game_system_specific_command$1 = function $$eval_game_system_specific_command(command) {
          var self = this,
              result = nil;
          result = self.$roll_tables(command, $$($nesting, 'TABLES'));

          if ($truthy(result)) {
            return result;
          }

          ;
          return self.$roll_sp(command);
        }, $SteamPunkers_eval_game_system_specific_command$1.$$arity = 1);
        Opal.def(self, '$roll_sp', $SteamPunkers_roll_sp$2 = function $$roll_sp(command) {
          var $a,
              _$$2,
              _$$3,
              self = this,
              m = nil,
              dice_count = nil,
              target_number = nil,
              dice_list = nil,
              dice_list_text = nil,
              successes = nil,
              failures = nil,
              result = nil,
              sequence = nil;

          m = /^SP(\d+)(?:>=(\d+))?$/i.$match(command);

          if ($truthy(m)) {} else {
            return nil;
          }

          ;
          dice_count = m['$[]'](1).$to_i();
          target_number = ($a = m['$[]'](2), $a === nil || $a == null ? nil : $send($a, 'to_i', []));
          dice_list = self.randomizer.$roll_barabara(dice_count, 6);
          dice_list_text = dice_list.$join(",");
          successes = $rb_plus($rb_times(dice_list.$count(6), 2), dice_list.$count(5));
          failures = $send(dice_list, 'count', [], (_$$2 = function $$3(x) {
            var self = _$$2.$$s == null ? this : _$$2.$$s;

            if (x == null) {
              x = nil;
            }

            ;
            return $rb_le(x, 4);
          }, _$$2.$$s = self, _$$2.$$arity = 1, _$$2));

          result = function () {
            if ($truthy($send(dice_list, 'all?', [], (_$$3 = function $$4(x) {
              var self = _$$3.$$s == null ? this : _$$3.$$s;

              if (x == null) {
                x = nil;
              }

              ;
              return x['$=='](1);
            }, _$$3.$$s = self, _$$3.$$arity = 1, _$$3)))) {
              return "ファンブル";
            } else if ($truthy(target_number)) {
              if ($truthy($rb_ge(successes, target_number))) {
                return "成功";
              } else {
                return "失敗";
              }
            } else {
              return nil;
            }

            ;
            return nil;
          }();

          sequence = ["" + "(" + command + ")", "" + "[" + dice_list_text + "]", "" + "成功数:" + successes + ", 失敗数:" + failures, result].$compact();
          return sequence.$join(" ＞ ");
        }, $SteamPunkers_roll_sp$2.$$arity = 1);

        (function ($base, $super, $parent_nesting) {
          var self = $klass($base, $super, 'SPTable');
          var $nesting = [self].concat($parent_nesting),
              $SPTable_initialize$5;
          Opal.def(self, '$initialize', $SPTable_initialize$5 = function $$initialize(name, items) {
            var $iter = $SPTable_initialize$5.$$p,
                $yield = $iter || nil,
                self = this,
                items_with_range = nil;
            if ($iter) $SPTable_initialize$5.$$p = null;

            if ($truthy(items.$size()['$!=']($$($nesting, 'RANGE').$size()))) {
              self.$raise($$($nesting, 'UnexpectedTableSize').$new(name, items.$size()));
            }

            ;
            items_with_range = $$($nesting, 'RANGE').$zip(items);
            return $send2(self, Opal.find_super_dispatcher(self, 'initialize', $SPTable_initialize$5, false, true), 'initialize', [name, items_with_range], null);
          }, $SPTable_initialize$5.$$arity = 2);
          return Opal.const_set($nesting[0], 'RANGE', [$range(11, 14, false), $range(15, 22, false), $range(23, 32, false), $range(33, 36, false), $range(41, 44, false), $range(45, 52, false), $range(53, 56, false), $range(61, 66, false)].$freeze());
        })($nesting[0], $$$($$($nesting, 'DiceTable'), 'D66RangeTable'), $nesting);

        (function ($base, $super, $parent_nesting) {
          var self = $klass($base, $super, 'UnexpectedTableSize');
          var $nesting = [self].concat($parent_nesting);
          return nil;
        })($nesting[0], $$($nesting, 'StandardError'), $nesting);

        Opal.const_set($nesting[0], 'TABLES', $hash2(["PAT", "PST", "PCT", "NIT", "NAT", "NFT", "NGT", "NST", "NJT", "PTT", "PGT", "PNT", "PDT", "PET", "BGT", "BAT", "BET", "BCT", "BST", "BWT", "FST", "FPT", "RST", "RPT", "EST", "EPT", "ODT", "OST", "OIT", "OFT"], {
          "PAT": $$($nesting, 'SPTable').$new("年齢表", ["【14~15歳】 まだまだ、子ども扱い。また、過去の内容は父か母のことを指している。", "【16~17歳】 そろそろ成人として扱われる。また、過去の内容は父か母のことを指している。", "【18~19歳】 職場では修行期間中である。また、過去の内容は両親のことか、あなた自身のことだ。", "【20~21歳】 ようやく一人前の年齢である。また、過去の内容は両親のことか、あなた自身のことだ", "【22~23歳】 働き盛りである。また、過去の内容はあなた自身のことだ。", "【24~25歳】 働き盛りである。また、過去の内容はあなた自身のことだ。", "【26~27歳】 かつて、従軍した可能性がある。また、過去の内容はあなた自身のことだ。", "【28~30歳】 蒸気大戦末期をよく知っている。また、過去の内容はあなた自身のことだ。"]),
          "PST": $$($nesting, 'SPTable').$new("性別表", ["【男性】 背が高く、がっしりしている。", "【女性】 蠱惑的な身体をしている。", "【男性】 平均的な中肉中背である。", "【女性】 女性らしい体形をしている。", "【男性】 近世の取れた肉体をしている。", "【女性】 彫刻のように美しい体形である。", "【男性】 一見すると細身に見える。", "【女性】 スリムな体形をしている。"]),
          "PCT": $$($nesting, 'SPTable').$new("国籍表", ["【日本皇国】 あなたは日本人である。", "【フランス共和国】 あなたはフランス人である。", "【アメリカ合衆国】 あなたはアメリカ人である。", "【イギリス王国】 あなたはイギリス人である。", "【イギリス王国】 あなたはイギリス人である。", "【イギリス王国】 あなたはイギリス人である。", "【ドイツ帝国】 あなたはドイツ人である。", "【ソビエト連邦】 あなたはソビエト人である。"]),
          "NIT": $$($nesting, 'SPTable').$new("名前表・イギリス(男性名/女性名/名字)", ["アーロン/アビゲイル/アダム", "カラム/オーレリア/バーナード", "クライヴ/ブレンダ/ビーチャム", "カーティス/キャロライン/ビリンガム", "ダンカン/クリス/ボイド", "アイオン/イーニッド/クロムウェル", "ネイサン/グレイス/エアハート", "ウィリアム/ローレンシア/ハックワース"]),
          "NAT": $$($nesting, 'SPTable').$new("名前表・アメリカ(男性名/女性名/名字)", ["ジェラルド/デイジー/キャンベル", "クラーク/ベアトリス/ベックフォード", "ヴィクター/ケイト/ガードナー", "ザック/ルシール/キンケイド", "ヘクター/エレイン/コールリッジ", "アーサー/アンジェリカ/アレクサンダー", "アドニス/アルダ/オースティン", "ランバート/イヴ/デビットソン"]),
          "NFT": $$($nesting, 'SPTable').$new("名前表・フランス(男性名/女性名/名字)", ["ベルナール/ベアトリス/バシュラール", "セドリック/セシリア/ベルモンド", "エルネスト/コレット/ボニツェール", "フレデリック/エルザ/ボワイエ", "ロランド/リュクレース/ディノワール", "イアサント/アンリエット/シャルトー", "バスティアン/ブリジット/オードラン", "ルイ/リリアーヌ/ドラクランジュ"]),
          "NGT": $$($nesting, 'SPTable').$new("名前表・ドイツ(男性名/女性名/名字)", ["アルベルト/アデーレ/アッカーマン", "バシリウス/アルマ/バルツァー", "ブルーノ/クリステル/ビットナー", "エトムント/エルネスタ/コルネリウス", "ゴッツ/クラリッサ/アイヒマン", "ヨハン/モニカ/フリードリヒ", "レオンハルト/オクタヴィア/ハイセルタ", "ブルクハルト/クロジンデ/ビンデバルト"]),
          "NST": $$($nesting, 'SPTable').$new("名前表・ソビエト(男性名/女性名/名字)", ["イリイチ/バルバラ/バビチェフ", "ミハイル/ジナイーダ/ボブロフ", "セルゲイ/クラーラ/ヴォルコフ", "イヴァン/レイラ/ガボエフ", "アラン/オルガ/ジェミチェフ", "ボリス/ナタリヤ/ドミトリエフ", "ウラジミル/ソフィア/エルマコフ", "アレクセイ/マルタ/ダンチェンコ"]),
          "NJT": $$($nesting, 'SPTable').$new("名前表・日本(男性名/女性名/名字)", ["タキジ/タキ/トウドウ", "シンヤ/アヤ/マツモト", "レイジ/カオルコ/サガラ", "コウタロウ/セン/オオシマ", "ヒロシ/チサ/クジョウ", "ジロウ/カナ/ヤマガタ", "マサヒト/マイ/イトウ", "ショウジ/アヤメ/シンドウ"]),
          "PTT": $$($nesting, 'SPTable').$new("過去表『トゥルース』", ["【決着】 あなたは怨敵である蒸気事件の犯人を追っている。いつの日か、そいつとは決着をつけるつもりだ。", "【陰謀】 とある陰謀により、あなたは故郷、あるいはかつての地位を失ってしまった。", "【後悔】 ある蒸気事件を解決できなかった。結果、あなたは大切な人を失ってしまった。", "【失踪】 かつて、あなたが愛した人は不自然な失踪を遂げてしまった。あの人はいったいどこへ……？", "【冤罪】 ある陰謀により、あなたは冤罪をかけられ、かつての地位を追われてしまった。", "【裏切り】 とある蒸気事件の際に無二の親友があなたを裏切り、理由も告げぬまま消え去った。", "【誓い】 とある陰謀により、あなたは大切な何かを失った。いつか陰謀を暴く……それがあなたの誓いだ。", "【喪失】 とある蒸気事件の際、あなたの家族は何者かの手により惨殺された。犯人は今も見つかっていない。"]),
          "PGT": $$($nesting, 'SPTable').$new("過去表『ガーディアン』", ["【後悔】 ある蒸気事件を解決できなかった。結果、あなたは大切な人を失ってしまった。", "【贖罪】 あなたは過去に罪なき人々の虐殺を強制させられた。だから、贖罪のために人々を護っている。", "【無力】 かつて、あなたは無力だった。そして、無力ゆえに大切な人を護ることができなかった。", "【憧れ】 あなたの憧れた人は、いつだって弱者の味方だった。そして、あなたはあの人の背中を追い続けている。", "【使命】 弱き者たちの盾となる。それが生まれたときから、あなたに課せられ唯一の使命だった。", "【見殺し】 あなたはやむを得ない事情により、仲間を見殺しにしてしまった。だから、次は絶対見殺しにしない。", "【死別】 とある事件の際、あなたは家族を護りきれず失ってしまった。だから……今度こそ護ってみせる。", "【庇護】 現在、あなたには護るべき人、護るべき場所がある。それらの日常を護るべく、あなたは戦ったいる。"]),
          "PNT": $$($nesting, 'SPTable').$new("過去表『ノーブル』", ["【復讐】 あなたの家族は蒸気事件の犠牲となった。ゆえに、あなたは家族の仇を討つべく犯人を捜している。", "【理不尽】 あなたは幼少期に、心優しかった使用人が理不尽な虐待の末に殺害される場面を目撃してしまった。", "【反発】 あなたの親は悪徳を重ねる権力者だった。そんな親が嫌いで、あなたは常に反発していた。", "【高貴】 あなたは生来から高貴な信念の持ち主だ。それゆえ弱者を救い、導くことに疑問はない。", "【偽物】 あなたは貴族の影武者を務める元平民だ。しかし、演じるうちに、あなたは真の高貴を身に着けた。", "【悲恋】 あなたは、下層市民と身分違いの恋をした。だが、愛する人は蒸気事件の犠牲者となった。", "【権謀】 あなたの両親は、とある権力闘争に巻き込まれた際、不自然な蒸気事件に遭遇して命を落とした。", "【慈愛】 あなたは、真の貴族であった両親から他者を慈しむことは当然だと教育された。"]),
          "PDT": $$($nesting, 'SPTable').$new("過去表『デヴォート』", ["【忠義】 あなたは、忠義の大切さを教えられて育ってきた。それゆえ、あなたは主に忠誠をささげるのだ。", "【忠臣】 あなたは国や組織に仕える忠臣だった。だが、権力闘争によって追われ、今は市井に身を潜めている。", "【恩義】 あなたは現在の主たる人物、または組織に救われた。いつの日か、この恩に報いなければ。", "【無心】 あなたは生来より、主や組織に仕える教育を受けてきた。ゆえに、忠義を尽くすことに疑問はない。", "【心酔】 あなたは現在の主や組織に心酔している。だから、主や組織のために蒸気事件に立ち向かう", "【復習】 あなたの主は邪悪な蒸気事件の犠牲となった。以後、あなたは主の仇を討つべく犯人を捜している。", "【約束】 あなたの主は蒸気事件の犠牲者だ。主を看取る際、あなたは世界から蒸気事件を一掃すると約束した。", "【犠牲】 あなたには尊敬に値する主がいた。だが、その主はあなたを庇って、邪悪な陰謀の犠牲となった。"]),
          "PET": $$($nesting, 'SPTable').$new("過去表『エセティック』", ["【研究】 あなたは蒸気犯罪で用いられるスチームギアを撲滅するために、常に研究を続けている。", "【悪用】 あなたは過去に自らが製造した、あるいは所有するスチームギアが悪用され、憤慨したことがある。", "【仁義】 あなた、仁義の大切さを教えられて育ってきた。それゆえ、あなたは虐げられる物たちを救うのだ。", "【美意識】 あなたは、スチームギアが犯罪に用いられる場面を目撃した際、吐き気がするほど醜いと感じた。", "【正義】 あなたは蒸気事件の元犠牲者だ。あなたは、自らの正義を成すために今も蒸気事件に挑み続けている。", "【正論】 あなたは昔から、スチームギアが正しい方法で利用されないことが我慢ならない。", "【天誅】 あなたは蒸気事件によって、全てを失ってしまった。だから、蒸気事件を起こす黒幕が許せない。", "【報復】 あなたの恩師は過去に蒸気事件で犠牲となっている。あなたはいつか、その犯人に報復するつもりだ。"]),
          "BGT": $$($nesting, 'SPTable').$new("経緯表『ギガントアームズ』", ["【元近衛兵】 あなたは上層部の警護を任されていた元近衛兵で、スチームギアは大戦時に入手したものである。", "【反逆者の子】 スチームギアは、スチームパンカーだったあなたの亡父が使っていた形見である。", "【元殺し屋】 あなたは、かつて殺し屋だった。このスチームギアは以前の仕事の報酬として受け取ったものだ。", "【元傭兵】 あなたは蒸気大戦で荒稼ぎしていた元傭兵で、このスチームギアは大戦時に入手したものだ。", "【元英雄】 あなたは蒸気大戦の英雄だ。あなたは戦線に赴く際、上層部から新世代スチームギアを支給されたのだ。", "【元軍人】 あなたは蒸気大戦にも従軍した元軍人で、大戦時にスチームギアを入手した。", "【元特殊部隊】 あなたは蒸気大戦で活躍した元特殊部隊員で、大戦時にスチームギアを入手した。", "【戦場帰り】 あなたは蒸気大戦に従軍した経験を持つ戦場帰りで、大戦時にスチームギアを入手した。"]),
          "BAT": $$($nesting, 'SPTable').$new("経緯表『アーマードリム』", ["【試験操縦士】 あなたは軍や企業で試験操縦士を務めており、その折に、スチームギアを密かに入手した。", "【闇取引】 あなたは闇取引のコネクションがあり、そのコネを利用してスチームギアを入手した。", "【貴族出身】 あなたは貴族、あるいは元貴族だ。スチームギアは、屋敷の倉にあった品を改造したものである。", "【元研究者】 あなたはスチームギアの元研究者で、自らの肉体を防護するためにスチームギアを開発した。", "【戦場帰り】 あなたは蒸気大戦に従軍した経験を持つ戦場帰りで、大戦時にスチームギアを入手した。", "【謎の協力者】 あなたが蒸気事件に立ち向かおうとした際、謎の協力者が現れ、スチームギアを与えてくれた。", "【元修理屋】 あなたは元修理屋だ。スチームギアはジャンク置き場で偶然見かけたものをレストアしたものだ。", "【簒奪者】 あなたは蒸気事件に巻き込まれた際、偶然と幸運が重なり、相手のスチームギアを奪取できた。"]),
          "BET": $$($nesting, 'SPTable').$new("経緯表『エッジモービル』", ["【車泥棒】 あなたは元車泥棒だ。このスチームギアは出所不明のものをちょろまかしたものだ。", "【元機関工】 あなたは優れた技術を持つ元機関工で、出所不明のスチームギアを偶然にも入手した。", "【元エース】 あなたは蒸気大戦時に英雄と呼ばれた元操縦士で、大戦時にスチームギアを入手した。", "【元輸送兵】 あなたは蒸気大戦に従軍した経験を持つ元輸送兵で、大戦時にスチームギアを入手した。", "【蒸気工の子】 あなたは蒸気工、あるいは蒸気技術者の子供だった。スチームギアは、両親が所有していたものである。", "【元レーサー】 あなたは蒸気車両のレースに出場していたレーサーで、スチームギアは偶然にも入手したものだ。", "【違法改造屋】 あなたはかつて、違法で改造を施すモグリの機関工だった。スチームギアは、その際に入手したものだ。", "【逃亡兵】 あなたは、戦場から逃げ出した逃亡兵だ。スチームギアは戦場に赴く際に支給された試作機である。"]),
          "BCT": $$($nesting, 'SPTable').$new("経緯表『クロノウェポン』", ["【元武器商人】 あなたは蒸気大戦時にスチームギアを販売していた元武器商人、あるいはその護衛だ。", "【元製造者】 あなたは蒸気大戦時にスチームギアを製造していた。そして、身を護るために自身の手で製造したのだ。", "【反逆者の子】 スチームギアは、スチームパンカーだったあなたの亡父が使っていた形見である。", "【元近衛兵】 あなたは上層部の警護を任されていた元近衛兵で、スチームギアは大戦時に入手したものである。", "【元特殊部隊】 あなたは蒸気大戦で活躍した元特殊部隊員で、大戦時にスチームギアを入手した。", "【元傭兵】 あなたは蒸気大戦で荒稼ぎしていた元傭兵で、このスチームギアは大戦時に入手したものだ。", "【裏稼業】 あなたはかつて裏稼業に手を染めていた荒事屋で、スチームギアは、かつての仕事の報酬である。", "【元英雄】 あなたは蒸気大戦の英雄だ。あなたは戦線に赴く際、上層部から新世代スチームギアを支給されたのだ。"]),
          "BST": $$($nesting, 'SPTable').$new("経緯表『スパイテック』", ["【元刑事】 あなたは、蒸気事件ばかりを追っていた元刑事だ。スチームギアは犯罪者から奪い取ったものである。", "【元結社の一員】 あなたは邪悪な秘密結社に所属していた元工作員だ。スチームギアはその頃に支給されたものである。", "【研究者の肉親】 あなたの肉親が軍の研究者で、彼らが試作機として制作したものを偶然入手した。", "【元工作員】 あなたは、蒸気大戦の裏側で活躍した元工作員で、大戦終結と同時に、そのスチームギアを入手した。", "【元諜報員】 あなたは蒸気大戦の際に活躍した元スパイで、当時支給されたスチームギアを私物化している。", "【後援者】 あなたが行なう蒸気事件の調査を援助する者がいる。彼は、このスチームギアを制作した人物である。", "【元暗殺部隊】 あなたは、蒸気大戦時に暗躍した元暗殺部隊員で、スチームギアはその頃に入手したものだ。", "【元盗人】 あなたは盗品として流れてきたスチームギアを偶然発見して、入手した。"]),
          "BWT": $$($nesting, 'SPTable').$new("経緯表『スチームウェア』", ["【独自ルート】 あなたは人間の限界を超えるために、独自のルートを使って、自らの意志で肉体を機械化した。", "【相棒の技師】 あなたが蒸気事件で肉体を欠損した際、機械技師をしている相棒が欠損部位を機械化してくれた。", "【元実験体】 あなたは蒸気事件で重傷を負った際、実験体となる代わりに特殊な機械化手術を施された。", "【元機械化兵】 あなたは大戦時に機械化手術で蘇った元蒸気兵だ。終戦後、スチームギアをわざと取り換えなかった。", "【帰還兵】 あなたは蒸気大戦から帰還した帰還兵だ。だが戦時中に肉体が欠損し、軍部が機械化してくれた。", "【元機械闘士】 あなたは機械化格闘に出場した元格闘士だ。機械化した部位は、その頃に違法改造したものだ。", "【元闇医者】 あなたは、元モグリの機械医師だった。機械化したその部位は、その頃に自身で改造したものだ。", "【元英雄】 あなたは蒸気大戦の英雄だ。あなたは戦線に赴く際、上層部から新世代スチームギアを支給されたのだ。"]),
          "FST": $$($nesting, 'SPTable').$new("特徴表S", ["【蒸気帽】 あなたは、なんらかの蒸気機械を仕込んだ帽子を愛用している。", "【装飾品】 あなたは、蒸気仕掛けが施された特殊なアクセサリーやペンダントを愛用している。", "【蒸気杖/傘】 あなたは、特殊機能を備えた蒸気機械式の傘を、あるいはステッキを愛用している。", "【ゴーグル】 あなたは、特殊機能を備えたゴーグルを愛用している。", "【特殊眼鏡】 あなたは、拡大機能などを備えた眼鏡や単眼鏡を愛用している。", "【蒸気ライター】 あなたは、小さなマグナイトが仕込まれた蒸気式ライターを隠し持っている。", "【機関手袋】 あなたは、特殊機能を備えた頑丈な革手袋を愛用している。", "【偽造カード】 あなたは、偽造した戸籍情報を点刻したパンチカードを隠し持っている。"]),
          "FPT": $$($nesting, 'SPTable').$new("特徴表P", ["【傷】 顔、あるいは体のどこかに傷がある。", "【美声】 一度聞くと忘れられないほど、美しい声だ。", "【筋肉質】 鍛え抜かれた肉体をしている。", "【美形】 生きている宝石のように美しい容貌をしている。", "【童顔】 年齢に関係なく、非常に若く見える。", "【髪】 不思議な髪の色、あるいはパンクな髪型をしている。", "【刺青】 体のどこかに特徴的なタトゥーがある。", "【瞳】 不思議な瞳の色、あるいは特徴的な眼差しをしている。"]),
          "RST": $$($nesting, 'SPTable').$new("関係性表S", ["【元敵同士】 相手とは、元敵同士の間柄だ。どのように敵対していたかは、プレイヤーと相談して決定せよ。", "【愛憎】 相手とは、愛憎渦巻く仲だ。愛しあっていた、憎みあっていたのかはプレイヤーと相談して決定せよ。", "【元相棒】 相手とは、元相棒の間柄だ。なぜ相棒でなくなったかについてはプレイヤーと相談して決定せよ。", "【犬猿】 相手とは、犬猿の仲だ。なぜ、いがみあっているかについてはプレイヤーと相談して決定せよ。", "【共依存】 相手とは、共依存の関係だ。どのように依存しあっているかはプレイヤーと相談して決定せよ。", "【仇同士】 相手とは、仇同士の間柄だ。どのような因縁であるかはプレイヤーと相談して決定せよ。", "【主従】 相手とは、主従の間柄だ。どちらが主で、どちらが従者かはプレイヤーと相談して決定せよ。", "【裏切り】 相手とは、裏切りあった間柄だ。どちらが裏切ったかについてはプレイヤーと相談して決定せよ。"]),
          "RPT": $$($nesting, 'SPTable').$new("関係性表P", ["【血縁】 相手とは、血縁がある。どの程度の間柄であるかについてはプレイヤーと相談して決定せよ。", "【同志】 相手は、同じ志を持っている。どんな志を共にしているかはプレイヤーと相談して決定せよ。", "【好敵手】 相手とは、良きライバルだ。どのような形での好敵手かは、プレイヤーと相談して決定せよ。", "【親友】 相手とは、親友の間柄だ。どのくらい仲が良いかについては、プレイヤーと相談して決定せよ。", "【相棒】 相手は、無二の相棒だ。どのくらいの年月を共にしてきたかについてはプレイヤーと相談して決定せよ。", "【腐れ縁】 相手とは幼い頃からの腐れ縁だ。どのくらいの年齢からであるかはプレイヤーと相談して決定せよ。", "【戦友】 相手とは戦友の間柄だ。どこで、なにと戦ったかについてはプレイヤーと相談して決定せよ。", "【師弟】 相手は師、あるいは弟子だ。どちらが師で、どちらが弟子かはプレイヤーと相談して決定せよ。"]),
          "EST": $$($nesting, 'SPTable').$new("感情表S", ["【殺意】 相手に殺意を覚えている。どういった経緯で殺意を抱いているかについては自身で決定せよ。", "【優越感】 相手に優越感がある。どういった経緯で優越感を抱いているかについては自身で決定せよ。", "【嫉妬】 相手に嫉妬している。どういった経緯で嫉妬しているかについては自身で決定せよ。", "【劣等感】 相手に劣等感がある。どういった経緯で劣等感を抱いているかについては自身で決定せよ。", "【罪悪感】 相手に罪悪感がある。どういった経緯で罪悪感を持っているかについては自身で決定せよ。", "【不安】 相手のことが不安だ。どういったときに不安を感じるかについては自身で決定せよ。", "【恐怖】 相手のことを恐れている。どういった経緯で恐れるようになったかについては自身で決定せよ。", "【嫌悪】 相手のことを嫌悪している。どの程度の嫌悪であるかについては自身で決定せよ。"]),
          "EPT": $$($nesting, 'SPTable').$new("感情表P", ["【誠意】 相手に対して誠意を感じる。どういった経緯で誠意を感じたかについては自身で決定せよ。", "【好感】 相手に対して好感を抱いている。どういった経緯で好感を抱くに至ったかについては自身で決定せよ。", "【尊敬】 相手のことを尊敬している。どういった経緯で相手を尊敬したかについては自身で決定せよ。", "【友情】 相手に対して友情を抱いている。どういった経緯で友情を抱くに至ったかについては自身で決定せよ。", "【庇護】 相手を護りたいと思っている。どういった経緯で相手を庇護対象にしたかは自身で決定せよ。", "【信頼】 相手のことを信頼している。どういった経緯で信頼するようになったかについては自身で決定せよ。", "【期待】 相手に対して期待している。どういった経緯で期待を抱くようになったかについては自身で決定せよ。", "【愛情】 相手に愛情や友愛を抱いている。どういった経緯で愛情を抱くに至ったかについては自身で決定せよ。"]),
          "ODT": $$($nesting, 'SPTable').$new("災厄表", ["【蒸気の不調】 スチームギアが不調になった！おそらくマグナイトが尽きかけてるのだ。ペナルティーを受けたPCは、そのフェイズの終了まで、スチームの抑圧を解放できない。", "【卑劣な強襲】 突如として強力な不意討ちを受けた。おそらく、スチームギアによる特殊な攻撃だ。PC全員は【耐久値】を-3する(最小1)。", "【非道な行為】 黒幕は気まぐれから、罪のない人をスチームギアで傷つけた。なんという非道な行為だ！PC全員は世界からの抑圧を2枚受ける。", "【嫌な予感】 今回の蒸気事件は特に嫌な予感がする……以後、全てのエネミーは終了フェイズを迎えるまで、実行の《アビリティ》の成功数を+1する。", "【敵役出現】 見知らぬ妨害者が現れた！以後、[【反抗LV】の平均以下]のエネミーが、そのフェイズに1人参加。戦闘不能にしない限り、メインを迎える度に実行を行ない、活劇フェイズにも参加する。", "【迎撃準備】 黒幕は万が一に備えて、手下を武装させ始めた。以後、全てのエネミーはシナリオ中、【耐久値】を+3する。", "【疑惑の目】 まずい。警察や政府がキミたちに対して疑惑の目を向け始めているようだ。PC全員は【理性値】を-2する(最小0)。", "【絶望感】 突如として心の傷が痛み、信念が揺らいでしまう。ペナルティーを受けたPCは、そのフェイズの終了まで、パンクの抑圧を解放できない。"]),
          "OST": $$($nesting, 'SPTable').$new("場面表", ["【地下鉄】 途中まで、地下鉄を利用することにする。駅のホームは蒸気列車が放出する蒸気のせいで、湿り気と熱気を帯びていた。", "【工業地帯】 工業地帯を横切る。開かれた窓の奥に視線を送ると、労働者たちが製造用蒸気機関を操り、真鍮製の煙突から蒸気が噴き上っている。", "【店舗】 途中、店舗で簡単な買い物を済ませた。支払いは無論、パンチカードで一括。階差演算機関はすでに個人の予算残高すら管理下に置いている。", "【ビッグ・ベン】 遠くから時刻を告げるビッグ・ベンの鐘が響くと、蒸気オルガンの薄暗い音色が、いつものようにロンドンの上空を覆った。", "【人混み】 人混みのなかを進むと、ハンチング帽をかぶった少年たちが脇を駆け抜けた……彼らを護るためにも早く蒸気事件を解決しなければ。", "【繁華街】 調査に向かった現場では、蒸気機械仕掛けの帯状装飾が点灯しており、帯が回転する度に様々な広告が表示された。", "【大通り】 大通りに出ると、蒸気自動車が目前で行き交っていた。真鍮や錫で装飾された蒸気自動車は、まるで晩餐会に出入りする馬車のようだ。", "【移動パブ】 途中、移動パブを見かけた。蒸気自動車に機関式サーバーを搭載したもので、周りには若いロンドン子たちが口に泡をつけながら騒いでいる。"]),
          "OIT": $$($nesting, 'SPTable').$new("交流表", ["【過去】 そういえば、相手の過去を知らない気がする…聞けば教えてくれるだろうか？", "【特徴】 さっきから相手の特徴が気になる。相手から特徴にまつわる話を聞いてみようか？", "【感情】 相手に対して抱いてる感情のことを伝えるべきだろうか？それとも、伝えないべきだろうか？", "【蒸気事件】 相手に、今回の事件の印象について聞いてみよう。", "【事件後】 今回の事件が終わったら、相手は何をするつもりなのだろう？", "【関係性】 相手とは……いつからこうした関係だったろう？そもそも、相手は覚えているのだろうか？", "【職業】 相手は、どんな経緯で今の職業となったのだろう。興味があるので、聞いてみようか？", "【経緯】 相手はどうやってスチームギアを得たのだろう？その経緯の一部でも聞いてみようか？"]),
          "OFT": $$($nesting, 'SPTable').$new("激憤表", ["【憤怒】 これほど残虐な蒸気事件が起こったというのに、世界は一向に変わろうとしない。もはや世界への怒りは頂点へと達してしまった。PCはレヴォルトを失い、黒幕となる。", "【破損】 怒りに任せて激闘を繰り返したため、スチームギアが破損した。もう、世界に反逆する力はない。以後、PCはスチームギアを失い、NPCとなる。", "【偽装】 権力者からの圧力によって、社会的に抹殺されてしまった。が、それは想定済みだ。これからは別の人生を歩むことになる。PCの名前と職業を変更せよ。", "【冷静】 今回の蒸気事件には少し思うところがあった。だが、しばらく時間を置くことで、理性的になることができた。キミはまだまだ戦える。特にペナルティーはない。", "【重傷】 最後の戦いの際に負った傷が重症化してしまった。だが、しばらく治療に専念すれば復帰できるだろう。特にペナルティーはない。", "【革命】 今回の事件を通じて、信念が揺らいだ。やはり、世界を変えるには圧倒的な”暴力”が必要なのだ。PCはレヴォルトを失い、黒幕となる。", "【寝返り】 蒸気事件を通じて、世界の在り方に疑問を感じる。そんな矢先、目前にゾディアックの上級幹部が現れ、キミをスカウトしてきた。PCはレヴォルトを失い、黒幕となる。", "【悪堕ち】 信念に従い、反逆を続けてきた。だが、蒸気事件が尽きる気配はない。反逆など無意味なのか。なら、この手で……PCはレヴォルトを失い、黒幕となる。"])
        }).$freeze());
        return self.$register_prefix("SP", $$($nesting, 'TABLES').$keys());
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~SteamPunkers~index.js.map