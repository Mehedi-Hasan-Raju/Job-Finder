import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="my-16">
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              {category.map((cat, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Button 
                    onClick={() => searchJobHandler(cat)} 
                    variant="outline" 
                    className="rounded-full bg-[#D3F0F3] text-[#2D2D2D] hover:bg-[#2A4B7C] hover:text-white transition-colors border-2 border-[#1AA6B7]/20"
                  >
                    {cat}
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#1AA6B7] text-white hover:bg-[#168696]" />
            <CarouselNext className="bg-[#1AA6B7] text-white hover:bg-[#168696]" />
          </Carousel>
        </div>
      )
    }

export default CategoryCarousel