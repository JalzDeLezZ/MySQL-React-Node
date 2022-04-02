import React, { Fragment , useEffect, useRef, useState} from 'react'

const App = () => {
  
  
  const fileinput = useRef()
  
  const [file, setFile] = useState(null)
  const [imageList, setImageList] = useState([]);
  const [listUpdate, setListUpdate] = useState(false);
  
  useEffect(() => {
    fetch('http://localhost:9000/images/get')
      .then(res => res.json())
      .then(res => setImageList(res))
      .catch(err => console.log(err));
      setListUpdate(false); 
  }, [listUpdate])

  const selectHandler = (e) => { 
    const {files} = e.target;
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
    }).then(res => res.text())
      .then(res => {
        console.log(res)
        setListUpdate(true)
      })
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

    <div className='container mt-3' style={{display: "flex", flexWrap: "wrap"}}>
      {imageList.map(pI => (
        <div className='card m-2' key={pI}>
          <img 
            src={"http://localhost:9000/"+pI} 
            alt='...' 
            className='card-img-top' 
            style={{height: "200px", width: "300px"}}
          />
        </div>
      ))}

    </div>

  </Fragment>)
}

export default App