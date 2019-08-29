import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'


describe('Card', () => {
    it('should match snapshot of first item ', () => {
        const data = [{
          id: 1,
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154",
          name: "iPhone Xs",
          description: "The latest phone to come out by Apple. It has a faster processor and improved camera to take HDR images.",
          price: 900
        }]

        const wrapper = shallow(
            <Card
            data={data}
            key={data.id}
            id={data.id}
            img={data.img}
            name={data.name}
            description={data.description}
            price={data.price}
            />)
        expect(wrapper).toMatchSnapshot()
    })

  })
