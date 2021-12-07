import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

const OrderForm = ({ tripCost, options, id, setOrderOption }) => {
  return (
    <Grid>
      <Row>
        {pricing.map(options => (
          <Col md={4} key={id}>
            <OrderOption {...options} currentValue={options['car-rental']} setOrderOption={setOrderOption}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={pricing} />
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
