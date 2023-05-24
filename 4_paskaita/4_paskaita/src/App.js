import React from "react";
import Product from "./components/Product";
import "./App.css";

const App = () => {
  return (
    <div>
      <Product
        image="https://th.bing.com/th/id/OIP.y5Y20F2sk323gRMzBNMYdwHaHa?pid=ImgDet&rs=1"
        title="Volkswagen GOLF MK2 2022 Calendar"
        price="$1010"
        description="12 unique designs. All pieces are printed on heavyweight 200 art paper. One size 11.7x16.5inch"
        availability="Availability: 10 in stock"
        category="Category: Calendars"
      />
    </div>
  );
};

export default App;
