import React from "react";
import { Input } from "antd";

function SearchInput({ departure, setDeparture, destination, setDestination }) {
  return (
    <div className="container">
      <Input
        size="small"
        placeholder="經度,緯度"
        prefix={<h3>出發地</h3>}
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
      />
      <br />
      <br />
      <Input
        size="small"
        placeholder="經度,緯度"
        prefix={<h3>目的地</h3>}
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <style jsx>{`
        .container {
          position: absolute;
          left: 30px;
          top: 30px;
          width: 300px;
          height: auto;
          z-index: 1;
        }

        h3 {
          margin: 5px 10px 5px 5px;
        }
      `}</style>
    </div>
  );
}

export default SearchInput;
