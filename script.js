// 異体字セレクタの範囲 (U+E0100〜U+E01EF)
const vsStart = 0xE0100;
const vsEnd = 0xE01EF;

// フォームの送信イベントを処理
document.getElementById('ivsForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // 入力された文字と選択されたフォントを取得
    const char = document.getElementById('characterInput').value;
    const selectedFont = document.getElementById('fontSelector').value;
    if (!char) {
        alert("漢字を入力してください！");
        return;
    }

    // 出力エリアをクリア
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<strong>出力:</strong>';
    outputDiv.style.fontFamily = selectedFont;

    const ivsItem = document.createElement('div');
    ivsItem.className = 'ivs-item';
    ivsItem.textContent = `${char} (row)`;
    outputDiv.appendChild(ivsItem);

    // 異体字セレクタを適用して結果を生成
    for (let vs = vsStart; vs <= vsEnd; vs++) {
        const ivsChar = char + String.fromCodePoint(vs);
        const ivsHex = `U+${vs.toString(16).toUpperCase()}`;

        // 結果を追加
        const ivsItem = document.createElement('div');
        ivsItem.className = 'ivs-item';
        ivsItem.textContent = `${ivsChar} (${ivsHex})`;
        outputDiv.appendChild(ivsItem);
    }
});
