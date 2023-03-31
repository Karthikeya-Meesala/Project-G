import React, { useState } from 'react';

function Hero() {
  const [url, setUrl] = useState('');
  const [formUrl, setFormUrl] = useState('');
  const [formId, setFormId] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    setFormUrl(url);
    console.log(formUrl);
    setFormId(url.match(/\/e\/(.+)\/viewform/)[1]);
    console.log(formId);

  }

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  }

  return (
    <div className="m-12 p-32 grid grid-row-2 gap-16 text-center">
      <h1 className="text-6xl font-medium text-slate-800"> Let us do the magic for you.</h1>
      <form onSubmit={handleSubmit}>
          <input placeholder='paste your google form url'  className='w-2/4 h-12 font-thin border-2 border-gray-800 bor rounded-md text-lg text-center' type="text" value={url} onChange={handleInputChange} />
        <button className="w-32 h-12 bg-zinc-900 text-zinc-50 border text-lg rounded-lg hover:scale-105 ease-in-out transition" type="submit">do the magic.</button>
      </form>
      <p>Form Id is {formId}</p>
    </div>
  );
  }

export default Hero;
