import Image from "next/image";

function Avatar({ url, className }) {
  return (
    <Image
      className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      height={40}
      width={40}
      src={url}
      alt="image"
    />
  );
}

export default Avatar;
