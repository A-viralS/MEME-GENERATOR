import React from 'react';
import memesData from './memesData';
export default function Meme() {
    const [meme, setmeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemesData, setAllMemesData] = React.useState(memesData)
    //I dont know why the fuck we wrote the above line without that, using the memeData the code will work as desired

    function getmeme() {
        const memesArray = allMemesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setmeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }
    function handleChange(event) {

        const { name, value } = event.target
        setmeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div className='form'>
                <input
                    className='form--input'
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />



                <input
                    className='form--input'
                    type="text"
                    placeholder='Bottom text'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />


                <button
                    className='form--button'
                    onClick={getmeme}>
                    Get a new meme image 🖼</button>

            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}