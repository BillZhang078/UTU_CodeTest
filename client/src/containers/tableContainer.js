import React, { useEffect } from 'react';
import Table from '../components/table';
import { connect } from 'react-redux';
import { getCurrencies } from '../actions/currency';
import loadingImage from '../images/preloader.gif';

const TableContainer = ({ getCurrencies, Currency, ...props }) => {
  useEffect(() => {
    getCurrencies();
  }, []);

  let NewData = [];

  if (Currency) {
    NewData = Currency.map((item) => {
      item.MarketCup = parseInt(item.MarketCap.replace(/,/g, ''));
      return item;
    });
    NewData.sort((a, b) => {
      return a.MarketCup - b.MarketCup;
    });
  }
  return (
    <>
      {Currency ? (
        <Table data={NewData} />
      ) : (
        <img src={loadingImage} className='loading_img' alt='loading' />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return { Currency: state.currency.currencies.currencies };
};

export default connect(mapStateToProps, { getCurrencies })(TableContainer);
