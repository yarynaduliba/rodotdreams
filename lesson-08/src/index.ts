import { ObjectApi, ObjectShortInfo } from './API/api-object-class';
import { Cats, SiameseСat } from './implementations/cat';


const cat = new Cats('Markiza', 4, 'Myaooo', false);
cat.howDanger('Markiza', false);
cat.howQuick(3);
cat.whatName('Markiza');
const say = cat.whatSay('myaooo');
console.log(`Animal says ${say}`);

const specificCat = new SiameseСat('Hryusha', 10, 'Mi-Mi', true);
console.log(specificCat.getInfo());

async function getObjectApiAsObjectWithClass(): Promise<ObjectApi[]> {
    const response = await fetch ('https://api.restful-api.dev/objects');
    const json = await response.json();
    return (json as Record<string, unknown>[]).map((row) => new ObjectApi(row));
}

async function getObjectFromAnotherObject(): Promise<void> {
    const object = await getObjectApiAsObjectWithClass();
    const shortInfos = object.map((obj) => new ObjectShortInfo(obj));

    console.log('Short info about objects: ');
    shortInfos.forEach((info) => console.log(`${info.summary} - ${info.priceInfo}`));
}


(async () => {
    const objectApiWithClass = await getObjectApiAsObjectWithClass();
    const filtered = objectApiWithClass.filter((objectApi) => objectApi.data?.year);
    console.log(filtered);
    console.log('------------------------');
    await getObjectFromAnotherObject();
})();
