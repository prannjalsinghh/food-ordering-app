import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import { useEffect } from 'react';

const Header = (props) => {
  useEffect(()=>{
    instaShower();
},[])
  async function instaShower(){
    const response = await fetch("https://i.instagram.com/api/v1/users/web_profile_info/?username=shakuntalapoddar_ngo", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-gpc": "1",
        "x-asbd-id": "198387",
        "x-csrftoken": "meklZtI4sXxHbB9YMakXUyVgGFYDAQX2",
        "x-ig-app-id": "936619743392459",
        "x-ig-www-claim": "hmac.AR1zjL3YCFewuSyuG0ZCz3y2suqO4JIux-_EX_ZYJXu7CyIv"
    },
    "referrer": "https://www.instagram.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "no-cors",
    "credentials": "include"
    });

    const data = await response.json();
    // let config={
    //     "headers": {
    //     "accept": "*/*",
    //     "accept-language": "en-US,en;q=0.9",
    //     "cache-control": "no-cache",
    //     "pragma": "no-cache",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-site",
    //     "sec-gpc": "1",
    //     "x-asbd-id": "198387",
    //     "x-csrftoken": "meklZtI4sXxHbB9YMakXUyVgGFYDAQX2",
    //     "x-ig-app-id": "936619743392459",
    //     "x-ig-www-claim": "hmac.AR1zjL3YCFewuSyuG0ZCz3y2suqO4JIux-_EX_ZYJXu7CyIv"
    // },
    // "referrer": "https://www.instagram.com/",
    // "referrerPolicy": "strict-origin-when-cross-origin",
    // "body": null,
    // "method": "GET",
    // "mode": "no-cors",
    // "credentials": "include"
    
    // }
    // const response = await axios.get("https://i.instagram.com/api/v1/users/web_profile_info/?username=shakuntalapoddar_ngo",config);
    // const data= await response.json();
    console.log(data);
}

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;