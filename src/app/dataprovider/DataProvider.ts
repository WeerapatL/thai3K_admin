export class Product {
    ProductNo: number;
    ProductCode: string;
    ProductName: string;
    ProductNameEng: string;
    ProductDesc: string;
    ProductImgPath: string;
    ProductCategoryID: number;
    ProductCategory: string;
    ProductBrand: string;
    TableHead1: string;
    TableHead2: string;
    TableHead3: string;
    TableHead4: string;
    TableHead5: string;
    TableHead6: string;
    TableHead7: string;
    TableHead8: string;
    TableDetail: TableDetail[] = [];

}
export class TableDetail {
    TableDetailNo: number;
    TableDetail1: string;
    TableDetail2: string;
    TableDetail3: string;
    TableDetail4: string;
    TableDetail5: string;
    TableDetail6: string;
    TableDetail7: string;
    TableDetail8: string;
    ProductNo: number;
}
export class Account {
    AccountNo: number;
    Username: string;
    Password: string;
}
export class Company {
    CompanyNo: number;
    CompanyName: string;
    CompanyDesc: string;
    Email: string;
    Tel: string;
    Facebook: string;
    Line: string;
    Address: string;
    QRCode: string
}

export class Category {
    brand = [
        {
            name:'KANOK Products',
            category: [{Catname:'วาล์วน้ำ',Value:9} , {Catname:'สายส่งน้ำ / ตัวกรองน้ำ',Value:10} , {Catname:'หัวฉีด / สปริงเกอร์',Value:11},{Catname:'เครื่องตั้งเวลารดน้ำ',Value:12},{Catname:'ท่อ',Value:13},{Catname:'อะไหร่ปั๊ม',Value:14},{Catname:'อุปกรณ์ตกแต่งสวน / หมวกนิรภัย',Value:15}]
        },
        {
            name: 'Nano Electrics',
            category: [{Catname:'กล่อง / ตู้กันน้ำพลาสติก',Value:16}, {Catname:'แผงไฟฟ้าพลาสติก',Value:17}, {Catname:'สายเคเบิล / รางพลาสติกเก็บสาย',Value:18},{Catname: 'ท่อ / ข้อต่อ',Value:19}]
        },
        {
            name:'Zeberg',
            category: [{Catname:'ปลั๊ก / สวิตช์',Value:1}, {Catname:'สะพานไฟ / วงจร / เบรคเกอร์',Value:2}, {Catname:'สายเคเบิล',Value:3}, {Catname:'มิเตอร์ไฟฟ้า / ฉนวนไฟฟ้า',Value:4},{Catname: 'พัดลม',Value:5} ,{Catname:'ท่อพีวีซี',Value:6}, {Catname:'หลอดไฟ / ฟิวส์ / ไซเรน',Value:7},{Catname:'ปั้มน้ำ',Value:8}]
        }
    ]
}
