const content = {
    free: {
        src: 'https://images.unsplash.com/photo-1602590759575-5dfa7970bb77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
        alt: 'mount okuhotaka',
        credit: 'Sora Sagano',
        creditLink: 'https://unsplash.com/photos/g28g_PXBLRk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
        message: 'To view this content you need to create an account.',
        allowedRoles: ['free', 'premium'],
    },
    premium: {
        src: 'https://images.unsplash.com/photo-1480771956109-c15c8d72172d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'night sky',
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