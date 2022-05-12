import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';


function SearchBar({placeholder,data}) {

    const [filteredData,setfilteredData] = useState([])
    const [TheImage,setTheImage] = useState ("")

    const handleFilter = (event) =>{
       const searchWord= event.target.value;
       //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
       const newfilter = data.filter((value) =>{
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
       })
       if(searchWord === ""){
           setfilteredData([])
       }
       else{
           setfilteredData(newfilter)
       }
    }

    // const Click = (value) =>{

    //     console.log(value.target.__reactProps$wg5tn1g32uc.children)
    // }

  return (

    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} onChange={handleFilter}></input>
            <button  className="searchIcon"><SearchIcon/></button>
        </div>
        { filteredData.length >0 ?(
            <div className="dataResult">
                {filteredData.map((value,key)=>{
                    return <p className="Selectdata" >{value.name}</p>;
                })}
            </div>
        ):(
            <div>
            </div>
        )}
        
    </div>
  )
}

export default SearchBar