import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import PostCard from '../../Shared/PostCard/PostCard';

const TopPosts = () => {

    const { data: posts = [], refetch, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('https://socialinked.vercel.app/topPosts');
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
                <div className='grid gap-6 mx-5 md:mx-60 grid-cols-1 '>
                    {
                        posts.map( post => <PostCard
                            key={PostCard._id}
                            post={post}
                            refetch={refetch}
                        ></PostCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default TopPosts;