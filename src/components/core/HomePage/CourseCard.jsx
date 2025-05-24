import React from 'react'
// Importing React Icons
import { MdPlayLesson } from "react-icons/md";
import { ImUsers } from "react-icons/im";


const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
    return (
      <div
        className={`w-[360px] lg:w-[30%] ${
          currentCard === cardData?.heading
            ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
            : "bg-richblack-800"
        }  text-richblack-25 h-[300px] box-border cursor-pointer rounded-md transition-all duration-200 hover:scale-95 hover:drop-shadow-none`}
        onClick={() => setCurrentCard(cardData?.heading)}
        >
          <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
            <div
            className={` ${
               currentCard === cardData?.heading && "text-richblack-800"
              } font-semibold text-[20px]`}
            >
              {cardData?.heading}
            </div>
  
            <div className="text-richblack-400">{cardData?.description}</div>
          </div>
  
          <div
          className={`flex justify-between ${
            currentCard === cardData?.heading ? "text-blue-400" : "text-richblack-400"
            } px-6 py-3 font-medium`}
          >
          {/* Level */}
          <div className="flex items-center gap-2 text-[16px]">
            <ImUsers />
            <p>{cardData?.level}</p>
          </div>
  
          {/* Flow Chart */}
          <div className="flex items-center gap-2 text-[16px]">
            <MdPlayLesson />
            <p>{cardData?.lessionNumber} Lesson</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseCard;