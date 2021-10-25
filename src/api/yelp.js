import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer A7ZGC6mVrsm4J1eKCrhllZO4ID6A4wCc-eSe9tdU3QMBcbrBCwRrITxyvwFbwQH0f2SzfO_gRn4cxCA50dShwGoAcJP1hYjXPNoNSmVsyBJt7ALMrrUdDfrFjQxyYXYx'
    }
})

