import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever} from "react-icons/md";
import { removeUser } from "../store/slices/Userslice";
const DisplayUsers = () => {
    const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
    console.log(data);

    const deleteUser = (id) => {
      dispatch(removeUser(id));
      // console.log(data);
    }
    
  return (
    <div>
      <Wrapper>
        {data.map((user, id) => {
            return <li key={id} className="dlt-btn-li">
                {user}
                <button className="btn-delete" onClick={()=>deleteUser(id)}>
                    <MdDeleteForever  className="delete-icon"/>
                </button> 
            
            </li>;
        })}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  .dlt-btn-li{
    display: flex;
    justify-content:space-between;
    margin-bottom:8px;
  }
  
  h3 {
    margin: 0;
  }
  .btn-delete {
    padding: 3px;
    background-color: none;
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
    background-color: yellow;
    border: none;
  }
  .delete-icon {
    font-size: 2rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default DisplayUsers;
