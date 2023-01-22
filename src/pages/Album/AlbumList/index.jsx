import React from 'react'
import {Images} from './data.js'
import AlbumPlate from './AlbumPlate'
import { useParams } from 'react-router-dom'
const Index = () => {

  let {name} = useParams();
  console.log(name);
  let newAlbum = Images.filter(album => album.name === name);

  return (
    <div className='mx-auto gap-3 w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {newAlbum.map((card,i) => (
            <AlbumPlate
                key={card.id}
                photo= {card.photo}
            />
        ))}
    </div>
  )
}

export default Index
