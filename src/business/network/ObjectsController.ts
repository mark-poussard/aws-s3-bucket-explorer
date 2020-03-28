import Settings from "../../Settings";

class ObjectsController{
    get = (prefix : string) => {
        fetch(Settings.S3_URL + `?delimiter=/&prefix=${prefix}`)
            .then()
    }
}
export default new ObjectsController();