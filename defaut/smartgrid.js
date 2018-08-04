const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '10px',
    container: {
        maxWidth: '1212px',
        fields: '20px'
    },
    breakPoints: {
        md: {
            width: "992px",
            fields: "25px"
        },
        sm: {
            width: "720px",
            fields: "20px"
        },
        xs: {
            width: "576px",
            fields: "10px"
        },
        xxs: {
            width: "400px",
            fields: "10px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('./src/less/libs', settings);