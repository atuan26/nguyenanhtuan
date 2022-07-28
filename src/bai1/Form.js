import React, { useState } from "react";
const tinhtp = require("./tinh_tp.json");
const quanhuyen = require("./quan_huyen.json");
const data = require("./data.json");

const priceList = [
  { label: "Dưới 1 triệu" },
  { label: "1 triệu - 2 triệu" },
  { label: "2 triệu - 3 triệu" },
  { label: "3 triệu - 5 triệu" },
  { label: "5 triệu - 7 triệu" },
  { label: "7 triệu - 10 triệu" },
];
const areaList = [
  { label: "Dưới 20 m2" },
  { label: "20 m2 - 30 m2" },
  { label: "30 m2 - 50 m2" },
  { label: "50 m2 - 70 m2" },
  { label: "70 m2 - 80 m2" },
];

const Form = (props) => {
  const [city, setCity] = useState();
  const [quanHuyen, setQuanHuyen] = useState();
  const [price, setprice] = useState();
  const [area, setarea] = useState();

  return (
    <>
      <form className="w-full flex gap-6 bg-[#ffdc9a] rounded-md p-6">
        <div className="w-[180px] flex flex-col text-black  gap-2">
          Tỉnh thành
          <select
            value={city || ""}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 round-sm"
          >
            {Object.values(tinhtp).map((t) => (
              <>
                <option value={t.code} key={t.code} className="w-[80px]">
                  {t.name_with_type}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="w-[180px] flex flex-col text-black  gap-2">
          Quận huyện
          <select
            value={quanHuyen}
            onChange={(e) => setQuanHuyen(e.target.value)}
            className="w-full p-2 round-sm"
          >
            {Object.values(quanhuyen)
              .filter((t) => t.parent_code === city)
              .map((t) => (
                <>
                  <option value={t.code} key={t.code} className="w-[80px]">
                    {t.name_with_type}
                  </option>
                </>
              ))}
          </select>
        </div>
        <div className="w-[180px] flex flex-col text-black  gap-2">
          Khoảng giá
          <select
            value={price}
            onChange={(e) => setprice(e.target.value)}
            className="w-full p-2 round-sm"
          >
            {priceList.map((t, i) => (
              <>
                <option value={t.label} key={i} className="w-[80px]">
                  {t.label}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="w-[180px] flex flex-col text-black  gap-2">
          Diện tích
          <select
            value={area}
            onChange={(e) => setarea(e.target.value)}
            className="w-full p-2 round-sm"
          >
            {areaList.map((t, i) => (
              <>
                <option value={t.label} key={i} className="w-[80px]">
                  {t.label}
                </option>
              </>
            ))}
          </select>
        </div>
        <button className="bg-[#ffa80f] px-4 py-2 text-white font-semibold rounded-md max-h-[40px] self-end">
          Lọc tin
        </button>
      </form>
      <div className="w-full mt-10">
        {data.map((d, i) => {
          return (
            <div
              className=" flex border-red-500 border bg-[#fff9f3] w-9/12  mx-auto  px-2 py-4 gap-4"
              key={i}
            >
              <img src={d.thumbnail} className="w-40 h-40" />
              <div className="space-y-2 p-4">
                <p className="text-red-500 font-semibold">{d.title}</p>
                <p className="text-green-600 font-semibold">
                  {d.price.toLocaleString()}/tháng
                </p>
                <p className="text-gray-800">
                  Diện tích:
                  <span className="text-black ">
                    {d.area}m<sup>2</sup>
                  </span>
                </p>
                <p>
                  Khu vực:{" "}
                  <span className="text-blue-700">
                    {
                      Object.values(quanhuyen).filter(
                        (q) => q.code === d.district
                      )[0]?.path_with_type
                    }
                  </span>
                </p>
                <p>{d.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Form;
