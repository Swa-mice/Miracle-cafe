import "./App.css";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Layout/Container";
import MenuSection from "./components/MenuSection/MenuSection";
import Cart from "./components/Cart/Cart";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import Receipt from "./components/Receipt/Receipt";
import SpecialCard from "./components/SpecialCard/SpecialCard";
import FeatureSection from "./components/FeatureSection/FeatureSection";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import About from "./components/About/About";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const table = params.get("table");

  if (table) {
    setTableNumber(table);
  }
}, []);
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [packageNeeded, setPackageNeeded] = useState(false);
  const [note, setNote] = useState("");

  const [currentOrder, setCurrentOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
   <>
  <Navbar />

  <Hero />

  <FeatureSection />

  <About />

  <WhyChooseUs />

  <Container>

        <SpecialCard />
       <div className="category-nav">

<button>🌅 Breakfast</button>

<button>🍔 Burgers</button>

<button>🍕 Pizza</button>

<button>🍗 Chicken</button>

<button>🥗 Vegetables</button>

<button>🥤 Drinks</button>

<button>🍛 Traditional</button>

</div>
        <div className="search-container">
 <input
  type="text"
  placeholder="🔍 Search your favorite food..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search-input"
/>
</div>
<MenuSection
  title="🌅 Breakfast"
  foods={breakfast.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  )}
  setCart={setCart}
/>

<MenuSection
  title="🍔 Burgers"
  foods={burgers.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  )}
  setCart={setCart}
/>

<MenuSection
  title="🍕 Pizzas"
  foods={pizzas.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  )}
  setCart={setCart}
/>

<MenuSection
  title="🍗 Chicken Meals"
  foods={chickenMeals.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  )}
  setCart={setCart}
/>

<MenuSection
  title="🥗 Vegetables"
  foods={vegetables.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  )}
  setCart={setCart}
/>

<MenuSection
  title="🥤 Drinks"
  foods={drinks.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  )}
  setCart={setCart}
/>

<MenuSection
  title="🍛 Traditional Foods"
  foods={traditionalFoods.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  )}
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
       <Reviews />

<Contact />

<Footer />

      </Container>

    </>
  );
}

export default App;