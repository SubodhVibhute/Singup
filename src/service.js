import axios from 'axios'
const BASE_API_URL="http://localhost:800"

class service{
delete(id)
    {
        return axios.delete(BASE_API_URL+"/delete/"+id);
    }
}
export default new service();