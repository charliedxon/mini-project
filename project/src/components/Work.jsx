import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: '2020',
        title: 'Content Creator',
        duration: '3 Years',
        details:
        'Working as a content creator is a dynamic and creative journey.',
    },
    {
        year: '2017',
        title: 'Google',
        duration: '3 Years',
        details:
        'Google, a tech giant, has revolutionized the way we access information through its search engine and advertising platforms. It plays a pivotal role in making the internet more accessible and informative.',
    },
    {
        year: '2015',
        title: 'Amazon',
        duration: '2 Years',
        details:
        'Amazon, the e-commerce behemoth, has transformed online shopping by offering unparalleled convenience and an expansive product selection. It has set the standard for e-commerce and delivery services, shaping how we purchase goods.',
    },
    {
        year: '2012',
        title: 'Facebook',
        duration: '3 Years',
        details:
        'as a social media giant, Facebook connects billions of people and businesses worldwide, fostering communication and community building. It has become an integral part of modern social interaction.',
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto m:auto md:pl-20 p-4 py-16 '>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem
             key={idx}
              year={item.year}
               title={item.title}
                duration={item.duration}
                 details={item.details} />
        ))}
    </div>
  )
}

export default Work