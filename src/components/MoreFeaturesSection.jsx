import FeatureCard from './FeatureCard';
import plantIdentification from '../assets/MoreFeaturesImages/plantIdentification.jpg';
import plantDisease from '../assets/MoreFeaturesImages/plantDisease.jpg';
import gardenPlanner from '../assets/MoreFeaturesImages/gardenPlanner.jpg';


const features = [
  
  {
    title: 'Plant identification guides',
    description: 'Observe certain characteristics of your plant and master the art of plant identification.',
    button: 'Dive In',
    image: plantIdentification,
    link: '/home/plant-identification-guide',
    isInternal: true,
  },
  {
    title: 'Disease Diagnosis assistance!',
    description: 'Learn how to spot, identify, and treat common plant diseases with fun and ease',
    button: 'Take the Quiz!',
    image: plantDisease,
    link: '/home/disease-diagnosis-quiz',
    isInternal: true
  },
  {
    title: 'The Ultimate Guide to Plan Gardens',
    description: 'Planning, nurturing, and maintaining a thriving garden',
    button: 'Learn More',
    image: gardenPlanner,
    link: 'https://www.gardendesignacademy.co.uk/blog/how-to-plan-your-garden-layout--a-step-by-step-guide',
    isInternal: false
  },
  
  
];

export default function MoreFeaturesSection() {
  return (
    <section className="py-18 px-4 text-center">
      <h2 className="text-xl font-semibold mb-6">More Features</h2>
      <div className="flex flex-wrap justify-center gap-x-12">
    
        {features.map((feat, idx) => (
          <FeatureCard key={idx} {...feat} />
        ))}
     </div>
    </section>
  );
}
