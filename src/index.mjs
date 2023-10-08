// import "./styles.css";

function deleteTODOListContent(button, patentUlId) {
  // TODO List の行を消す
  const deleteTarget = button.parentNode.parentNode;
  document.getElementById(patentUlId).removeChild(deleteTarget);
}

function onClickRevert(buttonRevert) {
  // 戻るボタンが押された
  alert("戻る");
}

function onClickComplete(buttonComplete, inputText) {
  // 完了したTODOにこの要素を追加する
  const p = document.createElement("p");
  p.innerText = inputText;

  const buttonRevert = document.createElement("button");
  buttonRevert.innerText = "戻す";
  buttonRevert.addEventListener("click", () => onClickRevert(buttonRevert));

  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(p);
  div.appendChild(buttonRevert);
  const li = document.createElement("li");
  li.appendChild(div);

  const ul = document.getElementById("complate-list");
  ul.appendChild(li);
  // この要素を消す
  deleteTODOListContent(buttonComplete, "incomplete-list");
}

function onClickDelete(buttonDelete) {
  // このボタンの親要素の li を未完了TODOから消す
  deleteTODOListContent(buttonDelete, "incomplete-list");
}

function createInCompleteTodo(inputText) {
  // TODO要素作成
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerText = inputText;
  const buttonComplete = document.createElement("button");
  buttonComplete.innerText = "完了";
  buttonComplete.addEventListener("click", () =>
    onClickComplete(buttonComplete, inputText),
  );
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
