import Router from 'vue-router';
import test from 'ava';
import sinon from 'sinon';
import { createLocalVue, mount } from '@vue/test-utils';

import SearchBar from '../../components/search-bar';

let wrapper;
const localVue = createLocalVue();
localVue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/'
    },
    {
      name: 'items',
      path: '/items'
    }
  ],
});

test.beforeEach( () => {
  wrapper = mount(SearchBar, {
    localVue,
    router
  });
})

test('It should change route with query input value', (t) => {
  const input = wrapper.find('input');
  const button = wrapper.find('button');
  const userInput = 'Iphone X';

  input.element.value = userInput;
  input.trigger('input');

  wrapper.vm.$router.push = sinon.spy();

  button.trigger('click');

  t.true(
    wrapper.vm.$router.push.calledWithExactly({
      name: 'items',
      query: {
        search: userInput
      }
    })
  )
});

test('It shouldnt change the route without input value', (t) => {
  const button = wrapper.find('button');

  wrapper.vm.$router.push = sinon.spy();

  button.trigger('click');

  t.false(
    wrapper.vm.$router.push.calledWith()
  )
});
