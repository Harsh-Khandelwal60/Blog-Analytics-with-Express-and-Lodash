import mongoose from 'mongoose';
import axios from 'axios';
import curl from 'curl'; 
import _ from 'lodash';
import Blog from '../Models/blogs.js';





export const fetchData = (req, res, next) => {
    try {
        curl.get('https://intent-kit-16.hasura.app/api/rest/blogs/', {
            headers: {
                'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
            }
        },(error, response, body) => {
            if (error) {
                next(error);
            } else {
                try {
                    const responseBody = JSON.parse(body);

                    
                    if (responseBody.error && responseBody.error.code === 'access-denied') {
                        res.status(403).json({ error: 'Access denied' });
                    }
                    _.map(responseBody.blogs, async (blogs) => {
                        const newBlog = new Blog(blogs);
                        await newBlog.save()
                    });
                    const blogSize = _.size(responseBody.blogs);
                    

                    const blogWithLongestTitle = _.maxBy(responseBody.blogs, blog => _.size(blog.title));
                    
                    const blogsWithPrivacy = _.filter(responseBody.blogs, blog => _.includes(blog.title.toLowerCase(), 'privacy'));
                    const numberOfBlogsWithPrivacy = blogsWithPrivacy.length;
                
                    const uniqueBlogTitles = _.uniqBy(responseBody.blogs, 'title').map(blog => blog.title);
                    const uniqueBlogTitlesSize = _.size(uniqueBlogTitles);
                    const answer = {blogSize, blogWithLongestTitle, numberOfBlogsWithPrivacy,uniqueBlogTitlesSize };
                    res.status(response.statusCode).json(answer)
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




