import CityList from "../../components/CityList";

function App () {
  return (<div className="container mx-auto px-4">
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <h1 className="text-3xl font-bold underline">Welcome to React</h1>
        <CityList />
      </div>  
  </div>)
}

export default App;
