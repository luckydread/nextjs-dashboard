'use client'
import React, {useState} from 'react'
import { ArrowRightIcon } from '@heroicons/react/20/solid';

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function Page() {
    const [date,setDate] = useState("")
    const [slotId,setSlotId] = useState(0)

  const searchParams = useSearchParams()

  const createBooking = (event: Event) => {
    const bookingDate =  searchParams.get('date')
   // const id = event.target.id;
    //setDate(bookingDate)
    //setSlotId(id)
    console.log("This is the id:" + slotId)
    console.log("This is the booking date" + date)
  //setBooking()

  }
/**
 * className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8"
 * 
 * 
 *  <div className="pt-64 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Please choose a slot</h2>
          </div>
          <div className="grid grid-cols-1 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className=''>
                <h3  className='bg-emerald-400 text-center border-black border-2 font-semibold' id="1" >07:00 - 11:00</h3>
                <h3 className='bg-rose-600 text-center border-black border-2 font-semibold' id="2" >11:00 - 14:00</h3>
                <h3 className='bg-emerald-400 text-center border-black border-2 font-semibold' id="3" >14:00 - 18:00</h3>
                <h3 className='bg-rose-600 text-center border-black border-2 font-semibold' id="4" >18:00 - 22:00</h3>
              </div>
          </div>
            <div className="grid grid-cols-2 gap-4 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div>
                      <button  type="submit" className="flex w-full justify-center rounded-md bg-emerald-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book</button>
                </div>
                <div>
                  <Link href={"/dashboard"}>
                  <button  type="submit" className="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancel</button>
                  </Link>
                </div>
            </div>
</div> 
 * 
 */

  return(
    <>
   
    <div className="grid h-screen place-items-center">
      <div className=' bg-gray-50 pb-14 pl-14 pr-14'>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Please choose a slot</h2>
          </div>
  

          <div className="grid grid-cols-1 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className=''>
                <h3  className='bg-emerald-400 text-center border-black border-2 font-semibold' id="1" >07:00 - 11:00</h3>
                <h3 className='bg-rose-600 text-center border-black border-2 font-semibold' id="2" >11:00 - 14:00</h3>
                <h3 className='bg-emerald-400 text-center border-black border-2 font-semibold' id="3" >14:00 - 18:00</h3>
                <h3 className='bg-rose-600 text-center border-black border-2 font-semibold' id="4" >18:00 - 22:00</h3>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div>
                      <button  type="submit" className="flex w-full justify-center rounded-md bg-emerald-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book</button>
                </div>
                <div>
                  <Link href={"/dashboard"}>
                  <button  type="submit" className="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancel</button>
                  </Link>
                </div>
            </div>
      

      </div>
    </div>
    </>
)
}
/*
function LoginButton() {
  return (
    <Button className="mt-4 w-full">
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}*/