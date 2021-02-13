import React from 'react';
import './Diaries.css';
import { useState } from 'react'; 
import Portal from './Portal';
const Diaries = () => {
    const m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [diaryHolder, setDiaryHolder] = useState(
        [{day:"13", month:"October", year:"2020", content:"Test1", id:"1"},
        {day:"27", month:"November", year:"2020", content:"Test2", id:"2"},
        {day:"18", month:"Decemeber", year:"2020", content:"Test3", id:"3"}
        ]
    );
    const [diary, setDiary] = useState({day:null, month:null, year:null, content:null, id:null});
    const [isOpen, setIsOpen] = useState(false);
    const [portalContent, setPortalContent] = useState(null);
    const handleChange = (e) => {
        const d = new Date();
        setDiary({day: d.getDay(), month: m[d.getMonth()], year: d.getFullYear(), content: e.target.value, id: diaryHolder.length + 1});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setDiaryHolder([...diaryHolder, diary]);
        document.getElementsByClassName('write-diary')[0].value= "";
    }
    const openPortal = (i) => {
        setIsOpen(true);
        setPortalContent(diaryHolder[i - 1].content)
    }
    return(
        <div className="home">
            <div className="w-text">Welcome To My Diary!</div>
            <div className="container dia-container" >
                {diaryHolder.map((holder) => (
                    <div className="diary-holder" key={holder.id} onClick={() => openPortal(holder.id)}>
                        <div>{holder.day}th</div>
                        <div> &nbsp;{holder.month}</div>
                        <div> &nbsp;{holder.year}</div>
                    </div>
                ))}
            </div>
            <div className= "container form-container">
                <form  onSubmit={handleSubmit}>
                    <textarea className="write-diary" onChange={handleChange} placeholder="Type today's diary..."></textarea>
                    <button className="sub-button" type="submit">Submit</button>
                </form>
            </div>
            <Portal>
                {isOpen && 
                    <div className='portal-background'>
                        <div className='portal-container'>
                            <i className='fa fa-times' onClick={() => setIsOpen(false)}></i>
                                <div className='portal-pics'>
                                    {portalContent}
                                </div>
                        </div>
                    </div>}
            </Portal>
            
        </div>
        
    );
    
}
export default Diaries;