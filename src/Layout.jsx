import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <section className="">{children}</section>
    </main>
  );
};

export default Layout;
