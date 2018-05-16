import test from 'ava';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import Breadcrumb from '../../components/breadcrumb';

const localVue = createLocalVue();

test('Sets breadcrumb', (t) => {
  let wrapper = shallowMount(Breadcrumb, {
    localVue
  });

  wrapper.vm.$root.$emit('breadcrumb:change', {
    path_from_root: [
      { name: 'teste 1' },
      { name: 'teste 2' }
    ]
  });

  t.true( wrapper.vm.$data.pathFromRoot.length === 2 )
});