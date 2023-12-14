import React from 'react'
import AlbumCard from './AlbumCard'
import {Albums} from '../../../config/albums.js'

const createAlbumCard = (Album) =>
{
    return(
    <AlbumCard 
        key = {Album.id}
        title = {Album.title}
        desc = {Album.desc}
        name = {Album.name}
        image = {Album.image}
    />)
}

const index = () => {
  return (
    <div>
        <section id="album" className="py-8 lg:w-[80%] md:w-[90%] w-[95%] mx-auto text-[Merriweather]">
        <div className="w-[auto] ">
            <div className="album ">

                <div className="heading justify-between  p-4">
                    <div className="font-semibold tracking-wider  font-[MerriWeather]  text-[#064663] text-3xl text-center pt-3 ">
                        Albums
                    </div>
                    <div className="h-[2px] w-24 bg-[#064663] mx-auto mt-3"></div>
                </div>

                <div className=" rounded-[10px] p-4 h-58">
                    <div className=" flex wrap justify-around grid gap-x-5 gap-y-5 grid-cols-2 sm:grid-cols-5 pt-6">

                    {Albums.map(createAlbumCard)}

                    </div>
                </div>
                <div className="text-center">
                    <h2
                        className="font-semibold pt-8 pl-4 dark:text-white font-defaultFont text-xl md:leading-7 lg:leading-9 leading-9 text-[#064663] md:w-full  mx-auto">
                      
                        <div className="h-4 bg-[#f8fafc] w-[100%]"></div>
                    </h2>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default index
