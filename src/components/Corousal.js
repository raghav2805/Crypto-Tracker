import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {CryptoState} from "../ContextApi";
import {TrendingCoins} from "../config/api";
import AliceCarousel from 'react-alice-carousel';
import {Link} from "react-router-dom";


const useStyle = makeStyles(() =>({
    corousal:{
        height:'50%',
        display:"flex",
        alignItems:"center",
    },
    carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
    },
}));

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Corousal = () => {
    const [trending, setTrending] = useState([]);
    const { currency, symbol } = CryptoState();

    const classes = useStyle();

    const fetchTrendingPoint = async () =>{
        const { data } = await axios.get(TrendingCoins(currency));

        console.log(data);
        setTrending(data);
    }

    const responsive = {
        0:{
            items: 2
        },
        524:{
            items: 3
        },
        1024:{
            items: 5
        }
    }

    const items = trending.map((coin) => {
        let profit = coin?.price_change_percentage_24h >= 0;

        return (
            <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
                <img
                    src={coin?.image}
                    alt={coin.name}
                    height="80"
                    style={{ marginBottom: 10 }}
                />
                <span>
                    {coin?.symbol}
                    &nbsp;
                    <span
                        style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                        }}
                    >
                        {profit && "+"}
                        {coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                </span>
                <span style={{ fontSize: 22, fontWeight: 500 }}>
                    {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
                </span>
            </Link>
        );
    });

    useEffect(() => {
        fetchTrendingPoint();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);


  return (
    <div className={classes.corousal}>
        <AliceCarousel 
              mouseTracking
              infinite
              autoPlayInterval={1000}
              animationDuration={1500}
              disableDotsControls
              disableButtonsControls
              responsive={responsive}
              items={items}
              autoPlay
          />
    </div>
  )
}

export default Corousal

// import { makeStyles } from "@material-ui/core";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import { Link } from "react-router-dom";
// import { TrendingCoins } from "../config/api";
// import { CryptoState } from "../ContextApi";
// // import { numberWithCommas } from "../CoinsTable";

// const useStyles = makeStyles(() => ({
//     carousel: {
//         height: "50%",
//         display: "flex",
//         alignItems: "center",
//         backgroundColor: "pink",
//     },
    // carouselItem: {
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     cursor: "pointer",
    //     textTransform: "uppercase",
    //     color: "white",
    // },
// }));

// const Carousel = () => {
//     const [trending, setTrending] = useState([]);
//     const { currency, symbol } = CryptoState();

//     const fetchTrendingCoins = async () => {
//         const { data } = await axios.get(TrendingCoins(currency));

//         console.log(data);
//         setTrending(data);
//     };

//     useEffect(() => {
//         fetchTrendingCoins();
//     }, [currency]);

//     const classes = useStyles();

//     const responsive = {
//         0: {
//             items: 2,
//         },
//         512: {
//             items: 4,
//         },
//     };
//     const items = trending.map((coin) => {
//         let profit = coin?.price_change_percentage_24h >= 0;
//         console.log(coin);

//         return (
//             <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
//                 <img
//                     src={coin?.image}
//                     alt={coin.name}
//                     height="80"
//                     style={{ marginBottom: 10 }}
//                 />
//                 <span>
//                     {coin?.symbol}
//                     &nbsp;
//                     <span
//                         style={{
//                             color: profit > 0 ? "rgb(14, 203, 129)" : "red",
//                             fontWeight: 500,
//                         }}
//                     >
//                         {profit && "+"}
//                         {coin?.price_change_percentage_24h?.toFixed(2)}%
//                     </span>
//                 </span>
//                 {/* <span style={{ fontSize: 22, fontWeight: 500 }}>
//                     {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
//                 </span> */}
//             </Link>
//         );
//     });

//     // const profit = (coin) => coin?.price_change_percentage_24h >= 0;

//     return (
//         <div className={classes.carousel}>
//             <AliceCarousel
                // mouseTracking
                // infinite
                // autoPlayInterval={1000}
                // animationDuration={1500}
                // disableDotsControls
                // disableButtonsControls
                // responsive={responsive}
                // items={items}
                // autoPlay
//             />

//         </div >
//     );
// };

// export default Carousel;
