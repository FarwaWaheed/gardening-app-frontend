import tomatoImg from '../assets/plants/tomato.jpg';
import spinachImg from '../assets/plants/spinach.jpg';
import carrotImg from '../assets/plants/carrot.jpg';
import cucumberImg from '../assets/plants/cucumber.jpg';
import lettuceImg from '../assets/plants/lettuce.jpg';
import chiliImg from '../assets/plants/chilli.jpg';
import mango from '../assets/fruits/mango.jpg';
import banana from '../assets/fruits/banana.jpg';
import apple from '../assets/fruits/apple.jpg';
import pomegranate from '../assets/fruits/pomegranate.jpg';
import orange from '../assets/fruits/orange.jpg';
import guava from '../assets/fruits/guava.jpg';
import rose from '../assets/flowers/rose.jpg';
import marigold from '../assets/flowers/marigold.jpg';
import hibiscus from '../assets/flowers/hibiscus.jpg';
import jasmine from '../assets/flowers/jasmine.jpg';
import sunflower from '../assets/flowers/sunflower.jpg';
import tulip from '../assets/flowers/tulip.jpg';


const plants = [
    // VEGETABLES
    {
        id: 'tomato',
      name: 'Tomato',
      scientificName: 'Solanum lycopersicum',
      category: 'vegetable',
      climate: 'Warm',
      soil: 'Loamy',
      sunlight: 'Full Sun',
      wateringFrequency: '2-3 times a week',
      growthType: 'Bush',
      description: 'Tomatoes thrive in warm climates and need consistent watering and sunlight to yield juicy fruits.',
      imageUrl: tomatoImg,
    },
    {
        id: 'spinach',
      name: 'Spinach',
      scientificName: 'Spinacia oleracea',
      category: 'vegetable',
      climate: 'Cool',
      soil: 'Well-drained loamy',
      sunlight: 'Partial Sun',
      wateringFrequency: 'Frequent',
      growthType: 'Leafy',
      description: 'Spinach is a leafy green vegetable rich in nutrients, ideal for cool seasons and shaded areas.',
      imageUrl: spinachImg
    },
    {
        id: 'carrot',
      name: 'Carrot',
      scientificName: 'Daucus carota',
      category: 'vegetable',
      climate: 'Cool',
      soil: 'Sandy loam',
      sunlight: 'Full Sun',
      wateringFrequency: 'Regular',
      growthType: 'Root',
      description: 'Carrots are root vegetables best grown in loose soil during cooler weather.',
      imageUrl: carrotImg
    },
    {
        id: 'cucumbber',
      name: 'Cucumber',
      scientificName: 'Cucumis sativus',
      category: 'vegetable',
      climate: 'Warm',
      soil: 'Fertile, well-drained',
      sunlight: 'Full Sun',
      wateringFrequency: 'Frequent',
      growthType: 'Vine',
      description: 'Cucumbers need space to spread or trellis support. They thrive in warm climates with plenty of moisture.',
      imageUrl: cucumberImg
    },
    {
        id: 'lettuce',
      name: 'Lettuce',
      scientificName: 'Lactuca sativa',
      category: 'vegetable',
      climate: 'Cool',
      soil: 'Moist, well-drained',
      sunlight: 'Partial Sun',
      wateringFrequency: 'Regular',
      growthType: 'Leafy',
      description: 'Lettuce is fast-growing and ideal for cooler months, requiring moist soil and partial sun.',
      imageUrl: lettuceImg
    },
    {
        id: 'chilli',
      name: 'Chilli',
      scientificName: 'Capsicum annuum',
      category: 'vegetable',
      climate: 'Warm',
      soil: 'Well-drained loamy',
      sunlight: 'Full Sun',
      wateringFrequency: 'Moderate',
      growthType: 'Shrub',
      description: 'Chillies need warmth and sunlight, and their spicy fruits are harvested once fully ripe.',
      imageUrl: chiliImg
    },
  
    // FRUITS
    {
        id: 'mango',
      name: 'Mango',
      scientificName: 'Mangifera indica',
      category: 'fruit',
      climate: 'Tropical',
      soil: 'Well-drained sandy loam',
      sunlight: 'Full Sun',
      wateringFrequency: 'Weekly',
      growthType: 'Tree',
      description: 'Mangoes are tropical fruits requiring full sun and space to grow into large trees.',
      imageUrl: mango
    },
    {
        id: 'banana',
      name: 'Banana',
      scientificName: 'Musa spp.',
      category: 'fruit',
      climate: 'Tropical',
      soil: 'Fertile, moist',
      sunlight: 'Full Sun',
      wateringFrequency: 'Frequent',
      growthType: 'Herbaceous plant',
      description: 'Bananas grow from large herbaceous plants and require warm, humid climates.',
      imageUrl: banana
    },
    {
        id: 'apple',
      name: 'Apple',
      scientificName: 'Malus domestica',
      category: 'fruit',
      climate: 'Temperate',
      soil: 'Well-drained loamy',
      sunlight: 'Full Sun',
      wateringFrequency: 'Regular',
      growthType: 'Tree',
      description: 'Apples are temperate-climate fruits grown on trees and are a staple in many home orchards.',
      imageUrl: apple
    },
    {
        id: 'pomegranate',
      name: 'Pomegranate',
      scientificName: 'Punica granatum',
      category: 'fruit',
      climate: 'Subtropical',
      soil: 'Loamy to sandy',
      sunlight: 'Full Sun',
      wateringFrequency: 'Moderate',
      growthType: 'Shrub',
      description: 'Pomegranates grow well in semi-arid conditions and produce nutrient-rich red fruits.',
      imageUrl: pomegranate
    },
    {
        id: 'orange',
      name: 'Orange',
      scientificName: 'Citrus sinensis',
      category: 'fruit',
      climate: 'Subtropical',
      soil: 'Well-drained loamy',
      sunlight: 'Full Sun',
      wateringFrequency: 'Weekly',
      growthType: 'Tree',
      description: 'Oranges are juicy citrus fruits grown on medium-sized trees and need plenty of sun.',
      imageUrl: orange
    },
    {
        id: 'guava',
      name: 'Guava',
      scientificName: 'Psidium guajava',
      category: 'fruit',
      climate: 'Tropical to Subtropical',
      soil: 'Well-drained sandy',
      sunlight: 'Full Sun',
      wateringFrequency: 'Moderate',
      growthType: 'Tree',
      description: 'Guavas are hardy fruit-bearing trees producing vitamin-rich fruits throughout the year.',
      imageUrl: guava
    },
  
    // FLOWERS
    {
        id: 'rose',
      name: 'Rose',
      scientificName: 'Rosa',
      category: 'flower',
      climate: 'Temperate',
      soil: 'Loamy',
      sunlight: '6+ hours of sun',
      wateringFrequency: 'Twice a week',
      growthType: 'Shrub',
      description: 'Roses are classic ornamental flowers with fragrant blooms and many varieties.',
      imageUrl: rose
    },
    {
        id: 'marigold',
      name: 'Marigold',
      scientificName: 'Tagetes',
      category: 'flower',
      climate: 'Warm',
      soil: 'Well-drained',
      sunlight: 'Full Sun',
      wateringFrequency: 'Regular',
      growthType: 'Bush',
      description: 'Marigolds are cheerful yellow-orange blooms that deter pests and are used in many cultural ceremonies.',
      imageUrl: marigold
    },
    {
        id: 'hibiscus',
      name: 'Hibiscus',
      scientificName: 'Hibiscus rosa-sinensis',
      category: 'flower',
      climate: 'Tropical',
      soil: 'Moist, well-drained',
      sunlight: 'Full Sun',
      wateringFrequency: 'Frequent',
      growthType: 'Shrub',
      description: 'Hibiscus blooms are large and vibrant, attracting pollinators and making great hedges.',
      imageUrl: hibiscus
    },
    {
        id: 'jasmine',
      name: 'Jasmine',
      scientificName: 'Jasminum',
      category: 'flower',
      climate: 'Warm',
      soil: 'Well-drained sandy loam',
      sunlight: 'Full Sun to Partial Shade',
      wateringFrequency: 'Regular',
      growthType: 'Climber',
      description: 'Jasmine produces sweet-smelling white flowers and is often grown on trellises.',
      imageUrl: jasmine
    },
    {
        id: 'sunflower',
      name: 'Sunflower',
      scientificName: 'Helianthus annuus',
      category: 'flower',
      climate: 'Warm',
      soil: 'Well-drained sandy loam',
      sunlight: 'Full Sun',
      wateringFrequency: 'Moderate',
      growthType: 'Tall',
      description: 'Sunflowers are tall, bright, and follow the sun. They are great pollinator attractors.',
      imageUrl: sunflower
    },
    {
        id: 'tulip',
      name: 'Tulip',
      scientificName: 'Tulipa',
      category: 'flower',
      climate: 'Cool',
      soil: 'Well-drained sandy',
      sunlight: 'Full Sun',
      wateringFrequency: 'Moderate',
      growthType: 'Bulb',
      description: 'Tulips bloom in spring and are grown from bulbs planted in cool months.',
      imageUrl: tulip
    }
  ];
  
  export default plants;
  