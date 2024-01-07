import React from 'react'

function Pagination({productPerPage, paginate, activePage, totalProduct}) {
  const pageNumber = [];
  for(let i = 1; i<= Math.ceil(totalProduct / productPerPage); i++){
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className='flex items-center justify-center space-x-3'>
        <li>
          <a onClick={()=> {
            if(activePage < pageNumber.length){
              paginate(activePage - 1);
            }
          }} href="#">Preview</a>
        </li>
        {
          pageNumber.map((number)=><li key={number} className={`py-3 px-5 rounded-full ${number === activePage ? "text-purple bg-yellow":""}`}>
            <a href='#' onClick={()=> paginate(number)}>{number}</a>
          </li>)
        }
        <li>
          <a onClick={()=> {
            if(activePage < pageNumber.length){
              paginate(activePage + 1);
            }
          }} href="#">Next</a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination