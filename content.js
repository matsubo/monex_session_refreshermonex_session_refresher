// 5分（300,000ミリ秒）ごとに処理を実行
const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

setInterval(() => {
  // 現在のページのURLに対して、非同期でGETリクエストを送信
  // これによりページ全体のリロードは発生せず、セッションだけが延長される
  fetch(window.location.href)
    .then(response => {
      if (response.ok) {
        console.log('セッションを正常に延長しました。', new Date().toLocaleTimeString());
      } else {
        console.error('セッションの延長に失敗しました。ステータス:', response.status);
      }
    })
    .catch(error => {
      console.error('通信エラーが発生しました:', error);
    });
}, FIVE_MINUTES_IN_MS);

console.log('Monex証券のセッション維持機能が有効になりました。');
