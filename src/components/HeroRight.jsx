import cutout2 from '../assets/cutout2.png';

export default function HeroRight() {
  return (
    <div className="flex-1 relative">
      {/* Main plant image */}
      <img src={cutout2} alt="Plant" className="lg:w-2/3  h-auto relative z-10" />
      {/* Quote Card - Positioned to the right of the plant */}
      <div className="absolute top-50 right-3  bg-white shadow-md rounded-xl px-8 py-4 w-100 z-0">
        <h3 className="text-lg text-right font-semibold text-gray-800">
          Planting a seed today,
        </h3>
        <h3 className="text-lg text-right font-semibold text-gray-800">
        is believing in tomorrow.
        </h3>
        
        <p className="text-sm text-right text-gray-600 mt-2">
          Every garden begins with a single step, and with care and patience, it blossoms into something beautiful.
        </p>
      </div>
    </div>
  );
}
