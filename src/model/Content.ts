import XmlDeserializationHelper from "./deserialization/XmlDeserializationHelper";
import { FieldType } from "./deserialization/FieldType";

export default class Content{
    readonly key : string;
    readonly lastModified : Date;
    readonly eTag : string;
    readonly size : number;
    readonly storageClass : string;

    constructor(key : string, lastModified : Date, eTag : string, size : number, storageClass : string){
        this.key = key;
        this.lastModified = lastModified;
        this.eTag = eTag;
        this.size = size;
        this.storageClass = storageClass;
    }

    getName = () => {
        const splitKey = this.key.split("/").filter(x => x.length > 0);
        return splitKey[splitKey.length-1];
    }

    static deserialize = (xml : Element) => {
        const key = XmlDeserializationHelper.assertField(xml, "Key", FieldType.STRING);
        const lastModified = XmlDeserializationHelper.assertField(xml, "LastModified", FieldType.DATE);
        const eTag = XmlDeserializationHelper.assertField(xml, "ETag", FieldType.STRING);
        const size = XmlDeserializationHelper.assertField(xml, "Size", FieldType.NUMBER);
        const storageClass = XmlDeserializationHelper.assertField(xml, "StorageClass", FieldType.STRING);

        return new Content(key, lastModified, eTag, size, storageClass);
    }
}

export const MOCK_CONTENT = new Content(
    "rootObject.pdf",
    new Date(),
    "",
    60000,
    "StorageClass"
)