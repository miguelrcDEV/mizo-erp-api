/* import { lstatSync, readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const getModelFiles = source => readdirSync(source).map(name => join(source, name));

const modelFiles = getModelFiles('./models/');

let models = {};

modelFiles.forEach(modelFile => {
    let model = modelFile.replace('models/', '');
    //model = model.replace('models\\', '');//For windows

    try {
        const modelPath = `./${model}`;
        let modelDefinition = require(modelPath);

        models = {
            ...models,
            [model]: modelDefinition
        };

    } catch (error) {
        console.error(`MODEL ${model} NOT LOADED`);
        console.error(error);
        throw Error(error);
    }
}); */
import Translation from './Translation';
import CompanyEmployee from './CompanyEmployee';
import Customer from './Customer';
import Product from './Product';
import Category from './Category';
import Order from './Order';
import Part from './Part';

const models = {
    Translation: Translation,
    CompanyEmployee: CompanyEmployee,
    Customer: Customer,
    Product: Product,
    Category: Category,
    Order: Order,
    Part: Part
}

export default models;