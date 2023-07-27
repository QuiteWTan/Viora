import faker from 'faker'
import Product1 from '../assets/Product/Product1.png'
import Product2 from '../assets/Product/Product2.png'
import Product3 from '../assets/Product/Product3.jpg'
import Product4 from '../assets/Product/Product4.png'
import Product5 from '../assets/Product/Product5.png'

// Use Later Maybe
export const UseData = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement(),
    fastDelivery: faker.random.boolean(),
    ratings: faker.random.arrayElement()
}))

const fetchDataAPI = () =>{
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            'https://api.escuelajs.co/api/v1/products/',
            {
              params: {
                price_min: 100,
                price_max: 1000,
                offset: 10,
                limit: 10,
              },
            }
          );
  
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
}

// Manual Dummy Data
export const BathroomFurnitureData = [
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 1',
    Image:Product1,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),   
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 2',
    Image:Product2,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),  
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 3',
    Image:Product3,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),   
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 4',
    Image:Product4,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),   
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 5',
    Image:Product5,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),  
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 6',
    Image:Product1,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),   
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 7',
    Image:Product2,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),   
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 8',
    Image:Product3,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),   
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 9',
    Image:Product4,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),  
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 10',
    Image:Product5,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),   
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 11',
    Image:Product1,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(), 
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]), 
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 12',
    Image:Product2,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),  
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 13',
    Image:Product3,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),   
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 14',
    Image:Product4,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(), 
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),  
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 15',
    Image:Product5,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),   
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 16',
    Image:Product1,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),  
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 17',
    Image:Product2,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),   
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 18',
    Image:Product3,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),   
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Name:'Chair 19',
    Image:Product4,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),  
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    Type: 'Bathroom',
    Type: 'Bathroom',
    Name:'Chair 20',
    Image:Product5,
    price: faker.commerce.price(), 
    fastDelivery: faker.random.boolean(),   
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },


]
  


const getData = (furnitureValue) =>{
    if( furnitureValue === 'kitchen'){
        return kitchenFurniture;
    }else if(furnitureValue === 'living room'){
        return livingroomFurniture;
    }else if(furnitureValue === 'bathroom'){
        return bathroomFurniture;
    }else if(furnitureValue === 'bedroom'){
        return bedroomFurniture;
    }
}

export default getData;