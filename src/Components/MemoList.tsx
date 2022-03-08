import React from "react";
import styled from "styled-components";
import { useMemoState } from "../Context/MemoContext";
import CreateMemo from "./CreateMemo";
import MemoItem from "./MemoItem";

const MemolistWrap = styled.div`
position:absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
width:90%;
height:70vh;
background:#fff;
border:1px solid #eee;
border-radius:10px;
`

const MemolistStyle = styled.div`
    height:100%;
    overflow-y:scroll;
`
function MemoList(){
    const memos = useMemoState();
    
    return(
        <MemolistWrap>
            <MemolistStyle>
                { memos.map( memo => (
                    <MemoItem memo={memo} key={memo.id}/>
                ))}
            </MemolistStyle>        
            <CreateMemo />
        </MemolistWrap>
    )
}

export default MemoList;