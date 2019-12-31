import React, { Component} from 'react'


export default class listings extends Component {
  constructor () {
    super()
    this.state = {
      name:'Emmauel'
     
     

    

    }
    this.loopListings=this.loopListing.bind(this)
  }

loopListing(){

      var {listingsData} =this.props

      if(listingsData ==undefined || listingsData.length == 0){
        return"sorry your filter did not match any listing thing"
        }

      return listingsData .map((listing,index)=>{
        //This is box view
        if(this.props.globalState.view =='box'){
          return (<div className="col-md-3" key={index}>
          <div className="listing">
            
            <div className="listing-image" style={
              {background:`url("${listing.image}")no-repeat center center` }
            }>
  <span className="address">{listing.address}</span>
  <div className="details">
   <div className="col-md-3">
  
  
    <div className="user-img"></div>
    </div>
    <div className="col-md-9">
    <div className="user-details">
      <span className="user-name">Nina kitey</span>
      <span className="post-date">05/09/2019</span>
    </div>
  
    <div className="listing-details">
  <div className="floor-space"><i className="fas fa-square"></i>
  <span>{listing.floorSpace} ft&sup2;</span>
  </div>
    <div className="bedrooms">
    <i className="fas fa-bed"></i>
    <span>{listing.rooms}</span>
    </div>
  
   
    </div>
  
  <div className="view-btn">
    View Listing
  </div>
    </div>
  </div>
            </div>
          </div>
          <div className="bottom-info">
            <span className="price">{listing.price}</span>
            <span className="location">
            <i className="fas fa-map-marker-alt"></i>{listing.city},{listing.county}
            </span>
        </div>
        </div>)
        }else{
          //This is long view
          return(<div className="col-md-12 col-lg-6" key={index}>
        <div className="listing">
          
          <div className="listing-image" style={
            {background:`url("${listing.image}")no-repeat center center` }
          }>
<span className="address">{listing.address}</span>
<div className="details">
 <div className="col-md-3">


  <div className="user-img"></div>
  </div>
  <div className="col-md-9">
  <div className="user-details">
    <span className="user-name">Nina kitey</span>
    <span className="post-date">05/09/2019</span>
  </div>

  <div className="listing-details">
<div className="floor-space"><i className="fas fa-square"></i>
<span>{listing.floorSpace} ft&sup2;</span>
</div>
  <div className="bedrooms">
  <i className="fas fa-bed"></i>
  <span>{listing.rooms}</span>
  </div>

 
  </div>

<div className="view-btn">
  View Listing
</div>
  </div>
</div>
          </div>
        </div>
        <div className="bottom-info">
          <span className="price">{listing.price}</span>
          <span className="location">
          <i className="fas fa-map-marker-alt"></i>{listing.city},{listing.county}
          </span>
      </div>
      </div>)

        }
        
        
      })
}
 
  render () {
    return(<section id="listings">

    <section className="search-area">
      <input type="text" name="search" onChange={this.props.change}/>
      </section>

      <section className="sortby-area">
        <div className="result">{this.props.globalState.filteredData.length} results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby" onChange={this.props.change}>
            <option value="price-dsc">Lowest Price</option>
            <option value="price-asc">Highest price</option>
          </select>
          <div className="view">
          <i className="fas fa-list" onClick={this.props.changeView.bind(null,"long")}></i>
          <i className="fas fa-th" onClick={this.props.changeView.bind(null,"box")}></i>
          </div>
        </div>
        </section>
        
      <section className="listings-result">
      {this.loopListings()}

        </section>


  <section id="pagination">
    <ul className="pages">
      <li>Prev</li>
      <li className="active">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>Next</li>

      </ul>
    </section>
        
        

    </section>)
 

}
}


