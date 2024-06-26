import React, {useState, } from 'react';

//FUNCTION COMPONENTS REALIZATION

function Search (props) {

    const {searchMovies = Function.prototype} = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if(event.key === 'Enter') {
            searchMovies(search, type)
        }
    }    
    
    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    }

    return (
        <div className="row">
           <div className="col s12">
                <div className="input-field">
                    <input 
                        placeholder="search" 
                        id="search" type="search" 
                        className="validate" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKey}
                    />
                    <button className="btn btn-search" onClick={() => this.props.searchMovies(search, type)}>Search</button>
                </div>
                <div className="filters">
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="all" 
                            onChange={handleFilter} checked={type === 'all'} />
                        <span>All</span>
                    </label>
                    <label>
                         <input className="with-gap" name="type" type="radio" data-type="movie" 
                            onChange={handleFilter} checked={type === 'movie'}/>
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="series" 
                            onChange={handleFilter} checked={type === 'series'}/>
                        <span>Series only</span>
                    </label>
                            
                </div>
            </div>
        </div>
            )

}



//CLASS COMPONENT REALIZATION: 

// class Search extends React.Component {

//     state = {
//         search: '', 
//         type: 'all,'
//     }

//     handleFilter = (event) => {
//         this.setState(() => ({type: event.target.dataset.type}), () => {
//             this.props.searchMovies(this.state.search, this.state.type);
//         });
//     };

//     handleKey = (event) => {
//         if(event.key === 'Enter') {
//             this.props.searchMovies(this.state.search, this.state.type)
//         }
//     }

//     render() {
//         return (
//             <div className="row">
//                 <div className="col s12">
//                     <div className="input-field">
//                         <input 
//                             placeholder="search" 
//                             id="search" type="search" 
//                             className="validate" 
//                             value={this.state.search}
//                             onChange={(e) => this.setState({search: e.target.value})}
//                             onKeyDown={this.handleKey}
//                         />
//                         <button className="btn btn-search" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Saerch</button>
//                     </div>
//                     <div className="filters">
//                         <label>
//                             <input className="with-gap" name="type" type="radio" data-type="all" 
//                             onChange={this.handleFilter} checked={this.state.type === 'all'} />
//                             <span>All</span>
//                         </label>
//                         <label>
//                             <input className="with-gap" name="type" type="radio" data-type="movie" 
//                             onChange={this.handleFilter} checked={this.state.type === 'movie'}/>
//                             <span>Movies only</span>
//                         </label>
//                         <label>
//                             <input className="with-gap" name="type" type="radio" data-type="series" 
//                             onChange={this.handleFilter} checked={this.state.type === 'series'}/>
//                             <span>Series only</span>
//                         </label>
                        
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export { Search }