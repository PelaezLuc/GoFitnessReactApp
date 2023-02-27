export const getAllWorkoutsService = async ({token}) => {

    const response = await fetch(`${process.env.REACT_APP_BACKEND}/workout`, {
        headers: {
            'Authorization': token,
        }
    });
    
    const json = await response.json();

    if(!response.ok) {
        throw new Error (json.message);
    }

    
   
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

    const user = {
        'token': json.authToken,
        'userRole': json.userInfo.role
    };

    if(!response.ok) {
        throw new Error (json.message);
    }

    return user
}

export const addWorkoutService = async ({name, type, description, muscle_group, token}) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/addWorkout`, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, type, description, muscle_group}),
    });

    console.log(token);
    const json = await response.json();

    if(!response.ok) {
        throw new Error (json.message);
    }
    return json.data
}

export const likeWorkoutService = async ({id, token}) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/workouts/${id}/like`, {
        method: 'PUT',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    });

    const json = await response.json();

    if(!response.ok) {
        throw new Error (json.message); 
    }

    return json.data
}


export const dislikeWorkoutService = async ({id, token}) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/workouts/${id}/dislike`, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    });

    const json = await response.json();

    if(!response.ok) {
        throw new Error (json.message); 
    }

    return json.data
}

export const getAllLikesService = async () => {
    
}