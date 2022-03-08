import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useMemoDispatch } from "../Context/MemoContext";

const CreateMemoBtnStyle = styled.button<{open: boolean}>`
    position:absolute;
    bottom:0;
    left:50%;
    transform: translate(-50%,50%);
    width:50px;
    height:50px;
    background:#067acc;
    border:0;
    color:#fff;
    font-size:3em;
    border-radius:50px;
    line-height:5px;

    transition: 0.125s all ease-in;

    ${props => props.open && 
        css`
        background: #ccc;
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
`

const InsertForm = styled.form`
    background:#f8f8f8;
    padding: 2em 2em 4.5em 2em;
`

const Input = styled.input`
    padding: 0.5em;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 1.1em;
    box-sizing: border-box;
`

const ButtonStyle = styled.button`
    margin-top:0.5em;
    padding:1em 0;
    border:0;
    border-radius:2em;
    width:100%;
    outline: none;
    background:#067acc;
    color:#fff;
`

function CreateMemo(){

    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState({
        tit:'',
        txt:''
    });
    const { tit,txt } = inputs;

    console.log(inputs);

    const dispatch = useMemoDispatch();

    const onToggle = () => setOpen(!open);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    } 
    const onSubmit = (e :React.FormEvent) =>{
        console.log("test");
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            tit: inputs.tit,
            txt: inputs.txt
        });
        setInputs({
            tit:'',
            txt:''
        });
        setOpen(false);
    }
    return(
        <>
        { open && (
            <InsertFormPositioner>
                <InsertForm onSubmit={onSubmit}>
                <Input name="tit" value={tit} onChange={onChange} placeholder="제목을 입력하세요."/>
                <Input name="txt" value={txt} onChange={onChange} placeholder="내용을 입력하세요."/>
                <ButtonStyle>등록</ButtonStyle>
                </InsertForm>
            </InsertFormPositioner>
        )}
            <CreateMemoBtnStyle onClick={onToggle} open={open}>+</CreateMemoBtnStyle>
        </>
    )
}

export default CreateMemo;