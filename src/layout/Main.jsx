import React, {useState, useEffect} from "react";
import { Movies } from '../components/Movies';
import { Preloader } from '../components/preloader';
import { Search } from '../components/Search';

//FUNCTIONAL COMPONENT REALIZATION

function Main () {

    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(true);

    const searchMovies = (str, type) => {
        setLoading(true);
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=74ea4022&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then((data) => {
                setLoading(false);
                setMovies(data.Search)
            })
            .catch((err) => {
                console.log('error');
                setLoading(false);
            })
    }

    useEffect(() => {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=74ea4022&s=matrix')
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.log('error');
                setLoading(false);
            })
        }, []
    )



    return (
            
        <main className = "container content"> 

        <Search searchMovies={searchMovies} />

        { loading ? <Preloader /> : <Movies movies={movies}/> 
                }
        </main>
        )


}

//CLASS COMPONENT REALIZATION: 
// class Main extends React.Component {

//     state = {
//         movies: [],
//         loading: true,
//     }

//     componentDidMount () {
//         fetch('http://www.omdbapi.com/?i=tt3896198&apikey=74ea4022&s=matrix')
//             .then(response => response.json())
//             .then(data => this.setState({movies: data.Search, loading: false}))
//     }

//     searchMovies = (str, type) => {
//         this.setState({loading: true});
//         fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=74ea4022&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
//             .then(response => response.json())
//             .then(data => this.setState({movies: data.Search, loading: false}))
//     }

//     render() {
//         const {movies, loading} = this.state;

//         return (
            
//             <main className = "container content"> 

//             <Search searchMovies={this.searchMovies} />

//             { loading ? <Preloader /> : <Movies movies={movies}/> 
//                 }
//             </main>
//         )
//     }

// }


export { Main }