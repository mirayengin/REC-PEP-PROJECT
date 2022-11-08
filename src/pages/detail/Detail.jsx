import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DetailButton,
  DetailDiv,
  DetailImg,
  DetailUl,
  DetailUl2,
  TotalDiv,
} from "./Detail.style";

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.recipe);
  const { image, ingredientLines, totalNutrients, totalWeight, calories } =
    location.state.recipe;
  console.log(totalNutrients.CA.label);
  return (
    image && (
      <TotalDiv>
        <DetailDiv>
          <DetailUl>
            <h3>Nutrients</h3>
            <li>
              {totalNutrients.CA.label} :{" "}
              {totalNutrients.CA.quantity.toFixed(3)}
              {totalNutrients.CA.unit}{" "}
            </li>
            <li>
              {totalNutrients.CHOCDF.label} :{" "}
              {totalNutrients.CHOCDF.quantity.toFixed(3)}
              {totalNutrients.CHOCDF.unit}
            </li>
            <li>
              {totalNutrients.CHOLE.label} :{" "}
              {totalNutrients.CHOLE.quantity.toFixed(3)}
              {totalNutrients.CHOLE.unit}
            </li>
            <li>
              {totalNutrients.ENERC_KCAL.label} :{" "}
              {totalNutrients.ENERC_KCAL.quantity.toFixed(3)}
              {totalNutrients.ENERC_KCAL.unit}
            </li>
            <li>TotalWeight : {totalWeight}</li>
            <li>Calories : {Math.ceil(calories)}</li>
            <li>
              {totalNutrients.FAT.label} :{" "}
              {totalNutrients.FAT.quantity.toFixed(3)}
              {totalNutrients.FAT.unit}
            </li>
            <li>
              {totalNutrients.WATER.label} :{" "}
              {totalNutrients.WATER.quantity.toFixed(3)}
              {totalNutrients.WATER.unit}
            </li>
            <li>
              {totalNutrients.K.label} :{" "}
              {totalNutrients.WATER.quantity.toFixed(3)}
              {totalNutrients.WATER.unit}
            </li>
          </DetailUl>

          <div>
            <DetailImg src={image} alt="" />
          </div>

          <DetailUl2>
            {ingredientLines.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </DetailUl2>
        </DetailDiv>
        <div className=" gap-2">
          <DetailButton
            onClick={(e) => navigate(-1)}
            variant="primary"
            size="sm"
          >
            Go Home Page
          </DetailButton>
        </div>
      </TotalDiv>
    )
  );
};

export default Detail;
