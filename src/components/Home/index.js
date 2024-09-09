import {Component} from 'react'
import JobCard from '../JobCard'
import './index.css'
import Wealth from '../Wealth/index.js'

class Home extends Component{
  state={
    wlist:[],searchInput:""
  }
  componentDidMount(){
    this.getDetails()
  }
  getDetails = async() => {
    const apiUrl="https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=99"
    const options ={
      method:"GET"
    }
    const response =await fetch(apiUrl,options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedJobsData = data.results.map(eachJob => ({
        geonameId: eachJob.geoname_id,
        name: eachJob.name,
        asciiName: eachJob.ascii_name,
        alternateNames:eachJob.alternate_names,
        featureClass: eachJob.feature_class,
        featureCode: eachJob.feature_code,
        countryCode: eachJob.country_code,
        couNameEn: eachJob.cou_name_en,
        admin1Code: eachJob.admin1_code,
        admin2Code: eachJob.admin2_code,
        admin3Code: eachJob.admin3_code,
        admin4Code: eachJob.admin4_code,
        population: eachJob.population,
        elevation: eachJob.elevation,
        dem: eachJob.dem,
        timezone: eachJob.timezone,
        modificationDate: eachJob.modification_date,
        labelEn: eachJob.label_en,
        coordinates: eachJob.coordinates
      }))
      this.setState({
        wlist: updatedJobsData,
      })
    }
  }
  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderWeather = () => {
    const {wlist} = this.state

    return   (
      <div className="all-jobs-container">
        <ul className="jobs-list">
          {wlist.map(job => (
            <JobCard wData={job} key={job.id}  />
          ))}
        </ul>
      </div>
    ) 
  }
  render() {
    return (
      <div className='bg2'>
      <Wealth/>
      
        
        {this.renderWeather()}

      
   </div> )
  }

} 
export default Home