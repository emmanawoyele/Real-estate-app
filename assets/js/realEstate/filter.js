import React, { Component} from 'react'


export default class filter extends Component {
  constructor () {
    super()
    this.state = {
      name:'Emmauel'
     
     

    

    }
  this.cities = this.cities.bind(this)
  this.homeType = this.homeType.bind(this)
  this.bedrooms = this.bedroom.bind(this)

  }


  componentWillMount(){
    this.props.populateAction() //this function will run  once componentwillMount load b4 render()
  }


cities(){
  if (this.props.globalState.populateFormData != undefined){ //This function dynamaticlly load cities from populateFormData
    var {cities} = this.props.globalState.populateFormData
  
///console.log(cities)
return cities.map((item)=>{
  return(
    <option key={item}value={item}>{item}</option>
  )
 
})

}
}



homeType(){
  if (this.props.globalState.populateFormData !=undefined){
    var {homeTypes} = this.props.globalState.populateFormData
  
console.log(homeTypes)
return homeTypes.map((item)=>{
  return(
    <option key={item}value={item}>{item}</option>
  )
 
})

}
}

    
bedroom(){
  if (this.props.globalState.populateFormData !=undefined){
    var {bedrooms} = this.props.globalState.populateFormData
  
console.log(bedrooms)
return bedrooms.map((item)=>{
  return(
    <option key={item}value={item}>{item} + BR</option>
  )
 
})

}
}

    
      
  
  




  render () {
    return(<section id="filter">
      <div className="inside">
   
      <h4>filter</h4>
      <label htmlFor="city">City</label>
      <select name="city" className="filter city" 
      onChange={this.props.change}>
        <option value="All">All</option>
        {this.cities()}
        
        </select>
        <label htmlFor="city">Home Type</label>
        <select name="homeType" className="filter house-type" 
        onChange={this.props.change} >
            <option value="All">All Homes</option>
        {this.homeType()}
        </select>
        <label htmlFor="city">Bedrooms</label>
        <select name="bedrooms" className=" filter bedroom"
         onChange={this.props.change}>
        {this.bedroom()}
        </select>

<div className="filter prices">
  <span className="title">Price</span>
  <input type="text" name="min_price" className="min-price"  value={this.props.globalState.min_price} onChange={this.props.change}/>
  <input type="text" name="max_price" className="max-price" value={this.props.globalState.max_price} onChange={this.props.change}/>
</div>

<div className="filter floor-space">
  <span className="title">Floor Space</span>
  <input type="text" name="min_floor_space" className="min-floor-space" value={this.props.globalState.min_floor_space} onChange={this.props.change} />
  <input type="text" name="max_floor_space" className="max-floor-space" value={this.props.globalState.max_floor_space}  onChange={this.props.change}/>
</div>
<div className="filter extras" >
  <span className="title">Facilities</span>
  <label htmlFor="extras">
    <span>Elevators</span>
    <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change}/>
    </label>

    <label htmlFor="extras">
    <span>Swimming Pool</span>
    <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change}/>
    </label>

    <label htmlFor="extras">
    <span>Basement</span>
    <input name="Basement"value="Basement" type="checkbox"onChange={this.props.change}/>
    </label>

    <label htmlFor="extras">
    <span>Gym</span>
    <input name="Gym" value="Gym" type="checkbox" onChange={this.props.change}/>
    </label>


</div>
</div>


    </section>)

 

}
}


