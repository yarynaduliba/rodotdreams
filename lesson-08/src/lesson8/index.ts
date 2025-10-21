import { AbstractQuadrangle } from './abstractions/abstract-classes.ts/adstract-quadrangle';
import { IQuadrangle } from './abstractions/interfaces/quadrangle';
import { Rectangle, RectangleWithInfo } from './implementations/rectangle';
import { Square } from './implementations/square';
import { ApiObject, IApiObjectDto } from './models/index';


async function getApiObjectsData(): Promise<IApiObjectDto[]> {
    const response = await fetch('https://api.restful-api.dev/objects');
    const json = await response.json();
    return json as IApiObjectDto[];
}

async function getApiObjectsDataAsObjectWithClass(): Promise<ApiObject[]> {
    const response = await fetch('https://api.restful-api.dev/objects');
    const json = await response.json();
    return (json as Record<string, unknown>[]).map((row) => new ApiObject(row));
}

function getQuadrengleInfo(quadrengle: IQuadrangle): string{
    return `Perimeter is ${quadrengle.getPerimeter()} and Area is ${quadrengle.getArea()}`;

}

function getQuadrengleInfoFromAbstract(quadrengle: AbstractQuadrangle): string{
    return `Perimeter is ${quadrengle.getPerimeter()} and Area is ${quadrengle.getArea()}`;

}


(async () => {
    const apiObjects = await getApiObjectsData();
    const notNullApiObjects = apiObjects.filter((apiObject) => apiObject.data !== null);
    const objectWithCapacity = notNullApiObjects.filter((apiObject) => apiObject.data?.capacity);
    console.log(objectWithCapacity);

    console.log('-------------------------');

    const apiObjectWithClass = await getApiObjectsDataAsObjectWithClass();
    // const filtredObjects = apiObjectWithClass.filter((apiObject) => apiObject.data !== null && apiObject.data?.capacity);
    const filtredObjects = apiObjectWithClass.filter((apiObject) => apiObject.hasCapacityGB);
    console.log(filtredObjects);

    console.log('-------------------------');

    apiObjectWithClass.forEach((apiObject) => console.log(apiObject.getSummary));
})();

const rectangle = new Rectangle(2, 4);
const square = new Square(5);
console.log(getQuadrengleInfo(rectangle));
console.log(getQuadrengleInfo(square));

const rectangle2 = new Rectangle(3, 6);
const square2 = new Square(7);
console.log(getQuadrengleInfoFromAbstract(rectangle2));
console.log(getQuadrengleInfoFromAbstract(square2));

const extendedRectangle = new RectangleWithInfo(4, 5);
console.log(extendedRectangle.getSummary());
