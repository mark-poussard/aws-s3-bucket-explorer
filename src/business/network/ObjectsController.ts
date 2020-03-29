import Settings from "../../Settings";
import ListBucketResult from "../../model/ListBucketResult";

class S3NavigationController{
    get = (prefix : string) => {
        return fetch(Settings.S3_URL + `?delimiter=/&prefix=${prefix}`)
            .then(response => response.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
            .then(doc => doc.body)
            .then(ListBucketResult.deserialize)
    }
}
export default new S3NavigationController();