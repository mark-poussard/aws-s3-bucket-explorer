import { FieldType } from "./deserialization/FieldType";
import XmlDeserializationHelper from "./deserialization/XmlDeserializationHelper";

export default class CommonPrefixe{
    readonly prefix : string;

    constructor(prefix : string){
        this.prefix = prefix;
    }

    static deserialize = (xml : Element) => {
        const prefix = XmlDeserializationHelper.assertField(xml, "prefix", FieldType.STRING);

        return new CommonPrefixe(prefix);
    }
}