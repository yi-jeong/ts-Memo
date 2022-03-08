import React from "react";
import styled from "styled-components";
import { Memo } from "../Context/MemoContext";
 
type MemoItemProps = {
    memo:Memo;
}

const MemoItemStyle= styled.div`
    h2,p{
        margin:0;
    }
    position:relative;
    padding:1em;
    border-bottom:1px solid #eee;
`

function MemoItem({memo}:MemoItemProps){
    return(
        <>
            <MemoItemStyle>
                <h2>{memo.tit}</h2>
                <p>{memo.txt}</p>
            </MemoItemStyle>
        </>
    )
}

export default MemoItem;