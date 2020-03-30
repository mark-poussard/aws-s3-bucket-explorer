import Settings from "../../Settings";
import ListBucketResult, { MOCK_LIST_BUCKET_RESULT } from "../../model/ListBucketResult";
import Environment from "../../Environment";

class S3NavigationController{
    private username : string;
    private password : string;
    private authenticateRequests : boolean;

    constructor(){
        this.username = "";
        this.password = "";
        this.authenticateRequests = false;
    }

    doAuthenticatedRequests = (username : string, password : string) => {
        this.username = username;
        this.password = password;
        this.authenticateRequests = true;
    }

    noAuthenticatedRequests = () => {
        this.username = "";
        this.password = "";
        this.authenticateRequests = false;
    }

    get = (prefix : string) => {
        if(!Environment.isProd()){
            return Promise.resolve(MOCK_LIST_BUCKET_RESULT)
        }
        const headers = new Headers();
        if(this.authenticateRequests){
            headers.append('Authorization', 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64'));
        }
        return fetch(Settings.S3_URL + `?delimiter=/&prefix=${prefix}`,
            {
                method : "GET",
                headers
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
            .then(doc => doc.getElementsByTagName("ListBucketResult")[0])
            .then(ListBucketResult.deserialize)
    }
}
export default new S3NavigationController();