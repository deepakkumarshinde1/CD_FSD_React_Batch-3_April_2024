let userListView = document.querySelector("#user-list-view");
let getDataBtn = document.querySelector("#get-data-btn");

getDataBtn.addEventListener("click", getData);

async function getData() {
  try {
    let url = `https://jsonplaceholder.typicode.com/users`;
    // get the response from server
    let response = await fetch(url);
    let data = await response.json();

    let _newArray = data.map(function (value, index) {
      return `<tr>
                    <td>${index + 1}</td>
                    <td>${value.name}</td>
                    <td>${value.email}</td>
                    <td><a href="#">${value.website}</a></td>
                </tr>`;
    });
    userListView.innerHTML = _newArray.join("");
  } catch (error) {
    alert(error.message);
  }
}
