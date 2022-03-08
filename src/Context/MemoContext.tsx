import React, { createContext, useReducer, useRef, Dispatch, useContext } from "react";

export type Memo = {
    id: number;
    tit: string;
    txt: string;
};

type MemoState = Memo[];
type simpleDispatch = Dispatch<Action>;

const initialMemo:MemoState = [
    {
        id: 1,
        tit: "강의 듣기",
        txt: "타임스크립트 1강"
    },
    {
        id: 2,
        tit: "강의",
        txt: "타임스크립트 2강"
    },
    {
        id: 3,
        tit: "강의 듣기",
        txt: "타임스크립트 3강"
    }
];

type Action = { type: "CREATE"; tit:string; txt: string; } | { type: "REMOVE"; id: number; };

function MemoReducer(state: MemoState, action: Action): MemoState{
    switch (action.type) {
        case "CREATE":
            const nextId= Math.max(...state.map(memo=>memo.id)) + 1 ;
            return state.concat({
                id: nextId,
                tit: action.tit,
                txt: action.txt,
            });
        case "REMOVE":
            return state.filter(memo=> memo.id !== action.id);
        default:
            throw new Error('Unhandled action');
    }
}

const MemoStateContext = createContext<MemoState | null>(null);
const MemoDispatchContext = createContext<simpleDispatch | null>(null);


export function MemoProvider({ children }: { children: React.ReactNode }){
    const [state, dispatch] = useReducer(MemoReducer,initialMemo);

    return(
        <MemoStateContext.Provider value={state}>
            <MemoDispatchContext.Provider value={dispatch}>
                {children}
            </MemoDispatchContext.Provider>
        </MemoStateContext.Provider>
    )
}

export function useMemoState(){
    const state = useContext(MemoStateContext);
    if (!state) throw new Error('MemosProvider not found');
    return state;
}

export function useMemoDispatch(){
    const dispatch = useContext(MemoDispatchContext);
    if (!dispatch) throw new Error('MemosProvider not found');
    return dispatch;
}

