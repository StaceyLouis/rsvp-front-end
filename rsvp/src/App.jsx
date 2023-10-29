import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Rsvp from './components/Rsvp';
import RsvpData from './components/RsvpData';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom'
import Thank from './components/Thank'

const Container = styled.section`
.title{
  font-family: Brittany;
  font-size: 4rem;
}
p{
  font-size: 1.2rem;
}
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`
function App() {
  const [data, setData] = useState([]);
  const[refresh, setRefresh] = useState(false)
  useEffect(() => {
    axios.get("https://rsvp-88gc.onrender.com/rsvp").then((res) => {
      setData(res.data);
    });
  }, [refresh]);

 
  return (
    <Container>
      <h2 className="title">Sam & Omar's baby shower </h2>
          <p>Please RSVP by November 10th,2023. Each guest needs to sign up seperately including pre-approved "Plus Ones" </p>
    <Flex>
    <Rsvp  refresh = {setRefresh}/>
    <div>
      <h2>Guest Count:{data.length}/105</h2>
    <RsvpData data={data} />
    </div>
    </Flex>

   
    </Container>
  )
}

export default App
