import React,{useState} from 'react';
import Banner from '..'

const Demo = () => {
    const [isShown,setIsShown] = useState(true)

    return (
        <div>
            <Banner 
            showDismiss={true}
            buttonText='Learn more'
            text='Big news! we are excited to annonce a brand new product'
            onCloseComplete={()=>setIsShown}
            isShown={isShown}/>
        </div>
    );
};

export default Demo;