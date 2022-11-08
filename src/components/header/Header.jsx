
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Cards from "../cards/Cards";
import {
 
  HeaderButton,
  HeaderDiv,
  HeaderForm,
  HeaderH1,
  HeaderSelect,
} from "./Header.style";

const Header = () => {
  const [searchData, setSearchData] = useState("");
  const [selectData, setSelectData] = useState("");
  const [getData, setgetData] = useState([]);
  console.log(searchData);
  console.log(selectData);
  console.log(getData);

  // const url = `https://api.edamam.com/search?q=${searchData}&app_id=29e1b965&app_key=d36f57f6f46ee8cfaffc07daa4a40dad&mealType=${selectData}`;
 const url = `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${searchData}&app_id=29e1b965&app_key=d36f57f6f46ee8cfaffc07daa4a40dad&mealType=${selectData}`
  const handleGetData = async (e) => {
    e.preventDefault();
    const { data } = await axios(url);
    setgetData(data.hits);
    console.log(data.hits);
  };

  return (
    <HeaderDiv>
      <HeaderH1>KIND OF FOOD</HeaderH1>
      <HeaderForm>
        <div className="mb-3">
          <input
            onChange={(e) => setSearchData(e.target.value)}
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder="Search Food"
          />
        </div>
        <div className="mb-3">
          <HeaderSelect
            id="disabledSelect"
            className="form-select"
            onClick={(e) => setSelectData(e.target.value)}
          >
            <option value="">Select </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="teatime">Teatime</option>
            <option value="snack">Snack</option>
          </HeaderSelect>
        </div>
        <div className="mb-3"></div>
        <HeaderButton
          onClick={handleGetData}
          type="submit"
          size="lg"
          className="btn btn-primary"
        >
          Search
        </HeaderButton>
      </HeaderForm>
        <Row style={{textAlign:"center", padding:"100px", display:"flex", width:"100%", justifyContent:"center"}} >
          {getData?.map((item, index) => {
            return <Cards item={item} key={index} />;
          })}
        </Row>

    </HeaderDiv>
  );
};

export default Header;
