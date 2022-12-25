import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import {studentUpdated} from '../Components/AppSlice'
function Editpage() {

  const {state}=useLocation()
  const editId=state;
  // console.log(editId)

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const data=useSelector((state)=>state.student.filter((item)=>{return item.id===editId }).map((item)=>item))
  const sname=(data[0].name);
  const sage=(data[0].age);
  const scourse=(data[0].course);
  const sbatch=(data[0].batch);

  const [name, setName] = useState(sname)
  const [age, setAge] = useState(sage)
  const [course, setCourse] = useState(scourse)
  const [batch, setBatch] = useState(sbatch)
 

  let Handlesubmit=(e)=>{
      e.preventDefault();
    if(name && age && course && batch ){
        dispatch(studentUpdated({
           id:editId, name,age, course,batch
        }))
        setName('');
        setAge('');
        setCourse('');
        setBatch('');
        navigate('/student')
    
    }
    
       }
      
  let HandleCancel=()=>{
    navigate('/Student')
  }
return (
  <>

  <form  onSubmit={Handlesubmit}>
        <input className='box1' type='text' value={name}   onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
        <input className='box2'  type='text' value={age}  onChange={(e)=>setAge(e.target.value)} placeholder='Enter your age' />
        <input className='box3'  type='text' value={batch}  onChange={(e)=>setBatch(e.target.value)}  placeholder='Enter your course' />
        <input className='box4'  type='text' value={course} onChange={(e)=>setCourse(e.target.value)} placeholder='Enter your batch' />
     <input className='btn btn-success form-btn1' type='submit' value='submit'/> 
  </form>
  <button className='btn btn-dark form-btn2' onClick={HandleCancel}>Cancel</button> 
  </>
)
}

export default Editpage

