document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ul = document.querySelector("#tasks");
    let task = form.querySelector("#new-task-description");
    const li = document.createElement("li");
    const button = document.createElement("button");
    if (task.value) {
      li.textContent = task.value;
      button.innerText = "X";
      li.appendChild(button);
      console.log(li);
      ul.appendChild(li);
      task.value = "";
    }
  });
});
