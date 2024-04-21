import { clearAllUsers } from "../store/slices/Userslice";
import styled from "styled-components";
import {useDispatch } from "react-redux";
export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  // const data = useSelector((state) => {
  //   return state
  // });
  // console.log(data);


  const delete_Allusers = () => {
    dispatch(clearAllUsers());
    // console.log("hii delete all users");
  }
  return (
    <Wrapper>
      <div>
        <button className="btnClr_User" onClick={() => delete_Allusers()}>Delete All User</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 0;
  }
  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }
  .admin-subtitle {
    font-size: 3.2rem;
  }
  .delete-btn {
    background-color: transparent;
    border: none;
  }
  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }

  .btnClr_User {
    border: none;
    border-radius: 8px;
    font-size: 20px;
    background-color: skyblue;
    color: white;
    padding: 15px;
    margin-top: 5px;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(1 1 0 / 0.2));
    cursor: pointer;
  }

  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;
