// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

/*
export default class RestaurantList extends Component {
    componentDidMount = async () => {
      console.log(this.props.match.params.id)
      console.log("mountintg success") 
      const restaurantsList = await getAllRestaurants()
      if(restaurantsList.status == 200) {
        this.setState({
          allRestaurantsList : restaurantsList.data
        })
      }
      else {
        console.log("Something went wrong... " , restaurantsList.error)
      }
    }
    state = {
      allRestaurantsList : []
    }
    render() {
      return(
          <div>
              <h1>Order from around you!!</h1>
              { this.state.allRestaurantsList.map((i) => <RestaurantCard restaurant = {i}/>) }
          </div>
      )
    }
  }

  export default class MenuList extends React.Component {

    state = {
        totalItems : 0 ,
        totalPrice : 0 ,
        menu: Menu,
        loading: false,
        error: null
    }

    // componentDidMount = () => {
    //     this.getRestuarentMenu();
    // }

    // getRestuarentMenu = () => {
    //     ajax(`{/api/restuatent/${this.props.match.params.restuarent_id}}`, 
    //     {}, 
    //     (success, data) => {
    //         this.setState({
    //             loading: false,
    //             menu: data.menu
    //         });
    //     },
    //     (error) => {
    //         this.setState({
    //             loading: false,
    //             error: error
    //         })
    //     })
    // }

    updateCart = () => {
        let totalSum = 0
        Cart.map((i) => totalSum += i.price)
        this.setState({
            totalItems : Cart.length ,
            totalPrice : totalSum  
        })
    }

    render = () => {
        if (this.state.loading === true) {
            return (
                <>Loading Menu...Please wait...</>
            )
        }

        if (this.state.error !== null) {
            return (
                <>
                    {this.state.error}
                </>
            )
        }

        return (
            <div>
                <h1>VIEWING FOODS IN </h1>
                <DashBoard itemsCount = {this.state.totalItems} price={this.state.totalPrice}/>
                {this.state.menu.map((item) => {
                        return (
                            <>
                                <MenuCard item = {item} updateCart = {this.updateCart}/>              
                            </>
                            
                        )
                    })
                }

             </div>
        )
    }
}


  */