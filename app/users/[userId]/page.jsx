import axios from "axios";
import Image from "next/image";
import TestImage from "@/public/Login-1.png";

const getUser = async (id) => {
  const data = await axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  });

  return data.data;
};

const getPosts = async () => {
  const data = await axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/posts/`,
  });

  return data.data;
};

const getDogs = async () => {
  const data = await axios({
    method: "get",
    url: `https://dog.ceo/api/breeds/image/random`,
  });
  return data.data;
};

const UserInfo = async ({ params }) => {
  const { userId } = params;

  const [user, post, dog] = await Promise.allSettled([
    getUser(userId),
    getPosts(),
    getDogs(),
  ]);

  return (
    <div className="text-center">
      <h1>UserInfo</h1>
      {user.value.name}
      <Image
        src={`${dog.value.message}`}
        width={300}
        height={300}
        alt="dog logo"
        className="w-[50%]"
        priority={true}
      />
    </div>
  );
};

export default UserInfo;
