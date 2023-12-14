import Table from "./Table";
import Form from "./Form";
import React, { useState } from "react";
import { useEffect } from "react";
import { response } from "express";

function LinkContainer() {
  const [favLinks, setFavLinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/links")
      .then((response) => response.json())
      .then((data) => setFavLinks(data))
      .catch((error) => console.error("Fetching error:", error));
  }, []);

  const removeLink = (id) => {
    const updatedLinks = favLinks.filter((link) => link.id !== id);
    setFavLinks(updatedLinks);

    fetch(`http://localhost:3000/api/links/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log("Deleted link:", data))
      .catch((error) => console.error("Deletion error", error));
  };

  const handleSubmit = (favLink) => {
    fetch("http://localhost:3000/api/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favLink),
    })
      .then((response) => response.json())
      .then((data) => setFavLinks([...favLinks, data]))
      .catch((error) => console.error("Error when adding link:", error));
  };

  return (
    <div>
      <h1>My Favorite Links</h1>
      <p>Add a new link with a name and URL to the table! </p>
      <Table linkData={favLinks} removeLink={removeLink} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}
export default LinkContainer;
