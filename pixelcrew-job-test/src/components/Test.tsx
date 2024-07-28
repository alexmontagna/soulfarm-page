import React, { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const Test: React.FC = () => {
    const [data, setData] = useState<User[] | null>(null);

    useEffect(() => {
        console.clear();
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
    
    const replacer = (key: string, value: any) => {
        if (typeof value === 'string') {
            return value.toUpperCase();
        }
        return value;
    };

    return (
        <>
            {
                data?.map(each => (
                    <pre key={each.id}>{JSON.stringify(each, replacer, 12)}</pre>
                ))
            }
        </>
    )
}

export default Test;
