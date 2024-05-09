import axios from "axios";

const getUser = async (id) => {
  const data = await axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  });

  return data.data;
};

const getUser2 = async (id) => {
  const data = await axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  });

  return data.data;
};

const UserInfo = async ({ params }) => {
  const { userId } = params;

  const user = await getUser(userId);
  const user2 = await getUser2(+userId++);

  return (
    <div className="text-center">
      <h1>UserInfo</h1>

      <h1>{user.name}</h1>
    </div>
  );
};

export default UserInfo;
