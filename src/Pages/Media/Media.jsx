import React, { useState } from 'react';
import PostCard from '../Shared/PostCard/PostCard';
import CreatePost from '../../Pages/Home/CreatePost/CreatePost';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';

const Media = () => {

    const { data: posts = [], refetch, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('https://socialinked.vercel.app/posts');
            const data = await res.json();
            return data;
        }
    })

    // const [posts, setPosts] = useState([]);

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <section>
            <div>
                <CreatePost></CreatePost>
                <div className='grid gap-6 mx-5 md:mx-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        posts.map( post => <PostCard
                            key={PostCard._id}
                            post={post}
                        ></PostCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Media;