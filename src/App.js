import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import stock from "./stock.mp4";
import ScrollButton from "./Components/ScrollButton";
import { Content, Heading } from "./Components/Style";
import ConfettiComponent from "./Components/Confetti";
import { Row, Container } from "reactstrap";
import Stock from "./Stock";
// import Confetti from "react-confetti/dist/types/Confetti";

function App() {
  const [name, setName] = useState("");
  const [stockInfo, setStockInfo] = useState();

  const fetchData = () => {
    Axios.get(
      `https://finfo-api.vndirect.com.vn/v4/stock_prices?sort=date&size=1&q=code:${name}`
    ).then((res) => {
      console.log(res.data.data);
      setStockInfo(res.data.data);
    });
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(/fstock.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <Container>
        <video className="videoTag" autoPlay loop muted>
          <source src={stock} type="video/mp4" />
        </video>
      </Container> */}
      <ConfettiComponent />
      <Heading className="text-5xl">Thông tin tỉ giá chứng khoán</Heading>
      <Content>
        <h3 className="text-xl" id="h3-tag">
          Tìm hiểu giá chứng khoán mỗi ngày có rất nhiều lợi ích cho nhà đầu tư
          và những người quan tâm đến thị trường chứng khoán. Dưới đây là một số
          lợi ích cơ bản:
        </h3>
        <p className="text-xl" id="p-tag">
          <p>
            1. Giúp bạn nắm bắt được tình hình thị trường chứng khoán: Tìm hiểu
            giá chứng khoán mỗi ngày giúp bạn có thể đánh giá được tình hình thị
            trường chứng khoán, từ đó đưa ra quyết định đầu tư hợp lý và kịp
            thời.
          </p>

          <p className="text-xl">
            2. Giúp bạn theo dõi được sự thay đổi của giá cổ phiếu: Tìm hiểu giá
            chứng khoán mỗi ngày giúp bạn theo dõi được sự thay đổi của giá cổ
            phiếu của các công ty mình quan tâm, từ đó đưa ra quyết định mua
            hoặc bán cổ phiếu.
          </p>

          <p className="text-xl">
            3. Giúp bạn phát hiện được các cơ hội đầu tư: Tìm hiểu giá chứng
            khoán mỗi ngày giúp bạn phát hiện được các cơ hội đầu tư tiềm năng,
            đưa ra quyết định đầu tư hợp lý và đạt được lợi nhuận cao.
          </p>

          <p className="text-xl">
            4. Giúp bạn đưa ra quyết định đầu tư chính xác: Tìm hiểu giá chứng
            khoán mỗi ngày giúp bạn có thông tin đầy đủ, chính xác để đưa ra
            quyết định đầu tư chính xác và giảm thiểu rủi ro.
          </p>

          <p className="text-xl">
            5. Giúp bạn cập nhật được các thông tin về thị trường và kinh tế:
            Tìm hiểu giá chứng khoán mỗi ngày giúp bạn cập nhật được các thông
            tin về thị trường và kinh tế, từ đó đưa ra quyết định đầu tư hợp lý
            và đạt được lợi nhuận cao hơn.
          </p>
        </p>
      </Content>
      <ScrollButton />
      <Heading className="text-4xl">Tìm kiếm thông tin tỉ giá sàn hôm nay</Heading>
      <div class="search-container" id="search-bar">
        <input
          type="text"
          name="search"
          placeholder="VD: FPT, VNG, ..."
          class="search-input"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <a class="search-btn">
          <button onClick={fetchData} id="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </a>
      </div>
      {/* <h3>{JSON.stringify(stockInfo, null, "\t")}</h3>
      <h3>Xuat ra{stockInfo?.date}</h3> */}
      {stockInfo?.map((coin) => {
        return (
          <Stock
            code={coin.code}
            time={coin.time}
            date={coin.date}
            basicPrice={coin.basicPrice}
            open={coin.open}
            close={coin.close}
          />
        );
      })}

      <Container>
        <video className="videoTag" autoPlay loop muted>
          <source src={stock} type="video/mp4" />
        </video>
      </Container>
    </div>
  );
}
export default App;
