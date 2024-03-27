let input = document.querySelector("input");
let data = [
  {
    name: "Akshat joshi",
    src: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Aditya chamoli",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "Sonika joshi",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "Manisha bhandari",
    src: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Gautum singh kunwar",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Shivam gusain",
    src: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
];
let pers = "";
data;

input.addEventListener("input", function () {
  let matching = data.filter(function (e) {
    return e.name.startsWith(input.value);
  });
  let newuser = "";
  matching.forEach(function (elem) {
    newuser += `<div class="person">
    <div class="img">
      <img
        src=${elem.src}
        alt=""
      />
    </div>
    <h4>${elem.name}</h4>
  </div>`;
  });
  document.querySelector(".people").innerHTML = newuser;
});
