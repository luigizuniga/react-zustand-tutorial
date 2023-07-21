// import { shallow } from "zustand/shallow";
import TodoApp from "./components/TodoApp";
// import { useBookStore } from "./store/bookStore";
const App = () => {


  // const amount = useBookStore(state => state.amount);
  // const title = useBookStore(state => state.title);
  // const updateAmount = useBookStore( state => state.updateAmount );
  return (
    <>
      {/* <h2>Title : { title }</h2>
      <h3>Books: { amount }</h3>
      <button
        onClick={ () => updateAmount(10) }
      > Update Amount </button> */}
      <TodoApp></TodoApp>
    </>
  )
}

export default App;
