import CartItem from "./CartItem";

function App() {
  return (
    <div className="App">
      <h1>Cart</h1>
      <CartItem />
    </div>
  );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
  },
};

export default App;
