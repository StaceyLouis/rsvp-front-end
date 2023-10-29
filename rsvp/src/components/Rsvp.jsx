import {useState , useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.section`
    width: 45vw;
  display: flex;
  flex-flow: column nowrap;

  font-family: "Playfair Display";

  form {
    border: 0.1rem solid #c6d2c6;
    padding: 3rem 3rem 0 3rem;
    border-radius: 1rem;
    width: 60%;
    background-color: #c6d2c6;
    color: #fcffec;
    height: 70vh;
  }
  label {
    font-size: 1.7rem;
  }
  .input {
    padding: .2rem;
    width: 90%;
    margin: .7rem 0;
    border-radius: 0.8rem;
    border: 2px solid #fcffec;
    background-color: inherit;
    color: white;
    font-size: 2rem;
    font-family: "Playfair Display";
    &:focus {
      outline: none;
    }
  }
  .content{
    font-size: 1.5rem;
    color: white;
  }
  button {
    padding: .2rem;
    font-size: 1.6rem;
    width: 70%;
    background-color: #ffca68;
    border: none;
    border-radius: 10px;
    margin: 2rem 0;
    font-family: inherit;
    color: #fdfff5;
  }
  .title{
    font-family: Brittany;
  }
`;

const Rsvp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState(true);

  console.log(props)
  const getList = () =>{
    axios.get("https://rsvp-88gc.onrender.com/rsvp").then((res) => {
      console.log(res.data);
    });
  }

  useEffect(getList, []);

    const handleSubmit = (e) => {
    axios
      .post("https://rsvp-88gc.onrender.com/rsvp", {
        name: name,
        email: email,
        attending: attending
      })
      .then(function (response) {
        console.log(response.data);

      })
      .catch(function (error) {
        console.log(error);
      });
        setName("")
        setEmail("")
        setAttending(true)
        getList()
      };

  const handleChange = (evt) => {
    setAttending(evt.target.value);
  };

  return (
    <Container>
      
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="input"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          className="input"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="content">Will you be Attending?</p>
        <label htmlFor="name">Yes</label>
        <input
          type="radio"
          className="radio"
          name="attending"
          onChange={handleChange}
          value={attending}
        />
        <label htmlFor="name">No</label>
        <input
          type="radio"
          className="radio"
          name="attending"
          onChange={handleChange}
          value={!attending}
        />
        <br />
        <button>Submit</button>
      </form>

      
    </Container>
  );
};

export default Rsvp;
