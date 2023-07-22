import { faker } from "@faker-js/faker";

export const createRandomProducts = () => {
    return {
        productId: faker.database.mongodbObjectId(),
        code: faker.datatype.uuid(),
        price: faker.commerce.price(50, 9000, 0, '$'),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        stock: faker.datatype.number({ min: 0, max: 100, precision: 1 }),
        img: faker.image.transport()
    }
}