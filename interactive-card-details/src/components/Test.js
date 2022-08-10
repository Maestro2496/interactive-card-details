import image from "../assets/bg-card-back.png"
import image2 from "../assets/bg-card-front.png"
export default function Test() {
  return (
    <div className="relative py-16 bg-white">
      <div
        className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto bg-indigo-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="-right-8 aspect-w-10 w-[90%] aspect-h-5 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="object-cover object-center rounded-3xl shadow-2xl"
                  src={image}
                  alt=""
                />
              </div>
              <div className="-top-[50%] aspect-w-10 w-[90%] aspect-h-5 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="object-cover object-center rounded-3xl shadow-2xl"
                  src={image2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
