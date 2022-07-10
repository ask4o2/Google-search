import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { XIcon } from "@heroicons/react/solid";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header({}) {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) {
      return false;
    }

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form className="flex border flex-grow border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-ful focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 text-gray-500 mr-3 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden onClick={search}>
            submit
          </button>
        </form>

        <Avatar
          url="https://media-exp1.licdn.com/dms/image/C5603AQGPuMl57nd_4Q/profile-displayphoto-shrink_200_200/0/1641757539844?e=1660780800&v=beta&t=SimjQPOemagSFcQGpJcN0uiD47Gtiig7ugZ2oZH1U5M"
          className="ml-auto"
        />
      </div>
      {/* header options */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
