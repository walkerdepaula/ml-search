import test from 'ava';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import ProductList from '../../components/product-list';

const localVue = createLocalVue();

test('It should show not found message in list', (t) => {
  let wrapper = shallowMount(ProductList, {
    localVue,
    propsData: {
      items: []
    }
  });

  t.true(wrapper.find('.alert-info').isVisible())
});

test('It should render sub component', (t) => {
  let wrapper = shallowMount(ProductList, {
    localVue,
    propsData: {
      items: [
        {
          id: 1,
          title: 'teste 1',
          price: '100',
          thumbnail: 'link',
          address: {
            city_name: 'teste city'
          }
        }
      ]
    }
  });

  t.true(wrapper.findAll('li.item').length > 0)
});