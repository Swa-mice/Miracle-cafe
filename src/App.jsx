import "./App.css";
import { useState, useEffect } from "react";

import ChefDashboard from "./components/ChefDashboard/ChefDashboard";
import Table from "./components/TableOrder/TableOrder";
import RestaurantQR from "./components/RestaurantQR/RestaurantQR";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Container from "./components/Layout/Container";
import MenuSection from "./components/MenuSection/MenuSection";
import Cart from "./components/Cart/Cart";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import Receipt from "./components/Receipt/Receipt";
import QRScanner from "./components/QRScanner/QRScanner";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";

import {
  burgers,
  pizzas,
  chickenMeals,
  vegetables,
  drinks,
  traditionalFoods,
} from "./data/Menudata";

function App() {
  const [step, setStep] = useState("menu");

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
  const [search] = useState("");

  // 🔥 Detect table from QR
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const table = params.get("table");

    if (table) {
      setTableNumber(table);
    }
  }, []);

  // 🔥 TABLE PAGE ROUTE
  if (window.location.pathname === "/table") {
    return <Table />;
  }

  return (
    <>
      <Navbar />

      <Container>
        {step === "menu" && (
          <>
            <Hero />

            <section id="about">
              <About />
            </section>

            <div id="menu">
              <div className="category-nav">
                <a href="#burgers">🍔 Burgers</a>
                <a href="#pizza">🍕 Pizza</a>
                <a href="#chicken">🍗 Chicken</a>
                <a href="#vegetables">🥗 Vegetables</a>
                <a href="#drinks">🥤 Drinks</a>
                <a href="#traditional">🍛 Traditional</a>
              </div>

              <div id="burgers">
                <MenuSection
                  title="🍔 Burgers"
                  foods={burgers.filter((f) =>
                    f.name.toLowerCase().includes(search.toLowerCase())
                  )}
                  setCart={setCart}
                />
              </div>

              <div id="pizza">
                <MenuSection
                  title="🍕 Pizzas"
                  foods={pizzas.filter((f) =>
                    f.name.toLowerCase().includes(search.toLowerCase())
                  )}
                  setCart={setCart}
                />
              </div>

              <div id="chicken">
                <MenuSection
                  title="🍗 Chicken Meals"
                  foods={chickenMeals.filter((f) =>
                    f.name.toLowerCase().includes(search.toLowerCase())
                  )}
                  setCart={setCart}
                />
              </div>

              <div id="vegetables">
                <MenuSection
                  title="🥗 Vegetables"
                  foods={vegetables.filter((f) =>
                    f.name.toLowerCase().includes(search.toLowerCase())
                  )}
                  setCart={setCart}
                />
              </div>

              <div id="traditional">
                <MenuSection
                  title="🍛 Traditional Foods"
                  foods={traditionalFoods.filter((f) =>
                    f.name.toLowerCase().includes(search.toLowerCase())
                  )}
                  setCart={setCart}
                />
              </div>

              <div id="drinks">
                <MenuSection
                  title="🥤 Drinks"
                  foods={drinks.filter((f) =>
                    f.name.toLowerCase().includes(search.toLowerCase())
                  )}
                  setCart={setCart}
                />
              </div>
            </div>

            <Cart cart={cart} setCart={setCart} />

            {cart.length > 0 && (
              <button
                className="checkout-btn"
                onClick={() => setStep("order")}
              >
                Proceed to Checkout →
              </button>
            )}

            <section id="reviews">
              <Reviews />
            </section>

            <section id="contact">
              <Contact />
            </section>

            <Footer />
          </>
        )}

        {step === "order" && (
          <>
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

            <button
              className="back-btn"
              onClick={() => setStep("menu")}
            >
              ← Back to Menu
            </button>

            <Receipt currentOrder={currentOrder} />
          </>
        )}

        <hr />

        {isAdmin ? (
          <Dashboard />
        ) : (
          <Login setIsAdmin={setIsAdmin} />
        )}
      </Container>
    </>
  );
}

export default App;