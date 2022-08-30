import React, { useState } from "react";

function CreateArea(prop) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    var name = event.target.name;
    var text = event.target.value;

    if (name === "title") {
      setInputText((preValue) => {
        return { ...preValue, title: text };
      });
    } else if (name === "content") {
      setInputText((preValue) => {
        return { ...preValue, content: text };
      });
    }
  }
  // console.log(inputText.title);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          value={inputText.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={inputText.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            var date = new Date();
            var currentTime = date.toLocaleTimeString();

            (inputText.title || inputText.content) &&
              prop.addContent(
                inputText.title ? inputText.title : "New Note",
                inputText.content,
                currentTime
              );
            // inputText.title && inputText.content  &&
            setInputText({ title: "", content: "", time: "" });
            !inputText.title &&
              !inputText.content &&
              alert("Please add Title and note...");
          }}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
