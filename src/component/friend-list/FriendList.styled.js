import styled from "@emotion/styled";

export const Profile = styled.div`
  display: block;
  width: 600px;
  background-color: rgb(241, 239, 239);
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding: 20px 0px;
  text-align: center;
`;
export const List = styled.ul`
  list-style-type: none;
`;
export const Item = styled.li`
  display: flex;
  align-self: center;
  width: 200px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
  padding: 10px;
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;

  border-radius: 50%;
  margin-top: auto;
  margin-bottom: auto;
  background-color: ${(props) => {
    return props.isOnline ? "green" : "red";
  }};
`;
export const Avatar = styled.img`
  margin-right: 10px;
  margin-left: 10px;
`;
