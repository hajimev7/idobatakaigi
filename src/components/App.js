import React, {useState} from 'react';

import Main from './Main'
import SignIn from './SingnIn';
import config from '../config.json'


export default () => {
  const [name,setName] = useState('')

  if (config.signInEnabled && name===''){
    return <SignIn setName={setName} />;
  }else{
  return <Main name={name}/>
  }
};
