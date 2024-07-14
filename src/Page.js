import React, { useEffect, useState } from 'react';
import { add, remove, update, setSelected } from "./slice";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const { BioData, selectedData } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleUpdate = (item) => {
    console.log("Update", item);
    dispatch(setSelected(item));
    setIsEditMode(true);
  };

  const handleDelete = (item) => {
    console.log("Delete", item.id);
    dispatch(remove(item));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      dispatch(update({ id, name, email }));
      setIsEditMode(false);
    } else {
      dispatch(add({ name, email }));
    }
    setName('');
    setEmail('');
  };

  useEffect(() => {
    if (Object.keys(selectedData).length !== 0) {
      setName(selectedData.name);
      setEmail(selectedData.email);
      setId(selectedData.id);
    }
  }, [selectedData]);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditMode ? 'Update' : 'Submit'}
        </button>
      </form>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {BioData && BioData.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button type="button" onClick={() => handleUpdate(item)} className="btn btn-primary">Edit</button>
                    <button type="button" onClick={() => handleDelete(item)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
