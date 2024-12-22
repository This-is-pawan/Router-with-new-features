import React, { useRef, useState } from "react";

const FormDataApi = () => {
  // eslint-disable-next-line no-unused-vars
  const [value,setvalue]=useState(0)
  const refContainer=useRef(null)
  console.log(refContainer);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
   const name=refContainer.current.value
   console.log(name);
   
  }

  return (
    <>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
             ref={refContainer}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormDataApi;
