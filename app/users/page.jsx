import axios from "axios";
import Link from "next/link";

const getAllUsers = async () => {
  const data = await axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users/",
  });
  return data.data;
};

const Users = async () => {
  const users = await getAllUsers();
  console.log(users);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex justify-center gap-x-8 items-center mb-[0.75em] bg-green-600 dark:bg-red-600 font-bold"
        >
          <h1>{user.name}</h1>
          <Link href={`/users/${user.id}`}>{user.id}</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
