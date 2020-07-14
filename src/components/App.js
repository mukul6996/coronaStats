import React from 'react';
import corona from '../api/corona';
import CoronaStatus from './CoronaStatus';
import CoronaChart from './CoronaChart';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allCountriesData: [],
            corona: [],
            selectedValue: ''
        }

    }


    getCountriesList = async (term) => {
        const response = await corona.get('/summary', {
            param: JSON.stringify(term.data)
        });

        let countriesData = response.data.Countries;

        this.setState({ allCountriesData: countriesData });
        console.log('All country data---', this.state.allCountriesData);

    }

    onChangeCountry = (event) => {
        const allCountriesData = this.state.allCountriesData;
        const selectedCountry = event.target.value;

        const filterCountryData = allCountriesData.filter((item) => {
            return item.Country === selectedCountry
        });

        this.setState({
            selectedValue: event.target.value,
            corona: filterCountryData
        });
    }


    onSearchSelect = () => {
        console.log('loaded')
    }

    componentDidMount() {
        window.addEventListener('load', this.getCountriesList)
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.getCountriesList)
    }

    render() {
        return (
            <div className="corona-wrapper">
                <div className="form-group">
                    <label><b>Please Select the Country</b></label>
                    <select value={this.state.selectedValue} onChange={this.onChangeCountry}>
                        <option>Select</option>
                        {this.state.allCountriesData.map((country) => {
                            return (
                                <option key={country.CountryCode} value={country.Country}>{country.Country}</option>
                            )
                        })}
                    </select>
                </div>
                {this.state.selectedValue ?
                    <div className="corona-info-row">
                        <div className="corona-info-column info-col-1">
                            <CoronaStatus coronaData={this.state.corona} />
                        </div>
                        <div className="corona-info-column info-col-2">
                            <CoronaChart chartData={this.state.corona} />
                        </div>
                    </div>
                : null }
            </div>
        )
    }
}

export default App;