import React from 'react';
import './Players.css'

const Players = ({player, cart, setCart}) => {
    const {idPlayer, strCutout, strPlayer, strNationality, strDescriptionEN } = player

    const handleAddToCart = () =>{
        const details = {idPlayer, strCutout, strPlayer, strNationality, strDescriptionEN }
        setCart([...cart, details])
    }

    const handleBookmark = () =>{
        const details = {idPlayer, strCutout, strPlayer, strNationality, strDescriptionEN, quantity: 1 }
        const getPlayer = localStorage.getItem("bookmark");
        const parsPlayer = JSON.parse(getPlayer);
        if(parsPlayer){

           const isExist = parsPlayer.find(p => p.idPlayer === idPlayer);

            if(isExist){
                const updateQuantity = parseFloat(isExist.quantity);
                const setQuantity = updateQuantity + 1;
                isExist.quantity = setQuantity;
                localStorage.setItem("bookmark", JSON.stringify(parsPlayer))
            }
            else{
                 localStorage.setItem("bookmark", JSON.stringify([...parsPlayer, details]))
            }
        }
        else{
            localStorage.setItem("bookmark", JSON.stringify([details]))
        }
    }

    return (
        <div className='player' data-aos="zoom-in">
            <img src={strCutout || "https://www.thesportsdb.com/images/media/player/cutout/52sy491577454781.png"}></img>
            <h4>{strPlayer}</h4>
            <p>{strNationality}</p>
        <p>{strDescriptionEN ? strDescriptionEN.slice(0, 60) : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis voluptatibus numquam. Delectus nostrum aspernatur rem ad ullam animi laboriosam.'}</p>
        <button><small> Details </small></button>
        <button onClick={handleAddToCart}><small> Add to Cart </small></button>
        <button onClick={() => handleBookmark(idPlayer)}><small> Bookmark </small></button>
       
        </div>
    );
};

export default Players;