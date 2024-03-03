import exp from "node:constants";

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1c42982e5emsh828fc5906df3368p11059fjsna96a227f2bf0',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '1c42982e5emsh828fc5906df3368p11059fjsna96a227f2bf0',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`, {
        headers
    });

    const result = await response.json();

    return result;
}