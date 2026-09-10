(() => {
  "use strict";

  // 場面ごと・難易度ごとの例文データ。
  // {} の位置が穴埋めになる助詞。answer がその正解。
  const SENTENCE_BANK = {
    school: {
      easy: [
        { text: "わたし{}学校へ行きます。", answer: "は" },
        { text: "わたしは学校{}行きます。", answer: "へ" },
        { text: "教室{}そうじします。", answer: "を" },
        { text: "先生{}しつもんをします。", answer: "に" },
        { text: "本{}読みます。", answer: "を" },
        { text: "友達{}話します。", answer: "と" },
        { text: "学校{}きゅうしょくを食べます。", answer: "で" },
        { text: "かばん{}つくえに置きます。", answer: "を" },
        { text: "じゅぎょう{}はじまります。", answer: "が" },
        { text: "黒板{}字を書きます。", answer: "に" },
        { text: "体育館{}運動をします。", answer: "で" },
        { text: "ノート{}字を書きます。", answer: "に" },
        { text: "図書室{}本を借ります。", answer: "で" }
      ],
      normal: [
        { text: "学校{}じゅぎょうは9時からです。", answer: "の" },
        { text: "1時間目{}5時間目まで授業があります。", answer: "から" },
        { text: "休み時間{}お昼休みまでです。", answer: "から" },
        { text: "そうじ{}時間は3時からです。", answer: "の" },
        { text: "きゅうけい時間は10時{}です。", answer: "まで" },
        { text: "朝{}会は8時半からです。", answer: "の" },
        { text: "玄関{}教室まで歩きます。", answer: "から" },
        { text: "体育{}じゅぎょうは楽しいです。", answer: "の" },
        { text: "給食{}時間はにぎやかです。", answer: "の" },
        { text: "学校{}帰る時間は3時です。", answer: "から" },
        { text: "朝{}夕方まで学校で勉強します。", answer: "から" },
        { text: "クラス{}みんなで歌いました。", answer: "の" },
        { text: "1時間目{}国語のじゅぎょうです。", answer: "は" }
      ]
    },
    home: {
      easy: [
        { text: "わたし{}家で宿題をします。", answer: "は" },
        { text: "デパート{}行きます。", answer: "へ" },
        { text: "お母さん{}りょうりを作ります。", answer: "が" },
        { text: "テレビ{}見ます。", answer: "を" },
        { text: "弟{}あそびます。", answer: "と" },
        { text: "部屋{}そうじします。", answer: "を" },
        { text: "お父さん{}話します。", answer: "と" },
        { text: "犬{}えさをあげます。", answer: "に" },
        { text: "食卓{}ご飯を食べます。", answer: "で" },
        { text: "おふろ{}入ります。", answer: "に" },
        { text: "せんたくもの{}たたみます。", answer: "を" },
        { text: "家族{}買い物に行きます。", answer: "と" },
        { text: "玄関{}くつをそろえます。", answer: "で" }
      ],
      normal: [
        { text: "家{}門限は6時までです。", answer: "の" },
        { text: "テレビの時間は8時{}です。", answer: "まで" },
        { text: "家{}仕事は皿洗いです。", answer: "の" },
        { text: "お風呂{}時間は9時からです。", answer: "の" },
        { text: "朝{}晩まで家族と過ごします。", answer: "から" },
        { text: "兄{}部屋は2階です。", answer: "の" },
        { text: "台所{}りょうりのにおいがします。", answer: "から" },
        { text: "家族{}やくそくを守ります。", answer: "の" },
        { text: "朝{}夜まで休みの日は家でゆっくりします。", answer: "から" },
        { text: "テレビ{}時間は7時からです。", answer: "の" },
        { text: "宿題{}時間は5時からです。", answer: "の" },
        { text: "母{}買い物は午前中までです。", answer: "の" }
      ]
    },
    shopping: {
      easy: [
        { text: "スーパー{}パンを買いました。", answer: "で" },
        { text: "スーパー{}行きます。", answer: "へ" },
        { text: "お店{}服を見ました。", answer: "で" },
        { text: "パン{}買いました。", answer: "を" },
        { text: "店員さん{}あいさつをします。", answer: "に" },
        { text: "友達{}買い物に行きます。", answer: "と" },
        { text: "レジ{}お金をはらいます。", answer: "で" },
        { text: "くつ{}買いました。", answer: "を" },
        { text: "かご{}品物を入れます。", answer: "に" },
        { text: "おつり{}もらいます。", answer: "を" },
        { text: "店員さん{}話します。", answer: "と" },
        { text: "商品{}えらびます。", answer: "を" },
        { text: "コンビニ{}買い物をします。", answer: "で" }
      ],
      normal: [
        { text: "スーパー{}開店時間は9時からです。", answer: "の" },
        { text: "セールは今日{}です。", answer: "まで" },
        { text: "セール{}期間は今日までです。", answer: "の" },
        { text: "開店{}閉店まで店は開いています。", answer: "から" },
        { text: "お店{}場所は駅の近くです。", answer: "の" },
        { text: "レジ{}列に並びます。", answer: "の" },
        { text: "午前{}午後まで買い物をしました。", answer: "から" },
        { text: "品物{}ねだんを見ます。", answer: "の" },
        { text: "セール{}時間は3時からです。", answer: "の" },
        { text: "お店{}休みは月曜日です。", answer: "の" },
        { text: "改札口{}ホームまで歩きます。", answer: "から" },
        { text: "レシート{}中身を確認します。", answer: "の" }
      ]
    },
    work: {
      easy: [
        { text: "わたし{}仕事をします。", answer: "は" },
        { text: "会社{}行きます。", answer: "へ" },
        { text: "上司{}あいさつをします。", answer: "に" },
        { text: "荷物{}運びます。", answer: "を" },
        { text: "同僚{}話します。", answer: "と" },
        { text: "作業{}始めます。", answer: "を" },
        { text: "会社{}働きます。", answer: "で" },
        { text: "書類{}整理します。", answer: "を" },
        { text: "先輩{}教えてもらいます。", answer: "に" },
        { text: "仕事{}終わります。", answer: "が" },
        { text: "工場{}作業をします。", answer: "で" },
        { text: "道具{}使います。", answer: "を" },
        { text: "チーム{}協力します。", answer: "で" }
      ],
      normal: [
        { text: "仕事{}時間は9時からです。", answer: "の" },
        { text: "仕事は5時{}です。", answer: "まで" },
        { text: "午前{}午後まで働きます。", answer: "から" },
        { text: "休けい時間は12時{}です。", answer: "から" },
        { text: "始業{}終業まで仕事をします。", answer: "から" },
        { text: "会社{}規則を守ります。", answer: "の" },
        { text: "作業{}時間は5時までです。", answer: "の" },
        { text: "出勤{}退勤まで頑張ります。", answer: "から" },
        { text: "上司{}指示は的確です。", answer: "の" },
        { text: "朝礼{}終業まで気をつけます。", answer: "から" },
        { text: "仕事{}内容を確認します。", answer: "の" },
        { text: "昼休み{}午後1時までです。", answer: "は" },
        { text: "月曜{}金曜まで仕事があります。", answer: "から" }
      ]
    },
    transport: {
      easy: [
        { text: "わたし{}バスに乗ります。", answer: "は" },
        { text: "駅{}向かいます。", answer: "へ" },
        { text: "電車{}乗ります。", answer: "に" },
        { text: "駅{}切符を買います。", answer: "で" },
        { text: "バス{}降ります。", answer: "を" },
        { text: "友達{}電車に乗ります。", answer: "と" },
        { text: "ホーム{}電車を待ちます。", answer: "で" },
        { text: "切符{}買います。", answer: "を" },
        { text: "運転手さん{}あいさつをします。", answer: "に" },
        { text: "電車{}到着します。", answer: "が" },
        { text: "バス停{}並びます。", answer: "で" },
        { text: "座席{}座ります。", answer: "に" },
        { text: "かいさつぐち{}通ります。", answer: "を" }
      ],
      normal: [
        { text: "電車{}時刻表は駅にあります。", answer: "の" },
        { text: "始発から終電{}電車が走ります。", answer: "まで" },
        { text: "バス{}時間は7時からです。", answer: "の" },
        { text: "出発{}到着まで30分かかります。", answer: "から" },
        { text: "電車{}運賃はきっぷに書いてあります。", answer: "の" },
        { text: "朝{}夕方まで電車は混みます。", answer: "から" },
        { text: "バス停{}場所は学校の前です。", answer: "の" },
        { text: "始発駅{}終点まで乗ります。", answer: "から" },
        { text: "ホーム{}番号を確認します。", answer: "の" },
        { text: "改札口{}ホームまで歩きます。", answer: "から" },
        { text: "運転{}時間は守られています。", answer: "の" },
        { text: "乗車{}降車まで気をつけます。", answer: "から" }
      ]
    },
    friend: {
      easy: [
        { text: "友達{}一緒に帰りました。", answer: "と" },
        { text: "友達の家{}行きます。", answer: "へ" },
        { text: "友達{}手紙を書きます。", answer: "に" },
        { text: "プレゼント{}わたします。", answer: "を" },
        { text: "友達{}あそびます。", answer: "と" },
        { text: "友達{}笑いました。", answer: "が" },
        { text: "電話{}話します。", answer: "で" },
        { text: "手紙{}書きます。", answer: "を" },
        { text: "公園{}友達とあそびます。", answer: "で" },
        { text: "友達{}やさしいです。", answer: "は" },
        { text: "友達{}あいさつをします。", answer: "に" },
        { text: "ボール{}投げます。", answer: "を" },
        { text: "友達{}声をかけます。", answer: "に" }
      ],
      normal: [
        { text: "友達{}家は近くです。", answer: "の" },
        { text: "休み時間は3時{}です。", answer: "まで" },
        { text: "朝{}帰りまで友達と一緒です。", answer: "から" },
        { text: "休み時間{}放課後まで友達と話します。", answer: "から" },
        { text: "友達{}やくそくを守ります。", answer: "の" },
        { text: "誕生日{}お祝いをしました。", answer: "の" },
        { text: "友達{}名前を呼びます。", answer: "の" },
        { text: "午前{}午後まで友達と遊びました。", answer: "から" },
        { text: "友達{}気持ちを考えます。", answer: "の" },
        { text: "午前中{}昼休みまで友達と話します。", answer: "から" },
        { text: "友達{}話は面白いです。", answer: "の" },
        { text: "朝{}放課後まで友達と過ごします。", answer: "から" },
        { text: "友達{}気持ちがわかります。", answer: "の" }
      ]
    }
  };

  // 使用する助詞（表示・案内用）
  const PARTICLES = ["は", "が", "を", "に", "へ", "で", "と", "の", "から", "まで"];

  const els = {
    btnCreate: document.getElementById("btnCreate"),
    btnRegenerate: document.getElementById("btnRegenerate"),
    btnAnswers: document.getElementById("btnAnswers"),
    btnPrint: document.getElementById("btnPrint"),
    statusMessage: document.getElementById("statusMessage"),
    worksheet: document.getElementById("worksheet"),
    questionList: document.getElementById("questionList")
  };

  let answersVisible = false;

  function getSelectedValue(name) {
    const el = document.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : null;
  }

  function shuffle(array) {
    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  // 1〜35 の丸数字（①〜㉟）。範囲外は (n) 表記にする。
  function circledNumber(n) {
    if (n >= 1 && n <= 20) {
      return String.fromCodePoint(0x2460 + (n - 1));
    }
    if (n >= 21 && n <= 35) {
      return String.fromCodePoint(0x3251 + (n - 21));
    }
    return `(${n})`;
  }

  function pickQuestions(scene, level, count) {
    const pool = SENTENCE_BANK[scene][level];
    const questions = [];
    let shuffled = shuffle(pool);
    let cursor = 0;

    while (questions.length < count) {
      if (cursor >= shuffled.length) {
        shuffled = shuffle(pool);
        cursor = 0;
      }
      questions.push(shuffled[cursor]);
      cursor++;
    }

    return questions;
  }

  function buildQuestionItem(question, index) {
    const li = document.createElement("li");
    li.className = "question-item";

    const [before, after] = question.text.split("{}");

    const qnum = document.createElement("span");
    qnum.className = "qnum";
    qnum.textContent = circledNumber(index + 1);

    const sentence = document.createElement("span");
    sentence.className = "sentence";

    const blank = document.createElement("span");
    blank.className = "blank";
    blank.dataset.answer = question.answer;

    sentence.append(
      document.createTextNode(before),
      document.createTextNode("（"),
      blank,
      document.createTextNode("）"),
      document.createTextNode(after)
    );

    li.append(qnum, sentence);
    return li;
  }

  function renderQuestions(questions) {
    els.questionList.innerHTML = "";
    questions.forEach((question, index) => {
      els.questionList.appendChild(buildQuestionItem(question, index));
    });
  }

  function setAnswersVisible(visible) {
    answersVisible = visible;
    const blanks = els.questionList.querySelectorAll(".blank");
    blanks.forEach((blank) => {
      blank.textContent = visible ? blank.dataset.answer : "";
      blank.classList.toggle("filled", visible);
    });
    els.btnAnswers.textContent = visible ? "答えを隠す" : "答えを見る";
  }

  function showStatus(message) {
    els.statusMessage.textContent = message;
  }

  function generateWorksheet() {
    const count = Number(getSelectedValue("count"));
    const level = getSelectedValue("level");
    const scene = getSelectedValue("scene");

    if (!count || !level || !scene) {
      showStatus("問題数・難易度・場面をすべて選んでください。");
      return;
    }

    const questions = pickQuestions(scene, level, count);
    renderQuestions(questions);
    setAnswersVisible(false);

    els.worksheet.classList.remove("hidden");
    els.btnRegenerate.disabled = false;
    els.btnAnswers.disabled = false;
    els.btnPrint.disabled = false;

    showStatus(`プリントを作成しました（全${count}問）。`);
    els.worksheet.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  els.btnCreate.addEventListener("click", generateWorksheet);
  els.btnRegenerate.addEventListener("click", generateWorksheet);

  els.btnAnswers.addEventListener("click", () => {
    setAnswersVisible(!answersVisible);
  });

  els.btnPrint.addEventListener("click", () => {
    window.print();
  });
})();
