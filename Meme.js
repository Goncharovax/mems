import React from 'react'
import memesData from './memesData'


export default function Meme() {

    const [meme, setMeme] = React.useState({
        
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


  return (
    <main>

       <button  className="buton" onClick={getMemeImage}> Get a new meme image</button>
       <img src={meme.randomImage} className="meme--image" />
       

    </main>
  )
}
