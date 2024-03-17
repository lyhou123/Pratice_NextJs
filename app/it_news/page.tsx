import React from 'react'
import Page from '../component/Pageternation'
import CardCompoentIi from '../component/it_newsObject'
export default function ItComponent() {
  return (
    <div className=' w-fullcontainer mx-auto '>
    <p className='font-bold text-[28px] mt-4 mb-4 text-center'>USEFUL CONTENTS</p>
    <div className="">
     <CardCompoentIi/>
     <CardCompoentIi/>
     <CardCompoentIi/>
    </div>
    <Page/>
    </div>
  )
}
