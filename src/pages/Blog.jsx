import React, { useState } from "react";
import HeroSection from "../componenets/HeroSection";
import { assets } from "../assets/assets";
import DonateSection from "../componenets/DonateSection";
import Providers from "../componenets/Providers";
import { MyButton } from "../componenets/MyButton";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const eventsData = [
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
    {
      date: "05 AUG",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Everyone, Let’s Run For The Humanity This Time",
      time: "Two days ago",
      location: "Bwp, Pak",
    },
  ];

  // Pagination logic
  const itemsPerPage = 8;
  const totalPages = Math.ceil(eventsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEvents = eventsData.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <HeroSection
        title="Our Blogs"
        breadcrumb="Blog"
        image={assets.project_1}
      />

      {/* Events Section */}
      <section className="w-full bg-[#FEF4EB] gap-[50px] px-[80px] py-[100px] flex flex-col items-start">
        <div className="w-full flex gap-8 justify-start mb-12 grid grid-cols-4 transition-all duration-700 ease-in-out">
          {currentEvents.map((event, idx) => (
            <div
              key={idx}
              className="relative rounded-tr-[40px] h-[350px] transition-all duration-500 ease-in-out transform hover:scale-105"
            >
              {/* Date Badge */}
              <div className="absolute left-6 -top-4 z-10">
                <MyButton
                  label={event.date}
                  style={{
                    backgroundColor: "#00A676",
                    color: "white",
                    cursor: "default",
                  }}
                  className="pointer-events-none"
                />
              </div>
              {/* Image */}
              <img
                src={event.img}
                alt={event.title}
                className="h-full w-full object-cover rounded-tr-[40px]"
              />
              {/* Overlay for dark effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none rounded-tr-[40px]" />
              {/* Card Content - overlayed */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end z-20">
                <h3
                  className="text-white text-[20px] font-semibold mb-2 font-inria-serif"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  {event.title}
                </h3>
                <div className="flex items-center gap-4 text-white text-sm opacity-90">
                  <span className="flex items-center gap-1">
                    <span role="img" aria-label="calendar">
                      📅
                    </span>{" "}
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <span role="img" aria-label="location">
                      📍
                    </span>{" "}
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 w-full">
            {/* Previous Button */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-12 h-16 rounded-br-[20px] flex items-center justify-center rotate-180 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 ${
                currentPage === 1
                  ? "bg-white text-[#FF8363] cursor-not-allowed opacity-50"
                  : "bg-white text-[#FF8363] hover:bg-[#FF8363] hover:text-white shadow-lg hover:shadow-xl"
              }`}
            >
              ❯
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-12 h-16 rounded-tl-[20px] flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 ${
                      currentPage === page
                        ? "bg-white text-black shadow-lg scale-105"
                        : "bg-white text-[#FF8363] hover:bg-[#FF8363] hover:text-white shadow-md hover:shadow-lg"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-12 h-16 rounded-tl-[20px] flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 ${
                currentPage === totalPages
                  ? "bg-white text-[#FF8363] cursor-not-allowed opacity-50"
                  : "bg-white text-[#FF8363] hover:bg-[#FF8363] hover:text-white shadow-lg hover:shadow-xl"
              }`}
            >
              ❯
            </button>
          </div>
        )}
      </section>

      <DonateSection />
      <Providers />
    </div>
  );
};

export default Blog;
