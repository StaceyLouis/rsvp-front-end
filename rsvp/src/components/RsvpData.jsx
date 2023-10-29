import styled from "styled-components";

const Container = styled.section`
    width: 40vw;
    padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  color: black !important;
  p {
    color: black;
  }
  h2 {
    font-size: 3rem;
  }
`;
const Div = styled.div`
height: 50vh;
overflow-y:scroll;
`

const RsvpData = ({ data }) => {
    console.log(data);
    const rsvpList = data.map((i) => {
      return (
        <Container className="card-container" key={i._id}>
          <p className="name">{i.name}</p>
          <p className="attending">
            {i.attending ? <span>attending</span> : <span>not attending</span>}
          </p>
        </Container>
      );
    }).reverse();
    return (
      <>
        <Div>
          {rsvpList}
        </Div>
      </>
    );
  };
  
  export default RsvpData;