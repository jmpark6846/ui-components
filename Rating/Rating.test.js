import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Rating from './Rating';

Enzyme.configure({ adapter : new Adapter() })

describe('Rating', ()=>{
  it('prop value에 맞게 별 렌더링', ()=>{
    const wrapper = shallow(<Rating value={3.7} />)
    expect(wrapper.find('.solid-star').length).toBe(3)
    expect(wrapper.find('.half-star').length).toBe(1)
    expect(wrapper.find('.empty-star').length).toBe(1)
  })

  it('mouseover 이벤트 테스트', () => {
    const wrapper = shallow(<Rating input />)
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

  it('click 이벤트 테스트', ()=>{
    let mockfunc = jest.fn()
    const wrapper = shallow(<Rating onClick={mockfunc} input/>)
    const fourthStar = wrapper.find('[data-value=4]')
    fourthStar.simulate('click', { target: { dataset: { value: 4 } } })
    expect(mockfunc).toHaveBeenCalled()
  })
})