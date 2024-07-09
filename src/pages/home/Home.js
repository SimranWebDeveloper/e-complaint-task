import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Button } from "../../components/Button";
import { CiFilter } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { SearchForm } from "../../components/SearchForm";
import { CiSearch } from "react-icons/ci";

export const Home = () => {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <div className="bg-[#F9F9F9] container-custom  h-screen">
      <div className="flex flex-wrap space-x-4 justify-start py-8 ">
        <Button
          icon={<FaPlus />}
          text={"Yeni şikayət yarat"}
          style={
            "flex gap-2 items-center justify-between rounded-default bg-blue_default text-white text-base px-4 py-1 "
          }
          onClick={handleClick}
        />

        <Button
          icon={<CiFilter />}
          text={"Ətraflı axtarış"}
          style={
            "flex gap-2 items-center justify-between rounded-default bg-blue_default text-white text-base px-4 py-1 "
          }
          onClick={handleClick}
        />

        <Button
          icon={<AiOutlineInfoCircle />}
          text={"Təlimat"}
          style={
            "flex gap-2 items-center justify-between rounded-default bg-blue_default text-white text-base px-4 py-1 "
          }
          onClick={handleClick}
        />
      </div>

      <div className="flex flex-wrap justify-start items-center gap-4 ">
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Şikayət nömrəsi daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Fəaliyyət sahəsi daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Şirkət  daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Mövzu  daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Abunəçi kodu  daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Status daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Tarix daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Əməliyyatlar daxil edin"}
          onClick={handleClick}
        />
      </div>

      {/* table ---------- */}
      <div className="flex flex-col items-center my-8">
        <div className="overflow-x-auto w-full">
          {/* titile start ------------ */}
          <div className="min-w-full bg-blue_default text-white rounded-t-lg">
            <div className="h-[73px] grid grid-cols-8 justify-between items-center  font-pop font-semibold text-[14px]">
              <div className=" text-center border-r">Şikayət nömrəsi</div>
              <div className=" text-center border-r">Fealiyyət sahesi</div>
              <div className=" text-center border-r">Şirkət</div>
              <div className=" text-center border-r">Mövzu</div>
              <div className=" text-center border-r">Abunəçi kodu</div>
              <div className=" text-center border-r">Status</div>
              <div className=" text-center border-r">Tarix</div>
              <div className=" text-center border-r">Əməliyyatlar</div>
            </div>
          </div>
          {/* titile end ------------ */}

          <div className="text-default font-pop text-[#212529] bg-white text-center p-8">
            Heç bir şikayət əlavə edilməyib...
          </div>
        </div>
        {/* table end-------- */}
        <div className="w-full flex justify-between items-center ">
          <div className="mt-4 text-balance font-pop text-default">
            Gösterilen: 0-0, cəmi 0 (0 səhifə)
          </div>
          <div className="flex mt-4">
            <button className="bg-blue_default  text-white p-2 rounded-l">
              ‹
            </button>
            <button className="bg-blue_default text-white p-2 rounded-r">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
