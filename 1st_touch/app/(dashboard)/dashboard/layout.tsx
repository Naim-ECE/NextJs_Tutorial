const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // the prop name has to be 'children'
    <>
      <h1>Dashboard Navbar</h1>
      {children}
      <h1>Dashboard Footer</h1>
    </>
  );
};

export default Layout;
