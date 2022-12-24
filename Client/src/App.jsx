import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import { GlobalContext } from './Context/GlobalContext';
import * as Api from './Api/Api'
import axios from 'axios'

function App() {

  //Add Post Form
  const [addMemoryFormData, setaddMemoryFormData] = useState({
    title: '',
    description: '',
    creator: 'Admin',
    tags: '',
    selectedFiles: ''
  })

  // const addMemoryFormOnChange = (e) => {
  //   let { name, value } = e.target;
  //   let data = { [name]: value }
  //   setaddMemoryFormData({ ...addMemoryFormData, ...data })
  // }


  const addMemoryFormOnSubmit = (e) => {
    e.preventDefault()
    try {
      axios.post('http://localhost:5000/posts', addMemoryFormData)
        .then((res) => {
          console.log(res.data)
        }).catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log(error);
    }
    console.log(addMemoryFormData);
    setaddMemoryFormData({
      title: '',
      description: '',
      creator: 'Admin',
      tags: '',
      selectedFiles: ''
    })
  }

  //Fetch Data
  const [posts, setposts] = useState([])
  const [loader, setloader] = useState(false)

  const fetchData = async () => {
    try {
      setloader(true)
      axios.get('http://localhost:5000/posts')
        .then((res) => {
          setposts(res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    catch (error) {
      console.log(error)
    }
    setloader(false)

  }
  useEffect(() => {
    fetchData()
  }, [])




  return (
    <>
      <GlobalContext.Provider value={{ addMemoryFormData, setaddMemoryFormData, addMemoryFormOnSubmit, posts, loader }}>
        <Header />
        <MainContainer />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
