import React, { useEffect, useState } from "react";
import axios from "axios";
import "./assets/styles/main.scss";

const App = () => {
  const [imageSearch, setImageSearch] = useState({});
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=oM1Eg1dakdnN1TCijwtKrNA4PJNQLTuW&q=${inputSearch}&limit=8&offset=0&rating=G&lang=en`;
    const imageData = async () => {
      const result = await axios(API_URL);
      setImageSearch(result.data.data);
    };
    imageData();
  }, [inputSearch]);

  if (imageSearch.length === undefined) return null;

  console.log(imageSearch);

  const handleChange = event => {
    setInputSearch(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <span>Galleryeasy</span>
      </header>
      <section>
        <div className="form-field">
          <div className="form-field__control">
            <input
              id="exampleField"
              type="text"
              className="form-field__input"
              placeholder="Search"
              onChange={e => handleChange(e)}
            />
          </div>
        </div>
        <div className="col-12 d-flex row text-center">
          {imageSearch.map(item => (
            <div className="col-4 col-sm-3" key={item.id}>
              <img
                className="img-default"
                src={item.images.preview_webp.url}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
