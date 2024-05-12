 
import React,{useState } from "react";
import Header from "./components/Layout/Header";
import Items from "./components/Layout/Items";
import Cart from "./components/Card/Cart";
import CartProvider from "./components/Store/CartProvider";


 function App() {
  const [cartIsShown, setCartIsShown] = useState (false);

  const showCartHandler = ( ) => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
      <CartProvider>
        {cartIsShown && <Cart  onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler}/>
        <main>
          <Items />
        </main>
        </CartProvider>
  );
}

export default App;
