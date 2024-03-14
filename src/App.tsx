import WideCheckButtonList from "./components/WideCheckButtonList";

function App() {
  return (
    <WideCheckButtonList
      checkedList={[
        "기본 설정(앱 설치, 환경설정 등)",
        "기본 활용(카메라, 갤러리 등)",
        "실생활 활용(카카오톡, 모바일 주문, 배달 앱 등)",
      ]}
      onCheckedClick={console.log}
    />
  );
}

export default App;
