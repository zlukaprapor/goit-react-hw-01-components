import styled from "@emotion/styled";
export const Container = styled.div`
  display: block;
  text-align: center;
  width: 600px;
  background-color: rgb(194, 186, 186);
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
`;
export const Title = styled.h2`
  display: block;
  width: 385px;

  background-color: red;
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  margin-botton: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-self: center;
  width: 75px;
  border: 1px solid gray;
  padding: 0px;
  margin: 0px;
`;
export const Label = styled.span`
  color: red;
  margin: 5px 0px;
`;
