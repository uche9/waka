import React, { useEffect } from 'react'
import countryData from './countryData'
import MyDate from './MyDate'
import Cities from './Cities'
import Nav from './Navigator'


export default function Display(props){
    const {currentCountry,desiredCountry}=props.country ;

    //Set up autoplay
   
    useEffect(()=>{
        setTimeout(()=>{
            document.getElementById('audio--player').autoplay=true
        },1000)  
    },[])
   
    

    //Generate List of Countries
    let  countryList=countryData.map(el=>{
        return el.country
    })

    //Generate array index of current and desired countries
    const x=countryList.indexOf(currentCountry)
    const y=countryList.indexOf(desiredCountry)

   //Generate GMT difference between your current country and desired country
   var GMTdiff= Number((countryData[y].GMT))-Number((countryData[x].GMT))

    return(
         <div>
               <div className='select--container'>
                        <div className='current--container'>
                                <img className='flag'  src={require(`../data/${currentCountry}/flag.png`)} alt='pics here' />
                                <div>You are in <b>{currentCountry}</b> </div> 
                                <div>
                                Date and time in <b>{currentCountry}</b>  is <MyDate GMTdiff={0} />
                                </div>   
                                <br />
                                <br />
                        </div>
                        <div className='desired--container'>
                                <img className='flag'  src={require(`../data/${desiredCountry}/flag.png`)} alt='pics here' />
                                <div>You want to visit <b>{desiredCountry}</b>? </div>
                                
                                <div> Date and time in <b>{desiredCountry}</b> is 
                                    <MyDate GMTdiff={GMTdiff} />    
                                </div>
                        </div>
               </div>
               
                             <div className='tour--container'>
                                <Nav />
                                <div className='flag--anthem'>
                                Welcome to <b> {desiredCountry} </b>
                                    <img className='map--flag'  src={require(`../data/${desiredCountry}/mapflag.png`)} alt='pics here' />
                                    <div>You are listening to <b>{desiredCountry}</b>'s national anthem</div>
                                    <audio id='audio--player' className='audio--player'src={require(`../data/${desiredCountry}/anthem.mp3`)}  type='audio/mp3'   loop autoplay />
                               </div>
                               <div className='tour-portal'>
                                    
                                     <div> <Cities desiredCountry={desiredCountry} /> </div>
                               </div>
                               

                      </div>
                            

        </div>
    )
}