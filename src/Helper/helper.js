import axios from 'axios'

/** get server data */
export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}