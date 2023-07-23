import * as React from 'react';
import Header from '../header'
import MainPage from '../mainPage'
import Cookies from 'js-cookie';
import { AuthDataContext } from '../../context/userContext';

export default function Main() {
    const [isCookiePresent, setIsCookiePresent] = React.useState<boolean>(false);
    const { isAuth } = React.useContext(AuthDataContext);
    React.useEffect(()=> {
        const token = Cookies.get('token')
        setIsCookiePresent(!!token);
    }, [])
    
    const blocks = isAuth || isCookiePresent ? (
        <>
            <Header />
            <MainPage />
        </>
        ) : (
            <Header />
        );

    return (
        <>
            {blocks}
        </>
    )
}
