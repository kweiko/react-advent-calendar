import styled from "styled-components";
import hatchBackdrop from "./img/hatch_backdrop.jpg";

export const StyledHatch = styled.div`
  padding-top: 100%;
  position: relative;
  cursor: pointer;

  .front {
    //background: center / cover url(${props => props.background});
    background: center / cover rgba(10, 150, 200, 1);
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Dancing Script", cursive;
      color: white;
      padding: 20px;
      width: 50%;
      height: 50%;
      border-radius: 20%;
      background: rgba(0,0,0,0.2);
      font-weight: 700;
      font-size: 4rem;
    }

    &.open {
      transform: rotateY(180deg);
    }
  }

  .back {
    position: absolute;
    //background: center/cover url(${hatchBackdrop});
    background: center/cover rgba(10, 90, 150, 0.9);
    top: 0px;
    left: 0px;
    z-index: 1;
    transform: rotateY(180deg);

    p {
      //font-family: "Dancing Script", cursive;
      font-family: 'Amatic SC', cursive;
      color: white;
      padding: 10px;
      font-size: 1.4rem;
      text-align: center;
    }

    &.open {
      z-index: 2;
      transform: rotateY(0deg);
    }

  }

  //the hatch
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    transform-style: preserve-3d;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
  }
`;