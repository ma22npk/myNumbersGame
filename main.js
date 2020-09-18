// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'

{

  class Panel {
    constructor() {
      this.el = document.createElement('li');
      this.el.classList.add('pressed');
      this.el.addEventListener('click', () => {
        this.check();
      });
    }
    getEl() {
      //elプロパティを返すメソッド
      //直接プロパティにアクセスせず、メソッドを作ってアクセスすることをオブジェクト指向のカプセル化と呼ぶ
      return this.el;
    }

    activate(num) {
      this.el.classList.remove('pressed');
      this.el.textContent = num;
    }
    check() {
      //parseInt = 文字列を数値にする
      if (currentNum === parseInt(this.el.textContent, 10)) {
        this.el.classList.add('pressed');
        //次を選べるように1を増やす
        currentNum++;
        if (currentNum === 4) {
          clearTimeout(timeoutId);
        }
      }
    }
  }



  class Board {
    constructor() {
      this.panels = [];
      //panelを4枚作る
      for (let i = 0; i < 4; i++) {
        //this.panelに対して後で作っていくPanelクラスのインスタンスをpushしてあげる
        this.panels.push(new Panel());
      }
      this.setup();
    }
    setup() {
      const board = document.getElementById('board');
      this.panels.forEach(panel => {
        //board.appendChild(panel.el);
        board.appendChild(panel.getEl());
      });
    }
    activate() {
      const nums = [0, 1, 2, 3];
      //それぞれのパネルに対して処理をするのでforEachで回す
      this.panels.forEach(panel => {
        //数字はナンバーの集まりのうちランダムに選ばれた数 * ナンバーの数
        const num = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
        panel.activate(num);
      })
    }
  }

  function runTimer() {
    const timer = document.getElementById('timer')
    //現在時刻から押した時間を引き、1000で割って小数点二桁を表示する
    timer.textContent = ((Date.now() - startTime) / 1000).toFixed(2);
    timeoutId = setTimeout(() => {
      runTimer();
    }, 10);
  }



  let currentNum;
  let startTime;
  let timeoutId;

  const board = new Board();
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    if (typeof timeoutId !== 'undefined') {
      clearTimeout(timeoutId);
    }
    currentNum = 0;


    board.activate();
    startTime = Date.now();
    runTimer();


  });
}