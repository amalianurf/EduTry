import { useState } from 'react'
import QuestionCard from '@/components/QuestionCard'
import TimerCard from '@/components/TimerCard'
import NumberCard from '@/components/NumberCard'

export default function Questions() {
  const Tryout = 'Tryout #1'
  const subTryout = 'Penalaran Induktif'
  const data = [
    {id:1, judul:'Soal 1', soal:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', pilihan:['A. Lorem ipsum dolor sit amet consectetur.', 'B. Lorem ipsum dolor sit amet consectetur.', 'C. Lorem ipsum dolor sit amet consectetur.', 'D. Lorem ipsum dolor sit amet consectetur.', 'E. Lorem ipsum dolor sit amet consectetur.'], jawaban:''},
    {id:2, judul:'Soal 2', soal:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', pilihan:['A. Lorem ipsum dolor sit amet consectetur.', 'B. Lorem ipsum dolor sit amet consectetur.', 'C. Lorem ipsum dolor sit amet consectetur.', 'D. Lorem ipsum dolor sit amet consectetur.', 'E. Lorem ipsum dolor sit amet consectetur.'], jawaban:''},
    {id:3, judul:'Soal 3', soal:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', pilihan:['A. Lorem ipsum dolor sit amet consectetur.', 'B. Lorem ipsum dolor sit amet consectetur.', 'C. Lorem ipsum dolor sit amet consectetur.', 'D. Lorem ipsum dolor sit amet consectetur.', 'E. Lorem ipsum dolor sit amet consectetur.'], jawaban:''},
    {id:4, judul:'Soal 4', soal:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', pilihan:['A. Lorem ipsum dolor sit amet consectetur.', 'B. Lorem ipsum dolor sit amet consectetur.', 'C. Lorem ipsum dolor sit amet consectetur.', 'D. Lorem ipsum dolor sit amet consectetur.', 'E. Lorem ipsum dolor sit amet consectetur.'], jawaban:''},
    {id:5, judul:'Soal 5', soal:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', pilihan:['A. Lorem ipsum dolor sit amet consectetur.', 'B. Lorem ipsum dolor sit amet consectetur.', 'C. Lorem ipsum dolor sit amet consectetur.', 'D. Lorem ipsum dolor sit amet consectetur.', 'E. Lorem ipsum dolor sit amet consectetur.'], jawaban:''},
  ]

  const [index, setIndex] = useState(0)
  const [select, setSelect] = useState('')
  const [numCard, setNumCard] = useState(false)

  const handleSelect = (newSelect) => {
    setSelect(newSelect)
  }

  const handleClick = (newIndex) => {
    setIndex(newIndex)
    setSelect('')
  }

  const handleNumCard = () => {
    setNumCard(!numCard)
  }

  return (
    <div className='w-full px-10 md:px-28 pt-36 pb-20'>
      <h1 className='text-white'>{Tryout} : {subTryout}</h1>
      <div className='flex md:hidden justify-end w-full pt-5 pb-3'>
        <TimerCard waktu={2} />
      </div>
      <div className='md:grid grid-cols-3 gap-3 w-full md:py-8'>
        <div className='col-start-1 col-end-3'>
          <QuestionCard allData={data} data={data[index]} index={index} select={select} handleSelect={handleSelect} handleClick={handleClick} handleNumCard={handleNumCard} />
        </div>
        <div className='hidden md:flex'>
          <div className='flex-none w-full'>
            <TimerCard waktu={2} />
            <NumberCard data={data} index={index} select={select} handleClick={handleClick} button={'Submit Jawaban'} />
          </div>
        </div>
      </div>
      <div onClick={handleNumCard} className={numCard ? 'fixed right-0 top-0 w-full h-screen bg-black/25' : ''} />
      <div className={numCard ? 'fixed left-1/2 bottom-0 translate-x-[-50%] translate-y-[-100%] w-[60%]' : 'hidden'}>
        <NumberCard data={data} index={index} select={select} handleClick={handleClick} button={'Submit Jawaban'} />
      </div>
    </div>
  )
}
