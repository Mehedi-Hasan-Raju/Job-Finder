import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
const LatestJobCards = ({ job }) => {
    
    const navigate = useNavigate();
    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='p-5 rounded-md shadow-xl bg-white border border-[#1AA6B7]/20 cursor-pointer hover:border-[#1AA6B7]/40 transition-colors'
        >
            <div>
                <h1 className='font-medium text-lg text-[#2A4B7C]'>{job?.company?.name}</h1>
                <p className='text-sm text-[#4A4A4A]'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2 text-[#2D2D2D]'>{job?.title}</h1>
                <p className='text-sm text-[#4A4A4A]'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='bg-[#1AA6B7]/10 text-[#1AA6B7] font-bold border-[#1AA6B7]/20'>
                    {job?.position} Positions
                </Badge>
                <Badge className='bg-[#1AA6B7]/10 text-[#1AA6B7] font-bold border-[#1AA6B7]/20'>
                    {job?.jobType}
                </Badge>
                <Badge className='bg-[#FF6B6B]/10 text-[#FF6B6B] font-bold border-[#FF6B6B]/20'>
                    {job?.salary}LPA
                </Badge>
            </div>
        </div>
    )
}

export default LatestJobCards