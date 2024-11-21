import './Searchbar.css';

function Searchbar () {
    function handleClick() {
        alert('You Clicked Me');

    }
    return(
    <div>
        <input type="search"></input>
        <button id="searchButton" onClick={handleClick}><h3>Search</h3></button>
    </div>
    )
} 

export default Searchbar;