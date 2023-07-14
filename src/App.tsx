// import { shallow } from "zustand/shallow";
import { useBookStore } from "./store/bookStore";

const App = () => {
  // Acceder al stado de las propiedades
  // const amount = useBookStore(state => state.amount);
  // const title = useBookStore(state => state.title);
  // const { amount, title } = useBookStore(
  //   (state)=>({ 
  //       amount: state.amount,
  //       title: state.title,
  //     }), shallow
  //   );

  const amount = useBookStore(state => state.amount);
  const title = useBookStore(state => state.title);
  const updateAmount = useBookStore( state => state.updateAmount );
  return (
    <>
      <h2>Title : { title }</h2>
      <h3>Books: { amount }</h3>
      <button
        onClick={ () => updateAmount(10) }
      > Update Amount </button>
    </>
  )
}

export default App;
