import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import { GlobalContext } from './Context/GlobalContext';
import * as Api from './Api/Api'
import axios from 'axios'

function App() {

  const [user, setuser] = useState('Admin')
  const [currentId, setcurrentId] = useState(null)
  const [isEdit, setisEdit] = useState(false)
  const [posts, setposts] = useState([])
  const [loader, setloader] = useState(false)
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

  const clear = () => {
    setaddMemoryFormData({
      title: '',
      description: '',
      creator: user,
      tags: '',
      selectedFiles: ''
    })
    setcurrentId(null)
    setisEdit(false)
  }

  const addMemoryFormOnSubmit = (e) => {
    e.preventDefault()

    try {
      if (isEdit) {
        Api.EditPost(addMemoryFormData, currentId).then(() => fetchData())
      }
      else {
        Api.createPost(addMemoryFormData).then(() => fetchData())
      }
    } catch (error) {
      console.log(error);
    }
    clear()
  }

  //Fetch Data


  const fetchData = async () => {
    setloader(true)
    try {
      let { data } = await Api.fetchPosts()
      setposts(data)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setloader(false)
    }
    clear()
  }

  // Edit POst

  const editpost = (id) => {
    setcurrentId(id)
    let postToBeEdited = posts.find((posts) => posts._id == id)
    setisEdit(true)
    let { title, description, tags, selectedFiles } = postToBeEdited
    setaddMemoryFormData({
      title: title,
      description: description,
      creator: user,
      tags: tags,
      selectedFiles: selectedFiles
    })
  }
  useEffect(() => {
    fetchData()
  }, [])


  const deletePost = (id) => {
    try {
      Api.deletePost(id).then(() => fetchData())
    } catch (error) {
      console.log(error);
    }
    fetchData()
  }


  return (
    <>
      <GlobalContext.Provider value={{
        addMemoryFormData, setaddMemoryFormData, addMemoryFormOnSubmit,
        posts, loader, editpost, isEdit, currentId, deletePost
      }}>
        <Header />
        <MainContainer />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
