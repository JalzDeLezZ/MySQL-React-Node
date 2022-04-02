import React, { Fragment , useRef, useState} from 'react'

const App = () => {
  const fileinput = useRef()
  const [file, setFile] = useState(null)

  const selectHandler = (e) => { const {files} = e.target;
    setFile(files[0])
  }

  const sendHandler = () => {
    if(!file){
      alert('Please select a file')
      return
    }
    const formData = new FormData()
    formData.append('image', file)

    fetch('http://localhost:9000/images/post', {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
      
      fileinput.current.value = '';
      
      setFile(null);
    }
  return (<Fragment>

    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <a href='#!' className='navbar-brand'>Image App</a>
      </div>
    </nav>

    <div className='container mt-5'>
      <div className='card p-3'>
        <div className='row'>
          <div className='col-10'>
            <input
              ref={fileinput}
              className='form-control' 
              type="file"
              onChange={selectHandler}
            />
          </div>
          <div className='col-2'>
            <button  
              className='btn btn-primary btn-block mt-2' 
              type='button'
              onClick={sendHandler}
            >Upload</button>
          </div>
        </div>
      </div>
    </div>

  </Fragment>)
}

export default App