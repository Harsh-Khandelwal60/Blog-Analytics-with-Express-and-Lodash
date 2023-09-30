import mongoose from 'mongoose';
import axios from 'axios';
import curl from 'curl';




export const middleware1 = (req, res, next) => {
    try {
        const header = {'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'};

        curl.get('https://intent-kit-16.hasura.app/api/rest/blogs/',{
            headers: {'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'}},(error, response, body) => {
            if (error) {
                next(error);
            } else {
                const data = JSON.parse(body);
               res.status(response.statusCode).json(data);
                next(data.error);
            }
        });
    } catch (error) {
        console.log(error);
    }
    next();
}

export const fetchData  = (req, res, next) => {

}