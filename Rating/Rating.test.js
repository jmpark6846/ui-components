import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Rating from './Rating';
import Icon from '../Icon/Icon';

Enzyme.configure({ adapter : new Adapter() })

describe('Rating', ()=>{
  it('props.value = 3.7 이면 별 3개, 절반 별 1개, 빈 별 1개를 출력한다.', ()=>{
    const wrapper = shallow(<Rating value={3.7} />)
    expect(wrapper.find('.solid-star').length).toBe(3)
    expect(wrapper.find('.half-star').length).toBe(1)
    expect(wrapper.find('.empty-star').length).toBe(1)
  })

  it('mouseover 이벤트 테스트', () => {
    const wrapper = shallow(<Rating input />)
    const fourthStar = wrapper.find('[data-value=4]')
    wrapper.find('[data-value=4]').simulate('mouseOver', { target: { dataset: { value: 4 } } })
    expect(wrapper.state('hover')).toBe(true)
  })

  it('mouseout 이벤트 테스트', () => {
    const wrapper = shallow(<Rating input />)
    const fourthStar = wrapper.find('[data-value=4]')
    fourthStar.simulate('mouseover', { target: { dataset: { value: 4 } } })
    fourthStar.simulate('mouseout')
    expect(wrapper.state('hover')).toBe(false)
  })
})