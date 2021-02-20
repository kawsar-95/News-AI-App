import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles';

const alanKey ='d4b5b5994254363fc04393f175b251bc2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

    const [newsArticles, setNewsArticles] = useState([])

    const classes = useStyles();
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand:({command,articles}) => {
                if (command === 'newHeadLines'){
                    // alert('This Code was executed successfully')
                    // console.log(articles);
                    setNewsArticles(articles);
                }
            }
        })
    }, [])


    return (
        <div>
            <div classname={classes.logoContainer}>
            <img src="https://alan.app/voice/images/previews/preview.jpg" classname={classes.alanLogo} alt="alan logo"/>

        </div>
        <NewsCards articles={newsArticles}  />
        </div>
    )
}

export default App
