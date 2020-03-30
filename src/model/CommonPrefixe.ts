import { FieldType } from "./deserialization/FieldType";
import XmlDeserializationHelper from "./deserialization/XmlDeserializationHelper";

export default class CommonPrefixe{
    readonly prefix : string;

    constructor(prefix : string){
        this.prefix = prefix;
    }

    getName = () => {
        const splitPrefix = this.prefix.split("/").filter(x => x.length > 0);
        return splitPrefix[splitPrefix.length-1] + "/";
    }

    static deserialize = (xml : Element) => {
        const prefix = XmlDeserializationHelper.assertField(xml, "Prefix", FieldType.STRING);

        return new CommonPrefixe(prefix);
    }
}

export const MOCK_COMMON_PREFIXE = new CommonPrefixe("folder/");