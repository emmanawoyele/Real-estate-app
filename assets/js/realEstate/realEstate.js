import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './filter.js'
import Listings from './Listings.js'
import listingsData from './data/ListingsData.js'



class App extends Component {
  constructor () {
    super()
    this.state = {
 name:'emmauel',
      listingsData,
      city:'All',
      homeType:'All',
      bedrooms:0,
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 5000000,
      elavator: false,
      basement: false,
      gym: false,
      filteredData:listingsData,
      popluateFormData:'',
      sortby:'price-dsc',
      view:'box',
      search:''


     
  

    }


    this.change=this.change.bind(this)
    this.filteredData=this.filteredData.bind(this)
    this.populateFormData=this.populateFormData.bind(this)
    this.changeView=this.changeView.bind(this)
  
  }

  componentWillMount(){ // This should set the listings to start from minmuim price to highest price
     
      var listingsData = this.state.listingsData.sort((a,b)=>{
return (a.price - b.price)
    })
    this.setState({
      listingsData
    })
  }

  change(event){ //this method is for changing filter
    var name = event.target.name
    var value =(event.target.type==='checkbox')? event.target.checked:event.target.value

   this.setState({
     [name]:value
   },()=>{
     console.log(this.state)
     this.filteredData()
   })

  }

changeView(viewName){ //This method will change the view to eaither lonh or box view
  this.setState({
    view:viewName
    
  })


}

  filteredData(){ //This method filter the data . price, city, hometype,bedrooms floorspace
var newData = this.state.listingsData.filter((item) =>{
  return item.price >= this.state.min_price &&
   item.price <= this.state.max_price
   && item.floorSpace >=this.state.min_floor_space &&
   item.floorSpace <=this.state.max_floor_space && 
   item.rooms >=this.state.bedrooms

})
  if(this.state.city !='All'){
    newData =newData.filter((item)=>{
      return item.city ==this.state.city
    })
  }
if(this.state.homeType !='All'){
  newData =newData.filter((item)=>{
    return item.homeType==this.state.homeType
  })


  }
  if(this.state.sortby=='price-dsc'){
    newData =newData.sort((a,b)=>{
      return a.price-b.price
    })
  }
    if(this.state.sortby=='price-asc'){
      newData =newData.sort((a,b)=>{
        return b.price-a.price
      })
    }
    if(this.state.search != ''){
      newData =newData.filter((item)=>{
       var city = item.city.toLowerCase()
       
var searchText=this.state.search.toLowerCase()
       var n = city.match(searchText)
      if(n != null){
         return true
       }
     })
    }
this.setState({
  filteredData: newData
})


  }
 
  populateFormData(){ //This method populate the filter section by gettting data from listingsData.
  //city//
  var cities = this.state.listingsData.map((item)=>{// get data from listingsData use map to create new array
   return item.city // return city from listingsdata
   
    
  })
 cities= new Set (cities)// This will create a new set of cities by using new Set keyword 
  cities =[...cities]
cities= cities.sort()//this will sort the cities


  //homeType//
  var homeTypes = this.state.listingsData.map((item)=>{
  return item.homeTypes
  })
 
  homeTypes =new Set(homeTypes)
  homeTypes =[...homeTypes]
  homeTypes = homeTypes.sort()

  //Bedrooms//
  var bedrooms = this.state.listingsData.map((item)=>{
    return item.rooms
   })
   bedrooms= new Set (bedrooms)
   bedrooms =[...bedrooms]
bedrooms =bedrooms.sort()

   this .setState({
    populateFormData:{
      cities,
      homeTypes,
      bedrooms
      
    }
   },()=>{
     console.log(this.state)
   })
   
    
}


  render () {
 
    return(<div>
      <Header />
 <section id="content-area">
        <Filter change={this.change} globalState={this.state} populateAction={this.populateFormData}/>
        <Listings  listingsData={this.state.filteredData}change={this.change} globalState={this.state} changeView={this.changeView} />
        </section>

    </div>
     
      )
 

}
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
