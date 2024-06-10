fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => {
  res.json().then(data => {
    const names = data.map(user => user.name);
    console.log(names);
  });
});
