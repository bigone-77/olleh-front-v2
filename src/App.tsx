import CheckButtonList from "./components/CheckButtonList";

function App() {
  return (
    <CheckButtonList
      checkedList={["30대", "40대", "50대", "60대", "70대", "상관없음"]}
      onCheckedClick={console.log}
    />
  );
}

export default App;
