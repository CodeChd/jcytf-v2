import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const Pastors = ({id}) => {
  return (
    <section id={id} className="py-14 min-h-[70vh]">
      <div className="py-8">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-gilLight font-extrabold uppercase text-gray-700">Our Pastors</h3>
          <h2 className="text-7xl non-italic font-gil font-bold mt-2">Meet Our Team</h2>
        </div>

        <main className="">
          <div className="grid grid-cols-3 justify-items-center">
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

          <div className="flex justify-center items-center sml:mt-8 sml:max-w-5xl sml:mx-auto ">
            <div className="relative">
              <Image
                src="/images/pastors/fourth.png"
                width={700}
                height={700}
              />
              <UserInfo
                name="Ptra. Edna Heraldo"
                role="CHRISTIAN EDUCATION PASTOR"
              />
            </div>
            <div className="relative">
              <Image src="/images/pastors/fifth.png" width={700} height={700} />
              <UserInfo name="Ptr. Ronald Zonio" role="ADMINISTRATIVE PASTOR" />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Pastors;
