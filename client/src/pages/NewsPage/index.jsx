import React , { useState , useEffect} from 'react'
import Navbar from "../../components/common/Navbar"
import Footer from '../../components/common/Footer'
import { useParams } from 'react-router-dom'
import { AiOutlineCalendar,AiFillEye } from "react-icons/ai"
import parse from 'html-react-parser';


const Index = () => {

    const { _id } = useParams();
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        fetch('http://backend.msitalumni.com/getAllNews')
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok.');
          })
          .then(data => {
            if(data.news.length>0){
             setNewsList(data.news.filter((news) => news._id == _id));
          }
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      }, []);

      function display(news)
      {
        return <div>
            <Navbar/>
            <div className='h-36'></div>
            <div className='w-full h-48 md:h-96 flex pl-[12%]'>
                <img className='w-48 h-48 md:w-96 md:h-96 object-cover border-8 border-white shadow-lg' src={news.image} alt="" />
                <div className=' bg-[#3F72AF] w-full my-24 pr-[10%] py-8 pl-[5%] text-white'>
                    <h1 className='text-2xl font-bold leading-relaxed tracking-wide'>{news.title}</h1>      
                    <div className='flex justify-between mt-6'>
                        <div className='flex text-lg'>
                            <AiOutlineCalendar className='mt-[3px] text-2xl'/>
                            <h1 className='ml-4'>{news.date}</h1>
                        </div>
                        <div className='flex text-lg'>
                            <AiFillEye className='mt-[3px] text-2xl'/>
                            <h1 className='ml-4'>4041</h1>
                        </div>
                    </div>              
                </div>
            </div>
            <div className=' text-lg my-12 mx-[12%] bg-[#F9F7F7] shadow-xl p-12 leading-8'>
            {parse(news.desc)}
                
            </div>
        <Footer/>
        </div>
      }

  return (
    <div className='font-defaultFont'>
        {
            newsList.map((news)=>(
            display(news)
            ))
        }
    </div>
  )
}

export default Index
