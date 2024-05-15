import React, { useState, useEffect } from "react";

function EmployeeTable() {
  const [items, setItems] = useState(null);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    if (btn) {
      fetch("http://localhost:8080/my-app/admin/dummy")
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((data) => {
          setItems(data);
        })
        .catch((err) => console.error(err));
    }
  }, [btn]);
  return (
    <div>
      <button
        onClick={() => {
          setBtn(!btn);
        }}
      >
        Get Table
      </button>
      {btn && (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Permalink</th>
              <th>Crunchbase Url</th>
              <th>Homepage Url</th>
              <th>Blog Url</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.permalink}</td>
                    <td>{item.crunchbase_url}</td>
                    <td>{item.homepage_url}</td>
                    <td>{item.blog_url}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeTable;
