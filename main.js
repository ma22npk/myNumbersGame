// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'

{


class Panel {
constructor() {
this.el = document.createElement('li');
this.el.classList.add('pressed');
}
}

  class Board {
    constructor() {
      this.panels = [];
      //panelを4枚作る
      for (let i = 0; i < 4; i++) {
        //this.panelに対して後で作っていくPanelクラスのインスタンスをpushしてあげる
        this.panels.push(new this.Panel());
      }

    }
  }
  const board = new Board();


}