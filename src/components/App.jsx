import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // const [Title, setTitle] = useState([]);
  const [Item, setItem] = useState([
    {
      Title: "",
      Content: "",
      Time: ""
    }
  ]);
  // const [Content, setContent] = useState([]);

  function handleClick(inputTitle, inputContent, inputTime) {
    setItem((preValue) => {
      return [
        ...preValue,
        { Title: inputTitle, Content: inputContent, Time: inputTime }
      ];
    });
  }
  // console.log(Item);

  function deleteItem(id) {
    setItem((preItem) => {
      return preItem.filter((values, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addContent={handleClick} />
      {Item.map((values, index) => {
        return index ? (
          <Note
            time={values.Time}
            onCheck={deleteItem}
            key={index}
            id={index}
            title={values.Title}
            content={values.Content}
          />
        ) : null;
      })}

      <Footer />
    </div>
  );
}

export default App;
