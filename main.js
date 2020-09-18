// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'

{


  class Panel {
    constructor() {
      this.el = document.createElement('li');
      this.el.classList.add('pressed');
    }
    getEl() {
      //elプロパティを返すメソッド
      //直接プロパティにアクセスせず、メソッドを作ってアクセスすることをオブジェクト指向のカプセル化と呼ぶ
      return this.el;
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
  }
  const board = new Board();


}