document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".animate-title");
  //   const str = el.innerHTML.trim();
  const str = el.innerHTML.trim().split("");

  //   let concatStr = "";
  //   for (let c of str) {
  //     c = c.replace(/\s+/, "&nbsp;"); // 空白文字をエスケープ
  //     concatStr += `<span class="char">${c}</span>`;
  //   }
  //   el.innerHTML = concatStr;

  // reduceを使って書き換え
  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, "&nbsp;");
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});
