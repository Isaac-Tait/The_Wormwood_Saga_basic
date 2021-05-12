const content = {
    free: {
        src: 'https://mountaintop-coding.s3-us-west-1.amazonaws.com/wormwood/free.jpg',
        alt: 'minaret lake',
        credit: 'Isaac Tait',
        creditLink: 'https://mountaintopcoding.dev',
        message: 'To view this content you need to create an account. ',
        allowedRoles: ['free', 'premium'],
    },
    premium: {
        src: 'https://mountaintop-coding.s3-us-west-1.amazonaws.com/wormwood/premium.jpg',
        alt: 'cecile lake',
        credit: 'Isaac Tait',
        creditLink: 'https://mountaintopcoding.dev',
        message: 'This is protected content. It is only available if you have a premium plan. ',
        allowedRoles: ['premium'],
    },
};

exports.handler = async (event, context) => {
    const { type } = JSON.parse(event.body);
    const { user } = context.clientContext;
    const roles = user ? user.app_metadata.roles : false;
    const { allowedRoles } = content[type];

    if (!roles || !roles.some((role) => allowedRoles.includes(role))) {
        return {
            statusCode: 402,
            body: JSON.stringify({
                src: 'https://mountaintop-coding.s3-us-west-1.amazonaws.com/wormwood/subscription+required.jpg',
                alt: 'iceberg lake',
                credit: 'Isaac Tait',
                creditLink: 'https://mountaintopcoding.dev',
                message: `This content requires a ${type} subscription. `, 
            }),
        };
    }
    
    return {
        statusCode: 200,
        body: JSON.stringify(content[type])
    };
};