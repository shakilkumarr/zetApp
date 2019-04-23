import styled from 'styled-components';

const DIV = styled.div`
  display: flex;
  text-align: center;
  color: white;
  justify-content: center;
  background-color: tomato;
  width: 80%;
  margin: auto;
  height: 300px;
  > div {
        margin: 150px 0;
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    color: black;
    background-color: orange;
    width: 90%;
    height: 200px;
    > div {
      margin: 100px 0;
    }
  }
`;

export default DIV;
