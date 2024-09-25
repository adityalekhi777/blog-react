import React, { useEffect, useState } from 'react';
import styles from './Form.module.css';

export default function Form({blogs,current,setBlogsHandler,editHandlerEnd}) {
  const [formData, setFormData] = useState({
    title: '',
    pic: '',
    description: '',
  });

  useEffect(() => {
    setFormData(current)
  },[current])

  function submitHandler() {
    formData.id = Date.now();
    setBlogsHandler(formData);

    setFormData({
      title: '',
      pic: '',
      description: '',
    });
  }

  function inputChangeHandler(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function helper(e) {
    e.preventDefault();

    if ('id' in formData) {
      editHandlerEnd(formData);
    } else {
      submitHandler();
    }
  }

  return (
    <>
      <div className={styles.header}>
        <h1>Your Blogs</h1>
        <h2>Total Blogs : {blogs.length}</h2>
      </div>
      <div className={styles.form}>
        <form onSubmit={helper}>
          <label>
            Title:
            <input
              type='text'
              name='title'
              onChange={inputChangeHandler}
              required
              value={formData.title}
            />
          </label>
          <label>
            Image Url:
            <input
              type='text'
              name='pic'
              onChange={inputChangeHandler}
              required
              value={formData.pic}
            />
          </label>
          <label>
            Description:
            <input
              type='text'
              name='description'
              onChange={inputChangeHandler}
              required
              value={formData.description}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
