import CommonPrefixe, { MOCK_COMMON_PREFIXE } from "./CommonPrefixe";
import Content, { MOCK_CONTENT } from "./Content";
import { FieldType } from "./deserialization/FieldType";
import XmlDeserializationHelper from "./deserialization/XmlDeserializationHelper";

export default class ListBucketResult{
    readonly name : string;
    readonly prefix : string;
    readonly marker : string;
    readonly maxKeys : number;
    readonly isTruncated : boolean;

    readonly contents : Content[];
    readonly commonPrefixes : CommonPrefixe[];

    constructor(name : string, prefix : string, marker : string, maxKeys : number, isTruncated : boolean, contents : Content[], commonPrefixes : CommonPrefixe[]){
        this.name = name;
        this.prefix = prefix;
        this.marker = marker;
        this.maxKeys = maxKeys;
        this.isTruncated = isTruncated;
        this.contents = contents;
        this.commonPrefixes = commonPrefixes;
    }

    static deserialize = (xml : Element) => {
        const name = XmlDeserializationHelper.assertField(xml, "Name", FieldType.STRING);
        const prefix = XmlDeserializationHelper.assertField(xml, "Prefix", FieldType.STRING);
        const marker = XmlDeserializationHelper.assertField(xml, "Marker", FieldType.STRING);
        const maxKeys = XmlDeserializationHelper.assertField(xml, "MaxKeys", FieldType.NUMBER);
        const isTruncated = XmlDeserializationHelper.assertField(xml, "IsTruncated", FieldType.BOOLEAN);

        const contents = XmlDeserializationHelper.assertArray(xml, "Contents", Content.deserialize);
        const commonPrefixes = XmlDeserializationHelper.assertArray(xml, "CommonPrefixes", CommonPrefixe.deserialize);

        return new ListBucketResult(name, prefix, marker, maxKeys, isTruncated, contents, commonPrefixes);
    }
}

export const MOCK_LIST_BUCKET_RESULT = new ListBucketResult(
    "Mock Bucket",
    "",
    "",
    1000,
    false,
    [MOCK_CONTENT],
    [MOCK_COMMON_PREFIXE]
)