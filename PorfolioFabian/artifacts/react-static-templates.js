

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/components/404.js'), universalOptions)
      t_0.template = '__react_static_root__/src/components/404.js'
      
const t_1 = universal(import('__react_static_root__/src/components/about.js'), universalOptions)
      t_1.template = '__react_static_root__/src/components/about.js'
      
const t_2 = universal(import('__react_static_root__/src/components/circle.js'), universalOptions)
      t_2.template = '__react_static_root__/src/components/circle.js'
      
const t_3 = universal(import('__react_static_root__/src/components/contact.js'), universalOptions)
      t_3.template = '__react_static_root__/src/components/contact.js'
      
const t_4 = universal(import('__react_static_root__/src/components/impressum.js'), universalOptions)
      t_4.template = '__react_static_root__/src/components/impressum.js'
      
const t_5 = universal(import('__react_static_root__/src/components/index.js'), universalOptions)
      t_5.template = '__react_static_root__/src/components/index.js'
      
const t_6 = universal(import('__react_static_root__/src/components/LoadingScreen.js'), universalOptions)
      t_6.template = '__react_static_root__/src/components/LoadingScreen.js'
      
const t_7 = universal(import('__react_static_root__/src/components/Mobile/about.js'), universalOptions)
      t_7.template = '__react_static_root__/src/components/Mobile/about.js'
      
const t_8 = universal(import('__react_static_root__/src/components/Mobile/contact.js'), universalOptions)
      t_8.template = '__react_static_root__/src/components/Mobile/contact.js'
      
const t_9 = universal(import('__react_static_root__/src/components/Mobile/impressum.js'), universalOptions)
      t_9.template = '__react_static_root__/src/components/Mobile/impressum.js'
      
const t_10 = universal(import('__react_static_root__/src/components/Mobile/index.js'), universalOptions)
      t_10.template = '__react_static_root__/src/components/Mobile/index.js'
      
const t_11 = universal(import('__react_static_root__/src/components/Mobile/LoadingScreen.js'), universalOptions)
      t_11.template = '__react_static_root__/src/components/Mobile/LoadingScreen.js'
      
const t_12 = universal(import('__react_static_root__/src/components/Mobile/ProjectDetails.js'), universalOptions)
      t_12.template = '__react_static_root__/src/components/Mobile/ProjectDetails.js'
      
const t_13 = universal(import('__react_static_root__/src/components/ProjectDetails.js'), universalOptions)
      t_13.template = '__react_static_root__/src/components/ProjectDetails.js'
      
const t_14 = universal(import('__react_static_root__/src/components/ReactSuspenseWrapper.js'), universalOptions)
      t_14.template = '__react_static_root__/src/components/ReactSuspenseWrapper.js'
      

// Template Map
export default {
  '__react_static_root__/src/components/404.js': t_0,
'__react_static_root__/src/components/about.js': t_1,
'__react_static_root__/src/components/circle.js': t_2,
'__react_static_root__/src/components/contact.js': t_3,
'__react_static_root__/src/components/impressum.js': t_4,
'__react_static_root__/src/components/index.js': t_5,
'__react_static_root__/src/components/LoadingScreen.js': t_6,
'__react_static_root__/src/components/Mobile/about.js': t_7,
'__react_static_root__/src/components/Mobile/contact.js': t_8,
'__react_static_root__/src/components/Mobile/impressum.js': t_9,
'__react_static_root__/src/components/Mobile/index.js': t_10,
'__react_static_root__/src/components/Mobile/LoadingScreen.js': t_11,
'__react_static_root__/src/components/Mobile/ProjectDetails.js': t_12,
'__react_static_root__/src/components/ProjectDetails.js': t_13,
'__react_static_root__/src/components/ReactSuspenseWrapper.js': t_14
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/components/404.js"

