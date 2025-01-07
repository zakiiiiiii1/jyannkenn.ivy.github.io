// じゃんけんゲーム
function playJanken() {
    // 選択肢を定義
    const choices = ["グー", "チョキ", "パー"];

    // プレイヤーの選択を取得
    const playerChoice = prompt("じゃんけんをしましょう！ グー、チョキ、パーから選んでください。");

    // 入力が無効な場合の処理
    if (!choices.includes(playerChoice)) {
        alert("無効な選択です。グー、チョキ、パーから選んでください。");
        return;
    }

    // コンピュータの選択をランダムで生成
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // 結果を判定
    let result = "";
    if (playerChoice === computerChoice) {
        result = "引き分けです！";
    } else if (
        (playerChoice === "グー" && computerChoice === "チョキ") ||
        (playerChoice === "チョキ" && computerChoice === "パー") ||
        (playerChoice === "パー" && computerChoice === "グー")
    ) {
        result = "あなたの勝ちです！";
    } else {
        result = "あなたの負けです...";
    }

    // 結果を表示
    alert(`あなたの選択: ${playerChoice}\nコンピュータの選択: ${computerChoice}\n結果: ${result}`);
}

// ゲームを開始
playJanken();