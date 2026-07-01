import { useState } from "react";
import "./App.css";

import Hero from "./components/Hero/Hero";
import Container from "./components/Layout/Container";
import MenuSection from "./components/MenuSection/MenuSection";
import Cart from "./components/Cart/Cart";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import Receipt from "./components/Receipt/Receipt";
import SpecialCard from "./components/SpecialCard/SpecialCard";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";

import {
  breakfast,
  burgers,
  pizzas,
  traditionalFoods,
  drinks,
  vegetables,
  chickenMeals,
} from "./data/Menudata";

function App() {

  const [cart, setCart] = useState([]);

  const [customerName, setCustomerName] = useState("");
  const [orderType, setOrderType] = useState("Dine In");
  const [tableNumber, setTableNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [packageNeeded, setPackageNeeded] = useState(false);
  const [note, setNote] = useState("");

  const [currentOrder, setCurrentOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>

      <Hero />

      <Container>

        <SpecialCard />

        <MenuSection
          title="🌅 Breakfast"
          foods={breakfast}
          setCart={setCart}
        />

        <MenuSection
          title="🍔 Burgers"
          foods={burgers}
          setCart={setCart}
        />

        <MenuSection
          title="🍕 Pizzas"
          foods={pizzas}
          setCart={setCart}
        />

        <MenuSection
          title="🍗 Chicken Meals"
          foods={chickenMeals}
          setCart={setCart}
        />

        <MenuSection
          title="🥗 Vegetables"
          foods={vegetables}
          setCart={setCart}
        />

        <MenuSection
          title="🥤 Drinks"
          foods={drinks}
          setCart={setCart}
        />

        <MenuSection
          title="🍛 Traditional Foods"
          foods={traditionalFoods}
          setCart={setCart}
        />

        <Cart
          cart={cart}
          setCart={setCart}
        />

        <CustomerForm
          customerName={customerName}
          setCustomerName={setCustomerName}
          orderType={orderType}
          setOrderType={setOrderType}
          tableNumber={tableNumber}
          setTableNumber={setTableNumber}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          packageNeeded={packageNeeded}
          setPackageNeeded={setPackageNeeded}
          note={note}
          setNote={setNote}
        />

        <OrderSummary
          cart={cart}
          customerName={customerName}
          orderType={orderType}
          tableNumber={tableNumber}
          paymentMethod={paymentMethod}
          packageNeeded={packageNeeded}
          note={note}
          setCurrentOrder={setCurrentOrder}
          setOrders={setOrders}
          setCart={setCart}
        />

        <Receipt currentOrder={currentOrder} />

        <hr />

        {isAdmin ? (
          <Dashboard orders={orders} />
        ) : (
          <Login setIsAdmin={setIsAdmin} />
        )}

      </Container>

    </>
  );
}

export default App;