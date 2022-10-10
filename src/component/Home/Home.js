import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import './Home.css'

const Home = () => {
    const [players, setPlayers] = useState([])
    const [search, setSearch] = useState('')
    const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data.player))
    },[search])

    const removeCart = (id) =>{
        const removePlayer = cart.filter(plr => plr.idPlayer !== id)
        setCart(removePlayer)
        toast("So  sad!!!!!!")
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    } 
        return (
        <div className='home-container'>
            <div className='writ-div'>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                type="text" />
                <button>search</button>
                    <h2>players: {players.length}</h2>
                <div className='player-container'>
                    {
                        players.map(player => <Players key={player.idPlayer} player={player} cart={cart} setCart={setCart}></Players>)
                    }
                </div>
             </div>
           <div className='cart-container'>
            <h3>Choice Player List</h3>
           <div>
                {
                    cart.map(player => <Cart key={player.idPlayer} player={player} removeCart={removeCart}></Cart>)
                }
             </div>
           </div>
        </div>
    );
};

export default Home;