import React from "react";
import "./Section.css";

const Section = ({ hero }) => {
  console.log(hero);
  return (
    <div>
      <div className="table-block">
        {hero.map(item => (
          <table className="hero_table" border="5" width="777px">
            <tr>
              <th rowspan="2"> Persons</th>
              <th colspan="4">Info</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>age</th>
              <th>id</th>
            </tr>
            <tr>
              <td>
                <img
                  className="hero-image"
                  src={item.image}
                  alt=""
                  style={{ width: "100px" }}
                />
              </td>
              <td align="center">{item.name}</td>
              <td align="center">{item.lastName}</td>
              <td align="center">{item.age}</td>
              <td align="center">{item.id}</td>
            </tr>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Section;
