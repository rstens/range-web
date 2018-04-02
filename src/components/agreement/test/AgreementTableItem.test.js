import React from 'react';
import { shallow } from 'enzyme';
import { AgreementTableItem } from '../AgreementTableItem';
import { getMockAgreement } from './mockValues';
import { RANGE_USE_PLAN } from '../../../constants/routes';

const props = {};
const setupProps = () => {
  props.agreement = getMockAgreement(1);
  props.history = {
    push: jest.fn(),
  }
};

beforeEach(() => {
  setupProps();
});

describe('tenureAgreementTableItem', () => {
  xit('renders correctly', () => {
    const wrapper = shallow(<AgreementTableItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('push to the new route when clicking on Table.row', () => {
    const wrapper = shallow(<AgreementTableItem {...props} />);
    wrapper.simulate('click', {});

    expect(props.history.push).toHaveBeenCalledTimes(1);
    expect(props.history.push).toHaveBeenCalledWith(`${RANGE_USE_PLAN}/${props.agreement.id}`);
  });

  describe('Event handlers', () => {
    it('onRowClicked is called to push to the new route', () => {
      const wrapper = shallow(<AgreementTableItem {...props} />);
      wrapper.instance().onRowClicked();

      expect(props.history.push).toHaveBeenCalledTimes(1);
      expect(props.history.push).toHaveBeenCalledWith(`${RANGE_USE_PLAN}/${props.agreement.id}`);
    });
  });
});