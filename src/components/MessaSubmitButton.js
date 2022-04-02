import { IconButton } from "@material-ui/core";
import React from "react";
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../firebase'

const MessaSubmitButton=({name,setText,text})=>{
    
    return (
        <IconButton 
        disabled={text===''} 
        onClick={()=>{
            pushMessage({name:'なかさん',text})
            setText('')
        }}>
            <SendIcon />
        </IconButton>
    )
}

export default MessaSubmitButton;