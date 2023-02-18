import React from 'react'
import AlbumHead from './AlbumHead'
import AlbumList from './AlbumList'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import {useParams} from 'react-router-dom'
import {Albums} from '../../config/albums.js'

const Index = () => {
  
  let {name} = useParams();
  let newHead = Albums.filter(album => album.name === name);

  return (
    <div>
      <Navbar />
        <div className='h-24'></div>
      <AlbumHead
        key = {newHead[0].id} 
        title= {newHead[0].title}
        desc = {newHead[0].desc}
      />
      <AlbumList />
      <Footer />
    </div>
  )
}

export default Index
