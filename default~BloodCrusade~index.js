(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BloodCrusade~index"],{

/***/ "gMcg":
/*!********************************************************************!*\
  !*** ./node_modules/bcdice/lib/bcdice/game_system/BloodCrusade.js ***!
  \********************************************************************/
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
      $hash2 = Opal.hash2;
  return function ($base, $parent_nesting) {
    var self = $module($base, 'BCDice');
    var $nesting = [self].concat($parent_nesting);

    (function ($base, $parent_nesting) {
      var self = $module($base, 'GameSystem');
      var $nesting = [self].concat($parent_nesting);

      (function ($base, $super, $parent_nesting) {
        var self = $klass($base, $super, 'BloodCrusade');
        var $nesting = [self].concat($parent_nesting),
            $BloodCrusade_initialize$1,
            $BloodCrusade_result_2d6$2,
            $BloodCrusade_eval_game_system_specific_command$3;
        Opal.const_set($nesting[0], 'ID', "BloodCrusade");
        Opal.const_set($nesting[0], 'NAME', "ブラッド・クルセイド");
        Opal.const_set($nesting[0], 'SORT_KEY', "ふらつとくるせいと");
        Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・各種表\n" + "　・関係属性表         RT\n" + "　・シーン表           ST\n" + "　・先制判定指定特技表 IST\n" + "　・身体部位決定表　　 BRT\n" + "　・自信幸福表　　　　 CHT\n" + "　・地位幸福表　　　　 SHT\n" + "　・日常幸福表　　　　 DHT\n" + "　・人脈幸福表　　　　 LHT\n" + "　・退路幸福表　　　　 EHT\n" + "　・ランダム全特技表　 AST\n" + "　・軽度狂気表　　　　 MIT\n" + "　・重度狂気表　　　　 SIT\n" + "　・戦場シーン表　　　 BDST\n" + "　・夢シーン表　　　　 DMST\n" + "　・田舎シーン表　　　 CYST\n" + "　・学校シーン表　　　 SLST\n" + "　・館シーン表　　　　 MNST\n" + "　・時間経過表（10代～60代、半吸血鬼）TD1T～TD6T、TDHT\n" + "・D66ダイスあり\n");
        Opal.def(self, '$initialize', $BloodCrusade_initialize$1 = function $$initialize(command) {
          var $iter = $BloodCrusade_initialize$1.$$p,
              $yield = $iter || nil,
              self = this;
          if ($iter) $BloodCrusade_initialize$1.$$p = null;
          $send2(self, Opal.find_super_dispatcher(self, 'initialize', $BloodCrusade_initialize$1, false, true), 'initialize', [command], null);
          self.sort_add_dice = true;
          self.d66_sort_type = $$$($$($nesting, 'D66SortType'), 'ASC');
          return self.round_type = $$$($$($nesting, 'RoundType'), 'CEIL');
        }, $BloodCrusade_initialize$1.$$arity = 1);
        Opal.def(self, '$result_2d6', $BloodCrusade_result_2d6$2 = function $$result_2d6(total, dice_total, _dice_list, cmp_op, target) {
          var self = this,
              $ret_or_1 = nil;

          if ($truthy(function () {
            if ($truthy($ret_or_1 = target['$==']("?"))) {
              return $ret_or_1;
            } else {
              return cmp_op['$!='](">=");
            }

            ;
            return nil;
          }())) {
            return nil;
          }

          ;

          if ($truthy($rb_le(dice_total, 2))) {
            return $$($nesting, 'Result').$fumble("ファンブル(【モラル】-3。追跡フェイズなら吸血シーンを追加。戦闘フェイズなら吸血鬼は追加行動を一回得る)");
          } else if ($truthy($rb_ge(dice_total, 12))) {
            return $$($nesting, 'Result').$critical("スペシャル(【モラル】+3。追跡フェイズならあなたに関係を持つPCの【モラル】+2。攻撃判定ならダメージ+1D6）");
          } else if ($truthy($rb_ge(total, target))) {
            return $$($nesting, 'Result').$success("成功");
          } else {
            return $$($nesting, 'Result').$failure("失敗");
          }

          ;
        }, $BloodCrusade_result_2d6$2.$$arity = 5);
        Opal.def(self, '$eval_game_system_specific_command', $BloodCrusade_eval_game_system_specific_command$3 = function $$eval_game_system_specific_command(command) {
          var self = this,
              $ret_or_2 = nil;

          if ($truthy($ret_or_2 = self.$roll_tables(command, $$($nesting, 'TABLES')))) {
            return $ret_or_2;
          } else {
            return $$($nesting, 'RTT').$roll_command(self.$randomizer(), command);
          }
        }, $BloodCrusade_eval_game_system_specific_command$3.$$arity = 1);
        Opal.const_set($nesting[0], 'RTT', $$$($$($nesting, 'DiceTable'), 'SaiFicSkillTable').$new([["社会", ["怯える", "脅す", "考えない", "自信", "黙る", "伝える", "だます", "地位", "笑う", "話す", "怒る"]], ["頭部", ["聴く", "感覚器", "見る", "反応", "考える", "脳", "閃く", "予感", "叫ぶ", "口", "噛む"]], ["腕部", ["締める", "殴る", "斬る", "利き腕", "撃つ", "操作", "刺す", "逆腕", "振る", "掴む", "投げる"]], ["胴部", ["塞ぐ", "呼吸器", "止める", "受ける", "測る", "心臓", "逸らす", "かわす", "耐える", "消化器", "落ちる"]], ["脚部", ["走る", "迫る", "蹴る", "利き脚", "跳ぶ", "仕掛ける", "踏む", "逆脚", "這う", "伏せる", "歩く"]], ["環境", ["休む", "日常", "隠れる", "待つ", "現れる", "人脈", "捕らえる", "開ける", "逃げる", "退路", "休まない"]]], $hash2(["rtt", "rtt_format"], {
          "rtt": "AST",
          "rtt_format": "ランダム全特技表(%<category_dice>d) ＞ %<category_name>s(%<row_dice>d) ＞ %<skill_name>s"
        })));
        Opal.const_set($nesting[0], 'TABLES_WITH_BLOOD_MOON', $hash2(["IST", "BRT"], {
          "IST": $$$($$($nesting, 'DiceTable'), 'Table').$new("先制判定指定特技表", "1D6", ["《自信/社会5》", "《地位/社会9》", "《日常/環境3》", "《人脈/環境7》", "《退路/環境11》", "《心臓/胴部7》"]),
          "BRT": $$$($$($nesting, 'DiceTable'), 'Table').$new("身体部位決定表", "2D6", ["《脳》", "《利き腕》", "《利き脚》", "《消化器》", "《感覚器》", "《攻撃したキャラクターの任意》", "《口》", "《呼吸器》", "《逆脚》", "《逆腕》", "《心臓》"])
        }).$freeze());
        Opal.const_set($nesting[0], 'TABLES', $hash2(["RT", "CHT", "SHT", "DHT", "LHT", "EHT", "BDST", "CYST", "DMST", "MNST", "SLST", "TD1T", "TD2T", "TD3T", "TD4T", "TD5T", "TD6T", "TDHT", "ST", "MIT", "SIT"], {
          "RT": $$$($$($nesting, 'DiceTable'), 'Table').$new("関係属性表", "1D6", ["共感/不信", "友情/忌避", "愛情/嫌悪", "忠義/侮蔑", "憧憬/引け目", "保護欲/殺意"]),
          "CHT": $$$($$($nesting, 'DiceTable'), 'Table').$new("自信幸福表", "1D6", ["【戦闘能力】あなたは吸血鬼狩人としての自分の戦闘能力に自信を持っています。たとえ負けようとも、それは運か相手か仲間が悪かったので、あなたの戦闘能力が低いわけではありません。", "【美貌】あなたは自分が美しいことを知っています。他人もあなたを美しいと思っているはず。鏡を見るたびに、あなたは自分の美しさに惚れ惚れしてしまいます。", "【血筋】あなたは名家の血を引く者です。祖先の栄光を背負い、家門の名誉を更に増すために、偉業をなす運命にあります。または、普通にいい家族に恵まれているのかもしれません。", "【趣味の技量】あなたは趣味の分野では第一人者です。必ずしも名前が知れ渡っているわけではありませんが、どんな相手にも負けない自信があります。どんな趣味かは自由です。", "【仕事の技量】職場で最も有能なもの、それがあなたです。誰もあなたの仕事の量とクオリティを超えられません。どんな仕事をしているかは自由に決めて構いません。", "【長生き】あなたは吸血鬼狩人としてかなりの年月を過ごしてきたが、まだ死んでいません。これは誇るべきことです。そこらの若造には、まだまだ負けていません。"]),
          "SHT": $$$($$($nesting, 'DiceTable'), 'Table').$new("地位幸福表", "1D6", ["【役職】あなたは職場、あるいは吸血鬼狩人の組織のなかで高い階級についています。そのため、下にいるものには命令でき、相応の敬意を払われます。", "【英雄】あなたはかつて偉業を成し遂げたことがあり、誰でもそれを知っています。少々くすぐったい気もしますが、英雄として扱われるのは悪くありません。", "【お金持ち】あなたには財産があります。それも生半可な財産ではなく、人が敬意を払うだけの財産です。あなたはお金に困ることはなく、その幸せを知っています", "【特権階級】あなたは国が定める特権階級の一員です。王族や貴族をイメージするとわかりやすいでしょう。あなたは、どこに行っても、それ相応の扱いを受けることになります。", "【人格者】誰もが認める人格者としての評判を持っているため、あなたのところには悩みを抱えた人々が引きも切らずに押しかけてきます。大変ですが、ちょっと楽しい", "【リーダー】あなたは所属している何らかの組織を率いる立場にあります。会社の社長や、部活動の部長などです。あなたは求められてその地位にあります"]),
          "DHT": $$$($$($nesting, 'DiceTable'), 'Table').$new("日常幸福表", "1D6", ["【家】あなたの家はとても快適な空間です。コストと時間をかけて作り上げられた、あなたが居住するための空間。それはあなたの幸せの源なのです。", "【職場】あなたは仕事が楽しくて仕方ありません。意義ある仕事で払いも悪くなく、チームの仲間はみんないい奴ばかりです。残業は……ちょっとあるかもしれません。", "【行きつけの店】あなたには休みの日や職場帰りに立ち寄る行きつけの店があり、そこにいる時間は安らぎを感じることができます。店員とも顔見知りです。", "【ベッド】あなたは動物を飼っています。よく懐いた可愛い、またはかっこいい動物です。一緒に過ごす時間はあなたに幸せを感じさせてくれます", "【親しい隣人】おとなりさんやお向かいさん。よくお土産を渡したり、小さな子供を預かったりするような仲です。風邪を引いたときには、家事を手伝ってくれることも。", "【思い出】あなたは昔の思い出を心の支えにしています。何らかの幸せな記憶……それがあれば、この先にどんなつらいことが待っていても大丈夫でしょう。"]),
          "LHT": $$$($$($nesting, 'DiceTable'), 'Table').$new("人脈幸福表", "1D6", ["【理解ある家族】あなたの家族は、あなたが吸血鬼狩人であることを知ったうえで協力してくれます。これがどれほど稀なことかは、仲間に聞けば分かるでしょう。", "【有能な友人】あなたの友人は、吸血鬼の存在とあなたの本当の仕事を知っています。そして、直接戦うだけの技量はないものの、あなたの探索をサポートしてくれます。", "【愛する恋人】あなたには愛する人がいます。見つめあうだけで、あなたの心は舞い上がり……帰ってきません。この恋人を失うなんて、考えるだけでも恐ろしいことです。", "【同志の権力者】あなたには吸血鬼の存在を知りながら、奴らに屈していない権力者との繋がりがあります。様々な違法行為をはたらく際に、役に立つでしょう。", "【得がたい師匠】あなたは使う武器を学んだ師匠がいて、それを通して兄弟弟子とも繋がりがあります。過酷な訓練を経て、彼らとあなたには強い絆ができています。", "【可愛い子供】あなたには子供がいます。聡明で魅力的、しかも健康な……将来を嘱望される子供です。子供が掴む幸せな未来を思う時、あなたの顔には笑みが広がります。"]),
          "EHT": $$$($$($nesting, 'DiceTable'), 'Table').$new("退路幸福表", "1D6", ["【故郷の町】あなたは生まれ育った街を離れて吸血鬼狩人として活動しています。いつの日かあの町へ帰る……その思いがあなたを戦いのなかで支えています。", "【待っている人】あなたが吸血鬼狩人をやめて、普通の暮らしに戻ることを待ちわびている人がいます。そして、あなたはその思いに応えたいと思っています。", "【就職先】あなたは吸血鬼狩りの報酬がなくなっても、すぐに入ることができる就職先があるので安心です。有能なのか過疎地域なのかは分かりませんが。", "【配偶者】あなたは吸血鬼狩人をやめたあとに家庭に入ろうと考えています。暮らしの設計はすでに済み、あとは実行するだけなのですが、なかなかそうはいきません。", "【大志】あなたが吸血鬼狩人として活動しているのは、やむにやまれぬ事情があるからです。あなたには「本当にやりたかったこと」があり、いつかその夢をかなえる気でいます。", "【空想の王国】あなたには辛いことがあると白昼夢にふける、あるいは物語に没入する癖があり、そのときには非常に幸せな気分になることができます。"]),
          "BDST": $$$($$($nesting, 'DiceTable'), 'Table').$new("戦場シーン表", "2D6", ["塹壕。迫撃砲が唸りを上げ、兵士たちの悲鳴が響き渡る。", "港の堤防。遠ざかっていく貨物船と、ゆっくりと揺れる鉛色の水面。", "一面の草に覆われた野原。膝から下は見えない。", "ドーム競技場。中のフィールドよりも外の通路が使われることが多い。", "建物と建物の間に、いつの間にかできた空き地。入る道は狭い。", "採石場。背景を爆破するのに向いた場所だ。", "工場。用途の分からない巨大機械が放置され、雰囲気を盛り上げる。", "暗いトンネル。停められた車のヘッドライトだけが頼りだ。", "競馬場。人のいない観客席を広告板が見下ろしている。", "河川敷。土手の補強用ブロックの規則的な並びが目眩を引き起こす。", "司令室。壁の巨大スクリーンでは、何かのカウントダウンが進行中。"]),
          "CYST": $$$($$($nesting, 'DiceTable'), 'Table').$new("田舎シーン表", "2D6", ["誰かの家。庭付き二階建て。部屋は余っている。", "山。周囲は木に囲まれ、その向こうの景色は全く見えない。", "さびれたバス停。時刻表は錆に覆われていて読むのが難しい。", "国道沿いのファミレス。巨大な駐車場にトラックが並ぶ。", "大型量販店。服や靴、電化製品などの大きな店。", "あぜ道。周りには季節によって違う姿を見せる水田が広がる。", "大型ショッピングモール。何でも揃う。", "コンビニ。11時で閉まるので夜は開いていないこともある。", "野菜の無人販売所。木の棚に人参やジャガイモが置いてある。", "廃屋。近所の学生がよく忍び込んで悪さをしているとか。", "駅。ホームには屋根がなく、周りには山と森が広がっている。"]),
          "DMST": $$$($$($nesting, 'DiceTable'), 'Table').$new("夢シーン表", "2D6", ["愛しい人を抱きしめていると、いつのまにか別人に変わっていて驚く。", "もらった種を鉢に植えて待っていると、人が生えてきた。", "ひたすら落下し続けている。一緒に堕ちている人が何か叫んでいる。", "誰かをひどく殴りつけている。一発ごとに周りの観客から喝采が上がる。", "知らない人ばかりのパーティのなか、必死に知り合いを探している。", "何かに追いかけられて暗い道を走っている。そして追いつかれた。", "列車に乗って、通り過ぎていく景色を見ている。向かいの客席に誰かがいる。", "朝起きて冷蔵庫を開けにいくと、ありえない人物が朝食を作っていた。", "なぜか分からないが捕まって留置された。入れられた房には意外な人が。", "道端にいた散歩の犬が「これは夢だ」と事情を語り始めた。", "みんな死んでしまった。墓の前で座っていると、近づいてくる人影がある。"]),
          "MNST": $$$($$($nesting, 'DiceTable'), 'Table').$new("館シーン表", "2D6", ["地下牢。朽ち果てた骸の手首には鉄枷がはまったままだ。", "礼拝堂。何千本もの蝋燭が祭壇を照らす。", "厨房。得体の知れない鍋の中で何かが煮えたぎっている。", "客間。天蓋付きの寝台は分厚く暖かそうだ。", "中庭。ガゼボが配置されているが斬りかかってはいけない。", "天井の高い廊下。あちこちに風景画が飾られている。", "植木の迷路。動物型の植木が沈黙の咆哮をあげている。", "玄関ホール。もちろん二階まで吹き抜けで階段がある。", "食堂。果てしなく長いテーブルに椅子がセットされている。", "時計塔。巨大な歯車とシャフトの組み合わせが回る。", "領主の部屋。重厚なデスクと背後の本棚が威圧的だ。"]),
          "SLST": $$$($$($nesting, 'DiceTable'), 'Table').$new("学校シーン表", "2D6", ["廊下。消防ホースの箱がやたらと赤く目立つ", "運動場。石灰と混ざり合った白っぽい砂が積もっている。", "保健室。白いカーテンが揺れ、同じく白いベッドで影がおどる。", "講堂。ワックスのかかった床が、靴とこすれて甲高い音で鳴る。", "人でいっぱいの教室。みな座ってはいるがやかましい。", "誰もいない教室。時計の音がやけに大きく響く。", "昇降口。いくつも並んだ大きな下駄箱に名前が書かれている。", "音楽室。作曲家の肖像画がピアノを見下ろしている。", "理科室。薬品と埃の臭いが鼻をつく。", "工作室。机の大きな傷には木くずが詰まっている。", "開かずの教室。ここは真っ暗だ……出口も入り口もない。"]),
          "TD1T": $$$($$($nesting, 'DiceTable'), 'Table').$new("時間経過表十代", "1D6", ["自分探しの旅に出た。旅先で見つけた新しい自分は、なかなか好きになれるやつだった。\n狩人は主武装のうち一つを変更してもかまわない。変更したらキャラクターの再構築を行う。", "吸血鬼狩りを通して、仲間との絆が深まる。\n仲間の狩人から一人を目標として選び、その狩人に対する関係【震度】を２増加させる。\nその状態でセッションを開始する。", "自分の将来に不安を覚え、吸血鬼狩り以外のことにチャレンジしてみるものの、どれも中途半端でうまくいかない。\n狩人は「動転」の変調を発動した状態でセッションを開始する。", "最近イヤなことがあって、相当不機嫌な状態になっている。\n【モラル】の現在値を０にし、その状態でセッションを開始する。", "新しい友達が出来る。\n狩人と同じ年齢の協力者を、狩人のプレイヤーが作成する。レベルは１とすること。\nこの協力者はセッションに登場し、獲得すれば使用できる。", "ちょっと見ないうちに協力者が成長する。\n協力者を獲得している場合、その中から一人を選ぶ。\nその協力者のレベルが１上昇する。\n協力者を獲得していない場合、効果はない。"]),
          "TD2T": $$$($$($nesting, 'DiceTable'), 'Table').$new("時間経過表二十代", "1D6", ["表の仕事や学業で大抜擢され、若き天才として大いに名をはせる。\n【モラル】が３増加し、その状態でセッションを開始する。", "人生の新たな楽しみを発見する。\n【幸福】を一つ新たに設定し、獲得できる。\n【人間力】が足りない場合は、入れ替えるか無視すること。", "恋人との関係がシリアスなトラブルに変化する。\nまだ解決してはいないが、かなりのストレスだ。\n【感情】が3増加した状態でセッションを開始する。", "休暇中に無茶をして大怪我を負ってしまう。\n吸血鬼狩りはタイミングが命なので、怪我をおして参加することになる。\n狩人は｢重症｣の変調を発動した状態でセッションを開始する。", "新しい友達が出来た。\n狩人と五歳差までで任意の年齢の協力者を、狩人のプレイヤーが作成する。\nレベルは1とすること。この協力者はセッションに登場し、獲得すれば使用できる。", "協力者を獲得している場合、そのうち一人に絡んだイベントが発生していた。\n「転職」「結婚」「挫折」「失恋」「出産」「その他」などから一つを任意に選び、その協力者のレベルを1上げる。\n協力者を獲得していない場合、狩人のイベントとなり効果はない。"]),
          "TD3T": $$$($$($nesting, 'DiceTable'), 'Table').$new("時間経過表三十代", "1D6", ["ある種の慎重さを身につけ、常に狩りの準備を怠らないようになる。\n再殺武装から一つを選び、それをすでに獲得した状態でセッションを開始する。", "拠点の運営に協力し、管理を最適化して簡単に利用できるようにした。\n狩人側の拠点を一つ選び、その必要レベルを1減少させる。\nただし1未満にはならない。", "だんだんと責任のある立場になるにつれ、それに縛られているような感慨を覚えるようになる。\n「捕縛｣の変調を発動した状態でセッションを開始する。", "狩人の噂を聞きつけた協力者が現れ、知己を得る。\n狩人と十歳差までで任意の年齢の協力者を、狩人のプレイヤーが作成する。\nレベルは1とすること。\nこの協力者はセッションに登場し、獲得すれば使用できる。", "軽い生活習慣病を発症する。特に狩りに影響はしない。", "協力者を獲得している場合、そのうち一人に絡んだイベントが発生していた。\n「転職」「結婚」「挫折」「失恋」「出産」「その他」などから一つを任意に選び、その協力者のレベルを1上げる。\n協力者を獲得していない場合、狩人のイベントとなり効果はない。"]),
          "TD4T": $$$($$($nesting, 'DiceTable'), 'Table').$new("時間経過表四十代", "1D6", ["だんだんと物事に動じず、迷わなくなってきた自分に気づく。\nこのセッションの遭遇シーンでは感情属性を任意に設定できる。", "重厚さを増す大人のオーラによって、他の狩人からの尊敬を勝ち取ることに成功する。\n仲間の狩人から目標を一人選び、目標から狩人への関係【深度】を1増加する。", "後進の育成に熱心になる。\nこのセッションの間、自分の追跡シーンに自分より若い味方キャラクターが登場している場合、判定にプラス1の修正がつく。\nこの修正は累積しない。", "大病発覚。\n狩人に後継者がいる場合、結果フェイズで狩人は死亡する。\n後継者がいない場合、またはセッション中に決別したり裏切られた場合には、奇跡的に回復する。", "幅広い人脈の中から吸血鬼の実在に耐えられる人物を見つけ出す。\n狩人と二十歳差までで任意の年齢の協力者を、狩人のプレイヤーが作成する。\nレベル1とすること。\nこの協力者はセッションに登場し、獲得すれば使用できる。", "協力者を獲得している場合、そのうち一人に絡んだイベントが発生していた。\n「転職」「結婚」「挫折」「失恋」「出産」「その他」などから一つを任意に選び、その協力者のレベルを1上げる。\n協力者を獲得していない場合、狩人のイベントとなり効果はない。"]),
          "TD5T": $$$($$($nesting, 'DiceTable'), 'Table').$new("時間経過表五十代", "1D6", ["長年の経験によって【人間力】がこのセッションの間だけ１増加し、【幸福】も一つ獲得する。\nこの効果は累積せず、すでに【人間力】が５の場合は効果なし。", "武器の扱いにトリックを付け加える。\n【ダメージ修正】がこのセッションの間だけ1増加する。この効果は累積しない。", "長年酷使されてきた体が、そろそろ狩りについていけなくなる。\n「捕縛｣の変調を発動した状態でセッションを開始する。", "大病発覚。狩人に後継者がいる場合、結果フェイズで狩人は死亡する。\n後継者がいない場合、またはセッション中に決別したり裏切られた場合には、奇跡的に回復する。", "協力者を獲得している場合、そのうち一人が爆発的な成長を見せる。\nその協力者のレベルを２上げる。協力者を獲得していない場合、効果はなし。", "協力者を獲得している場合、そのうち一人に絡んだイベントが発生していた。\n「転職」「結婚」「挫折」「失恋」「出産」「その他」などから一つを任意に選び、その協力者のレベルを1上げる。\n協力者を獲得していない場合、狩人のイベントとなり効果はない。"]),
          "TD6T": $$$($$($nesting, 'DiceTable'), 'Table').$new("時間経過表六十代", "1D6", ["偉大な狩人の風格を漂わせることに成功。\n狩人のことを慕い、狩人に対して【深度】５の関係があるレベル７の協力者を獲得する。\n望むなら即座に後継者にしてもよい。", "吸血鬼の永遠の命に対する憧れが膨れあがってくる。\nセッションの間、｢誘惑｣に対する抵抗判定にマイナス２の修正がつく。\nこの効果は累積しない。", "隠退生活に思いをはせ始める。\nもはや狩りにあまり積極的にはなれず、【モラル】の現在値を０にし、その状態でセッションを開始する。", "大病発覚。\n狩人に後継者がいる場合、結果フェイズで狩人は死亡する。\n後継者がいない場合、またはセッション中に決別したり裏切られた場合には、奇跡的に回復する。", "ふと死期を悟る。次の狩りが最後になるだろう。\nセッションの間、暴走のたびに【激情】を二つ獲得できる。\n結果フェイズで狩人は死亡する。", "協力者を獲得している場合、その指導に一年をかける。\n協力者のなかから一人を選び、その協力者のレベルを２上げる。\n協力者を獲得していない場合、のんびりした一年だった。"]),
          "TDHT": $$$($$($nesting, 'DiceTable'), 'Table').$new("時間経過表半吸血鬼", "1D6", ["じっくりと時間をかけて、敵吸血鬼の個性を研究する。\nこのセッションの間、吸血鬼を目標とした｢前哨戦｣の判定にプラス１の修正がつく。\nこの効果は累積しない。", "自分の血の力について考慮を深め、より自由に使いこなせるようになる。\n修得している血戒グループのアビリティから一つを選び、その名前に「＋」をつけること。\nそのアビリティの反動はやはり二倍だが、【感情】の増加にすることができる。", "吸血鬼の強大な力に対する憧れが膨れあがってくる。\nセッションの間、｢誘惑｣に対する抵抗判定にマイナス２の修正がつく。\nこの効果は累積しない。", "種族がらみのイヤなイベントが起こった。\n【モラル】の現在値を０にし、その状態でセッションを開始する。", "吸血鬼に転成を持ちかけられる。\n敵の吸血鬼に対する関係【深度】が１増加し、その状態でセッションを開始する。", "新しい友達が出来る。\n任意の年齢の協力者を、狩人のプレイヤーが作成する。\nレベルは１とすること。\nこの協力者はセッションに登場し、獲得すれば使用できる。"]),
          "ST": $$$($$($nesting, 'DiceTable'), 'Table').$new("シーン表", "2D6", ["どこまでも広がる荒野。風が吹き抜けていく。", "血まみれの惨劇の跡。いったい誰がこんなことを？", "都市の地下。かぼそい明かりがコンクリートを照らす。", "豪華な調度が揃えられた室内。くつろぎの空間を演出。", "普通の道端。様々な人が道を行き交う。", "明るく浮かぶ月の下。暴力の気配が満ちていく。", "打ち捨てられた廃墟。荒れ果てた景色に心も荒む。", "生活の様子が色濃く残る部屋の中。誰の部屋だろう？", "喧しい飲食店。騒ぐ人々に紛れつつ事態は進行する。", "ざわめく木立。踊る影。", "高い塔の上。都市を一望できる。"]),
          "MIT": $$$($$($nesting, 'DiceTable'), 'Table').$new("軽度狂気表", "1D6", ["【誇大妄想】（判定に失敗するたびに【感情】が１増加する。）", "【記憶喪失】（【幸福】の修復判定にマイナス２の修正。）", "【こだわり】（戦闘中の行動を「パス」以外で一つ選択し、その行動をすると【感情】が６増加する。）", "【お守り中毒】（「幸運のお守り」を装備していない場合、全ての2d6判定にマイナス１の修正。）", "【不死幻想】（自分が受けるダメージが全て１増加する。）", "【血の飢え】（戦闘中に最低１体でも死亡させないと、戦闘終了時に【感情】１０増加。【激情】は獲得できない。）"]),
          "SIT": $$$($$($nesting, 'DiceTable'), 'Table').$new("重度狂気表", "1D6", ["【幸福依存】（【幸福】を一つ選択し、その【幸福】が結果フェイズに失われたとき、死亡する。）", "【見えない友達】（自分の関わる「関係を深める」判定にマイナス３の修正がつく。）", "【臆病】（自分の行う妨害判定にマイナス２の修正がつく。）", "【陰謀論】（「幸福を味わう」判定にマイナス３の修正がつく。）", "【指令受信】（追跡フェイズＢでの自分の行動は、可能な範囲でGMが決定する。）", "【猜疑心】（自分が「連携攻撃」を行うとき、関係の【深度】をダメージに加えられない。）"])
        }).$merge($$($nesting, 'TABLES_WITH_BLOOD_MOON')).$freeze());
        return self.$register_prefix($$($nesting, 'RTT').$prefixes(), $$($nesting, 'TABLES').$keys());
      })($nesting[0], $$($nesting, 'Base'), $nesting);
    })($nesting[0], $nesting);
  }($nesting[0], $nesting);
})(Opal);

/***/ })

}]);
//# sourceMappingURL=default~BloodCrusade~index.js.map