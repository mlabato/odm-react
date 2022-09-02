import HomeNavbar from "../Layout/HomeNavbar";
import Footer from "../Layout/Footer";

const Layout = (props) => {
  return (
    <section>
      <HomeNavbar onClick={props.onClick} cart={props.cart} />
      <section className="flex flex-col flex-wrap sm:flex-col md:flex-col lg:flex-row mx-auto  justify-center ">
        {props.children}
      </section>
      <Footer />
    </section>
  );
};

export default Layout;
