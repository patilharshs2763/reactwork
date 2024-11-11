import React from 'react'

const Object = () => {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png',
        imageSize: 90,
    };
    return (
        <div>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </div>
    )
}

export default Object
