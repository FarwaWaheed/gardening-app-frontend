import FeatureCard from './FeatureCard';
import Morefeature1 from '../assets/Morefeature1.jpg';
import Morefeature4 from '../assets/Morefeature4.jpg';


const features = [
  {
    title: 'The Ultimate Guide to planning, nurturing, and maintaining a thriving garden',
    button: 'Dive In',
    image: Morefeature1
  },
  {
    title: 'Plant identification guides, garden planners, and disease diagnosis assistance.',
    button: 'Discover Now',
    image: Morefeature4
  }
];

export default function MoreFeaturesSection() {
  return (
    <section className="py-18 px-4 text-center">
      <h2 className="text-xl font-semibold mb-6">More Features</h2>
      <div className="flex flex-wrap justify-center gap-x-8">
        {features.map((feat, idx) => (
          <FeatureCard key={idx} {...feat} />
        ))}
      </div>
    </section>
  );
}
