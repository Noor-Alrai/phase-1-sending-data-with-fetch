// Add your code here

const submitData = (userName, userEmail) => {
  const url = "http://localhost:3000/users";
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  };
  return fetch(url, config)
    .then((response) => response.json())
    .then((user) => {
      const newId = user.id;
      const idElement = document.createElement("p");
      idElement.textContent = `New ID: ${newId}`;
      document.body.appendChild(idElement);
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorElement = document.createElement("p");
      errorElement.textContent = `Error: ${errorMessage}`;
      document.body.appendChild(errorElement);
    });
};

submitData("Ahmad", "a.gmail.com");
