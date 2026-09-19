const categoryLists = document.querySelectorAll(".category-btn button");

categoryLists.forEach((item) => {
  item.addEventListener("click", () => {
    // すべてのボタンから選択状態を外す
    categoryLists.forEach((button) => {
      button.classList.remove("click-button");
    });

    // クリックしたボタンだけ選択状態にする
    item.classList.add("click-button");
  });
});
