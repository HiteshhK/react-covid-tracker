import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
// import coronaIMage from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };
  coronaIMage = `https://i.ibb.co/7QpKsCX/image.png`;

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={this.coronaIMage} className={styles.image} alt="COVID-19" />
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
