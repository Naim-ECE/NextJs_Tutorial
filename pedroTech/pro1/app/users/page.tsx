const Users = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersInfo = await response.json();
  //   console.log(usersInfo);
  return (
    <>
      <h1>Users Page</h1>
      <ul>
        {usersInfo.map((user: { id: number; name: string }) => {
          return (
            <li key={user.id}>
              <h1>{user.name}</h1>
            </li>
          );
          //   {
          //     console.log(`${user.name}`);
          //   }
        })}
      </ul>
    </>
  );
};

export default Users;
