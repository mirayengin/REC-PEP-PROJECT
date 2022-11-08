import styled from "styled-components";

export const TotalDiv = styled.div`
  background-color: #99b6197d;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DetailDiv = styled.div`
  background-color: #99b619;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 1.5rem;
  margin-bottom: 1rem;
  border-radius:1rem;
`;

export const DetailUl = styled.ul`
  list-style: none;
  text-align: end;
  margin-right: 2.5rem;
  font-weight: bold;
  width: 300px;
`;

export const DetailUl2 = styled.ul`
  font-weight: bold;
  list-style: none;
  text-align: start;
  width: 300px;
`;

export const DetailImg = styled.img`
  height: 15rem;
`;

export const DetailButton = styled.button`
  background-color: #99b6197e;
  padding: 0.5rem;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  &:hover {
    box-shadow: 2px 3px 2px 5px white;
  }
`;
