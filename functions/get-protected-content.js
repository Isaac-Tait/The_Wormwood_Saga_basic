const content = {
    free: {
        src: 'https://unsplash.com/photos/g28g_PXBLRk',
        alt: 'Mt. Okuhotaka',
        credit: 'Sora Sagano',
        creditLink: 'https://unsplash.com/photos/g28g_PXBLRk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
        message: 'To view this content you need to create an account.',
        allowedRoles: ['free', 'premium'],
    },
    premium: {
        src: 'https://unsplash.com/photos/WA-QRL5wDMw',
        alt: 'Night Sky',
        credit: 'Sora Sagano',
        creditLink: 'https://unsplash.com/photos/g28g_PXBLRk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
        message: 'This is protected content. It is only available if you have a premium plan',
        allowedRoles: ['premium'],
    },
};

exports.handler = async (event) => {
    const { type } = JSON.parse(event.body);
    
    return {
        statusCode: 200,
        body: JSON.stringify(content[type])
    };
};