import { FieldType } from "./deserialization/FieldType";
import XmlDeserializationHelper from "./deserialization/XmlDeserializationHelper";

export default class CommonPrefixe{
    readonly prefix : string;

    constructor(prefix : string){
        this.prefix = prefix;
    }

    getName = () => {
        const splitPrefix = this.prefix.split("/");
        return splitPrefix[splitPrefix.length-1];
    }

    static deserialize = (xml : Element) => {
        const prefix = XmlDeserializationHelper.assertField(xml, "prefix", FieldType.STRING);

        return new CommonPrefixe(prefix);
    }
}