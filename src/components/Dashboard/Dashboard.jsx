import React, { Component } from 'react';
import Header from '../header/Header';
import DisplayBooks from '../Book/DisplayBooks';
import Footer from '../Footer/Footer';
import { AddCartRequestMethod, getCartAddedCountRequestMethod } from '../../services/CartServices';
import {getAllBooksRequestMethod,getBookByPriceAsc,getBookByPriceDesc,getBookByAuthorName, getBookCountRequestMethod} from '../../services/BookServices';
import Abcart from '../cart/Abcart';
import { AddWishlistRequestMethod } from '../../services/wishlistServics';
import Pagination from '../pagination/Pagination';
import {withRouter } from 'react-router-dom';
import Wishlist from '../cart/Wishlist';
import { responsiveFontSizes } from '@material-ui/core';
import {getReviewForBookApi } from '../../services/getReviewForBookApi';
import review from '../cart/review';

class Dashboard extends Component {

    state = {
        books: [],
        review:[],
        bookCount: 0,
        cartCount: 0,
        wishlistCount: 0,
        clickedId: [],
        addToBagBtnText: "Add to Bag",
        showMyCartComponent: false,
        filterArray: [],
        isSearching: false,
        filterArrayCount: 0,
        currentPage: 1,
        postsPerPage: 8,
        wishlist:[],
        ShowWishListComponent:false,
        tempBooks:[]

    }
    
 componentDidMount() {
     this.getAllBooksRequestMethod();
     }

            getAllBooksRequestMethod = () => {
        let path = {
            path: "books"
        }
        getAllBooksRequestMethod(path).then((res) => {
            this.setState({ books: res.data.data });
            this.setState({cartCount: localStorage.getItem('cartCount')})
            this.setState({
                maxNumOfPage: Math.ceil(this.state.books.length / this.state.todosPerPage)
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
        console.log("pagenumber after", this.state.currentPage);
    }


    cartIconClickedHandler = () => {
        let doesShowMyCartComponent = this.state.showMyCartComponent;
        this.setState({
            showMyCartComponent: !doesShowMyCartComponent
        })
    }

    wishListIconClickedHandler = () => {
        let doesShowWishListComponent = this.state.ShowWishListComponent;

        this.setState({
            ShowWishListComponent: !doesShowWishListComponent

        })

    }

    searchHandler = (event) => {
        let search = event.target.value;
        if (search.toString().length >= 1) {
            const newData = this.state.books.filter(item => {
                return (
                    item.bookName.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    item.authorName.toLowerCase().indexOf(search.toLowerCase()) > -1
                );
            })
            this.setState({
                isSearching: true,
                filterArray: newData,
                filterArrayCount: newData.length
            })
        }
        else {
            this.setState({
                isSearching: false
            })
        }
    }
        sortByRelevanceHandler=(event)=>{
        const selection =event.target.value;
        let books= this.state.books
        console.log(selection);
        if(selection.toString() === "price: low to high"){    
        const cartCountRes = getBookByPriceAsc();
            cartCountRes.then(
                res => {
                    this.setState({
                        books: res.data.data

                    }) 
                    localStorage.setItem('book_id', res.data.bookId);

                }
            )
           
        }

       else{
          const response = getBookByPriceDesc();
                const booksDesc = getBookByPriceDesc();
                booksDesc.then(
                    res => {
                        this.setState({
                            books: res.data.data
                        }) 
                    }
                )
           
    }
  }

    
    addToBagClickHandler = (clickedID) => {
        let cartCount = this.state.cartCount;
        let clickedid = this.state.clickedId;
        clickedid.push(clickedID);
        this.setState({
            cartCount: cartCount + 1,
            clickedId: [...clickedid],
            addToBagBtnText: "Added to bag"
        })
        var cart = {
            bookId: clickedID,
        
        }
        console.log(cart)
        const response = AddCartRequestMethod(cart);

        response.then(res => {
            console.log(res.data);
        })
    }
    
    addToWishlistClickHandler = (clickedID) => {
        let wishlistCount = this.state.wishlistCount;
        let clickedid = this.state.clickedId;
        console.log(clickedID);
        this.setState({
            wishlistCount: wishlistCount + 1,
            clickedId: [...clickedid],
            WishlistBtnText: "Added to wishlist"
        })
        var wishlist = {
            bookId: clickedID,
        
        }
        console.log(wishlist)
        const response = AddWishlistRequestMethod(wishlist);
        response.then(res => {
            console.log(res.data);
        })
    }
    // #reviewfor book handler
    // getReviewForBookApi = () => {
    //     let path = {
    //         path: "review"
    //     }
    
    getReviewForBook=(data)=>{
                const  response = getReviewForBookApi(data);
                console.log(data);
          localStorage.setItem('bookk_id', data)
        
          response.then(res =>{
            this.setState({ review: res.data });

console.log(res.data);
console.log(this.state.review);
var rrr=localStorage.setItem('rev',this.state.review);
          })
    }
    
    
                render() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.books.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <>
                <Header
                    cartCount={this.state.cartCount}
                    wishlistCount={this.state.wishlistCount}
                    cartIconClickedHandler={this.cartIconClickedHandler}
                    searchHandler={this.searchHandler}
                    wishListIconClickedHandler={this.wishListIconClickedHandler}
                />
                {
                    this.state.showMyCartComponent ?<Abcart />

                        : this.state.ShowWishListComponent ? 
                        <Wishlist
                            wishlist={this.state.wishlist}
                        /> :
                        <>
                            <DisplayBooks
                                books={this.state.isSearching ? this.state.filterArray :currentPosts}
                                bookCount={this.state.isSearching ? this.state.filterArrayCount : this.state.bookCount}
                                TotalCount={this.state.books.length}
                                onChangePaginationHandler={this.onChangePaginationHandler}
                                addToBagClickHandler={this.addToBagClickHandler}
                                addToWishlistClickHandler={this.addToWishlistClickHandler}
                                clickedId={this.state.clickedId}
                                addToBagBtnText={this.state.addToBagBtnText}
                                sortByRelevanceHandler={this.sortByRelevanceHandler}
                                getReviewForBook={this.getReviewForBook}
                            />
                            <Pagination postsPerPage={this.state.postsPerPage}
                                totalPosts={this.state.books.length}
                                paginateNumber={this.paginate} />
                        </>
                }

                <Footer />
            </>
        )

    }
}
export default withRouter(Dashboard);