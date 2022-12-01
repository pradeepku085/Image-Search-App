import './App.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import AllImages from './components/AllImages';
import Button from './components/Button';
import Header from './components/Header';
import Nav from './components/Nav';
import SearchInput from './components/SearchInput';

function App() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=dUl3CEtw0GFYuP5FiYYa41DWBYuD_V8saWj1qOAONdU`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };

  const Submit = () => {
    fetchRequest();
    setImg("");
  };

  useEffect(() => {
    fetchRequest();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/bookmarks" element={<h1>Hello</h1>} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Nav />
                <SearchInput img={img} setImg={setImg} />
                <Button Submit={Submit} />
                <AllImages res={res} setRes={setRes} />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
