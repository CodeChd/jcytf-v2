import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const UserInfo = ({ name, role, href = "/", className = "" }) => {
  return (
    <div
      className={`${className} text-center absolute left-1/2 -translate-x-1/2 top-[85%]`}
    >
      <p className="font-semibold text-2xl mb-2">{name}</p>
      <p className="font-gilLight font-extrabold">{role}</p>
      <Link
        href={href}
        className="p-2 mt-2 px-8 inline-block border-solid border-amber-900 text-amber-900 font-semibold uppercase border-2 rounded-full "
      >
        Email
      </Link>
    </div>
  );
};

const MobileUserInfo = ({ name, role, href = "/", className = ""}) => {
  // absolute left-1/2 -translate-x-1/2 top-[50%]
  return (
    <div
      className={`${className} text-center   `}
    >
      <p className="font-semibold text-2xl mb-2">{name}</p>
      <p className="font-gilLight font-extrabold">{role}</p>
      <Link
        href={href}
        className="p-2 mt-2 px-8 inline-block border-solid border-amber-900 text-amber-900 font-semibold uppercase border-2 rounded-full "
      >
        Email
      </Link>
    </div>
  );
};

const Pastors = ({ id }) => {
  return (
    <section id={id} className="py-14 min-h-[70vh]">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <h3 className=" xs:text-xl text-2xl font-gilLight font-extrabold uppercase text-gray-700">
            Our Pastors
          </h3>
          <h2 className="xxs:text-3xl xs:text-4xl sml:text-6xl text-7xl non-italic font-gil font-bold mt-2">
            Meet Our Team
          </h2>
        </div>


        {/* desktop */}
        <main >
          <div className="grid grid-cols-3 justify-items-center xxl:hidden">
            <div className="inline-block relative">
              <Image
                src="/images/pastors/first.png"
                width={700}
                height={700}
                className=""
              />
              <UserInfo name="Ptra. Edna Te" role="PULPIT & HEAD PASTOR" />
            </div>
            <div className="inline-block relative">
              <Image
                src="/images/pastors/second.png"
                width={700}
                height={700}
                className=""
              />
              <UserInfo
                name="Ptr. Ruden Barcelona"
                role="CARE PASTOR"
                className="left-[52%]"
              />
            </div>
            <div className="inline-block relative">
              <Image
                src="/images/pastors/third.png"
                width={700}
                height={700}
                className=""
              />
              <UserInfo name="Ptra. Almira Zonio" role="WORSHIP PASTOR" />
            </div>
          </div>

          <div className="flex justify-center items-center sml:mt-8 xxl:max-w-4xl sml:max-w-5xl sml:mx-auto  xxl:hidden">
            <div className="relative">
              <Image
                src="/images/pastors/fourth.png"
                width={650}
                height={700}
              />
              <UserInfo
                name="Ptra. Edna Heraldo"
                role="CHRISTIAN EDUCATION PASTOR"
              />
            </div>
            <div className="relative">
              <Image src="/images/pastors/fifth.png" width={650} height={700} />
              <UserInfo name="Ptr. Ronald Zonio" role="ADMINISTRATIVE PASTOR" />
            </div>
          </div>



        {/* mobile */}
        <div className="menu:hidden ">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper md:h-[480px] md:max-w-xl max-w-2xl">
            <SwiperSlide>
              <Image
                src="/images/pastors/first.png"
                alt="PULPIT & HEAD PASTOR"
                priority
                width={650}
                height={700}
              />
                
              <MobileUserInfo name="Ptra. Edna Te" role="PULPIT & HEAD PASTOR" />
              
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/pastors/second.png"
                alt="CARE PASTOR"
                priority
                width={650}
                height={700}
              />
              <MobileUserInfo
                name="Ptr. Ruden Barcelona"
                role="CARE PASTOR"
              
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/pastors/third.png"
                alt="WORSHIP PASTOR"
                priority
                width={650}
                height={700}
              />
              <MobileUserInfo name="Ptra. Almira Zonio" role="WORSHIP PASTOR"/>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/pastors/fourth.png"
                alt="CHRISTIAN EDUCATION PASTOR"
                priority
                width={650}
                height={700}
                />

              <MobileUserInfo
                name="Ptra. Edna Heraldo"
                role="CHRISTIAN EDUCATION PASTOR"
              
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/pastors/fifth.png"
                alt="ADMINISTRATIVE PASTOR"
                priority
                width={650}
                height={700}
              />

              <MobileUserInfo name="Ptr. Ronald Zonio" role="ADMINISTRATIVE PASTOR"/>
            </SwiperSlide>
          </Swiper>
        </div>
                </main>
      </div>
    </section>
  );
};

export default Pastors;
