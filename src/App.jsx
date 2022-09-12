import './App.css'
import data from './data.json'
import Layout from './Layout';

const App = ()=> {
  console.log(data.technology);
  return (
    <main className='text-4xl font-bold text-green-600 p-4 border-2 border-red-500'>
      <h2>welcome</h2>
     <Layout/>
    </main>
  )
}

export default App

