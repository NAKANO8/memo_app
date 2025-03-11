//著作権的に問題あり、公開は厳禁
function createMemo() {
  const memo = document.getElementById('memoArea');

  if (memo.value === '') {
    return;
  }

  const newElement = document.createElement('li');

  newElement.textContent = memo.value;

  const memoList = document.getElementById('memoList');

  memoList.appendChild(newElement);

  memo.value = '';
}

function deleteMemo() {
  const memoList = document.getElementById('memoList');

  if (memoList.children.length === 0) {
    return;
  }
  const childMemoList = memoList.firstElementChild;

  childMemoList.remove();
}

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', createMemo);

const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', deleteMemo);
