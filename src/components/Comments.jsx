import React from 'react'
import { COMMENT_LIST } from '../constants/commentslist'


const CommentList =({item})=>{
    const {name,replies,text} =item
   
  return(
    <>
    <div className='ml-16 p-1 flex flex-wrap bg-black text-white'>
    <img className="h-10 rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPL1zW3xWnLePHIci-FRr8YsFF0Kh99rq3q9F4F_GJHu-dCxb7E2ZKsEEOF7LcsPgynU&usqp=CAU" alt="profile-icon"/>
    <div className='m-1 p-1 font-bold'><h1>{name}</h1><p className='font-medium'>{text}</p></div>
    </div>
    <div className='ml-24  border-solid border-l-2'>{replies?.map((eachComment,index)=><CommentList key={index} item={eachComment}/>)}</div>
    </>
  )
}
export default function Comments() {
  return (
    <div>
      
      <h1 className='font-bold text-2xl ml-5 text-white'>Comments:</h1>
      {COMMENT_LIST?.map((commentItem,index)=><CommentList key={index} item={commentItem}/>)}
    </div>
  )
}

