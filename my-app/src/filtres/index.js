const React = require('react');
const Filtre = require('./filtre');


class Filtres extends React.Component {
    

    render() {
        return (
            <ul className='filtres'>
               <Filtre />
            </ul>
      
        );
    }
};

export default Filtres;
