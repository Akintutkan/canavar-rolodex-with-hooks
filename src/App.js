import { useState,useEffect} from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import './App.css'

const App = () => {
  // console.log('render')
  const [aramaAlanı, setAramaAlanı] = useState('') //value, setValue
  // const [title,setTitle] = useState('') 
  const [canavarlar,setCanavarlar] = useState([])
  // const [dizeAlanı,setDizeAlanı] = useState('') //value, setValue
  const [filtrelenmişCanavarlar,setFiltrelenmişCanavarlar] = useState(canavarlar)
  console.log("işlendi")
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setCanavarlar(users))
  }, [])
useEffect(() => {
  const yeniFiltrelenmişCanavarlar = canavarlar.filter((canavar) => {
    return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
  })
  setFiltrelenmişCanavarlar(yeniFiltrelenmişCanavarlar)
  // console.log("EffectAteşlendi")
} ,[canavarlar,aramaAlanı])
    //console.log(aramaAlanı)
  const aramaDeğişikliği = (e) => {
    const aramaAlanıDizesi = e.target.value.toLocaleLowerCase()
    setAramaAlanı(aramaAlanıDizesi)
  }
  // const başlıkDeğişikliği = (e) => {
  //   const aramaAlanıDizesi = e.target.value.toLocaleLowerCase()
  //   setTitle(aramaAlanıDizesi)
  // }
  // const dizeDeğişimi = (event) =>{
  //   setDizeAlanı(event.target.value)
  // }
  return (
    <div className='App'>
      <h1 className='app-title'>Canavarlar</h1>
      <SearchBox
        onChangeHandler={aramaDeğişikliği}
        placeholder='canavarları ara'
        className='monsters-search-box'
      />
      {/* <br /> */}
      {/* <SearchBox
        onChangeHandler={başlıkDeğişikliği}
        placeholder='başlıkları ara'
        className='monsters-search-box'
      /> */}
      {/* <SearchBox
        onChangeHandler={dizeDeğişimi}
        placeholder='canavarları ara'
      /> */}
      <CardList canavarlar={filtrelenmişCanavarlar} />
    </div>
  )
}
export default App
