import React,{useEffect} from 'react'
import './main.css'

import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'

import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Vagamon Pin Valley',
        location: 'Kerala',
        grade: 'CULTURAL RELAX',
        fees: '$2000',
        description: 'Located at a distance of 6km from Vagamon,Pine Valley is one of the amazing spot to see in Vagamon.The hillstation is perfect for adventure-seekers and nature lovers.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Kudremukha',
        location: 'Karnataka',
        grade: 'CULTURAL RELAX',
        fees: '$3000',
        description: 'Kudremukh National Park in the Western Ghats is a part of the worlds 38 "hottest hotspots" of biological diversity,a UNESCO World Heritage Site.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Chennakeshava Temple,Belur',
        location: 'Karnataka',
        grade: 'TEMPLE',
        fees: '$500',
        description: 'Chennakeshava Temple at Belur was complete and consecrated in 117CE.'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Gokarna',
        location: 'Karnataka',
        grade: 'Beach',
        fees: '$200',
        description: 'Gokarna is a small temple town located in the Uttara Kannada district of Karnataka state in southern India, It has a population of around 20,000. Shiva is the most worshipped deity in the town. Gokarnas main temple, Mahabaleshwara.'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Ankola',
        location: 'Karnataka',
        grade: 'Beach',
        fees: '$100',
        description: 'Ankola is a Town Municipal Council and a taluka in Uttara Kannada district of the Indian state of Karnataka. The name of the place is derived from a forest shrub Ankola grown on the coastal hill side and worshiped by the Halakki Vokkaligas as a totem.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Yellapur',
        location: 'Karnataka',
        grade: 'Forest',
        fees: '$700',
        description: 'Yellapura is a town in the Uttara Kannada district of Karnataka, India. Arecanut is the primary crop grown in the villages surrounding the town. Approximately 90% of the population of Yellapura are farmers who grow Arecanut and paddy.'
    },
]




const Main = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
          },[])

    return (
        <section className='main container section'>

            <div className="secTitle">
                <h3 ata-aos="fade-right" className="title">
                    Most visited Destination
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
           
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                                    </button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main
