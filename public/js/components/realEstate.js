webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(77);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Emmauel'

    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'Logo'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log in'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var listings = function (_Component) {
  _inherits(listings, _Component);

  function listings() {
    _classCallCheck(this, listings);

    var _this = _possibleConstructorReturn(this, (listings.__proto__ || Object.getPrototypeOf(listings)).call(this));

    _this.state = {
      name: 'Emmauel'

    };
    _this.loopListings = _this.loopListing.bind(_this);
    return _this;
  }

  _createClass(listings, [{
    key: 'loopListing',
    value: function loopListing() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "sorry your filter did not match any listing thing";
      }

      return listingsData.map(function (listing, index) {
        //This is box view
        if (_this2.props.globalState.view == 'box') {
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-image', style: { background: 'url("' + listing.image + '")no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina kitey'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '05/09/2019'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fas fa-square' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'price' },
                listing.price
              ),
              _react2.default.createElement(
                'span',
                { className: 'location' },
                _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                listing.city,
                ',',
                listing.county
              )
            )
          );
        } else {
          //This is long view
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-image', style: { background: 'url("' + listing.image + '")no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina kitey'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '05/09/2019'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fas fa-square' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'price' },
                listing.price
              ),
              _react2.default.createElement(
                'span',
                { className: 'location' },
                _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                listing.city,
                ',',
                listing.county
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'result' },
            this.props.globalState.filteredData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fas fa-list', onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fas fa-th', onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-result' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return listings;
}(_react.Component);

exports.default = listings;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var listingsData = [{
    address: '202 Sango road',
    city: 'Liverpool',
    county: 'East Sussex',
    price: 400000,
    floorSpace: 2000,
    rooms: 3,

    extras: ['elevator'],

    homeTypes: 'Ranch',
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/213k/212408/74155060/212408_P65077_IMG_01_0000_max_476x317.jpg'
}, {
    address: '42 Lion Road',
    city: 'London',
    county: 'West Sussex',
    price: 8000000,
    floorSpace: 4000,
    rooms: 4,
    extras: ['elevator'],

    homeTypes: 'House',
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/7k/6028/85135241/6028_16075263_IMG_01_0001_max_476x317.jpg'
}, {
    address: '20-20 mill road',
    city: 'Brighton',
    county: 'East Sussex',
    price: 350000,
    floorSpace: 2000,
    rooms: 7,
    extras: ['elevator'],

    homeTypes: 'Flat',
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/113k/112651/56677401/112651_201043S_IMG_01_0000_max_476x317.jpg'
}, {
    address: '100 Brentwood road',
    city: 'East Sussex',
    county: 'bath',

    price: 600000,
    floorSpace: 1500,
    rooms: 3,

    extras: ['elevator', 'Gym'],

    homeTypes: 'House',
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/4k/3469/64031421/3469_PGN190139_IMG_01_0000_max_476x317.jpg'
}, {
    address: '29 woods road',
    city: 'Britsol',
    county: 'Wealden',

    price: 550000,
    floorSpace: 1200,
    rooms: 5,
    extras: ['elevator'],

    homeTypes: 'Cottage',
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/18k/17597/66421137/17597_9656155_IMG_01_0000_max_476x317.jpg'
}, {
    address: '11 Keysighton road',
    city: 'Brighton',
    county: 'South bath',

    price: 550000,
    floorSpace: 3200,
    rooms: 4,
    extras: ['elevator', 'Gym'],

    homeTypes: 'House',
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/18k/17597/66421137/17597_9656155_IMG_01_0000_max_476x317.jpg'
}, {
    address: '22 Knight road',
    city: 'Liverpool',
    county: 'kent',

    price: 1000000,
    floorSpace: '5000',
    rooms: 6,
    extras: ['elevator', 'Gym'],

    homeTypes: 'Flat',
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/18k/17597/66421137/17597_9656155_IMG_01_0000_max_476x317.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var filter = function (_Component) {
  _inherits(filter, _Component);

  function filter() {
    _classCallCheck(this, filter);

    var _this = _possibleConstructorReturn(this, (filter.__proto__ || Object.getPrototypeOf(filter)).call(this));

    _this.state = {
      name: 'Emmauel'

    };
    _this.cities = _this.cities.bind(_this);
    _this.homeType = _this.homeType.bind(_this);
    _this.bedrooms = _this.bedroom.bind(_this);

    return _this;
  }

  _createClass(filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction(); //this function will run  once componentwillMount load b4 render()
    }
  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.populateFormData != undefined) {
        //This function dynamaticlly load cities from populateFormData
        var cities = this.props.globalState.populateFormData.cities;

        ///console.log(cities)

        return cities.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'homeType',
    value: function homeType() {
      if (this.props.globalState.populateFormData != undefined) {
        var homeTypes = this.props.globalState.populateFormData.homeTypes;


        console.log(homeTypes);
        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'bedroom',
    value: function bedroom() {
      if (this.props.globalState.populateFormData != undefined) {
        var bedrooms = this.props.globalState.populateFormData.bedrooms;


        console.log(bedrooms);
        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item,
            ' + BR'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'filter'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filter city',
              onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.cities()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'Home Type'
          ),
          _react2.default.createElement(
            'select',
            { name: 'homeType', className: 'filter house-type',
              onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All Homes'
            ),
            this.homeType()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'Bedrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'bedrooms', className: ' filter bedroom',
              onChange: this.props.change },
            this.bedroom()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filter prices' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', value: this.props.globalState.min_price, onChange: this.props.change }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', value: this.props.globalState.max_price, onChange: this.props.change })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filter floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min-floor-space', value: this.props.globalState.min_floor_space, onChange: this.props.change }),
            _react2.default.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max-floor-space', value: this.props.globalState.max_floor_space, onChange: this.props.change })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filter extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Facilities'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevators'
              ),
              _react2.default.createElement('input', { name: 'elevator', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { name: 'swimming_pool', value: this.props.globalState.pool, type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Basement'
              ),
              _react2.default.createElement('input', { name: 'Basement', type: 'checkbox', value: this.props.globalState.basement, onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { name: 'gym', type: 'checkbox', value: this.props.globalState.gym, onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return filter;
}(_react.Component);

exports.default = filter;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(77);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(230);

var _Header2 = _interopRequireDefault(_Header);

var _filter = __webpack_require__(233);

var _filter2 = _interopRequireDefault(_filter);

var _Listings = __webpack_require__(231);

var _Listings2 = _interopRequireDefault(_Listings);

var _ListingsData = __webpack_require__(232);

var _ListingsData2 = _interopRequireDefault(_ListingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'emmauel',
      listingsData: _ListingsData2.default,
      city: 'All',
      homeType: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 5000000,

      filteredData: _ListingsData2.default,
      popluateFormData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: '',
      elevator: false,
      basement: false,
      pool: false,
      gym: false

    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateFormData = _this.populateFormData.bind(_this);
    _this.changeView = _this.changeView.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // This should set the listings to start from minmuim price to highest price

      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });
      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      //this method is for check what was clicked or what changes on the filter
      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      //This method will change the view to long or box view
      this.setState({
        view: viewName

      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      //This method filter the data . price, city, hometype,bedrooms floorspace
      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms;
      });
      if (this.state.city != 'All') {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }
      if (this.state.homeType != 'All') {
        newData = newData.filter(function (item) {
          return item.homeTypes == _this3.state.homeType;
        });
      }

      if (this.state.gym != false) {
        newData = newData.filter(function (item) {

          item.extras.map(function (item) {
            return item.Gym == _this3.state.gym;
          });
        });
      }

      //if(this.state.basement !="checked"){
      // newData =newData.filter((item)=>{

      /// return item.basement == this.state.basement
      // })
      /// }
      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }
      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }
      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();

          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);
          if (n != null) {
            return true;
          }
        });
      }
      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateFormData',
    value: function populateFormData() {
      var _this4 = this;

      //This method populate the filter section by gettting data from listingsData.
      //city//
      var cities = this.state.listingsData.map(function (item) {
        // get data from listingsData use map to create new array
        return item.city; // return city from listingsdata

      });
      cities = new Set(cities); // This will create a new set of cities by using new Set keyword 
      cities = [].concat(_toConsumableArray(cities));
      cities = cities.sort(); //this will sort the cities


      //homeType//
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeTypes;
      });

      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();

      //Bedrooms//
      var bedrooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms = bedrooms.sort();

      this.setState({
        populateFormData: {
          cities: cities,
          homeTypes: homeTypes,
          bedrooms: bedrooms

        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateFormData }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);