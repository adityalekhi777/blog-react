import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import BlogList from './components/BlogList';

let demoBlogs = [
  {
    title: 'Blog One',
    id: 1727249122062,
    pic: 'https://plus.unsplash.com/premium_vector-1722152242334-bb43bb038e36?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This is the first blog',
  },
];

let objTemp = {
  title: '',
  pic: '',
  description: '',
};

function App() {
  const [blogs, setBlogs] = useState(demoBlogs);
  const [current, setCurrent] = useState(objTemp);
  const [index, setIndex] = useState(null);

  function setBlogsHandler(obj) {
    setBlogs((prev) => [...prev, obj]);
  }

  function editHandlerStart(obj, idx) {
    setIndex(idx);
    setCurrent(obj);
  }

  function editHandlerEnd(obj) {
    let currentBlogs = [...blogs];
    currentBlogs[index] = obj;
    console.log(currentBlogs);

    setBlogs(currentBlogs);
    setCurrent(objTemp);
  }

  function deleteHander(id) {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  }

  return (
    <div className='App'>
      <Form
        setBlogsHandler={setBlogsHandler}
        blogs={blogs}
        current={current}
        editHandlerEnd={editHandlerEnd}
      />
      <BlogList
        blogs={blogs}
        deleteHander={deleteHander}
        editHandlerStart={editHandlerStart}
      />
    </div>
  );
}

export default App;
