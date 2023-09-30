import mongoose from 'mongoose';
import axios from 'axios';
import curl from 'curl'; 
import _ from 'lodash';





export const middleware1 = (req, res, next) => {
    try {
        curl.get('https://intent-kit-16.hasura.app/api/rest/blogs/', {
            headers: {
                'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
            }
        }, (error, response, body) => {
            if (error) {
                next(error);
            } else {
                try {
                    const {blogs} = JSON.parse(body);
                    const size = _.size(blogs);
                    

                    const blogWithLongestTitle = _.maxBy(blogs, blog => _.size(blog.title));
                    
                    const blogsWithPrivacy = _.filter(blogs, blog => _.includes(blog.title.toLowerCase(), 'privacy'));
                    const numberOfBlogsWithPrivacy = blogsWithPrivacy.length;
                
                    const uniqueBlogTitles = _.uniqBy(blogs, 'title').map(blog => blog.title);
                } catch (Error) {
                    next(Error);
                }
            }
        });
    } catch (error) {
        console.log(error);
        next(error); 
    }
};
