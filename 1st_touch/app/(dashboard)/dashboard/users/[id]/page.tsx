const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; // name has to be 'params'
  return (
    <>
      <div>User Details for User = {id}</div>
    </>
  );
};

export default UserDetails;
