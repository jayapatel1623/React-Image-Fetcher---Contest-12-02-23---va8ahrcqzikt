import React from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const fetchPosts = async (id) =>{
  let url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  return fetch(url);
}
const App = () => {
  const[dataaa,setData]=useState([])
  const[id,setId]=useState(null)
  const handleChange=(e)=>{
    setId(e.target.value)
  
}
const loadData=async ()=>{
  fetchPosts(id)
  .then((res)=>res.json())
  .then((jsonData)=>{
    setData(jsonData);
  })
}
useEffect(()=>{
  loadData()
},[id])
  return(
    <div>
    <span>Id number</span>
    <input type="number"onChange={handleChange}/>
{data==null

export default App;
