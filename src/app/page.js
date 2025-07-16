import Image from "next/image";

export default function Home() {
  return (
    <main className="container flex flex-col items-center">
      <div className="p-4 w-[320px] h-[497px] bg-white rounded-8 shadow-lg">
        <div className="flex justify-center bg-blue-500 rounded-8 w-[288px] h-[288px]">
          <Image src="/image-qr-code.png" alt="QR Code" width={288} height={288} className="rounded-8" />
        </div>
        <div className="flex flex-col items-center m-4">
          <h1 className="heading">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-info">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>

    </main>
  );
}
