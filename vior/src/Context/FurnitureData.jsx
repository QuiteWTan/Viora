import faker from 'faker'

export const bathroomFurniture = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement(),
    fastDelivery: faker.random.boolean(),
    ratings: faker.random.arrayElement()
}))

export const bedroomFurniture = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement(),
    fastDelivery: faker.random.boolean(),
    ratings: faker.random.arrayElement()
}))

export const livingroomFurniture = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement(),
    fastDelivery: faker.random.boolean(),
    ratings: faker.random.arrayElement()
}))

export const kitchenFurniture = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement(),
    fastDelivery: faker.random.boolean(),
    ratings: faker.random.arrayElement()
}))

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

export default getData;