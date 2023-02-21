export const getAllWorkoutsService = async () => {

    const response = await fetch(`${process.env.REACT_APP_BACKEND}/workout`);
    
    const json = await response.json();

    if(!response.ok) {
        throw new Error (json.message);
    }

    console.log(JSON.stringify(json));
   
    return json.workouts;
};

export const registerUserService = async ({name, email, password}) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password}),
    });

    const json = await response.json();

    if(!response.ok) {
        throw new Error (json.message);
    }
    return json.data
}

export const loginUserService = async ({email, password}) => {
    
    const response = await fetch (`${process.env.REACT_APP_BACKEND}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({email, password}),
    });

    const json = await response.json();

    console.log(json);

    if(!response.ok) {
        throw new Error (json.message);
    }
    return json.data
}