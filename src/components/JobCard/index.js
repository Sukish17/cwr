import './index.css'

//import Slider from "react-slick";
import { GiModernCity } from "react-icons/gi"
import { FcGlobe } from "react-icons/fc";
import { FaPeopleRoof } from "react-icons/fa6";
import { FcClock } from "react-icons/fc"
import { GiVillage } from "react-icons/gi"
import { FcAddressBook } from "react-icons/fc"
import { SiAsciidoctor } from "react-icons/si"
import { GrUserAdmin } from "react-icons/gr"
import { FcHome } from "react-icons/fc"
import { BsCalendar2Date } from "react-icons/bs"
import { FaLandmarkFlag } from "react-icons/fa6"
const JobCard = props => {
    const{wData} = props
    const {name
        ,population,timezone,couNameEn,asciiName,admin1Code,admin2Code,admin3Code,
        admin4Code,featureClass,featureCode,labelEn,dem,elevation,modificationDate
    } =wData

    return (
        
       
          <li className="bg1">
           
                <div className='bs1'>
                <GiModernCity className='img1'/>
                <p><span className='poa'>CityName: </span>
                    {name} 
                     </p>
                </div>
                <div className='bs1'>
                <FcGlobe className='img1'/>
                <p> <span className='poa'>CountryName: </span>{couNameEn}</p>
                </div>
            

            
                <div className='bs1'>
                 <FaPeopleRoof className='img2'/>
                <p> <span className='poa'>population: </span>{population}</p>
                </div>
                <div className='bs1'>
                    <FcClock className='img2'/>
                <p> <span className='poa'>timezone: </span>{timezone}</p>
                </div>
                
         

           
                <div className='bs1'>
                <GiVillage className='img9'/>
                <p> <span className='poa'>featureClass: </span>{featureClass}</p>
                </div>
                <div className='bs1'>
                <FcAddressBook className="img1"/>
                <p> <span className='poa'>featureCode: </span>{featureCode}</p>
                </div>
                <div className='bs1'>
                    <SiAsciidoctor className='img2'/>
                <p> <span className='poa'>asciiName: </span>{asciiName}</p>
                </div>
          
        
            <div className='bs1'>
            <img src='https://icon-library.com/images/admin-icon-png/admin-icon-png-6.jpg' alt='1' className='img1'/>
            <p> <span className='poa'>admin1Code: </span>{admin1Code}</p>
            </div>
            <div className='bs1'>
                <GrUserAdmin className='img2'/>
            <p> <span className='poa'>admin2Code: </span>{admin2Code}</p>
            </div>
            <div className='bs1'>
            <img src='https://www.shareicon.net/data/256x256/2016/04/14/492851_admin_256x256.png' alt='1' className='img1'/>
            <p> <span className='poa'>admin3Code: </span>{admin3Code}</p>
            </div>
            
     

      
            <div className='bs1'>
                <GrUserAdmin className='img9'/>
            <p> <span className='poa'>admin4Code: </span>{admin4Code}</p>
            </div> 
            <div className='bs1'>
                <FcHome className='img1'/>
            <p><span className='poa'>elevation: </span>{elevation}</p>
            </div>
            <div className='bs1'>
            <img src='https://purepng.com/public/uploads/large/globe-3no.png' alt='1' className='img1'/>
            <p><span className='poa'>dem: </span>{dem}</p>
            </div>
      

            <div className='bs1'>
                <BsCalendar2Date className='img9'/>
            <p> <span className='poa'>modificationDate: </span>{modificationDate}</p>
            </div>
            <div className='bs1'>
                <FaLandmarkFlag className='img1'/>
            <p> <span className='poa'> labelEn: </span>{labelEn}</p>
            </div>
      










   

        </li>     
      
        
    )
    
}
export default JobCard








//geonameId: eachJob.geoname_id,
// name: eachJob.name,
// asciiName: eachJob.ascii_name,
// alternateNames:eachJob.alternate_names,
// featureClass: eachJob.feature_class,
// featureCode: eachJob.feature_code,
// countryCode: eachJob.country_code,
// couNameEn: eachJob.cou_name_en,
// admin1Code: eachJob.admin1_code,
// admin2Code: eachJob.admin2_code,
// admin3Code: eachJob.admin3_code,
// admin4Code: eachJob.admin4_code,
// population: eachJob.population,
// elevation: eachJob.elevation,
// dem: eachJob.dem,
// timezone: eachJob.timezone,
// modification_date: eachJob.modificationDate,
// labelEn: eachJob.label_en,
// coordinates: eachJob.coordinates