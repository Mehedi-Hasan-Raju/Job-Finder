import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center bg-gradient-to-r from-[#2A4B7C] to-[#1AA6B7] py-16 text-white'>
            <div className='flex flex-col gap-5 my-10 container mx-auto px-4'>
                <span className='mx-auto px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-[#FFFFF] font-medium'>
                Where Dreams Comes true
                </span>
                <h1 className='text-5xl font-bold'>
                    Search, Apply & <br /> 
                    Get Your <span className='text-[#D3F0F3]'>Dream Jobs</span>
                </h1>
                <p className='text-[#E0E0E0] max-w-2xl mx-auto'>
                Search, apply, and get hired faster. Discover opportunities from top companies and take control of your career journey today
                </p>
                <div className='flex w-full md:w-[40%] shadow-lg border-2 border-[#1AA6B7] pl-3 rounded-full items-center gap-4 mx-auto bg-white'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-[#2D2D2D]'
                    />
                    <Button 
                        onClick={searchJobHandler} 
                        className="rounded-r-full bg-[#1AA6B7] hover:bg-[#168696] text-white"
                    >
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection