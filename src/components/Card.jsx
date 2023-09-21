import React, { useContext } from "react";
import { TestContext } from "../App";

const Card = () => {
  const { user, setUser } = useContext(TestContext);

  return (
    <div class="card" style={{ width: "400px" }}>
      <img
        class="card-img-top"
        src="https://www.w3schools.com/bootstrap5/img_avatar5.png"
        alt="Card image"
      />
      <div class="card-body">
        <h4 class="card-title">{user.name}</h4>
        <p class="card-text">{user.age}</p>
        <p class="card-text">{user.gender}</p>
        <button
          class="btn btn-primary"
          onClick={() => {
            setUser({
              name: "Amisha",
              gender: "female",
              age: 26,
            });
          }}
        >
          See Profile
        </button>
      </div>
    </div>
  );
};

export default Card;
