import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import vegplant from '../assets/vegplant.jpg';
import fruitplant from '../assets/fruitplant.jpg';
import flowerplant from '../assets/flowerplant.jpg';

const categories = [
  { name: 'Vegetable Plants', image: vegplant, path:'/home/category/vegetable'},
  { name: 'Fruit Plants', image: fruitplant, path:'/home/category/fruit' },
  { name: 'Flower Plants', image: flowerplant, path:'/home/category/flower' },
];

export default function CategorySection() {
  return (
    <section className="text-center py-16">
      <h2 className="text-2xl font-semibold mb-6">Category</h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {categories.map((cat, idx) => (
            <Link  key={idx} to={cat.path}>
              <CategoryCard name={cat.name} image={cat.image} />
            </Link>
          ))}
      </div>
    </section>
  );
}
