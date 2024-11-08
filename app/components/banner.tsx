import Image from "next/image";
import banner from "@/assets/misc/Banner.png";

const Banner = () => {
  return (
    <>
      <div className="flex justify-center">
        <Image
          className="mx-20 rounded-lg border-2 border-background"
          src={banner}
          width={1250}
          alt="image"
        />
      </div>
    </>
  );
};

export default Banner;
