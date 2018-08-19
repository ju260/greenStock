const React = require('react');
/*const Filtre = require('./filtre');*/


class Filtres extends React.Component {
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} method="POST">
                    <h2>SEARCH STOCKS</h2>
                    <ul className='filtres'>
                    {/*<Filtre />*/}
                        <li>
                            <label for="per1">0 &lsaquo; PER &lsaquo; 10 <span class="filtres___def">(L'action est sous-évaluée ou les bénéfices de la société sont supposés être bientôt en déclin.)</span></label><input id="per1" type="checkbox" /> 
                            <label for="per2">10 &lsaquo; PER &lsaquo; 17 <span class="filtres___def">(Pour la majorité des sociétés, un ratio se situant dans cette tranche est considéré comme bon.)</span></label><input id="per2" type="checkbox" />
                            <label for="per3">17 &lsaquo; PER &lsaquo; 25 <span class="filtres___def">(L'action est surévaluée ou il y a croissance des profits depuis les dernières annonces.)</span></label><input id="per3" type="checkbox" />
                            <label for="per4"> 25 &lsaquo; <span class="filtres___def">PER l est probable que de forts profits soient attendus dans le futur, ou l'action fait l'objet d'une bulle spéculative.) </span></label><input id="per3" type="checkbox" /></li>
                        <li>EBITDATA</li>
                        <li>DIVIDENDS</li>
                    </ul>
                    <button type="submit">valider</button>
                </form>
            </div>
        );
    }
};

export default Filtres;
