import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useCurrentUser = (email) => {
    // https://socialinked.vercel.app/users?email=nazrul@gmail.com
    
    const [currentUser, setCurrentUser] = useState("");
    const [isCurrentUserLoading, setIsCurrentUserLoading] = useState(true);

    useEffect(() => {
        fetch(`https://socialinked.vercel.app/users?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                setCurrentUser(data);
                setIsCurrentUserLoading(false);
            }
        });
    }, [email])

    return [currentUser, isCurrentUserLoading];
};

export default useCurrentUser;


// const useBuyer = (email) => {
//   const [isBuyer, setIsBuyer] = useState(false);
//   const [isBuyerLoading, setIsBuyerLoading] = useState(true);

//   useEffect(() => {
//     if (email) {
//       fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/users/buyer/${email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data) {
//             setIsBuyer(data.isBuyer);
//             setIsBuyerLoading(false);
//           }
//         });
//     }
//   }, [email]);
//   return [isBuyer, isBuyerLoading];
// };

// export default useBuyer;
