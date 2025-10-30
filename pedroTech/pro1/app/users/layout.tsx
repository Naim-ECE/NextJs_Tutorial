const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="text-red-500">This is a user route</h1>
      {children}
      <h1>It's the footer</h1>
    </>
  );
};

export default UserLayout;
