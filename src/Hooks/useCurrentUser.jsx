// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const useCurrentUser = (email) => {
//     // https://socialinked.vercel.app/users?email=nazrul@gmail.com
    
//     const [currentUser, setCurrentUser] = useState("");
//     const [isCurrentUserLoading, setIsCurrentUserLoading] = useState(true);

//     useEffect(() => {
//         fetch(`https://socialinked.vercel.app/users?email=${email}`)
//         .then((res) => res.json())
//         .then((data) => {
//             if (data) {
//                 setCurrentUser(data);
//                 setIsCurrentUserLoading(false);
//             }
//         });
//     }, [email])

//     return [currentUser, isCurrentUserLoading];
// };

// export default useCurrentUser;



import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const useCurrentUser = (email) => {
    
    const { data: currentUser = {}, refetch, isLoading } = useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            const res = await fetch(`https://socialinked.vercel.app/users?email=${email}`);
            const data = await res.json();
            return data;
        }
    })

    const isCurrentUserLoading = isLoading;

    return [currentUser, refetch, isCurrentUserLoading];
};

export default useCurrentUser;
