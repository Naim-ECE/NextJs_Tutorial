import { notFound } from "next/navigation";

const UserDetails = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const fetchUser = async (id: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) {
      return null;
    }
    const user = await response.json();
    return user;
  };
  const { userId } = await params;
  const user = await fetchUser(userId);

  if (!user) {
    notFound();
  }
  return (
    <>
      <div>
        <h1>Name: {user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Webstie: {user.website}</p>
        <p>Company: {user.company.name}</p>
        <p>Address: {user.address.street}</p>
      </div>
    </>
  );
};

export default UserDetails;
