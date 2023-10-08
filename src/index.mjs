// import "./styles.css";

function onClickComplete() {
  alert("complete");
}

function onClickDelete(buttonDelete) {
  // このボタンの親要素の li を未完了TODOから消す
  const deleteTarget = buttonDelete.parentNode.parentNode;
  document.getElementById("incomplete-list").removeChild(deleteTarget);
}

function createInCompleteTodo(inputText) {
  // TODO要素作成
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerText = inputText;
  const buttonComplete = document.createElement("button");
  buttonComplete.innerText = "完了";
  buttonComplete.addEventListener("click", () => onClickComplete());
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "削除";
  buttonDelete.addEventListener("click", () => onClickDelete(buttonDelete));

  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(p);
  div.appendChild(buttonComplete);
  div.appendChild(buttonDelete);
  li.appendChild(div);

  const ul = document.getElementById("incomplete-list");
  ul.appendChild(li);

  // ボタンにイベントを設定する
}

const onClickAdd = () => {
  // TODO値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createInCompleteTodo(inputText);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
