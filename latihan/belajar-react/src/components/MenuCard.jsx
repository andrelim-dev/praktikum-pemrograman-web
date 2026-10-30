import StarIcon from "../assets/icons/star.png";

const formatRupiah = (value) => `Rp${value.toLocaleString("id-ID")}`;

// TODO: terima props dari Menu
export default function MenuCard() {
  return (
    <article className="flex flex-col bg-white shadow-md">
      <div className="h-52 w-full overflow-hidden rounded-t-md bg-brand/10">
        {/* TODO: masukin url dan alt untuk elemen img */}
        <img
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.visibility = "hidden";
          }}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-base">
            <img src={StarIcon} className="w-4 h-4" alt="Star Icons" />

            {/* TODO: masukin nilai rating */}
          </span>
          <span className="font-heading text-lg font-semibold text-brand">
            {/* TODO: masukin harga */}
          </span>
        </div>

        <h3 className="mt-4 font-heading text-xl font-semibold">
          {/* TODO: masukin nama menu */}
        </h3>

        <ul className="mt-3 mb-5 flex flex-wrap gap-x-4 text-base">
          {/* TODO: masukin komposisi */}
        </ul>

        <button
          type="button"
          className="group mt-auto flex w-full items-center justify-center cursor-pointer rounded-md gap-2 border border-brand bg-white px-4 py-3 text-lg font-medium text-brand transition hover:bg-brand hover:text-white"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-brand group-hover:text-white"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="none"
            >
              <path
                d="M78 4789 c-43 -22 -78 -81 -78 -129 0 -50 35 -107 80 -130 37 -19 58
-20 444 -20 l406 0 5 -22 c13 -53 535 -2408 535 -2413 0 -2 -19 -14 -42 -26
-24 -12 -68 -47 -98 -78 -134 -138 -165 -328 -82 -505 58 -124 183 -220 321
-246 30 -5 117 -10 195 -11 109 -1 131 -3 97 -10 -227 -44 -391 -278 -353
-505 41 -245 270 -415 508 -376 196 32 344 180 376 376 38 227 -126 461 -353
505 -26 5 375 9 971 9 596 0 997 -4 971 -9 -227 -44 -391 -278 -353 -505 32
-196 180 -344 376 -376 238 -39 467 131 508 376 38 227 -126 461 -353 505 -34
7 -11 9 99 10 122 1 149 4 182 21 45 23 80 80 80 130 0 50 -35 107 -80 130
-39 20 -56 20 -1430 20 -1374 0 -1391 0 -1430 20 -45 23 -80 80 -80 130 0 45
35 107 73 127 30 17 117 18 1439 23 1401 5 1407 5 1434 26 15 11 36 31 46 45
20 26 628 2142 628 2184 0 45 -37 103 -80 125 -39 20 -55 20 -1888 20 l-1849
0 -54 247 c-39 179 -61 257 -79 284 -44 69 -41 69 -578 69 -455 -1 -479 -2
-514 -21z m4688 -896 c-3 -10 -118 -415 -257 -900 l-252 -883 -1243 0 -1244 0
-5 23 c-3 12 -91 407 -195 877 -104 470 -192 865 -195 878 l-5 22 1700 0
c1616 0 1701 -1 1696 -17z m-2746 -3003 c45 -23 80 -80 80 -130 0 -76 -74
-150 -150 -150 -76 0 -150 74 -150 150 0 48 35 107 78 129 48 26 93 26 142 1z
m2120 0 c45 -23 80 -80 80 -130 0 -76 -74 -150 -150 -150 -76 0 -150 74 -150
150 0 48 35 107 78 129 48 26 93 26 142 1z"
              />
            </g>
          </svg>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
