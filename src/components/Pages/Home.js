import Layout from "../UI/Layout";
import Slider from "../Layout/Slider";
import MainWrapper from "../Layout/MainWrapper";
import Maintext from "../Layout/Maintext";
import Bottomtext from "../Layout/Bottomtext";
import DiscountWrapper from "../Layout/DiscountWrapper";

function Home(props) {
  return (
    <Layout onClick={props.onShowCart}>
      <Slider />
      <Maintext />
      <MainWrapper />
      <Bottomtext />
      <DiscountWrapper products={props.products} />
    </Layout>
  );
}

export default Home;
