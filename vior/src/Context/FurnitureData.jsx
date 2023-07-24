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

export default getData;