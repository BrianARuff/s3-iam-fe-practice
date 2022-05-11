const form = document.querySelector("#form");
const input = document.querySelector("#file");
let url;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const file = input.files[0];

  if (input.files.length) {
    const data = await fetch("http://localhost:3000/api/upload-image", {
      method: "POST",
      body: JSON.stringify({ fileName: input.files[0].name }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const reponse = await data.json();

    url = reponse.url;

    if (url) {
      const data = await fetch(url, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("DATA", data);
    } else {
      console.log("no file");
    }
  }
});
